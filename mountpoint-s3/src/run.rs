use std::ffi::OsString;
use std::fs::File;
use std::io::{Read, Write};
use std::os::fd::AsRawFd;
use std::sync::Arc;
use std::time::Duration;
use std::{env, fs};

use crate::cli::CliArgs;
use crate::{build_info, parse_cli_args};
use anyhow::{Context as _, anyhow};
use aws_config::default_provider::credentials::DefaultCredentialsChain;
use aws_sdk_s3::config::BehaviorVersion;
use aws_sdk_s3::config::Region;
use mountpoint_s3_client::config::{AccessGrantsProviderConfig, Allocator};
use mountpoint_s3_client::config::{CredentialsProvider, S3ClientAuthConfig};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::data_cache::{DataCacheConfig, ManagedCacheDir};
use mountpoint_s3_fs::fuse::session::FuseSession;
use mountpoint_s3_fs::logging::init_logging;
use mountpoint_s3_fs::s3::S3Personality;
use mountpoint_s3_fs::{MountpointConfig, Runtime, metrics};
use nix::sys::signal::Signal;
use nix::unistd::ForkResult;
use tokio::runtime::Handle;

/// Run Mountpoint with the given [CliArgs].
pub async fn run<ClientBuilder, Client>(
    client_builder: impl FnOnce(CliArgs) -> ClientBuilder,
    args: CliArgs,
) -> anyhow::Result<()>
where
    ClientBuilder: Future<Output = anyhow::Result<(Client, Runtime, S3Personality)>>,
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let successful_mount_msg = format!(
        "{} is mounted at {}",
        args.bucket_description()?,
        args.mount_point.display()
    );

    if args.foreground {
        let _logging = init_logging(args.make_logging_config()).context("failed to initialize logging")?;

        let _metrics = metrics::install();

        create_pid_file()?;

        // mount file system as a foreground process
        let session = mount(args, client_builder).await?;

        println!("{successful_mount_msg}");

        session.join().context("failed to join session")?;
    } else {
        // mount file system as a background process

        // create a pipe for interprocess communication.
        // child process will report its status via this pipe.
        let (read_fd, write_fd) = nix::unistd::pipe().context("Failed to create a pipe")?;

        // Prepare logging configuration up front, so the values are shared between the two processes.
        let logging_config = args.make_logging_config();

        // Don't share args across the fork. It should just be plain data, so probably fine to be
        // copy-on-write, but just in case we ever add something more fancy to the struct.
        drop(args);

        // SAFETY: Child process has full ownership of its resources.
        // There is no shared data between parent and child processes other than logging configuration.
        let pid = unsafe { nix::unistd::fork() };
        match pid.expect("Failed to fork mount process") {
            ForkResult::Child => {
                let args = parse_cli_args(false);
                let _logging = init_logging(logging_config).context("failed to initialize logging")?;

                let _metrics = metrics::install();

                create_pid_file()?;

                let session = mount(args, client_builder).await;

                // close unused file descriptor, we only write from this end.
                drop(read_fd);

                let mut pipe_file = File::from(write_fd);

                let status_success = [b'0'];
                let status_failure = [b'1'];

                match session {
                    Ok(session) => {
                        tracing::trace!("FUSE session created OK, sending message back to parent process");
                        pipe_file
                            .write(&status_success)
                            .context("Failed to write data to the pipe")?;
                        drop(pipe_file);
                        tracing::trace!("message sent back to parent process");

                        // Logging is set up and the mount succeeded, so we can hang up
                        // stdin/out/err now to cleanly daemonize ourselves
                        nix::unistd::close(std::io::stdin().as_raw_fd()).context("couldn't close stdin")?;
                        nix::unistd::close(std::io::stdout().as_raw_fd()).context("couldn't close stdout")?;
                        nix::unistd::close(std::io::stderr().as_raw_fd()).context("couldn't close stderr")?;

                        session.join().context("failed to join session")?;
                    }
                    Err(e) => {
                        tracing::trace!("FUSE session creation failed, sending message back to parent process");
                        pipe_file
                            .write(&status_failure)
                            .context("Failed to write data to the pipe")?;
                        tracing::trace!("message sent back to parent process");
                        return Err(anyhow!(e));
                    }
                }
            }
            ForkResult::Parent { child } => {
                let _logging = init_logging(logging_config).context("failed to initialize logging")?;

                // close unused file descriptor, we only read from this end.
                drop(write_fd);

                let mut pipe_file = File::from(read_fd);

                let (sender, receiver) = std::sync::mpsc::channel();

                // create a thread that read from the pipe so that we can enforce a time out.
                std::thread::spawn(move || {
                    let mut buf = [0];
                    match pipe_file
                        .read_exact(&mut buf)
                        .context("Failed to read data from the pipe")
                    {
                        Ok(_) => {
                            let status = buf[0] as char;
                            sender.send(status).unwrap();
                        }
                        Err(_) => sender.send('1').unwrap(),
                    }
                });

                let timeout = Duration::from_secs(30);
                tracing::debug!(
                    "waiting up to {} seconds for child process to be ready",
                    timeout.as_secs(),
                );
                let status = receiver.recv_timeout(timeout);
                match status {
                    Ok('0') => {
                        println!("{successful_mount_msg}");
                        tracing::debug!("success status flag received from child process")
                    }
                    Ok(_) => {
                        nix::sys::wait::waitpid(child, None).context("Failed to wait for child process to exit")?;
                        return Err(anyhow!("Failed to create mount process"));
                    }
                    Err(_timeout_err) => {
                        tracing::error!(
                            "timeout after {} seconds waiting for message from child process",
                            timeout.as_secs(),
                        );
                        // kill child process before returning error.
                        if let Err(e) = nix::sys::signal::kill(child, Signal::SIGTERM) {
                            tracing::error!("Unable to kill hanging child process with SIGTERM: {:?}", e);
                        }
                        return Err(anyhow!(
                            "Timeout after {} seconds while waiting for mount process to be ready",
                            timeout.as_secs()
                        ));
                    }
                };
            }
        }
    }

    Ok(())
}

async fn mount<ClientBuilder, Client>(
    args: CliArgs,
    client_builder: impl FnOnce(CliArgs) -> ClientBuilder,
) -> anyhow::Result<FuseSession>
where
    ClientBuilder: Future<Output = anyhow::Result<(Client, Runtime, S3Personality)>>,
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    tracing::info!("mount-s3 {}", build_info::FULL_VERSION);
    tracing::debug!("{:?}", args);

    let fuse_session_config = args.fuse_session_config()?;
    let sse = args.server_side_encryption()?;

    let (client, runtime, s3_personality) = client_builder(args.clone()).await?;

    let bucket_description = args.bucket_description()?;
    tracing::debug!("using S3 personality {s3_personality:?} for {bucket_description}");

    let s3_path = args.s3_path()?;
    let filesystem_config = args.filesystem_config(sse.clone(), s3_personality);
    let mut data_cache_config = args.data_cache_config(sse)?;

    let managed_cache_dir = setup_disk_cache_directory(&mut data_cache_config)?;

    tracing::debug!(?fuse_session_config, "creating fuse session");
    let mount_point_path = format!("{}", fuse_session_config.mount_point());

    let mut fuse_session = MountpointConfig::new(fuse_session_config, filesystem_config, data_cache_config)
        .create_fuse_session(s3_path, client, runtime)?;
    tracing::info!("successfully mounted {} at {}", bucket_description, mount_point_path);

    if let Some(managed_cache_dir) = managed_cache_dir {
        fuse_session.run_on_close(Box::new(move || {
            drop(managed_cache_dir);
        }));
    }
    Ok(fuse_session)
}

/// Create a real S3 client
pub async fn create_s3_client(args: CliArgs) -> anyhow::Result<(S3CrtClient, Runtime, S3Personality)> {
    let mut client_config = args.client_config(build_info::FULL_VERSION);
    let s3_path = args.s3_path()?;

    if let Some(access_grants_provider_config) = &client_config.access_grants_config {
        let access_grants_provider =
            create_access_grants_config(access_grants_provider_config, client_config.region.to_string()).await?;
        client_config.auth_config = S3ClientAuthConfig::Provider(access_grants_provider);
    }

    let client = client_config
        .create_client(Some(&s3_path))
        .await
        .context("Failed to create S3 client")?;

    let runtime = Runtime::new(client.event_loop_group());
    let s3_personality = args
        .personality()
        .unwrap_or_else(|| S3Personality::infer_from_bucket(&s3_path.bucket_name, &client.endpoint_config()));

    Ok((client, runtime, s3_personality))
}

async fn create_access_grants_config(
    access_grants_config: &AccessGrantsProviderConfig,
    region: String,
) -> anyhow::Result<CredentialsProvider> {
    // TODO: Ideally we don't use Allocator outside of the Mountpoint client
    let allocator = Allocator::default();

    // TODO: Default credentials provider
    let source_credentials_provider = DefaultCredentialsChain::builder().build().await;

    // TODO: Endpoint config + other configs might need to be applied here.
    println!("REGION: {}", &region);
    let sdk_config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(region))
        .credentials_provider(source_credentials_provider)
        .load()
        .await;
    let s3control_client = aws_sdk_s3control::Client::new(&sdk_config.clone());
    let sdk_credentials_provider = access_grants_config.build(s3control_client);
    let crt_credentials_provider =
        CredentialsProvider::new_sdk(&allocator, Handle::current(), Arc::new(sdk_credentials_provider))?;

    Ok(crt_credentials_provider)
}

fn setup_disk_cache_directory(cache_config: &mut DataCacheConfig) -> anyhow::Result<Option<ManagedCacheDir>> {
    let Some(disk_cache_config) = &mut cache_config.disk_cache_config else {
        return Ok(None);
    };
    let cache_key = env_unstable_cache_key();
    let managed_cache_dir = ManagedCacheDir::new_from_parent_with_cache_key(
        &disk_cache_config.cache_directory,
        cache_key.as_deref(),
        should_cleanup_cache_dir(),
    )
    .context("failed to create cache directory")?;
    disk_cache_config.cache_directory = managed_cache_dir.as_path_buf();
    Ok(Some(managed_cache_dir))
}

/// Return if [ManagedCacheDir] should be configured with cleanup disabled or not.
///
/// This allows cache directories to be reused, which is useful for testing/benchmarking.
/// We do not recommend using this configuration option in production and it may be removed at any time without notice.
fn should_cleanup_cache_dir() -> bool {
    const ENV_CONFIG_KEY_NAME: &str = "UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP";
    let disable_cleanup =
        std::env::var_os(ENV_CONFIG_KEY_NAME).is_some_and(|x| x.eq_ignore_ascii_case("TRUE") || x == "1");
    if disable_cleanup {
        tracing::warn!("{ENV_CONFIG_KEY_NAME} is set and 'truthy', disabling cache cleanup");
    }
    !disable_cleanup
}

fn env_unstable_cache_key() -> Option<OsString> {
    env::var_os("UNSTABLE_MOUNTPOINT_CACHE_KEY")
}

/// Creates PID file at location specified by env var, writing the PID of the Mountpoint process.
///
/// The written PID may not match the PID visible in your namespace.
/// This can happen, for example, when using it from the host when Mountpoint runs in a container.
///
/// PID file configuration is available for attaching debug tooling to Mountpoint, and may be removed in the future.
fn create_pid_file() -> anyhow::Result<()> {
    const ENV_PID_FILENAME: &str = "UNSTABLE_MOUNTPOINT_PID_FILE";
    if let Some(val) = std::env::var_os(ENV_PID_FILENAME) {
        let pid = std::process::id();
        fs::write(&val, pid.to_string()).context("failed to write PID to file")?;
        tracing::trace!("PID ({pid}) written to file {val:?}");
    }
    Ok(())
}

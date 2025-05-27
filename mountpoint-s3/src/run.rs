use std::ffi::OsString;
use std::fs::File;
use std::io::{Read, Write};
use std::os::fd::AsRawFd;
use std::time::Duration;
use std::{env, fs};

use anyhow::{anyhow, Context as _};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::data_cache::{DataCacheConfig, ManagedCacheDir};
use mountpoint_s3_fs::fuse::session::FuseSession;
use mountpoint_s3_fs::logging::init_logging;
use mountpoint_s3_fs::s3::S3Personality;
use mountpoint_s3_fs::{metrics, MountpointConfig, Runtime};
use nix::sys::signal::Signal;
use nix::unistd::{getgid, getuid, ForkResult};

// Linux/Android have setresgid/setresuid for more secure privilege dropping
#[cfg(any(target_os = "linux", target_os = "android"))]
use nix::unistd::{setresgid, setresuid};

// macOS and other platforms use the simpler setgid/setuid
#[cfg(not(any(target_os = "linux", target_os = "android")))]
use nix::unistd::{setgid, setuid};

use crate::cli::CliArgs;
use crate::{build_info, parse_cli_args};

/// Run Mountpoint with the given [CliArgs].
pub fn run<ClientBuilder, Client>(client_builder: ClientBuilder, args: CliArgs) -> anyhow::Result<()>
where
    ClientBuilder: FnOnce(&CliArgs) -> anyhow::Result<(Client, Runtime, S3Personality)>,
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let successful_mount_msg = format!(
        "{} is mounted at {}",
        args.bucket_description(),
        args.mount_point.display()
    );

    if args.foreground {
        let _logging = init_logging(args.make_logging_config()).context("failed to initialize logging")?;

        let _metrics = metrics::install();

        create_pid_file()?;
        drop_privileges_if_needed(&args)?;

        // mount file system as a foreground process
        let session = mount(args, client_builder)?;

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

                drop_privileges_if_needed(&args)?;

                let session = mount(args, client_builder);

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

fn mount<ClientBuilder, Client>(args: CliArgs, client_builder: ClientBuilder) -> anyhow::Result<FuseSession>
where
    ClientBuilder: FnOnce(&CliArgs) -> anyhow::Result<(Client, Runtime, S3Personality)>,
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    tracing::info!("mount-s3 {}", build_info::FULL_VERSION);
    tracing::debug!("{:?}", args);

    let fuse_session_config = args.fuse_session_config()?;
    let sse = args.server_side_encryption()?;

    let (client, runtime, s3_personality) = client_builder(&args)?;

    let bucket_description = args.bucket_description();
    tracing::debug!("using S3 personality {s3_personality:?} for {bucket_description}");

    let s3_path = args.s3_path();
    let filesystem_config = args.filesystem_config(sse.clone(), s3_personality);
    let mut data_cache_config = args.data_cache_config(sse);

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
pub fn create_s3_client(args: &CliArgs) -> anyhow::Result<(S3CrtClient, Runtime, S3Personality)> {
    // Log current user context and environment for credential debugging
    let current_uid = getuid();
    let current_gid = getgid();
    tracing::debug!("🔧 Creating S3 client as UID={}, GID={}", current_uid, current_gid);

    // Log environment variables that affect AWS credentials
    let env_vars = [
        "AWS_ACCESS_KEY_ID",
        "AWS_SECRET_ACCESS_KEY",
        "AWS_SESSION_TOKEN",
        "AWS_PROFILE",
        "AWS_CONFIG_FILE",
        "AWS_SHARED_CREDENTIALS_FILE",
        "AWS_DEFAULT_REGION",
        "AWS_REGION",
        "AWS_ENDPOINT_URL",
        "AWS_EC2_METADATA_DISABLED",
        "HOME",
        "USER",
    ];

    for var in &env_vars {
        match std::env::var(var) {
            Ok(value) => {
                if var.contains("SECRET") || var.contains("TOKEN") {
                    tracing::debug!("🔐 ENV {}: [REDACTED - {} chars]", var, value.len());
                } else {
                    tracing::debug!("🔐 ENV {}: {}", var, value);
                }
            }
            Err(_) => tracing::debug!("🔐 ENV {}: <not set>", var),
        }
    }

    // Now we then check for AWS credential files
    let home_dir = std::env::var("HOME").unwrap_or_else(|_| "/unknown".to_string());
    let aws_dir = format!("{}/.aws", home_dir);
    let credentials_file = format!("{}/credentials", aws_dir);
    let config_file = format!("{}/config", aws_dir);

    tracing::debug!("Current HOME directory: {}", home_dir);
    tracing::debug!("AWS directory: {}", aws_dir);

    match std::fs::metadata(&aws_dir) {
        Ok(metadata) => {
            use std::os::unix::fs::PermissionsExt;
            tracing::debug!(
                "AWS directory exists: {} (permissions: {:o})",
                aws_dir,
                metadata.permissions().mode()
            );
        }
        Err(e) => {
            tracing::info!("AWS directory check failed: {} - {}", aws_dir, e);
        }
    }

    match std::fs::metadata(&credentials_file) {
        Ok(metadata) => {
            use std::os::unix::fs::PermissionsExt;
            tracing::debug!(
                "AWS credentials file exists: {} (size: {} bytes, permissions: {:o})",
                credentials_file,
                metadata.len(),
                metadata.permissions().mode()
            );
        }
        Err(e) => {
            tracing::info!("AWS credentials file check: {} - {}", credentials_file, e);
        }
    }

    match std::fs::metadata(&config_file) {
        Ok(metadata) => {
            use std::os::unix::fs::PermissionsExt;
            tracing::info!(
                "AWS config file exists: {} (size: {} bytes, permissions: {:o})",
                config_file,
                metadata.len(),
                metadata.permissions().mode()
            );
        }
        Err(e) => {
            tracing::info!("AWS config file check: {} - {}", config_file, e);
        }
    }

    let client_config = args.client_config(build_info::FULL_VERSION);
    tracing::debug!("Client config created");

    let s3_path = args.s3_path();
    let client = client_config
        .create_client(Some(&s3_path))
        .context("Failed to create S3 client")?;

    tracing::info!(
        "S3 client created successfully!, Client endpoint config: {:?}",
        client.endpoint_config()
    );
    let runtime = Runtime::new(client.event_loop_group());
    let s3_personality = args
        .personality()
        .unwrap_or_else(|| S3Personality::infer_from_bucket(&s3_path.bucket_name, &client.endpoint_config()));

    Ok((client, runtime, s3_personality))
}

fn setup_disk_cache_directory(cache_config: &mut DataCacheConfig) -> anyhow::Result<Option<ManagedCacheDir>> {
    let Some(disk_cache_config) = &mut cache_config.disk_cache_config else {
        return Ok(None);
    };
    let cache_key = env_unstable_cache_key();
    let managed_cache_dir =
        ManagedCacheDir::new_from_parent_with_cache_key(&disk_cache_config.cache_directory, cache_key.as_deref())
            .context("failed to create cache directory")?;
    disk_cache_config.cache_directory = managed_cache_dir.as_path_buf();
    Ok(Some(managed_cache_dir))
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

/// Ensures the mount directory is accessible to BOTH the original user and target user
fn ensure_mount_directory_accessible(
    mount_point: &std::path::Path,
    target_uid: nix::unistd::Uid,
    _target_gid: nix::unistd::Gid,
) -> anyhow::Result<()> {
    use std::os::unix::fs::PermissionsExt;

    let current_uid = getuid();
    let current_gid = getgid();

    tracing::info!("Original user: UID={}, GID={}", current_uid, current_gid);
    tracing::info!("Target user: UID={}", target_uid);

    // we set ownership to target user but keep original group so both users can access
    nix::unistd::chown(mount_point, Some(target_uid), Some(current_gid))
        .with_context(|| format!("Failed to change ownership of {}", mount_point.display()))?;

    // then we set permissions to 777 (rwxrwxrwx) - full access for everyone
    let permissions = std::fs::Permissions::from_mode(0o777);
    std::fs::set_permissions(mount_point, permissions)
        .with_context(|| format!("Failed to set permissions on {}", mount_point.display()))?;

    // Make sure parent directories are accessible
    let mut current_path = mount_point;
    while let Some(parent) = current_path.parent() {
        if parent == std::path::Path::new("/") || parent == std::path::Path::new("") {
            break;
        }

        match std::fs::metadata(parent) {
            Ok(metadata) => {
                let mode = metadata.permissions().mode();
                // this ensures parent has at least 755 (readable and traversable)
                if (mode & 0o755) != 0o755 {
                    tracing::info!(
                        "Making parent {} accessible (mode: {:o} -> 755)",
                        parent.display(),
                        mode
                    );
                    let new_permissions = std::fs::Permissions::from_mode((mode & !0o777) | 0o755);
                    if let Err(e) = std::fs::set_permissions(parent, new_permissions) {
                        tracing::warn!("Failed to fix parent {}: {}", parent.display(), e);
                    }
                }
            }
            Err(_) => break,
        }

        current_path = parent;
        if parent == std::path::Path::new("/home") {
            break;
        }
    }

    Ok(())
}

fn drop_privileges_if_needed(args: &CliArgs) -> anyhow::Result<()> {
    if let Some(username) = &args.run_as_user {
        let current_uid = getuid();
        let current_gid = getgid();

        match CliArgs::resolve_user_group(username) {
            Ok((target_uid, target_gid)) => {
                // Construct home directory path directly, the assumoption is thatthe users are in the home directory
                let target_home = format!("/home/{}", username);
                tracing::debug!("Target user's home directory: {}", target_home);

                if let Err(e) = ensure_mount_directory_accessible(&args.mount_point, target_uid, target_gid) {
                    tracing::warn!("⚠️  Failed to ensure mount directory accessibility: {}", e);
                    tracing::info!("💡 You may need to manually fix permissions or use a different mount point");
                }

                tracing::debug!("🎯 TARGET user '{}': UID={}, GID={}", username, target_uid, target_gid);
                tracing::debug!(
                    "⬇️  DROPPING privileges from UID={} to UID={}, GID={} to GID={}",
                    current_uid,
                    target_uid,
                    current_gid,
                    target_gid
                );

                // Step 1: Change group first
                tracing::info!("Changing GID from {} to {}", current_gid, target_gid);
                #[cfg(any(target_os = "linux", target_os = "android"))]
                {
                    if let Err(e) = setresgid(target_gid, target_gid, target_gid) {
                        tracing::error!(error=?e, "Failed to set GID with setresgid");
                        return Err(anyhow!("Failed to set GID with setresgid: {}", e));
                    }
                }
                #[cfg(not(any(target_os = "linux", target_os = "android")))]
                {
                    if let Err(e) = setgid(target_gid) {
                        tracing::error!(error=?e, "Failed to set GID with setgid");
                        return Err(anyhow!("Failed to set GID with setgid: {}", e));
                    }
                }

                // Step 2: Change user
                #[cfg(any(target_os = "linux", target_os = "android"))]
                {
                    if let Err(e) = setresuid(target_uid, target_uid, target_uid) {
                        tracing::error!(error=?e, "Failed to set UID with setresuid");
                        return Err(anyhow!("Failed to set UID with setresuid: {}", e));
                    }
                }
                #[cfg(not(any(target_os = "linux", target_os = "android")))]
                {
                    if let Err(e) = setuid(target_uid) {
                        tracing::error!(error=?e, "Failed to set UID with setuid");
                        return Err(anyhow!("Failed to set UID with setuid: {}", e));
                    }
                }

                //  Set up environment variables for the target user
                std::env::set_var("HOME", &target_home);
                std::env::set_var("USER", username);
                std::env::set_var("USERNAME", username);
                tracing::info!("Environment set up: HOME={}, USER={}", target_home, username);

                // Final verification
                let final_uid = getuid();
                let final_gid = getgid();
                tracing::debug!(
                    "Successfully dropped privileges to user: {} (UID={}, GID={})",
                    username,
                    final_uid,
                    final_gid
                );
                tracing::debug!(
                    "Current HOME directory: {}",
                    std::env::var("HOME").unwrap_or_else(|_| "not set".to_string())
                );
            }
            Err(e) => {
                tracing::error!(error=?e, username=%username, "Failed to resolve user/group");
                return Err(anyhow!("Failed to resolve user/group: {}", e));
            }
        }
    } else {
        let current_uid = getuid();
        let current_gid = getgid();
        tracing::info!(
            "No privilege dropping requested, continuing as UID={}, GID={}",
            current_uid,
            current_gid
        );
    }
    Ok(())
}

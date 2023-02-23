use std::io::{Read, Write};
use std::os::unix::prelude::FromRawFd;
use std::path::{Path, PathBuf};
use std::thread;
use std::time::Duration;
use std::{fs, fs::File};

use anyhow::{anyhow, Context as _};
use aws_crt_s3::common::rust_log_adapter::RustLogAdapter;
use clap::{ArgGroup, Parser};
use fuser::{BackgroundSession, MountOption, Session};
use nix::sys::signal::Signal;
use nix::unistd::ForkResult;
use s3_client::{AddressingStyle, Endpoint, HeadBucketError, ObjectClientError, S3ClientConfig, S3CrtClient};
use s3_file_connector::fs::S3FilesystemConfig;
use s3_file_connector::fuse::S3FuseFilesystem;
use s3_file_connector::metrics::{metrics_tracing_span_layer, MetricsSink};
use time::format_description::FormatItem;
use time::macros;
use time::OffsetDateTime;
use tracing_subscriber::{
    filter::EnvFilter, filter::LevelFilter, layer::SubscriberExt, util::SubscriberInitExt, Layer,
};

mod build_info;

fn init_tracing_subscriber(is_foreground: bool, log_directory: Option<&Path>) -> anyhow::Result<()> {
    const LOG_DIRECTORY: &str = ".s3-file-connector";
    const LOG_FILE_NAME_FORMAT: &[FormatItem<'static>] =
        macros::format_description!("s3fc_[year][month][day][hour][minute][second].log");

    RustLogAdapter::try_init().context("failed to initialize CRT logger")?;

    let default_environment_filter = EnvFilter::from_default_env();
    if default_environment_filter.max_level_hint() != Some(LevelFilter::OFF) {
        let filename = OffsetDateTime::now_utc()
            .format(LOG_FILE_NAME_FORMAT)
            .context("couldn't format log file name")?;

        let file = if let Some(path) = log_directory {
            fs::create_dir_all(path).context("failed to create log folder")?;
            File::create(path.join(filename)).context("failed to create log file")?
        } else {
            let default_log_directory = home::home_dir()
                .ok_or(anyhow!("no home directory found!"))?
                .join(LOG_DIRECTORY);
            fs::create_dir_all(&default_log_directory).context("failed to create log folder")?;
            File::create(default_log_directory.join(filename)).context("failed to create log file")?
        };

        let fmt_layer = tracing_subscriber::fmt::layer()
            .with_ansi(false)
            .with_writer(file)
            .with_filter(default_environment_filter);
        let registry = tracing_subscriber::registry()
            .with(fmt_layer)
            .with(metrics_tracing_span_layer());
        if is_foreground {
            // Brutal hack because tracing-subscriber doesn't allow us to specify *multiple* default
            // directives -- we want warning-level logging except for the CRT, which is very spammy.
            if std::env::var("RUST_LOG") == Err(std::env::VarError::NotPresent) {
                std::env::set_var("RUST_LOG", "info,awscrt=off,fuser=error");
            }

            let fmt_layer_to_console = tracing_subscriber::fmt::layer()
                .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
                .with_filter(tracing_subscriber::filter::EnvFilter::from_default_env());
            registry.with(fmt_layer_to_console).init();
        } else {
            registry.init();
        }
    }

    Ok(())
}

#[derive(Parser)]
#[clap(about = "S3 File Connector", version = build_info::FULL_VERSION)]
#[clap(group(ArgGroup::new("addressing-style").args(&["virtual-addressing", "path-addressing"])))]
struct CliArgs {
    #[clap(help = "Name of bucket to mount")]
    pub bucket_name: String,

    #[clap(help = "Mount point for file system")]
    pub mount_point: PathBuf,

    #[clap(short, long, help = "Log file directory. [default: $HOME/.s3_file_connector]")]
    pub log_directory: Option<PathBuf>,

    #[clap(
        long,
        help = "Prefix inside the bucket to mount. Mounts the entire bucket if unspecified."
    )]
    pub prefix: Option<String>,

    #[clap(long, help = "AWS region of the bucket")]
    pub region: Option<String>,

    #[clap(long, help = "Override S3 endpoint URL")]
    pub endpoint_url: Option<String>,

    #[clap(long, help = "Force virtual-host-style addressing")]
    pub virtual_addressing: bool,

    #[clap(long, help = "Force path-style addressing")]
    pub path_addressing: bool,

    #[clap(long, help = "Automatically unmount on exit")]
    pub auto_unmount: bool,

    #[clap(long, help = "Allow root user to access file system")]
    pub allow_root: bool,

    #[clap(long, help = "Allow other non-root users to access file system")]
    pub allow_other: bool,

    #[clap(long, help = "Desired throughput in Gbps", value_name = "N (Gbps)", value_parser = clap::value_parser!(u64).range(1..))]
    pub throughput_target_gbps: Option<u64>,

    #[clap(long, help = "Number of FUSE daemon threads", value_name = "N", value_parser = clap::value_parser!(u64).range(1..))]
    pub thread_count: Option<u64>,

    #[clap(long, help = "Part size for multi-part GET and PUT", value_parser = clap::value_parser!(u64).range(1..))]
    pub part_size: Option<u64>,

    #[clap(long, help = "Owner UID [default: current user's UID]", value_parser = clap::value_parser!(u32).range(1..))]
    pub uid: Option<u32>,

    #[clap(long, help = "Owner GID [default: current user's GID]", value_parser = clap::value_parser!(u32).range(1..))]
    pub gid: Option<u32>,

    #[clap(long, help = "Directory permissions [default: 0755]", value_parser = parse_perm_bits)]
    pub dir_mode: Option<u16>,

    #[clap(long, help = "File permissions [default: 0644]", value_parser = parse_perm_bits)]
    pub file_mode: Option<u16>,

    #[clap(short, long, help = "Run as foreground process")]
    pub foreground: bool,
}

impl CliArgs {
    fn addressing_style(&self) -> AddressingStyle {
        if self.virtual_addressing {
            AddressingStyle::Virtual
        } else if self.path_addressing {
            AddressingStyle::Path
        } else {
            AddressingStyle::Automatic
        }
    }
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    // validate mount point
    if !args.mount_point.exists() || !args.mount_point.is_dir() {
        return Err(anyhow!(
            "Mount point {} does not exist or it is not a directory",
            args.mount_point.display()
        ));
    }

    if args.foreground {
        init_tracing_subscriber(args.foreground, args.log_directory.as_deref())
            .context("failed to initialize logging")?;
        // mount file system as a foreground process
        let session = mount(args)?;

        let (sender, receiver) = std::sync::mpsc::sync_channel(0);

        ctrlc::set_handler(move || {
            let _ = sender.send(());
        })
        .context("Failed to install signal handler")
        .unwrap();

        let _ = receiver.recv();

        drop(session);
    } else {
        // mount file system as a background process

        // create a pipe for interprocess communication.
        // child process will report its status via this pipe.
        let (read_fd, write_fd) = nix::unistd::pipe().context("Failed to create a pipe")?;

        // SAFETY: Child process has full ownership of its resources.
        // There is no shared data between parent and child processes.
        let pid = unsafe { nix::unistd::fork() };
        match pid.expect("Failed to fork mount process") {
            ForkResult::Child => {
                let child_args = CliArgs::parse();
                init_tracing_subscriber(child_args.foreground, child_args.log_directory.as_deref())
                    .context("failed to initialize logging")?;
                let session = mount(child_args);

                // close unused file descriptor, we only write from this end.
                nix::unistd::close(read_fd).context("Failed to close unused file descriptor")?;

                // SAFETY: `write_fd` is a valid file descriptor.
                let mut pipe_file = unsafe { File::from_raw_fd(write_fd) };

                let status_success = [b'0'];
                let status_failure = [b'1'];

                match session {
                    Ok(_session) => {
                        pipe_file
                            .write(&status_success)
                            .context("Failed to write data to the pipe")?;
                        drop(pipe_file);

                        // the session stays running because its lifetime is bound to the match statement.
                        // it won't be dropped until after the park.
                        // also `park()` does not guarantee to remain parked forever. so, we put it inside a loop.
                        loop {
                            thread::park();
                        }
                    }
                    Err(e) => {
                        pipe_file
                            .write(&status_failure)
                            .context("Failed to write data to the pipe")?;
                        return Err(anyhow!(e));
                    }
                }
            }
            ForkResult::Parent { child } => {
                init_tracing_subscriber(args.foreground, args.log_directory.as_deref())
                    .context("failed to initialize logging")?;
                // close unused file descriptor, we only read from this end.
                nix::unistd::close(write_fd).context("Failed to close unused file descriptor")?;

                // SAFETY: `read_fd` is a valid file descriptor.
                let mut pipe_file = unsafe { File::from_raw_fd(read_fd) };

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
                let status = receiver.recv_timeout(timeout);
                match status {
                    Ok('0') => tracing::debug!("success status flag received from child process"),
                    Ok(_) => {
                        nix::sys::wait::waitpid(child, None).context("Failed to wait for child process to exit")?;
                        return Err(anyhow!("Failed to create mount process"));
                    }
                    Err(_timeout_err) => {
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

fn mount(args: CliArgs) -> anyhow::Result<BackgroundSession> {
    let throughput_target_gbps = args.throughput_target_gbps.map(|t| t as f64);

    let addressing_style = args.addressing_style();
    let endpoint = args
        .endpoint_url
        .map(|uri| Endpoint::from_uri(&uri, addressing_style))
        .transpose()
        .context("Failed to parse endpoint URL")?;

    let client_config = S3ClientConfig {
        throughput_target_gbps,
        part_size: args.part_size.map(|t| t as usize),
        endpoint,
        user_agent_prefix: Some(format!("s3-file-connector/{}", build_info::FULL_VERSION)),
    };

    let _metrics = MetricsSink::init();

    let client = create_client_for_bucket(
        &args.bucket_name,
        args.region.as_deref(),
        client_config,
        addressing_style,
    )
    .context("Failed to create S3 client")?;
    let runtime = client.event_loop_group();

    let mut filesystem_config = S3FilesystemConfig::default();
    if let Some(uid) = args.uid {
        filesystem_config.uid = uid;
    }
    if let Some(gid) = args.gid {
        filesystem_config.gid = gid;
    }
    if let Some(dir_mode) = args.dir_mode {
        filesystem_config.dir_mode = dir_mode;
    }
    if let Some(file_mode) = args.file_mode {
        filesystem_config.file_mode = file_mode;
    }

    let fs = S3FuseFilesystem::new(
        client,
        runtime,
        &args.bucket_name,
        args.prefix.as_deref().unwrap_or(""),
        filesystem_config,
    );

    let fs_name = String::from("s3-file-connector");
    let mut options = vec![
        MountOption::RO,
        MountOption::DefaultPermissions,
        MountOption::FSName(fs_name),
        MountOption::NoAtime,
    ];
    if args.auto_unmount {
        options.push(MountOption::AutoUnmount);
    }
    if args.allow_root {
        options.push(MountOption::AllowRoot);
    }
    if args.allow_other {
        options.push(MountOption::AllowOther);
    }

    let session = Session::new(fs, &args.mount_point, &options).context("Failed to create FUSE session")?;

    let session = if let Some(thread_count) = args.thread_count {
        BackgroundSession::new_multi_thread(session, thread_count as usize)
    } else {
        BackgroundSession::new(session)
    };
    let session = session.context("Failed to start FUSE session")?;

    tracing::info!("successfully mounted {:?}", args.mount_point);

    Ok(session)
}

/// Create a client for a bucket in the given region and send a HeadBucket request to validate it's
/// accessible. If no region is provided, attempt to infer it by first sending a HeadBucket to the
/// default region.
///
/// This also has the nice side effect of triggering the CRT's DNS resolver to start pooling
/// responses, which means we don't have to wait for the first file read to start the rampup period.
fn create_client_for_bucket(
    bucket: &str,
    supposed_region: Option<&str>,
    client_config: S3ClientConfig,
    addressing_style: AddressingStyle,
) -> Result<S3CrtClient, anyhow::Error> {
    const DEFAULT_REGION: &str = "us-east-1";

    let region_to_try = supposed_region.unwrap_or_else(|| {
        if client_config.endpoint.is_some() {
            tracing::warn!(
                "endpoint specified but region unspecified. using {} as the signing region.",
                DEFAULT_REGION
            );
        }
        DEFAULT_REGION
    });

    let endpoint = if let Some(endpoint) = client_config.endpoint.clone() {
        endpoint
    } else {
        Endpoint::from_region(region_to_try, addressing_style)?
    };

    let client = S3CrtClient::new(
        region_to_try,
        S3ClientConfig {
            endpoint: Some(endpoint),
            ..client_config.clone()
        },
    )?;

    let head_request = client.head_bucket(bucket);
    match futures::executor::block_on(head_request) {
        Ok(_) => Ok(client),
        // Don't try to automatically correct the region if it was manually specified incorrectly
        Err(ObjectClientError::ServiceError(HeadBucketError::IncorrectRegion(region))) if supposed_region.is_none() => {
            tracing::warn!("bucket {bucket} is in region {region}, not {region_to_try}. redirecting...");
            let endpoint = Endpoint::from_region(&region, addressing_style)?;
            let new_client = S3CrtClient::new(
                &region,
                S3ClientConfig {
                    endpoint: Some(endpoint),
                    ..client_config.clone()
                },
            )?;
            let head_request = new_client.head_bucket(bucket);
            futures::executor::block_on(head_request)
                .map(|_| new_client)
                .with_context(|| format!("HeadBucket failed for bucket {bucket} in region {region}"))
        }
        Err(e) => Err(e).with_context(|| format!("HeadBucket failed for bucket {bucket} in region {region_to_try}")),
    }
}

fn parse_perm_bits(perm_bit_str: &str) -> Result<u16, anyhow::Error> {
    let perm = u16::from_str_radix(perm_bit_str, 8).map_err(|_| anyhow!("must be a valid octal number"))?;
    if perm > 0o777 {
        Err(anyhow!("only user/group/other permissions are supported"))
    } else {
        Ok(perm)
    }
}

use std::env;
use std::ffi::OsString;
use std::fs::File;
use std::io::{Read, Write};
use std::num::NonZeroUsize;
use std::os::fd::AsRawFd;
use std::path::{Path, PathBuf};
use std::time::Duration;

use anyhow::{anyhow, Context as _};
use clap::{value_parser, Parser, ValueEnum};
use fuser::{MountOption, Session};
use futures::task::Spawn;
use mountpoint_s3_client::config::{AddressingStyle, EndpointConfig, S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_client::error::ObjectClientError;
use mountpoint_s3_client::instance_info::InstanceInfo;
use mountpoint_s3_client::user_agent::UserAgent;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use mountpoint_s3_crt::auth::signing_config::SigningAlgorithm;
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::rust_log_adapter::AWSCRT_LOG_TARGET;
use mountpoint_s3_crt::common::uri::Uri;
use mountpoint_s3_crt::io::event_loop::EventLoopGroup;
use nix::sys::signal::Signal;
use nix::unistd::ForkResult;
use regex::Regex;

use crate::build_info;
use crate::data_cache::{CacheLimit, DiskDataCache, DiskDataCacheConfig, ManagedCacheDir};
use crate::fs::{CacheConfig, S3FilesystemConfig, ServerSideEncryption, TimeToLive};
use crate::fuse::session::FuseSession;
use crate::fuse::S3FuseFilesystem;
use crate::logging::{init_logging, LoggingConfig};
use crate::prefetch::{caching_prefetch, default_prefetch, Prefetch};
use crate::prefix::Prefix;
use crate::s3::S3Personality;
use crate::{autoconfigure, metrics};

const CLIENT_OPTIONS_HEADER: &str = "Client options";
const MOUNT_OPTIONS_HEADER: &str = "Mount options";
const BUCKET_OPTIONS_HEADER: &str = "Bucket options";
const AWS_CREDENTIALS_OPTIONS_HEADER: &str = "AWS credentials options";
const LOGGING_OPTIONS_HEADER: &str = "Logging options";
const CACHING_OPTIONS_HEADER: &str = "Caching options";
const ADVANCED_OPTIONS_HEADER: &str = "Advanced options";

#[derive(Parser, Debug)]
#[clap(name = "mount-s3", about = "Mountpoint for Amazon S3", version = build_info::FULL_VERSION)]
pub struct CliArgs {
    #[clap(help = "Name of bucket to mount", value_parser = parse_bucket_name)]
    pub bucket_name: String,

    #[clap(help = "Directory to mount the bucket at", value_name = "DIRECTORY")]
    pub mount_point: PathBuf,

    #[clap(
        long,
        help = "Prefix inside the bucket to mount, ending in '/' [default: mount the entire bucket]",
        help_heading = BUCKET_OPTIONS_HEADER
    )]
    pub prefix: Option<Prefix>,

    #[clap(
        long,
        help = "AWS region of the bucket [default: auto-detect region]",
        help_heading = BUCKET_OPTIONS_HEADER
    )]
    pub region: Option<String>,

    #[clap(
        long,
        help = "S3 endpoint URL [default: auto-detect endpoint]",
        help_heading = BUCKET_OPTIONS_HEADER
    )]
    pub endpoint_url: Option<String>,

    #[clap(long, help = "Force path-style addressing", help_heading = BUCKET_OPTIONS_HEADER)]
    pub force_path_style: bool,

    #[clap(long, help = "Use S3 Transfer Acceleration when accessing S3. This must be enabled on the bucket.", help_heading = BUCKET_OPTIONS_HEADER)]
    pub transfer_acceleration: bool,

    #[clap(long, help = "Use dual-stack endpoints when accessing S3", help_heading = BUCKET_OPTIONS_HEADER)]
    pub dual_stack: bool,

    #[clap(long, help = "Set the 'x-amz-request-payer' to 'requester' on S3 requests", help_heading = BUCKET_OPTIONS_HEADER)]
    pub requester_pays: bool,

    #[clap(long, help = "Type of S3 bucket to use [default: inferred from bucket name]", help_heading = BUCKET_OPTIONS_HEADER)]
    pub bucket_type: Option<BucketType>,

    #[clap(
        long,
        help = "Do not sign requests. Credentials will not be loaded if this argument is provided.",
        help_heading = AWS_CREDENTIALS_OPTIONS_HEADER
    )]
    pub no_sign_request: bool,

    #[clap(long, help = "Use a specific profile from your credential file.", help_heading = AWS_CREDENTIALS_OPTIONS_HEADER)]
    pub profile: Option<String>,

    #[clap(
        long,
        help = "Mount file system in read-only mode",
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub read_only: bool,

    #[clap(long, help = "Set the storage class for new objects", help_heading = BUCKET_OPTIONS_HEADER)]
    pub storage_class: Option<String>,

    #[clap(
        long,
        help = "Allow delete operations on file system",
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub allow_delete: bool,

    #[clap(
        long,
        help = "Allow overwrite operations on file system",
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub allow_overwrite: bool,

    #[clap(long, help = "Automatically unmount on exit", help_heading = MOUNT_OPTIONS_HEADER)]
    pub auto_unmount: bool,

    #[clap(long, help = "Allow root user to access file system", help_heading = MOUNT_OPTIONS_HEADER)]
    pub allow_root: bool,

    #[clap(
        long,
        help = "Allow other users, including root, to access file system",
        help_heading = MOUNT_OPTIONS_HEADER,
        conflicts_with = "allow_root"
    )]
    pub allow_other: bool,

    #[clap(
        long,
        help = "Maximum throughput in Gbps [default: auto-detected on EC2 instances, 10 Gbps elsewhere]",
        value_name = "N",
        value_parser = value_parser!(u64).range(1..),
        help_heading = CLIENT_OPTIONS_HEADER
    )]
    pub maximum_throughput_gbps: Option<u64>,

    #[clap(
        long,
        help = "Maximum number of FUSE daemon threads",
        value_name = "N",
        default_value = "16",
        value_parser = value_parser!(u64).range(1..),
        help_heading = CLIENT_OPTIONS_HEADER
    )]
    pub max_threads: u64,

    #[clap(
        long,
        help = "Part size for multi-part GET and PUT in bytes",
        default_value = "8388608",
        value_name = "SIZE",
        value_parser = value_parser!(u64).range(1..usize::MAX as u64),
        help_heading = CLIENT_OPTIONS_HEADER
    )]
    pub part_size: u64,

    #[clap(
        long,
        help = "Part size for GET in bytes [default: 8388608]",
        value_name = "SIZE",
        value_parser = value_parser!(u64).range(1..usize::MAX as u64),
        help_heading = CLIENT_OPTIONS_HEADER,
        conflicts_with = "part_size",
    )]
    pub read_part_size: Option<u64>,

    #[clap(
        long,
        help = "Part size for multi-part PUT in bytes [default: 8388608]",
        value_name = "SIZE",
        value_parser = value_parser!(u64).range(1..usize::MAX as u64),
        help_heading = CLIENT_OPTIONS_HEADER,
        conflicts_with = "part_size",
    )]
    pub write_part_size: Option<u64>,

    #[clap(
        long,
        help = "Owner UID [default: current user's UID]",
        value_parser = value_parser!(u32).range(1..),
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub uid: Option<u32>,

    #[clap(
        long,
        help = "Owner GID [default: current user's GID]",
        value_parser = value_parser!(u32).range(1..),
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub gid: Option<u32>,

    #[clap(
        long,
        help = "Directory permissions [default: 0755]",
        value_parser = parse_perm_bits,
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub dir_mode: Option<u16>,

    #[clap(
        long,
        help = "File permissions [default: 0644]",
        value_parser = parse_perm_bits,
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub file_mode: Option<u16>,

    #[clap(short, long, help = "Run as foreground process")]
    pub foreground: bool,

    #[clap(
        long,
        help = "Account ID of the expected bucket owner. \
            If the bucket is owned by a different account, S3 requests fail with an access denied error.",
        help_heading = BUCKET_OPTIONS_HEADER,
        value_name = "AWS_ACCOUNT_ID"
    )]
    pub expected_bucket_owner: Option<String>,

    #[clap(
        short,
        long,
        help = "Write log files to a directory [default: logs written to syslog]",
        help_heading = LOGGING_OPTIONS_HEADER,
        value_name = "DIRECTORY",
    )]
    pub log_directory: Option<PathBuf>,

    #[clap(long, help = "Enable logging of summarized performance metrics", help_heading = LOGGING_OPTIONS_HEADER)]
    pub log_metrics: bool,

    #[clap(short, long, help = "Enable debug logging for Mountpoint", help_heading = LOGGING_OPTIONS_HEADER)]
    pub debug: bool,

    #[clap(long, help = "Enable debug logging for AWS Common Runtime", help_heading = LOGGING_OPTIONS_HEADER)]
    pub debug_crt: bool,

    #[clap(
        long,
        help = "Disable all logging. You will still see stdout messages.",
        help_heading = LOGGING_OPTIONS_HEADER,
        conflicts_with_all(["log_directory", "debug", "debug_crt", "log_metrics"])
    )]
    pub no_log: bool,

    #[clap(
        long,
        help = "Enable caching of object content to the given directory and set metadata TTL to 60 seconds",
        help_heading = CACHING_OPTIONS_HEADER,
        value_name = "DIRECTORY",
    )]
    pub cache: Option<PathBuf>,

    #[clap(
        long,
        help = "Time-to-live (TTL) for cached metadata in seconds [default: minimal, or 60 seconds if --cache is set]",
        value_name = "SECONDS|indefinite|minimal",
        help_heading = CACHING_OPTIONS_HEADER,
    )]
    pub metadata_ttl: Option<TimeToLive>,

    #[clap(
        long,
        help = "Maximum size of the cache directory in MiB [default: preserve 5% of available space]",
        value_name = "MiB",
        value_parser = value_parser!(u64),
        help_heading = CACHING_OPTIONS_HEADER,
        requires = "cache",
    )]
    pub max_cache_size: Option<u64>,

    #[clap(
        long,
        help = "Configure a string to be prepended to the 'User-Agent' HTTP request header for all S3 requests",
        value_name = "PREFIX",
        help_heading = ADVANCED_OPTIONS_HEADER,
    )]
    pub user_agent_prefix: Option<String>,

    #[clap(
        long,
        help = "Server-side encryption algorithm to use when uploading new objects",
        help_heading = BUCKET_OPTIONS_HEADER,
        value_parser = clap::builder::PossibleValuesParser::new(["aws:kms", "aws:kms:dsse", "AES256"]))]
    pub sse: Option<String>,

    #[clap(
        long,
        help = "AWS Key Management Service (KMS) key ARN to use with KMS server-side encryption when uploading new objects. Key ID, Alias and Alias ARN are all not supported.",
        help_heading = BUCKET_OPTIONS_HEADER,
        requires = "sse",
        value_parser = parse_kms_key_arn,
        value_name = "AWS_KMS_KEY_ARN",
    )]
    pub sse_kms_key_id: Option<String>,

    #[clap(
        long,
        help = "Checksum algorithm to use for S3 uploads [default: crc32c]",
        help_heading = BUCKET_OPTIONS_HEADER,
        value_name = "ALGORITHM",
    )]
    pub upload_checksums: Option<UploadChecksums>,

    #[clap(
        long,
        help = "One or more network interfaces for Mountpoint to use when accessing S3. Requires Linux 5.7+ or running as root. This feature is a work-in-progress.",
        help_heading = CLIENT_OPTIONS_HEADER,
        value_name = "NETWORK_INTERFACE",
    )]
    pub bind: Option<Vec<String>>,
}

#[derive(Debug, Clone)]
pub enum BucketType {
    GeneralPurpose,
    Directory,
}

impl BucketType {
    pub fn to_personality(&self) -> S3Personality {
        match self {
            Self::GeneralPurpose => S3Personality::Standard,
            Self::Directory => S3Personality::ExpressOneZone,
        }
    }
}

impl ValueEnum for BucketType {
    fn value_variants<'a>() -> &'a [Self] {
        &[Self::GeneralPurpose, Self::Directory]
    }

    fn to_possible_value(&self) -> Option<clap::builder::PossibleValue> {
        match self {
            Self::GeneralPurpose => Some(clap::builder::PossibleValue::new("general-purpose")),
            Self::Directory => Some(clap::builder::PossibleValue::new("directory")),
        }
    }
}

#[derive(Debug, Clone, Copy)]
pub enum UploadChecksums {
    Crc32c,
    Off,
}

impl ValueEnum for UploadChecksums {
    fn value_variants<'a>() -> &'a [Self] {
        &[Self::Crc32c, Self::Off]
    }

    fn to_possible_value(&self) -> Option<clap::builder::PossibleValue> {
        match self {
            Self::Crc32c => Some(clap::builder::PossibleValue::new("crc32c")),
            Self::Off => Some(clap::builder::PossibleValue::new("off")),
        }
    }
}

impl CliArgs {
    fn addressing_style(&self) -> AddressingStyle {
        if self.force_path_style {
            AddressingStyle::Path
        } else {
            AddressingStyle::Automatic
        }
    }

    fn prefix(&self) -> Prefix {
        self.prefix.as_ref().cloned().unwrap_or_default()
    }

    fn logging_config(&self) -> LoggingConfig {
        let default_filter = if self.no_log {
            String::from("off")
        } else {
            let mut filter = if self.debug {
                String::from("debug")
            } else {
                String::from("warn")
            };
            let crt_verbosity = if self.debug_crt { "debug" } else { "off" };
            filter.push_str(&format!(",{}={}", AWSCRT_LOG_TARGET, crt_verbosity));
            if self.log_metrics {
                filter.push_str(&format!(",{}=info", metrics::TARGET_NAME));
            }
            filter
        };

        LoggingConfig {
            log_directory: self.log_directory.clone(),
            log_to_stdout: self.foreground,
            default_filter,
        }
    }

    /// Human-readable description of the bucket being mounted
    fn bucket_description(&self) -> String {
        if let Some(prefix) = self.prefix.as_ref() {
            format!("prefix {} of bucket {}", prefix, self.bucket_name)
        } else {
            format!("bucket {}", self.bucket_name)
        }
    }

    fn fuse_session_config(&self) -> FuseSessionConfig {
        let fs_name = String::from("mountpoint-s3");
        let mut options = vec![
            MountOption::DefaultPermissions,
            MountOption::FSName(fs_name),
            MountOption::NoAtime,
        ];
        if self.read_only {
            options.push(MountOption::RO);
        }
        if self.auto_unmount {
            options.push(MountOption::AutoUnmount);
        }
        if self.allow_root {
            options.push(MountOption::AllowRoot);
        }
        if self.allow_other {
            options.push(MountOption::AllowOther);
        }

        let mount_point = self.mount_point.to_owned();
        let max_threads = self.max_threads as usize;
        FuseSessionConfig {
            mount_point,
            options,
            max_threads,
        }
    }
}

pub fn main<ClientBuilder, Client, Runtime>(client_builder: ClientBuilder) -> anyhow::Result<()>
where
    ClientBuilder: FnOnce(&CliArgs) -> anyhow::Result<(Client, Runtime, S3Personality)>,
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Clone + Send + Sync + 'static,
{
    let args = CliArgs::parse();
    let successful_mount_msg = format!(
        "{} is mounted at {}",
        args.bucket_description(),
        args.mount_point.display()
    );

    if args.foreground {
        init_logging(args.logging_config()).context("failed to initialize logging")?;

        let _metrics = metrics::install();

        // mount file system as a foreground process
        let session = mount(args, client_builder)?;

        println!("{successful_mount_msg}");

        session.join().context("failed to join session")?;
    } else {
        // mount file system as a background process

        // create a pipe for interprocess communication.
        // child process will report its status via this pipe.
        let (read_fd, write_fd) = nix::unistd::pipe().context("Failed to create a pipe")?;

        // Don't share args across the fork. It should just be plain data, so probably fine to be
        // copy-on-write, but just in case we ever add something more fancy to the struct.
        drop(args);

        // SAFETY: Child process has full ownership of its resources.
        // There is no shared data between parent and child processes.
        let pid = unsafe { nix::unistd::fork() };
        match pid.expect("Failed to fork mount process") {
            ForkResult::Child => {
                let args = CliArgs::parse();
                init_logging(args.logging_config()).context("failed to initialize logging")?;

                let _metrics = metrics::install();

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
                let args = CliArgs::parse();

                init_logging(args.logging_config()).context("failed to initialize logging")?;

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

/// Create a real S3 client
pub fn create_s3_client(args: &CliArgs) -> anyhow::Result<(S3CrtClient, EventLoopGroup, S3Personality)> {
    const DEFAULT_TARGET_THROUGHPUT: f64 = 10.0;

    // Placeholder region will be filled in by [create_client_for_bucket]
    let endpoint_config = EndpointConfig::new("PLACEHOLDER")
        .addressing_style(args.addressing_style())
        .use_accelerate(args.transfer_acceleration)
        .use_dual_stack(args.dual_stack);

    let instance_info = InstanceInfo::new();
    let throughput_target_gbps = args.maximum_throughput_gbps.map(|t| t as f64).unwrap_or_else(|| {
        match autoconfigure::network_throughput(&instance_info) {
            Ok(throughput) => throughput,
            Err(e) => {
                tracing::warn!(
                    "failed to detect network throughput. Using {DEFAULT_TARGET_THROUGHPUT} gbps as throughput. \
                    Use --maximum-throughput-gbps CLI flag to configure a target throughput appropriate for the instance. Detection failed due to: {e:?}",
                    );
                DEFAULT_TARGET_THROUGHPUT
            }
        }
    });
    tracing::info!("target network throughput {throughput_target_gbps} Gbps");

    let auth_config = if args.no_sign_request {
        S3ClientAuthConfig::NoSigning
    } else if let Some(profile_name) = &args.profile {
        S3ClientAuthConfig::Profile(profile_name.to_owned())
    } else {
        S3ClientAuthConfig::Default
    };

    let user_agent_prefix = if let Some(custom_prefix) = &args.user_agent_prefix {
        format!("{} mountpoint-s3/{}", custom_prefix, build_info::FULL_VERSION)
    } else {
        format!("mountpoint-s3/{}", build_info::FULL_VERSION)
    };
    let mut user_agent = UserAgent::new_with_instance_info(Some(user_agent_prefix), &instance_info);
    if args.read_only {
        user_agent.value("mp-readonly");
    }

    if args.cache.is_some() {
        user_agent.value("mp-cache");
    }
    if let Some(ttl) = args.metadata_ttl {
        user_agent.key_value("mp-cache-ttl", &ttl.to_string());
    }
    if let Some(interfaces) = &args.bind {
        user_agent.key_value("mp-nw-interfaces", &interfaces.len().to_string());
    }

    // This is a weird looking number! We really want our first request size to be 1MiB,
    // which is a common IO size. But Linux's readahead will try to read an extra 128k on on
    // top of a 1MiB read, which we'd have to wait for a second request to service. Because
    // FUSE doesn't know the difference between regular reads and readahead reads, it will
    // send us a READ request for that 128k, so we'll have to block waiting for it even if
    // the application doesn't want it. This is all in the noise for sequential IO, but
    // waiting for the readahead hurts random IO. So we add 128k to the first request size
    // to avoid the latency hit of the second request.
    //
    // Note the CRT does not respect this value right now, they always return chunks of part size
    // but this is the first window size we prefer.
    let initial_read_window_size = 1024 * 1024 + 128 * 1024;
    let mut client_config = S3ClientConfig::new()
        .auth_config(auth_config)
        .throughput_target_gbps(throughput_target_gbps)
        .read_part_size(args.read_part_size.unwrap_or(args.part_size) as usize)
        .write_part_size(args.write_part_size.unwrap_or(args.part_size) as usize)
        .read_backpressure(true)
        .initial_read_window(initial_read_window_size)
        .user_agent(user_agent);
    if let Some(interfaces) = &args.bind {
        client_config = client_config.network_interface_names(interfaces.clone());
    }
    if args.requester_pays {
        client_config = client_config.request_payer("requester");
    }
    if let Some(owner) = &args.expected_bucket_owner {
        client_config = client_config.bucket_owner(owner);
    }
    // Transient errors are really bad for file systems (applications don't usually expect them), so
    // let's be more stubborn than the SDK default. With the CRT defaults of 500ms backoff, full
    // jitter, and 20s max backoff time, 10 attempts will take an average of 55 seconds.
    client_config = client_config.max_attempts(NonZeroUsize::new(10).unwrap());

    let client = create_client_for_bucket(
        &args.bucket_name,
        &args.prefix(),
        args.region.clone(),
        args.endpoint_url.clone(),
        endpoint_config,
        client_config,
        &instance_info,
    )
    .context("Failed to create S3 client")?;
    let runtime = client.event_loop_group();
    let s3_personality = infer_s3_personality(args.bucket_type.clone(), &args.bucket_name, client.endpoint_config());

    Ok((client, runtime, s3_personality))
}

fn mount<ClientBuilder, Client, Runtime>(args: CliArgs, client_builder: ClientBuilder) -> anyhow::Result<FuseSession>
where
    ClientBuilder: FnOnce(&CliArgs) -> anyhow::Result<(Client, Runtime, S3Personality)>,
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Clone + Send + Sync + 'static,
{
    tracing::info!("mount-s3 {}", build_info::FULL_VERSION);
    tracing::debug!("{:?}", args);

    validate_mount_point(&args.mount_point)?;
    validate_sse_args(args.sse.as_deref(), args.sse_kms_key_id.as_deref())?;

    let (client, runtime, s3_personality) = client_builder(&args)?;

    let bucket_description = args.bucket_description();
    tracing::debug!("using S3 personality {s3_personality:?} for {bucket_description}");

    let fuse_config = args.fuse_session_config();

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
    filesystem_config.storage_class = args.storage_class;
    filesystem_config.allow_delete = args.allow_delete;
    filesystem_config.allow_overwrite = args.allow_overwrite;
    filesystem_config.s3_personality = s3_personality;
    filesystem_config.server_side_encryption = ServerSideEncryption::new(args.sse, args.sse_kms_key_id);

    // Written in this awkward way to force us to update it if we add new checksum types
    filesystem_config.use_upload_checksums = match args.upload_checksums {
        Some(UploadChecksums::Crc32c) | None => true,
        Some(UploadChecksums::Off) => false,
    };
    if !s3_personality.supports_additional_checksums() && args.upload_checksums.is_none() {
        tracing::info!("disabling upload checksums because target S3 personality does not support them");
        filesystem_config.use_upload_checksums = false;
    }

    let prefetcher_config = Default::default();

    let mut metadata_cache_ttl = args.metadata_ttl.unwrap_or_else(|| {
        if args.cache.is_some() {
            // When the data cache is enabled, use 1min as metadata-ttl.
            TimeToLive::Duration(Duration::from_secs(60))
        } else {
            TimeToLive::Minimal
        }
    });
    if matches!(metadata_cache_ttl, TimeToLive::Duration(Duration::ZERO)) {
        const ZERO_TTL_WARNING: &str = "The '--metadata-ttl 0' setting is no longer supported, is now interpreted as 'minimal', and will be removed in a future release. Use '--metadata-ttl minimal' instead";
        tracing::warn!("{}", ZERO_TTL_WARNING);
        if !args.foreground {
            // Ensure warning is visible even when not redirecting logs to stdout.
            use owo_colors::{OwoColorize, Stream::Stderr, Style};
            eprintln!(
                "{}: {}",
                "warning".if_supports_color(Stderr, |text| text.style(Style::new().yellow().bold())),
                ZERO_TTL_WARNING
            );
        }
        metadata_cache_ttl = TimeToLive::Minimal;
    }
    tracing::trace!("using metadata TTL setting {metadata_cache_ttl:?}");
    filesystem_config.cache_config = CacheConfig::new(metadata_cache_ttl);

    if let Some(path) = args.cache {
        let cache_config = match args.max_cache_size {
            // Fallback to no data cache.
            Some(0) => None,
            Some(max_size_in_mib) => Some(DiskDataCacheConfig {
                limit: CacheLimit::TotalSize {
                    max_size: (max_size_in_mib * 1024 * 1024) as usize,
                },
                ..Default::default()
            }),
            None => Some(DiskDataCacheConfig::default()),
        };

        if let Some(cache_config) = cache_config {
            let cache_key = env_unstable_cache_key();
            let managed_cache_dir = ManagedCacheDir::new_from_parent_with_cache_key(path, cache_key)
                .context("failed to create cache directory")?;

            let cache = DiskDataCache::new(managed_cache_dir.as_path_buf(), cache_config);
            let prefetcher = caching_prefetch(cache, runtime, prefetcher_config);
            let mut fuse_session = create_filesystem(
                client,
                prefetcher,
                &args.bucket_name,
                &args.prefix.unwrap_or_default(),
                filesystem_config,
                fuse_config,
                &bucket_description,
            )?;

            fuse_session.run_on_close(Box::new(move || {
                drop(managed_cache_dir);
            }));

            return Ok(fuse_session);
        }
    }

    let prefetcher = default_prefetch(runtime, prefetcher_config);
    create_filesystem(
        client,
        prefetcher,
        &args.bucket_name,
        &args.prefix.unwrap_or_default(),
        filesystem_config,
        fuse_config,
        &bucket_description,
    )
}

fn create_filesystem<Client, Prefetcher>(
    client: Client,
    prefetcher: Prefetcher,
    bucket_name: &str,
    prefix: &Prefix,
    filesystem_config: S3FilesystemConfig,
    fuse_session_config: FuseSessionConfig,
    bucket_description: &str,
) -> anyhow::Result<FuseSession>
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch + Send + Sync + 'static,
{
    tracing::trace!(?filesystem_config, "creating file system");
    let fs = S3FuseFilesystem::new(client, prefetcher, bucket_name, prefix, filesystem_config);
    tracing::debug!(?fuse_session_config, "creating fuse session");
    let session = Session::new(fs, &fuse_session_config.mount_point, &fuse_session_config.options)
        .context("Failed to create FUSE session")?;
    let session = FuseSession::new(session, fuse_session_config.max_threads).context("Failed to start FUSE session")?;

    tracing::info!(
        "successfully mounted {} at {}",
        bucket_description,
        fuse_session_config.mount_point.display()
    );

    Ok(session)
}

/// Configuration for a FUSE background session.
#[derive(Debug)]
struct FuseSessionConfig {
    pub mount_point: PathBuf,
    pub options: Vec<MountOption>,
    pub max_threads: usize,
}

/// Create a client for a bucket in the given region and send a ListObjectsV2 request to validate
/// that it's accessible. If no region is provided, attempt to infer it by first sending a
/// ListObjectsV2 to the default region.
///
/// This also has the nice side effect of triggering the CRT's DNS resolver to start pooling
/// responses, which means we don't have to wait for the first file read to start the rampup period.
fn create_client_for_bucket(
    bucket: &str,
    prefix: &Prefix,
    args_region: Option<String>,
    endpoint_url: Option<String>,
    mut endpoint_config: EndpointConfig,
    client_config: S3ClientConfig,
    instance_info: &InstanceInfo,
) -> Result<S3CrtClient, anyhow::Error> {
    let (region_to_try, user_provided_region) = get_region(args_region, instance_info);
    endpoint_config = endpoint_config.region(&region_to_try);

    if let Some(uri) = endpoint_url {
        if !user_provided_region {
            tracing::warn!(
                "endpoint specified but region unspecified. using {} as the signing region.",
                region_to_try
            );
        }

        let endpoint_uri = Uri::new_from_str(&Allocator::default(), uri).context("Failed to parse endpoint URL")?;
        endpoint_config = endpoint_config.endpoint(endpoint_uri);
    }

    let client = S3CrtClient::new(client_config.clone().endpoint_config(endpoint_config.clone()))?;

    let list_request = client.list_objects(bucket, None, "", 0, prefix.as_str());
    match futures::executor::block_on(list_request) {
        Ok(_) => Ok(client),
        // Don't try to automatically correct the region if it was manually specified incorrectly
        Err(ObjectClientError::ClientError(S3RequestError::IncorrectRegion(region))) if !user_provided_region => {
            tracing::warn!("bucket {bucket} is in region {region}, not {region_to_try}. redirecting...");
            let new_client = S3CrtClient::new(client_config.endpoint_config(endpoint_config.region(&region)))?;
            let list_request = new_client.list_objects(bucket, None, "", 0, prefix.as_str());
            futures::executor::block_on(list_request)
                .map(|_| new_client)
                .with_context(|| format!("initial ListObjectsV2 failed for bucket {bucket} in region {region}"))
        }
        Err(e) => Err(e)
            .with_context(|| format!("initial ListObjectsV2 failed for bucket {bucket} in region {region_to_try}")),
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

/// Validate a bucket name. This isn't intended to be an exhaustive validation, just a quick filter
/// to catch common CLI mistakes like using an S3 URI (`s3://bucket/`) or a path (`~/mnt`).
fn parse_bucket_name(bucket_name: &str) -> anyhow::Result<String> {
    if bucket_name.len() < 3 || bucket_name.len() > 255 {
        return Err(anyhow!("bucket names must be 3-255 characters long"));
    }

    if bucket_name.contains("s3://") {
        return Err(anyhow!("bucket name should not be an s3:// URI (provide the bare bucket name instead; use --prefix for prefix mounts)"));
    }

    // Actual bucket names must start/end with a letter, but bucket aliases can end with numbers
    // (-s3), so let's just naively check for invalid characters.
    let bucket_regex = Regex::new(r"^[0-9a-zA-Z\-\._]+$").unwrap();
    // A simple check for AWS ARN
    if !bucket_regex.is_match(bucket_name) && !bucket_name.starts_with("arn:") {
        return Err(anyhow!(
            "bucket argument should be a valid bucket name(only letters, numbers, . and -) or a valid ARN"
        ));
    }

    Ok(bucket_name.to_owned())
}

/// Validate a kms-key-id CLI parameter. Currently, Mountpoint only supports KMS Key ARNs.
fn parse_kms_key_arn(kms_key_arn: &str) -> anyhow::Result<String> {
    if kms_key_arn.starts_with("arn:") && kms_key_arn.contains(":key") {
        Ok(kms_key_arn.to_owned())
    } else {
        Err(anyhow!(
            "KMS Key ARN is only accepted as a key identifier, Key Alias ARN is not accepted"
        ))
    }
}

fn env_region() -> Option<String> {
    env::var_os("AWS_REGION").map(|val| val.to_string_lossy().into())
}

fn env_unstable_cache_key() -> Option<OsString> {
    env::var_os("UNSTABLE_MOUNTPOINT_CACHE_KEY")
}

/// Determine the region using the following sources (in order):
///  * `--region` flag (user-provided),
///  * `AWS_REGION` environment variable (user-provided),
///  * EC2 instance region (using the IMDS client),
///  * default region (us-east-1).
///
/// Returns the region name and a bool specifying whether
/// the region was provided by the user.
fn get_region(args_region: Option<String>, instance_info: &InstanceInfo) -> (String, bool) {
    const DEFAULT_REGION: &str = "us-east-1";

    // Use --region (user-provided).
    if let Some(region) = args_region {
        return (region, true);
    }

    // Use AWS_REGION (user-provided).
    if let Some(region) = env_region() {
        tracing::debug!("using AWS_REGION: {region}");
        return (region, true);
    }

    // Use instance region, if available.
    if let Ok(region) = instance_info.region() {
        tracing::debug!("using instance region {}", region);
        return (region.to_owned(), false);
    }

    // Use default region.
    tracing::debug!("using default region {}", DEFAULT_REGION);
    (DEFAULT_REGION.to_owned(), false)
}

fn infer_s3_personality(
    bucket_type: Option<BucketType>,
    bucket: &str,
    endpoint_config: EndpointConfig,
) -> S3Personality {
    if let Some(bucket_type) = bucket_type {
        return bucket_type.to_personality();
    }

    let Ok(resolved) = endpoint_config.resolve_for_bucket(bucket) else {
        return S3Personality::Standard;
    };
    let Ok(auth_scheme) = resolved.auth_scheme() else {
        return S3Personality::Standard;
    };
    if auth_scheme.scheme_name() == SigningAlgorithm::SigV4Express {
        S3Personality::ExpressOneZone
    } else if auth_scheme.signing_name() == "s3-outposts" {
        S3Personality::Outposts
    } else {
        S3Personality::Standard
    }
}

fn validate_mount_point(path: impl AsRef<Path>) -> anyhow::Result<()> {
    let mount_point = path.as_ref();

    if !mount_point.exists() {
        return Err(anyhow!("mount point {} does not exist", mount_point.display()));
    }

    if !mount_point.is_dir() {
        return Err(anyhow!("mount point {} is not a directory", mount_point.display()));
    }

    #[cfg(target_os = "linux")]
    {
        use procfs::process::Process;

        // This is a best-effort validation, so don't fail if we can't read /proc/self/mountinfo for
        // some reason.
        let mounts = match Process::myself().and_then(|me| me.mountinfo()) {
            Ok(mounts) => mounts,
            Err(e) => {
                tracing::debug!("failed to read mountinfo, not checking for existing mounts: {e:?}");
                return Ok(());
            }
        };

        if mounts.0.iter().any(|mount| mount.mount_point == mount_point) {
            return Err(anyhow!("mount point {} is already mounted", mount_point.display()));
        }
    }

    Ok(())
}

/// Disallow specifying `--sse-kms-key-id` when `--sse=AES256` as this is not allowed by the S3 API.
/// We are not able to perform this check via clap API (the closest it has is `conflicts_with` method),
/// thus having a custom validation.
fn validate_sse_args(sse_type: Option<&str>, sse_kms_key_id: Option<&str>) -> anyhow::Result<()> {
    if sse_kms_key_id.is_some() && sse_type == Some("AES256") {
        Err(anyhow!("--sse-kms-key-id can not be used with --sse AES256"))
    } else {
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case("test-bucket", true; "simple bucket")]
    #[test_case("test-123.buc_ket", true; "bucket name with .")]
    #[test_case("my-access-point-hrzrlukc5m36ft7okagglf3gmwluquse1b-s3alias", true; "access point alias")]
    #[test_case("my-object-lambda-acc-1a4n8yjrb3kda96f67zwrwiiuse1a--ol-s3", true; "object lambda access point alias")]
    #[test_case("s3://test-bucket", false; "not providing bare bucket name")]
    #[test_case("~/mnt", false; "directory name in place of bucket")]
    #[test_case("arn:aws:s3::00000000:accesspoint/s3-bucket-test.mrap", true; "multiregion accesspoint ARN")]
    #[test_case("arn:aws:s3:::doc-example-bucket", true; "bucket ARN(maybe rejected by endpoint resolver with error message)")]
    #[test_case("arn:aws-cn:s3:cn-north-2:555555555555:accesspoint/china-region-ap", true; "standard accesspoint ARN in China")]
    #[test_case("arn:aws-us-gov:s3-object-lambda:us-gov-west-1:555555555555:accesspoint/example-olap", true; "S3 object lambda accesspoint in US Gov")]
    #[test_case("arn:aws:s3-outposts:us-east-1:555555555555:outpost/outpost-id/accesspoint/accesspoint-name", true; "S3 outpost accesspoint ARN")]
    fn validate_bucket_name(bucket_name: &str, valid: bool) {
        let parsed = parse_bucket_name(bucket_name);
        if valid {
            assert_eq!(parsed.expect("valid bucket name"), bucket_name);
        } else {
            parsed.expect_err("invalid bucket name");
        }
    }

    // https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id
    #[test_case("arn:aws:kms:eu-west-1:151381207180:key/dabe1478-fe48-47ca-b6f8-ca044b643a82", true; "KMS Key ARN")]
    #[test_case("arn:aws:kms:us-west-2:111122223333:key/mrk-1234abcd12ab34cd56ef1234567890ab", true; "Multi-region KMS Key ARN")]
    #[test_case("", false; "empty")]
    #[test_case("1234abcd-12ab-34cd-56ef-1234567890ab", false; "KMS Key ID")]
    #[test_case("mrk-1234abcd12ab34cd56ef1234567890ab", false; "Multi-region KMS Key ID")]
    #[test_case("alias/ExampleAlias", false; "KMS Key alias name")]
    #[test_case("arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias", false; "KMS Key alias ARN")]
    fn test_parse_kms_key_arn(kms_key_id: &str, valid: bool) {
        let parsed = parse_kms_key_arn(kms_key_id);
        if valid {
            assert_eq!(parsed.expect("valid kms key identifier"), kms_key_id);
        } else {
            parsed.expect_err("invalid kms key identifier");
        }
    }
}

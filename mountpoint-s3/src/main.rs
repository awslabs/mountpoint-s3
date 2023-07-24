use std::fs::File;
use std::io::{Read, Write};
use std::os::unix::prelude::{FromRawFd, OpenOptionsExt};
use std::path::{Path, PathBuf};
use std::time::Duration;

use anyhow::{anyhow, Context as _};
use clap::{value_parser, Parser};
use fuser::{MountOption, Session};
use mountpoint_s3::fs::S3FilesystemConfig;
use mountpoint_s3::fuse::session::FuseSession;
use mountpoint_s3::fuse::S3FuseFilesystem;
use mountpoint_s3::metrics::MetricsSink;
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3_client::{
    AddressingStyle, EndpointConfig, HeadBucketError, ObjectClientError, S3ClientConfig, S3CrtClient,
};
use mountpoint_s3_client::{ImdsCrtClient, S3ClientAuthConfig};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::uri::Uri;
use nix::sys::signal::Signal;
use nix::unistd::ForkResult;
use regex::Regex;

mod build_info;

mod logging {
    use super::*;

    use std::backtrace::Backtrace;
    use std::fs::{DirBuilder, OpenOptions};
    use std::os::unix::fs::DirBuilderExt;
    use std::panic::{self, PanicInfo};
    use std::thread;

    use mountpoint_s3::metrics::metrics_tracing_span_layer;
    use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
    use time::format_description::FormatItem;
    use time::macros;
    use time::OffsetDateTime;
    use tracing_subscriber::{
        filter::EnvFilter, filter::LevelFilter, layer::SubscriberExt, util::SubscriberInitExt, Layer,
    };

    /// Set up all our logging infrastructure.
    ///
    /// This method:
    /// - initializes the `tracing` subscriber for capturing log output
    /// - sets up the logging adapters for the CRT and for metrics
    /// - installs a panic hook to capture panics and log them with `tracing`
    pub(super) fn init_logging(is_foreground: bool, log_directory: Option<&Path>) -> anyhow::Result<()> {
        init_tracing_subscriber(is_foreground, log_directory)?;
        install_panic_hook();
        Ok(())
    }

    fn tracing_panic_hook(panic_info: &PanicInfo) {
        let location = panic_info
            .location()
            .map(|l| format!("{}", l))
            .unwrap_or_else(|| String::from("<unknown>"));

        let payload = panic_info.payload();
        let payload = if let Some(s) = payload.downcast_ref::<&'static str>() {
            *s
        } else if let Some(s) = payload.downcast_ref::<String>() {
            s.as_str()
        } else {
            "<unknown payload>"
        };

        let thd = thread::current();

        let backtrace = Backtrace::force_capture();

        tracing::error!("panic on {thd:?} at {location}: {payload}");
        tracing::error!("backtrace:\n{backtrace}");
    }

    fn install_panic_hook() {
        let old_hook = panic::take_hook();
        panic::set_hook(Box::new(move |panic_info| {
            tracing_panic_hook(panic_info);
            old_hook(panic_info);
        }))
    }

    fn init_tracing_subscriber(is_foreground: bool, log_directory: Option<&Path>) -> anyhow::Result<()> {
        /// Create the logging config from the RUST_LOG environment variable or the default config if
        /// that variable is unset. We do this in a function because [EnvFilter] isn't [Clone] and we
        /// need a second copy of it in the foreground case to replicate logs to stdout.
        fn create_env_filter() -> EnvFilter {
            EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info,awscrt=off,fuser=error"))
        }
        let env_filter = create_env_filter();

        // Don't create the files or subscribers if we'll never emit any logs
        if env_filter.max_level_hint() == Some(LevelFilter::OFF) {
            return Ok(());
        }

        RustLogAdapter::try_init().context("failed to initialize CRT logger")?;

        let file_layer = if let Some(path) = log_directory {
            const LOG_FILE_NAME_FORMAT: &[FormatItem<'static>] =
                macros::format_description!("mountpoint-s3-[year]-[month]-[day]T[hour]-[minute]-[second]Z.log");
            let filename = OffsetDateTime::now_utc()
                .format(LOG_FILE_NAME_FORMAT)
                .context("couldn't format log file name")?;

            // log directories and files created by Mountpoint should not be accessible by other users
            let mut dir_builder = DirBuilder::new();
            dir_builder.recursive(true).mode(0o750);
            let mut file_options = OpenOptions::new();
            file_options.mode(0o640).write(true).create(true);

            dir_builder.create(path).context("failed to create log folder")?;
            let file = file_options
                .open(path.join(filename))
                .context("failed to create log file")?;

            let file_layer = tracing_subscriber::fmt::layer()
                .with_ansi(false)
                .with_writer(file)
                .with_filter(env_filter);
            Some(file_layer)
        } else {
            None
        };

        let console_layer = if is_foreground {
            let fmt_layer = tracing_subscriber::fmt::layer()
                .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
                .with_filter(create_env_filter());
            Some(fmt_layer)
        } else {
            None
        };

        let registry = tracing_subscriber::registry()
            .with(console_layer)
            .with(file_layer)
            .with(metrics_tracing_span_layer());

        registry.init();

        Ok(())
    }
}

const CLIENT_OPTIONS_HEADER: &str = "Client options";
const MOUNT_OPTIONS_HEADER: &str = "Mount options";
const BUCKET_OPTIONS_HEADER: &str = "Bucket options";
const AWS_CREDENTIALS: &str = "AWS credentials options";

#[derive(Parser)]
#[clap(about = "Mountpoint for Amazon S3", version = build_info::FULL_VERSION)]
struct CliArgs {
    #[clap(help = "Name of bucket to mount", value_parser = parse_bucket_name)]
    pub bucket_name: String,

    #[clap(help = "Directory to mount the bucket at", value_name = "DIRECTORY")]
    pub mount_point: PathBuf,

    #[clap(
        short,
        long,
        help = "Configure a directory for logs to be written to. [default: no logs written to a file]",
        value_name = "DIRECTORY"
    )]
    pub log_directory: Option<PathBuf>,

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

    #[clap(long, help = "Use Transfer Acceleration for accessing S3, if it is enabled for the given S3 bucket", help_heading = BUCKET_OPTIONS_HEADER)]
    pub transfer_acceleration: bool,

    #[clap(long, help = "Use dual-stack endpoints when accessing S3", help_heading = BUCKET_OPTIONS_HEADER)]
    pub dual_stack: bool,

    #[clap(long, help = "Use FIPS-compliant endpoints when accessing S3", help_heading = BUCKET_OPTIONS_HEADER)]
    pub fips: bool,

    #[clap(long, help = "Set the 'x-amz-request-payer' to 'requester' on S3 requests", help_heading = BUCKET_OPTIONS_HEADER)]
    pub requester_pays: bool,

    #[clap(
        long,
        help = "Do not sign requests. Credentials will not be loaded if this argument is provided.",
        help_heading = AWS_CREDENTIALS
    )]
    pub no_sign_request: bool,

    #[clap(long, help = "Use a specific profile from your credential file.", help_heading = AWS_CREDENTIALS)]
    pub profile: Option<String>,

    #[clap(
        long,
        help = "Mount file system in read-only mode",
        help_heading = MOUNT_OPTIONS_HEADER
    )]
    pub read_only: bool,

    #[clap(long, help = "Automatically unmount on exit", help_heading = MOUNT_OPTIONS_HEADER)]
    pub auto_unmount: bool,

    #[clap(long, help = "Allow root user to access file system", help_heading = MOUNT_OPTIONS_HEADER)]
    pub allow_root: bool,

    #[clap(
        long,
        help = "Allow other non-root users to access file system",
        help_heading = MOUNT_OPTIONS_HEADER
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
        help = "Number of FUSE daemon threads",
        value_name = "N",
        default_value = "1",
        value_parser = value_parser!(u64).range(1..),
        help_heading = CLIENT_OPTIONS_HEADER
    )]
    pub thread_count: Option<u64>,

    #[clap(
        long,
        help = "Part size for multi-part GET and PUT",
        default_value = "8388608",
        value_parser = value_parser!(u64).range(1..),
        help_heading = CLIENT_OPTIONS_HEADER
    )]
    pub part_size: u64,

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
}

impl CliArgs {
    fn addressing_style(&self) -> AddressingStyle {
        if self.force_path_style {
            AddressingStyle::Path
        } else {
            AddressingStyle::Automatic
        }
    }
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    if args.foreground {
        logging::init_logging(args.foreground, args.log_directory.as_deref())
            .context("failed to initialize logging")?;

        let _metrics = MetricsSink::init();

        // mount file system as a foreground process
        let session = mount(args)?;

        session.join().context("failed to join session")?;
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
                logging::init_logging(child_args.foreground, child_args.log_directory.as_deref())
                    .context("failed to initialize logging")?;

                let _metrics = MetricsSink::init();

                let session = mount(child_args);

                // close unused file descriptor, we only write from this end.
                nix::unistd::close(read_fd).context("Failed to close unused file descriptor")?;

                // SAFETY: `write_fd` is a valid file descriptor.
                let mut pipe_file = unsafe { File::from_raw_fd(write_fd) };

                let status_success = [b'0'];
                let status_failure = [b'1'];

                match session {
                    Ok(session) => {
                        pipe_file
                            .write(&status_success)
                            .context("Failed to write data to the pipe")?;
                        drop(pipe_file);

                        session.join().context("failed to join session")?;
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
                logging::init_logging(args.foreground, args.log_directory.as_deref())
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

fn mount(args: CliArgs) -> anyhow::Result<FuseSession> {
    const DEFAULT_TARGET_THROUGHPUT: f64 = 10.0;

    validate_mount_point(&args.mount_point)?;

    const DEFAULT_REGION: &str = "us-east-1";
    let endpoint_config = EndpointConfig::new(DEFAULT_REGION)
        .addressing_style(args.addressing_style())
        .use_fips(args.fips)
        .use_accelerate(args.transfer_acceleration)
        .use_dual_stack(args.dual_stack);

    let throughput_target_gbps =
        args.maximum_throughput_gbps
            .map(|t| t as f64)
            .unwrap_or_else(|| match calculate_network_throughput() {
                Ok(throughput) => throughput,
                Err(e) => {
                    tracing::warn!("failed to detect network throughput: {:?}", e);
                    DEFAULT_TARGET_THROUGHPUT
                }
            });
    tracing::info!("target network throughput {throughput_target_gbps} Gbps");

    let auth_config = if args.no_sign_request {
        S3ClientAuthConfig::NoSigning
    } else if let Some(profile_name) = args.profile {
        S3ClientAuthConfig::Profile(profile_name)
    } else {
        S3ClientAuthConfig::Default
    };

    let mut client_config = S3ClientConfig::new()
        .auth_config(auth_config)
        .throughput_target_gbps(throughput_target_gbps)
        .part_size(args.part_size as usize)
        .user_agent_prefix(&format!("mountpoint-s3/{}", build_info::FULL_VERSION));
    if args.requester_pays {
        client_config = client_config.request_payer("requester");
    }

    if let Some(owner) = args.expected_bucket_owner {
        client_config = client_config.bucket_owner(&owner);
    }

    let client = create_client_for_bucket(
        &args.bucket_name,
        args.region,
        args.endpoint_url,
        endpoint_config,
        client_config,
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
    filesystem_config.prefetcher_config.part_alignment = args.part_size as usize;

    let prefix = args.prefix.unwrap_or_default();
    let fs = S3FuseFilesystem::new(client, runtime, &args.bucket_name, &prefix, filesystem_config);

    let fs_name = String::from("mountpoint-s3");
    let mut options = vec![
        MountOption::DefaultPermissions,
        MountOption::FSName(fs_name),
        MountOption::NoAtime,
    ];
    if args.read_only {
        options.push(MountOption::RO);
    }
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

    let thread_count = args.thread_count.unwrap_or(1) as usize;
    let session = FuseSession::new(session, thread_count).context("Failed to start FUSE session")?;

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
    supposed_region: Option<String>,
    endpoint_url: Option<String>,
    mut endpoint_config: EndpointConfig,
    client_config: S3ClientConfig,
) -> Result<S3CrtClient, anyhow::Error> {
    let region_to_try = supposed_region.clone().unwrap_or_else(|| {
        if endpoint_url.is_some() {
            tracing::warn!(
                "endpoint specified but region unspecified. using {} as the signing region.",
                endpoint_config.get_region()
            );
        }
        endpoint_config.get_region().to_owned()
    });

    let endpoint = endpoint_url
        .map(|uri| Uri::new_from_str(&Allocator::default(), uri))
        .transpose()
        .context("Failed to parse endpoint URL")?;

    if let Some(endpoint_uri) = endpoint {
        endpoint_config = endpoint_config.endpoint(endpoint_uri);
    }
    let client = S3CrtClient::new(client_config.clone().endpoint_config(endpoint_config.clone()))?;

    let head_request = client.head_bucket(bucket);
    match futures::executor::block_on(head_request) {
        Ok(_) => Ok(client),
        // Don't try to automatically correct the region if it was manually specified incorrectly
        Err(ObjectClientError::ServiceError(HeadBucketError::IncorrectRegion(region))) if supposed_region.is_none() => {
            tracing::warn!("bucket {bucket} is in region {region}, not {region_to_try}. redirecting...");
            let new_client = S3CrtClient::new(client_config.endpoint_config(endpoint_config.region(&region)))?;
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
    let arn_regex = Regex::new(r#"^arn:aws(-[a-z]+)*:.*$"#).unwrap();
    // bucket argument should be a valid bucket name(only letters, numbers, . and -) or a valid ARN
    if !bucket_regex.is_match(bucket_name) && !arn_regex.is_match(bucket_name) {
        return Err(anyhow!(
            "bucket names can be a valid ARN or only contain letters, numbers, . and -"
        ));
    }

    Ok(bucket_name.to_owned())
}

fn calculate_network_throughput() -> anyhow::Result<f64> {
    let instance_type = retrieve_instance_type().context("failed to retrieve instance type")?;
    let throughput = get_maximum_network_throughput(&instance_type).context("failed to get network throughput")?;
    Ok(throughput)
}

fn retrieve_instance_type() -> anyhow::Result<String> {
    let imds_crt_client = ImdsCrtClient::new().context("failed to create IMDS client")?;

    let query = imds_crt_client
        .make_instance_type_query()
        .context("failed to send IMDS query")?;

    let result = futures::executor::block_on(query).context("IMDS query failed")?;
    tracing::debug!("detected EC2 instance type {result}");
    Ok(result)
}

fn get_maximum_network_throughput(ec2_instance_type: &str) -> anyhow::Result<f64> {
    const INSTANCE_THROUGHPUT: &str = "instance_throughput";
    let file = include_str!("../scripts/network_performance.json");

    let data: serde_json::Value = serde_json::from_str(file).context("failed to parse network_performance.json")?;
    let instance_throughput = data
        .get(INSTANCE_THROUGHPUT)
        .context("instance throughput missing from json")?;
    instance_throughput
        .get(ec2_instance_type)
        .and_then(|t| t.as_f64())
        .ok_or_else(|| anyhow!("no throughput configuration for EC2 instance type {ec2_instance_type}"))
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

        if mounts.iter().any(|mount| mount.mount_point == path.as_ref()) {
            return Err(anyhow!("mount point {} is already mounted", path.as_ref().display()));
        }
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case("c4.large", None)] // We let "Moderate" fall through to default
    #[test_case("c5.large", Some(10.0))]
    #[test_case("c5n.large", Some(25.0))]
    #[test_case("c5n.18xlarge", Some(100.0))]
    #[test_case("c6i.large", Some(12.5))]
    #[test_case("p4d.24xlarge", Some(400.0))] // 4x 100 Gigabit
    #[test_case("trn1.32xlarge", Some(800.0))] // 8x 100 Gigabit
    #[test_case("dl1.24xlarge", Some(400.0))] // 4x 100 Gigabit
    fn test_get_maximum_network_throughput(instance_type: &str, throughput: Option<f64>) {
        let actual = get_maximum_network_throughput(instance_type).ok();
        assert_eq!(actual, throughput);
    }

    #[test_case("test-bucket", true; "simple bucket")]
    #[test_case("test-123.buc_ket", true; "bucket name with .")]
    #[test_case("my-access-point-hrzrlukc5m36ft7okagglf3gmwluquse1b-s3alias", true; "access point alias")]
    #[test_case("my-object-lambda-acc-1a4n8yjrb3kda96f67zwrwiiuse1a--ol-s3", true; "object lambda access point alias")]
    #[test_case("s3://test-bucket", false; "not providing bare bucket name")]
    #[test_case("~/mnt", false; "directory name in place of bucket")]
    #[test_case("arn:aws:s3::00000000:accesspoint/s3-bucket-test.mrap", true; "multiregion accesspoint ARN")]
    #[test_case("arn:non-aws:s3::bucket-name", false; "non aws ARN")]
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
}

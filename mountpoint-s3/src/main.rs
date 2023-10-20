use std::env;
use std::fs::File;
use std::io::{Read, Write};
use std::os::fd::AsRawFd;
use std::os::unix::prelude::FromRawFd;
use std::path::{Path, PathBuf};
use std::time::Duration;

use anyhow::{anyhow, Context as _};
use clap::{value_parser, Parser};
use fuser::{MountOption, Session};
use mountpoint_s3::fs::{CacheConfig, S3FilesystemConfig};
use mountpoint_s3::fuse::session::FuseSession;
use mountpoint_s3::fuse::S3FuseFilesystem;
use mountpoint_s3::instance::InstanceInfo;
use mountpoint_s3::logging::{init_logging, LoggingConfig};
use mountpoint_s3::metrics;
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3_client::config::{AddressingStyle, EndpointConfig, S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_client::error::ObjectClientError;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::rust_log_adapter::AWSCRT_LOG_TARGET;
use mountpoint_s3_crt::common::uri::Uri;
use nix::sys::signal::Signal;
use nix::unistd::ForkResult;
use regex::Regex;

mod build_info;

const CLIENT_OPTIONS_HEADER: &str = "Client options";
const MOUNT_OPTIONS_HEADER: &str = "Mount options";
const BUCKET_OPTIONS_HEADER: &str = "Bucket options";
const AWS_CREDENTIALS_OPTIONS_HEADER: &str = "AWS credentials options";
const LOGGING_OPTIONS_HEADER: &str = "Logging options";
#[cfg(feature = "caching")]
const CACHING_OPTIONS_HEADER: &str = "Caching options";
const ADVANCED_OPTIONS_HEADER: &str = "Advanced options";

#[derive(Parser)]
#[clap(name = "mount-s3", about = "Mountpoint for Amazon S3", version = build_info::FULL_VERSION)]
struct CliArgs {
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
        help = "Disable all logging",
        help_heading = LOGGING_OPTIONS_HEADER,
        conflicts_with_all(["log_directory", "debug", "debug_crt", "log_metrics"])
    )]
    pub no_log: bool,

    #[cfg(feature = "caching")]
    #[clap(
        long,
        help = "Enable caching of file and directory metadata for a configurable time-to-live (TTL)",
        help_heading = CACHING_OPTIONS_HEADER,
    )]
    pub enable_metadata_caching: bool,

    // TODO: What is a sensible default? Should TTL even be configurable?
    #[cfg(feature = "caching")]
    #[clap(
        long,
        help = "Override time-to-live (TTL) for cached metadata entries in seconds",
        value_name = "SECONDS",
        value_parser = parse_duration_seconds,
        help_heading = CACHING_OPTIONS_HEADER,
        requires = "enable_metadata_caching",
    )]
    pub metadata_cache_ttl: Option<Duration>,

    #[clap(
        long,
        help = "Configure a string to be prepended to the 'User-Agent' HTTP request header for all S3 requests",
        value_name = "PREFIX",
        help_heading = ADVANCED_OPTIONS_HEADER,
    )]
    pub user_agent_prefix: Option<String>,
}

impl CliArgs {
    fn addressing_style(&self) -> AddressingStyle {
        if self.force_path_style {
            AddressingStyle::Path
        } else {
            AddressingStyle::Automatic
        }
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
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    if args.foreground {
        init_logging(args.logging_config()).context("failed to initialize logging")?;

        let _metrics = metrics::install();

        // mount file system as a foreground process
        let session = mount(args)?;

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

                let session = mount(args);

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

                        // Logging is set up and the mount succeeded, so we can hang up
                        // stdin/out/err now to cleanly daemonize ourselves
                        nix::unistd::close(std::io::stdin().as_raw_fd()).context("couldn't close stdin")?;
                        nix::unistd::close(std::io::stdout().as_raw_fd()).context("couldn't close stdout")?;
                        nix::unistd::close(std::io::stderr().as_raw_fd()).context("couldn't close stderr")?;

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
                let args = CliArgs::parse();

                init_logging(args.logging_config()).context("failed to initialize logging")?;
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
                    Ok('0') => {
                        println!(
                            "{} is mounted at {}",
                            args.bucket_description(),
                            args.mount_point.display()
                        );
                        tracing::debug!("success status flag received from child process")
                    }
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

    let bucket_description = args.bucket_description();

    // Placeholder region will be filled in by [create_client_for_bucket]
    let endpoint_config = EndpointConfig::new("PLACEHOLDER")
        .addressing_style(args.addressing_style())
        .use_accelerate(args.transfer_acceleration)
        .use_dual_stack(args.dual_stack);

    let instance_info = InstanceInfo::new();
    let throughput_target_gbps = args
        .maximum_throughput_gbps
        .map(|t| t as f64)
        .unwrap_or_else(|| match instance_info.network_throughput() {
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

    let user_agent_prefix = if let Some(custom_prefix) = args.user_agent_prefix {
        format!("{} mountpoint-s3/{}", custom_prefix, build_info::FULL_VERSION)
    } else {
        format!("mountpoint-s3/{}", build_info::FULL_VERSION)
    };

    let mut client_config = S3ClientConfig::new()
        .auth_config(auth_config)
        .throughput_target_gbps(throughput_target_gbps)
        .part_size(args.part_size as usize)
        .user_agent_prefix(&user_agent_prefix);
    if args.requester_pays {
        client_config = client_config.request_payer("requester");
    }

    if let Some(owner) = args.expected_bucket_owner {
        client_config = client_config.bucket_owner(&owner);
    }

    let prefix = args.prefix.unwrap_or_default();

    let client = create_client_for_bucket(
        &args.bucket_name,
        &prefix,
        args.region,
        args.endpoint_url,
        endpoint_config,
        client_config,
        &instance_info,
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
    filesystem_config.storage_class = args.storage_class;
    filesystem_config.allow_delete = args.allow_delete;

    #[cfg(feature = "caching")]
    {
        if args.enable_metadata_caching {
            // TODO: Review default for TTL
            let metadata_cache_ttl = args.metadata_cache_ttl.unwrap_or(Duration::from_secs(3600));
            filesystem_config.cache_config = CacheConfig {
                prefer_s3: false,
                dir_ttl: metadata_cache_ttl,
                file_ttl: metadata_cache_ttl,
            };
        }
    }

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

    let max_threads = args.max_threads as usize;
    let session = FuseSession::new(session, max_threads).context("Failed to start FUSE session")?;

    tracing::info!(
        "successfully mounted {} at {}",
        bucket_description,
        args.mount_point.display()
    );

    Ok(session)
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

fn parse_duration_seconds(seconds_str: &str) -> anyhow::Result<Duration> {
    let seconds = seconds_str.parse()?;
    let duration = Duration::from_secs(seconds);
    Ok(duration)
}

fn env_region() -> Option<String> {
    env::var_os("AWS_REGION").map(|val| val.to_string_lossy().into())
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
    if let Some(region) = instance_info.region() {
        tracing::debug!("using instance region {}", region);
        return (region.to_owned(), false);
    }

    // Use default region.
    tracing::debug!("using default region {}", DEFAULT_REGION);
    (DEFAULT_REGION.to_owned(), false)
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
}

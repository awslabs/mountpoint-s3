use std::fmt::Debug;
use std::path::PathBuf;
use std::time::Duration;

use anyhow::{Context as _, anyhow};
use clap::{ArgGroup, Parser, ValueEnum, value_parser};
use mountpoint_s3_client::config::{AWSCRT_LOG_TARGET, AddressingStyle, S3ClientAuthConfig};
use mountpoint_s3_client::instance_info::InstanceInfo;
use mountpoint_s3_client::user_agent::UserAgent;
use mountpoint_s3_fs::data_cache::{CacheLimit, DataCacheConfig, DiskDataCacheConfig, ExpressDataCacheConfig};
use mountpoint_s3_fs::fs::{CacheConfig, ServerSideEncryption, TimeToLive};
use mountpoint_s3_fs::fuse::config::{FuseOptions, FuseSessionConfig, MountPoint};
use mountpoint_s3_fs::logging::{LoggingConfig, prepare_log_file_name};
use mountpoint_s3_fs::mem_limiter::MINIMUM_MEM_LIMIT;
use mountpoint_s3_fs::prefix::Prefix;
use mountpoint_s3_fs::s3::S3Personality;
use mountpoint_s3_fs::s3::config::{BucketNameOrS3Uri, ClientConfig, PartConfig, S3Path, TargetThroughputSetting};
use mountpoint_s3_fs::{S3FilesystemConfig, autoconfigure, metrics};
use sysinfo::{RefreshKind, System};

use crate::build_info;

const CLIENT_OPTIONS_HEADER: &str = "Client options";
const MOUNT_OPTIONS_HEADER: &str = "Mount options";
const BUCKET_OPTIONS_HEADER: &str = "Bucket options";
const AWS_CREDENTIALS_OPTIONS_HEADER: &str = "AWS credentials options";
const LOGGING_OPTIONS_HEADER: &str = "Logging options";
const CACHING_OPTIONS_HEADER: &str = "Caching options";
const ADVANCED_OPTIONS_HEADER: &str = "Advanced options";

const FSTAB_DOCS: &str = "
Alternative fstab style:
  mount-s3 <BUCKET> <DIRECTORY> -o <OPTIONS>

Arguments:
  <BUCKET_NAME>
          Name of bucket, or an S3 URI, to mount
  <DIRECTORY>
          Location to mount bucket at
  <OPTIONS>
          fstab style options. Comma separated list of CLI options, with backslash escapes for commas, backslashes, and double quotes.
          Use of `--` to prefix arguments is not allowed.";

#[derive(Parser, Debug)]
#[clap(
    name = "mount-s3",
    about = "Mountpoint for Amazon S3",
    version = build_info::FULL_VERSION,
    group(
        ArgGroup::new("cache_group")
            .multiple(true),
    ),
    after_help = FSTAB_DOCS,
)]
pub struct CliArgs {
    #[clap(
        help = "Name of bucket, or an S3 URI, to mount",
        value_parser = |arg: &str| BucketNameOrS3Uri::try_from(arg.to_string()),
    )]
    pub bucket_name: BucketNameOrS3Uri,

    #[clap(
        help = "Directory or FUSE file descriptor to mount the bucket at",
        long_help = "\
Directory or FUSE file descriptor to mount the bucket at.

For directory mount points, the passed path must be an existing directory.

For FUSE file descriptors (Linux-only), it should be of the format `/dev/fd/N`.
Learn more in Mountpoint's configuration documentation (CONFIGURATION.md).\
        ",
        value_name = "DIRECTORY"
    )]
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

    #[clap(
        long,
        help = "Enable incremental uploads and support for appending to existing objects",
        help_heading = MOUNT_OPTIONS_HEADER,
    )]
    pub incremental_upload: bool,

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

    // This config is still unstable
    #[cfg(feature = "mem_limiter")]
    #[clap(
        long,
        help = "Maximum memory usage target [default: 95% of total system memory with a minimum of 512 MiB]",
        value_name = "MiB",
        value_parser = value_parser!(u64).range(512..),
        help_heading = CLIENT_OPTIONS_HEADER
    )]
    pub max_memory_target: Option<u64>,

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

    #[cfg(feature = "otlp_integration")]
    #[clap(
        long,
        help = "Enable OTLP metrics export to the specified endpoint",
        help_heading = LOGGING_OPTIONS_HEADER,
        value_name = "ENDPOINT"
    )]
    pub log_metrics_otlp: Option<String>,

    #[cfg(feature = "otlp_integration")]
    #[clap(
        long,
        help = "OTLP metrics export interval in seconds [default: 5]",
        help_heading = LOGGING_OPTIONS_HEADER,
        value_name = "SECONDS",
        value_parser = value_parser!(u64).range(1..),
        requires = "log_metrics_otlp"
    )]
    pub log_metrics_otlp_interval: Option<u64>,

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
        group = "cache_group",
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
        help = "Time-to-live (TTL) for cached negative entries in seconds [default: same as metadata TTL]",
        value_name = "SECONDS|indefinite|minimal",
        help_heading = CACHING_OPTIONS_HEADER,
    )]
    pub negative_metadata_ttl: Option<TimeToLive>,

    #[clap(
        long,
        help = "Maximum size of the cache directory in MiB [default: preserve 5% of available space]",
        value_name = "MiB",
        value_parser = value_parser!(u64),
        help_heading = CACHING_OPTIONS_HEADER,
        requires = "cache",
    )]
    pub max_cache_size: Option<u64>,

    #[cfg(feature = "block_size")]
    #[clap(
        long,
        help = "Size of a cache block in KiB [Default: 1024 (1 MiB)]",
        help_heading = CACHING_OPTIONS_HEADER,
        value_name = "KiB",
        requires = "cache_group",
    )]
    pub cache_block_size: Option<u64>,

    #[clap(
        long,
        help = "Enable caching of object content to the specified bucket on S3 Express One Zone (same region only)",
        help_heading = CACHING_OPTIONS_HEADER,
        value_name = "BUCKET",
        group = "cache_group",
        value_parser = |arg: &str| BucketNameOrS3Uri::try_from(arg.to_string()),
    )]
    pub cache_xz: Option<BucketNameOrS3Uri>,

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

    #[clap(skip)]
    pub is_fstab: bool,
}

#[derive(Debug, Clone, Copy)]
pub enum BucketType {
    GeneralPurpose,
    Directory,
}

impl BucketType {
    pub fn to_personality(self) -> S3Personality {
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

    pub fn s3_path(&self) -> anyhow::Result<S3Path> {
        let prefix = self.prefix.as_ref().cloned().unwrap_or_default();
        let s3path = match self.bucket_name.clone() {
            BucketNameOrS3Uri::S3Uri(s3uri) => {
                if prefix.as_str().is_empty() {
                    s3uri.into()
                } else {
                    return Err(anyhow!("explicit prefix option not allowed with S3 URI"));
                }
            }
            BucketNameOrS3Uri::BucketName(bucket_name) => S3Path::new(bucket_name, prefix),
        };
        Ok(s3path)
    }

    fn mem_limit(&self) -> u64 {
        let mut mem_limit = MINIMUM_MEM_LIMIT;

        let sys = System::new_with_specifics(RefreshKind::everything());
        let default_mem_target = (sys.total_memory() as f64 * 0.95) as u64;
        mem_limit = mem_limit.max(default_mem_target);

        #[cfg(feature = "mem_limiter")]
        if let Some(max_mem_target) = self.max_memory_target {
            mem_limit = max_mem_target * 1024 * 1024;
        }

        mem_limit
    }

    fn should_use_upload_checksum(&self, s3_personality: S3Personality) -> bool {
        // Written in this awkward way to force us to update it if we add new checksum types
        match self.upload_checksums {
            Some(UploadChecksums::Crc32c) => true,
            Some(UploadChecksums::Off) => false,
            None => {
                // Default to true if supported
                if s3_personality.supports_additional_checksums() {
                    true
                } else {
                    tracing::info!("disabling upload checksums because target S3 personality does not support them");
                    false
                }
            }
        }
    }

    pub fn filesystem_config(&self, sse: ServerSideEncryption, s3_personality: S3Personality) -> S3FilesystemConfig {
        let mut filesystem_config = S3FilesystemConfig::default();
        if let Some(uid) = self.uid {
            filesystem_config.uid = uid;
        }
        if let Some(gid) = self.gid {
            filesystem_config.gid = gid;
        }
        if let Some(dir_mode) = self.dir_mode {
            filesystem_config.dir_mode = dir_mode;
        }
        if let Some(file_mode) = self.file_mode {
            filesystem_config.file_mode = file_mode;
        }
        filesystem_config.storage_class = self.storage_class.clone();
        filesystem_config.allow_delete = self.allow_delete;
        filesystem_config.allow_overwrite = self.allow_overwrite;
        filesystem_config.incremental_upload = self.incremental_upload;
        filesystem_config.s3_personality = s3_personality;
        filesystem_config.server_side_encryption = sse;
        filesystem_config.cache_config = self.cache_config();
        filesystem_config.mem_limit = self.mem_limit();
        filesystem_config.use_upload_checksums = self.should_use_upload_checksum(s3_personality);
        filesystem_config
    }

    fn cache_block_size_in_bytes(&self) -> u64 {
        #[cfg(feature = "block_size")]
        if let Some(kib) = self.cache_block_size {
            return kib * 1024;
        }
        1024 * 1024 // 1 MiB block size - default for disk cache and for express cache
    }

    fn cache_config(&self) -> CacheConfig {
        let mut metadata_cache_ttl = self.metadata_ttl.unwrap_or_else(|| {
            if self.cache.is_some() || self.cache_xz.is_some() {
                // When the data cache is enabled, use 1min as metadata-ttl.
                TimeToLive::Duration(Duration::from_secs(60))
            } else {
                TimeToLive::Minimal
            }
        });
        if matches!(metadata_cache_ttl, TimeToLive::Duration(Duration::ZERO)) {
            const ZERO_TTL_WARNING: &str = "The '--metadata-ttl 0' setting is no longer supported, is now interpreted as 'minimal', and will be removed in a future release. Use '--metadata-ttl minimal' instead";
            tracing::warn!("{}", ZERO_TTL_WARNING);
            if !self.foreground {
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
        let mut cache_config = CacheConfig::new(metadata_cache_ttl);
        if let Some(negative_cache_ttl) = self.negative_metadata_ttl {
            cache_config = cache_config.with_negative_metadata_ttl(negative_cache_ttl);
        }
        cache_config
    }

    fn cache_express_bucket_name(&self) -> Option<S3Path> {
        let bucket_name = self.cache_xz.to_owned()?;
        let s3path = match bucket_name {
            BucketNameOrS3Uri::BucketName(bucket_name) => S3Path::new(bucket_name, Prefix::empty()),
            BucketNameOrS3Uri::S3Uri(s3_uri) => s3_uri.into(),
        };
        Some(s3path)
    }

    fn express_data_cache_config(&self, sse: ServerSideEncryption) -> anyhow::Result<Option<ExpressDataCacheConfig>> {
        match self.cache_express_bucket_name() {
            Some(express_path) => {
                if !express_path.prefix.as_str().is_empty() {
                    return Err(anyhow!("cache-xz argument must not contain a prefix"));
                }
                let bucket_name = &self.s3_path()?.bucket_name;
                let express_bucket_name = express_path.bucket_name.as_str();
                let config = ExpressDataCacheConfig::new(express_bucket_name, bucket_name)
                    .block_size(self.cache_block_size_in_bytes())
                    .sse(sse);
                Ok(Some(config))
            }
            None => Ok(None),
        }
    }

    fn disk_data_cache_config(&self) -> Option<DiskDataCacheConfig> {
        let path = self.cache.as_ref()?;
        let cache_limit = match self.max_cache_size {
            // Fallback to no data cache.
            Some(0) => return None,
            Some(max_size_in_mib) => CacheLimit::TotalSize {
                max_size: (max_size_in_mib * 1024 * 1024) as usize,
            },
            None => CacheLimit::default(),
        };
        let cache_config = DiskDataCacheConfig {
            cache_directory: path.clone(),
            block_size: self.cache_block_size_in_bytes(),
            limit: cache_limit,
        };
        Some(cache_config)
    }

    pub fn data_cache_config(&self, sse: ServerSideEncryption) -> anyhow::Result<DataCacheConfig> {
        let disk_cache_config = self.disk_data_cache_config();
        let express_cache_config = self.express_data_cache_config(sse)?;
        match (&disk_cache_config, &express_cache_config) {
            (None, Some(_)) => {
                tracing::trace!("using S3 Express One Zone bucket as a cache for object content");
            }
            (Some(_), None) => {
                tracing::trace!("using local disk as a cache for object content");
            }
            (Some(_), Some(_)) => {
                tracing::trace!("using both local disk and S3 Express One Zone bucket as a cache for object content");
            }
            _ => {
                tracing::trace!("using no cache");
            }
        }
        Ok(DataCacheConfig {
            disk_cache_config,
            express_cache_config,
        })
    }

    /// The server-side encryption configuration.
    ///
    /// Disallow specifying `--sse-kms-key-id` when `--sse=AES256` as this is not allowed by the S3 API.
    pub fn server_side_encryption(&self) -> anyhow::Result<ServerSideEncryption> {
        if self.sse_kms_key_id.is_some() && self.sse.as_deref() == Some("AES256") {
            return Err(anyhow!("--sse-kms-key-id can not be used with --sse AES256"));
        }
        Ok(ServerSideEncryption::new(self.sse.clone(), self.sse_kms_key_id.clone()))
    }

    /// Generates a logging configuration based on the CLI arguments.
    ///
    /// This includes random string generation which can change with each invocation,
    /// so once created the [LoggingConfig] should be cloned if another owned copy is required.
    pub fn make_logging_config(&self) -> LoggingConfig {
        let default_filter = if self.no_log {
            String::from("off")
        } else {
            let mut filter = if self.debug {
                String::from("debug")
            } else {
                String::from("warn")
            };
            let crt_verbosity = if self.debug_crt { "debug" } else { "off" };
            filter.push_str(&format!(",{AWSCRT_LOG_TARGET}={crt_verbosity}"));
            if self.log_metrics {
                filter.push_str(&format!(",{}=info", metrics::TARGET_NAME));
            }
            filter
        };

        let log_file = self.log_directory.as_ref().map(|dir| prepare_log_file_name(dir));

        LoggingConfig {
            log_file,
            log_to_stdout: self.foreground,
            default_filter,
        }
    }

    /// Human-readable description of the bucket being mounted
    pub fn bucket_description(&self) -> anyhow::Result<String> {
        let s3_path = self.s3_path()?;
        Ok(s3_path.bucket_description())
    }

    pub fn fuse_session_config(&self) -> anyhow::Result<FuseSessionConfig> {
        let mount_point = MountPoint::new(&self.mount_point).context("Failed to create mount point")?;
        let fuse_options = FuseOptions {
            read_only: self.read_only,
            auto_unmount: self.auto_unmount,
            allow_root: self.allow_root,
            allow_other: self.allow_other,
        };
        FuseSessionConfig::new(mount_point, fuse_options, self.max_threads as usize)
    }

    fn user_agent(&self, instance_info: &InstanceInfo, version: &str) -> UserAgent {
        let user_agent_prefix = if let Some(custom_prefix) = &self.user_agent_prefix {
            format!("{custom_prefix} mountpoint-s3/{version}")
        } else {
            format!("mountpoint-s3/{version}")
        };
        let mut user_agent = UserAgent::new_with_instance_info(Some(user_agent_prefix), instance_info);
        if self.read_only {
            user_agent.value("mp-readonly");
        }
        if self.is_fstab {
            user_agent.value("mp-fstab");
        }
        match (&self.cache, self.cache_express_bucket_name()) {
            (None, None) => (),
            (None, Some(_)) => {
                user_agent.key_value("mp-cache", "shared");
            }
            (Some(_), None) => {
                user_agent.key_value("mp-cache", "local");
            }
            (Some(_), Some(_)) => {
                user_agent.key_values("mp-cache", &["shared", "local"]);
            }
        }
        if let Some(ttl) = self.metadata_ttl {
            user_agent.key_value("mp-cache-ttl", &ttl.to_string());
        }
        if let Some(interfaces) = &self.bind {
            user_agent.key_value("mp-nw-interfaces", &interfaces.len().to_string());
        }
        user_agent
    }

    fn throughput_target_gbps(&self, instance_info: &InstanceInfo) -> TargetThroughputSetting {
        let throughput_target_gbps = self.maximum_throughput_gbps.map(|t| TargetThroughputSetting::User { gbps: t as f64 }).unwrap_or_else(|| {
            match autoconfigure::network_throughput(instance_info) {
                Ok(throughput) => TargetThroughputSetting::Instance { gbps: throughput },
                Err(e) => {
                    tracing::warn!(
                        "failed to detect network throughput. Using {} gbps as throughput. \
                        Use --maximum-throughput-gbps CLI flag to configure a target throughput appropriate for the instance. Detection failed due to: {:?}",
                        TargetThroughputSetting::DEFAULT_TARGET_THROUGHPUT_GBPS,
                        e,
                        );
                    TargetThroughputSetting::Default
                }
            }
        });
        tracing::info!("target network throughput {} Gbps", throughput_target_gbps.value());
        throughput_target_gbps
    }

    pub fn personality(&self) -> Option<S3Personality> {
        self.bucket_type.map(|bucket_type| bucket_type.to_personality())
    }

    fn part_config(&self) -> PartConfig {
        PartConfig::with_read_write_sizes(
            self.read_part_size.unwrap_or(self.part_size) as usize,
            self.write_part_size.unwrap_or(self.part_size) as usize,
        )
    }

    fn auth_config(&self) -> S3ClientAuthConfig {
        if self.no_sign_request {
            S3ClientAuthConfig::NoSigning
        } else if let Some(profile_name) = self.profile.clone() {
            S3ClientAuthConfig::Profile(profile_name)
        } else {
            S3ClientAuthConfig::Default
        }
    }

    pub fn client_config(&self, version: &str) -> ClientConfig {
        let instance_info = InstanceInfo::new();
        let user_agent = self.user_agent(&instance_info, version);
        let throughput_target = self.throughput_target_gbps(&instance_info);
        let region = autoconfigure::get_region(&instance_info, self.region.clone());

        ClientConfig {
            region,
            endpoint_url: self.endpoint_url.clone(),
            addressing_style: self.addressing_style(),
            dual_stack: self.dual_stack,
            transfer_acceleration: self.transfer_acceleration,
            auth_config: self.auth_config(),
            requester_pays: self.requester_pays,
            expected_bucket_owner: self.expected_bucket_owner.clone(),
            throughput_target,
            bind: self.bind.clone(),
            part_config: self.part_config(),
            user_agent,
        }
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

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case("s3://bucket--eun1-az1--x-s3", true; "s3:// example bucket")]
    #[test_case("s3://bucket--eun1-az1--x-s3/", true; "s3:// example bucket with empty prefix")]
    #[test_case("bucket--eun1-az1--x-s3", true; "raw example bucket")]
    #[test_case("bucket--eun1-az1--x-s3/", false; "raw example bucket with /")]
    #[test_case("s3://bucket--eun1-az1--x-s3/prefix", false; "s3:// example bucket with invalid prefix")]
    #[test_case("s3://bucket--eun1-az1--x-s3/prefix/", false; "s3:// example bucket with prefix (prefixes not allowed)")]
    fn validate_s3_express_cache_bucket_name(bucket_name: &str, valid: bool) {
        fn _parse_cli_args(bucket_name: &str) -> Option<()> {
            let cli_args =
                CliArgs::try_parse_from(["mount-s3", "bucket", "test/location", "--cache-xz", bucket_name]).ok()?;
            let sse = cli_args.server_side_encryption().unwrap();
            let _express_data_cache_config = cli_args.express_data_cache_config(sse).ok()??;
            Some(())
        }
        assert_eq!(
            valid,
            _parse_cli_args(bucket_name).is_some(),
            "bucket_name: {bucket_name}, expected: {valid}"
        );
    }

    #[test_case("s3://bucket", Ok(("bucket".to_string(), "".to_string())); "s3:// example bucket")]
    #[test_case("s3://bucket/", Ok(("bucket".to_string(), "".to_string())); "s3:// example bucket with empty prefix")]
    #[test_case("bucket", Ok(("bucket".to_string(), "".to_string())); "raw example bucket")]
    #[test_case("arn:aws:s3::00000000:accesspoint/s3-bucket-test.mrap", Ok(("arn:aws:s3::00000000:accesspoint/s3-bucket-test.mrap".to_string(), "".to_string())); "ARN example")]
    #[test_case("arn:aws:s3-outposts:us-east-1:555555555555:outpost/outpost-id/accesspoint/accesspoint-name", Ok(("arn:aws:s3-outposts:us-east-1:555555555555:outpost/outpost-id/accesspoint/accesspoint-name".to_string(), "".to_string())); "S3 outpost accesspoint ARN")]
    #[test_case("s3://arn:aws:s3-outposts:us-east-1:555555555555:outpost/outpost-id/accesspoint/accesspoint-name", Err("the bucket must have a valid name (only letters, numbers, . and -). ARNs are not supported in s3:// URIs".to_string()); "S3 URI with ARN without trailing slash")]
    #[test_case("s3://arn:aws:s3-outposts:us-east-1:555555555555:outpost/outpost-id/accesspoint/accesspoint-name/", Err("the bucket must have a valid name (only letters, numbers, . and -). ARNs are not supported in s3:// URIs".to_string()); "S3 URI with ARN")]
    #[test_case("s3://bucket/prefix/", Ok(("bucket".to_string(), "prefix/".to_string())); "s3:// example bucket with prefix")]
    #[test_case("s3://bucket/prefix", Err("invalid bucket prefix".to_string()); "s3:// example bucket with prefix with missing delimeter")]
    fn validate_bucket_path(bucket_name: &str, expected_path: Result<(String, String), String>) {
        fn get_err(bucket_name: &str) -> Result<(String, String), anyhow::Error> {
            let cli_args = CliArgs::try_parse_from(["mount-s3", bucket_name, "test/location"])?;
            cli_args
                .s3_path()
                .map(|path| (path.bucket_name, path.prefix.as_str().to_string()))
        }
        let s3_path = get_err(bucket_name);
        match (s3_path, expected_path) {
            (Ok(s3_path), Ok(expected_path)) => {
                assert_eq!(
                    expected_path, s3_path,
                    "bucket_name: {s3_path:?}, expected: {expected_path:?}",
                );
            }
            (Err(err), Err(should_contain)) => {
                assert!(
                    format!("{err:#}").contains(&should_contain),
                    "Actual error `{err:#}` does not contain string {should_contain:?}"
                )
            }
            (s3_path, expected_path) => {
                panic!("bucket_name: {s3_path:?}, expected: {expected_path:?}");
            }
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

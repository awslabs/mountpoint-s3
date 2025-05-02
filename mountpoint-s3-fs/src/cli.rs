use std::env;
use std::ffi::OsString;
use std::fmt::Debug;
use std::fs::{self, File};
use std::io::{Read, Write};
use std::os::fd::AsRawFd;
use std::path::PathBuf;
use std::sync::Arc;
use std::time::Duration;

use anyhow::{anyhow, Context as _};
use clap::{value_parser, ArgGroup, Parser, ValueEnum};
use futures::executor::block_on;
use futures::task::Spawn;
use mountpoint_s3_client::config::{AddressingStyle, EventLoopGroup, S3ClientAuthConfig, AWSCRT_LOG_TARGET};
use mountpoint_s3_client::instance_info::InstanceInfo;
use mountpoint_s3_client::user_agent::UserAgent;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use nix::sys::signal::Signal;
use nix::unistd::ForkResult;
use regex::Regex;
use sysinfo::{RefreshKind, System};

use crate::async_util::Runtime;
use crate::data_cache::{
    CacheLimit, DataCacheConfig, DiskDataCache, DiskDataCacheConfig, ExpressDataCache, ExpressDataCacheConfig,
    ManagedCacheDir, MultilevelDataCache,
};
use crate::fs::{CacheConfig, ServerSideEncryption, TimeToLive};
use crate::fuse::config::{FuseOptions, FuseSessionConfig, MountPoint};
use crate::fuse::session::FuseSession;
use crate::fuse::S3FuseFilesystem;
use crate::logging::{init_logging, prepare_log_file_name, LoggingConfig};
use crate::mem_limiter::MINIMUM_MEM_LIMIT;
use crate::prefetch::{Prefetcher, PrefetcherBuilder};
use crate::prefix::Prefix;
use crate::s3::config::{ClientConfig, PartConfig, S3Path};
use crate::s3::S3Personality;
use crate::{autoconfigure, metrics, S3Filesystem, S3FilesystemConfig};

const CLIENT_OPTIONS_HEADER: &str = "Client options";
const MOUNT_OPTIONS_HEADER: &str = "Mount options";
const BUCKET_OPTIONS_HEADER: &str = "Bucket options";
const AWS_CREDENTIALS_OPTIONS_HEADER: &str = "AWS credentials options";
const LOGGING_OPTIONS_HEADER: &str = "Logging options";
const CACHING_OPTIONS_HEADER: &str = "Caching options";
const ADVANCED_OPTIONS_HEADER: &str = "Advanced options";

#[derive(Parser, Debug)]
pub struct ContextParams {
    pub full_version: String,
}

#[derive(Parser, Debug)]
#[clap(
    group(
        ArgGroup::new("cache_group")
            .multiple(true),
    ),
)]
pub struct CliArgs {
    #[clap(help = "Name of bucket to mount", value_parser = parse_bucket_name)]
    pub bucket_name: String,

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
        value_parser = parse_bucket_name,
        group = "cache_group",
    )]
    pub cache_xz: Option<String>,

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

#[derive(Debug, Clone, Copy)]
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

    fn s3_path(&self) -> S3Path {
        S3Path::new(self.bucket_name.to_owned(), self.prefix())
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

    fn filesystem_config(&self, sse: ServerSideEncryption, s3_personality: S3Personality) -> S3FilesystemConfig {
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

    fn cache_express_bucket_name(&self) -> Option<&str> {
        if let Some(bucket_name) = &self.cache_xz {
            return Some(bucket_name);
        }
        None
    }

    fn express_data_cache_config(&self, sse: ServerSideEncryption) -> Option<ExpressDataCacheConfig> {
        let express_bucket_name = self.cache_express_bucket_name()?;
        let config = ExpressDataCacheConfig::new(express_bucket_name, &self.bucket_name)
            .block_size(self.cache_block_size_in_bytes())
            .sse(sse);
        Some(config)
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

    fn data_cache_config(&self, sse: ServerSideEncryption) -> DataCacheConfig {
        let disk_cache_config = self.disk_data_cache_config();
        let express_cache_config = self.express_data_cache_config(sse);
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
        DataCacheConfig {
            disk_cache_config,
            express_cache_config,
        }
    }

    /// The server-side encryption configuration.
    ///
    /// Disallow specifying `--sse-kms-key-id` when `--sse=AES256` as this is not allowed by the S3 API.
    fn server_side_encryption(&self) -> anyhow::Result<ServerSideEncryption> {
        if self.sse_kms_key_id.is_some() && self.sse.as_deref() == Some("AES256") {
            return Err(anyhow!("--sse-kms-key-id can not be used with --sse AES256"));
        }
        Ok(ServerSideEncryption::new(self.sse.clone(), self.sse_kms_key_id.clone()))
    }

    /// Generates a logging configuration based on the CLI arguments.
    ///
    /// This includes random string generation which can change with each invocation,
    /// so once created the [LoggingConfig] should be cloned if another owned copy is required.
    fn make_logging_config(&self) -> LoggingConfig {
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

        let log_file = self.log_directory.as_ref().map(|dir| prepare_log_file_name(dir));

        LoggingConfig {
            log_file,
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

    fn fuse_session_config(&self) -> anyhow::Result<FuseSessionConfig> {
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
            format!("{} mountpoint-s3/{}", custom_prefix, version)
        } else {
            format!("mountpoint-s3/{}", version)
        };
        let mut user_agent = UserAgent::new_with_instance_info(Some(user_agent_prefix), instance_info);
        if self.read_only {
            user_agent.value("mp-readonly");
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

    fn throughput_target_gbps(&self, instance_info: &InstanceInfo) -> f64 {
        const DEFAULT_TARGET_THROUGHPUT: f64 = 10.0;

        let throughput_target_gbps = self.maximum_throughput_gbps.map(|t| t as f64).unwrap_or_else(|| {
            match autoconfigure::network_throughput(instance_info) {
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
        throughput_target_gbps
    }

    fn personality(&self) -> Option<S3Personality> {
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

    fn client_config(&self, version: &str) -> ClientConfig {
        let instance_info = InstanceInfo::new();
        let user_agent = self.user_agent(&instance_info, version);
        let throughput_target_gbps = self.throughput_target_gbps(&instance_info);
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
            throughput_target_gbps,
            bind: self.bind.clone(),
            part_config: self.part_config(),
            user_agent,
        }
    }
}

pub fn main<ClientBuilder, Client, Runtime>(
    client_builder: ClientBuilder,
    args: CliArgs,
    context_params: ContextParams,
) -> anyhow::Result<()>
where
    ClientBuilder: FnOnce(&CliArgs, &ContextParams) -> anyhow::Result<(Client, Runtime, S3Personality)>,
    Client: ObjectClient + Clone + Send + Sync + 'static,
    Runtime: Spawn + Clone + Send + Sync + 'static,
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

        // mount file system as a foreground process
        let session = mount(args, client_builder, context_params)?;

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
                let args = CliArgs::parse();
                let _logging = init_logging(logging_config).context("failed to initialize logging")?;

                let _metrics = metrics::install();

                create_pid_file()?;

                let session = mount(args, client_builder, context_params);

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

/// Create a real S3 client
pub fn create_s3_client(
    args: &CliArgs,
    context_params: &ContextParams,
) -> anyhow::Result<(S3CrtClient, EventLoopGroup, S3Personality)> {
    // We keep this logic here until we decouple config layer from FS implementation
    // Once we do that, we can move this logic into a hosting app as it will know the full context
    // and remove the contextParams struct
    let version = &context_params.full_version;
    let client_config = args.client_config(version);

    let s3_path = args.s3_path();
    let client = client_config
        .create_client(Some(&s3_path))
        .context("Failed to create S3 client")?;

    let runtime = client.event_loop_group();
    let s3_personality = args
        .personality()
        .unwrap_or_else(|| S3Personality::infer_from_bucket(&s3_path.bucket_name, &client.endpoint_config()));

    Ok((client, runtime, s3_personality))
}

fn mount<ClientBuilder, Client, ClientRuntime>(
    args: CliArgs,
    client_builder: ClientBuilder,
    context_params: ContextParams,
) -> anyhow::Result<FuseSession>
where
    ClientBuilder: FnOnce(&CliArgs, &ContextParams) -> anyhow::Result<(Client, ClientRuntime, S3Personality)>,
    Client: ObjectClient + Clone + Send + Sync + 'static,
    ClientRuntime: Spawn + Clone + Send + Sync + 'static,
{
    tracing::info!("mount-s3 {}", context_params.full_version);
    tracing::debug!("{:?}", args);

    let fuse_config = args.fuse_session_config()?;
    let sse = args.server_side_encryption()?;

    let (client, runtime, s3_personality) = client_builder(&args, &context_params)?;

    let bucket_description = args.bucket_description();
    tracing::debug!("using S3 personality {s3_personality:?} for {bucket_description}");

    let s3_path = args.s3_path();
    let filesystem_config = args.filesystem_config(sse.clone(), s3_personality);
    let mut data_cache_config = args.data_cache_config(sse);

    let runtime = Runtime::new(runtime);
    let managed_cache_dir = setup_disk_cache_directory(&mut data_cache_config)?;
    let prefetcher_builder = create_prefetcher_builder(data_cache_config, &client, &runtime)?;
    let fs = create_filesystem(client, prefetcher_builder, runtime, &s3_path, filesystem_config);
    let mut fuse_session = create_fuse_session(fs, fuse_config, &bucket_description)?;
    if let Some(managed_cache_dir) = managed_cache_dir {
        fuse_session.run_on_close(Box::new(move || {
            drop(managed_cache_dir);
        }));
    }
    Ok(fuse_session)
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

fn create_prefetcher_builder<Client>(
    data_cache_config: DataCacheConfig,
    client: &Client,
    runtime: &Runtime,
) -> anyhow::Result<PrefetcherBuilder<Client>>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let disk_cache = data_cache_config.disk_cache_config.map(DiskDataCache::new);
    let express_cache = match data_cache_config.express_cache_config {
        None => None,
        Some(config) => {
            let cache_bucket_name = config.bucket_name.clone();
            let express_cache = ExpressDataCache::new(client.clone(), config);
            block_on(express_cache.verify_cache_valid())
                .with_context(|| format!("initial PutObject failed for shared cache bucket {cache_bucket_name}"))?;
            Some(express_cache)
        }
    };
    let client = client.clone();
    let builder = match (disk_cache, express_cache) {
        (None, Some(express_cache)) => Prefetcher::caching_builder(express_cache, client),
        (Some(disk_cache), None) => Prefetcher::caching_builder(disk_cache, client),
        (Some(disk_cache), Some(express_cache)) => {
            let cache = MultilevelDataCache::new(Arc::new(disk_cache), express_cache, runtime.clone());
            Prefetcher::caching_builder(cache, client)
        }
        _ => Prefetcher::default_builder(client),
    };
    Ok(builder)
}

fn create_filesystem<Client>(
    client: Client,
    prefetcher_builder: PrefetcherBuilder<Client>,
    runtime: Runtime,
    s3_path: &S3Path,
    filesystem_config: S3FilesystemConfig,
) -> S3Filesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    tracing::trace!(?filesystem_config, "creating file system");
    S3Filesystem::new(
        client,
        prefetcher_builder,
        runtime,
        &s3_path.bucket_name,
        &s3_path.prefix,
        filesystem_config,
    )
}

fn create_fuse_session<Client>(
    fs: S3Filesystem<Client>,
    fuse_session_config: FuseSessionConfig,
    bucket_description: &str,
) -> anyhow::Result<FuseSession>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let fuse_fs = S3FuseFilesystem::new(fs);

    tracing::debug!(?fuse_session_config, "creating fuse session");
    let mount_point_path = format!("{}", &fuse_session_config.mount_point);

    let session = FuseSession::new(fuse_fs, fuse_session_config)?;
    tracing::info!("successfully mounted {} at {}", bucket_description, mount_point_path);
    Ok(session)
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

fn env_unstable_cache_key() -> Option<OsString> {
    env::var_os("UNSTABLE_MOUNTPOINT_CACHE_KEY")
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
    #[test_case("arn:aws:s3:::amzn-s3-demo-bucket", true; "bucket ARN(maybe rejected by endpoint resolver with error message)")]
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

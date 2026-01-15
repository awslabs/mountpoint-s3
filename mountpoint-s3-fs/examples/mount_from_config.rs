use std::{fs::File, io::Read, path::Path, time::Instant};

use anyhow::{Context, Result, anyhow};
use clap::Parser;
use mountpoint_s3_client::{config::AddressingStyle, instance_info::InstanceInfo, user_agent::UserAgent};
use mountpoint_s3_fs::{
    MountpointConfig, Runtime, S3FilesystemConfig, autoconfigure,
    data_cache::{CacheLimit, DataCacheConfig, DiskDataCacheConfig, ManagedCacheDir},
    fs::CacheConfig,
    fuse::{
        ErrorLogger,
        config::{FuseOptions, FuseSessionConfig, MountPoint},
        session::FuseSession,
    },
    logging::{LoggingConfig, LoggingHandle, error_logger::FileErrorLogger, init_logging},
    manifest::{ChannelConfig, Manifest, ManifestMetablock, ingest_manifest},
    memory::PagedPool,
    metrics::{self, MetricsSinkHandle},
    s3::config::{ClientConfig, PartConfig, Region, TargetThroughputSetting},
};
use nix::sys::signal::{self, Signal};
use nix::unistd::Pid;
use serde::Deserialize;
use tempfile::tempdir_in;
use tracing::info;

const CONFIG_VERSION: &str = "0.0.1";

#[derive(Debug, Deserialize)]
#[serde(tag = "type")]
enum ThroughputConfig {
    IMDSAutoConfigure,
    IMDSLookUp { ec2_instance_type: String },
    Explicit { throughput: f64 },
}

/// Configuration for disk cache
#[derive(Debug, Deserialize)]
#[serde(deny_unknown_fields)]
struct DiskCacheConfig {
    /// Directory path for the cache
    path: String,
    /// Maximum size of the cache in bytes
    limit_bytes: Option<u64>,
}

/// Configuration options for a Mountpoint instance
#[derive(Debug, Deserialize)]
#[serde(deny_unknown_fields)]
struct ConfigOptions {
    /// Version of the configuration format
    #[allow(dead_code)]
    config_version: String,
    /// Directory to mount the bucket at
    mountpoint: String,
    /// AWS region of the bucket, e.g. "us-east-2"
    region: String,
    /// Maximum number of FUSE daemon threads
    max_threads: Option<usize>,
    throughput_config: ThroughputConfig,
    /// Directory where MP stores temporary files, such as cached metadata
    metadata_store_dir: String,
    /// Directory where MP will create an event log
    event_log_dir: String,
    /// List of channels
    channels: Vec<ChannelConfig>,
    #[serde(default)]
    allow_other: bool,
    #[serde(default)]
    allow_root: bool,
    loglevel: Option<String>,
    endpoint_url: Option<String>,
    expected_bucket_owner: Option<String>,
    auto_unmount: Option<bool>,
    user_agent_prefix: Option<String>,
    part_size: Option<usize>,
    /// Target memory limit (in bytes) that Mountpoint will try to enforce
    memory_limit_bytes: Option<u64>,

    // File system options
    dir_mode: Option<u16>,
    file_mode: Option<u16>,
    uid: Option<u32>,
    gid: Option<u32>,

    /// Disk cache configuration
    disk_cache: Option<DiskCacheConfig>,

    /// Limits the number of concurrent FUSE requests that the kernel may send, default: 64
    max_background: Option<u16>,
}

impl ConfigOptions {
    fn build_fuse_session_config(&self) -> Result<FuseSessionConfig> {
        let mount_point = MountPoint::new(&self.mountpoint)?;
        let fuse_options = FuseOptions {
            read_only: true,
            allow_other: self.allow_other,
            allow_root: self.allow_root,
            auto_unmount: self.auto_unmount.unwrap_or(false),
            clone_fd: false,
        };
        FuseSessionConfig::new(mount_point, fuse_options, self.max_threads.unwrap_or(16))
    }

    fn build_filesystem_config(&self) -> Result<S3FilesystemConfig> {
        let mut fs_config = S3FilesystemConfig {
            cache_config: CacheConfig::new(mountpoint_s3_fs::fs::TimeToLive::Indefinite),
            ..Default::default()
        };

        // Apply custom filesystem settings if provided
        if let Some(dir_mode) = self.dir_mode {
            fs_config.dir_mode = dir_mode;
        }
        if let Some(file_mode) = self.file_mode {
            fs_config.file_mode = file_mode;
        }
        if let Some(uid) = self.uid {
            fs_config.uid = uid;
        }
        if let Some(gid) = self.gid {
            fs_config.uid = gid;
        }
        if let Some(memory_limit_bytes) = self.memory_limit_bytes {
            fs_config.mem_limit = memory_limit_bytes;
        }
        if let Some(max_background) = self.max_background {
            fs_config.max_background = max_background;
        }
        // For this binary we expect sequential read pattern. Thus, opt-out from the 1MB-initial request,
        // trading-off latency for throughput and more accurate memory limiting.
        fs_config.prefetcher_config.initial_request_size = 0;
        Ok(fs_config)
    }

    fn build_client_config(&self) -> Result<ClientConfig> {
        let user_agent_string = match &self.user_agent_prefix {
            Some(prefix) => format!("{prefix}/mp-exmpl"),
            None => "mountpoint-s3-example/mp-exmpl".to_string(),
        };
        let throughput_target = self.determine_throughput()?;
        Ok(ClientConfig {
            region: Region::new_user_specified(self.region.clone()),
            endpoint_url: self.endpoint_url.clone(),
            addressing_style: AddressingStyle::Automatic,
            dual_stack: false,
            transfer_acceleration: false,
            auth_config: Default::default(),
            requester_pays: false,
            expected_bucket_owner: self.expected_bucket_owner.clone(),
            throughput_target,
            bind: None,
            part_config: PartConfig::with_part_size(self.part_size()),
            user_agent: UserAgent::new(Some(user_agent_string)),
        })
    }

    fn build_logging_config(&self) -> LoggingConfig {
        LoggingConfig {
            log_file: None,
            log_to_stdout: true,
            default_filter: self.loglevel.clone().unwrap_or("debug,awscrt=off".to_string()),
        }
    }

    fn disk_data_cache_config(&self) -> Result<Option<DiskDataCacheConfig>> {
        let Some(disk_cache) = self.disk_cache.as_ref() else {
            return Ok(None);
        };
        let cache_limit = match disk_cache.limit_bytes {
            Some(0) => return Err(anyhow!("Cache limit cannot be zero")),
            Some(max_size_bytes) => CacheLimit::TotalSize {
                max_size: max_size_bytes as usize,
            },
            None => CacheLimit::default(),
        };
        let cache_config = DiskDataCacheConfig {
            cache_directory: disk_cache.path.clone().into(),
            block_size: 1024 * 1024, // 1 MiB block size - default
            limit: cache_limit,
        };
        Ok(Some(cache_config))
    }

    fn build_data_cache_config(&self) -> Result<DataCacheConfig> {
        let disk_cache_config = self.disk_data_cache_config()?;
        match &disk_cache_config {
            Some(_) => {
                tracing::trace!("using local disk as a cache for object content");
            }
            None => {
                tracing::trace!("using no cache");
            }
        }
        Ok(DataCacheConfig {
            disk_cache_config,
            express_cache_config: None,
        })
    }

    fn determine_throughput(&self) -> Result<TargetThroughputSetting> {
        match &self.throughput_config {
            // TODO(chagem): Remove some code duplication, by moving this logic into fs crate.
            ThroughputConfig::Explicit { throughput } => Ok(TargetThroughputSetting::User { gbps: *throughput }),
            ThroughputConfig::IMDSAutoConfigure => {
                let instance_info = InstanceInfo::new();
                match autoconfigure::network_throughput(&instance_info) {
                    Ok(throughput) => Ok(TargetThroughputSetting::Instance { gbps: throughput }),
                    Err(e) => {
                        tracing::warn!(
                            "Failed to detect network throughput. Using {} gbps: {:?}",
                            TargetThroughputSetting::DEFAULT_TARGET_THROUGHPUT_GBPS,
                            e
                        );
                        Ok(TargetThroughputSetting::Default)
                    }
                }
            }
            ThroughputConfig::IMDSLookUp { ec2_instance_type } => {
                let target = autoconfigure::get_maximum_network_throughput(ec2_instance_type)
                    .context("Unrecognized instance ID")?;
                Ok(TargetThroughputSetting::Instance { gbps: target })
            }
        }
    }

    fn part_size(&self) -> usize {
        self.part_size.unwrap_or(8388608)
    }
}

/// Reads the config_version field from a JSON config file and validates it against CONFIG_VERSION
fn validate_config_version(json_str: &str) -> Result<()> {
    #[derive(Deserialize)]
    struct VersionOnly {
        config_version: String,
    }

    let version_info: VersionOnly = serde_json::from_str(json_str)?;

    if version_info.config_version != CONFIG_VERSION {
        return Err(anyhow!(
            "Unsupported version of the configuration format, supported version is {}",
            CONFIG_VERSION
        ));
    }

    Ok(())
}

fn load_config<P: AsRef<Path>>(path: P) -> Result<ConfigOptions> {
    let mut file = File::open(path)?;
    let mut json_str = String::new();
    file.read_to_string(&mut json_str)?;
    validate_config_version(&json_str)?;
    let config: ConfigOptions = serde_json::from_str(&json_str)?;
    Ok(config)
}

/// Processes a manifest and creates the metadata store in `database_directory`
fn process_manifests(config: &ConfigOptions, database_directory: &Path) -> Result<Manifest> {
    if config.channels.is_empty() {
        return Err(anyhow!("At least one channel must be specified"));
    }

    // Generate manifest path and check if it exists
    let db_path = database_directory.join("metadata.db");
    info!(
        "Ingesting CSV manifests into the metadata store, channels {:?}",
        config.channels
    );
    let start = Instant::now();
    ingest_manifest(&config.channels, &db_path)?;
    info!(
        "Created the the metadata store in {:?} stored at {:?}",
        start.elapsed(),
        db_path
    );

    Ok(Manifest::new(&db_path)?)
}

fn setup_logging(config: &ConfigOptions) -> Result<(LoggingHandle, MetricsSinkHandle)> {
    let logging = init_logging(config.build_logging_config())?;
    let metrics = metrics::install(None).map_err(|e| anyhow!("Failed to initialize metrics: {e}"))?;
    Ok((logging, metrics))
}

fn setup_disk_cache_directory(cache_config: &mut DataCacheConfig) -> anyhow::Result<Option<ManagedCacheDir>> {
    let Some(disk_cache_config) = &mut cache_config.disk_cache_config else {
        return Ok(None);
    };
    let managed_cache_dir =
        ManagedCacheDir::new_from_parent_with_cache_key(&disk_cache_config.cache_directory, None, true)
            .context("failed to create cache directory")?;
    disk_cache_config.cache_directory = managed_cache_dir.as_path_buf();
    Ok(Some(managed_cache_dir))
}

fn mount_filesystem(
    config: &ConfigOptions,
    manifest: Manifest,
    error_logger: impl ErrorLogger + Send + Sync + 'static,
) -> Result<FuseSession> {
    // Create the Mountpoint configuration
    let fs_config = config.build_filesystem_config()?;
    let mut data_cache_config = config.build_data_cache_config()?;
    let managed_cache_dir = setup_disk_cache_directory(&mut data_cache_config)?;
    let mp_config = MountpointConfig::new(config.build_fuse_session_config()?, fs_config, data_cache_config)
        .error_logger(error_logger);

    // Create the client and runtime
    let client_config = config.build_client_config()?;
    let pool = PagedPool::new_with_candidate_sizes([client_config.part_config.read_size_bytes]);
    let client = client_config
        .create_client(pool.clone(), None)
        .context("Failed to create S3 client")?;
    let runtime = Runtime::new(client.event_loop_group());

    let metablock = ManifestMetablock::new(manifest)?;

    // Create and run the FUSE session
    let mut fuse_session = mp_config
        .create_fuse_session(metablock, client, runtime, pool)
        .context("Failed to create FUSE session")?;

    if let Some(managed_cache_dir) = managed_cache_dir {
        fuse_session.run_on_close(Box::new(move || {
            drop(managed_cache_dir);
        }));
    }
    Ok(fuse_session)
}

#[derive(Parser, Debug)]
#[clap(version, about = "Mountpoint launcher from configuration file")]
struct Args {
    /// Path to the configuration file
    #[clap(short, long, default_value = "config.json")]
    config: String,
}

fn main() -> Result<()> {
    // Parse command line arguments
    let args = Args::parse();
    // Read the config
    let config = load_config(&args.config).context("Failed to load config")?;
    // Set up the error logger
    let error_logger = FileErrorLogger::new(&config.event_log_dir, || {
        // trigger graceful shutdown (with umount) by sending a signal to self
        signal::kill(Pid::this(), Signal::SIGINT).expect("kill must succeed");
    })
    .context("Failed to create an event log")?;
    // Set up logging
    let (_logging, _metrics) = setup_logging(&config).context("Failed to setup logging")?;
    // Process manifests if needed
    let temporary_dir = tempdir_in(&config.metadata_store_dir).context("Failed to create manifest")?;
    let manifest = process_manifests(&config, temporary_dir.path()).context("Failed to create manifest")?;
    // Build all configurations
    let fuse_session = mount_filesystem(&config, manifest, error_logger).context("Failed to mount filesystem")?;
    // Join the session and wait until it completes
    fuse_session.join().context("Failed to join session")?;
    Ok(())
}

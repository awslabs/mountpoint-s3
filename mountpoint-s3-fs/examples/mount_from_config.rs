use std::{
    fs::File,
    io::BufReader,
    path::{Path, PathBuf},
    time::Instant,
};

use anyhow::{Context, Result, anyhow};
use clap::Parser;
use mountpoint_s3_client::{config::AddressingStyle, instance_info::InstanceInfo, user_agent::UserAgent};
use mountpoint_s3_fs::{
    MountpointConfig, Runtime, S3FilesystemConfig, autoconfigure,
    data_cache::DataCacheConfig,
    fs::CacheConfig,
    fuse::{
        ErrorLogger,
        config::{FuseOptions, FuseSessionConfig, MountPoint},
        session::FuseSession,
    },
    logging::{LoggingConfig, LoggingHandle, error_logger::FileErrorLogger, init_logging},
    manifest::{Manifest, ingest_manifest},
    memory::PagedPool,
    metrics::{self, MetricsSinkHandle},
    prefix::Prefix,
    s3::config::{ClientConfig, PartConfig, Region, S3Path, TargetThroughputSetting},
};
use nix::sys::signal::{self, Signal};
use nix::unistd::Pid;
use serde::{Deserialize, Serialize};
use tempfile::tempdir_in;
use tracing::info;

#[derive(Debug, Serialize, Deserialize)]
struct ChannelConfig {
    directory_name: String,
    bucket_name: String,
    #[serde(default)]
    prefix: String,
    manifest_path: PathBuf,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(tag = "type")]
enum ThroughputConfig {
    IMDSAutoConfigure,
    IMDSLookUp { ec2_instance_type: String },
    Explicit { throughput: f64 },
}

/// Configuration options for a Mountpoint instance
#[derive(Debug, Serialize, Deserialize)]
struct ConfigOptions {
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

    // File system options
    dir_mode: Option<u16>,
    file_mode: Option<u16>,
    uid: Option<u32>,
    gid: Option<u32>,
}

impl ConfigOptions {
    fn build_fuse_session_config(&self) -> Result<FuseSessionConfig> {
        let mount_point = MountPoint::new(&self.mountpoint)?;
        let fuse_options = FuseOptions {
            read_only: true,
            allow_other: self.allow_other,
            allow_root: self.allow_root,
            auto_unmount: self.auto_unmount.unwrap_or(false),
        };
        FuseSessionConfig::new(mount_point, fuse_options, self.max_threads.unwrap_or(16))
    }

    fn build_filesystem_config(&self, manifest: Manifest) -> Result<S3FilesystemConfig> {
        let mut fs_config = S3FilesystemConfig {
            cache_config: CacheConfig::new(mountpoint_s3_fs::fs::TimeToLive::Indefinite),
            ..Default::default()
        };

        fs_config.manifest = Some(manifest);

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
            part_config: PartConfig::with_part_size(self.part_size.unwrap_or(8388608)),
            user_agent: UserAgent::new(Some(user_agent_string)),
        })
    }

    fn build_s3_path(&self) -> Result<S3Path> {
        Ok(S3Path {
            bucket_name: self.channels[0].bucket_name.clone(),
            prefix: Prefix::new(&self.channels[0].prefix)?,
        })
    }

    fn build_logging_config(&self) -> LoggingConfig {
        LoggingConfig {
            log_file: None,
            log_to_stdout: true,
            default_filter: self.loglevel.clone().unwrap_or("debug,awscrt=off".to_string()),
        }
    }

    fn build_data_cache_config(&self) -> DataCacheConfig {
        DataCacheConfig::default()
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
}

fn load_config<P: AsRef<Path>>(path: P) -> Result<ConfigOptions> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    let config: ConfigOptions = serde_json::from_reader(reader)?;
    Ok(config)
}

/// Processes a manifest and stores database in `database_directory`
fn process_manifests(config: &ConfigOptions, database_directory: &Path) -> Result<Manifest> {
    // Error if no channels
    if config.channels.len() != 1 {
        return Err(anyhow!("Exactly one channel must be configured"));
    }

    let channel = &config.channels[0];
    let csv_path = &channel.manifest_path;
    // Generate manifest path and check if it exists
    let db_path = database_directory.join("metadata.db");
    info!("Creating manifest for channel {}", channel.directory_name);
    let start = Instant::now();
    ingest_manifest(csv_path, &db_path)?;
    info!("Created manifest in {:?} stored at {:?}", start.elapsed(), db_path);

    Ok(Manifest::new(&db_path)?)
}

fn setup_logging(config: &ConfigOptions) -> Result<(LoggingHandle, MetricsSinkHandle)> {
    let logging = init_logging(config.build_logging_config())?;
    let metrics = metrics::install();
    Ok((logging, metrics))
}

fn mount_filesystem(
    config: &ConfigOptions,
    manifest: Manifest,
    error_logger: impl ErrorLogger + Send + Sync + 'static,
) -> Result<FuseSession> {
    // Create the Mountpoint configuration
    let mp_config = MountpointConfig::new(
        config.build_fuse_session_config()?,
        config.build_filesystem_config(manifest)?,
        config.build_data_cache_config(),
    )
    .error_logger(error_logger);

    // Get S3 Path
    let s3_path = config.build_s3_path()?;

    // Create the client and runtime
    let client_config = config.build_client_config()?;
    let pool = PagedPool::new([client_config.part_config.read_size_bytes]);
    let client = client_config
        .create_client(pool.clone(), None)
        .context("Failed to create S3 client")?;
    let runtime = Runtime::new(client.event_loop_group());

    // Create and run the FUSE session
    let fuse_session = mp_config
        .create_fuse_session(s3_path, client, runtime, Some(pool))
        .context("Failed to create FUSE session")?;

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

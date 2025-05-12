use anyhow::{anyhow, Context, Result};
use clap::Parser;
use mountpoint_s3_client::{config::AddressingStyle, instance_info::InstanceInfo, user_agent::UserAgent};
use mountpoint_s3_fs::{
    autoconfigure,
    data_cache::DataCacheConfig,
    fs::CacheConfig,
    fuse::config::{FuseOptions, FuseSessionConfig, MountPoint},
    logging::{init_logging, LoggingConfig, LoggingHandle},
    manifest::{ingest_manifest, Manifest},
    metrics,
    metrics::MetricsSinkHandle,
    prefix::Prefix,
    s3::config::{ClientConfig, PartConfig, Region, S3Path},
    MountpointConfig, Runtime, S3FilesystemConfig,
};

use std::{fs, time::Instant};

use serde::{Deserialize, Serialize};
use std::{
    fs::File,
    io::BufReader,
    path::{Path, PathBuf},
};

#[derive(Debug, Serialize, Deserialize)]
struct ChannelConfig {
    directory_name: String,
    bucket_name: String,
    #[serde(default)]
    prefix: String,
    manifest_path: Option<PathBuf>,
}

#[derive(Debug, Serialize, Deserialize)]
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
    /// Directory where MP stores temporary files, such as the manifest metadata
    metadata_store_dir: String,
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
            Some(prefix) => format!("{}/mp-exmpl", prefix),
            None => "mountpoint-s3-example/mp-exmpl".to_string(),
        };
        let target_throughput = self.determine_throughput()?;
        Ok(ClientConfig {
            region: Region::new_user_specified(self.region.clone()),
            endpoint_url: self.endpoint_url.clone(),
            addressing_style: AddressingStyle::Automatic,
            dual_stack: false,
            transfer_acceleration: false,
            auth_config: mountpoint_s3_client::config::S3ClientAuthConfig::Default,
            requester_pays: false,
            expected_bucket_owner: self.expected_bucket_owner.clone(),
            throughput_target_gbps: target_throughput,
            bind: None,
            part_config: PartConfig::with_read_write_sizes(
                self.part_size.unwrap_or(8388608),
                self.part_size.unwrap_or(8388608),
            ),
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

    fn determine_throughput(&self) -> Result<f64> {
        match &self.throughput_config {
            // TODO(chagem): Remove some code duplication, by moving this logic into fs crate.
            ThroughputConfig::Explicit { throughput } => Ok(*throughput),
            ThroughputConfig::IMDSAutoConfigure => {
                const DEFAULT_THROUGHPUT: f64 = 10.0;
                let instance_info = InstanceInfo::new();
                match autoconfigure::network_throughput(&instance_info) {
                    Ok(throughput) => Ok(throughput),
                    Err(e) => {
                        tracing::warn!("Failed to detect network throughput. Using {DEFAULT_THROUGHPUT} gbps: {e:?}");
                        Ok(DEFAULT_THROUGHPUT)
                    }
                }
            }
            ThroughputConfig::IMDSLookUp { ec2_instance_type } => {
                autoconfigure::get_maximum_network_throughput(ec2_instance_type).context("Unrecognized instance ID")
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

// Simplified manifest processing function
fn process_manifests(config: &ConfigOptions) -> Result<Manifest> {
    // Error if no manifests or no channels
    if config.channels.len() != 1 {
        return Err(anyhow!("Exactly one channel must be configured"));
    }

    let channel = &config.channels[0];
    // Skip if no manifest provided
    let csv_path = match &channel.manifest_path {
        Some(path) => path,
        None => return Err(anyhow!("Channel has no manifest specified")),
    };
    // Generate manifest path and check if it exists
    let db_path = Path::new(&config.metadata_store_dir).join(format!("{}.db", channel.directory_name));
    fs::create_dir_all(db_path.parent().unwrap())?;
    println!("Creating manifest for channel {}", channel.directory_name);
    let start = Instant::now();
    ingest_manifest(csv_path, &db_path)?;
    println!("Created manifest in {:?}", start.elapsed());

    Ok(Manifest::new(&db_path)?)
}

fn setup_logging(config: &ConfigOptions) -> Result<(LoggingHandle, MetricsSinkHandle)> {
    let logging = init_logging(config.build_logging_config())?;
    let metrics = metrics::install();
    Ok((logging, metrics))
}

fn mount_filesystem(
    config: &ConfigOptions,
    manifest_path: Manifest,
    logging: LoggingHandle,
    metrics: MetricsSinkHandle,
) -> Result<()> {
    // Create the Mountpoint configuration
    let mp_config = MountpointConfig::new(
        config.build_fuse_session_config()?,
        config.build_filesystem_config(manifest_path)?,
        config.build_data_cache_config(),
    );
    // Get S3 Path
    let s3_path = config.build_s3_path()?;

    // Create the client and runtime
    let client = config
        .build_client_config()?
        .create_client(Some(&s3_path))
        .context("Failed to create S3 client")?;
    let runtime = Runtime::new(client.event_loop_group());

    // Create and run the FUSE session
    let fuse_session = mp_config
        .create_fuse_session(s3_path, client, runtime)
        .context("Failed to create FUSE session")?;

    // Join the session and wait until it completes
    fuse_session.join().context("Failed to join session")?;
    drop(metrics);
    drop(logging);
    Ok(())
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
    let config = load_config(&args.config)?;
    // Set up logging
    let (logging, metrics) = setup_logging(&config)?;
    // Process manifests if needed
    let manifest = process_manifests(&config)?;
    // Build all configurations
    mount_filesystem(&config, manifest, logging, metrics)?;
    Ok(())
}

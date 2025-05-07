use anyhow::anyhow;
use anyhow::Context;
use clap::Parser;
use mountpoint_s3_client::config::AddressingStyle;
use mountpoint_s3_client::instance_info::InstanceInfo;
use mountpoint_s3_client::user_agent::UserAgent;
use mountpoint_s3_fs::logging::{init_logging, LoggingConfig};
use mountpoint_s3_fs::prefix::Prefix;
use mountpoint_s3_fs::s3::config::{ClientConfig, PartConfig, Region, S3Path};
use mountpoint_s3_fs::{autoconfigure, autoconfigure::get_maximum_network_throughput, Runtime};
use mountpoint_s3_fs::{
    data_cache::DataCacheConfig,
    fs::CacheConfig,
    fuse::config::{FuseOptions, FuseSessionConfig, MountPoint},
    metrics, MountpointConfig, S3FilesystemConfig,
};
use serde::{Deserialize, Serialize};
use std::fs::File;
use std::io::BufReader;
use std::path::Path;
use std::path::PathBuf;
use tracing::info;

#[derive(Debug, Serialize, Deserialize)]
struct ChannelConfig {
    directory_name: String,
    bucket_name: String,
    #[serde(default)]
    prefix: String,
    manifest_path: Option<String>,
    #[serde(skip)]
    converted_db_path: Option<PathBuf>,
}

#[derive(Debug, Serialize, Deserialize)]
enum ThroughputConfig {
    IMDSAutoConfigure,
    IMDSLookUp { instance_id: String },
    Explicit { throughput: f64 },
}

/// Configuration options for a Mountpoint instance
#[derive(Debug, Serialize, Deserialize)]
struct ConfigOptions {
    /// A string escribing the mountpoint
    mountpoint: String,
    /// Used to set the region i.e. to "us-east-2"
    region: String,
    /// Use to set the maximum number of threads used by MP
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
    fn fuse_session_config(&self) -> anyhow::Result<FuseSessionConfig> {
        let mount_point = MountPoint::new(&self.mountpoint).unwrap();
        let fuse_options = FuseOptions {
            read_only: true,
            allow_other: self.allow_other,
            allow_root: self.allow_root,
            auto_unmount: self.auto_unmount.unwrap_or(false),
        };
        FuseSessionConfig::new(mount_point, fuse_options, self.max_threads.unwrap_or(16))
    }

    fn filesystem_config(&self) -> anyhow::Result<S3FilesystemConfig> {
        let mut fs_config = S3FilesystemConfig::default();
        let cache_config = CacheConfig::new(mountpoint_s3_fs::fs::TimeToLive::Indefinite);
        fs_config.cache_config = cache_config;

        #[cfg(feature = "manifest")]
        if let Some(manifest_path) = &self.channels[0].converted_db_path {
            use mountpoint_s3_fs::manifest::Manifest;
            let manifest = Manifest::new(manifest_path).unwrap();
            fs_config.manifest = Some(manifest);
        }

        #[cfg(not(feature = "manifest"))]
        if self.channels[0].converted_db_path.is_some() {
            return Err(anyhow!("Please compile using manifest feature flag to use manifest."));
        }
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

    fn data_cache_config(&self) -> anyhow::Result<DataCacheConfig> {
        Ok(DataCacheConfig::default())
    }

    fn client_config(&self) -> anyhow::Result<ClientConfig> {
        let user_agent_string = match &self.user_agent_prefix {
            Some(prefix) => format!("{}/mp-exmpl-smt", prefix),
            None => "mountpoint-s3-example/mp-exmpl-smt".to_string(),
        };
        let target_throughput = match &self.throughput_config {
            ThroughputConfig::Explicit { throughput } => *throughput,
            ThroughputConfig::IMDSAutoConfigure => {
                const DEFAULT_TARGET_THROUGHPUT: f64 = 10.0;

                let instance_info = InstanceInfo::new();
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
            }
            ThroughputConfig::IMDSLookUp { instance_id } => {
                get_maximum_network_throughput(instance_id).expect("Unrecognised instance id")
            }
        };
        Ok(ClientConfig {
            region: Region::new_user_specified(self.region.clone()),
            endpoint_url: self.endpoint_url.clone(),
            addressing_style: AddressingStyle::Automatic,
            dual_stack: false, // TODO: Check
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
            user_agent: UserAgent::new(Some(user_agent_string.to_owned())),
        })
    }

    fn s3_path(&self) -> anyhow::Result<S3Path> {
        Ok(S3Path {
            bucket_name: self.channels[0].bucket_name.clone(),
            prefix: Prefix::new(&self.channels[0].prefix)?,
        })
    }

    fn logging_config(&self) -> anyhow::Result<LoggingConfig> {
        Ok(LoggingConfig {
            log_file: None,
            log_to_stdout: true,
            default_filter: self.loglevel.clone().unwrap_or("debug,awscrt=off".to_string()),
        })
    }
}

fn load_config<P: AsRef<Path>>(path: P) -> anyhow::Result<ConfigOptions> {
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    let config: ConfigOptions = serde_json::from_reader(reader)?;
    Ok(config)
}

// Function that checks for validity of a configuration
fn validate_config(config: &ConfigOptions) -> anyhow::Result<()> {
    // TODO: For multichannel-support, check disjointness of channel prefixes
    if config.channels.len() != 1 {
        return Err(anyhow!("Exactly one channel must be configured"));
    }
    // Check that all manifest files exist
    for channel in &config.channels {
        if let Some(manifest_path) = &channel.manifest_path {
            let path = Path::new(manifest_path);
            if !path.exists() {
                return Err(anyhow!("Manifest file not found"));
            }
            if !path.is_file() {
                return Err(anyhow!("Manifest not a file"));
            }
        }
    }

    Ok(())
}

// Function that handles manifest ingestion
// TODO: Parallelize
fn manifest_ingestion(config: &mut ConfigOptions) -> anyhow::Result<()> {
    #[cfg(feature = "manifest")]
    {
        info!("Starting manifest ingestion");
        use mountpoint_s3_fs::manifest::{create_db, CsvReader};
        use std::time::Instant;
        use std::{fs::File, io::BufReader};

        let manifest_dir = PathBuf::from(&config.metadata_store_dir).join("manifests");
        // Process manifests in parallel
        for channel in &mut config.channels {
            // Skip if no CSV path provided
            let csv_path = match &channel.manifest_path {
                Some(path) => path,
                None => continue,
            };

            // Generate manifest path
            let db_path = manifest_dir.join(format!("{}.db", channel.directory_name));
            // Check if the file already exists
            if db_path.exists() {
                return Err(anyhow!("Database already exists -- aborting."));
            }
            channel.converted_db_path = Some(db_path.clone());

            // Create the manifest
            println!("Creating manifest for channel {}", channel.directory_name);
            let start = Instant::now();

            let file = File::open(csv_path).with_context(|| {
                format!(
                    "Failed to open CSV file for channel {}: {}",
                    channel.directory_name, csv_path
                )
            })?;

            let csv_reader = CsvReader::new(BufReader::new(file));

            create_db(&db_path, csv_reader, 100000)
                .with_context(|| format!("Failed to create manifest for channel {}", channel.directory_name))?;

            println!(
                "Created manifest for {} in {:?}",
                channel.directory_name,
                start.elapsed()
            );
        }

        info!("Successfully ingested manifest for all channels");
        Ok(())
    }
    #[cfg(not(feature = "manifest"))]
    {
        for channel in &config.channels {
            match &channel.manifest_path {
                Some(_) => return Err(anyhow!("Please compile with manifest feature flag to use manifests.")),
                None => continue,
            }
        }
        Ok(())
    }
}

#[derive(Parser, Debug)]
#[clap(author, version, about = "Mountpoint configuration validator")]
struct Args {
    /// Path to the configuration file
    #[clap(short, long, default_value = "config.json")]
    config: String,
}

fn main() -> anyhow::Result<()> {
    // Parse command line arguments
    let args = Args::parse();

    // Read in ConfigOptions from json file specified by the --config argument
    let mut config = load_config(&args.config)?;
    println!("Configuration loaded successfully, validating.");
    validate_config(&config)?;
    println!("Configuration validated successfully, starting manifest ingestion.");
    manifest_ingestion(&mut config)?;
    println!("Manifest ingested successfully. Creating configuration for MP.");
    // Creating fuse session config
    let fuse_session_config = config
        .fuse_session_config()
        .context("failed to create fuse session config")?;
    let data_cache_config = config
        .data_cache_config()
        .context("failed to create data cache config")?;
    let filesystem_config = config.filesystem_config()?;
    let client_config = config.client_config()?;
    let logging_config = config.logging_config()?;
    let s3_path = config.s3_path().unwrap();

    // Creating
    let mp_config = MountpointConfig::new(fuse_session_config, filesystem_config, data_cache_config);
    println!("Configuarion translated successfully. Creating fuse session.");
    let _logging = init_logging(logging_config).context("failed to initialize logging")?;
    let _metrics = metrics::install();

    let client = client_config
        .create_client(Some(&s3_path))
        .context("Failed to create S3 client")?;
    println!("Created client config.");

    let runtime = Runtime::new(client.event_loop_group());
    println!("Created runtime.");
    let fuse_session = mp_config.create_fuse_session(s3_path, client, runtime).unwrap();
    fuse_session.join().context("failed to join session")?;

    println!("Successfully mounted.");
    Ok(())
}

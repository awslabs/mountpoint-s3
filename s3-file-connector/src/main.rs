use std::path::PathBuf;

use anyhow::{anyhow, Context as _};
use aws_crt_s3::common::rust_log_adapter::RustLogAdapter;
use clap::{ArgGroup, Parser};
use fuser::{BackgroundSession, MountOption, Session};
use s3_client::{AddressingStyle, Endpoint, HeadBucketError, S3ClientConfig, S3CrtClient, S3RequestError};

use s3_file_connector::fs::S3FilesystemConfig;
use s3_file_connector::fuse::S3FuseFilesystem;
use s3_file_connector::metrics::{metrics_tracing_span_layer, MetricsSink};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::Layer;

mod build_info;

fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    // Brutal hack because tracing-subscriber doesn't allow us to specify *multiple* default
    // directives -- we want warning-level logging except for the CRT, which is very spammy.
    if std::env::var("RUST_LOG") == Err(std::env::VarError::NotPresent) {
        std::env::set_var("RUST_LOG", "info,awscrt=off,fuser=error");
    }

    let fmt_layer = tracing_subscriber::fmt::layer()
        .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
        .with_filter(tracing_subscriber::filter::EnvFilter::from_default_env());

    tracing_subscriber::registry()
        .with(fmt_layer)
        .with(metrics_tracing_span_layer())
        .init();
}

#[derive(Parser)]
#[clap(about = "S3 File Connector", version = build_info::FULL_VERSION)]
#[clap(group(ArgGroup::new("addressing-style").args(&["virtual-addressing", "path-addressing"])))]
struct CliArgs {
    #[clap(help = "Name of bucket to mount")]
    pub bucket_name: String,

    #[clap(help = "Mount point for file system")]
    pub mount_point: PathBuf,

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
    init_tracing_subscriber();

    let args = CliArgs::parse();

    // validate mount point
    if !args.mount_point.exists() || !args.mount_point.is_dir() {
        return Err(anyhow!(
            "Mount point {} does not exist or it is not a directory",
            args.mount_point.display()
        ));
    }

    let mut options = vec![
        MountOption::RO,
        MountOption::DefaultPermissions,
        MountOption::FSName("fuse_sync".to_string()),
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

    let fs = S3FuseFilesystem::new(
        client,
        runtime,
        &args.bucket_name,
        args.prefix.as_deref().unwrap_or(""),
        filesystem_config,
    );

    let session = Session::new(fs, &args.mount_point, &options).context("Failed to create FUSE session")?;

    let session = if let Some(thread_count) = args.thread_count {
        BackgroundSession::new_multi_thread(session, thread_count as usize)
    } else {
        BackgroundSession::new(session)
    };
    let session = session.context("Failed to start FUSE session")?;

    tracing::info!("successfully mounted {:?}", args.mount_point);

    let (sender, receiver) = std::sync::mpsc::sync_channel(0);

    ctrlc::set_handler(move || {
        let _ = sender.send(());
    })
    .context("Failed to install signal handler")?;

    let _ = receiver.recv();

    drop(session);

    Ok(())
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
            ..client_config
        },
    )?;

    let head_request = client.head_bucket(bucket);
    match futures::executor::block_on(head_request) {
        Ok(_) => Ok(client),
        // Don't try to automatically correct the region if it was manually specified incorrectly
        Err(S3RequestError::ServiceError(HeadBucketError::IncorrectRegion(region))) if supposed_region.is_none() => {
            tracing::warn!("bucket {bucket} is in region {region}, not {region_to_try}. redirecting...");
            let endpoint = Endpoint::from_region(&region, addressing_style)?;
            let new_client = S3CrtClient::new(
                &region,
                S3ClientConfig {
                    endpoint: Some(endpoint),
                    ..client_config
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

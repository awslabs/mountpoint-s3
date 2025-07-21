use std::sync::Arc;
use std::time::Instant;

use clap::Parser;
use mountpoint_s3_client::config::{Allocator, EndpointConfig, RustLogAdapter, S3ClientConfig, Uri};
use mountpoint_s3_client::types::ChecksumAlgorithm;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_fs::mem_limiter::MemoryLimiter;
use mountpoint_s3_fs::upload::{Uploader, UploaderConfig};
use mountpoint_s3_fs::{Runtime, ServerSideEncryption};
use sysinfo::{RefreshKind, System};
use tracing_subscriber::EnvFilter;
use tracing_subscriber::fmt::Subscriber;
use tracing_subscriber::util::SubscriberInitExt;

/// Like `tracing_subscriber::fmt::init` but sends logs to stderr
fn init_tracing_subscriber() {
    RustLogAdapter::try_init().expect("unable to install CRT log adapter");

    let env_filter = EnvFilter::from_default_env();
    let subscriber = Subscriber::builder()
        .with_env_filter(env_filter)
        .with_ansi(supports_color::on(supports_color::Stream::Stderr).is_some())
        .with_writer(std::io::stderr)
        .finish();

    subscriber.try_init().expect("unable to install global subscriber");
}

#[derive(Parser, Debug)]
struct UploadBenchmarkArgs {
    #[clap(help = "Name of bucket to upload")]
    pub bucket: String,

    #[clap(help = "Object key to upload")]
    pub key: String,

    #[clap(long, help = "Object size to upload in bytes")]
    pub object_size: usize,

    #[clap(long, help = "Number of benchmark iterations", default_value = "1")]
    pub iterations: usize,

    #[clap(long, help = "Desired throughput in Gbps", default_value = "10")]
    pub throughput_target_gbps: usize,

    #[clap(long, help = "AWS region of the bucket", default_value = "us-east-1")]
    pub region: String,

    #[clap(long, help = "S3 endpoint URL [default: auto-detect endpoint]")]
    pub endpoint_url: Option<String>,

    #[clap(long, help = "Run benchmark using incremental uploads")]
    pub incremental_upload: bool,

    #[clap(long, help = "Size of each write in bytes", default_value = "131072")]
    pub write_size: usize,

    #[arg(long, help = "Override value for CRT memory limit in gibibytes", value_name = "GiB")]
    pub crt_memory_limit_gib: Option<u64>,

    #[clap(
        long,
        help = "Maximum memory usage target for Mountpoint's memory limiter [default: 95% of total system memory]",
        value_name = "MiB"
    )]
    pub max_memory_target: Option<u64>,

    #[clap(long, help = "Write part size for the upload", default_value = "8388608")]
    pub write_part_size: usize,

    #[clap(long, help = "Server-side encryption algorithm to use when uploading")]
    pub sse: Option<String>,

    #[clap(
        long,
        help = "KMS key ARN to use with KMS server-side encryption when uploading.",
        requires = "sse"
    )]
    pub sse_kms_key_id: Option<String>,

    #[clap(
        long,
        help = "Checksum algorithm to use for S3 uploads",
        value_name = "off|crc32c|crc32|sha1|sha256",
        default_value = "crc32c"
    )]
    pub checksum_algorithm: String,
}

fn main() {
    init_tracing_subscriber();
    let _metrics_handle = mountpoint_s3_fs::metrics::install();

    let args = UploadBenchmarkArgs::parse();
    println!("starting upload benchmark with {:?}", &args);

    let mut endpoint_config = EndpointConfig::new(&args.region);
    if let Some(url) = &args.endpoint_url {
        let endpoint_uri = Uri::new_from_str(&Allocator::default(), url).expect("Failed to parse endpoint URL");
        endpoint_config = endpoint_config.endpoint(endpoint_uri);
    }
    let mut config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .throughput_target_gbps(args.throughput_target_gbps as f64)
        .write_part_size(args.write_part_size);
    if let Some(crt_mem_limit_gib) = args.crt_memory_limit_gib {
        config = config.memory_limit_in_bytes(crt_mem_limit_gib * 1024 * 1024 * 1024);
    }
    let client = Arc::new(S3CrtClient::new(config).expect("couldn't create client"));
    let runtime = Runtime::new(client.event_loop_group());

    for i in 0..args.iterations {
        let max_memory_target = if let Some(target) = args.max_memory_target {
            target * 1024 * 1024
        } else {
            // Default to 95% of total system memory
            let sys = System::new_with_specifics(RefreshKind::everything());
            (sys.total_memory() as f64 * 0.95) as u64
        };
        let mem_limiter = Arc::new(MemoryLimiter::new(client.clone(), max_memory_target));

        let buffer_size = args.write_part_size;
        let server_side_encryption = ServerSideEncryption::new(args.sse.clone(), args.sse_kms_key_id.clone());

        let checksum_algorithm = match args.checksum_algorithm.as_str() {
            "off" => None,
            "crc32c" => Some(ChecksumAlgorithm::Crc32c),
            "crc32" => Some(ChecksumAlgorithm::Crc32),
            "sha1" => Some(ChecksumAlgorithm::Sha1),
            "sha256" => Some(ChecksumAlgorithm::Sha256),
            other => Some(ChecksumAlgorithm::Unknown(other.to_string())),
        };
        let uploader = Uploader::new(
            client.clone(),
            runtime.clone(),
            mem_limiter,
            UploaderConfig::new(buffer_size)
                .server_side_encryption(server_side_encryption)
                .default_checksum_algorithm(checksum_algorithm),
        );

        let start = Instant::now();
        if args.incremental_upload {
            futures::executor::block_on(run_append_uploader(&uploader, &args, i));
        } else {
            futures::executor::block_on(run_mpu_uploader(&uploader, &args, i));
        }
        let elapsed = start.elapsed();
        let uploaded_size_mib = (args.object_size as f64) / (1024 * 1024) as f64;
        println!(
            "iteration {}: uploaded {:.2} MiB in {:.2}s: {:.2}MiB/s",
            i,
            uploaded_size_mib,
            elapsed.as_secs_f64(),
            uploaded_size_mib / elapsed.as_secs_f64(),
        );

        // clean up
        futures::executor::block_on(client.delete_object(&args.bucket, &args.key)).unwrap();
    }
}

async fn run_mpu_uploader<Client>(uploader: &Uploader<Client>, args: &UploadBenchmarkArgs, iteration: usize)
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let start = Instant::now();

    let bucket = args.bucket.clone();
    let key = args.key.clone();
    let mut upload_request = uploader.start_atomic_upload(bucket, key).unwrap();

    let mut total_bytes_written = 0;
    let target_size = args.object_size;

    let contents = vec![0xab; args.write_size];
    while total_bytes_written < target_size {
        let len = upload_request
            .write(total_bytes_written as i64, &contents)
            .await
            .unwrap();
        total_bytes_written += len;
    }
    let elapsed = start.elapsed();
    let total_mib_written = (total_bytes_written as f64) / (1024 * 1024) as f64;
    println!(
        "iteration {}: written {:.2} MiB without commit in {:.2}s: {:.2}MiB/s",
        iteration,
        total_mib_written,
        elapsed.as_secs_f64(),
        total_mib_written / elapsed.as_secs_f64(),
    );
    upload_request.complete().await.unwrap();
}

async fn run_append_uploader<Client>(uploader: &Uploader<Client>, args: &UploadBenchmarkArgs, iteration: usize)
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let start = Instant::now();

    let bucket = args.bucket.clone();
    let key = args.key.clone();
    let mut upload_request = uploader.start_incremental_upload(bucket.clone(), key.clone(), 0, None);

    let mut total_bytes_written = 0;
    let target_size = args.object_size;

    let contents = vec![0xab; args.write_size];
    while total_bytes_written < target_size {
        upload_request
            .write(total_bytes_written as u64, &contents)
            .await
            .unwrap();
        total_bytes_written += contents.len();
    }
    let elapsed = start.elapsed();
    let total_mib_written = (total_bytes_written as f64) / (1024 * 1024) as f64;
    println!(
        "iteration {}: written {:.2} MiB in {:.2}s: {:.2}MiB/s without commit",
        iteration,
        total_mib_written,
        elapsed.as_secs_f64(),
        total_mib_written / elapsed.as_secs_f64(),
    );
    upload_request.complete().await.unwrap();
}

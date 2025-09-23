use std::{
    fs::File,
    io::{BufWriter, Write},
    path::{Path, PathBuf},
};

use anyhow::Result;
use aws_config::BehaviorVersion;
use aws_sdk_s3::{Client, config::Region, operation::list_objects_v2::ListObjectsV2Output};
use clap::Parser;
use csv::WriterBuilder;

use mountpoint_s3_client::checksums::crc32c::{Crc32c, Hasher};
use mountpoint_s3_client::checksums::crc32c_to_base64;
use mountpoint_s3_fs::{
    checksums::{Crc32cBase64, combine_checksums},
    manifest::CsvEntry,
};

#[derive(Debug, Parser)]
#[clap(
    name = "Mountpoint Manifest Creator",
    about = "A helper to create a CSV manifest of a bucket using ListObjectsV2 requests."
)]
struct Opt {
    /// The AWS Region.
    #[clap(long)]
    region: String,

    /// The name of the bucket.
    #[clap(long)]
    bucket: String,

    /// The prefix to list [must include '/' if not empty].
    #[clap(long, default_value = "")]
    prefix: String,

    /// Where to write the manifest.
    #[clap(long)]
    output_file: PathBuf,
}

/// Helper function to create a CsvEntry with computed checksum
fn create_csv_entry(partial_key: String, etag: String, size: u64) -> CsvEntry {
    let checksum = compute_checksum(&partial_key, &etag, size);
    CsvEntry {
        partial_key,
        etag,
        size,
        checksum,
    }
}

/// Helper function to compute the CRC32C checksum for CSV entry fields
fn compute_checksum(partial_key: &str, etag: &str, size: u64) -> Crc32cBase64 {
    let mut hasher = Hasher::new();
    hasher.update(partial_key.as_bytes());
    hasher.update(etag.as_bytes());
    // we encode size with big endian byte order and with a fixed width of 8 bytes (rust: u64, java: long)
    hasher.update(size.to_be_bytes().as_ref());
    Crc32cBase64::new(hasher.finalize().value())
}

fn write_to_manifest<W: Write>(
    resp: &ListObjectsV2Output,
    prefix: &str,
    writer: &mut csv::Writer<W>,
    running_checksum: &mut Crc32c,
) -> Result<()> {
    for object in resp.contents() {
        let relative_key = &object.key().unwrap()[prefix.len()..];

        let entry = create_csv_entry(
            relative_key.to_string(),
            object.e_tag().unwrap().to_string().replace("\"", ""), // remove quotes (that's the default behavior in Java SDK)
            object.size().unwrap() as u64,
        );

        // Update running_checksum using combine_checksums
        *running_checksum = combine_checksums(*running_checksum, entry.checksum.value(), entry.total_size());

        // Write the entry to the CSV writer
        writer.serialize(entry)?;
    }
    Ok(())
}

async fn list_objects(client: &Client, bucket: &str, prefix: &str, output_file: &Path) -> Result<()> {
    // Create a CSV writer
    let file = File::options().write(true).create_new(true).open(output_file)?;
    let writer = BufWriter::new(file);
    let mut writer = WriterBuilder::new().has_headers(false).from_writer(writer);

    // Running checksum of all entries in the manifest
    let mut running_checksum = Crc32c::new(0);

    // Make ListObjectsV2 requests and write output to the CSV file
    let mut resp = client.list_objects_v2().bucket(bucket).prefix(prefix).send().await?;
    write_to_manifest(&resp, prefix, &mut writer, &mut running_checksum)?;

    while let Some(token) = resp.next_continuation_token {
        resp = client
            .list_objects_v2()
            .bucket(bucket)
            .continuation_token(token)
            .prefix(prefix)
            .send()
            .await?;
        write_to_manifest(&resp, prefix, &mut writer, &mut running_checksum)?;
    }

    // Flush the writer to ensure all data is written
    writer.flush()?;

    // Print the final running checksum to stdout
    println!(
        "Running checksum of all entries: {}",
        crc32c_to_base64(&running_checksum)
    );

    Ok(())
}

#[tokio::main(flavor = "current_thread")]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();

    let Opt {
        region,
        bucket,
        prefix,
        output_file,
    } = Opt::parse();

    assert!(
        prefix.is_empty() || prefix.ends_with("/"),
        "Prefix must include '/' if not empty"
    );

    let sdk_config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(region))
        .load()
        .await;
    let client = Client::new(&sdk_config);

    list_objects(&client, &bucket, &prefix, output_file.as_path()).await?;

    Ok(())
}

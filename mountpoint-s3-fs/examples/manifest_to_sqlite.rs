use clap::Parser;
use mountpoint_s3_fs::manifest::{create_db, CsvReader};
use std::{fs::File, io::BufReader, path::PathBuf, time::Instant};

#[derive(Parser, Debug)]
#[clap(
    name = "manifest-to-sqlite",
    about = "An example program parsing a CSV file and producing an SQLite db with S3 metadata"
)]
struct CliArgs {
    #[clap(
        help = "A CSV file of triplets <name,etag,size> representing keys in the bucket",
        value_name = "INPUT_CSV"
    )]
    input_csv: PathBuf,

    #[clap(
        help = "Path to the output database file (will be created)",
        value_name = "OUTPUT_FILE"
    )]
    db_path: PathBuf,
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    let batch_size = 100000usize;
    let start = Instant::now();
    let csv_reader = CsvReader::new(BufReader::new(File::open(args.input_csv)?));
    create_db(&args.db_path, csv_reader, batch_size)?;
    println!("creation took: {:?}", start.elapsed());

    Ok(())
}

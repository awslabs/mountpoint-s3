use clap::Parser;
use std::path::PathBuf;

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
    #[cfg(feature = "manifest")]
    use mountpoint_s3_fs::manifest::{create_db, CsvReader};
    #[cfg(feature = "manifest")]
    use std::{fs::File, io::BufReader, time::Instant};

    let args = CliArgs::parse();

    #[cfg(feature = "manifest")]
    {
        let batch_size = 100000usize;
        let start = Instant::now();
        let csv_reader = CsvReader::new(BufReader::new(File::open(args.input_csv)?));
        create_db(&args.db_path, csv_reader, batch_size)?;
        println!("creation took: {:?}", start.elapsed());
    }

    #[cfg(not(feature = "manifest"))]
    panic!("set 'manifest' feature flag to compile the example");

    Ok(())
}

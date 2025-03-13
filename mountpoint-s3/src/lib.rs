pub mod build_info;

use clap::Parser;

// TODO: Extract `mountpoint_s3_fs::cli::CliArgs` to this crate.
// TODO: Stabilise the library API
#[derive(Parser, Debug)]
#[clap(
    name = "mount-s3",
    about = "Mountpoint for Amazon S3",
    version = build_info::FULL_VERSION,
)]
pub struct AppCliArgs {
    #[clap(flatten)]
    pub cli_args: mountpoint_s3_fs::cli::CliArgs,
}

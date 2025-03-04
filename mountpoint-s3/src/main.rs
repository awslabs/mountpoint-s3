mod build_info;

use clap::{ArgGroup, Parser};

#[derive(Parser, Debug)]
#[clap(
    name = "mount-s3",
    about = "Mountpoint for Amazon S3",
    version = build_info::FULL_VERSION,
    group(
        ArgGroup::new("cache_group")
            .multiple(true),
    ),
)]
pub struct AppCliArgs {
    #[clap(flatten)]
    pub cli_args: mountpoint_s3_fs::cli::CliArgs,
}

fn main() -> anyhow::Result<()> {
    let args = AppCliArgs::parse();
    let context = mountpoint_s3_fs::cli::ContextParams {
        full_version: build_info::FULL_VERSION.to_string(),
    };
    mountpoint_s3_fs::cli::main(mountpoint_s3_fs::cli::create_s3_client, args.cli_args, context)
}

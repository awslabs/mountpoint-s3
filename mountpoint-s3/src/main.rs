pub mod build_info;

use clap::Parser;

fn main() -> anyhow::Result<()> {
    let args = mountpoint_s3::AppCliArgs::parse();
    let context = mountpoint_s3_fs::cli::ContextParams {
        full_version: build_info::FULL_VERSION.to_string(),
    };
    mountpoint_s3_fs::cli::main(mountpoint_s3_fs::cli::create_s3_client, args.cli_args, context)
}

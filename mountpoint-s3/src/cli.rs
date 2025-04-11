use crate::build_info;

use clap::Parser;
use mountpoint_s3_fs::cli::CliArgs;
use std::env;
use std::ffi::OsString;

use crate::fstab::FsTabCliArgs;

// TODO: Extract `mountpoint_s3_fs::cli::CliArgs` to this crate.
#[derive(Parser, Debug)]
#[clap(
    name = "mount-s3",
    about = "Mountpoint for Amazon S3",
    version = build_info::FULL_VERSION,
)]
struct AppCliArgs {
    #[clap(flatten)]
    pub cli_args: CliArgs,
}

pub fn get_cli_args() -> anyhow::Result<CliArgs> {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3) == Some(OsString::from("-o"));

    if is_fstab {
        let args = FsTabCliArgs::parse();
        args.try_to_cli_args()
    } else {
        let args = AppCliArgs::parse();
        Ok(args.cli_args)
    }
}

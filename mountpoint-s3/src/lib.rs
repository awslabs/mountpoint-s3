pub mod build_info;
mod fstab;

use clap::Parser;
use mountpoint_s3_fs::cli::CliArgs;
use std::env;
use std::ffi::OsString;
use anyhow::anyhow;
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

pub fn try_parse_cli_args() -> anyhow::Result<CliArgs> {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3) == Some(OsString::from("-o"));

    if is_fstab && cfg!(feature = "fstab") {
        println!("Using 'fstab' style options as detected use of `-o` argument.");
        let args = FsTabCliArgs::try_parse().map_err(|err| anyhow!(err))?;
        args.try_into()
    } else {
        let args = AppCliArgs::try_parse().map_err(|err| anyhow!(err))?;
        Ok(args.cli_args)
    }
}

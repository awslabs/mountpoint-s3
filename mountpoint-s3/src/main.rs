use std::env;

use clap::Parser;

use mountpoint_s3::{create_s3_client, CliArgs, FsTabCliArgs};

fn main() -> anyhow::Result<()> {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3).as_deref() == Some("-o".as_ref());

    let cli_args = if is_fstab && cfg!(feature = "fstab") {
        println!("Using 'fstab' style options as detected use of `-o` argument.");
        FsTabCliArgs::try_parse().and_then(|args| args.try_into())
    } else {
        CliArgs::try_parse()
    };

    let cli_args = cli_args.unwrap_or_else(|err| err.exit());
    mountpoint_s3::run(create_s3_client, cli_args)
}

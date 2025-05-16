mod build_info;
mod cli;
mod fstab;
mod run;

use clap::Parser;
use std::env;

pub use cli::CliArgs;
pub use fstab::FsTabCliArgs;
pub use run::{create_s3_client, run};

pub fn parse_cli_args(log_fstab: bool) -> CliArgs {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3).as_deref() == Some("-o".as_ref());

    let cli_args = if is_fstab && cfg!(feature = "fstab") {
        if log_fstab {
            println!("Using 'fstab' style options as detected use of `-o` argument.");
        }
        FsTabCliArgs::try_parse().and_then(|args| args.try_into())
    } else {
        CliArgs::try_parse()
    };

    cli_args.unwrap_or_else(|err| err.exit())
}

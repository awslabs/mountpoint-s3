use std::env;
use std::ffi::OsString;

use clap::Parser;

mod build_info;
mod cli;
mod fstab;
mod run;

pub use cli::CliArgs;
use fstab::FsTabCliArgs;
pub use run::{create_s3_client, run};

pub fn try_parse_cli_args() -> Result<CliArgs, clap::Error> {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3) == Some(OsString::from("-o"));

    if is_fstab && cfg!(feature = "fstab") {
        println!("Using 'fstab' style options as detected use of `-o` argument.");
        let args = FsTabCliArgs::try_parse()?;
        args.try_into()
    } else {
        CliArgs::try_parse()
    }
}

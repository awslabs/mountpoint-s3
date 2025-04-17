pub mod build_info;
mod fstab;

use crate::fstab::FsTabCliArgs;
use clap::Parser;
use mountpoint_s3_fs::cli::CliArgs;
use std::env;
use std::ffi::OsString;

// TODO: Extract `mountpoint_s3_fs::cli::CliArgs` to this crate.
#[derive(Parser, Debug)]
#[clap(
    name = "mount-s3",
    about = "Mountpoint for Amazon S3",
    version = build_info::FULL_VERSION,
    after_help = if cfg!(feature = "fstab") {concat!(
        "\nAlternative fstab style:\n",
        "  mount-s3 <BUCKET> <DIRECTORY> -o <OPTIONS>\n\n",
        "Arguments:\n",
        "  <BUCKET_NAME>\n          Name of bucket to mount, with s3:// URIs supported\n",
        "  <DIRECTORY>\n          Location to mount bucket at\n",
        "  <OPTIONS>\n",
        "          fstab style options. Comma separated list of CLI options, with backslash escapes for commas, backslashes, and double quotes.\n",
        "          Use of `--` to prefix arguments is not allowed."
    )} else {""}
)]
struct AppCliArgs {
    #[clap(flatten)]
    pub cli_args: CliArgs,
}

pub fn try_parse_cli_args() -> Result<CliArgs, clap::Error> {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3) == Some(OsString::from("-o"));

    if is_fstab && cfg!(feature = "fstab") {
        println!("Using 'fstab' style options as detected use of `-o` argument.");
        let args = FsTabCliArgs::try_parse()?;
        args.try_into()
    } else {
        let args = AppCliArgs::try_parse()?;
        Ok(args.cli_args)
    }
}

mod common;

use clap::Parser;
use fuser::Filesystem;

use crate::common::args::CommonArgs;

#[derive(Parser)]
#[command(version)]
struct Args {
    #[clap(flatten)]
    common_args: CommonArgs,
}

struct NullFS;

impl Filesystem for NullFS {}

fn main() {
    let args = Args::parse();
    env_logger::init();
    let cfg = args.common_args.config();
    fuser::mount2(NullFS, &args.common_args.mount_point, &cfg).unwrap();
}

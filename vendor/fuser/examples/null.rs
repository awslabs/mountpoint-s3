use fuser::{Filesystem, MountOption};
use std::env;

struct NullFS;

impl Filesystem for NullFS {}

#[tokio::main]
async fn main() {
    env_logger::init();
    let mountpoint = env::args_os().nth(1).unwrap();
    fuser::mount2(NullFS, mountpoint, &[MountOption::AutoUnmount]).await.unwrap();
}

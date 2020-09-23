use fuser::Filesystem;
use std::env;

struct NullFS;

impl Filesystem for NullFS {}

fn main() {
    env_logger::init();
    let mountpoint = env::args_os().nth(1).unwrap();
    fuser::mount(NullFS, mountpoint, &[]).unwrap();
}

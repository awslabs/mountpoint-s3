extern crate fuse;

use std::env;
use fuse::Filesystem;

struct NullFS;

impl Filesystem for NullFS {
}

fn main () {
    let mountpoint = env::args_os().nth(1).unwrap();
    fuse::mount(NullFS, &mountpoint, &[]).unwrap();
}

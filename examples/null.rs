#![allow(unstable)]

extern crate fuse;

use std::os;
use fuse::Filesystem;

struct NullFS;

impl Filesystem for NullFS {
}

fn main () {
    let mountpoint = Path::new(os::args()[1].as_slice());
    fuse::mount(NullFS, &mountpoint, &[]);
}

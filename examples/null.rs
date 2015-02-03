#![feature(os)]
#![feature(path)]

extern crate fuse;

use std::os;
use fuse::Filesystem;

struct NullFS;

impl Filesystem for NullFS {
}

fn main () {
    let mountpoint = Path::new(&os::args()[1]);
    fuse::mount(NullFS, &mountpoint, &[]);
}

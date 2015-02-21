#![feature(env)]

extern crate fuse;

use std::env;
use fuse::Filesystem;

struct NullFS;

impl Filesystem for NullFS {
}

fn main () {
    let mountpoint = env::args_os().skip(1).next().unwrap();
    fuse::mount(NullFS, &mountpoint, &[]);
}

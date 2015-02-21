#![feature(env)]
#![feature(old_path)]

extern crate fuse;

use std::env;
use fuse::Filesystem;

struct NullFS;

impl Filesystem for NullFS {
}

fn main () {
    // FIXME: use env::args_os to circumvent temporary utf-8 requirement
    let mountpoint = Path::new(env::args().skip(1).next().unwrap());
    fuse::mount(NullFS, &mountpoint, &[]);
}

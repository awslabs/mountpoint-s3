#![cfg(feature = "fuse_tests")]

mod common;

use common::*;
use std::ffi::OsStr;
use std::fs::{read_dir, DirEntry};

#[test]
fn test_mount() {
    let (mount_point, _session) = make_test_session();

    println!("Mounted fs at {:?}", mount_point.path());

    let dirs: Vec<DirEntry> = read_dir(mount_point.path()).unwrap().map(|x| x.unwrap()).collect();

    assert_eq!(dirs.len(), 1, "dir should have 1 file");
    assert_eq!(dirs[0].path().file_name(), Some(OsStr::new("dummy_file")));
}

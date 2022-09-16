#![cfg(feature = "fuse_tests")]

mod common;

use std::fs::{read_dir, File, OpenOptions};
use std::io::Read as _;

#[cfg(target_os = "linux")]
use std::os::unix::fs::OpenOptionsExt;

use sha2::Digest as _;
use test_log::test;

use common::*;

/// Tests read-only operations on a bucket whose contents we keep static and known for testing use
#[test]
fn read_only_mount_test() {
    let (mount_point, _session) = make_test_session();

    // TODO we have to list the root directory first at the moment ... need to fix that
    let _dir = read_dir(mount_point.path())
        .unwrap()
        .map(|f| f.unwrap())
        .collect::<Vec<_>>();

    let test_dir = read_dir(mount_point.path().join("read-only-mount-test")).unwrap();
    let files: Vec<_> = test_dir.map(|f| f.unwrap()).collect();

    assert_eq!(
        files
            .iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        vec!["hello.txt", "test2MiB.bin"]
    );

    let mut hello = File::open(files[0].path()).unwrap();
    let mut hello_contents = String::new();
    hello.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world\n");
    drop(hello);

    // We could do this with std::io::copy into the digest, but we'd like to control the buffer size
    // so we can make it weird.
    let mut bin = {
        let mut open = OpenOptions::new();
        open.read(true);
        #[cfg(target_os = "linux")]
        open.custom_flags(libc::O_DIRECT);
        open.open(files[1].path()).unwrap()
    };
    let mut digest = sha2::Sha256::new();
    let mut bytes_read = 0usize;
    let mut buf = vec![0; 70000]; // weird size just to test alignment and the like
    loop {
        let read = bin.read(&mut buf[..]).unwrap();
        if read == 0 {
            break;
        }
        digest.update(&buf[..read]);
        bytes_read += read;
    }
    drop(bin);
    assert_eq!(bytes_read, 2 * 1024 * 1024);
    let hash = base16ct::lower::encode_string(&digest.finalize());
    assert_eq!(hash, "7d36e46fcd211cac7d0e5b7df8558f07976ccdddba3211e50a58d9816b507168");
}

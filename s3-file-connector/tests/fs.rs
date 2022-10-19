//! Manually implemented tests executing the FUSE protocol against [S3Filesystem]

use fuser::FileType;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use s3_client::mock_client::MockObject;
use s3_file_connector::fs::FUSE_ROOT_INODE;
use std::ffi::{OsStr, OsString};
use std::os::unix::prelude::OsStrExt;
use test_case::test_case;

mod common;
use common::{make_test_filesystem, ReadReply};

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_read_dir_root(prefix: &str) {
    let (client, fs) = make_test_filesystem("test_read_dir", prefix, Default::default());

    client.add_object(&format!("{}file1.txt", prefix), MockObject::constant(0xa1, 15));
    client.add_object(&format!("{}file2.txt", prefix), MockObject::constant(0xa2, 15));
    client.add_object(&format!("{}file3.txt", prefix), MockObject::constant(0xa3, 15));

    // Listing the root directory doesn't require resolving it first, can just opendir the root inode
    let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdir(1, dir_handle, 0, &mut reply).await.unwrap();

    assert_eq!(reply.entries.len(), 2 + 3);

    // TODO `stat` on these needs to work
    assert_eq!(reply.entries[0].name, ".");
    assert_eq!(reply.entries[0].ino, FUSE_ROOT_INODE);
    assert_eq!(reply.entries[1].name, "..");
    assert_eq!(reply.entries[1].ino, FUSE_ROOT_INODE);

    let mut offset = reply.entries[0].offset.max(reply.entries[1].offset);
    for (i, reply) in reply.entries.iter().skip(2).enumerate() {
        let expected: OsString = format!("file{}.txt", i + 1).into();
        assert_eq!(reply.name, expected);
        assert_eq!(reply.attr.kind, FileType::RegularFile);
        assert!(reply.ino > 1);

        let attr = fs.getattr(reply.ino).await.unwrap();
        assert_eq!(attr.attr.ino, reply.ino);
        assert_eq!(attr.attr.size, 15);

        let fh = fs.open(reply.ino, 0x8000).await.unwrap().fh;
        let mut read = Err(0);
        fs.read(reply.ino, fh, 0, 4096, 0, None, ReadReply(&mut read)).await;
        assert_eq!(&read.unwrap()[..], &[0xa0 + (i as u8 + 1); 15]);
        fs.release(reply.ino, fh, 0, None, true).await.unwrap();

        offset = offset.max(reply.offset);
    }

    assert!(offset > 0);

    let mut reply = Default::default();
    let _reply = fs
        .readdir(FUSE_ROOT_INODE, dir_handle, offset, &mut reply)
        .await
        .unwrap();
    assert_eq!(reply.entries.len(), 0);

    // Not implemented
    // fs.releasedir(fh).unwrap();
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_read_dir_nested(prefix: &str) {
    let (client, fs) = make_test_filesystem("test_read_dir_nested", prefix, Default::default());

    client.add_object(&format!("{}dir1/file1.txt", prefix), MockObject::constant(0xa1, 15));
    client.add_object(&format!("{}dir1/file2.txt", prefix), MockObject::constant(0xa2, 15));
    client.add_object(&format!("{}dir2/file3.txt", prefix), MockObject::constant(0xa3, 15));

    let entry = fs
        .lookup(FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
        .await
        .unwrap();
    assert_eq!(entry.attr.kind, FileType::Directory);
    let dir_ino = entry.attr.ino;

    let dir_handle = fs.opendir(dir_ino, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdir(dir_ino, dir_handle, 0, &mut reply).await.unwrap();

    assert_eq!(reply.entries.len(), 2 + 2);

    assert_eq!(reply.entries[0].name, ".");
    assert_eq!(reply.entries[0].ino, dir_ino);
    assert_eq!(reply.entries[1].name, "..");
    assert_eq!(reply.entries[1].ino, FUSE_ROOT_INODE);

    let mut offset = reply.entries[0].offset.max(reply.entries[1].offset);
    for (i, reply) in reply.entries.iter().skip(2).enumerate() {
        let expected: OsString = format!("file{}.txt", i + 1).into();
        assert_eq!(reply.name, expected);
        assert_eq!(reply.attr.kind, FileType::RegularFile);
        assert!(reply.ino > 1);

        let attr = fs.getattr(reply.ino).await.unwrap();
        assert_eq!(attr.attr.ino, reply.ino);
        assert_eq!(attr.attr.size, 15);

        let fh = fs.open(reply.ino, 0x8000).await.unwrap().fh;
        let mut read = Err(0);
        fs.read(reply.ino, fh, 0, 4096, 0, None, ReadReply(&mut read)).await;
        assert_eq!(&read.unwrap()[..], &[0xa0 + (i as u8 + 1); 15]);
        fs.release(reply.ino, fh, 0, None, true).await.unwrap();

        offset = offset.max(reply.offset);
    }

    assert!(offset > 0);

    let mut reply = Default::default();
    let _reply = fs.readdir(dir_ino, dir_handle, offset, &mut reply).await.unwrap();
    assert_eq!(reply.entries.len(), 0);

    // Not implemented
    // fs.releasedir(fh).unwrap();
}

#[test_case(1024 * 1024; "small")]
#[test_case(50 * 1024 * 1024; "large")]
#[tokio::test]
async fn test_random_read(object_size: usize) {
    let (client, fs) = make_test_filesystem("test_random_read", "", Default::default());

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + object_size as u64);
    let mut expected = vec![0; object_size];
    rng.fill(&mut expected[..]);
    client.add_object("file", MockObject::from_bytes(&expected[..]));

    // Find the object
    let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdir(1, dir_handle, 0, &mut reply).await.unwrap();

    assert_eq!(reply.entries.len(), 2 + 1);

    assert_eq!(reply.entries[2].name, "file");
    let ino = reply.entries[2].ino;

    let fh = fs.open(ino, 0x8000).await.unwrap().fh;

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678);
    for _ in 0..10 {
        let offset = rng.gen_range(0..object_size);
        // TODO do we need to bound it? should work anyway, just partial read, right?
        let length = rng.gen_range(0..(object_size - offset).min(1024 * 1024)) + 1;
        let mut read = Err(0);
        fs.read(ino, fh, offset as i64, length as u32, 0, None, ReadReply(&mut read))
            .await;
        let read = read.unwrap();
        assert_eq!(read.len(), length);
        assert_eq!(&read[..], &expected[offset..offset + length]);
    }

    fs.release(ino, fh, 0, None, true).await.unwrap();
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_implicit_directory_shadow(prefix: &str) {
    let (client, fs) = make_test_filesystem("test_implicit_directory_shadow", prefix, Default::default());

    // Make an object that matches a directory name. We want this object to be shadowed by the
    // directory.
    client.add_object(&format!("{}dir1/", prefix), MockObject::constant(0xa1, 15));
    client.add_object(&format!("{}dir1/file2.txt", prefix), MockObject::constant(0xa2, 15));

    let entry = fs
        .lookup(FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
        .await
        .unwrap();
    assert_eq!(entry.attr.kind, FileType::Directory);
    let dir_ino = entry.attr.ino;

    let dir_handle = fs.opendir(dir_ino, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdir(dir_ino, dir_handle, 0, &mut reply).await.unwrap();

    assert_eq!(reply.entries.len(), 2 + 1);

    assert_eq!(reply.entries[0].name, ".");
    assert_eq!(reply.entries[0].ino, dir_ino);
    assert_eq!(reply.entries[1].name, "..");
    assert_eq!(reply.entries[1].ino, FUSE_ROOT_INODE);

    assert_eq!(reply.entries[2].name, "file2.txt");
    assert_eq!(reply.entries[2].attr.kind, FileType::RegularFile);

    let fh = fs.open(reply.entries[2].ino, 0x8000).await.unwrap().fh;
    let mut read = Err(0);
    fs.read(reply.entries[2].ino, fh, 0, 4096, 0, None, ReadReply(&mut read))
        .await;
    assert_eq!(&read.unwrap()[..], &[0xa2; 15]);
    fs.release(reply.entries[2].ino, fh, 0, None, true).await.unwrap();

    // Explicitly looking up the shadowed file should fail
    let entry = fs.lookup(FUSE_ROOT_INODE, OsStr::from_bytes("dir1/".as_bytes())).await;
    assert!(matches!(entry, Err(libc::EINVAL)));

    // TODO test removing the directory, removing the file

    // Not implemented
    // fs.releasedir(fh).unwrap();
}

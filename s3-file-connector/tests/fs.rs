//! Manually implemented tests executing the FUSE protocol against [S3Filesystem]

use fuser::FileType;
use nix::unistd::{getgid, getuid};
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use s3_client::mock_client::MockObject;
use s3_client::ObjectClient;
use s3_file_connector::fs::FUSE_ROOT_INODE;
use std::ffi::{OsStr, OsString};
use std::os::unix::prelude::OsStrExt;
use test_case::test_case;

mod common;
use common::{assert_attr, make_test_filesystem, ReadReply};

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_read_dir_root(prefix: &str) {
    let (client, fs) = make_test_filesystem("test_read_dir", prefix, Default::default());

    client.add_object(&format!("{prefix}file1.txt"), MockObject::constant(0xa1, 15));
    client.add_object(&format!("{prefix}file2.txt"), MockObject::constant(0xa2, 15));
    client.add_object(&format!("{prefix}file3.txt"), MockObject::constant(0xa3, 15));

    let uid = getuid().into();
    let gid = getgid().into();
    let dir_perm: u16 = 0o755;
    let file_perm: u16 = 0o644;

    // Listing the root directory doesn't require resolving it first, can just opendir the root inode
    let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdir(1, dir_handle, 0, &mut reply).await.unwrap();

    assert_eq!(reply.entries.len(), 2 + 3);

    // TODO `stat` on these needs to work
    assert_eq!(reply.entries[0].name, ".");
    assert_eq!(reply.entries[0].ino, FUSE_ROOT_INODE);
    assert_attr(reply.entries[0].attr, FileType::Directory, 0, uid, gid, dir_perm);
    assert_eq!(reply.entries[1].name, "..");
    assert_eq!(reply.entries[1].ino, FUSE_ROOT_INODE);
    assert_attr(reply.entries[1].attr, FileType::Directory, 0, uid, gid, dir_perm);

    let mut offset = reply.entries[0].offset.max(reply.entries[1].offset);
    for (i, reply) in reply.entries.iter().skip(2).enumerate() {
        let expected: OsString = format!("file{}.txt", i + 1).into();
        assert_eq!(reply.name, expected);
        assert_eq!(reply.attr.kind, FileType::RegularFile);
        assert!(reply.ino > 1);

        let attr = fs.getattr(reply.ino).await.unwrap();
        assert_eq!(attr.attr.ino, reply.ino);
        assert_attr(attr.attr, FileType::RegularFile, 15, uid, gid, file_perm);

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

    client.add_object(&format!("{prefix}dir1/file1.txt"), MockObject::constant(0xa1, 15));
    client.add_object(&format!("{prefix}dir1/file2.txt"), MockObject::constant(0xa2, 15));
    client.add_object(&format!("{prefix}dir2/file3.txt"), MockObject::constant(0xa3, 15));

    let uid = getuid().into();
    let gid = getgid().into();
    let dir_perm: u16 = 0o755;
    let file_perm: u16 = 0o644;

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
    assert_attr(reply.entries[0].attr, FileType::Directory, 0, uid, gid, dir_perm);
    assert_eq!(reply.entries[1].name, "..");
    assert_eq!(reply.entries[1].ino, FUSE_ROOT_INODE);
    assert_attr(reply.entries[1].attr, FileType::Directory, 0, uid, gid, dir_perm);

    let mut offset = reply.entries[0].offset.max(reply.entries[1].offset);
    for (i, reply) in reply.entries.iter().skip(2).enumerate() {
        let expected: OsString = format!("file{}.txt", i + 1).into();
        assert_eq!(reply.name, expected);
        assert_eq!(reply.attr.kind, FileType::RegularFile);
        assert!(reply.ino > 1);

        let attr = fs.getattr(reply.ino).await.unwrap();
        assert_eq!(attr.attr.ino, reply.ino);
        assert_attr(attr.attr, FileType::RegularFile, 15, uid, gid, file_perm);

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
    client.add_object(&format!("{prefix}dir1/"), MockObject::constant(0xa1, 15));
    client.add_object(&format!("{prefix}dir1/file2.txt"), MockObject::constant(0xa2, 15));

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

#[test_case(1024; "small")]
#[test_case(50 * 1024; "large")]
#[tokio::test]
async fn test_sequential_write(write_size: usize) {
    const BUCKET_NAME: &str = "test_sequential_write";
    const OBJECT_SIZE: usize = 50 * 1024;

    let (client, fs) = make_test_filesystem(BUCKET_NAME, "", Default::default());

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    client.add_object("dir1/file1.bin", MockObject::constant(0xa1, 15));

    // Find the dir1 directory
    let entry = fs
        .lookup(FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
        .await
        .unwrap();
    assert_eq!(entry.attr.kind, FileType::Directory);
    let dir_ino = entry.attr.ino;

    // Write the object into that directory
    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs
        .mknod(dir_ino, OsStr::from_bytes("file2.bin".as_bytes()), mode, 0, 0)
        .await
        .unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    let mut offset = 0;
    for data in body.chunks(write_size) {
        let written = fs.write(file_ino, fh, offset, data, 0, 0, None).await.unwrap();
        assert_eq!(written as usize, data.len());
        offset += written as i64;
    }

    fs.release(file_ino, fh, 0, None, false).await.unwrap();

    // Check that the object made it to S3 as we expected
    let get = client.get_object(BUCKET_NAME, "dir1/file2.bin", None).await.unwrap();
    let actual = get.collect().await.unwrap();
    assert_eq!(&actual[..], &body[..]);

    // And now check that we can read it out of the file system too. The inode is still valid, so
    // the kernel is allowed to just send us a `getattr` immediately, so let's make sure that works.
    let stat = fs.getattr(file_ino).await.unwrap();
    assert_eq!(stat.attr.size, body.len() as u64);

    let dentry = fs
        .lookup(dir_ino, OsStr::from_bytes("file2.bin".as_bytes()))
        .await
        .unwrap();
    let size = dentry.attr.size as usize;
    assert_eq!(size, body.len());
    let file_ino = dentry.attr.ino;

    // First let's check that we can't write it again
    let result = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .expect_err("file should not be overwritable");
    assert_eq!(result, libc::EPERM);

    // But read-only should work
    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_RDONLY)
        .await
        .unwrap()
        .fh;

    let mut offset = 0;
    while offset < size {
        let length = 1024.min(size - offset);
        let mut read = Err(0);
        fs.read(
            file_ino,
            fh,
            offset as i64,
            length as u32,
            0,
            None,
            ReadReply(&mut read),
        )
        .await;
        let read = read.unwrap();
        assert_eq!(read.len(), length);
        assert_eq!(&read[..], &body[offset..offset + length]);
        offset += length;
    }

    fs.release(file_ino, fh, 0, None, true).await.unwrap();
}

#[tokio::test]
async fn test_unordered_write_fails() {
    const BUCKET_NAME: &str = "test_unordered_write_fails";

    let (_client, fs) = make_test_filesystem(BUCKET_NAME, "", Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs
        .mknod(FUSE_ROOT_INODE, OsStr::from_bytes("file2.bin".as_bytes()), mode, 0, 0)
        .await
        .unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    let written = fs.write(file_ino, fh, 0, &[0xaa; 27], 0, 0, None).await.unwrap();
    assert_eq!(written, 27);

    let err = fs
        .write(file_ino, fh, 0, &[0xaa; 27], 0, 0, None)
        .await
        .expect_err("writes to earlier offsets should fail");
    assert_eq!(err, libc::EINVAL);

    let err = fs
        .write(file_ino, fh, 55, &[0xaa; 27], 0, 0, None)
        .await
        .expect_err("writes to later offsets should fail");
    assert_eq!(err, libc::EINVAL);
}

#[tokio::test]
async fn test_duplicate_write_fails() {
    const BUCKET_NAME: &str = "test_duplicate_write_fails";

    let (_client, fs) = make_test_filesystem(BUCKET_NAME, "", Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs
        .mknod(FUSE_ROOT_INODE, OsStr::from_bytes("file2.bin".as_bytes()), mode, 0, 0)
        .await
        .unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let _opened = fs.open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY).await.unwrap();

    // Should not be allowed to open the file a second time
    let err = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .expect_err("should not be able to write twice");
    assert_eq!(err, libc::EPERM);
}

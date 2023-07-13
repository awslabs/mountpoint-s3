//! Manually implemented tests executing the FUSE protocol against [S3Filesystem]

use fuser::FileType;
use mountpoint_s3::fs::FUSE_ROOT_INODE;
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3_client::failure_client::countdown_failure_client;
use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockClientError};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::{mock_client::MockObject, ETag};
use nix::unistd::{getgid, getuid};
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use std::collections::HashMap;
use std::ffi::OsString;
use std::str::FromStr;
use std::sync::Arc;
use test_case::test_case;

mod common;
use common::{assert_attr, make_test_filesystem, make_test_filesystem_with_client, ReadReply};

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_read_dir_root(prefix: &str) {
    let prefix = Prefix::new(prefix).expect("valid prefix");
    let (client, fs) = make_test_filesystem("test_read_dir", &prefix, Default::default());

    client.add_object(
        &format!("{prefix}file1.txt"),
        MockObject::constant(0xa1, 15, ETag::from_str("test_etag_1").unwrap()),
    );
    client.add_object(
        &format!("{prefix}file2.txt"),
        MockObject::constant(0xa2, 15, ETag::from_str("test_etag_2").unwrap()),
    );
    client.add_object(
        &format!("{prefix}file3.txt"),
        MockObject::constant(0xa3, 15, ETag::from_str("test_etag_3").unwrap()),
    );

    let uid = getuid().into();
    let gid = getgid().into();
    let dir_perm: u16 = 0o755;
    let file_perm: u16 = 0o644;

    // Listing the root directory doesn't require resolving it first, can just opendir the root inode
    let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdirplus(1, dir_handle, 0, &mut reply).await.unwrap();

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

    fs.releasedir(FUSE_ROOT_INODE, dir_handle, 0).await.unwrap();
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_read_dir_nested(prefix: &str) {
    let prefix = Prefix::new(prefix).expect("valid prefix");
    let (client, fs) = make_test_filesystem("test_read_dir_nested", &prefix, Default::default());

    client.add_object(
        &format!("{prefix}dir1/file1.txt"),
        MockObject::constant(0xa1, 15, ETag::from_str("test_etag_1").unwrap()),
    );
    client.add_object(
        &format!("{prefix}dir1/file2.txt"),
        MockObject::constant(0xa2, 15, ETag::from_str("test_etag_2").unwrap()),
    );
    client.add_object(
        &format!("{prefix}dir2/file3.txt"),
        MockObject::constant(0xa3, 15, ETag::from_str("test_etag_3").unwrap()),
    );

    let uid = getuid().into();
    let gid = getgid().into();
    let dir_perm: u16 = 0o755;
    let file_perm: u16 = 0o644;

    let entry = fs.lookup(FUSE_ROOT_INODE, "dir1".as_ref()).await.unwrap();
    assert_eq!(entry.attr.kind, FileType::Directory);
    let dir_ino = entry.attr.ino;

    let dir_handle = fs.opendir(dir_ino, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdirplus(dir_ino, dir_handle, 0, &mut reply).await.unwrap();

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

    fs.releasedir(dir_ino, dir_handle, 0).await.unwrap();
}

#[test_case(1024 * 1024; "small")]
#[test_case(50 * 1024 * 1024; "large")]
#[tokio::test]
async fn test_random_read(object_size: usize) {
    let (client, fs) = make_test_filesystem("test_random_read", &Default::default(), Default::default());

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + object_size as u64);
    let mut expected = vec![0; object_size];
    rng.fill(&mut expected[..]);
    client.add_object("file", MockObject::from_bytes(&expected[..], ETag::for_tests()));

    // Find the object
    let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdirplus(1, dir_handle, 0, &mut reply).await.unwrap();

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
    fs.releasedir(FUSE_ROOT_INODE, dir_handle, 0).await.unwrap();
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_implicit_directory_shadow(prefix: &str) {
    let prefix = Prefix::new(prefix).expect("valid prefix");
    let (client, fs) = make_test_filesystem("test_implicit_directory_shadow", &prefix, Default::default());

    // Make an object that matches a directory name. We want this object to be shadowed by the
    // directory.
    client.add_object(
        &format!("{prefix}dir1/"),
        MockObject::constant(0xa1, 15, ETag::from_str("test_etag_1").unwrap()),
    );
    client.add_object(
        &format!("{prefix}dir1/file2.txt"),
        MockObject::constant(0xa2, 15, ETag::from_str("test_etag_2").unwrap()),
    );

    let entry = fs.lookup(FUSE_ROOT_INODE, "dir1".as_ref()).await.unwrap();
    assert_eq!(entry.attr.kind, FileType::Directory);
    let dir_ino = entry.attr.ino;

    let dir_handle = fs.opendir(dir_ino, 0).await.unwrap().fh;
    let mut reply = Default::default();
    let _reply = fs.readdirplus(dir_ino, dir_handle, 0, &mut reply).await.unwrap();

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
    let entry = fs.lookup(FUSE_ROOT_INODE, "dir1/".as_ref()).await;
    assert!(matches!(entry, Err(libc::EINVAL)));

    // TODO test removing the directory, removing the file

    fs.releasedir(dir_ino, dir_handle, 0).await.unwrap();
}

#[test_case(1024; "small")]
#[test_case(50 * 1024; "large")]
#[tokio::test]
async fn test_sequential_write(write_size: usize) {
    const BUCKET_NAME: &str = "test_sequential_write";
    const OBJECT_SIZE: usize = 50 * 1024;

    let (client, fs) = make_test_filesystem(BUCKET_NAME, &Default::default(), Default::default());

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    client.add_object("dir1/file1.bin", MockObject::constant(0xa1, 15, ETag::for_tests()));

    // Find the dir1 directory
    let entry = fs.lookup(FUSE_ROOT_INODE, "dir1".as_ref()).await.unwrap();
    assert_eq!(entry.attr.kind, FileType::Directory);
    let dir_ino = entry.attr.ino;

    // Write the object into that directory
    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs.mknod(dir_ino, "file2.bin".as_ref(), mode, 0, 0).await.unwrap();
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
    let get = client
        .get_object(BUCKET_NAME, "dir1/file2.bin", None, None)
        .await
        .unwrap();
    let actual = get.collect().await.unwrap();
    assert_eq!(&actual[..], &body[..]);

    // And now check that we can read it out of the file system too. The inode is still valid, so
    // the kernel is allowed to just send us a `getattr` immediately, so let's make sure that works.
    let stat = fs.getattr(file_ino).await.unwrap();
    assert_eq!(stat.attr.size, body.len() as u64);

    let dentry = fs.lookup(dir_ino, "file2.bin".as_ref()).await.unwrap();
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

#[test_case(-27; "earlier offset")]
#[test_case(28; "later offset")]
#[tokio::test]
async fn test_unordered_write_fails(offset: i64) {
    const BUCKET_NAME: &str = "test_unordered_write_fails";

    let (_client, fs) = make_test_filesystem(BUCKET_NAME, &Default::default(), Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs
        .mknod(FUSE_ROOT_INODE, "file2.bin".as_ref(), mode, 0, 0)
        .await
        .unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    let slice = &[0xaa; 27];
    let written = fs.write(file_ino, fh, 0, slice, 0, 0, None).await.unwrap();
    assert_eq!(written, 27);

    let err = fs
        .write(file_ino, fh, written as i64 + offset, slice, 0, 0, None)
        .await
        .expect_err("writes to out-of-order offsets should fail");
    assert_eq!(err, libc::EINVAL);

    let err = fs
        .write(file_ino, fh, written as i64, slice, 0, 0, None)
        .await
        .expect_err("any write after an error should fail");
    assert_eq!(err, libc::EINVAL);
}

#[tokio::test]
async fn test_duplicate_write_fails() {
    const BUCKET_NAME: &str = "test_duplicate_write_fails";

    let (_client, fs) = make_test_filesystem(BUCKET_NAME, &Default::default(), Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs
        .mknod(FUSE_ROOT_INODE, "file2.bin".as_ref(), mode, 0, 0)
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

#[tokio::test]
async fn test_upload_aborted_on_write_failure() {
    const BUCKET_NAME: &str = "test_upload_aborted_on_write_failure";
    const FILE_NAME: &str = "foo.bin";

    let client_config = MockClientConfig {
        bucket: BUCKET_NAME.to_string(),
        part_size: 1024 * 1024,
    };

    let client = Arc::new(MockClient::new(client_config));
    let mut put_failures = HashMap::new();
    put_failures.insert(1, Ok((2, MockClientError("error".to_owned().into()))));

    let failure_client = countdown_failure_client(
        client.clone(),
        Default::default(),
        Default::default(),
        Default::default(),
        put_failures,
    );
    let fs = make_test_filesystem_with_client(failure_client, BUCKET_NAME, &Default::default(), Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs.mknod(FUSE_ROOT_INODE, FILE_NAME.as_ref(), mode, 0, 0).await.unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    let written = fs
        .write(file_ino, fh, 0, &[0xaa; 27], 0, 0, None)
        .await
        .expect("first write should succeed");

    assert!(client.is_upload_in_progress(FILE_NAME));

    let write_error = fs
        .write(file_ino, fh, written as i64, &[0xaa; 27], 0, 0, None)
        .await
        .expect_err("second write should fail");
    assert_eq!(write_error, libc::EIO);

    let err = fs
        .write(file_ino, fh, 0, &[0xaa; 27], 0, 0, None)
        .await
        .expect_err("subsequent writes should fail");
    assert_eq!(err, libc::EIO);

    assert!(!client.is_upload_in_progress(FILE_NAME));
    assert!(!client.contains_key(FILE_NAME));

    let err = fs
        .fsync(file_ino, fh, true)
        .await
        .expect_err("subsequent fsync should fail");
    assert_eq!(err, libc::EIO);

    fs.release(file_ino, fh, 0, None, true)
        .await
        .expect("release succeeds (no op)");
}

#[tokio::test]
async fn test_upload_aborted_on_fsync_failure() {
    const BUCKET_NAME: &str = "test_upload_aborted_on_fsync_failure";
    const FILE_NAME: &str = "foo.bin";

    let client_config = MockClientConfig {
        bucket: BUCKET_NAME.to_string(),
        part_size: 1024 * 1024,
    };

    let client = Arc::new(MockClient::new(client_config));
    let mut put_failures = HashMap::new();
    put_failures.insert(1, Ok((2, MockClientError("error".to_owned().into()))));

    let failure_client = countdown_failure_client(
        client.clone(),
        Default::default(),
        Default::default(),
        Default::default(),
        put_failures,
    );
    let fs = make_test_filesystem_with_client(failure_client, BUCKET_NAME, &Default::default(), Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs.mknod(FUSE_ROOT_INODE, FILE_NAME.as_ref(), mode, 0, 0).await.unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    _ = fs
        .write(file_ino, fh, 0, &[0xaa; 27], 0, 0, None)
        .await
        .expect("first write should succeed");

    assert!(client.is_upload_in_progress(FILE_NAME));

    let err = fs
        .fsync(file_ino, fh, true)
        .await
        .expect_err("subsequent fsync should fail");
    assert_eq!(err, libc::EIO);

    assert!(!client.is_upload_in_progress(FILE_NAME));
    assert!(!client.contains_key(FILE_NAME));

    fs.release(file_ino, fh, 0, None, true)
        .await
        .expect("release succeeds (no op)");
}

#[tokio::test]
async fn test_upload_aborted_on_release_failure() {
    const BUCKET_NAME: &str = "test_upload_aborted_on_fsync_failure";
    const FILE_NAME: &str = "foo.bin";

    let client_config = MockClientConfig {
        bucket: BUCKET_NAME.to_string(),
        part_size: 1024 * 1024,
    };

    let client = Arc::new(MockClient::new(client_config));
    let mut put_failures = HashMap::new();
    put_failures.insert(1, Ok((2, MockClientError("error".to_owned().into()))));

    let failure_client = countdown_failure_client(
        client.clone(),
        Default::default(),
        Default::default(),
        Default::default(),
        put_failures,
    );
    let fs = make_test_filesystem_with_client(failure_client, BUCKET_NAME, &Default::default(), Default::default());

    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let dentry = fs.mknod(FUSE_ROOT_INODE, FILE_NAME.as_ref(), mode, 0, 0).await.unwrap();
    assert_eq!(dentry.attr.size, 0);
    let file_ino = dentry.attr.ino;

    let fh = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    _ = fs
        .write(file_ino, fh, 0, &[0xaa; 27], 0, 0, None)
        .await
        .expect("first write should succeed");

    assert!(client.is_upload_in_progress(FILE_NAME));

    let err = fs
        .release(file_ino, fh, 0, None, true)
        .await
        .expect_err("subsequent release should fail");
    assert_eq!(err, libc::EIO);

    assert!(!client.is_upload_in_progress(FILE_NAME));
    assert!(!client.contains_key(FILE_NAME));
}

#[tokio::test]
async fn test_stat_block_size() {
    let (client, fs) = make_test_filesystem("test_stat_block_size", &Default::default(), Default::default());

    client.add_object(
        "file0.txt",
        MockObject::constant(0xa1, 0, ETag::from_str("test_etag_1").unwrap()),
    );
    client.add_object(
        "file1.txt",
        MockObject::constant(0xa2, 1, ETag::from_str("test_etag_2").unwrap()),
    );
    client.add_object(
        "file4096.txt",
        MockObject::constant(0xa3, 4096, ETag::from_str("test_etag_3").unwrap()),
    );
    client.add_object(
        "file4097.txt",
        MockObject::constant(0xa3, 4097, ETag::from_str("test_etag_4").unwrap()),
    );

    let lookup = fs.lookup(FUSE_ROOT_INODE, "file0.txt".as_ref()).await.unwrap();
    assert_eq!(lookup.attr.blocks, 0);
    assert_eq!(lookup.attr.blksize, 4096);

    let lookup = fs.lookup(FUSE_ROOT_INODE, "file1.txt".as_ref()).await.unwrap();
    assert_eq!(lookup.attr.blocks, 1);
    assert_eq!(lookup.attr.blksize, 4096);

    let lookup = fs.lookup(FUSE_ROOT_INODE, "file4096.txt".as_ref()).await.unwrap();
    assert_eq!(lookup.attr.blocks, 8);
    assert_eq!(lookup.attr.blksize, 4096);

    let lookup = fs.lookup(FUSE_ROOT_INODE, "file4097.txt".as_ref()).await.unwrap();
    assert_eq!(lookup.attr.blocks, 9);
    assert_eq!(lookup.attr.blksize, 4096);
}

#[test_case("foo"; "remove file")]
#[test_case("bar/foo"; "remove directory")]
#[tokio::test]
async fn test_lookup_removes_old_children(key: &str) {
    let (client, fs) = make_test_filesystem(
        "test_lookup_removes_old_children",
        &Default::default(),
        Default::default(),
    );

    client.add_object(key, MockObject::constant(0xa1, 0, ETag::for_tests()));

    let child_name = key.split_once('/').map(|(p, _)| p).unwrap_or(key);

    // Ensure the file is visible in mountpoint
    fs.lookup(FUSE_ROOT_INODE, child_name.as_ref()).await.unwrap();

    // Remove object on the client
    client.remove_object(key);

    fs.lookup(FUSE_ROOT_INODE, child_name.as_ref())
        .await
        .expect_err("the child should not be visible");

    fs.mknod(
        FUSE_ROOT_INODE,
        child_name.as_ref(),
        libc::S_IFREG | libc::S_IRWXU,
        0,
        0,
    )
    .await
    .expect("should create a new child with the same name");
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn test_local_dir(prefix: &str) {
    let prefix = Prefix::new(prefix).expect("valid prefix");
    let (client, fs) = make_test_filesystem("test_local_dir", &prefix, Default::default());

    // Create local directory
    let dirname = "local";
    let dir_entry = fs
        .mkdir(FUSE_ROOT_INODE, dirname.as_ref(), libc::S_IFDIR, 0)
        .await
        .unwrap();

    assert_eq!(dir_entry.attr.kind, FileType::Directory);
    let dir_ino = dir_entry.attr.ino;

    assert!(!client.contains_prefix(&format!("{prefix}{dirname}")));

    let lookup_entry = fs.lookup(FUSE_ROOT_INODE, dirname.as_ref()).await.unwrap();
    assert_eq!(lookup_entry.attr, dir_entry.attr);

    // Write an object into the directory
    let filename = "file.bin";
    let mode = libc::S_IFREG | libc::S_IRWXU; // regular file + 0700 permissions
    let file_entry = fs.mknod(dir_ino, filename.as_ref(), mode, 0, 0).await.unwrap();
    let file_ino = file_entry.attr.ino;
    let file_handle = fs
        .open(file_ino, libc::S_IFREG as i32 | libc::O_WRONLY)
        .await
        .unwrap()
        .fh;

    fs.release(file_ino, file_handle, 0, None, false).await.unwrap();

    // Remove the new object from the client
    client.remove_object(&format!("{prefix}{dirname}/{filename}"));

    // Verify that the directory disappeared
    let lookup = fs.lookup(FUSE_ROOT_INODE, dirname.as_ref()).await;
    assert!(matches!(lookup, Err(libc::ENOENT)));
}

#[tokio::test]
async fn test_directory_shadowing_lookup() {
    let (client, fs) = make_test_filesystem(
        "test_directory_shadowing_lookup",
        &Default::default(),
        Default::default(),
    );

    // Add an object
    let name = "foo";
    client.add_object(name, b"foo".into());

    let lookup_entry = fs.lookup(FUSE_ROOT_INODE, name.as_ref()).await.unwrap();
    assert_eq!(lookup_entry.attr.kind, FileType::RegularFile);

    // Add another object, whose prefix shadows the first
    let nested = format!("{name}/bar");
    client.add_object(&nested, b"bar".into());

    let lookup_entry = fs.lookup(FUSE_ROOT_INODE, name.as_ref()).await.unwrap();
    assert_eq!(lookup_entry.attr.kind, FileType::Directory);

    // Remove the second object
    client.remove_object(&nested);

    let lookup_entry = fs.lookup(FUSE_ROOT_INODE, name.as_ref()).await.unwrap();
    assert_eq!(lookup_entry.attr.kind, FileType::RegularFile);
}

#[tokio::test]
async fn test_directory_shadowing_readdir() {
    let (client, fs) = make_test_filesystem(
        "test_directory_shadowing_readdir",
        &Default::default(),
        Default::default(),
    );

    // Add `foo/bar` as a file
    client.add_object("foo/bar", b"foo/bar".into());

    let foo_dir = fs.lookup(FUSE_ROOT_INODE, "foo".as_ref()).await.unwrap();
    assert_eq!(foo_dir.attr.kind, FileType::Directory);

    let bar_dentry = {
        let dir_handle = fs.opendir(foo_dir.attr.ino, 0).await.unwrap().fh;
        let mut reply = Default::default();
        let _reply = fs.readdir(foo_dir.attr.ino, dir_handle, 0, &mut reply).await.unwrap();
        fs.releasedir(foo_dir.attr.ino, dir_handle, 0).await.unwrap();

        // Skip . and .. to get to the `bar` dentry
        reply.entries.get(2).unwrap().clone()
    };
    // The `bar` dentry should be a file
    assert_eq!(bar_dentry.attr.kind, FileType::RegularFile);
    assert_eq!(bar_dentry.name, "bar");

    // Lookup should be consistent with readdir
    let bar_file = fs.lookup(foo_dir.attr.ino, "bar".as_ref()).await.unwrap();
    assert_eq!(bar_file.attr.kind, FileType::RegularFile);
    assert_eq!(bar_file.attr.ino, bar_dentry.attr.ino);

    // Add another object that shadows the first `bar` file with a directory
    client.add_object("foo/bar/baz", b"bar".into());

    let bar_dentry_new = {
        let dir_handle = fs.opendir(foo_dir.attr.ino, 0).await.unwrap().fh;
        let mut reply = Default::default();
        let _reply = fs.readdir(bar_file.attr.ino, dir_handle, 0, &mut reply).await.unwrap();
        fs.releasedir(bar_file.attr.ino, dir_handle, 0).await.unwrap();

        // Skip . and .. to get to the `bar` dentry
        reply.entries.get(2).unwrap().clone()
    };
    // The `bar` dentry should now be a directory and a different
    // inode to the original `bar`
    assert_eq!(bar_dentry_new.attr.kind, FileType::Directory);
    assert_eq!(bar_dentry.name, "bar");
    assert_ne!(bar_dentry_new.attr.ino, bar_dentry.attr.ino);

    // Lookup should again be consistent with readdir
    let bar_dir = fs.lookup(foo_dir.attr.ino, "bar".as_ref()).await.unwrap();
    assert_eq!(bar_dir.attr.kind, FileType::Directory);
    assert_eq!(bar_dir.attr.ino, bar_dentry_new.attr.ino);

    // Remove the second object, revealing the original `bar` file again
    client.remove_object("foo/bar/baz");

    let bar_dentry = {
        let dir_handle = fs.opendir(foo_dir.attr.ino, 0).await.unwrap().fh;
        let mut reply = Default::default();
        let _reply = fs.readdir(foo_dir.attr.ino, dir_handle, 0, &mut reply).await.unwrap();
        fs.releasedir(foo_dir.attr.ino, dir_handle, 0).await.unwrap();

        // Skip . and .. to get to the `bar` dentry
        reply.entries.get(2).unwrap().clone()
    };
    // The `bar` dentry should be a file again and a different inode to
    // the `bar` directory above that's now gone. We're ambivalent about
    // whether it's the same inode as the original file we saw above.
    assert_eq!(bar_dentry.attr.kind, FileType::RegularFile);
    assert_eq!(bar_dentry.name, "bar");
    assert_ne!(bar_dentry.attr.ino, bar_dentry_new.attr.ino);

    // Lookup should be consistent with readdir
    let bar_file = fs.lookup(foo_dir.attr.ino, "bar".as_ref()).await.unwrap();
    assert_eq!(bar_file.attr.kind, FileType::RegularFile);
    assert_eq!(bar_file.attr.ino, bar_dentry.attr.ino);
}

#[tokio::test]
async fn test_readdir_vs_readdirplus() {
    let (client, fs) = make_test_filesystem("test_readdir_vs_readdirplus", &Default::default(), Default::default());

    client.add_object("bar", b"bar".into());
    client.add_object("baz/foo", b"foo".into());

    let readdir_entries = {
        let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
        let mut reply = Default::default();
        let _reply = fs.readdir(FUSE_ROOT_INODE, dir_handle, 0, &mut reply).await.unwrap();
        fs.releasedir(FUSE_ROOT_INODE, dir_handle, 0).await.unwrap();

        // Skip . and ..
        reply.entries.into_iter().skip(2).collect::<Vec<_>>()
    };

    assert_eq!(
        readdir_entries.iter().map(|e| &e.name).collect::<Vec<_>>(),
        &["bar", "baz"]
    );

    for entry in readdir_entries {
        let err = fs
            .getattr(entry.ino)
            .await
            .expect_err("readdir should not add inodes to the superblock");
        assert!(matches!(err, libc::ENOENT));
    }

    let readdirplus_entries = {
        let dir_handle = fs.opendir(FUSE_ROOT_INODE, 0).await.unwrap().fh;
        let mut reply = Default::default();
        let _reply = fs
            .readdirplus(FUSE_ROOT_INODE, dir_handle, 0, &mut reply)
            .await
            .unwrap();
        fs.releasedir(FUSE_ROOT_INODE, dir_handle, 0).await.unwrap();

        // Skip . and ..
        reply.entries.into_iter().skip(2).collect::<Vec<_>>()
    };

    assert_eq!(
        readdirplus_entries.iter().map(|e| &e.name).collect::<Vec<_>>(),
        &["bar", "baz"]
    );

    for entry in readdirplus_entries {
        let attr = fs
            .getattr(entry.ino)
            .await
            .expect("readdirplus should add inodes to the superblock");
        assert_eq!(entry.ino, attr.attr.ino);
    }
}

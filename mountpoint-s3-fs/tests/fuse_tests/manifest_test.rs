use crate::common::fuse::{self, TestClient, TestSessionConfig, read_dir_to_entry_names};
use crate::common::manifest::{DUMMY_ETAG, create_dummy_manifest, create_manifest, insert_entries};
#[cfg(feature = "s3_tests")]
use crate::common::s3::{get_second_standard_test_bucket, get_test_prefix, get_test_region, get_test_sdk_client};
use mountpoint_s3_fs::manifest::{ChannelManifest, DbEntry, InputManifestEntry, Manifest};
use mountpoint_s3_fs::metablock::ValidKey;
use mountpoint_s3_fs::s3::{Bucket, Prefix, S3Path};
use std::fs::{self, metadata};
use std::io::ErrorKind;
use std::os::unix::fs::MetadataExt;
use std::path::Path;
#[cfg(feature = "s3_tests")]
use std::{fs::File, io::Read};

use rand::seq::SliceRandom;
use test_case::test_case;
use walkdir::WalkDir;

#[test_case(&[
    "dir1/a.txt",
    "dir1/dir2/b.txt",
    "dir1/dir2/c.txt",
    "dir1/dir3/dir4/d.txt",
    "e.txt",
], &[], "", &mut ["dir1", "e.txt"]; "root directory")]
#[test_case(&[
    "dir1/a.txt",
    "dir1/dir2/b.txt",
    "dir1/dir2/c.txt",
    "dir1/dir3/dir4/d.txt",
    "e.txt",
], &[], "dir1", &["a.txt", "dir2", "dir3"]; "child directory")]
#[test_case(&[
    "dir1/a.txt",
    "dir1/dir2/b.txt",
], &[
    "dir1/dir2/c.txt",
    "dir1/dir3/dir4/d.txt",
    "dir1/e.txt",
    "f.txt",
], "dir1", &["a.txt", "dir2"]; "with excluded keys")]
fn test_readdir_manifest(
    manifest_keys: &[&str],
    excluded_keys: &[&str],
    directory_to_list: &str,
    expected_children: &[&str],
) {
    let (_tmp_dir, db_path) =
        create_dummy_manifest(manifest_keys, 0, "channel_0", "test_bucket").expect("manifest must be created");
    let test_session = fuse::mock_session::new("", manifest_test_session_config(&db_path));
    put_dummy_objects(test_session.client(), manifest_keys, excluded_keys);

    let channel_dir = test_session.mount_path().join("channel_0");
    let read_dir_iter = fs::read_dir(channel_dir.join(directory_to_list)).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, expected_children, "readdir test failed");
}

#[test]
fn test_readdir_manifest_multiple_buckets() {
    let bucket1_files = vec![
        "dir1/a.txt",
        "dir1/dir2/b.txt",
        "dir1/dir2/c.txt",
        "dir1/dir3/dir4/d.txt",
        "e.txt",
    ];
    let bucket2_files = vec!["dir5/f.txt", "dir6/dir7/g.txt", "dir6/dir7/h.txt", "i.txt"];
    let bucket3_files = vec!["j.txt", "dir8/k.txt"];

    let create_entry = |key: &&str| Ok(InputManifestEntry::new_without_checksum(*key, DUMMY_ETAG, 1024).unwrap());
    // Create manifest with 3 channels pointing to different buckets
    let bucket_files = [&bucket1_files, &bucket2_files, &bucket3_files];
    let channel_manifests: Vec<_> = bucket_files
        .iter()
        .enumerate()
        .map(|(i, files)| ChannelManifest {
            directory_name: format!("channel_{}", i + 1),
            s3_path: S3Path::new(
                Bucket::new(format!("test_bucket_{}", i + 1)).unwrap(),
                Default::default(),
            ),
            entries: Box::new(files.iter().map(create_entry)),
        })
        .collect();

    // Create manifest and mount
    let (_tmp_dir, db_path) = create_manifest(channel_manifests, 1000).expect("manifest must be created");
    let test_session = fuse::mock_session::new("", manifest_test_session_config(&db_path));

    // Use WalkDir to validate the entire directory structure
    let mut all_files: Vec<_> = WalkDir::new(test_session.mount_path())
        .sort_by_file_name()
        .into_iter()
        .filter_map(|dir_entry| {
            let dir_entry = dir_entry.expect("readdir must succeed").into_path();
            if dir_entry.is_file() {
                let mount_path = test_session.mount_path().to_str().unwrap();
                let full_path = dir_entry
                    .to_str()
                    .unwrap()
                    .strip_prefix(mount_path)
                    .unwrap()
                    .trim_start_matches("/");
                Some(full_path.to_string())
            } else {
                None
            }
        })
        .collect();
    all_files.sort();

    // Create expected file list
    let mut expected_files: Vec<_> = bucket1_files
        .iter()
        .map(|f| format!("channel_1/{f}"))
        .chain(bucket2_files.iter().map(|f| format!("channel_2/{f}")))
        .chain(bucket3_files.iter().map(|f| format!("channel_3/{f}")))
        .collect();
    expected_files.sort();

    assert_eq!(all_files, expected_files, "readdir test failed");
}

#[test]
fn test_readdir_manifest_20k_keys() {
    let manifest_keys = (0..20000).map(|i| format!("dir1/file_{i}")).collect::<Vec<_>>();
    let excluded_keys = &["dir1/excluded_file".to_string()];
    let directory_to_list = "dir1";
    let mut expected_children = (0..20000).map(|i| format!("file_{i}")).collect::<Vec<_>>();
    expected_children.sort(); // children are expected to be in the sorted order

    let (_tmp_dir, db_path) =
        create_dummy_manifest(&manifest_keys, 0, "channel_0", "test_bucket").expect("manifest must be created");
    let test_session = fuse::mock_session::new("", manifest_test_session_config(&db_path));
    put_dummy_objects(test_session.client(), &manifest_keys, excluded_keys);

    let channel_dir = test_session.mount_path().join("channel_0");
    let read_dir_iter = fs::read_dir(channel_dir.join(directory_to_list)).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, expected_children, "readdir test failed");
}

#[test_case(Some("dummy_etag"), None; "missing size")]
#[test_case(None, Some(1); "missing etag")]
fn test_readdir_manifest_missing_metadata(etag: Option<&str>, size: Option<usize>) {
    let key = "key";
    let s3_path = S3Path::new("test_bucket".to_string().try_into().unwrap(), Prefix::empty());
    let (_tmp_dir, db_path) =
        create_dummy_manifest::<&str>(&[], 0, "channel_0", &s3_path.bucket).expect("manifest must be created");
    let test_session = fuse::mock_session::new(s3_path.prefix.as_str(), manifest_test_session_config(&db_path));
    insert_entries(
        &db_path,
        &[DbEntry::new(
            3,
            1,
            0,
            Some(ValidKey::root()),
            key.try_into().unwrap(),
            etag.map(String::from),
            size,
            &s3_path,
        )
        .expect("db entry must be valid")],
    )
    .expect("insert invalid row must succeed");

    let mut read_dir_iter = fs::read_dir(test_session.mount_path()).unwrap();
    let e = read_dir_iter
        .next()
        .expect("iterator not empty")
        .expect_err("first item is an error");
    assert_eq!(e.raw_os_error().expect("must be an error"), libc::EIO);
    assert!(read_dir_iter.next().is_none(), "no more items in the iterator");
}

#[test]
fn test_lookup_unicode_keys_manifest() {
    let file_size = 1024;
    let keys = &["مرحبًا", "🇦🇺", "🐈/🦀"];
    let excluded_keys = &["こんにちは"];
    let (_tmp_dir, db_path) =
        create_dummy_manifest(keys, file_size, "channel_0", "test_bucket").expect("manifest must be created");
    let test_session = fuse::mock_session::new("", manifest_test_session_config(&db_path));
    put_dummy_objects(test_session.client(), keys, excluded_keys);

    let channel_dir = test_session.mount_path().join("channel_0");
    let m = metadata(channel_dir.join("مرحبًا")).unwrap();
    assert!(m.file_type().is_file());
    assert_eq!(m.size(), file_size as u64);
    let m = metadata(channel_dir.join("🇦🇺")).unwrap();
    assert!(m.file_type().is_file());
    let m = metadata(channel_dir.join("🐈")).unwrap();
    assert!(m.file_type().is_dir());
    let m = metadata(channel_dir.join("🐈/🦀")).unwrap();
    assert!(m.file_type().is_file());
    let e = metadata(channel_dir.join("こんにちは")).expect_err("must not exist");
    assert_eq!(e.kind(), ErrorKind::NotFound);
}

#[test_case(Some("dummy_etag"), None; "missing size")]
#[test_case(None, Some(1); "missing etag")]
fn test_lookup_manifest_missing_metadata(etag: Option<&str>, size: Option<usize>) {
    let key = "key";
    let s3_path = S3Path::new("test_bucket".to_string().try_into().unwrap(), Prefix::empty());
    let (_tmp_dir, db_path) =
        create_dummy_manifest::<&str>(&[], 0, "channel_0", &s3_path.bucket).expect("manifest must be created");
    let test_session = fuse::mock_session::new(s3_path.prefix.as_str(), manifest_test_session_config(&db_path));
    insert_entries(
        &db_path,
        &[DbEntry::new(
            3,
            1,
            0,
            Some(ValidKey::root()),
            key.try_into().unwrap(),
            etag.map(String::from),
            size,
            &s3_path,
        )
        .expect("must be a valid db entry")],
    )
    .expect("insert invalid row must succeed");

    let e = metadata(test_session.mount_path().join(key)).expect_err("lookup must fail");
    assert_eq!(e.raw_os_error().expect("lookup must fail"), libc::EIO);
}

#[test_case(false; "lookup")]
#[test_case(true; "readdir")]
fn test_manifest_wrong_checksum(test_readdir: bool) {
    let key = "key";
    let s3_path = S3Path::new("test_bucket".to_string().try_into().unwrap(), Prefix::empty());
    let (_tmp_dir, db_path) =
        create_dummy_manifest::<&str>(&[], 0, "channel_0", &s3_path.bucket).expect("manifest must be created");
    let test_session = fuse::mock_session::new(s3_path.prefix.as_str(), manifest_test_session_config(&db_path));

    // Create a valid DbEntry
    let mut entry = DbEntry::new(
        3,
        1,
        0,
        Some(ValidKey::root()),
        key.try_into().unwrap(),
        Some(String::from("dummy_etag")),
        Some(1024),
        &s3_path,
    )
    .expect("db entry must be valid");

    // Corrupt the entry by changing the name field without updating the checksum
    entry.name = String::from("corrupted_key");

    // Insert the corrupted entry
    insert_entries(&db_path, &[entry]).expect("insert corrupted entry must succeed");

    if test_readdir {
        // Test readdir - should fail with EIO due to checksum mismatch
        let mut read_dir_iter = fs::read_dir(test_session.mount_path()).unwrap();
        let e = read_dir_iter
            .next()
            .expect("iterator not empty")
            .expect_err("first item is an error");
        assert_eq!(e.raw_os_error().expect("readdir must fail"), libc::EIO);
        assert!(read_dir_iter.next().is_none(), "no more items in the iterator");
    } else {
        // Test lookup - should fail with EIO due to checksum mismatch
        let e = metadata(test_session.mount_path().join("corrupted_key")).expect_err("lookup must fail");
        assert_eq!(e.raw_os_error().expect("lookup must fail"), libc::EIO);
    }
}

#[cfg(feature = "s3_tests")]
#[test_case(false, false; "just read")]
#[test_case(true, false; "readdir then read")]
#[test_case(false, true; "stat then read")]
#[tokio::test]
async fn test_basic_read_manifest_s3(readdir_before_read: bool, stat_before_read: bool) {
    use crate::common::s3::get_test_s3_path;

    let visible_object = ("visible_object_key", vec![b'1'; 1024]);
    let invisible_object = ("invisible_object_key", vec![b'2'; 1024]);

    // put objects
    let s3_path = get_test_s3_path("test_basic_read_manifest_s3");
    let sdk_client = get_test_sdk_client(&get_test_region()).await;
    let visible_object_etag = put_object(
        &sdk_client,
        s3_path.bucket.as_str(),
        s3_path.prefix.as_str(),
        visible_object.0,
        visible_object.1.clone(),
    )
    .await;
    put_object(
        &sdk_client,
        s3_path.bucket.as_str(),
        s3_path.prefix.as_str(),
        invisible_object.0,
        invisible_object.1,
    )
    .await;

    let entries = [Ok(InputManifestEntry::new_without_checksum(
        visible_object.0, // key does not contain the prefix
        &visible_object_etag,
        visible_object.1.len(),
    )
    .unwrap())]
    .into_iter();
    let channel_manifests = vec![ChannelManifest {
        directory_name: "channel_0".to_string(),
        s3_path: s3_path.clone(),
        entries,
    }];
    // create manifest and do the mount
    let (_tmp_dir, db_path) = create_manifest(channel_manifests, 1000).expect("manifest must be created");
    let test_session =
        fuse::s3_session::new_with_test_client(manifest_test_session_config(&db_path), sdk_client, s3_path);

    // if configured so, readdir before read
    let channel_dir = test_session.mount_path().join("channel_0");
    if readdir_before_read {
        let read_dir_iter = fs::read_dir(&channel_dir).unwrap();
        let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
        assert_eq!(
            &dir_entry_names,
            &["visible_object_key".to_string()],
            "dir must contain file named visible_object_key"
        );
    }
    // if configured so, stat before read
    if stat_before_read {
        let m = metadata(channel_dir.join("visible_object_key")).unwrap();
        assert!(m.file_type().is_file());
        assert_eq!(m.size(), visible_object.1.len() as u64);
    }

    // Read file once
    let mut fh1 = File::options()
        .read(true)
        .open(channel_dir.join(visible_object.0))
        .unwrap();
    let mut read_buffer = Default::default();
    fh1.read_to_end(&mut read_buffer).unwrap();
    assert_eq!(read_buffer, visible_object.1);

    // We can read from a file more than once at the same time.
    let mut fh2 = File::options()
        .read(true)
        .open(channel_dir.join(visible_object.0))
        .unwrap();
    read_buffer.clear();
    fh2.read_to_end(&mut read_buffer).unwrap();
    assert_eq!(read_buffer, visible_object.1);

    // File missing in the manifest must not exist
    let e = File::options()
        .read(true)
        .open(channel_dir.join(invisible_object.0))
        .expect_err("invisible_object_key must not exist");
    assert_eq!(e.kind(), ErrorKind::NotFound);
}

#[cfg(feature = "s3_tests")]
#[test_case(false, true, libc::EIO; "wrong size")]
#[test_case(true, false, libc::ESTALE; "wrong etag")]
#[tokio::test]
async fn test_read_manifest_wrong_metadata(wrong_etag: bool, wrong_size: bool, errno: i32) {
    use crate::common::s3::get_test_s3_path;

    let object = ("visible_object_key", vec![b'1'; 1024]);
    let s3_path = get_test_s3_path("test_basic_read_manifest_s3");
    let sdk_client = get_test_sdk_client(&get_test_region()).await;
    let object_etag = put_object(
        &sdk_client,
        s3_path.bucket.as_str(),
        s3_path.prefix.as_str(),
        object.0,
        object.1.clone(),
    )
    .await;

    let entries = [Ok(InputManifestEntry::new_without_checksum(
        object.0, // key does not contain the prefix
        if wrong_etag { "wrong_etag" } else { &object_etag },
        if wrong_size { 2048 } else { object.1.len() }, // size smaller than actual will result in incomplete response
    )
    .unwrap())]
    .into_iter();
    let channel_manifests = vec![ChannelManifest {
        directory_name: "channel_0".to_string(),
        s3_path: s3_path.clone(),
        entries,
    }];
    let (_tmp_dir, db_path) = create_manifest(channel_manifests, 1000).expect("manifest must be created");
    let test_session =
        fuse::s3_session::new_with_test_client(manifest_test_session_config(&db_path), sdk_client, s3_path);

    let channel_dir = test_session.mount_path().join("channel_0");
    let mut fh = File::options().read(true).open(channel_dir.join(object.0)).unwrap();
    let mut read_buffer = Default::default();
    let e = fh.read_to_end(&mut read_buffer).expect_err("read must fail");
    assert_eq!(e.raw_os_error().expect("read must fail"), errno);
}

#[cfg(feature = "s3_tests")]
#[tokio::test]
async fn test_basic_read_manifest_multiple_buckets() {
    use crate::common::s3::get_test_s3_path;

    let object1 = ("file1.txt", vec![b'1'; 1024]);
    let object2 = ("file2.txt", vec![b'2'; 2048]);

    // Put objects in two different buckets
    let s3_path1 = get_test_s3_path("test_read_multiple_buckets");
    let bucket2 = get_second_standard_test_bucket();
    let prefix2 = get_test_prefix("test_read_multiple_buckets");
    let s3_path2 = S3Path::new(Bucket::new(bucket2).unwrap(), Prefix::new(&prefix2).unwrap());
    let sdk_client = get_test_sdk_client(&get_test_region()).await;

    let object1_etag = put_object(
        &sdk_client,
        s3_path1.bucket.as_str(),
        s3_path1.prefix.as_str(),
        object1.0,
        object1.1.clone(),
    )
    .await;
    let object2_etag = put_object(
        &sdk_client,
        s3_path2.bucket.as_str(),
        s3_path2.prefix.as_str(),
        object2.0,
        object2.1.clone(),
    )
    .await;

    // Create manifest with two channels pointing to different buckets
    let create_channel_manifest =
        |directory_name: &str, s3_path: &S3Path, object: &(&str, Vec<u8>), etag: &str| ChannelManifest {
            directory_name: directory_name.to_string(),
            s3_path: s3_path.clone(),
            entries: [Ok(InputManifestEntry::new_without_checksum(
                object.0,
                etag,
                object.1.len(),
            )
            .unwrap())]
            .into_iter(),
        };
    let channel_manifests = vec![
        create_channel_manifest("channel_1", &s3_path1, &object1, &object1_etag),
        create_channel_manifest("channel_2", &s3_path2, &object2, &object2_etag),
    ];

    // Create manifest and mount
    let (_tmp_dir, db_path) = create_manifest(channel_manifests, 1000).expect("manifest must be created");
    let test_session =
        fuse::s3_session::new_with_test_client(manifest_test_session_config(&db_path), sdk_client.clone(), s3_path1);

    // Read file from first bucket
    let mut fh1 = File::options()
        .read(true)
        .open(test_session.mount_path().join("channel_1").join(object1.0))
        .unwrap();
    let mut read_buffer = Vec::new();
    fh1.read_to_end(&mut read_buffer).unwrap();
    assert_eq!(read_buffer, object1.1);

    // Read file from second bucket
    let mut fh2 = File::options()
        .read(true)
        .open(test_session.mount_path().join("channel_2").join(object2.0))
        .unwrap();
    read_buffer.clear();
    fh2.read_to_end(&mut read_buffer).unwrap();
    assert_eq!(read_buffer, object2.1);
}

#[test_case(false, false; "readdir, unsorted")]
#[test_case(false, true; "readdir, sorted")]
#[test_case(true, false; "lookup, unsorted")]
#[test_case(true, true; "lookup, sorted")]
fn test_unsorted_manifest(lookup: bool, sorted: bool) {
    let all_files_sorted = vec![
        "dir1/a.txt",
        "dir1/dir2/b.txt",
        "dir1/dir2/c.txt",
        "dir1/dir3/dir4/d.txt",
        "e.txt",
    ];
    let mut manifest_keys = all_files_sorted.clone();
    if !sorted {
        let mut rng = rand::rng();
        manifest_keys.shuffle(&mut rng);
    }
    let (_tmp_dir, db_path) =
        create_dummy_manifest(&manifest_keys, 0, "channel_0", "test_bucket").expect("manifest must be created");
    let test_session = fuse::mock_session::new("", manifest_test_session_config(&db_path));
    let channel_dir = &test_session.mount_path().join("channel_0");
    if lookup {
        for key in all_files_sorted {
            let m = metadata(channel_dir.join(key)).unwrap();
            assert!(m.file_type().is_file(), "must be a file: {key}");
        }
    } else {
        let readdir_files: Vec<_> = WalkDir::new(channel_dir)
            .sort_by_file_name()
            .into_iter()
            .filter_map(|dir_entry| {
                let dir_entry = dir_entry.expect("readdir must succeed").into_path();
                if dir_entry.is_file() {
                    let mount_path = channel_dir.to_str().unwrap();
                    let full_path = dir_entry
                        .to_str()
                        .unwrap()
                        .strip_prefix(mount_path)
                        .unwrap()
                        .trim_start_matches("/");
                    Some(full_path.to_string())
                } else {
                    None
                }
            })
            .collect();
        assert_eq!(readdir_files, all_files_sorted);
    }
}

fn manifest_test_session_config(db_path: &Path) -> TestSessionConfig {
    let manifest = Manifest::new(db_path).expect("manifest must be created");
    TestSessionConfig {
        manifest: Some(manifest),
        ..Default::default()
    }
}

fn put_dummy_objects<T: AsRef<str>>(test_client: &dyn TestClient, manifest_keys: &[T], excluded_keys: &[T]) {
    for name in manifest_keys.iter().chain(excluded_keys.iter()) {
        let content = vec![b'0'; 1024];
        test_client.put_object(name.as_ref(), &content).unwrap();
    }
}

#[cfg(feature = "s3_tests")]
async fn put_object(
    sdk_client: &aws_sdk_s3::Client,
    bucket: &str,
    prefix: &str,
    key: &str,
    content: Vec<u8>,
) -> String {
    use aws_sdk_s3::primitives::ByteStream;

    let full_key = format!("{prefix}{key}");
    let put_resp = sdk_client
        .put_object()
        .bucket(bucket)
        .key(&full_key)
        .body(ByteStream::from(content))
        .send()
        .await
        .expect("put object must succeed");

    put_resp.e_tag.unwrap()
}

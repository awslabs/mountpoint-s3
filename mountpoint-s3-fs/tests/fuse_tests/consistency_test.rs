use std::fs::File;
use std::os::unix::prelude::FileExt;

use test_case::test_case;

use crate::common::fuse::{self, TestSessionCreator};
use mountpoint_s3_fs::data_cache::InMemoryDataCache;

fn page_cache_sharing_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    // Big enough to avoid readahead
    const OBJECT_SIZE: usize = 512 * 1024;

    let test_session = creator_fn(prefix, Default::default());

    // Create the first version of the file
    let old_contents = vec![0xaau8; OBJECT_SIZE];
    test_session.client().put_object("file.bin", &old_contents).unwrap();

    // Open the file before updating it remotely
    let old_file = File::open(test_session.mount_path().join("file.bin")).unwrap();
    let mut buf = vec![0u8; 128];
    old_file.read_exact_at(&mut buf, 0).unwrap();
    assert_eq!(buf, &old_contents[..buf.len()]);

    let new_contents = vec![0xbbu8; OBJECT_SIZE];
    test_session.client().put_object("file.bin", &new_contents).unwrap();

    // Open the file again, should see the new contents this time
    let new_file = File::open(test_session.mount_path().join("file.bin")).unwrap();
    new_file.read_exact_at(&mut buf, 0).unwrap();
    assert_eq!(buf, &new_contents[..buf.len()]);

    // The old fd should see either the old contents or fail the read
    let res = old_file.read_exact_at(&mut buf, 0);
    match res {
        Ok(()) => assert_eq!(buf, &old_contents[..buf.len()]),
        Err(e) => println!("old read failed: {e:?}"),
    }

    // Try reading a fresh page in the other order (old file first)
    let offset = OBJECT_SIZE / 2;
    let res = old_file.read_exact_at(&mut buf, offset as u64);
    match res {
        Ok(()) => assert_eq!(buf, &old_contents[offset..offset + buf.len()]),
        Err(e) => println!("old read at {offset} failed: {e:?}"),
    }
    new_file.read_exact_at(&mut buf, offset as u64).unwrap();
    assert_eq!(buf, &new_contents[offset..offset + buf.len()]);
}

#[cfg(feature = "s3_tests")]
#[test]
fn page_cache_sharing_test_s3() {
    page_cache_sharing_test(fuse::s3_session::new, "page_cache_sharing_test");
}

#[cfg(feature = "s3_tests")]
#[test]
fn page_cache_sharing_test_s3_with_cache() {
    page_cache_sharing_test(
        fuse::s3_session::new_with_cache(|block_size, _| InMemoryDataCache::new(block_size)),
        "page_cache_sharing_test",
    );
}

#[test_case(""; "no prefix")]
#[test_case("page_cache_sharing_test"; "prefix")]
fn page_cache_sharing_test_mock(prefix: &str) {
    page_cache_sharing_test(fuse::mock_session::new, prefix);
}

#[test_case(""; "no prefix")]
#[test_case("page_cache_sharing_test"; "prefix")]
fn page_cache_sharing_test_mock_with_cache(prefix: &str) {
    page_cache_sharing_test(
        fuse::mock_session::new_with_cache(|block_size, _| InMemoryDataCache::new(block_size)),
        prefix,
    );
}

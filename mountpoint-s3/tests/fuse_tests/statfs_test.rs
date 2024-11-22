use crate::common::fuse::{self, TestSessionCreator};
use test_case::test_case;

/// Tests that static values we set are reported correctly.
fn statfs_test_static_values(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());
    let mount_dir = test_session.mount_path();
    let stats = nix::sys::statvfs::statvfs(mount_dir).unwrap();
    // Asserts that we report free space, we don't care about actual values here
    assert_ne!(stats.blocks(), 0);
    assert_ne!(stats.blocks_free(), 0);
    assert_ne!(stats.blocks_available(), 0);
    // These two are values set by us
    assert_eq!(stats.files() as u64, u64::MAX / 1024);
    assert_eq!(stats.files_available() as u64, u64::MAX / 1024);
    // These are default values from the Default implementation
    assert_eq!(stats.block_size(), 512);
    assert_eq!(stats.name_max(), 255);
    // This may be a bit surprising, however as we set fsize to 0,
    // it will be automatically set to the block_size, if it is not available
    // c.f. https://stackoverflow.com/questions/54823541/what-do-f-bsize-and-f-frsize-in-struct-statvfs-stand-for
    assert_eq!(stats.fragment_size(), 512);
}

/// Test that total blocks >= blocks_free,
/// as some tools rely on calculations with these values to determine percentage of blocks available
fn statfs_test_block_arithmetic(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());
    let mount_dir = test_session.mount_path();
    let stats = nix::sys::statvfs::statvfs(mount_dir).unwrap();
    assert!(stats.blocks() >= stats.blocks_available());
}

#[test_case(""; "no prefix")]
#[test_case("statfs_static_values_test"; "prefix")]
fn statfs_report_static_values_mock(prefix: &str) {
    statfs_test_static_values(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("statfs_static_values_test"; "prefix")]
fn statfs_report_static_values_s3(prefix: &str) {
    statfs_test_static_values(fuse::s3_session::new, prefix);
}

#[test_case(""; "no prefix")]
#[test_case("statfs_block_arithmetic_test"; "prefix")]
fn statfs_block_arithmetic_mock(prefix: &str) {
    statfs_test_block_arithmetic(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("statfs_block_arithmetic_test"; "prefix")]
fn statfs_block_arithmetic_s3(prefix: &str) {
    statfs_test_block_arithmetic(fuse::s3_session::new, prefix);
}

use crate::common::fuse::{self, TestSessionCreator};
use test_case::test_case;

/// Tests that non-zero empty space is reported
fn statfs_test_available_nonzero(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());
    let mount_dir = test_session.mount_dir;
    let stats = nix::sys::statvfs::statvfs(&mount_dir.into_path()).unwrap();
    assert_ne!(stats.blocks_free(), 0);
    assert_ne!(stats.blocks_available(), 0);
    assert_ne!(stats.blocks(), 0);
}

/// Tests that default values from FUSER are reported for mpst fields
fn statfs_test_fuser_defaults(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());
    let mount_dir = test_session.mount_dir;
    let stats = nix::sys::statvfs::statvfs(&mount_dir.into_path()).unwrap();
    //assert_eq!(stats.name_max(), 255);
    // These five aren't default values but set by us, so maybe drop
    assert_eq!(stats.blocks(), u64::MAX / 1024);
    assert_eq!(stats.blocks_free(), u64::MAX / 1024);
    assert_eq!(stats.blocks_available(), u64::MAX / 1024);
    assert_eq!(stats.files(), u64::MAX / 1024);
    assert_eq!(stats.files_available(), u64::MAX / 1024);
    // These are default values from the Default implementation
    assert_eq!(stats.block_size(), 512);
    assert_eq!(stats.name_max(), 255);
    println!("{}", stats.fragment_size().to_string());
    // This may be a bit surprising, however as we set fsize to 0,
    // it will be automatically set to the block_size, if it is not available
    // c.f. https://stackoverflow.com/questions/54823541/what-do-f-bsize-and-f-frsize-in-struct-statvfs-stand-for
    assert_eq!(stats.fragment_size(), 255);
}

/// Test that total blocks >= blocks_free,
/// as some tools rely on calculations with these values to determine percentage of blocks available
fn statfs_test_block_arithmetic(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());
    let mount_dir = test_session.mount_dir;
    let stats = nix::sys::statvfs::statvfs(&mount_dir.into_path()).unwrap();
    assert!(stats.blocks() >= stats.blocks_available());
}

#[test_case(""; "no prefix")]
#[test_case("statfs_report_nonzero_test"; "prefix")]
fn statfs_report_nonzero_test_mock(prefix: &str) {
    statfs_test_available_nonzero(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("statfs_report_nonzero_test"; "prefix")]
fn statfs_report_nonzero_s3(prefix: &str) {
    statfs_test_available_nonzero(fuse::s3_session::new, prefix);
}

#[test_case(""; "no prefix")]
#[test_case("statfs_report_fuser_defaults_test"; "prefix")]
fn statfs_report_fuser_defaults_mock(prefix: &str) {
    statfs_test_fuser_defaults(fuse::mock_session::new, prefix);
}

#[cfg(feature = "s3_tests")]
#[test_case(""; "no prefix")]
#[test_case("statfs_report_nonzero_test"; "prefix")]
fn statfs_report_fuser_defaults_s3(prefix: &str) {
    statfs_test_available_nonzero(fuse::s3_session::new, prefix);
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

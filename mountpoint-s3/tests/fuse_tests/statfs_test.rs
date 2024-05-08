use fuser::BackgroundSession;
use nix::sys::statvfs::statvfs;
use tempfile::TempDir;

use crate::common::fuse::{self, TestClientBox, TestSessionConfig};

fn statfs_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    // Make sure there's an existing directory
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let path = mount_point.path().join("dir");

    let reply = statvfs(&path).unwrap();

    assert_eq!(reply.files(), 0, "inodes/files should not be counted and returned");
    assert_eq!(
        reply.name_max(),
        255,
        "name_max should return 255, matching Fuser default",
    );
    assert!(
        reply.blocks_available() > 0,
        "blocks available should be non-zero, even though we can't provide a real number",
    );
}

#[test]
fn statfs_test_mock() {
    statfs_test(fuse::mock_session::new, "statfs_test_mock");
}

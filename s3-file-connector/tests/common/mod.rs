use aws_s3_fuse::fs::S3Filesystem;
use fuser::{BackgroundSession, MountOption, Session};
use s3_client::{S3Client, S3ClientConfig};
use tempfile::TempDir;

pub fn make_test_session() -> (TempDir, BackgroundSession) {
    let mount_dir = tempfile::tempdir().unwrap();

    let client_config: S3ClientConfig = Default::default();
    let client = S3Client::new(client_config).unwrap();

    let options = vec![
        MountOption::RO,
        MountOption::FSName("s3_fuse".to_string()),
        MountOption::AutoUnmount,
    ];

    let bucket_name = std::env::var("S3_BUCKET_NAME").expect("Must set S3_BUCKET_NAME to run tests");

    let session = Session::new(
        S3Filesystem::new(client, &bucket_name, "dummy_file", 4),
        mount_dir.path(),
        &options,
    )
    .unwrap();

    let session = BackgroundSession::new(session).unwrap();

    (mount_dir, session)
}

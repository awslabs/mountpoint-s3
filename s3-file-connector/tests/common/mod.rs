use fuser::{BackgroundSession, MountOption, Session};
use s3_client::{S3Client, S3ClientConfig};
use s3_file_connector::fs::S3Filesystem;
use tempfile::TempDir;

pub fn make_test_session() -> (TempDir, BackgroundSession) {
    let mount_dir = tempfile::tempdir().unwrap();

    let bucket_name = std::env::var("S3_BUCKET_NAME").expect("Must set S3_BUCKET_NAME to run tests");
    let region = std::env::var("S3_REGION").expect("Must set S3_REGION to run tests");

    let client_config: S3ClientConfig = Default::default();
    let client = S3Client::new(&region, client_config).unwrap();

    let options = vec![
        MountOption::RO,
        MountOption::FSName("s3_fuse".to_string()),
        MountOption::AutoUnmount,
    ];

    let session = Session::new(
        S3Filesystem::new(client, &bucket_name, "dummy_file", 4),
        mount_dir.path(),
        &options,
    )
    .unwrap();

    let session = BackgroundSession::new(session).unwrap();

    (mount_dir, session)
}

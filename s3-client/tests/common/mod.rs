use s3_client::S3Client;

pub fn get_test_client() -> S3Client {
    S3Client::new(Default::default()).expect("could not create test client")
}

pub fn get_test_bucket_name() -> String {
    std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
}

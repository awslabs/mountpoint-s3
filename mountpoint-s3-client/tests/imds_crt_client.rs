use std::assert_eq;

use aws_config::imds::Client;
use mountpoint_s3_client::ImdsCrtClient;
use serde_json::Value;

#[tokio::test]
async fn test_get_identity_document() {
    let sdk_client = Client::builder().build().await.unwrap();
    match sdk_client.get("/latest/dynamic/instance-identity/document").await {
        Ok(expected_json) => {
            let expected_doc: Value = serde_json::from_str(&expected_json).unwrap();
            let expected_region = expected_doc.get("region").unwrap().as_str().unwrap();
            let expected_instance_type = expected_doc.get("instanceType").unwrap().as_str().unwrap();

            let client = ImdsCrtClient::new().unwrap();
            let identity_document = client
                .get_identity_document()
                .await
                .expect("should return a valid document");

            assert_eq!(identity_document.region, expected_region);
            assert_eq!(identity_document.instance_type, expected_instance_type);
        }
        Err(_) => {
            let client = ImdsCrtClient::new().unwrap();
            let _ = client
                .get_identity_document()
                .await
                .expect_err("should not return a valid document");
        }
    }
}

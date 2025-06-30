
use mountpoint_s3_crt::auth::credentials::CredentialsProvider;
use mountpoint_s3_crt::common::allocator::Allocator;

use crate::access_grants::AccessGrantsConfig;
use crate::access_grants_client::AccessGrantsClient;
use crate::endpoint_config::EndpointConfig;

/// Create a new Access Grants credentials provider
pub fn new_access_grants_provider(
    allocator: &Allocator,
    config: AccessGrantsConfig,
    endpoint_config: EndpointConfig,
    profile_override: Option<String>,
) -> Result<CredentialsProvider, mountpoint_s3_crt::common::error::Error> {
    use mountpoint_s3_crt::auth::credentials::CredentialsProviderStaticOptions;
    
    // Create a tokio runtime for the GetDataAccess API call
    let rt = tokio::runtime::Builder::new_current_thread()
        .enable_all()
        .build()
        .map_err(|e| {
            tracing::error!("Failed to create tokio runtime: {}", e);
            mountpoint_s3_crt::common::error::Error::from(22) // EINVAL
        })?;
    
    // Create the Access Grants client and get credentials
    let credentials = rt.block_on(async {
        let client = AccessGrantsClient::new(config, endpoint_config, profile_override.as_deref()).await?;
        client.get_credentials().await
    }).map_err(|e| {
        tracing::error!("Failed to get Access Grants credentials: {:?}", e);
        mountpoint_s3_crt::common::error::Error::from(13) // EACCES
    })?;
    
    // Create static provider options with the retrieved credentials
    let options = CredentialsProviderStaticOptions {
        access_key_id: &credentials.access_key_id,
        secret_access_key: &credentials.secret_access_key,
        session_token: Some(&credentials.session_token),
    };
    
    CredentialsProvider::new_static(allocator, options)
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::access_grants::AccessGrantsPermission;

    #[test]
    fn test_access_grants_provider_creation() {
        let config = AccessGrantsConfig::new(
            Some("123456789012".to_string()),
            "s3://test-bucket/prefix".to_string(),
            AccessGrantsPermission::Read,
        );

        let _endpoint_config = EndpointConfig::new("us-east-1");

        // This test would need a real base credentials provider to work
        // For now, just verify the config is valid
        assert!(config.validate_target().is_ok());
    }
}

use std::sync::Arc;
use std::time::Duration;

use tokio::sync::Mutex;
use tracing::{debug, info};
use aws_sdk_s3control::Client as S3ControlClient;

use crate::access_grants::{AccessGrantsConfig, AccessGrantsCredentials, AccessGrantsError};
use crate::endpoint_config::EndpointConfig;

/// Client for retrieving S3 Access Grants tokens
pub struct AccessGrantsClient {
    config: AccessGrantsConfig,
    endpoint_config: EndpointConfig,
    s3control_client: S3ControlClient,
    cached_credentials: Arc<Mutex<Option<CachedCredentials>>>,
}

/// Cached credentials with expiration tracking
#[derive(Debug, Clone)]
struct CachedCredentials {
    credentials: AccessGrantsCredentials,
}

impl AccessGrantsClient {
    /// Create a new Access Grants client
    pub async fn new(
        config: AccessGrantsConfig,
        endpoint_config: EndpointConfig,
        profile_override: Option<&str>,
    ) -> Result<Self, AccessGrantsError> {
        config.validate_target()?;

        // Create AWS SDK config that uses the AWS profile
        let aws_config = if let Some(profile) = profile_override {
            aws_config::defaults(aws_config::BehaviorVersion::latest())
                .region(aws_config::Region::new(endpoint_config.get_region().to_string()))
                .profile_name(profile)
                .load()
                .await
        } else {
            aws_config::defaults(aws_config::BehaviorVersion::latest())
                .region(aws_config::Region::new(endpoint_config.get_region().to_string()))
                .load()
                .await
        };

        let s3control_client = S3ControlClient::new(&aws_config);

        Ok(Self {
            config,
            endpoint_config,
            s3control_client,
            cached_credentials: Arc::new(Mutex::new(None)),
        })
    }

    /// Get valid Access Grants credentials, refreshing if necessary
    pub async fn get_credentials(&self) -> Result<AccessGrantsCredentials, AccessGrantsError> {
        // Check cache first
        {
            let cached = self.cached_credentials.lock().await;
            if let Some(ref cached_creds) = *cached {
                // Add 5 minute buffer before expiration
                if !cached_creds.credentials.is_expired(Duration::from_secs(300)) {
                    debug!("Using cached Access Grants credentials");
                    return Ok(cached_creds.credentials.clone());
                }
            }
        }

        info!("Refreshing Access Grants credentials");
        let new_credentials = self.refresh_credentials().await?;

        // Cache the new credentials
        {
            let mut cached = self.cached_credentials.lock().await;
            *cached = Some(CachedCredentials {
                credentials: new_credentials.clone(),
            });
        }

        Ok(new_credentials)
    }

    /// Refresh credentials by calling GetDataAccess API
    async fn refresh_credentials(&self) -> Result<AccessGrantsCredentials, AccessGrantsError> {
        info!("Calling GetDataAccess API for Access Grants token");
        info!("Target: {}", self.config.target);
        info!("Permission: {:?}", self.config.permission);
        info!("Account ID: {}", self.config.account_id);
        info!("Region: {}", self.endpoint_config.get_region());
        
        // Convert permission to AWS SDK enum
        let permission = self.config.permission.to_sdk_permission();
        
        // Make the GetDataAccess API call
        let mut request = self.s3control_client
            .get_data_access()
            .account_id(&self.config.account_id)
            .target(&self.config.target)
            .permission(permission);
            
        if let Some(duration) = self.config.duration_seconds {
            request = request.duration_seconds(duration as i32);
        }
        
        if let Some(ref privilege) = self.config.privilege {
            request = request.privilege(privilege.to_sdk_privilege());
        }
        
        let response = request.send().await
            .map_err(|e| AccessGrantsError::AwsServiceError {
                code: "GetDataAccessError".to_string(),
                message: format!("Failed to call GetDataAccess API: {}", e),
            })?;
        
        let credentials = response.credentials()
            .ok_or_else(|| AccessGrantsError::AwsServiceError {
                code: "MissingCredentials".to_string(),
                message: "GetDataAccess response missing credentials".to_string(),
            })?;
        
        info!("Successfully obtained Access Grants credentials");
        if let Some(target) = response.matched_grant_target() {
            info!("Matched grant target: {}", target);
        }
        
        Ok(AccessGrantsCredentials {
            access_key_id: credentials.access_key_id().unwrap_or_default().to_string(),
            secret_access_key: credentials.secret_access_key().unwrap_or_default().to_string(),
            session_token: credentials.session_token().unwrap_or_default().to_string(),
            expiration: credentials.expiration()
                .map(|dt| dt.to_string())
                .unwrap_or_else(|| "2025-06-24T19:58:56+00:00".to_string()),
        })
    }
}


#[cfg(test)]
mod tests {
    use super::*;
    use crate::access_grants::AccessGrantsPermission;

    #[tokio::test]
    async fn test_access_grants_client_creation() {
        let config = AccessGrantsConfig::new(
            "123456789012".to_string(),
            "s3://test-bucket".to_string(),
            AccessGrantsPermission::Read,
        );
        
        let endpoint_config = EndpointConfig::new("us-east-1");
        
        let client = AccessGrantsClient::new(config, endpoint_config, None).await;
        assert!(client.is_ok());
    }

    #[tokio::test]
    async fn test_get_credentials_returns_error() {
        let config = AccessGrantsConfig::new(
            "123456789012".to_string(),
            "s3://test-bucket".to_string(),
            AccessGrantsPermission::Read,
        );
        
        let endpoint_config = EndpointConfig::new("us-east-1");
        let client = AccessGrantsClient::new(config, endpoint_config, None).await.unwrap();
        
        let result = client.get_credentials().await;
        assert!(result.is_err());
    }
}
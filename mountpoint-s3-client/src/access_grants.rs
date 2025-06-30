use std::time::{Duration, SystemTime};
use serde::{Deserialize, Serialize};
use thiserror::Error;


/// Configuration for S3 Access Grants authentication
#[derive(Debug, Clone)]
pub struct AccessGrantsConfig {
    /// AWS account ID that owns the Access Grants instance (None = auto-detect)
    pub account_id: Option<String>,
    /// The target S3 prefix or object for access (e.g., "s3://bucket/prefix")
    pub target: String,
    /// Permission requested (READ, WRITE, or READWRITE)
    pub permission: AccessGrantsPermission,
    /// Credential duration in seconds (900-43200, default 3600)
    pub duration_seconds: Option<u32>,
    /// Access privilege level (Default or Minimal)
    pub privilege: Option<AccessGrantsPrivilege>,
}

/// Permission types for Access Grants
#[derive(Debug, Clone, Serialize)]
pub enum AccessGrantsPermission {
    #[serde(rename = "READ")]
    Read,
    #[serde(rename = "WRITE")]
    Write,
    #[serde(rename = "READWRITE")]
    ReadWrite,
}

impl AccessGrantsPermission {
    /// Convert to AWS SDK permission type
    pub fn to_sdk_permission(&self) -> aws_sdk_s3control::types::Permission {
        match self {
            Self::Read => aws_sdk_s3control::types::Permission::Read,
            Self::Write => aws_sdk_s3control::types::Permission::Write,
            Self::ReadWrite => aws_sdk_s3control::types::Permission::Readwrite,
        }
    }
}

/// Privilege level for returned credentials scope
#[derive(Debug, Clone, Serialize)]
pub enum AccessGrantsPrivilege {
    /// Scope is closest to target (may be broader)
    #[serde(rename = "Default")]
    Default,
    /// Scope matches exactly the requested target
    #[serde(rename = "Minimal")]
    Minimal,
}

impl AccessGrantsPrivilege {
    /// Convert to AWS SDK privilege type
    pub fn to_sdk_privilege(&self) -> aws_sdk_s3control::types::Privilege {
        match self {
            Self::Default => aws_sdk_s3control::types::Privilege::Default,
            Self::Minimal => aws_sdk_s3control::types::Privilege::Minimal,
        }
    }
}

/// Response from GetDataAccess API call
#[derive(Debug, Deserialize)]
pub struct GetDataAccessResponse {
    #[serde(rename = "Credentials")]
    pub credentials: AccessGrantsCredentials,
    #[serde(rename = "MatchedGrantTarget")]
    pub matched_grant_target: String,
}

/// Temporary credentials returned by Access Grants
#[derive(Debug, Clone, Deserialize)]
pub struct AccessGrantsCredentials {
    #[serde(rename = "AccessKeyId")]
    pub access_key_id: String,
    #[serde(rename = "SecretAccessKey")]
    pub secret_access_key: String,
    #[serde(rename = "SessionToken")]
    pub session_token: String,
    #[serde(rename = "Expiration")]
    pub expiration: String,
}

/// Errors that can occur during Access Grants operations
#[derive(Error, Debug)]
pub enum AccessGrantsError {
    #[error("JSON parsing failed: {0}")]
    JsonError(#[from] serde_json::Error),
    #[error("Invalid target format: {target}")]
    InvalidTarget { target: String },
    #[error("Access denied: {message}")]
    AccessDenied { message: String },
    #[error("AWS service error: {code} - {message}")]
    AwsServiceError { code: String, message: String },
    #[error("Invalid expiration time format: {0}")]
    InvalidExpirationFormat(String),
}

impl AccessGrantsCredentials {
    /// Convert expiration string to SystemTime
    pub fn expiration_time(&self) -> Result<SystemTime, AccessGrantsError> {
        // AWS returns ISO 8601 format: "2023-06-14T18:56:45+00:00"
        let parsed_time = time::OffsetDateTime::parse(&self.expiration, &time::format_description::well_known::Iso8601::DEFAULT)
            .map_err(|_| AccessGrantsError::InvalidExpirationFormat(self.expiration.clone()))?;
        Ok(SystemTime::from(parsed_time))
    }

    /// Check if credentials are expired or will expire within the given buffer
    pub fn is_expired(&self, buffer: Duration) -> bool {
        match self.expiration_time() {
            Ok(expiry) => SystemTime::now() + buffer >= expiry,
            Err(_) => true, // Treat parsing errors as expired
        }
    }
}

impl AccessGrantsConfig {
    /// Create new AccessGrantsConfig with required fields
    pub fn new(account_id: Option<String>, target: String, permission: AccessGrantsPermission) -> Self {
        Self {
            account_id,
            target,
            permission,
            duration_seconds: None,
            privilege: None,
        }
    }

    /// Set credential duration (900-43200 seconds)
    pub fn duration_seconds(mut self, duration: u32) -> Self {
        self.duration_seconds = Some(duration);
        self
    }

    /// Set privilege level for credential scope
    pub fn privilege(mut self, privilege: AccessGrantsPrivilege) -> Self {
        self.privilege = Some(privilege);
        self
    }

    /// Validate the target is a valid S3 URI
    pub fn validate_target(&self) -> Result<(), AccessGrantsError> {
        if !self.target.starts_with("s3://") {
            return Err(AccessGrantsError::InvalidTarget {
                target: self.target.clone(),
            });
        }


        Ok(())
    }

}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_config_validation() {
        let config = AccessGrantsConfig::new(
            "123456789012".to_string(),
            "s3://my-bucket/prefix".to_string(),
            AccessGrantsPermission::Read,
        );

        assert!(config.validate_target().is_ok());

        let invalid_config = AccessGrantsConfig::new(
            "123456789012".to_string(),
            "invalid-target".to_string(),
            AccessGrantsPermission::Read,
        );

        assert!(invalid_config.validate_target().is_err());
    }


    #[test]
    fn test_credentials_expiration() {
        let creds = AccessGrantsCredentials {
            access_key_id: "test".to_string(),
            secret_access_key: "test".to_string(),
            session_token: "test".to_string(),
            expiration: "2023-06-14T18:56:45+00:00".to_string(),
        };

        // This will be expired since it's in the past
        assert!(creds.is_expired(Duration::from_secs(0)));

        // Test with invalid format
        let invalid_creds = AccessGrantsCredentials {
            access_key_id: "test".to_string(),
            secret_access_key: "test".to_string(),
            session_token: "test".to_string(),
            expiration: "invalid".to_string(),
        };

        assert!(invalid_creds.is_expired(Duration::from_secs(0)));
    }
}

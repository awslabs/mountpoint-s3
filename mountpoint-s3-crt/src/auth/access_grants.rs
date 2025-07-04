//! Access Grants SDK provider

use aws_credential_types::provider::error::CredentialsError;
use aws_credential_types::provider::{ProvideCredentials, future};
use aws_credential_types::{Credentials, provider};
use aws_sdk_s3control::types::Permission;
use std::time::SystemTime;

/// An S3 Access Grants provider
#[derive(Debug)]
pub struct AccessGrantsProviderConfig {
    account_id: String,
    bucket: String,
    prefix: String,
    read_only: bool,
}

impl AccessGrantsProviderConfig {
    /// Config for an access grants provider
    pub fn new(account_id: String, bucket: String, prefix: String, read_only: bool) -> AccessGrantsProviderConfig {
        Self {
            account_id,
            bucket,
            prefix,
            read_only,
        }
    }

    /// Build an access grants provider given this configuration.
    pub fn build(&self, client: aws_sdk_s3control::Client) -> AccessGrantsProvider {
        AccessGrantsProvider::new(
            client,
            self.account_id.clone(),
            &self.bucket,
            &self.prefix,
            self.read_only,
        )
    }
}

/// An S3 Access Grants provider
#[derive(Debug)]
pub struct AccessGrantsProvider {
    client: aws_sdk_s3control::Client,
    account_id: String,
    target: String,
    permission: Permission,
}

impl ProvideCredentials for AccessGrantsProvider {
    fn provide_credentials<'a>(&'a self) -> future::ProvideCredentials<'a>
    where
        Self: 'a,
    {
        future::ProvideCredentials::new(self.credentials())
    }
}

impl AccessGrantsProvider {
    /// Build an Access Grants credential provider using an S3 control client, and a set of source credentials
    pub fn new(
        client: aws_sdk_s3control::Client,
        account_id: String,
        bucket: &str,
        prefix: &str,
        read_only: bool,
    ) -> AccessGrantsProvider {
        let permission = if read_only {
            Permission::Read
        } else {
            Permission::Readwrite
        };
        let target = format!("s3://{bucket}/{prefix}*");
        AccessGrantsProvider {
            client,
            account_id,
            target,
            permission,
        }
    }

    async fn credentials(&self) -> provider::Result {
        let data_access_request = self
            .client
            .get_data_access()
            .account_id(&self.account_id)
            .target(&self.target)
            .permission(self.permission.clone());
        let data_access = data_access_request
            .send()
            .await
            .map_err(CredentialsError::provider_error)?;

        let credentials = data_access
            .credentials
            .ok_or_else(|| CredentialsError::unhandled("Credentials must be defined"))?;
        let access_key_id = credentials
            .access_key_id
            .ok_or_else(|| CredentialsError::unhandled("access_key_id must be defined"))?;
        let secret_access_key = credentials
            .secret_access_key
            .ok_or_else(|| CredentialsError::unhandled("secret_access_key must be defined"))?;
        let expiration = match credentials.expiration {
            Some(expiration) => Some(SystemTime::try_from(expiration).map_err(|_| {
                CredentialsError::unhandled("credential expiration time cannot be represented by a SystemTime")
            })?),
            None => None,
        };

        Ok(Credentials::new(
            access_key_id,
            secret_access_key,
            credentials.session_token,
            expiration,
            "AccessGrantsProvider",
        ))
    }
}

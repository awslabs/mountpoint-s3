//! A simple interface to retrieve information about the EC2 instance this client is running on by
//! querying the Instance Metadata Service (IMDS).

use std::env;

use once_cell::unsync::Lazy;
use thiserror::Error;

use crate::imds_crt_client::{IdentityDocument, ImdsCrtClient, ImdsQueryRequestError};

/// Information on the EC2 instance from the IMDS client. The client is queried lazily and only if
/// the `AWS_EC2_METADATA_DISABLED` environment variable is not set.
#[derive(Debug)]
pub struct InstanceInfo {
    document: Lazy<Result<IdentityDocument, InstanceInfoError>>,
}

impl InstanceInfo {
    /// Create a new instance. The IMDS client will only be queried when a methon on the instance is
    /// called, and only if the `AWS_EC2_METADATA_DISABLED` environment variable is not set.
    pub fn new() -> Self {
        Self {
            document: Lazy::new(|| {
                if !imds_disabled() {
                    match retrieve_instance_identity_document() {
                        Ok(identity_document) => {
                            tracing::debug!(?identity_document, "got instance info from IMDS");
                            Ok(identity_document)
                        }
                        Err(err) => {
                            tracing::warn!("EC2 instance info not retrieved: {err:?}");
                            Err(err)
                        }
                    }
                } else {
                    tracing::debug!("EC2 instance info not retrieved: IMDS was disabled");
                    Err(InstanceInfoError::ImdsDisabled)
                }
            }),
        }
    }

    /// The region for the current instance, if it can be retrieved using the IMDS client.
    pub fn region(&self) -> Result<&str, &InstanceInfoError> {
        self.document.as_ref().map(|d| d.region.as_str())
    }

    /// The instance type for the current instance, if it can be retrieved using the IMDS client.
    pub fn instance_type(&self) -> Result<&str, &InstanceInfoError> {
        self.document.as_ref().map(|d| d.instance_type.as_str())
    }
}

impl Default for InstanceInfo {
    fn default() -> Self {
        Self::new()
    }
}

fn retrieve_instance_identity_document() -> Result<IdentityDocument, InstanceInfoError> {
    let imds_crt_client = ImdsCrtClient::new().map_err(InstanceInfoError::ImdsClientFailed)?;

    let identity_document = futures::executor::block_on(imds_crt_client.get_identity_document())?;
    Ok(identity_document)
}

fn imds_disabled() -> bool {
    match env::var_os("AWS_EC2_METADATA_DISABLED") {
        Some(val) => val.to_ascii_lowercase() != "false",
        None => false,
    }
}

/// Errors returned by instance info queries
#[derive(Debug, Error)]
pub enum InstanceInfoError {
    /// IMDS is disabled
    #[error("IMDS is disabled")]
    ImdsDisabled,

    /// A query to IMDS failed
    #[error("IMDS query failed: {0}")]
    ImdsQueryFailed(#[from] ImdsQueryRequestError),

    /// The IMDS client couldn't be constructed
    #[error("could not construct IMDS client: {0}")]
    ImdsClientFailed(mountpoint_s3_crt::common::error::Error),
}

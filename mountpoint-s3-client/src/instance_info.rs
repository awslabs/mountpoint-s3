//! A simple interface to retrieve information about the EC2 instance this client is running on by
//! reading the DMI tables and querying the Instance Metadata Service (IMDS).

use std::cell::LazyCell;
use std::path::Path;
use std::{env, fs};

use thiserror::Error;

use crate::imds_crt_client::{IdentityDocument, ImdsCrtClient, ImdsQueryRequestError};

/// Directory where the Linux kernel exposes the decoded SMBIOS/DMI tables.
const DMI_ROOT: &str = "/sys/devices/virtual/dmi/id";

/// Information on the EC2 instance from the DMI tables and the IMDS client. Both are queried
/// lazily, and IMDS only if the `AWS_EC2_METADATA_DISABLED` environment variable is not set.
#[derive(Debug)]
pub struct InstanceInfo {
    document: LazyCell<Result<IdentityDocument, InstanceInfoError>>,
    dmi_instance_type: LazyCell<Option<String>>,
}

impl InstanceInfo {
    /// Create a new instance. The IMDS client will only be queried when a method on the instance is
    /// called, and only if the `AWS_EC2_METADATA_DISABLED` environment variable is not set.
    pub fn new() -> Self {
        Self {
            document: LazyCell::new(|| {
                if !imds_disabled() {
                    match retrieve_instance_identity_document() {
                        Ok(identity_document) => {
                            tracing::debug!(?identity_document, "got instance info from IMDS");
                            Ok(identity_document)
                        }
                        Err(err) => {
                            tracing::debug!("EC2 instance info not retrieved from IMDS: {err:?}");
                            Err(err)
                        }
                    }
                } else {
                    tracing::debug!("EC2 instance info not retrieved from IMDS: IMDS was disabled");
                    Err(InstanceInfoError::ImdsDisabled)
                }
            }),
            dmi_instance_type: LazyCell::new(|| match dmi_instance_type() {
                Some(instance_type) => {
                    tracing::debug!(instance_type, "got instance type from DMI");
                    Some(instance_type)
                }
                None => {
                    tracing::debug!("EC2 instance type not retrieved from DMI");
                    None
                }
            }),
        }
    }

    /// The region for the current instance, if it can be retrieved using the IMDS client.
    pub fn region(&self) -> Result<&str, &InstanceInfoError> {
        self.document.as_ref().map(|d| d.region.as_str())
    }

    /// The instance type for the current instance, if it can be read from the DMI tables or
    /// retrieved using the IMDS client.
    pub fn instance_type(&self) -> Result<&str, &InstanceInfoError> {
        match self.dmi_instance_type.as_deref() {
            Some(instance_type) => Ok(instance_type),
            // Fall back to IMDS, reporting its error if it is unavailable too.
            None => self.document.as_ref().map(|d| d.instance_type.as_str()),
        }
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
        Some(val) => !val.eq_ignore_ascii_case("false"),
        None => false,
    }
}

/// The instance type for the current instance, read from the SMBIOS/DMI tables the kernel exposes
/// in sysfs.
fn dmi_instance_type() -> Option<String> {
    let root = Path::new(DMI_ROOT);
    let vendor = fs::read_to_string(root.join("sys_vendor")).ok()?;
    let product_name = fs::read_to_string(root.join("product_name")).ok()?;
    parse_dmi(&vendor, &product_name).map(str::to_owned)
}

/// Extract the instance type from the DMI `sys_vendor` and `product_name` fields, which EC2 sets to
/// "Amazon EC2" and the instance type respectively.
fn parse_dmi<'a>(vendor: &str, product_name: &'a str) -> Option<&'a str> {
    if !vendor.trim().eq_ignore_ascii_case("Amazon EC2") {
        return None;
    }
    let product_name = product_name.trim();
    (!product_name.is_empty()).then_some(product_name)
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_instance_type_from_dmi_fields() {
        assert_eq!(parse_dmi("Amazon EC2\n", "m6a.4xlarge\n"), Some("m6a.4xlarge"));
        assert_eq!(parse_dmi("Other Vendor\n", "Some Product\n"), None);
    }

    /// The DMI tables and IMDS must agree on the instance type. Does nothing when either source is
    /// unavailable, for example when not running on an EC2 instance.
    #[test]
    fn dmi_and_imds_report_the_same_instance_type() {
        let Some(dmi_instance_type) = dmi_instance_type() else {
            return;
        };
        let Ok(identity_document) = retrieve_instance_identity_document() else {
            return;
        };
        assert_eq!(dmi_instance_type, identity_document.instance_type);
    }

    #[test]
    fn instance_type_prefers_dmi_and_does_not_query_imds() {
        let info = InstanceInfo {
            document: LazyCell::new(|| panic!("IMDS should not be queried")),
            dmi_instance_type: LazyCell::new(|| Some("m6a.4xlarge".to_owned())),
        };
        assert_eq!(info.instance_type().unwrap(), "m6a.4xlarge");
    }

    #[test]
    fn instance_type_falls_back_to_imds_when_dmi_is_unavailable() {
        let info = InstanceInfo {
            document: LazyCell::new(|| {
                Ok(IdentityDocument {
                    instance_type: "m5.large".to_owned(),
                    region: "us-east-1".to_owned(),
                })
            }),
            dmi_instance_type: LazyCell::new(|| None),
        };
        assert_eq!(info.instance_type().unwrap(), "m5.large");
    }

    #[test]
    fn instance_type_reports_imds_error_when_dmi_is_unavailable() {
        let info = InstanceInfo {
            document: LazyCell::new(|| Err(InstanceInfoError::ImdsDisabled)),
            dmi_instance_type: LazyCell::new(|| None),
        };
        assert!(matches!(info.instance_type(), Err(InstanceInfoError::ImdsDisabled)));
    }
}

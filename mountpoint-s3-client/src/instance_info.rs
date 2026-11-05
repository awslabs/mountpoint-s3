//! A simple interface to retrieve information about the EC2 instance this client is running on by
//! reading the DMI tables and querying the Instance Metadata Service (IMDS).

use std::cell::LazyCell;
use std::path::{Path, PathBuf};
use std::{env, fs, io};

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
            dmi_instance_type: LazyCell::new(|| match dmi_instance_type(Path::new(DMI_ROOT)) {
                Ok(instance_type) => {
                    tracing::debug!(instance_type, "got instance type from DMI");
                    Some(instance_type)
                }
                Err(err) => {
                    tracing::debug!("EC2 instance type not retrieved from DMI: {err}");
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
            // Fall back to IMDS, reporting its error if it is unavailable too. The reason the DMI
            // tables did not provide the instance type is logged when they are read.
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
/// under `root`. EC2 sets the `sys_vendor` field to "Amazon EC2" and `product_name` to the instance
/// type. A `product_name` that is not shaped like an instance type is rejected, so that firmware
/// reporting something else is not mistaken for an instance type.
fn dmi_instance_type(root: &Path) -> Result<String, DmiError> {
    let read = |name: &str| {
        let path = root.join(name);
        fs::read_to_string(&path).map_err(|source| DmiError::ReadFailed { path, source })
    };

    let vendor = read("sys_vendor")?;
    let vendor = vendor.trim();
    if !vendor.eq_ignore_ascii_case("Amazon EC2") {
        return Err(DmiError::NotEc2(vendor.to_owned()));
    }

    let product_name = read("product_name")?;
    let product_name = product_name.trim();
    if product_name.is_empty() {
        return Err(DmiError::EmptyProductName);
    }
    if !is_instance_type_name(product_name) {
        return Err(DmiError::NotAnInstanceType(product_name.to_owned()));
    }
    Ok(product_name.to_owned())
}

/// Whether `name` has the shape of an EC2 instance type: a family and a size separated by a dot,
/// both made of lowercase ASCII letters, digits and hyphens, with a family that starts with a letter
/// (e.g. `m6a.4xlarge`, `c7i-flex.large`, `c7i.metal-24xl`).
fn is_instance_type_name(name: &str) -> bool {
    let is_name_char = |c: char| c.is_ascii_lowercase() || c.is_ascii_digit() || c == '-';
    let Some((family, size)) = name.split_once('.') else {
        return false;
    };
    family.starts_with(|c: char| c.is_ascii_lowercase())
        && family.chars().all(is_name_char)
        && !size.is_empty()
        && size.chars().all(is_name_char)
}

/// Reasons the instance type could not be read from the DMI tables
#[derive(Debug, Error)]
enum DmiError {
    /// A DMI file is missing or could not be read
    #[error("could not read {path:?}: {source}")]
    ReadFailed { path: PathBuf, source: io::Error },

    /// The vendor is not EC2, so the product name is not an instance type
    #[error("sys_vendor is {0:?}, not \"Amazon EC2\"")]
    NotEc2(String),

    /// The vendor is EC2 but the product name is empty
    #[error("product_name is empty")]
    EmptyProductName,

    /// The vendor is EC2 but the product name does not have the shape of an instance type
    #[error("product_name {0:?} is not an instance type")]
    NotAnInstanceType(String),
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

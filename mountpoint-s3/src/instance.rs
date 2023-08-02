use std::env;

use anyhow::{anyhow, Context};
use mountpoint_s3_client::{IdentityDocument, ImdsCrtClient};
use once_cell::unsync::Lazy;

/// Information on the EC2 instance from the Imds client.
/// The client is queried lazily and only if AWS_EC2_METADATA_DISABLED
/// is not set.
#[derive(Debug, Default)]
pub struct InstanceInfo {
    document: Lazy<Option<IdentityDocument>>,
}

impl InstanceInfo {
    /// Create a new instance. The Imds client will only be queried
    /// when a methon on the instance is called, and only if
    /// AWS_EC2_METADATA_DISABLED is not set.
    pub fn new() -> Self {
        Self {
            document: Lazy::new(|| {
                if !imds_disabled() {
                    match retrieve_instance_identity_document() {
                        Ok(identity_document) => {
                            tracing::debug!(?identity_document, "got instance info from IMDS");
                            Some(identity_document)
                        }
                        Err(err) => {
                            tracing::warn!("EC2 instance info not retrieved: {err:?}");
                            None
                        }
                    }
                } else {
                    tracing::debug!("EC2 instance info not retrieved: IMDS was disabled");
                    None
                }
            }),
        }
    }

    /// The region for the current instance, if it can be
    /// retrieved using the Imds client.
    pub fn region(&self) -> Option<&str> {
        self.document.as_ref().map(|d| d.region.as_str())
    }

    /// The network throughput for the current instance. Returns an
    /// error if the instance type either cannot be retrieved using the Imds
    /// client or does not have a known network throughput.
    pub fn network_throughput(&self) -> anyhow::Result<f64> {
        let instance_type = self
            .document
            .as_ref()
            .map(|d| &d.instance_type)
            .context("failed to retrieve instance type")?;
        let throughput = get_maximum_network_throughput(instance_type).context("failed to get network throughput")?;
        Ok(throughput)
    }
}

fn retrieve_instance_identity_document() -> anyhow::Result<IdentityDocument> {
    let imds_crt_client = ImdsCrtClient::new().context("failed to create IMDS client")?;

    let identity_document =
        futures::executor::block_on(imds_crt_client.get_identity_document()).context("IMDS query failed")?;
    Ok(identity_document)
}

fn imds_disabled() -> bool {
    match env::var_os("AWS_EC2_METADATA_DISABLED") {
        Some(val) => val.to_ascii_lowercase() != "false",
        None => false,
    }
}

fn get_maximum_network_throughput(ec2_instance_type: &str) -> anyhow::Result<f64> {
    const INSTANCE_THROUGHPUT: &str = "instance_throughput";
    let file = include_str!("../scripts/network_performance.json");

    let data: serde_json::Value = serde_json::from_str(file).context("failed to parse network_performance.json")?;
    let instance_throughput = data
        .get(INSTANCE_THROUGHPUT)
        .context("instance throughput missing from json")?;
    instance_throughput
        .get(ec2_instance_type)
        .and_then(|t| t.as_f64())
        .ok_or_else(|| anyhow!("no throughput configuration for EC2 instance type {ec2_instance_type}"))
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case("c4.large", None)] // We let "Moderate" fall through to default
    #[test_case("c5.large", Some(10.0))]
    #[test_case("c5n.large", Some(25.0))]
    #[test_case("c5n.18xlarge", Some(100.0))]
    #[test_case("c6i.large", Some(12.5))]
    #[test_case("p4d.24xlarge", Some(400.0))] // 4x 100 Gigabit
    #[test_case("trn1.32xlarge", Some(800.0))] // 8x 100 Gigabit
    #[test_case("dl1.24xlarge", Some(400.0))] // 4x 100 Gigabit
    fn test_get_maximum_network_throughput(instance_type: &str, throughput: Option<f64>) {
        let actual = get_maximum_network_throughput(instance_type).ok();
        assert_eq!(actual, throughput);
    }
}

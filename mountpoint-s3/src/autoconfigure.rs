use anyhow::{anyhow, Context};

use mountpoint_s3_client::instance_info::InstanceInfo;

/// Determine the maximum network throughput for the current instance using IMDS. Returns an error
/// if the instance type either cannot be retrieved using the IMDS client or does not have a known
/// network throughput.
pub fn network_throughput(instance_info: &InstanceInfo) -> anyhow::Result<f64> {
    let instance_type = instance_info
        .instance_type()
        .map_err(|e| anyhow!("failed to get instance type: {e}"))?;
    let throughput = get_maximum_network_throughput(instance_type).context("failed to get network throughput")?;
    Ok(throughput)
}

fn get_maximum_network_throughput(ec2_instance_type: &str) -> anyhow::Result<f64> {
    const INSTANCE_THROUGHPUT: &str = "instance_throughput";
    const NETWORK_PERFORMANCE_JSON: &str = include_str!("../scripts/network_performance.json");

    let data: serde_json::Value =
        serde_json::from_str(NETWORK_PERFORMANCE_JSON).context("failed to parse network_performance.json")?;
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

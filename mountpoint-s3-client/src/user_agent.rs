//! Utilities to construct a HTTP User-agent header in the AWS SDK format

use platform_info::{PlatformInfo, PlatformInfoAPI, UNameAPI};

use crate::build_info;
use crate::instance_info::InstanceInfo;

/// A builder for AWS SDK-style user agent headers
#[derive(Debug, Clone)]
pub struct UserAgent {
    fields: Vec<String>,
    prefix: Option<String>,
}

impl UserAgent {
    /// Create a new User-agent builder
    pub fn new(prefix: Option<String>) -> Self {
        Self { fields: vec![], prefix }
    }

    /// Create a new User-agent builder with the default platform metadata fields
    pub fn new_with_instance_info(prefix: Option<String>, instance_info: &InstanceInfo) -> Self {
        let user_agent_info = UserAgentInfo::new(instance_info);
        Self::new_with_user_agent_info(prefix, user_agent_info)
    }

    fn new_with_user_agent_info(prefix: Option<String>, user_agent_info: UserAgentInfo) -> Self {
        let mut fields = vec![];

        if let Some(sysname) = user_agent_info.sysname {
            if let Some(release) = user_agent_info.release {
                fields.push(format!(
                    "os/{}#{}",
                    sanitize_string(canonicalize_sysname(sysname)),
                    sanitize_string(release)
                ));
            } else {
                fields.push(format!("os/{}", sanitize_string(sysname)));
            }
        }

        if let Some(machine) = user_agent_info.machine {
            fields.push(format!("md/arch#{}", sanitize_string(machine)));
        }

        if let Some(instance_type) = user_agent_info.instance_type {
            fields.push(format!("md/instance#{}", sanitize_string(instance_type)));
        }

        Self { fields, prefix }
    }

    /// Add a key-value metadata field to the header
    pub fn key_value(&mut self, key: &str, value: &str) -> &mut Self {
        self.fields
            .push(format!("md/{}#{}", sanitize_string(key), sanitize_string(value)));
        self
    }

    /// Add a value-only metadata field to the header
    pub fn value(&mut self, value: &str) -> &mut Self {
        self.fields.push(format!("md/{}", sanitize_string(value)));
        self
    }

    /// Construct the final User-agent header string
    pub fn build(self) -> String {
        let mut fields = Vec::with_capacity(self.fields.len() + 2);
        if let Some(prefix) = self.prefix {
            fields.push(prefix);
        }
        fields.push(format!("mountpoint-s3-client/{}", build_info::FULL_VERSION));
        fields.extend(self.fields);
        fields.join(" ")
    }
}

fn sanitize_string(s: impl AsRef<str>) -> String {
    const VALID_CHARS: &[char] = &['!', '$', '%', '&', '\'', '*', '+', '-', '.', '^', '_', '`', '|', '~'];
    s.as_ref()
        .replace(|c: char| !c.is_alphanumeric() && !VALID_CHARS.contains(&c), "-")
}

fn canonicalize_sysname(sysname: impl AsRef<str>) -> &'static str {
    match sysname.as_ref() {
        "Linux" => "linux",
        "Darwin" => "macos",
        // https://github.com/uutils/platform-info/blob/755cdc7d597469962a08a3f88f838c7cc8d2c0cb/src/platform/windows.rs#L523
        "Windows_NT" => "windows",
        _ => "other",
    }
}

/// To make this code testable we factor out the platform queries so we can mock them in tests
struct UserAgentInfo {
    sysname: Option<String>,
    release: Option<String>,
    machine: Option<String>,
    instance_type: Option<String>,
}

impl UserAgentInfo {
    fn new(instance_info: &InstanceInfo) -> Self {
        let platform_info = PlatformInfo::new().ok();

        Self {
            sysname: platform_info
                .as_ref()
                .map(|p| p.sysname().to_string_lossy().into_owned()),
            release: platform_info
                .as_ref()
                .map(|p| p.release().to_string_lossy().into_owned()),
            machine: platform_info
                .as_ref()
                .map(|p| p.machine().to_string_lossy().into_owned()),
            instance_type: instance_info.instance_type().ok().map(|s| s.to_string()),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_platform_fields() {
        // Linux ip-172-31-29-144.us-west-2.compute.internal 6.1.61-85.141.amzn2023.aarch64 #1 SMP Wed Nov  8 00:38:50 UTC 2023 aarch64 aarch64 aarch64 GNU/Linux
        let user_agent_info = UserAgentInfo {
            sysname: Some("Linux".to_string()),
            release: Some("6.1.61-85.141.amzn2023.aarch64".to_string()),
            machine: Some("aarch64".to_string()),
            instance_type: None,
        };
        let user_agent = UserAgent::new_with_user_agent_info(None, user_agent_info).build();
        assert!(user_agent.contains("os/linux#6.1.61-85.141.amzn2023.aarch64 md/arch#aarch64"));
        assert!(user_agent.starts_with("mountpoint-s3-client/"));

        let user_agent_info = UserAgentInfo {
            sysname: Some("Linux".to_string()),
            release: Some("6.1.61-85.141.amzn2023.aarch64".to_string()),
            machine: Some("aarch64".to_string()),
            instance_type: Some("t4g.large".to_string()),
        };
        let user_agent = UserAgent::new_with_user_agent_info(Some("prefix".to_string()), user_agent_info).build();
        assert!(user_agent.contains("os/linux#6.1.61-85.141.amzn2023.aarch64 md/arch#aarch64 md/instance#t4g.large"));
        assert!(user_agent.starts_with("prefix mountpoint-s3-client/"));

        // Darwin abcdefg.amazon.com 23.1.0 Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:24 PDT 2023; root:xnu-10002.41.9~6/RELEASE_ARM64_T6000 arm64
        let user_agent_info = UserAgentInfo {
            sysname: Some("Darwin".to_string()),
            release: Some("23.1.0".to_string()),
            machine: Some("arm64".to_string()),
            instance_type: None,
        };
        let user_agent = UserAgent::new_with_user_agent_info(None, user_agent_info).build();
        assert!(user_agent.contains("os/macos#23.1.0 md/arch#arm64"));
        assert!(user_agent.starts_with("mountpoint-s3-client/"));
    }

    #[test]
    fn test_sanitize() {
        assert_eq!(
            sanitize_string("Java_HotSpot_(TM)_64-Bit_Server_VM"),
            "Java_HotSpot_-TM-_64-Bit_Server_VM"
        );
    }
}

use lazy_static::lazy_static;
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::uri::Uri;
use mountpoint_s3_crt::s3::endpoint_resolver::{RequestContext, RuleEngine};
use regex::Regex;
use std::ffi::OsStr;
use std::os::unix::prelude::OsStrExt;
use thiserror::Error;

lazy_static! {
    /// Regions in the "aws" partition (from the SDK's `partitions.json`)
    static ref AWS_PARTITION_REGEX: Regex = Regex::new(r"^(us|eu|ap|sa|ca|me|af)\-\w+\-\d+$").unwrap();
    /// Bucket names that are acceptable as virtual host names for DNS
    static ref VALID_DNS_REGEX: Regex = Regex::new(r"[a-z0-9][a-z0-9\-]*[a-z0-9]").unwrap();
}

#[derive(Debug, Clone)]
#[non_exhaustive]
pub struct Endpoint {
    uri: Uri,
    addressing_style: AddressingStyle,
}

impl Endpoint {
    /// Create a new endpoint for the given S3 region. This method automatically resolves the right
    /// endpoint URI to target.
    pub fn from_region(
        region: &str,
        addressing_style: AddressingStyle,
        endpoint_rule_engine: &RuleEngine,
        allocator: &mut Allocator,
    ) -> Result<Self, EndpointError> {
        let mut endpoint_request_context = RequestContext::new(allocator).unwrap();
        endpoint_request_context
            .add_string(allocator, OsStr::new("Region"), OsStr::new(region))
            .unwrap();
        let endpoint_resolved = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .map_err(|_| EndpointError::UnsupportedRegion(region.to_owned()))?;

        let endpoint_uri = endpoint_resolved
            .get_url(allocator)
            .map_err(|e| EndpointError::InvalidUri(InvalidUriError::CouldNotParse(e)))?;
        Ok(Self {
            uri: endpoint_uri,
            addressing_style,
        })
    }

    /// Create a new endpoint with a manually specified URI.
    pub fn from_uri(uri: &str, addressing_style: AddressingStyle) -> Result<Self, EndpointError> {
        // Force path-style addressing in automatic mode if a URI was specified manually
        let addressing_style = if addressing_style == AddressingStyle::Automatic {
            AddressingStyle::Path
        } else {
            addressing_style
        };
        Self::from_uri_inner(uri, addressing_style)
    }

    fn from_uri_inner(uri: &str, addressing_style: AddressingStyle) -> Result<Self, EndpointError> {
        let parsed_uri = Uri::new_from_str(&mut Allocator::default(), OsStr::from_bytes(uri.as_bytes()))
            .map_err(InvalidUriError::CouldNotParse)?;
        tracing::debug!(endpoint=?parsed_uri.as_os_str(), ?addressing_style, "selected endpoint");
        Ok(Self {
            uri: parsed_uri,
            addressing_style,
        })
    }

    /// Given a bucket name, determine whether to do path-based or virtual-host-based addressing,
    /// and return the host URI to access and the prefix to apply to paths
    pub(crate) fn for_bucket(&self, bucket: &str) -> Result<(Uri, String), EndpointError> {
        match self.addressing_style {
            AddressingStyle::Automatic => {
                if is_valid_dns_name(bucket) {
                    let uri = insert_virtual_host(bucket, &self.uri)?;
                    Ok((uri, String::new()))
                } else {
                    Ok((self.uri.clone(), format!("/{bucket}")))
                }
            }
            AddressingStyle::Virtual => {
                let uri = insert_virtual_host(bucket, &self.uri)?;
                Ok((uri, String::new()))
            }
            AddressingStyle::Path => Ok((self.uri.clone(), format!("/{bucket}"))),
        }
    }
}

fn is_valid_dns_name(bucket: &str) -> bool {
    // `.` is valid in DNS and in bucket names, but will break SSL certificates, so reject buckets
    // that include it.
    !bucket.contains('.')
        && VALID_DNS_REGEX
            .find(bucket)
            .map(|m| m.end() == bucket.len())
            .unwrap_or(false)
}

fn insert_virtual_host(bucket: &str, uri: &Uri) -> Result<Uri, InvalidUriError> {
    let empty_path = uri.path().is_empty() || uri.path() == OsStr::from_bytes("/".as_bytes());
    if !empty_path || !uri.query_string().is_empty() {
        return Err(InvalidUriError::CannotContainPathOrQueryString);
    }

    let scheme = uri.scheme().to_str().ok_or(InvalidUriError::InvalidUtf8)?;
    let authority = uri.authority().to_str().ok_or(InvalidUriError::InvalidUtf8)?;
    let new_uri = format!("{scheme}://{bucket}.{authority}");
    Ok(Uri::new_from_str(
        &mut Allocator::default(),
        OsStr::from_bytes(new_uri.as_bytes()),
    )?)
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum AddressingStyle {
    /// Use virtual addressing if possible, but fall back to path addressing if necessary
    #[default]
    Automatic,
    /// Always use virtual addressing
    Virtual,
    /// Always use path addressing
    Path,
}

#[derive(Debug, Error)]
pub enum EndpointError {
    #[error("invalid URI")]
    InvalidUri(#[from] InvalidUriError),
    #[error("endpoint URI cannot include path or query string")]
    InvalidEndpoint,
    #[error("region {0} is not yet supported")]
    UnsupportedRegion(String),
}

#[derive(Debug, Error)]
pub enum InvalidUriError {
    #[error("URI could not be parsed")]
    CouldNotParse(#[from] mountpoint_s3_crt::common::error::Error),
    #[error("URI cannot include path or query string")]
    CannotContainPathOrQueryString,
    #[error("URI is not valid UTF-8")]
    InvalidUtf8,
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn valid_dns_names() {
        assert!(is_valid_dns_name("test-bucket"));
        assert!(!is_valid_dns_name("test.bucket"));
        assert!(!is_valid_dns_name("test-bucket-"));
        assert!(is_valid_dns_name("test-1bucket"));
        assert!(is_valid_dns_name("1test-bucket"));
    }
}

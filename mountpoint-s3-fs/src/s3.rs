//! Personalities of different S3 implementations. We use this to auto-configure some sensible
//! defaults that differ between implementations.

use mountpoint_s3_client::config::{EndpointConfig, SigningAlgorithm};

pub mod config;
pub mod path;
pub mod prefix;

pub use path::{Bucket, S3Path, S3PathError};
pub use prefix::{Prefix, PrefixError};

/// The type of S3 we're talking to.
///
/// This enum intentionally doesn't implement PartialEq/Eq. You shouldn't test it directly. Instead,
/// use its methods like `is_list_ordered` to check the actual behavior you're looking for.
#[derive(Debug, Clone, Copy, Default)]
pub enum S3Personality {
    #[default]
    Standard,
    ExpressOneZone,
    Outposts,
}

impl S3Personality {
    pub fn infer_from_bucket(bucket: &str, endpoint_config: &EndpointConfig) -> Self {
        let Ok(resolved) = endpoint_config.resolve_for_bucket(bucket) else {
            return S3Personality::Standard;
        };
        let Ok(auth_scheme) = resolved.auth_scheme() else {
            return S3Personality::Standard;
        };
        if auth_scheme.scheme_name() == SigningAlgorithm::SigV4Express {
            S3Personality::ExpressOneZone
        } else if auth_scheme.signing_name() == "s3-outposts" {
            S3Personality::Outposts
        } else {
            S3Personality::Standard
        }
    }

    pub fn is_list_ordered(&self) -> bool {
        match self {
            S3Personality::Standard => true,
            S3Personality::ExpressOneZone => false,
            S3Personality::Outposts => true,
        }
    }

    pub fn supports_additional_checksums(&self) -> bool {
        match self {
            S3Personality::Standard => true,
            S3Personality::ExpressOneZone => true,
            S3Personality::Outposts => false,
        }
    }

    pub fn supports_rename_object(&self) -> bool {
        match self {
            S3Personality::Standard => false,
            S3Personality::ExpressOneZone => true,
            S3Personality::Outposts => false,
        }
    }
}

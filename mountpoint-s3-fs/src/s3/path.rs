use std::{fmt::Display, ops::Deref};

use regex::Regex;
use thiserror::Error;

use super::{Prefix, PrefixError};

#[derive(Error, Debug, PartialEq)]
pub enum S3PathError {
    #[error("expected an S3 URI")]
    ExpectedS3URI,
    #[error("the bucket must have a valid name (only letters, numbers, . and -) or a valid ARN")]
    InvalidBucketName,
    #[error("the bucket must have a valid name (only letters, numbers, . and -). ARNs are not supported in s3:// URIs")]
    InvalidBucketNameS3URI,
    #[error("bucket names must be 3-255 characters long")]
    InvalidBucketLength,
    #[error("invalid bucket prefix: {0:}")]
    PrefixError(#[from] PrefixError),
}

#[derive(Debug, Clone, PartialEq)]
pub struct Bucket(String);

impl Bucket {
    pub fn new(bucket_name: impl Into<String>) -> Result<Self, S3PathError> {
        let bucket_name = bucket_name.into();
        validate_bucket_length(&bucket_name)?;
        if matches_bucket_regex(&bucket_name) || bucket_name.starts_with("arn:") {
            Ok(Self(bucket_name))
        } else {
            Err(S3PathError::InvalidBucketName)
        }
    }

    fn is_arn(&self) -> bool {
        self.0.starts_with("arn:")
    }

    pub fn as_str(&self) -> &str {
        &self.0
    }
}

impl Deref for Bucket {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl AsRef<str> for Bucket {
    fn as_ref(&self) -> &str {
        self
    }
}

impl Display for Bucket {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl From<Bucket> for String {
    fn from(bucket_name: Bucket) -> Self {
        bucket_name.0
    }
}

impl TryFrom<String> for Bucket {
    type Error = S3PathError;

    fn try_from(value: String) -> Result<Self, Self::Error> {
        Self::new(value)
    }
}

/// A bucket & prefix combination.
#[derive(Debug, Clone)]
pub struct S3Path {
    /// Name of bucket
    pub bucket: Bucket,

    /// Prefix inside the bucket
    pub prefix: Prefix,
}

impl S3Path {
    pub fn new(bucket: Bucket, prefix: Prefix) -> Self {
        Self { bucket, prefix }
    }

    pub fn parse_s3_uri(s3_uri: &str) -> Result<S3Path, S3PathError> {
        let bucket_prefix = s3_uri.strip_prefix("s3://").ok_or(S3PathError::ExpectedS3URI)?;
        let (bucket, prefix) = {
            if let Some((bucket, prefix_str)) = bucket_prefix.split_once("/") {
                (bucket, prefix_str)
            } else {
                (bucket_prefix, "")
            }
        };
        let bucket = Bucket::new(bucket.to_owned())?;
        if bucket.is_arn() {
            return Err(S3PathError::InvalidBucketNameS3URI);
        }
        Ok(S3Path {
            bucket,
            prefix: Prefix::new(prefix)?,
        })
    }

    pub fn bucket_description(&self) -> String {
        if self.prefix.as_str().is_empty() {
            format!("bucket {}", self.bucket)
        } else {
            format!("prefix {} of bucket {}", self.prefix, self.bucket)
        }
    }
}

fn validate_bucket_length(bucket_name: &str) -> Result<(), S3PathError> {
    if bucket_name.len() < 3 || bucket_name.len() > 255 {
        Err(S3PathError::InvalidBucketLength)
    } else {
        Ok(())
    }
}

fn matches_bucket_regex(bucket_name: &str) -> bool {
    // Actual bucket names must start/end with a letter, but bucket aliases can end with numbers
    // (-s3), so let's just naively check for invalid characters.
    let bucket_regex = Regex::new(r"^[0-9a-zA-Z\-\._]+$").unwrap();
    bucket_regex.is_match(bucket_name)
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const VALID: bool = true;
    const INVALID: bool = false;

    #[test_case("test-bucket", VALID; "simple bucket")]
    #[test_case("test-123.buc_ket", VALID; "bucket name with .")]
    #[test_case("my-access-point-hrzrlukc5m36ft7okagglf3gmwluquse1b-s3alias", VALID; "access point alias")]
    #[test_case("my-object-lambda-acc-1a4n8yjrb3kda96f67zwrwiiuse1a--ol-s3", VALID; "object lambda access point alias")]
    #[test_case("s3://test-bucket", INVALID; "s3 uris not allowed for validate_bucket_name")]
    #[test_case("~/mnt", INVALID; "directory name in place of bucket")]
    #[test_case("arn:aws:s3::00000000:accesspoint/s3-bucket-test.mrap", VALID; "multiregion accesspoint ARN")]
    #[test_case("arn:aws:s3:::amzn-s3-demo-bucket", VALID; "bucket ARN(maybe rejected by endpoint resolver with error message)")]
    #[test_case("arn:aws-cn:s3:cn-north-2:555555555555:accesspoint/china-region-ap", VALID; "standard accesspoint ARN in China")]
    #[test_case("arn:aws-us-gov:s3-object-lambda:us-gov-west-1:555555555555:accesspoint/example-olap", VALID; "S3 object lambda accesspoint in US Gov")]
    #[test_case("arn:aws:s3-outposts:us-east-1:555555555555:outpost/outpost-id/accesspoint/accesspoint-name", VALID; "S3 outpost accesspoint ARN")]
    fn validate_from_bucket(bucket_name: &str, valid: bool) {
        let parsed = Bucket::new(bucket_name.to_owned()).map(|bucket_name| S3Path::new(bucket_name, Prefix::empty()));
        if valid {
            let s3_path = parsed.expect("valid bucket name");
            assert_eq!(s3_path.bucket.as_str(), bucket_name);
            assert_eq!(s3_path.prefix.as_str(), "");
        } else {
            parsed.expect_err("invalid bucket name");
        }
    }

    #[test_case("s3://test-bucket", "", VALID; "s3 uris allowed")]
    #[test_case("s3://test-bucket/", "", VALID; "s3 uris allowed with trailing /")]
    #[test_case("s3://test-bucket/prefix/", "prefix/", VALID; "s3 uris allowed with prefixes ending in /")]
    #[test_case("s3://a", "", INVALID; "too short")]
    #[test_case("s3://[][][][]", "", INVALID; "invalid bucket name")]
    #[test_case("test-bucket", "", INVALID; "only s3 uris allowed")]
    #[test_case("s3://test-bucket/foo", "", INVALID; "prefixes must end in /")]
    #[test_case("s3://arn:aws:s3:::amzn-s3-demo-bucket", "", INVALID; "ARNs not allowed in S3 URIs")]
    fn validate_from_s3_uri(bucket_name: &str, prefix: &str, valid: bool) {
        let parsed = S3Path::parse_s3_uri(bucket_name);
        if valid {
            let expected = bucket_name.strip_prefix("s3://").unwrap();
            let expected_bucket = expected
                .split_once("/")
                .map(|(bucket, _prefix)| bucket)
                .unwrap_or(expected);
            let s3_uri = parsed.expect("valid bucket name");
            assert_eq!(s3_uri.bucket.as_str(), expected_bucket);
            assert_eq!(s3_uri.prefix.as_str(), prefix)
        } else {
            parsed.expect_err("invalid bucket name");
        }
    }
}

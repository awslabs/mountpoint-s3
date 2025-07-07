//! An Amazon S3 client built on top of the AWS Common Runtime (AWS CRT).
//!
//! This crate provides a high-performance implementation of an Amazon S3 client that uses the [AWS
//! Common Runtime (CRT)][awscrt]. The CRT is a software library for interacting with AWS services,
//! offering components like IO, HTTP, and encryption. The CRT is purpose-built for high performance
//! and low resource usage to make the most efficient use of your compute resources. For Amazon S3,
//! the CRT includes a client that implements best practice performance design patterns, including
//! timeouts, retries, and automatic request parallelization for high throughput.
//!
//! **This crate is not intended for general-purpose use and we consider its interface to be
//! unstable.** Customers looking for a general-purpose Amazon S3 client in Rust should use the
//! official [AWS SDK for Rust](https://aws.amazon.com/sdk-for-rust/).
//!
//! # Example
//!
//! To construct a new S3 client and download an object from a bucket in the `us-east-1` region:
//! ```no_run
//! # async fn test() {
//! use futures::{TryFutureExt, TryStreamExt};
//! use mountpoint_s3_client::types::GetObjectParams;
//! use mountpoint_s3_client::{S3CrtClient, ObjectClient};
//!
//! let client = S3CrtClient::new(Default::default()).expect("client construction failed");
//!
//! let response = client.get_object("my-bucket", "my-key", &GetObjectParams::new()).await.expect("get_object failed");
//! let body = response.map_ok(|part| part.data.to_vec()).try_concat().await.expect("body streaming failed");
//! # }
//! ```
//!
//! To further configure the client, use the [`S3ClientConfig`](config::S3ClientConfig) builder:
//! ```
//! use mountpoint_s3_client::S3CrtClient;
//! use mountpoint_s3_client::config::{S3ClientAuthConfig, S3ClientConfig, EndpointConfig};
//!
//! let config = S3ClientConfig::new()
//!                 .endpoint_config(EndpointConfig::new("us-west-2"))
//!                 .auth_config(S3ClientAuthConfig::NoSigning);
//! let client = S3CrtClient::new(config).expect("client construction failed");
//! ```
//!
//! [awscrt]: https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html

#![deny(clippy::undocumented_unsafe_blocks)]
// Make async trait docs not-ugly on docs.rs (https://github.com/dtolnay/async-trait/issues/213)
#![cfg_attr(docsrs, feature(async_fn_in_trait))]

mod build_info;
pub mod checksums;
mod endpoint_config;
#[doc(hidden)]
pub mod failure_client;
pub mod imds_crt_client;
pub mod instance_info;
#[doc(hidden)]
pub mod mock_client;
mod object_client;
mod s3_crt_client;
#[doc(hidden)]
pub mod user_agent;

pub mod error_metadata;

pub use object_client::{ObjectClient, PutObjectRequest};

pub use s3_crt_client::{
    OnTelemetry, S3CrtClient, S3RequestError, get_object::S3GetObjectResponse, put_object::S3PutObjectRequest,
};

/// Configuration for the S3 client
pub mod config {
    pub use super::endpoint_config::{AddressingStyle, EndpointConfig, SigningAlgorithm, Uri};
    pub use super::s3_crt_client::{
        CredentialsProvider, CredentialsProviderStaticOptions, EventLoopGroup, S3ClientAuthConfig, S3ClientConfig,
    };

    pub use mountpoint_s3_crt::common::allocator::Allocator;
    pub use mountpoint_s3_crt::common::rust_log_adapter::{AWSCRT_LOG_TARGET, RustLogAdapter};

    #[doc(hidden)]
    pub use mountpoint_s3_crt::io::io_library_init;
    #[doc(hidden)]
    pub use mountpoint_s3_crt::s3::s3_library_init;

    pub use mountpoint_s3_crt::s3::pool::{MemoryPool, MemoryPoolFactory, MemoryPoolFactoryOptions};
}

/// Types used by all object clients
pub mod types {
    pub use super::object_client::{
        Checksum, ChecksumAlgorithm, ChecksumMode, ClientBackpressureHandle, CopyObjectParams, CopyObjectResult,
        DeleteObjectResult, ETag, GetBodyPart, GetObjectAttributesParts, GetObjectAttributesResult, GetObjectParams,
        GetObjectResponse, HeadObjectParams, HeadObjectResult, ListObjectsResult, ObjectAttribute, ObjectClientResult,
        ObjectInfo, ObjectPart, PutObjectParams, PutObjectResult, PutObjectSingleParams, PutObjectTrailingChecksums,
        RenameObjectParams, RenameObjectResult, RenamePreconditionTypes, RestoreStatus, UploadChecksum, UploadReview,
        UploadReviewPart,
    };
}

/// Errors returned by all object clients.
///
/// Object client methods return an error of type
/// [`ObjectClientError`](object_client::ObjectClientError), which distinguishes between service and
/// client errors. See its documentation for more details.
pub mod error {
    pub use super::object_client::{
        CopyObjectError, DeleteObjectError, GetObjectAttributesError, GetObjectError, HeadObjectError,
        ListObjectsError, ObjectClientError, PutObjectError, RenameObjectError,
    };
    #[doc(hidden)]
    pub use super::s3_crt_client::CrtError;
    #[doc(hidden)]
    pub use super::s3_crt_client::HeadBucketError;
}

#[cfg(test)]
mod tests {
    use crate::s3_crt_client::S3CrtClient;

    #[test]
    fn smoke() {
        let _client = S3CrtClient::new(Default::default()).unwrap();
    }
}

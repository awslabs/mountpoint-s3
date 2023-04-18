//! Configuration for signing requests to AWS APIs

use crate::auth::credentials::CredentialsProvider;
use mountpoint_s3_crt_sys::aws_signing_config_aws;
use std::ffi::OsString;
use std::fmt::Debug;
use std::marker::PhantomPinned;
use std::pin::Pin;
use std::sync::Arc;

pub(crate) struct SigningConfigInner {
    /// The raw `aws_signing_config` for this config
    pub(crate) inner: aws_signing_config_aws,

    /// An owned copy of the region string, since the `aws_signing_config_aws` holds a pointer to it.
    pub(crate) region: OsString,

    /// An owned CredentialProvider, since the holds `aws_signing_config_aws` a pointer to it inner.
    pub(crate) credentials_provider: CredentialsProvider,

    /// This forces the struct to be !Unpin, because the signing config can contain pointers to itself
    pub(crate) _pinned: PhantomPinned,
}

impl Debug for SigningConfigInner {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("SigningConfigInner")
            .field("region", &self.region)
            .finish()
    }
}

/// Wrap the SigningConfigInner struct into a Pin<Box<_>>, so that it cannot be moved. Then wrap
/// in an Arc so that we can make copies. If there were a way to convert Pin<Box<_>> into Pin<Arc<_>>
/// then we could avoid needing both.
#[derive(Debug, Clone)]
pub struct SigningConfig(pub(crate) Arc<Pin<Box<SigningConfigInner>>>);

impl SigningConfig {
    /// Get out the inner pointer to the signing config
    pub(crate) fn to_inner_ptr(&self) -> *const aws_signing_config_aws {
        &Pin::as_ref(&self.0).get_ref().inner
    }
}

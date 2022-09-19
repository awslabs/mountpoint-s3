//! Configuration for signing requests to AWS APIs

use aws_crt_s3_sys::*;
use std::ffi::OsString;
use std::fmt::Debug;
use std::marker::PhantomPinned;
use std::pin::Pin;
use std::sync::Arc;

#[derive(Default)]
pub(crate) struct SigningConfigInner {
    /// The raw `aws_signing_config` for this config
    pub(crate) inner: aws_signing_config_aws,

    /// An owned copy of the region string, since the signing config holds a pointer to it
    pub(crate) region: OsString,

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
    /// TODO: make this visible only inside this crate
    pub fn to_inner_ptr(&self) -> *const aws_signing_config_aws {
        &Pin::as_ref(&self.0).get_ref().inner
    }
}

// TODO: is this okay?
unsafe impl Send for SigningConfig {}
unsafe impl Sync for SigningConfig {}

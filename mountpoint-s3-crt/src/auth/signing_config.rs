//! Configuration for signing requests to AWS APIs

use crate::auth::credentials::CredentialsProvider;
use crate::ToAwsByteCursor;
use mountpoint_s3_crt_sys::{aws_s3_init_default_signing_config, aws_signing_algorithm, aws_signing_config_aws};
use std::ffi::OsString;
use std::fmt::Debug;
use std::marker::PhantomPinned;
use std::pin::Pin;

pub(crate) struct SigningConfigInner {
    /// The raw `aws_signing_config` for this config
    pub(crate) inner: aws_signing_config_aws,

    /// An owned copy of the region string, since the `aws_signing_config_aws` holds a pointer to it.
    pub(crate) region: OsString,

    /// An owned CredentialProvider, since the `aws_signing_config_aws` holds a pointer to it.
    pub(crate) credentials_provider: CredentialsProvider,

    /// An owned copy of the service string, since the `aws_signing_config_aws` holds a pointer to it.
    pub(crate) service: Option<OsString>,

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

impl SigningConfigInner {
    /// Create a new [SigningConfig] with default options.
    pub fn new(region: &str, credentials_provider: CredentialsProvider) -> Self {
        let mut signing_config = SigningConfigInner {
            inner: Default::default(),
            region: region.to_owned().into(),
            credentials_provider,
            service: None,
            _pinned: Default::default(),
        };

        let credentials_provider = signing_config.credentials_provider.inner.as_ptr();
        // SAFETY: `region` is owned by signing_config (see `region.to_owned()` above),
        // so the byte cursors we create here will point to bytes that are valid as long as this SigningConfig is.
        // singing_config owns `credential_provider` that is valid as long as this SingingConfig is.
        unsafe {
            let region_cursor = signing_config.region.as_aws_byte_cursor();
            aws_s3_init_default_signing_config(&mut signing_config.inner, region_cursor, credentials_provider);
        }

        signing_config
    }

    /// Set the service name
    pub fn service(&mut self, service: &str) {
        self.service = Some(service.to_owned().into());
        // SAFETY: `service` is owned by signing_config,
        // so the byte cursors we create here will point to bytes that are valid as long as this SigningConfig is.
        let service_cursor = unsafe { self.service.as_ref().unwrap().as_aws_byte_cursor() };
        self.inner.service = service_cursor;
    }

    /// Set whether to use double URI encode or not
    pub fn use_double_uri_encode(&mut self, use_double_uri_encode: bool) {
        self.inner.flags.set_use_double_uri_encode(use_double_uri_encode as u32);
    }

    /// Set the signing algorithm
    pub fn algorithm(&mut self, algorithm: SigningAlgorithm) {
        self.inner.algorithm = algorithm.into();
    }
}

/// Wrap the SigningConfigInner struct into a Pin<Box<_>>, so that it cannot be moved.
#[derive(Debug)]
pub struct SigningConfig(pub(crate) Pin<Box<SigningConfigInner>>);

impl SigningConfig {
    /// Get out the inner pointer to the signing config
    pub(crate) fn to_inner_ptr(&self) -> *const aws_signing_config_aws {
        &self.0.as_ref().get_ref().inner
    }
}

/// The version of the AWS signing process.
#[derive(Debug, Copy, Clone, PartialEq, Eq)]
pub enum SigningAlgorithm {
    /// Signature Version 4 (SigV4)
    SigV4,
    /// Signature Version 4 Asymmetric (SigV4A)
    SigV4A,
    /// Signature Version 4 for S3 Express One Zone
    SigV4Express,
}

impl From<SigningAlgorithm> for aws_signing_algorithm {
    fn from(typ: SigningAlgorithm) -> Self {
        match typ {
            SigningAlgorithm::SigV4 => aws_signing_algorithm::AWS_SIGNING_ALGORITHM_V4,
            SigningAlgorithm::SigV4A => aws_signing_algorithm::AWS_SIGNING_ALGORITHM_V4_ASYMMETRIC,
            SigningAlgorithm::SigV4Express => aws_signing_algorithm::AWS_SIGNING_ALGORITHM_V4_S3EXPRESS,
        }
    }
}

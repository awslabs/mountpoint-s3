//! Credentials object that can be used by the CRT

use crate::common::allocator::Allocator;
use crate::ToAwsByteCursor;
use mountpoint_s3_crt_sys::{aws_credentials, aws_credentials_new, aws_credentials_release};
use std::ffi::OsStr;
use std::fmt::Debug;
use std::ptr::NonNull;
use std::time::{SystemTime, UNIX_EPOCH};

/// A set of aws_credentials with the Rust ownership model.
pub struct CrtCredentials {
    credentials: NonNull<aws_credentials>,
    expiration: u64,
}

impl Debug for CrtCredentials {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Credentials")
            .field("access_key_id", &"** redacted **")
            .field("secret_access_key", &"** redacted **")
            .field("expiration", &self.expiration)
            .finish()
    }
}

impl CrtCredentials {
    /// Builds some credentials from access_key, secret_access_key, and an optional session token + expiration.
    pub fn new(
        access_key_id: impl AsRef<OsStr>,
        secret_access_key: impl AsRef<OsStr>,
        session_token: Option<impl AsRef<OsStr>>,
        expiration: Option<SystemTime>,
    ) -> Option<CrtCredentials> {
        // SAFETY: aws_credentials_new copies all the arguments and takes ownership of them.
        unsafe {
            let session_token = session_token
                .map(|session_token| session_token.as_aws_byte_cursor())
                .unwrap_or_default();
            let expiration = expiration
                .map(|expiration| {
                    let since_epoch = expiration.duration_since(UNIX_EPOCH).expect("Should be after epoch");
                    since_epoch.as_secs()
                })
                .unwrap_or(u64::MAX);
            let aws_credentials = aws_credentials_new(
                Allocator::default().inner.as_ptr(),
                access_key_id.as_aws_byte_cursor(),
                secret_access_key.as_aws_byte_cursor(),
                session_token,
                expiration,
            );
            NonNull::new(aws_credentials).map(|credentials| CrtCredentials {
                credentials,
                expiration,
            })
        }
    }

    /// SAFETY: result must be dropped before self.
    pub(crate) unsafe fn as_ptr(&self) -> *mut aws_credentials {
        self.credentials.as_ptr()
    }
}

impl Drop for CrtCredentials {
    fn drop(&mut self) {
        // SAFETY: There's a reference created as part of aws_credentials_new which needs to be decremented.
        unsafe {
            aws_credentials_release(self.credentials.as_ptr());
        }
    }
}

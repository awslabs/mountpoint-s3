//! Wrappers for the AWS Common Runtime's TLS primitives.
//!
//! A typical client-side usage is:
//!
//! 1. Build a [`TlsContextOptions`] via [`TlsContextOptions::new_default_client`].
//! 2. Optionally call [`TlsContextOptions::override_default_trust_store_from_path`] to point at a
//!    custom CA bundle.
//! 3. Build a [`TlsContext`] from those options via [`TlsContext::new`].
//! 4. Build a [`TlsConnectionOptions`] from the context via [`TlsConnectionOptions::new`].
//! 5. Hand the [`TlsConnectionOptions`] off to the consumer (for example, the S3 client config).

use std::ffi::CString;
use std::fmt::Debug;
use std::os::unix::ffi::OsStrExt;
use std::path::Path;
use std::ptr::NonNull;

use mountpoint_s3_crt_sys::*;

use crate::CrtError as _;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::io_library_init;

/// Errors that can occur while building a [`TlsContextOptions`] or derived objects.
#[derive(Debug, thiserror::Error)]
pub enum TlsError {
    /// A filesystem path contained an interior NUL byte and could not be passed to the CRT.
    #[error("path contains a NUL byte and cannot be passed to the CRT")]
    PathContainsNul,

    /// The underlying CRT call failed.
    #[error(transparent)]
    Crt(#[from] Error),
}

/// Builder for a [`TlsContext`].
///
/// Wraps [`aws_tls_ctx_options`]; calls [`aws_tls_ctx_options_clean_up`] on drop.
pub struct TlsContextOptions {
    /// The raw `aws_tls_ctx_options` struct. Boxed so the address is stable across moves: the
    /// `aws_tls_ctx_options_init_*` functions copy pointers into this memory that must still be
    /// valid when the struct is consumed by `aws_tls_client_ctx_new`.
    inner: Box<aws_tls_ctx_options>,
}

// SAFETY: `aws_tls_ctx_options` owns its buffers; it is safe to move the options between threads
// as long as we synchronize access from Rust (we only ever hand out `&mut self` for mutators).
unsafe impl Send for TlsContextOptions {}

impl Debug for TlsContextOptions {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TlsContextOptions").finish_non_exhaustive()
    }
}

impl TlsContextOptions {
    /// Initialize a new [`TlsContextOptions`] with the CRT's default client options.
    pub fn new_default_client(allocator: &Allocator) -> Self {
        io_library_init(allocator);

        let mut inner: Box<aws_tls_ctx_options> = Box::default();
        // SAFETY: `aws_tls_ctx_options_init_default_client` writes into `*inner`. The allocator
        // pointer is valid for as long as `Allocator` lives.
        unsafe {
            aws_tls_ctx_options_init_default_client(&mut *inner, allocator.inner.as_ptr());
        }
        Self { inner }
    }

    /// Override the default trust store with either a path to a directory of trusted certificates
    /// (Unix only; ignored on other platforms) or a path to a PEM file containing trusted CAs, or
    /// both.
    pub fn override_default_trust_store_from_path(
        &mut self,
        ca_path: Option<&Path>,
        ca_file: Option<&Path>,
    ) -> Result<&mut Self, TlsError> {
        let ca_path_c = path_to_cstring(ca_path)?;
        let ca_file_c = path_to_cstring(ca_file)?;

        let ca_path_ptr = ca_path_c.as_ref().map(|p| p.as_ptr()).unwrap_or(std::ptr::null());
        let ca_file_ptr = ca_file_c.as_ref().map(|p| p.as_ptr()).unwrap_or(std::ptr::null());

        // SAFETY: `inner` is a valid `aws_tls_ctx_options`. The C API reads the paths before
        // returning; the CString buffers live until end of this function.
        unsafe {
            aws_tls_ctx_options_override_default_trust_store_from_path(&mut *self.inner, ca_path_ptr, ca_file_ptr)
                .ok_or_last_error()?;
        }
        Ok(self)
    }
}

impl Drop for TlsContextOptions {
    fn drop(&mut self) {
        // SAFETY: `inner` was initialized by one of the `aws_tls_ctx_options_init_*` functions.
        // `aws_tls_ctx_options_clean_up` is safe to call multiple times and safe to call even if
        // only `aws_tls_ctx_options_init_default_client` was invoked.
        unsafe {
            aws_tls_ctx_options_clean_up(&mut *self.inner);
        }
    }
}

/// A reference-counted TLS context built from a [`TlsContextOptions`].
///
/// Wraps [`aws_tls_ctx`]. Cloning increments the ref count; dropping decrements it.
pub struct TlsContext {
    pub(crate) inner: NonNull<aws_tls_ctx>,
}

// SAFETY: `aws_tls_ctx` is reference counted and thread-safe per the CRT contract.
unsafe impl Send for TlsContext {}
// SAFETY: See above.
unsafe impl Sync for TlsContext {}

impl Debug for TlsContext {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TlsContext").finish_non_exhaustive()
    }
}

impl TlsContext {
    /// Build a new [`TlsContext`] from the given options. The options are copied into the context.
    pub fn new(allocator: &Allocator, options: &TlsContextOptions) -> Result<Self, Error> {
        // SAFETY: `options.inner` is a valid `aws_tls_ctx_options`, `allocator` is valid. The CRT
        // copies what it needs and does not retain the pointer.
        let inner = unsafe { aws_tls_client_ctx_new(allocator.inner.as_ptr(), &*options.inner).ok_or_last_error()? };
        Ok(Self { inner })
    }
}

impl Clone for TlsContext {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_tls_ctx`. `aws_tls_ctx_acquire` returns the same
        // pointer after bumping the ref count.
        let inner = unsafe { NonNull::new_unchecked(aws_tls_ctx_acquire(self.inner.as_ptr())) };
        Self { inner }
    }
}

impl Drop for TlsContext {
    fn drop(&mut self) {
        // SAFETY: We hold one reference to `self.inner` which we release here.
        unsafe {
            aws_tls_ctx_release(self.inner.as_ptr());
        }
    }
}

/// TLS connection options built from a [`TlsContext`].
///
/// Wraps [`aws_tls_connection_options`]; calls [`aws_tls_connection_options_clean_up`] on drop.
pub struct TlsConnectionOptions {
    /// The raw `aws_tls_connection_options` struct. Boxed for address stability.
    inner: Box<aws_tls_connection_options>,
    /// The context this was initialized from. Kept alive for the lifetime of the options.
    _ctx: TlsContext,
}

// SAFETY: The inner struct holds a refcount-acquired `aws_tls_ctx` pointer; the CRT's TLS objects
// are thread-safe. We never hand out shared mutable access to `inner` from Rust.
unsafe impl Send for TlsConnectionOptions {}

impl Debug for TlsConnectionOptions {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("TlsConnectionOptions").finish_non_exhaustive()
    }
}

impl TlsConnectionOptions {
    /// Build a new [`TlsConnectionOptions`] from the given context.
    pub fn new(ctx: &TlsContext) -> Self {
        let mut inner: Box<aws_tls_connection_options> = Box::default();
        // SAFETY: `*inner` is zeroed (via `Default`), which is the state required by
        // `aws_tls_connection_options_init_from_ctx`. The function bumps the context's refcount
        // internally.
        unsafe {
            aws_tls_connection_options_init_from_ctx(&mut *inner, ctx.inner.as_ptr());
        }
        Self {
            inner,
            _ctx: ctx.clone(),
        }
    }

    /// Immutable raw pointer to the underlying `aws_tls_connection_options`, suitable for passing
    /// to CRT APIs that accept `const aws_tls_connection_options *`.
    pub(crate) fn as_inner_ptr(&self) -> *const aws_tls_connection_options {
        &*self.inner
    }
}

impl Drop for TlsConnectionOptions {
    fn drop(&mut self) {
        // SAFETY: `inner` was initialized by `aws_tls_connection_options_init_from_ctx`. Cleanup
        // releases the context reference held by `inner`.
        unsafe {
            aws_tls_connection_options_clean_up(&mut *self.inner);
        }
    }
}

/// Convert an optional filesystem path into an optional nul-terminated C string.
fn path_to_cstring(path: Option<&Path>) -> Result<Option<CString>, TlsError> {
    match path {
        None => Ok(None),
        Some(path) => CString::new(path.as_os_str().as_bytes())
            .map(Some)
            .map_err(|_| TlsError::PathContainsNul),
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::common::allocator::Allocator;

    use std::io::Write;

    fn generate_test_ca_pem() -> Vec<u8> {
        let mut ca_params = rcgen::CertificateParams::new(Vec::<String>::new()).expect("CA params");
        ca_params.is_ca = rcgen::IsCa::Ca(rcgen::BasicConstraints::Unconstrained);
        ca_params
            .distinguished_name
            .push(rcgen::DnType::CommonName, "mountpoint-s3-crt test CA");
        let ca_key = rcgen::KeyPair::generate().expect("CA keypair");
        let ca_cert = ca_params.self_signed(&ca_key).expect("sign CA");
        ca_cert.pem().into_bytes()
    }

    fn write_tempfile(dir: &std::path::Path, name: &str, contents: &[u8]) -> std::path::PathBuf {
        let path = dir.join(name);
        let mut file = std::fs::File::create(&path).expect("create tempfile");
        file.write_all(contents).expect("write tempfile");
        path
    }

    #[test]
    fn default_client_options_build_and_drop() {
        let allocator = Allocator::default();
        let options = TlsContextOptions::new_default_client(&allocator);
        drop(options);
    }

    #[test]
    fn override_trust_store_from_file() {
        let allocator = Allocator::default();
        let tmp = tempfile::tempdir().expect("tempdir");
        let ca_pem = generate_test_ca_pem();
        let ca_path = write_tempfile(tmp.path(), "ca.pem", &ca_pem);

        let mut options = TlsContextOptions::new_default_client(&allocator);
        options
            .override_default_trust_store_from_path(None, Some(&ca_path))
            .expect("override trust store");

        // And we can still build a context from it.
        let _ctx = TlsContext::new(&allocator, &options).expect("build TlsContext");
    }

    #[test]
    fn override_trust_store_missing_file_fails() {
        let allocator = Allocator::default();
        let mut options = TlsContextOptions::new_default_client(&allocator);
        let result =
            options.override_default_trust_store_from_path(None, Some(std::path::Path::new("/nonexistent/ca.pem")));
        assert!(result.is_err(), "expected override with bogus path to fail");
    }

    #[test]
    fn override_trust_store_path_with_nul_byte_fails() {
        let allocator = Allocator::default();
        let mut options = TlsContextOptions::new_default_client(&allocator);
        let result = options.override_default_trust_store_from_path(None, Some(std::path::Path::new("/tmp/\0bad.pem")));
        assert!(matches!(result, Err(TlsError::PathContainsNul)), "got: {result:?}");
    }

    #[test]
    fn build_tls_connection_options() {
        let allocator = Allocator::default();
        let options = TlsContextOptions::new_default_client(&allocator);
        let ctx = TlsContext::new(&allocator, &options).expect("build TlsContext");
        let conn_options = TlsConnectionOptions::new(&ctx);
        // Drop the original ctx first; the connection options holds its own refcount.
        drop(ctx);
        drop(conn_options);
    }
}

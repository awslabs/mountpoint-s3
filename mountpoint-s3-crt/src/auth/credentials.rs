//! AWS credentials and credentials providers

use std::fmt::Debug;
use std::future::Future;
use std::ptr::NonNull;
use std::sync::Arc;
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use futures::channel::oneshot;
use mountpoint_s3_crt_sys::{
    AWS_OP_SUCCESS, aws_byte_cursor, aws_common_error, aws_credentials, aws_credentials_acquire,
    aws_credentials_get_access_key_id, aws_credentials_get_expiration_timepoint_seconds,
    aws_credentials_get_secret_access_key, aws_credentials_get_session_token, aws_credentials_new_with_options,
    aws_credentials_options, aws_credentials_provider, aws_credentials_provider_acquire,
    aws_credentials_provider_cached_options, aws_credentials_provider_chain_default_options,
    aws_credentials_provider_delegate_options, aws_credentials_provider_get_credentials,
    aws_credentials_provider_imds_options, aws_credentials_provider_new_anonymous, aws_credentials_provider_new_cached,
    aws_credentials_provider_new_chain_default, aws_credentials_provider_new_delegate,
    aws_credentials_provider_new_imds, aws_credentials_provider_new_profile, aws_credentials_provider_new_static,
    aws_credentials_provider_profile_options, aws_credentials_provider_release,
    aws_credentials_provider_shutdown_options, aws_credentials_provider_static_options, aws_credentials_release,
    aws_http_proxy_env_var_type, aws_on_get_credentials_callback_fn, proxy_env_var_settings,
};

use crate::auth::{ErrorCode, auth_library_init};
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::tls::TlsContext;
use crate::{CrtError as _, ToAwsByteCursor as _, aws_byte_cursor_as_slice};

/// Options for creating a default credentials provider
#[derive(Debug)]
pub struct CredentialsProviderChainDefaultOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
    /// Optional custom TLS context for HTTPS calls made by sub-providers of the default
    /// credentials chain — principally STS (`AssumeRole` and `AssumeRoleWithWebIdentity`).
    /// When `None`, the CRT's default trust store is used.
    pub tls_ctx: Option<&'a TlsContext>,
    /// Pin the chain to the first provider in it that returns credentials. Once pinned, the chain
    /// queries only that provider, including to refresh credentials, and returns its errors instead
    /// of trying the other providers, for as long as this credentials provider exists. Until a
    /// provider returns credentials, the chain tries every provider in order on each query, as it
    /// does when this is `false`.
    pub pin_credential_provider: bool,
}

/// Options for creating a profile credentials provider
#[derive(Debug)]
pub struct CredentialsProviderProfileOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
    /// The name of profile to use.
    pub profile_name_override: &'a str,
    /// Optional custom TLS context. See [`CredentialsProviderChainDefaultOptions::tls_ctx`].
    pub tls_ctx: Option<&'a TlsContext>,
}

/// Options for creating an instance metadata (IMDS) credentials provider
#[derive(Debug)]
pub struct CredentialsProviderImdsOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
    /// Don't fall back to IMDSv1 when the IMDSv2 token request fails.
    pub ec2_metadata_v1_disabled: bool,
}

/// Options for creating a static credentials provider
pub struct CredentialsProviderStaticOptions<'a> {
    /// AWS access key ID
    pub access_key_id: &'a str,
    /// AWS secret access key
    pub secret_access_key: &'a str,
    /// AWS session token (only required for some credentials sources, e.g. STS)
    pub session_token: Option<&'a str>,
}

impl Debug for CredentialsProviderStaticOptions<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CredentialsProviderStaticOptions")
            .field("access_key_id", &"** redacted **")
            .field("secret_access_key", &"** redacted **")
            .field("session_token", &self.session_token.map(|_| "** redacted **"))
            .finish()
    }
}

/// A credentials provider is an object that has an asynchronous query function for retrieving AWS
/// credentials
#[derive(Debug)]
pub struct CredentialsProvider {
    pub(crate) inner: NonNull<aws_credentials_provider>,
}

// SAFETY: aws_credentials_provider is thread-safe.
unsafe impl Send for CredentialsProvider {}
// SAFETY: aws_credentials_provider is thread-safe.
unsafe impl Sync for CredentialsProvider {}

impl CredentialsProvider {
    /// Creates the default credential provider chain as used by most AWS SDKs
    pub fn new_chain_default(
        allocator: &Allocator,
        options: CredentialsProviderChainDefaultOptions,
    ) -> Result<Self, Error> {
        auth_library_init(allocator);

        let inner_options = aws_credentials_provider_chain_default_options {
            bootstrap: options.bootstrap.inner.as_ptr(),
            tls_ctx: options
                .tls_ctx
                .map(|t| t.inner.as_ptr())
                .unwrap_or(std::ptr::null_mut()),
            pin_credential_provider: options.pin_credential_provider,
            ..Default::default()
        };

        // SAFETY: aws_credentials_provider_new_chain_default makes a copy of the bootstrap options
        // and acquires a reference to tls_ctx when non-null, so it is safe for `options.tls_ctx`
        // to be dropped after this call returns.
        let inner = unsafe {
            aws_credentials_provider_new_chain_default(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }

    /// Creates the anonymous credential provider.
    /// Anonynous credentials provider gives you anonymous credentials which can be used to skip the signing process.
    pub fn new_anonymous(allocator: &Allocator) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: allocator is a valid aws_allocator and shutdown_options is optional
        let inner = unsafe {
            aws_credentials_provider_new_anonymous(allocator.inner.as_ptr(), std::ptr::null_mut()).ok_or_last_error()?
        };

        Ok(Self { inner })
    }

    /// Creates the EC2 instance metadata (IMDS) credentials provider, without a cache. It uses
    /// IMDSv2, and falls back to IMDSv1 when the token request fails, unless
    /// [CredentialsProviderImdsOptions::ec2_metadata_v1_disabled] is set. Its requests go through the
    /// proxy in `HTTP_PROXY`, unless `NO_PROXY` covers the IMDS address.
    pub fn new_imds(allocator: &Allocator, options: CredentialsProviderImdsOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        let proxy_ev_settings = proxy_env_var_settings {
            env_var_type: aws_http_proxy_env_var_type::AWS_HPEV_ENABLE,
            ..Default::default()
        };
        let inner_options = aws_credentials_provider_imds_options {
            bootstrap: options.bootstrap.inner.as_ptr(),
            ec2_metadata_v1_disabled: options.ec2_metadata_v1_disabled,
            proxy_ev_settings: &raw const proxy_ev_settings,
            ..Default::default()
        };

        // SAFETY: aws_credentials_provider_new_imds acquires a reference to the bootstrap, and reads
        // the proxy settings only during the call.
        let inner =
            unsafe { aws_credentials_provider_new_imds(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// Creates the profile credential provider.
    pub fn new_profile(allocator: &Allocator, options: CredentialsProviderProfileOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: aws_credentials_provider_new_profile makes a copy of bootstrap
        // and contents of profile_name_override, and acquires a reference to tls_ctx when non-null.
        // SAFETY: aws_credentials_provider_new_cached increments the reference counter of
        // profile_provider.
        let inner = unsafe {
            let inner_options = aws_credentials_provider_profile_options {
                bootstrap: options.bootstrap.inner.as_ptr(),
                profile_name_override: options.profile_name_override.as_aws_byte_cursor(),
                tls_ctx: options
                    .tls_ctx
                    .map(|t| t.inner.as_ptr())
                    .unwrap_or(std::ptr::null_mut()),
                ..Default::default()
            };

            let profile_provider =
                aws_credentials_provider_new_profile(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?;

            let inner_options = aws_credentials_provider_cached_options {
                source: profile_provider.as_ptr(),
                refresh_time_in_milliseconds: 900_000, // Same as `aws_credentials_provider_new_chain_default`, 15 minutes
                ..Default::default()
            };

            let cached_provider =
                aws_credentials_provider_new_cached(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?;

            // transfer ownership
            aws_credentials_provider_release(profile_provider.as_ptr());

            cached_provider
        };

        Ok(Self { inner })
    }

    /// Creates a static credential provider that always returns the given credentials
    pub fn new_static(allocator: &Allocator, options: CredentialsProviderStaticOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: aws_credentials_provider_new_static makes a copy of the strings
        let inner = unsafe {
            let inner_options = aws_credentials_provider_static_options {
                access_key_id: options.access_key_id.as_aws_byte_cursor(),
                secret_access_key: options.secret_access_key.as_aws_byte_cursor(),
                session_token: options
                    .session_token
                    .map(|t| t.as_aws_byte_cursor())
                    .unwrap_or_default(),
                ..Default::default()
            };

            aws_credentials_provider_new_static(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }

    /// Creates a provider that sources credentials from a [CredentialsSource] implemented in Rust.
    ///
    /// The provider calls [CredentialsSource::get_credentials] on every query. A CRT S3 client
    /// queries its provider for every request it signs, so the source should answer from a cache
    /// of its own when it can.
    ///
    /// The source is dropped when the last reference to the provider is released (or, if a call
    /// to [CredentialsSource::get_credentials] is still running then, when it returns). That
    /// reference can be the last clone of the returned [CredentialsProvider], or one held by a CRT
    /// object (such as an S3 client and its in-flight requests), so the drop can happen on any
    /// thread, including a CRT event loop thread or a thread completing a [CredentialsCallback].
    /// The source must not own anything that can't be dropped there: for example, it should hold a
    /// Tokio runtime handle rather than the runtime, whose drop panics in an async context.
    ///
    /// # Errors
    ///
    /// Returns an error if the CRT fails to create the provider.
    pub fn new_delegate<S: CredentialsSource>(allocator: &Allocator, source: S) -> Result<Self, Error> {
        auth_library_init(allocator);

        let user_data = Arc::into_raw(Arc::new(source)) as *mut libc::c_void;
        let options = aws_credentials_provider_delegate_options {
            shutdown_options: aws_credentials_provider_shutdown_options {
                shutdown_callback: Some(delegate_shutdown::<S>),
                shutdown_user_data: user_data,
            },
            get_credentials: Some(delegate_get_credentials::<S>),
            delegate_user_data: user_data,
        };

        // SAFETY: `user_data` is a leaked `Arc<S>`. On success, the delegate provider owns that
        // reference: the CRT passes it to `delegate_get_credentials` for each query, and to
        // `delegate_shutdown`, which releases it, once when the provider is destroyed. On failure
        // we call the shutdown callback here, since the CRT has not kept a copy and won't call it.
        let inner = unsafe {
            match aws_credentials_provider_new_delegate(allocator.inner.as_ptr(), &options).ok_or_last_error() {
                Ok(inner) => inner,
                Err(e) => {
                    delegate_shutdown::<S>(user_data);
                    return Err(e);
                }
            }
        };

        Ok(Self { inner })
    }

    /// Queries this provider for credentials.
    ///
    /// The query starts when this method is called, and the returned future resolves when the
    /// provider completes it. Dropping the future doesn't cancel the query: the provider still
    /// completes it, and its result is discarded. The future doesn't need to be polled from any
    /// particular thread or runtime.
    ///
    /// # Errors
    ///
    /// The future resolves to the provider's error if the query fails, or to
    /// `AWS_ERROR_INVALID_UTF8` if the credentials aren't valid UTF-8.
    pub fn get_credentials(&self) -> impl Future<Output = Result<Credentials, Error>> + Send + 'static {
        let (sender, receiver) = oneshot::channel::<Result<Credentials, Error>>();
        let user_data = Box::into_raw(Box::new(sender)) as *mut libc::c_void;

        // SAFETY: `self.inner` is a valid provider, and we hold a reference to it for the duration
        // of the call. `user_data` is a leaked `Box<oneshot::Sender<_>>`: when the call succeeds,
        // the provider calls `on_get_credentials` exactly once (possibly before the call returns),
        // which frees it. When the call fails, the provider doesn't invoke the callback (this is the
        // contract of `aws_credentials_provider_get_credentials`, which the CRT's own callers, such
        // as the signer, also rely on), so we still own `user_data` and free it here.
        let start_result = unsafe {
            aws_credentials_provider_get_credentials(self.inner.as_ptr(), Some(on_get_credentials), user_data)
                .ok_or_last_error()
                .inspect_err(|_| {
                    drop(Box::from_raw(
                        user_data as *mut oneshot::Sender<Result<Credentials, Error>>,
                    ))
                })
        };

        async move {
            start_result?;
            // The sender is only dropped after sending, so `Canceled` is not expected.
            receiver
                .await
                .unwrap_or_else(|_| Err(Error::from(aws_common_error::AWS_ERROR_UNKNOWN as i32)))
        }
    }
}

/// Completion callback for [CredentialsProvider::get_credentials].
///
/// # Safety
/// `user_data` must be a leaked `Box<oneshot::Sender<Result<Credentials, Error>>>`, and this
/// function must be called at most once for it. `credentials`, if not null, must be valid for the
/// duration of the call.
unsafe extern "C" fn on_get_credentials(
    credentials: *mut aws_credentials,
    error_code: libc::c_int,
    user_data: *mut libc::c_void,
) {
    // SAFETY: guaranteed by the caller.
    let sender = unsafe { Box::from_raw(user_data as *mut oneshot::Sender<Result<Credentials, Error>>) };
    let result = match NonNull::new(credentials) {
        // SAFETY: the provider passes credentials that are valid for the duration of this call.
        Some(credentials) => unsafe { Credentials::from_borrowed(credentials) },
        None => Err(Error::from(error_code)),
    };
    // The receiver may have been dropped, in which case the result is discarded.
    let _ = sender.send(result);
}

/// Options for creating a set of [Credentials]
pub struct CredentialsOptions<'a> {
    /// AWS access key ID. Must not be empty.
    pub access_key_id: &'a str,
    /// AWS secret access key. Must not be empty.
    pub secret_access_key: &'a str,
    /// AWS session token, for temporary credentials. An empty token is the same as `None`.
    pub session_token: Option<&'a str>,
    /// When the credentials expire, or `None` if they don't. The CRT stores it with a precision of
    /// one second; a time before the Unix epoch is stored as the epoch.
    pub expiration: Option<SystemTime>,
}

impl Debug for CredentialsOptions<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CredentialsOptions")
            .field("access_key_id", &"** redacted **")
            .field("secret_access_key", &"** redacted **")
            .field("session_token", &self.session_token.map(|_| "** redacted **"))
            .field("expiration", &self.expiration)
            .finish()
    }
}

/// A set of AWS credentials, as returned by a [CredentialsProvider].
///
/// Their fields are always valid UTF-8.
pub struct Credentials {
    /// Invariant: we hold a reference to `inner`, and its access key ID, secret access key and
    /// session token are valid UTF-8.
    inner: NonNull<aws_credentials>,
}

// SAFETY: aws_credentials is immutable after creation, and its reference count is atomic.
unsafe impl Send for Credentials {}

impl Credentials {
    /// Creates a new set of credentials.
    ///
    /// # Errors
    ///
    /// Returns `AWS_ERROR_INVALID_ARGUMENT` if the access key ID or the secret access key is empty.
    pub fn new(allocator: &Allocator, options: CredentialsOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        let expiration_timepoint_seconds = match options.expiration {
            Some(time) => time.duration_since(UNIX_EPOCH).map_or(0, |d| d.as_secs()),
            // The CRT's representation of credentials that don't expire.
            None => u64::MAX,
        };

        // SAFETY: aws_credentials_new_with_options copies the strings, so the cursors only need to
        // be valid for the duration of the call. The strings are `&str`, so the UTF-8 invariant
        // holds.
        let inner = unsafe {
            let inner_options = aws_credentials_options {
                access_key_id_cursor: options.access_key_id.as_aws_byte_cursor(),
                secret_access_key_cursor: options.secret_access_key.as_aws_byte_cursor(),
                session_token_cursor: options
                    .session_token
                    .map(|t| t.as_aws_byte_cursor())
                    .unwrap_or_default(),
                expiration_timepoint_seconds,
                ..Default::default()
            };
            aws_credentials_new_with_options(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self { inner })
    }

    /// Wraps credentials owned by the CRT, acquiring a new reference to them.
    ///
    /// Fails with `AWS_ERROR_INVALID_UTF8` if any of their fields isn't valid UTF-8.
    ///
    /// # Safety
    /// `credentials` must point to valid credentials for the duration of the call.
    unsafe fn from_borrowed(credentials: NonNull<aws_credentials>) -> Result<Self, Error> {
        let fields = [
            aws_credentials_get_access_key_id,
            aws_credentials_get_secret_access_key,
            aws_credentials_get_session_token,
        ];
        for get_field in fields {
            // SAFETY: `credentials` is valid, and the field is only read during this call.
            let bytes = unsafe { aws_byte_cursor_as_slice(&get_field(credentials.as_ptr())) };
            if std::str::from_utf8(bytes).is_err() {
                return Err(Error::from(aws_common_error::AWS_ERROR_INVALID_UTF8 as i32));
            }
        }
        // SAFETY: `credentials` is valid. The new reference is released when the result is dropped.
        unsafe { aws_credentials_acquire(credentials.as_ptr()) };
        Ok(Self { inner: credentials })
    }

    /// Reads one of the string fields of the credentials.
    fn field(&self, get_field: unsafe extern "C" fn(*const aws_credentials) -> aws_byte_cursor) -> &str {
        // SAFETY: we hold a reference to `self.inner`, and the credentials are immutable, so the
        // field's bytes live at least as long as `self`.
        let bytes = unsafe { aws_byte_cursor_as_slice(&get_field(self.inner.as_ptr())) };
        std::str::from_utf8(bytes).expect("credentials fields are valid UTF-8")
    }

    /// The AWS access key ID. Empty for anonymous credentials.
    pub fn access_key_id(&self) -> &str {
        self.field(aws_credentials_get_access_key_id)
    }

    /// The AWS secret access key. Empty for anonymous credentials.
    pub fn secret_access_key(&self) -> &str {
        self.field(aws_credentials_get_secret_access_key)
    }

    /// The AWS session token, if any.
    pub fn session_token(&self) -> Option<&str> {
        Some(self.field(aws_credentials_get_session_token)).filter(|s| !s.is_empty())
    }

    /// When the credentials expire, or `None` if they don't.
    pub fn expiration(&self) -> Option<SystemTime> {
        // SAFETY: we hold a reference to `self.inner`.
        let seconds = unsafe { aws_credentials_get_expiration_timepoint_seconds(self.inner.as_ptr()) };
        if seconds == u64::MAX {
            return None;
        }
        UNIX_EPOCH.checked_add(Duration::from_secs(seconds))
    }
}

impl Clone for Credentials {
    /// Returns another reference to the same credentials.
    fn clone(&self) -> Self {
        // SAFETY: we hold a reference to `self.inner`, so it is valid. The new reference is
        // released when the clone is dropped, and the fields are unchanged, so the UTF-8
        // invariant holds.
        unsafe { aws_credentials_acquire(self.inner.as_ptr()) };
        Self { inner: self.inner }
    }
}

impl Drop for Credentials {
    fn drop(&mut self) {
        // SAFETY: we hold a reference to `self.inner`, and release it exactly once.
        unsafe { aws_credentials_release(self.inner.as_ptr()) };
    }
}

impl Debug for Credentials {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Credentials")
            .field("access_key_id", &"** redacted **")
            .field("secret_access_key", &"** redacted **")
            .field("session_token", &self.session_token().map(|_| "** redacted **"))
            .field("expiration", &self.expiration())
            .finish()
    }
}

/// A source of credentials implemented in Rust, for [CredentialsProvider::new_delegate].
///
/// [Credentials::new] requires keys, so a source can't return anonymous credentials.
pub trait CredentialsSource: Send + Sync + 'static {
    /// Starts a query for credentials, to be completed through `callback`.
    ///
    /// The CRT calls this method from the thread that queries the provider, often one of its
    /// event loop threads, and possibly from several threads at once. It must return without
    /// blocking: an implementation that has to wait (for example, for a network call) should
    /// move `callback` to another thread or task and complete it there.
    ///
    /// The query completes when `callback` is completed or dropped, from any thread, either before
    /// or after this method returns. The CRT continues the work that waits on the credentials
    /// (such as signing a request) on that thread, inside the completion call. The query must
    /// eventually complete: if `callback` is leaked, the request waiting on it never completes.
    ///
    /// A panic in this method aborts the process, since it is called from C.
    fn get_credentials(&self, callback: CredentialsCallback);
}

/// Completes a query to a [CredentialsSource].
///
/// The query completes exactly once: with [CredentialsCallback::complete], or, if the callback is
/// dropped without completing, with the error `AWS_AUTH_CREDENTIALS_PROVIDER_DELEGATE_FAILURE`.
/// Dropping the callback is how a source fails a query. The request waiting on the query then fails
/// with `AWS_AUTH_SIGNING_NO_CREDENTIALS` when the CRT signer queried the provider, or with
/// `AWS_AUTH_CREDENTIALS_PROVIDER_DELEGATE_FAILURE` when the S3 client did (for S3 Express One Zone
/// sessions). Neither says why, so a source should log the reason for a failure itself.
pub struct CredentialsCallback {
    /// The CRT's completion function and its user data. Invariant: `callback` is `Some` until the
    /// query completes, and the CRT keeps `user_data` alive until then.
    callback: aws_on_get_credentials_callback_fn,
    user_data: *mut libc::c_void,
}

// SAFETY: the CRT allows a get-credentials query to be completed from any thread (its own
// providers complete them on event loop threads unrelated to the caller), and the callback owns the
// only handle to the query, so it can be moved to another thread.
unsafe impl Send for CredentialsCallback {}

impl CredentialsCallback {
    /// Completes the query with the given credentials.
    ///
    /// The CRT continues the work that waits on the query on this thread before this method
    /// returns, such as signing a request, which can query the provider again. Don't hold locks
    /// the source needs across this call.
    pub fn complete(mut self, credentials: Credentials) {
        if let Some(callback) = self.callback.take() {
            // SAFETY: `callback` and `user_data` come from the CRT, which keeps `user_data` alive
            // until the callback is invoked, and the `take` above ensures we invoke it only once.
            // The credentials are valid for the duration of the call: the callee acquires its own
            // reference if it keeps them, and ours is released when `credentials` is dropped.
            unsafe {
                callback(
                    credentials.inner.as_ptr(),
                    aws_common_error::AWS_ERROR_SUCCESS as i32,
                    self.user_data,
                )
            };
        }
    }
}

impl Drop for CredentialsCallback {
    fn drop(&mut self) {
        if let Some(callback) = self.callback.take() {
            // SAFETY: as in `complete`. A null credentials pointer with a failure code reports an
            // error.
            unsafe { callback(std::ptr::null_mut(), DELEGATE_FAILURE, self.user_data) };
        }
    }
}

impl Debug for CredentialsCallback {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CredentialsCallback").finish_non_exhaustive()
    }
}

const DELEGATE_FAILURE: i32 = ErrorCode::AWS_AUTH_CREDENTIALS_PROVIDER_DELEGATE_FAILURE as i32;

/// The delegate provider's get-credentials function.
///
/// # Safety
/// `delegate_user_data` must be the `Arc<S>` leaked by [CredentialsProvider::new_delegate], not
/// yet released by [delegate_shutdown] when this function is called. `callback` and
/// `callback_user_data` must form a valid completion for a single query.
unsafe extern "C" fn delegate_get_credentials<S: CredentialsSource>(
    delegate_user_data: *mut libc::c_void,
    callback: aws_on_get_credentials_callback_fn,
    callback_user_data: *mut libc::c_void,
) -> libc::c_int {
    // The provider is alive when this function is called, but not necessarily until it returns:
    // some CRT callers (such as the signer) release their reference to the provider when the query
    // completes, which can happen on another thread while `get_credentials` is still running. So
    // take a reference to the source for the duration of the call: the strong count incremented
    // here is decremented when `source` goes out of scope at the end of this function. If the
    // provider is destroyed in the meantime, that is when the source is dropped.
    // SAFETY: guaranteed by the caller: the provider's reference to the `Arc` is still alive, so
    // the reference count can be incremented. `S: Sync`, so the source can be used from several
    // threads at once.
    let source = unsafe {
        Arc::increment_strong_count(delegate_user_data as *const S);
        Arc::from_raw(delegate_user_data as *const S)
    };
    source.get_credentials(CredentialsCallback {
        callback,
        user_data: callback_user_data,
    });
    // The query is always started: any failure is reported through the callback. This matters
    // because the CRT's cached provider ignores a failure returned here and would wait forever for
    // the callback.
    AWS_OP_SUCCESS
}

/// The delegate provider's shutdown callback, which releases the provider's reference to the
/// source.
///
/// # Safety
/// `user_data` must be the `Arc<S>` leaked by [CredentialsProvider::new_delegate]. This function
/// must be called exactly once for it: by the CRT when the provider is destroyed or by
/// [CredentialsProvider::new_delegate] when the CRT fails to create the provider.
unsafe extern "C" fn delegate_shutdown<S: CredentialsSource>(user_data: *mut libc::c_void) {
    // SAFETY: guaranteed by the caller.
    drop(unsafe { Arc::from_raw(user_data as *const S) });
}

impl Clone for CredentialsProvider {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_credentials_provider` for as long as `self` exists
        unsafe {
            aws_credentials_provider_acquire(self.inner.as_ptr());
        }

        Self { inner: self.inner }
    }
}

impl Drop for CredentialsProvider {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_credentials_provider` and we're in drop so it's safe
        // to decrement the reference count.
        unsafe {
            aws_credentials_provider_release(self.inner.as_ptr());
        }
    }
}

#[cfg(test)]
mod tests {
    use std::sync::atomic::{AtomicUsize, Ordering};
    use std::sync::mpsc::{Receiver, Sender, channel};
    use std::sync::{Arc, Mutex};
    use std::thread;

    use futures::executor::block_on;

    use super::*;

    const TIMEOUT: Duration = Duration::from_secs(10);

    fn credentials_with(allocator: &Allocator, access_key_id: &str, expiration: Option<SystemTime>) -> Credentials {
        let options = CredentialsOptions {
            access_key_id,
            secret_access_key: "SECRET",
            session_token: Some("TOKEN"),
            expiration,
        };
        Credentials::new(allocator, options).unwrap()
    }

    fn credentials(access_key_id: &str, expiration: Option<SystemTime>) -> Credentials {
        credentials_with(&Allocator::default(), access_key_id, expiration)
    }

    fn delegate_failure() -> Error {
        Error::from(DELEGATE_FAILURE)
    }

    /// A source that completes every query before returning.
    struct SyncSource {
        expiration: Option<SystemTime>,
    }

    impl CredentialsSource for SyncSource {
        fn get_credentials(&self, callback: CredentialsCallback) {
            callback.complete(credentials("AKID", self.expiration));
        }
    }

    /// A source that fails every query, by dropping the callback before returning.
    struct FailingSource;

    impl CredentialsSource for FailingSource {
        fn get_credentials(&self, callback: CredentialsCallback) {
            drop(callback);
        }
    }

    /// A source that hands every callback to the test through a channel, so the test decides when
    /// and from which thread each query completes. Tracks when it's dropped.
    struct ChannelSource {
        callbacks: Mutex<Sender<CredentialsCallback>>,
        dropped: Arc<AtomicUsize>,
    }

    impl CredentialsSource for ChannelSource {
        fn get_credentials(&self, callback: CredentialsCallback) {
            // If the receiver is gone, the callback is dropped, which fails the query. Drop it
            // after releasing the lock, since completing the query can call back into the source.
            let unsent = self.callbacks.lock().unwrap().send(callback).err();
            drop(unsent);
        }
    }

    impl Drop for ChannelSource {
        fn drop(&mut self) {
            self.dropped.fetch_add(1, Ordering::SeqCst);
        }
    }

    struct ChannelDelegate {
        provider: CredentialsProvider,
        callbacks: Receiver<CredentialsCallback>,
        dropped: Arc<AtomicUsize>,
    }

    impl ChannelDelegate {
        fn new(allocator: &Allocator) -> Self {
            let (sender, callbacks) = channel();
            let dropped = Arc::new(AtomicUsize::new(0));
            let source = ChannelSource {
                callbacks: Mutex::new(sender),
                dropped: dropped.clone(),
            };
            let provider = CredentialsProvider::new_delegate(allocator, source).unwrap();
            Self {
                provider,
                callbacks,
                dropped,
            }
        }

        fn next_callback(&self) -> CredentialsCallback {
            self.callbacks
                .recv_timeout(TIMEOUT)
                .expect("the source should be queried")
        }
    }

    #[test]
    fn credentials_fields() {
        let expiration = UNIX_EPOCH + Duration::from_secs(2_000_000_000);
        let credentials = credentials("AKID", Some(expiration));
        assert_eq!(credentials.access_key_id(), "AKID");
        assert_eq!(credentials.secret_access_key(), "SECRET");
        assert_eq!(credentials.session_token(), Some("TOKEN"));
        assert_eq!(credentials.expiration(), Some(expiration));

        let debug = format!("{credentials:?}");
        for value in ["AKID", "SECRET", "TOKEN"] {
            assert!(!debug.contains(value), "{value} should be redacted from {debug}");
        }
    }

    #[test]
    fn credentials_optional_fields() {
        let options = CredentialsOptions {
            access_key_id: "AKID",
            secret_access_key: "secret",
            session_token: Some(""),
            expiration: None,
        };
        let credentials = Credentials::new(&Allocator::default(), options).unwrap();
        assert_eq!(credentials.session_token(), None);
        assert_eq!(credentials.expiration(), None);

        let options = CredentialsOptions {
            access_key_id: "AKID",
            secret_access_key: "secret",
            session_token: None,
            expiration: Some(UNIX_EPOCH - Duration::from_secs(10)),
        };
        let credentials = Credentials::new(&Allocator::default(), options).unwrap();
        assert_eq!(credentials.expiration(), Some(UNIX_EPOCH));
    }

    #[test]
    fn get_credentials_from_static_provider() {
        let options = CredentialsProviderStaticOptions {
            access_key_id: "AKID",
            secret_access_key: "secret",
            session_token: Some("token"),
        };
        let provider = CredentialsProvider::new_static(&Allocator::default(), options).unwrap();
        let credentials = block_on(provider.get_credentials()).unwrap();
        assert_eq!(credentials.access_key_id(), "AKID");
        assert_eq!(credentials.secret_access_key(), "secret");
        assert_eq!(credentials.session_token(), Some("token"));
        assert_eq!(credentials.expiration(), None);
    }

    #[test]
    fn delegate_completes_synchronously() {
        let expiration = UNIX_EPOCH + Duration::from_secs(2_000_000_000);
        let source = SyncSource {
            expiration: Some(expiration),
        };
        let provider = CredentialsProvider::new_delegate(&Allocator::default(), source).unwrap();
        let credentials = block_on(provider.get_credentials()).unwrap();
        assert_eq!(credentials.access_key_id(), "AKID");
        assert_eq!(credentials.secret_access_key(), "SECRET");
        assert_eq!(credentials.session_token(), Some("TOKEN"));
        assert_eq!(credentials.expiration(), Some(expiration));
    }

    #[test]
    fn delegate_completes_from_another_thread() {
        let delegate = ChannelDelegate::new(&Allocator::default());
        let future = delegate.provider.get_credentials();
        let callback = delegate.next_callback();
        thread::spawn(move || callback.complete(credentials("AKID", None)))
            .join()
            .unwrap();
        assert_eq!(block_on(future).unwrap().access_key_id(), "AKID");
    }

    #[test]
    fn dropped_callback_fails_the_query() {
        let provider = CredentialsProvider::new_delegate(&Allocator::default(), FailingSource).unwrap();
        assert_eq!(block_on(provider.get_credentials()).unwrap_err(), delegate_failure());

        // Also when the callback is dropped later, on another thread.
        let delegate = ChannelDelegate::new(&Allocator::default());
        let future = delegate.provider.get_credentials();
        let callback = delegate.next_callback();
        thread::spawn(move || drop(callback)).join().unwrap();
        assert_eq!(block_on(future).unwrap_err(), delegate_failure());
    }

    #[test]
    fn source_dropped_with_last_reference() {
        let ChannelDelegate {
            provider,
            callbacks,
            dropped,
        } = ChannelDelegate::new(&Allocator::default());

        // A clone holds a reference to the provider.
        let clone = provider.clone();
        drop(provider);
        assert_eq!(dropped.load(Ordering::SeqCst), 0);

        // The last reference drops the source, even with a query in flight (CRT callers that
        // need the provider until a query completes hold their own reference, as the signer
        // does). The query can still be completed.
        let future = clone.get_credentials();
        let callback = callbacks.recv_timeout(TIMEOUT).unwrap();
        drop(clone);
        assert_eq!(dropped.load(Ordering::SeqCst), 1);
        thread::spawn(move || callback.complete(credentials("AKID", None)))
            .join()
            .unwrap();
        assert_eq!(block_on(future).unwrap().access_key_id(), "AKID");
    }

    #[test]
    fn cloned_credentials_share_the_fields() {
        let expiration = UNIX_EPOCH + Duration::from_secs(2_000_000_000);
        let credentials = credentials("AKID", Some(expiration));
        let clone = credentials.clone();
        drop(credentials);
        assert_eq!(clone.access_key_id(), "AKID");
        assert_eq!(clone.secret_access_key(), "SECRET");
        assert_eq!(clone.session_token(), Some("TOKEN"));
        assert_eq!(clone.expiration(), Some(expiration));
    }

    #[test]
    fn source_dropped_without_queries() {
        let delegate = ChannelDelegate::new(&Allocator::default());
        let dropped = delegate.dropped.clone();
        drop(delegate);
        assert_eq!(dropped.load(Ordering::SeqCst), 1);
    }

    #[test]
    fn credentials_with_invalid_utf8_are_rejected() {
        let allocator = Allocator::default();
        let invalid = [b'A', 0xff];
        // SAFETY: the options only need to be valid for the duration of the call, and we release
        // the reference we get back.
        unsafe {
            let options = aws_credentials_options {
                access_key_id_cursor: invalid.as_aws_byte_cursor(),
                secret_access_key_cursor: "SECRET".as_aws_byte_cursor(),
                ..Default::default()
            };
            let raw = aws_credentials_new_with_options(allocator.inner.as_ptr(), &options)
                .ok_or_last_error()
                .unwrap();
            let error = Credentials::from_borrowed(raw).unwrap_err();
            assert_eq!(error.raw_error(), aws_common_error::AWS_ERROR_INVALID_UTF8 as i32);
            aws_credentials_release(raw.as_ptr());
        }
    }

    /// A CRT caller can release its last reference to the provider when the query completes,
    /// which can happen on another thread while the source is still in `get_credentials`. The
    /// source must stay alive until that call returns.
    #[test]
    fn provider_destroyed_during_get_credentials() {
        struct CompleteElsewhere {
            dropped: Arc<AtomicUsize>,
            dropped_during_call: Arc<AtomicUsize>,
        }

        impl CredentialsSource for CompleteElsewhere {
            fn get_credentials(&self, callback: CredentialsCallback) {
                // Complete the query on another thread, which destroys the provider, and wait
                // for it before touching `self` again.
                thread::spawn(move || callback.complete(credentials("AKID", None)))
                    .join()
                    .unwrap();
                // Record rather than assert: a panic here would abort the process.
                let dropped = self.dropped.load(Ordering::SeqCst);
                self.dropped_during_call.store(dropped, Ordering::SeqCst);
            }
        }

        impl Drop for CompleteElsewhere {
            fn drop(&mut self) {
                self.dropped.fetch_add(1, Ordering::SeqCst);
            }
        }

        /// Releases the provider reference passed as user data, as the CRT signer does.
        unsafe extern "C" fn release_provider(
            _credentials: *mut aws_credentials,
            _error_code: libc::c_int,
            user_data: *mut libc::c_void,
        ) {
            // SAFETY: `user_data` is the provider reference leaked by the test.
            unsafe { aws_credentials_provider_release(user_data as *mut aws_credentials_provider) };
        }

        let dropped = Arc::new(AtomicUsize::new(0));
        let dropped_during_call = Arc::new(AtomicUsize::new(usize::MAX));
        let source = CompleteElsewhere {
            dropped: dropped.clone(),
            dropped_during_call: dropped_during_call.clone(),
        };
        let provider = CredentialsProvider::new_delegate(&Allocator::default(), source).unwrap();
        // Hand the only reference to the query.
        let raw = std::mem::ManuallyDrop::new(provider).inner.as_ptr();
        // SAFETY: the query owns the reference to `raw`, and releases it when it completes.
        let result = unsafe { aws_credentials_provider_get_credentials(raw, Some(release_provider), raw as *mut _) };
        assert_eq!(result, AWS_OP_SUCCESS);
        assert_eq!(
            dropped_during_call.load(Ordering::SeqCst),
            0,
            "source alive during the call"
        );
        assert_eq!(
            dropped.load(Ordering::SeqCst),
            1,
            "source dropped when the call returns"
        );
    }

    // The traced allocator is process-wide, so run the leak check in its own process.
    rusty_fork::rusty_fork_test! {
        #![rusty_fork(timeout_ms = 30_000)]

        #[test]
        fn no_leaks() {
            let allocator = Allocator::default().traced();
            let baseline = allocator.tracer_count();
            {
                let delegate = ChannelDelegate::new(&allocator);

                // A failed query, a successful one with cloned credentials, and a query whose
                // future is dropped before it completes.
                let future = delegate.provider.get_credentials();
                drop(delegate.next_callback());
                block_on(future).unwrap_err();
                let future = delegate.provider.get_credentials();
                let credentials = credentials_with(&allocator, "AKID", None);
                delegate.next_callback().complete(credentials.clone());
                let received = block_on(future).unwrap();

                let dropped_future = delegate.provider.get_credentials();
                let callback = delegate.next_callback();
                drop(dropped_future);
                callback.complete(credentials.clone());

                assert!(allocator.tracer_count() > baseline);
                drop(credentials);
                drop(received);
                let dropped = delegate.dropped.clone();
                drop(delegate);
                assert_eq!(dropped.load(Ordering::SeqCst), 1, "the source is dropped");
            }
            if allocator.tracer_count() != baseline {
                allocator.tracer_dump();
            }
            assert_eq!(allocator.tracer_count(), baseline, "all CRT allocations are freed");
            // SAFETY: nothing allocated with the tracer is still alive, and it isn't used again.
            // Destroying it keeps the leak sanitizer quiet.
            unsafe { mountpoint_s3_crt_sys::aws_mem_tracer_destroy(allocator.inner.as_ptr()) };
        }
    }
}

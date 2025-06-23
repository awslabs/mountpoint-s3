//! AWS credentials providers

use mountpoint_s3_crt_sys::{
    aws_credentials, aws_credentials_new, aws_credentials_provider, aws_credentials_provider_acquire,
    aws_credentials_provider_cached_options, aws_credentials_provider_chain_default_options,
    aws_credentials_provider_delegate_options, aws_credentials_provider_new_anonymous,
    aws_credentials_provider_new_cached, aws_credentials_provider_new_chain_default,
    aws_credentials_provider_new_delegate, aws_credentials_provider_new_profile, aws_credentials_provider_new_static,
    aws_credentials_provider_profile_options, aws_credentials_provider_release,
    aws_credentials_provider_static_options, aws_credentials_release, aws_on_get_credentials_callback_fn, AWS_OP_ERR,
    AWS_OP_SUCCESS,
};
use std::ffi::OsStr;
use std::fmt::Debug;
use std::future::Future;
use std::ptr::NonNull;
use std::sync::Arc;
use std::time::{SystemTime, UNIX_EPOCH};

use crate::auth::auth_library_init;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::io::event_loop::EventLoopGroup;
use crate::io::futures::FutureSpawner;
use crate::{CrtError as _, ToAwsByteCursor};

/// Options for creating a default credentials provider
#[derive(Debug)]
pub struct CredentialsProviderChainDefaultOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
}

/// Options for creating a profile credentials provider
#[derive(Debug)]
pub struct CredentialsProviderProfileOptions<'a> {
    /// The client bootstrap this credentials provider should use to setup channels
    pub bootstrap: &'a mut ClientBootstrap,
    /// The name of profile to use.
    pub profile_name_override: &'a str,
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

/// Options for creating an owned set of credentials
pub struct Credentials {
    credentials: *mut aws_credentials,
    expiration: u64,
}

impl Debug for Credentials {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Credentials")
            .field("access_key_id", &"** redacted **")
            .field("secret_access_key", &"** redacted **")
            .field("expiration", &self.expiration)
            .finish()
    }
}

impl Credentials {
    /// Builds some credentials from access_key, secret_access_key, and an optional session token + expiration.
    pub fn build_credentials<S: AsRef<OsStr>>(
        access_key_id: S,
        secret_access_key: S,
        session_token: Option<S>,
        expiration: Option<SystemTime>,
    ) -> Credentials {
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
            Credentials {
                credentials: aws_credentials,
                expiration,
            }
        }
    }

    fn as_ptr(&self) -> &*mut aws_credentials {
        &self.credentials
    }
}

impl Drop for Credentials {
    fn drop(&mut self) {
        // SAFETY: There's at least one reference until here
        unsafe {
            aws_credentials_release(self.credentials);
        }
    }
}

type OnGetCredentialsCallbackFn =
    unsafe extern "C" fn(credentials: *mut aws_credentials, error_code: libc::c_int, user_data: *mut libc::c_void);

struct DelegateOnGetCredentialsReplier {
    callback: OnGetCredentialsCallbackFn,
    user_data: *mut libc::c_void,
}

impl DelegateOnGetCredentialsReplier {
    fn reply_with_credentials(&self, credentials: Option<Credentials>) {
        let (aws_creds, error_code) = match &credentials {
            Some(credentials) => (credentials.as_ptr(), AWS_OP_SUCCESS),
            None => (&std::ptr::null_mut(), AWS_OP_ERR),
        };
        // SAFETY: user_data is passed through without modification, and is thread-safe.
        // aws_creds is a raw pointer to the credentials, and is only used whilst credentials lives.
        // credentials is reference counted, and knows how to decrement a reference when it's dropped.
        // `self.callback` can take ownership if it wants by incrementing the reference counter.
        unsafe {
            (self.callback)(*aws_creds, error_code, self.user_data);
        }
        drop(credentials);
    }
}

// SAFETY: Whilst the CRT doesn't explicitly say `callback_user_data` and `callback` are usable between threads,
// the sts provider (and others) use the `user_data` in other threads via an event loop.
unsafe impl Send for DelegateOnGetCredentialsReplier {}

type OnGetCredentials = Box<dyn Fn(DelegateOnGetCredentialsReplier) + Send + Sync + 'static>;
struct OnDelegateCallback(OnGetCredentials);

impl Debug for OnDelegateCallback {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("OnDelegateCallback").finish()
    }
}

/// A credentials provider is an object that has an asynchronous query function for retrieving AWS
/// credentials
#[derive(Debug)]
pub struct CredentialsProvider {
    pub(crate) inner: NonNull<aws_credentials_provider>,
    on_delegate_callback: Option<Arc<OnDelegateCallback>>,
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
            ..Default::default()
        };

        // SAFETY: aws_credentials_provider_new_chain_default makes a copy of the bootstrap options.
        let inner = unsafe {
            aws_credentials_provider_new_chain_default(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
    }

    /// Creates the anonymous credential provider.
    /// Anonynous credentials provider gives you anonymous credentials which can be used to skip the signing process.
    pub fn new_anonymous(allocator: &Allocator) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: allocator is a valid aws_allocator and shutdown_options is optional
        let inner = unsafe {
            aws_credentials_provider_new_anonymous(allocator.inner.as_ptr(), std::ptr::null_mut()).ok_or_last_error()?
        };

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
    }

    /// Creates the profile credential provider.
    pub fn new_profile(allocator: &Allocator, options: CredentialsProviderProfileOptions) -> Result<Self, Error> {
        auth_library_init(allocator);

        // SAFETY: aws_credentials_provider_new_profile makes a copy of bootstrap
        // and contents of profile_name_override.
        // SAFETY: aws_credentials_provider_new_cached increments the reference counter of
        // profile_provider.
        let inner = unsafe {
            let inner_options = aws_credentials_provider_profile_options {
                bootstrap: options.bootstrap.inner.as_ptr(),
                profile_name_override: options.profile_name_override.as_aws_byte_cursor(),
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

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
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

        Ok(Self {
            inner,
            on_delegate_callback: None,
        })
    }

    /// Creates a delegate credential provider that always returns the given credentials
    pub fn new_delegate<F, Fut>(
        allocator: &Allocator,
        event_loop_group: EventLoopGroup,
        callback: F,
    ) -> Result<Self, Error>
    where
        F: Fn() -> Fut + Send + Sync + 'static,
        Fut: Future<Output = Option<Credentials>> + Send,
    {
        auth_library_init(allocator);
        let user_callback_arc = Arc::new(callback);
        let future_spawner = move |credentials_replier: DelegateOnGetCredentialsReplier| {
            let user_callback_inner = user_callback_arc.clone();
            event_loop_group.spawn_future(async move {
                let credentials = user_callback_inner().await;
                credentials_replier.reply_with_credentials(credentials);
            });
        };

        let callback_wrapper = Arc::new(OnDelegateCallback(Box::new(future_spawner)));
        let callback_raw = Arc::as_ptr(&callback_wrapper);
        let inner_options = aws_credentials_provider_delegate_options {
            get_credentials: Some(delegate_callback),
            delegate_user_data: callback_raw as *mut libc::c_void,
            ..Default::default()
        };

        // SAFETY: aws_credentials_provider_new_delegate keeps pointers to `delegate_callback` and `callback_raw`.
        // `delegate_callback` is a constant pointer, and callback_raw is kept alive through ownership of callback_wrapper in Self
        let inner = unsafe {
            aws_credentials_provider_new_delegate(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()?
        };

        Ok(Self {
            inner,
            on_delegate_callback: Some(callback_wrapper),
        })
    }
}

impl Clone for CredentialsProvider {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_credentials_provider` for as long as `self` exists
        unsafe {
            aws_credentials_provider_acquire(self.inner.as_ptr());
        }

        Self {
            inner: self.inner,
            on_delegate_callback: self.on_delegate_callback.clone(),
        }
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

unsafe extern "C" fn delegate_callback(
    delegate_user_data: *mut libc::c_void,
    callback: aws_on_get_credentials_callback_fn,
    callback_user_data: *mut libc::c_void,
) -> i32 {
    let on_delegate_cb = delegate_user_data as *mut OnDelegateCallback;

    match callback {
        Some(callback) => {
            let on_get_credentials_replier = DelegateOnGetCredentialsReplier {
                callback,
                user_data: callback_user_data,
            };
            (*on_delegate_cb).0(on_get_credentials_replier);
            AWS_OP_SUCCESS
        }
        None => AWS_OP_ERR,
    }
}

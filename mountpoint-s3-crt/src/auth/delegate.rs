use crate::CrtError;
use crate::auth::crt_credentials::CrtCredentials;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use mountpoint_s3_crt_sys::{
    AWS_OP_ERR, AWS_OP_SUCCESS, aws_credentials, aws_credentials_provider, aws_credentials_provider_delegate_options,
    aws_credentials_provider_new_delegate, aws_on_get_credentials_callback_fn,
};
use std::fmt::Debug;
use std::ptr::NonNull;
use std::sync::Arc;

type OnGetCredentialsCallbackFn =
    unsafe extern "C" fn(credentials: *mut aws_credentials, error_code: libc::c_int, user_data: *mut libc::c_void);

pub struct OnGetCredentialsCallbackResponder {
    callback: OnGetCredentialsCallbackFn,
    user_data: *mut libc::c_void,
}

impl OnGetCredentialsCallbackResponder {
    pub fn reply_with_credentials(&self, credentials: Option<CrtCredentials>) {
        // SAFETY: credentials.as_ptr is dropped before credentials.
        let (aws_creds, error_code) = unsafe {
            match &credentials {
                Some(credentials) => (credentials.as_ptr(), AWS_OP_SUCCESS),
                None => (std::ptr::null_mut(), AWS_OP_ERR),
            }
        };
        // SAFETY: user_data is passed through without modification, and is thread-safe.
        // aws_creds is a raw pointer to the credentials, and is only used whilst credentials lives.
        // `credentials` is reference counted, and knows how to decrement a reference when it's dropped.
        // `self.callback` can take ownership if it wants by incrementing the reference counter.
        unsafe {
            (self.callback)(aws_creds, error_code, self.user_data);
        }
        drop(credentials);
    }
}

// SAFETY: Whilst the CRT doesn't explicitly say `callback_user_data` and `callback` are usable between threads,
// the sts provider (and others) use the `user_data` in other threads via an event loop.
unsafe impl Send for OnGetCredentialsCallbackResponder {}

impl Debug for OnGetCredentialsCallbackResponder {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("OnGetCredentialsCallbackResponder").finish()
    }
}

pub(crate) struct DelegateProvider {
    delegate: Box<dyn Fn(OnGetCredentialsCallbackResponder) + Send + Sync + 'static>,
}

impl Debug for DelegateProvider {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("DelegateProvider").finish()
    }
}

impl DelegateProvider {
    pub fn new<F>(
        allocator: &Allocator,
        delegate: F,
    ) -> Result<(NonNull<aws_credentials_provider>, Arc<DelegateProvider>), Error>
    where
        F: Fn(OnGetCredentialsCallbackResponder) + Send + Sync + 'static,
    {
        let delegate_callback_provider = Arc::new(DelegateProvider {
            delegate: Box::new(delegate),
        });

        let callback_raw = Arc::as_ptr(&delegate_callback_provider);
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
        Ok((inner, delegate_callback_provider))
    }

    fn callback(&self, responder: OnGetCredentialsCallbackResponder) {
        (self.delegate)(responder);
    }
}

/// The callback registered as our delegate provider. It is able to use the callback of a given `DelegateCallbackProvider` pointer to
unsafe extern "C" fn delegate_callback(
    delegate_user_data: *mut libc::c_void,
    callback: aws_on_get_credentials_callback_fn,
    callback_user_data: *mut libc::c_void,
) -> i32 {
    let on_delegate_cb = delegate_user_data as *mut DelegateProvider;

    match callback {
        Some(callback) => {
            let on_get_credentials_replier = OnGetCredentialsCallbackResponder {
                callback,
                user_data: callback_user_data,
            };
            if on_delegate_cb.is_null() {
                return AWS_OP_ERR;
            }
            // SAFETY: We've just checked it's not null
            unsafe {
                (*on_delegate_cb).callback(on_get_credentials_replier);
            }
            AWS_OP_SUCCESS
        }
        None => AWS_OP_ERR,
    }
}

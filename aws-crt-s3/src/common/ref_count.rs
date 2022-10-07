//! Functions related to reference counts and shutdown callbacks.

use aws_crt_s3_sys::*;

struct ShutdownCallbackUserData {
    callback: Box<dyn FnOnce()>,
}

/// Create a new aws_shutdown_callback_options struct from a rust-safe callback. Leaks memory if
/// the callback is never actually performed. However, this doesn't violate safety.
pub(crate) fn new_shutdown_callback_options(callback: impl FnOnce() + Send + 'static) -> aws_shutdown_callback_options {
    let user_data = ShutdownCallbackUserData {
        callback: Box::new(callback),
    };

    let user_data = Box::leak(Box::new(user_data));

    aws_shutdown_callback_options {
        shutdown_callback_fn: Some(shutdown_callback),
        shutdown_callback_user_data: user_data as *mut ShutdownCallbackUserData as *mut libc::c_void,
    }
}

/// Abort the shutdown callback and free the data associated with the callback, without calling it.
///
/// SAFETY: Only call on the result of new_shutdown_callback_options. Also, this frees the callback
/// data structure so it's only safe to call if you *know* the CRT won't call shutdown_callback, for
/// example, if the function you pass the options to fails.
pub(crate) unsafe fn abort_shutdown_callback(callback: aws_shutdown_callback_options) {
    assert!(callback.shutdown_callback_fn == Some(shutdown_callback));
    let ptr = callback.shutdown_callback_user_data as *mut ShutdownCallbackUserData;
    let user_data: Box<ShutdownCallbackUserData> = Box::from_raw(ptr);
    std::mem::drop(user_data);
}

/// SAFETY: not safe to call directly, only let the CRT call this function as a callback.
unsafe extern "C" fn shutdown_callback(user_data: *mut libc::c_void) {
    assert!(!user_data.is_null());
    let user_data: Box<ShutdownCallbackUserData> = Box::from_raw(user_data as *mut ShutdownCallbackUserData);

    (user_data.callback)();
}

#[cfg(test)]
mod test {
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::sync::Arc;

    use super::*;

    /// Detect when a value is dropped.
    struct DropSignal(Arc<AtomicBool>);

    impl Drop for DropSignal {
        fn drop(&mut self) {
            self.0.store(true, Ordering::SeqCst);
        }
    }

    /// Test that calling abort actually drops the closure.
    #[test]
    fn test_abort_shutdown_callback() {
        let dropped = Arc::new(AtomicBool::new(false));
        let _signal = DropSignal(dropped.clone());

        #[allow(unreachable_code)]
        let options = new_shutdown_callback_options(|| {
            panic!("Should never be called");
            // This is never reached because the callback never happens. But this forces _signal
            // to be moved into the closure, and when the closure is dropped so will _signal.
            std::mem::drop(_signal);
        });

        // SAFETY: we never scheduled the `options` to run as a callback with the CRT, so it's safe
        // to abort it (which will free the memory associated with the callback).
        unsafe {
            abort_shutdown_callback(options);
        }

        assert!(dropped.load(Ordering::SeqCst));
    }
}

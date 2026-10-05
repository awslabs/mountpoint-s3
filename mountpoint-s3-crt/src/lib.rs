#![deny(
    missing_debug_implementations,
    missing_docs,
    clippy::undocumented_unsafe_blocks,
    rustdoc::bare_urls,
    rustdoc::broken_intra_doc_links
)]

//! Rust bindings for the AWS Common Runtime.

use mountpoint_s3_crt_sys::*;

pub mod auth;
pub mod checksums;
pub mod common;
pub mod http;
pub mod io;
pub mod s3;

use std::ptr::NonNull;
use std::sync::Once;
use std::time::Duration;
use std::{ffi::OsStr, os::unix::prelude::OsStrExt};

use crate::common::error::Error;

static CRT_CLEANUP_REGISTER: Once = Once::new();

/// Register a process-exit handler that cleans up every CRT library.
///
/// CRT library init is a demand-driven, boolean-guarded singleton with no automatic cleanup. Cleanup
/// is what joins the CRT's managed worker threads; without it, a worker thread can still be running
/// native code when the process runs its C runtime destructors, which aborts the process under the
/// aws-lc FIPS RNG. Cleanup is best-effort only (see [crt_cleanup_at_exit]). Called from every
/// `*_library_init` so we register regardless of entry point.
fn register_crt_cleanup_at_exit() {
    CRT_CLEANUP_REGISTER.call_once(|| {
        // SAFETY: `crt_cleanup_at_exit` is a `'static` `extern "C"` function. Called at most once,
        // and only from an init path, so the CRT libraries are initialized before it could run.
        unsafe {
            libc::atexit(crt_cleanup_at_exit);
        }
    });
}

/// How long [crt_cleanup_at_exit] waits for CRT worker threads to exit before skipping cleanup.
const CRT_CLEANUP_JOIN_TIMEOUT: Duration = Duration::from_secs(1);

/// Runs at process exit to tear down every CRT library that was initialized.
extern "C" fn crt_cleanup_at_exit() {
    // Join the CRT's managed worker threads before tearing anything down. They only exit once the
    // clients that own them are dropped, so a client that is still alive at exit (e.g. held in a
    // `static`, by a thread that is never joined, or across `process::exit`) keeps them running
    // forever. The join also never finishes if `exit` is called from a CRT thread (e.g. in a client
    // callback), because `atexit` handlers run on that thread and the join would wait for it too.
    // Bound the wait, and if threads are still running when it times out, skip cleanup: waiting
    // longer can't help, and tearing the libraries down under running threads risks a crash. Each
    // `aws_*_library_clean_up` below starts with its own join, which ignores the result; with every
    // thread joined here, those return immediately.
    //
    // SAFETY: both calls take no pointers and touch only process-global CRT thread state.
    unsafe {
        aws_thread_set_managed_join_timeout_ns(CRT_CLEANUP_JOIN_TIMEOUT.as_nanos() as u64);
        if aws_thread_join_all_managed() != AWS_OP_SUCCESS {
            return;
        }
    }

    // Each `aws_*_library_clean_up` is self-guarded and idempotent, so the full sequence is safe
    // regardless of which libraries were initialized; top-down order lets higher layers release
    // their references before lower layers tear down.
    //
    // SAFETY: each cleanup is safe whether or not its library was initialized (see above); they take
    // no arguments and touch only process-global CRT state.
    unsafe {
        aws_s3_library_clean_up();
        aws_auth_library_clean_up();
        aws_http_library_clean_up();
        aws_io_library_clean_up();
        aws_common_library_clean_up();
    }
}

pub(crate) mod private {
    /// Seals a trait to prevent clients from implementing it for their own types, since this trait
    /// is only accessible to this crate.
    pub trait Sealed {}
}

pub(crate) trait ToAwsByteCursor {
    /// SAFETY: the user *must not* mutate the bytes pointed at by this cursor
    /// Also, the user must be careful that the aws_byte_cursor does not outlive self. When passing
    /// the aws_byte_cursor to the CRT, make sure that self will live as long as the CRT might
    /// continue to use that buffer.
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor;
}

impl<S: AsRef<OsStr>> ToAwsByteCursor for S {
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        // SAFETY: See comment on [ToAwsByteCursor::as_aws_byte_cursor].
        unsafe { self.as_ref().as_bytes().as_aws_byte_cursor() }
    }
}

impl ToAwsByteCursor for [u8] {
    /// SAFETY: See comment on [ToAwsByteCursor::as_aws_byte_cursor].
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        aws_byte_cursor {
            ptr: self.as_ptr() as *mut _,
            len: self.len(),
        }
    }
}

/// View an aws_byte_cursor as a slice of bytes.
/// SAFETY: This function is unsafe because it makes a reference from the raw pointers
/// inside the aws_byte_cursor. The caller must ensure that the returned slice does not outlive
/// the bytes pointed to by the cursor, for example, by copying the bytes out.
pub(crate) unsafe fn aws_byte_cursor_as_slice<'a>(cursor: &aws_byte_cursor) -> &'a [u8] {
    if cursor.ptr.is_null() {
        // If the pointer is null, the length must be 0 and we return an empty slice
        assert_eq!(cursor.len, 0, "length must be 0 for null cursors");
        &[]
    } else {
        // SAFETY: from_raw_parts can't be used on null pointers, even if the length is 0. So we handle
        // that as a special case above.
        unsafe { std::slice::from_raw_parts(cursor.ptr, cursor.len) }
    }
}

/// Translate the common "return a null pointer on failure" pattern into Results that pull the last
/// error from the CRT.
pub(crate) trait CrtError: Sized {
    type Return;

    /// # Safety
    /// This must only be used immediately on a pointer returned from the CRT, with no other
    /// CRT code being run beforehand on the same thread, or else it will return the wrong error.
    /// In particular, there should not be any `await` point between the return from the CRT
    /// function and the invocation of this method.
    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error>;
}

impl<T> CrtError for *const T {
    type Return = NonNull<T>;

    /// # Safety
    /// This reads a thread local, so the caller must ensure no other CRT code has run on
    /// the same thread since the error was last set, otherwise the result will be the wrong error.
    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error> {
        NonNull::new(self as *mut T).ok_or_else(|| {
            // SAFETY: Must be guaranteed by the caller.
            unsafe { Error::last_error() }
        })
    }
}

impl<T> CrtError for *mut T {
    type Return = NonNull<T>;

    /// # Safety
    /// This reads a thread local, so the caller must ensure no other CRT code has run on
    /// the same thread since the error was last set, otherwise the result will be the wrong error.
    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error> {
        NonNull::new(self).ok_or_else(|| {
            // SAFETY: Must be guaranteed by the caller.
            unsafe { Error::last_error() }
        })
    }
}

/// Some CRT functions return an int that is either AWS_OP_SUCCESS or AWS_OP_ERR, and the caller
/// should use last_error to find out what happened. This simplifies that pattern.
impl CrtError for i32 {
    type Return = ();

    /// # Safety
    /// This reads a thread local, so the caller must ensure no other CRT code has run on
    /// the same thread since the error was last set, otherwise the result will be the wrong error.
    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error> {
        match self {
            AWS_OP_SUCCESS => Ok(()),
            // SAFETY: Must be guaranteed by the caller.
            AWS_OP_ERR => Err(unsafe { Error::last_error() }),
            // This case shouldn't happen if used correctly since we should use this on functions
            // that only return SUCCESS or ERR. But if it does happen, we can attempt to convert the
            // error code directly, which may or may not work (but at least the Error won't be swallowed).
            n => Err(common::error::Error::from(n)),
        }
    }
}

#[cfg(test)]
mod test {
    use std::sync::OnceLock;

    use futures::task::SpawnExt;

    use crate::common::allocator::Allocator;
    use crate::common::rust_log_adapter::RustLogAdapter;
    use crate::io::event_loop::EventLoopGroup;

    /// Enable tracing when running unit tests.
    #[ctor::ctor(unsafe)]
    fn init_tracing_subscriber() {
        RustLogAdapter::try_init().expect("unable to install CRT log adapter");
        tracing_subscriber::fmt::init();
    }

    #[ctor::ctor(unsafe)]
    fn init_crt() {
        crate::io::io_library_init(&crate::common::allocator::Allocator::default());
        crate::s3::s3_library_init(&crate::common::allocator::Allocator::default());
    }

    /// Validate that ASan is working across both Rust and the CRT by intentionally provoking a
    /// use-after-free that crosses the boundary: the allocation is created and freed by Rust, but
    /// accessed by the CRT. Ignored by default, and run only by ASan in CI.
    #[test]
    #[ignore]
    fn test_asan_working() {
        use mountpoint_s3_crt_sys::{aws_byte_cursor, aws_byte_cursor_is_valid};

        let heap_cursor = Box::new(aws_byte_cursor {
            ptr: std::ptr::null_mut(),
            len: 0,
        });
        let heap_ptr = &*heap_cursor as *const aws_byte_cursor as *mut _;
        drop(heap_cursor);

        // SAFETY: This code isn't safe; it's supposed to test that ASan can catch use-after-free
        // bugs. `heap_ptr` points to a freed allocation, so this causes a use-after-free that ASan
        // should catch.
        let _ = unsafe { aws_byte_cursor_is_valid(heap_ptr) };
    }

    // rusty_fork runs each test body in a child process that calls `process::exit` once the body
    // returns, and fails the test if the child doesn't exit within the timeout.
    rusty_fork::rusty_fork_test! {
        #![rusty_fork(timeout_ms = 10_000)]

        /// Exiting while CRT threads are still running must not hang in [crate::crt_cleanup_at_exit].
        #[test]
        fn exit_with_live_event_loop_group() {
            // Rust never drops `static`s, so the group's threads are still running at exit. Being
            // reachable from a `static` also keeps LeakSanitizer from reporting the group.
            static EVENT_LOOP_GROUP: OnceLock<EventLoopGroup> = OnceLock::new();
            let event_loop_group = EventLoopGroup::new_default(&Allocator::default(), None, || {}).unwrap();
            assert!(EVENT_LOOP_GROUP.set(event_loop_group).is_ok());
        }

        /// Exiting from a CRT thread must not hang either, although the join can never finish there.
        #[test]
        fn exit_from_event_loop_thread() {
            let event_loop_group = EventLoopGroup::new_default(&Allocator::default(), None, || {}).unwrap();
            event_loop_group.spawn(async { std::process::exit(0); }).unwrap();
            loop {
                std::thread::park();
            }
        }
    }
}

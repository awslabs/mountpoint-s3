use aws_crt_s3_sys::*;
use std::ptr::NonNull;

pub struct Allocator {
    // TODO: make only visible to this crate
    pub inner: NonNull<aws_allocator>,
}

impl Allocator {
    /// The default allocator is a singleton, so this always returns the same allocator
    pub fn default() -> Self {
        let inner = unsafe { aws_default_allocator() };

        let inner = NonNull::new(inner).expect("CRT default allocator is never null");

        Self { inner }
    }
}

impl Default for Allocator {
    fn default() -> Self {
        Self::default()
    }
}

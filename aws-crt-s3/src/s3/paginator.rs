//! Utilities for handling paginated requests to the S3 API

use aws_crt_s3_sys::*;
use std::ptr::NonNull;

/// A [Paginator] automatically handles paginated requests to the S3 API, such as ListObjectsV2
#[derive(Debug)]
pub struct Paginator {
    /// A pointer to the underlying `aws_s3_paginator`
    pub(super) inner: NonNull<aws_s3_paginator>,
}

impl Paginator {
    /// Returns true if the paginator has more results to fetch
    pub fn has_more_results(&self) -> bool {
        unsafe { aws_s3_paginator_has_more_results(self.inner.as_ptr()) }
    }
}

impl Drop for Paginator {
    fn drop(&mut self) {
        unsafe { aws_s3_paginator_release(self.inner.as_ptr()) }
    }
}

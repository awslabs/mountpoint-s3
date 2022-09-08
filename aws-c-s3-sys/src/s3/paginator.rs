use crate::generated::*;
use std::ptr::NonNull;

pub struct Paginator {
    inner: NonNull<aws_s3_paginator>,
}

impl Paginator {
    pub fn has_more_results(&self) -> bool {
        unsafe { aws_s3_paginator_has_more_results(self.inner.as_ptr()) }
    }
}

impl Drop for Paginator {
    fn drop(&mut self) {
        unsafe { aws_s3_paginator_release(self.inner.as_ptr()) }
    }
}

use crate::generated::*;
use std::ptr::NonNull;

pub struct Paginator {
    inner: NonNull<aws_s3_paginator>,
}

impl Drop for Paginator {
    fn drop(&mut self) {
        unsafe { aws_s3_paginator_release(self.inner.as_ptr()) }
    }
}

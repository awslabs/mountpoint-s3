use crate::generated::*;
use std::ptr::NonNull;

pub struct Allocator {
    // TODO: make only visible to this crate
    pub inner: NonNull<aws_allocator>,
}

impl Allocator {
    pub fn new_default() -> Option<Self> {
        let inner = unsafe { aws_default_allocator() };

        Some(Self {
            inner: NonNull::new(inner)?,
        })
    }
}

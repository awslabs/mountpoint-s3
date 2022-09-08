use aws_c_s3_sys::*;

pub mod auth;
pub mod common;
pub mod io;
pub mod s3;

use std::{ffi::OsStr, os::unix::prelude::OsStrExt};

pub(crate) trait StringExt {
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor;
}

impl<S: AsRef<OsStr>> StringExt for S {
    /// Safety: the user *must not* mutate the bytes pointed at by this cursor
    /// Also, the user must be careful that the aws_byte_cursor does not outlive self.
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        aws_byte_cursor {
            ptr: self.as_ref().as_bytes().as_ptr() as *mut _,
            len: self.as_ref().as_bytes().len(),
        }
    }
}

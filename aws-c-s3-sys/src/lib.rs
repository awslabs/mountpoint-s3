#[allow(
    non_upper_case_globals,
    non_camel_case_types,
    non_snake_case,
    unused,
    rustdoc::broken_intra_doc_links,
    rustdoc::bare_urls
)]
pub mod generated {
    include!(concat!(env!("OUT_DIR"), "/bindings.rs"));
}

use std::{ffi::OsStr, os::unix::prelude::OsStrExt};

pub use generated::*;

mod logger;
pub use logger::init_logger_adapter;

pub mod auth;
pub mod common;
pub mod io;
pub mod s3;

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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn crc32_works() {
        let buf: &[u8] = b"123456789";
        let crc = unsafe { aws_checksums_crc32(buf.as_ptr(), buf.len() as i32, 0) };
        assert_eq!(crc, 0xcbf43926);
    }

    #[test]
    fn crc32c_works() {
        let buf: &[u8] = b"123456789";
        let crc = unsafe { aws_checksums_crc32c(buf.as_ptr(), buf.len() as i32, 0) };
        assert_eq!(crc, 0xe3069283);
    }
}

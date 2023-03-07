//! Methods for interacting with URIs

use std::ffi::OsStr;
use std::fmt::{self, Debug};
use std::os::unix::prelude::OsStrExt;

use mountpoint_s3_crt_sys::{
    aws_byte_cursor_from_buf, aws_uri, aws_uri_authority, aws_uri_clean_up, aws_uri_host_name, aws_uri_init_parse,
    aws_uri_path, aws_uri_query_string, aws_uri_scheme,
};

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::{aws_byte_cursor_as_slice, CrtError, StringExt};

/// The URI component of a request
pub struct Uri {
    pub(crate) inner: Box<aws_uri>,
}

impl Uri {
    /// Create a new URI by parsing the given string
    pub fn new_from_str(allocator: &mut Allocator, src: &OsStr) -> Result<Self, Error> {
        let mut inner: Box<aws_uri> = Default::default();
        // SAFETY: the parser copies the bytes it needs out of this string
        let uri_cursor = unsafe { src.as_aws_byte_cursor() };

        // SAFETY: `inner` will be initialized by this call, and the arguments are valid
        unsafe { aws_uri_init_parse(&mut *inner, allocator.inner.as_ptr(), &uri_cursor).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// Return the scheme portion of the URI ("http", "https", etc). If no scheme was present, returns
    /// an empty string.
    pub fn scheme(&self) -> &OsStr {
        // SAFETY: `inner` is a valid `aws_uri` since it's owned by this struct, and the lifetime of
        // the returned slice will be tied to &self.
        unsafe {
            let cursor = aws_uri_scheme(self.to_inner_ptr()).as_ref().unwrap();
            OsStr::from_bytes(aws_byte_cursor_as_slice(cursor))
        }
    }

    /// Return the authority portion of the URI (host[:port]). If no authority was present, returns
    /// an empty string.
    pub fn authority(&self) -> &OsStr {
        // SAFETY: `inner` is a valid `aws_uri` since it's owned by this struct, and the lifetime of
        // the returned slice will be tied to &self.
        unsafe {
            let cursor = aws_uri_authority(self.to_inner_ptr()).as_ref().unwrap();
            OsStr::from_bytes(aws_byte_cursor_as_slice(cursor))
        }
    }

    /// Return the host name portion of the URI. If no host name was present, returns an empty
    /// string.
    pub fn host_name(&self) -> &OsStr {
        // SAFETY: `inner` is a valid `aws_uri` since it's owned by this struct, and the lifetime of
        // the returned slice will be tied to &self.
        unsafe {
            let cursor = aws_uri_host_name(self.to_inner_ptr()).as_ref().unwrap();
            OsStr::from_bytes(aws_byte_cursor_as_slice(cursor))
        }
    }

    /// Return the path portion of the URI, including any leading "/".
    pub fn path(&self) -> &OsStr {
        // SAFETY: `inner` is a valid `aws_uri` since it's owned by this struct, and the lifetime of
        // the returned slice will be tied to &self.
        unsafe {
            let cursor = aws_uri_path(self.to_inner_ptr()).as_ref().unwrap();
            OsStr::from_bytes(aws_byte_cursor_as_slice(cursor))
        }
    }

    /// Return the query portion of the URI, without the leading "?". If no query string was
    /// present, returns an empty string.
    pub fn query_string(&self) -> &OsStr {
        // SAFETY: `inner` is a valid `aws_uri` since it's owned by this struct, and the lifetime of
        // the returned slice will be tied to &self.
        unsafe {
            let cursor = aws_uri_query_string(self.to_inner_ptr()).as_ref().unwrap();
            OsStr::from_bytes(aws_byte_cursor_as_slice(cursor))
        }
    }

    /// Return the entire URI as a string.
    pub fn as_os_str(&self) -> &OsStr {
        // SAFETY: `inner` is a valid `aws_uri` since it's owned by this struct, and the lifetime of
        // the returned slice will be tied to &self.
        unsafe {
            let uri_str = &self.to_inner_ptr().as_ref().unwrap().uri_str;
            OsStr::from_bytes(aws_byte_cursor_as_slice(&aws_byte_cursor_from_buf(uri_str)))
        }
    }

    /// Get out the inner pointer to the URI
    pub(crate) fn to_inner_ptr(&self) -> *const aws_uri {
        &*self.inner
    }
}

impl Clone for Uri {
    fn clone(&self) -> Self {
        // `aws_uri` has no convenient clone method, and it's self-referential, so the easiest way
        // to clone one is just to re-parse it from its string representation, even if that's a
        // little wasteful.
        // SAFETY: we know `self` is a valid URI, so we can dereference it and expect it to parse
        // correctly.
        unsafe {
            let inner = self.to_inner_ptr().as_ref().unwrap();
            let allocator = inner.allocator;
            let uri_cursor = aws_byte_cursor_from_buf(&inner.uri_str);
            let mut new_inner: Box<aws_uri> = Default::default();
            aws_uri_init_parse(&mut *new_inner, allocator, &uri_cursor)
                .ok_or_last_error()
                .expect("URI is already valid");
            Self { inner: new_inner }
        }
    }
}

impl Debug for Uri {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_tuple("Uri").field(&self.as_os_str()).finish()
    }
}

impl Drop for Uri {
    fn drop(&mut self) {
        // SAFETY: `aws_uri`s are not shared, so dropping means we won't access this again
        unsafe { aws_uri_clean_up(self.to_inner_ptr() as *mut _) }
    }
}

// SAFETY: URIs are immutable once created, and are plain data, so it's safe to move or share them
unsafe impl Send for Uri {}
// SAFETY: See above argument.
unsafe impl Sync for Uri {}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_roundtrip() {
        let uri_str = OsStr::from_bytes(
            "https://examplebucket.s3.us-west-2.amazonaws.com:443/directory/file.txt?a=b&c=d".as_bytes(),
        );
        let uri = Uri::new_from_str(&mut Allocator::default(), uri_str).unwrap();

        assert_eq!(uri.scheme(), OsStr::from_bytes("https".as_bytes()));
        assert_eq!(
            uri.authority(),
            OsStr::from_bytes("examplebucket.s3.us-west-2.amazonaws.com:443".as_bytes())
        );
        assert_eq!(
            uri.host_name(),
            OsStr::from_bytes("examplebucket.s3.us-west-2.amazonaws.com".as_bytes())
        );
        assert_eq!(uri.path(), OsStr::from_bytes("/directory/file.txt".as_bytes()));
        assert_eq!(uri.query_string(), OsStr::from_bytes("a=b&c=d".as_bytes()));

        assert_eq!(uri.as_os_str(), uri_str);

        #[allow(clippy::redundant_clone)]
        let clone = uri.clone();
        assert_eq!(clone.as_os_str(), uri_str);
    }
}

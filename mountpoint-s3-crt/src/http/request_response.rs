//! Management of HTTP streams

use std::ffi::{OsStr, OsString};
use std::mem::MaybeUninit;
use std::os::unix::prelude::OsStrExt;
use std::ptr::NonNull;

use mountpoint_s3_crt_sys::*;
use thiserror::Error;

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::http::http_library_init;
use crate::io::stream::InputStream;
use crate::{aws_byte_cursor_as_slice, CrtError, StringExt};

/// An HTTP header.
#[derive(Debug)]
pub struct Header<N: AsRef<OsStr>, V: AsRef<OsStr>> {
    inner: aws_http_header,
    name: N,
    value: V,
}

impl<N: AsRef<OsStr>, V: AsRef<OsStr>> Header<N, V> {
    /// Create a new header.
    pub fn new(name: N, value: V) -> Self {
        // SAFETY: this struct will own `name` and `value` so they will live as long as the byte
        // cursors do.
        let inner = unsafe {
            aws_http_header {
                name: name.as_ref().as_aws_byte_cursor(),
                value: value.as_ref().as_aws_byte_cursor(),
                ..Default::default()
            }
        };

        Self { name, value, inner }
    }

    /// Get the name of this header
    pub fn name(&self) -> &N {
        &self.name
    }

    /// Get the value of this header
    pub fn value(&self) -> &V {
        &self.value
    }
}

/// A block of HTTP headers that provides a nice API for getting/setting header names and values
#[derive(Debug)]
pub struct Headers {
    inner: NonNull<aws_http_headers>,
}

/// Safety: This is okay since we don't implement a shallow Clone for Headers that could otherwise
/// allow threads to simultaneously modify it.
unsafe impl Send for Headers {}
/// Safety: This is okay since we don't implement a shallow Clone for Headers that could otherwise
/// allow threads to simultaneously modify it.
unsafe impl Sync for Headers {}

/// Errors returned by operations on [Headers]
#[derive(Debug, Error, PartialEq, Eq)]
pub enum HeadersError {
    /// The header was not found
    #[error("Header not found")]
    HeaderNotFound,

    /// Internal CRT error
    #[error("CRT error: {0}")]
    CrtError(#[source] Error),
}

// Convert CRT error into HeadersError, mapping the HEADER_NOT_FOUND to HeadersError::HeaderNotFound.
impl From<Error> for HeadersError {
    fn from(err: Error) -> Self {
        if err == (aws_http_errors::AWS_ERROR_HTTP_HEADER_NOT_FOUND as i32).into() {
            Self::HeaderNotFound
        } else {
            Self::CrtError(err)
        }
    }
}

impl Headers {
    /// Construct a [Headers] from an existing instance of the underlying CRT structure. The
    /// returned [Headers] will increment the reference count of the underlying CRT structure, and
    /// so there are no lifetime issues here.
    ///
    /// SAFETY: `ptr` must point to a valid `aws_http_headers` struct
    pub(crate) unsafe fn from_crt(ptr: NonNull<aws_http_headers>) -> Self {
        aws_http_headers_acquire(ptr.as_ptr());
        Self { inner: ptr }
    }

    /// Create a new [Headers] object in the given allocator.
    pub fn new(allocator: &Allocator) -> Result<Self, HeadersError> {
        // SAFETY: allocator is a valid aws_allocator, and we check the return is non-null.
        let inner = unsafe { aws_http_headers_new(allocator.inner.as_ptr()).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// Return how many headers there are.
    pub fn count(&self) -> usize {
        // SAFETY: `self.inner` is a valid aws_http_headers, and `aws_http_headers_count` returns a
        // value of a primitive type so there's no potential lifetime issues.
        unsafe { aws_http_headers_count(self.inner.as_ptr()) }
    }

    /// Get the header at the specified index.
    pub fn get_index(&self, index: usize) -> Result<Header<OsString, OsString>, HeadersError> {
        // SAFETY: `self.inner` is a valid aws_http_headers, and `aws_http_headers_get_index`
        // promises to initialize the output `struct aws_http_header *out_header` on success.
        let header = unsafe {
            let mut header: MaybeUninit<aws_http_header> = MaybeUninit::uninit();
            aws_http_headers_get_index(self.inner.as_ptr(), index, header.as_mut_ptr()).ok_or_last_error()?;
            header.assume_init()
        };

        // SAFETY: `header.name` and `header.value are assumed to be valid byte cursors since they
        // came from the CRT, and we immediately make copies of them before they could expire.
        let (name, value) = unsafe {
            (
                OsStr::from_bytes(aws_byte_cursor_as_slice(&header.name)).to_owned(),
                OsStr::from_bytes(aws_byte_cursor_as_slice(&header.value)).to_owned(),
            )
        };

        Ok(Header::new(name, value))
    }

    /// Add a [Header] to these [Headers]. Overrides any existing header with the same name.
    pub fn add_header(&mut self, header: &Header<impl AsRef<OsStr>, impl AsRef<OsStr>>) -> Result<(), HeadersError> {
        // CRT's default behavior is to always use the first header set with a given name, and
        // ignore any later-added headers with that name. But this is non-obvious to users and could
        // be a source of tricky bugs, so we tweak the semantics so that any existing headers with
        // the same name are erased. This also makes the behavior match the behavior of
        // `headers.iter().collect()` into a data structure like a HashMap or RbTree.
        if self.has_header(header.name()) {
            self.erase_header(header.name())?;
        }

        // SAFETY: `aws_http_headers_add_header` makes a copy of the underlying strings.
        // Also, this function takes a mut reference to `self`, since this function modifies the headers.
        unsafe {
            aws_http_headers_add_header(self.inner.as_ptr(), &header.inner).ok_or_last_error()?;
        }

        Ok(())
    }

    /// Returns whether a header with the given name is present in these [Headers].
    pub fn has_header(&self, name: impl AsRef<OsStr>) -> bool {
        // SAFETY: `aws_http_headers_has` doesn't hold on to a copy of the name we pass in, so it's
        // okay to call with with an `aws_byte_cursor` that may not outlive this `Headers`.
        unsafe { aws_http_headers_has(self.inner.as_ptr(), name.as_ref().as_aws_byte_cursor()) }
    }

    /// Erases a header with the given name from these [Headers].
    pub fn erase_header(&self, name: impl AsRef<OsStr>) -> Result<(), HeadersError> {
        // SAFETY: `aws_http_headers_erase` doesn't hold on to a copy of the name we pass in, so it's
        // okay to call with with an `aws_byte_cursor` that may not outlive this `Headers`.
        unsafe {
            aws_http_headers_erase(self.inner.as_ptr(), name.as_ref().as_aws_byte_cursor()).ok_or_last_error()?;
        }

        Ok(())
    }

    /// Get a single header by name from this block of headers
    pub fn get<H: AsRef<OsStr>>(&self, name: H) -> Result<Header<OsString, OsString>, HeadersError> {
        // SAFETY: `self.inner` is a valid aws_http_headers, and `aws_http_headers_get` promises to
        // initialize the output `struct aws_byte_cursor *out_value` on success.
        let value = unsafe {
            let mut value: MaybeUninit<aws_byte_cursor> = MaybeUninit::uninit();
            aws_http_headers_get(
                self.inner.as_ptr(),
                name.as_ref().as_aws_byte_cursor(),
                value.as_mut_ptr(),
            )
            .ok_or_last_error()?;
            value.assume_init()
        };

        let name = name.as_ref().to_os_string();

        // SAFETY: `value` is assumed to be a valid byte cursor since it came from the CRT, and we
        // immediately make a copy of it before the byte cursor can expire.
        let value = unsafe { OsStr::from_bytes(aws_byte_cursor_as_slice(&value)).to_owned() };

        Ok(Header::new(name, value))
    }

    /// Iterate over the headers as (name, value) pairs.
    pub fn iter(&self) -> impl Iterator<Item = (OsString, OsString)> + '_ {
        HeadersIterator {
            headers: self,
            offset: 0,
        }
    }
}

impl Drop for Headers {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_http_headers`, and on Drop it's safe to decrement
        // the reference count since we won't use it again through `self.`
        unsafe {
            aws_http_headers_release(self.inner.as_ptr());
        }
    }
}

/// [HeadersIterator] iterates through (name, value) pairs in the iterator.
#[derive(Debug)]
struct HeadersIterator<'a> {
    headers: &'a Headers,
    offset: usize,
}

impl<'a> Iterator for HeadersIterator<'a> {
    type Item = (OsString, OsString);

    fn next(&mut self) -> Option<Self::Item> {
        if self.offset < self.headers.count() {
            let header = self
                .headers
                .get_index(self.offset)
                .expect("HeadersIterator: failed to get next header");
            self.offset += 1;

            Some((header.name, header.value))
        } else {
            None
        }
    }
}

/// A single HTTP message, initialized to be empty (i.e., no headers, no body).
#[derive(Debug)]
pub struct Message<'a> {
    /// The pointer to the inner `aws_http_message`.
    pub(crate) inner: NonNull<aws_http_message>,

    /// Input stream for the body of the http message, if present.
    body_input_stream: Option<InputStream<'a>>,
}

impl<'a> Message<'a> {
    /// Creates a new HTTP/1.1 request message.
    pub fn new_request(allocator: &Allocator) -> Result<Self, Error> {
        // TODO: figure out a better place to call this
        http_library_init(allocator);

        // SAFETY: `allocator.inner` is a valid `aws_allocator`.
        let inner = unsafe { aws_http_message_new_request(allocator.inner.as_ptr()).ok_or_last_error()? };

        Ok(Self {
            inner,
            body_input_stream: None,
        })
    }

    /// Add a header to this message.
    pub fn add_header(&mut self, header: &Header<impl AsRef<OsStr>, impl AsRef<OsStr>>) -> Result<(), Error> {
        // SAFETY: `aws_http_message_add_header` makes a copy of the values in `header`.
        unsafe { aws_http_message_add_header(self.inner.as_ptr(), header.inner).ok_or_last_error() }
    }

    /// Set the request path for this message.
    pub fn set_request_path(&mut self, path: impl AsRef<OsStr>) -> Result<(), Error> {
        // SAFETY: `aws_http_message_set_request_path` makes a copy of `path`.
        unsafe { aws_http_message_set_request_path(self.inner.as_ptr(), path.as_aws_byte_cursor()).ok_or_last_error() }
    }

    /// Set the request method for this message.
    pub fn set_request_method(&mut self, method: impl AsRef<OsStr>) -> Result<(), Error> {
        // SAFETY: `aws_http_message_set_request_method` makes a copy of `method`.
        unsafe {
            aws_http_message_set_request_method(self.inner.as_ptr(), method.as_aws_byte_cursor()).ok_or_last_error()
        }
    }

    /// Sets the body input stream for this message, and returns any previously set input stream.
    /// If input_stream is None, unsets the body.
    pub fn set_body_stream(&mut self, input_stream: Option<InputStream<'a>>) -> Option<InputStream<'a>> {
        let old_input_stream = std::mem::replace(&mut self.body_input_stream, input_stream);

        let new_input_stream_ptr = self
            .body_input_stream
            .as_ref()
            .map(|s| s.inner.as_ptr())
            .unwrap_or(std::ptr::null_mut());

        // SAFETY: `aws_http_message_set_request_method` does _not_ take ownership of the underlying
        // input stream. We take ownership of the input stream to make sure it doesn't get dropped
        // while the CRT has a pointer to it. We also use lifetime parameters to enforce that this
        // message does not outlive any data borrowed by the input stream.
        unsafe {
            aws_http_message_set_body_stream(self.inner.as_ptr(), new_input_stream_ptr);
        }

        old_input_stream
    }

    /// get the headers from the message and increases the reference count for the Headers in CRT.
    pub fn get_headers(&mut self) -> Result<Headers, Error> {
        // SAFETY: `aws_http_message_get_headers` is safe because self.inner is a valid NonNull `aws_http_message`.
        let header_ptr = unsafe { aws_http_message_get_headers(self.inner.as_ptr()).ok_or_last_error()? };
        // SAFETY: `Headers::from_crt` increments the reference count of the Headers object in CRT so there are
        // no lifetime issues. And `header_ptr` is valid `aws_http_header` pointer.
        let headers = unsafe { Headers::from_crt(header_ptr) };
        Ok(headers)
    }
}

impl<'a> Drop for Message<'a> {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_http_message`, and on Drop it's safe to decrement
        // the reference count since we won't use it again through `self.`
        unsafe {
            aws_http_message_release(self.inner.as_ptr());
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::common::allocator::Allocator;
    use std::collections::HashMap;

    /// Test various parts of the [Headers] API.
    #[test]
    fn test_headers() {
        let mut headers = Headers::new(&Allocator::default()).expect("failed to create headers");

        headers.add_header(&Header::new("a", "1")).unwrap();
        headers.add_header(&Header::new("b", "2")).unwrap();
        headers.add_header(&Header::new("c", "3")).unwrap();

        assert_eq!(headers.count(), 3);

        assert!(headers.has_header("a"));
        assert!(headers.has_header("b"));
        assert!(headers.has_header("c"));

        assert_eq!(headers.get("a").unwrap().name(), "a");
        assert_eq!(headers.get("a").unwrap().value(), "1");

        let map: HashMap<OsString, OsString> = headers.iter().collect();

        assert_eq!(map.len(), 3);
        assert_eq!(map.get(OsStr::new("a")), Some(&OsString::from("1")));
    }

    /// Test the error returned when a requested header is not present.
    #[test]
    fn test_header_not_present() {
        let headers = Headers::new(&Allocator::default()).expect("failed to create headers");
        assert!(!headers.has_header("a"));
        let error = headers.get("a").expect_err("should fail because header is not present");
        assert_eq!(error, HeadersError::HeaderNotFound, "should fail with HeaderNotFound");
    }

    /// Test setting the same header twice, which should overwrite with the second value.
    #[test]
    fn test_headers_overwrite() {
        let mut headers = Headers::new(&Allocator::default()).expect("failed to create headers");

        headers.add_header(&Header::new("a", "1")).unwrap();
        headers.add_header(&Header::new("a", "2")).unwrap();

        assert_eq!(headers.count(), 1);

        assert_eq!(headers.get("a").unwrap().name(), "a");
        assert_eq!(headers.get("a").unwrap().value(), "2");

        let map: HashMap<OsString, OsString> = headers.iter().collect();

        assert_eq!(map.len(), 1);
        assert_eq!(map.get(OsStr::new("a")), Some(&OsString::from("2")));
    }

    /// Test erasing a header.
    #[test]
    fn test_headers_erase() {
        let mut headers = Headers::new(&Allocator::default()).expect("failed to create headers");

        headers.add_header(&Header::new("a", "1")).unwrap();
        assert_eq!(headers.count(), 1);

        headers.erase_header("a").unwrap();

        assert_eq!(headers.count(), 0);

        let map: HashMap<OsString, OsString> = headers.iter().collect();

        assert_eq!(map.len(), 0);
    }
}

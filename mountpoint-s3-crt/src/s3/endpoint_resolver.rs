use mountpoint_s3_crt_sys::*;
use std::{
    ffi::OsStr,
    mem::MaybeUninit,
    os::unix::prelude::OsStrExt,
    ptr::{null_mut, NonNull},
};

use crate::{
    aws_byte_cursor_as_slice,
    common::{allocator::Allocator, error::Error, uri::Uri},
    CrtError, ToAwsByteCursor,
};

use super::s3_library_init;

pub struct RuleEngine {
    inner: NonNull<aws_endpoints_rule_engine>,
}

impl RuleEngine {
    /// Creates a new endpoint Rule Engine.
    pub fn new(allocator: &Allocator) -> Self {
        s3_library_init(allocator);
        //SAFETY: `allocator.inner` is a valid aws_allocator and is not null.
        //SAFETY: aws_s3_endpoint_resolver_new will acquire a reference to keep it alive after this function call, so it's safe to return an owned versoion to it.
        let inner = unsafe { NonNull::new_unchecked(aws_s3_endpoint_resolver_new(allocator.inner.as_ptr())) };
        Self { inner }
    }

    /// Resolve the endpoint with given Request Context and ruleset.
    pub fn resolve(&self, context: RequestContext) -> Result<ResolvedEndpoint, Error> {
        // SAFETY: `aws_endpoints_rule_engine_resolve` ensures that it returns a non null `aws_endpoints_resolved_endpoint`
        // or it will return an error. So, the out_endpoint is valid and non null.
        unsafe {
            let mut out_endpoint: *mut aws_endpoints_resolved_endpoint = null_mut();
            aws_endpoints_rule_engine_resolve(self.inner.as_ptr(), context.inner.as_ptr(), &mut out_endpoint)
                .ok_or_last_error()?;
            Ok(ResolvedEndpoint {
                inner: NonNull::new_unchecked(out_endpoint),
            })
        }
    }
}

impl Drop for RuleEngine {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_endpoints_rule_engine`, and on Drop it's safe to decrement
        // the reference count since we won't use it again through `self.`
        unsafe {
            aws_endpoints_rule_engine_release(self.inner.as_ptr());
        }
    }
}

pub struct RequestContext {
    inner: NonNull<aws_endpoints_request_context>,
}

impl RequestContext {
    /// Creates a new endpoint Request Context.
    pub fn new(allocator: &Allocator) -> Self {
        s3_library_init(allocator);
        //SAFETY: `allocator.inner` is a valid aws_allocator and is not null.
        //SAFETY: aws_endpoints_request_context_new will acquire a reference to keep it alive after this function call, so it's safe to return an owned versoion to it.
        let inner = unsafe { NonNull::new_unchecked(aws_endpoints_request_context_new(allocator.inner.as_ptr())) };
        Self { inner }
    }

    /// Add the parameter to request context whose value is in form of string
    pub fn add_string(&mut self, allocator: &Allocator, name: &OsStr, value: &OsStr) -> Result<(), Error> {
        // SAFETY: allocator.inner and self.inner should be valid pointers.
        // `name` and `value` should be valid aws byte cursor not be modified further.
        unsafe {
            aws_endpoints_request_context_add_string(
                allocator.inner.as_ptr(),
                self.inner.as_ptr(),
                name.as_aws_byte_cursor(),
                value.as_aws_byte_cursor(),
            )
            .ok_or_last_error()
        }
    }

    /// Add the parameter to request context whose value is in form of boolean
    pub fn add_boolean(&mut self, allocator: &Allocator, name: &OsStr, value: bool) -> Result<(), Error> {
        // SAFETY: allocator.inner and self.inner should be valid pointers.
        // `name` should be valid aws byte cursor not be modified further.
        unsafe {
            aws_endpoints_request_context_add_boolean(
                allocator.inner.as_ptr(),
                self.inner.as_ptr(),
                name.as_aws_byte_cursor(),
                value,
            )
            .ok_or_last_error()
        }
    }
}

impl Drop for RequestContext {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_endpoints_request_context`, and on Drop it's safe to decrement
        // the reference count since we won't use it again through `self.`
        unsafe {
            aws_endpoints_request_context_release(self.inner.as_ptr());
        }
    }
}

pub struct ResolvedEndpoint {
    inner: NonNull<aws_endpoints_resolved_endpoint>,
}

impl ResolvedEndpoint {
    /// Get URI from the Resolved Endpoint
    pub fn get_url(&self, allocator: &mut Allocator) -> Result<Uri, Error> {
        let mut url: MaybeUninit<aws_byte_cursor> = MaybeUninit::uninit();
        // SAFETY: self.inner is valid pointer and url is passed as valid mutable pointer.
        //`aws_endpoint_resolved_enpoint_get_url` ensures to return an initialised aws_byte_cursor for url or else it will return an error.
        unsafe {
            aws_endpoints_resolved_endpoint_get_url(self.inner.as_ptr(), url.as_mut_ptr()).ok_or_last_error()?;
            let uri = aws_byte_cursor_as_slice(&url.assume_init());
            let uri = OsStr::from_bytes(uri);
            Uri::new_from_str(allocator, uri)
        }
    }
}

impl Drop for ResolvedEndpoint {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_endpoints_resolved_endpoint`, and on Drop it's safe to decrement
        // the reference count since we won't use it again through `self.`
        unsafe {
            aws_endpoints_resolved_endpoint_release(self.inner.as_ptr());
        }
    }
}

#[cfg(test)]
mod test {
    use std::ffi::OsStr;

    use crate::common::allocator::Allocator;

    use super::{RequestContext, RuleEngine};

    #[test]
    fn test_regions_outside_aws_partition() {
        let mut new_allocator = Allocator::default();
        let endpoint_rule_engine = RuleEngine::new(&new_allocator);
        let mut endpoint_request_context = RequestContext::new(&new_allocator);
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Bucket"), OsStr::new("s3-bucket-test"))
            .expect("Should set bucket name");
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Region"), OsStr::new("cn-north-1"))
            .expect("Should set region name");
        let endpoint_resolved = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .expect("Endpoint should be resolved");
        let endpoint_uri = endpoint_resolved
            .get_url(&mut new_allocator)
            .expect("Unable to get the Uri from resolved endpoint");
        assert_eq!(
            endpoint_uri.as_os_str(),
            "https://s3-bucket-test.s3.cn-north-1.amazonaws.com.cn"
        );
    }

    #[test]
    fn test_fips_setting() {
        let mut new_allocator = Allocator::default();
        let endpoint_rule_engine = RuleEngine::new(&new_allocator);
        let mut endpoint_request_context = RequestContext::new(&new_allocator);
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Bucket"), OsStr::new("s3-bucket-test"))
            .expect("Should set bucket name");
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Region"), OsStr::new("us-east-1"))
            .expect("Should set region name");
        endpoint_request_context
            .add_boolean(&new_allocator, OsStr::new("UseFIPS"), true)
            .expect("Should set to use FIPS");
        let endpoint_resolved = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .expect("Endpoint should be resolved");
        let endpoint_uri = endpoint_resolved
            .get_url(&mut new_allocator)
            .expect("Unable to get the Uri from resolved endpoint");
        assert_eq!(
            endpoint_uri.as_os_str(),
            "https://s3-bucket-test.s3-fips.us-east-1.amazonaws.com"
        );
    }

    #[test]
    fn test_transfer_acceleration_dual_stack_setting() {
        let mut new_allocator = Allocator::default();
        let endpoint_rule_engine = RuleEngine::new(&new_allocator);
        let mut endpoint_request_context = RequestContext::new(&new_allocator);
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Bucket"), OsStr::new("s3-bucket-test"))
            .expect("Should set bucket name");
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Region"), OsStr::new("us-east-1"))
            .expect("Should set region name");
        endpoint_request_context
            .add_boolean(&new_allocator, OsStr::new("UseDualStack"), true)
            .expect("Should set to use dual stack");
        endpoint_request_context
            .add_boolean(&new_allocator, OsStr::new("Accelerate"), true)
            .expect("Should set to use transfer acceleration");
        let endpoint_resolved = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .expect("Endpoint should be resolved");
        let endpoint_uri = endpoint_resolved
            .get_url(&mut new_allocator)
            .expect("Unable to get the Uri from resolved endpoint");
        assert_eq!(
            endpoint_uri.as_os_str(),
            "https://s3-bucket-test.s3-accelerate.dualstack.amazonaws.com"
        );
    }

    #[test]
    fn test_force_path_style_setting() {
        let mut new_allocator = Allocator::default();
        let endpoint_rule_engine = RuleEngine::new(&new_allocator);
        let mut endpoint_request_context = RequestContext::new(&new_allocator);
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Bucket"), OsStr::new("s3-bucket-test"))
            .expect("Should set bucket name");
        endpoint_request_context
            .add_string(&new_allocator, OsStr::new("Region"), OsStr::new("eu-west-1"))
            .expect("Should set region name");
        endpoint_request_context
            .add_boolean(&new_allocator, OsStr::new("ForcePathStyle"), true)
            .expect("Should set to use Path style over virtual host");
        let endpoint_resolved = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .expect("Endpoint should be resolved");
        let endpoint_uri = endpoint_resolved
            .get_url(&mut new_allocator)
            .expect("Unable to get the Uri from resolved endpoint");
        assert_eq!(
            endpoint_uri.as_os_str(),
            "https://s3.eu-west-1.amazonaws.com/s3-bucket-test"
        );
    }
}

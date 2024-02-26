//! An asychronous DNS resolver

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::string::AwsString;
use crate::io::event_loop::EventLoopGroup;
use crate::io::io_library_init;
use crate::CrtError as _;
use mountpoint_s3_crt_sys::*;
use std::ptr::NonNull;

/// Options for creating a [HostResolver]
#[derive(Debug)]
pub struct HostResolverDefaultOptions<'a> {
    /// The maximum number of host entries the resolver can hold on to
    pub max_entries: usize,
    /// The [EventLoopGroup] that this resolver will spawn resolution tasks onto
    pub event_loop_group: &'a mut EventLoopGroup,
}

/// A [HostResolver] is a tool for doing async DNS resolution and caching the results, including
/// pooling multiple resolutions for a single hostname to enable load balancing and fanout.
#[derive(Debug)]
pub struct HostResolver {
    // The inner aws_host_resolver pointer.
    pub(crate) inner: NonNull<aws_host_resolver>,
}

impl HostResolver {
    /// Create a new [HostResolver] with the default behavior
    pub fn new_default(allocator: &Allocator, options: &HostResolverDefaultOptions) -> Result<Self, Error> {
        io_library_init(allocator);

        let inner_options = aws_host_resolver_default_options {
            el_group: options.event_loop_group.inner.as_ptr(),
            max_entries: options.max_entries,
            ..Default::default()
        };

        let inner =
            // SAFETY: aws_host_resolver_new_default acquires a reference to the inner event loop
            // group, and copies what it needs out of `inner_options`.
            unsafe { aws_host_resolver_new_default(allocator.inner.as_ptr(), &inner_options).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// Get the current number of known host addresses for a given hostname
    pub fn get_host_address_count(&self, hostname: &AwsString, kinds: AddressKinds) -> Result<usize, Error> {
        // SAFETY: self.inner is a valid aws_host_resolver
        let count =
            unsafe { aws_host_resolver_get_host_address_count(self.inner.as_ptr(), hostname.as_ptr(), kinds.inner) };

        Ok(count)
    }
}

impl Clone for HostResolver {
    fn clone(&self) -> Self {
        // SAFETY: self.inner is a valid aws_host_resolver and aws_host_resolver_acquire increments
        // the reference count for it (and always returns a copy of the input, which is non-null).
        let inner = unsafe { NonNull::new_unchecked(aws_host_resolver_acquire(self.inner.as_ptr())) };

        Self { inner }
    }
}

impl Drop for HostResolver {
    fn drop(&mut self) {
        // SAFETY: self.inner is a valid aws_host_resolver, and we're dropping a reference to it
        // so it's safe to call release (which will decrement the refcnt).
        unsafe {
            aws_host_resolver_release(self.inner.as_ptr());
        }
    }
}

// SAFETY: `aws_host_resolver` is reference counted and its methods are thread-safe
unsafe impl Send for HostResolver {}
// SAFETY: `aws_host_resolver` is reference counted and its methods are thread-safe
unsafe impl Sync for HostResolver {}

/// A set of address kinds to retrieve with [HostResolver::get_host_address_count]
#[derive(Debug, Default)]
pub struct AddressKinds {
    inner: u32,
}

impl AddressKinds {
    /// Retrieve A records
    pub fn a() -> Self {
        Self {
            inner: aws_get_host_address_flags::AWS_GET_HOST_ADDRESS_COUNT_RECORD_TYPE_A as u32,
        }
    }

    /// Retrieve AAAA records
    pub fn aaaa() -> Self {
        Self {
            inner: aws_get_host_address_flags::AWS_GET_HOST_ADDRESS_COUNT_RECORD_TYPE_AAAA as u32,
        }
    }

    /// Add A records to the set of kinds
    pub fn with_a(self) -> Self {
        Self {
            inner: self.inner & aws_get_host_address_flags::AWS_GET_HOST_ADDRESS_COUNT_RECORD_TYPE_A as u32,
        }
    }

    /// Add AAAA records to the set of kinds
    pub fn with_aaaa(self) -> Self {
        Self {
            inner: self.inner & aws_get_host_address_flags::AWS_GET_HOST_ADDRESS_COUNT_RECORD_TYPE_AAAA as u32,
        }
    }
}

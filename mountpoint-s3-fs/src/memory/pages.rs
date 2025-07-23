use std::alloc::{self, Layout};

use crate::sync::{Arc, Mutex};

use super::stats::{BufferKind, SizePoolStats};

/// Page in a size pool.
///
/// Each page contains [BUFFERS_PER_PAGE](super::pages::Page::BUFFERS_PER_PAGE) (16)
/// buffers of a fixed size.
#[derive(Debug, Clone)]
pub struct Page {
    inner: Arc<PageInner>,
}

#[derive(Debug)]
struct PageInner {
    /// Pointer to the memory for this page.
    bytes: *mut u8,
    /// Pointer to the last buffer in the page.
    ///
    /// Equals to (BUFFERS_PER_PAGE - 1) * buffer_size. Stored for easy
    /// retrieval when validating a released buffer.
    last_buffer: *mut u8,
    /// Track the indices of the buffers in use.
    ///
    /// The size in bits needs to be enough to contain [BUFFERS_PER_PAGE](Page::BUFFERS_PER_PAGE).
    reserved_bitmask: Mutex<u16>,
    layout: Layout,
    /// Shared stats across pages with common `buffer_size`.
    stats: Arc<SizePoolStats>,
}

// SAFETY: access to mutable state in `PageInner` is synchonized internally.
unsafe impl Send for PageInner {}

// SAFETY: access to mutable state in `PageInner` is synchonized internally.
unsafe impl Sync for PageInner {}

impl Drop for PageInner {
    fn drop(&mut self) {
        // SAFETY: `self.bytes` was allocated using `self.layout` in `Page::new`.
        unsafe {
            alloc::dealloc(self.bytes, self.layout);
        }
    }
}

impl Page {
    const BUFFERS_PER_PAGE: usize = u16::BITS as usize;

    /// Create a new page and allocate the required memory.
    pub fn new(stats: Arc<SizePoolStats>) -> Self {
        assert_ne!(stats.buffer_size, 0);
        let layout = Layout::array::<[u8; Self::BUFFERS_PER_PAGE]>(stats.buffer_size).unwrap();

        // SAFETY: layout has non-zero size.
        let bytes = unsafe { alloc::alloc(layout) };
        if bytes.is_null() {
            alloc::handle_alloc_error(layout);
        }

        metrics::gauge!("pool.allocated_pages", "size" => format!("{}", stats.buffer_size)).increment(1.0);
        stats.add_empty_page();

        // SAFETY: last_buffer is guaranteed to belong to the allocated object.
        let last_buffer = unsafe { bytes.add((Self::BUFFERS_PER_PAGE - 1) * stats.buffer_size) };
        let inner = PageInner {
            bytes,
            last_buffer,
            reserved_bitmask: Default::default(),
            layout,
            stats,
        };
        Page { inner: Arc::new(inner) }
    }

    /// Try to reserve a buffer from this page.
    ///
    /// Returns [None] if the page is already full.
    pub fn try_reserve(&self, kind: BufferKind) -> Option<PagedBufferPtr> {
        let (index, page_status) = consume(&mut self.inner.reserved_bitmask.lock().unwrap())?;
        let offset = index * self.inner.stats.buffer_size;
        if let PageStatus::Empty = page_status {
            self.inner.stats.remove_empty_page();
        };

        self.inner.stats.add_reserved_buffer(kind);

        // SAFETY: ptr is in bounds of the allocated object, since offset < page_size.
        let ptr = unsafe { self.inner.bytes.add(offset) };
        Some(PagedBufferPtr {
            ptr,
            pool_page: self.clone(),
            kind,
        })
    }

    /// Release a buffer back to this page.
    fn release(&self, ptr: *mut u8, kind: BufferKind) {
        assert!(
            ptr >= self.inner.bytes && ptr <= self.inner.last_buffer,
            "the pointer does not belong to this page"
        );

        // SAFETY: ptr points to the same allocated object as self.inner.bytes.
        let offset = unsafe { ptr.offset_from(self.inner.bytes) };
        let index = offset as usize / self.inner.stats.buffer_size;
        let mask = !(1u16 << index);
        let mut bitmask = self.inner.reserved_bitmask.lock().unwrap();
        *bitmask &= mask;

        self.inner.stats.remove_reserved_buffer(kind);
        if *bitmask == 0 {
            self.inner.stats.add_empty_page();
        }
    }

    /// Invalidate this page if it is empty, i.e. none of its buffers are reserved,
    /// preventing any further use.
    ///
    /// Returns whether the page was invalidated. If `true` the page is ready to be
    /// removed from the pool.
    pub fn invalidate_if_empty(&self) -> bool {
        let mut bitmask = self.inner.reserved_bitmask.lock().unwrap();
        if *bitmask != 0 {
            return false;
        }
        self.inner.stats.remove_empty_page();
        // Mark the page as full, even though no buffer is currently reserved. If a new request
        // arrives before the page is removed from the pool, it will be denied.
        *bitmask = FULL_MASK;
        true
    }

    #[cfg(test)]
    fn is_empty(&self) -> bool {
        let bitmask = self.inner.reserved_bitmask.lock().unwrap();
        *bitmask == 0
    }

    #[cfg(test)]
    pub(super) fn new_for_tests(buffer_size: usize) -> Page {
        let pool_stats = super::stats::PoolStats::default();
        let stats = SizePoolStats::new(buffer_size, Arc::new(pool_stats));
        Page::new(Arc::new(stats))
    }
}

const FULL_MASK: u16 = u16::MAX;

/// Mark one of the buffers in the page as in use, if any were previously available.
///
/// Returns the index of the consumed buffer and the previous status of the page,
/// or `None` if no buffers are available.
fn consume(bitmask: &mut u16) -> Option<(usize, PageStatus)> {
    if *bitmask != FULL_MASK {
        let page_status = if *bitmask == 0 {
            PageStatus::Empty
        } else {
            PageStatus::NonEmpty
        };
        for index in 0usize..16 {
            let mask = 1u16 << index;
            if *bitmask & mask == 0 {
                *bitmask |= mask;
                return Some((index, page_status));
            }
        }
    }
    None
}

#[derive(Debug)]
enum PageStatus {
    Empty,
    NonEmpty,
}

/// Wraps a pointer into the memory of a [Page].
#[derive(Debug)]
pub(super) struct PagedBufferPtr {
    ptr: *mut u8,
    pool_page: Page,
    kind: BufferKind,
}

// SAFETY: access to the buffer and release back to the pool page on drop can be performed from another thread.
unsafe impl Send for PagedBufferPtr {}

impl Drop for PagedBufferPtr {
    fn drop(&mut self) {
        self.pool_page.release(self.ptr, self.kind);
    }
}

impl PagedBufferPtr {
    pub fn as_raw_ptr(&self) -> *mut u8 {
        self.ptr
    }

    pub fn size(&self) -> usize {
        self.pool_page.inner.stats.buffer_size
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_reserve_buffers() {
        let page = Page::new_for_tests(1024);
        let mut buffers = Vec::new();
        for _ in 0..Page::BUFFERS_PER_PAGE {
            let buffer_ptr = page
                .try_reserve(BufferKind::Other)
                .expect("reserving up to 16 buffers from a new page should succeed");
            buffers.push(buffer_ptr);
        }

        assert!(
            page.try_reserve(BufferKind::Other).is_none(),
            "reserving the 17th buffer from a page should return None"
        );

        _ = buffers.pop().expect("drop one of the reserved buffers");

        buffers.push(
            page.try_reserve(BufferKind::Other)
                .expect("reserving after dropping 1 buffer should succeed"),
        );
        assert!(
            page.try_reserve(BufferKind::Other).is_none(),
            "reserving when all 16 buffers are in use should return None"
        );

        buffers.clear();
        assert!(page.is_empty());
    }

    #[test]
    fn test_invalidate_new() {
        let page = Page::new_for_tests(1024);
        assert!(
            page.invalidate_if_empty(),
            "invalidation of a new, empty page should succeed"
        );
        assert!(
            page.try_reserve(BufferKind::Other).is_none(),
            "reserving from an invalidated page should return None"
        );
    }

    #[test]
    fn test_invalidate_in_use() {
        let page = Page::new_for_tests(1024);
        let buffer_ptr = page
            .try_reserve(BufferKind::Other)
            .expect("reserving from a new page should succeed");
        assert!(!page.invalidate_if_empty(), "invalidation of a page in use should fail");
        drop(buffer_ptr);
        assert!(
            page.invalidate_if_empty(),
            "invalidation of an empty page should succeed"
        );
        assert!(
            page.try_reserve(BufferKind::Other).is_none(),
            "reserving from an invalidated page should return None"
        );
    }
}

use std::alloc::{self, Layout, handle_alloc_error};
use std::io::Read;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex, RwLock};
use std::time::Duration;

use bytes::Bytes;
use mountpoint_s3_client::config::{MemoryPool, MetaRequestType};

/// A memory pool implementation that uses paged buffers.
#[derive(Debug, Clone)]
pub struct PagedPool {
    inner: Arc<PagedPoolInner>,
}

impl PagedPool {
    /// Creates a pool that reuses buffers of the given sizes.
    pub fn new(buffer_sizes: impl Into<Vec<usize>>) -> Self {
        let mut buffer_sizes: Vec<_> = buffer_sizes.into();
        buffer_sizes.sort();
        buffer_sizes.dedup();

        let size_pools = buffer_sizes
            .iter()
            .map(|&buffer_size| SizePool {
                pages: Default::default(),
                stats: Arc::new(SizePoolStats::new(buffer_size)),
            })
            .collect();

        let inner = PagedPoolInner { size_pools };
        Self { inner: Arc::new(inner) }
    }

    /// Trim empty pages in the pool.
    pub fn trim(&self) -> bool {
        self.inner.trim()
    }

    /// Schedule recurring calls to [trim()](Self::trim()).
    pub fn schedule_trim(&self, recurring_time: Duration) {
        let weak = Arc::downgrade(&self.inner);
        std::thread::spawn(move || {
            loop {
                std::thread::sleep(recurring_time);
                let Some(pool) = weak.upgrade() else {
                    return;
                };
                pool.trim();
            }
        });
    }

    /// Reads `size` bytes into a new buffer from the pool.
    pub fn read_exact(&self, read: &mut impl Read, size: usize) -> std::io::Result<Bytes> {
        let mut buffer = self.get_buffer(size);
        read.read_exact(buffer.as_mut())?;
        Ok(Bytes::from_owner(buffer))
    }

    fn get_buffer(&self, size: usize) -> PoolBuffer {
        PoolBuffer(match self.reserve(size) {
            Some(buffer_ptr) => {
                metrics::histogram!("pool.reserve", "type" => "primary").record(size as f64);
                PoolBufferInner::Primary { buffer_ptr, size }
            }
            None => {
                metrics::histogram!("pool.reserve", "type" => "secondary").record(size as f64);
                PoolBufferInner::Secondary(vec![0u8; size].into_boxed_slice())
            }
        })
    }

    fn reserve(&self, size: usize) -> Option<PagedBufferPtr> {
        let pool = self.inner.get_pool_for_size(size)?;
        pool.reserve()
    }

    #[cfg(test)]
    fn page_count(&self) -> usize {
        self.inner
            .size_pools
            .iter()
            .map(|pool| pool.pages.read().unwrap().len())
            .sum()
    }

    #[cfg(test)]
    fn used_buffer_count(&self) -> usize {
        self.inner.size_pools.iter().map(|pool| pool.stats.used_buffers()).sum()
    }

    #[cfg(test)]
    fn copy_from_slice(&self, original: &[u8]) -> Bytes {
        use bytes::Buf as _;

        self.read_exact(&mut original.reader(), original.len())
            .expect("read from slice should succeed")
    }
}

impl MemoryPool for PagedPool {
    type Buffer = PoolBuffer;

    fn get_buffer(&self, size: usize, _type: MetaRequestType) -> Self::Buffer {
        self.get_buffer(size)
    }

    fn trim(&self) -> bool {
        self.trim()
    }
}

#[derive(Debug)]
struct PagedPoolInner {
    size_pools: Vec<SizePool>,
}

impl PagedPoolInner {
    fn get_pool_for_size(&self, size: usize) -> Option<&SizePool> {
        if size == 0 {
            return None;
        }

        let index = self.size_pools.partition_point(|p| p.stats.buffer_size < size);
        if index == self.size_pools.len() {
            return None;
        }

        Some(&self.size_pools[index])
    }

    fn trim(&self) -> bool {
        let mut removed = false;
        for pool in &self.size_pools {
            if pool.stats.empty_pages() == 0 {
                continue;
            }
            let mut write = pool.pages.write().unwrap();
            let len = write.len();
            write.retain(|p| !p.invalidate());

            let pages_freed = len - write.len();
            if pages_freed > 0 {
                tracing::trace!(
                    size = pool.stats.buffer_size,
                    pages_freed,
                    "free empty memory pool pages"
                );
                removed = true;
            }
            metrics::histogram!("pool.trim", "size" => format!("{}", pool.stats.buffer_size))
                .record(pages_freed as f64);
        }

        removed
    }
}

/// Pool buffer.
#[derive(Debug)]
pub struct PoolBuffer(PoolBufferInner);

#[derive(Debug)]
enum PoolBufferInner {
    /// Buffer from the paged pool.
    Primary { buffer_ptr: PagedBufferPtr, size: usize },
    /// Buffer allocated independently.
    Secondary(Box<[u8]>),
}

impl AsMut<[u8]> for PoolBuffer {
    fn as_mut(&mut self) -> &mut [u8] {
        match &mut self.0 {
            PoolBufferInner::Primary { buffer_ptr, size } => {
                // SAFETY: returned slice will be valid until this buffer is dropped.
                unsafe { std::slice::from_raw_parts_mut(buffer_ptr.ptr, *size) }
            }
            PoolBufferInner::Secondary(boxed) => boxed,
        }
    }
}

impl AsRef<[u8]> for PoolBuffer {
    fn as_ref(&self) -> &[u8] {
        match &self.0 {
            PoolBufferInner::Primary { buffer_ptr, size } => {
                // SAFETY: returned slice will be valid until this buffer is dropped.
                unsafe { std::slice::from_raw_parts(buffer_ptr.ptr, *size) }
            }
            PoolBufferInner::Secondary(boxed) => boxed,
        }
    }
}

#[derive(Debug)]
struct PagedBufferPtr {
    ptr: *mut u8,
    pool_page: Page,
}

// SAFETY: access to the buffer and release back to the pool page on drop can be performed from another thread.
unsafe impl Send for PagedBufferPtr {}

impl Drop for PagedBufferPtr {
    fn drop(&mut self) {
        self.pool_page.release(self.ptr);
    }
}

#[derive(Debug)]
struct SizePool {
    pages: RwLock<Vec<Page>>,
    stats: Arc<SizePoolStats>,
}

impl SizePool {
    fn reserve(&self) -> Option<PagedBufferPtr> {
        {
            let read_pages = self.pages.read().unwrap();
            if let Some(buffer_ptr) = self.try_get_buffer_ptr(read_pages.iter()) {
                return Some(buffer_ptr);
            }
        }

        let mut write_pages = self.pages.write().unwrap();
        if let Some(buffer_ptr) = self.try_get_buffer_ptr(write_pages.iter()) {
            return Some(buffer_ptr);
        }

        tracing::trace!(size = self.stats.buffer_size, "allocate new memory pool page");
        let page = Page::new(self.stats.clone());
        let buffer_ptr = page.try_reserve().unwrap();
        write_pages.push(page);
        Some(buffer_ptr)
    }

    fn try_get_buffer_ptr<'a>(&self, mut pages: impl Iterator<Item = &'a Page>) -> Option<PagedBufferPtr> {
        pages.find_map(|page| page.try_reserve())
    }
}

#[derive(Debug)]
struct SizePoolStats {
    buffer_size: usize,
    empty_pages: AtomicUsize,
    used_buffers: AtomicUsize,
}

impl SizePoolStats {
    fn new(buffer_size: usize) -> Self {
        Self {
            buffer_size,
            empty_pages: Default::default(),
            used_buffers: Default::default(),
        }
    }

    fn empty_pages(&self) -> usize {
        self.empty_pages.load(Ordering::SeqCst)
    }

    fn add_empty_page(&self) {
        self.empty_pages.fetch_add(1, Ordering::SeqCst);
    }

    fn remove_empty_page(&self) {
        self.empty_pages.fetch_sub(1, Ordering::SeqCst);
    }

    #[cfg(test)]
    fn used_buffers(&self) -> usize {
        self.used_buffers.load(Ordering::SeqCst)
    }

    fn add_used_buffer(&self) {
        self.used_buffers.fetch_add(1, Ordering::SeqCst);
    }

    fn remove_used_buffer(&self) {
        self.used_buffers.fetch_sub(1, Ordering::SeqCst);
    }
}

#[derive(Debug, Clone)]
struct Page {
    inner: Arc<PageInner>,
}

#[derive(Debug)]
struct PageInner {
    bytes: *mut u8,
    last_offset: *mut u8,
    free_bitmask: Mutex<u16>,
    layout: Layout,
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
    const BUFFERS_PER_PAGE: usize = 16;

    fn new(stats: Arc<SizePoolStats>) -> Self {
        assert_ne!(stats.buffer_size, 0);
        let layout = Layout::array::<[u8; Self::BUFFERS_PER_PAGE]>(stats.buffer_size).unwrap();

        // SAFETY: layout has non-zero size.
        let bytes = unsafe { alloc::alloc(layout) };
        if bytes.is_null() {
            handle_alloc_error(layout);
        }

        stats.add_empty_page();

        // SAFETY: last_offset is guaranteed to belong to the allocated object.
        let last_offset = unsafe { bytes.add((Self::BUFFERS_PER_PAGE - 1) * stats.buffer_size) };
        let inner = PageInner {
            bytes,
            last_offset,
            free_bitmask: Default::default(),
            layout,
            stats,
        };
        Page { inner: Arc::new(inner) }
    }

    fn try_reserve(&self) -> Option<PagedBufferPtr> {
        let (index, page_status) = consume(&mut self.inner.free_bitmask.lock().unwrap())?;
        let offset = index * self.inner.stats.buffer_size;
        if let PageStatus::Empty = page_status {
            self.inner.stats.remove_empty_page();
        };

        self.inner.stats.add_used_buffer();

        // SAFETY: ptr is in bounds of the allocated object, since offset < page_size.
        let ptr = unsafe { self.inner.bytes.add(offset) };
        Some(PagedBufferPtr {
            ptr,
            pool_page: self.clone(),
        })
    }

    fn release(&self, ptr: *mut u8) {
        assert!(
            ptr >= self.inner.bytes && ptr <= self.inner.last_offset,
            "the pointer does not belong to this page"
        );

        // SAFETY: ptr points to the same allocated object as self.inner.bytes.
        let offset = unsafe { ptr.offset_from(self.inner.bytes) };
        let index = offset as usize / self.inner.stats.buffer_size;
        let mask = !(1u16 << index);
        self.inner.stats.remove_used_buffer();
        let mut bitmask = self.inner.free_bitmask.lock().unwrap();
        *bitmask &= mask;
        if *bitmask == 0 {
            self.inner.stats.add_empty_page();
        }
    }

    fn invalidate(&self) -> bool {
        let mut bitmask = self.inner.free_bitmask.lock().unwrap();
        if *bitmask != 0 {
            return false;
        }
        // Prevent further use.
        *bitmask = FULL_MASK;
        true
    }
}

const FULL_MASK: u16 = 0xFFFF;

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

#[cfg(test)]
mod tests {
    use std::ops::Deref;
    use std::thread::{self, sleep};
    use std::time::Duration;

    use super::*;

    use rand::Rng;
    use test_case::{test_case, test_matrix};

    #[test_case(&[1, 2, 3], &[5, 10])]
    #[test_case(&vec![42u8; 1000], &[128, 1024])]
    fn test_from_slice(original: &[u8], buffer_sizes: &[usize]) {
        let pool = PagedPool::new(buffer_sizes);
        let bytes = pool.copy_from_slice(original);
        assert_eq!(original, bytes.deref());
    }

    #[test_case(&[5, 10, 1024])]
    fn test_pages(buffer_sizes: &[usize]) {
        let pool = PagedPool::new(buffer_sizes);

        for &size in buffer_sizes {
            let original = vec![1u8; size];

            assert_eq!(pool.page_count(), 0);
            assert_eq!(pool.used_buffer_count(), 0);

            let mut buffers = Vec::new();
            for _ in 0..16 {
                buffers.push(pool.copy_from_slice(&original));
            }
            assert_eq!(pool.page_count(), 1);
            assert_eq!(pool.used_buffer_count(), 16);

            buffers.push(pool.copy_from_slice(&original));
            assert_eq!(pool.page_count(), 2);
            assert_eq!(pool.used_buffer_count(), 17);

            assert!(!pool.trim());

            drop(buffers);

            assert_eq!(pool.page_count(), 2);
            assert_eq!(pool.used_buffer_count(), 0);

            assert!(pool.trim());
            assert_eq!(pool.page_count(), 0);
            assert_eq!(pool.used_buffer_count(), 0);
        }
    }

    #[test_matrix(&[1, 2, 3, 4, 5, 6, 7], &[5, 10], [None, Some(Duration::from_millis(1))])]
    #[test_matrix(&vec![42u8; 1000], &[128, 1024], [None, Some(Duration::from_millis(10))])]
    #[test_matrix(&vec![42u8; 10000], &[128, 1024, 2024, 8192], [None, Some(Duration::from_millis(10))])]
    fn stress_test(original: &[u8], buffer_sizes: &[usize], schedule: Option<Duration>) {
        let pool = PagedPool::new(buffer_sizes);
        if let Some(duration) = schedule {
            pool.schedule_trim(duration);
        }

        let num_threads = 10000;
        thread::scope(|scope| {
            for i in 0..num_threads {
                let pool = pool.clone();
                scope.spawn(move || {
                    let len = rand::thread_rng().gen_range(1..original.len());
                    let original = &original[..len];
                    let bytes = pool.copy_from_slice(&original[..len]);
                    assert_eq!(original, bytes.deref());

                    sleep(Duration::from_millis(i as u64 % 10));

                    let bytes = pool.copy_from_slice(&bytes);
                    assert_eq!(original, bytes.deref());
                });
            }
        });

        let page_count = pool.page_count();
        if page_count > 0 {
            pool.trim();
            assert_eq!(pool.page_count(), 0);
        }
    }
}

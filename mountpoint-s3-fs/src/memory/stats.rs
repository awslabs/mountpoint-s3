use std::alloc::{self, Layout};
use std::ops::Index;

use mountpoint_s3_client::config::MetaRequestType;

use crate::sync::Arc;
use crate::sync::atomic::{AtomicUsize, Ordering};

/// Usage stats for a pool.
#[derive(Debug, Default)]
pub struct PoolStats {
    acquired_bytes: [AtomicUsize; BUFFER_KIND_COUNT],
    allocated_bytes: AtomicUsize,
}

impl PoolStats {
    pub fn acquired_bytes(&self, kind: BufferKind) -> usize {
        self.acquired_bytes[kind].load(Ordering::SeqCst)
    }

    pub fn total_acquired_bytes(&self) -> usize {
        self.acquired_bytes.iter().map(|a| a.load(Ordering::SeqCst)).sum()
    }

    pub(super) fn acquire_bytes(&self, bytes: usize, kind: BufferKind) {
        self.acquired_bytes[kind].fetch_add(bytes, Ordering::SeqCst);
        metrics::gauge!("pool.bytes_in_use", "kind" => kind.as_str()).increment(bytes as f64);
    }

    pub(super) fn release_bytes(&self, bytes: usize, kind: BufferKind) {
        self.acquired_bytes[kind].fetch_sub(bytes, Ordering::SeqCst);
        metrics::gauge!("pool.bytes_in_use", "kind" => kind.as_str()).decrement(bytes as f64);
    }

    pub fn allocated_bytes(&self) -> usize {
        self.allocated_bytes.load(Ordering::SeqCst)
    }

    pub(super) fn allocate(&self, size: usize) -> (*mut u8, Layout) {
        let layout = Layout::array::<u8>(size).unwrap();

        // SAFETY: layout has non-zero size.
        let bytes = unsafe { alloc::alloc(layout) };
        if bytes.is_null() {
            alloc::handle_alloc_error(layout);
        }

        self.allocated_bytes.fetch_add(size, Ordering::SeqCst);

        (bytes, layout)
    }

    pub(super) fn deallocate(&self, bytes: *mut u8, layout: Layout) {
        // SAFETY: `bytes` was allocated using `layout` in `allocate_page`.
        unsafe {
            alloc::dealloc(bytes, layout);
        }
        self.allocated_bytes.fetch_sub(layout.size(), Ordering::SeqCst);
    }
}

/// Usage stats for a specific size pool.
#[derive(Debug)]
pub struct SizePoolStats {
    pub buffer_size: usize,
    empty_pages: AtomicUsize,
    acquired_buffers: [AtomicUsize; BUFFER_KIND_COUNT],
    pool_stats: Arc<PoolStats>,
}

impl SizePoolStats {
    pub(super) fn new(buffer_size: usize, pool_stats: Arc<PoolStats>) -> Self {
        assert_ne!(buffer_size, 0);

        Self {
            buffer_size,
            empty_pages: Default::default(),
            acquired_buffers: Default::default(),
            pool_stats,
        }
    }

    pub fn empty_pages(&self) -> usize {
        self.empty_pages.load(Ordering::SeqCst)
    }

    pub(super) fn add_empty_page(&self) {
        metrics::gauge!("pool.empty_pages", "size" => format!("{}", self.buffer_size)).increment(1.0);
        self.empty_pages.fetch_add(1, Ordering::SeqCst);
    }

    pub(super) fn remove_empty_page(&self) {
        metrics::gauge!("pool.empty_pages", "size" => format!("{}", self.buffer_size)).decrement(1.0);
        self.empty_pages.fetch_sub(1, Ordering::SeqCst);
    }

    pub(super) fn allocate_page(&self, buffer_count: usize) -> (*mut u8, Layout) {
        let size = self.buffer_size * buffer_count;
        let result = self.pool_stats.allocate(size);
        metrics::gauge!("pool.allocated_pages", "size" => format!("{}", self.buffer_size)).increment(1.0);
        self.add_empty_page();
        result
    }

    pub(super) fn deallocate_page(&self, bytes: *mut u8, layout: Layout) {
        self.pool_stats.deallocate(bytes, layout);
    }

    #[allow(unused)]
    pub fn acquired_buffers(&self, kind: BufferKind) -> usize {
        self.acquired_buffers[kind].load(Ordering::SeqCst)
    }

    pub(super) fn acquire_buffer(&self, kind: BufferKind) {
        self.acquired_buffers[kind].fetch_add(1, Ordering::SeqCst);
        self.pool_stats.acquire_bytes(self.buffer_size, kind);
    }

    pub(super) fn release_buffer(&self, kind: BufferKind) {
        self.acquired_buffers[kind].fetch_sub(1, Ordering::SeqCst);
        self.pool_stats.release_bytes(self.buffer_size, kind);
    }
}

/// Classify buffers by their usage.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub enum BufferKind {
    GetObject,
    PutObject,
    DiskCache,
    Append,
    Other,
}
const BUFFER_KIND_COUNT: usize = BufferKind::Other as usize + 1;

impl<T> Index<BufferKind> for [T; BUFFER_KIND_COUNT] {
    type Output = T;
    fn index(&self, idx: BufferKind) -> &Self::Output {
        &self[idx as usize]
    }
}

impl BufferKind {
    pub fn as_str(&self) -> &'static str {
        match self {
            BufferKind::GetObject => "get_object",
            BufferKind::PutObject => "put_object",
            BufferKind::DiskCache => "disk_cache",
            BufferKind::Append => "append",
            BufferKind::Other => "other",
        }
    }
}

impl From<MetaRequestType> for BufferKind {
    fn from(value: MetaRequestType) -> Self {
        match value {
            MetaRequestType::Default | MetaRequestType::CopyObject => Self::Other,
            MetaRequestType::GetObject => Self::GetObject,
            MetaRequestType::PutObject => Self::PutObject,
        }
    }
}

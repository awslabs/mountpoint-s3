use std::ops::Index;

use mountpoint_s3_client::config::MetaRequestType;

use crate::sync::Arc;
use crate::sync::atomic::{AtomicUsize, Ordering};

use super::buffers::ManagedBuffer;
use super::limiter::MemoryLimiter;

/// Usage stats for a specific size pool.
#[derive(Debug)]
pub struct SizePoolStats {
    pub buffer_size: usize,
    empty_pages: AtomicUsize,
    acquired_buffers: [AtomicUsize; BUFFER_KIND_COUNT],
    limiter: Arc<MemoryLimiter>,
}

impl SizePoolStats {
    pub(super) fn new(buffer_size: usize, limiter: Arc<MemoryLimiter>) -> Self {
        assert_ne!(buffer_size, 0);

        Self {
            buffer_size,
            empty_pages: Default::default(),
            acquired_buffers: Default::default(),
            limiter,
        }
    }

    pub fn empty_pages(&self) -> usize {
        self.empty_pages.load(Ordering::SeqCst)
    }

    pub(super) fn add_empty_page(&self, buffer_count: usize) {
        metrics::gauge!(
            "pool.empty_pages",
            "buffer_size" => format!("{}", self.buffer_size),
            "buffer_count" => format!("{}", buffer_count),
        )
        .increment(1.0);
        self.empty_pages.fetch_add(1, Ordering::SeqCst);
    }

    pub(super) fn remove_empty_page(&self, buffer_count: usize) {
        metrics::gauge!(
            "pool.empty_pages",
            "buffer_size" => format!("{}", self.buffer_size),
            "buffer_count" => format!("{}", buffer_count),
        )
        .decrement(1.0);
        self.empty_pages.fetch_sub(1, Ordering::SeqCst);
    }

    pub(super) fn try_allocate_page(&self, buffer_count: usize) -> Option<ManagedBuffer> {
        let size = self.buffer_size * buffer_count;
        let result = self.limiter.try_allocate(size, None, false)?;
        metrics::gauge!(
            "pool.allocated_pages",
            "buffer_size" => format!("{}", self.buffer_size),
            "buffer_count" => format!("{}", buffer_count),
        )
        .increment(1.0);
        self.add_empty_page(buffer_count);
        Some(result)
    }

    #[allow(unused)]
    pub fn acquired_buffers(&self, kind: BufferKind) -> usize {
        self.acquired_buffers[kind].load(Ordering::SeqCst)
    }

    pub(super) fn acquire_buffer(&self, kind: BufferKind) {
        self.acquired_buffers[kind].fetch_add(1, Ordering::SeqCst);
        self.limiter.acquire_bytes(self.buffer_size, kind);
    }

    pub(super) fn release_buffer(&self, kind: BufferKind) {
        self.acquired_buffers[kind].fetch_sub(1, Ordering::SeqCst);
        self.limiter.release_bytes(self.buffer_size, kind);
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
pub const BUFFER_KIND_COUNT: usize = BufferKind::Other as usize + 1;

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

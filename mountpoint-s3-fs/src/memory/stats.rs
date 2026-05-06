use std::ops::Index;
use std::sync::OnceLock;

use mountpoint_s3_client::config::MetaRequestType;

use crate::prefetch::CursorId;
use crate::sync::Arc;
use crate::sync::atomic::{AtomicUsize, Ordering};

type OnReserveCallback = Arc<dyn Fn(usize, Option<CursorId>) + Send + Sync>;

/// Usage stats for a pool.
#[derive(Default)]
pub struct PoolStats {
    reserved_bytes: [AtomicUsize; BUFFER_KIND_COUNT],
    /// Optional callback invoked whenever bytes are reserved in the pool.
    on_reserve: OnceLock<OnReserveCallback>,
}

impl std::fmt::Debug for PoolStats {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("PoolStats")
            .field("reserved_bytes", &self.reserved_bytes)
            .field("on_reserve", &self.on_reserve.get().map(|_| "<callback>"))
            .finish()
    }
}

impl PoolStats {
    pub fn reserved_bytes(&self, kind: BufferKind) -> usize {
        self.reserved_bytes[kind].load(Ordering::SeqCst)
    }

    pub fn total_reserved_bytes(&self) -> usize {
        self.reserved_bytes.iter().map(|a| a.load(Ordering::SeqCst)).sum()
    }

    pub fn set_on_reserve(&self, callback: OnReserveCallback) {
        let _ = self.on_reserve.set(callback);
    }

    pub(super) fn reserve_bytes(&self, bytes: usize, kind: BufferKind, cursor_id: Option<CursorId>) {
        self.reserved_bytes[kind].fetch_add(bytes, Ordering::SeqCst);
        if let Some(cb) = self.on_reserve.get() {
            cb(bytes, cursor_id);
        }
        metrics::gauge!("pool.reserved_bytes", "kind" => kind.as_str()).increment(bytes as f64);
    }

    pub(super) fn release_bytes(&self, bytes: usize, kind: BufferKind) {
        self.reserved_bytes[kind].fetch_sub(bytes, Ordering::SeqCst);
        metrics::gauge!("pool.reserved_bytes", "kind" => kind.as_str()).decrement(bytes as f64);
    }
}

/// Usage stats for a specific size pool.
#[derive(Debug)]
pub struct SizePoolStats {
    pub buffer_size: usize,
    empty_pages: AtomicUsize,
    reserved_buffers: [AtomicUsize; BUFFER_KIND_COUNT],
    pool_stats: Arc<PoolStats>,
}

impl SizePoolStats {
    pub(super) fn new(buffer_size: usize, pool_stats: Arc<PoolStats>) -> Self {
        Self {
            buffer_size,
            empty_pages: Default::default(),
            reserved_buffers: Default::default(),
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

    #[allow(unused)]
    pub fn reserved_buffers(&self, kind: BufferKind) -> usize {
        self.reserved_buffers[kind].load(Ordering::SeqCst)
    }

    pub(super) fn add_reserved_buffer(&self, kind: BufferKind, cursor_id: Option<CursorId>) {
        self.reserved_buffers[kind].fetch_add(1, Ordering::SeqCst);
        self.pool_stats.reserve_bytes(self.buffer_size, kind, cursor_id);
    }

    pub(super) fn remove_reserved_buffer(&self, kind: BufferKind) {
        self.reserved_buffers[kind].fetch_sub(1, Ordering::SeqCst);
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

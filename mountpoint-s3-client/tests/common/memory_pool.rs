use std::sync::{Arc, Mutex};

use mountpoint_s3_client::config::{MemoryPool, MetaRequest};

/// Creates a memory pool to use in tests.
#[cfg(feature = "pool_tests")]
pub fn new_for_tests() -> impl MemoryPool {
    NoReusePool()
}

/// Trivial memory pool implementation that always allocates new buffers.
#[cfg(feature = "pool_tests")]
#[derive(Debug, Clone)]
struct NoReusePool();

#[cfg(feature = "pool_tests")]
impl MemoryPool for NoReusePool {
    type Buffer = Box<[u8]>;

    fn get_buffer(&self, size: usize, _meta_request: &MetaRequest) -> Self::Buffer {
        vec![0u8; size].into_boxed_slice()
    }

    fn trim(&self) -> bool {
        // Nothing to do.
        false
    }
}

#[derive(Clone, Default)]
pub struct RecordingMemoryPool {
    observed_custom_ids: Arc<Mutex<Vec<Option<u64>>>>,
}

impl RecordingMemoryPool {
    pub fn observed_custom_ids(&self) -> Vec<Option<u64>> {
        self.observed_custom_ids.lock().unwrap().clone()
    }
}

impl MemoryPool for RecordingMemoryPool {
    type Buffer = Box<[u8]>;

    fn get_buffer(&self, size: usize, meta_request: &MetaRequest) -> Self::Buffer {
        self.observed_custom_ids.lock().unwrap().push(meta_request.custom_id());
        vec![0u8; size].into_boxed_slice()
    }

    fn trim(&self) -> bool {
        false
    }
}

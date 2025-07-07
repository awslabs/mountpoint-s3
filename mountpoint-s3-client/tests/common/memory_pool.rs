use mountpoint_s3_client::config::MemoryPool;

/// Creates a memory pool to use in tests.
pub fn new_for_tests() -> impl MemoryPool {
    NoReusePool()
}

/// Trivial memory pool implementation that always allocates new buffers.
#[derive(Debug, Clone)]
struct NoReusePool();

impl MemoryPool for NoReusePool {
    type Buffer = Box<[u8]>;

    fn get_buffer(&self, size: usize) -> Self::Buffer {
        vec![0u8; size].into_boxed_slice()
    }

    fn trim(&self) -> bool {
        // Nothing to do.
        false
    }
}

// TODO(memory-limiter): remove once wired into PagedPool
#[allow(unused)]
mod allocation_queue;
mod buffers;
mod limiter;
mod pages;
mod pool;
mod stats;

pub use buffers::{PoolBuffer, PoolBufferMut};
pub use limiter::{ActiveRead, ActiveReadGuard, BufferArea, MINIMUM_MEM_LIMIT, effective_total_memory};
pub use pool::PagedPool;
pub use stats::BufferKind;

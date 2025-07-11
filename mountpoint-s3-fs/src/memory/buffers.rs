use bytes::Bytes;

use crate::sync::Arc;

use super::pages::PagedBufferPtr;
use super::stats::{BufferKind, PoolStats};

/// Pool buffer.
#[derive(Debug)]
pub struct PoolBuffer(PoolBufferInner);

#[derive(Debug)]
enum PoolBufferInner {
    /// Buffer from the paged pool.
    Primary { buffer_ptr: PagedBufferPtr, size: usize },
    /// Buffer allocated independently.
    Secondary(FreeBuffer),
}

impl PoolBuffer {
    pub(super) fn new_primary(buffer_ptr: PagedBufferPtr, size: usize) -> Self {
        assert!(size <= buffer_ptr.size());
        Self(PoolBufferInner::Primary { buffer_ptr, size })
    }

    pub(super) fn new_secondary(size: usize, kind: BufferKind, stats: Arc<PoolStats>) -> Self {
        Self(PoolBufferInner::Secondary(FreeBuffer::new(size, kind, stats)))
    }

    pub fn capacity(&self) -> usize {
        match &self.0 {
            PoolBufferInner::Primary { size, .. } => *size,
            PoolBufferInner::Secondary(boxed) => boxed.data.len(),
        }
    }

    pub fn into_bytes(self) -> Bytes {
        Bytes::from_owner(self)
    }
}

impl AsMut<[u8]> for PoolBuffer {
    fn as_mut(&mut self) -> &mut [u8] {
        match &mut self.0 {
            PoolBufferInner::Primary { buffer_ptr, size } => {
                // SAFETY: returned slice will be valid until this buffer is dropped.
                unsafe { std::slice::from_raw_parts_mut(buffer_ptr.as_raw_ptr(), *size) }
            }
            PoolBufferInner::Secondary(boxed) => &mut boxed.data,
        }
    }
}

impl AsRef<[u8]> for PoolBuffer {
    fn as_ref(&self) -> &[u8] {
        match &self.0 {
            PoolBufferInner::Primary { buffer_ptr, size } => {
                // SAFETY: returned slice will be valid until this buffer is dropped.
                unsafe { std::slice::from_raw_parts(buffer_ptr.as_raw_ptr(), *size) }
            }
            PoolBufferInner::Secondary(boxed) => &boxed.data,
        }
    }
}

/// A mutable buffer backed by the pool.
#[derive(Debug)]
pub struct PoolBufferMut {
    buffer: PoolBuffer,
    len: usize,
}

impl PoolBufferMut {
    pub fn new(buffer: PoolBuffer) -> Self {
        Self { buffer, len: 0 }
    }

    /// Append data from a slice to the end of this buffer. If reaching the buffer capacity,
    /// split off the overflowing subslice.
    ///
    /// Returns the overflowing subslice.
    pub fn append_from_slice<'a>(&mut self, slice: &mut &'a [u8]) -> &'a [u8] {
        let available = self.buffer.capacity() - self.len;
        let overflow = slice.split_off(available.min(slice.len())..).unwrap();
        let new_len = self.len + slice.len();
        self.buffer.as_mut()[self.len..new_len].copy_from_slice(slice);
        self.len = new_len;
        overflow
    }

    /// Set the length of this buffer, up to its capacity. When extending the
    /// current length, exposes uninitialized data.
    ///
    /// Returns the resulting length of the buffer (<= capacity).
    pub fn set_len_uninit(&mut self, length: usize) -> usize {
        self.len = self.buffer.capacity().min(length);
        self.len
    }

    pub fn is_full(&self) -> bool {
        self.len == self.buffer.capacity()
    }

    pub fn is_empty(&self) -> bool {
        self.len == 0
    }

    pub fn len(&self) -> usize {
        self.len
    }

    pub fn capacity(&self) -> usize {
        self.buffer.capacity()
    }

    pub fn into_bytes(self) -> Bytes {
        Bytes::from_owner(self)
    }
}

impl AsRef<[u8]> for PoolBufferMut {
    fn as_ref(&self) -> &[u8] {
        &self.buffer.as_ref()[..self.len]
    }
}

impl AsMut<[u8]> for PoolBufferMut {
    fn as_mut(&mut self) -> &mut [u8] {
        &mut self.buffer.as_mut()[..self.len]
    }
}

#[derive(Debug)]
struct FreeBuffer {
    data: Box<[u8]>,
    kind: BufferKind,
    stats: Arc<PoolStats>,
}

impl FreeBuffer {
    fn new(size: usize, kind: BufferKind, stats: Arc<PoolStats>) -> Self {
        let data = vec![0u8; size].into_boxed_slice();
        stats.reserve_bytes(data.len(), kind);
        Self { data, kind, stats }
    }
}

impl Drop for FreeBuffer {
    fn drop(&mut self) {
        self.stats.release_bytes(self.data.len(), self.kind);
    }
}

#[cfg(test)]
mod tests {
    use super::super::pages::tests::create_page;

    use super::*;

    use test_case::{test_case, test_matrix};

    fn primary(buffer_size: usize) -> PoolBuffer {
        let page = create_page(buffer_size);
        let buffer_ptr = page
            .try_reserve(BufferKind::Other)
            .expect("should be able to reserve a buffer from a new page");

        PoolBuffer::new_primary(buffer_ptr, buffer_size)
    }

    fn secondary(buffer_size: usize) -> PoolBuffer {
        PoolBuffer::new_secondary(buffer_size, BufferKind::Other, Arc::new(PoolStats::default()))
    }

    #[test_case(primary)]
    #[test_case(secondary)]
    fn test_pool_buffer(create_fn: fn(usize) -> PoolBuffer) {
        const BUFFER_SIZE: usize = 1024;
        let mut pool_buffer = create_fn(BUFFER_SIZE);

        assert_eq!(pool_buffer.capacity(), BUFFER_SIZE);

        let data = &[42u8; BUFFER_SIZE];
        pool_buffer.as_mut().copy_from_slice(data);

        assert_eq!(pool_buffer.as_ref(), data);

        let bytes = pool_buffer.into_bytes();
        assert_eq!(bytes.as_ref(), data);
    }

    const BUFFER_SIZE: usize = 1024;
    const SMALL_WRITE_SIZE: usize = 512;
    const LARGE_WRITE_SIZE: usize = 1280;

    #[test_matrix([primary, secondary], [SMALL_WRITE_SIZE, BUFFER_SIZE, LARGE_WRITE_SIZE])]
    fn test_pool_buffer_mut(create_fn: fn(usize) -> PoolBuffer, write_size: usize) {
        let mut pool_buffer = PoolBufferMut::new(create_fn(BUFFER_SIZE));

        assert_eq!(pool_buffer.capacity(), BUFFER_SIZE);
        assert_eq!(pool_buffer.len(), 0);
        assert!(pool_buffer.is_empty());
        assert!(!pool_buffer.is_full());

        let slice = pool_buffer.as_ref();
        assert!(slice.is_empty());

        let data = vec![42u8; write_size];
        let mut slice = &data[..];
        let remaining = pool_buffer.append_from_slice(&mut slice);

        let overflow_size = write_size.saturating_sub(BUFFER_SIZE);
        let appended_size = write_size - overflow_size;
        assert_eq!(remaining.len(), overflow_size);
        assert_eq!(slice.len(), appended_size);

        assert_eq!(pool_buffer.len(), appended_size);
        assert_eq!(pool_buffer.as_ref(), &data[..appended_size]);

        let bytes = pool_buffer.into_bytes();
        assert_eq!(bytes.as_ref(), &data[..appended_size]);
    }
}

use std::io::Read;
use std::ops::{Deref, DerefMut};

use bytes::Bytes;

use crate::sync::Arc;

use super::pages::PagedBufferPtr;
use super::stats::{BufferKind, PoolStats};

/// A buffer backed by the pool.
///
/// The memory for this buffer can be either part of a page (for "primary" buffers),
/// or be a free allocation ("secondary" buffers), depending on the requested size
/// and configuration of the [PagedPool](super::PagedPool).
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

impl Deref for PoolBuffer {
    type Target = [u8];

    fn deref(&self) -> &Self::Target {
        match &self.0 {
            PoolBufferInner::Primary { buffer_ptr, size } => {
                // SAFETY: returned slice will be valid until this buffer is dropped.
                unsafe { std::slice::from_raw_parts(buffer_ptr.as_raw_ptr(), *size) }
            }
            PoolBufferInner::Secondary(boxed) => &boxed.data,
        }
    }
}

impl DerefMut for PoolBuffer {
    fn deref_mut(&mut self) -> &mut Self::Target {
        match &mut self.0 {
            PoolBufferInner::Primary { buffer_ptr, size } => {
                // SAFETY: returned slice will be valid until this buffer is dropped.
                unsafe { std::slice::from_raw_parts_mut(buffer_ptr.as_raw_ptr(), *size) }
            }
            PoolBufferInner::Secondary(boxed) => &mut boxed.data,
        }
    }
}

impl AsMut<[u8]> for PoolBuffer {
    fn as_mut(&mut self) -> &mut [u8] {
        self
    }
}

impl AsRef<[u8]> for PoolBuffer {
    fn as_ref(&self) -> &[u8] {
        self
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

    /// Fill the remaining of this buffer capacity with data from the given reader.
    ///
    /// Will call [Read::read_exact] on `reader` and return an error if `reader` reaches
    /// end-of-file before filling the buffer.
    pub fn fill_from_reader(&mut self, mut reader: impl Read) -> Result<(), std::io::Error> {
        reader.read_exact(&mut self.buffer.as_mut()[self.len..])?;
        self.len = self.buffer.capacity();
        Ok(())
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

impl Deref for PoolBufferMut {
    type Target = [u8];

    fn deref(&self) -> &Self::Target {
        &self.buffer[..self.len]
    }
}

impl DerefMut for PoolBufferMut {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.buffer[..self.len]
    }
}

impl AsRef<[u8]> for PoolBufferMut {
    fn as_ref(&self) -> &[u8] {
        self
    }
}

impl AsMut<[u8]> for PoolBufferMut {
    fn as_mut(&mut self) -> &mut [u8] {
        self
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
    use super::super::pages::Page;

    use super::*;

    use test_case::{test_case, test_matrix};

    fn primary(buffer_size: usize) -> PoolBuffer {
        let page = Page::new_for_tests(buffer_size);
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
        pool_buffer.copy_from_slice(data);

        assert_eq!(pool_buffer.as_ref(), data);

        let bytes = pool_buffer.into_bytes();
        assert_eq!(bytes.as_ref(), data);
    }

    const BUFFER_SIZE: usize = 1024;
    const SMALLER_THEN_BUFFER_SIZE: usize = 512;
    const LARGER_THAN_BUFFER_SIZE: usize = 1280;

    #[test_matrix([primary, secondary], [SMALLER_THEN_BUFFER_SIZE, BUFFER_SIZE, LARGER_THAN_BUFFER_SIZE])]
    fn test_pool_buffer_mut_append(create_fn: fn(usize) -> PoolBuffer, write_size: usize) {
        let mut pool_buffer = PoolBufferMut::new(create_fn(BUFFER_SIZE));

        assert_eq!(pool_buffer.capacity(), BUFFER_SIZE);
        assert_eq!(pool_buffer.len(), 0);
        assert!(pool_buffer.is_empty());
        assert!(!pool_buffer.is_full());

        let buffer_as_slice: &[u8] = &pool_buffer;
        assert!(buffer_as_slice.is_empty());

        let data = vec![42u8; write_size];
        let mut slice = &data[..];
        let remaining = pool_buffer.append_from_slice(&mut slice);

        let overflow_size = write_size.saturating_sub(BUFFER_SIZE);
        let appended_size = write_size - overflow_size;
        assert_eq!(remaining.len(), overflow_size);
        assert_eq!(slice.len(), appended_size);

        assert_eq!(pool_buffer.len(), appended_size);
        assert_eq!(&pool_buffer[..], &data[..appended_size]);

        let bytes = pool_buffer.into_bytes();
        assert_eq!(&bytes[..], &data[..appended_size]);
    }

    #[test_matrix([primary, secondary], [SMALLER_THEN_BUFFER_SIZE, BUFFER_SIZE, LARGER_THAN_BUFFER_SIZE])]
    fn test_pool_buffer_mut_fill(create_fn: fn(usize) -> PoolBuffer, read_size: usize) {
        let mut pool_buffer = PoolBufferMut::new(create_fn(BUFFER_SIZE));

        assert_eq!(pool_buffer.capacity(), BUFFER_SIZE);
        assert_eq!(pool_buffer.len(), 0);
        assert!(pool_buffer.is_empty());
        assert!(!pool_buffer.is_full());

        let data = vec![42u8; read_size];
        let result = pool_buffer.fill_from_reader(&data[..]);
        if read_size >= BUFFER_SIZE {
            result.expect("fill from large enough slice should succeed");
            assert_eq!(&pool_buffer[..], &data[..BUFFER_SIZE]);
        } else {
            result.expect_err("fill from small slice should fail");
            assert!(pool_buffer.is_empty());
        }
    }

    #[test_matrix([primary, secondary], [SMALLER_THEN_BUFFER_SIZE, BUFFER_SIZE, LARGER_THAN_BUFFER_SIZE])]
    fn test_pool_buffer_mut_fill_non_empty(create_fn: fn(usize) -> PoolBuffer, read_size: usize) {
        let mut pool_buffer = PoolBufferMut::new(create_fn(BUFFER_SIZE));

        assert_eq!(pool_buffer.capacity(), BUFFER_SIZE);
        assert_eq!(pool_buffer.len(), 0);
        assert!(pool_buffer.is_empty());
        assert!(!pool_buffer.is_full());

        const INITIAL_SIZE: usize = 10;
        let initial = [7u8; INITIAL_SIZE];
        let overflow = pool_buffer.append_from_slice(&mut &initial[..]);
        assert!(overflow.is_empty());
        assert_eq!(pool_buffer.len(), INITIAL_SIZE);

        let read_size = read_size.checked_sub(INITIAL_SIZE).unwrap();
        let data = vec![42u8; read_size];
        let result = pool_buffer.fill_from_reader(&data[..]);
        if read_size + INITIAL_SIZE >= BUFFER_SIZE {
            result.expect("fill from large enough slice should succeed");
            assert_eq!(&pool_buffer[..INITIAL_SIZE], &initial[..]);
            assert_eq!(&pool_buffer[INITIAL_SIZE..], &data[..BUFFER_SIZE - INITIAL_SIZE]);
        } else {
            result.expect_err("fill from small slice should fail");
            assert_eq!(&pool_buffer[..], &initial[..]);
        }
    }
}

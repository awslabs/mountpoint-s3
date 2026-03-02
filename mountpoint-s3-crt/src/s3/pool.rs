//! Bridge custom memory pool implementations to the CRT S3 Client interface.

use std::future::{Future, ready};
use std::marker::PhantomPinned;
use std::pin::Pin;
use std::sync::Arc;
use std::{fmt::Debug, ptr::NonNull};

use mountpoint_s3_crt_sys::{
    aws_allocator, aws_byte_buf, aws_byte_buf_from_empty_array, aws_byte_cursor, aws_future_s3_buffer_ticket,
    aws_future_s3_buffer_ticket_acquire, aws_future_s3_buffer_ticket_new, aws_future_s3_buffer_ticket_release,
    aws_future_s3_buffer_ticket_set_result_by_move, aws_ref_count_init, aws_s3_buffer_pool, aws_s3_buffer_pool_config,
    aws_s3_buffer_pool_factory_fn, aws_s3_buffer_pool_reserve_meta, aws_s3_buffer_pool_vtable, aws_s3_buffer_ticket,
    aws_s3_buffer_ticket_vtable,
};

use crate::ToAwsByteCursor as _;
use crate::common::allocator::Allocator;
use crate::io::event_loop::EventLoopGroup;
use crate::io::futures::FutureSpawner;
use crate::s3::client::MetaRequestType;

/// A custom memory pool.
///
/// **WARNING:** The API for this trait is still experimental and will likely change
/// in future releases.
pub trait MemoryPool: Clone + Send + Sync + 'static {
    /// Associated buffer type.
    type Buffer: AsMut<[u8]> + Send;

    /// Get a buffer of at least the requested size.
    fn get_buffer(&self, size: usize, meta_request_type: MetaRequestType) -> Self::Buffer;

    /// Get a buffer of at least the requested size asynchronously.
    /// Returns a future that resolves to the buffer.
    ///
    /// Implementations must always eventually resolve. If memory is not immediately
    /// available, the implementation should block/await until it is — not panic or
    /// deadlock.
    ///
    /// The default implementation wraps [`get_buffer`](Self::get_buffer) in a
    /// ready future. Override this when the pool needs to wait for memory to free up.
    fn get_buffer_async(
        &self,
        size: usize,
        meta_request_type: MetaRequestType,
    ) -> impl Future<Output = Self::Buffer> + Send {
        ready(self.get_buffer(size, meta_request_type))
    }

    /// Trim the pool.
    ///
    /// Return `true` if the pool freed any memory.
    fn trim(&self) -> bool;
}

/// Factory for a custom memory pool.
pub trait MemoryPoolFactory: Send + Sync {
    /// The [MemoryPool] implementation created by this factory.
    type Pool: MemoryPool;

    /// Create a memory pool instance.
    fn create(&self, options: MemoryPoolFactoryOptions) -> Self::Pool;
}

impl<F, P> MemoryPoolFactory for F
where
    F: Fn(MemoryPoolFactoryOptions) -> P + Send + Sync,
    P: MemoryPool,
{
    type Pool = P;

    fn create(&self, options: MemoryPoolFactoryOptions) -> Self::Pool {
        self(options)
    }
}

/// Options to create a [MemoryPool].
#[derive(Debug)]
pub struct MemoryPoolFactoryOptions {
    part_size: usize,
    max_part_size: usize,
    memory_limit: usize,
}

impl MemoryPoolFactoryOptions {
    /// The default part size set on the client.
    pub fn part_size(&self) -> usize {
        self.part_size
    }
    /// The max part size for the client.
    pub fn max_part_size(&self) -> usize {
        self.max_part_size
    }
    /// The memory limit set on the client.
    pub fn memory_limit(&self) -> usize {
        self.memory_limit
    }
}

/// Type-erased wrapper around a [MemoryPoolFactory] implementation.
///
/// This wrapper stores the factory in a type-erased form so it can be held
/// in non-generic structs like `S3ClientConfig`. The concrete type information
/// is preserved via function pointers for later use when constructing the
/// CRT bridge ([`CrtBufferPoolFactory`]).
#[derive(Debug, Clone)]
pub struct MemoryPoolFactoryWrapper(Arc<MemoryPoolFactoryWrapperInner>);

#[derive(Debug)]
struct MemoryPoolFactoryWrapperInner {
    /// Pointer to the leaked (pinned) [MemoryPoolFactory] implementation.
    factory_ptr: NonNull<libc::c_void>,
    /// The generic C callback function pointer for `buffer_pool_factory::<PoolFactory>`.
    factory_fn: aws_s3_buffer_pool_factory_fn,
    /// Function pointer to drop the leaked factory.
    drop_fn: fn(*mut libc::c_void),
}

// SAFETY: `MemoryPoolFactoryWrapperInner` is safe to transfer across threads because it wraps a [MemoryPoolFactory] implementation that is [Send].
unsafe impl Send for MemoryPoolFactoryWrapperInner {}
// SAFETY: `MemoryPoolFactoryWrapperInner` is safe to share across threads because it wraps a [MemoryPoolFactory] implementation that is [Sync].
unsafe impl Sync for MemoryPoolFactoryWrapperInner {}

impl Drop for MemoryPoolFactoryWrapperInner {
    fn drop(&mut self) {
        (self.drop_fn)(self.factory_ptr.as_ptr());
    }
}

impl MemoryPoolFactoryWrapper {
    /// Create a new wrapper from a [MemoryPoolFactory] implementation.
    ///
    /// The factory is pinned and leaked into a type-erased pointer, preserving
    /// the concrete type information via function pointers for later use by
    /// [`CrtBufferPoolFactory`].
    pub fn new<PoolFactory: MemoryPoolFactory>(pool_factory: PoolFactory) -> Self {
        let factory = Box::pin(pool_factory);
        // SAFETY: The pointer to the factory will only be used in `buffer_pool_factory` and
        // `drop_pool_factory`, which will treat it as pinned.
        let leaked = Box::leak(unsafe { Pin::into_inner_unchecked(factory) });
        // SAFETY: `leaked` is not null.
        let factory_ptr = unsafe { NonNull::new_unchecked(leaked as *mut PoolFactory as *mut libc::c_void) };
        Self(Arc::new(MemoryPoolFactoryWrapperInner {
            factory_ptr,
            factory_fn: Some(buffer_pool_factory::<PoolFactory>),
            drop_fn: drop_pool_factory::<PoolFactory>,
        }))
    }
}

/// Factory used by [Client](`super::client::Client`) to create CRT wrappers for [MemoryPool] implementations.
#[derive(Debug)]
pub struct CrtBufferPoolFactory(Box<CrtBufferPoolFactoryInner>);

#[derive(Debug)]
struct CrtBufferPoolFactoryInner {
    event_loop_group: EventLoopGroup,
    /// Keeps the wrapper alive so its `Drop` impl frees the factory pointer exactly once.
    wrapper: MemoryPoolFactoryWrapper,
}

impl CrtBufferPoolFactory {
    /// Builds a CRT buffer pool factory from a type-erased wrapper and an [EventLoopGroup].
    ///
    /// The wrapper provides the type-erased factory pointer and C callback.
    pub fn new(wrapper: MemoryPoolFactoryWrapper, event_loop_group: EventLoopGroup) -> Self {
        Self(Box::new(CrtBufferPoolFactoryInner {
            event_loop_group,
            wrapper,
        }))
    }

    /// Returns the factory callback and user_data pointer to pass to the CRT.
    ///
    /// The user_data pointer points to the `CrtBufferPoolFactoryInner` so that the
    /// C callback can access both the pool factory and the [EventLoopGroup].
    ///
    /// # Safety
    /// The caller MUST keep this `CrtBufferPoolFactory` alive for as long as the CRT
    /// may invoke the callback.
    pub(crate) unsafe fn as_inner(&self) -> (aws_s3_buffer_pool_factory_fn, *mut ::libc::c_void) {
        (
            self.0.wrapper.0.factory_fn,
            &*self.0 as *const CrtBufferPoolFactoryInner as *mut ::libc::c_void,
        )
    }
}

unsafe extern "C" fn buffer_pool_factory<PoolFactory: MemoryPoolFactory>(
    allocator: *mut aws_allocator,
    config: aws_s3_buffer_pool_config,
    user_data: *mut libc::c_void,
) -> *mut aws_s3_buffer_pool {
    // SAFETY: `user_data` points to a `CrtBufferPoolFactoryInner` kept alive by the
    // `Box` in `CrtBufferPoolFactory` (held by `ClientConfig`).
    let factory_inner = unsafe { &*(user_data as *const CrtBufferPoolFactoryInner) };

    // SAFETY: `factory_ptr` references a pinned box owned by the `MemoryPoolFactoryWrapper`.
    let pool_factory = unsafe { &*(factory_inner.wrapper.0.factory_ptr.as_ptr() as *mut PoolFactory) };

    let event_loop_group = factory_inner.event_loop_group.clone();

    // SAFETY: `allocator` is a non-null pointer to a `aws_allocator` instance.
    let allocator = unsafe { NonNull::new_unchecked(allocator).into() };

    let options = MemoryPoolFactoryOptions {
        part_size: config.part_size,
        max_part_size: config.max_part_size,
        memory_limit: config.memory_limit,
    };
    let pool = pool_factory.create(options);

    let crt_pool = CrtBufferPool::new(pool.clone(), allocator, event_loop_group);

    // SAFETY: the CRT will only use the pool through its vtable and refcount.
    unsafe { crt_pool.leak() }
}

fn drop_pool_factory<PoolFactory: MemoryPoolFactory>(factory_ptr: *mut libc::c_void) {
    // SAFETY: `factory_ptr` was leaked in `MemoryPoolFactoryWrapper::new`.
    _ = unsafe { Pin::new_unchecked(Box::from_raw(factory_ptr as *mut PoolFactory)) };
}

/// Internal wrapper to bridge the [MemoryPool] implementation to
/// the `aws_s3_buffer_pool` to provide to the CRT.
///
/// Instances of this type also hold the vtables to set up both
/// the `aws_s3_buffer_pool` itself and the `aws_s3_buffer_ticket`s
/// it returns. Notably, all the functions in the vtables are generic
/// in the same [MemoryPool] implementation as [CrtBufferPool], so
/// that the CRT can handle different implementations and there is
/// no need for dynamic dispatch on the Rust side.
struct CrtBufferPool<Pool: MemoryPool> {
    /// Inner struct to pass to CRT functions.
    inner: aws_s3_buffer_pool,
    /// [MemoryPool] implementation.
    pool: Pool,
    /// Holds the vtable to point to in `inner`.
    pool_vtable: aws_s3_buffer_pool_vtable,
    /// Holds the vtable for the `aws_s3_buffer_ticket` instances.
    ticket_vtable: aws_s3_buffer_ticket_vtable,
    /// CRT allocator.
    allocator: Allocator,
    /// [EventLoopGroup] for spawning async get_buffer calls.
    event_loop_group: EventLoopGroup,
    /// Pin this struct because inner.impl_ will be a pointer to this object.
    _pinned: PhantomPinned,
}

impl<Pool: MemoryPool> CrtBufferPool<Pool> {
    fn new(pool: Pool, allocator: Allocator, event_loop_group: EventLoopGroup) -> Pin<Box<Self>> {
        // `inner` will be initialized after pinning because its fields require pinned addresses.
        let mut crt_pool = Box::pin(CrtBufferPool {
            inner: Default::default(),
            pool,
            pool_vtable: aws_s3_buffer_pool_vtable {
                reserve: Some(pool_reserve::<Pool>),
                trim: Some(pool_trim::<Pool>),
                acquire: None,
                release: None,
                ..Default::default()
            },
            ticket_vtable: aws_s3_buffer_ticket_vtable {
                claim: Some(ticket_claim::<Pool::Buffer>),
                acquire: None,
                release: None,
            },
            allocator,
            event_loop_group,
            _pinned: Default::default(),
        });

        // Set up the vtable and `impl_` to the pinned addresses (self-referential) and initialize ref-counting.
        // SAFETY: We're setting up the struct to be self-referential, and we're not moving out
        // of the struct, so the unchecked deref of the pinned pointer is okay.
        unsafe {
            let pool_ref = Pin::get_unchecked_mut(Pin::as_mut(&mut crt_pool));
            pool_ref.inner.vtable = &raw mut pool_ref.pool_vtable;
            pool_ref.inner.impl_ = pool_ref as *mut CrtBufferPool<Pool> as *mut libc::c_void;
            aws_ref_count_init(
                &mut pool_ref.inner.ref_count,
                &mut pool_ref.inner as *mut aws_s3_buffer_pool as *mut libc::c_void,
                Some(pool_destroy::<Pool>),
            );
        }

        crt_pool
    }

    /// Leak a pinned instance and returns a raw pointer.
    ///
    /// # Safety
    /// The returned pointer must eventually be passed to [from_raw] and can
    /// additionally only used in [ref_from_raw].
    unsafe fn leak(self: Pin<Box<Self>>) -> *mut aws_s3_buffer_pool {
        // SAFETY: the resulting pointer will be only used in `pool_reserve`, `pool_trim`, and `pool_destroy`.
        let pool = Box::leak(unsafe { Pin::into_inner_unchecked(self) });
        &raw mut pool.inner
    }

    /// Returns a reference to original instance from a raw pointer.
    ///
    /// # Safety
    /// The raw pointer must have been obtained through [leak()].
    unsafe fn ref_from_raw(pool: &*mut aws_s3_buffer_pool) -> &Self {
        // SAFETY: `pool` points to the `inner` field of a pinned instance.
        unsafe {
            let impl_ptr = (**pool).impl_;
            &*(impl_ptr as *mut Self)
        }
    }

    /// Re-constructs the original pinned instance from a raw pointer.
    ///
    /// # Safety
    /// The raw pointer must have been obtained through [leak()].
    unsafe fn from_raw(pool: *mut aws_s3_buffer_pool) -> Pin<Box<Self>> {
        // SAFETY: `pool` points to the `inner` field of a pinned instance.
        unsafe { Pin::new_unchecked(Box::from_raw((*pool).impl_ as *mut Self)) }
    }

    fn trim(&self) {
        self.pool.trim();
    }

    fn reserve(&self, size: usize, meta_request_type: MetaRequestType, can_block: bool) -> CrtTicketFuture {
        let future = CrtTicketFuture::new(&self.allocator);
        let ticket_vtable = self.ticket_vtable;

        if can_block {
            // The write path in s3_meta_request.c expects the ticket to be fulfilled
            // synchronously — it treats an unfulfilled future as error.
            let buffer = self.pool.get_buffer(size, meta_request_type);
            let ticket = CrtTicket::new(buffer, ticket_vtable);
            future.set(ticket);
        } else {
            // Read path: spawn on background thread, return unfulfilled future.
            let pool = self.pool.clone();
            let future_clone = future.clone();
            // Dropping the handle is intentional: if the CRT cancels the meta request
            // while the task is in flight, the buffer will be allocated (eventually) and
            // set on an already-done future — the CRT handles this safely by destroying
            // the ticket via `s_future_impl_result_dtor`. This results in a wasted
            // allocation that is immediately freed, but no leak or error.
            // TODO: The CRT does not currently provide a cancellation mechanism for
            // in-flight ticket futures. If one is added, we could propagate it to
            // `get_buffer_async` to avoid the wasteful buffer allocation.
            let _handle = self.event_loop_group.spawn_future(async move {
                let buffer = pool.get_buffer_async(size, meta_request_type).await;
                let ticket = CrtTicket::new(buffer, ticket_vtable);
                future_clone.set(ticket);
            });
        }

        future
    }
}

unsafe extern "C" fn pool_reserve<Pool: MemoryPool>(
    pool: *mut aws_s3_buffer_pool,
    meta: aws_s3_buffer_pool_reserve_meta,
) -> *mut aws_future_s3_buffer_ticket {
    // SAFETY: `pool` was obtained through `CrtMemoryPool::leak`.
    let crt_pool = unsafe { CrtBufferPool::<Pool>::ref_from_raw(&pool) };

    // SAFETY: `meta.meta_request` is a pointer to a valid `aws_s3_meta_request`.
    let request_type = unsafe { (*meta.meta_request).type_ };

    let future = crt_pool.reserve(meta.size, request_type.into(), meta.can_block);

    // SAFETY: the CRT will take ownership of the future.
    unsafe { future.into_inner_ptr() }
}

unsafe extern "C" fn pool_trim<Pool: MemoryPool>(pool: *mut aws_s3_buffer_pool) {
    // SAFETY: `pool` was obtained through `CrtMemoryPool::leak`.
    let crt_pool = unsafe { CrtBufferPool::<Pool>::ref_from_raw(&pool) };
    crt_pool.trim();
}

unsafe extern "C" fn pool_destroy<Pool: MemoryPool>(data: *mut libc::c_void) {
    let pool = data as *mut aws_s3_buffer_pool;

    // SAFETY: `pool` was obtained through `CrtMemoryPool::leak`.
    _ = unsafe { CrtBufferPool::<Pool>::from_raw(pool) };
}

/// Wrapper for [aws_s3_buffer_ticket].
struct CrtTicket<Buffer: AsMut<[u8]>> {
    /// Inner struct to pass to CRT functions.
    inner: aws_s3_buffer_ticket,
    /// Holds the vtable to point to in `inner`.
    ticket_vtable: aws_s3_buffer_ticket_vtable,
    /// Buffer implementing [AsMut<\[u8\]>].
    buffer: Buffer,
    /// Pin this struct because inner.impl_ will be a pointer to this object.
    _pinned: PhantomPinned,
}

impl<Buffer: AsMut<[u8]>> CrtTicket<Buffer> {
    fn new(buffer: Buffer, ticket_vtable: aws_s3_buffer_ticket_vtable) -> Pin<Box<Self>> {
        // `inner` will be initialized after pinning because its fields require pinned addresses.
        let mut ticket = Box::pin(CrtTicket {
            inner: Default::default(),
            ticket_vtable,
            buffer,
            _pinned: Default::default(),
        });

        // Set up the vtable and `impl_` to the pinned addresses (self-referential) and initialize ref-counting.
        // SAFETY: We're setting up the struct to be self-referential, and we're not moving out
        // of the struct, so the unchecked deref of the pinned pointer is okay.
        unsafe {
            let ticket_ref = Pin::get_unchecked_mut(Pin::as_mut(&mut ticket));
            ticket_ref.inner.vtable = &raw mut ticket_ref.ticket_vtable;
            ticket_ref.inner.impl_ = ticket_ref as *mut CrtTicket<Buffer> as *mut libc::c_void;
            aws_ref_count_init(
                &mut ticket_ref.inner.ref_count,
                &mut ticket_ref.inner as *mut aws_s3_buffer_ticket as *mut libc::c_void,
                Some(ticket_destroy::<Buffer>),
            );
        }

        ticket
    }

    /// Leak a pinned instance and returns a raw pointer.
    ///
    /// # Safety
    /// The returned pointer must eventually be passed to [from_raw] and can
    /// additionally only be used in [ref_mut_from_raw].
    unsafe fn leak(self: Pin<Box<Self>>) -> *mut aws_s3_buffer_ticket {
        // SAFETY: the resulting pointer will be only used in `ticket_claim` and `ticket_destroy`.
        let boxed = unsafe { Pin::into_inner_unchecked(self) };
        let pool = Box::leak(boxed);
        &raw mut pool.inner
    }

    /// Returns a reference to original instance from a raw pointer.
    ///
    /// # Safety
    /// The raw pointer must have been obtained through [leak()].
    unsafe fn ref_mut_from_raw(ticket: &mut *mut aws_s3_buffer_ticket) -> &mut Self {
        // SAFETY: `ticket` points to the `inner` field of a pinned instance.
        unsafe {
            let impl_ptr = (**ticket).impl_;
            &mut *(impl_ptr as *mut Self)
        }
    }

    /// Re-constructs the original pinned instance from a raw pointer.
    ///
    /// # Safety
    /// The raw pointer must have been obtained through [leak()].
    unsafe fn from_raw(ticket: *mut aws_s3_buffer_ticket) -> Pin<Box<Self>> {
        // SAFETY: `ticket` points to the `inner` field of a pinned instance.
        unsafe { Pin::new_unchecked(Box::from_raw((*ticket).impl_ as *mut Self)) }
    }
}

/// Return the buffer associated with a ticket.
unsafe extern "C" fn ticket_claim<Buffer: AsMut<[u8]>>(mut ticket: *mut aws_s3_buffer_ticket) -> aws_byte_buf {
    // SAFETY: `ticket` was obtained through `Ticket::leak`.
    let ticket = unsafe { CrtTicket::<Buffer>::ref_mut_from_raw(&mut ticket) };

    // SAFETY: the CRT guarantees to only use the returned buffer while holding the ticket.
    let aws_byte_cursor { len, ptr } = unsafe { ticket.buffer.as_mut().as_aws_byte_cursor() };

    // Use `aws_byte_buf_from_empty_array` to build an `aws_byte_buf` with 0 length and `len` capacity.
    // SAFETY: `ptr` is a valid buffer with capacity >= `len`.
    unsafe { aws_byte_buf_from_empty_array(ptr as *mut libc::c_void, len) }
}

unsafe extern "C" fn ticket_destroy<Buffer: AsMut<[u8]>>(data: *mut libc::c_void) {
    let ticket = data as *mut aws_s3_buffer_ticket;
    // SAFETY: `ticket` was obtained through `Ticket::leak`.
    _ = unsafe { CrtTicket::<Buffer>::from_raw(ticket) };
}

/// Wrapper for [aws_future_s3_buffer_ticket].
#[derive(Debug)]
struct CrtTicketFuture {
    inner: *mut aws_future_s3_buffer_ticket,
}

// SAFETY: `aws_future_s3_buffer_ticket` is reference counted and its methods are thread-safe.
unsafe impl Send for CrtTicketFuture {}

// SAFETY: `aws_future_s3_buffer_ticket` is reference counted and its methods are thread-safe.
unsafe impl Sync for CrtTicketFuture {}

impl CrtTicketFuture {
    fn new(allocator: &Allocator) -> Self {
        // SAFETY: aws_future_s3_buffer_ticket_new return a non-null pointer to a new aws_future_s3_buffer_ticket with a reference count of 1.
        let inner = unsafe { aws_future_s3_buffer_ticket_new(allocator.inner.as_ptr()) };
        Self { inner }
    }

    fn set<Buffer: AsMut<[u8]>>(&self, ticket: Pin<Box<CrtTicket<Buffer>>>) {
        // SAFETY: `ticket` will be passed to the CRT which will only use it through its vtable and refcount.
        let mut ticket = unsafe { ticket.leak() };
        // SAFETY: `self.inner` is a valid future and we are setting it to `ticket`.
        unsafe {
            aws_future_s3_buffer_ticket_set_result_by_move(self.inner, &mut ticket);
        }
    }

    /// Return the pointer to the inner `aws_future_s3_buffer_ticket` instance.
    ///
    /// # Safety
    /// The returned pointer follows ref-counting rules and must be eventually released.
    unsafe fn into_inner_ptr(mut self) -> *mut aws_future_s3_buffer_ticket {
        // Swap the pointer to return with null, so drop will be a no-op.
        std::mem::replace(&mut self.inner, std::ptr::null_mut())
    }
}

impl Clone for CrtTicketFuture {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_future_s3_buffer_ticket`, and we increment its
        // reference count on Clone and decrement it on Drop.
        let inner = unsafe { aws_future_s3_buffer_ticket_acquire(self.inner) };
        Self { inner }
    }
}

impl Drop for CrtTicketFuture {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_future_s3_buffer_ticket` (or null), and on Drop
        // it's safe to decrement the reference count since this is balancing the `acquire` in `new`.
        unsafe { aws_future_s3_buffer_ticket_release(self.inner) };
    }
}

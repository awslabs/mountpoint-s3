//! Module providing synchronization primitives for use in Mountpoint.
//!
//! Using this module allows replacement of [std::sync] by [shuttle::sync],
//! which can help us find concurrency bugs during testing.
//!
//! Anywhere you want to use the [std::sync] types and implementations, you **should** use this module.

#[cfg(not(all(feature = "shuttle", test)))]
mod std {
    pub use std::sync::*;
    pub use std::thread;

    pub use async_lock::Mutex as AsyncMutex;
    pub use async_lock::RwLock as AsyncRwLock;

    pub use async_channel;
}

#[cfg(not(all(feature = "shuttle", test)))]
pub use self::std::*;

#[cfg(all(feature = "shuttle", test))]
mod shuttle {
    pub use ::shuttle::sync::*;
    pub use ::shuttle::thread;

    // TODO these might need a richer Shuttle mock
    pub use async_channel;
    pub use async_lock::Mutex as AsyncMutex;
    pub use async_lock::RwLock as AsyncRwLock;
}

#[cfg(all(feature = "shuttle", test))]
pub use self::shuttle::*;

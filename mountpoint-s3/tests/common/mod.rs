//! Functions and types shared across integration test modules.
//! Allow for unused items since this is included independently in each module.
#![allow(dead_code)]

pub mod creds;

#[cfg(feature = "fuse_tests")]
pub mod fuse;

#[cfg(feature = "s3_tests")]
pub mod s3;

use std::future::Future;

pub fn tokio_block_on<F: Future>(future: F) -> F::Output {
    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();
    runtime.block_on(future)
}

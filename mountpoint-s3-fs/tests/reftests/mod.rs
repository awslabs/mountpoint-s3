//! This module uses [proptest] to perform property or reference testing of Mountpoint.
//!
//! The [Proptest Book](https://proptest-rs.github.io/) is recommended reading
//! for understanding the purpose and functionality of tests in this module.
//!
//! The reference tests are broken down as follows:
//! - [generators] provides strategies for generating test input to our reference tests.
//! - [harness] configures and runs the tests comparing an expected FS and S3 bucket state (provided by [reference])
//!   to what occurs with MP
//! - [fuse] is a harness configuring and running tests comparing a real local FS with MP,
//!   with the goal to identify divergences from POSIX semantics

mod fuse;
mod generators;
mod harness;
mod reference;

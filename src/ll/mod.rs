//! Low-level kernel communication.

mod argument;

mod request;
pub use request::{Operation, Request, RequestError};

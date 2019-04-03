//! Low-level kernel communication.

mod argument;

// FIXME: `ArgumentIterator` shouldn't be public, but is still used by the `request` module
pub use argument::ArgumentIterator;

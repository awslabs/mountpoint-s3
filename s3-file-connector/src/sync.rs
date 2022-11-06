#[cfg(all(feature = "shuttle", test))]
pub use shuttle::{sync::*, thread};

#[cfg(not(all(feature = "shuttle", test)))]
pub use std::{sync::*, thread};

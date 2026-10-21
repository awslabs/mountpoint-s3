use std::fmt::Display;
use std::fmt::Formatter;

use bitflags::bitflags;

bitflags! {
    /// Flags for [`access`](crate::Filesystem::access) operation.
    #[derive(Copy, Clone, Debug, Eq, PartialEq, Hash)]
    pub struct AccessFlags: i32 {
        /// Test for the existence of a file. This is not a flag, but a constant zero.
        const F_OK = libc::F_OK;
        /// Test for read permission.
        const R_OK = libc::R_OK;
        /// Test for write permission.
        const W_OK = libc::W_OK;
        /// Test for execute permission.
        const X_OK = libc::X_OK;
    }
}

impl Display for AccessFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}

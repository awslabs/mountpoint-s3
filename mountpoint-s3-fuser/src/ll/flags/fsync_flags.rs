use std::fmt::Display;
use std::fmt::Formatter;

bitflags::bitflags! {
    /// Fsync flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct FsyncFlags: u32 {
        /// Sync data only, not metadata.
        const FUSE_FSYNC_FDATASYNC = 1 << 0;
    }
}

impl Display for FsyncFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}

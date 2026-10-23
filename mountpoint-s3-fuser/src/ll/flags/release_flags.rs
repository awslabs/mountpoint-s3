use std::fmt::Display;
use std::fmt::Formatter;

bitflags::bitflags! {
    /// Release flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub(crate) struct ReleaseFlags: u32 {
        /// Flush the file on release.
        const FUSE_RELEASE_FLUSH = 1 << 0;
        /// Unlock flock on release.
        const FUSE_RELEASE_FLOCK_UNLOCK = 1 << 1;
    }
}

impl Display for ReleaseFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}

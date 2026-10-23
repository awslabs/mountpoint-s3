use std::fmt::Display;
use std::fmt::Formatter;

use bitflags::bitflags;

bitflags! {
    /// Poll flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct PollFlags: u32 {
        /// Request poll notify.
        const FUSE_POLL_SCHEDULE_NOTIFY = 1 << 0;
    }
}

impl Display for PollFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}

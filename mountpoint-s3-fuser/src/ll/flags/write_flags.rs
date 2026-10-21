use bitflags::bitflags;

bitflags! {
    /// Write flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct WriteFlags: u32 {
        /// Delayed write from page cache, file handle is guessed.
        const FUSE_WRITE_CACHE = 1 << 0;
        /// lock_owner field is valid.
        const FUSE_WRITE_LOCKOWNER = 1 << 1;
        /// Kill suid and sgid bits.
        const FUSE_WRITE_KILL_SUIDGID = 1 << 2;
    }
}

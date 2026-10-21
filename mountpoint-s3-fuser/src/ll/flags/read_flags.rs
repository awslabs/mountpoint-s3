use bitflags::bitflags;

bitflags! {
    /// Read flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub(crate) struct ReadFlags: u32 {
        /// Indicates that `fuse_read_in.lock_owner` contains lock owner.
        /// Users typically do not need to check this flag.
        const FUSE_READ_LOCKOWNER = 1 << 1;
    }
}

use bitflags::bitflags;

bitflags! {
    /// Getattr flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct GetattrFlags: u32 {
        /// Indicates that `fuse_getattr_in.fh` contains a valid file handle.
        const FUSE_GETATTR_FH = 1 << 0;
    }
}

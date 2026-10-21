//! Flags returned in open response.

use bitflags::bitflags;

bitflags! {
    /// Flags returned in open response.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct FopenFlags: u32 {
        /// bypass page cache for this open file
        const FOPEN_DIRECT_IO = 1 << 0;
        /// don't invalidate the data cache on open
        const FOPEN_KEEP_CACHE = 1 << 1;
        /// the file is not seekable
        const FOPEN_NONSEEKABLE = 1 << 2;
        /// allow caching this directory
        const FOPEN_CACHE_DIR = 1 << 3;
        /// the file is stream-like (no file position at all)
        const FOPEN_STREAM = 1 << 4;
        /// kernel skips sending FUSE_FLUSH on close
        const FOPEN_NOFLUSH = 1 << 5;
        /// allow multiple concurrent writes on the same direct-IO file
        const FOPEN_PARALLEL_DIRECT_WRITES = 1 << 6;
        /// the file is fd-backed (via the backing_id field)
        const FOPEN_PASSTHROUGH = 1 << 7;
        /// purge cached attributes on open
        #[cfg(target_os = "macos")]
        const FOPEN_PURGE_ATTR = 1 << 30;
        /// purge unified buffer cache on open
        #[cfg(target_os = "macos")]
        const FOPEN_PURGE_UBC = 1 << 31;
    }
}

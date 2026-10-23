use std::mem;

use crate::INodeNo;
use crate::ll::fuse_abi::fuse_forget_one;

/// Forget about an inode.
///
/// Check [`Filesystem::forget`](crate::Filesystem::batch_forget) for details.
#[derive(Debug)]
#[repr(transparent)]
pub struct ForgetOne {
    forget_one: fuse_forget_one,
}

impl ForgetOne {
    /// Inode number.
    pub fn nodeid(&self) -> INodeNo {
        INodeNo(self.forget_one.nodeid)
    }

    /// Number of lookups.
    pub fn nlookup(&self) -> u64 {
        self.forget_one.nlookup
    }

    pub(crate) fn slice_from_inner(inner: &[fuse_forget_one]) -> &[Self] {
        // SAFETY: repr(transparent).
        unsafe { mem::transmute(inner) }
    }
}

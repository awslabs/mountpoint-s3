use std::{convert::TryInto, io::IoSlice, mem::size_of};

use super::fuse_abi as abi;
use super::RequestId;
use smallvec::{smallvec, SmallVec};
use zerocopy::AsBytes;

const INLINE_DATA_THRESHOLD: usize = size_of::<u64>() * 4;

#[derive(Debug)]
pub enum Response {
    NoReply,
    Error(i32),
    Data(SmallVec<[u8; INLINE_DATA_THRESHOLD]>),
}

#[must_use]
impl Response {
    pub(crate) fn with_iovec<F: FnOnce(&[IoSlice<'_>]) -> T, T>(
        &self,
        unique: RequestId,
        f: F,
    ) -> T {
        let datalen = match &self {
            Response::NoReply => {
                return f(&[]);
            }
            Response::Error(_) => 0,
            Response::Data(v) => v.len(),
        };
        let header = abi::fuse_out_header {
            unique: unique.0,
            error: if let Response::Error(errno) = self {
                -errno
            } else {
                0
            },
            len: (size_of::<abi::fuse_out_header>() + datalen)
                .try_into()
                .expect("Too much data"),
        };
        let mut v: SmallVec<[IoSlice<'_>; 3]> = smallvec![IoSlice::new(header.as_bytes())];
        match &self {
            Response::NoReply => unreachable!(),
            Response::Error(_) => {}
            Response::Data(d) => v.push(IoSlice::new(d.as_ref())),
        }
        f(&v)
    }
}

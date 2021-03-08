use std::{convert::TryInto, io::IoSlice, mem::size_of};

use super::fuse_abi as abi;
use super::RequestId;
use smallvec::{smallvec, SmallVec};
use zerocopy::AsBytes;

const INLINE_DATA_THRESHOLD: usize = size_of::<u64>() * 4;

#[derive(Debug)]
pub enum Response {
    #[allow(dead_code)]
    NoReply,
    Error(i32),
    #[allow(dead_code)]
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

    // Constructors
    pub(crate) fn new_empty() -> Self {
        Self::Error(0)
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn reply_empty() {
        let r = Response::new_empty();
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            vec![
                0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00,
            ],
        );
    }

    fn ioslice_to_vec<'a>(s: &[IoSlice<'a>]) -> Vec<u8> {
        let mut v = Vec::with_capacity(s.iter().map(|x| x.len()).sum());
        for x in s {
            v.extend_from_slice(x);
        }
        v
    }
}

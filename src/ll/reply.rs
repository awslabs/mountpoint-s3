use std::{convert::TryInto, io::IoSlice, mem::size_of};

use super::{fuse_abi as abi, Errno, FileHandle};
use super::{Lock, RequestId};
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
    pub(crate) fn new_error(error: Errno) -> Self {
        Self::Error(error.into())
    }
    pub(crate) fn new_data<T: AsRef<[u8]> + Into<Vec<u8>>>(data: T) -> Self {
        Self::Data(if data.as_ref().len() <= INLINE_DATA_THRESHOLD {
            data.as_ref().into()
        } else {
            data.into().into()
        })
    }
    #[cfg(target_os = "macos")]
    pub(crate) fn new_xtimes(bkuptime: SystemTime, crtime: SystemTime) -> Self {
        let (bkuptime_secs, bkuptime_nanos) = time_from_system_time(&bkuptime);
        let (crtime_secs, crtime_nanos) = time_from_system_time(&crtime);
        let r = abi::fuse_getxtimes_out {
            bkuptime: bkuptime_secs as u64,
            crtime: crtime_secs as u64,
            bkuptimensec: bkuptime_nanos,
            crtimensec: crtime_nanos,
        };
        Self::from_struct(&r)
    }
    // TODO: Could flags be more strongly typed?
    pub(crate) fn new_open(fh: FileHandle, flags: u32) -> Self {
        let r = abi::fuse_open_out {
            fh: fh.into(),
            open_flags: flags,
            padding: 0,
        };
        Self::from_struct(&r)
    }
    pub(crate) fn new_lock(lock: &Lock) -> Self {
        let r = abi::fuse_lk_out {
            lk: abi::fuse_file_lock {
                start: lock.range.0,
                end: lock.range.1,
                typ: lock.typ,
                pid: lock.pid,
            },
        };
        Self::from_struct(&r)
    }

    fn from_struct<T: AsBytes + ?Sized>(data: &T) -> Self {
        Self::Data(data.as_bytes().into())
    }
}

#[cfg(test)]
mod test {
    use std::num::NonZeroI32;

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

    #[test]
    fn reply_error() {
        let r = Response::new_error(Errno(NonZeroI32::new(66).unwrap()));
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            vec![
                0x10, 0x00, 0x00, 0x00, 0xbe, 0xff, 0xff, 0xff, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00,
            ],
        );
    }

    #[test]
    fn reply_data() {
        let r = Response::new_data([0xde, 0xad, 0xbe, 0xef].as_ref());
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            vec![
                0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0xde, 0xad, 0xbe, 0xef,
            ],
        );
    }

    #[test]
    #[cfg(target_os = "macos")]
    fn reply_xtimes() {
        let expected = vec![
            0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
            0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
        ];
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let r = Response::new_xtimes(time, time);
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
        );
    }

    #[test]
    fn reply_open() {
        let expected = vec![
            0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
            0x00, 0x00, 0x22, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
        ];
        let r = Response::new_open(FileHandle(0x1122), 0x33);
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
        );
    }

    #[test]
    fn reply_lock() {
        let expected = vec![
            0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
            0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x44, 0x00, 0x00, 0x00,
        ];
        let r = Response::new_lock(&Lock {
            range: (0x11, 0x22),
            typ: 0x33,
            pid: 0x44,
        });
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
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

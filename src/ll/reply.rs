use std::{
    convert::TryInto,
    io::IoSlice,
    mem::size_of,
    time::{Duration, SystemTime, UNIX_EPOCH},
};

use crate::FileType;

use super::{fuse_abi as abi, Errno, FileHandle, Generation, INodeNo};
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
    pub(crate) fn new_no_reply() -> Self {
        Self::NoReply
    }
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
    pub(crate) fn new_entry(
        ino: INodeNo,
        generation: Generation,
        attr: &Attr,
        attr_ttl: Duration,
        entry_ttl: Duration,
    ) -> Self {
        let d = abi::fuse_entry_out {
            nodeid: ino.into(),
            generation: generation.into(),
            entry_valid: entry_ttl.as_secs(),
            attr_valid: attr_ttl.as_secs(),
            entry_valid_nsec: entry_ttl.subsec_nanos(),
            attr_valid_nsec: attr_ttl.subsec_nanos(),
            attr: attr.attr,
        };
        Self::from_struct(d.as_bytes())
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
    pub(crate) fn new_bmap(block: u64) -> Self {
        let r = abi::fuse_bmap_out { block };
        Self::from_struct(&r)
    }
    pub(crate) fn new_write(written: u32) -> Self {
        let r = abi::fuse_write_out {
            size: written,
            padding: 0,
        };
        Self::from_struct(&r)
    }
    #[allow(clippy::too_many_arguments)]
    pub(crate) fn new_statfs(
        blocks: u64,
        bfree: u64,
        bavail: u64,
        files: u64,
        ffree: u64,
        bsize: u32,
        namelen: u32,
        frsize: u32,
    ) -> Self {
        let r = abi::fuse_statfs_out {
            st: abi::fuse_kstatfs {
                blocks,
                bfree,
                bavail,
                files,
                ffree,
                bsize,
                namelen,
                frsize,
                padding: 0,
                spare: [0; 6],
            },
        };
        Self::from_struct(&r)
    }
    pub(crate) fn new_xattr_size(size: u32) -> Self {
        let r = abi::fuse_getxattr_out { size, padding: 0 };
        Self::from_struct(&r)
    }

    fn from_struct<T: AsBytes + ?Sized>(data: &T) -> Self {
        Self::Data(data.as_bytes().into())
    }
}

pub(crate) fn time_from_system_time(system_time: &SystemTime) -> (i64, u32) {
    // Convert to signed 64-bit time with epoch at 0
    match system_time.duration_since(UNIX_EPOCH) {
        Ok(duration) => (duration.as_secs() as i64, duration.subsec_nanos()),
        Err(before_epoch_error) => (
            -(before_epoch_error.duration().as_secs() as i64),
            before_epoch_error.duration().subsec_nanos(),
        ),
    }
}
// Some platforms like Linux x86_64 have mode_t = u32, and lint warns of a trivial_numeric_casts.
// But others like macOS x86_64 have mode_t = u16, requiring a typecast.  So, just silence lint.
#[allow(trivial_numeric_casts)]
/// Returns the mode for a given file kind and permission
pub(crate) fn mode_from_kind_and_perm(kind: FileType, perm: u16) -> u32 {
    (match kind {
        FileType::NamedPipe => libc::S_IFIFO,
        FileType::CharDevice => libc::S_IFCHR,
        FileType::BlockDevice => libc::S_IFBLK,
        FileType::Directory => libc::S_IFDIR,
        FileType::RegularFile => libc::S_IFREG,
        FileType::Symlink => libc::S_IFLNK,
        FileType::Socket => libc::S_IFSOCK,
    }) as u32
        | perm as u32
}
/// Returns a fuse_attr from FileAttr
pub(crate) fn fuse_attr_from_attr(attr: &crate::FileAttr) -> abi::fuse_attr {
    let (atime_secs, atime_nanos) = time_from_system_time(&attr.atime);
    let (mtime_secs, mtime_nanos) = time_from_system_time(&attr.mtime);
    let (ctime_secs, ctime_nanos) = time_from_system_time(&attr.ctime);
    #[cfg(target_os = "macos")]
    let (crtime_secs, crtime_nanos) = time_from_system_time(&attr.crtime);

    abi::fuse_attr {
        ino: attr.ino,
        size: attr.size,
        blocks: attr.blocks,
        atime: atime_secs,
        mtime: mtime_secs,
        ctime: ctime_secs,
        #[cfg(target_os = "macos")]
        crtime: crtime_secs as u64,
        atimensec: atime_nanos,
        mtimensec: mtime_nanos,
        ctimensec: ctime_nanos,
        #[cfg(target_os = "macos")]
        crtimensec: crtime_nanos,
        mode: mode_from_kind_and_perm(attr.kind, attr.perm),
        nlink: attr.nlink,
        uid: attr.uid,
        gid: attr.gid,
        rdev: attr.rdev,
        #[cfg(target_os = "macos")]
        flags: attr.flags,
        #[cfg(feature = "abi-7-9")]
        blksize: attr.blksize,
        #[cfg(feature = "abi-7-9")]
        padding: attr.padding,
    }
}

// TODO: Add methods for creating this without making a `FileAttr` first.
#[derive(Debug, Clone, Copy)]
pub struct Attr {
    pub(crate) attr: abi::fuse_attr,
}
impl From<&crate::FileAttr> for Attr {
    fn from(attr: &crate::FileAttr) -> Self {
        Self {
            attr: fuse_attr_from_attr(attr),
        }
    }
}
impl From<crate::FileAttr> for Attr {
    fn from(attr: crate::FileAttr) -> Self {
        Self {
            attr: fuse_attr_from_attr(&attr),
        }
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
    fn reply_entry() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56,
                0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00,
                0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0x99, 0x00, 0x00, 0x00,
            ]
        } else {
            vec![
                0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00,
                0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00,
            ]
        };

        if cfg!(feature = "abi-7-9") {
            expected.extend(vec![0xbb, 0x00, 0x00, 0x00, 0xcc, 0x00, 0x00, 0x00]);
        }
        expected[0] = (expected.len()) as u8;

        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = crate::FileAttr {
            ino: 0x11,
            size: 0x22,
            blocks: 0x33,
            atime: time,
            mtime: time,
            ctime: time,
            crtime: time,
            kind: FileType::RegularFile,
            perm: 0o644,
            nlink: 0x55,
            uid: 0x66,
            gid: 0x77,
            rdev: 0x88,
            flags: 0x99,
            blksize: 0xbb,
            padding: 0xcc,
        };
        let r = Response::new_entry(INodeNo(0x11), Generation(0xaa), &attr.into(), ttl, ttl);
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
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
    fn reply_write() {
        let expected = vec![
            0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
            0x00, 0x00, 0x22, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ];
        let r = Response::new_write(0x1122);
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
        );
    }

    #[test]
    fn reply_statfs() {
        let expected = vec![
            0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
            0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ];
        let r = Response::new_statfs(0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88);
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

    #[test]
    fn reply_bmap() {
        let expected = vec![
            0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
            0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ];
        let r = Response::new_bmap(0x1234);
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
        );
    }

    #[test]
    fn reply_xattr_size() {
        let expected = vec![
            0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xEF, 0xBE, 0xAD, 0xDE, 0x00, 0x00,
            0x00, 0x00, 0x78, 0x56, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
        ];
        let r = Response::new_xattr_size(0x12345678);
        assert_eq!(
            r.with_iovec(RequestId(0xdeadbeef), ioslice_to_vec),
            expected
        );
    }

    #[test]
    fn reply_xattr_data() {
        let expected = vec![
            0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xEF, 0xBE, 0xAD, 0xDE, 0x00, 0x00,
            0x00, 0x00, 0x11, 0x22, 0x33, 0x44,
        ];
        let r = Response::new_data([0x11, 0x22, 0x33, 0x44].as_ref());
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

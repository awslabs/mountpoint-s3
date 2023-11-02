use std::{convert::TryInto, io::IoSlice, mem::size_of, num::TryFromIntError};

#[allow(unused)]
use std::{ffi::OsStr, os::unix::ffi::OsStrExt};

use smallvec::{smallvec, SmallVec};
use zerocopy::AsBytes;

use super::fuse_abi as abi;

const INLINE_DATA_THRESHOLD: usize = size_of::<u64>() * 4;
type NotificationBuf = SmallVec<[u8; INLINE_DATA_THRESHOLD]>;

#[derive(Debug)]
pub(crate) enum Notification<'a> {
    /// For notifications with no additional data
    Bare(NotificationBuf),

    /// For notifications that include a buffer of arbitrary data
    WithData(NotificationBuf, &'a [u8]),

    /// For notifications that include a NUL-terminated name
    /// (directory entry)
    #[allow(unused)]
    WithName(NotificationBuf, &'a [u8]),
}

impl<'a> Notification<'a> {
    pub(crate) fn with_iovec<F: FnOnce(&[IoSlice<'_>]) -> T, T>(
        &self,
        code: abi::fuse_notify_code,
        f: F,
    ) -> Result<T, TryFromIntError> {
        let datalen = match &self {
            Notification::Bare(b) => b.len(),
            Notification::WithData(b, d) => b.len() + d.len(),
            Notification::WithName(b, n) => b.len() + n.len() + 1, // +1 because we need to NUL-terminate the name
        };
        let header = abi::fuse_out_header {
            unique: 0,
            error: code as i32,
            len: (size_of::<abi::fuse_out_header>() + datalen).try_into()?,
        };
        let mut v: SmallVec<[IoSlice<'_>; 4]> = smallvec![IoSlice::new(header.as_bytes())];
        match &self {
            Notification::Bare(b) => v.push(IoSlice::new(b)),
            Notification::WithData(b, d) => {
                v.push(IoSlice::new(b));
                v.push(IoSlice::new(d));
            }
            Notification::WithName(b, n) => {
                v.push(IoSlice::new(b));
                v.push(IoSlice::new(n));
                v.push(IoSlice::new(&[0u8])); // NUL terminator required by fuse
            }
        }
        Ok(f(&v))
    }

    #[cfg(feature = "abi-7-12")]
    pub(crate) fn new_inval_entry(parent: u64, name: &'a OsStr) -> Result<Self, TryFromIntError> {
        let r = abi::fuse_notify_inval_entry_out {
            parent,
            namelen: name.len().try_into()?,
            padding: 0,
        };
        Ok(Self::from_struct_with_name(&r, name.as_bytes()))
    }

    #[cfg(feature = "abi-7-12")]
    pub(crate) fn new_inval_inode(ino: u64, offset: i64, len: i64) -> Self {
        let r = abi::fuse_notify_inval_inode_out {
            ino,
            off: offset,
            len,
        };
        Self::from_struct(&r)
    }

    #[cfg(feature = "abi-7-15")]
    pub(crate) fn new_store(
        ino: u64,
        offset: u64,
        data: &'a [u8],
    ) -> Result<Self, TryFromIntError> {
        let r = abi::fuse_notify_store_out {
            nodeid: ino,
            offset,
            size: data.len().try_into()?,
            padding: 0,
        };
        Ok(Self::from_struct_with_data(&r, data))
    }

    #[cfg(feature = "abi-7-18")]
    pub(crate) fn new_delete(
        parent: u64,
        child: u64,
        name: &'a OsStr,
    ) -> Result<Self, TryFromIntError> {
        let r = abi::fuse_notify_delete_out {
            parent,
            child,
            namelen: name.len().try_into()?,
            padding: 0,
        };
        Ok(Self::from_struct_with_name(&r, name.as_bytes()))
    }

    #[cfg(feature = "abi-7-11")]
    pub(crate) fn new_poll(kh: u64) -> Self {
        let r = abi::fuse_notify_poll_wakeup_out { kh };
        Self::from_struct(&r)
    }

    fn from_struct<T: AsBytes + ?Sized>(data: &T) -> Self {
        Self::Bare(data.as_bytes().into())
    }

    #[allow(unused)]
    fn from_struct_with_name<T: AsBytes + ?Sized>(buf: &T, name: &'a [u8]) -> Self {
        Self::WithName(buf.as_bytes().into(), name)
    }

    fn from_struct_with_data<T: AsBytes + ?Sized>(buf: &T, data: &'a [u8]) -> Self {
        Self::WithData(buf.as_bytes().into(), data)
    }
}

#[cfg(test)]
mod test {
    use super::super::test::ioslice_to_vec;
    use super::*;

    #[test]
    #[cfg(feature = "abi-7-12")]
    fn inval_entry() {
        let n = Notification::new_inval_entry(0x42, OsStr::new("abc"))
            .unwrap()
            .with_iovec(
                abi::fuse_notify_code::FUSE_NOTIFY_INVAL_ENTRY,
                ioslice_to_vec,
            )
            .unwrap();
        let expected = vec![
            0x24, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x61, 0x62, 0x63, 0x00,
        ];
        assert_eq!(n, expected);
    }

    #[test]
    #[cfg(feature = "abi-7-12")]
    fn inval_inode() {
        let n = Notification::new_inval_inode(0x42, 100, 200)
            .with_iovec(
                abi::fuse_notify_code::FUSE_NOTIFY_INVAL_INODE,
                ioslice_to_vec,
            )
            .unwrap();
        let expected = vec![
            0x28, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x64, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0xc8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ];
        assert_eq!(n, expected);
    }

    #[test]
    #[cfg(feature = "abi-7-15")]
    fn store() {
        let n = Notification::new_store(0x42, 50, &[0xde, 0xad, 0xbe, 0xef])
            .unwrap()
            .with_iovec(abi::fuse_notify_code::FUSE_NOTIFY_STORE, ioslice_to_vec)
            .unwrap();
        let expected = vec![
            0x2c, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad,
            0xbe, 0xef,
        ];
        assert_eq!(n, expected);
    }

    #[test]
    #[cfg(feature = "abi-7-18")]
    fn delete() {
        let n = Notification::new_inval_entry(0x42, OsStr::new("abc"))
            .unwrap()
            .with_iovec(abi::fuse_notify_code::FUSE_NOTIFY_DELETE, ioslice_to_vec)
            .unwrap();
        let expected = vec![
            0x24, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x42, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x61, 0x62, 0x63, 0x00,
        ];
        assert_eq!(n, expected);
    }

    #[test]
    #[cfg(feature = "abi-7-11")]
    fn poll() {
        let n = Notification::new_poll(0x4321)
            .with_iovec(abi::fuse_notify_code::FUSE_POLL, ioslice_to_vec)
            .unwrap();
        let expected = vec![
            0x18, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ];
        assert_eq!(n, expected);
    }
}

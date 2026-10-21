#[repr(C)]
pub(crate) struct fuse_backing_map {
    pub(crate) fd: u32,
    pub(crate) flags: u32,
    pub(crate) padding: u64,
}

pub(crate) const FUSE_DEV_IOC_MAGIC: u8 = 229;
#[cfg_attr(not(target_os = "linux"), expect(dead_code))]
pub(crate) const FUSE_DEV_IOC_CLONE: u8 = 0;
pub(crate) const FUSE_DEV_IOC_BACKING_OPEN: u8 = 1;
pub(crate) const FUSE_DEV_IOC_BACKING_CLOSE: u8 = 2;

nix::ioctl_read!(
    fuse_dev_ioc_clone,
    FUSE_DEV_IOC_MAGIC,
    FUSE_DEV_IOC_CLONE,
    u32
);

nix::ioctl_write_ptr!(
    fuse_dev_ioc_backing_open,
    FUSE_DEV_IOC_MAGIC,
    FUSE_DEV_IOC_BACKING_OPEN,
    fuse_backing_map
);

nix::ioctl_write_ptr!(
    fuse_dev_ioc_backing_close,
    FUSE_DEV_IOC_MAGIC,
    FUSE_DEV_IOC_BACKING_CLOSE,
    u32
);

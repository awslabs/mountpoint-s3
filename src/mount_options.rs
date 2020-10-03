/// Mount options accepted by the FUSE filesystem type
/// See 'man mount.fuse' for details
// TODO: add all options that 'man mount.fuse' documents and libfuse supports
#[derive(Debug, PartialEq)]
pub enum MountOption {
    /// Set the name of the source in mtab
    FSName(String),
    /// Set the filesystem subtype in mtab
    Subtype(String),
    /// Allows passing an option which is not otherwise supported in these enums
    CUSTOM(String),

    /* Parameterless options */
    /// Allow all users to access files on this filesystem. By default access is restricted to the
    /// user who mounted it
    AllowOther,
    /// Allow the root user to access this filesystem, in addition to the user who mounted it
    AllowRoot,
    /// Automatically unmount when the mounting process exits
    AutoUnmount,
    /// Enable permission checking in the kernel
    DefaultPermissions,
    /// Disables the kernel page cache. All read()/write() calls go to the FUSE filesystem
    DirectIO,

    /* Flags */
    /// Enable special character and block devices
    Dev,
    /// Disable special character and block devices
    NoDev,
    /// Honor set-user-id and set-groupd-id bits on files
    Suid,
    /// Don't honor set-user-id and set-groupd-id bits on files
    NoSuid,
    /// Read-only filesystem
    RO,
    /// Read-write filesystem
    RW,
    /// Allow execution of binaries
    Exec,
    /// Don't allow execution of binaries
    NoExec,
    /// Support inode access time
    Atime,
    /// Don't update inode access time
    NoAtime,
    /// All modifications to directories will be done synchronously
    DirSync,
    /// All I/O will be done synchronously
    Sync,
    /// All I/O will be done asynchronously
    Async,
}

#[derive(PartialEq)]
#[cfg(not(feature = "libfuse"))]
pub enum MountOptionGroup {
    KernelOption,
    KernelFlag,
    Fusermount,
}

#[cfg(not(feature = "libfuse"))]
pub fn option_group(option: &MountOption) -> MountOptionGroup {
    match option {
        MountOption::FSName(_) => MountOptionGroup::Fusermount,
        MountOption::Subtype(_) => MountOptionGroup::Fusermount,
        MountOption::CUSTOM(_) => MountOptionGroup::KernelOption,
        MountOption::AutoUnmount => MountOptionGroup::Fusermount,
        MountOption::DirectIO => MountOptionGroup::KernelOption,
        MountOption::AllowOther => MountOptionGroup::KernelOption,
        MountOption::Dev => MountOptionGroup::KernelFlag,
        MountOption::NoDev => MountOptionGroup::KernelFlag,
        MountOption::Suid => MountOptionGroup::KernelFlag,
        MountOption::NoSuid => MountOptionGroup::KernelFlag,
        MountOption::RO => MountOptionGroup::KernelFlag,
        MountOption::RW => MountOptionGroup::KernelFlag,
        MountOption::Exec => MountOptionGroup::KernelFlag,
        MountOption::NoExec => MountOptionGroup::KernelFlag,
        MountOption::Atime => MountOptionGroup::KernelFlag,
        MountOption::NoAtime => MountOptionGroup::KernelFlag,
        MountOption::DirSync => MountOptionGroup::KernelFlag,
        MountOption::Sync => MountOptionGroup::KernelFlag,
        MountOption::Async => MountOptionGroup::KernelFlag,
        MountOption::AllowRoot => MountOptionGroup::KernelOption,
        MountOption::DefaultPermissions => MountOptionGroup::KernelOption,
    }
}

// Format option to be passed to libfuse or kernel
pub fn option_to_string(option: &MountOption) -> String {
    match option {
        MountOption::FSName(name) => format!("fsname={}", name),
        MountOption::Subtype(subtype) => format!("subtype={}", subtype),
        MountOption::CUSTOM(value) => value.to_string(),
        MountOption::AutoUnmount => "auto_unmount".to_string(),
        MountOption::DirectIO => "direct_io".to_string(),
        MountOption::AllowOther => "allow_other".to_string(),
        MountOption::AllowRoot => "allow_root".to_string(),
        MountOption::DefaultPermissions => "default_permissions".to_string(),
        MountOption::Dev => "dev".to_string(),
        MountOption::NoDev => "nodev".to_string(),
        MountOption::Suid => "suid".to_string(),
        MountOption::NoSuid => "nosuid".to_string(),
        MountOption::RO => "ro".to_string(),
        MountOption::RW => "rw".to_string(),
        MountOption::Exec => "exec".to_string(),
        MountOption::NoExec => "noexec".to_string(),
        MountOption::Atime => "atime".to_string(),
        MountOption::NoAtime => "noatime".to_string(),
        MountOption::DirSync => "dirsync".to_string(),
        MountOption::Sync => "sync".to_string(),
        MountOption::Async => "async".to_string(),
    }
}

#[cfg(not(feature = "libfuse"))]
pub fn option_to_flag(option: &MountOption) -> libc::c_ulong {
    match option {
        MountOption::Dev => 0, // There is no option for dev. It's the absence of NoDev
        MountOption::NoDev => libc::MS_NODEV,
        MountOption::Suid => 0,
        MountOption::NoSuid => libc::MS_NOSUID,
        MountOption::RW => 0,
        MountOption::RO => libc::MS_RDONLY,
        MountOption::Exec => 0,
        MountOption::NoExec => libc::MS_NOEXEC,
        MountOption::Atime => 0,
        MountOption::NoAtime => libc::MS_NOATIME,
        MountOption::Async => 0,
        MountOption::Sync => libc::MS_SYNCHRONOUS,
        MountOption::DirSync => libc::MS_DIRSYNC,
        _ => unreachable!(),
    }
}

// TODO: add a function to validate the selected set of options: i.e. can't set both RW & RO

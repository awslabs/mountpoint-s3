use bitflags::bitflags;

bitflags! {
    /// `chflags(2)`, only used on macOS.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct BsdFileFlags: u32 {
        /// Do not dump the file.
        #[cfg(target_os = "macos")]
        const UF_NODUMP = libc::UF_NODUMP;
        /// The file may not be changed.
        #[cfg(target_os = "macos")]
        const UF_IMMUTABLE = libc::UF_IMMUTABLE;
        /// The file may only be appended to.
        #[cfg(target_os = "macos")]
        const UF_APPEND = libc::UF_APPEND;
        /// The directory is opaque when viewed through a union stack.
        #[cfg(target_os = "macos")]
        const UF_OPAQUE = libc::UF_OPAQUE;
        /// The file or directory is not intended to be displayed to the user.
        #[cfg(target_os = "macos")]
        const UF_HIDDEN = libc::UF_HIDDEN;
        /// The file has been archived.
        #[cfg(target_os = "macos")]
        const SF_ARCHIVED = libc::SF_ARCHIVED;
        /// The file may not be changed.
        #[cfg(target_os = "macos")]
        const SF_IMMUTABLE = libc::SF_IMMUTABLE;
        /// The file may only be appended to.
        #[cfg(target_os = "macos")]
        const SF_APPEND = libc::SF_APPEND;
    }
}

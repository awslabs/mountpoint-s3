use std::fmt;
use std::fmt::Formatter;
use std::fmt::LowerHex;
use std::fmt::UpperHex;

/// How the file should be opened: read-only, write-only, or read-write.
#[derive(Copy, Clone, Debug, Eq, PartialEq, Hash)]
#[repr(i32)]
#[allow(non_camel_case_types)]
pub enum OpenAccMode {
    /// Open file for reading only.
    O_RDONLY = libc::O_RDONLY,
    /// Open file for writing only.
    O_WRONLY = libc::O_WRONLY,
    /// Open file for reading and writing.
    O_RDWR = libc::O_RDWR,
}

/// Open flags as passed to open operation.
#[derive(Copy, Clone, Debug, Eq, PartialEq, Hash)]
pub struct OpenFlags(pub i32);

impl LowerHex for OpenFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        LowerHex::fmt(&self.0, f)
    }
}

impl UpperHex for OpenFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        UpperHex::fmt(&self.0, f)
    }
}

impl OpenFlags {
    /// File access mode.
    pub fn acc_mode(self) -> OpenAccMode {
        match self.0 & libc::O_ACCMODE {
            libc::O_RDONLY => OpenAccMode::O_RDONLY,
            libc::O_WRONLY => OpenAccMode::O_WRONLY,
            libc::O_RDWR => OpenAccMode::O_RDWR,
            _ => {
                // Impossible combination of flags.
                // Do not panic because the field is public.
                OpenAccMode::O_RDONLY
            }
        }
    }
}

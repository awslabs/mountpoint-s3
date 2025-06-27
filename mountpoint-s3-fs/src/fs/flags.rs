/// Helper to define type-safe flags from `libc` constants.
/// Usage:
///
/// ```ignore
/// struct MyFlags(u32);
///
/// libc_flags! {
///     MyFlags : u32 {
///         A,
///         B,
///         C,
///     }
/// }
/// ```
///
/// See [`OpenFlags`] for an example.
macro_rules! libc_flags {
    (
        $struct_name:ident : $raw_type:ty {
        $(
            $(#[$flag_attr:ident $($flag_meta_args:tt)*])*
            $flag_name:ident
        ),*$(,)+
    }
    ) => {
        bitflags::bitflags! {
            impl $struct_name : $raw_type {
                $(
                    $(#[$flag_attr $($flag_meta_args)*])*
                    const $flag_name = libc::$flag_name;
                )*

                const _ = !0;
            }
        }

        impl std::fmt::Display for $struct_name {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                bitflags::parser::to_writer(self, f)
            }
        }

        impl std::fmt::Debug for $struct_name {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                write!(f, "{}({:#x} = {})", stringify!($struct_name), self.0, self.to_string())
            }
        }

        impl From<$raw_type> for $struct_name {
            fn from(value: $raw_type) -> Self {
                Self::from_bits_retain(value)
            }
        }
    }
}

/// Flags used in [`open`](super::S3Filesystem::open).
///
/// Note that the "access mode" constants are not mapped as values because they do not behave
/// like normal bit flags (and will not be shown in `Debug`/`Display`):
/// * `libc::O_ACCMODE = 0b11` is a mask for the access mode,
/// * `libc::O_RDONLY = 0b00` is also the default value.
///
/// The other access mode constants, `libc::O_WRONLY = 0b01` and `libc::O_RDWR = 0b10`, are
/// valid bit flags and mapped respectively to `OpenFlags::O_WRONLY` and `OpenFlags::O_RDWR`.
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct OpenFlags(i32);

libc_flags! {
    OpenFlags : i32 {
        O_WRONLY,
        O_RDWR,
        O_APPEND,
        O_SYNC,
        O_TRUNC,
        O_DSYNC,
        O_NONBLOCK,
        O_NOCTTY,
        O_CREAT,

        #[cfg(target_os = "linux")]
        O_DIRECT,

        // Incomplete list. To be integrated if/when required.
    }
}

/// Flags used in [rename](super::S3Filesystem::rename).
#[derive(Clone, Copy, PartialEq, Eq)]
pub struct RenameFlags(u32);

libc_flags! {
    RenameFlags : u32 {
        #[cfg(target_os = "linux")]
        RENAME_NOREPLACE,
        #[cfg(target_os = "linux")]
        RENAME_EXCHANGE,
        #[cfg(target_os = "linux")]
        RENAME_WHITEOUT,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn conversion_test() {
        let raw = libc::O_WRONLY | libc::O_APPEND;
        let flags: OpenFlags = raw.into();
        assert_eq!(flags, OpenFlags::O_WRONLY | OpenFlags::O_APPEND);
    }

    #[test]
    fn unknown_test() {
        let raw = libc::O_ACCMODE; // Not defined as a value in `OpenFlags`.
        let flags: OpenFlags = raw.into();
        assert_eq!(flags.bits(), raw, "Unknown value should be preserved");
    }

    #[test]
    fn debug_test() {
        let flags = OpenFlags::O_WRONLY | OpenFlags::O_APPEND;
        let expected = format!(
            "OpenFlags({:#x} = O_WRONLY | O_APPEND)",
            libc::O_WRONLY | libc::O_APPEND
        );
        assert_eq!(format!("{flags:?}"), expected);
    }
}

macro_rules! libc_flags {
    ($name:ident {
        $(
        $flag_name:ident
        ),*$(,)+
    }
    ) => {
            bitflags::bitflags! {
                impl $name : i32 {
                    $(
                        const $flag_name = libc::$flag_name;
                    )*

                    const _ = !0;
                }
            }

            impl std::fmt::Display for $name {
                fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                    bitflags::parser::to_writer(self, f)
                }
            }
    }
}

/// Flags used in [`open`](super::S3Filesystem::open).
#[derive(Debug, Clone, Copy)]
pub struct OpenFlags(i32);

libc_flags! {
    OpenFlags {
        O_RDONLY,
        O_WRONLY,
        O_RDWR,
        O_ACCMODE,
        O_APPEND,
        O_SYNC,
        O_TRUNC,
        O_DSYNC,

        // Incomplete list. To be integrated if/when required.
    }
}

impl From<i32> for OpenFlags {
    fn from(value: i32) -> Self {
        Self::from_bits_retain(value)
    }
}

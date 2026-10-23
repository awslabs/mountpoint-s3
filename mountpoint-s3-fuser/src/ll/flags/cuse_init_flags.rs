use std::fmt::Display;
use std::fmt::Formatter;

bitflags::bitflags! {
    /// CUSE init flags.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub(crate) struct CuseInitFlags: u32 {
        /// Use unrestricted ioctl.
        const CUSE_UNRESTRICTED_IOCTL = 1 << 0;
    }
}

impl Display for CuseInitFlags {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.bits(), f)
    }
}

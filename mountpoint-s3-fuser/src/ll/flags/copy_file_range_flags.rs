use bitflags::bitflags;

bitflags! {
    /// Flags of `copy_file_range`.
    #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
    pub struct CopyFileRangeFlags: u64 {}
}

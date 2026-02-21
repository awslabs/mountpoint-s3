#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("Version ID is too long ({provided}) to fit in the buffer ({max})")]
    VersionIdTooLong { provided: usize, max: usize },
}

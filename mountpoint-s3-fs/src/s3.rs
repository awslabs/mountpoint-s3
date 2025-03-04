//! Personalities of different S3 implementations. We use this to auto-configure some sensible
//! defaults that differ between implementations.

/// The type of S3 we're talking to.
///
/// This enum intentionally doesn't implement PartialEq/Eq. You shouldn't test it directly. Instead,
/// use its methods like `is_list_ordered` to check the actual behavior you're looking for.
#[derive(Debug, Clone, Copy, Default)]
pub enum S3Personality {
    #[default]
    Standard,
    ExpressOneZone,
    Outposts,
}

impl S3Personality {
    pub fn is_list_ordered(&self) -> bool {
        match self {
            S3Personality::Standard => true,
            S3Personality::ExpressOneZone => false,
            S3Personality::Outposts => true,
        }
    }

    pub fn supports_additional_checksums(&self) -> bool {
        match self {
            S3Personality::Standard => true,
            S3Personality::ExpressOneZone => true,
            S3Personality::Outposts => false,
        }
    }
}

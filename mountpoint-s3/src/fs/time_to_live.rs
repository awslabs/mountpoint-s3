use std::{fmt::Display, num::ParseIntError, str::FromStr, time::Duration};

use thiserror::Error;

/// User-configurable time-to-live (TTL) for metadata caching.
#[derive(Debug, Clone, Copy)]
pub enum TimeToLive {
    Minimal,
    Indefinite,
    Duration(Duration),
}

#[derive(Error, Debug)]
pub enum TimeToLiveError {
    #[error("TTL must be a valid number of seconds, or 'indefinite', or 'minimal'")]
    InvalidInt(#[from] ParseIntError),
    #[error(
        "TTL must not be greater than {}s (~{} years), or be 'indefinite', or 'minimal'",
        TimeToLive::MAXIMUM_TTL_SECONDS,
        TimeToLive::MAXIMUM_TTL_YEARS
    )]
    TooLarge,
}

impl TimeToLive {
    const MINIMAL: &'static str = "minimal";
    const INDEFINITE: &'static str = "indefinite";

    // Set an upper bound that is practically "forever", but does not cause overflow
    // when added to `Instant::now()` (as `u64::MAX` would).
    const MAXIMUM_TTL_YEARS: u64 = 100;
    const MAXIMUM_TTL_SECONDS: u64 = Self::MAXIMUM_TTL_YEARS * 365 * 24 * 60 * 60;

    pub const INDEFINITE_DURATION: Duration = Duration::from_secs(Self::MAXIMUM_TTL_SECONDS);

    pub fn new_from_str(s: &str) -> Result<Self, TimeToLiveError> {
        match s {
            Self::MINIMAL => Ok(Self::Minimal),
            Self::INDEFINITE => Ok(Self::Indefinite),
            _ => {
                let seconds = s.parse()?;
                if seconds > Self::MAXIMUM_TTL_SECONDS {
                    return Err(TimeToLiveError::TooLarge);
                }

                let duration = Duration::from_secs(seconds);
                Ok(Self::Duration(duration))
            }
        }
    }
}

impl Display for TimeToLive {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Minimal => f.write_str(Self::MINIMAL),
            Self::Indefinite => f.write_str(Self::INDEFINITE),
            Self::Duration(duration) => write!(f, "{}s", duration.as_secs()),
        }
    }
}

impl FromStr for TimeToLive {
    type Err = TimeToLiveError;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        Self::new_from_str(s)
    }
}

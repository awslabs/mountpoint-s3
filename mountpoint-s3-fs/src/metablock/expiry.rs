use std::time::{Duration, Instant};

// 200 years seems long enough
pub const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

#[derive(Debug, Clone, Copy)]
pub struct Expiry(Instant);

impl Expiry {
    /// Create a new instance with the given TTL starting from now.
    pub fn from_now(ttl: Duration) -> Self {
        let expiry = Instant::now()
            .checked_add(ttl)
            .expect("TTL value should not overflow 64-bit time");
        Self(expiry)
    }

    /// The remaining TTL for this instance.
    pub fn remaining_ttl(&self) -> Duration {
        self.0.saturating_duration_since(Instant::now())
    }

    /// Check whether this instance is expired.
    pub fn is_expired(&self) -> bool {
        self.0 < Instant::now()
    }
}

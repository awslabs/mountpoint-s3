use std::time::{Duration, Instant};

#[derive(Debug, Clone, Copy)]
pub struct Expiry(Instant);

impl Expiry {
    /// Create a new instance with the given validity from now.
    pub fn from_now(validity: Duration) -> Self {
        let expiry = Instant::now()
            .checked_add(validity)
            .expect("64-bit time shouldn't overflow");
        Self(expiry)
    }

    /// How much longer this instance will be valid for.
    pub fn validity(&self) -> Duration {
        self.0.saturating_duration_since(Instant::now())
    }

    /// Check whether this instance is valid.
    pub fn is_valid(&self) -> bool {
        self.0 >= Instant::now()
    }
}

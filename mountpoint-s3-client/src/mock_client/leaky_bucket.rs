//! A token-based rate limiter.
//!
//! This is adapted from https://github.com/Gelbpunkt/leaky-bucket-lite (Apache 2.0) to remove the
//! Tokio dependency and instead work with the generic async-io and async-lock crates that we use.

use std::sync::Arc;
use std::time::{Duration, Instant};

use async_io::Timer;
use async_lock::{Mutex, MutexGuard};

#[derive(Debug)]
struct LeakyBucketInner {
    /// How many tokens this bucket can hold.
    max: u32,
    /// Interval at which the bucket gains tokens.
    refill_interval: Duration,
    /// Amount of tokens gained per interval.
    refill_amount: u32,

    locked: Mutex<LeakyBucketInnerLocked>,
}

#[derive(Debug)]
struct LeakyBucketInnerLocked {
    /// Current tokens in the bucket.
    tokens: u32,
    /// Last refill of the tokens.
    last_refill: Instant,
}

impl LeakyBucketInner {
    fn new(max: u32, tokens: u32, refill_interval: Duration, refill_amount: u32) -> Self {
        Self {
            max,
            refill_interval,
            refill_amount,
            locked: Mutex::new(LeakyBucketInnerLocked {
                tokens,
                last_refill: Instant::now(),
            }),
        }
    }

    /// Updates the tokens in the leaky bucket and returns the current amount
    /// of tokens in the bucket.
    #[inline]
    fn update_tokens(&self, locked: &mut MutexGuard<'_, LeakyBucketInnerLocked>) -> u32 {
        let time_passed = Instant::now() - locked.last_refill;

        #[allow(clippy::cast_possible_truncation, clippy::cast_sign_loss)]
        let refills_since = (time_passed.as_secs_f64() / self.refill_interval.as_secs_f64()).floor() as u32;

        let added_tokens = self.refill_amount.saturating_mul(refills_since);
        locked.tokens = locked.tokens.saturating_add(added_tokens).min(self.max);
        locked.last_refill += self.refill_interval * refills_since;

        locked.tokens
    }

    async fn acquire(&self, amount: u32) {
        let mut locked = self.locked.lock().await;
        if let Err(target_time) = self.try_acquire_locked(amount, &mut locked) {
            Timer::at(target_time).await;

            self.update_tokens(&mut locked);
            locked.tokens -= amount;
        }
    }

    fn try_acquire_locked(
        &self,
        amount: u32,
        locked: &mut MutexGuard<'_, LeakyBucketInnerLocked>,
    ) -> Result<(), Instant> {
        assert!(
            amount <= self.max,
            "Acquiring more tokens than the configured maximum is not possible"
        );

        let current_tokens = self.update_tokens(locked);

        if current_tokens < amount {
            let tokens_needed = amount - current_tokens;
            let mut refills_needed = tokens_needed / self.refill_amount;
            let refills_needed_remainder = tokens_needed % self.refill_amount;

            if refills_needed_remainder > 0 {
                refills_needed += 1;
            }

            Err(locked.last_refill + self.refill_interval * refills_needed)
        } else {
            locked.tokens -= amount;
            Ok(())
        }
    }
}

/// A leaky-bucket rate limiter.
#[derive(Clone, Debug)]
pub struct LeakyBucket {
    inner: Arc<LeakyBucketInner>,
}

impl LeakyBucket {
    fn new(max: u32, tokens: u32, refill_interval: Duration, refill_amount: u32) -> Self {
        let inner = Arc::new(LeakyBucketInner::new(max, tokens, refill_interval, refill_amount));

        Self { inner }
    }

    /// Construct a new leaky bucket through a builder.
    #[must_use]
    pub const fn builder() -> Builder {
        Builder::new()
    }

    /// Acquire the given `amount` of tokens. This method will panic when acquiring more tokens than
    /// the configured maximum.
    #[inline]
    pub async fn acquire(&self, amount: u32) {
        self.inner.acquire(amount).await;
    }
}

/// Builder for a leaky bucket.
#[derive(Debug)]
pub struct Builder {
    max: Option<u32>,
    tokens: Option<u32>,
    refill_interval: Option<Duration>,
    refill_amount: Option<u32>,
}

impl Builder {
    /// Create a new builder with all defaults.
    #[must_use]
    pub const fn new() -> Self {
        Self {
            max: None,
            tokens: None,
            refill_interval: None,
            refill_amount: None,
        }
    }

    /// Set the max value for the builder.
    #[must_use]
    pub const fn max(mut self, max: u32) -> Self {
        self.max = Some(max);
        self
    }

    /// The number of tokens that the bucket should start with.
    ///
    /// If set to larger than `max` at build time, will only saturate to max.
    #[must_use]
    pub const fn tokens(mut self, tokens: u32) -> Self {
        self.tokens = Some(tokens);
        self
    }

    /// Set the max value for the builder.
    #[must_use]
    pub const fn refill_interval(mut self, refill_interval: Duration) -> Self {
        self.refill_interval = Some(refill_interval);
        self
    }

    /// Set the refill amount to use.
    #[must_use]
    pub const fn refill_amount(mut self, refill_amount: u32) -> Self {
        self.refill_amount = Some(refill_amount);
        self
    }

    /// Construct a new leaky bucket.
    #[must_use]
    pub fn build(self) -> LeakyBucket {
        const DEFAULT_MAX: u32 = 120;
        const DEFAULT_TOKENS: u32 = 0;
        const DEFAULT_REFILL_INTERVAL: Duration = Duration::from_secs(1);
        const DEFAULT_REFILL_AMOUNT: u32 = 1;

        let max = self.max.unwrap_or(DEFAULT_MAX);
        let tokens = self.tokens.unwrap_or(DEFAULT_TOKENS);
        let refill_interval = self.refill_interval.unwrap_or(DEFAULT_REFILL_INTERVAL);
        let refill_amount = self.refill_amount.unwrap_or(DEFAULT_REFILL_AMOUNT);

        LeakyBucket::new(max, tokens, refill_interval, refill_amount)
    }
}

impl Default for Builder {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_leaky_bucket() {
        const INTERVAL: Duration = Duration::from_millis(20);

        let leaky = Builder::new()
            .tokens(0)
            .max(10)
            .refill_amount(10)
            .refill_interval(INTERVAL)
            .build();

        let mut wakeups = 0u32;
        let mut duration = None;

        let test = async {
            let start = Instant::now();
            leaky.acquire(10).await;
            wakeups += 1;
            leaky.acquire(10).await;
            wakeups += 1;
            leaky.acquire(10).await;
            wakeups += 1;
            duration = Some(Instant::now().duration_since(start));
        };

        test.await;

        assert_eq!(3, wakeups);
        assert!(duration.expect("expected measured duration") > INTERVAL * 2);
    }
}

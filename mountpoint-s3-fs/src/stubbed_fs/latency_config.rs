//! Latency configuration for stub filesystem operations
//!
//! This module adds a possibility to simulate latency in the stubbed fs.
//! For this, the user has to configure the distribution by setting the `EXPERIMENTAL_STUB_LATENCY_TIERS`
//! environment variable.
//!
//! To model a high-tailed distribution, we model different percentiles as independent
//! normal distributions. Thus, we first use a random number to decide which distribution to
//! sample from and then sample from the respective normal distribution.

use rand::{Rng, thread_rng};
use rand_distr::{Distribution, Normal};
use std::env;
use tracing::info;

/// A latency tier with its distribution parameters
#[derive(Debug, Clone)]
struct LatencyTier {
    threshold: f64, // cumulative probability threshold
    distribution: Normal<f64>,
}

/// Configuration for latency simulation in stub modes
#[derive(Debug)]
pub struct LatencyConfig {
    tiers: [LatencyTier; 4],
}

impl LatencyConfig {
    /// Create a new LatencyConfig from environment variables
    ///
    /// Reads from EXPERIMENTAL_STUB_DISTRIBUTION_TIERS environment variable with format:
    /// "default_mean,default_stddev,p90_mean,p90_stddev,p99_mean,p99_stddev,p999_mean,p999_stddev"
    ///
    /// Example: "180,40,400,60,650,100,2000,5000"
    pub fn from_env() -> Option<Self> {
        let config_str = env::var("EXPERIMENTAL_STUB_DISTRIBUTION_TIERS").unwrap_or_default();

        if config_str.is_empty() {
            return None;
        }

        let values: Vec<f64> = config_str.split(',').filter_map(|s| s.trim().parse().ok()).collect();

        if values.len() != 8 {
            info!(
                "EXPERIMENTAL_STUB_DISTRIBUTION_TIERS must have exactly 8 values \
                (default_mean,default_stddev,p90_mean,p90_stddev,p99_mean,p99_stddev,p999_mean,p999_stddev). \
                "
            );
            return None;
        }

        Some(Self {
            tiers: [
                LatencyTier {
                    threshold: 0.9,
                    distribution: Normal::new(values[0], values[1]).unwrap(),
                },
                LatencyTier {
                    threshold: 0.99,
                    distribution: Normal::new(values[2], values[3]).unwrap(),
                },
                LatencyTier {
                    threshold: 0.999,
                    distribution: Normal::new(values[4], values[5]).unwrap(),
                },
                LatencyTier {
                    threshold: 1.0,
                    distribution: Normal::new(values[6], values[7]).unwrap(),
                },
            ],
        })
    }

    /// Sample a latency value from the configured distribution
    ///
    /// Returns latency in microseconds, guaranteed to be non-negative
    pub fn sample_latency(&self) -> f64 {
        let mut rng = thread_rng();
        let rand_val = rng.gen_range(0.0..1.0);

        let tier = self
            .tiers
            .iter()
            .find(|t| rand_val < t.threshold)
            .unwrap_or(&self.tiers[3]);

        tier.distribution.sample(&mut rng).max(0.0)
    }
}

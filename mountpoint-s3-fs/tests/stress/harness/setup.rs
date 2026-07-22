//! Setup phase for stress scenarios.

use std::path::Path;

mod budget_hold;
mod cache_warmup;

pub use budget_hold::{budget_parts, hold_budget_parts};
pub use cache_warmup::warm_cache;

/// A guard produced by a scenario's [setup phase](super::Scenario::setup). The harness keeps it
/// alive for the entire run and drops it just before unmount, so whatever a setup step must keep in
/// effect during the workload lives here.
pub trait SetupGuard {}

/// A scenario's setup step: run to completion after mount and before workers, returning a
/// [`SetupGuard`] held for the whole run.
pub type SetupFn = fn(&Path) -> Box<dyn SetupGuard>;

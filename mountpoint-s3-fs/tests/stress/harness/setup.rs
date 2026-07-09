//! Setup phase for stress scenarios.

use std::path::Path;

mod budget_hold;

pub use budget_hold::{budget_parts, data_buffer_budget, hold_budget_parts};

/// A guard produced by a scenario's [setup phase](super::Scenario::setup). The harness keeps it
/// alive for the entire run and drops it just before unmount, so whatever a setup step must keep in
/// effect during the workload lives here.
pub trait SetupGuard {}

/// A scenario's setup step: run to completion after mount and before workers, returning a
/// [`SetupGuard`] held for the whole run.
pub type SetupFn = fn(&Path) -> Box<dyn SetupGuard>;

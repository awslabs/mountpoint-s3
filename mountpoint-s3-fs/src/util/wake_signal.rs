//! A coalescing wake signal for parking a single consumer thread until an
//! event of interest occurs, with optional timeout.
//!
//! Built on `Mutex<bool>` + `Condvar`. Use it when one thread needs to
//! suspend until another thread signals "wake up", and where multiple
//! signals before the next wake should collapse to one. Notifies that
//! arrive while the consumer is busy are absorbed — the consumer observes
//! the pending flag on its next [`WakeSignal::wait_timeout`] call.
//!
//! # Example
//!
//! ```ignore
//! use std::sync::Arc;
//! use std::time::Duration;
//! use mountpoint_s3_fs::util::wake_signal::WakeSignal;
//!
//! let signal = Arc::new(WakeSignal::new());
//! let consumer = std::thread::spawn({
//!     let signal = signal.clone();
//!     move || loop {
//!         signal.wait_timeout(Duration::from_secs(60));
//!         // ... do work ...
//!     }
//! });
//! signal.notify(); // wakes the consumer immediately
//! # drop(consumer);
//! ```

use std::time::Duration;

use crate::sync::{Condvar, Mutex};

/// A coalescing single-consumer wake signal.
#[derive(Debug, Default)]
pub struct WakeSignal {
    pending: Mutex<bool>,
    cvar: Condvar,
}

impl WakeSignal {
    pub fn new() -> Self {
        Self::default()
    }

    /// Wake the consumer if it is currently in [`Self::wait_timeout`].
    ///
    /// If the consumer is busy or about to enter wait, the pending flag
    /// is set and observed on the next [`Self::wait_timeout`] call —
    /// notifies before wait are not lost.
    pub fn notify(&self) {
        let mut pending = self.pending.lock().unwrap();
        *pending = true;
        self.cvar.notify_one();
    }

    /// Wait up to `timeout` for a [`Self::notify`]. Returns once the pending
    /// flag is set (consuming it) or once the timeout elapses, whichever
    /// comes first. Spurious wakeups are handled by looping on the flag.
    ///
    /// Returns `true` if the timeout elapsed without a notify, `false` if a
    /// notify was observed and consumed.
    pub fn wait_timeout(&self, timeout: Duration) -> bool {
        let pending = self.pending.lock().unwrap();
        let (mut pending, result) = self.cvar.wait_timeout_while(pending, timeout, |p| !*p).unwrap();
        *pending = false;
        result.timed_out()
    }
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;
    use std::time::Duration;

    use tokio::sync::oneshot;

    use super::WakeSignal;

    /// Generous upper bound for waits we expect to return via `notify`. If a
    /// test is going to block, a real bug will block far longer than this.
    const NOTIFY_WAIT_TIMEOUT: Duration = Duration::from_secs(1);
    /// Short timeout used when a test expects the wait to actually time out.
    /// Kept small so the test suite stays fast.
    const SHORT_TIMEOUT: Duration = Duration::from_millis(50);

    /// `notify` must wake a waiter blocked in `wait_timeout`. This is the
    /// primitive's defining behavior.
    #[test]
    fn notify_wakes_waiter() {
        let signal = Arc::new(WakeSignal::new());
        let (started_tx, started_rx) = oneshot::channel();

        let waiter = std::thread::spawn({
            let signal = signal.clone();
            move || {
                started_tx.send(()).unwrap();
                signal.wait_timeout(NOTIFY_WAIT_TIMEOUT)
            }
        });

        // Best-effort: confirm the waiter is alive before notifying. We can't
        // portably observe that it has parked on the cvar, but `notify` sets
        // the pending flag under the mutex either way, so this still verifies
        // that notify wakes the waiter (via the cvar or the pre-park path).
        started_rx.blocking_recv().unwrap();

        signal.notify();
        let timed_out = waiter.join().expect("waiter panicked");
        assert!(!timed_out, "wait_timeout reported timeout, expected notify");
    }

    /// `notify` called *before* `wait_timeout` must not be lost — the
    /// pending flag is observed and the wait returns without timing out.
    #[test]
    fn notify_before_wait_is_not_lost() {
        let signal = WakeSignal::new();
        signal.notify();
        let timed_out = signal.wait_timeout(NOTIFY_WAIT_TIMEOUT);
        assert!(!timed_out, "pre-notify was lost; wait_timeout reported timeout");
    }

    /// Multiple `notify` calls before the next `wait_timeout` collapse
    /// to a single wake — the flag is consumed once, and a *subsequent*
    /// `wait_timeout` with no further notify must time out.
    #[test]
    fn notify_coalesces() {
        let signal = WakeSignal::new();
        for _ in 0..5 {
            signal.notify();
        }
        let first_timed_out = signal.wait_timeout(NOTIFY_WAIT_TIMEOUT);
        assert!(!first_timed_out, "first wait did not consume any of 5 pre-notifies");

        // If notifies were *not* coalesced, four credits would remain and
        // this wait would return immediately. With coalescing it must time out.
        let second_timed_out = signal.wait_timeout(SHORT_TIMEOUT);
        assert!(
            second_timed_out,
            "5 notifies were not coalesced; second wait returned without notify"
        );
    }

    /// With no `notify`, `wait_timeout` must report a timeout after the
    /// duration elapses.
    #[test]
    fn wait_timeout_reports_timeout_when_no_notify() {
        let signal = WakeSignal::new();
        let timed_out = signal.wait_timeout(SHORT_TIMEOUT);
        assert!(timed_out, "wait_timeout reported notify when none was sent");
    }
}

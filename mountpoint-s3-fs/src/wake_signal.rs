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
//! use mountpoint_s3_fs::wake_signal::WakeSignal;
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
    pub fn wait_timeout(&self, timeout: Duration) {
        let pending = self.pending.lock().unwrap();
        let (mut pending, _) = self.cvar.wait_timeout_while(pending, timeout, |p| !*p).unwrap();
        *pending = false;
    }
}

#[cfg(all(test, not(feature = "shuttle")))]
mod tests {
    use std::sync::Arc;
    use std::time::{Duration, Instant};

    use tokio::sync::oneshot;

    use super::WakeSignal;

    const TEST_WAIT_TIMEOUT: Duration = Duration::from_secs(1);

    /// `notify` must wake a waiter blocked in `wait_timeout` well before
    /// the timeout elapses. This is the primitive's defining behavior.
    #[test]
    fn notify_wakes_waiter_before_timeout() {
        let signal = Arc::new(WakeSignal::new());
        let (started_tx, started_rx) = oneshot::channel();

        let waiter = std::thread::spawn({
            let signal = signal.clone();
            move || {
                started_tx.send(()).unwrap();
                let start = Instant::now();
                signal.wait_timeout(Duration::from_secs(60));
                start.elapsed()
            }
        });

        // Make sure the waiter has reached its wait_timeout call so we
        // exercise the cvar wake path (rather than the pre-notify path).
        started_rx.blocking_recv().unwrap();
        std::thread::sleep(Duration::from_millis(10));

        signal.notify();
        let elapsed = waiter.join().expect("waiter panicked");
        assert!(
            elapsed < TEST_WAIT_TIMEOUT,
            "wait_timeout returned in {elapsed:?}, expected < {TEST_WAIT_TIMEOUT:?}; \
             notify did not wake the cvar",
        );
    }

    /// `notify` called *before* `wait_timeout` must not be lost — the
    /// pending flag is observed and the wait returns immediately.
    #[test]
    fn notify_before_wait_is_not_lost() {
        let signal = WakeSignal::new();
        signal.notify();
        let start = Instant::now();
        signal.wait_timeout(Duration::from_secs(60));
        let elapsed = start.elapsed();
        assert!(
            elapsed < TEST_WAIT_TIMEOUT,
            "wait_timeout did not return promptly after pre-notify (took {elapsed:?})",
        );
    }

    /// Multiple `notify` calls before the next `wait_timeout` collapse
    /// to a single wake (the flag is consumed once). The next
    /// `wait_timeout` after that runs the full timeout.
    ///
    /// We don't run the second wait for its full timeout; we just verify
    /// that the *first* wait returns promptly (consuming the flag), so a
    /// follow-up notify is required to wake again.
    #[test]
    fn notify_coalesces() {
        let signal = WakeSignal::new();
        for _ in 0..5 {
            signal.notify();
        }
        let start = Instant::now();
        signal.wait_timeout(Duration::from_secs(60));
        let elapsed = start.elapsed();
        assert!(
            elapsed < TEST_WAIT_TIMEOUT,
            "first wait_timeout did not consume any of 5 pre-notifies (took {elapsed:?})",
        );
    }
}

//! Time conversion utilities for FUSE operations.

use std::convert::TryFrom;
use std::time::Duration;
use std::time::SystemTime;
use std::time::UNIX_EPOCH;

/// Converts a `SystemTime` to a tuple of (seconds, nanoseconds) since the Unix epoch.
///
/// This handles times before the Unix epoch by returning negative seconds.
/// Values that overflow `i64` are saturated to `i64::MAX` or `i64::MIN`.
pub(crate) fn time_from_system_time(system_time: &SystemTime) -> (i64, u32) {
    // Convert to signed 64-bit time with epoch at 0
    match system_time.duration_since(UNIX_EPOCH) {
        Ok(duration) => match i64::try_from(duration.as_secs()) {
            Ok(secs) => (secs, duration.subsec_nanos()),
            Err(_) => (i64::MAX, 999_999_999),
        },
        Err(before_epoch_error) => {
            let d = before_epoch_error.duration();
            let secs = d.as_secs();
            let nanos = d.subsec_nanos();

            // Minus min representable value.
            if (secs, nanos) >= (i64::MAX as u64 + 1, 0) {
                // Saturate.
                (i64::MIN, 0)
            } else if nanos == 0 {
                (-(secs as i64), 0)
            } else {
                (-(secs as i64) - 1, 1_000_000_000 - nanos)
            }
        }
    }
}

/// Converts a tuple of (seconds, nanoseconds) since the Unix epoch to a `SystemTime`.
///
/// This handles negative seconds (times before the Unix epoch).
pub(crate) fn system_time_from_time(secs: i64, nsecs: u32) -> SystemTime {
    if secs >= 0 {
        SystemTime::UNIX_EPOCH + Duration::new(secs as u64, nsecs)
    } else {
        // TODO: overflow
        // TODO: 1_000_000_000 - nsec
        SystemTime::UNIX_EPOCH - Duration::new((-secs) as u64, nsecs)
    }
}

#[cfg(test)]
mod test {
    use std::time::Duration;
    use std::time::UNIX_EPOCH;

    use crate::time::time_from_system_time;

    #[test]
    fn test_time_from_system_time_negative() {
        let before_epoch = UNIX_EPOCH - Duration::new(1, 200_000_000);
        let (secs, nanos) = time_from_system_time(&before_epoch);
        assert_eq!((-2, 800_000_000), (secs, nanos));
    }

    #[test]
    fn test_time_from_system_time_i64_min_boundary() {
        // timespec { tv_sec: i64::MIN, tv_nsec: 0 }
        let min_system_time = UNIX_EPOCH - Duration::new(i64::MAX as u64 + 1, 0);
        let (secs, nanos) = time_from_system_time(&min_system_time);
        assert_eq!((i64::MIN, 0), (secs, nanos));

        let min_system_time_plus_eps = UNIX_EPOCH - Duration::new(i64::MAX as u64, 800_000_000);
        let (secs, nanos) = time_from_system_time(&min_system_time_plus_eps);
        assert_eq!((i64::MIN, 200_000_000), (secs, nanos));

        let min_system_time_plus_one = UNIX_EPOCH - Duration::new(i64::MAX as u64, 0);
        let (secs, nanos) = time_from_system_time(&min_system_time_plus_one);
        assert_eq!((i64::MIN + 1, 0), (secs, nanos));
    }
}

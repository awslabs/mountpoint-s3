pub(crate) const NC: &str = "\x1b[39m";
pub(crate) const GREEN: &str = "\x1b[32m";

/// Print a message to stderr with green color.
macro_rules! green {
    ($($arg:tt)*) => {
        eprintln!("{}{}{}", $crate::ansi::GREEN, format_args!($($arg)*), $crate::ansi::NC)
    };
}
pub(crate) use green;

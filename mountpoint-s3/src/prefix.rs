use std::fmt::Display;
use std::str::FromStr;

use thiserror::Error;

#[derive(Error, Debug)]
pub enum PrefixError {
    #[error("prefix must end in '/'")]
    MissingFinalDelimiter,
}

/// A prefix string ending in `/`, or the empty string
#[derive(Debug, Clone, Default)]
pub struct Prefix {
    path: String,
}

impl Prefix {
    pub fn new(prefix: &str) -> Result<Self, PrefixError> {
        if !Self::is_valid(prefix) {
            Err(PrefixError::MissingFinalDelimiter)
        } else {
            Ok(Self {
                path: prefix.to_owned(),
            })
        }
    }

    fn is_valid(prefix: &str) -> bool {
        prefix.is_empty() || prefix.ends_with('/')
    }
}

impl Display for Prefix {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.path)
    }
}

impl FromStr for Prefix {
    type Err = PrefixError;

    fn from_str(s: &str) -> Result<Self, PrefixError> {
        Prefix::new(s)
    }
}

#[cfg(test)]
mod tests {
    use test_case::test_case;

    use super::*;

    #[test_case(" "; "whitespace")]
    #[test_case("hello"; "not ending in slash")]
    #[test_case("hello/world"; "nested folder not ending in slash")]
    fn test_invalid_prefix(prefix: &str) {
        assert!(!Prefix::is_valid(prefix))
    }

    #[test_case(""; "empty string")]
    #[test_case("hello/"; "ending in slash")]
    #[test_case("hello/world/"; "nested folder ending in slash")]
    #[test_case(" /"; "whitespace ending in slash")]
    #[test_case("/"; "single slash")]
    #[test_case("//"; "double slash")]
    #[test_case("/hello/"; "starting with slash")]
    fn test_valid_prefix(prefix: &str) {
        assert!(Prefix::is_valid(prefix))
    }
}

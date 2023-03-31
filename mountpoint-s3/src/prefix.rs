use std::fmt::Display;
use std::str::FromStr;

use anyhow::anyhow;

/// A prefix string ending in `/`, or the empty string
#[derive(Debug, Clone, Default)]
pub struct Prefix {
    path: String,
}

impl Prefix {
    pub fn new(prefix: &str) -> anyhow::Result<Self> {
        if !Self::is_valid(prefix) {
            Err(anyhow!("must end in '/'"))
        } else {
            Ok(Self {
                path: prefix.to_owned(),
            })
        }
    }

    pub fn is_valid(prefix: &str) -> bool {
        prefix.is_empty() || prefix.ends_with('/')
    }
}

impl Display for Prefix {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_fmt(format_args!("{}", self.path))
    }
}

impl FromStr for Prefix {
    type Err = anyhow::Error;

    fn from_str(s: &str) -> anyhow::Result<Self> {
        Prefix::new(s)
    }
}

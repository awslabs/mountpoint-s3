use std::fmt;

/// Override path to `fusermount` for running tests.
#[derive(Debug, Clone, Copy)]
pub(crate) enum Fusermount {
    Fusermount,
    Fusermount3,
    /// `/bin/false`.
    False,
}

impl Fusermount {
    pub(crate) const ENV_VAR: &str = "FUSERMOUNT_PATH";

    pub(crate) fn as_path(&self) -> &'static str {
        match self {
            Fusermount::Fusermount => "fusermount",
            Fusermount::Fusermount3 => "fusermount3",
            Fusermount::False => "/bin/false",
        }
    }
}

impl fmt::Display for Fusermount {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.as_path())
    }
}

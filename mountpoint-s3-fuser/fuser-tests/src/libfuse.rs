use std::fmt;
use std::str::FromStr;

use crate::features::Feature;
use crate::fusermount::Fusermount;

#[derive(Clone, Copy, Debug)]
pub(crate) enum Libfuse {
    Libfuse2,
    Libfuse3,
}

impl Libfuse {
    pub(crate) fn feature(&self) -> Feature {
        match self {
            Libfuse::Libfuse2 => Feature::Libfuse2,
            Libfuse::Libfuse3 => Feature::Libfuse3,
        }
    }

    pub(crate) fn fusermount(&self) -> Fusermount {
        match self {
            Libfuse::Libfuse2 => Fusermount::Fusermount,
            Libfuse::Libfuse3 => Fusermount::Fusermount3,
        }
    }
}

impl FromStr for Libfuse {
    type Err = String;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "libfuse2" => Ok(Libfuse::Libfuse2),
            "libfuse3" => Ok(Libfuse::Libfuse3),
            _ => Err(format!("Unknown libfuse version: {}", s)),
        }
    }
}

impl fmt::Display for Libfuse {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Libfuse::Libfuse2 => write!(f, "libfuse2"),
            Libfuse::Libfuse3 => write!(f, "libfuse3"),
        }
    }
}

//! Feature flags for cargo builds.

use std::fmt;

/// Cargo feature flags for fuser.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub(crate) enum Feature {
    /// Experimental async API.
    Experimental,
    /// Use libfuse2 for mounting.
    Libfuse2,
    /// Use libfuse3 for mounting.
    Libfuse3,
}

impl Feature {
    /// Returns the feature name as used in Cargo.toml.
    fn as_str(&self) -> &'static str {
        match self {
            Feature::Experimental => "experimental",
            Feature::Libfuse2 => "libfuse2",
            Feature::Libfuse3 => "libfuse3",
        }
    }
}

/// Converts a slice of features to a comma-separated string.
fn features_to_string(features: &[Feature]) -> String {
    features
        .iter()
        .map(|f| f.as_str())
        .collect::<Vec<_>>()
        .join(",")
}

/// Converts a slice of features to a cargo flag string.
/// Returns `None` if no features, or `Some("--features=feature1,feature2,...")` otherwise.
pub(crate) fn features_to_flags(features: &[Feature]) -> Option<String> {
    if features.is_empty() {
        None
    } else {
        Some(format!("--features={}", features_to_string(features)))
    }
}

impl fmt::Display for Feature {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.as_str())
    }
}

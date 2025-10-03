//! Information from build.
//!
//! Keeping this simple and ensuring we control what constants are exposed to the rest of the code base.

/// Information from build, made available by built crate.
mod built {
    include!(concat!(env!("OUT_DIR"), "/built.rs"));
}

/// Valid SemVer version constructed using declared Cargo version, build target,and short commit hash if needed.
pub const FULL_VERSION: &str = {
    const RELEASE_INFO: (bool, &str) = release_info();
    if RELEASE_INFO.0 {  // is_official build
        if RELEASE_INFO.1.is_empty() {  // no build targert specified
            built::PKG_VERSION
        } else {
            const_format::concatcp!(built::PKG_VERSION, "+", RELEASE_INFO.1) // build targert specified
        }
    } else {
        const_format::concatcp!(built::PKG_VERSION, "-unofficial", git_commit_suffix()) // unofficial build
    }
};

const fn release_info() -> (bool, &'static str) {
    match option_env!("MOUNTPOINT_S3_AWS_RELEASE_TARGET") {
        Some(value) => (true, value),
        None => (false, ""),
    }
}

/// Formats the current git commit hash and dirty state as a version suffix.
/// Returns the empty string if building outside a git repository.
const fn git_commit_suffix() -> &'static str {
    if built::GIT_COMMIT_HASH_SHORT.is_none() {
        return "";
    }
    // A little hacky so we can pull out the hash as a const
    const COMMIT_HASH_STR: &str = match built::GIT_COMMIT_HASH_SHORT {
        Some(hash) => hash,
        // Evaluated at compile time, but never used
        None => "unreachable",
    };
    const COMMIT_DIRTY_STR: &str = match built::GIT_DIRTY {
        Some(true) => "-dirty",
        _ => "",
    };
    const_format::concatcp!("+", COMMIT_HASH_STR, COMMIT_DIRTY_STR)
}

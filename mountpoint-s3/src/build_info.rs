//! Information from build.
//!
//! Keeping this simple and ensuring we control what constants are exposed to the rest of the code base.

/// Information from build, made available by built crate.
mod built {
    include!(concat!(env!("OUT_DIR"), "/built.rs"));
}

/// Valid SemVer version constructed using declared Cargo version, release target, and short commit hash if needed.
pub const FULL_VERSION: &str = {
    const RELEASE_INFO: Option<&'static str> = official_aws_release_target();

    if RELEASE_INFO.is_none() {
        const_format::concatcp!(built::PKG_VERSION, "-unofficial", git_commit_suffix())
    } else {
        // A little hacky so we can pull out the target as a const
        const RELEASE_INFO_STR: &str = match RELEASE_INFO {
            Some(target) => target,
            // Evaluated at compile time, but never used
            None => "unreachable",
        };
        #[allow(
            clippy::const_is_empty,
            reason = "The RELEASE_INFO_STR can be empty or non-empty depending on the environment at build time"
        )]
        if RELEASE_INFO_STR.is_empty() {
            built::PKG_VERSION
        } else {
            const_format::concatcp!(built::PKG_VERSION, "+", RELEASE_INFO_STR)
        }
    }
};

/// Checks the environment for the official Mountpoint for Amazon S3 release target.
const fn official_aws_release_target() -> Option<&'static str> {
    option_env!("MOUNTPOINT_S3_AWS_RELEASE_TARGET")
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

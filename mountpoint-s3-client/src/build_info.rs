//! Information from build.
//!
//! Keeping this simple and ensuring we control what constants are exposed to the rest of the code base.

/// Information from build, made available by built crate.
mod built {
    include!(concat!(env!("OUT_DIR"), "/built.rs"));
}

/// Valid SemVer version constructed using declared Cargo version and short commit hash.
pub const FULL_VERSION: &str = {
    // A little hacky so we can pull out the hash as a const
    if built::GIT_COMMIT_HASH_SHORT.is_some() {
        const COMMIT_HASH_STR: &str = match built::GIT_COMMIT_HASH_SHORT {
            Some(hash) => hash,
            // Evaluated at compile time, but never used
            None => "unreachable",
        };
        const COMMIT_DIRTY_STR: &str = match built::GIT_DIRTY {
            Some(true) => "-dirty",
            _ => "",
        };
        const_format::concatcp!(built::PKG_VERSION, "-", COMMIT_HASH_STR, COMMIT_DIRTY_STR)
    } else {
        built::PKG_VERSION
    }
};

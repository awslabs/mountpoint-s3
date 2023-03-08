//! Information from build.
//!
//! Keeping this simple and ensuring we control what constants are exposed to the rest of the code base.

/// Information from build, made available by built crate.
mod built {
    include!(concat!(env!("OUT_DIR"), "/built.rs"));
}

/// Valid SemVer version constructed using declared Cargo version and short commit hash.
pub const FULL_VERSION: &str = {
    const COMMIT_HASH_STR: &str = match built::GIT_COMMIT_HASH_SHORT {
        Some(hash) => hash,
        None => "UNKNOWN",
    };

    const_format::concatcp!(built::PKG_VERSION, "-", COMMIT_HASH_STR)
};

//! Information from build.
//!
//! Keeping this simple and ensuring we control what constants are exposed to the rest of the code base.

/// Information from build, made available by built crate.
mod built {
    include!(concat!(env!("OUT_DIR"), "/built.rs"));
}

/// Valid SemVer version constructed using declared Cargo version and short commit hash if needed.
pub const FULL_VERSION: &str = {
    if is_official_aws_release() {
        built::PKG_VERSION
    } else {
        // A little hacky so we can pull out the hash as a const
        const COMMIT_HASH_STR: &str = match built::GIT_COMMIT_HASH_SHORT {
            Some(hash) => hash,
            None => "",
        };
        const UNOFFICIAL_SUFFIX: &str = if COMMIT_HASH_STR.is_empty() {
            "-unofficial"
        } else {
            const_format::concatcp!("-unofficial+", COMMIT_HASH_STR)
        };
        const_format::concatcp!(built::PKG_VERSION, UNOFFICIAL_SUFFIX)
    }
};

/// Checks environment to see if this build is for an official Mountpoint for Amazon S3 release.
const fn is_official_aws_release() -> bool {
    option_env!("MOUNTPOINT_S3_AWS_RELEASE").is_some()
}

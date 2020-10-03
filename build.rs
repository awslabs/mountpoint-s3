#[cfg(all(not(target_os = "macos"), not(feature = "abi-7-20")))]
const LIBFUSE_NAME: &str = "fuse";
#[cfg(all(not(target_os = "macos"), feature = "abi-7-20"))]
const LIBFUSE_NAME: &str = "fuse3";

#[cfg(target_os = "macos")]
const LIBFUSE_NAME: &str = "osxfuse";

#[cfg(not(feature = "abi-7-9"))]
const REQUIRED_VERSION: &str = "2.6.0";
#[cfg(all(feature = "abi-7-9", not(feature = "abi-7-20")))]
const REQUIRED_VERSION: &str = "2.9.1";
#[cfg(all(feature = "abi-7-20", not(feature = "abi-7-27")))]
const REQUIRED_VERSION: &str = "3.0.0";
#[cfg(all(feature = "abi-7-27", not(feature = "abi-7-30")))]
const REQUIRED_VERSION: &str = "3.5.0";
#[cfg(feature = "abi-7-30")]
const REQUIRED_VERSION: &str = "3.9.0";

fn main() {
    pkg_config::Config::new()
        .atleast_version(REQUIRED_VERSION)
        .probe(LIBFUSE_NAME)
        .map_err(|e| eprintln!("{}", e))
        .unwrap();
}

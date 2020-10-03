#[cfg(all(
    not(target_os = "macos"),
    not(feature = "abi-7-20"),
    feature = "libfuse"
))]
const LIBFUSE_NAME: &str = "fuse";
#[cfg(all(not(target_os = "macos"), feature = "abi-7-20", feature = "libfuse"))]
const LIBFUSE_NAME: &str = "fuse3";

#[cfg(target_os = "macos")]
const LIBFUSE_NAME: &str = "osxfuse";

#[cfg(all(not(feature = "abi-7-9"), feature = "libfuse"))]
const REQUIRED_VERSION: &str = "2.6.0";
#[cfg(all(feature = "abi-7-9", not(feature = "abi-7-20"), feature = "libfuse"))]
const REQUIRED_VERSION: &str = "2.9.1";
#[cfg(all(feature = "abi-7-20", not(feature = "abi-7-27"), feature = "libfuse"))]
const REQUIRED_VERSION: &str = "3.0.0";
#[cfg(all(feature = "abi-7-27", not(feature = "abi-7-30"), feature = "libfuse"))]
const REQUIRED_VERSION: &str = "3.5.0";
#[cfg(all(feature = "abi-7-30", feature = "libfuse"))]
const REQUIRED_VERSION: &str = "3.9.0";

fn main() {
    #[cfg(feature = "libfuse")]
    {
        pkg_config::Config::new()
            .atleast_version(REQUIRED_VERSION)
            .probe(LIBFUSE_NAME)
            .map_err(|e| eprintln!("{}", e))
            .unwrap();
    }
}

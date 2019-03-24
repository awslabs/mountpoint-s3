#[cfg(not(target_os = "macos"))]
static LIBFUSE_NAME: &str = "fuse";

#[cfg(target_os = "macos")]
static LIBFUSE_NAME: &str = "osxfuse";

fn main () {
    pkg_config::Config::new().atleast_version("2.6.0").probe(LIBFUSE_NAME).unwrap();
}

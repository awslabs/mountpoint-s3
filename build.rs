static MAC_FUSE_4: &str = "/Library/Filesystems/macfuse.fs/Contents/Resources/mount_macfuse";

fn main() {
    #[cfg(all(not(feature = "libfuse"), not(target_os = "linux")))]
    unimplemented!("Building without libfuse is only supported on Linux");

    #[cfg(feature = "libfuse")]
    {
        #[cfg(target_os = "macos")]
        {
            let probelib = if std::path::Path::new(MAC_FUSE_4).exists() {
                "fuse"
            } else {
                "osxfuse"
            };
            pkg_config::Config::new()
                .atleast_version("2.6.0")
                .probe(probelib)
                .map_err(|e| eprintln!("{}", e))
                .unwrap();
            println!("cargo:rustc-cfg=feature=\"libfuse2\"");
        }
        #[cfg(not(target_os = "macos"))]
        {
            // First try to link with libfuse3
            if pkg_config::Config::new()
                .atleast_version("3.0.0")
                .probe("fuse3")
                .map_err(|e| eprintln!("{}", e))
                .is_ok()
            {
                println!("cargo:rustc-cfg=feature=\"libfuse3\"");
            } else {
                // Fallback to libfuse
                pkg_config::Config::new()
                    .atleast_version("2.6.0")
                    .probe("fuse")
                    .map_err(|e| eprintln!("{}", e))
                    .unwrap();
                println!("cargo:rustc-cfg=feature=\"libfuse2\"");
            }
        }
    }
}

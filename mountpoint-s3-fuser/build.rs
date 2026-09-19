fn main() {
    // Register rustc cfg for switching between mount implementations.
    // When fuser MSRV is updated to v1.77 or above, we should switch from 'cargo:' to 'cargo::' syntax.
    println!(
        "cargo:rustc-check-cfg=cfg(fuser_mount_impl, values(\"pure-rust\", \"libfuse2\", \"libfuse3\"))"
    );
    // macFUSE extends the wire ABI with extra fields in fuse_attr, fuse_setattr_in and the
    // xattr structs, plus high init flag bits. `fuser_macfuse_abi` selects that layout;
    // without it we use the upstream one. FUSE-T only speaks the extended layout on its
    // older mount profiles: the profile it picks for protocol 7.28 and above, which is what
    // this crate negotiates, uses the upstream layout, so the cfg is set for macFUSE only.
    println!("cargo:rustc-check-cfg=cfg(fuser_macfuse_abi)");
    // Set when linking against FUSE-T, which serves the mount to the host's NFS client
    // rather than to a FUSE kernel module. See `HOST_IS_NFS_CLIENT` for what that changes.
    println!("cargo:rustc-check-cfg=cfg(fuser_fuse_t)");

    #[cfg(all(not(feature = "libfuse"), not(target_os = "linux")))]
    unimplemented!("Building without libfuse is only supported on Linux");

    #[cfg(not(feature = "libfuse"))]
    {
        println!("cargo:rustc-cfg=fuser_mount_impl=\"pure-rust\"");
    }
    #[cfg(feature = "libfuse")]
    {
        if cfg!(target_os = "macos") {
            if pkg_config::Config::new()
                .atleast_version("1.0.0")
                .probe("fuse-t") // for FUSE-T (kext-less FUSE)
                .map_err(|e| eprintln!("{e}"))
                .is_ok()
            {
                println!("cargo:rustc-cfg=fuser_mount_impl=\"libfuse2\"");
                println!("cargo:rustc-cfg=fuser_fuse_t");
            } else if pkg_config::Config::new()
                .atleast_version("2.6.0")
                .probe("fuse") // for macFUSE 4.x
                .map_err(|e| eprintln!("{e}"))
                .is_ok()
            {
                println!("cargo:rustc-cfg=fuser_mount_impl=\"libfuse2\"");
                println!("cargo:rustc-cfg=feature=\"macfuse-4-compat\"");
                println!("cargo:rustc-cfg=fuser_macfuse_abi");
            } else {
                pkg_config::Config::new()
                    .atleast_version("2.6.0")
                    .probe("osxfuse") // for osxfuse 3.x
                    .map_err(|e| eprintln!("{e}"))
                    .unwrap();
                println!("cargo:rustc-cfg=fuser_mount_impl=\"libfuse2\"");
                println!("cargo:rustc-cfg=fuser_macfuse_abi");
            }
        } else {
            // First try to link with libfuse3
            if pkg_config::Config::new()
                .atleast_version("3.0.0")
                .probe("fuse3")
                .map_err(|e| eprintln!("{e}"))
                .is_ok()
            {
                println!("cargo:rustc-cfg=fuser_mount_impl=\"libfuse3\"");
            } else {
                // Fallback to libfuse
                pkg_config::Config::new()
                    .atleast_version("2.6.0")
                    .probe("fuse")
                    .map_err(|e| eprintln!("{e}"))
                    .unwrap();
                println!("cargo:rustc-cfg=fuser_mount_impl=\"libfuse2\"");
            }
        }
    }
}

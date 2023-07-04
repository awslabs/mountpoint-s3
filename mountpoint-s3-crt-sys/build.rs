use std::path::{Path, PathBuf};
use std::{env, fs};

use bindgen::BindgenError;
use rustflags::Flag;

/// Path to the CRT repos, relative to the crate root.
const CRT_PATH: &str = "crt";

/// On Linux, the CRT gets its TLS stack from AWS libcrypto and s2n. On Darwin it uses the
/// platform's TLS stack instead.
const CRT_CRYPTO_LIBRARIES: &[&str] = &["aws-lc", "s2n-tls"];

/// The CRT libraries we use, in order of their dependencies.
const CRT_LIBRARIES: &[&str] = &[
    "aws-c-common",
    "aws-c-cal",
    "aws-c-io",
    "aws-c-compression",
    "aws-c-http",
    "aws-c-sdkutils",
    "aws-c-auth",
    "aws-checksums",
    "aws-c-s3",
];

/// The headers we will generate Rust bindings for. The CRT is huge, so we'd like to only have
/// bindings for the stuff we (transitively) need, rather than everything.
const CRT_HEADERS: &[&str] = &[
    "auth/credentials.h",
    "auth/aws_imds_client.h",
    "checksums/crc.h",
    "common/atomics.h",
    "common/log_channel.h",
    "common/log_formatter.h",
    "common/log_writer.h",
    "common/string.h",
    "common/error.h",
    "http/http.h",
    "http/connection.h",
    "http/request_response.h",
    "io/async_stream.h",
    "io/channel_bootstrap.h",
    "io/event_loop.h",
    "io/future.h",
    "io/host_resolver.h",
    "io/stream.h",
    "io/uri.h",
    "s3/s3.h",
    "s3/s3_client.h",
    "s3/s3_endpoint_resolver.h",
    "sdkutils/endpoints_rule_engine.h",
];

/// Private CRT headers required for our build. These will always be read from the Git submodules
/// even if we are linking against an existing CRT build, because these headers are not installed by
/// the CRT. Paths are relative to [CRT_PATH].
const PRIVATE_CRT_HEADERS: &[&str] = &[
    // To access S3 client stats
    "aws-c-s3/include/aws/s3/private/s3_client_impl.h",
];

/// Get the OS name we are compiling to
fn target_os() -> String {
    env::var("CARGO_CFG_TARGET_OS").expect("target OS not defined")
}

/// Get the architecture we are compiling to
fn target_arch() -> String {
    env::var("CARGO_CFG_TARGET_ARCH").expect("target arch not defined")
}

/// Read an environment variable and remember that it was accessed so that the build will rerun if
/// its value is changed.
fn get_env(var: &str) -> Option<String> {
    println!("cargo:rerun-if-env-changed={var}");
    match env::var(var) {
        Ok(val) => Some(val),
        Err(env::VarError::NotPresent) => None,
        Err(e) => panic!("failed to read env var {var}: {e:?}"),
    }
}

/// A single CRT library dependency. Some CRT libraries (aws-lc and s2n) have a different library
/// name to their package name, so we record both.
#[derive(Debug, Clone)]
struct CrtLibrary {
    package_name: String,
    library_name: String,
}

/// Get a list of required CRT libraries for the given target OS.
fn get_required_libraries(target_os: &str) -> Vec<CrtLibrary> {
    let additional_libraries = (target_os == "linux").then_some(CRT_CRYPTO_LIBRARIES);
    let libraries = additional_libraries.into_iter().flatten().chain(CRT_LIBRARIES.iter());
    libraries
        .map(|pkg| {
            // aws-lc and s2n-tls have different lib names to their package name
            let lib_name = match *pkg {
                "aws-lc" => "crypto",
                "s2n-tls" => "s2n",
                lib => lib,
            };
            CrtLibrary {
                package_name: pkg.to_string(),
                library_name: lib_name.to_string(),
            }
        })
        .collect()
}

/// The CRT needs cmake 3.x, but on AL2, the `cmake` binary is 2.x, and there's a separate `cmake3`.
/// If `cmake3` exists, let's use that as our CMAKE.
fn discover_cmake3() {
    if which::which("cmake3").is_ok() {
        std::env::set_var("CMAKE", "cmake3");
    }
}

/// Generate `bindings.rs`, containing a Rust version of the CRT headers. The headers in
/// [CRT_HEADERS] will be read from the given `include_dir`. The `bindings.rs` file will be written
/// into the `output_path` directory.
fn generate_bindings(include_dir: &Path, output_path: &Path) -> Result<(), BindgenError> {
    let mut builder = bindgen::Builder::default()
        // Get Default impls so we don't have to explicitly malloc/zero/ununit structs
        .derive_default(true)
        // Nicer default translation for `enum`s, but the result isn't FFI-safe so we have to
        // override it for enums we want to send back into C world.
        .default_enum_style(bindgen::EnumVariation::Rust { non_exhaustive: true })
        // We need to override this enum to be FFI-safe since it's used in callbacks for tasks.
        .newtype_enum("aws_task_status")
        // Tweak how C ints get mapped to Rust to better match the CRT's interface
        .size_t_is_usize(true)
        .default_macro_constant_type(bindgen::MacroTypeVariation::Signed)
        // Only include stuff from the CRT, not native platform libs
        .allowlist_file(".*/aws/.+\\.h")
        .allowlist_recursively(false)
        // Need these few things from pthread for aws_thread bindings to compile
        .allowlist_type("pthread_once_t")
        .allowlist_type("__darwin_pthread_once_t")
        .allowlist_type("_opaque_pthread_once_t")
        // CRT's static assertions confuse bindgen
        .blocklist_item("static_assertion_.*")
        // For logging
        .constified_enum_module("aws_log_level")
        // Use `libc` for primitive C types
        .ctypes_prefix("::libc")
        .raw_line("use libc::*;")
        // The CRT ensures that AWS_STATIC_IMPL (i.e. static inline) functions get exported so
        // they're linkable, but bindgen ignores inline functions by default, so we manually need to
        // mark them as exported.
        .clang_arg("-DAWS_STATIC_IMPL=")
        .clang_args(&["-I", include_dir.to_str().unwrap()]);

    // On aarch64, bindgen doesn't pick up the actual definition of [va_list] and instead just
    // generates `pub type va_list = [u64; 4];`, which has the right size, but raw arrays are not
    // FFI-safe in Rust. So we provide an equivalent FFI-safe definition, per the AArch64 ABI
    // (https://github.com/ARM-software/abi-aa/blob/617079d8a0d45bec83d351974849483cf0cc66d5/aapcs64/aapcs64.rst#definition-of-va-list).
    // On other architectures, we'll just trust whatever bindgen does. We only use `va_list` for
    // logging, so all we care about is that it roundtrips correctly back to C for use in
    // `logging_shim.c` -- we don't actually try to touch the variadic arguments from Rust.
    if target_arch() == "aarch64" {
        builder = builder
            .blocklist_type("va_list")
            .raw_line("#[repr(C)] pub struct va_list(*mut c_void, *mut c_void, *mut c_void, c_int, c_int);");
    } else {
        builder = builder.allowlist_type(".*va_list.*");
    }

    for header in CRT_HEADERS {
        let header_path = include_dir.join("aws").join(header);
        if !header_path.exists() {
            panic!("header file does not exist: {}", header_path.display());
        }
        builder = builder.header(header_path.to_str().unwrap());
    }

    for header in PRIVATE_CRT_HEADERS {
        let header_path = Path::new(CRT_PATH).join(header);
        if !header_path.exists() {
            panic!(
                "header file {} does not exist; perhaps you need to fetch git submodules",
                header_path.display()
            );
        }
        builder = builder.header(header_path.to_str().unwrap());
    }

    let bindings = builder.generate()?;
    bindings.write_to_file(output_path).expect("failed to write bindings");

    Ok(())
}

/// Compile the CRT from the Git submodule sources in this crate, and configure the Rust build to
/// statically link them. Returns the path to the target directory the CRT was installed into by
/// `cmake`.
fn compile_crt(output_dir: &Path) -> PathBuf {
    discover_cmake3();

    let source_dir = PathBuf::from(CRT_PATH);

    let build_dir = output_dir.join("build");
    let target_dir = output_dir.join("target");
    let target_os = target_os();

    if build_dir.exists() {
        fs::remove_dir_all(&build_dir).expect("failed to clean build directory");
    }

    if target_dir.exists() {
        fs::remove_dir_all(&target_dir).expect("failed to clean target directory");
    }

    fs::create_dir_all(&build_dir).expect("failed to create build directory");
    fs::create_dir_all(&target_dir).expect("failed to create target directory");

    let libraries = get_required_libraries(&target_os);

    for lib in libraries.iter() {
        let lib_source_dir = source_dir.join(&lib.package_name);
        let lib_build_dir = build_dir.join(&lib.package_name);

        if !lib_source_dir.join("CMakeLists.txt").exists() {
            panic!(
                "missing library source for {}, perhaps you need to fetch git submodules",
                lib.package_name
            );
        }
        println!("cargo:rerun-if-changed={}", lib_source_dir.display());

        fs::create_dir_all(&lib_build_dir).expect("failed to create lib build directory");

        let mut builder = cmake::Config::new(lib_source_dir);
        builder
            .out_dir(lib_build_dir)
            .build_target("install")
            .define("CMAKE_INSTALL_PREFIX", &target_dir)
            .define("CMAKE_PREFIX_PATH", &target_dir)
            .define("BUILD_TESTING", "OFF");

        if lib.package_name == "aws-lc" {
            builder.define("DISABLE_PERL", "ON");
            builder.define("DISABLE_GO", "ON");
        }

        // Force compiler optimizations for aws-checksums even in debug builds to improve throughput
        if lib.package_name == "aws-checksums" {
            builder.profile("RelWithDebInfo");
        }

        if lib.package_name == "aws-c-s3" {
            builder.define("AWS_ENABLE_S3_ENDPOINT_RESOLVER", "ON");
        }

        // Configure ASan in a way that will be compatible with Rust's clang-based version
        if rustflags::from_env().any(|f| f == Flag::Z("sanitizer=address".to_string())) {
            let mut clang = cc::Build::new();
            clang.compiler("clang");
            let mut clangxx = cc::Build::new();
            clangxx.compiler("clang++");
            builder
                .define("ENABLE_SANITIZERS", "ON")
                .define("SANITIZERS", "address")
                .init_c_cfg(clang)
                .init_cxx_cfg(clangxx);
            println!("cargo:warning=CRT building with address sanitizer");
        }

        builder.build();
    }

    // Some Linuxes, notably AL2, install their library outputs in `lib64`
    for search_dir in ["lib", "lib64"] {
        let lib_dir = target_dir.join(search_dir);
        println!("cargo:rustc-link-search=native={}", lib_dir.display());
    }

    // On macOS we need to link to some system frameworks for TLS
    if target_os == "macos" {
        println!("cargo:rustc-link-lib=framework=CoreFoundation");
        println!("cargo:rustc-link-lib=framework=Security");
    }

    // Statically link all the compiled CRT libraries
    for lib in libraries.iter() {
        println!("cargo:rustc-link-lib=static={}", lib.library_name);
    }

    target_dir
}

/// Compile the C shim for connecting CRT logging to Rust `tracing`
fn compile_logging_shim(crt_include_dir: impl AsRef<Path>) {
    cc::Build::new()
        .file("src/logging_shim.c")
        .include(crt_include_dir)
        .compile("logging_shim");
    println!("cargo:rerun-if-changed=src/logging_shim.c");
}

/// Build or link to the CRT.
///
/// By default, we build and statically link the CRT libraries embedded in this crate as Git
/// submodules. However, if the `MOUNTPOINT_CRT_LIB_DIR` and `MOUNTPOINT_CRT_INCLUDE_DIR`
/// environment variables are set, we don't build the CRT, and instead link to the CRT shared
/// libraries expected to be in `MOUNTPOINT_CRT_LIB_DIR`. In this case, the
/// `MOUNTPOINT_CRT_INCLUDE_DIR` variable must point to the directory the CRT headers were installed
/// to. The build still needs access to the Git submodules for any private CRT headers we use, but
/// the code from the submodules won't be compiled. When `MOUNTPOINT_CRT_LIB_DIR` is set,
/// by default the CRT libraries will be dynmically linked. Static linking occurs when the
/// `MOUNTPOINT_CRT_LIB_LINK_STATIC` is set.
///
/// Note that `MOUNTPOINT_CRT_LIB_DIR` requires a compatible version of the CRT libraries. The CRT
/// has no versioning mechanism for shared libraries right now, so customers configuring this
/// variable are responsible for ensuring compatibility with the CRT versions embedded in this
/// crate.
fn main() {
    let output_dir = PathBuf::from(env::var("OUT_DIR").expect("no OUT_DIR set"));

    // Compile or link the CRT libraries
    let include_dir = if let Some(path) = get_env("MOUNTPOINT_CRT_LIB_DIR") {
        println!("cargo:rustc-link-search=native={path}");

        let link_type = match get_env("MOUNTPOINT_CRT_LIB_LINK_STATIC") {
            Some(_) => "static",
            None => "dylib",
        };

        let libraries = get_required_libraries(&target_os());
        for lib in libraries {
            println!("cargo:rustc-link-lib={}={}", link_type, lib.library_name);
        }

        PathBuf::from(
            get_env("MOUNTPOINT_CRT_INCLUDE_DIR")
                .expect("MOUNTPOINT_CRT_INCLUDE_DIR must be set if MOUNTPOINT_CRT_LIB_DIR is used"),
        )
    } else {
        let target_dir = compile_crt(&output_dir);
        target_dir.join("include")
    };

    // Generate Rust bindings from the CRT headers
    let bindings_path = output_dir.join("bindings.rs");
    generate_bindings(&include_dir, &bindings_path).expect("failed to generate bindings");

    compile_logging_shim(include_dir);
}

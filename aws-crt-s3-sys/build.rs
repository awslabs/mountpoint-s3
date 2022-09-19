use std::path::{Path, PathBuf};
use std::{env, fs};

use bindgen::{BindgenError, Bindings};

/// Path to the CRT repos, relative to the crate root.
const CRT_PATH: &str = "crt";

/// On Linux, the CRT needs to build and link against Amazon's libcrypto. On Darwin it uses the
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
    "checksums/crc.h",
    "common/log_channel.h",
    "common/log_formatter.h",
    "common/log_writer.h",
    "common/string.h",
    "common/error.h",
    "http/http.h",
    "http/connection.h",
    "http/request_response.h",
    "io/channel_bootstrap.h",
    "io/event_loop.h",
    "io/host_resolver.h",
    "s3/s3.h",
    "s3/s3_client.h",
];

fn generate_bindings(include_dir: &Path) -> Result<Bindings, BindgenError> {
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
        .allowlist_type(".*va_list.*")
        .constified_enum_module("aws_log_level")
        // Use `libc` for primitive C types
        .ctypes_prefix("::libc")
        .raw_line("use libc::*;")
        .clang_args(&["-I", include_dir.to_str().unwrap(), "-I", "crt/aws-c-s3/include"]);

    for header in CRT_HEADERS {
        let header_path = include_dir.join("aws").join(header);
        if !header_path.exists() {
            panic!("header file does not exist: {}", header_path.display());
        }
        builder = builder.header(header_path.to_str().unwrap());
    }

    builder = builder.header("crt/aws-c-s3/include/aws/s3/private/s3_list_objects.h");

    builder.generate()
}

/// Returns a path to the `include` directory for the CRT
fn compile_crt_and_bindings() -> PathBuf {
    let source_dir = PathBuf::from(CRT_PATH);
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());
    let build_dir = out_dir.join("build");
    let target_dir = out_dir.join("target");

    if build_dir.exists() {
        fs::remove_dir_all(&build_dir).expect("failed to clean build directory");
    }

    if target_dir.exists() {
        fs::remove_dir_all(&target_dir).expect("failed to clean target directory");
    }

    fs::create_dir_all(&build_dir).expect("failed to create build directory");
    fs::create_dir_all(&target_dir).expect("failed to create target directory");

    let target_os = env::var("CARGO_CFG_TARGET_OS").unwrap();

    let additional_libraries = (target_os == "linux").then(|| CRT_CRYPTO_LIBRARIES);
    let libraries = additional_libraries.into_iter().flatten().chain(CRT_LIBRARIES.iter());

    for lib in libraries.clone() {
        let lib_source_dir = source_dir.join(lib);
        let lib_build_dir = build_dir.join(lib);

        if !lib_source_dir.join("CMakeLists.txt").exists() {
            panic!(
                "missing library source for {}, perhaps you need to fetch git submodules",
                lib
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
        if *lib == "aws-lc" {
            builder.define("DISABLE_PERL", "ON");
            builder.define("DISABLE_GO", "ON");
        }
        builder.build();
    }

    // Some Linuxes, notably AL2, install their library outputs in `lib64`
    for search_dir in ["lib", "lib64"] {
        println!(
            "cargo:rustc-link-search=native={}",
            target_dir.join(search_dir).display()
        );
    }

    // On macOS we need to link to some system frameworks
    if target_os == "macos" {
        println!("cargo:rustc-link-lib=framework=CoreFoundation");
        println!("cargo:rustc-link-lib=framework=Security");
    }

    for lib in libraries {
        // These libraries have names different to their repository name
        let lib = match *lib {
            "aws-lc" => "crypto",
            "s2n-tls" => "s2n",
            lib => lib,
        };
        println!("cargo:rustc-link-lib=static={}", lib);
    }

    let include_dir = target_dir.join("include");
    let bindings = generate_bindings(include_dir.as_path()).expect("failed to generate bindings");
    let bindings_path = out_dir.join("bindings.rs");
    bindings.write_to_file(bindings_path).expect("failed to write bindings");

    include_dir
}

fn compile_logging_shim(crt_include_dir: impl AsRef<Path>) {
    cc::Build::new()
        .file("src/logging_shim.c")
        .include(crt_include_dir)
        .compile("logging_shim");
    println!("cargo:rerun-if-changed=src/logging_shim.c");
}

fn main() {
    let include_dir = compile_crt_and_bindings();
    compile_logging_shim(include_dir);
}

#[allow(
    non_upper_case_globals,
    non_camel_case_types,
    non_snake_case,
    unused,
    rustdoc::broken_intra_doc_links,
    rustdoc::bare_urls,
    clippy::all
)]
mod generated {
    include!(concat!(env!("OUT_DIR"), "/bindings.rs"));
}

pub use generated::*;

// The CRT's static libraries reference the libcrypto of `aws-lc-sys` (see `build.rs`). No Rust code
// here uses the crate, so this import makes sure it is linked.
use aws_lc_sys as _;

pub mod logging_shim;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn crc32_works() {
        let buf: &[u8] = b"123456789";
        let crc = unsafe { aws_checksums_crc32(buf.as_ptr(), buf.len() as i32, 0) };
        assert_eq!(crc, 0xcbf43926);
    }

    #[test]
    fn crc32c_works() {
        let buf: &[u8] = b"123456789";
        let crc = unsafe { aws_checksums_crc32c(buf.as_ptr(), buf.len() as i32, 0) };
        assert_eq!(crc, 0xe3069283);
    }
}

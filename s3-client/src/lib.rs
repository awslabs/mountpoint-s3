use std::sync::Once;

use aws_crt_s3_sys::{aws_default_allocator, aws_s3_library_init};

mod s3_client;
mod streaming_get;
mod util;

pub use self::s3_client::{S3Client, S3ClientConfig};
pub use streaming_get::StreamingGetObject;

static CRT_INIT: Once = Once::new();

fn crt_init() {
    CRT_INIT.call_once(|| {
        // Safety: `aws_default_allocator` is a singleton, and the Once cell ensures
        // `aws_s3_library_init` and logger initialization is called only once and only on one
        // thread.
        unsafe {
            let allocator = aws_default_allocator();
            aws_s3_library_init(allocator);
            aws_crt_s3_sys::init_logger_adapter(allocator);
        }
    })
}

#[cfg(test)]
mod tests {
    use crate::s3_client::S3Client;

    #[test]
    fn smoke() {
        let _client = S3Client::new(Default::default()).unwrap();
    }
}

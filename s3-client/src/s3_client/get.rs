use std::ops::Range;
use std::sync::mpsc::Receiver;

use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestOptions;
use aws_crt_s3_sys::aws_s3_meta_request_type;
use thiserror::Error;
use tracing::{error, trace};

use crate::S3Client;

impl S3Client {
    /// Create and begin a new GetObject request. The body of the object will be returned in parts
    /// by invoking the `callback`. Body parts will be delivered in order.
    pub fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        mut callback: impl FnMut(u64, &[u8]) + Send + 'static,
    ) -> Result<GetObjectRequest, GetObjectError> {
        let mut message = Message::new_request(&mut Allocator::default()).unwrap();

        let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);
        message.add_header(&Header::new("Host", &endpoint));

        message.add_header(&Header::new("accept", "*/*"));

        message.add_header(&Header::new("user-agent", "aws-s3-crt-rust"));

        if let Some(range) = range {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message.add_header(&Header::new("Range", &range_value));
        }

        message.set_request_method("GET");

        let key = format!("/{}", key);
        message.set_request_path(key);

        let (sender, receiver) = std::sync::mpsc::channel();

        let mut options = MetaRequestOptions::new();

        options
            .message(message)
            .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_GET_OBJECT)
            .on_body(move |range_start, body| {
                trace!(
                    offset = range_start,
                    length = body.len(),
                    "GetObjectRequest received body part",
                );

                callback(range_start, body);
            })
            .on_finish(move |error_code, error_body| {
                trace!("GetObjectRequest finished",);

                let error_message: Option<String> =
                    error_body.map(|bytes| std::string::String::from_utf8_lossy(bytes).into_owned());

                assert_eq!(error_code == 0, error_message.is_none());

                if error_code != 0 {
                    error!(error_code, error = error_message, "GetObjectRequest failed");

                    let err: Error = error_code.into();

                    let _ = sender.send(Err(err));
                } else {
                    let _ = sender.send(Ok(()));
                }
            });

        self.s3_client
            .make_meta_request(options)
            .expect("failed to make GET request");

        Ok(GetObjectRequest {
            finish_receiver: receiver,
        })
    }
}

#[derive(Error, Debug)]
pub enum GetObjectError {
    #[error("CRT error")]
    CRTError(#[from] Error),
}

pub struct GetObjectRequest {
    finish_receiver: Receiver<Result<(), Error>>,
}

impl GetObjectRequest {
    /// Block the current thread until the GetObject request finishes.
    pub fn wait(self) -> Result<(), GetObjectError> {
        Ok(self
            .finish_receiver
            .recv()
            .expect("sender must not drop before sending a result")?)
    }
}

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
        message.add_header(&Header::new("Host", &endpoint)).unwrap();

        message.add_header(&Header::new("accept", "*/*")).unwrap();

        message
            .add_header(&Header::new("user-agent", "aws-s3-crt-rust"))
            .unwrap();

        if let Some(range) = range {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message.add_header(&Header::new("Range", &range_value)).unwrap();
        }

        message.set_request_method("GET").unwrap();

        let key = format!("/{}", key);
        message.set_request_path(key).unwrap();

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
            .on_finish(move |ref request_result| {
                trace!("GetObjectRequest finished",);

                if let Some(error_body) = request_result.error_response_body.as_ref() {
                    error!(error = ?error_body, "GetObjectRequest error");
                }

                let _ = sender.send(request_result.into());
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

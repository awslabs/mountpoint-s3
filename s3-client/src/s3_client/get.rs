use std::ops::Range;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};

use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestOptions;
use aws_crt_s3_sys::aws_s3_meta_request_type;
use futures::channel::mpsc::UnboundedReceiver;
use futures::{Stream, StreamExt};
use pin_project::pin_project;
use thiserror::Error;
use tracing::{error, trace};

use crate::object_client::GetBodyPart;
use crate::S3Client;

impl S3Client {
    /// Create and begin a new GetObject request. The body of the object will be returned in parts
    /// by invoking the `callback`. Body parts will be delivered in order.
    pub(super) fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
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

        // TODO find a better way to do this. We want to arrange for the channel to close either
        // when the finish callback runs or when any body part returns an error. We do that now by/
        // sharing a single sender and dropping it in either callback.
        let (sender, receiver) = futures::channel::mpsc::unbounded();
        let sender = Arc::new(Mutex::new(Some(sender)));
        let sender_clone = Arc::clone(&sender);

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
                let mut sender = sender.lock().unwrap();
                if let Some(sender) = sender.as_mut() {
                    let _ = sender.unbounded_send(Ok((range_start, body.into())));
                }
            })
            .on_finish(move |request_result| {
                trace!("GetObjectRequest finished");

                let mut sender = sender_clone.lock().unwrap();

                if let Some(error_body) = request_result.error_response_body.as_ref() {
                    error!(error = ?error_body, "GetObjectRequest error");
                    let _ = sender
                        .as_mut()
                        .map(|sender| sender.unbounded_send(Err(request_result.crt_error)));
                }

                sender.take().expect("request should only finish once");
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

#[derive(Debug)]
#[pin_project]
pub struct GetObjectRequest {
    #[pin]
    finish_receiver: UnboundedReceiver<Result<GetBodyPart, Error>>,
}

impl Stream for GetObjectRequest {
    type Item = Result<GetBodyPart, GetObjectError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Option<Self::Item>> {
        self.project()
            .finish_receiver
            .poll_next(cx)
            .map(|maybe_result| maybe_result.map(|result| result.map_err(|e| e.into())))
    }
}

impl Iterator for GetObjectRequest {
    type Item = Result<GetBodyPart, GetObjectError>;

    fn next(&mut self) -> Option<Self::Item> {
        // Safety: no one ever moves out of `GetObjectRequest`
        let this = unsafe { Pin::new_unchecked(self) };
        futures::executor::block_on(this.project().finish_receiver.next()).map(|result| result.map_err(|e| e.into()))
    }
}

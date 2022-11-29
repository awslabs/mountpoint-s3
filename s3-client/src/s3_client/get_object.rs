use std::future::Future;
use std::ops::Range;
use std::pin::Pin;
use std::task::{Context, Poll};

use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::Header;
use aws_crt_s3::s3::client::MetaRequestType;
use futures::channel::mpsc::UnboundedReceiver;
use futures::Stream;
use pin_project::pin_project;
use thiserror::Error;
use tracing::{debug, error};

use crate::object_client::GetBodyPart;
use crate::s3_client::S3HttpRequest;
use crate::{S3Client, S3RequestError};

impl S3Client {
    /// Create and begin a new GetObject request. The returned [GetObjectRequest] is a [Stream] (for
    /// async users) or [Iterator} (for sync users) of body parts of the object, which will be
    /// delivered in order.
    pub(super) fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
    ) -> Result<GetObjectRequest, S3RequestError<GetObjectError>> {
        let span = request_span!(self, "get_object");
        span.in_scope(
            || debug!(?bucket, ?key, ?range, size=?range.as_ref().map(|range| range.end - range.start), "new request"),
        );

        let mut message = self.new_request_template("GET", bucket)?;

        // Overwrite "accept" header since this returns raw object data.
        message.add_header(&Header::new("accept", "*/*"))?;

        if let Some(range) = range {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message
                .add_header(&Header::new("Range", range_value))
                .map_err(S3RequestError::ConstructionFailure)?;
        }

        let key = format!("/{}", key);
        message
            .set_request_path(key)
            .map_err(S3RequestError::ConstructionFailure)?;

        let (sender, receiver) = futures::channel::mpsc::unbounded();

        let request = self.make_meta_request(
            message,
            MetaRequestType::GetObject,
            span,
            |_, _| (),
            move |offset, data| {
                let _ = sender.unbounded_send(Ok((offset, data.into())));
            },
            move |_result| Ok(()),
        )?;

        Ok(GetObjectRequest {
            request,
            finish_receiver: receiver,
            finished: false,
        })
    }
}

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum GetObjectError {
    #[error("CRT error")]
    CRTError(#[from] Error),
}

#[derive(Debug)]
#[pin_project]
pub struct GetObjectRequest {
    #[pin]
    request: S3HttpRequest<(), GetObjectError>,
    #[pin]
    finish_receiver: UnboundedReceiver<Result<GetBodyPart, Error>>,
    finished: bool,
}

impl Stream for GetObjectRequest {
    type Item = Result<GetBodyPart, S3RequestError<GetObjectError>>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Option<Self::Item>> {
        if self.finished {
            return Poll::Ready(None);
        }

        let this = self.project();

        if let Poll::Ready(Some(val)) = this.finish_receiver.poll_next(cx) {
            return Poll::Ready(Some(val.map_err(|e| e.into())));
        }

        match this.request.poll(cx) {
            Poll::Ready(Ok(_)) => {
                *this.finished = true;
                Poll::Ready(None)
            }
            Poll::Ready(Err(e)) => {
                *this.finished = true;
                Poll::Ready(Some(Err(e)))
            }
            Poll::Pending => Poll::Pending,
        }
    }
}

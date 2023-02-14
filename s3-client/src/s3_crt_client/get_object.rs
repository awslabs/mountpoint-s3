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
use tracing::debug;

use crate::object_client::{GetBodyPart, GetObjectError, ObjectClientError};
use crate::s3_crt_client::S3HttpRequest;
use crate::{ObjectClientResult, S3CrtClient, S3RequestError};

impl S3CrtClient {
    /// Create and begin a new GetObject request. The returned [GetObjectRequest] is a [Stream] (for
    /// async users) or [Iterator} (for sync users) of body parts of the object, which will be
    /// delivered in order.
    pub(super) fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
    ) -> Result<GetObjectRequest, ObjectClientError<GetObjectError, S3RequestError>> {
        let span = request_span!(self, "get_object");
        span.in_scope(
            || debug!(?bucket, ?key, ?range, size=?range.as_ref().map(|range| range.end - range.start), "new request"),
        );

        let mut message = self
            .new_request_template("GET", bucket)
            .map_err(S3RequestError::construction_failure)?;

        // Overwrite "accept" header since this returns raw object data.
        message
            .add_header(&Header::new("accept", "*/*"))
            .map_err(S3RequestError::construction_failure)?;

        if let Some(range) = range {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message
                .add_header(&Header::new("Range", range_value))
                .map_err(S3RequestError::construction_failure)?;
        }

        let key = format!("/{key}");
        message
            .set_request_path(key)
            .map_err(S3RequestError::construction_failure)?;

        let (sender, receiver) = futures::channel::mpsc::unbounded();

        let request = self.make_meta_request(
            message,
            MetaRequestType::GetObject,
            span,
            |_, _| (),
            move |offset, data| {
                let _ = sender.unbounded_send(Ok((offset, data.into())));
            },
            move |result| {
                if result.is_err() {
                    Err(ObjectClientError::ClientError(S3RequestError::ResponseError(result)))
                } else {
                    Ok(())
                }
            },
        )?;

        Ok(GetObjectRequest {
            request,
            finish_receiver: receiver,
            finished: false,
        })
    }
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
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, S3RequestError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Option<Self::Item>> {
        if self.finished {
            return Poll::Ready(None);
        }

        let this = self.project();

        if let Poll::Ready(Some(val)) = this.finish_receiver.poll_next(cx) {
            return Poll::Ready(Some(val.map_err(|e| ObjectClientError::ClientError(e.into()))));
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

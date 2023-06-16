use std::future::Future;
use std::ops::Deref;
use std::ops::Range;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::task::{Context, Poll};

use futures::channel::mpsc::UnboundedReceiver;
use futures::Stream;
use mountpoint_s3_crt::common::error::Error;
use mountpoint_s3_crt::http::request_response::Header;
use mountpoint_s3_crt::s3::client::{MetaRequestResult, MetaRequestType};
use pin_project::pin_project;
use tracing::debug;

use crate::object_client::{GetBodyPart, GetObjectError, ObjectClientError};
use crate::s3_crt_client::S3HttpRequest;
use crate::ETag;
use crate::{ObjectClientResult, S3CrtClient, S3RequestError};

impl S3CrtClient {
    /// Create and begin a new GetObject request. The returned [GetObjectRequest] is a [Stream] of
    /// body parts of the object, which will be delivered in order.
    pub(super) fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        if_match: Option<ETag>,
    ) -> Result<GetObjectRequest, ObjectClientError<GetObjectError, S3RequestError>> {
        let span = request_span!(self.inner, "get_object");
        span.in_scope(
            || debug!(?bucket, ?key, ?range, ?if_match, size=?range.as_ref().map(|range| range.end - range.start), "new request"),
        );

        let mut message = self
            .inner
            .new_request_template("GET", bucket)
            .map_err(S3RequestError::construction_failure)?;

        // Overwrite "accept" header since this returns raw object data.
        message
            .add_header(&Header::new("accept", "*/*"))
            .map_err(S3RequestError::construction_failure)?;

        if let Some(etag) = if_match {
            // Return the object only if its entity tag (ETag) is matched
            message
                .add_header(&Header::new("If-Match", etag.as_str()))
                .map_err(S3RequestError::construction_failure)?;
        }

        // Only use the CRT auto-ranged-get machinery for requests larger than the part size, or
        // unknown lengths. This avoids the machinery's HeadObject requests for small/random
        // requests. For auto-ranged-gets, the CRT takes care of adjusting the offset returned to
        // the body callback to include the range start, but for manual requests we need to do it
        // ourselves with `range_start`.
        let (request_type, range_start) = if let Some(range) = range {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message
                .add_header(&Header::new("Range", range_value))
                .map_err(S3RequestError::construction_failure)?;

            let length = range.end.saturating_sub(range.start);
            let part_size = self.inner.part_size.unwrap_or(0) as u64;
            if length >= part_size {
                (MetaRequestType::GetObject, 0)
            } else {
                (MetaRequestType::Default, range.start)
            }
        } else {
            (MetaRequestType::GetObject, 0)
        };

        let key = format!("/{key}");
        message
            .set_request_path(key)
            .map_err(S3RequestError::construction_failure)?;

        let (sender, receiver) = futures::channel::mpsc::unbounded();

        let request = self.inner.make_meta_request(
            message,
            request_type,
            span,
            |_, _| (),
            move |offset, data| {
                let _ = sender.unbounded_send(Ok((range_start + offset, data.into())));
            },
            move |result| {
                if result.is_err() {
                    let parsed = parse_get_object_error(&result);
                    Err(parsed
                        .map(ObjectClientError::ServiceError)
                        .unwrap_or(ObjectClientError::ClientError(S3RequestError::ResponseError(result))))
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

fn parse_get_object_error(result: &MetaRequestResult) -> Option<GetObjectError> {
    match result.response_status {
        404 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;
            match error_str.deref() {
                "NoSuchBucket" => Some(GetObjectError::NoSuchBucket),
                "NoSuchKey" => Some(GetObjectError::NoSuchKey),
                _ => None,
            }
        }
        412 => Some(GetObjectError::PreconditionFailed),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use std::ffi::{OsStr, OsString};

    use super::*;

    fn make_result(response_status: i32, body: impl Into<OsString>) -> MetaRequestResult {
        MetaRequestResult {
            response_status,
            crt_error: 1i32.into(),
            error_response_headers: None,
            error_response_body: Some(body.into()),
        }
    }

    #[test]
    fn parse_404_no_such_key() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchKey</Code><Message>The specified key does not exist.</Message><Key>not-a-real-key</Key><RequestId>NTKJWKHQBYNS73A9</RequestId><HostId>Nc9kWNrf4kGoq5NIUnQ4t7u04ZZXGm/i463v+jwCI8sIrZBqeYI8uffLHQ+/qusdMWNuUwqeXHU=</HostId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_error(&result);
        assert_eq!(result, Some(GetObjectError::NoSuchKey));
    }

    #[test]
    fn parse_404_no_such_bucket() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message><BucketName>DOC-EXAMPLE-BUCKET</BucketName><RequestId>4VAGDP5HMYTDNB3Y</RequestId><HostId>JMgGqpVKIaaTieG68IODiV2piWw/q9VCTowGvWP36BEz6oIVEXiesn8cDE5ph7if0gpY5WU1Wc8=</HostId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_error(&result);
        assert_eq!(result, Some(GetObjectError::NoSuchBucket));
    }

    #[test]
    fn parse_403_glacier_storage_class() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>InvalidObjectState</Code><Message>The action is not valid for the object's storage class</Message><RequestId>9FEFFF118E15B86F</RequestId><HostId>WVQ5kzhiT+oiUfDCOiOYv8W4Tk9eNcxWi/MK+hTS/av34Xy4rBU3zsavf0aaaaa</HostId></Error>"#;
        let result = make_result(403, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_error(&result);
        assert_eq!(result, None);
    }
}

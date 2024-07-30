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
use mountpoint_s3_crt::s3::client::MetaRequestResult;
use pin_project::pin_project;

use crate::object_client::{ETag, GetBodyPart, GetObjectError, ObjectClientError, ObjectClientResult};
use crate::s3_crt_client::{
    GetObjectRequest, S3CrtClient, S3CrtClientInner, S3HttpRequest, S3Operation, S3RequestError,
};

impl S3CrtClient {
    /// Create and begin a new GetObject request. The returned [GetObjectRequest] is a [Stream] of
    /// body parts of the object, which will be delivered in order.
    pub(super) fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        if_match: Option<ETag>,
    ) -> Result<S3GetObjectRequest, ObjectClientError<GetObjectError, S3RequestError>> {
        let span = request_span!(self.inner, "get_object", bucket, key, ?range, ?if_match);

        let mut message = self
            .inner
            .new_request_template("GET", bucket)
            .map_err(S3RequestError::construction_failure)?;

        // Overwrite "accept" header since this returns raw object data.
        message
            .set_header(&Header::new("accept", "*/*"))
            .map_err(S3RequestError::construction_failure)?;

        if let Some(etag) = if_match {
            // Return the object only if its entity tag (ETag) is matched
            message
                .set_header(&Header::new("If-Match", etag.as_str()))
                .map_err(S3RequestError::construction_failure)?;
        }

        if let Some(range) = range {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message
                .set_header(&Header::new("Range", range_value))
                .map_err(S3RequestError::construction_failure)?;
        }

        let key = format!("/{key}");
        message
            .set_request_path(key)
            .map_err(S3RequestError::construction_failure)?;

        let (sender, receiver) = futures::channel::mpsc::unbounded();

        let mut options = S3CrtClientInner::new_meta_request_options(message, S3Operation::GetObject);
        options.part_size(self.inner.read_part_size as u64);
        let request = self.inner.make_meta_request_from_options(
            options,
            span,
            |_| (),
            |_, _| (),
            move |offset, data| {
                let _ = sender.unbounded_send(Ok((offset, data.into())));
            },
            move |result| {
                if result.is_err() {
                    Err(parse_get_object_error(result).map(ObjectClientError::ServiceError))
                } else {
                    Ok(())
                }
            },
        )?;

        Ok(S3GetObjectRequest {
            request,
            finish_receiver: receiver,
            finished: false,
        })
    }
}

/// A streaming response to a GetObject request.
///
/// This struct implements [`futures::Stream`], which you can use to read the body of the object.
/// Each item of the stream is a part of the object body together with the part's offset within the
/// object.
#[derive(Debug)]
#[pin_project]
pub struct S3GetObjectRequest {
    #[pin]
    request: S3HttpRequest<(), GetObjectError>,
    #[pin]
    finish_receiver: UnboundedReceiver<Result<GetBodyPart, Error>>,
    finished: bool,
}

impl GetObjectRequest for S3GetObjectRequest {
    type ClientError = S3RequestError;

    fn increment_read_window(mut self: Pin<&mut Self>, len: usize) {
        self.request.meta_request.increment_read_window(len as u64);
    }
}

impl Stream for S3GetObjectRequest {
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

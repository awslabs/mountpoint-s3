use async_cell::sync::AsyncCell;
use async_trait::async_trait;
use std::future::Future;
use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::sync::Arc;
use std::task::{Context, Poll};

use futures::channel::mpsc::UnboundedReceiver;
use futures::Stream;
use mountpoint_s3_crt::common::error::Error;
use mountpoint_s3_crt::http::request_response::{Header, Headers};
use mountpoint_s3_crt::s3::client::MetaRequestResult;
use pin_project::pin_project;
use thiserror::Error;

use crate::object_client::{
    Checksum, GetBodyPart, GetObjectError, GetObjectParams, ObjectClientError, ObjectClientResult, ObjectMetadata,
};
use crate::s3_crt_client::{
    parse_checksum, GetObjectRequest, S3CrtClient, S3CrtClientInner, S3HttpRequest, S3Operation, S3RequestError,
};
use crate::types::ChecksumMode;

/// Failures to return object metadata
#[derive(Clone, Error, Debug)]
pub enum ObjectHeadersError {
    #[error("unknown error occurred receiving object headers")]
    UnknownError,
    #[error("requested object checksums, but did not specify it in the request")]
    DidNotRequestChecksums,
}

impl S3CrtClient {
    /// Create and begin a new GetObject request. The returned [GetObjectRequest] is a [Stream] of
    /// body parts of the object, which will be delivered in order.
    pub(super) fn get_object(
        &self,
        bucket: &str,
        key: &str,
        params: &GetObjectParams,
    ) -> Result<S3GetObjectRequest, ObjectClientError<GetObjectError, S3RequestError>> {
        let span = request_span!(self.inner, "get_object", bucket, key, range=?params.range, if_match=?params.if_match);

        let mut message = self
            .inner
            .new_request_template("GET", bucket)
            .map_err(S3RequestError::construction_failure)?;

        // Overwrite "accept" header since this returns raw object data.
        message
            .set_header(&Header::new("accept", "*/*"))
            .map_err(S3RequestError::construction_failure)?;

        let requested_checksums = params.checksum_mode.as_ref() == Some(&ChecksumMode::Enabled);
        if requested_checksums {
            // Add checksum header to receive object checksums.
            message
                .set_header(&Header::new("x-amz-checksum-mode", "enabled"))
                .map_err(S3RequestError::construction_failure)?;
        }

        if let Some(etag) = params.if_match.as_ref() {
            // Return the object only if its entity tag (ETag) is matched
            message
                .set_header(&Header::new("If-Match", etag.as_str()))
                .map_err(S3RequestError::construction_failure)?;
        }

        let next_offset = if let Some(range) = params.range.as_ref() {
            // Range HTTP header is bounded below *inclusive*
            let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
            message
                .set_header(&Header::new("Range", range_value))
                .map_err(S3RequestError::construction_failure)?;
            range.start
        } else {
            0
        };

        let key = format!("/{key}");
        message
            .set_request_path(key)
            .map_err(S3RequestError::construction_failure)?;

        let (sender, receiver) = futures::channel::mpsc::unbounded();
        let read_window_end_offset = next_offset + self.inner.initial_read_window_size as u64;

        let mut options = S3CrtClientInner::new_meta_request_options(message, S3Operation::GetObject);
        options.part_size(self.inner.read_part_size as u64);

        let object_headers = AsyncCell::shared();

        let object_headers_setter_on_headers = object_headers.clone();
        let object_headers_setter_on_finish = object_headers.clone();

        let request = self.inner.make_meta_request_from_options(
            options,
            span,
            |_| (),
            move |headers, status| {
                // Headers can be returned multiple times, but the metadata/checksums don't change.
                // Explicitly ignore the case where we've already set object metadata.

                // Only set headers if we have a 2xx status code. If we only get other status codes,
                // then on_finish sets an error.
                if (200..300).contains(&status) {
                    // Don't overwrite if already set - the first headers are fine.
                    object_headers_setter_on_headers.or_set(Ok(headers.clone()));
                }
            },
            move |offset, data| {
                let _ = sender.unbounded_send(Ok((offset, data.into())));
            },
            move |result| {
                // FIXME - Ideally we'd include a reason why we failed here.
                object_headers_setter_on_finish.or_set(Err(ObjectHeadersError::UnknownError));
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
            requested_checksums,
            enable_backpressure: self.inner.enable_backpressure,
            headers: object_headers,
            initial_read_window_empty: self.inner.initial_read_window_size == 0,
            next_offset,
            read_window_end_offset,
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
    requested_checksums: bool,
    enable_backpressure: bool,
    headers: Arc<AsyncCell<Result<Headers, ObjectHeadersError>>>,
    initial_read_window_empty: bool,
    /// Next offset of the data to be polled from [poll_next]
    next_offset: u64,
    /// Upper bound of the current read window. When backpressure is enabled, [S3GetObjectRequest]
    /// can return data up to this offset *exclusively*.
    read_window_end_offset: u64,
}

impl S3GetObjectRequest {
    async fn get_object_headers(&self) -> ObjectClientResult<Headers, GetObjectError, S3RequestError> {
        match self.headers.try_get() {
            Some(result) => result,
            None => {
                if self.enable_backpressure && self.initial_read_window_empty {
                    return Err(ObjectClientError::ClientError(S3RequestError::EmptyReadWindow));
                }
                self.headers.get().await
            }
        }
        .map_err(|_| ObjectClientError::ClientError(S3RequestError::RequestCanceled))
    }
}

#[cfg_attr(not(docsrs), async_trait)]
impl GetObjectRequest for S3GetObjectRequest {
    type ClientError = S3RequestError;

    async fn get_object_metadata(&self) -> ObjectClientResult<ObjectMetadata, GetObjectError, Self::ClientError> {
        let headers = self.get_object_headers().await?;
        Ok(headers
            .iter()
            .filter_map(|(key, value)| {
                let metadata_header = key.to_str()?.strip_prefix("x-amz-meta-")?;
                let value = value.to_str()?;
                Some((metadata_header.to_string(), value.to_string()))
            })
            .collect())
    }

    async fn get_object_checksum(&self) -> ObjectClientResult<Checksum, GetObjectError, Self::ClientError> {
        if !self.requested_checksums {
            return Err(ObjectClientError::ClientError(S3RequestError::InternalError(Box::new(
                ObjectHeadersError::DidNotRequestChecksums,
            ))));
        }

        let headers = self.get_object_headers().await?;
        parse_checksum(&headers).map_err(|e| ObjectClientError::ClientError(S3RequestError::InternalError(Box::new(e))))
    }

    fn increment_read_window(mut self: Pin<&mut Self>, len: usize) {
        self.read_window_end_offset += len as u64;
        self.request.meta_request.increment_read_window(len as u64);
    }

    fn read_window_end_offset(self: Pin<&Self>) -> u64 {
        self.read_window_end_offset
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
            let result = match val {
                Ok(item) => {
                    *this.next_offset = item.0 + item.1.len() as u64;
                    Some(Ok(item))
                }
                Err(e) => Some(Err(ObjectClientError::ClientError(e.into()))),
            };
            return Poll::Ready(result);
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
            Poll::Pending => {
                // If the request is still not finished but the read window is not enough to poll
                // the next chunk we want to return error instead of keeping the request blocked.
                // This prevents a risk of deadlock from using the [S3CrtClient], users must implement
                // their own logic to block the request if they really want to block a [GetObjectRequest].
                if *this.enable_backpressure && this.read_window_end_offset <= this.next_offset {
                    return Poll::Ready(Some(Err(ObjectClientError::ClientError(
                        S3RequestError::EmptyReadWindow,
                    ))));
                }
                Poll::Pending
            }
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
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message><BucketName>amzn-s3-demo-bucket</BucketName><RequestId>4VAGDP5HMYTDNB3Y</RequestId><HostId>JMgGqpVKIaaTieG68IODiV2piWw/q9VCTowGvWP36BEz6oIVEXiesn8cDE5ph7if0gpY5WU1Wc8=</HostId></Error>"#;
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

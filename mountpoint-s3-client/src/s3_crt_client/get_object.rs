use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::sync::Arc;
use std::sync::atomic::{AtomicU64, Ordering};
use std::task::{Context, Poll};

use async_trait::async_trait;
use bytes::Bytes;
use futures::channel::mpsc::UnboundedReceiver;
use futures::stream::FusedStream;
use futures::{Stream, StreamExt};
use mountpoint_s3_crt::http::request_response::{Header, Headers};
use mountpoint_s3_crt::s3::client::{MetaRequest, MetaRequestResult};
use pin_project::pin_project;
use tracing::trace;

use crate::error_metadata::ClientErrorMetadata;
use crate::object_client::{
    Checksum, ChecksumMode, ClientBackpressureHandle, GetBodyPart, GetObjectError, GetObjectParams, GetObjectResponse,
    ObjectChecksumError, ObjectClientError, ObjectClientResult, ObjectMetadata,
};

use super::{CancellingMetaRequest, ResponseHeadersError, S3CrtClient, S3Operation, S3RequestError, parse_checksum};

impl S3CrtClient {
    /// Create and begin a new GetObject request. The returned [S3GetObjectResponse] is a [Stream] of
    /// body parts of the object, which will be delivered in order.
    pub(super) async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        params: &GetObjectParams,
    ) -> Result<S3GetObjectResponse, ObjectClientError<GetObjectError, S3RequestError>> {
        let requested_checksums = params.checksum_mode.as_ref() == Some(&ChecksumMode::Enabled);
        let next_offset = params.range.as_ref().map(|r| r.start).unwrap_or(0);
        let (event_sender, mut event_receiver) = futures::channel::mpsc::unbounded();
        let meta_request = {
            let span =
                request_span!(self.inner, "get_object", bucket, key, range=?params.range, if_match=?params.if_match);

            let mut message = self
                .inner
                .new_request_template("GET", bucket)
                .map_err(S3RequestError::construction_failure)?;

            // Overwrite "accept" header since this returns raw object data.
            message
                .set_header(&Header::new("accept", "*/*"))
                .map_err(S3RequestError::construction_failure)?;

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

            if let Some(range) = params.range.as_ref() {
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

            let mut options = message.into_options(S3Operation::GetObject);
            options.part_size(self.inner.read_part_size as u64);

            let mut headers_sender = Some(event_sender.clone());
            let part_sender = event_sender.clone();

            self.inner.meta_request_with_callbacks(
                options,
                span,
                |_| (),
                move |headers, status| {
                    // Only send headers if we have a 2xx status code. If we only get other status codes,
                    // then on_meta_request_result will send an error.
                    if (200..300).contains(&status) {
                        // Headers can be returned multiple times, but the metadata/checksums don't change.
                        // We only send the first occurence to the channel.
                        if let Some(headers_sender) = headers_sender.take() {
                            _ = headers_sender.unbounded_send(S3GetObjectEvent::Headers(headers.clone()));
                        }
                    }
                },
                move |offset, data| {
                    let owned_buffer = data
                        .to_owned_buffer()
                        .expect("buffers returned from GetObject can always be acquired");
                    let bytes = Bytes::from_owner(owned_buffer);
                    let body_part = GetBodyPart { offset, data: bytes };
                    _ = part_sender.unbounded_send(S3GetObjectEvent::BodyPart(body_part));
                },
                parse_get_object_error,
                move |result| {
                    if let Err(e) = result {
                        _ = event_sender.unbounded_send(S3GetObjectEvent::Error(e));
                    }
                    event_sender.close_channel();
                },
            )?
        };

        let headers = match event_receiver.next().await {
            Some(S3GetObjectEvent::Headers(headers)) => headers,
            Some(S3GetObjectEvent::Error(e)) => {
                return Err(e);
            }
            event => {
                // If we did not received the headers first, the request must have failed.
                trace!(?event, "unexpected GetObject event while waiting for headers");
                return Err(S3RequestError::internal_failure(ResponseHeadersError::MissingHeaders).into());
            }
        };

        let backpressure_handle = if self.inner.enable_backpressure {
            let read_window_end_offset =
                Arc::new(AtomicU64::new(next_offset + self.inner.initial_read_window_size as u64));
            Some(S3BackpressureHandle {
                read_window_end_offset,
                meta_request: meta_request.clone(),
            })
        } else {
            None
        };
        Ok(S3GetObjectResponse {
            meta_request,
            event_receiver,
            requested_checksums,
            backpressure_handle,
            headers,
            next_offset,
        })
    }
}

#[derive(Debug)]
enum S3GetObjectEvent {
    Headers(Headers),
    BodyPart(GetBodyPart),
    Error(ObjectClientError<GetObjectError, S3RequestError>),
}

#[derive(Clone, Debug)]
pub struct S3BackpressureHandle {
    /// Upper bound of the current read window. When backpressure is enabled, [S3GetObjectRequest]
    /// can return data up to this offset *exclusively*.
    read_window_end_offset: Arc<AtomicU64>,
    meta_request: MetaRequest,
}

impl ClientBackpressureHandle for S3BackpressureHandle {
    fn increment_read_window(&mut self, len: usize) {
        self.read_window_end_offset.fetch_add(len as u64, Ordering::SeqCst);
        self.meta_request.increment_read_window(len as u64);
    }

    fn ensure_read_window(&mut self, desired_end_offset: u64) {
        let diff = desired_end_offset.saturating_sub(self.read_window_end_offset()) as usize;
        self.increment_read_window(diff);
    }

    fn read_window_end_offset(&self) -> u64 {
        self.read_window_end_offset.load(Ordering::SeqCst)
    }
}

/// A streaming response to a GetObject request.
///
/// This struct implements [`futures::Stream`], which you can use to read the body of the object.
/// Each item of the stream is a part of the object body together with the part's offset within the
/// object.
#[derive(Debug)]
#[pin_project]
pub struct S3GetObjectResponse {
    meta_request: CancellingMetaRequest,
    #[pin]
    event_receiver: UnboundedReceiver<S3GetObjectEvent>,
    requested_checksums: bool,
    backpressure_handle: Option<S3BackpressureHandle>,
    headers: Headers,
    /// Next offset of the data to be polled from [poll_next]
    next_offset: u64,
}

#[cfg_attr(not(docsrs), async_trait)]
impl GetObjectResponse for S3GetObjectResponse {
    type BackpressureHandle = S3BackpressureHandle;
    type ClientError = S3RequestError;

    fn backpressure_handle(&mut self) -> Option<&mut Self::BackpressureHandle> {
        self.backpressure_handle.as_mut()
    }

    fn get_object_metadata(&self) -> ObjectMetadata {
        self.headers
            .iter()
            .filter_map(|(key, value)| {
                let metadata_header = key.to_str()?.strip_prefix("x-amz-meta-")?;
                let value = value.to_str()?;
                Some((metadata_header.to_string(), value.to_string()))
            })
            .collect()
    }

    fn get_object_checksum(&self) -> Result<Checksum, ObjectChecksumError> {
        if !self.requested_checksums {
            return Err(ObjectChecksumError::DidNotRequestChecksums);
        }

        parse_checksum(&self.headers).map_err(|e| ObjectChecksumError::HeadersError(Box::new(e)))
    }
}

impl Stream for S3GetObjectResponse {
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, S3RequestError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Option<Self::Item>> {
        if self.event_receiver.is_terminated() {
            return Poll::Ready(None);
        }

        let this = self.project();
        match this.event_receiver.poll_next(cx) {
            Poll::Ready(None) => Poll::Ready(None),
            Poll::Ready(Some(S3GetObjectEvent::BodyPart(part))) => {
                *this.next_offset = part.offset + part.data.len() as u64;
                Poll::Ready(Some(Ok(part)))
            }
            Poll::Ready(Some(S3GetObjectEvent::Headers(_))) => {
                unreachable!("headers are only sent once and received before returning the stream")
            }
            Poll::Ready(Some(S3GetObjectEvent::Error(e))) => Poll::Ready(Some(Err(e))),
            Poll::Pending => {
                // If the request is still not finished but the read window is not enough to poll
                // the next chunk we want to return error instead of keeping the request blocked.
                // This prevents a risk of deadlock from using the [S3CrtClient], users must implement
                // their own logic to block the request if they really want to block a [S3GetObjectResponse].
                if let Some(handle) = &this.backpressure_handle {
                    if *this.next_offset >= handle.read_window_end_offset() {
                        return Poll::Ready(Some(Err(ObjectClientError::ClientError(
                            S3RequestError::EmptyReadWindow,
                        ))));
                    }
                }
                Poll::Pending
            }
        }
    }
}

fn parse_get_object_error(result: &MetaRequestResult) -> Option<GetObjectError> {
    let client_error_metadata = ClientErrorMetadata::from_meta_request_result(result);
    match result.response_status {
        404 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;
            match error_str.deref() {
                "NoSuchBucket" => Some(GetObjectError::NoSuchBucket(client_error_metadata)),
                "NoSuchKey" => Some(GetObjectError::NoSuchKey(client_error_metadata)),
                _ => None,
            }
        }
        412 => Some(GetObjectError::PreconditionFailed(client_error_metadata)),
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
        assert!(matches!(result, Some(GetObjectError::NoSuchKey(_))));
    }

    #[test]
    fn parse_404_no_such_bucket() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message><BucketName>amzn-s3-demo-bucket</BucketName><RequestId>4VAGDP5HMYTDNB3Y</RequestId><HostId>JMgGqpVKIaaTieG68IODiV2piWw/q9VCTowGvWP36BEz6oIVEXiesn8cDE5ph7if0gpY5WU1Wc8=</HostId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_error(&result);
        assert!(matches!(result, Some(GetObjectError::NoSuchBucket(_))));
    }

    #[test]
    fn parse_403_glacier_storage_class() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>InvalidObjectState</Code><Message>The action is not valid for the object's storage class</Message><RequestId>9FEFFF118E15B86F</RequestId><HostId>WVQ5kzhiT+oiUfDCOiOYv8W4Tk9eNcxWi/MK+hTS/av34Xy4rBU3zsavf0aaaaa</HostId></Error>"#;
        let result = make_result(403, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_error(&result);
        assert_eq!(result, None);
    }
}

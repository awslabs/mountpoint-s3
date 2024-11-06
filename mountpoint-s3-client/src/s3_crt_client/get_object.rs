use async_once_cell::Lazy;
use async_trait::async_trait;
use std::collections::HashMap;
use std::future::Future;
use std::ops::Deref;
use std::ops::Range;
use std::os::unix::prelude::OsStrExt;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};

use futures::channel::mpsc::UnboundedReceiver;
use futures::channel::oneshot;
use futures::channel::oneshot::{Canceled, Receiver};
use futures::Stream;
use mountpoint_s3_crt::common::error::Error;
use mountpoint_s3_crt::http::request_response::Header;
use mountpoint_s3_crt::s3::client::MetaRequestResult;
use pin_project::pin_project;

use crate::object_client::{ETag, GetBodyPart, GetObjectError, ObjectClientError, ObjectClientResult, ObjectMetadata};
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

        let next_offset = if let Some(range) = range {
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

        let (object_metadata_sender, object_metadata_receiver) = oneshot::channel::<HashMap<String, String>>();
        let object_metadata_sender_holder = Arc::new(Mutex::new(Some(object_metadata_sender)));
        let object_metadata_sender_on_headers = object_metadata_sender_holder.clone();
        let object_metadata_sender_on_finish = object_metadata_sender_holder.clone();
        let lazy_object_metadata = Lazy::new(object_metadata_receiver);

        let request = self.inner.make_meta_request_from_options(
            options,
            span,
            |_| (),
            move |headers, status| {
                // Headers can be returned multiple times, but the object metadata doesn't change.
                // Explicitly ignore the case where we've already set object metadata.
                if (200..300).contains(&status) {
                    // Only take the sender if we have a 2xx status code. If we only get other
                    // status codes, then on_finish cancels the sender
                    if let Some(object_metadata_sender) = object_metadata_sender_on_headers.lock().unwrap().take() {
                        let object_metadata = headers
                            .iter()
                            .filter_map(|(key, value)| {
                                let metadata_header = key.to_str()?.strip_prefix("x-amz-meta-")?;
                                let value = value.to_str()?;
                                Some((metadata_header.to_string(), value.to_string()))
                            })
                            .collect();
                        // Doesn't matter if receiver's gone away. Either way we don't need to do anything.
                        let _ = object_metadata_sender.send(object_metadata);
                    }
                }
            },
            move |offset, data| {
                let _ = sender.unbounded_send(Ok((offset, data.into())));
            },
            move |result| {
                // Drop the sender when the request is done. Don't send anything to cancel
                object_metadata_sender_on_finish.lock().unwrap().take();
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
            enable_backpressure: self.inner.enable_backpressure,
            lazy_object_metadata,
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
    enable_backpressure: bool,
    lazy_object_metadata: Lazy<Result<ObjectMetadata, Canceled>, Receiver<ObjectMetadata>>,
    initial_read_window_empty: bool,
    /// Next offset of the data to be polled from [poll_next]
    next_offset: u64,
    /// Upper bound of the current read window. When backpressure is enabled, [S3GetObjectRequest]
    /// can return data up to this offset *exclusively*.
    read_window_end_offset: u64,
}

#[cfg_attr(not(docsrs), async_trait)]
impl GetObjectRequest for S3GetObjectRequest {
    type ClientError = S3RequestError;

    async fn get_object_metadata(&self) -> Result<ObjectMetadata, Self::ClientError> {
        match self.lazy_object_metadata.try_get() {
            Some(result) => result.clone(),
            None => {
                if self.enable_backpressure && self.initial_read_window_empty {
                    return Err(S3RequestError::EmptyReadWindow);
                }
                self.lazy_object_metadata.get_unpin().await.clone()
            }
        }
        .map_err(|_| S3RequestError::RequestCanceled)
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

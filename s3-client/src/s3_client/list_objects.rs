use crate::S3Client;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestOptions;
use aws_crt_s3_sys::aws_s3_meta_request_type;
use chrono::{DateTime, FixedOffset};
use futures::channel::oneshot;
use std::str::FromStr;
use std::sync::{Arc, Mutex};
use thiserror::Error;
use tracing::{error, trace};

#[derive(Error, Debug)]
#[allow(clippy::enum_variant_names)]
pub enum ListObjectsError {
    #[error("CRT error: {0:?}")]
    CRTError(#[from] Error),

    #[error("HTTP error ({0}): code = {1}, response = {2}")]
    HTTPError(#[source] Error, i32, String),

    #[error("XML response was not valid: problem = {1}, xml node = {0:?}")]
    InvalidResponse(xmltree::Element, String),

    #[error("XML parsing error: {0:?}")]
    XMLParseError(#[from] xmltree::ParseError),

    #[error("Missing field {1} from XML element {0:?}")]
    MissingFieldError(xmltree::Element, String),

    #[error("Failed to parse field {1} as bool: {0:?}")]
    ParseBoolError(#[source] std::str::ParseBoolError, String),

    #[error("Failed to parse field {1} as int: {0:?}")]
    ParseIntError(#[source] std::num::ParseIntError, String),

    #[error("Failed to parse field {1} as DateTime: {0:?}")]
    DateTimeParseError(#[source] chrono::format::ParseError, String),

    #[error("The future was canceled: {0:?}")]
    CanceledError(#[from] oneshot::Canceled),
}

/// Copy text out of an XML element, with the right error type.
fn get_text(element: &xmltree::Element) -> Result<String, ListObjectsError> {
    Ok(element
        .get_text()
        .ok_or_else(|| ListObjectsError::InvalidResponse(element.clone(), "field has no text".to_string()))?
        .to_string())
}

/// Wrapper to get child with some name out of an XML element, with the right error type.
fn get_child<'a>(element: &'a xmltree::Element, name: &str) -> Result<&'a xmltree::Element, ListObjectsError> {
    element
        .get_child(name)
        .ok_or_else(|| ListObjectsError::MissingFieldError(element.clone(), name.to_string()))
}

/// Get the text out of a child node, with the right error type.
fn get_field(element: &xmltree::Element, name: &str) -> Result<String, ListObjectsError> {
    get_text(get_child(element, name)?)
}

#[derive(Debug)]
pub struct ListObjectsResult {
    /// The name of the bucket.
    pub bucket: String,

    /// The list of objects.
    pub objects: Vec<S3Object>,

    /// The list of common prefixes. This rolls up all of the objects with a common prefix up to
    /// the next instance of the delimiter.
    pub common_prefixes: Vec<String>,

    /// If present, the continuation token to use to query more results.
    pub next_continuation_token: Option<String>,
}

impl ListObjectsResult {
    fn parse_from_bytes(bytes: &[u8]) -> Result<Self, ListObjectsError> {
        Self::parse_from_xml(&mut xmltree::Element::parse(bytes)?)
    }

    fn parse_from_xml(element: &mut xmltree::Element) -> Result<Self, ListObjectsError> {
        let mut objects = Vec::new();

        while let Some(content) = element.take_child("Contents") {
            objects.push(S3Object::parse_from_xml(&content)?);
        }

        let mut common_prefixes = Vec::new();

        while let Some(common_prefix) = element.take_child("CommonPrefixes") {
            let prefix = get_field(&common_prefix, "Prefix")?;
            common_prefixes.push(prefix);
        }

        let bucket = get_field(element, "Name")?;

        let mut next_continuation_token = None;
        if let Some(elem) = element.get_child("NextContinuationToken") {
            next_continuation_token = Some(get_text(elem)?);
        }

        let is_truncated = get_field(element, "IsTruncated")?;
        let is_truncated = bool::from_str(&is_truncated)
            .map_err(|e| ListObjectsError::ParseBoolError(e, "IsTruncated".to_string()))?;

        if is_truncated != next_continuation_token.is_some() {
            return Err(ListObjectsError::InvalidResponse(
                element.clone(),
                "IsTruncated doesn't match NextContinuationToken".to_string(),
            ));
        }

        Ok(Self {
            bucket,
            objects,
            common_prefixes,
            next_continuation_token,
        })
    }
}

/// Metadata about a single S3 object.
/// See https://docs.aws.amazon.com/AmazonS3/latest/API/API_Object.html for more details.
#[derive(Debug)]
pub struct S3Object {
    /// Key for this object.
    pub key: String,

    /// Size of this object in bytes.
    pub size: u64,

    /// The time this object was last modified.
    pub last_modified: DateTime<FixedOffset>,

    /// Storage class for this object.
    pub storage_class: String,

    /// Entity tag of this object.
    pub etag: String,
}

impl S3Object {
    fn parse_from_xml(element: &xmltree::Element) -> Result<Self, ListObjectsError> {
        let key = get_field(element, "Key")?;

        let size = get_field(element, "Size")?;

        let size = u64::from_str(&size).map_err(|e| ListObjectsError::ParseIntError(e, "Size".to_string()))?;

        let last_modified = get_field(element, "LastModified")?;

        // S3 appears to use RFC 3339 to encode this field, based on the API example here:
        // https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html
        let last_modified = DateTime::parse_from_rfc3339(&last_modified)
            .map_err(|e| ListObjectsError::DateTimeParseError(e, "LastModified".to_string()))?;

        let storage_class = get_field(element, "StorageClass")?;

        let etag = get_field(element, "ETag")?;

        Ok(Self {
            key,
            size,
            last_modified,
            storage_class,
            etag,
        })
    }
}

impl S3Client {
    pub async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListObjectsResult, ListObjectsError> {
        let (tx, rx) = oneshot::channel::<Result<ListObjectsResult, ListObjectsError>>();

        // Scope everything except the channel before the first .await so that the Future is Send.
        // (Since message, options, etc. are not).
        {
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default()).unwrap();
            message.set_request_method("GET").unwrap();
            message.add_header(&Header::new("Host", &endpoint)).unwrap();
            message.add_header(&Header::new("accept", "application/xml")).unwrap();
            message
                .add_header(&Header::new("user-agent", "aws-s3-crt-rust"))
                .unwrap();

            // Don't URI encode delimiter or prefix, since "/" in those needs to be a real "/".
            let mut request = format!("/?list-type=2&delimiter={delimiter}&max-keys={max_keys}&prefix={prefix}");

            if let Some(continuation_token) = continuation_token {
                // DO URI encode the continuation token, since "/" in it needs to become "%2F"
                let continuation_token = urlencoding::encode(continuation_token);
                request = request + &format!("&continuation-token={continuation_token}");
            }

            message.set_request_path(request).unwrap();

            // Accumulate the body of the response into this Vec<u8>.
            let body: Arc<Mutex<Vec<u8>>> = Default::default();
            let body1 = body.clone();
            let mut options = MetaRequestOptions::new();
            options
                .message(message)
                .on_body(move |range_start, data| {
                    trace!(
                        start = range_start,
                        length = data.len(),
                        "ListObjects body part received"
                    );

                    let mut body = body1.lock().unwrap();

                    // TODO: are we guaranteed to receive parts in order like this?
                    assert_eq!(range_start as usize, body.len());
                    body.extend_from_slice(data);
                })
                .on_finish(move |request_result| {
                    let body = body.lock().unwrap();

                    trace!(total_size = body.len(), "ListObjects finished");

                    let result = if request_result.error_code == 0 {
                        ListObjectsResult::parse_from_bytes(&body)
                    } else {
                        // Turn the error response body into String, using Debug to produce some message
                        // if it's not valid UTF-8.
                        let error_response_body = request_result
                            .error_response_body
                            .unwrap_or_else(|| "No error response body".into())
                            .into_string()
                            .unwrap_or_else(|e| format!("Response not valid UTF-8: {:?}", e));

                        let crt_error: Error = request_result.error_code.into();

                        error!(
                            ?crt_error,
                            http_code = request_result.response_status,
                            response = error_response_body,
                            "ListObjects error"
                        );

                        Err(ListObjectsError::HTTPError(
                            crt_error,
                            request_result.response_status,
                            error_response_body,
                        ))
                    };

                    let _ = tx.send(result);
                })
                .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

            self.s3_client.make_meta_request(options)?;
        }

        let result = rx.await;

        // Map the futures Canceled error into the ListObjectsError
        // This happens if the callback closure containing `tx` is dropped before being called;
        // which can happen if the request is somehow canceled before completing.
        result.unwrap_or_else(|err| Err(ListObjectsError::from(err)))
    }
}

use crate::object_client::{ListObjectsResult, ObjectInfo};
use crate::s3_client::S3RequestError;
use crate::S3Client;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::http::request_response::{Header, Message};
use std::str::FromStr;
use thiserror::Error;
use time::format_description::well_known::Rfc3339;
use time::OffsetDateTime;
use tracing::error;

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ListObjectsError {
    #[error("Error parsing response: {0}")]
    ParseError(#[from] ParseError),
}

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ParseError {
    #[error("XML response was not valid: problem = {1}, xml node = {0:?}")]
    InvalidResponse(xmltree::Element, String),

    #[error("XML parsing error: {0:?}")]
    Xml(#[from] xmltree::ParseError),

    #[error("Missing field {1} from XML element {0:?}")]
    MissingField(xmltree::Element, String),

    #[error("Failed to parse field {1} as bool: {0:?}")]
    Bool(#[source] std::str::ParseBoolError, String),

    #[error("Failed to parse field {1} as int: {0:?}")]
    Int(#[source] std::num::ParseIntError, String),

    #[error("Failed to parse field {1} as OffsetDateTime: {0:?}")]
    OffsetDateTime(#[source] time::error::Parse, String),
}

/// Copy text out of an XML element, with the right error type.
fn get_text(element: &xmltree::Element) -> Result<String, ParseError> {
    Ok(element
        .get_text()
        .ok_or_else(|| ParseError::InvalidResponse(element.clone(), "field has no text".to_string()))?
        .to_string())
}

/// Wrapper to get child with some name out of an XML element, with the right error type.
fn get_child<'a>(element: &'a xmltree::Element, name: &str) -> Result<&'a xmltree::Element, ParseError> {
    element
        .get_child(name)
        .ok_or_else(|| ParseError::MissingField(element.clone(), name.to_string()))
}

/// Get the text out of a child node, with the right error type.
fn get_field(element: &xmltree::Element, name: &str) -> Result<String, ParseError> {
    get_text(get_child(element, name)?)
}

impl ListObjectsResult {
    fn parse_from_bytes(bytes: &[u8]) -> Result<Self, ParseError> {
        Self::parse_from_xml(&mut xmltree::Element::parse(bytes)?)
    }

    fn parse_from_xml(element: &mut xmltree::Element) -> Result<Self, ParseError> {
        let mut objects = Vec::new();

        while let Some(content) = element.take_child("Contents") {
            objects.push(ObjectInfo::parse_from_xml(&content)?);
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
        let is_truncated = bool::from_str(&is_truncated).map_err(|e| ParseError::Bool(e, "IsTruncated".to_string()))?;

        if is_truncated != next_continuation_token.is_some() {
            return Err(ParseError::InvalidResponse(
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

impl ObjectInfo {
    fn parse_from_xml(element: &xmltree::Element) -> Result<Self, ParseError> {
        let key = get_field(element, "Key")?;

        let size = get_field(element, "Size")?;

        let size = u64::from_str(&size).map_err(|e| ParseError::Int(e, "Size".to_string()))?;

        let last_modified = get_field(element, "LastModified")?;

        // S3 appears to use RFC 3339 to encode this field, based on the API example here:
        // https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html

        let last_modified = OffsetDateTime::parse(&last_modified, &Rfc3339)
            .map_err(|e| ParseError::OffsetDateTime(e, "LastModified".to_string()))?;

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
    ) -> Result<ListObjectsResult, S3RequestError<ListObjectsError>> {
        // Scope the endpoiint, message, etc. since otherwise rustc thinks we use Message across the await.
        let body = {
            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

            let mut message = Message::new_request(&mut Allocator::default())?;
            message.set_request_method("GET")?;
            message.add_header(&Header::new("Host", &endpoint))?;
            message.add_header(&Header::new("accept", "application/xml"))?;
            message.add_header(&Header::new("user-agent", "aws-s3-crt-rust"))?;

            // Don't URI encode delimiter or prefix, since "/" in those needs to be a real "/".
            let mut request = format!("/?list-type=2&delimiter={delimiter}&max-keys={max_keys}&prefix={prefix}");

            if let Some(continuation_token) = continuation_token {
                // DO URI encode the continuation token, since "/" in it needs to become "%2F"
                let continuation_token = urlencoding::encode(continuation_token);
                request = request + &format!("&continuation-token={continuation_token}");
            }

            message.set_request_path(request)?;

            self.make_http_request(message)
        };

        let body = body.await?;

        ListObjectsResult::parse_from_bytes(&body).map_err(|e| S3RequestError::ServiceError(e.into()))
    }
}

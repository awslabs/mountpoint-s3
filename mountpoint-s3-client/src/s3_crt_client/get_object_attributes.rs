use std::{fmt, str::FromStr};

use mountpoint_s3_crt::{
    http::request_response::Header,
    s3::client::{MetaRequestResult, MetaRequestType},
};
use thiserror::Error;
use tracing::debug;

use crate::{
    Checksum, GetObjectAttributesError, GetObjectAttributesParts, GetObjectAttributesResult, ObjectAttribute,
    ObjectClientError, ObjectClientResult, ObjectPart, S3CrtClient, S3RequestError,
};

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ParseError {
    #[error("XML response was not valid: problem = {1}, xml node = {0:?}")]
    InvalidResponse(xmltree::Element, String),

    #[error("XML parsing error: {0:?}")]
    Xml(#[from] xmltree::ParseError),

    #[error("Missing field {1} from XML element {0:?}")]
    MissingField(xmltree::Element, String),

    #[error("Failed to parse field {0} from string")]
    FromStr(String),
}

impl GetObjectAttributesResult {
    fn parse_from_bytes(bytes: &[u8]) -> Result<Self, ParseError> {
        Self::parse_from_xml(&mut xmltree::Element::parse(bytes)?)
    }

    fn parse_from_xml(element: &mut xmltree::Element) -> Result<Self, ParseError> {
        let etag = get_field_or_none(element, "ETag")?;
        let storage_class = get_field_or_none(element, "StorageClass")?;
        let object_size = get_field_or_none(element, "ObjectSize")?;

        let mut checksum = None;
        if let Some(checksum_elem) = element.take_child("Checksum") {
            let checksum_crc32 = get_field_or_none(&checksum_elem, "ChecksumCRC32")?;
            let checksum_crc32c = get_field_or_none(&checksum_elem, "ChecksumCRC32C")?;
            let checksum_sha1 = get_field_or_none(&checksum_elem, "ChecksumSHA1")?;
            let checksum_sha256 = get_field_or_none(&checksum_elem, "ChecksumSHA256")?;

            checksum = Some(Checksum {
                checksum_crc32,
                checksum_crc32c,
                checksum_sha1,
                checksum_sha256,
            })
        }

        let mut object_parts = None;
        if let Some(mut object_parts_elem) = element.take_child("ObjectParts") {
            let is_truncated = get_field(&object_parts_elem, "IsTruncated")?;
            let max_parts = get_field(&object_parts_elem, "MaxParts")?;
            let next_part_number_marker = get_field(&object_parts_elem, "NextPartNumberMarker")?;
            let part_number_marker = get_field(&object_parts_elem, "PartNumberMarker")?;
            let parts_count = get_field(&object_parts_elem, "PartsCount")?;

            let mut parts = Vec::new();
            while let Some(part_elem) = object_parts_elem.take_child("Part") {
                let checksum_crc32 = get_field_or_none(&part_elem, "ChecksumCRC32")?;
                let checksum_crc32c = get_field_or_none(&part_elem, "ChecksumCRC32C")?;
                let checksum_sha1 = get_field_or_none(&part_elem, "ChecksumSHA1")?;
                let checksum_sha256 = get_field_or_none(&part_elem, "ChecksumSHA256")?;

                let part_number = get_field(&part_elem, "PartNumber")?;
                let size = get_field(&part_elem, "Size")?;

                let part = ObjectPart {
                    checksum_crc32,
                    checksum_crc32c,
                    checksum_sha1,
                    checksum_sha256,
                    part_number: part_number.parse().unwrap(),
                    size: size.parse().unwrap(),
                };
                parts.push(part);
            }

            object_parts = Some(GetObjectAttributesParts {
                is_truncated: is_truncated.parse().unwrap(),
                max_parts: max_parts.parse().unwrap(),
                next_part_number_marker: next_part_number_marker.parse().unwrap(),
                part_number_marker: part_number_marker.parse().unwrap(),
                parts,
                total_parts_count: parts_count.parse().unwrap(),
            });
        }

        Ok(Self {
            etag,
            checksum,
            object_parts,
            storage_class,
            object_size,
        })
    }
}

impl S3CrtClient {
    pub async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        object_attributes: Vec<ObjectAttribute>,
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, S3RequestError> {
        let body = {
            let mut message = self
                .new_request_template("GET", bucket)
                .map_err(S3RequestError::construction_failure)?;

            let query = vec![("attributes", "")];

            let path = format!("/{key}");
            message
                .set_request_path_and_query(path, query)
                .map_err(S3RequestError::construction_failure)?;

            let object_attributes: Vec<String> = object_attributes.iter().map(|attr| attr.to_string()).collect();
            message
                .add_header(&Header::new("x-amz-object-attributes", object_attributes.join(",")))
                .map_err(S3RequestError::construction_failure)?;

            let span = request_span!(self, "get_object_attributes");
            span.in_scope(|| debug!(?bucket, ?key, "new request"));

            self.make_simple_http_request(message, MetaRequestType::Default, span, |result| {
                let parsed = parse_get_object_attributes_error(&result);
                parsed
                    .map(ObjectClientError::ServiceError)
                    .unwrap_or(ObjectClientError::ClientError(S3RequestError::ResponseError(result)))
            })?
        };

        let body = body.await?;

        GetObjectAttributesResult::parse_from_bytes(&body)
            .map_err(|e| ObjectClientError::ClientError(S3RequestError::InternalError(e.into())))
    }
}

fn parse_get_object_attributes_error(result: &MetaRequestResult) -> Option<GetObjectAttributesError> {
    match result.response_status {
        404 => Some(GetObjectAttributesError::NotFound),
        _ => None,
    }
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

/// Get the value out of a child node, return [None] if the child node is missing.
fn get_field_or_none<T>(element: &xmltree::Element, name: &str) -> Result<Option<T>, ParseError>
where
    T: FromStr,
    <T as FromStr>::Err: fmt::Debug,
{
    match get_field(element, name) {
        Ok(str) => match str.parse::<T>() {
            Ok(value) => Ok(Some(value)),
            Err(_) => Err(ParseError::FromStr(name.to_string())),
        },
        Err(ParseError::MissingField(_, _)) => Ok(None),
        Err(e) => Err(e),
    }
}

#[cfg(test)]
mod tests {
    use std::ffi::OsString;

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
    fn parse_404_object_not_found() {
        let result = make_result(404, "");
        let result = parse_get_object_attributes_error(&result);
        assert_eq!(result, Some(GetObjectAttributesError::NotFound));
    }

    #[test]
    fn parse_403() {
        let result = make_result(403, "");
        let result = parse_get_object_attributes_error(&result);
        assert_eq!(result, None);
    }

    #[test]
    fn get_string() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: Result<Option<String>, ParseError> =
            get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "ETag");

        assert!(result.is_ok());
        assert_eq!(result.unwrap(), Some("fc3ff98e8c6a0d3087d515c0473f8677".to_owned()));
    }

    #[test]
    fn get_boolean() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: Result<Option<bool>, ParseError> =
            get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "IsTruncated");

        assert!(result.is_ok());
        assert_eq!(result.unwrap(), Some(false));
    }

    #[test]
    fn get_integer() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: Result<Option<usize>, ParseError> =
            get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "ObjectSize");

        assert!(result.is_ok());
        assert_eq!(result.unwrap(), Some(1024));
    }

    #[test]
    fn get_none() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: Result<Option<usize>, ParseError> =
            get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "PartNumber");

        assert!(result.is_ok());
        assert_eq!(result.unwrap(), None);
    }

    #[test]
    fn get_parse_error() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: Result<Option<usize>, ParseError> =
            get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "IsTruncated");

        assert!(result.is_err());
    }
}

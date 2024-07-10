use std::ops::Deref;
use std::os::unix::prelude::OsStrExt;
use std::str::FromStr;

use mountpoint_s3_crt::{http::request_response::Header, s3::client::MetaRequestResult};
use thiserror::Error;

use crate::object_client::{
    Checksum, GetObjectAttributesError, GetObjectAttributesParts, GetObjectAttributesResult, ObjectAttribute,
    ObjectClientError, ObjectClientResult, ObjectPart,
};
use crate::s3_crt_client::{S3CrtClient, S3Operation, S3RequestError};

#[derive(Error, Debug)]
#[non_exhaustive]
pub enum ParseError {
    #[error("XML response was not valid: problem = {1}, xml node = {0:?}")]
    InvalidResponse(xmltree::Element, String),

    #[error("XML parsing error: {0:?}")]
    Xml(#[from] xmltree::ParseError),

    #[error("Missing field {1} from XML element {0:?}")]
    MissingField(xmltree::Element, String),
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
            checksum = Some(Self::parse_checksums(&checksum_elem)?);
        }

        let mut object_parts = None;
        if let Some(mut object_parts_elem) = element.take_child("ObjectParts") {
            let is_truncated = get_field_or_none(&object_parts_elem, "IsTruncated")?;
            let max_parts = get_field_or_none(&object_parts_elem, "MaxParts")?;
            let next_part_number_marker = get_field_or_none(&object_parts_elem, "NextPartNumberMarker")?;
            let part_number_marker = get_field_or_none(&object_parts_elem, "PartNumberMarker")?;
            let total_parts_count = get_field_or_none(&object_parts_elem, "PartsCount")?;

            let mut parts = Vec::new();
            while let Some(part_elem) = object_parts_elem.take_child("Part") {
                let checksum_inner = Self::parse_checksums(&part_elem)?;

                let part_number = get_field(&part_elem, "PartNumber")?;
                let size = get_field(&part_elem, "Size")?;

                let part = ObjectPart {
                    checksum: Some(checksum_inner),
                    part_number: part_number.parse().unwrap(),
                    size: size.parse().unwrap(),
                };
                parts.push(part);
            }

            object_parts = Some(GetObjectAttributesParts {
                is_truncated,
                max_parts,
                next_part_number_marker,
                part_number_marker,
                parts: (!parts.is_empty()).then_some(parts),
                total_parts_count,
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

    fn parse_checksums(element: &xmltree::Element) -> Result<Checksum, ParseError> {
        let checksum_crc32 = get_field_or_none(element, "ChecksumCRC32")?;
        let checksum_crc32c = get_field_or_none(element, "ChecksumCRC32C")?;
        let checksum_sha1 = get_field_or_none(element, "ChecksumSHA1")?;
        let checksum_sha256 = get_field_or_none(element, "ChecksumSHA256")?;

        Ok(Checksum {
            checksum_crc32,
            checksum_crc32c,
            checksum_sha1,
            checksum_sha256,
        })
    }
}

impl S3CrtClient {
    pub(super) async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        max_parts: Option<usize>,
        part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, S3RequestError> {
        let body = {
            let mut message = self
                .inner
                .new_request_template("GET", bucket)
                .map_err(S3RequestError::construction_failure)?;

            let query = vec![("attributes", "")];

            let path = format!("/{key}");
            message
                .set_request_path_and_query(path, query)
                .map_err(S3RequestError::construction_failure)?;

            if let Some(max_parts) = max_parts {
                let value = format!("{}", max_parts);
                message
                    .set_header(&Header::new("x-amz-max-parts", value))
                    .map_err(S3RequestError::construction_failure)?;
            }

            if let Some(part_number_marker) = part_number_marker {
                let value = format!("{}", part_number_marker);
                message
                    .set_header(&Header::new("x-amz-part-number-marker", value))
                    .map_err(S3RequestError::construction_failure)?;
            }

            let object_attributes: Vec<String> = object_attributes.iter().map(|attr| attr.to_string()).collect();
            message
                .set_header(&Header::new("x-amz-object-attributes", object_attributes.join(",")))
                .map_err(S3RequestError::construction_failure)?;

            let span = request_span!(
                self.inner,
                "get_object_attributes",
                bucket,
                key,
                ?max_parts,
                ?part_number_marker,
                ?object_attributes
            );

            self.inner.make_simple_http_request(
                message,
                S3Operation::GetObjectAttributes,
                span,
                parse_get_object_attributes_error,
            )?
        };

        let body = body.await?;

        GetObjectAttributesResult::parse_from_bytes(&body)
            .map_err(|e| ObjectClientError::ClientError(S3RequestError::InternalError(e.into())))
    }
}

fn parse_get_object_attributes_error(result: &MetaRequestResult) -> Option<GetObjectAttributesError> {
    match result.response_status {
        404 => {
            let body = result.error_response_body.as_ref()?;
            let root = xmltree::Element::parse(body.as_bytes()).ok()?;
            let error_code = root.get_child("Code")?;
            let error_str = error_code.get_text()?;
            match error_str.deref() {
                "NoSuchBucket" => Some(GetObjectAttributesError::NoSuchBucket),
                "NoSuchKey" => Some(GetObjectAttributesError::NoSuchKey),
                _ => None,
            }
        }
        _ => None,
    }
}

/// Copy text out of an XML element, with the right error type.
fn get_text(element: &xmltree::Element) -> Result<String, ParseError> {
    Ok(element
        .get_text()
        .ok_or_else(|| ParseError::InvalidResponse(element.clone(), "field has no text".to_owned()))?
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
fn get_field_or_none<T: FromStr>(element: &xmltree::Element, name: &str) -> Result<Option<T>, ParseError> {
    match get_field(element, name) {
        Ok(str) => str
            .parse::<T>()
            .map(Some)
            .map_err(|_| ParseError::InvalidResponse(element.clone(), "failed to parse field from string".to_owned())),
        Err(ParseError::MissingField(_, _)) => Ok(None),
        Err(e) => Err(e),
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
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchKey</Code><Message>The specified key does not exist.</Message><Key>not-a-real-key</Key><RequestId>NTKJWKHQBYNS73A9</RequestId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_attributes_error(&result);
        assert_eq!(result, Some(GetObjectAttributesError::NoSuchKey));
    }

    #[test]
    fn parse_404_no_such_bucket() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><Error><Code>NoSuchBucket</Code><Message>The specified bucket does not exist</Message><BucketName>DOC-EXAMPLE-BUCKET</BucketName><RequestId>4VAGDP5HMYTDNB3Y</RequestId></Error>"#;
        let result = make_result(404, OsStr::from_bytes(&body[..]));
        let result = parse_get_object_attributes_error(&result);
        assert_eq!(result, Some(GetObjectAttributesError::NoSuchBucket));
    }

    #[test]
    fn get_string() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: String = get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "ETag")
            .unwrap()
            .unwrap();
        assert_eq!(&result, "fc3ff98e8c6a0d3087d515c0473f8677");
    }

    #[test]
    fn get_boolean() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: bool = get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "IsTruncated")
            .unwrap()
            .unwrap();
        assert!(!result);
    }

    #[test]
    fn get_integer() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: usize = get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "ObjectSize")
            .unwrap()
            .unwrap();
        assert_eq!(result, 1024);
    }

    #[test]
    fn get_none() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: Option<usize> =
            get_field_or_none(&xmltree::Element::parse(&body[..]).unwrap(), "PartNumber").unwrap();
        assert!(result.is_none());
    }

    #[test]
    fn get_parse_error() {
        let body = br#"<?xml version="1.0" encoding="UTF-8"?><GetObjectAttributesResponse xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><ETag>fc3ff98e8c6a0d3087d515c0473f8677</ETag><IsTruncated>false</IsTruncated><ObjectSize>1024</ObjectSize></GetObjectAttributesResponse>"#;
        let result: ParseError =
            get_field_or_none::<usize>(&xmltree::Element::parse(&body[..]).unwrap(), "IsTruncated").unwrap_err();
        assert!(result.to_string().contains("failed to parse field from string"));
    }
}

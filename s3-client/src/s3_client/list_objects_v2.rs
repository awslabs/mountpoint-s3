use crate::S3Client;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestOptions;
use aws_crt_s3_sys::aws_s3_meta_request_type;
use futures::channel::oneshot;
use futures::FutureExt;
use std::future::Future;
use std::str::FromStr;
use std::sync::{Arc, Mutex};
use thiserror::Error;
use tracing::{error, trace};

#[derive(Debug)]
pub struct ListObjectsV2Result {
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

#[derive(Error, Debug)]
#[allow(clippy::enum_variant_names)]
pub enum ListObjectsV2Error {
    #[error("CRT error")]
    CRTError(#[from] Error),
    #[error("Error parsing XML element into result")]
    ParseError(String),
    #[error("XML parsing error")]
    XMLParseError(#[from] xmltree::ParseError),
    #[error("The future was canceled")]
    CanceledError(#[from] oneshot::Canceled),
}

/// Copy text out of an XML element, mapping error into the right type.
fn get_text(element: &xmltree::Element) -> Result<String, ListObjectsV2Error> {
    Ok(element
        .get_text()
        .ok_or_else(|| ListObjectsV2Error::ParseError(format!("no text: {:?}", element)))?
        .to_string())
}

/// Wrapper to get child with some name out of an XML element, with the right error type.
fn get_child<'a>(element: &'a xmltree::Element, name: &str) -> Result<&'a xmltree::Element, ListObjectsV2Error> {
    element
        .get_child(name)
        .ok_or_else(|| ListObjectsV2Error::ParseError(format!("No child named {:?} in {:?}", name, element)))
}

impl ListObjectsV2Result {
    fn parse_from_bytes(bytes: &[u8]) -> Result<Self, ListObjectsV2Error> {
        Self::parse_from_xml(&mut xmltree::Element::parse(bytes)?)
    }

    fn parse_from_xml(element: &mut xmltree::Element) -> Result<Self, ListObjectsV2Error> {
        let mut objects = Vec::new();

        while let Some(content) = element.take_child("Contents") {
            objects.push(S3Object::parse_from_xml(&content)?);
        }

        let mut common_prefixes = Vec::new();

        while let Some(common_prefix) = element.take_child("CommonPrefixes") {
            let prefix = get_text(get_child(&common_prefix, "Prefix")?)?;
            common_prefixes.push(prefix);
        }

        let bucket = get_text(get_child(element, "Name")?)?;

        let mut next_continuation_token = None;
        if let Some(elem) = element.get_child("NextContinuationToken") {
            next_continuation_token = Some(get_text(elem)?);
        }

        Ok(Self {
            bucket,
            objects,
            common_prefixes,
            next_continuation_token,
        })
    }
}

#[derive(Debug)]
pub struct S3Object {
    pub key: String,
    pub size: u64,
}

impl S3Object {
    fn parse_from_xml(element: &xmltree::Element) -> Result<Self, ListObjectsV2Error> {
        let key = get_text(get_child(element, "Key")?)?;

        let size = get_text(get_child(element, "Size")?)?;

        let size = u64::from_str(&size)
            .map_err(|e| ListObjectsV2Error::ParseError(format!("Failed to parse size into u64: {:?}", e)))?;

        Ok(Self { key, size })
    }
}

impl S3Client {
    pub fn list_objects_v2(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> impl Future<Output = Result<ListObjectsV2Result, ListObjectsV2Error>> {
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

        println!("{}", request);

        message.set_request_path(request).unwrap();

        let mut options = MetaRequestOptions::new();

        let (tx, rx) = oneshot::channel::<Result<ListObjectsV2Result, ListObjectsV2Error>>();

        // Accumulate the body of the response here.
        let body: Arc<Mutex<Vec<u8>>> = Default::default();

        let body1 = body.clone();

        options
            .message(message)
            .on_body(move |range_start, data| {
                trace!(
                    start = range_start,
                    length = data.len(),
                    "ListObjectsV2 body part received"
                );

                let mut body = body1.lock().unwrap();

                // TODO: are we guaranteed to receive parts in order like this?
                assert_eq!(range_start as usize, body.len());
                body.extend_from_slice(data);
            })
            .on_finish(move |ref request_result| {
                trace!("ListObjectsV2 finished");

                if let Some(error_body) = request_result.error_response_body.as_ref() {
                    error!(error = ?error_body, "ListObjectsV2 error");
                }

                let result: Result<(), Error> = request_result.into();
                let result = result.map_err(ListObjectsV2Error::CRTError);

                let result = result.and_then(|_| {
                    let body = body.lock().unwrap();
                    ListObjectsV2Result::parse_from_bytes(&body)
                });

                let _ = tx.send(result);
            })
            .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

        self.s3_client
            .make_meta_request(options)
            .expect("failed to make ListObjectsV2 request");

        // Map the futures Canceled error into the ListObjectsV2Error
        rx.map(|res| res.unwrap_or_else(|err| Err(ListObjectsV2Error::from(err))))
    }
}

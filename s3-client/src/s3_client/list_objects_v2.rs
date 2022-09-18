use crate::util::{byte_cursor_as_osstr, StringExt};
use crate::S3Client;
use anyhow::{anyhow, Result};
use aws_crt_s3::auth::signing_config::SigningConfig;
use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::common::error::Error;
use aws_crt_s3::http::request_response::{Header, Message};
use aws_crt_s3::s3::client::MetaRequestOptions;
use aws_crt_s3_sys::{
    aws_last_error, aws_s3_initiate_list_objects, aws_s3_list_objects_params, aws_s3_meta_request_type,
    aws_s3_object_info, aws_s3_paginator, aws_s3_paginator_continue, aws_s3_paginator_has_more_results,
};
use futures::channel::oneshot;
use std::ffi::OsString;
use std::str::FromStr;
use std::sync::mpsc;
use thiserror::Error;
use tracing::{error, trace};

#[derive(Debug)]
pub struct ListObjectsV2Result {
    pub name: String,
    pub contents: Vec<S3Object>,
    pub common_prefixes: Vec<String>,
}

impl ListObjectsV2Result {
    fn parse_from_xml(element: &mut xmltree::Element) -> Result<Self> {
        let mut contents = Vec::new();

        while let Some(content) = element.take_child("Contents") {
            contents.push(S3Object::parse_from_xml(&content)?);
        }

        let mut common_prefixes = Vec::new();

        while let Some(common_prefix) = element.take_child("CommonPrefixes") {
            let prefix = common_prefix
                .get_child("Prefix")
                .ok_or_else(|| anyhow!("no Prefix node"))?
                .get_text()
                .ok_or_else(|| anyhow!("no text"))?
                .to_string();

            common_prefixes.push(prefix);
        }

        let name = element
            .get_child("Name")
            .ok_or_else(|| anyhow!("No Name node"))?
            .get_text()
            .ok_or_else(|| anyhow!("no text"))?
            .to_string();

        Ok(Self {
            name,
            contents,
            common_prefixes,
        })
    }
}

#[derive(Debug)]
pub struct S3Object {
    pub key: String,
    pub size: u64,
}

impl S3Object {
    fn parse_from_xml(element: &xmltree::Element) -> Result<Self> {
        let key = element.get_child("Key").unwrap().get_text().unwrap().to_string();

        let size = &element
            .get_child("Size")
            .ok_or_else(|| anyhow!("No Size child"))?
            .get_text()
            .ok_or_else(|| anyhow!("no text"))?;

        let size = u64::from_str(size)?;

        Ok(Self { key, size })
    }
}

impl S3Client {
    pub fn new_list_objects_v2(&self, bucket: &str, prefix: &str, delimiter: &str) -> Result<ListObjectsV2Result> {
        let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);

        let mut message = Message::new_request(&mut Allocator::default()).unwrap();
        message.set_request_method("GET");
        message.add_header(&Header::new("Host", &endpoint));
        message.add_header(&Header::new("accept", "*/*"));
        message.add_header(&Header::new("user-agent", "aws-s3-crt-rust"));

        // TODO: does the CRT do URI encoding for me?
        let request = format!("/?list-type=2&prefix={prefix}&delimiter={delimiter}");
        message.set_request_path(request);

        let mut options = MetaRequestOptions::new();

        let (tx, rx) = mpsc::channel::<Result<ListObjectsV2Result>>();
        let tx2 = tx.clone();

        options
            .message(message)
            .on_body(move |start, body| {
                assert_eq!(start, 0);
                let mut elem = xmltree::Element::parse(body).unwrap();
                let _ = tx.send(ListObjectsV2Result::parse_from_xml(&mut elem));
            })
            .on_finish(move |error_code, error_body| {
                let error_body = error_body.map(String::from_utf8_lossy);

                if error_code != 0 || error_body.is_some() {
                    let _ = tx2.send(Err(anyhow!("{} {:?}", error_code, error_body)));
                }
            })
            .request_type(aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_DEFAULT);

        self.s3_client
            .make_meta_request(options)
            .expect("failed to make ListObjectsV2 request");

        rx.recv().unwrap()
    }

    pub async fn list_objects_v2(
        &self,
        bucket: &str,
        prefix: &str,
        delimiter: &str,
        continuation_token: Option<&str>,
    ) -> Result<ListObjectsResult, ListObjectsError> {
        let (tx, rx) = oneshot::channel();

        let endpoint = format!("s3.{}.amazonaws.com", self.region);

        // Warning: don't move this into the unsafe block below, since we need it to live at least
        // until we get a response back on the rx channel. If we drop it before then, the background
        // CRT thread could still be running even though the Box has been freed.
        let mut user_data = Box::new(ListObjectsV2UserData {
            result: Some(Default::default()),
            signing_config: self.signing_config.clone(),
            tx: Some(tx),
        });

        unsafe {
            let list_objects_params = aws_s3_list_objects_params {
                client: self.s3_client.inner.as_ptr(),
                bucket_name: bucket.as_aws_byte_cursor(),
                prefix: prefix.as_aws_byte_cursor(),
                delimiter: delimiter.as_aws_byte_cursor(),
                endpoint: endpoint.as_aws_byte_cursor(),
                on_object: Some(on_object_callback),
                on_list_finished: Some(on_list_finished_callback),
                user_data: user_data.as_mut() as *mut ListObjectsV2UserData as *mut libc::c_void,
                continuation_token: continuation_token.map(|s| s.as_aws_byte_cursor()).unwrap_or_default(),
            };

            let paginator = aws_s3_initiate_list_objects(self.allocator.inner.as_ptr(), &list_objects_params);
            if paginator.is_null() {
                return Err(ListObjectsError::InitiateListObjects(aws_last_error().into()));
            }

            let result = aws_s3_paginator_continue(paginator, self.signing_config.to_inner_ptr());

            if result != 0 {
                return Err(ListObjectsError::InitiateListObjects(aws_last_error().into()));
            }
        }

        rx.await.expect("sender must not drop before returning a result")
    }
}

#[derive(Error, Debug)]
pub enum ListObjectsError {
    #[error("failed to initiate ListObjectsV2 request")]
    InitiateListObjects(Error),
    #[error("failed to continue paginator")]
    Paginator(Error),
    #[error("CRT error")]
    CRTError(#[from] Error),
}

#[derive(Default, Debug)]
pub struct ListObjectsResult {
    pub objects: Vec<S3ObjectInfo>,
}

#[derive(Clone, Debug)]
pub struct S3ObjectInfo {
    pub prefix: OsString,
    pub key: OsString,
    pub size: u64,
}

/// Struct used as the `user_data` pointer for ListObjectsV2 requests to the CRT
struct ListObjectsV2UserData {
    result: Option<ListObjectsResult>,
    signing_config: SigningConfig,
    tx: Option<oneshot::Sender<Result<ListObjectsResult, ListObjectsError>>>,
}

// This struct needs to be Send because we give it to the CRT
static_assertions::assert_impl_all!(Box<ListObjectsV2UserData>: Send, Sync);

impl ListObjectsV2UserData {
    /// Finish the callback by transmitting a result back to the caller of list_objects_v2.
    /// Don't use self after calling this function because the Box backing it will be deallocated.
    unsafe fn finish_callback(&mut self, result: Result<ListObjectsResult, ListObjectsError>) {
        let tx = self.tx.take().unwrap();

        tx.send(result).unwrap();
    }
}

unsafe extern "C" fn on_object_callback(info: *const aws_s3_object_info, user_data_ptr: *mut libc::c_void) -> bool {
    let user_data = (user_data_ptr as *mut ListObjectsV2UserData).as_mut().unwrap();
    let info = info.as_ref().unwrap();

    let prefix = byte_cursor_as_osstr(info.prefix);
    let key = byte_cursor_as_osstr(info.key);

    user_data.result.as_mut().unwrap().objects.push(S3ObjectInfo {
        prefix: prefix.to_owned(),
        key: key.to_owned(),
        size: info.size,
    });

    trace!(request = ?user_data_ptr, ?prefix, ?key, size = info.size, "ListObjectsV2 on_object callback");

    true
}

unsafe extern "C" fn on_list_finished_callback(
    paginator: *mut aws_s3_paginator,
    error_code: libc::c_int,
    user_data_ptr: *mut libc::c_void,
) {
    trace!(request = ?user_data_ptr, "ListObjectsV2 on_list_finished callback");

    // Turn the pointer into a boxed reference. We box the reference so that finish_callback can consume
    // it and avoid us having an invalid reference after we transmit on tx.
    let user_data = (user_data_ptr as *mut ListObjectsV2UserData).as_mut().unwrap();

    if error_code != 0 {
        let err: Error = error_code.into();
        error!(request = ?user_data_ptr, error_code, error = %err, "ListObjectsV2 on_list_finished_callback error");
        user_data.finish_callback(Err(ListObjectsError::CRTError(err)));
        return;
    }

    let has_more_results: bool = aws_s3_paginator_has_more_results(paginator);

    if !has_more_results {
        let result = user_data.result.take().unwrap();
        user_data.finish_callback(Ok(result));
        return;
    }

    let result = aws_s3_paginator_continue(paginator, user_data.signing_config.to_inner_ptr());

    if result != 0 {
        let err: Error = aws_last_error().into();
        error!(request = ?user_data_ptr, error = %err, "ListObjectsV2 aws_s3_paginator_continue failed");
        user_data.finish_callback(Err(ListObjectsError::Paginator(err)));
    }
}

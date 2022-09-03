use crate::s3_client::AwsSigningConfig;
use crate::util::{byte_cursor_as_osstr, StringExt};
use crate::S3Client;
use aws_c_s3_sys::{
    aws_s3_initiate_list_objects, aws_s3_list_objects_params, aws_s3_object_info, aws_s3_paginator,
    aws_s3_paginator_continue, aws_s3_paginator_has_more_results,
};
use futures::channel::oneshot;
use std::ffi::OsString;
use std::sync::Arc;
use tracing::{error, trace};

impl S3Client {
    pub async fn list_objects_v2(
        &self,
        bucket: &str,
        prefix: &str,
        delimiter: &str,
        continuation_token: Option<&str>,
    ) -> Result<ListObjectsResult, String> {
        unsafe {
            let endpoint = format!("s3.{}.amazonaws.com", self.region);

            let (tx, rx) = oneshot::channel();

            let mut user_data: Box<ListObjectsV2UserData> = Box::new(ListObjectsV2UserData {
                result: Some(Default::default()),
                signing_config: self.signing_config.clone(),
                tx: Some(tx),
            });

            let list_objects_params = aws_s3_list_objects_params {
                client: self.s3_client,
                bucket_name: bucket.as_aws_byte_cursor(),
                prefix: prefix.as_aws_byte_cursor(),
                delimiter: delimiter.as_aws_byte_cursor(),
                endpoint: endpoint.as_aws_byte_cursor(),
                on_object: Some(on_object_callback),
                on_list_finished: Some(on_list_finished_callback),
                user_data: user_data.as_mut() as *mut ListObjectsV2UserData as *mut libc::c_void,
                continuation_token: continuation_token.map(|s| s.as_aws_byte_cursor()).unwrap_or_default(),
            };

            let paginator = aws_s3_initiate_list_objects(self.allocator, &list_objects_params);

            let result = aws_s3_paginator_continue(paginator, (*self.signing_config).as_ref());

            if result != 0 {
                return Err(format!("aws_s3_paginator_continue error: {}", result));
            }

            rx.await.unwrap()
        }
    }
}

#[derive(Default, Debug)]
pub struct ListObjectsResult {
    pub objects: Vec<S3ObjectInfo>,
}

#[derive(Debug)]
pub struct S3ObjectInfo {
    pub prefix: OsString,
    pub key: OsString,
    pub size: u64,
}

/// Struct used as the `user_data` pointer for ListObjectsV2 requests to the CRT
struct ListObjectsV2UserData {
    result: Option<ListObjectsResult>,
    signing_config: Arc<AwsSigningConfig>,
    tx: Option<oneshot::Sender<Result<ListObjectsResult, String>>>,
}

// This struct needs to be Send because we give it to the CRT
static_assertions::assert_impl_all!(Box<ListObjectsV2UserData>: Send);

extern "C" fn on_object_callback(info: *const aws_s3_object_info, user_data_ptr: *mut libc::c_void) -> bool {
    unsafe {
        let user_data = (user_data_ptr as *mut ListObjectsV2UserData).as_mut().unwrap();

        let info = info.as_ref().unwrap();

        let prefix = byte_cursor_as_osstr(info.prefix);
        let key = byte_cursor_as_osstr(info.key);

        user_data.result.as_mut().unwrap().objects.push(S3ObjectInfo {
            prefix: prefix.to_owned(),
            key: key.to_owned(),
            size: info.size,
        });

        trace!(?prefix, ?key, size = info.size, "ListObjectsV2 on_object callback");

        true
    }
}

extern "C" fn on_list_finished_callback(
    paginator: *mut aws_s3_paginator,
    error_code: libc::c_int,
    user_data_ptr: *mut libc::c_void,
) {
    trace!(error_code, "ListObjectsV2 on_list_finished callback");

    // Turn the user_data pointer into a box so it will be dropped when this callback is done.
    // If there are more pages to get, then we will call Box::leak on it (again) until
    // all the pages are consumed.
    let user_data = unsafe { (user_data_ptr as *mut ListObjectsV2UserData).as_mut().unwrap() };

    if error_code != 0 {
        error!(error_code, "ListObjectsV2 on_list_finished_callback error");
        user_data
            .tx
            .take()
            .unwrap()
            .send(Err(format!("on_list_finish callback error: {}", error_code)))
            .unwrap();
        return;
    }

    let has_more_results: bool = unsafe { aws_s3_paginator_has_more_results(paginator) };

    if !has_more_results {
        user_data
            .tx
            .take()
            .unwrap()
            .send(Ok(user_data.result.take().unwrap()))
            .unwrap();
        return;
    }

    let result = unsafe { aws_s3_paginator_continue(paginator, (*user_data.signing_config).as_ref()) };

    if result != 0 {
        error!(result, "ListObjectsV2 aws_s3_paginator_continue failed");
        user_data
            .tx
            .take()
            .unwrap()
            .send(Err(format!("aws_s3_paginator_continue error: {}", result)))
            .unwrap();
        return;
    }
}

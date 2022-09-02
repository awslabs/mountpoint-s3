use crate::util::{byte_cursor_as_osstr, StringExt};
use crate::S3Client;
use aws_c_s3_sys::{
    aws_s3_initiate_list_objects, aws_s3_list_objects_params, aws_s3_object_info, aws_s3_paginator,
    aws_s3_paginator_continue, aws_s3_paginator_has_more_results, aws_signing_config_aws,
};
use std::ffi::OsString;
use std::future::Future;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll, Waker};
use tracing::{error, trace};

impl S3Client {
    pub fn list_objects_v2(
        &self,
        bucket: &str,
        prefix: &str,
        delimiter: &str,
        continuation_token: Option<&str>,
    ) -> impl Future<Output = Result<ListObjectsResult, String>> {
        unsafe {
            let endpoint = format!("s3.{}.amazonaws.com", self.region);

            let state = Arc::new(Mutex::new(Default::default()));

            let user_data: Box<ListObjectsV2UserData> = Box::new(ListObjectsV2UserData {
                state: state.clone(),
                result: Default::default(),
                signing_config: self.signing_config.clone(),
            });

            // Leak the user_data Box so that it will continue to live after this function returns.
            let user_data = Box::leak(user_data);

            let list_objects_params = aws_s3_list_objects_params {
                client: self.s3_client,
                bucket_name: bucket.as_aws_byte_cursor(),
                prefix: prefix.as_aws_byte_cursor(),
                delimiter: delimiter.as_aws_byte_cursor(),
                endpoint: endpoint.as_aws_byte_cursor(),
                on_object: Some(on_object_callback),
                on_list_finished: Some(on_list_finished_callback),
                user_data: user_data as *mut ListObjectsV2UserData as *mut libc::c_void,
                continuation_token: continuation_token
                    .map(|s| s.as_aws_byte_cursor())
                    .unwrap_or_default(),
            };

            let paginator = aws_s3_initiate_list_objects(self.allocator, &list_objects_params);

            let result = aws_s3_paginator_continue(paginator, &*self.signing_config);

            if result != 0 {
                let mut state = state.lock().unwrap();
                state.complete(Err(format!("aws_s3_paginator_continue error: {}", result)));
            }

            ListObjectsV2Request { state }
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

/// Shared state between the await-able ListObjectsV2 request and the CRT callbacks
#[derive(Default)]
struct ListObjectsV2SharedState {
    result: Option<Result<ListObjectsResult, String>>,
    waker: Option<Waker>,
}

impl ListObjectsV2SharedState {
    /// Complete the request by setting the result field and waking up the request Future
    fn complete(&mut self, result: Result<ListObjectsResult, String>) {
        self.result = Some(result);
        if let Some(waker) = self.waker.take() {
            waker.wake();
        }
    }
}

/// Return value from ListObjectsV2, can be await-ed to get the result
struct ListObjectsV2Request {
    state: Arc<Mutex<ListObjectsV2SharedState>>,
}

impl Future for ListObjectsV2Request {
    type Output = Result<ListObjectsResult, String>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        let mut state = self.state.lock().unwrap();

        if let Some(result) = state.result.take() {
            Poll::Ready(result)
        } else {
            state.waker = Some(cx.waker().clone());
            Poll::Pending
        }
    }
}

/// Struct used as the `user_data` pointer for ListObjectsV2 requests to the CRT
struct ListObjectsV2UserData {
    result: ListObjectsResult,
    state: Arc<Mutex<ListObjectsV2SharedState>>,
    signing_config: Arc<aws_signing_config_aws>,
}

extern "C" fn on_object_callback(
    info: *const aws_s3_object_info,
    user_data_ptr: *mut libc::c_void,
) -> bool {
    unsafe {
        let user_data = (user_data_ptr as *mut ListObjectsV2UserData)
            .as_mut()
            .unwrap();

        let info = info.as_ref().unwrap();

        let prefix = byte_cursor_as_osstr(info.prefix);
        let key = byte_cursor_as_osstr(info.key);

        user_data.result.objects.push(S3ObjectInfo {
            prefix: prefix.to_owned(),
            key: key.to_owned(),
            size: info.size,
        });

        trace!(
            ?prefix,
            ?key,
            size = info.size,
            "ListObjectsV2 on_object callback"
        );

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
    let user_data = unsafe { Box::from_raw(user_data_ptr as *mut ListObjectsV2UserData) };

    let state_ptr = user_data.state.clone();
    let mut state = state_ptr.lock().unwrap();

    if error_code != 0 {
        error!(error_code, "ListObjectsV2 on_list_finished_callback error");
        state.complete(Err(format!(
            "on_list_finish callback error: {}",
            error_code
        )));
        return;
    }

    let has_more_results: bool = unsafe { aws_s3_paginator_has_more_results(paginator) };

    if !has_more_results {
        state.complete(Ok(user_data.result));
        return;
    }

    let result = unsafe { aws_s3_paginator_continue(paginator, &*user_data.signing_config) };

    if result != 0 {
        error!(result, "ListObjectsV2 aws_s3_paginator_continue failed");
        state.complete(Err(format!("aws_s3_paginator_continue error: {}", result)));
        return;
    }

    // Leak the user_data box again because the callback will fire again
    Box::leak(user_data);
}

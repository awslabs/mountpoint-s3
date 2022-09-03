use std::ops::Range;
use std::slice;
use std::sync::mpsc::{Receiver, Sender};

use aws_c_s3_sys::{
    aws_byte_cursor, aws_http_header, aws_http_message_add_header, aws_http_message_new_request,
    aws_http_message_set_request_method, aws_http_message_set_request_path, aws_http_method_get,
    aws_s3_client_make_meta_request, aws_s3_meta_request, aws_s3_meta_request_options, aws_s3_meta_request_result,
    aws_s3_meta_request_type, AWS_OP_SUCCESS,
};
use tracing::{error, trace};

use crate::util::{PtrExt, StringExt};
use crate::S3Client;

impl S3Client {
    /// Create and begin a new GetObject request. The body of the object will be returned in parts
    /// by invoking the `callback`. Body parts will be delivered in order.
    pub fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
        callback: impl FnMut(u64, &[u8]) + Send + 'static,
    ) -> Result<GetObjectRequest, String> {
        // Safety: `aws_http_message_add_header` and `aws_http_message_set_request_path` copy their
        // input strings, so none of the strings we create here need to live beyond this scope
        let message = unsafe {
            let message = aws_http_message_new_request(self.allocator);

            let endpoint = format!("{}.s3.{}.amazonaws.com", bucket, self.region);
            let host_header = aws_http_header {
                name: "Host".as_aws_byte_cursor(),
                value: endpoint.as_aws_byte_cursor(),
                ..Default::default()
            };
            aws_http_message_add_header(message, host_header);

            let accept_header = aws_http_header {
                name: "accept".as_aws_byte_cursor(),
                value: "*/*".as_aws_byte_cursor(),
                ..Default::default()
            };
            aws_http_message_add_header(message, accept_header);

            let user_agent_header = aws_http_header {
                name: "user-agent".as_aws_byte_cursor(),
                value: "aws-s3-crt-rust".as_aws_byte_cursor(),
                ..Default::default()
            };
            aws_http_message_add_header(message, user_agent_header);

            if let Some(range) = range {
                // Range HTTP header is bounded below *inclusive*
                let range_value = format!("bytes={}-{}", range.start, range.end.saturating_sub(1));
                let range_header = aws_http_header {
                    name: "Range".as_aws_byte_cursor(),
                    value: range_value.as_aws_byte_cursor(),
                    ..Default::default()
                };
                aws_http_message_add_header(message, range_header);
            }

            aws_http_message_set_request_method(message, aws_http_method_get);

            let key = format!("/{}", key);
            aws_http_message_set_request_path(message, key.as_aws_byte_cursor());

            message
        };

        let (sender, receiver) = std::sync::mpsc::channel();

        // `user_data` needs to outlive the GetObjectRequest that we return, so we leak it here.
        // `get_object_finish_callback` will free this once the request completes.
        let user_data = Box::new(GetObjectRequestUserData {
            callback: Box::new(callback),
            finish_channel: sender,
        });
        let user_data = Box::leak(user_data);

        let request_options = aws_s3_meta_request_options {
            user_data: user_data as *const GetObjectRequestUserData as *mut libc::c_void,
            signing_config: &*self.signing_config as *const _ as *mut _,
            type_: aws_s3_meta_request_type::AWS_S3_META_REQUEST_TYPE_GET_OBJECT,
            message,
            body_callback: Some(get_object_receive_body_callback),
            finish_callback: Some(get_object_finish_callback),
            ..Default::default()
        };

        let _meta_request = unsafe {
            aws_s3_client_make_meta_request(self.s3_client, &request_options as *const _)
                .ok_or("failed to create meta request".to_string())?
        };

        Ok(GetObjectRequest {
            finish_receiver: receiver,
        })
    }
}

pub struct GetObjectRequest {
    finish_receiver: Receiver<Result<(), String>>,
}

impl GetObjectRequest {
    /// Block the current thread until the GetObject request finishes.
    pub fn wait(self) -> Result<(), String> {
        self.finish_receiver.recv().expect("recv failed")
    }
}

/// Struct used as the `user_data` pointer for GetObject requests to the CRT
struct GetObjectRequestUserData {
    callback: Box<dyn FnMut(u64, &[u8]) + Send>,
    finish_channel: Sender<Result<(), String>>,
}

// GetObjectRequestUserData needs to be Send because we (logically) send it to the CRT.
static_assertions::assert_impl_all!(Box<GetObjectRequestUserData>: Send);

/// Invoked from the CRT when a new body part is received for a request
extern "C" fn get_object_receive_body_callback(
    meta_request: *mut aws_s3_meta_request,
    body: *const aws_byte_cursor,
    range_start: u64,
    user_data_ptr: *mut libc::c_void,
) -> libc::c_int {
    // Safety: The `GetObjectRequest` creates by `get_object` lives at least until we send the
    // finish message.
    let user_data = unsafe {
        (user_data_ptr as *mut GetObjectRequestUserData)
            .as_mut()
            .expect("user_data pointer cannot be null")
    };

    // Safety: `body` is owned by the meta request, and this slice won't outlive this callback
    let body = unsafe { slice::from_raw_parts((*body).ptr, (*body).len) };

    trace!(
        request=?meta_request,
        offset=range_start,
        length = body.len(),
        "GetObjectRequest received body part",
    );

    // TODO this is a `FnMut` closure, and so we need to make sure it's not executed concurrently
    // (the `&mut user_data` we have here is unsafe)
    (user_data.callback)(range_start, body);

    AWS_OP_SUCCESS
}

/// Invoked from the CRT when a request finished (success or failure)
extern "C" fn get_object_finish_callback(
    meta_request: *mut aws_s3_meta_request,
    meta_request_result: *const aws_s3_meta_request_result,
    user_data_ptr: *mut libc::c_void,
) {
    let result = unsafe { meta_request_result.as_ref().expect("result cannot be null") };
    trace!(
        request=?meta_request,
        ?result,
        "GetObjectRequest finished",
    );

    // Turn the user data back into a Box, so we can drop it once this callback finishes.
    // Safety: The `GetObjectRequestUserData` created by `get_object` was `Box::leak`ed at creation
    // and so must still be alive here (TODO what if this callback invokes twice for some reason?)
    let user_data = unsafe { Box::from_raw(user_data_ptr as *mut GetObjectRequestUserData) };

    if result.error_code != 0 {
        let error_body = if let Some(error_body) = unsafe { result.error_response_body.as_ref() } {
            let error_body: &[u8] = unsafe { slice::from_raw_parts(error_body.buffer, error_body.len) };
            let error_body = std::str::from_utf8(error_body).expect("error wasn't UTF-8");
            error_body.to_string()
        } else {
            "Unknown error".into()
        };
        error!(
            request=?meta_request,
            error_code = result.error_code,
            error_body, "GetObject failed"
        );
        // The other end may have already dropped, so just swallow failures here.
        let _ = user_data.finish_channel.send(Err(error_body));
    } else {
        // The other end may have already dropped, so just swallow failures here.
        let _ = user_data.finish_channel.send(Ok(()));
    }
}

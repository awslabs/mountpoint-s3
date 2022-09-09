#![allow(unused)]

use crate::common::allocator::Allocator;
use crate::s3::client::Client;
use crate::s3::paginator::Paginator;
use crate::StringExt;
use aws_crt_s3_sys::*;
use std::ffi::OsStr;
use std::ptr::NonNull;

pub struct ListObjectsParams<'a> {
    client: &'a mut Client,
    bucket_name: &'a str,
    prefix: &'a str,
    delimiter: &'a str,
}

pub fn initiate_list_objects(allocator: &mut Allocator, params: &ListObjectsParams) -> Option<Paginator> {
    // Safety: aws_s3_initiate_list_objects makes copies of the strings we pass in here
    let inner = unsafe {
        let inner_params = aws_s3_list_objects_params {
            bucket_name: params.bucket_name.as_aws_byte_cursor(),
            prefix: params.prefix.as_aws_byte_cursor(),
            delimiter: params.delimiter.as_aws_byte_cursor(),
            ..Default::default()
        };

        aws_s3_initiate_list_objects(allocator.inner.as_ptr(), &inner_params)
    };

    Some(Paginator {
        inner: NonNull::new(inner)?,
    })
}

#![allow(unused)]

use crate::common::allocator::Allocator;
use crate::s3::paginator::Paginator;
use aws_c_s3_sys::*;

pub fn initiate_list_objects(allocator: &mut Allocator) -> Paginator {
    todo!()
}

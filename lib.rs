#[link(name = "fuse",
       vers = "0.1",
       uuid = "9385b964-5831-426e-b8b1-97acffc564d9",
       url = "https://github.com/zargony/rust-fuse.git")];
#[crate_type = "lib"];

#[comment = "Rust FUSE bindings"];
#[author = "Andreas Neuhaus <info@zargony.com>"];
#[license = "MIT"];

pub mod fuse;

mod glue;
mod todo;

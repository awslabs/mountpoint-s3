#[comment = "Rust FUSE bindings"];
#[author = "Andreas Neuhaus <zargony@zargony.com>"];
#[license = "MIT"];

#[crate_type = "lib"];
#[link(name = "fuse", vers = "0.1")];

pub mod fuse;

mod glue;
mod todo;

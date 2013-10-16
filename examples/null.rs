extern mod fuse;

struct NullFS;

impl fuse::Filesystem for NullFS {
}

fn main () {
	let mount_point = ::std::os::args()[1];
	fuse::mount(NullFS, mount_point.as_bytes(), []);
}

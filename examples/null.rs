extern mod fuse;

struct NullFS;

impl fuse::Filesystem for NullFS {
}

fn main () {
	fuse::mount(NullFS, ::std::os::args()[1], []);
}

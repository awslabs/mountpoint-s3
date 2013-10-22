extern mod fuse;

struct NullFS;

impl fuse::Filesystem for NullFS {
}

fn main () {
	let mountpoint = Path::new(::std::os::args()[1]);
	fuse::mount(NullFS, &mountpoint, []);
}

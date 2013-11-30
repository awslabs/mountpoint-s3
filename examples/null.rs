extern mod fuse;

struct NullFS;

impl fuse::Filesystem for NullFS {
}

fn main () {
	let mountpoint = Path::init(::std::os::args()[1]);
	fuse::mount(NullFS, &mountpoint, []);
}

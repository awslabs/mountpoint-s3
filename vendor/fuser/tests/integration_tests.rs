use fuser::{Filesystem, Session, MountOption};
use std::rc::Rc;
use std::thread;
use std::time::Duration;
use tempfile::TempDir;
use std::path::Path;

#[test]
#[cfg(target_os = "linux")]
fn unmount_no_send() {
    // Rc to make this !Send
    struct NoSendFS(Rc<()>);

    impl Filesystem for NoSendFS {}

    let tmpdir: TempDir = tempfile::tempdir().unwrap();
    let mut session = Session::new(NoSendFS(Rc::new(())), tmpdir.path(), &[]).unwrap();
    let mut unmounter = session.unmount_callable();
    thread::spawn(move || {
        thread::sleep(Duration::from_secs(1));
        unmounter.unmount().unwrap();
    });
    session.run().unwrap();
}

#[test]
#[cfg(target_os = "linux")]
fn session_for_fd() {
    struct DummyFs;

    impl Filesystem for DummyFs {}

    let path = Path::new("/dev/fd/3");
    Session::new(DummyFs{}, &path, &[]).expect("shoud create a session");
}

#[test]
#[cfg(target_os = "linux")]
fn session_for_fd_auto_umount() {
    #[derive(Debug)]
    struct DummyFs;

    impl Filesystem for DummyFs {}

    let path = Path::new("/dev/fd/3");
    Session::new(DummyFs{}, &path, &[MountOption::AutoUnmount]).expect_err("shoud not create a session");
}

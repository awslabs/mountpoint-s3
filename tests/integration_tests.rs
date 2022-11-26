use fuser::{Filesystem, Session};
use std::rc::Rc;
use std::thread;
use std::time::Duration;
use tempfile::TempDir;

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

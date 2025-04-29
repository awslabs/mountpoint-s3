use std::sync::Arc;
use std::sync::Mutex;

#[derive(Debug, Clone, Default)]
pub struct LockedWriter {
    inner: Arc<Mutex<Vec<u8>>>,
}

impl LockedWriter {
    pub fn into_string(self) -> String {
        let buf = Arc::try_unwrap(self.inner).unwrap().into_inner().unwrap();
        String::from_utf8(buf).unwrap()
    }
}

impl std::io::Write for LockedWriter {
    fn write(&mut self, buf: &[u8]) -> std::io::Result<usize> {
        let mut inner = self.inner.lock().unwrap();
        inner.extend_from_slice(buf);
        Ok(buf.len())
    }

    fn flush(&mut self) -> std::io::Result<()> {
        Ok(())
    }
}

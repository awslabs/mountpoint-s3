use crate::sync::Arc;
use crate::sync::Mutex;

#[derive(Debug, Clone, Default)]
pub struct LockedWriter {
    inner: Arc<Mutex<Vec<u8>>>,
}

impl LockedWriter {
    pub fn get_string(&self) -> String {
        let buf = self.inner.lock().unwrap();
        str::from_utf8(&buf).unwrap().to_owned()
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

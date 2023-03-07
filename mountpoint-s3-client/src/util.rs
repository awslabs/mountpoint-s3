/// Translate the common "return a null pointer on failure" pattern into Results
pub(crate) trait PtrExt: Sized {
    fn ok_or<E>(self, err: E) -> Result<Self, E>;
}

impl<T> PtrExt for *const T {
    fn ok_or<E>(self, err: E) -> Result<Self, E> {
        if self.is_null() {
            Err(err)
        } else {
            Ok(self)
        }
    }
}

impl<T> PtrExt for *mut T {
    fn ok_or<E>(self, err: E) -> Result<Self, E> {
        if self.is_null() {
            Err(err)
        } else {
            Ok(self)
        }
    }
}

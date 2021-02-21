//! Low-level kernel communication.

mod argument;

mod request;

pub use request::{Operation, Request, RequestError};

#[cfg(test)]
mod test {
    use std::ops::{Deref, DerefMut};
    /// If we want to be able to cast bytes to our fuse C struct types we need it
    /// to be aligned.  This struct helps getting &[u8]s which are 8 byte aligned.
    #[cfg(test)]
    #[repr(align(8))]
    pub(crate) struct AlignedData<T>(pub T);
    impl<T> Deref for AlignedData<T> {
        type Target = T;

        fn deref(&self) -> &Self::Target {
            &self.0
        }
    }
    impl<T> DerefMut for AlignedData<T> {
        fn deref_mut(&mut self) -> &mut Self::Target {
            &mut self.0
        }
    }
}

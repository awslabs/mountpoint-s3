use crate::generated::*;
use std::{marker::PhantomData, sync::Arc};

#[derive(Clone)]
pub struct SigningConfig<'user> {
    // TODO: make only visible to this crate
    pub inner: Arc<aws_signing_config_aws>,

    // The signing config holds onto a reference to user data, e.g., the region string.
    pub(crate) phantom: PhantomData<&'user str>,
}

// TODO: is this okay?
unsafe impl<'user> Send for SigningConfig<'user> {}
unsafe impl<'user> Sync for SigningConfig<'user> {}

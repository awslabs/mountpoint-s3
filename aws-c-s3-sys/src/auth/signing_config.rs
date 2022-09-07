use crate::generated::*;
use std::sync::Arc;

#[derive(Clone)]
pub struct SigningConfig {
    // TODO: make only visible to this crate
    pub inner: Arc<aws_signing_config_aws>,
}

unsafe impl Send for SigningConfig {}
unsafe impl Sync for SigningConfig {}

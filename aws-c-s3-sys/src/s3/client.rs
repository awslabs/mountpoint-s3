use crate::auth::credentials::CredentialsProvider;
use crate::auth::signing_config::{SigningConfig, SigningConfigInner};
use crate::common::allocator::Allocator;
use crate::generated::*;
use crate::io::channel_bootstrap::ClientBootstrap;
use crate::StringExt;
use std::ptr::NonNull;
use std::sync::Arc;

pub struct Client {
    // TODO: make only visible to this crate
    pub inner: NonNull<aws_s3_client>,

    // We need to hold onto the signing config for as long as the client exists
    // The signing config itself references some bytes owned by the user (e.g., region string).
    signing_config: SigningConfig,
}

pub struct ClientConfig<'a> {
    // None means default
    pub max_active_connections_override: Option<u32>,
    // None means default
    pub throughput_target_gbps: Option<f64>,
    // None means default
    pub part_size: Option<usize>,
    pub client_bootstrap: &'a mut ClientBootstrap,
    pub signing_config: &'a SigningConfig,
}

impl Client {
    pub fn new(allocator: &mut Allocator, config: &ClientConfig) -> Option<Self> {
        let signing_config = config.signing_config.clone();

        // Get the inner pointer out of the signing config. Cast it to a mut pointer (even though we
        // don't have a mut reference) because aws_s3_client_new doesn't modify the config: it
        // creates a cached copy of it internally.
        let signing_config_ptr = signing_config.to_inner_ptr() as *mut aws_signing_config_aws;

        let inner_config = aws_s3_client_config {
            max_active_connections_override: config.max_active_connections_override.unwrap_or(0),
            throughput_target_gbps: config.throughput_target_gbps.unwrap_or(0.0),
            client_bootstrap: config.client_bootstrap.inner.as_ptr(),
            part_size: config.part_size.unwrap_or(0),
            signing_config: signing_config_ptr,
            ..Default::default()
        };

        let inner = unsafe { aws_s3_client_new(allocator.inner.as_ptr(), &inner_config) };

        Some(Self {
            inner: NonNull::new(inner)?,
            signing_config,
        })
    }
}

impl Clone for Client {
    fn clone(&self) -> Self {
        unsafe {
            aws_s3_client_acquire(self.inner.as_ptr());
        }

        Self {
            inner: self.inner,
            signing_config: self.signing_config.clone(),
        }
    }
}

impl Drop for Client {
    fn drop(&mut self) {
        unsafe {
            aws_s3_client_release(self.inner.as_ptr());
        }
    }
}

pub fn init_default_signing_config(region: &str, credentials_provider: &mut CredentialsProvider) -> SigningConfig {
    let mut signing_config = Box::new(SigningConfigInner {
        inner: Default::default(),
        region: region.to_owned().into(),
        _pinned: Default::default(),
    });

    // Safety: we copied the region to an OsString in the SigningConfig so the bytes will
    // live as long as the inner aws_signing_config_aws does.
    unsafe {
        let region_cursor = signing_config.region.as_aws_byte_cursor();

        aws_s3_init_default_signing_config(
            &mut signing_config.inner,
            region_cursor,
            credentials_provider.inner.as_ptr(),
        );
    }
    signing_config.inner.flags.set_use_double_uri_encode(false as u32);

    SigningConfig(Arc::new(Box::into_pin(signing_config)))
}

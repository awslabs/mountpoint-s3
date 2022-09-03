use std::mem::MaybeUninit;
use std::ptr;
use std::sync::Arc;

use aws_c_s3_sys::{
    aws_allocator, aws_client_bootstrap, aws_client_bootstrap_new, aws_client_bootstrap_options,
    aws_client_bootstrap_release, aws_credentials_provider,
    aws_credentials_provider_chain_default_options, aws_credentials_provider_new_chain_default,
    aws_credentials_provider_release, aws_default_allocator, aws_event_loop_group,
    aws_event_loop_group_new_default, aws_event_loop_group_release, aws_host_resolver,
    aws_host_resolver_default_options, aws_host_resolver_new_default, aws_host_resolver_release,
    aws_s3_client, aws_s3_client_config, aws_s3_client_new, aws_s3_client_release,
    aws_s3_init_default_signing_config, aws_signing_config_aws,
};

use crate::crt_init;
use crate::util::{box_assume_init, PtrExt, StringExt};

mod get;
mod list_objects_v2;

#[derive(Debug, Clone, Default)]
pub struct S3ClientConfig {
    pub throughput_target_gbps: Option<f64>,
    pub part_size: Option<usize>,
}

/// Wrapper around aws_signing_config_aws to mark it as Send+Sync
struct AwsSigningConfig {
    inner: aws_signing_config_aws,
}

// TODO is this actually Send+Sync?
unsafe impl Send for AwsSigningConfig {}
unsafe impl Sync for AwsSigningConfig {}

impl AsRef<aws_signing_config_aws> for AwsSigningConfig {
    fn as_ref(&self) -> &aws_signing_config_aws {
        &self.inner
    }
}

// TODO i think event loops are intended to never move across threads, so need to think about
// synchronization here
pub struct S3Client {
    allocator: *mut aws_allocator,
    s3_client: *mut aws_s3_client,
    credentials_provider: *mut aws_credentials_provider,
    client_bootstrap: *mut aws_client_bootstrap,
    host_resolver: *mut aws_host_resolver,
    event_loop_group: *mut aws_event_loop_group,
    signing_config: Arc<AwsSigningConfig>,
    region: String,
    throughput_target_gbps: f64,
}

impl S3Client {
    pub fn new(config: S3ClientConfig) -> Result<Self, String> {
        crt_init();

        // Safety arguments in this function are mostly pretty boring (singletons, constructors that
        // copy from pointers, etc), so safety annotations only on interesting cases.

        let allocator = unsafe { aws_default_allocator() };

        // Safety: I think the CRT expects an event loop never to move across threads, so S3Client
        // must not be `Send`
        let event_loop_group =
            unsafe { aws_event_loop_group_new_default(allocator, 0, ptr::null()) };

        let mut resolver_options = aws_host_resolver_default_options {
            el_group: event_loop_group,
            max_entries: 8,
            ..Default::default()
        };
        let host_resolver =
            unsafe { aws_host_resolver_new_default(allocator, &mut resolver_options as *mut _) };

        let mut bootstrap_options = aws_client_bootstrap_options {
            event_loop_group,
            host_resolver,
            ..Default::default()
        };
        let client_bootstrap = unsafe {
            aws_client_bootstrap_new(allocator, &mut bootstrap_options as *mut _)
                .ok_or("failed to create client bootstrap".to_string())?
        };

        let mut creds_provider_options = aws_credentials_provider_chain_default_options {
            bootstrap: client_bootstrap,
            ..Default::default()
        };
        let creds_provider = unsafe {
            aws_credentials_provider_new_chain_default(
                allocator,
                &mut creds_provider_options as *mut _,
            )
        };

        let mut signing_config = Box::new(MaybeUninit::uninit());
        let region = "us-east-1".to_string();
        unsafe {
            aws_s3_init_default_signing_config(
                signing_config.as_mut_ptr(),
                // Safety: the `region` string must live as long as this `signing_config` does
                region.as_aws_byte_cursor(),
                creds_provider,
            );
            signing_config
                .assume_init_mut()
                .flags
                .set_use_double_uri_encode(false as u32);
        }

        // CRT uses 0 to indicate default values for these configs
        let throughput_target_gbps = config.throughput_target_gbps.unwrap_or(0.0);
        let part_size = config.part_size.unwrap_or(0);

        let client_config = aws_s3_client_config {
            client_bootstrap,
            // Safety: the `region` string must live as long as this `client` does
            region: unsafe { region.as_aws_byte_cursor() },
            signing_config: signing_config.as_mut_ptr(),
            throughput_target_gbps,
            part_size,
            ..Default::default()
        };
        let s3_client = unsafe {
            aws_s3_client_new(allocator, &client_config as *const _)
                .ok_or("failed to create s3 client".to_string())?
        };

        Ok(Self {
            allocator,
            s3_client,
            client_bootstrap,
            host_resolver,
            event_loop_group,
            credentials_provider: creds_provider,
            signing_config: Arc::new(AwsSigningConfig {
                inner: *box_assume_init(signing_config),
            }),
            region,
            throughput_target_gbps,
        })
    }

    pub fn throughput_target_gbps(&self) -> f64 {
        self.throughput_target_gbps
    }
}

impl Drop for S3Client {
    fn drop(&mut self) {
        // TODO do we need to abort inflight requests somehow?
        unsafe {
            aws_s3_client_release(self.s3_client);
            aws_credentials_provider_release(self.credentials_provider);
            aws_client_bootstrap_release(self.client_bootstrap);
            aws_host_resolver_release(self.host_resolver);
            aws_event_loop_group_release(self.event_loop_group);
        }
    }
}

// TODO ?
unsafe impl Send for S3Client {}
unsafe impl Sync for S3Client {}

//! An Instance Metadata Service (IMDS) client using the AWS Common Runtime implementation.

use futures::channel::oneshot;
use mountpoint_s3_crt::auth::imds_client::{ImdsClient, ImdsClientConfig};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::error;
use mountpoint_s3_crt::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use mountpoint_s3_crt::io::event_loop::EventLoopGroup;
use mountpoint_s3_crt::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use serde_json::Value;
use thiserror::Error;

#[derive(Debug)]
/// Instance Metadata Service (IMDS) client responsible for sending EC2 instance metadata query requests.
pub struct ImdsCrtClient {
    imds_client: ImdsClient,
    #[allow(unused)]
    event_loop_group: EventLoopGroup,
    #[allow(unused)]
    allocator: Allocator,
}

impl ImdsCrtClient {
    pub fn new() -> Result<Self, error::Error> {
        let allocator = Allocator::default();

        let mut event_loop_group = EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

        let resolver_options = HostResolverDefaultOptions {
            max_entries: 8,
            event_loop_group: &mut event_loop_group,
        };

        let mut host_resolver = HostResolver::new_default(&allocator, &resolver_options).unwrap();

        let bootstrap_options = ClientBootstrapOptions {
            event_loop_group: &mut event_loop_group,
            host_resolver: &mut host_resolver,
        };

        let client_bootstrap = ClientBootstrap::new(&allocator, &bootstrap_options).unwrap();

        let mut client_config = ImdsClientConfig::new();
        client_config.client_bootstrap(client_bootstrap);

        let imds_client = ImdsClient::new(&allocator, client_config)?;

        Ok(Self {
            imds_client,
            event_loop_group,
            allocator,
        })
    }

    /// Query the identity document of the EC2 instance this code is executed on.
    pub async fn get_identity_document(&self) -> Result<IdentityDocument, ImdsQueryRequestError> {
        const IDENTITY_DOCUMENT_PATH: &str = "/latest/dynamic/instance-identity/document";

        let (tx, rx) = oneshot::channel();
        self.imds_client.get_resource(IDENTITY_DOCUMENT_PATH, move |result| {
            let _ = tx.send(result);
        })?;

        let json = match rx.await {
            Ok(Ok(json)) => json,
            Ok(Err(err)) => return Err(ImdsQueryRequestError::CrtError(err)),
            Err(err) => return Err(ImdsQueryRequestError::InternalError(Box::new(err))),
        };

        let json = &json;
        let parsed: Value =
            serde_json::from_str(json).map_err(|_| ImdsQueryRequestError::InvalidResponse(json.to_owned()))?;
        let instance_type = parsed
            .get("instanceType")
            .and_then(Value::as_str)
            .ok_or_else(|| ImdsQueryRequestError::InvalidResponse(json.to_owned()))?
            .to_owned();
        let region = parsed
            .get("region")
            .and_then(Value::as_str)
            .ok_or_else(|| ImdsQueryRequestError::InvalidResponse(json.to_owned()))?
            .to_owned();

        Ok(IdentityDocument { instance_type, region })
    }
}

/// Information about an EC2 instance.
#[derive(Debug)]
pub struct IdentityDocument {
    // TODO: Add more fields as required.
    /// The instance type of the instance.
    pub instance_type: String,
    /// The Region in which the instance is running.
    pub region: String,
}

/// ImdsQueryRequestError is returned by an asynchronous query.
#[derive(Error, Debug)]
pub enum ImdsQueryRequestError {
    /// An internal error from within the Imds client. The request may have been sent.
    #[error("Internal Imds client error")]
    InternalError(#[source] Box<dyn std::error::Error + Send + Sync>),

    /// An internal error from within the AWS Common Runtime. The request may have been sent.
    #[error("Unknown CRT error")]
    CrtError(#[from] error::Error),

    /// The response from Imds was not valid.
    #[error("Invalid response from Imds: {0}")]
    InvalidResponse(String),
}

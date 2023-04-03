use std::pin::Pin;
use std::task::Context;
use std::task::Poll;

use futures::channel::oneshot;
use futures::Future;
use mountpoint_s3_crt::auth::imds_client::{ImdsClient, ImdsClientConfig};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::error;
use mountpoint_s3_crt::io::channel_bootstrap::{ClientBootstrap, ClientBootstrapOptions};
use mountpoint_s3_crt::io::event_loop::EventLoopGroup;
use mountpoint_s3_crt::io::host_resolver::{HostResolver, HostResolverDefaultOptions};
use pin_project::pin_project;
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

    /// Query the type of the EC2 instance this code is executed on.
    pub fn make_instance_type_query(&self) -> Result<ImdsQueryRequest, ImdsQueryRequestError> {
        let (tx, rx) = oneshot::channel();
        self.imds_client.get_instance_type(move |result| {
            let _ = tx.send(result.map_err(ImdsQueryRequestError::CrtError));
        })?;

        Ok(ImdsQueryRequest { receiver: rx })
    }
}

#[derive(Debug)]
#[pin_project]
/// ImdsQueryRequest is a data encapsulation wrapper for asnychronous instance metadata query.
pub struct ImdsQueryRequest {
    #[pin]
    receiver: oneshot::Receiver<Result<String, ImdsQueryRequestError>>,
}

impl Future for ImdsQueryRequest {
    type Output = Result<String, ImdsQueryRequestError>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        let this = self.project();
        this.receiver
            .poll(cx)
            .map(|result| result.unwrap_or_else(|err| Err(ImdsQueryRequestError::InternalError(Box::new(err)))))
    }
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
}

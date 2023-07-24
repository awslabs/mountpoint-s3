use mountpoint_s3_crt::{
    common::{allocator::Allocator, uri::Uri},
    s3::endpoint_resolver::{RequestContext, ResolverError, RuleEngine},
};
use thiserror::Error;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub enum AddressingStyle {
    /// Use virtual addressing if possible, but fall back to path addressing if necessary
    #[default]
    Automatic,
    /// Always use path addressing
    Path,
}

#[derive(Debug, Clone)]
pub struct EndpointConfig {
    region: String,
    use_fips: bool,
    use_accelerate: bool,
    use_dual_stack: bool,
    endpoint: Option<Uri>,
    addressing_style: AddressingStyle,
}

impl EndpointConfig {
    /// Create a new endpoint configuration for a given region
    pub fn new(region: &str) -> Self {
        Self {
            region: region.to_owned(),
            use_fips: false,
            use_accelerate: false,
            use_dual_stack: false,
            endpoint: None,
            addressing_style: AddressingStyle::Automatic,
        }
    }

    /// Set region for a given endpoint config
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn region(mut self, region: &str) -> Self {
        self.region = region.to_owned();
        self
    }

    /// use FIPS config for S3
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn use_fips(mut self, fips: bool) -> Self {
        self.use_fips = fips;
        self
    }

    /// use Transfer Acceleration config for S3
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn use_accelerate(mut self, accelerate: bool) -> Self {
        self.use_accelerate = accelerate;
        self
    }

    /// use dual stack config for S3
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn use_dual_stack(mut self, dual_stack: bool) -> Self {
        self.use_dual_stack = dual_stack;
        self
    }

    /// Set predefined url for endpoint configuration
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn endpoint(mut self, endpoint: Uri) -> Self {
        self.endpoint = Some(endpoint);
        self
    }

    /// Set addressing style for [EndpointConfig]
    #[must_use = "EndpointConfig follows a builder pattern"]
    pub fn addressing_style(mut self, addressing_style: AddressingStyle) -> Self {
        self.addressing_style = addressing_style;
        self
    }

    /// get the region from the [EndpointConfig]
    pub fn get_region(&self) -> &str {
        &self.region
    }

    /// get the fips config from the [EndpointConfig]
    pub fn get_fips(&self) -> bool {
        self.use_fips
    }

    /// get the transfer acceleration config from the [EndpointConfig]
    pub fn get_accelerate(&self) -> bool {
        self.use_accelerate
    }
    /// get the dual stack config from the [EndpointConfig]
    pub fn get_dual_stack(&self) -> bool {
        self.use_dual_stack
    }

    /// get the endpoint uri if provided from [EndpointConfig]
    pub fn get_endpoint(&self) -> Option<Uri> {
        self.endpoint.clone()
    }

    /// get the addressing style from the [EndpointConfig]
    pub fn get_addressing_style(&self) -> AddressingStyle {
        self.addressing_style
    }

    /// resolve the endpoint from the [EndpointConfig] and the bucket name
    pub fn resolve_for_bucket(&self, bucket: &str) -> Result<Uri, EndpointError> {
        let allocator = Allocator::default();
        let mut endpoint_request_context: RequestContext = RequestContext::new(&allocator).unwrap();
        let endpoint_rule_engine = RuleEngine::new(&allocator).unwrap();

        endpoint_request_context
            .add_string(&allocator, "Region", &self.region)
            .unwrap();
        endpoint_request_context
            .add_string(&allocator, "Bucket", bucket)
            .unwrap();
        if let Some(endpoint_uri) = &self.endpoint {
            endpoint_request_context
                .add_string(&allocator, "Endpoint", endpoint_uri.as_os_str())
                .unwrap()
        };
        if self.use_fips {
            endpoint_request_context
                .add_boolean(&allocator, "UseFIPS", true)
                .unwrap()
        };
        if self.use_dual_stack {
            endpoint_request_context
                .add_boolean(&allocator, "UseDualStack", true)
                .unwrap()
        };
        if self.use_accelerate {
            endpoint_request_context
                .add_boolean(&allocator, "Accelerate", true)
                .unwrap()
        };
        if self.addressing_style == AddressingStyle::Path {
            endpoint_request_context
                .add_boolean(&allocator, "ForcePathStyle", true)
                .unwrap()
        };

        let resolved_endpoint = endpoint_rule_engine
            .resolve(endpoint_request_context)
            .map_err(EndpointError::UnresolvedEndpoint)?;
        let endpoint_uri = resolved_endpoint.get_url();
        Uri::new_from_str(&allocator, endpoint_uri)
            .map_err(|e| EndpointError::InvalidUri(InvalidUriError::CouldNotParse(e)))
    }
}

#[derive(Debug, Error)]
pub enum EndpointError {
    #[error("invalid URI")]
    InvalidUri(#[from] InvalidUriError),
    #[error("endpoint could not be resolved")]
    UnresolvedEndpoint(#[from] ResolverError),
}

#[derive(Debug, Error)]
pub enum InvalidUriError {
    #[error("URI could not be parsed")]
    CouldNotParse(#[from] mountpoint_s3_crt::common::error::Error),
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_virtual_addr() {
        let endpoint_config = EndpointConfig::new("eu-west-1").addressing_style(AddressingStyle::Automatic);
        let endpoint_uri = endpoint_config.resolve_for_bucket("doc-example-bucket").unwrap();
        assert_eq!(
            "https://doc-example-bucket.s3.eu-west-1.amazonaws.com",
            endpoint_uri.as_os_str()
        );
    }

    #[test]
    fn test_path_addr_endpoint_arg() {
        let endpoint_config = EndpointConfig::new("eu-west-1")
            .addressing_style(AddressingStyle::Path)
            .endpoint(Uri::new_from_str(&Allocator::default(), "https://example.com").unwrap());
        let endpoint_uri = endpoint_config.resolve_for_bucket("doc-example-bucket").unwrap();
        assert_eq!("https://example.com/doc-example-bucket", endpoint_uri.as_os_str());
    }

    #[test]
    fn test_fips_dual_stack() {
        let endpoint_config = EndpointConfig::new("eu-west-1").use_fips(true).use_dual_stack(true);
        let endpoint_uri = endpoint_config.resolve_for_bucket("doc-example-bucket").unwrap();
        assert_eq!(
            "https://doc-example-bucket.s3-fips.dualstack.eu-west-1.amazonaws.com",
            endpoint_uri.as_os_str()
        );
    }

    #[test]
    fn test_dual_stack_accelerate() {
        let endpoint_config = EndpointConfig::new("eu-west-1")
            .use_accelerate(true)
            .use_dual_stack(true);
        let endpoint_uri = endpoint_config.resolve_for_bucket("doc-example-bucket").unwrap();
        assert_eq!(
            "https://doc-example-bucket.s3-accelerate.dualstack.amazonaws.com",
            endpoint_uri.as_os_str()
        );
    }

    #[test]
    fn test_dual_stack_path_addr() {
        let endpoint_config = EndpointConfig::new("eu-west-1")
            .use_dual_stack(true)
            .addressing_style(AddressingStyle::Path);
        let endpoint_uri = endpoint_config.resolve_for_bucket("doc-example-bucket").unwrap();
        assert_eq!(
            "https://s3.dualstack.eu-west-1.amazonaws.com/doc-example-bucket",
            endpoint_uri.as_os_str()
        );
    }

    #[test]
    fn test_arn_as_bucket() {
        let endpoint_config = EndpointConfig::new("eu-west-1");
        let endpoint_uri = endpoint_config
            .resolve_for_bucket("arn:aws:s3::accountID:accesspoint/s3-bucket-test.mrap")
            .unwrap();
        assert_eq!(
            "https://s3-bucket-test.mrap.accesspoint.s3-global.amazonaws.com",
            endpoint_uri.as_os_str()
        );
    }

    #[test]
    fn test_arn_override_region() {
        let endpoint_config = EndpointConfig::new("cn-north-1");
        // Also a test for China region
        let endpoint_uri = endpoint_config
            .resolve_for_bucket("arn:aws-cn:s3:cn-north-2:555555555555:accesspoint/china-region-ap")
            .unwrap();
        assert_eq!(
            "https://china-region-ap-555555555555.s3-accesspoint.cn-north-2.amazonaws.com.cn",
            endpoint_uri.as_os_str()
        );
    }

    #[test]
    fn test_outpost() {
        let endpoint_config = EndpointConfig::new("us-gov-west-1");
        let endpoint_uri = endpoint_config
            .resolve_for_bucket("mountpoint-o-o000s3-bucket-test0000000000000000000000000--op-s3")
            .unwrap();
        assert_eq!(
            "https://mountpoint-o-o000s3-bucket-test0000000000000000000000000--op-s3.op-000s3-bucket-test.s3-outposts.us-gov-west-1.amazonaws.com",
            endpoint_uri.as_os_str()
        );
    }
}

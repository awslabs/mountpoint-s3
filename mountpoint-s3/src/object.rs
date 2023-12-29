use mountpoint_s3_client::types::ETag;

use crate::sync::Arc;

/// Identifier for a specific version of an S3 object.
/// Formed by the object key and etag. Holds its components in an [Arc], so it can be cheaply cloned.
#[derive(Clone, Debug, Hash, PartialEq, Eq)]
pub struct ObjectId {
    inner: Arc<InnerObjectId>,
}

#[derive(Debug, Hash, PartialEq, Eq)]
struct InnerObjectId {
    key: String,
    etag: ETag,
}

impl ObjectId {
    pub fn new(key: String, etag: ETag) -> Self {
        Self {
            inner: Arc::new(InnerObjectId { key, etag }),
        }
    }

    pub fn key(&self) -> &str {
        &self.inner.key
    }

    pub fn etag(&self) -> &ETag {
        &self.inner.etag
    }
}

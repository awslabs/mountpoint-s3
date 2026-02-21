use std::fmt::Debug;

use mountpoint_s3_client::types::ETag;

use crate::sync::Arc;

/// Identifier for a specific version of an S3 object.
/// Formed by the object key and etag. Holds its components in an [Arc], so it can be cheaply cloned.
#[derive(Clone, Hash, PartialEq, Eq)]
pub struct ObjectId {
    inner: Arc<InnerObjectId>,
}

impl Debug for ObjectId {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("ObjectId")
            .field("key", &self.inner.key)
            .field("etag", &self.inner.etag)
            .finish()
    }
}

#[derive(Debug, Hash, PartialEq, Eq)]
struct InnerObjectId {
    key: String,
    version: Option<String>,
    etag: ETag,
}

impl ObjectId {
    pub fn new(key: String, etag: ETag) -> Self {
        Self {
            inner: Arc::new(InnerObjectId {
                key,
                version: None,
                etag,
            }),
        }
    }

    pub fn new_with_version(key: String, version: Option<String>, etag: ETag) -> Self {
        Self {
            inner: Arc::new(InnerObjectId { key, version, etag }),
        }
    }

    pub fn key(&self) -> &str {
        &self.inner.key
    }

    pub fn version(&self) -> Option<&str> {
        self.inner.version.as_deref()
    }

    pub fn etag(&self) -> &ETag {
        &self.inner.etag
    }
}

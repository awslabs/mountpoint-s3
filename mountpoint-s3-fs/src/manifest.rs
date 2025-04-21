use thiserror::Error;

mod builder;
mod db;

pub use builder::create_db;
pub use db::DbEntry;

#[derive(Debug, Error)]
pub enum ManifestError {
    #[error("database error")]
    DbError(#[from] rusqlite::Error),
}

#[derive(Debug, Error, PartialEq)]
pub enum ManifestWarning {
    #[error("key is shadowed and will be unavailable: {0}")]
    ShadowedKey(String),
    #[error("key has no etag or size and will be unavailable: {0}")]
    NoEtagOrSize(String),
    #[error("key is invalid and will be unavailable: {0}")]
    InvalidKey(String),
}

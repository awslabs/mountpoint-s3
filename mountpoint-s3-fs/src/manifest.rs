use thiserror::Error;

mod builder;
mod db;

pub use builder::create_db;
pub use db::DbEntry;

#[derive(Debug, Error, PartialEq)]
pub enum ManifestError {
    #[error("database error")]
    DbError(#[from] rusqlite::Error),
    #[error("key has no etag or size and will be unavailable: {0}")]
    NoEtagOrSize(String),
    #[error("key is invalid and will be unavailable: {0}")]
    InvalidKey(String),
}

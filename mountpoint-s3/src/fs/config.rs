use std::time::Duration;

use nix::unistd::{getgid, getuid};

use crate::mem_limiter::MINIMUM_MEM_LIMIT;
use crate::s3::S3Personality;
use crate::superblock::WriteMode;

use super::{ServerSideEncryption, TimeToLive};

#[derive(Debug)]
pub struct S3FilesystemConfig {
    /// Kernel cache config
    pub cache_config: CacheConfig,
    /// Readdir page size
    pub readdir_size: usize,
    /// User id
    pub uid: u32,
    /// Group id
    pub gid: u32,
    /// Directory permissions
    pub dir_mode: u16,
    /// File permissions
    pub file_mode: u16,
    /// Allow delete
    pub allow_delete: bool,
    /// Allow overwrite
    pub allow_overwrite: bool,
    /// Enable incremental uploads
    pub incremental_upload: bool,
    /// Storage class to be used for new object uploads
    pub storage_class: Option<String>,
    /// S3 personality (for different S3 semantics)
    pub s3_personality: S3Personality,
    /// Server side encryption configuration to be used when creating new S3 object
    pub server_side_encryption: ServerSideEncryption,
    /// Use additional checksums for uploads
    pub use_upload_checksums: bool,
    /// Memory limit
    pub mem_limit: u64,
}

impl Default for S3FilesystemConfig {
    fn default() -> Self {
        let uid = getuid().into();
        let gid = getgid().into();

        Self {
            cache_config: Default::default(),
            readdir_size: 100,
            uid,
            gid,
            dir_mode: 0o755,
            file_mode: 0o644,
            allow_delete: false,
            allow_overwrite: false,
            incremental_upload: false,
            storage_class: None,
            s3_personality: S3Personality::default(),
            server_side_encryption: Default::default(),
            use_upload_checksums: true,
            mem_limit: MINIMUM_MEM_LIMIT,
        }
    }
}

impl S3FilesystemConfig {
    pub fn write_mode(&self) -> WriteMode {
        WriteMode {
            allow_overwrite: self.allow_overwrite,
            incremental_upload: self.incremental_upload,
        }
    }
}

#[derive(Debug, Clone)]
pub struct CacheConfig {
    /// Should the file system serve lookup requests including open from cached entries,
    /// or instead check S3 even when a valid cached entry may be available?
    ///
    /// Even when disabled, some operations such as `getattr` are allowed to be served from cache
    /// with a short TTL since Linux filesystems behave badly when the TTL is zero.
    /// For example, results from `readdir` would expire immediately, and the kernel would
    /// immediately `getattr` every entry returned from `readdir`.
    pub serve_lookup_from_cache: bool,
    /// How long the kernel will cache metadata for files
    pub file_ttl: Duration,
    /// How long the kernel will cache metadata for directories
    pub dir_ttl: Duration,
    /// How long the kernel will cache negative entries
    pub negative_cache_ttl: Duration,
    /// Maximum number of negative entries to cache.
    pub negative_cache_size: usize,
}

impl Default for CacheConfig {
    fn default() -> Self {
        // We want to do as little caching as possible by default,
        // but Linux filesystems behave badly when the TTL is exactly zero.
        // For example, results from `readdir` will expire immediately, and so
        // the kernel will immediately re-lookup every entry returned from `readdir`. So we apply
        // small non-zero TTLs. The goal is to be small enough that the impact on consistency is
        // minimal, but large enough that a single cache miss doesn't cause a cascading effect where
        // every other cache entry expires by the time that cache miss is serviced. We also apply a
        // longer TTL for directories, which are both less likely to change on the S3 side and
        // checked more often (for directory permissions checks).
        let file_ttl = Duration::from_millis(100);
        let dir_ttl = Duration::from_millis(1000);

        // We want the negative cache to be effective but need to limit its memory usage. This value
        // results in a maximum memory usage of ~20MB (assuming average file name length of 37 bytes)
        // and should be large enough for many workloads. The metrics in
        // `metadata_cache.negative_cache`, in particular `entries_evicted_before_expiry`, can be
        // monitored to verify if this limit needs reviewing.
        let negative_cache_size = 100_000;

        Self {
            serve_lookup_from_cache: false,
            file_ttl,
            dir_ttl,
            negative_cache_ttl: file_ttl,
            negative_cache_size,
        }
    }
}

impl CacheConfig {
    /// Construct cache configuration settings from metadata TTL.
    pub fn new(metadata_ttl: TimeToLive) -> Self {
        match metadata_ttl {
            TimeToLive::Minimal => Default::default(),
            TimeToLive::Indefinite => Self {
                serve_lookup_from_cache: true,
                file_ttl: TimeToLive::INDEFINITE_DURATION,
                dir_ttl: TimeToLive::INDEFINITE_DURATION,
                negative_cache_ttl: TimeToLive::INDEFINITE_DURATION,
                ..Default::default()
            },
            TimeToLive::Duration(ttl) => Self {
                serve_lookup_from_cache: true,
                file_ttl: ttl,
                dir_ttl: ttl,
                negative_cache_ttl: ttl,
                ..Default::default()
            },
        }
    }

    pub fn with_negative_cache_ttl(self, negative_cache_ttl: TimeToLive) -> Self {
        match negative_cache_ttl {
            TimeToLive::Minimal => Self {
                negative_cache_ttl: Self::default().negative_cache_ttl,
                ..self
            },
            TimeToLive::Indefinite => Self {
                negative_cache_ttl: TimeToLive::INDEFINITE_DURATION,
                ..self
            },
            TimeToLive::Duration(ttl) => Self {
                negative_cache_ttl: ttl,
                ..self
            },
        }
    }
}

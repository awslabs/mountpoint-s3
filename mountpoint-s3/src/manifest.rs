use std::sync::Arc;

#[derive(Debug)]
pub enum ManifestEntry {
    File {
        full_key: String,
        etag: String,
        size: usize,
    },
    Directory {
        full_key: String, // let's assume it always ends with '/'
        total_entries: usize,
    },
}

impl ManifestEntry {
    pub fn key(&self) -> &str {
        match self {
            ManifestEntry::Directory { full_key, .. } => full_key.as_str(),
            ManifestEntry::File { full_key, .. } => full_key.as_str(),
        }
    }
}

pub fn dummy_manifest() -> Arc<Vec<ManifestEntry>> {
    // contract:
    // - all entries should start with '/' (may be simplified? but keeping for now)
    // - all directory entries [apart from the root] should also end with '/'
    // - file entries never end with '/'
    // - directories are followed by files and subdirectories contained in them (matches lexicographical order?)
    // - directory entries have a counter of total (calculated recursively) number of entries contained in them
    Arc::new(vec![
        ManifestEntry::Directory {
            full_key: "/".to_owned(),
            total_entries: 7,
        },
        ManifestEntry::Directory {
            full_key: "/1.9.1/".to_owned(),
            total_entries: 6,
        },
        ManifestEntry::Directory {
            full_key: "/1.9.1/arm64/".to_owned(),
            total_entries: 2,
        },
        ManifestEntry::File {
            full_key: "/1.9.1/arm64/mount-s3-1.9.1-arm64.rpm".to_owned(),
            etag: "\"f7183d9e02960286692ea6521665aa89\"".to_owned(),
            size: 11844684,
        },
        ManifestEntry::File {
            full_key: "/1.9.1/checksum-1.9.1".to_owned(),
            etag: "\"f423fc83d1fda1fdd2887c7e2122ad05\"".to_owned(),
            size: 10,
        },
        ManifestEntry::Directory {
            full_key: "/1.9.1/x86_64/".to_owned(),
            total_entries: 2,
        },
        ManifestEntry::File {
            full_key: "/1.9.1/x86_64/mount-s3-1.9.1-x86_64.deb".to_owned(),
            etag: "\"e4930b1bfe7e10de29c863d1b69f444e\"".to_owned(),
            size: 10944866,
        },
    ])
}

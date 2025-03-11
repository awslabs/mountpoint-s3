use std::sync::Arc;

use tracing::{error, trace};

use crate::superblock::{Inode, InodeError, InodeKind};

/// An entry returned by manifest_lookup() and ManifestIter::next()
#[derive(Debug, Clone)]
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

/// Manifest of all available objects in the bucket
#[derive(Debug, Clone)]
pub struct Manifest {
    inner: Arc<Vec<ManifestEntry>>,
}

impl Manifest {
    pub fn new() -> Self {
        Self {
            inner: dummy_manifest(),
        }
    }

    /// Lookup an entry in the manifest, the result may be a file or a directory
    pub fn manifest_lookup(
        &self,
        parent: Inode,
        parent_full_path: String,
        name: &str,
    ) -> Result<ManifestEntry, InodeError> {
        trace!("using manifest to lookup {} in {}", name, parent_full_path);

        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent.err()));
        }

        let mut full_path = parent_full_path;
        full_path.push_str(name);

        let mut full_path_suffixed = full_path.clone();
        full_path_suffixed.push('/');

        // this should be a bin search through a file stored on disk
        fn search_manifest_entry<'a>(manifest: &'a [ManifestEntry], full_path: &str) -> Option<&'a ManifestEntry> {
            trace!("searching for {}", full_path);
            manifest
                .binary_search_by(|manifest_entry| manifest_entry.key().cmp(full_path))
                .map_or(None, |index| Some(&manifest[index]))
        }

        // search for file entry
        let mut manifest_entry = search_manifest_entry(&self.inner, &full_path);

        // search for dir entry
        if manifest_entry.is_none() {
            manifest_entry = search_manifest_entry(&self.inner, &full_path_suffixed);
        }

        // return an inode or error
        match manifest_entry {
            Some(manifest_entry) => Ok(manifest_entry.clone()),
            None => Err(InodeError::FileDoesNotExist(name.to_owned(), parent.err())),
        }
    }

    /// Create an iterator over directory's direct children
    pub fn iter(&self, bucket: &str, directory_full_path: &str) -> Result<ManifestIter, InodeError> {
        ManifestIter::new(self.clone(), bucket, directory_full_path)
    }
}

#[derive(Debug)]
pub struct ManifestIter {
    manifest: Manifest,
    bucket: String,
    idx: usize,
    end_idx: usize,
}

impl ManifestIter {
    /// Locate the index of the directory in the manifest and create an iterator
    fn new(manifest: Manifest, bucket: &str, full_path: &str) -> Result<Self, InodeError> {
        let full_path = full_path.to_owned();
        trace!("searching for an entry in manifest: {}", full_path);
        let idx = manifest
            .inner
            .binary_search_by(|manifest_entry| manifest_entry.key().cmp(&full_path))
            .inspect_err(|_| error!("entry not found in the manifest: {}", full_path))
            .map_err(|_| InodeError::InodeDoesNotExist(0))?; // TODO: add InodeError::BadManifest
        trace!("found an entry in manifest: {}", full_path);
        let end_idx = match manifest.inner[idx] {
            ManifestEntry::Directory { total_entries, .. } => Ok(idx + total_entries),
            _ => {
                error!("manifest entry is not a directory: {}", full_path);
                Err(InodeError::InodeDoesNotExist(0)) // TODO: add InodeError::BadManifest
            }
        }?;
        trace!("initializing readdir iter with indices: {}, {}", idx + 1, end_idx);

        Ok(Self {
            manifest,
            bucket: bucket.to_owned(),
            idx: idx + 1, // skip the directory entry itself
            end_idx,
        })
    }

    /// Iterate over the manifest entries, skipping subdirectories
    pub fn next(&mut self) -> Result<Option<ManifestEntry>, InodeError> {
        if self.idx >= self.end_idx {
            trace!("readdir iter exhausted: {}, {}", self.idx, self.end_idx);
            return Ok(None);
        }

        match &self.manifest.inner[self.idx] {
            entry @ ManifestEntry::File { full_key, .. } => {
                trace!("found a file entry in the manifest: {}", full_key);
                self.idx = self.idx + 1;
                Ok(Some(entry.clone()))
            }
            entry @ ManifestEntry::Directory {
                full_key,
                total_entries,
            } => {
                trace!(
                    "found a directory entry in the manifest: {}, {}",
                    full_key,
                    total_entries
                );
                self.idx = self.idx + total_entries;
                Ok(Some(entry.clone()))
            }
        }
    }
}

pub fn dummy_manifest() -> Arc<Vec<ManifestEntry>> {
    // contract:
    // - all directory entries [apart from the root] should end with '/'
    // - file entries never end with '/'
    // - directories are followed by files and subdirectories contained in them (matches lexicographical order?)
    // - directory entries have a counter of total (calculated recursively) number of entries contained in them
    Arc::new(vec![
        ManifestEntry::Directory {
            full_key: "".to_owned(),
            total_entries: 7,
        },
        ManifestEntry::Directory {
            full_key: "1.9.1/".to_owned(),
            total_entries: 6,
        },
        ManifestEntry::Directory {
            full_key: "1.9.1/arm64/".to_owned(),
            total_entries: 2,
        },
        ManifestEntry::File {
            full_key: "1.9.1/arm64/mount-s3-1.9.1-arm64.rpm".to_owned(),
            etag: "\"f7183d9e02960286692ea6521665aa89\"".to_owned(),
            size: 11844684,
        },
        ManifestEntry::File {
            full_key: "1.9.1/checksum-1.9.1".to_owned(),
            etag: "\"f423fc83d1fda1fdd2887c7e2122ad05\"".to_owned(),
            size: 10,
        },
        ManifestEntry::Directory {
            full_key: "1.9.1/x86_64/".to_owned(),
            total_entries: 2,
        },
        ManifestEntry::File {
            full_key: "1.9.1/x86_64/mount-s3-1.9.1-x86_64.deb".to_owned(),
            etag: "\"e4930b1bfe7e10de29c863d1b69f444e\"".to_owned(),
            size: 10944866,
        },
    ])
}

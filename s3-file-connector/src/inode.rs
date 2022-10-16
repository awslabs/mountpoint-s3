//! [Inode] management
//!
//! # Superblock
//!
//! The [Superblock] is the entry point for a file system. It manages a set of [Inode]s and their
//! caches. The [Superblock] is a partial view of the actual file system, which is stored remotely
//! in an ObjectClient, and the [Superblock] coordinates sending requests to the ObjectClient to (a)
//! discover [Inode]s it doesn't already know about and (b) refresh the stats of [Inode]s when they
//! are expired.
//!
//! # [Inode] management and assumptions
//! We allocate a new [Inode] the first time we find out about a new file/directory. Each [Inode]
//! has an [InodeNo], and knows its parent [InodeNo], its own name, and its kind (currently only
//! file or directory). We assume that [Inode]s never change their kind; if this happens, we
//! reallocate the inode.
//!
//! In addition to this "permanent" state, an [Inode] also has some cached state called [InodeStat].
//! Cached state is subject to an expiry time, and must be refreshed before use if it has expired.
//! Some cached state is dependent on the inode kind; that state is hidden behind a [InodeStatKind]
//! enum.

use std::collections::{HashMap, VecDeque};
use std::ffi::{OsStr, OsString};
use std::os::unix::prelude::OsStrExt;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex, RwLock};
use std::time::Instant;

use fuser::FileType;
use s3_client::ObjectClient;
use thiserror::Error;
use tracing::{trace, warn};

pub type InodeNo = u64;

pub const ROOT_INODE_NO: InodeNo = 1;

/// Superblock is the root object of the file system
#[derive(Debug)]
pub struct Superblock {
    inner: Arc<SuperblockInner>,
}

#[derive(Debug)]
struct SuperblockInner {
    bucket: String,
    inodes: RwLock<HashMap<InodeNo, Inode>>,
    next_ino: AtomicU64,
}

impl Superblock {
    /// Create a new Superblock that targets the given bucket/prefix
    pub fn new(bucket: String, prefix: OsString) -> Self {
        assert!(prefix.is_empty() || prefix.to_str().unwrap().ends_with('/'));
        let stripped_prefix = if prefix.is_empty() {
            prefix
        } else {
            let s = prefix.to_str().unwrap();
            OsString::from(&s[..s.len() - 1])
        };

        let root = Inode {
            ino: ROOT_INODE_NO,
            parent: ROOT_INODE_NO,
            // We stash the prefix in the root inode's name so that path resolution "just works"
            // with prefixes
            name: stripped_prefix,
            stat_cache: RwLock::new(InodeStat {
                kind: InodeStatKind::Directory {},
                size: 0,
            }),
            stat_cache_expiry: Instant::now(),
            data: InodeData::Directory {
                children: Default::default(),
            },
        };

        let mut inodes = HashMap::new();
        inodes.insert(ROOT_INODE_NO, root);

        let inner = SuperblockInner {
            bucket,
            inodes: RwLock::new(inodes),
            next_ino: AtomicU64::new(2),
        };
        Self { inner: Arc::new(inner) }
    }

    /// Lookup an inode in the parent directory with the given name
    pub async fn lookup<OC: ObjectClient>(
        &self,
        client: &OC,
        parent: InodeNo,
        name: &OsStr,
    ) -> Result<Lookup, InodeError> {
        trace!(?parent, ?name, "lookup");

        // This should be impossible, but just to be safe, explicitly reject lookups to files that
        // end with '/', since they could be shadowed by directories.
        if name.to_str().unwrap().ends_with('/') {
            return Err(InodeError::InvalidFileName(name.into()));
        }

        // TODO use caches. if we already know about this name, we just need to revalidate the stat
        // cache and then read it.

        let mut full_path = {
            let inodes = self.inner.inodes.read().unwrap();
            let parent_inode = self.inner.get(&*inodes, parent)?;
            self.inner.full_key_for(&*inodes, parent_inode, true)?
        };
        assert!(full_path.is_empty() || full_path.to_str().unwrap().ends_with('/'));
        full_path.push(&name);

        // TODO do we need to do HeadObject here too?
        let result = client
            .list_objects(&self.inner.bucket, None, "/", 1, full_path.to_str().unwrap())
            .await
            .map_err(|e| InodeError::ClientError(e.into()))?;

        let (kind, stat) = if result
            .common_prefixes
            .get(0)
            .map(|prefix| &prefix[..prefix.len() - 1] == full_path.to_str().unwrap())
            .unwrap_or(false)
        {
            (
                InodeKind::Directory,
                InodeStat {
                    kind: InodeStatKind::Directory {},
                    size: 0,
                },
            )
        } else if result
            .objects
            .get(0)
            .map(|object| object.key == full_path.to_str().unwrap())
            .unwrap_or(false)
        {
            (
                InodeKind::File,
                InodeStat {
                    kind: InodeStatKind::File {},
                    size: result.objects[0].size as usize,
                },
            )
        } else {
            return Err(InodeError::FileDoesNotExist);
        };

        let ino = self
            .inner
            .update_or_insert(parent, name, kind, stat.clone(), Instant::now())?;

        Ok(Lookup {
            ino,
            stat,
            full_key: full_path,
        })
    }

    /// Retrieve the attributes for an inode
    pub async fn getattr<OC: ObjectClient>(&self, _client: &OC, ino: InodeNo) -> Result<Lookup, InodeError> {
        let inodes = self.inner.inodes.read().unwrap();
        let inode = self.inner.get(&*inodes, ino)?;
        let full_key = self
            .inner
            .full_key_for(&*inodes, inode, inode.kind() == InodeKind::Directory)?;
        let stat = inode.stat_cache.read().unwrap();
        // TODO revalidate if expired
        Ok(Lookup {
            ino,
            stat: stat.clone(),
            full_key,
        })
    }

    /// Start a readdir stream for the given directory inode
    ///
    /// Doesn't currently do any IO, so doesn't need to be async, but reserving it for future use.
    pub async fn readdir<OC: ObjectClient>(
        &self,
        _client: &OC,
        dir: InodeNo,
        page_size: usize,
    ) -> Result<ReaddirHandle, InodeError> {
        trace!(dir_ino=?dir, "readdir");

        let (parent_ino, full_path) = {
            let inodes = self.inner.inodes.read().unwrap();
            let dir_inode = self.inner.get(&*inodes, dir)?;
            if dir_inode.kind() != InodeKind::Directory {
                return Err(InodeError::NotADirectory(dir));
            }
            (dir_inode.parent, self.inner.full_key_for(&*inodes, dir_inode, true)?)
        };
        assert!(full_path.is_empty() || full_path.to_str().unwrap().ends_with('/'));

        Ok(ReaddirHandle {
            inner: self.inner.clone(),
            dir_ino: dir,
            parent_ino,
            full_path: full_path.to_str().unwrap().to_string(),
            page_size,
            results: Default::default(),
            next_continuation_token: Mutex::new(ReaddirStreamState::NotStarted),
        })
    }
}

impl SuperblockInner {
    fn get<'a>(&'a self, inodes: &'a HashMap<InodeNo, Inode>, ino: InodeNo) -> Result<&'a Inode, InodeError> {
        inodes.get(&ino).ok_or(InodeError::InodeDoesNotExist(ino))
    }

    fn update_or_insert(
        &self,
        parent: InodeNo,
        name: &OsStr,
        kind: InodeKind,
        stat: InodeStat,
        stat_ttl: Instant,
    ) -> Result<InodeNo, InodeError> {
        let mut ino = {
            let inodes = self.inodes.read().unwrap();
            let parent_inode = self.get(&inodes, parent)?;
            match &parent_inode.data {
                InodeData::File {} => return Err(InodeError::NotADirectory(parent)),
                InodeData::Directory { children } => {
                    let children = children.lock().unwrap();
                    if let Some(expected_ino) = children.get(name) {
                        if let Some(inode) = inodes.get(expected_ino) {
                            if inode.kind() == kind {
                                // TODO but the object itself might have changed. do we need to compare etags?
                                assert_eq!(inode.parent, parent);
                                assert_eq!(inode.name, name);
                                assert_eq!(inode.ino, *expected_ino);
                                Some(inode.ino)
                            } else {
                                // TODO decide what to do in this case
                                warn!(?parent, ?name, ino=?expected_ino, expected_kind=?kind, actual_kind=?inode.kind(), "inode changed kind, will recreate it");
                                None
                            }
                        } else {
                            warn!(
                                ?parent,
                                ?name,
                                ?expected_ino,
                                "inode doesn't exist. will recreate it, but something is out of sync"
                            );
                            None
                        }
                    } else {
                        None
                    }
                }
            }
        };

        if ino.is_none() {
            let mut inodes = self.inodes.write().unwrap();

            let next_ino = self.next_ino.fetch_add(1, Ordering::SeqCst);

            trace!(?parent, ?name, ?kind, new_ino=?next_ino, "creating new inode");

            let data = match kind {
                InodeKind::Directory => InodeData::Directory {
                    children: Default::default(),
                },
                InodeKind::File => InodeData::File {},
            };

            let inode = Inode {
                ino: next_ino,
                parent,
                name: name.to_os_string(),
                stat_cache: RwLock::new(stat),
                stat_cache_expiry: stat_ttl,
                data,
            };

            let previous = inodes.insert(next_ino, inode);
            assert!(previous.is_none());

            let parent_inode = self.get(&inodes, parent)?;
            match &parent_inode.data {
                InodeData::File {} => unreachable!("inodes never change kind"),
                InodeData::Directory { children } => {
                    children.lock().unwrap().insert(name.to_os_string(), next_ino);
                }
            }

            ino = Some(next_ino);
        } else {
            trace!(?parent, ?name, ?kind, ?ino, "reusing inode");
        }

        Ok(ino.unwrap())
    }

    fn full_key_for<'a>(
        &'a self,
        inodes: &'a HashMap<InodeNo, Inode>,
        mut inode: &'a Inode,
        dir: bool,
    ) -> Result<OsString, InodeError> {
        let mut path = vec![];
        loop {
            if !inode.name.is_empty() {
                path.push(inode.name.as_os_str());
            }
            if inode.ino == ROOT_INODE_NO {
                debug_assert_eq!(inode.ino, inode.parent);
                path.reverse();
                if dir {
                    path.push(OsStr::from_bytes("".as_bytes()));
                }
                return Ok(path.join(OsStr::from_bytes("/".as_bytes())));
            }
            inode = self.get(inodes, inode.parent)?;
        }
    }
}

/// Result of a call to [Superblock::lookup] or [Superblock::getattr]
#[derive(Debug, Clone)]
pub struct Lookup {
    pub ino: InodeNo,
    pub stat: InodeStat,
    pub full_key: OsString,
}

/// Handle for an inflight directory listing
#[derive(Debug)]
pub struct ReaddirHandle {
    inner: Arc<SuperblockInner>,
    dir_ino: InodeNo,
    parent_ino: InodeNo,
    full_path: String,
    page_size: usize,
    results: RwLock<VecDeque<DirEntryPlus>>,
    next_continuation_token: Mutex<ReaddirStreamState>,
}

#[derive(Debug, PartialEq, Eq)]
enum ReaddirStreamState {
    NotStarted,
    /// Continuation token for the next call
    Continued(String),
    Finished,
}

impl ReaddirStreamState {
    fn take(&mut self) -> Option<String> {
        let old_state = std::mem::replace(self, ReaddirStreamState::Finished);
        if let ReaddirStreamState::Continued(s) = old_state {
            Some(s)
        } else {
            None
        }
    }
}

impl ReaddirHandle {
    pub async fn next<OC: ObjectClient>(&self, client: &OC) -> Result<Option<DirEntryPlus>, InodeError> {
        if self.results.read().unwrap().is_empty() {
            let continuation_token = {
                let mut next_token = self.next_continuation_token.lock().unwrap();
                if *next_token == ReaddirStreamState::Finished {
                    trace!(self=?self as *const _, "readdir finished");
                    return Ok(None);
                }
                next_token.take()
            };

            trace!(self=?self as *const _, ?continuation_token, "continuing readdir");

            let result = client
                .list_objects(
                    self.inner.bucket.as_str(),
                    continuation_token.as_deref(),
                    "/",
                    self.page_size,
                    self.full_path.as_str(),
                )
                .await
                .map_err(|e| InodeError::ClientError(anyhow::Error::new(e)))?;

            *self.next_continuation_token.lock().unwrap() = match result.next_continuation_token {
                Some(token) => ReaddirStreamState::Continued(token),
                None => ReaddirStreamState::Finished,
            };

            let prefixes = result.common_prefixes.into_iter().map(|prefix| {
                let prefix_trimmed = &prefix[self.full_path.len()..prefix.len() - 1];
                let stat = InodeStat {
                    kind: InodeStatKind::Directory {},
                    size: 0,
                };
                let stat_clone = stat.clone();

                self.inner
                    .update_or_insert(
                        self.dir_ino,
                        &OsString::from(prefix_trimmed),
                        InodeKind::Directory,
                        stat,
                        Instant::now(),
                    )
                    .map(|ino| DirEntryPlus {
                        name: OsString::from(prefix_trimmed),
                        ino,
                        stat: stat_clone,
                    })
            });
            let objects = result
                .objects
                .into_iter()
                // Hide keys that end with '/', since they can be confused with directories
                .filter(|object| !object.key.ends_with('/'))
                .map(|object| {
                    let name = &object.key[self.full_path.len()..];
                    let stat = InodeStat {
                        kind: InodeStatKind::File {},
                        size: object.size as usize,
                    };
                    let stat_clone = stat.clone();

                    self.inner
                        .update_or_insert(
                            self.dir_ino,
                            &OsString::from(name),
                            InodeKind::File,
                            stat,
                            Instant::now(),
                        )
                        .map(|ino| DirEntryPlus {
                            name: OsString::from(name),
                            ino,
                            stat: stat_clone,
                        })
                });

            // TODO would be nice to do this as a merge sort but the Result makes it messy
            match prefixes.chain(objects).collect::<Result<Vec<_>, _>>() {
                Ok(mut new_results) => {
                    new_results.sort_by(|left, right| left.name.cmp(&right.name));
                    self.results.write().unwrap().extend(new_results);
                }
                Err(e) => return Err(e),
            }
        }

        Ok(self.results.write().unwrap().pop_front())
    }

    /// Re-add an entry to the front of the queue if the consumer wasn't able to use it
    pub fn readd(&self, entry: DirEntryPlus) {
        self.results.write().unwrap().push_front(entry);
    }

    pub fn parent(&self) -> InodeNo {
        self.parent_ino
    }

    #[cfg(test)]
    async fn collect<OC: ObjectClient>(&self, client: &OC) -> Result<Vec<DirEntryPlus>, InodeError> {
        let mut result = vec![];
        while let Some(entry) = self.next(client).await? {
            result.push(entry);
        }
        Ok(result)
    }
}

#[derive(Debug)]
pub struct Inode {
    ino: InodeNo,
    parent: InodeNo,
    name: OsString,
    stat_cache: RwLock<InodeStat>,
    #[allow(unused)]
    stat_cache_expiry: Instant,
    data: InodeData,
    // TODO dirty/new state?
}

impl Inode {
    #[allow(unused)]
    pub fn remember(&self) {
        todo!()
    }

    #[allow(unused)]
    pub fn forget(&self, _nlookup: usize) {
        todo!()
    }

    #[allow(unused)]
    pub fn is_valid(&self) -> bool {
        Instant::now() > self.stat_cache_expiry
    }

    pub fn kind(&self) -> InodeKind {
        match &self.data {
            InodeData::File {} => InodeKind::File,
            InodeData::Directory { children: _ } => InodeKind::Directory,
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum InodeKind {
    File,
    Directory,
}

/// Private per-inode data that differs by kind
#[derive(Debug)]
enum InodeData {
    File {},
    Directory {
        /// Mapping from child names to InodeNos
        children: Mutex<HashMap<OsString, InodeNo>>,
    },
}

/// Public inode stat data that can expire
#[derive(Debug, Clone)]
pub struct InodeStat {
    // common metadata: mtime, ctime, ...
    pub size: usize,

    /// Per-kind metadata
    pub kind: InodeStatKind,
}

/// Public inode stat data that can expire and differs by kind
#[derive(Debug, PartialEq, Eq, Clone)]
pub enum InodeStatKind {
    File {},
    Directory {},
}

impl InodeStatKind {
    pub fn is_dir(&self) -> bool {
        matches!(self, InodeStatKind::Directory {})
    }
}

impl From<&InodeStatKind> for FileType {
    fn from(kind: &InodeStatKind) -> Self {
        match kind {
            InodeStatKind::File {} => FileType::RegularFile,
            InodeStatKind::Directory {} => FileType::Directory,
        }
    }
}

#[derive(Debug, Error)]
pub enum InodeError {
    #[error("error from ObjectClient")]
    ClientError(#[source] anyhow::Error),
    #[error("file does not exist")]
    FileDoesNotExist,
    #[error("inode {0} does not exist")]
    InodeDoesNotExist(InodeNo),
    #[error("invalid file name {0:?}")]
    InvalidFileName(OsString),
    #[error("inode {0} is not a directory")]
    NotADirectory(InodeNo),
}

#[derive(Debug)]
pub struct DirEntryPlus {
    pub name: OsString,
    pub ino: InodeNo,
    pub stat: InodeStat,
}

#[cfg(test)]
mod tests {
    use s3_client::mock_client::{MockClient, MockClientConfig, MockObject};
    use test_case::test_case;

    use crate::fs::FUSE_ROOT_INODE;

    use super::*;

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_lookup(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let keys = &[
            format!("{}dir0/file0.txt", prefix),
            format!("{}dir0/sdir0/file0.txt", prefix),
            format!("{}dir0/sdir0/file1.txt", prefix),
            format!("{}dir0/sdir0/file2.txt", prefix),
            format!("{}dir0/sdir1/file0.txt", prefix),
            format!("{}dir0/sdir1/file1.txt", prefix),
            format!("{}dir1/sdir2/file0.txt", prefix),
            format!("{}dir1/sdir2/file1.txt", prefix),
            format!("{}dir1/sdir2/file2.txt", prefix),
            format!("{}dir1/sdir3/file0.txt", prefix),
            format!("{}dir1/sdir3/file1.txt", prefix),
        ];

        for key in keys {
            client.add_object(key, MockObject::constant(0xaa, 30));
        }

        let superblock = Superblock::new("test_bucket".to_string(), OsString::from(prefix));

        // Try it twice to test the inode reuse path too
        for _ in 0..2 {
            let dir0 = superblock
                .lookup(&client, FUSE_ROOT_INODE, &OsString::from("dir0"))
                .await
                .expect("should exist");
            assert_eq!(dir0.stat.kind, InodeStatKind::Directory {});
            assert_eq!(dir0.full_key, OsString::from(format!("{}dir0", prefix)));
            let dir1 = superblock
                .lookup(&client, FUSE_ROOT_INODE, &OsString::from("dir1"))
                .await
                .expect("should exist");
            assert_eq!(dir1.stat.kind, InodeStatKind::Directory {});
            assert_eq!(dir1.full_key, OsString::from(format!("{}dir1", prefix)));
            let sdir0 = superblock
                .lookup(&client, dir0.ino, &OsString::from("sdir0"))
                .await
                .expect("should exist");
            assert_eq!(sdir0.stat.kind, InodeStatKind::Directory {});
            assert_eq!(sdir0.full_key, OsString::from(format!("{}dir0/sdir0", prefix)));
            let sdir1 = superblock
                .lookup(&client, dir0.ino, &OsString::from("sdir1"))
                .await
                .expect("should exist");
            assert_eq!(sdir1.stat.kind, InodeStatKind::Directory {});
            assert_eq!(sdir1.full_key, OsString::from(format!("{}dir0/sdir1", prefix)));
            let sdir2 = superblock
                .lookup(&client, dir1.ino, &OsString::from("sdir2"))
                .await
                .expect("should exist");
            assert_eq!(sdir2.stat.kind, InodeStatKind::Directory {});
            assert_eq!(sdir2.full_key, OsString::from(format!("{}dir1/sdir2", prefix)));
            let sdir3 = superblock
                .lookup(&client, dir1.ino, &OsString::from("sdir3"))
                .await
                .expect("should exist");
            assert_eq!(sdir3.stat.kind, InodeStatKind::Directory {});
            assert_eq!(sdir3.full_key, OsString::from(format!("{}dir1/sdir3", prefix)));

            let file0 = superblock
                .lookup(&client, dir0.ino, &OsString::from("file0.txt"))
                .await
                .expect("should exist");
            assert_eq!(file0.stat.kind, InodeStatKind::File {});
            assert_eq!(file0.full_key, OsString::from(format!("{}dir0/file0.txt", prefix)));

            for (dir, sdir, ino, n) in &[
                (0, 0, sdir0.ino, 3),
                (0, 1, sdir1.ino, 2),
                (1, 2, sdir2.ino, 3),
                (1, 3, sdir3.ino, 2),
            ] {
                for i in 0..*n {
                    let file = superblock
                        .lookup(&client, *ino, &OsString::from(format!("file{}.txt", i)))
                        .await
                        .expect("should exist");
                    assert_eq!(
                        file.full_key,
                        OsString::from(format!("{}dir{}/sdir{}/file{}.txt", prefix, dir, sdir, i))
                    );
                }
            }
        }
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_readdir(prefix: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let keys = &[
            format!("{}dir0/file0.txt", prefix),
            format!("{}dir0/sdir0/file0.txt", prefix),
            format!("{}dir0/sdir0/file1.txt", prefix),
            format!("{}dir0/sdir0/file2.txt", prefix),
            format!("{}dir0/sdir1/file0.txt", prefix),
            format!("{}dir0/sdir1/file1.txt", prefix),
            format!("{}dir1/sdir2/file0.txt", prefix),
            format!("{}dir1/sdir2/file1.txt", prefix),
            format!("{}dir1/sdir2/file2.txt", prefix),
            format!("{}dir1/sdir3/file0.txt", prefix),
            format!("{}dir1/sdir3/file1.txt", prefix),
        ];

        for key in keys {
            client.add_object(key, MockObject::constant(0xaa, 30));
        }

        let superblock = Superblock::new("test_bucket".to_string(), OsString::from(prefix));

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
                &["dir0", "dir1"]
            );

            let dir0_inode = entries[0].ino;
            let dir_handle = superblock.readdir(&client, dir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
                &["file0.txt", "sdir0", "sdir1"]
            );

            let sdir0_inode = entries[1].ino;
            let dir_handle = superblock.readdir(&client, sdir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
                &["file0.txt", "file1.txt", "file2.txt"]
            );
        }
    }

    #[tokio::test]
    async fn test_inode_reuse() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        client.add_object("dir1/file1.txt", MockObject::constant(0xaa, 30));

        let superblock = Superblock::new("test_bucket".to_string(), OsString::new());

        for _ in 0..2 {
            let dir1_1 = superblock
                .lookup(&client, FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
                .await
                .unwrap();
            let dir1_2 = superblock
                .lookup(&client, FUSE_ROOT_INODE, OsStr::from_bytes("dir1".as_bytes()))
                .await
                .unwrap();
            assert_eq!(dir1_1.ino, dir1_2.ino);

            let file1_1 = superblock
                .lookup(&client, dir1_1.ino, OsStr::from_bytes("file1.txt".as_bytes()))
                .await
                .unwrap();
            let file1_2 = superblock
                .lookup(&client, dir1_1.ino, OsStr::from_bytes("file1.txt".as_bytes()))
                .await
                .unwrap();
            assert_eq!(file1_1.ino, file1_2.ino);
        }
    }
}

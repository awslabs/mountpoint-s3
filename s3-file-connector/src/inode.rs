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
use std::time::Instant;

use fuser::FileType;
use futures::{select_biased, FutureExt};
use s3_client::ObjectClient;
use thiserror::Error;
use time::OffsetDateTime;
use tracing::{error, trace, warn};

use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

pub type InodeNo = u64;

pub const ROOT_INODE_NO: InodeNo = 1;

pub fn valid_inode_name<T: AsRef<OsStr>>(name: T) -> bool {
    let name = name.as_ref();
    // Names cannot be empty
    !name.is_empty() &&
    // "." and ".." are reserved names (presented by the filesystem layer)
    name != "." &&
    name != ".." &&
    // The delimiter / can never appear in a name
    !name.as_bytes().contains(&0x2fu8) &&
    // NUL is invalid in POSIX names
    !name.as_bytes().contains(&0x0)
}

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
    mount_time: OffsetDateTime,
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

        let mount_time = OffsetDateTime::now_utc();
        let root = Inode {
            ino: ROOT_INODE_NO,
            parent: ROOT_INODE_NO,
            // We stash the prefix in the root inode's name so that path resolution "just works"
            // with prefixes
            name: stripped_prefix,
            stat_cache: RwLock::new(InodeStat::for_directory(mount_time)),
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
            mount_time,
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
            let parent_inode = self.inner.get(&inodes, parent)?;
            self.inner.full_key_for(&inodes, parent_inode, true)?
        };
        assert!(full_path.is_empty() || full_path.to_str().unwrap().ends_with('/'));
        full_path.push(name);
        let full_path_clone = full_path.clone();
        let mut full_path_suffixed = full_path.clone();
        full_path_suffixed.push("/");

        // We need to try two requests here, one to find an object with the given name, and one to
        // discover a possible shadowing (implicit) directory with the same name. There's a few
        // different cases we need to consider here:
        //   (1) Consider this namespace with two keys:
        //           a
        //           a/b
        //       Here we need to make a choice about whether to make `a` visible as a file or as a
        //       directory. We choose to make it a directory. If we lookup("a") and only do a
        //       HeadObject for `a`, we'd see the object `a`, but we need to shadow that object with
        //       a directory. Doing the concurrent ListObjects lets us find out that `a` needs to be
        //       a directory and so we should suppress the file lookup. Note that this means we
        //       can't respond to the `lookup` call until both the Head and List calls complete.
        //   (2) Consider this namespace with two keys, similar to (1):
        //           a
        //           a/
        //       This has the same problem as (1), except that we also need to warn the user that
        //       the key `a/` will be inaccessible.
        //   (3) Consider this namespace with two keys:
        //           dir-1/foo
        //           dir/ bar
        //       Here we need to be careful how we issue the ListObjects call. If we don't append a
        //       "/" to the prefix in the request, the first common prefix we'll get back will be
        //       "dir-1/", because that precedes "dir/" in lexicographic order. Doing the
        //       ListObjects with "/" appended makes sure we always observe the correct prefix.
        let mut file_lookup = client
            .head_object(&self.inner.bucket, full_path.to_str().unwrap())
            .fuse();
        let mut dir_lookup = client
            .list_objects(&self.inner.bucket, None, "/", 1, full_path_suffixed.to_str().unwrap())
            .fuse();

        let mut file_state = None;

        for _ in 0..2 {
            select_biased! {
                result = file_lookup => {
                    // TODO: 404s currently become client errors, but they are expected when looking
                    // up a directory, so we just swallow all errors for now. Fix when we model
                    // service errors correctly.
                    if let Ok(result) = result.map_err(|e| InodeError::ClientError(e.into())) {
                        let last_modified = result.object.last_modified;
                        let stat = InodeStat::for_file(result.object.size as usize, last_modified);
                        file_state = Some(stat);
                    }
                }

                result = dir_lookup => {
                    let result = result.map_err(|e| InodeError::ClientError(e.into()))?;

                    let found_directory = if result
                        .common_prefixes
                        .get(0)
                        .map(|prefix| prefix.starts_with(full_path_suffixed.to_str().unwrap()))
                        .unwrap_or(false)
                    {
                        true
                    } else if result
                        .objects
                        .get(0)
                        .map(|object| object.key.starts_with(full_path_suffixed.to_str().unwrap()))
                        .unwrap_or(false)
                    {
                        if result.objects[0].key == full_path_suffixed.to_str().unwrap() {
                            trace!(
                                ?parent,
                                ?name,
                                size = result.objects[0].size,
                                "found a directory that shadows this name"
                            );
                            // The S3 Console creates zero-sized keys for explicit directories, so
                            // let's not warn about those cases.
                            if result.objects[0].size > 0 {
                                warn!(
                                    "key {:?} is not a valid filename (ends in `/`); will be hidden and unavailable",
                                    full_path_suffixed
                                );
                            }
                        }
                        true
                    } else {
                        false
                    };

                    // We don't have to wait for the HeadObject to complete because in our
                    // semantics, directories always shadow files.
                    if found_directory {
                        trace!(?parent, ?name, kind=?InodeKind::Directory, "suffixed lookup found a directory");
                        let stat = InodeStat::for_directory(self.inner.mount_time);
                        let ino =
                            self.inner
                                .update_or_insert(parent, name, InodeKind::Directory, stat.clone(), Instant::now())?;
                        return Ok(Lookup {
                            ino,
                            stat,
                            full_key: full_path_clone,
                        });
                    }
                }
            }
        }

        // If we reach here, the ListObjects didn't find a shadowing directory, so we know we either
        // have a valid file, or both requests failed to find the object so it must not exist
        if let Some(stat) = file_state {
            trace!(?parent, ?name, "found a regular file");
            let ino = self
                .inner
                .update_or_insert(parent, name, InodeKind::File, stat.clone(), Instant::now())?;
            Ok(Lookup {
                ino,
                stat,
                full_key: full_path_clone,
            })
        } else {
            Err(InodeError::FileDoesNotExist)
        }
    }

    /// Retrieve the attributes for an inode
    pub async fn getattr<OC: ObjectClient>(&self, _client: &OC, ino: InodeNo) -> Result<Lookup, InodeError> {
        let inodes = self.inner.inodes.read().unwrap();
        let inode = self.inner.get(&inodes, ino)?;
        let full_key = self
            .inner
            .full_key_for(&inodes, inode, inode.kind() == InodeKind::Directory)?;
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
            let dir_inode = self.inner.get(&inodes, dir)?;
            if dir_inode.kind() != InodeKind::Directory {
                return Err(InodeError::NotADirectory(dir));
            }
            (dir_inode.parent, self.inner.full_key_for(&inodes, dir_inode, true)?)
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
        if !valid_inode_name(name) {
            let kind = if kind == InodeKind::Directory {
                "directory"
            } else {
                "file"
            };
            warn!(?name, "invalid file name; {} will not be available", kind);
            return Err(InodeError::InvalidFileName(name.to_os_string()));
        }

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
                                // TODO we probably need to check that the directory still exists
                                if inode.kind() == InodeKind::Directory {
                                    let full_key = self.full_key_for(&inodes, inode, false)?;
                                    return Err(InodeError::ShadowedByDirectory(full_key, inode.ino));
                                } else {
                                    warn!(?parent, ?name, ino=?expected_ino, expected_kind=?kind, actual_kind=?inode.kind(), "inode changed kind, will recreate it");
                                    None
                                }
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
        while self.results.read().unwrap().is_empty() {
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

            let prefixes = result
                .common_prefixes
                .into_iter()
                .map(|prefix| OsString::from(&prefix[self.full_path.len()..prefix.len() - 1]))
                .filter(|name| valid_inode_name(name))
                .map(|name| {
                    let stat = InodeStat::for_directory(self.inner.mount_time);
                    let stat_clone = stat.clone();

                    self.inner
                        .update_or_insert(
                            self.dir_ino,
                            name.as_os_str(),
                            InodeKind::Directory,
                            stat,
                            Instant::now(),
                        )
                        .map(|ino| DirEntryPlus {
                            name,
                            ino,
                            stat: stat_clone,
                        })
                });
            let objects = result
                .objects
                .into_iter()
                .map(|object| (OsString::from(&object.key[self.full_path.len()..]), object))
                // Hide keys that end with '/', since they can be confused with directories
                .filter(|(name, _object)| valid_inode_name(name))
                .flat_map(|(name, object)| {
                    let last_modified = object.last_modified;
                    let stat = InodeStat::for_file(object.size as usize, last_modified);
                    let stat_clone = stat.clone();

                    let result = self
                        .inner
                        .update_or_insert(self.dir_ino, name.as_os_str(), InodeKind::File, stat, Instant::now())
                        .map(|ino| DirEntryPlus {
                            name,
                            ino,
                            stat: stat_clone,
                        });
                    // Skip over keys that are shadowed by a directory. We can do this here because
                    // common prefixes are iterated first, and the `sort_by` below is stable.
                    match result {
                        Err(InodeError::ShadowedByDirectory(_, _)) => {
                            warn!(
                                "key {:?} is shadowed by a directory with the same name and will be unavailable",
                                object.key
                            );
                            None
                        }
                        _ => Some(result),
                    }
                });

            // TODO would be nice to do this as a merge sort but the Result makes it messy
            match prefixes.chain(objects).collect::<Result<Vec<_>, _>>() {
                Ok(mut new_results) => {
                    new_results.sort_by(|left, right| left.name.cmp(&right.name));
                    self.results.write().unwrap().extend(new_results);
                }
                Err(e) => {
                    error!(error=?e, "readdir failed");
                    return Err(e);
                }
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
    /// Size in bytes
    pub size: usize,

    /// Time of last file content modification
    pub mtime: OffsetDateTime,
    /// Time of last file metadata (or content) change
    pub ctime: OffsetDateTime,
    /// Time of last access
    pub atime: OffsetDateTime,

    /// Per-kind metadata
    pub kind: InodeStatKind,
}

impl InodeStat {
    /// Initialize an [InodeStat] for a file, given some metadata.
    pub fn for_file(size: usize, datetime: OffsetDateTime) -> InodeStat {
        InodeStat {
            size,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            kind: InodeStatKind::File {},
        }
    }

    /// Initialize an [InodeStat] for a directory, given some metadata.
    pub fn for_directory(datetime: OffsetDateTime) -> InodeStat {
        InodeStat {
            size: 0,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            kind: InodeStatKind::Directory {},
        }
    }
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
    #[error("file {0:?} is shadowed by a directory with inode {1}")]
    ShadowedByDirectory(OsString, InodeNo),
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
    use time::{Duration, OffsetDateTime};

    use crate::fs::FUSE_ROOT_INODE;

    use super::*;

    /// Check an [InodeStat] matches a series of fields.
    /// ctime, mtime and atime are within the range of 5 seconds of given datetime.
    /// It is required for directory where these are specified as mount time.
    macro_rules! assert_inode_stat {
        ($stat:expr, $type:expr, $datetime:expr, $size:expr) => {
            assert_eq!($stat.kind, $type);
            assert!($stat.atime >= $datetime && $stat.atime < $datetime + Duration::new(5, 0));
            assert!($stat.ctime >= $datetime && $stat.ctime < $datetime + Duration::new(5, 0));
            assert!($stat.mtime >= $datetime && $stat.mtime < $datetime + Duration::new(5, 0));
            assert_eq!($stat.size, $size);
        };
    }

    #[test_case(""; "unprefixed")]
    #[test_case("test_prefix/"; "prefixed")]
    #[tokio::test]
    async fn test_lookup(prefix: &str) {
        let bucket = "test_bucket";
        let client_config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let keys = &[
            format!("{prefix}dir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file1.txt"),
            format!("{prefix}dir0/sdir0/file2.txt"),
            format!("{prefix}dir0/sdir1/file0.txt"),
            format!("{prefix}dir0/sdir1/file1.txt"),
            format!("{prefix}dir1/sdir2/file0.txt"),
            format!("{prefix}dir1/sdir2/file1.txt"),
            format!("{prefix}dir1/sdir2/file2.txt"),
            format!("{prefix}dir1/sdir3/file0.txt"),
            format!("{prefix}dir1/sdir3/file1.txt"),
        ];

        let object_size = 30;
        let mut last_modified = OffsetDateTime::UNIX_EPOCH;
        for key in keys {
            let mut obj = MockObject::constant(0xaa, object_size);
            last_modified += Duration::days(1);
            obj.set_last_modified(last_modified);
            client.add_object(key, obj);
        }

        let ts = OffsetDateTime::now_utc();
        let superblock = Superblock::new(bucket.to_string(), OsString::from(prefix));

        // Try it twice to test the inode reuse path too
        for _ in 0..2 {
            let dir0 = superblock
                .lookup(&client, FUSE_ROOT_INODE, &OsString::from("dir0"))
                .await
                .expect("should exist");
            assert_inode_stat!(dir0.stat, InodeStatKind::Directory {}, ts, 0);
            assert_eq!(dir0.full_key, OsString::from(format!("{prefix}dir0")));

            let dir1 = superblock
                .lookup(&client, FUSE_ROOT_INODE, &OsString::from("dir1"))
                .await
                .expect("should exist");
            assert_inode_stat!(dir1.stat, InodeStatKind::Directory {}, ts, 0);
            assert_eq!(dir1.full_key, OsString::from(format!("{prefix}dir1")));

            let sdir0 = superblock
                .lookup(&client, dir0.ino, &OsString::from("sdir0"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir0.stat, InodeStatKind::Directory {}, ts, 0);
            assert_eq!(sdir0.full_key, OsString::from(format!("{prefix}dir0/sdir0")));

            let sdir1 = superblock
                .lookup(&client, dir0.ino, &OsString::from("sdir1"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir1.stat, InodeStatKind::Directory {}, ts, 0);
            assert_eq!(sdir1.full_key, OsString::from(format!("{prefix}dir0/sdir1")));

            let sdir2 = superblock
                .lookup(&client, dir1.ino, &OsString::from("sdir2"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir2.stat, InodeStatKind::Directory {}, ts, 0);
            assert_eq!(sdir2.full_key, OsString::from(format!("{prefix}dir1/sdir2")));

            let sdir3 = superblock
                .lookup(&client, dir1.ino, &OsString::from("sdir3"))
                .await
                .expect("should exist");
            assert_inode_stat!(sdir3.stat, InodeStatKind::Directory {}, ts, 0);
            assert_eq!(sdir3.full_key, OsString::from(format!("{prefix}dir1/sdir3")));

            for (dir, sdir, ino, n) in &[
                (0, 0, sdir0.ino, 3),
                (0, 1, sdir1.ino, 2),
                (1, 2, sdir2.ino, 3),
                (1, 3, sdir3.ino, 2),
            ] {
                for i in 0..*n {
                    let file = superblock
                        .lookup(&client, *ino, &OsString::from(format!("file{i}.txt")))
                        .await
                        .expect("inode should exist");
                    // Grab last modified time according to mock S3
                    let modified_time = client
                        .head_object(bucket, file.full_key.to_str().unwrap())
                        .await
                        .expect("object should exist")
                        .object
                        .last_modified;
                    assert_inode_stat!(file.stat, InodeStatKind::File {}, modified_time, object_size);
                    assert_eq!(
                        file.full_key,
                        OsString::from(format!("{prefix}dir{dir}/sdir{sdir}/file{i}.txt"))
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
            format!("{prefix}dir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file0.txt"),
            format!("{prefix}dir0/sdir0/file1.txt"),
            format!("{prefix}dir0/sdir0/file2.txt"),
            format!("{prefix}dir0/sdir1/file0.txt"),
            format!("{prefix}dir0/sdir1/file1.txt"),
            format!("{prefix}dir1/sdir2/file0.txt"),
            format!("{prefix}dir1/sdir2/file1.txt"),
            format!("{prefix}dir1/sdir2/file2.txt"),
            format!("{prefix}dir1/sdir3/file0.txt"),
            format!("{prefix}dir1/sdir3/file1.txt"),
        ];

        for key in keys {
            client.add_object(key, MockObject::constant(0xaa, 30));
        }

        let ts = OffsetDateTime::now_utc();
        let superblock = Superblock::new("test_bucket".to_string(), OsString::from(prefix));

        // Try it all twice to test inode reuse
        for _ in 0..2 {
            let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
                &["dir0", "dir1"]
            );

            assert_inode_stat!(
                dir_handle
                    .inner
                    .inodes
                    .read()
                    .unwrap()
                    .get(&FUSE_ROOT_INODE)
                    .expect("No Inode found")
                    .stat_cache
                    .read()
                    .unwrap(),
                InodeStatKind::Directory {},
                ts,
                0
            );

            let dir0_inode = entries[0].ino;
            let dir_handle = superblock.readdir(&client, dir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
                &["file0.txt", "sdir0", "sdir1"]
            );

            assert_inode_stat!(
                dir_handle
                    .inner
                    .inodes
                    .read()
                    .unwrap()
                    .get(&dir0_inode)
                    .expect("No Inode found")
                    .stat_cache
                    .read()
                    .unwrap(),
                InodeStatKind::Directory {},
                ts,
                0
            );

            let sdir0_inode = entries[1].ino;
            let dir_handle = superblock.readdir(&client, sdir0_inode, 2).await.unwrap();
            let entries = dir_handle.collect(&client).await.unwrap();
            assert_eq!(
                entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
                &["file0.txt", "file1.txt", "file2.txt"]
            );

            assert_inode_stat!(
                dir_handle
                    .inner
                    .inodes
                    .read()
                    .unwrap()
                    .get(&sdir0_inode)
                    .expect("No Inode found")
                    .stat_cache
                    .read()
                    .unwrap(),
                InodeStatKind::Directory {},
                ts,
                0
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

    #[test_case(""; "no subdirectory")]
    #[test_case("subdir/"; "with subdirectory")]
    #[tokio::test]
    async fn test_lookup_directory_overlap(subdir: &str) {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));
        // In this test the `/` delimiter comes back to bite us. `dir-1/` comes before `dir/` in
        // lexicographical order (- is ASCII 0x2d, / is ASCII 0x2f), so `dir-1` will be the first
        // common prefix when we do ListObjects with prefix = 'dir'. But `dir` comes before `dir-1`
        // in lexicographical order, so `dir` will be the first common prefix when we do ListObjects
        // with prefix = ''.
        client.add_object(&format!("dir/{subdir}file1.txt"), MockObject::constant(0xaa, 30));
        client.add_object(&format!("dir-1/{subdir}file1.txt"), MockObject::constant(0xaa, 30));

        let superblock = Superblock::new("test_bucket".to_string(), OsString::new());

        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(
            entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(),
            &["dir", "dir-1"]
        );

        let dir = superblock
            .lookup(&client, FUSE_ROOT_INODE, OsStr::from_bytes("dir".as_bytes()))
            .await
            .unwrap();
        assert_eq!(dir.full_key, OsString::from("dir"));
    }

    #[tokio::test]
    async fn test_invalid_names() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        // The only valid key here is "dir1/a", so we should see a directory called "dir1" and a
        // file inside it called "a".
        client.add_object("dir1/", MockObject::constant(0xaa, 30));
        client.add_object("dir1//", MockObject::constant(0xaa, 30));
        client.add_object("dir1/a", MockObject::constant(0xaa, 30));
        client.add_object("dir1/.", MockObject::constant(0xaa, 30));
        client.add_object("dir1/./a", MockObject::constant(0xaa, 30));

        let superblock = Superblock::new("test_bucket".to_string(), OsString::new());
        let dir_handle = superblock.readdir(&client, FUSE_ROOT_INODE, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(), &["dir1"]);

        let dir1_ino = entries[0].ino;
        let dir_handle = superblock.readdir(&client, dir1_ino, 2).await.unwrap();
        let entries = dir_handle.collect(&client).await.unwrap();
        assert_eq!(entries.iter().map(|entry| &entry.name).collect::<Vec<_>>(), &["a"]);

        // Neither of these keys should exist in the directory
        for key in ["/", "."] {
            let lookup = superblock
                .lookup(&client, dir1_ino, OsStr::from_bytes(key.as_bytes()))
                .await;
            assert!(matches!(lookup, Err(InodeError::InvalidFileName(_))));
        }
    }

    #[test]
    fn test_inodestat_constructors() {
        let ts = OffsetDateTime::UNIX_EPOCH + Duration::days(90);
        let file_inodestat = InodeStat::for_file(128, ts);
        assert_eq!(file_inodestat.size, 128);
        assert_eq!(file_inodestat.atime, ts);
        assert_eq!(file_inodestat.ctime, ts);
        assert_eq!(file_inodestat.mtime, ts);
        assert_eq!(file_inodestat.kind, InodeStatKind::File {});

        let ts = OffsetDateTime::UNIX_EPOCH + Duration::days(180);
        let file_inodestat = InodeStat::for_directory(ts);
        assert_eq!(file_inodestat.size, 0);
        assert_eq!(file_inodestat.atime, ts);
        assert_eq!(file_inodestat.ctime, ts);
        assert_eq!(file_inodestat.mtime, ts);
        assert_eq!(file_inodestat.kind, InodeStatKind::Directory {});
    }
}

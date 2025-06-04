use crate::fs::DirectoryEntry;
use crate::mountspace::LookedUp;
use crate::mountspace::Mountspace;
use crate::mountspace::MountspaceDirectoryReplier;
use crate::mountspace::ReadHandle;
use crate::mountspace::S3Location;
use crate::mountspace::WriteHandle;
use crate::superblock::path::ValidKey;
use crate::superblock::path::ValidName;
use crate::superblock::InodeError;
use crate::superblock::InodeErrorInfo;
use crate::superblock::InodeKind;
use crate::superblock::InodeNo;
use crate::superblock::InodeStat;
use crate::superblock::WriteMode;
use async_trait::async_trait;
use fuser::FileAttr;
use mountpoint_s3_client::types::ETag;
use std::collections::{BTreeMap, HashMap};
use std::ffi::OsStr;
use std::sync::RwLock;
use std::time::Duration;
use std::time::UNIX_EPOCH;
use time::OffsetDateTime;

#[derive(Debug)]
struct HyperNode {
    ino: InodeNo,
    kind: InodeKind,
    name: String,
    children: HashMap<String, InodeNo>, // Only used for directories
    stat: InodeStat,
    bucket: Option<String>, // Add bucket field
}

impl HyperNode {
    fn err(&self) -> InodeErrorInfo {
        InodeErrorInfo(self.ino, self.name.clone())
    }
}

#[derive(Debug)]
pub struct HyperBlock {
    nodes: RwLock<BTreeMap<InodeNo, HyperNode>>,
}

impl HyperBlock {
    #[allow(clippy::type_complexity)]
    pub fn new(channel_configs: Vec<(String, String, Vec<(String, String, usize)>)>) -> Self {
        let channel_count = channel_configs.len();
        let mut nodes = BTreeMap::new();

        // Create root directory (inode 1)
        let root_stat = InodeStat::for_directory(OffsetDateTime::now_utc(), Duration::from_secs(120000));

        let mut root = HyperNode {
            ino: 1, // Root inode
            kind: InodeKind::Directory,
            stat: root_stat,
            children: HashMap::new(),
            name: "/".to_string(),
            bucket: None,
        };
        // First pass: create all channel nodes and set up their relationships
        //
        let mut next_file_ino = channel_count as InodeNo + 2 + 1; // Start after all channels

        for (idx, (name, bucket, files_with_etags)) in channel_configs.iter().enumerate() {
            let channel_inode = (idx + 2) as u64; // +2 because root is 1

            // Add channel to root's children
            root.children.insert(name.clone(), channel_inode);

            // Create the channel node
            let channel_stat = InodeStat::for_directory(OffsetDateTime::now_utc(), Duration::from_secs(120000));

            let mut channel_node = HyperNode {
                name: name.clone(),
                ino: channel_inode,
                kind: InodeKind::Directory,
                stat: channel_stat,
                children: HashMap::new(),
                bucket: Some(name.clone()),
            };

            // Second pass: create all file nodes for this channel
            for (file, etag_str, size) in files_with_etags.iter() {
                let file_inode = next_file_ino;

                // Add file to channel's children
                channel_node.children.insert(file.clone(), file_inode);

                // Create file node with ETag
                let file_stat = InodeStat::for_file(
                    *size,
                    OffsetDateTime::now_utc(),
                    Some(etag_str.clone().into()), // Include the ETag here
                    None,
                    None,
                    Duration::from_secs(120000),
                );

                let file_node = HyperNode {
                    ino: file_inode,
                    kind: InodeKind::File,
                    stat: file_stat,
                    children: HashMap::new(), // Files don't have children
                    name: file.clone(),
                    bucket: Some(bucket.clone()),
                };

                // Add file to nodes map
                nodes.insert(file_inode, file_node);

                next_file_ino += 1;
            }

            // Store the channel node in our nodes map
            nodes.insert(channel_inode, channel_node);
        }

        // Finally, add root to nodes map
        nodes.insert(1, root);

        HyperBlock {
            nodes: RwLock::new(nodes),
        }
    }
    fn make_attr(&self, lookup: &LookedUp) -> FileAttr {
        /// From man stat(2): `st_blocks`: "This field indicates the number of blocks allocated to
        /// the file, in 512-byte units."
        const STAT_BLOCK_SIZE: u64 = 512;
        /// From man stat(2): `st_blksize`: "This field gives the "preferred" block size for
        /// efficient filesystem I/O."
        const PREFERRED_IO_BLOCK_SIZE: u32 = 4096;

        // We don't implement hard links, and don't want to have to list a directory to count its
        // hard links, so we just assume one link for files (itself) and two links for directories
        // (itself + the "." link).
        let (perm, nlink) = match lookup.kind {
            InodeKind::File => {
                if lookup.stat.is_readable {
                    (1, 1)
                } else {
                    (0o000, 1)
                }
            }
            InodeKind::Directory => (755, 2),
        };

        FileAttr {
            ino: lookup.ino,
            size: lookup.stat.size as u64,
            blocks: (lookup.stat.size as u64).div_ceil(STAT_BLOCK_SIZE),
            atime: lookup.stat.atime.into(),
            mtime: lookup.stat.mtime.into(),
            ctime: lookup.stat.ctime.into(),
            crtime: UNIX_EPOCH,
            kind: lookup.kind.into(),
            perm,
            nlink,
            uid: 400,
            gid: 400,
            rdev: 0,
            flags: 0,
            blksize: PREFERRED_IO_BLOCK_SIZE,
        }
    }

    fn full_key_for_inode_explicit(&self, node: &HyperNode) -> ValidKey {
        if node.kind == InodeKind::Directory {
            ValidKey::root()
        } else {
            // For files, just return the filename directly
            ValidKey::root()
                .new_child(ValidName::parse_str(&node.name).unwrap(), InodeKind::File)
                .unwrap_or_else(|_| {
                    // Fallback
                    ValidKey::root()
                })
        }
    }
}

#[async_trait]
impl Mountspace for HyperBlock {
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<LookedUp, InodeError> {
        let nodes = self.nodes.read().unwrap();

        // Get parent node
        let parent = nodes
            .get(&parent_ino)
            .ok_or(InodeError::InodeDoesNotExist(parent_ino))?;
        if parent.kind != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent.err()));
        }

        // Lookup the child by name in the parent's children HashMap
        let child_ino = parent
            .children
            .get(name.to_str().unwrap())
            .ok_or(InodeError::FileDoesNotExist(
                name.to_str().unwrap().to_string(),
                parent.err(),
            ))?;

        // Get the child node
        let child = nodes.get(child_ino).ok_or(InodeError::InodeDoesNotExist(*child_ino))?;

        Ok(LookedUp {
            ino: child.ino,
            stat: child.stat.clone(),
            kind: child.kind,
            is_remote: true,
            location: child.bucket.as_ref().map(|bucket| S3Location {
                bucket: bucket.clone(),
                full_key: self.full_key_for_inode_explicit(child),
            }),
        })
    }

    async fn getattr(&self, ino: InodeNo, _force_revalidate: bool) -> Result<LookedUp, InodeError> {
        let nodes = self.nodes.read().unwrap();
        let node = nodes.get(&ino).ok_or(InodeError::InodeDoesNotExist(ino))?;

        Ok(LookedUp {
            ino: node.ino,
            stat: node.stat.clone(),
            kind: node.kind,
            is_remote: false,
            location: node.bucket.as_ref().map(|bucket| S3Location {
                bucket: bucket.clone(),
                full_key: self.full_key_for_inode_explicit(node),
            }),
        })
    }

    // Other required Mountspace trait implementations...
    async fn forget(&self, _ino: InodeNo, _n: u64) {
        // No-op for testing
    }

    async fn create(&self, _dir: InodeNo, _name: &OsStr, _kind: InodeKind) -> Result<LookedUp, InodeError> {
        // For a read-only view, don't allow creation
        Err(InodeError::OperationNotPermitted)
    }

    async fn start_writing(
        &self,
        _ino: InodeNo,
        _mode: &WriteMode,
        _is_truncate: bool,
    ) -> Result<WriteHandle, InodeError> {
        // For a read-only view, don't allow writing
        Err(InodeError::OperationNotPermitted)
    }

    async fn inc_file_size(&self, _handle: &WriteHandle, _len: usize) -> Result<usize, InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn finish_writing(&self, _handle: &WriteHandle, _etag: Option<ETag>) -> Result<(), InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn start_reading(&self, ino: InodeNo) -> Result<ReadHandle, InodeError> {
        // Just check if the node exists
        let nodes = self.nodes.read().unwrap();
        if !nodes.contains_key(&ino) {
            return Err(InodeError::InodeDoesNotExist(ino));
        }
        Ok(ReadHandle { no: None, ino })
    }

    async fn finish_reading(&self, _handle: &ReadHandle) -> Result<(), InodeError> {
        Ok(())
    }

    async fn new_readdir_handle(&self, dir_ino: InodeNo, _page_size: usize) -> Result<u64, InodeError> {
        let nodes = self.nodes.read().unwrap();
        if !nodes.contains_key(&dir_ino) {
            return Err(InodeError::InodeDoesNotExist(dir_ino));
        }
        let node = nodes.get(&dir_ino).unwrap();
        if node.kind != InodeKind::Directory {
            return Err(InodeError::NotADirectory(node.err()));
        }

        // Return the directory inode as the handle for simplicity
        Ok(dir_ino)
    }

    async fn rmdir(&self, _parent_ino: InodeNo, _name: &OsStr) -> Result<(), InodeError> {
        // For a read-only view, don't allow directory removal
        Err(InodeError::OperationNotPermitted)
    }

    async fn unlink(&self, _parent_ino: InodeNo, _name: &OsStr) -> Result<(), InodeError> {
        // For a read-only view, don't allow file removal
        Err(InodeError::OperationNotPermitted)
    }

    async fn rename(
        &self,
        _src_parent_ino: InodeNo,
        _src_name: &OsStr,
        _dst_parent_ino: InodeNo,
        _dst_name: &OsStr,
        _allow_overwrite: bool,
    ) -> Result<(), InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn setattr(
        &self,
        _ino: InodeNo,
        _atime: Option<OffsetDateTime>,
        _mtime: Option<OffsetDateTime>,
    ) -> Result<LookedUp, InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        _is_readdirplus: bool,
        mut reply: MountspaceDirectoryReplier<'a>,
    ) -> Result<(), InodeError> {
        let nodes = self.nodes.read().unwrap();

        // Get the directory node (file handle is the directory inode)
        let dir = nodes.get(&fh).ok_or(InodeError::NoSuchDirHandle)?;
        if dir.kind != InodeKind::Directory {
            return Err(InodeError::NotADirectory(dir.err()));
        }

        // If offset is 0, add "." entry
        if offset == 0 {
            let lookup = LookedUp {
                ino: fh,
                stat: dir.stat.clone(),
                kind: InodeKind::Directory,
                is_remote: false,
                location: dir.bucket.as_ref().map(|bucket| S3Location {
                    bucket: bucket.clone(),
                    full_key: self.full_key_for_inode_explicit(dir),
                }),
            };
            let attr = self.make_attr(&lookup);

            let entry = DirectoryEntry {
                ino: fh,
                offset: 1, // Next entry will be at offset 1
                name: ".".into(),
                attr, // Simplified attribute for testing
                generation: 0,
                ttl: lookup.validity(),
            };

            if reply.add(entry) {
                return Ok(());
            }
        }

        // If offset is 0 or 1, add ".." entry
        if offset <= 1 {
            // For simplicity, parent of root is root, otherwise use the provided parent
            let parent_ino = if fh == 1 { 1 } else { parent };
            let parent_node = nodes.get(&parent_ino).unwrap_or(dir); // Fallback to dir if parent not found

            let lookup = LookedUp {
                ino: parent_ino,
                stat: parent_node.stat.clone(),
                kind: InodeKind::Directory,
                is_remote: false,
                location: parent_node.bucket.as_ref().map(|bucket| S3Location {
                    bucket: bucket.clone(),
                    full_key: self.full_key_for_inode_explicit(parent_node),
                }),
            };
            let attr = self.make_attr(&lookup);

            let entry = DirectoryEntry {
                ino: parent_ino,
                offset: 2, // Next entry will be at offset 2
                name: "..".into(),
                attr, // Simplified attribute for testing
                generation: 0,
                ttl: lookup.validity(),
            };

            if reply.add(entry) {
                return Ok(());
            }
        }

        // Sort child entries for consistency
        let entries: Vec<_> = dir.children.iter().collect();

        // Calculate where in the children array we should start based on offset
        let start_idx = if offset <= 2 { 0 } else { (offset - 2) as usize };

        // Add regular entries, starting at the calculated index
        for (idx, (name, &child_ino)) in entries.iter().skip(start_idx).enumerate() {
            let child = match nodes.get(&child_ino) {
                Some(node) => node,
                None => continue, // Skip invalid entries
            };

            let lookup = LookedUp {
                ino: child.ino,
                stat: child.stat.clone(),
                kind: child.kind,
                is_remote: false,
                location: child.bucket.as_ref().map(|bucket| S3Location {
                    bucket: bucket.clone(),
                    full_key: self.full_key_for_inode_explicit(child),
                }),
            };
            let attr = self.make_attr(&lookup);

            let entry = DirectoryEntry {
                ino: child.ino,
                offset: (idx as i64) + start_idx as i64 + 3, // +3 for "." and ".." entries
                name: name.into(),
                attr, // Simplified attribute for testing
                generation: 0,
                ttl: lookup.validity(),
            };

            // Return if the buffer is full, otherwise continue
            if reply.add(entry) {
                return Ok(());
            }
        }

        Ok(())
    }
}

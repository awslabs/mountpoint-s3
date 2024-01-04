use std::collections::{BTreeMap, HashSet};
use std::fmt::Debug;
use std::path::{Component, Path, PathBuf};
use std::sync::Arc;
use std::time::Duration;

use fuser::FileType;
use futures::future::{BoxFuture, FutureExt};
use mountpoint_s3::fs::{CacheConfig, InodeNo, ToErrno, FUSE_ROOT_INODE};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::S3FilesystemConfig;
use mountpoint_s3_client::mock_client::{MockClient, MockObject};
use mountpoint_s3_client::ObjectClient;
use proptest::prelude::*;
use proptest_derive::Arbitrary;
use tracing::{debug, trace};

use crate::common::{make_test_filesystem, DirectoryReply, TestS3Filesystem};
use crate::reftests::generators::{flatten_tree, gen_tree, FileContent, FileSize, Name, TreeNode, ValidName};
use crate::reftests::reference::{File, Node, Reference};

/// Operations that the mutating proptests can perform on the file system.
// TODO: "reboot" (forget all the local inodes and re-bootstrap)
#[derive(Debug, Arbitrary)]
pub enum Op {
    /// Do an entire write in one step
    WriteFile(ValidName, DirectoryIndex, FileContent),

    // Individual steps of a file write -- create, open, write, close
    CreateFile(ValidName, DirectoryIndex, FileContent),
    StartWriting(InflightWriteIndex),
    // usize is the percentage of the file to write (taken modulo 101)
    WritePart(InflightWriteIndex, usize),
    FinishWrite(InflightWriteIndex),

    /// Remove a file
    UnlinkFile(DirectoryIndex, ChildIndex),

    /// Create a local directory
    CreateDirectory(DirectoryIndex, ValidName),
    /// Remove a local directory
    RemoveDirectory(DirectoryIndex),

    /// Read a file. `compare_contents` already reads every file after every operation, but having
    /// this as an explicit operation tests a different code path (doing recursive path resolution
    /// rather than walking the directory hierarchy with `readdir`).
    Read(DirectoryIndex, ChildIndex),

    /// Put a new object into the bucket (to simulate concurrent access by a non-Mountpoint client).
    /// This includes generating keys that would be invalid filenames by using [Name] instead of
    /// [ValidName].
    PutObject(DirectoryIndex, Name, FileContent),
    /// Remove an object from the bucket (to simulate concurrent access by a non-Mountpoint client)
    DeleteObject(KeyIndex),
}

/// An index into the reference model's list of directories. We use this to randomly select an
/// existing directory to operate on (for put, rmdir, etc).
#[derive(Debug, Clone, Copy, Arbitrary)]
pub struct DirectoryIndex(usize);

impl DirectoryIndex {
    /// Get the full path to the directory at the given index in the reference (wrapping around if
    /// the index is larger than the number of directories).
    fn get<'a>(&self, reference: &'a Reference) -> impl AsRef<Path> + 'a {
        let directories = reference.directories();
        assert!(!directories.is_empty(), "directories can never be empty");
        let idx = self.0 % directories.len();
        trace!("{self:?} is actually {idx}");
        &directories[idx]
    }
}

/// An index into the children of a directory
#[derive(Debug, Clone, Copy, Arbitrary)]
pub struct ChildIndex(usize);

impl ChildIndex {
    /// Get the name and node of the child at the given index in the reference directory (wrapping
    /// around if the index is larger than the number of children). Returns None if the reference
    /// directory is empty.
    fn get<'a>(&self, reference: &'a BTreeMap<String, Node>) -> Option<(&'a str, &'a Node)> {
        if reference.is_empty() {
            None
        } else {
            let idx = self.0 % reference.len();
            trace!("{self:?} is actually {idx}");
            let key = reference.keys().nth(idx).unwrap();
            Some((key, reference.get(key).unwrap()))
        }
    }
}

/// An index into the keys in a bucket
#[derive(Debug, Clone, Copy, Arbitrary)]
pub struct KeyIndex(usize);

impl KeyIndex {
    /// Get the key at the given index in the reference. Returns None if the bucket is empty.
    fn get<'a>(&self, reference: &'a Reference) -> Option<&'a str> {
        let mut remote_keys = reference.remote_keys();
        if remote_keys.len() == 0 {
            None
        } else {
            let idx = self.0 % remote_keys.len();
            trace!("{self:?} is actually {idx}");
            Some(remote_keys.nth(idx).unwrap())
        }
    }
}

/// An index into the reference model's list of inflight writes. We use this to randomly select an
/// inflight write to operate on.
#[derive(Debug, Clone, Copy, Arbitrary)]
pub struct InflightWriteIndex(usize);

#[derive(Debug)]
pub struct InflightWrite {
    path: PathBuf,
    inode: InodeNo,
    /// Initially None until the file is opened by [Op::StartWriting]
    file_handle: Option<u64>,
    object: MockObject,
    written: usize,
}

#[derive(Debug, Default)]
struct InflightWrites {
    writes: Vec<InflightWrite>,
}

impl InflightWrites {
    fn index(&self, index: InflightWriteIndex) -> Option<usize> {
        let inflight_writes_len = self.writes.len();
        if inflight_writes_len == 0 {
            None
        } else {
            Some(index.0 % inflight_writes_len)
        }
    }

    fn insert(&mut self, write: InflightWrite) -> InflightWriteIndex {
        self.writes.push(write);
        InflightWriteIndex(self.writes.len() - 1)
    }

    fn get(&self, index: InflightWriteIndex) -> Option<&InflightWrite> {
        Some(&self.writes[self.index(index)?])
    }

    fn get_mut(&mut self, index: InflightWriteIndex) -> Option<&mut InflightWrite> {
        let index = self.index(index)?;
        Some(&mut self.writes[index])
    }

    fn remove(&mut self, index: InflightWriteIndex) -> InflightWrite {
        let index = self.index(index).unwrap();
        self.writes.remove(index)
    }
}

#[derive(Debug)]
pub struct Harness {
    readdir_limit: usize, // max number of entries that a readdir will return; 0 means no limit
    reference: Reference,
    fs: TestS3Filesystem<Arc<MockClient>>,
    client: Arc<MockClient>,
    bucket: String,
    inflight_writes: InflightWrites,
}

impl Harness {
    /// Create a new test harness
    pub fn new(
        fs: TestS3Filesystem<Arc<MockClient>>,
        client: Arc<MockClient>,
        reference: Reference,
        bucket: &str,
        readdir_limit: usize,
    ) -> Self {
        Self {
            readdir_limit,
            reference,
            fs,
            client,
            bucket: bucket.to_owned(),
            inflight_writes: Default::default(),
        }
    }

    /// Run a sequence of mutation operations on the test harness, checking equivalence between the
    /// reference model and file system after each operation.
    pub async fn run(&mut self, ops: Vec<Op>) {
        for op in ops {
            debug!(?op, "executing operation");
            match &op {
                Op::WriteFile(name, directory_index, contents) => {
                    let Some(index) = self.perform_create_file(name, *directory_index, contents).await else {
                        continue;
                    };
                    self.perform_start_writing(index).await;
                    self.perform_finish_write(index).await;
                }

                Op::CreateFile(name, directory_index, contents) => {
                    self.perform_create_file(name, *directory_index, contents).await;
                }
                Op::StartWriting(index) => {
                    self.perform_start_writing(*index).await;
                }
                Op::WritePart(index, percent) => {
                    self.perform_write_part(*index, *percent).await;
                }
                Op::FinishWrite(index) => {
                    self.perform_finish_write(*index).await;
                }
                Op::UnlinkFile(directory_index, file_index) => {
                    self.perform_unlink_file(*directory_index, *file_index).await;
                }
                Op::CreateDirectory(directory_index, name) => {
                    self.perform_create_directory(*directory_index, &name.0).await;
                }
                Op::RemoveDirectory(directory_index) => {
                    self.perform_remove_directory(*directory_index).await;
                }
                Op::Read(directory_index, file_index) => {
                    self.perform_read(*directory_index, *file_index).await;
                }
                Op::PutObject(directory_index, name, contents) => {
                    self.perform_put_object(*directory_index, name, contents).await;
                }
                Op::DeleteObject(key_index) => {
                    self.perform_delete_object(*key_index).await;
                }
            }

            debug!(?op, "checking contents");
            self.compare_contents().await;
        }
    }

    /// Walk the filesystem tree and check that at each level, contents match the reference
    pub async fn compare_contents(&self) {
        let root = self.reference.root();
        self.compare_contents_recursive(FUSE_ROOT_INODE, FUSE_ROOT_INODE, root)
            .await;
    }

    /// Walk a single path through the filesystem tree and ensure each node matches the reference.
    /// Compared to [compare_contents], this avoids doing a `readdir` before `lookup`, and so tests
    /// a different path through the inode code.
    pub async fn compare_single_path(&self, idx: usize) {
        let inodes = self.reference.list_recursive();
        if inodes.is_empty() {
            return;
        }
        let (path, node) = &inodes[idx % inodes.len()];

        let mut parent = FUSE_ROOT_INODE;
        let mut seen_inos = HashSet::from([FUSE_ROOT_INODE]);
        for name in path.iter().take(path.len().saturating_sub(1)) {
            let lookup = self.fs.lookup(parent, name.as_ref()).await.unwrap();
            assert_eq!(lookup.attr.kind, FileType::Directory);
            assert!(seen_inos.insert(lookup.attr.ino));
            parent = lookup.attr.ino;
        }

        let lookup = self.fs.lookup(parent, path.last().unwrap().as_ref()).await.unwrap();
        assert!(seen_inos.insert(lookup.attr.ino));
        match node {
            Node::Directory { .. } => {
                assert_eq!(lookup.attr.kind, FileType::Directory);
            }
            Node::File(content) => {
                assert_eq!(lookup.attr.kind, FileType::RegularFile);
                match content {
                    File::Local => (),
                    File::Remote(object) => self.compare_file(lookup.attr.ino, object).await,
                }
            }
        }
    }

    /// Resolve an absolute path to an inode in the actual filesystem by recursively calling lookup
    async fn lookup(&self, path: &Path) -> Result<InodeNo, libc::c_int> {
        let mut components = path.components();
        assert_eq!(components.next(), Some(Component::RootDir));
        let mut inode = FUSE_ROOT_INODE;
        for component in components {
            if let Component::Normal(folder) = component {
                inode = self.fs.lookup(inode, folder).await.map_err(|e| e.to_errno())?.attr.ino;
            } else {
                panic!("unexpected path component {component:?}");
            }
        }
        Ok(inode)
    }

    /// Create a new file ready for writing. We don't allow overwrites of existing files by default, so this
    /// can return None if the name already exists in the chosen directory.
    /// TODO: Update this function to support overwrites
    async fn perform_create_file(
        &mut self,
        name: &str,
        directory_index: DirectoryIndex,
        contents: &FileContent,
    ) -> Option<InflightWriteIndex> {
        let (dir_inode, full_path) = {
            let dir = directory_index.get(&self.reference);
            let dir_inode = self.lookup(dir.as_ref()).await.expect("directory must already exist");
            let full_path = dir.as_ref().join(name);
            (dir_inode, full_path)
        };
        trace!(path=?full_path, "create file");

        // Random paths can shadow existing ones, so we check that we aren't allowed to overwrite an
        // existing inode. The existing node could be either a file or directory; we should fail the
        // same way in both cases.
        let reference_lookup = self.reference.lookup(&full_path);
        let mknod = self.fs.mknod(dir_inode, name.as_ref(), libc::S_IFREG, 0, 0).await;
        if reference_lookup.is_some() {
            assert!(
                matches!(mknod, Err(e) if e.to_errno() == libc::EEXIST),
                "can't overwrite existing file/directory"
            );
            None
        } else {
            let mknod = mknod.expect("file creation should succeed");

            self.reference.add_local_file(&full_path);

            let index = self.inflight_writes.insert(InflightWrite {
                path: full_path,
                inode: mknod.attr.ino,
                file_handle: None,
                object: contents.to_mock_object(),
                written: 0,
            });

            Some(index)
        }
    }

    /// Open a previously created file (by `perform_create_file`) for writing
    async fn perform_start_writing(&mut self, index: InflightWriteIndex) {
        let Some(inflight_write) = self.inflight_writes.get(index) else {
            return;
        };

        let open = self
            .fs
            .open(inflight_write.inode, libc::O_WRONLY, 0)
            .await
            .expect("open should succeed");
        if inflight_write.written > 0 {
            // Shouldn't be able to write to a file that is being written
            let write = self
                .fs
                .write(inflight_write.inode, open.fh, 0, &[0; 8], 0, 0, None)
                .await
                .expect_err("write from another file handle should fail");
            assert_eq!(write.to_errno(), libc::EPERM);
        } else {
            let inflight_write = self.inflight_writes.get_mut(index).unwrap();
            inflight_write.file_handle = Some(open.fh);
        }
    }

    /// Continue writing to an open file
    async fn perform_write_part(&mut self, index: InflightWriteIndex, percent: usize) {
        let Some(inflight_write) = self.inflight_writes.get(index) else {
            // No inflight writes available
            return;
        };
        if inflight_write.written == inflight_write.object.len() {
            // File is already fully written
            return;
        }

        // Start write if it hasn't already started
        if inflight_write.file_handle.is_none() {
            self.perform_start_writing(index).await;
        }
        let inflight_write = self.inflight_writes.get(index).unwrap();
        let file_handle = inflight_write.file_handle.unwrap();

        // Work out how many bytes to write. We never test empty writes, and also don't want to
        // write beyond the end of the object, but want to be able to test writing the entire object
        // in a single shot.
        let percent = percent % 101; // Want to be able to hit 100%
        let num_bytes_to_write = (percent * inflight_write.object.len() / 100).max(1);
        let num_bytes_to_write = num_bytes_to_write.min(inflight_write.object.len() - inflight_write.written);
        let bytes_to_write = inflight_write
            .object
            .read(inflight_write.written as u64, num_bytes_to_write);

        let write = self
            .fs
            .write(
                inflight_write.inode,
                file_handle,
                inflight_write.written as i64,
                &bytes_to_write,
                0,
                0,
                None,
            )
            .await
            .unwrap();
        assert_eq!(write as usize, bytes_to_write.len());

        let inflight_write = self.inflight_writes.get_mut(index).unwrap();
        inflight_write.written += num_bytes_to_write;
    }

    /// Complete writing to a file (like `close`)
    async fn perform_finish_write(&mut self, index: InflightWriteIndex) {
        let Some(inflight_write) = self.inflight_writes.get(index) else {
            // No inflight writes available
            return;
        };

        // Start write if it hasn't already started
        if inflight_write.file_handle.is_none() {
            self.perform_start_writing(index).await;
        }

        // Finish whatever writes are remaining
        let inflight_write = self.inflight_writes.get(index).unwrap();
        if inflight_write.written != inflight_write.object.len() {
            self.perform_write_part(index, 100).await;
        }

        let inflight_write = self.inflight_writes.get(index).unwrap();
        let file_handle = inflight_write.file_handle.unwrap();
        assert_eq!(inflight_write.written, inflight_write.object.len());

        self.fs
            .release(inflight_write.inode, file_handle, 0, None, false)
            .await
            .unwrap();

        let inflight_write = self.inflight_writes.remove(index);
        self.reference.remove_local_file(&inflight_write.path);
        self.reference.remove_local_parents(&inflight_write.path);
        self.reference
            .add_remote_file(inflight_write.path, inflight_write.object);
    }

    /// Unlink a file from a directory
    async fn perform_unlink_file(&mut self, directory_index: DirectoryIndex, file_index: ChildIndex) {
        let parent_path = directory_index.get(&self.reference);
        let Some(Node::Directory { children, .. }) = self.reference.lookup(parent_path.as_ref()) else {
            panic!("directory must already exist");
        };
        let Some((name, node)) = file_index.get(children) else {
            return;
        };

        let full_path = parent_path.as_ref().join(name);
        trace!(path=?full_path, "unlink file");
        let parent_ino = self.lookup(parent_path.as_ref()).await.expect("parent should exist");
        drop(parent_path);

        let unlink = self.fs.unlink(parent_ino, name.as_ref()).await;
        match node {
            Node::Directory { .. } => {
                assert!(
                    matches!(unlink, Err(e) if e.to_errno() == libc::EISDIR),
                    "unlink of directory should fail"
                );
            }
            Node::File(File::Local) => {
                assert!(
                    matches!(unlink, Err(e) if e.to_errno() == libc::EPERM),
                    "unlink of local files not supported"
                );
            }
            Node::File(File::Remote(_)) => {
                unlink.expect("should be able to unlink remote file");
                self.reference.remove_remote_file(full_path);
            }
        }
    }

    /// Create a new local directory
    async fn perform_create_directory(&mut self, directory_index: DirectoryIndex, name: &str) {
        let (dir_inode, full_path) = {
            let dir = directory_index.get(&self.reference);
            let dir_inode = self.lookup(dir.as_ref()).await.expect("directory must already exist");
            let full_path = dir.as_ref().join(name);
            (dir_inode, full_path)
        };
        trace!(path=?full_path, "create directory");

        // Random paths can shadow existing ones, so we check that we aren't allowed to overwrite an
        // existing inode. The existing node could be either a file or directory; we should fail the
        // same way in both cases.
        let reference_lookup = self.reference.lookup(&full_path);
        let mkdir = self.fs.mkdir(dir_inode, name.as_ref(), libc::S_IFDIR, 0).await;
        if reference_lookup.is_some() {
            assert!(
                matches!(mkdir, Err(e) if e.to_errno() == libc::EEXIST),
                "can't overwrite existing file/directory"
            );
        } else {
            let _mkdir = mkdir.expect("directory creation should succeed");
            self.reference.add_local_directory(&full_path);
        }
    }

    /// Remove a local directory
    async fn perform_remove_directory(&mut self, directory_index: DirectoryIndex) {
        let (parent_inode, full_path) = {
            let full_path = directory_index.get(&self.reference);
            let Some(parent_path) = full_path.as_ref().parent() else {
                // Not possible to send an rmdir for the root directory (it has no parent)
                return;
            };
            let parent_inode = self.lookup(parent_path).await.expect("parent must exist");
            (parent_inode, full_path.as_ref().to_owned())
        };
        trace!(path=?full_path, "remove directory");

        let reference_lookup = self.reference.lookup(&full_path).expect("directory must already exist");
        let Node::Directory { children, is_local } = reference_lookup else {
            panic!("node must be a directory");
        };

        // Only empty local directories can be removed
        let dir_name = full_path.file_name().expect("directory must have a name");
        let rmdir = self.fs.rmdir(parent_inode, dir_name).await;
        if *is_local && children.is_empty() {
            rmdir.expect("should be able to remove empty local directory");
            self.reference.remove_local_directory(&full_path);
        } else {
            rmdir.expect_err("rmdir should fail");
        }
    }

    /// Read a file from a directory
    async fn perform_read(&self, directory_index: DirectoryIndex, file_index: ChildIndex) {
        let dir_path = directory_index.get(&self.reference);
        let Some(Node::Directory { children, .. }) = self.reference.lookup(dir_path.as_ref()) else {
            panic!("directory must already exist");
        };
        let Some((name, Node::File(file))) = file_index.get(children) else {
            // It's either a directory or the [dir_node] is empty; nothing to test in either case
            // TODO test readdir on directories to test mkdir
            return;
        };

        let full_path = dir_path.as_ref().join(name);
        trace!(path=?full_path, "read");
        let inode = self.lookup(&full_path).await.expect("file should exist");

        match file {
            File::Local => self.check_local_file(inode).await,
            File::Remote(object) => self.compare_file(inode, object).await,
        }
    }

    /// Perform a PutObject on the bucket, to simulate concurrent access to the bucket by a client
    /// other than this filesystem. We use a [DirectoryIndex] to generate an interesting key to
    /// put to, one that is likely to overlap existing directories.
    async fn perform_put_object(&mut self, directory_index: DirectoryIndex, name: &str, contents: &FileContent) {
        let key_as_path = {
            let dir = directory_index.get(&self.reference);
            dir.as_ref().join(name)
        };
        assert!(key_as_path.has_root());
        let key = key_as_path.strip_prefix("/").unwrap().display().to_string();
        trace!(key, "put object");

        let object = contents.to_mock_object();
        self.client.add_object(&key, object.clone());
        self.reference.add_remote_key(&key, object);
        // Any local directories along the path are made remote by adding this object
        self.reference.remove_local_parents(key_as_path);
    }

    /// Perform a DeleteObject on the bucket, to simulate concurrent access to the bucket by a
    /// client other than this filesystem.
    async fn perform_delete_object(&mut self, key_index: KeyIndex) {
        let Some(key) = key_index.get(&self.reference) else {
            // Nothing to do if the bucket is empty
            return;
        };
        let key = key.to_owned();

        trace!(key, "delete object");

        self.client
            .delete_object(&self.bucket, &key)
            .await
            .expect("delete should succeed");
        self.reference.remove_remote_key(&key);
    }

    fn compare_contents_recursive<'a>(
        &'a self,
        fs_parent: InodeNo,
        fs_dir: InodeNo,
        ref_dir: &'a Node,
    ) -> BoxFuture<'a, ()> {
        async move {
            let dir_handle = self.fs.opendir(fs_dir, 0).await.unwrap().fh;
            let children = ref_dir.children();
            let mut keys = children.keys().cloned().collect::<HashSet<_>>();

            let mut reply = DirectoryReply::new(self.readdir_limit);
            self.fs.readdir(fs_dir, dir_handle, 0, &mut reply).await.unwrap();

            // TODO `stat` on these needs to work
            let e0 = reply.entries.pop_front().unwrap();
            assert_eq!(e0.name, ".");
            assert_eq!(e0.ino, fs_dir);
            let mut offset = e0.offset;

            if reply.entries.is_empty() {
                reply.clear();
                self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await.unwrap();
            }

            let e1 = reply.entries.pop_front().unwrap();
            assert_eq!(e1.name, "..");
            assert_eq!(e1.ino, fs_parent);
            offset = offset.max(e1.offset);

            if reply.entries.is_empty() {
                reply.clear();
                self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await.unwrap();
            }

            while !reply.entries.is_empty() {
                while let Some(reply) = reply.entries.pop_front() {
                    offset = offset.max(reply.offset);

                    let name = &reply.name.as_os_str().to_str().unwrap().to_string();
                    let fs_kind = reply.attr.kind;

                    let lkup = self.fs.lookup(fs_dir, &reply.name).await.unwrap();
                    let attr = lkup.attr;

                    match children.get(name) {
                        Some(node) => {
                            let ref_kind = node.node_type().into();
                            assert_eq!(
                                fs_kind, ref_kind,
                                "for file {name:?} expecting {ref_kind:?} found {fs_kind:?}"
                            );
                            assert_eq!(
                                attr.ino, reply.ino,
                                "for file {:?} readdir ino {:?} lookup ino {:?}",
                                name, reply.ino, attr.ino
                            );
                            if let Node::File(ref_object) = node {
                                assert_eq!(attr.kind, FileType::RegularFile);
                                match ref_object {
                                    File::Local => self.check_local_file(reply.ino).await,
                                    File::Remote(object) => self.compare_file(reply.ino, object).await,
                                }
                            } else {
                                assert_eq!(attr.kind, FileType::Directory);
                                // Recurse into directory
                                self.compare_contents_recursive(fs_dir, reply.ino, node).await;
                            }
                            assert!(keys.remove(name));
                        }
                        None => panic!("file {name:?} not found in the reference"),
                    }
                }
                reply.clear();
                let _reply = self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await.unwrap();
            }

            assert!(
                keys.is_empty(),
                "reference contained elements not in the filesystem in dir inode {fs_dir}: {keys:?}"
            );

            self.fs.releasedir(fs_dir, dir_handle, 0).await.unwrap();
        }
        .boxed()
    }

    async fn compare_file<'a>(&'a self, fs_file: InodeNo, ref_file: &'a MockObject) {
        let fh = match self.fs.open(fs_file, 0x8000, 0).await {
            Ok(ret) => ret.fh,
            Err(e) => panic!("failed to open {fs_file}: {e:?}"),
        };
        let mut offset = 0;
        const MAX_READ_SIZE: usize = 128 * 1024;
        let file_size = ref_file.len();
        while offset < file_size {
            let num_bytes = MAX_READ_SIZE.min(file_size - offset);
            let ref_bytes = ref_file.read(offset as u64, num_bytes);
            assert_eq!(ref_bytes.len(), num_bytes);
            let bytes_from_read = self
                .fs
                .read(fs_file, fh, offset as i64, num_bytes as u32, 0, None)
                .await
                .expect("read should succeed");
            assert_eq!(&ref_bytes[..], &bytes_from_read, "read bytes did not match");
            offset += num_bytes;
        }
    }

    /// Local files are in the process of being written, and so should be stat-able, but not
    /// readable (open should fail).
    async fn check_local_file(&self, inode: InodeNo) {
        let _stat = self.fs.getattr(inode).await.expect("stat should succeed");
        let open = self
            .fs
            .open(inode, libc::O_RDONLY, 0)
            .await
            .expect("open should succeed");
        let read_result = self.fs.read(inode, open.fh, 0, 4096, 0, None).await;
        let error = read_result.expect_err("read should fail");
        assert_eq!(error.to_errno(), libc::EPERM);
    }
}

/// Read-only reftests that generate random S3 buckets and check the mapping from S3 keys to file
/// paths is correct.
mod read_only {
    use super::*;

    #[derive(Debug)]
    enum CheckType {
        /// Traverse the entire tree recursively with `readdir` and compare the results of every node
        FullTree,
        /// Do a lookup along a single path and compare the leaf node
        SinglePath {
            /// Index into the list of all nodes in the file system
            path_index: usize,
        },
    }

    fn run_test(tree: TreeNode, check: CheckType, readdir_limit: usize) {
        const BUCKET_NAME: &str = "test-bucket";

        let test_prefix = Prefix::new("").expect("valid prefix");
        let config = S3FilesystemConfig {
            readdir_size: 5,
            ..Default::default()
        };
        let (client, fs) = make_test_filesystem(BUCKET_NAME, &test_prefix, config);

        let namespace = flatten_tree(tree);
        for (key, object) in namespace.iter() {
            client.add_object(&format!("{test_prefix}{key}"), object.clone());
        }

        let reference = Reference::new(namespace);

        let harness = Harness::new(fs, client, reference, BUCKET_NAME, readdir_limit);

        futures::executor::block_on(async move {
            match check {
                CheckType::FullTree => harness.compare_contents().await,
                CheckType::SinglePath { path_index } => harness.compare_single_path(path_index).await,
            }
        });
    }

    proptest! {
        #![proptest_config(ProptestConfig {
            failure_persistence: None,
            .. ProptestConfig::default()
        })]

        #[test]
        fn reftest_random_tree_full(readdir_limit in 0..10usize, tree in gen_tree(5, 100, 5, 20)) {
            run_test(tree, CheckType::FullTree, readdir_limit);
        }

        #[test]
        fn reftest_random_tree_single(tree in gen_tree(5, 100, 5, 20), path_index: usize) {
            run_test(tree, CheckType::SinglePath { path_index }, 0);
        }
    }

    #[test]
    fn random_tree_regression_basic() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([(
                    "-".into(),
                    TreeNode::File(FileContent(0, FileSize::Small(0))),
                )])),
            )])),
            CheckType::FullTree,
            0,
        );
    }

    #[test]
    fn random_tree_regression_directory_order() {
        run_test(
            TreeNode::Directory(BTreeMap::from([
                ("-a-".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                (
                    "-a".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "-".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
            ])),
            CheckType::FullTree,
            0,
        );
    }

    #[test]
    fn random_tree_regression_invalid_name1() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([(
                    ".".into(),
                    TreeNode::File(FileContent(0, FileSize::Small(0))),
                )])),
            )])),
            CheckType::FullTree,
            0,
        );
    }

    #[test]
    fn random_tree_regression_invalid_name2() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([(
                    "a/".into(),
                    TreeNode::File(FileContent(0, FileSize::Small(0))),
                )])),
            )])),
            CheckType::FullTree,
            0,
        )
    }

    #[test]
    fn random_tree_regression_directory_shadow() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "a".into(),
                TreeNode::Directory(BTreeMap::from([
                    ("a/".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                    ("a".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                ])),
            )])),
            CheckType::FullTree,
            0,
        )
    }

    #[test]
    fn random_tree_regression_directory_shadow_lookup() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "a".into(),
                TreeNode::Directory(BTreeMap::from([
                    ("a/".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                    ("a".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                ])),
            )])),
            CheckType::SinglePath { path_index: 1 },
            0,
        )
    }
}

/// Mutation tests that run a sequence of mutations against a file system and check equivalence to
/// the reference model.
mod mutations {
    use super::*;
    use proptest::collection::vec;

    fn run_test(initial_tree: TreeNode, ops: Vec<Op>, readdir_limit: usize) {
        const BUCKET_NAME: &str = "test-bucket";

        let test_prefix = Prefix::new("").expect("valid prefix");
        let config = S3FilesystemConfig {
            readdir_size: 5,
            allow_delete: true,
            cache_config: CacheConfig {
                // We are only interested in strong consistency for the reference tests. FUSE isn't even in the loop.
                serve_lookup_from_cache: false,
                dir_ttl: Duration::ZERO,
                file_ttl: Duration::ZERO,
                ..Default::default()
            },
            ..Default::default()
        };
        let (client, fs) = make_test_filesystem(BUCKET_NAME, &test_prefix, config);

        let namespace = flatten_tree(initial_tree);
        for (key, object) in namespace.iter() {
            client.add_object(&format!("{test_prefix}{key}"), object.clone());
        }

        let reference = Reference::new(namespace);

        let mut harness = Harness::new(fs, client, reference, BUCKET_NAME, readdir_limit);

        futures::executor::block_on(harness.run(ops));
    }

    proptest! {
        #![proptest_config(ProptestConfig {
            failure_persistence: None,
            .. ProptestConfig::default()
        })]

        #[test]
        fn reftest_random_tree(tree in gen_tree(5, 100, 5, 20), readdir_limit in 0..10usize, ops in vec(any::<Op>(), 1..10)) {
            run_test(tree, ops, readdir_limit);
        }
    }

    #[test]
    fn regression_basic() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([(
                    "-".into(),
                    TreeNode::File(FileContent(0, FileSize::Small(0))),
                )])),
            )])),
            vec![
                Op::WriteFile("a".into(), DirectoryIndex(0), FileContent(0x0a, FileSize::Small(50))),
                Op::WriteFile("b".into(), DirectoryIndex(1), FileContent(0x0b, FileSize::Small(10))),
            ],
            0,
        );
    }

    #[test]
    fn regression_overwrite() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::WriteFile("-a".into(), DirectoryIndex(0), FileContent(0, FileSize::Small(0))),
                Op::WriteFile("-a".into(), DirectoryIndex(0), FileContent(0, FileSize::Small(0))),
            ],
            0,
        )
    }

    #[test]
    fn regression_empty_file() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateFile("a".into(), DirectoryIndex(0), FileContent(0, FileSize::Small(0))),
                Op::FinishWrite(InflightWriteIndex(0)),
            ],
            0,
        )
    }

    #[test]
    fn regression_out_of_order() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "a".into(),
                TreeNode::File(FileContent(0, FileSize::Small(0))),
            )])),
            vec![
                Op::CreateFile("-".into(), DirectoryIndex(0), FileContent(0, FileSize::Small(0))),
                Op::StartWriting(InflightWriteIndex(0)),
                Op::WritePart(InflightWriteIndex(0), 0),
                Op::WritePart(InflightWriteIndex(0), 0),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_local_directory() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::UnlinkFile(DirectoryIndex(0), ChildIndex(0)),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_implicit_directory1() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([(
                    "--".into(),
                    TreeNode::File(FileContent(0, FileSize::Small(0))),
                )])),
            )])),
            vec![
                Op::CreateDirectory(DirectoryIndex(1), "-".into()),
                Op::UnlinkFile(DirectoryIndex(1), ChildIndex(1)),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_implicit_directory2() {
        run_test(
            TreeNode::Directory(BTreeMap::from([
                ("-".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                (
                    "a".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "a".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
            ])),
            vec![
                Op::CreateFile("-".into(), DirectoryIndex(1), FileContent(0, FileSize::Small(0))),
                Op::UnlinkFile(DirectoryIndex(1), ChildIndex(1)),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_duplicate_key() {
        run_test(
            TreeNode::Directory(BTreeMap::from([
                (
                    "-".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "a".into(),
                        TreeNode::Directory(BTreeMap::from([(
                            "a".into(),
                            TreeNode::File(FileContent(0, FileSize::Small(0))),
                        )])),
                    )])),
                ),
                (
                    "--".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "-".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
                (
                    "-a".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "a".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
                (
                    "a".into(),
                    TreeNode::Directory(BTreeMap::from([
                        (
                            "-".into(),
                            TreeNode::Directory(BTreeMap::from([(
                                "-".into(),
                                TreeNode::File(FileContent(0, FileSize::Small(0))),
                            )])),
                        ),
                        ("--".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                        ("-a".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                        ("a".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                        (
                            "a-".into(),
                            TreeNode::Directory(BTreeMap::from([(
                                "a".into(),
                                TreeNode::File(FileContent(0, FileSize::Small(0))),
                            )])),
                        ),
                    ])),
                ),
                (
                    "a-".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "-".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
                (
                    "a--".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "-".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
                ("a/a".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                (
                    "aa".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "a".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
            ])),
            vec![Op::UnlinkFile(DirectoryIndex(5), ChildIndex(3))],
            0,
        )
    }

    #[test]
    fn regression_unlink_directories() {
        run_test(
            TreeNode::Directory(BTreeMap::from([
                (
                    "-".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "a-".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
                (
                    "a".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "a".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
            ])),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "-a".into()),
                Op::CreateDirectory(DirectoryIndex(1), "a".into()),
                Op::UnlinkFile(DirectoryIndex(1), ChildIndex(1)),
                Op::UnlinkFile(DirectoryIndex(3), ChildIndex(0)),
            ],
            0,
        )
    }

    #[test]
    fn regression_put_object_delete() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "--a".into(),
                TreeNode::File(FileContent(0, FileSize::Small(0))),
            )])),
            vec![
                Op::PutObject(DirectoryIndex(0), "--a".into(), FileContent(0, FileSize::Small(0))),
                Op::DeleteObject(KeyIndex(0)),
            ],
            0,
        )
    }

    #[test]
    fn regression_mkdir_put() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::PutObject(DirectoryIndex(0), "a".into(), FileContent(0, FileSize::Small(0))),
            ],
            0,
        )
    }

    #[test]
    fn regression_put_over_open_file() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateFile("a".into(), DirectoryIndex(0), FileContent(0, FileSize::Small(0))),
                Op::PutObject(DirectoryIndex(0), "a".into(), FileContent(0, FileSize::Small(0))),
            ],
            0,
        )
    }

    #[test]
    fn regression_put_over_open_directory() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::PutObject(DirectoryIndex(0), "a".into(), FileContent(0, FileSize::Small(0))),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_newly_put_directory() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([
                    ("-".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                    ("a".into(), TreeNode::File(FileContent(0, FileSize::Small(0)))),
                ])),
            )])),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::PutObject(DirectoryIndex(2), "a".into(), FileContent(0, FileSize::Small(0))),
                Op::RemoveDirectory(DirectoryIndex(2)),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_local_to_remote_directory() {
        run_test(
            TreeNode::Directory(BTreeMap::from([(
                "-".into(),
                TreeNode::Directory(BTreeMap::from([(
                    "-".into(),
                    TreeNode::File(FileContent(0, FileSize::Small(0))),
                )])),
            )])),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::PutObject(DirectoryIndex(0), "a".into(), FileContent(0, FileSize::Small(0))),
                Op::PutObject(DirectoryIndex(2), "a".into(), FileContent(0, FileSize::Small(0))),
                Op::UnlinkFile(DirectoryIndex(2), ChildIndex(0)),
            ],
            0,
        )
    }

    #[test]
    fn regression_put_into_directory1() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::CreateDirectory(DirectoryIndex(0), "-".into()),
                Op::CreateFile("a".into(), DirectoryIndex(2), FileContent(0, FileSize::Small(0))),
                Op::PutObject(DirectoryIndex(2), "-".into(), FileContent(0, FileSize::Small(0))),
            ],
            0,
        )
    }

    #[test]
    fn regression_put_into_directory2() {
        run_test(
            TreeNode::Directory(BTreeMap::from([
                (
                    "-".into(),
                    TreeNode::Directory(BTreeMap::from([
                        (
                            "a".into(),
                            TreeNode::Directory(BTreeMap::from([(
                                "a".into(),
                                TreeNode::File(FileContent(0, FileSize::Small(0))),
                            )])),
                        ),
                        (
                            "aa".into(),
                            TreeNode::Directory(BTreeMap::from([(
                                "a".into(),
                                TreeNode::File(FileContent(0, FileSize::Small(0))),
                            )])),
                        ),
                    ])),
                ),
                (
                    "-a".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "\u{1}/".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
                (
                    "a".into(),
                    TreeNode::Directory(BTreeMap::from([(
                        "-/".into(),
                        TreeNode::File(FileContent(0, FileSize::Small(0))),
                    )])),
                ),
            ])),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "--".into()),
                Op::CreateDirectory(DirectoryIndex(0), "aa".into()),
                Op::CreateDirectory(DirectoryIndex(9), "a".into()),
                Op::PutObject(DirectoryIndex(9), "-".into(), FileContent(0, FileSize::Small(0))),
            ],
            0,
        )
    }

    #[test]
    fn regression_unlink_newly_put_object() {
        run_test(
            TreeNode::File(FileContent(0, FileSize::Small(0))),
            vec![
                Op::CreateDirectory(DirectoryIndex(0), "a".into()),
                Op::PutObject(DirectoryIndex(1), "a".into(), FileContent(0, FileSize::Small(0))),
                Op::UnlinkFile(DirectoryIndex(1), ChildIndex(0)),
            ],
            0,
        )
    }
}

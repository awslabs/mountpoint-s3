use std::collections::{BTreeMap, HashSet};
use std::fmt::Debug;
use std::path::{Component, Path, PathBuf};
use std::sync::Arc;

use fuser::FileType;
use futures::executor::ThreadPool;
use futures::future::{BoxFuture, FutureExt};
use mountpoint_s3::fs::{InodeNo, FUSE_ROOT_INODE};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::{S3Filesystem, S3FilesystemConfig};
use mountpoint_s3_client::mock_client::{MockClient, MockObject};
use proptest::prelude::*;
use proptest_derive::Arbitrary;
use tracing::{debug, trace};

use crate::common::{make_test_filesystem, DirectoryReply, ReadReply};
use crate::reftests::generators::{flatten_tree, gen_tree, FileContent, FileSize, TreeNode, ValidName};
use crate::reftests::reference::{File, Node, Reference};

/// Operations that the mutating proptests can perform on the file system.
// TODO: mkdir, readdir, unlink
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

    /// Read a file. `compare_contents` already reads every file after every operation, but having
    /// this as an explicit operation tests a different code path (doing recursive path resolution
    /// rather than walking the directory hierarchy with `readdir`).
    Read(DirectoryIndex, ChildIndex),
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
            let key = reference.keys().nth(idx).unwrap();
            Some((key, reference.get(key).unwrap()))
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
    fs: S3Filesystem<Arc<MockClient>, ThreadPool>,
    inflight_writes: InflightWrites,
}

impl Harness {
    /// Create a new test harness
    pub fn new(fs: S3Filesystem<Arc<MockClient>, ThreadPool>, reference: Reference, readdir_limit: usize) -> Self {
        Self {
            readdir_limit,
            reference,
            fs,
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
                Op::Read(directory_index, file_index) => {
                    self.perform_read(*directory_index, *file_index).await;
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
                inode = self.fs.lookup(inode, folder).await?.attr.ino;
            } else {
                panic!("unexpected path component {component:?}");
            }
        }
        Ok(inode)
    }

    /// Create a new file ready for writing. We don't allow overwrites of existing files, so this
    /// can return None if the name already exists in the chosen directory.
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
                matches!(mknod, Err(libc::EEXIST)),
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

        let open = self.fs.open(inflight_write.inode, libc::O_WRONLY).await;
        if inflight_write.file_handle.is_some() {
            // Shouldn't be able to reopen a file that's already open for writing
            assert!(matches!(open, Err(libc::EPERM)));
        } else {
            let open = open.expect("open should succeed");
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
        let key = inflight_write.path.to_string_lossy();
        assert_eq!(key.chars().next(), Some('/'));
        self.reference
            .add_remote_key(key[1..].to_owned(), inflight_write.object);
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
                "reference contained elements not in the filesystem: {keys:?}"
            );

            self.fs.releasedir(fs_dir, dir_handle, 0).await.unwrap();
        }
        .boxed()
    }

    async fn compare_file<'a>(&'a self, fs_file: InodeNo, ref_file: &'a MockObject) {
        let fh = self.fs.open(fs_file, 0x8000).await.unwrap().fh;
        let mut offset = 0;
        const MAX_READ_SIZE: usize = 4_096;
        let file_size = ref_file.len();
        while offset < file_size {
            let mut read = Err(0);
            let num_bytes = MAX_READ_SIZE.min(file_size - offset);
            self.fs
                .read(
                    fs_file,
                    fh,
                    offset as i64,
                    num_bytes as u32,
                    0,
                    None,
                    ReadReply(&mut read),
                )
                .await;
            let fs_bytes = read.unwrap();
            assert_eq!(fs_bytes.len(), num_bytes);
            let ref_bytes = ref_file.read(offset as u64, num_bytes);
            assert_eq!(ref_bytes, fs_bytes);
            offset += num_bytes;
        }
    }

    /// Local files are in the process of being written, and so should be stat-able, but not
    /// readable (open should fail).
    async fn check_local_file(&self, inode: InodeNo) {
        let _stat = self.fs.getattr(inode).await.expect("stat should succeed");
        let open = self.fs.open(inode, libc::O_RDONLY).await;
        assert!(matches!(open, Err(libc::EPERM)));
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
        let test_prefix = Prefix::new("test_prefix/").expect("valid prefix");
        let config = S3FilesystemConfig {
            readdir_size: 5,
            ..Default::default()
        };
        let (client, fs) = make_test_filesystem("harness", &test_prefix, config);

        let namespace = flatten_tree(tree);
        for (key, object) in namespace.iter() {
            client.add_object(&format!("{test_prefix}{key}"), object.clone());
        }

        let reference = Reference::new(namespace);

        let harness = Harness::new(fs, reference, readdir_limit);

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
        let test_prefix = Prefix::new("test_prefix/").expect("valid prefix");
        let config = S3FilesystemConfig {
            readdir_size: 5,
            ..Default::default()
        };
        let (client, fs) = make_test_filesystem("harness", &test_prefix, config);

        let namespace = flatten_tree(initial_tree);
        for (key, object) in namespace.iter() {
            client.add_object(&format!("{test_prefix}{key}"), object.clone());
        }

        let reference = Reference::new(namespace);

        let mut harness = Harness::new(fs, reference, readdir_limit);

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
}

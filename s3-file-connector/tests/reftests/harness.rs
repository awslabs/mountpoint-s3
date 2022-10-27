use crate::common::{make_test_filesystem, DirectoryReply, ReadReply};
use crate::reftests::gen_tree::{flatten_tree, gen_tree, Content, FileSize, Name, TreeNode};
use crate::reftests::reference::{build_reference, Node, Reference};
use fuser::FileType;
use futures::executor::ThreadPool;
use futures::future::{BoxFuture, FutureExt};
use proptest::prelude::*;
use s3_client::mock_client::{MockClient, MockObject};
use s3_file_connector::{
    fs::{Inode, FUSE_ROOT_INODE},
    {S3Filesystem, S3FilesystemConfig},
};
use std::collections::{BTreeMap, HashSet};
use std::ffi::OsStr;
use std::fmt::Debug;
use std::os::unix::prelude::OsStrExt;
use std::sync::Arc;

#[derive(Debug)]
pub struct Harness {
    readdir_limit: usize, // max number of entries that a readdir will return; 0 means no limit
    reference: Reference,
    fs: S3Filesystem<Arc<MockClient>, ThreadPool>,
}

impl Harness {
    fn new(fs: S3Filesystem<Arc<MockClient>, ThreadPool>, reference: Reference, readdir_limit: usize) -> Self {
        Self {
            readdir_limit,
            reference,
            fs,
        }
    }

    pub fn add_file(&mut self, path: &str, pattern: u8, length: usize) {
        self.reference.add_file(&format!("/{}", path), pattern, length);
        let object = MockObject::ramp(pattern, length);
        self.client.add_object(&format!("{}{}", self.prefix, path), object);
    }

    fn compare_contents_recursive<'a>(
        &'a self,
        fs_parent: Inode,
        fs_dir: Inode,
        ref_dir: &'a Node,
    ) -> BoxFuture<'a, ()> {
        async move {
            let dir_handle = self.fs.opendir(fs_dir, 0).await.unwrap().fh;
            let children = ref_dir.children();
            let mut keys = children.keys().cloned().collect::<HashSet<_>>();

            let mut reply = DirectoryReply::new(self.readdir_limit);
            let _reply = self.fs.readdir(fs_dir, dir_handle, 0, &mut reply).await.unwrap();

            // TODO `stat` on these needs to work
            let e0 = reply.entries.pop_front().unwrap();
            assert_eq!(e0.name, ".");
            assert_eq!(e0.ino, fs_dir);
            let mut offset = e0.offset;

            if reply.entries.is_empty() {
                reply.clear();
                let _reply = self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await.unwrap();
            }

            let e1 = reply.entries.pop_front().unwrap();
            assert_eq!(e1.name, "..");
            assert_eq!(e1.ino, fs_parent);
            offset = offset.max(e1.offset);

            if reply.entries.is_empty() {
                reply.clear();
                let _reply = self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await;
                _reply.unwrap();
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
                            let ref_kind = node.file_type();
                            assert_eq!(
                                fs_kind, ref_kind,
                                "for file {:?} expecting {:?} found {:?}",
                                name, ref_kind, fs_kind
                            );
                            assert_eq!(
                                attr.ino, reply.ino,
                                "for file {:?} readdir ino {:?} lookup ino {:?}",
                                name, reply.ino, attr.ino
                            );
                            if let Node::File(ref_object) = node {
                                assert_eq!(attr.kind, FileType::RegularFile);
                                self.compare_file(reply.ino, ref_object).await;
                            } else {
                                assert_eq!(attr.kind, FileType::Directory);
                                // Recurse into directory
                                self.compare_contents_recursive(fs_dir, reply.ino, node).await;
                            }
                            assert!(keys.remove(name));
                        }
                        None => panic!("file {:?} not found in the reference", name),
                    }
                }
                reply.clear();
                let _reply = self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await.unwrap();
            }

            assert!(
                keys.is_empty(),
                "reference contained elements not in the filesystem: {:?}",
                keys
            );

            // Not implemented
            // self.fs.releasedir(dir_handle).unwrap();
        }
        .boxed()
    }

    async fn compare_file<'a>(&'a self, fs_file: Inode, ref_file: &'a MockObject) {
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

    /// Walk the filesystem tree and check that at each level, contents match the reference
    async fn compare_contents(&self) {
        let root = self.reference.root();
        self.compare_contents_recursive(FUSE_ROOT_INODE, FUSE_ROOT_INODE, root)
            .await;
    }

    /// Walk a single path through the filesystem tree and ensure each node matches the reference.
    /// Compared to [compare_contents], this avoids doing a `readdir` before `lookup`, and so tests
    /// a different path through the inode code.
    async fn compare_single_path(&self, idx: usize) {
        let inodes = self.reference.list_recursive();
        if inodes.is_empty() {
            return;
        }
        let (path, node) = &inodes[idx % inodes.len()];

        let mut parent = FUSE_ROOT_INODE;
        let mut seen_inos = HashSet::from([FUSE_ROOT_INODE]);
        for name in path.iter().take(path.len().saturating_sub(1)) {
            let lookup = self
                .fs
                .lookup(parent, OsStr::from_bytes(name.as_bytes()))
                .await
                .unwrap();
            assert_eq!(lookup.attr.kind, FileType::Directory);
            assert!(seen_inos.insert(lookup.attr.ino));
            parent = lookup.attr.ino;
        }

        let lookup = self
            .fs
            .lookup(parent, OsStr::from_bytes(path.last().unwrap().as_bytes()))
            .await
            .unwrap();
        assert!(seen_inos.insert(lookup.attr.ino));
        match node {
            Node::Directory(_) => {
                assert_eq!(lookup.attr.kind, FileType::Directory);
            }
            Node::File(content) => {
                assert_eq!(lookup.attr.kind, FileType::RegularFile);
                self.compare_file(lookup.attr.ino, content).await;
            }
        }
    }
}

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
    let test_prefix = "test_prefix/";
    let config = S3FilesystemConfig {
        readdir_size: 5,
        ..Default::default()
    };
    let (client, fs) = make_test_filesystem("harness", test_prefix, config);

    let namespace = flatten_tree(tree);
    for (key, object) in namespace.iter() {
        client.add_object(&format!("{}{}", test_prefix, key), object.to_mock_object());
    }

    let reference = build_reference(namespace);

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
            Name("-".to_string()),
            TreeNode::Directory(BTreeMap::from([(
                Name("-".to_string()),
                TreeNode::File(Content(0, FileSize::Small(0))),
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
            (Name("-a-".to_string()), TreeNode::File(Content(0, FileSize::Small(0)))),
            (
                Name("-a".to_string()),
                TreeNode::Directory(BTreeMap::from([(
                    Name("-".to_string()),
                    TreeNode::File(Content(0, FileSize::Small(0))),
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
            Name("-".to_string()),
            TreeNode::Directory(BTreeMap::from([(
                Name(".".to_string()),
                TreeNode::File(Content(0, FileSize::Small(0))),
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
            Name("-".to_string()),
            TreeNode::Directory(BTreeMap::from([(
                Name("a/".to_string()),
                TreeNode::File(Content(0, FileSize::Small(0))),
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
            Name("a".to_string()),
            TreeNode::Directory(BTreeMap::from([
                (Name("a/".to_string()), TreeNode::File(Content(0, FileSize::Small(0)))),
                (Name("a".to_string()), TreeNode::File(Content(0, FileSize::Small(0)))),
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
            Name("a".to_string()),
            TreeNode::Directory(BTreeMap::from([
                (Name("a/".to_string()), TreeNode::File(Content(0, FileSize::Small(0)))),
                (Name("a".to_string()), TreeNode::File(Content(0, FileSize::Small(0)))),
            ])),
        )])),
        CheckType::SinglePath { path_index: 1 },
        0,
    )
}

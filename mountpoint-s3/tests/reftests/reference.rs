//! Provides an expected state for the file system and its S3 bucket.
//!
//! As part of the reference model testing,
//! a [MaterializedReference] is generated representing the expected state of the file system and S3.
//! We compare its state with that returned by Mountpoint's file system
//! when traversing or visiting specific paths to assert correctness.

use mountpoint_s3_client::mock_client::MockObject;
use std::cell::RefCell;
use std::collections::BTreeMap;
use std::path::{Component, Path, PathBuf};
use std::rc::Rc;

/// A file node, which could be local or remote.
#[derive(Debug)]
pub enum File {
    Local,
    Remote(Box<MockObject>),
}

/// A node in the reference model. This node could be local or remote.
#[derive(Debug)]
pub enum Node {
    Directory {
        children: BTreeMap<String, Node>,
        is_local: bool,
    },
    File(File),
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NodeType {
    Directory,
    File,
}

impl From<NodeType> for fuser::FileType {
    fn from(value: NodeType) -> Self {
        match value {
            NodeType::Directory => fuser::FileType::Directory,
            NodeType::File => fuser::FileType::RegularFile,
        }
    }
}

impl Node {
    /// Returns the type of this node (file or directory)
    pub fn node_type(&self) -> NodeType {
        match self {
            Node::Directory { .. } => NodeType::Directory,
            Node::File(_) => NodeType::File,
        }
    }

    /// Returns the children of a directory node (panics if node is a file)
    pub fn children(&self) -> &BTreeMap<String, Node> {
        match self {
            Self::Directory { children, .. } => children,
            Self::File(_) => panic!("unexpected file"),
        }
    }
}

/// The expected state of a file system and its S3 bucket.
///
/// We track three pieces of state:
/// - The keys in an S3 bucket.
/// - The list of local directories.
/// - The list of local files.
///
/// Whenever we need the tree structure of the file system,
/// we take this state and produce a [MaterializedReference].
/// By producing the reference in this indirect way, it allows us to have only one definition of correctness
/// -- the implementation of [build_reference] -- and to test both mutations to the file system itself
/// and "remote" mutations to the bucket (like adding or deleting a key using another client).
#[derive(Debug)]
pub struct Reference {
    /// Contents of our S3 bucket
    remote_keys: BTreeMap<String, MockObject>,
    /// Local files
    local_files: Vec<PathBuf>,
    /// Local directories
    local_directories: Vec<PathBuf>,
    /// Materialized state
    materialized: MaterializedReference,
}

/// A [MaterializedReference] is a product of the [Reference],
/// presenting the desired tree ([Self::root]) and list of directories ([Self::directories]).
///
/// This should be 'rematerialized' each time S3 or local state is mutated
/// to show the new desired state of the reference using [Reference::rematerialize].
/// This will use [build_reference] to construct the file system based on the remote state,
/// and then mutate it based on local state.
#[derive(Debug)]
struct MaterializedReference {
    root: Node,
    /// A collection of all the directories in the [Reference], both local and remote.
    directories: Vec<PathBuf>,
}

impl MaterializedReference {
    /// Try to add a new node to the tree. Returns whether the node was added.
    ///
    /// If the path already exists it will be overwritten, unless both the existing and new nodes
    /// are directories or the new node is a file and were to override a directory.
    /// If any intermediate directory is not present, the node won't be added and
    /// this function returns false.
    ///
    /// TODO: today our semantics makes local files/directories invisible if any of their ancestors
    /// is removed remotely (e.g. deleting the key that was creating an implicit directory). It's
    /// not obvious that this is the right choice, but it's a reasonable one for a rare edge case,
    /// and the opposite is tricky to implement correctly. The commented out code in this function
    /// implemented the opposite case; it's kept here in case we change back.
    fn add_local_node(&mut self, path: impl AsRef<Path>, typ: NodeType) -> bool {
        let mut components = path.as_ref().components().peekable();
        assert_eq!(
            components.next(),
            Some(Component::RootDir),
            "first component should always be the root dir",
        );

        let mut parent_node = &mut self.root;
        while let Some(dir) = components.next() {
            let Node::Directory { children, .. } = parent_node else {
                return false;
                // TODO: see above -- implicit directories are allowed to disappear
                // panic!("unexpected internal file node while adding {:?}", path.as_ref());
            };
            let dir = dir.as_os_str().to_str().unwrap();
            if components.peek().is_none() {
                // If both a local and a remote directory exist, don't overwrite the remote one's
                // contents, as they will be visible even though the directory is local. But
                // remember the directory is still local.
                if typ == NodeType::Directory {
                    if let Some(Node::Directory { is_local, .. }) = children.get_mut(dir) {
                        *is_local = true;
                        break;
                    }
                }
                // If a directory of this name exists, ignore any local file
                if let Some(node) = children.get(dir) {
                    if node.node_type() == NodeType::Directory {
                        return false;
                    }
                }
                let new_node = match typ {
                    NodeType::Directory => Node::Directory {
                        children: BTreeMap::new(),
                        is_local: true,
                    },
                    NodeType::File => Node::File(File::Local),
                };
                children.insert(dir.to_owned(), new_node);
                break;
            } else {
                // TODO: see above -- implicit directories are allowed to disappear
                // parent_node = children.entry(dir.to_owned()).or_insert_with(|| Node::Directory {
                //     children: BTreeMap::new(),
                //     is_local: true,
                // })
                let Some(child_node) = children.get_mut(dir) else {
                    return false;
                };
                parent_node = child_node;
            }
        }

        true
    }
}

impl Reference {
    pub fn new(remote_keys: Vec<(String, MockObject)>) -> Self {
        let local_files = vec![];
        let local_directories = vec![];
        let materialized = build_reference(remote_keys.iter().map(|(k, o): &(_, _)| (k, o)));
        Self {
            remote_keys: remote_keys.into_iter().collect(),
            local_files,
            local_directories,
            materialized,
        }
    }

    /// Create a new [MaterializedReference] from the [Reference].
    ///
    /// This will reevaluate what is in S3 and what should be maintained locally,
    /// and produce a result which should maintain our promised semantics.
    fn rematerialize(&self) -> MaterializedReference {
        tracing::debug!(
            remote_keys=?self.remote_keys, local_files=?self.local_files, local_directories=?self.local_directories,
            "rematerialize",
        );
        let mut materialized = build_reference(self.remote_keys.iter());
        for local_dir in self.local_directories.iter() {
            let added = materialized.add_local_node(local_dir, NodeType::Directory);
            if added {
                materialized.directories.push(local_dir.clone());
            }
        }
        for local_file in self.local_files.iter() {
            materialized.add_local_node(local_file, NodeType::File);
        }
        materialized
    }

    pub fn root(&self) -> &Node {
        &self.materialized.root
    }

    /// Return a list of all inodes in the entire tree. Each file is a Vec<String> of path
    /// components and the node it references.
    pub fn list_recursive(&self) -> Vec<(Vec<&str>, &Node)> {
        fn aux<'a>(node: &'a Node, path: Vec<&'a str>, ret: &mut Vec<(Vec<&'a str>, &'a Node)>) {
            match node {
                Node::File(_) => ret.push((path, node)),
                Node::Directory { children, .. } => {
                    for (name, child) in children.iter() {
                        let mut path = path.clone();
                        path.push(name);
                        ret.push((path.clone(), child));
                        aux(child, path, ret);
                    }
                }
            }
        }
        let mut ret = vec![];
        aux(&self.materialized.root, vec![], &mut ret);
        ret
    }

    pub fn add_local_file(&mut self, path: impl AsRef<Path>) {
        let path = path.as_ref().to_owned();
        assert!(!self.local_files.contains(&path), "duplicate local file");
        self.local_files.push(path);
        self.materialized = self.rematerialize();
    }

    pub fn add_local_directory(&mut self, path: impl AsRef<Path>) {
        let path = path.as_ref().to_owned();
        assert!(!self.local_directories.contains(&path), "duplicate local directory");
        self.local_directories.push(path);
        self.materialized = self.rematerialize();
    }

    pub fn remove_local_file(&mut self, path: impl AsRef<Path>) {
        let idx = self
            .local_files
            .iter()
            .position(|p| p == path.as_ref())
            .expect("local file must exist");
        self.local_files.remove(idx);
        self.materialized = self.rematerialize();
    }

    pub fn remove_local_directory(&mut self, path: impl AsRef<Path>) {
        let idx = self
            .local_directories
            .iter()
            .position(|p| p == path.as_ref())
            .expect("local file must exist");
        self.local_directories.remove(idx);
        self.materialized = self.rematerialize();
    }

    /// When a file is made remote, all its parent directories implicitly become remote too. This
    /// method removes those parents from the local directories list if they exist.
    pub fn remove_local_parents(&mut self, path: impl AsRef<Path>) {
        let Some(parent) = path.as_ref().parent() else {
            // `/` is a valid key (so could be used by PutObject) but not a valid filename
            assert_eq!(path.as_ref(), Path::new("/"));
            return;
        };
        // [Path::starts_with] only considers whole path components, so this won't remove a local
        // directory `a` if a sibling `ab` became remote, even though "ab" starts with "a".
        self.local_directories.retain(|dir| !parent.starts_with(dir));
        self.materialized = self.rematerialize();
    }

    pub fn add_remote_key(&mut self, key: &str, object: MockObject) {
        self.remote_keys.insert(key.to_owned(), object);
        self.materialized = self.rematerialize();
    }

    pub fn remove_remote_key(&mut self, key: &str) {
        self.remote_keys.remove(key);
        self.materialized = self.rematerialize();
    }

    pub fn add_remote_file(&mut self, path: impl AsRef<Path>, object: MockObject) {
        let key = path.as_ref().to_string_lossy();
        assert_eq!(key.chars().next(), Some('/'));
        self.add_remote_key(&key[1..], object);
    }

    pub fn remove_remote_file(&mut self, path: impl AsRef<Path>) {
        let key = path.as_ref().to_string_lossy();
        assert_eq!(key.chars().next(), Some('/'));
        self.remove_remote_key(&key[1..]);
    }

    /// Get a node from a full path, if it exists. If any path component does not exist in the
    /// reference, returns None.
    pub fn lookup(&self, path: impl AsRef<Path>) -> Option<&Node> {
        let mut components = path.as_ref().components();
        assert_eq!(components.next(), Some(Component::RootDir));

        let mut node = &self.materialized.root;
        for component in components {
            node = match node {
                Node::Directory { children, .. } => {
                    let dir = component.as_os_str().to_str().unwrap().to_string();
                    children.get(&dir)?
                }
                _ => return None,
            };
        }

        Some(node)
    }

    /// A list of absolute paths for every directory in the reference. This is never empty as "/" is
    /// always a valid directory, even in an empty file system.
    pub fn directories(&self) -> &[impl AsRef<Path>] {
        &self.materialized.directories
    }

    /// A list of objects in the bucket
    pub fn remote_keys(&self) -> impl ExactSizeIterator<Item = &str> {
        self.remote_keys.keys().map(|key| key.as_str())
    }
}

pub fn valid_inode_name(name: &str) -> bool {
    !name.is_empty() && name != "." && name != ".." && !name.contains('\0')
}

/// Take an S3 namespace (list of keys) and create the expected reference file system tree. This is
/// where all our semantics decisions about how to present a flat keyspace as a file system are
/// made; we'll be testing the connector against the decisions made here.
fn build_reference<'a>(flat: impl Iterator<Item = (&'a String, &'a MockObject)>) -> MaterializedReference {
    #[derive(Debug)]
    enum RefNode {
        Directory(Rc<RefCell<BTreeMap<String, RefNode>>>),
        File(Box<MockObject>),
    }

    impl RefNode {
        pub fn children(&self) -> &Rc<RefCell<BTreeMap<String, RefNode>>> {
            match self {
                RefNode::Directory(contents) => contents,
                RefNode::File(_) => panic!("cannot get children of file"),
            }
        }
    }

    let tree = Rc::new(RefCell::new(BTreeMap::new()));
    'next_key: for (key, file) in flat {
        let components = key.split('/').collect::<Vec<_>>();
        let mut leaf_dir = tree.clone();
        for dir in components.iter().take(components.len().saturating_sub(1)) {
            // Semantics decision: these characters are invalid in directory names, so nothing
            // below them should be visible.
            if !valid_inode_name(dir) {
                continue 'next_key;
            }

            let mut leaf = leaf_dir.borrow_mut();
            // Semantics decision: directories shadow files of the same name, so overwrite if it
            // exists but is a file.
            let should_create = leaf
                .get(*dir)
                .map(|node| matches!(node, RefNode::File(_)))
                .unwrap_or(true);
            if should_create {
                leaf.insert(dir.to_string(), RefNode::Directory(Default::default()));
            }

            let next_leaf_dir = leaf.get(*dir).unwrap().children().clone();
            drop(leaf);
            leaf_dir = next_leaf_dir;
        }

        // Semantics decision: these characters are invalid in file names, so they should not be
        // visible, but the directories they're in will still be present.
        let file_name = components.iter().last().unwrap();
        let should_create = leaf_dir
            .borrow()
            .get(*file_name)
            .map(|node| matches!(node, RefNode::File(_)))
            .unwrap_or(true);
        if valid_inode_name(file_name) && should_create {
            leaf_dir
                .borrow_mut()
                .insert(file_name.to_string(), RefNode::File(Box::new(file.clone())));
        }
    }

    fn convert(
        node: BTreeMap<String, RefNode>,
        path: impl AsRef<Path>,
        directories: &mut Vec<PathBuf>,
    ) -> BTreeMap<String, Node> {
        let mut out = BTreeMap::new();
        for (key, node) in node {
            let node = match node {
                RefNode::Directory(contents) => {
                    let path = path.as_ref().join(&key);
                    directories.push(path.clone());
                    let converted = convert(contents.take(), &path, directories);
                    Node::Directory {
                        children: converted,
                        is_local: false,
                    }
                }
                RefNode::File(contents) => Node::File(File::Remote(contents)),
            };
            out.insert(key, node);
        }
        out
    }

    let mut directories = vec!["/".into()];
    let root = convert(tree.take(), "/", &mut directories);
    MaterializedReference {
        root: Node::Directory {
            children: root,
            is_local: false,
        },
        directories,
    }
}

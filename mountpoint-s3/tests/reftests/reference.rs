use mountpoint_s3_client::mock_client::MockObject;
use std::cell::RefCell;
use std::collections::BTreeMap;
use std::path::{Component, Path, PathBuf};
use std::rc::Rc;
use tracing::trace;

#[derive(Debug)]
pub enum File {
    Local,
    Remote(MockObject),
}

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

/// The expected state of a file system. We track three pieces of state: the keys in an S3 bucket,
/// plus lists of local files and local directories. Whenever we need the tree structure of the
/// file system, we construct it from these inputs as a [MaterializedReference]. Building the
/// reference in this indirect way allows us to have only one definition of correctness -- the
/// implementation of [build_reference] -- and to test both mutations to the file system itself and
/// "remote" mutations to the bucket (like adding or deleting a key using another client).
#[derive(Debug)]
pub struct Reference {
    /// Contents of our S3 bucket
    remote_keys: Vec<(String, MockObject)>,
    /// Local files
    local_files: Vec<PathBuf>,
    /// Local directories
    local_directories: Vec<PathBuf>,
    /// Materialized state
    materialized: MaterializedReference,
}

#[derive(Debug)]
struct MaterializedReference {
    root: Node,
    directories: Vec<PathBuf>,
}

impl MaterializedReference {
    /// Add a new node to the tree. Any missing intermediate directories will be created as local
    /// directories. If the path already exists it will be overwritten, unless both the existing
    /// and new nodes are directories.
    fn add_local_node(&mut self, path: impl AsRef<Path>, typ: NodeType) {
        let mut components = path.as_ref().components().peekable();
        assert_eq!(components.next(), Some(Component::RootDir));

        let mut parent_node = &mut self.root;
        while let Some(dir) = components.next() {
            let Node::Directory { children, .. } = parent_node else {
                panic!("unexpected internal file node");
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
                parent_node = children.entry(dir.to_owned()).or_insert_with(|| Node::Directory {
                    children: BTreeMap::new(),
                    is_local: true,
                })
            }
        }
    }
}

impl Reference {
    pub fn new(remote_keys: Vec<(String, MockObject)>) -> Self {
        let local_files = vec![];
        let local_directories = vec![];
        let materialized = build_reference(&remote_keys);
        Self {
            remote_keys,
            local_files,
            local_directories,
            materialized,
        }
    }

    fn rematerialize(&self) -> MaterializedReference {
        trace!(
            remote_keys=?self.remote_keys, local_files=?self.local_files, local_directories=?self.local_directories,
            "rematerialize",
        );
        let mut materialized = build_reference(&self.remote_keys);
        for local_dir in self.local_directories.iter() {
            materialized.add_local_node(local_dir, NodeType::Directory);
            materialized.directories.push(local_dir.clone());
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

    #[allow(unused)] // TODO: use to test `mkdir`
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

    #[allow(unused)] // TODO: use to test `rmdir`
    pub fn remove_local_directory(&mut self, path: impl AsRef<Path>) {
        let idx = self
            .local_directories
            .iter()
            .position(|p| p == path.as_ref())
            .expect("local file must exist");
        self.local_directories.remove(idx);
        self.materialized = self.rematerialize();
    }

    pub fn add_remote_key(&mut self, key: String, object: MockObject) {
        self.remote_keys.push((key, object));
        self.materialized = self.rematerialize();
    }

    #[allow(unused)] // TODO: use to test remote keys disappearing
    pub fn remove_remote_key(&mut self, key: &str) {
        let idx = self
            .remote_keys
            .iter()
            .position(|(k, _)| k == key)
            .expect("remote key must exist");
        self.remote_keys.remove(idx);
        self.materialized = self.rematerialize();
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
}

pub fn valid_inode_name(name: &str) -> bool {
    !name.is_empty() && name != "." && name != ".." && !name.contains('\0')
}

/// Take an S3 namespace (list of keys) and create the expected reference file system tree. This is
/// where all our semantics decisions about how to present a flat keyspace as a file system are
/// made; we'll be testing the connector against the decisions made here.
fn build_reference(flat: &[(String, MockObject)]) -> MaterializedReference {
    #[derive(Debug)]
    enum RefNode {
        Directory(Rc<RefCell<BTreeMap<String, RefNode>>>),
        File(MockObject),
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
                .insert(file_name.to_string(), RefNode::File(file.clone()));
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

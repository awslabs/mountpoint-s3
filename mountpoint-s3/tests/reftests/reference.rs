use fuser::FileType;
use mountpoint_s3_client::mock_client::MockObject;
use std::cell::RefCell;
use std::collections::BTreeMap;
use std::path::{Component, Path, PathBuf};
use std::rc::Rc;

use crate::reftests::generators::{FileContent, FileSize};

#[derive(Debug)]
pub enum File {
    #[allow(unused)] // TODO when we test partially written files
    Local(Vec<u8>),
    Remote(MockObject),
}

#[derive(Debug)]
pub enum Node {
    // TODO Also support hybrid nodes?
    Directory(BTreeMap<String, Node>),
    File(File),
}

impl Node {
    pub fn file_type(&self) -> FileType {
        match self {
            Node::Directory(_) => FileType::Directory,
            Node::File(_) => FileType::RegularFile,
        }
    }

    // Returns the children of a directory node (panics if node is a file)
    pub fn children(&self) -> &BTreeMap<String, Node> {
        match self {
            Self::Directory(map) => map,
            Self::File(_) => panic!("unexpected file"),
        }
    }

    pub fn depth(&self) -> usize {
        if let Node::Directory(map) = self {
            let mut depth = 0usize;
            for child in map.values() {
                depth = depth.max(1 + child.depth());
            }
            depth
        } else {
            0
        }
    }
}

#[derive(Debug)]
pub struct Reference {
    root: Node,
    /// Full path of all directories
    directories: Vec<PathBuf>,
    /// Full path of all inflight writes
    #[allow(unused)] // TODO when we test partially written files
    inflight_writes: Vec<PathBuf>,
}

impl Reference {
    pub fn new() -> Self {
        let root = Node::Directory(BTreeMap::new());
        Self {
            root,
            directories: vec!["/".into()],
            inflight_writes: vec![],
        }
    }

    pub fn root(&self) -> &Node {
        &self.root
    }

    /// Return a list of all inodes in the entire tree. Each file is a Vec<String> of path
    /// components and the node it references.
    pub fn list_recursive(&self) -> Vec<(Vec<&str>, &Node)> {
        fn aux<'a>(node: &'a Node, path: Vec<&'a str>, ret: &mut Vec<(Vec<&'a str>, &'a Node)>) {
            match node {
                Node::File(_) => ret.push((path, node)),
                Node::Directory(children) => {
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
        aux(&self.root, vec![], &mut ret);
        ret
    }

    pub fn depth(&self) -> usize {
        self.root.depth()
    }

    // Add file to the reference, creating internal nodes as necessary
    pub fn add_file(&mut self, path: impl AsRef<Path>, file: &FileContent) {
        let mut components = path.as_ref().components().peekable();
        assert_eq!(components.next(), Some(Component::RootDir));

        let mut node = &mut self.root;
        while let Some(dir) = components.next() {
            node = match node {
                Node::Directory(children) => {
                    let dir = dir.as_os_str().to_str().unwrap().to_string();
                    if children.get(&dir).is_none() {
                        let data = if components.peek().is_none() {
                            Node::File(File::Remote(file.to_mock_object()))
                        } else {
                            Node::Directory(BTreeMap::new())
                        };
                        children.insert(dir.clone(), data);
                    }
                    children.get_mut(&dir).unwrap()
                }
                _ => panic!("unexpected internal file node"),
            };
        }
    }

    /// Get a node from a full path, if it exists. If any path component does not exist in the
    /// reference, returns None.
    pub fn lookup(&self, path: impl AsRef<Path>) -> Option<&Node> {
        let mut components = path.as_ref().components();
        assert_eq!(components.next(), Some(Component::RootDir));

        let mut node = &self.root;
        for component in components {
            node = match node {
                Node::Directory(children) => {
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
        &self.directories
    }
}

fn valid_inode_name(name: &str) -> bool {
    !name.is_empty() && name != "." && name != ".." && !name.contains('\0')
}

/// Take an S3 namespace (list of keys) and create the expected reference file system tree. This is
/// where all our semantics decisions about how to present a flat keyspace as a file system are
/// made; we'll be testing the connector against the decisions made here.
pub fn build_reference(flat: Vec<(String, FileContent)>) -> Reference {
    #[derive(Debug)]
    enum RefNode {
        Directory(Rc<RefCell<BTreeMap<String, RefNode>>>),
        File(FileContent),
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
            leaf_dir.borrow_mut().insert(file_name.to_string(), RefNode::File(file));
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
                    Node::Directory(converted)
                }
                RefNode::File(contents) => Node::File(File::Remote(contents.to_mock_object())),
            };
            out.insert(key, node);
        }
        out
    }

    let mut directories = vec!["/".into()];
    let root = convert(tree.take(), "", &mut directories);
    Reference {
        root: Node::Directory(root),
        directories,
        inflight_writes: vec![],
    }
}

#[test]
fn depth_test() {
    let mut r = Reference::new();

    assert_eq!(r.depth(), 0);

    r.add_file("/a/b/c1", &FileContent(0xaa, FileSize::Small(0)));
    r.add_file("/a/b/c2", &FileContent(0xbb, FileSize::Small(0)));
    assert_eq!(r.depth(), 3);
}

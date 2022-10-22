use fuser::FileType;
use s3_client::mock_client::MockObject;
use std::cell::RefCell;
use std::collections::BTreeMap;
use std::path::{Component, Path};
use std::rc::Rc;

use crate::reftests::gen_tree::Content;

#[derive(Debug)]
pub enum Node {
    // TODO Also support hybrid nodes?
    Directory(BTreeMap<String, Node>),
    File(MockObject),
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
}

#[derive(Debug)]
pub struct Reference {
    root: Node,
}

impl Reference {
    pub fn new() -> Self {
        let root = Node::Directory(BTreeMap::new());
        Self { root }
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

    fn depth_recursive(&self, node: &Node) -> usize {
        if let Node::Directory(map) = node {
            let mut depth = 0usize;
            for child in map.values() {
                depth = depth.max(1 + self.depth_recursive(child));
            }
            depth
        } else {
            0
        }
    }

    pub fn depth(&self) -> usize {
        self.depth_recursive(&self.root)
    }

    // Add file to the reference, creating internal nodes as necessary
    pub fn add_file(&mut self, path: &str, pattern: u8, length: usize) {
        let path = Path::new(path);

        let mut components = path.components().peekable();
        assert_eq!(components.next(), Some(Component::RootDir));

        let mut node = &mut self.root;
        while let Some(dir) = components.next() {
            node = match node {
                Node::Directory(children) => {
                    let dir = dir.as_os_str().to_str().unwrap().to_string();
                    if children.get(&dir).is_none() {
                        let data = if components.peek().is_none() {
                            Node::File(MockObject::constant(pattern, length))
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
}

fn valid_inode_name(name: &str) -> bool {
    !name.is_empty() && name != "." && name != ".." && !name.contains('\0')
}

/// Take an S3 namespace (list of keys) and create the expected reference file system tree. This is
/// where all our semantics decisions about how to present a flat keyspace as a file system are
/// made; we'll be testing the connector against the decisions made here.
pub fn build_reference(flat: Vec<(String, Content)>) -> Reference {
    #[derive(Debug)]
    enum RefNode {
        Directory(Rc<RefCell<BTreeMap<String, RefNode>>>),
        File(Content),
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

    fn convert(node: BTreeMap<String, RefNode>) -> BTreeMap<String, Node> {
        let mut out = BTreeMap::new();
        for (key, node) in node {
            let node = match node {
                RefNode::Directory(contents) => {
                    let converted = convert(contents.take());
                    Node::Directory(converted)
                }
                RefNode::File(contents) => Node::File(contents.to_mock_object()),
            };
            out.insert(key, node);
        }
        out
    }

    let root = convert(tree.take());
    Reference {
        root: Node::Directory(root),
    }
}

#[test]
fn depth_test() {
    let mut r = Reference::new();

    assert_eq!(r.depth(), 0);

    r.add_file("/a/b/c1", 0, 0);
    r.add_file("/a/b/c2", 0, 0);
    assert_eq!(r.depth(), 3);
}

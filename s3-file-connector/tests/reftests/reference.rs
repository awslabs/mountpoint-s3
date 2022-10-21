use fuser::FileType;
use s3_client::mock_client::MockObject;
use std::collections::HashMap;
use std::path::{Component, Path};

#[derive(Debug)]
pub enum Node {
    // TODO Also support hybrid nodes?
    Directory(HashMap<String, Node>),
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
    pub fn children(&self) -> &HashMap<String, Node> {
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
        let root = Node::Directory(HashMap::new());
        Self { root }
    }

    pub fn root(&self) -> &Node {
        &self.root
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
                            Node::Directory(HashMap::new())
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

#[test]
fn depth_test() {
    let mut r = Reference::new();

    assert_eq!(r.depth(), 0);

    r.add_file("/a/b/c1", 0, 0);
    r.add_file("/a/b/c2", 0, 0);
    assert_eq!(r.depth(), 3);
}

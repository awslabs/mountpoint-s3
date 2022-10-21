use crate::reftests::harness::Harness;
use proptest::prelude::*;
use proptest_derive::Arbitrary;
use std::collections::HashMap;

// Generate names with special characters '-' (ASCII 0x2d) and 'a' (ASCII 0x61)
// which come before and after '/' (ASCII 0x2f)
#[derive(Clone, Debug, Arbitrary, PartialEq, Eq, Hash)]
pub struct Name(#[proptest(strategy = "\"[a-]{1,3}\"")] String);

#[derive(Clone, Debug, Arbitrary)]
pub enum FileSize {
    Small(u8),
    Large(#[proptest(strategy = "128*1024..2*1024*1024usize")] usize),
}

impl From<&FileSize> for usize {
    fn from(f: &FileSize) -> usize {
        match f {
            FileSize::Small(n) => *n as usize,
            FileSize::Large(n) => *n as usize,
        }
    }
}

#[derive(Clone, Debug, Arbitrary)]
pub struct Content(pub u8, pub FileSize);

#[derive(Clone, Debug)]
pub enum TreeNode {
    File(Content),
    Directory(HashMap<Name, TreeNode>),
}

pub fn gen_tree(depth: u32, max_size: u32, max_items: u32, max_width: usize) -> impl Strategy<Value = TreeNode> {
    let leaf = prop_oneof![any::<Content>().prop_map(TreeNode::File),];
    leaf.prop_recursive(
        depth,     // levels
        max_size,  // max number of nodes
        max_items, // number of items per collection
        move |inner| {
            prop_oneof![
                // Take the inner strategy and make the recursive cases.
                prop::collection::hash_map(any::<Name>(), inner, 0..max_width).prop_map(TreeNode::Directory),
            ]
        },
    )
}

impl Harness {
    pub fn populate_from_tree(&mut self, path: String, node: &TreeNode) {
        match node {
            TreeNode::File(content) => self.add_file(&path, content.0, usize::from(&content.1)),
            TreeNode::Directory(children) => {
                for (name, node) in children {
                    let path = if path.is_empty() {
                        name.0.clone()
                    } else {
                        format!("{}/{}", path, name.0.clone())
                    };
                    self.populate_from_tree(path, node);
                }
            }
        }
    }
}

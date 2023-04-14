use mountpoint_s3_client::mock_client::MockObject;
use mountpoint_s3_client::ETag;
use proptest::prelude::*;
use proptest::string::string_regex;
use proptest_derive::Arbitrary;
use std::collections::BTreeMap;

fn name_strategy() -> impl Strategy<Value = String> {
    prop_oneof![
        // Valid keys
        5 => string_regex("[a-]{1,3}").unwrap(),
        // Potentially invalid keys
        1 => string_regex("[a\\-\\./\0]{1,3}").unwrap(),
    ]
}

#[derive(Clone, Debug, Arbitrary, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Name(#[proptest(strategy = "name_strategy()")] pub String);

#[derive(Clone, Copy, Debug, Arbitrary)]
pub enum FileSize {
    Small(u8),
    Large(#[proptest(strategy = "128*1024..2*1024*1024usize")] usize),
}

impl From<FileSize> for usize {
    fn from(f: FileSize) -> usize {
        match f {
            FileSize::Small(n) => n as usize,
            FileSize::Large(n) => n,
        }
    }
}

#[derive(Clone, Debug, Arbitrary)]
pub struct Content(pub u8, pub FileSize);

impl Content {
    pub fn to_mock_object(&self) -> MockObject {
        MockObject::constant(self.0, self.1.into(), ETag::for_tests())
    }
}

#[derive(Clone, Debug)]
pub enum TreeNode {
    File(Content),
    Directory(BTreeMap<Name, TreeNode>),
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
                prop::collection::btree_map(any::<Name>(), inner, 0..max_width).prop_map(TreeNode::Directory),
            ]
        },
    )
}

/// Take a generated tree and create the corresponding S3 namespace (list of keys)
pub fn flatten_tree(node: TreeNode) -> Vec<(String, Content)> {
    fn aux(node: TreeNode, path: String, acc: &mut Vec<(String, Content)>) {
        match node {
            TreeNode::File(content) => {
                acc.push((path, content));
            }
            TreeNode::Directory(contents) => {
                for (name, child) in contents {
                    let path = if path.is_empty() {
                        name.0
                    } else {
                        format!("{}/{}", path, name.0)
                    };
                    aux(child, path, acc);
                }
            }
        }
    }
    let mut ret = vec![];
    aux(node, String::new(), &mut ret);
    ret
}

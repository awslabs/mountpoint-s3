use mountpoint_s3_client::mock_client::MockObject;
use mountpoint_s3_client::ETag;
use proptest::prelude::*;
use proptest::string::string_regex;
use proptest_derive::Arbitrary;
use std::collections::{BTreeMap, HashSet};
use std::fmt::Debug;
use std::ops::Deref;

use crate::reftests::reference::valid_inode_name;

pub fn valid_name_strategy() -> impl Strategy<Value = String> {
    string_regex("[a-]{1,3}").unwrap()
}

pub fn name_strategy() -> impl Strategy<Value = String> {
    prop_oneof![
        // Valid names
        5 => valid_name_strategy(),
        // Potentially invalid names
        1 => string_regex("[a\\-/.\u{1}]{1,3}").unwrap(),
    ]
}

#[derive(Clone, Debug, Arbitrary, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Name(#[proptest(strategy = "name_strategy()")] pub String);

impl Deref for Name {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl From<&str> for Name {
    fn from(value: &str) -> Self {
        Self(value.to_owned())
    }
}

#[derive(Clone, Debug, Arbitrary, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ValidName(#[proptest(strategy = "valid_name_strategy()")] pub String);

impl Deref for ValidName {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl From<&str> for ValidName {
    fn from(value: &str) -> Self {
        assert!(valid_inode_name(value), "invalid name for ValidName");
        Self(value.to_owned())
    }
}

#[derive(Clone, Copy, Arbitrary)]
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

impl Debug for FileSize {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Small(size) => write!(f, "FileSize::Small({size})"),
            Self::Large(size) => write!(f, "FileSize::Large({size})"),
        }
    }
}

#[derive(Clone, Debug, Arbitrary)]
pub struct FileContent(pub u8, pub FileSize);

impl FileContent {
    pub fn to_mock_object(&self) -> MockObject {
        MockObject::constant(self.0, self.1.into(), ETag::for_tests())
    }
}

#[derive(Clone)]
pub enum TreeNode {
    File(FileContent),
    Directory(BTreeMap<Name, TreeNode>),
}

// A custom Debug implementation that makes it easier to copy and paste failing test cases from
// proptest's output.
impl Debug for TreeNode {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::File(content) => {
                write!(f, "TreeNode::File({:?})", content)
            }
            Self::Directory(contents) => {
                write!(f, "TreeNode::Directory(BTreeMap::from([")?;
                for (name, node) in contents.iter() {
                    write!(f, "({:?}.into(), {:?}), ", name.0, node)?;
                }
                write!(f, "]))")
            }
        }
    }
}

pub fn gen_tree(depth: u32, max_size: u32, max_items: u32, max_width: usize) -> impl Strategy<Value = TreeNode> {
    let leaf = prop_oneof![any::<FileContent>().prop_map(TreeNode::File),];
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
pub fn flatten_tree(node: TreeNode) -> Vec<(String, MockObject)> {
    fn aux(node: TreeNode, path: String, acc: &mut Vec<(String, MockObject)>) {
        match node {
            TreeNode::File(content) => {
                // Don't create an empty key if a [TreeNode::File] is the root of the tree
                if !path.is_empty() {
                    acc.push((path, content.to_mock_object()));
                }
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
    let mut contents = vec![];
    aux(node, String::new(), &mut contents);
    // We allow names in the tree to contain `/`, which can cause duplicate keys
    let mut keys = HashSet::new();
    contents.retain(|(key, _)| keys.insert(key.clone()));
    contents
}

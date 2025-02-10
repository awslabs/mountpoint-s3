//! Provides [Strategy]s for [proptest]. Strategies are ways that [proptest] can generate values for tests from primitive types.

use mountpoint_s3_client::mock_client::MockObject;
use mountpoint_s3_client::types::ETag;
use proptest::prelude::*;
use proptest::string::string_regex;
use proptest_derive::Arbitrary;
use std::collections::{BTreeMap, HashSet};
use std::fmt::Debug;
use std::ops::Deref;

use crate::reftests::reference::valid_inode_name;

/// [Strategy] for providing valid POSIX path names.
///
/// We intentionally limit to a small input space to avoid testing less useful inputs.
pub fn valid_name_strategy() -> impl Strategy<Value = String> {
    // Literally the character `a` and `-` between 1 and 3 times.
    string_regex("[a-]{1,3}").unwrap()
}

/// [Strategy] providing strings which may or may not be valid POSIX path names.
///
/// We intentionally limit to a small input space to avoid testing less useful inputs.
/// We also give more weight to the generation of valid names.
pub fn name_strategy() -> impl Strategy<Value = String> {
    prop_oneof![
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

/// Split file size into two groups.
///
/// This allows [proptest] to generate a set of values for each group,
/// and we can apply a weight to each group (which is equal by default).
/// It is in our interest to balance focus between smaller file sizes where we may hit more edge cases,
/// but also cover some much larger file sizes.
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

/// Represents some file content for property-based testing.
///
/// The second value is the length of the file content,
/// while the first is the byte that will be repeated to generate the content.
#[derive(Clone, Debug, Arbitrary)]
pub struct FileContent(pub u8, pub FileSize);

impl FileContent {
    pub fn to_mock_object(&self) -> MockObject {
        MockObject::constant(self.0, self.1.into(), ETag::for_tests())
    }
}

/// Represents a file system tree.
///
/// The root should always be the [TreeNode::Directory] variant.
#[derive(Clone)]
pub enum TreeNode {
    /// File node in a tree.
    ///
    /// A file node must never be at the root of the tree, and is given a name by its parent (a [TreeNode::Directory]).
    File(FileContent),
    /// Directory node in the tree.
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

/// Generates a tree of directories and files.
///
/// Leaves are always [TreeNode::File] or an empty [TreeNode::Directory].
/// Parents are always [TreeNode::Directory].
pub fn gen_tree(depth: u32, max_size: u32, max_items: u32, max_width: usize) -> impl Strategy<Value = TreeNode> {
    let leaf = any::<FileContent>().prop_map(TreeNode::File);
    leaf.prop_recursive(
        depth,     // levels
        max_size,  // max number of nodes
        max_items, // number of items per collection
        move |inner| {
            // Take the inner strategy and make the recursive cases.
            // Since the size of the tree could be zero, this also introduces directories as leaves.
            prop::collection::btree_map(any::<Name>(), inner, 0..max_width).prop_map(TreeNode::Directory)
        },
    )
    // Ensure the root is always a directory by transforming invalid nodes (i.e. file as root) into empty directories
    .prop_map(|x| match x {
        TreeNode::File(_) => TreeNode::Directory(BTreeMap::from([])),
        _ => x,
    })
}

/// Take a generated tree and create the corresponding S3 namespace (list of keys)
pub fn flatten_tree(node: TreeNode) -> Vec<(String, MockObject)> {
    fn aux(node: TreeNode, path: String, acc: &mut Vec<(String, MockObject)>) {
        match node {
            TreeNode::File(content) => {
                assert!(!path.is_empty(), "file node should never be created at root");
                acc.push((path, content.to_mock_object()));
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

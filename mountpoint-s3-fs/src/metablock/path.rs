use std::ops::Deref;
use std::{ffi::OsStr, fmt::Display};

use thiserror::Error;

use crate::s3::{Prefix, S3Path};
use crate::sync::Arc;

use super::{InodeError, InodeKind};

/// Key associated with an Inode that can be lookedup.
///
/// May not include the [Prefix](super::Prefix). Guaranteed to end in '/' for directories.
#[derive(Debug, Clone, Eq, PartialEq)]
pub struct ValidKey {
    key: Box<str>,
    name_offset: usize,
}

#[derive(Debug, Error, Eq, PartialEq)]
pub enum ValidKeyError {
    #[error("not a directory key")]
    NotADirectory,
    #[error("invalid key {0:?}")]
    InvalidKey(String),
}

impl ValidKey {
    /// Create the root key.
    pub fn root() -> Self {
        Self {
            key: Default::default(),
            name_offset: 0,
        }
    }

    /// Create a new child key.
    pub fn new_child(&self, name: ValidName, kind: InodeKind) -> Result<Self, ValidKeyError> {
        let InodeKind::Directory = self.kind() else {
            return Err(ValidKeyError::NotADirectory);
        };

        let name_offset = self.key.len();
        // Allocate the new string with the correct capacity.
        let mut key =
            String::with_capacity(name_offset + name.len() + if kind == InodeKind::Directory { 1 } else { 0 });
        key.push_str(&self.key);
        key.push_str(&name);
        if kind == InodeKind::Directory {
            key.push('/');
        }

        // No re-allocation required.
        debug_assert_eq!(key.len(), key.capacity());
        let key = key.into_boxed_str();
        Ok(Self { name_offset, key })
    }

    // Create a new key including a [Prefix].
    pub fn full_key(&self, prefix: &Prefix) -> Self {
        let prefix = prefix.as_str();
        let name_offset = self.name_offset + prefix.len();
        let mut full_key = String::with_capacity(prefix.len() + self.key.len());
        full_key.push_str(prefix);
        full_key.push_str(&self.key);
        Self {
            key: full_key.into_boxed_str(),
            name_offset,
        }
    }

    /// The name for this key, i.e. the last path component.
    ///
    /// For directories, the name does not include the terminal '/'.
    pub fn name(&self) -> &str {
        let len = self.key.len();
        if len == 0 {
            return "";
        }
        if self.key.as_bytes()[len - 1] == b'/' {
            &self.key[self.name_offset..(len - 1)]
        } else {
            &self.key[self.name_offset..]
        }
    }

    /// The name for this key, i.e. the last path component.
    ///
    /// This returns a [ValidName] or [None] if name is empty.
    pub fn valid_name(&self) -> Option<ValidName<'_>> {
        let name = self.name();
        if name.is_empty() { None } else { Some(ValidName(name)) }
    }

    /// The kind of [Inode](super::Inode) associated with this key.
    pub fn kind(&self) -> InodeKind {
        match self.key.as_bytes().last() {
            None | Some(b'/') => InodeKind::Directory,
            _ => InodeKind::File,
        }
    }

    /// Path components for this key.
    ///
    /// For directories, this does not include empty component after the terminal '/'.
    pub fn components(&self) -> Vec<ValidName<'_>> {
        if self.key.is_empty() {
            Default::default()
        } else {
            self.key.split_terminator('/').map(ValidName).collect()
        }
    }
}

impl Deref for ValidKey {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        &self.key
    }
}

impl AsRef<str> for ValidKey {
    fn as_ref(&self) -> &str {
        &self.key
    }
}

impl Display for ValidKey {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str(&self.key)
    }
}

impl From<ValidKey> for String {
    fn from(value: ValidKey) -> Self {
        value.key.into_string()
    }
}

impl TryFrom<String> for ValidKey {
    type Error = ValidKeyError;

    /// Constructs a valid key performing checks.
    fn try_from(full_key: String) -> Result<Self, Self::Error> {
        // validate
        let mut last_component = None;
        for component in full_key.split_terminator('/') {
            if ValidName::parse_str(component).is_err() {
                return Err(ValidKeyError::InvalidKey(full_key.to_string()));
            }
            last_component = Some(component);
        }

        // extract name
        let is_dir = full_key.ends_with('/');
        let name_len = last_component.map_or(0, |name| if is_dir { name.len() + 1 } else { name.len() });
        let name_offset = full_key.len() - name_len;

        Ok(Self {
            key: full_key.into(),
            name_offset,
        })
    }
}

/// Describes a location of a file or directory in S3
#[derive(Debug, Clone)]
pub struct S3Location {
    pub path: Arc<S3Path>,
    pub version: Option<String>,
    pub partial_key: ValidKey,
}

impl S3Location {
    pub fn new(path: Arc<S3Path>, partial_key: ValidKey) -> Self {
        Self::new_with_object_version(path, None, partial_key)
    }

    pub fn new_with_object_version(path: Arc<S3Path>, version: Option<String>, partial_key: ValidKey) -> Self {
        Self {
            path,
            version,
            partial_key,
        }
    }

    /// Get the bucket name
    pub fn bucket_name(&self) -> &str {
        &self.path.bucket
    }

    /// Get the full key
    pub fn full_key(&self) -> ValidKey {
        self.partial_key.full_key(&self.path.prefix)
    }

    pub fn name(&self) -> &str {
        self.partial_key.name()
    }

    pub fn version(&self) -> Option<&str> {
        self.version.as_deref()
    }
}

impl Display for S3Location {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{}{} (bucket: {})",
            self.path.prefix, self.partial_key, self.path.bucket
        )
    }
}

/// A valid name for an [Inode](super::Inode).
#[derive(Debug, Clone, Copy)]
pub struct ValidName<'a>(&'a str);

impl<'a> ValidName<'a> {
    /// Parse a string into a [ValidName].
    pub fn parse_os_str(name: &'a OsStr) -> Result<Self, InodeError> {
        let name_str = name.to_str().ok_or_else(|| InodeError::InvalidFileName(name.into()))?;
        Self::parse_str(name_str)
    }

    /// Parse a string into a [ValidName].
    pub fn parse_str(name: &'a str) -> Result<Self, InodeError> {
        // Names cannot be empty
        if !name.is_empty() &&
            // "." and ".." are reserved names (presented by the filesystem layer)
            name != "." &&
            name != ".." &&
            // The delimiter / can never appear in a name
            !name.as_bytes().contains(&b'/') &&
            // NUL is invalid in POSIX names
            !name.as_bytes().contains(&b'\0')
        {
            Ok(Self(name))
        } else {
            Err(InodeError::InvalidFileName(name.into()))
        }
    }
}

impl<'a> TryFrom<&'a OsStr> for ValidName<'a> {
    type Error = InodeError;

    fn try_from(value: &'a OsStr) -> Result<Self, Self::Error> {
        Self::parse_os_str(value)
    }
}

impl<'a> TryFrom<&'a str> for ValidName<'a> {
    type Error = InodeError;

    fn try_from(value: &'a str) -> Result<Self, Self::Error> {
        Self::parse_str(value)
    }
}

impl Deref for ValidName<'_> {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        self.0
    }
}

impl AsRef<str> for ValidName<'_> {
    fn as_ref(&self) -> &str {
        self.0
    }
}

#[cfg(test)]
mod tests {
    use std::{ffi::OsString, os::unix::ffi::OsStrExt as _};

    use super::*;

    use proptest::prelude::*;
    use proptest_derive::Arbitrary;
    use test_case::test_case;

    fn test_key(components: Vec<Components>) {
        let mut key_str = OsString::new();
        let mut key = ValidKey::root();

        for component in components {
            if key.kind() == InodeKind::File {
                _ = key
                    .new_child(ValidName("test"), InodeKind::File)
                    .expect_err("appending to a file should fail");
                return;
            }

            assert!(valid_directory_key(key.as_ref()));

            let kind = if component.is_directory {
                InodeKind::Directory
            } else {
                InodeKind::File
            };

            let name = &component.name;
            if !valid_inode_name(name) {
                _ = ValidName::parse_os_str(name).expect_err("parsing an invalid name should fail");
                return;
            }

            let valid_name = ValidName::parse_os_str(name).expect("name should be valid");
            key = key
                .new_child(valid_name, kind)
                .expect("appending to a directory should succeed");

            assert_eq!(key.kind(), kind);
            assert_eq!(key.name(), name);

            key_str.push(name);
            if kind == InodeKind::Directory {
                key_str.push("/");
            }
        }

        assert_eq!(key_str, key.as_ref());
    }

    fn valid_directory_key(key: &str) -> bool {
        key.is_empty() || key.ends_with('/')
    }

    fn valid_inode_name<T: AsRef<OsStr>>(name: T) -> bool {
        let name = name.as_ref();
        // Names cannot be empty
        !name.is_empty() &&
        // "." and ".." are reserved names (presented by the filesystem layer)
        name != "." &&
        name != ".." &&
        // The delimiter / can never appear in a name
        !name.as_bytes().contains(&b'/') &&
        // NUL is invalid in POSIX names
        !name.as_bytes().contains(&b'\0')
    }

    #[derive(Debug, Arbitrary)]
    struct Components {
        name: OsString,
        is_directory: bool,
    }

    proptest! {
        #[test]
        fn proptest_valid_key(components: Vec<Components>) {
            test_key(components);
        }
    }

    #[test_case("dir1/a.txt", Ok(ValidKey{key: "dir1/a.txt".to_string().into(), name_offset: 5}); "file")]
    #[test_case("dir1/dir2/", Ok(ValidKey{key: "dir1/dir2/".to_string().into(), name_offset: 5}); "dir")]
    #[test_case("dir1/dir2", Ok(ValidKey{key: "dir1/dir2".to_string().into(), name_offset: 5}); "another file")]
    #[test_case("", Ok(ValidKey{key: "".to_string().into(), name_offset: 0}); "empty")]
    #[test_case("a", Ok(ValidKey{key: "a".to_string().into(), name_offset: 0}); "one char")]
    #[test_case("dir1/dir2/dir3/a.txt", Ok(ValidKey{key: "dir1/dir2/dir3/a.txt".to_string().into(), name_offset: 15}); "many components")]
    #[test_case("/", Err(ValidKeyError::InvalidKey("/".to_string())); "just /")]
    #[test_case("dir1//a.txt", Err(ValidKeyError::InvalidKey("dir1//a.txt".to_string())); "empty component")]
    #[test_case("dir1/../a.txt", Err(ValidKeyError::InvalidKey("dir1/../a.txt".to_string())); "invalid component")]
    fn test_valid_key_try_from(source: &str, result: Result<ValidKey, ValidKeyError>) {
        assert_eq!(ValidKey::try_from(source.to_string()), result);
    }

    #[test_case("", &[]; "empty key")]
    #[test_case("file.txt", &["file.txt"]; "file key with single component")]
    #[test_case("dir/", &["dir"]; "directory key with single component")]
    #[test_case("dir1/dir2/file.txt", &["dir1", "dir2", "file.txt"]; "file key with multiple components")]
    #[test_case("dir1/dir2/dir3/", &["dir1", "dir2", "dir3"]; "directory key with multiple components")]
    fn test_valid_key_components(source: &str, expected_components: &[&str]) {
        let key = ValidKey::try_from(source.to_string()).unwrap();
        let components = key.components();

        assert_eq!(components.len(), expected_components.len());
        for (i, expected) in expected_components.iter().enumerate() {
            assert_eq!(components[i].as_ref(), *expected);
        }
    }
}

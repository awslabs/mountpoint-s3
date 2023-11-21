use std::path::Path;

use fuser::BackgroundSession;
use tempfile::TempDir;
use walkdir::WalkDir;

use crate::common::fuse::{self, TestClientBox, TestSessionConfig};

/// Recursively list the contents of a directory and return the paths of all entries, with the
/// initial `path` stripped. If `files` is true, the list contains only files; if false, it contains
/// only directories.
fn list_dir_recursive(path: impl AsRef<Path>, files: bool) -> Result<Vec<String>, walkdir::Error> {
    let path_prefix = format!("{}/", path.as_ref().to_string_lossy());
    let contents_iter = WalkDir::new(path)
        .sort_by_file_name()
        .into_iter()
        .collect::<Result<Vec<_>, _>>()?;
    let contents_filtered = contents_iter.iter().filter(|d| {
        if files {
            d.file_type().is_file()
        } else {
            d.file_type().is_dir()
        }
    });
    // flat_map to drop the root directory itself, which won't have the / at the end that
    // path_prefix contains
    let entries = contents_filtered
        .flat_map(|d| {
            d.path()
                .to_string_lossy()
                .strip_prefix(&path_prefix)
                .map(|p| p.to_owned())
        })
        .collect::<Vec<_>>();
    Ok(entries)
}

/// Mountpoint for Amazon S3 interprets keys in your S3 bucket as file system paths by splitting
/// them on the `/` character. For example, if your bucket contains the following object keys:
///
/// * `colors/blue/image.jpg`
/// * `colors/red/image.jpg`
/// * `colors/list.txt`
///
/// then mounting your bucket would give the following file system structure:
///
/// * `colors` (directory)
///     * `blue` (directory)
///         * `image.jpg` (file)
///     * `red` (directory)
///         * `image.jpg` (file)
///     * `list.txt` (file)
fn basic_directory_structure<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn("basic_directory_structure", Default::default());

    test_client.put_object("colors/blue/image.jpg", b"hello world").unwrap();
    test_client.put_object("colors/red/image.jpg", b"hello world").unwrap();
    test_client.put_object("colors/list.txt", b"hello world").unwrap();

    let files = list_dir_recursive(mount_point.path(), true).unwrap();
    assert_eq!(
        &files[..],
        &["colors/blue/image.jpg", "colors/list.txt", "colors/red/image.jpg"]
    );

    let dirs = list_dir_recursive(mount_point.path(), false).unwrap();
    assert_eq!(&dirs[..], &["colors", "colors/blue", "colors/red"]);
}

#[test]
fn basic_directory_structure_mock() {
    basic_directory_structure(fuse::mock_session::new);
}

#[cfg(feature = "s3_tests")]
#[test]
fn basic_directory_structure_s3() {
    basic_directory_structure(fuse::s3_session::new);
}

/// Object keys that end in the path delimiter (`/`) will not be accessible. Instead, a directory of
/// the same name will be visible. For example, if your bucket has the following object keys:
///
/// * `blue/`
/// * `blue/image.jpg`
/// * `red/`
///   
/// then mounting your bucket would give a file system with a `blue` directory containing an
/// `image.jpg` file, and an empty `red` directory. The `blue/` and `red/` objects will not be
/// accessible. Note that the S3 Console creates zero-byte objects like `blue/` and `red/` when
/// creating directories in a bucket, and so these directories will work as expected.
fn keys_ending_in_delimiter<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn("keys_ending_in_delimiter", Default::default());

    test_client.put_object("blue/", b"hello world").unwrap();
    test_client.put_object("blue/image.jpg", b"hello world").unwrap();
    test_client.put_object("red/", b"hello world").unwrap();

    let files = list_dir_recursive(mount_point.path(), true).unwrap();
    assert_eq!(&files[..], &["blue/image.jpg"]);

    let dirs = list_dir_recursive(mount_point.path(), false).unwrap();
    assert_eq!(&dirs[..], &["blue", "red"]);
}

#[test]
fn keys_ending_in_delimiter_mock() {
    keys_ending_in_delimiter(fuse::mock_session::new);
}

#[cfg(feature = "s3_tests")]
#[test]
fn keys_ending_in_delimiter_s3() {
    keys_ending_in_delimiter(fuse::s3_session::new);
}

/// Files will be shadowed by directories with the same name. For example, if your bucket has the
/// following object keys:
///
/// * `blue`
/// * `blue/image.jpg`
///   
/// then mounting your bucket would give a file system with a `blue` directory, containing the file
/// `image.jpg`. The `blue` object will not be accessible. Deleting the key `blue/image.jpg` will
/// remove the `blue` directory, and cause the `blue` file to become visible.
fn files_shadowed_by_directories<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn("files_shadowed_by_directories", Default::default());

    test_client.put_object("blue", b"hello world").unwrap();
    test_client.put_object("blue/image.jpg", b"hello world").unwrap();

    let files = list_dir_recursive(mount_point.path(), true).unwrap();
    assert_eq!(&files[..], &["blue/image.jpg"]);

    let dirs = list_dir_recursive(mount_point.path(), false).unwrap();
    assert_eq!(&dirs[..], &["blue"]);
}

#[test]
fn files_shadowed_by_directories_mock() {
    files_shadowed_by_directories(fuse::mock_session::new);
}

#[cfg(feature = "s3_tests")]
#[test]
fn files_shadowed_by_directories_s3() {
    files_shadowed_by_directories(fuse::s3_session::new);
}

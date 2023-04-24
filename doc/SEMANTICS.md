# Mountpoint for Amazon S3 file system semantics

Mountpoint for Amazon S3 is optimized for workloads that need high-throughput read and write access to data stored in S3 through a file system interface, but otherwise do not rely on file system features. It intentionally does not implement the full POSIX specification for file systems. As an approximation, Mountpoint for Amazon S3 is much closer to a [HDFS](https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html) distributed file system, focused on high-performance access to large data sets, than to NFS or other file systems that offer rich POSIX semantics. Customers that need richer file system semantics should consider other AWS file services such as [Amazon Elastic File System](https://aws.amazon.com/efs/) or [Amazon FSx](https://aws.amazon.com/fsx/).

## Semantics tenets

When thinking about the semantics Mountpoint for Amazon S3 will support, we have three tenets in mind:
1. We will not support semantics that cannot be implemented efficiently against S3's object APIs. We do not try to emulate operations like `rename` that would require many API calls to S3 to perform.
2. We present a common view of S3 object data through both file and object APIs. We eschew special emulations of POSIX file features (such as ownership and permissions) that have no close analog in S3's object APIs.
3. When these tenets cause us to diverge from POSIX semantics, we prefer to fail early and explicitly. We would rather cause applications to fail with IO errors than silently accept operations like `setxattr` that we will never successfully persist.

## Mapping S3 object keys to files and directories

Mountpoint for Amazon S3 interprets keys in your S3 bucket as file system paths by splitting them on the `/` character. For example, if your bucket contains the following object keys:

* `colors/blue/image.jpg`
* `colors/red/image.jpg`
* `colors/list.txt`

then mounting your bucket would give the following file system structure:

* `colors` (directory)
    * `blue` (directory)
        * `image.jpg` (file)
    * `red` (directory)
        * `image.jpg` (file)
    * `list.txt` (file)

S3 places fewer restrictions on [valid object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) than POSIX does for valid file and directory names. As a result, some object keys in your S3 bucket may not be visible when mounting the bucket using Mountpoint for Amazon S3:

* Object keys that contain null bytes (`\0`) will not be accessible.
* Files or directories named `.` or `..` will not be accessible. This includes the object keys `.` or `..`, any key that ends in `/.` or `/..`, and any key that contains `/./` or `/../`.
* Object keys that end in the path delimiter (`/`) will not be accessible. Instead, a directory of the same name will be visible.
  For example, if your bucket has the following object keys:

  * `blue/`
  * `blue/image.jpg`
  * `red/`
  
  then mounting your bucket would give a file system with a `blue` directory containing an `image.jpg` file, and an empty `red` directory. The `blue/` and `red/` objects will not be accessible. Note that the S3 Console creates zero-byte objects like `blue/` and `red/` when creating directories in a bucket, and so these directories will work as expected.
* Directories will be shadowed by files with the same name. For example, if your bucket has the following object keys:

  * `blue`
  * `blue/image.jpg`
  
  then mounting your bucket would give a file system with a `blue` file, rather than a `blue` directory, and therefore `image.jpg` will not be accessible. Note that this means deleting the file `blue` will cause a directory `blue/` to become visible, and make `blue/image.jpg` accessible.

We test Mountpoint for Amazon S3 against these restrictions using a [reference model](https://github.com/awslabs/mountpoint-s3/blob/0ca2c771237032040bd1ec9405f5ed0ffa5d2eb9/s3-file-connector/tests/reftests/reference.rs#L121) that programmatically encodes the expected mapping between S3 objects and file system structure.

Windows-style path delimiters (`\`) are not supported.

## Operations on files and directories

Mountpoint for Amazon S3 intentionally does not support all POSIX file system operations. This section describes the intended behavior of file operations against Mountpoint for Amazon S3 mounts.

### File operations

#### Reads

Basic read-only operations are fully supported, including both sequential and random reads:
* `open`, `openat`, in read-only mode (`O_RDONLY`)
* `read`, `readv`, `pread`, `preadv`
* `lseek`
* `close`

#### Writes

Write operations (`write`, `writev`, `pwrite`, `pwritev`) are not currently supported. In the future, Mountpoint for Amazon S3 [will support sequential writes](https://github.com/awslabs/mountpoint-s3/issues/27), but with some limitations:
* Writes will only be supported to new files, and must be done sequentially.
* Modifying existing files will not be supported.
* Truncation will not be supported.

Synchronization operations (`fsync`, `fdatasync`) are currently no-ops because writes are not supported.

Space allocation (`fallocate`, `posix_fallocate`) are not supported.

#### Deletes

File deletion (`unlink`) is planned but not yet supported (see [#78](https://github.com/awslabs/mountpoint-s3/issues/78)).
When `unlink` is implemented, the following semantics are proposed.

For files not yet committed to S3, the client will make a best effort to stop the file being uploaded.

- If the file was not yet opened for writing, the file entry will be deleted.
- If a file is already open and being written to, the multipart upload will be cancelled and any future bytes written to the file handle will be discarded.

Where the file is already uploaded to S3,
an unlink operation will _immediately_ perform the delete on S3 and unlink the Inode from its parent.

- If a file was open for reading locally, future reads to the file handle will fail with an IO error.
- If a file was open for reading on another Mountpoint S3 process / host, future reads will fail with an IO error.

### Directory operations

Basic read-only directory operations (`opendir`, `readdir`, `closedir`) are supported.

Renaming files and directories (`rename`, `renameat`) is not currently supported.

File deletion (`unlink`) semantics are described under the file operations section.

Empty directory removal (`rmdir`) is not supported.

Synchronization operations (`fsync`) on directories are not supported.

### File and directory metadata and permissions

Reading file metadata (`stat`, `fstatat`) is supported, but with some limitations:
* File mode will be a default value (`0644` for files, `0755` for directories) unless you manually configure them with the `--file-mode` and `--dir-mode` command-line arguments.
* File owner and group will default to the user/group that mounted the bucket unless you manually configure them with the `--uid` and `--gid` command-line arguments.
* Last access time and last status change time will be the same as the last modified time.
* Inode numbers are not stable and can change.

Modifying file metadata (`chmod`, `chown`, `chgrp`) is not supported.

Extended attributes (`getxattr`, `setxattr`, `listxattr`, `removexattr`) are not supported.

POSIX file locks (`lockf`) are not supported.

### Links

Hard links and symbolic links are both unsupported.

## Error handling

Unlike local file systems, operations against Mountpoint for Amazon S3 mounts can experience transient failures such as network timeouts or temporary unavailability. Mountpoint for Amazon S3 implements [best practices for S3 use](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance-design-patterns.html#optimizing-performance-timeouts-retries), including retries, exponential backoff, and horizontal scaling. When a request fails despite these efforts, operations might return `EIO` or `ETIMEDOUT` errors to the application.

## Concurrent mutations

Mountpoint for Amazon S3 does not currently make any guarantees about the effects of a bucket being mutated remotely while being accessed through the file client. We recommend using Mountpoint for Amazon S3 only with buckets that are not concurrently mutated, or where mutations can be isolated to separate objects from those being read.

When Mountpoint for Amazon S3 detects that an object has been mutated in S3 while being read by the file client, it will cause future reads to the same file descriptor to return `EIO`. To read the new contents of the object, re-open the file.

We have not yet [nailed down the exact semantics](https://github.com/awslabs/mountpoint-s3/issues/128) of concurrent mutations that affect the directory hierarchy (like creating a `foo/` key when `foo` already exists).


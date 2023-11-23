# Mountpoint for Amazon S3 file system behavior

Mountpoint for Amazon S3 allows your applications to access objects stored in Amazon S3 through file operations like `open` and `read`. This file access is optimized for applications that need high read throughput to large objects, potentially from many clients at once, and to write new objects sequentially from a single client at a time. While this model suits a wide range of applications, Mountpoint does not implement all the features of a POSIX file system, and there are some differences that may affect compatibility with your application. If you need support for richer file system semantics that Mountpoint does not provide, you should consider other AWS file services such as [Amazon Elastic File System](https://aws.amazon.com/efs/) or [Amazon FSx](https://aws.amazon.com/fsx/).

## Behavior tenets

While the rest of this document gives details on specific file system behaviors, we can summarize the Mountpoint approach in three high-level tenets:
1. Mountpoint does not support file behaviors that cannot be implemented efficiently against S3's object APIs. It does not emulate operations like `rename` that would require many API calls to S3 to perform.
2. Mountpoint presents a common view of S3 object data through both file and object APIs. It does not emulate POSIX file features that have no close analog in S3's object APIs, such as ownership and permissions.
3. When these tenets conflict with POSIX requirements, Mountpoint fails early and explicitly. We would rather cause applications to fail with IO errors than silently accept operations that Mountpoint will never successfully persist, such as extended attributes.

## Reading and writing files

Mountpoint supports opening and reading existing objects from your S3 bucket. It is optimized for reading large files sequentially, and will automatically make multiple concurrent requests to S3 to improve throughput when reads are sequential. Mountpoint also supports random reads from an existing object, including seeking in an open file.

Mountpoint supports writing only to new files, and writes to new files must be made sequentially. If you try to open an existing file with write access, the open operation will fail with a permissions error. Mountpoint uploads new files to S3 asynchronously, and optimizes for high write throughput using multiple concurrent upload requests. If your application needs to guarantee that a new file has been uploaded to S3, it should call `fsync` on the file before closing it. You cannot continue writing to the file after calling `fsync`.

By default, Mountpoint does not allow deleting existing objects with commands like `rm`. To enable deletion, pass the `--allow-delete` flag to Mountpoint at startup time. Delete operations immediately delete the object from S3, even if the file is being read from. We recommend that you enable [Bucket Versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html) to help protect against unintentionally deleting objects. You cannot delete a file while it is being written.

You cannot rename an existing file using Mountpoint.

Objects in the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage classes, and the Archive Access and Deep Archive Access tiers of S3 Intelligent-Tiering, are only accessible with Mountpoint if they have been restored. To access these objects with Mountpoint, [restore](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects.html) them first.

## Directories

The S3 data model is a flat structure, with no hierarchy of subdirectories. However, Mountpoint automatically infers a directory structure for your bucket by treating the `/` separator in your object keys as a delimiter between directories. For example, if your bucket contains the following object keys:

* `colors/blue/cat.jpg`
* `colors/red/dog.jpg`
* `colors/list.txt`

then mounting your bucket with Mountpoint gives the following file system structure:

* `colors` (directory)
    * `blue` (directory)
        * `cat.jpg` (file)
    * `red` (directory)
        * `dog.jpg` (file)
    * `list.txt` (file)

Not all S3 object keys correspond to valid file names, and these objects will not be accessible with Mountpoint. For example, a file system directory cannot contain both a file and a directory of the same name. If your bucket's directory structure would result in this state, only the directory will be accessible. This means that if your bucket contains the following object keys:

* `blue`
* `blue/image.jpg`

then mounting your bucket with Mountpoint will show only the `blue` directory, containing the file `image.jpg`. The `blue` object will not be accessible. See the [detailed semantics](#mapping-s3-object-keys-to-files-and-directories) below for more information about invalid object keys.

### Modifying directories

Mountpoint allows creating new directories with commands like `mkdir`. Creating a new directory is a local operation and no changes are made to your S3 bucket. A new directory will only be visible to other clients once a file has been written and uploaded inside it. If you restart Mountpoint or your instance before writing any files into the new directory, it will not be preserved.

You cannot remove or rename an existing directory with Mountpoint. However, you can remove a new directory created locally if no files have been written inside it.

Mountpoint does not support hard or symbolic links.

## Permissions and metadata

By default, files and directories in your bucket will be readable only by the local user that mounted the bucket. If you want to allow other users on the system to read or write the bucket, pass the `--allow-other` flag to Mountpoint at startup time. Mountpoint assigns default permissions (modes) and owners to all files and directories, and these cannot be changed with commands like `chmod` and `chown` once the bucket is mounted. You can use the `--uid`, `--gid`, `--file-mode`, and `--dir-mode` flags at startup time to override these defaults.

Mountpoint respects all Amazon S3 [identity and access management options](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html), including bucket policies and access control lists (ACLs). At startup time, you provide IAM credentials for Mountpoint to use. Files and directories will only be accessible with Mountpoint if these credentials have the required access. If your credentials only have access to a prefix (a subdirectory) of an S3 bucket, you can use the `--prefix` argument at startup time to mount only that prefix instead of the entire bucket.

Mountpoint has limited support for other file and directory metadata, including file modification times and sizes, and you cannot modify this metadata.

## Consistency and concurrency

Amazon S3 provides [strong read-after-write consistency](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html#ConsistencyModel) for PUT and DELETE requests of objects in your S3 bucket.
By default, Mountpoint provides strong read-after-write consistency for file writes, directory listing operations, and new object creation. For example, if you create a new object using another S3 client, it will be immediately accessible with Mountpoint. Mountpoint also ensures that new file uploads to a single key are atomic. If you modify an existing object in your bucket with another client while also reading that object through Mountpoint, the reads will return either the old data or the new data, but never partial or corrupt data. To guarantee your reads see the newest object data, you can re-open the file after modifying the object.

However, Mountpoint may return stale metadata for an existing object within 1 second of the object being modified or deleted in your S3 bucket by another client.
This occurs only if the object was accessed through Mountpoint immediately before being modified or deleted in your S3 bucket.
The stale metadata will only be visible through metadata operations such as `stat` on individual files.
Directory listings will never be stale and always reflect the current metadata.
These cases do not apply to newly created objects, which are always immediately visible through Mountpoint.
Stale metadata can be refreshed by either opening the file or listing its parent directory.

Mountpoint allows multiple readers to access the same object at the same time. However, a new file can only be written to sequentially and by one writer at a time. New files that are being written are not available for reading until the writing application closes the file and Mountpoint finishes uploading it to S3. If you have multiple Mountpoint mounts for the same bucket, on the same or different hosts, there is no coordination between writes to the same object. We recommend that your application does not write to the same object from multiple instances at the same time.

### Optional metadata and object content caching

Mountpoint also offers optional metadata and object content caching.
See the [caching section of the configuration documentation](./CONFIGURATION.md#caching) for more information.
When opting into caching, the strong read-after-write consistency model is relaxed,
and you may see stale metadata or object data for up to the cache's metadata time-to-live (TTL),
which defaults to 1 second but can be configured higher.

For example, with caching enabled, you can successfully open and read a file that has been deleted from S3 if it is already cached.
Reads to that file will either return the cached data or an error for data that is not cached,
but will never return corrupt data or combine data from two versions of the file.

To force an up-to-date view of a file, use the `O_DIRECT` flag when opening the file for reading.
When this option is provided, Mountpoint will check S3 to ensure the object exists and return the latest object content.
Unlike other file systems, Mountpoint does not support setting the `O_DIRECT` flag via `fcntl` after the file has been opened.

With caching enabled, new files that are being written to remain unavailable for reading until the file is closed, consistent with behavior without caching.
After the new file is closed, it is possible to open it for reading.
Parts of the file that are read from S3 will then be cached and available for subsequent repeated reads.

## Durability

Mountpoint translates file operations like `read` and `write` into API calls to Amazon S3, which uses a combination of Content-MD5 checksums, secure hash algorithms (SHAs), and cyclic redundancy checks (CRCs) to verify data integrity. S3 performs these checksums on data at rest and repairs any disparity using redundant data. In addition, S3 calculates checksums on all internal network traffic to detect alterations of data packets when storing or retrieving data. However, POSIX file operations like `read` and `write` do not offer a built-in integrity mechanism. Like any file system operation, it is possible for data integrity to be lost in transit between your application and Mountpoint. If your application needs to verify data integrity, we recommend you use an AWS SDK instead of Mountpoint, and use [end-to-end checksums](https://aws.amazon.com/blogs/aws/new-additional-checksum-algorithms-for-amazon-s3/) for all object read and write operations.

## Error handling

Unlike local file systems, operations against files and directories with Mountpoint can experience transient failures such as network timeouts or temporary unavailability. Mountpoint uses [best practices for S3 requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance-design-patterns.html#optimizing-performance-timeouts-retries), including retries, exponential backoff, and horizontal scaling. When a file operation fails despite these efforts, it might return a timeout or input/output error to your application. If your application needs to ensure that newly written files have been successfully uploaded to S3, use the `fsync` operation before closing the file. If the `fsync` operation returns an error, the file may not have been uploaded.

## Detailed semantics

This section gives a detailed description of Mountpoint's semantics for individual operations.

### Mapping S3 object keys to files and directories

Mountpoint interprets keys in your S3 bucket as file system paths by splitting them on the `/` character. For example, if your bucket contains the following object keys:

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

S3 places fewer restrictions on [valid object keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) than POSIX does for valid file and directory names. As a result, some object keys in your S3 bucket may not be visible when mounting the bucket using Mountpoint:

* Object keys that contain null bytes (`\0`) will not be accessible.
* Object keys that would result in files or directories named `.` or `..` will not be accessible. This includes the object keys `.` or `..`, any key that ends in `/.` or `/..`, and any key that contains `/./` or `/../`. The `.` and `..` names are instead reserved for use by the usual relative directories (`.` for the current directory, and `..` for the parent).
* Object keys that end in the path delimiter (`/`) will not be accessible. Instead, a directory of the same name will be visible.
  For example, if your bucket has the following object keys:

  * `blue/`
  * `blue/image.jpg`
  * `red/`

  then mounting your bucket would give a file system with a `blue` directory containing an `image.jpg` file, and an empty `red` directory. The `blue/` and `red/` objects will not be accessible. Note that the S3 Console creates zero-byte objects like `blue/` and `red/` when creating directories in a bucket, and so these directories will work as expected.
* Files will be shadowed by directories with the same name. For example, if your bucket has the following object keys:

  * `blue`
  * `blue/image.jpg`

  then mounting your bucket would give a file system with a `blue` directory, containing the file `image.jpg`. The `blue` object will not be accessible. Deleting the key `blue/image.jpg` will remove the `blue` directory, and cause the `blue` file to become visible.

We test Mountpoint against these restrictions using a [reference model](https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/tests/reftests/reference.rs) that programmatically encodes the expected mapping between S3 objects and file system structure.

Windows-style path delimiters (`\`) are not supported.

### File operations

#### Reads

Basic read-only operations are fully supported, including both sequential and random reads:
* `open`, `openat`. A file can be opened in read-write mode (`O_RDWR`), but you cannot both read and write to the same file descriptor even in this mode.
* `read`, `readv`, `pread`, `preadv`
* `lseek`
* `close`

#### Writes

Mountpoint supports sequential write operations (through `write`, `writev`, `pwrite`, `pwritev`),
but with some limitations:

* Writes are only supported to new files, and must be done sequentially.
* Modifying existing files is not supported.
* Truncation is not supported.

Synchronization operations (`fsync`, `fdatasync`) complete the upload of the object to S3 and disallow
further writes.

`close` also generally completes the upload of the object and reports an error if not successful. However,
if the file is empty, or if `close` is invoked by a different process than the one that originally opened it,
`close` returns immediately and the upload is only completed asynchronously after the last reference to the
file is closed. These exceptions allow Mountpoint to support common usage patterns seen in tools like `dd`,
`touch`, or in shell redirection, that hold multiple references to an open file and keep writing to one after
closing another.

Space allocation operations (`fallocate`, `posix_fallocate`) are not supported.

Changing last access and modification times (`utime`) is supported only on files that are being written.

#### Deletes

File deletion (`unlink`) can be enabled by setting the `--allow-delete` option and is implemented with
the following behavior:

* For files not yet committed to S3, the client does not permit `unlink` operations.
* The file should be closed and thus committed to S3, at which point an `unlink` can be performed on the remote file.
* For files already committed to S3, the client _immediately_ deletes the corresponding object from S3,
  and removes the file from its directory.
* If there are still open file handles to the file, future reads to them will fail.
* Because the object is immediately deleted from S3, future reads from other hosts will also fail.

### Directory operations

Basic read-only directory operations (`opendir`, `readdir`, `closedir`) are supported. However, seeking (`lseek`) on directory handles is not supported.

Creating directories (`mkdir`) is supported, with the following behavior:

* `mkdir` will create a new empty directory in the file system, but not affect the S3 bucket.
* Note that this is different from e.g. the S3 Console, which creates "directory markers" (i.e. zero-byte objects with `<directory-name>/` key) in the bucket.
* If a file is created under the new (or a nested) directory and committed to S3, Mountpoint will revert to using the default mapping of S3 object keys. This implies that the directory will be visible as long as there are keys which contain it as a prefix.

Renaming files and directories (`rename`, `renameat`) is not currently supported.

File deletion (`unlink`) semantics are described in the [Deletes](#deletes) section above.

Empty directory removal (`rmdir`) is supported, with the following semantics:

* `rmdir` will only delete empty directories created by `mkdir`.
* `rmdir` will fail on directories backed on S3 by a directory marker (i.e. zero-byte object with `<directory-name>/` key).
* As soon as a file is committed to the S3 bucket by Mountpoint,
  the directory will be considered to exist implicitly.
  If Mountpoint later observes that there are no files existing for that directory in S3,
  Mountpoint will consider the directory to have been deleted.
* On success, the directory will be deleted immediately. Subsequent reads or writes to the directory (e.g. creating a file or subdirectory) will fail.

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

### Consistency

Mountpoint provides strong read-after-write consistency for new object creation and writes of existing objects. However, it can return stale metadata for up to 1 second when an existing object is modified concurrently by another client. The [consistency and concurrency](#consistency-and-concurrency) section above describes this behavior, but here are some examples:
* A process replaces an existing object in your S3 bucket using another client (e.g., the AWS SDK), and then opens the same object with Mountpoint and reads from it. The process will read the new data.
* A process opens a file with Mountpoint, then replaces the object in your S3 bucket using another client, and then reads from the open file. The process will either read the old data or the read will fail. The process can see the new data by opening the file again.
* A process replaces an existing object in your S3 bucket using another client, and then queries the object’s metadata with Mountpoint using the `stat` system call. The returned metadata could reflect either the old or new object for up to 1 second after the PutObject request.
* A process writes a new object to your S3 bucket, using either Mountpoint or another client, and then lists the directory the object is in with Mountpoint. The new object will appear in the list.
* A process deletes an existing object from your S3 bucket using another client, and then tries to open the object with Mountpoint and read from it. The open operation will fail.
* A process deletes an existing object from your S3 bucket, using either Mountpoint or another client, and then lists the directory the object was previously in with Mountpoint. The object will not appear in the list.
* A process deletes an existing object from your S3 bucket using another client, and then queries the object’s metadata with Mountpoint using the `stat`` system call. The returned metadata could reflect the old object for up to 1 second after the DeleteObject request.


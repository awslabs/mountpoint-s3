# Mountpoint for Amazon S3 file system behavior

Mountpoint for Amazon S3 allows your applications to access objects stored in Amazon S3 through file operations like `open` and `read`. This file access is optimized for applications that need high read throughput to large objects, potentially from many clients at once, and to write new objects sequentially from a single client at a time. While this model suits a wide range of applications, Mountpoint does not implement all the features of a POSIX file system, and there are some differences that may affect compatibility with your application. If you need support for richer file system semantics that Mountpoint does not provide, you should consider other AWS file services such as [Amazon Elastic File System](https://aws.amazon.com/efs/) or [Amazon FSx](https://aws.amazon.com/fsx/).

## Behavior tenets

While the rest of this document gives details on specific file system behaviors, we can summarize the Mountpoint approach in three high-level tenets:
1. Mountpoint does not support file behaviors that cannot be implemented efficiently against S3's object APIs. It does not emulate operations like `rename` on S3 general purpose buckets, which would require many API calls to S3 to perform.
2. Mountpoint presents a common view of S3 object data through both file and object APIs. It does not emulate POSIX file features that have no close analog in S3's object APIs, such as mutable ownership and permissions.
3. When these tenets conflict with POSIX requirements, Mountpoint fails early and explicitly. We would rather cause applications to fail with IO errors than silently accept operations that Mountpoint will never successfully persist, such as extended attributes.

## Reading and writing files

Mountpoint supports opening and reading existing objects from your S3 bucket. It is optimized for reading large files sequentially, and will automatically make multiple concurrent requests to S3 to improve throughput when reads are sequential. Mountpoint also supports random reads from an existing object, including seeking in an open file.

Mountpoint supports creating new objects in your S3 bucket by allowing writes to new files. If the `--allow-overwrite` flag is set at startup time, Mountpoint also supports replacing existing objects by allowing writes to existing files, but only when the `O_TRUNC` flag is used at open time to truncate the existing file. In both cases, writes must always start from the beginning of the file and must be made sequentially. Mountpoint uploads new files to S3 asynchronously, and optimizes for high write throughput using multiple concurrent upload requests. If your application needs to guarantee that a new file has been uploaded to S3, it should call `fsync` on the file before closing it. You cannot continue writing to the file after calling `fsync`. The new (or overwritten) object will be visible to other S3 clients only after closing it (or on `fsync`).

By default, Mountpoint does not allow deleting existing objects with commands like `rm`. To enable deletion, pass the `--allow-delete` flag to Mountpoint at startup time. Delete operations immediately delete the object from S3, even if the file is being read from. We recommend that you enable [Bucket Versioning](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html) to help protect against unintentionally deleting objects. You cannot delete a file while it is being written.

For objects stored in S3 Express One Zone, Mountpoint supports appending to files. If the `--incremental-upload` flag is set at startup time, Mountpoint allows opening existing files without specifying the `O_TRUNC` flag. All writes must still be sequential and start from the end of the file. In this mode, Mountpoint will always upload data to S3 in sequential increments and offer the same throughput of a single PUT API call on S3. Moreover, partial writes will be visible to other S3 clients before the file is closed. Applications can call `fsync` to guarantee that the data written so far is uploaded to S3 and are then allowed to continue writing to the file.

Mountpoint supports atomic file rename for objects stored in the S3 Express One Zone storage class.
Attempting to rename files where unsupported by S3 will result in the operation being rejected.
Mountpoint distinguishes between rename operations that move to an empty destination (non-replacing) and those that replace an existing object at the destination (replacing).
While non-replacing renames do not require further flags to be set, replacing rename require passing the `--allow-overwrite` flag to Mountpoint at startup time.
Rename operations immediately rename the object in S3.
Existing readers (to source or destination) may eventually fail to read more data from the object after it has been renamed.
You cannot rename a file while it or the destination of a rename is being written by the same Mountpoint instance.

Append and rename are not supported for directory buckets that reside in Local Zones. You can only append data to or rename existing objects in directory buckets that reside in Availability Zones.
You should not pass the `--incremental-upload` flag to Mountpoint in this case, as writes to files will fail. Attempting to rename files in this case will lead to the operation being rejected.

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
By default, Mountpoint provides strong read-after-write consistency for file writes, directory listing operations, and new object creation. For example, if you create a new object using another S3 client, it will be immediately accessible with Mountpoint. If you modify an existing object in your bucket with another client while also reading that object through Mountpoint, the reads will return either the old data or the new data, but never partial or corrupt data. To guarantee your reads see the newest object data, you can re-open the file after modifying the object.

If you modify or delete an existing object in your S3 bucket with another client, however, Mountpoint may return stale metadata for that object for up to 1 second, by default. This occurs only if the object had already been accessed through Mountpoint immediately before being modified or deleted in your S3 bucket. The stale metadata will only be visible through metadata operations such as `stat` on individual files. Directory listings will never be stale and always reflect the current metadata. These cases do not apply to newly created objects, which are always immediately visible through Mountpoint. Stale metadata can be refreshed by either opening the file or listing its parent directory.

Mountpoint allows multiple readers to access the same object at the same time.
However, files can only be written to sequentially and by one writer at a time.
Files that are being written to are not available for reading until the writing application closes the file and Mountpoint finishes uploading it to S3, regardless of upload mode.
If you have multiple Mountpoint mounts for the same bucket, on the same or different hosts, there is no coordination between writes to the same object.
Your application should not write to the same object from multiple instances at the same time.

By default, Mountpoint ensures that new file uploads to a single key are atomic. As soon as an upload completes, other clients are able to see the new key and the entire content of the object. If the `--incremental-upload` flag is set, however, Mountpoint may issue multiple separate uploads during file writes to append data to the object. After each upload, the appended object in your S3 bucket will be visible to other clients.

### Optional metadata and object content caching

Mountpoint also offers optional metadata and object content caching.
See the [caching section of the configuration documentation](./CONFIGURATION.md#caching) for more information.
When opting into caching, the strong read-after-write consistency model is relaxed,
and you may see stale file system metadata or object data for up to the cache's metadata time-to-live (TTL),
which defaults to 1 minute but can be configured using the `--metadata-ttl` flag.

For example, with local and/or shared caching enabled, you can successfully open and read a file that has been deleted from the mounted S3 bucket if it is already cached.
Reads to that file will either return the cached data or an error for data that is not cached,
but will never return corrupt data or combine data from two versions of the file.

To force an up-to-date view of a file, use the `O_DIRECT` flag when opening the file for reading.
When this option is provided, Mountpoint will check S3 to ensure the object exists and return the latest object content.
Unlike other file systems, Mountpoint does not support setting the `O_DIRECT` flag via `fcntl` after the file has been opened.

When caching is enabled, Mountpoint also remembers when objects do *not* exist. Once you try to
access a file that does not exist in your mounted S3 bucket, subsequent attempts (within the configured TTL) may still
fail, even if it was later added to the mounted S3 bucket, until the TTL expires.

Caching does not affect the behavior of writing to files. Files that are being written to remain
unavailable for reading until the file is closed, consistent with behavior without caching.
After the file is closed, it is possible to open it for reading. Parts of the file that are read
from S3 will then be cached and available for subsequent repeated reads.

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

  then mounting your bucket would give a file system with a `blue` directory, containing the file `image.jpg`.
The `blue` object will not be accessible. Deleting the key `blue/image.jpg` will remove the `blue` directory, and cause the `blue` file to become visible.

Additionally, remote directories will always shadow local directories or files.
Thus Mountpoint shadows directory entries in the following order, where the first takes precedence: remote directories, any local state, remote files.
For example, if you create a directory i.e. `blue/` and a conflicting object with key `blue` appears in the bucket, the local directory will still be accessible.

We test Mountpoint against these restrictions using a [reference model](https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/tests/reftests/reference.rs) that programmatically encodes the expected mapping between S3 objects and file system structure.

Windows-style path delimiters (`\`) are not supported.

### File operations

#### Reads

Basic read-only operations are fully supported, including both sequential and random reads:
* `open`, `openat`
* `read`, `readv`, `pread`, `preadv`
* `lseek`
* `close`

`open` creates a file handle and returns it back to the kernel. A file handle can only be used for one type of operation, either read or write, for its lifetime. You can open a file in read-write mode (`O_RDWR`), but you cannot both read and write to the same file descriptor even in this mode. The first `read` or `write` will determine the type of operation you can do with the file descriptor.

#### Writes

Mountpoint supports sequential write operations (through `write`, `writev`, `pwrite`, `pwritev`),
but with some limitations:

* All writes must be sequential: writes after seeking to any offset other than the end of the previous write will fail.
* Writes to new files are supported and must start at the beginning of the file.
* If the `--allow-overwrite` flag is set, replacing an existing file is also allowed:
  * The existing file must be opened in truncate mode (`O_TRUNC`).
  * You cannot overwrite files that are currently being read.
  * The upload to S3 starts as soon as Mountpoint receives the first `write` request and cannot be cancelled.
* Both for new files and overwrites:
  * Synchronization operations (`fsync`, `fdatasync`) complete the upload of the object to S3 and disallow further writes.
  * The data written to the file will be visible to other S3 clients only once the upload completes.
* If the `--incremental-upload` flag is set, and only when mounting directory buckets in S3 Express One Zone, appending to existing files is allowed:
  * The existing file must be opened without the `O_TRUNC` flag or any existing content will be truncated.
  * Only sequential writes at the end of the file are allowed. Setting the `O_APPEND` flag on open will enforce this behavior, but is not required by Mountpoint.
  * You cannot append to files that are currently being read or overwritten.
  * The data is uploaded incrementally to S3 in fixed-size parts (controlled by `--write-part-size`).
  * Synchronization operations (`fsync`, `fdatasync`) trigger the upload of the appended parts and do allow to continue writing.
  * Parts successfully appended to an object are visible as the whole (appended) object to other S3 clients.

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

Basic read-only directory operations (`opendir`, `readdir`, `closedir`, `rewinddir`) are supported. However, seeking (`lseek`) on directory handles is not supported.

Sorting order of `readdir` results:
* For general purpose buckets, `readdir` returns results in lexicographical order.
* For directory buckets, `readdir` does not return results in lexicographical order.

Creating directories (`mkdir`) is supported, with the following behavior:

* `mkdir` will create a new empty directory in the file system, but not affect the S3 bucket.
* Note that this is different from e.g. the S3 Console, which creates "directory markers" (i.e. zero-byte objects with `<directory-name>/` key) in the bucket.
* If a file is created under the new (or a nested) directory and committed to S3, Mountpoint will revert to using the default mapping of S3 object keys. This implies that the directory will be visible as long as there are keys which contain it as a prefix.

Rename (`rename`, `renameat`, `renameat2`) semantics are described in the [File and directory rename](#file-and-directory-rename) section.

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

### File and directory rename

File and directory renames refer to the `rename` family of system calls, where a file is moved from one part of the file system tree to another.

On Amazon S3 directory buckets in S3 Express One Zone, renaming individual files within the same bucket is supported with the following semantics:

* Non-replacing file rename will work without any further Mountpoint configuration.
* If a file already exists at the new destination path (replacing rename), the rename will fail, unless the `--allow-overwrite` flag was set
  at mount time and the system call does not specify the `RENAME_NOREPLACE` flag.
* For files currently open for writing or not yet committed to S3, the client does not permit `rename` or `renameat2` operations.
  Similarly, if the destination file of a rename operation is open for writing, the rename will be rejected.
* For files not open for writing, the client _immediately_ renames the corresponding S3 object,
  and moves the file in the local file system representation.
* Mountpoint does not support `rename` or `renameat2` where `RENAME_EXCHANGE` is specified, as exchanging two objects is not supported by Amazon S3.
* Mountpoint does not support `rename` or `renameat2` where `RENAME_WHITEOUT` is specified, as Mountpoint is not an overlay/union file system.
* If there are still open read file handles to the file being renamed or the destination file, future reads to them will fail.
* Because the object is immediately renamed in S3, future reads with file handles from other hosts will also fail.
* Concurrent rename to a destination and uploads to the same key may result in the renamed object being overwritten.
  We do not recommend concurrent mutations to the same key.
* Note, that renaming the last file in a directory has a similar effect to that directory as removing the last file. Thus, moving the last file out of a directory
  may lead to that directory being inaccessible, as there will no longer be an object in S3 under that directory.

Renaming individual files is not supported by Amazon S3 general purpose buckets, nor objects not in the S3 Express One Zone storage class.

Directory rename is not supported on any Amazon S3 bucket type.

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

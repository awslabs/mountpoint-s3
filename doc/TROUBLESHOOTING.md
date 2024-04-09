# Troubleshooting

This document enumerates a few examples of common error messages, what they mean, and how to resolve them.

Mountpoint is optimized for applications that need high read throughput to large objects, potentially from many clients at once,
and to write new objects sequentially from a single client at a time.
To achieve this, Mountpoint does not implement all the features of a POSIX file system and this may affect compatibility with your application.
For more detailed information, please refer to Mountpoint's [semantics documentation](../doc/SEMANTICS.md).
This document aims to capture errors from the latest versions of Mountpoint.
If you are using an older version of Mountpoint, please refer to older versions of this document.

A great first step for troubleshooting Mountpoint is to inspect its logs,
which are emitted to `journald` by default. See the [logging documentation](LOGGING.md) for more details on how to access Mountpoint logs.

## Random writes

Mountpoint supports writing to a file sequentially. Random writes, or 'out-of-order' writes, will return an error to FUSE which may appear in applications with the error message "Invalid argument".
For example, the following code seeks one byte into the file and writes a single byte using `dd`.

```
$ dd if=/dev/random of=out seek=1 count=1
dd: writing to 'out': Invalid argument
```

In Mountpoint's logs, a warning message will be emitted similar to below:

```
WARN write{req=52 ino=49 fh=3 offset=512 length=512 name="out"}:
mountpoint_s3::fuse: write failed: upload error: out of order write NOT supported by Mountpoint, aborting the upload; expected offset 0 but got 512
```

## Writing to an existing file

Trying to open an existing file for writing using Mountpoint without the `--allow-overwrite` flag will fail with the error: `Operation not permitted`.
For example, overwriting an existing file in Mountpoint would result in the following error:

```
$ echo "Overwriting a file..." > existing-file.txt
operation not permitted: existing-file.txt
```

Log entries for overwriting a file looks like one of the following depending on the Mountpoint version:

```
WARN setattr{req=11 ino=2 name="existing-file.txt"}:
mountpoint_s3::fuse: setattr failed: inode error: inode 2 (full key "existing-file.txt") is a remote inode and its attributes cannot be modified
```

```
WARN setattr{req=11 ino=2 name="existing-file.txt"}:
mountpoint_s3::fuse: setattr failed: file overwrite is disabled by default, you need to remount with --allow-overwrite flag and open the file in truncate mode (O_TRUNC) to overwrite it
```

If you want to overwrite a file using Mountpoint, please use `--allow-overwrite` CLI flag during mounting the bucket on a directory.

## Deleting files

Trying to delete a file using Mountpoint (without `--allow-delete` CLI flag), for example test-file.txt, `Operation not permitted` error will be emitted as follows:

```
$ rm test-file.txt
rm: cannot remove 'test-file.txt': Operation not permitted
```

In Mountpoint's logs, a message similar to the one below should be emitted:

```
WARN unlink{req=8 parent=1 name="test-file.txt"}:
mountpoint_s3::fuse: unlink failed: Deletes are disabled. Use '--allow-delete' mount option to enable it.
```

In order to delete files using Mountpoint, you must opt-in using the `--allow-delete` CLI flag.
To learn more about how file deletion works in Mountpoint, please review the [file deletion section of Mountpoint's semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#deletes).

## Listing a directory containing files and directories of the same name

A file system directory cannot contain both a file and a directory of the same name. If your bucket's directory structure would result in this state, only the directory will be accessible. The object will not be accessible.

For example, if a bucket contains the following object keys:

* a
* a/b

When listing the contents of a directory `mnt` with the objects listed above, only the directory `a` would be returned:

```
$ ls mnt/
a
```

Mountpoint logs will show an entry like this:

```
WARN readdir{req=5 ino=1 fh=2 offset=17}:
mountpoint_s3::inode::readdir::ordered: file 'a' (full key "a") is omitted because another directory 'a' exist with the same name
```

When listing the contents of an S3 Express One Zone directory bucket,
both a file and directory of the same name may be shown without the above warning being emitted.
However, only the directory remains accessible to other file operations.
This issue is tracked in [#725](https://github.com/awslabs/mountpoint-s3/issues/725).

For more details on how Mountpoint maps S3 object keys to files and directories, see the [semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#mapping-s3-object-keys-to-files-and-directories).

## Renaming a file/directory

Renaming a file or a directory inside the mounted directory is not supported by Mountpoint.
Attempting to rename a file or directory will return an error:

```
$ mv hello.txt new_hello.txt
mv: cannot move 'hello.txt' to 'new_hello.txt': Function not implemented
```

Mountpoint logs should show the following message:

```
rename{req=120 parent=1 name="hello.txt" newparent=1 newname="new_hello.txt"}:
mountpoint_s3::fuse: rename failed: operation not supported by Mountpoint
```

## Accessing Glacier objects

Objects in Glacier Flexible Retrieval storage class, Glacier Deep Archive storage class, and non-instant access tiers of S3 Intelligent-Tiering storage class are not accessible with Mountpoint.
When trying to access objects in these storage classes, Mountpoint logs will show entries like:

```
WARN lookup{req=6 ino=1 name="class_GLACIER"}:
mountpoint_s3::inode: objects in the GLACIER and DEEP_ARCHIVE storage classes are only accessible if restored
```

To access objects in these storage classes with Mountpoint, restore or copy them to another storage class first.
To learn more about working with archived objects, see the [S3 User Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html).

## Modifying metadata

Mountpoint does not support modifying metadata such as file modification times and file size.
For example, attempting to update the file modification time using `touch` will result in the following error:

```
$ touch -a -m -t 201512180130.09 init.txt
touch: init.txt: Operation not permitted
```

Mountpoint logs should contain an error similar to below:

```
WARN setattr{req=4 ino=21 name="init.txt"}:
mountpoint_s3::fuse: setattr failed: inode error: inode 21 (full key "init.txt") is a remote inode and its attributes cannot be modified
```

## Invalid Hostname for DNS resolution

Mountpoint by default resolves endpoint for requests in [virtual hosted style](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
If your storage provider does not support virtual style hosted bucket, you may recieve the following error:

```
Error: Failed to create S3 client

Caused by:
    0: initial ListObjectsV2 failed for bucket my-bucket in region us-east-1
    1: Client error
    2: Unknown CRT error
    3: CRT error 1059: aws-c-io: AWS_IO_DNS_INVALID_NAME, Host name was invalid for dns resolution.
Error: Failed to create mount process
```

In this case, try using `--force-path-style` CLI option when you are mounting the bucket using Mountpoint.

For more details on how Mountpoint handles endpoint, please see our [configuration documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/CONFIGURATION.md#endpoints-and-aws-privatelink).

## Directory disappears after deleting all the files within it

The Amazon S3 data model is a flat structure, with no hierarchy of subdirectories.
Mountpoint automatically infers a directory structure for your bucket by treating the `/` separator after prefix in your object keys as a delimiter between directories.

If all the files within a prefix are deleted, the prefix itself and the corresponding directory cease to exist.
In this case, it is expected that Mountpoint will no longer show the directory or be able to create new files within it. You can recreate the directory with `mkdir` and then continue creating new files within it. Alternatively, you can prevent a directory from disappearing by creating an empty, hidden file (for example, `.keep`) inside it.

For more details on how Mountpoint maps S3 object keys to files and directories, see the [semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#mapping-s3-object-keys-to-files-and-directories).

## Slower throughput than expected

If you're seeing slower throughput than expected (i.e. significantly slower than the network bandwidth for an EC2 instance type), there may be a few areas to investigate.

If you're only reading from one file at a given time, the network interface may not be fully saturated.
Mountpoint supports Linux file system operations using FUSE.
Operations on files pass through several subsystems including the Linux VFS layer as well as the Mountpoint process.
These steps are serial, and so reading from a single file sequentially will be bounded by CPU performance rather than the available network throughput.
When possible, we recommend reading from files in parallel from multiple file handles (multiple calls to `open`) to maximize throughput.

Request retries may also introduce delays in processing requests.
We recommend reviewing Mountpoint logs to confirm if requests may be failing and incurring retries.
For example, throttled requests being retried may introduce latency to file system requests.
Learn more about how to use Mountpoint logging in our [logging documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/LOGGING.md).
To further debug throttling errors, see the [throttling errors section](https://github.com/awslabs/mountpoint-s3/blob/main/doc/TROUBLESHOOTING.md#throttling-errors) of this page.

## Throttling Errors

When looking at the logs, throttling errors will appear as failed requests with `http_status=503` or `http_status=429`. For example:

```
[WARN] lookup{req=20094 ino=109 name="***"}:
list_objects{id=16589 bucket=*** continued=false delimiter=/ max_keys=1 prefix=***}: mountpoint_s3_client::s3_crt_client:
request failed request_type=Default http_status=503 range=None duration=426.995805ms ttfb=Some(7.681499ms) request_id=***

[WARN] open{req=20158 ino=1706 pid=1759}:
list_objects{id=16643 bucket=*** continued=false delimiter=/ max_keys=1 prefix=***}: mountpoint_s3_client::s3_crt_client:
request failed request_type=Default http_status=503 range=None duration=314.021865ms ttfb=Some(8.180981ms) request_id=***
```

The 503 or 429 status codes means the request limits have been exceeded.
Mountpoint itself does not do any throttling. These errors are returned from S3 or from dependent services, like STS which is used to provide credentials.

Amazon S3 automatically scales to high request rates.
Your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per partitioned Amazon S3 prefix.
You can reduce the impact of throttling errors by distributing objects across multiple prefixes in your bucket.

By default, Mountpoint retries throttled requests up to a total to 10 attempts. You can increase this default by setting the `AWS_MAX_ATTEMPTS` environment variable.

For more details on optimizing Amazon S3 performance and avoiding throttling errors, see the [S3 best practices documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html).

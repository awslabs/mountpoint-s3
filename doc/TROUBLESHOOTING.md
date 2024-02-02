# Troubleshooting

This document enumerates a few examples of common error messages, what they mean, and how to resolve them.

Mountpoint is optimized for applications that need high read throughput to large objects, potentially from many clients at once,
and to write new objects sequentially from a single client at a time.
To achieve this, Mountpoint does not implement all the features of a POSIX file system that may affect compatibility with your application.
For more detailed information, please refer to Mountpoint's [semantics documentation](../doc/SEMANTICS.md).
This document aims to capture errors from the latest versions of Mountpoint.
If you are using an older version of Mountpoint, please refer to older versions of this document.

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

Trying to open an existing file for writing using Mountpoint without `--allow-overwrite`  flag will fail with the error: `Operation not permitted`.
For example: for a directory with existing file 'existing-file.txt', the following error will occur when trying to overwrite it:

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

In Mountpoint's logs, following message will be emitted:

```
WARN unlink{req=8 parent=1 name="test-file.txt"}: 
mountpoint_s3::fuse: unlink failed: Deletes are disabled. Use '--allow-delete' mount option to enable it.
```

In order to delete files using Mountpoint, you must opt-in using the `--allow-delete` CLI flag.
To learn more about how file deletion works in Mountpoint, please review the [file deletion section of Mountpoint's semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#deletes).

## Listing file which is shadowed by directory of same name

A file system directory cannot contain both a file and a directory of the same name. If your bucket's directory structure would result in this state, only the directory will be accessible. The object will not be accessible.

For example, if a bucket contains the following object keys:

* a
* a/b

When listing the content of a directory `mnt` mounting the bucket in the example above, only the directory `a` is listed:

```
$ ls mnt/
a
```

Mountpoint logs will show an entry like this:

```
WARN readdir{req=5 ino=1 fh=2 offset=17}: 
mountpoint_s3::inode::readdir::ordered: file 'a' (full key "a") is omitted because another directory 'a' exist with the same name
```

Although, in S3 Express One Zone bucket both file and directory will be shown without the above warning being emitted. In this case also, only the directory is accessible.
This bug for S3 Express One Zone bucket is being tracked at [Issue #725](https://github.com/awslabs/mountpoint-s3/issues/725).

For more details on how Mountpoint maps S3 object keys to files and directories, see the [semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#mapping-s3-object-keys-to-files-and-directories). 

## Renaming a file/directory

Renaming a file or a directory inside the mounted directory is not supported by Mountpoint.
Attempting to rename will give error like: 

```
$ mv hello.txt new_hello.txt
mv: cannot move 'hello.txt' to 'new_hello.txt': Function not implemented
```

Mountpoint logs will show following message for the above error:

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
See more details in [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/archived-objects.html).

## Modifying metadata

Mountpoint does not support modifying metadata such as file modification times and file size.
If users try to modify them, for example, updating file modification time with `touch`, user will get following error:
 
```
$ touch -a -m -t 201512180130.09 init.txt
touch: init.txt: Operation not permitted
```

And Mountpoint logs will show:

```
WARN setattr{req=4 ino=21 name="init.txt"}: 
mountpoint_s3::fuse: setattr failed: inode error: inode 21 (full key "init.txt") is a remote inode and its attributes cannot be modified
```

# Troubleshooting

Mountpoint for Amazon S3 is optimized for applications that need high read throughput to large objects, potentially from many clients at once,
and to write new objects sequentially from a single client at a time.
To achieve this, Mountpoint does not implement all the features of a POSIX file system that may affect compatibility with your application.

This documentation enumerates some examples of what error messages may look like when trying to perform unsupported operations. Please also take a look at Mountpoint's [semantics documentation](../doc/SEMANTICS.md) for more more detailed information on the decisions and tradeoffs made.
This troubleshooting page is based on release Mountpoint-s3 v1.4.0 .Versions earlier to that might not have same error logging.

## Random Write

Mountpoint supports writing to a file sequentially. Random writes, or 'out-of-order' writes, will return an error to FUSE, which may appear in applications with the error message "Invalid argument".
For example, the following code seeks one byte into the file and writes a single byte using `dd`.

```
$ dd if=/dev/random of=out seek=1 count=1
dd: writing to 'out': Invalid argument
```

In Mountpoint's logs, a warning message will be emitted similar to below:

```
WARN write{req=52 ino=49 fh=3 offset=512 length=512 name="out"}: 
mountpoint_s3::fuse: write failed:upload error: out of order write NOT supported by Mountpoint, aborting the upload; expected offset 0 but got 512
```

## Writing to an existing File 

Mountpoint support overwriting to existing file using mount option `--allow-overwrite` . 
Trying to open an existing file for writing without `--allow-overwrite`  flag will fail with the error: `Operation not permitted`.
For example, there is an pre-existing file 'existing-file.txt' in mounted directory.

```
$ echo "Overwriting a file..." > existing-file.txt
operation not permitted: existing-file.txt
```

Log entries for file overwriting looks like:

```
WARN setattr{req=4 ino=21 name="existing-file.txt"}: 
mountpoint_s3::fuse: setattr failed: inode error: inode 21 (full key "existing-file.txt") is a remote inode and its attributes cannot be modified
```

### Unreleased

With improvement in error logging, we will get the following logs for file overwrite:

In the logs, we get the following WARN message - 

```
WARN setattr{req=11 ino=2 name="existing-file.txt"}: 
mountpoint_s3::fuse: setattr failed: file overwrite is disabled by default, you need to remount with --allow-overwrite flag and open the file in truncate mode (O_TRUNC) to overwrite it
```

## Deleting file

In order to delete files using Mountpoint user need to enable it using `--allow-delete` CLI flag. To know more about the behaviour of file deletion, please visit [Delete Semantics](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#deletes)
Without the flag, if a customer tries to delete, for example test-file.txt, they will get the following error -

```
$ rm test-file.txt
rm: cannot remove 'test-file.txt': Operation not permitted
```

In Mountpoint's logs, similar message will be emitted:

```
WARN unlink{req=8 parent=1 name="test-file.txt"}: 
mountpoint_s3::fuse: unlink failed: Deletes are disabled. Use '--allow-delete' mount option to enable it.
```

## Listing file which is shadowed by directory of same name

A file system directory cannot contain both a file and a directory of the same name. If your bucket's directory structure would result in this state, only the directory will be accessible. The object will not be accessible. 
For more details on how Mountpoint maps S3 object keys to files and directories, see the [semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#mapping-s3-object-keys-to-files-and-directories). 
For example, our bucket contains the following object keys:

* out
* out/image.jpg

When listing the content of a directory mounting the bucket in the example above:

```
$ ls
out
```

Mountpoint logs will show an entry like this:

```
WARN readdir{req=5 ino=1 fh=2 offset=17}: 
mountpoint_s3::inode::readdir::ordered:file 'out' (full key "out") is omitted because another directory 'out' exist with the same name.
```

Although, in S3 express one zone bucket both file and directory will be shown without the above warning being emitted. 

## Renaming a file/directory

Renaming a file or a directory inside the mounted directory is not supported by Mountpoint.
Attempting to rename will give error like: 

```
$ mv hello.txt hello_new.txt
mv: rename hello.txt to hello_new.txt: Function not implemented
```

Mountpoint logs will show following message for the above error:

```
rename{req=2 parent=1 name="" newparent=1 newname=""}: mountpoint_s3::fuse: rename failed: operation not supported by Mountpoint
```

## Accessing Glacier objects

Objects in the Glacier Flexible Retrieval and Glacier Deep Archive storage classes, and the Archive Access and Deep Archive Access tiers of S3 Intelligent-Tiering, are not accessible with Mountpoint. To access these objects with Mountpoint, restore or copy them to another storage class first.
When listing or trying to access objects in these storage classes, Mountpoint logs will show entries like:

```
WARN readdirplus{req=10 ino=1 fh=1 offset=0}: 
mountpoint_s3::inode: objects in the GLACIER and DEEP_ARCHIVE storage classes are only accessible if restored
```

```
WARN lookup{req=6 ino=1 name="class_GLACIER"}: 
mountpoint_s3::inode: objects in the GLACIER and DEEP_ARCHIVE storage classes are only accessible if restored
```

## Modifying metadata

Mountpoint does not support modifying metadata such as file modification times and file size. If user try to modify, for example file modification time using `touch`, user will get following error:
 
```
$ touch -a -m -t 201512180130.09 init.txt
touch: init.txt: Operation not permitted
```

And the Mountpoint Logs will show:

```
WARN setattr{req=4 ino=21 name="init.txt"}: 
mountpoint_s3::fuse: setattr failed: inode error: inode 21 (full key "init.txt") is a remote inode and its attributes cannot be modified
```

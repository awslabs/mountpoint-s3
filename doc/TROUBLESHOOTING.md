# Troubleshooting Production Issues related to Unsupported Operations in Mountpoint

Mountpoint enables users to access S3 buckets through local filesystem. While this allows for existing workflows and applications to work with S3 unchanged, it also limits the effective API for Mountpoint to be a subset of the filesystem API.
So, there are a few operations in filesystem API which are not supported using Mountpoint on a mounted bucket. Here, we are enumerating those common cases with their errors reported in the logs which customers face. Please look at [SEMANTICS document](doc/SEMANTICS.md) for more information on what operations are allowed in Mountpoint.

| Unsupported Operation | Error Codes Reported |
| --------------------- | -------------------- |
| Non-sequential Write
| Mountpoint only supports sequential writes. On random out of order writes users should expect `Invalid Argument`. For example - 
```
$ dd if=/dev/random of=out seek=1 count=1
dd: writing to 'out': Invalid argument
```
In the logs, we get the following WARN message - 
```
WARN write{req=52 ino=49 fh=3 offset=512 length=512 name="out"}: mountpoint_s3::fuse: write failed:\
 upload error: out of order write NOT supported by Mountpoint, aborting the upload; expected offset 0 but got 512
 ```
|
| Writing to an existing File 
| Mountpoint does support overwriting to existing file using mount option `--allow-overwrite` . Trying to open an existing file for writing without `--allow-overwrite`  flag will fail with the error: `Operation not permitted`.
In the logs, we get the following WARN message - 
```
WARN file overwrite is disabled by default, you need to remount with --allow-overwrite flag and open the file in truncate mode (O_TRUNC) to overwrite it
```
|
| Deleting file (`rm` without mount option `--allow-delete`)
| In order to delete files using Mountpoint user need to enable it using `--allow-delete` mount option. To know more about the behaviour of file deletion, please visit [Delete Semantics](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#deletes)
Without the flag, if a customer tries to run  `rm test-file.txt` command, they will see the following error:
`rm: cannot remove 'test-file.txt': Operation not permitted`
In the logs, this will show up as 
```
WARN unlink{req=8 parent=1 name="test-file.txt"}: mountpoint_s3::fuse: unlink failed: Deletes are disabled. \
Use '--allow-delete' mount option to enable it.
```
|
| Listing file which is shadowed by directory of same name
| A file system directory cannot contain both a file and a directory of the same name. If your bucket's directory structure would result in this state, only the directory will be accessible. For example, our bucket contains the following object keys:
  blue
  blue/image.jpg

then mounting your bucket with Mountpoint will show only the blue directory, containing the file image.jpg. The blue object will not be accessible. For more details on how Mountpoint maps S3 object keys to files and directories, see the [semantics documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#mapping-s3-object-keys-to-files-and-directories). 
When listing the content of a directory mounting the bucket in the example above, the logs will show an entry like this:
```
WARN readdir{req=5 ino=1 fh=2 offset=17}: mountpoint_s3::inode::readdir::ordered:\
file 'out' (full key "out") is omitted because another directory 'out' exist with the same name.
```
|
| Moving a file/directory
| Mountpoint supports moving files from another filesystem into the mounted directory. But, renaming a file or a directory inside the mounted directory is not supported by Mountpoint and attempting it will give error like `mv: rename hello.txt to hello_new.txt: Function not implemented`.
The logs will show following message for the above error - 
```
rename{req=2 parent=1 name="" newparent=1 newname=""}: mountpoint_s3::\
fuse: rename failed: operation not supported by Mountpoint
```
|
| Accessing Glacier Objects
| Objects in the Glacier Flexible Retrieval and Glacier Deep Archive storage classes, and the Archive Access and Deep Archive Access tiers of S3 Intelligent-Tiering, are not accessible with Mountpoint. To access these objects with Mountpoint, restore or copy them to another storage class first.
When listing or trying to access objects in these storage classes, the logs will show entries like:
```
WARN readdirplus{req=10 ino=1 fh=1 offset=0}: mountpoint_s3::inode: objects in \
the GLACIER and DEEP_ARCHIVE storage classes are only accessible if restored
```
|
| Modifying file modification time and Sizes
| Mountpoint does not support modifying File Modification times and file size metadata. If user try to modify, for example file modification time using `touch`, user will get the error `Operation not permitted`. In the logs, user can see - 
```
WARN setattr{req=5 ino=18 name="ini.txt"}: mountpoint_s3::fuse: setattr failed: inode error: \
inode 18 (full key "ini.txt") is a remote inode and its attributes cannot be modified
```
|
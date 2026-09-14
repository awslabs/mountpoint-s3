# Mountpoint for Amazon S3 on macOS

Mountpoint runs on macOS through [FUSE-T](https://www.fuse-t.org/), which serves the mount to the
host's NFS client instead of loading a kernel extension. Prebuilt packages are Linux only, so on
macOS you build Mountpoint from source.

The mount behaves the same as on Linux for reading, writing, listing and deleting objects. The
differences that remain are listed under [Behaviour differences](#behaviour-differences), and they
come from the NFS client rather than from S3.

## Install with the script

From a clone of this repository:

```bash
git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git
cd mountpoint-s3
./install-macos.sh
```

`install-macos.sh` checks that you have the build tools, installs FUSE-T if `pkg-config` cannot
already find it, builds `mount-s3`, and installs the binary into `/usr/local/bin` — the same steps
the rest of this section describes by hand. It asks before downloading FUSE-T, and installs it for
your user only, which needs no administrator rights. Useful options:

* `--prefix DIR` installs the binary somewhere else. `sudo` is used only when the directory you name
  is not writable by you, so `--prefix "$HOME/.local/bin"` avoids it entirely.
* `--skip-fuse-t` fails rather than installing FUSE-T, if you would rather install it yourself.
* `--yes` does not ask before installing FUSE-T.

Binaries built this way are not officially supported by AWS, as is the case for any build from
source. The rest of this document is what the script does, and is worth reading if it fails.

## Install FUSE-T

Install FUSE-T from its [releases page](https://github.com/macos-fuse-t/fuse-t/releases) or with
`brew install --cask macos-fuse-t/homebrew-cask/fuse-t`. It needs no kernel extension and no reboot.
Mountpoint is tested against FUSE-T 1.2.7.

FUSE-T's own installer can install it for one user instead of the whole machine, which is what
`install-macos.sh` does and needs no administrator rights:

```bash
installer -pkg fuse-t-macos-installer-1.2.7.pkg -target CurrentUserHomeDirectory
```

That leaves it under `$HOME/.fuse-t`, where FUSE-T's library looks before the system prefix. One
thing to fix up afterwards: the `pkg-config` files it copies there still name `/usr/local` as their
prefix, so edit `prefix=` in `$HOME/.fuse-t/usr/local/lib/pkgconfig/fuse-t.pc` and `fuse3.pc` to
point at `$HOME/.fuse-t/usr/local`, or the build will not find the library.

The build finds FUSE-T through `pkg-config`. If you installed it anywhere other than a default
system prefix — including a relocated copy under your home directory, which works because FUSE-T
needs no privileged component — point `pkg-config` at it and check that it answers:

```bash
export PKG_CONFIG_PATH="$HOME/.fuse-t/usr/local/lib/pkgconfig"
pkg-config --modversion fuse-t   # should print 1.0 or later
```

Keep that variable set for every `cargo` command, including `cargo test` and `cargo clippy`. Without
it the build falls back to looking for macFUSE, and fails if that is not installed either.

## Build Mountpoint

Nothing else is needed: the workspace already asks the vendored `mountpoint-s3-fuser` crate for its
`libfuse` feature, which is the one that links against a FUSE library rather than talking to a FUSE
kernel module.

```bash
export PKG_CONFIG_PATH="$HOME/.fuse-t/usr/local/lib/pkgconfig"
cargo build --release -p mountpoint-s3
```

The binary lands in `target/release/mount-s3`. Install it so that you can run it by name, as the
prebuilt Linux packages do:

```bash
sudo install -m 755 target/release/mount-s3 /usr/local/bin/
mount-s3 --version
```

Mount a bucket with it as you would on Linux:

```bash
mkdir -p ~/s3
mount-s3 my-bucket ~/s3 --region us-east-1
```

`mount-s3` needs both a bucket and an existing directory to mount it on; run with no arguments it
only prints its usage.

`umount ~/s3` unmounts it. FUSE-T writes its own logs to `~/Library/Logs/fuse-t/`, which is the
first place to look if a mount never appears.

## Behaviour differences

macOS reaches the mount over NFS, and the NFS client differs from a FUSE kernel in ways Mountpoint
has to account for. These are handled for you; they are documented because they are visible in logs
and in the guarantees the mount offers.

### Writes can arrive out of order

The NFS client issues many writes concurrently without waiting for each reply, so writes for one
file can reach Mountpoint with adjacent chunks swapped. Mountpoint uploads an object as it is
written and can only accept writes in offset order, so it holds early writes in a bounded buffer
(8 MiB per handle) and releases them once the gap before them is filled. Writes further out of order
than that are genuine random access, and are still rejected as they are on Linux.

### `fsync` does not finish a multipart upload

The NFS client sends COMMIT while it is still writing a file, and that reaches Mountpoint as FSYNC.
Completing a multipart upload is final, so honouring it would leave every write that follows failing
against a finished upload. On macOS the object is therefore finished when the file is closed, not
when the application calls `fsync`. Data written before the `fsync` is already on its way to S3;
only the point at which the object becomes visible to other S3 clients is deferred.

`--incremental-upload` is unaffected: committing an incremental upload starts a fresh request at the
offset reached, so `fsync` keeps its usual meaning. That flag needs a bucket in the S3 Express One
Zone storage class, as it does on Linux.

### Truncation arrives after the open

FUSE-T cannot tell Mountpoint that an application opened a file to truncate it: it sends an `O_RDWR`
open with no `O_TRUNC`, and asks for size 0 afterwards. Mountpoint turns the handles open on the file
into write handles when that request arrives, which is what `O_TRUNC` on the open would have
produced. Overwriting an existing object therefore works, but it needs `--allow-overwrite`.

### Extended attributes are not copied

This mount has no extended attributes of its own, so macOS keeps the ones an application asks for in
an AppleDouble file named `._` followed by the name of the file they belong to. macOS builds each of
those files by rewriting it in place as attributes are added, which an S3 object cannot be, so the
upload would fail partway and macOS would delete the object again — and while that was happening, a
directory whose only object was the half-written sidecar could disappear from under the tools writing
into it, which FUSE-T does not survive.

Mountpoint therefore refuses to create a `._`-prefixed file on macOS. Tools that copy metadata report
it: `cp -R` prints `could not copy extended attributes` and exits non-zero, and `unzip` prints
`set times/attribs failed`. The files themselves are copied in full — `diff -r` against the source
confirms it — and the bucket holds only the files, with no sidecar objects.

### Appending to an existing object can report success

Appending to an object that has already been uploaded is not supported, here or on Linux, because S3
cannot modify an object in place. On macOS the refusal does not always reach the application: the NFS
client answers a small write from its own cache and drops the error, so a shell `>>` redirect exits 0
while the object is left exactly as it was. Larger appends, and any application that calls `fsync`,
do see the failure as `EIO`.

Check the object rather than the exit code if an append matters, and expect one
`write failed with errno 9` warning in the Mountpoint log for each attempt — including one for the
stale page the NFS client writes back afterwards. Overwriting the whole file (`>` rather than `>>`,
with `--allow-overwrite`) is the supported way to replace its contents.

### Renaming is answered with `EXDEV`, so applications copy instead

Renaming an object needs the `RenameObject` API, which exists only for directory buckets, so a
general purpose bucket cannot rename (this is true on Linux as well). On macOS the refusal is
reported as `EXDEV`, "cross-device link", rather than the `ENOSYS` Linux reports. Two reasons: the
NFS client turns `ENOSYS` into `EPERM`, which would tell an application it lacks permission on a
mount where no permission would help, and `EXDEV` is the answer tools already know how to handle.

`mv` responds to it by copying the file and unlinking the source, so `mv` works here — it just costs
a full download and upload rather than being a metadata operation, and it is not atomic. That also
covers the applications, including many GUI editors and Finder, that save a file by writing a
temporary copy and renaming it over the original: the rename resolves to a copy and the temporary
file does not survive. An application that calls `rename` directly and treats every failure as fatal
still cannot save; write over the file in place instead, which works with `--allow-overwrite`.

Finder's own `.DS_Store` is written whole the first time and then rewritten in place, which fails
with `EIO`. Nothing else is affected when it does, and Finder keeps working without it.

## What is not supported

* Renaming as a metadata operation. `rename` reports `EXDEV` on macOS and `ENOSYS` on Linux, because
  it needs the `RenameObject` API that only directory buckets have. `mv` still succeeds on macOS by
  copying, as described [above](#renaming-is-answered-with-exdev-so-applications-copy-instead).
* `touch` and anything else that sets a file's times fails with `EPERM` on an object Mountpoint did
  not write in this session, as it does on Linux: the times come from the object.
* Extended attributes, and so the AppleDouble sidecars macOS stores them in, as described above.
* Everything listed as unsupported in [SEMANTICS.md](SEMANTICS.md) is unsupported here as well.

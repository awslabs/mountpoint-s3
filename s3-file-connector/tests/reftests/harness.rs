use crate::common::{make_test_filesystem, ReadReply};
use crate::reftests::reference::{Node, Reference};
use futures::future::{BoxFuture, FutureExt};
use s3_client::mock_client::{MockClient, MockObject};
use s3_file_connector::{
    fs::{Inode, FUSE_ROOT_INODE},
    {S3Filesystem, S3FilesystemConfig},
};
use std::collections::HashSet;
use std::fmt::Debug;
use std::sync::Arc;
use test_case::test_case;

struct Harness {
    prefix: &'static str,
    reference: Reference,
    client: Arc<MockClient>,
    fs: S3Filesystem<Arc<MockClient>>,
}

impl Debug for Harness {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Harness")
            .field("prefix", &self.prefix)
            .field("reference", &self.reference)
            .field("client", &self.client)
            .finish()
    }
}

impl Harness {
    fn new(prefix: &'static str, config: S3FilesystemConfig) -> Self {
        let reference = Reference::new();
        let (client, fs) = make_test_filesystem("harness", prefix, config);
        Self {
            prefix,
            reference,
            client,
            fs,
        }
    }

    pub fn add_file(&mut self, path: &str, pattern: u8, length: usize) {
        self.reference.add_file(&format!("/{}", path), pattern, length);
        let object = MockObject::constant(pattern, length);
        self.client.add_object(&format!("{}{}", self.prefix, path), object);
    }

    fn compare_contents_recursive<'a>(
        &'a self,
        fs_parent: Inode,
        fs_dir: Inode,
        ref_dir: &'a Node,
    ) -> BoxFuture<'a, ()> {
        async move {
            let dir_handle = self.fs.opendir(fs_dir, 0).await.unwrap().fh;
            let children = ref_dir.children();
            let mut keys = children.keys().cloned().collect::<HashSet<_>>();

            let mut reply = Default::default();
            let _reply = self.fs.readdir(fs_dir, dir_handle, 0, &mut reply).await.unwrap();

            // TODO `stat` on these needs to work
            let e0 = reply.entries.pop_front().unwrap();
            assert_eq!(e0.name, ".");
            assert_eq!(e0.ino, fs_dir);

            let e1 = reply.entries.pop_front().unwrap();
            assert_eq!(e1.name, "..");
            assert_eq!(e1.ino, fs_parent);

            let mut offset = e0.offset.max(e1.offset);

            while !reply.entries.is_empty() {
                while let Some(reply) = reply.entries.pop_front() {
                    let name = &reply.name.as_os_str().to_str().unwrap().to_string();
                    let fs_kind = reply.attr.kind;

                    match children.get(name) {
                        Some(node) => {
                            let ref_kind = node.file_type();
                            assert_eq!(
                                fs_kind, ref_kind,
                                "for file {:?} expecting {:?} found {:?}",
                                name, ref_kind, fs_kind
                            );
                            if let Node::File(ref_object) = node {
                                self.compare_file(reply.ino, ref_object).await;
                            } else {
                                // Recurse into directory
                                self.compare_contents_recursive(fs_dir, reply.ino, node).await;
                            }
                            assert!(keys.remove(name));
                        }
                        None => panic!("file {:?} not found in the reference", name),
                    }

                    offset = offset.max(reply.offset);
                }
                reply = Default::default();
                let _reply = self.fs.readdir(fs_dir, dir_handle, offset, &mut reply).await.unwrap();
            }

            assert!(
                keys.is_empty(),
                "reference contained elements not in the filesystem: {:?}",
                keys
            );

            // Not implemented
            // self.fs.releasedir(dir_handle).unwrap();
        }
        .boxed()
    }

    async fn compare_file<'a>(&'a self, fs_file: Inode, ref_file: &'a MockObject) {
        let fh = self.fs.open(fs_file, 0x8000).await.unwrap().fh;
        let mut offset = 0;
        const MAX_READ_SIZE: usize = 4_096;
        let file_size = ref_file.len();
        while offset < file_size {
            let mut read = Err(0);
            let num_bytes = MAX_READ_SIZE.min(file_size - offset);
            self.fs
                .read(
                    fs_file,
                    fh,
                    offset as i64,
                    num_bytes as u32,
                    0,
                    None,
                    ReadReply(&mut read),
                )
                .await;
            let fs_bytes = read.unwrap();
            assert_eq!(fs_bytes.len(), num_bytes);
            let ref_bytes = ref_file.read(offset as u64, num_bytes);
            assert_eq!(ref_bytes, fs_bytes);
            offset += num_bytes;
        }
    }

    async fn compare_contents(&self) {
        // Walk the filesystem tree and check that at each level, contents match the reference
        let root = self.reference.root();
        self.compare_contents_recursive(FUSE_ROOT_INODE, FUSE_ROOT_INODE, root)
            .await;
    }
}

#[test_case(""; "unprefixed")]
#[test_case("test_prefix/"; "prefixed")]
#[tokio::test]
async fn reference_smoke_test(prefix: &'static str) {
    let config = S3FilesystemConfig {
        readdir_size: 5,
        ..Default::default()
    };
    let mut harness = Harness::new(prefix, config);

    for i in 0..15 {
        let key = format!("foo/file{}.txt", i);
        harness.add_file(&key, 0xa0 + i as u8, 15 + i);
    }

    harness.compare_contents().await;
}

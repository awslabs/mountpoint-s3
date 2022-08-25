use std::collections::HashMap;
use std::ffi::OsStr;
use std::sync::atomic::{AtomicU64, Ordering};
use std::sync::{Arc, Mutex, RwLock};
use std::time::{Duration, UNIX_EPOCH};

use clap::{Arg, Command};
use fuser::{
    BackgroundSession, FileAttr, FileType, Filesystem, KernelConfig, MountOption, ReplyAttr,
    ReplyData, ReplyDirectory, ReplyEntry, ReplyOpen, Request, Session,
};
use s3_client::{S3Client, S3ClientConfig, StreamingGetObject};

const ROOT_INODE: u64 = 1;
const FILE_INODE: u64 = 2;

const TTL_ZERO: Duration = Duration::from_secs(0);

const ROOT_DIR_ATTR: FileAttr = FileAttr {
    ino: ROOT_INODE,
    size: 0,
    blocks: 0,
    atime: UNIX_EPOCH, // 1970-01-01 00:00:00
    mtime: UNIX_EPOCH,
    ctime: UNIX_EPOCH,
    crtime: UNIX_EPOCH,
    kind: FileType::Directory,
    perm: 0o755,
    nlink: 2,
    uid: 501,
    gid: 20,
    rdev: 0,
    flags: 0,
    blksize: 512,
};

const BLOCK_SIZE: u64 = 4096;

struct FuseSyncFS {
    client: Arc<S3Client>,
    bucket: String,
    key: String,
    size: usize,
    inflight_reads: RwLock<HashMap<u64, Mutex<StreamingGetObject>>>,
    next_handle: AtomicU64,
}

impl FuseSyncFS {
    fn new(client: S3Client, bucket: &str, key: &str, size: usize) -> Self {
        Self {
            client: Arc::new(client),
            bucket: bucket.to_string(),
            key: key.to_string(),
            size,
            inflight_reads: Default::default(),
            next_handle: AtomicU64::new(1),
        }
    }
}

fn make_benchmark_file_attr(ino: u64, size: usize) -> FileAttr {
    FileAttr {
        ino,
        size: size as u64,
        blocks: (size as u64) / BLOCK_SIZE,
        atime: UNIX_EPOCH, // 1970-01-01 00:00:00
        mtime: UNIX_EPOCH,
        ctime: UNIX_EPOCH,
        crtime: UNIX_EPOCH,
        kind: FileType::RegularFile,
        perm: 0o644,
        nlink: 1,
        uid: 501,
        gid: 20,
        rdev: 0,
        flags: 0,
        blksize: BLOCK_SIZE as u32,
    }
}

impl Filesystem for FuseSyncFS {
    fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        let _ = config.set_max_readahead(0);
        Ok(())
    }

    fn lookup(&self, _req: &Request, parent: u64, name: &OsStr, reply: ReplyEntry) {
        if parent == 1 {
            if name.to_str().map(|s| s == self.key).unwrap_or(false) {
                reply.entry(
                    &TTL_ZERO,
                    &make_benchmark_file_attr(FILE_INODE, self.size),
                    0,
                );
            } else {
                reply.error(libc::ENOENT);
            }
        } else {
            reply.error(libc::ENOENT);
        }
    }

    fn getattr(&self, _req: &Request, ino: u64, reply: ReplyAttr) {
        if ino == ROOT_INODE {
            reply.attr(&TTL_ZERO, &ROOT_DIR_ATTR);
        } else if ino == FILE_INODE {
            reply.attr(&TTL_ZERO, &make_benchmark_file_attr(FILE_INODE, self.size));
        } else {
            reply.error(libc::ENOENT);
        }
    }

    fn open(&self, _req: &Request<'_>, _ino: u64, _flags: i32, reply: ReplyOpen) {
        let fh = self.next_handle.fetch_add(1, Ordering::SeqCst);
        reply.opened(fh, 0);
    }

    fn read(
        &self,
        _req: &Request,
        ino: u64,
        fh: u64,
        offset: i64,
        size: u32,
        _flags: i32,
        _lock: Option<u64>,
        reply: ReplyData,
    ) {
        if ino == FILE_INODE {
            let mut inflight_reads = self.inflight_reads.read().unwrap();
            if !inflight_reads.contains_key(&fh) {
                drop(inflight_reads);
                let mut inflight_reads_mut = self.inflight_reads.write().unwrap();
                let request = StreamingGetObject::new(
                    Arc::clone(&self.client),
                    &self.bucket,
                    &self.key,
                    self.size as u64,
                );
                inflight_reads_mut.insert(fh, Mutex::new(request));
                drop(inflight_reads_mut);
                inflight_reads = self.inflight_reads.read().unwrap();
            }
            let mut inflight_read = inflight_reads.get(&fh).unwrap().lock().unwrap();
            let body = inflight_read.read(offset as u64, size as usize);
            reply.data(&body);
        } else {
            reply.error(libc::ENOENT);
        }
    }

    fn readdir(&self, _req: &Request, ino: u64, _fh: u64, offset: i64, mut reply: ReplyDirectory) {
        if ino != 1 {
            reply.error(libc::ENOENT);
            return;
        }

        let mut entries = vec![
            (1, FileType::Directory, "."),
            (1, FileType::Directory, ".."),
        ];

        entries.push((FILE_INODE, FileType::RegularFile, &self.key));

        for (i, entry) in entries.into_iter().enumerate().skip(offset as usize) {
            // i + 1 means the index of the next entry
            if reply.add(entry.0 as u64, (i + 1) as i64, entry.1, entry.2) {
                break;
            }
        }
        reply.ok();
    }
}

fn init_tracing_subscriber() {
    tracing_subscriber::fmt::init();

    // Or to send it to stderr instead...
    // use tracing_subscriber::util::SubscriberInitExt as _;

    // let subscriber = tracing_subscriber::fmt::Subscriber::builder()
    //     .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
    //     .with_writer(std::io::stderr)
    //     .finish();

    // subscriber
    //     .try_init()
    //     .expect("unable to install global subscriber");
}

fn main() {
    let matches = Command::new("fuse_sync")
        .arg(
            Arg::new("MOUNT_POINT")
                .required(true)
                .help("Act as a client, and mount FUSE at given path"),
        )
        .arg(
            Arg::new("BUCKET_NAME")
                .required(true)
                .help("Bucket to mount"),
        )
        .arg(Arg::new("KEY_NAME").required(true).help("Key to mount"))
        .arg(
            Arg::new("FILE_SIZE")
                .required(true)
                .value_parser(clap::value_parser!(u64).range(0..))
                .help("Size of object the key references"),
        )
        .arg(
            Arg::new("auto_unmount")
                .long("auto_unmount")
                .help("Automatically unmount on process exit"),
        )
        .arg(
            Arg::new("allow-root")
                .long("allow-root")
                .help("Allow root user to access filesystem"),
        )
        .arg(
            Arg::new("throughput-target-gbps")
                .long("throughput-target-gbps")
                .help("Desired throughput in Gbps")
                .takes_value(true)
                .value_parser(clap::value_parser!(u64).range(1..)),
        )
        .arg(
            Arg::new("part-size")
                .long("part-size")
                .help("Part size for multi-part GET and PUT")
                .takes_value(true)
                .value_parser(clap::value_parser!(u64).range(1..)),
        )
        .arg(
            Arg::new("threads")
                .long("threads")
                .help("Number of FUSE daemon threads")
                .takes_value(true)
                .value_parser(clap::value_parser!(u64).range(1..)),
        )
        .get_matches();

    init_tracing_subscriber();

    let mountpoint = matches.value_of("MOUNT_POINT").unwrap();
    let bucket_name = matches.value_of("BUCKET_NAME").unwrap();
    let key_name = matches.value_of("KEY_NAME").unwrap();
    let file_size: u64 = *matches.get_one("FILE_SIZE").unwrap();
    let throughput_target_gbps = matches.get_one::<u64>("throughput-target-gbps");
    let part_size = matches.get_one::<u64>("part-size");
    let thread_count = matches.get_one::<u64>("threads");

    let mut options = vec![
        MountOption::RO,
        MountOption::FSName("fuse_sync".to_string()),
    ];
    if matches.is_present("auto_unmount") {
        options.push(MountOption::AutoUnmount);
    }
    if matches.is_present("allow-root") {
        options.push(MountOption::AllowRoot);
    }

    let config = S3ClientConfig {
        throughput_target_gbps: throughput_target_gbps.map(|t| *t as f64),
        part_size: part_size.map(|t| *t as usize),
    };
    let client = S3Client::new(config).expect("failed to creeate client");

    let session = Session::new(
        FuseSyncFS::new(client, bucket_name, key_name, file_size as usize),
        mountpoint.as_ref(),
        &options,
    )
    .unwrap();

    let session = if let Some(thread_count) = thread_count {
        BackgroundSession::new_multi_thread(session, *thread_count as usize)
    } else {
        BackgroundSession::new(session)
    };
    let session = session.expect("could not start FUSE session");

    let (sender, receiver) = std::sync::mpsc::sync_channel(0);

    ctrlc::set_handler(move || {
        let _ = sender.send(());
    })
    .unwrap();

    let _ = receiver.recv();

    drop(session);
}

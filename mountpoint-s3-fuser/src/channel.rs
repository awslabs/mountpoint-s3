use std::{
    fs::{File, OpenOptions},
    io,
    os::{
        fd::{AsFd, BorrowedFd},
        unix::prelude::AsRawFd,
    },
    sync::Arc,
};
#[cfg(fuser_fuse_t)]
use std::{mem, sync::Mutex};

use libc::{c_int, c_void, size_t};
use nix::Result as NixResult;
use nix::ioctl_read;

#[cfg(fuser_fuse_t)]
use crate::ll::fuse_abi::fuse_in_header;
#[cfg(feature = "abi-7-40")]
use crate::passthrough::BackingId;
use crate::reply::ReplySender;

/// FUSE_DEV_IOC_CLONE ioctl constant matching the constant defined by the FUSE kernel module in fuse.h
const IOCTL_FUSE_DEV_IOC_CLONE: u8 = 229;

ioctl_read!(
    /// Ioctl to clone a fuse session onto a new file handle
    fuse_dev_ioc_clone,
    IOCTL_FUSE_DEV_IOC_CLONE,
    0,
    libc::c_int
);

/// Length of the complete request at the start of `buffer`, or `None` if more bytes are needed.
#[cfg(fuser_fuse_t)]
fn request_len(buffer: &[u8]) -> io::Result<Option<usize>> {
    // `len` is the first field of `fuse_in_header`: a native-endian u32 counting the header
    // and the arguments that follow it.
    let Some(len) = buffer.get(..mem::size_of::<u32>()) else {
        return Ok(None);
    };
    let len = u32::from_ne_bytes(len.try_into().expect("slice is 4 bytes")) as usize;
    if len < mem::size_of::<fuse_in_header>() {
        return Err(io::Error::new(
            io::ErrorKind::InvalidData,
            format!("FUSE request length {len} is shorter than the request header"),
        ));
    }
    Ok((buffer.len() >= len).then_some(len))
}

/// A raw communication channel to the FUSE kernel driver
#[derive(Debug)]
pub struct Channel {
    device: Arc<File>,
    /// Bytes already read from the channel that do not yet form a complete request.
    ///
    /// Its lock also serialises readers, which stream reassembly requires.
    #[cfg(fuser_fuse_t)]
    pending: Arc<Mutex<Vec<u8>>>,
    /// Serialises writers so that replies are not interleaved within the byte stream.
    #[cfg(fuser_fuse_t)]
    send_lock: Arc<Mutex<()>>,
}

impl AsFd for Channel {
    fn as_fd(&self) -> BorrowedFd<'_> {
        self.device.as_fd()
    }
}

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel.
    pub(crate) fn new(device: Arc<File>) -> Self {
        Self {
            device,
            #[cfg(fuser_fuse_t)]
            pending: Arc::new(Mutex::new(Vec::new())),
            #[cfg(fuser_fuse_t)]
            send_lock: Arc::new(Mutex::new(())),
        }
    }

    /// Create a worker channel by opening a new /dev/fuse file descriptor and
    /// associating it with the session using FUSE_DEV_IOC_CLONE ioctl.
    pub fn clone_channel(&self) -> io::Result<Self> {
        let worker_file = OpenOptions::new()
            .read(true)
            .write(true)
            .open("/dev/fuse")?;
        let worker_fd = worker_file.as_raw_fd();
        let mut session_fd = self.device.as_raw_fd();

        // Associate the worker fd with the session fd using FUSE_DEV_IOC_CLONE
        // SAFETY: `session_fd` is a valid open file descriptor. The ioctl
        // FUSE_DEV_IOC_CLONE expects a pointer to an int containing the fd
        // to clone from. The pointer is valid for the duration of the call.
        let result: NixResult<libc::c_int> = unsafe {
            let val = &mut session_fd as *mut libc::c_int;
            fuse_dev_ioc_clone(worker_fd, val)
        };

        if let Err(err) = result {
            return Err(io::Error::new(io::ErrorKind::Other, err));
        }
        Ok(Self::new(Arc::new(worker_file)))
    }

    /// Receives a single request from the channel (can block).
    pub fn receive(&self, buffer: &mut [u8]) -> io::Result<usize> {
        #[cfg(fuser_fuse_t)]
        return self.receive_request(buffer);
        #[cfg(not(fuser_fuse_t))]
        self.read(buffer)
    }

    /// Reads once from the channel, up to the capacity of the given buffer.
    fn read(&self, buffer: &mut [u8]) -> io::Result<usize> {
        let rc = unsafe {
            libc::read(
                self.device.as_raw_fd(),
                buffer.as_mut_ptr() as *mut c_void,
                buffer.len() as size_t,
            )
        };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            Ok(rc as usize)
        }
    }

    /// Reassembles exactly one request from the channel's byte stream.
    ///
    /// FUSE-T's channel is a `SOCK_STREAM` socketpair rather than the message-oriented
    /// `/dev/fuse` device, so one read may return only part of a request, or several
    /// concatenated requests. Callers expect one request per call, so split the stream back
    /// into requests using the length prefix in `fuse_in_header`. Without this, trailing
    /// requests are silently dropped and never replied to, which hangs the mount.
    #[cfg(fuser_fuse_t)]
    fn receive_request(&self, buffer: &mut [u8]) -> io::Result<usize> {
        // Held for the whole call so that concurrent readers cannot interleave reads.
        let mut pending = self.pending.lock().expect("pending buffer lock poisoned");
        loop {
            if let Some(len) = request_len(&pending)? {
                if len > buffer.len() {
                    return Err(io::Error::new(
                        io::ErrorKind::InvalidData,
                        format!(
                            "FUSE request of {len} bytes exceeds the {} byte receive buffer",
                            buffer.len()
                        ),
                    ));
                }
                buffer[..len].copy_from_slice(&pending[..len]);
                pending.drain(..len);
                return Ok(len);
            }

            if pending.is_empty() {
                // Nothing buffered, so read straight into the caller's buffer and only take a
                // copy of whatever is left over.
                let read = self.read_or_disconnected(buffer)?;
                match request_len(&buffer[..read])? {
                    Some(len) if len == read => return Ok(len),
                    Some(len) => {
                        pending.extend_from_slice(&buffer[len..read]);
                        return Ok(len);
                    }
                    _ => pending.extend_from_slice(&buffer[..read]),
                }
            } else {
                // Append another read's worth of bytes to what we have already buffered.
                let buffered = pending.len();
                pending.resize(buffered + buffer.len(), 0);
                let read = self.read_or_disconnected(&mut pending[buffered..]);
                pending.truncate(buffered + read.as_ref().copied().unwrap_or(0));
                read?;
            }
        }
    }

    /// Reads once, reporting a closed channel as `ENODEV` so the session loop treats it as an
    /// unmount rather than spinning on an endless stream of zero-length reads.
    #[cfg(fuser_fuse_t)]
    fn read_or_disconnected(&self, buffer: &mut [u8]) -> io::Result<usize> {
        match self.read(buffer)? {
            0 => Err(io::Error::from_raw_os_error(libc::ENODEV)),
            read => Ok(read),
        }
    }

    /// Returns a sender object for this channel. The sender object can be
    /// used to send to the channel. Multiple sender objects can be used
    /// and they can safely be sent to other threads.
    pub fn sender(&self) -> ChannelSender {
        // Since write/writev syscalls are threadsafe, we can simply create
        // a sender by using the same file and use it in other threads.
        ChannelSender {
            device: self.device.clone(),
            #[cfg(fuser_fuse_t)]
            send_lock: self.send_lock.clone(),
        }
    }
}

#[derive(Clone, Debug)]
pub struct ChannelSender {
    device: Arc<File>,
    /// Shared with the [Channel] this sender came from, and with its other senders.
    #[cfg(fuser_fuse_t)]
    send_lock: Arc<Mutex<()>>,
}

impl ChannelSender {
    /// Writes the given buffers in one syscall, returning how many bytes were accepted.
    fn writev(&self, bufs: &[io::IoSlice<'_>]) -> io::Result<usize> {
        let rc = unsafe {
            libc::writev(
                self.device.as_raw_fd(),
                bufs.as_ptr() as *const libc::iovec,
                bufs.len() as c_int,
            )
        };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            Ok(rc as usize)
        }
    }

    /// Writes every buffer, retrying until they have all been accepted.
    #[cfg(fuser_fuse_t)]
    fn send_all(&self, bufs: &[io::IoSlice<'_>]) -> io::Result<()> {
        let total: usize = bufs.iter().map(|b| b.len()).sum();
        let mut sent = self.writev(bufs)?;
        while sent < total {
            if sent == 0 {
                return Err(io::Error::new(
                    io::ErrorKind::WriteZero,
                    "FUSE channel accepted none of the reply",
                ));
            }
            // Rebuild the iovec from the point the last write stopped at: skip the buffers
            // already sent whole, then the consumed prefix of the buffer it stopped inside.
            let mut skip = sent;
            let mut rest = Vec::with_capacity(bufs.len());
            for buf in bufs {
                if skip >= buf.len() {
                    skip -= buf.len();
                    continue;
                }
                rest.push(io::IoSlice::new(&buf[skip..]));
                skip = 0;
            }
            sent += self.writev(&rest)?;
        }
        Ok(())
    }
}

impl ReplySender for ChannelSender {
    fn send(&self, bufs: &[io::IoSlice<'_>]) -> io::Result<()> {
        #[cfg(fuser_fuse_t)]
        {
            // FUSE-T's channel is a `SOCK_STREAM` socketpair, so a write may be short and
            // concurrent writes may interleave. Serialise senders and write the whole reply so
            // that FUSE-T always reads it back intact.
            let _guard = self.send_lock.lock().expect("send lock poisoned");
            self.send_all(bufs)
        }
        #[cfg(not(fuser_fuse_t))]
        {
            let sent = self.writev(bufs)?;
            debug_assert_eq!(bufs.iter().map(|b| b.len()).sum::<usize>(), sent);
            Ok(())
        }
    }

    #[cfg(feature = "abi-7-40")]
    fn open_backing(&self, fd: BorrowedFd<'_>) -> std::io::Result<BackingId> {
        BackingId::create(&self.device, fd)
    }
}

#[cfg(all(test, fuser_fuse_t))]
mod test {
    use super::*;
    use std::io::{Read, Write};
    use std::os::fd::OwnedFd;
    use std::os::unix::net::UnixStream;
    use std::thread;
    use std::time::Duration;

    /// A request of `len` total bytes: a `fuse_in_header` whose length field says `len`,
    /// followed by `fill` bytes of arguments.
    fn request(len: usize, fill: u8) -> Vec<u8> {
        let mut request = vec![fill; len];
        request[..mem::size_of::<u32>()].copy_from_slice(&(len as u32).to_ne_bytes());
        request
    }

    /// Returns a channel over one end of a socketpair, plus the other end to drive it with.
    fn channel_pair() -> (Channel, UnixStream) {
        let (peer, ours) = UnixStream::pair().unwrap();
        (
            Channel::new(Arc::new(File::from(OwnedFd::from(ours)))),
            peer,
        )
    }

    #[test]
    fn receive_splits_concatenated_requests() {
        let (channel, mut peer) = channel_pair();
        let first = request(64, 1);
        let second = request(128, 2);
        peer.write_all(&[first.clone(), second.clone()].concat())
            .unwrap();

        let mut buffer = vec![0; 8192];
        for expected in [first, second] {
            let len = channel.receive(&mut buffer).unwrap();
            assert_eq!(&buffer[..len], &expected[..]);
        }
    }

    #[test]
    fn receive_reassembles_a_split_request() {
        let (channel, mut peer) = channel_pair();
        let expected = request(4096, 3);
        let (head, tail) = expected.split_at(100);
        peer.write_all(head).unwrap();

        let tail = tail.to_vec();
        let writer = thread::spawn(move || {
            thread::sleep(Duration::from_millis(50));
            peer.write_all(&tail).unwrap();
        });

        let mut buffer = vec![0; 8192];
        let len = channel.receive(&mut buffer).unwrap();
        assert_eq!(&buffer[..len], &expected[..]);
        writer.join().unwrap();
    }

    #[test]
    fn receive_reports_a_closed_channel_as_enodev() {
        let (channel, peer) = channel_pair();
        drop(peer);
        let err = channel.receive(&mut vec![0; 8192]).unwrap_err();
        assert_eq!(err.raw_os_error(), Some(libc::ENODEV));
    }

    #[test]
    fn receive_rejects_a_request_larger_than_the_buffer() {
        let (channel, mut peer) = channel_pair();
        peer.write_all(&request(64, 4)).unwrap();
        let err = channel.receive(&mut vec![0; 32]).unwrap_err();
        assert_eq!(err.kind(), io::ErrorKind::InvalidData);
    }

    #[test]
    fn send_writes_a_whole_reply_that_does_not_fit_the_socket_buffer() {
        let (channel, mut peer) = channel_pair();
        let sender = channel.sender();
        let (head, tail) = (vec![0x11u8; 64 * 1024], vec![0x22u8; 96 * 1024]);
        let total = head.len() + tail.len();

        let reader = thread::spawn(move || {
            let mut received = vec![0; total];
            peer.read_exact(&mut received).unwrap();
            received
        });
        sender
            .send(&[io::IoSlice::new(&head), io::IoSlice::new(&tail)])
            .unwrap();

        let received = reader.join().unwrap();
        assert_eq!(received, [head, tail].concat());
    }
}

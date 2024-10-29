// Translated from libfuse's example/poll_client.c (using actual
// poll(2) instead of select(2) that one does, since poll(2) is more
// readily available via the nix crate)
//
// Originally:
//    Copyright (C) 2008       SUSE Linux Products GmbH
//    Copyright (C) 2008       Tejun Heo <teheo@suse.de>
//
// Translated to Rust by Zev Weiss <zev@bewilderbeest.net>
//
// Due to the above provenance, unlike the rest of fuser this file is
// licensed under the terms of the GNU GPLv2.

use nix::poll;
use std::os::fd::{AsFd, AsRawFd, RawFd};

const NUMFILES: usize = 16;

fn make_nonblock(fd: RawFd) {
    use nix::fcntl::{fcntl, FcntlArg, OFlag};
    let arg = FcntlArg::F_SETFL(OFlag::O_NONBLOCK);
    fcntl(fd, arg).expect("failed to set fd nonblocking");
}

fn main() -> std::io::Result<()> {
    let mut files = Vec::with_capacity(NUMFILES);
    for c in "0123456789ABCDEF".chars() {
        let name = format!("{}", c);
        let f = std::fs::File::open(name)?;
        make_nonblock(f.as_raw_fd());
        files.push(f);
    }
    let mut readbuf = vec![0u8; 4096];

    let mut pollfds = files
        .iter()
        .map(|f| poll::PollFd::new(f.as_fd(), poll::PollFlags::POLLIN))
        .collect::<Vec<_>>();

    for _ in 0..16 {
        poll::poll(pollfds.as_mut_slice(), poll::PollTimeout::NONE)?;

        for (i, pfd) in pollfds.iter().enumerate() {
            let revents = pfd.revents().expect("got unknown poll flag");
            if !revents.intersects(poll::PollFlags::POLLIN) {
                print!("_:   ");
                continue;
            }
            print!("{:X}:", i);
            let fd = pfd.as_fd().as_raw_fd();
            let nbytes = nix::unistd::read(fd, readbuf.as_mut_slice())?;
            print!("{:02} ", nbytes);
        }
        println!();
    }

    Ok(())
}

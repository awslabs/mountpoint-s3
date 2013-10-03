// Copyright 2013 Andreas Neuhaus and the Mira project group.
// This file may not be used in any way (copied, modified, distributed)
// without explicit permission of the copyright owner. All rights reserved.

/*!
 * Glue functions for stuff that's (still) easier to do in C than in Rust.
 */

#include <string.h>
#include <signal.h>
#include <stdio.h>
#include <sys/select.h>

int wait_for_fd (int fd, unsigned int timeout) {
	fd_set fds;
	FD_ZERO(&fds);
	FD_SET(fd, &fds);
	struct timeval to;
	to.tv_sec = timeout / 1000;
	to.tv_usec = timeout % 1000;
	return select(fd+1, &fds, NULL, NULL, &to);
}

int set_signal_handler (int signum, void (*handler)(int)) {
	struct sigaction sa;
	memset(&sa, 0, sizeof(sa));
	sa.sa_handler = handler ? handler : SIG_DFL;
	return sigaction(signum, &sa, NULL);
}

static unsigned int signal_flag = 0;

static void signal_handler (int signum) {
	fprintf(stderr, "Received signal %d, signalling exit...\n", signum);
	signal_flag++;
}

int get_signal_flag () {
	return signal_flag;
}

static int signal_handler_instances = 0;

void set_signal_handlers () {
	// Unfortunately, we can't callback to Rust for handling a signal
	if (!signal_handler_instances++) {
		signal_flag = 0;
		set_signal_handler(SIGHUP, signal_handler);
		set_signal_handler(SIGINT, signal_handler);
		set_signal_handler(SIGTERM, signal_handler);
	}
}

void remove_signal_handlers () {
	if (!--signal_handler_instances) {
		set_signal_handler(SIGHUP, NULL);
		set_signal_handler(SIGINT, NULL);
		set_signal_handler(SIGTERM, NULL);
	}
}

/*!
 * Glue functions for stuff that's (still) easier to do in C than in Rust.
 */

use std::libc::{c_int, c_uint};

#[link_args = "src/glue.c"]
extern {
	/// Wait for data to be ready to read from a fd
	pub fn wait_for_fd (fd: c_int, timeout: c_uint) -> c_int;

	/// Set signal handlers to trap interrupt signals
	fn set_signal_handlers ();
	/// Remove signal handlers to trap interrupt signals
	fn remove_signal_handlers ();
	/// Flag wether an interrupt signal occurred while signals were trapped
	fn get_signal_flag () -> c_int;
}

/// Signal handler
pub struct SignalHandler;

impl SignalHandler {
	/// Create a new signal handler (i.e. trap interrupt signals)
	#[fixed_stack_segment]
	pub fn new () -> ~SignalHandler {
		unsafe { set_signal_handlers(); }
		~SignalHandler
	}

	/// Returns true if an interrupt signal was trapped
	#[fixed_stack_segment]
	pub fn signalled (&self) -> bool {
		unsafe { get_signal_flag() > 0 }
	}
}

impl Drop for SignalHandler {
	#[fixed_stack_segment]
	fn drop (&mut self) {
		unsafe { remove_signal_handlers(); }
	}
}

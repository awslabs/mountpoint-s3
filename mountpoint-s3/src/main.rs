use mountpoint_s3::{create_s3_client, parse_cli_args};
use tikv_jemallocator::Jemalloc;

#[global_allocator]
static GLOBAL: Jemalloc = Jemalloc;

/// Compiled-in jemalloc runtime config, overridable at runtime via `_RJEM_MALLOC_CONF`.
///
/// `abort_conf:true` fails loudly on a malformed config rather than silently ignoring it.
/// `background_thread:true` moves page purging off the freeing thread, where the `madvise` call
/// would otherwise block the read path. `narenas:32` caps arenas well below the default (~4x CPUs)
/// so freed part buffers concentrate in a shared dirty pool and can be reused across threads
/// instead of each arena faulting in new pages.
// SAFETY: overrides jemalloc's weak `_rjem_malloc_conf` symbol, which it reads as a NUL-terminated
// options string during initialisation. The value below is NUL-terminated.
#[cfg(not(target_os = "macos"))]
#[unsafe(export_name = "_rjem_malloc_conf")]
pub static MALLOC_CONF: &[u8] = b"abort_conf:true,background_thread:true,narenas:32\0";

/// macOS jemalloc has no pthread-based background threads, so it writes
/// `option background_thread currently supports pthread only` to stderr on every run and carries on
/// purging on the freeing thread. Leave the option out there rather than print that on every mount.
// SAFETY: as above.
#[cfg(target_os = "macos")]
#[unsafe(export_name = "_rjem_malloc_conf")]
pub static MALLOC_CONF: &[u8] = b"abort_conf:true,narenas:32\0";

fn main() -> anyhow::Result<()> {
    let cli_args = parse_cli_args(true);
    mountpoint_s3::run(create_s3_client, cli_args)
}

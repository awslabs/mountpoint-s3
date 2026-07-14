//! `BudgetHold`: a setup-phase hold on part of the data-buffer budget.

use std::fs::File;
use std::io::Write;
use std::path::{Path, PathBuf};

use mountpoint_s3_fs::memory::write_buffer_budget_for;

use super::SetupGuard;
use crate::stress::test_objects;

const STUB_WRITE: usize = 4 * 1024;

/// Number of full write-part buffers that fit in the write budget at `mem_limit` — i.e. the
/// concurrent write-handle cap (`WriteHandleLimiter`) and the most parts a [`BudgetHold`] can pin.
/// Scenarios typically hold `budget_parts(..) - n` to leave `n` parts free.
pub fn budget_parts(mem_limit: usize, part_size: usize) -> usize {
    write_buffer_budget_for(mem_limit, part_size) / part_size
}

/// A held slice of the data-buffer budget: a set of open write handles, each pinning one
/// `write_part_size` buffer. Keep it alive for as long as the memory must stay pinned; dropping it
/// closes the handles (releasing the buffers) and removes the backing objects best-effort.
#[must_use = "the budget hold releases its pinned buffers as soon as it is dropped"]
pub struct BudgetHold {
    scope: &'static str,
    held: Vec<(File, PathBuf)>,
}

impl SetupGuard for BudgetHold {}

impl Drop for BudgetHold {
    fn drop(&mut self) {
        let parts = self.held.len();
        for (file, path) in self.held.drain(..) {
            if let Err(e) = file.sync_all() {
                tracing::warn!(scope = self.scope, ?path, error = ?e, "stress: budget hold sync_all failed on release");
            }
            drop(file);
            let _ = std::fs::remove_file(&path);
        }
        tracing::info!(scope = self.scope, parts, "stress: budget hold released");
    }
}

/// Pin `parts` write-part buffers under `mount_path`, returning a guard that holds them until it is
/// dropped. Runs synchronously: on return, every buffer is pinned.
pub fn hold_budget_parts(scope: &'static str, parts: usize, mount_path: &Path) -> BudgetHold {
    let stub = vec![0xC3u8; STUB_WRITE];
    let mut held: Vec<(File, PathBuf)> = Vec::with_capacity(parts);
    for part in 0..parts {
        let key = test_objects::ephemeral_key(scope, &format!("budget_hold_p{part:04}.bin"));
        let path = mount_path.join(&key);
        let mut file = File::create(&path).unwrap_or_else(|e| {
            panic!(
                "{scope}: budget hold: create of part {part}/{parts} failed \
                 (does parts exceed the write-handle cap?): {e:?}",
            )
        });
        file.write_all(&stub)
            .unwrap_or_else(|e| panic!("{scope}: budget hold: stub write for part {part}/{parts} failed: {e:?}"));
        held.push((file, path));
    }
    tracing::info!(scope, parts, "stress: budget hold pinned");
    BudgetHold { scope, held }
}

//! Functions for managing /etc/fuse.conf

use std::path::Path;

use anyhow::Context;
use tokio::fs;

const FUSE_CONF_PATH: &str = "/etc/fuse.conf";
const USER_ALLOW_OTHER: &str = "user_allow_other";

async fn write_lines<'a>(
    path: impl AsRef<Path>,
    lines: impl Iterator<Item = &'a str>,
) -> anyhow::Result<()> {
    let content: String = lines.map(|line| format!("{line}\n")).collect();
    let path = path.as_ref();
    fs::write(path, content)
        .await
        .context(format!("Failed to write to {}", path.display()))?;
    Ok(())
}

pub(crate) async fn fuse_conf_write_user_allow_other() -> anyhow::Result<()> {
    let content = fs::read_to_string(FUSE_CONF_PATH)
        .await
        .context(format!("Failed to read {FUSE_CONF_PATH}"))?;
    let lines = content.lines().chain([USER_ALLOW_OTHER]);
    write_lines(FUSE_CONF_PATH, lines).await
}

pub(crate) async fn fuse_conf_remove_user_allow_other() -> anyhow::Result<()> {
    let content = fs::read_to_string(FUSE_CONF_PATH)
        .await
        .context(format!("Failed to read {FUSE_CONF_PATH}"))?;
    let filtered = content.lines().filter(|line| *line != USER_ALLOW_OTHER);
    write_lines(FUSE_CONF_PATH, filtered).await
}

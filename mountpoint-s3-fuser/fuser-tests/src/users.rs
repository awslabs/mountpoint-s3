//! User management utilities

use std::process::Stdio;

use anyhow::Context;
use tokio::process::Command;

async fn run_as_user(username: &str, command: &str) -> anyhow::Result<String> {
    let mut child = Command::new("su")
        .args([username, "-c", command])
        .stdout(Stdio::piped())
        .stderr(Stdio::inherit())
        .spawn()
        .context(format!("Failed to run command as user {}", username))?;

    let mut stdout = child.stdout.take().context("stdout was piped")?;
    let mut stdout_buf = Vec::new();
    tokio::io::AsyncReadExt::read_to_end(&mut stdout, &mut stdout_buf)
        .await
        .context("Failed to read stdout")?;

    let status = child
        .wait()
        .await
        .context(format!("Failed to wait for command as user {}", username))?;

    anyhow::ensure!(
        status.success(),
        "Command '{}' as user {} failed with exit code {:?}",
        command,
        username,
        status.code()
    );

    let stdout_str = String::from_utf8(stdout_buf).context("stdout is not valid UTF-8")?;
    Ok(stdout_str)
}

pub(crate) async fn run_as_user_status(username: &str, command: &str) -> anyhow::Result<i32> {
    let status = Command::new("su")
        .args([username, "-c", command])
        .status()
        .await
        .context(format!("Failed to run command as user {}", username))?;

    Ok(status.code().unwrap_or(-1))
}

pub(crate) async fn assert_can_read_as_user(
    username: &str,
    path: &str,
    expected_content: &str,
) -> anyhow::Result<()> {
    let content = run_as_user(username, &format!("cat {}", path)).await?;
    anyhow::ensure!(
        content == expected_content,
        "User {} should be able to read {}: expected '{}', got '{}'",
        username,
        path,
        expected_content,
        content
    );
    Ok(())
}

pub(crate) async fn assert_cannot_read_as_user(username: &str, path: &str) -> anyhow::Result<()> {
    let exit_code = run_as_user_status(username, &format!("cat {}", path)).await?;
    anyhow::ensure!(
        exit_code != 0,
        "User {} should not be able to read {}, but cat succeeded",
        username,
        path
    );
    Ok(())
}

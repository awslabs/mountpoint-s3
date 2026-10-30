//! Command utilities for running shell commands

use anyhow::Context;
use anyhow::bail;
use tokio::process::Command;

/// Run a command and return success if it exits with code 0.
pub(crate) async fn command_success<'a>(
    args: impl IntoIterator<Item = &'a str>,
) -> anyhow::Result<()> {
    let args: Vec<&str> = args.into_iter().collect();
    let Some((cmd, cmd_args)) = args.split_first() else {
        bail!("command_success: no command provided");
    };
    eprintln!("Running: {}", args.join(" "));
    let status = Command::new(cmd)
        .args(cmd_args)
        .status()
        .await
        .context(format!("Failed to run command: {}", args.join(" ")))?;

    if !status.success() {
        bail!("Command failed: {}", args.join(" "));
    }
    Ok(())
}

/// Run a command and return stdout as String if it exits with code 0.
pub(crate) async fn command_output<'a>(
    args: impl IntoIterator<Item = &'a str>,
) -> anyhow::Result<String> {
    use std::process::Stdio;

    use tokio::io::AsyncReadExt;

    let args: Vec<&str> = args.into_iter().collect();
    let Some((cmd, cmd_args)) = args.split_first() else {
        bail!("command_output: no command provided");
    };
    eprintln!("Running: {}", args.join(" "));
    let mut child = Command::new(cmd)
        .args(cmd_args)
        .stdout(Stdio::piped())
        .stderr(Stdio::inherit())
        .spawn()
        .context(format!("Failed to run command: {}", args.join(" ")))?;

    let mut stdout = child.stdout.take().context("Failed to capture stdout")?;
    let mut output = Vec::new();
    stdout
        .read_to_end(&mut output)
        .await
        .context("Failed to read stdout")?;

    let status = child.wait().await.context("Failed to wait for command")?;
    if !status.success() {
        bail!("Command failed: {}", args.join(" "));
    }
    String::from_utf8(output).context("Command output is not valid UTF-8")
}

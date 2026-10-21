//! Simple filesystem tests

use std::time::Duration;

use anyhow::Context;
use anyhow::bail;
use tokio::fs::File;
use tokio::process::Command;

use crate::ansi::green;
use crate::canonical_temp_dir::CanonicalTempDir;
use crate::cargo::cargo_build_example;
use crate::command_utils::command_output;
use crate::fusermount::Fusermount;
use crate::unmount::Unmount;
use crate::unmount::kill_and_unmount;

pub(crate) async fn run_simple_tests() -> anyhow::Result<()> {
    // Create temp directories
    let data_dir = CanonicalTempDir::new()?;
    let mount_dir = CanonicalTempDir::new()?;

    eprintln!("Data dir: {:?}", data_dir.path());
    eprintln!("Mount dir: {:?}", mount_dir.path());

    let simple_exe = cargo_build_example("simple", &[]).await?;

    // Run the simple example
    eprintln!("Starting simple filesystem...");
    let fuse_process = Command::new(&simple_exe)
        .args([
            "-vvv",
            "--data-dir",
            data_dir.path().to_str().unwrap(),
            "--mount-point",
            mount_dir.path().to_str().unwrap(),
        ])
        .env(Fusermount::ENV_VAR, Fusermount::False.as_path())
        .kill_on_drop(true)
        .spawn()
        .context("Failed to start simple example")?;

    // Wait for mount to be ready
    eprintln!("Waiting for mount...");
    tokio::time::sleep(Duration::from_secs(2)).await;

    // Check if FUSE was successfully mounted
    let mount_info = command_output(["mount"]).await?;
    if !mount_info.contains("fuser") {
        bail!("FUSE mount not found in mount output");
    }
    eprintln!("Mount verified successfully");

    // Test: touch files
    eprintln!("Testing touch file operations...");
    let file_a = mount_dir.path().join("a");
    let file_b = mount_dir.path().join("b");

    File::create(&file_a)
        .await
        .context("Failed to touch file 'a'")?;
    File::create(&file_b)
        .await
        .context("Failed to touch file 'b'")?;
    green!("OK touch file");

    kill_and_unmount(
        fuse_process,
        Unmount::Manual,
        mount_dir.path().to_str().unwrap(),
    )
    .await?;

    green!("All simple tests passed!");
    Ok(())
}

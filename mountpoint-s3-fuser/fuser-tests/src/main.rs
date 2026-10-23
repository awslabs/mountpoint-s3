//! Test runner for fuser

mod ansi;
mod canonical_temp_dir;
mod cargo;
mod command_utils;
mod commands;
mod experimental;
mod features;
mod fuse_conf;
mod fusermount;
mod libfuse;
mod mount_util;
mod unmount;
mod users;

use anyhow::bail;
use clap::Parser;
use clap::Subcommand;

use crate::commands::bsd_mount;
use crate::commands::macos_mount;
use crate::commands::mount;
use crate::commands::simple;
use crate::libfuse::Libfuse;

/// Execute e2e tests for fuser.
#[derive(Parser)]
struct FuserTests {
    #[command(subcommand)]
    command: FuserCommand,
}

#[derive(Subcommand)]
enum FuserCommand {
    /// Run BSD mount tests.
    BsdMount,
    /// Run Linux mount tests with libfuse2.
    LinuxMountLibfuse2,
    /// Run Linux mount tests with libfuse3.
    LinuxMountLibfuse3,
    /// Run macOS mount tests.
    MacosMount,
    /// Run simple filesystem tests.
    Simple,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tokio::select! {
        result = main_inner() => result,
        x = tokio::signal::ctrl_c() => {
            // Wait for signal so `kill_on_drop` will kill the process.
            x?;
            bail!("Interrupted by Ctrl+C")
        }
    }
}

async fn main_inner() -> anyhow::Result<()> {
    // Validate that we're running inside Docker on Linux.
    if cfg!(target_os = "linux") && std::env::var("FUSER_TESTS_IN_DOCKER").as_deref() != Ok("true")
    {
        bail!(
            "FUSER_TESTS_IN_DOCKER environment variable is not set to 'true'. \
            Tests must be run inside Docker."
        );
    }

    let FuserTests { command } = FuserTests::parse();
    match command {
        FuserCommand::BsdMount => bsd_mount::run_bsd_mount_tests().await?,
        FuserCommand::LinuxMountLibfuse2 => mount::run_mount_tests(Libfuse::Libfuse2).await?,
        FuserCommand::LinuxMountLibfuse3 => mount::run_mount_tests(Libfuse::Libfuse3).await?,
        FuserCommand::MacosMount => macos_mount::run_macos_mount_tests().await?,
        FuserCommand::Simple => simple::run_simple_tests().await?,
    }
    Ok(())
}

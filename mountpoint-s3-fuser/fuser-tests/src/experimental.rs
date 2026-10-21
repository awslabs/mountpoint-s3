//! Experimental mount tests

use std::fmt::Write;

use anyhow::Context;
use anyhow::bail;
use tokio::process::Command;

use crate::ansi::green;
use crate::canonical_temp_dir::CanonicalTempDir;
use crate::cargo::cargo_build_example;
use crate::command_utils::command_output;
use crate::features::Feature;
use crate::fuse_conf::fuse_conf_remove_user_allow_other;
use crate::fuse_conf::fuse_conf_write_user_allow_other;
use crate::fusermount::Fusermount;
use crate::libfuse::Libfuse;
use crate::mount_util::wait_for_fuse_mount;
use crate::unmount::Unmount;
use crate::unmount::kill_and_unmount;
use crate::users::assert_can_read_as_user;
use crate::users::assert_cannot_read_as_user;
use crate::users::run_as_user_status;

pub(crate) async fn run_experimental_tests(libfuse: Libfuse) -> anyhow::Result<()> {
    fuse_conf_write_user_allow_other().await?;

    // Tests without libfuse feature (pure Rust implementation)
    run_test(&[Feature::Experimental], Unmount::Manual, Fusermount::False).await?;
    run_test(
        &[Feature::Experimental],
        Unmount::Auto,
        libfuse.fusermount(),
    )
    .await?;
    test_no_user_allow_other(&[Feature::Experimental], &libfuse).await?;

    // Tests with libfuse
    run_test(
        &[libfuse.feature(), Feature::Experimental],
        Unmount::Manual,
        Fusermount::False,
    )
    .await?;
    run_test(
        &[libfuse.feature(), Feature::Experimental],
        Unmount::Auto,
        libfuse.fusermount(),
    )
    .await?;

    if let Libfuse::Libfuse3 = libfuse {
        run_allow_root_test().await?;
    }

    green!("All experimental mount tests passed!");
    Ok(())
}

async fn run_test(
    features: &[Feature],
    unmount: Unmount,
    fusermount: Fusermount,
) -> anyhow::Result<()> {
    let mut description = String::new();
    match crate::features::features_to_flags(features) {
        Some(flags) => description.push_str(&flags),
        None => description.push_str("default features"),
    }
    write!(description, " fusermount={fusermount}").unwrap();
    match unmount {
        Unmount::Auto => description.push_str(" --auto-unmount"),
        Unmount::Manual => {}
    }
    run_test_inner(features, unmount, fusermount, &description)
        .await
        .with_context(|| format!("Tests failed: {description}"))
}

async fn run_test_inner(
    features: &[Feature],
    unmount: Unmount,
    fusermount: Fusermount,
    description: &str,
) -> anyhow::Result<()> {
    eprintln!("\n=== Running test: {description} ===");

    let mount_dir = CanonicalTempDir::new()?;
    let mount_path = mount_dir.path();
    let mount_path_str = mount_path.to_str().unwrap();

    eprintln!("Mount dir: {}", mount_path.display());

    let async_hello_exe = cargo_build_example("async_hello", features).await?;

    // Run the async_hello example
    eprintln!("Starting async_hello filesystem...");
    let mut run_args = vec![mount_path_str];
    if matches!(unmount, Unmount::Auto) {
        run_args.push("--auto-unmount");
    }

    let fuse_process = Command::new(&async_hello_exe)
        .args(&run_args)
        .env(Fusermount::ENV_VAR, fusermount.as_path())
        .kill_on_drop(true)
        .spawn()
        .context("Failed to start async_hello example")?;

    wait_for_fuse_mount(mount_dir.path()).await?;

    // Read hello.txt
    let hello_path = mount_dir.path().join("hello.txt");
    let content = tokio::fs::read_to_string(&hello_path)
        .await
        .context("Failed to read hello.txt")?;

    if content == "Hello World!\n" {
        green!("OK {description}");
    } else {
        bail!(
            "hello.txt content mismatch: expected 'Hello World!', got '{}'",
            content
        );
    }

    kill_and_unmount(fuse_process, unmount, mount_path_str).await?;

    green!("OK {description}");

    Ok(())
}

async fn test_no_user_allow_other(features: &[Feature], libfuse: &Libfuse) -> anyhow::Result<()> {
    let description = if features.is_empty() {
        format!("without libfuse, with {}", libfuse.fusermount())
    } else {
        features
            .iter()
            .map(|f| format!("with {}", f))
            .collect::<Vec<_>>()
            .join(", ")
    };
    eprintln!(
        "\n=== Running test_no_user_allow_other: {} ===",
        description
    );

    fuse_conf_remove_user_allow_other().await?;

    let mount_dir = CanonicalTempDir::for_user("fusertestnoallow").await?;
    let data_dir = CanonicalTempDir::for_user("fusertestnoallow").await?;

    eprintln!("Mount dir: {}", mount_dir.path().display());
    eprintln!("Data dir: {}", data_dir.path().display());

    let simple_exe = cargo_build_example("simple", features).await?;

    // Run the simple example as fusertestnoallow
    let run_command = format!(
        "{} --auto-unmount -vvv --data-dir {} --mount-point {}",
        simple_exe.display(),
        data_dir.path().display(),
        mount_dir.path().display()
    );

    let exit_code = run_as_user_status("fusertestnoallow", &run_command).await?;

    if exit_code == 2 {
        green!("OK Detected lack of user_allow_other: {}", description);
    } else {
        bail!("Expected exit code 2, got {}", exit_code);
    }

    // Make sure the FUSE mount did not mount
    let mount_info = command_output(["mount"]).await?;
    if mount_info.contains("hello") {
        let _ = Command::new("umount").arg(mount_dir.path()).status().await;
        bail!("Mount should not exist");
    } else {
        green!("OK Mount does not exist: {}", description);
    }

    // Restore fuse.conf
    fuse_conf_write_user_allow_other().await?;

    Ok(())
}

async fn run_allow_root_test() -> anyhow::Result<()> {
    eprintln!("\n=== Running run_allow_root_test ===");

    let mount_dir = CanonicalTempDir::for_user("fusertest1").await?;
    eprintln!("Mount dir: {}", mount_dir.path().display());

    let async_hello_exe =
        cargo_build_example("async_hello", &[Feature::Libfuse3, Feature::Experimental]).await?;

    // Run the async_hello example as fusertest1 with --allow-root
    let run_command = format!(
        "{} {} --allow-root",
        async_hello_exe.display(),
        mount_dir.path().display()
    );
    let mut fuse_process = Command::new("su")
        .args(["fusertest1", "-c", &run_command])
        .kill_on_drop(true)
        .spawn()
        .context("Failed to start async_hello example")?;

    wait_for_fuse_mount(mount_dir.path()).await?;

    // Test: root can read
    let hello_path = mount_dir.path().join("hello.txt");
    assert_can_read_as_user("root", hello_path.to_str().unwrap(), "Hello World!\n").await?;
    green!("OK root can read");

    // Test: owner can read
    assert_can_read_as_user("fusertest1", hello_path.to_str().unwrap(), "Hello World!\n").await?;
    green!("OK owner can read");

    // Test: other user can't read
    assert_cannot_read_as_user("fusertest2", hello_path.to_str().unwrap()).await?;
    green!("OK other user can't read");

    // Kill the FUSE process
    fuse_process
        .kill()
        .await
        .context("Failed to kill FUSE process")?;

    Ok(())
}

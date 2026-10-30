//! Cargo build utilities

use std::path::PathBuf;

use crate::command_utils::command_success;
use crate::features::Feature;
use crate::features::features_to_flags;

/// Build a cargo example with optional features.
/// Returns the path to the built example executable.
pub(crate) async fn cargo_build_example(
    example: &str,
    features: &[Feature],
) -> anyhow::Result<PathBuf> {
    let features_flag = features_to_flags(features);

    let mut build_args = vec!["cargo", "build", "--example", example];
    build_args.extend(features_flag.as_deref());
    command_success(build_args).await?;

    Ok(PathBuf::from(format!("target/debug/examples/{}", example)))
}

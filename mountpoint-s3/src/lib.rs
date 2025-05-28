mod build_info;
mod cli;
mod fstab;
mod run;

use crate::fstab::split_commas;
use anyhow::anyhow;
use clap::Parser;
use std::env;
use std::process::{exit, Command};

pub use cli::CliArgs;
pub use fstab::FsTabCliArgs;
pub use run::{create_s3_client, run};

pub fn parse_cli_args(log_fstab: bool) -> CliArgs {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3).as_deref() == Some("-o".as_ref());

    let cli_args = if is_fstab && cfg!(feature = "fstab") {
        if log_fstab {
            println!("Using 'fstab' style options as detected use of `-o` argument.");
        }
        FsTabCliArgs::try_parse().and_then(|args| args.try_into())
    } else {
        CliArgs::try_parse()
    };

    let args = cli_args.unwrap_or_else(|err| err.exit());

    // Validate that run-as-user can only be used with fstab
    if args.run_as_user.is_some() && !args.is_fstab {
        eprintln!("Error: run-as-user can only be used with fstab-style mounting (using -o run-as-user=username)");
        exit(1);
    }

    // Handle run-as-user flag only when it comes from fstab
    if args.is_fstab {
        if let Some(username) = &args.run_as_user {
            handle_run_as_user(username);
        }
    }

    args
}

fn handle_run_as_user(username: &str) {
    // Validate the username first
    if let Err(e) = validate_run_as_user(username) {
        eprintln!("Error: {}", e);
        exit(1);
    }

    // Get current arguments - for fstab mode, we need to filter out the run-as-user option from -o
    let current_args: Vec<String> = env::args().collect();
    let mut new_args = Vec::new();

    // Process arguments to remove run-as-user from fstab -o options
    let mut i = 0;
    while i < current_args.len() {
        let arg = &current_args[i];

        // Handle fstab -o options
        if arg == "-o" && i + 1 < current_args.len() {
            let options_string = &current_args[i + 1];

            match split_commas(options_string) {
                Ok(options) => {
                    // Filter out run-as-user=username from the options
                    let filtered_options: Vec<String> = options
                        .into_iter()
                        .filter(|opt| !opt.starts_with("run-as-user="))
                        .collect();

                    new_args.push(arg.clone());
                    if !filtered_options.is_empty() {
                        // Rejoin with commas (escaping is preserved by split_commas)
                        new_args.push(filtered_options.join(","));
                    } else {
                        // If no options left, skip the -o entirely
                        new_args.pop();
                    }
                }
                Err(_) => {
                    // If parsing fails, just pass through the original options
                    // This shouldn't happen since fstab parsing already succeeded
                    new_args.push(arg.clone());
                    new_args.push(options_string.clone());
                }
            }
            i += 2; // Skip both -o and the options string
        } else {
            new_args.push(arg.clone());
            i += 1;
        }
    }

    // we execute the command as the specified user using sudo
    let status = Command::new("sudo").arg("-u").arg(username).args(&new_args).status();

    match status {
        Ok(exit_status) => {
            if let Some(code) = exit_status.code() {
                exit(code);
            } else {
                // Process was terminated by signal
                exit(1);
            }
        }
        Err(e) => {
            eprintln!("Failed to execute command as user '{}': {}", username, e);
            exit(1);
        }
    }
}

fn validate_run_as_user(username: &str) -> anyhow::Result<()> {
    // Check for empty username
    if username.is_empty() {
        return Err(anyhow!("run-as-user username cannot be empty"));
    }

    // Check for invalid characters in username
    if username.contains(' ') {
        return Err(anyhow!("run-as-user username cannot contain spaces: '{}'", username));
    }

    // Check if username exists on the system
    match std::process::Command::new("id").arg(username).output() {
        Ok(output) => {
            if !output.status.success() {
                return Err(anyhow!("User '{}' does not exist on this system", username));
            }
        }
        Err(e) => {
            return Err(anyhow!("Failed to validate user '{}': {}", username, e));
        }
    }

    Ok(())
}

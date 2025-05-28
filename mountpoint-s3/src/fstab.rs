use std::env;

use anyhow::anyhow;
use clap::error::ErrorKind;
use clap::{Command, CommandFactory, Parser};

use crate::cli::CliArgs;

#[derive(Parser, Debug)]
#[clap(name = "mount-s3", disable_help_flag = true)]
pub struct FsTabCliArgs {
    bucket_name: String,
    #[clap(value_name = "DIRECTORY")]
    mount_point: String,
    // Needs to be explicit `std::vec::Vec` because of https://github.com/clap-rs/clap/issues/4808
    #[clap(short = 'o', value_parser = split_commas)]
    options: std::vec::Vec<String>,
}

impl TryFrom<FsTabCliArgs> for CliArgs {
    type Error = clap::Error;

    fn try_from(fstab_cli_args: FsTabCliArgs) -> Result<Self, Self::Error> {
        let (cli_arg_list, run_as_user) = fstab_cli_args.into_cli_arg_list()?;

        let mut cli_args = CliArgs::try_parse_from(cli_arg_list)?;
        cli_args.foreground = false;
        cli_args.is_fstab = true;
        cli_args.run_as_user = run_as_user;
        Ok(cli_args)
    }
}

impl FsTabCliArgs {
    /// Parse the args we've been given into an iterator of options to pass to the main CliArgs parser
    /// Filters out arguments that aren't meant for Mountpoint, and add `--` to any argument that's not prefixed with `-`.
    fn into_cli_arg_list(self) -> Result<(Vec<String>, Option<String>), clap::Error> {
        Self::validate_options(&self.options)?;

        let mut run_as_user = None;
        let filtered_options: Vec<String> = self
            .options
            .into_iter()
            .filter_map(|option| {
                if let Some(user) = option.strip_prefix("run-as-user=") {
                    run_as_user = Some(user.to_string());
                    None // Filter out this option from CLI args
                } else if Self::option_allowed(&option) {
                    Some(Self::rename_option(option))
                } else {
                    None
                }
            })
            .collect();

        let cli_arg_list = [
            env::args().nth(0).unwrap_or("mount-s3".to_string()),
            self.bucket_name,
            self.mount_point,
        ]
        .into_iter()
        .chain(filtered_options)
        .collect();

        Ok((cli_arg_list, run_as_user))
    }

    /// Returns if an option is allowed for systemd/the fstab parser
    /// The hard-coded options listed aren't relevant to Mountpoint, but means we can't add them in the future.
    /// Options prefixed with `x-` are 'comments' in fstab, and can be ignored by us.
    fn option_allowed(option: &str) -> bool {
        // "auto" - "_netdev" from https://github.com/libfuse/sshfs/blob/ed0825440c48895b7e20cc1440bbafd8d9c88eb8/sshfs.c#L533-L538
        // "nofail" isn't passed through by systemd, but is passed through by `mount -a`, so we should drop it as well
        // "rw" can be automatically added by systemd, which is our default, so we ignore it
        // "nodev" and "nosuid" are the default behaviour for Mountpoint, and aren't normally allowed as CLI arguments.
        // Ignore them to allow users to add them as arguments to avoid systemd's default behaviour of passing in "dev" and "suid"
        !([
            "auto", "noauto", "user", "nouser", "users", "_netdev", "nofail", "rw", "nodev", "nosuid",
        ]
        .contains(&option)
            || option.starts_with("x-"))
    }

    fn rename_option(option: String) -> String {
        match option.as_str() {
            "ro" => "--read-only".to_string(),
            _ => format!("--{}", option),
        }
    }

    fn validate_options(options: &[String]) -> Result<(), clap::Error> {
        if options.iter().any(|x| x.starts_with("-")) {
            return Err(Command::error(
                &mut Self::command(),
                ErrorKind::InvalidValue,
                "Cannot prefix arguments with `--` when using fstab style arguments.",
            ));
        }
        if options.iter().any(|x| x == "ro") && options.iter().any(|x| x == "rw") {
            return Err(Command::error(
                &mut Self::command(),
                ErrorKind::ArgumentConflict,
                "Cannot use 'ro' flag combined with 'rw' flag.",
            ));
        }
        if let Some(disallowed_option) = options
            .iter()
            .find(|x| ["foreground", "read-only"].contains(&x.as_str()))
        {
            return Err(Command::error(
                &mut Self::command(),
                ErrorKind::InvalidValue,
                format!(
                    "Cannot use '{}' flag when using fstab style arguments.",
                    disallowed_option
                ),
            ));
        }
        Ok(())
    }
}

/// Split a string by commas, but allowing escapes with backslash.
/// We're implementing this as fstab doesn't have a standard for escaping commas, and backslash
/// escapes are fairly common in programming.
/// overlayfs uses this approach to allow escapes.
/// We disallow usage of double quotes to allow us to introduce quotes as another potential way to escape in the future.
pub fn split_commas(string: &str) -> anyhow::Result<Vec<String>> {
    let mut unescaped = Vec::new();
    let mut current_arg = String::new();

    let mut last_was_backslash = false;
    let mut prev_idx = 0usize;
    for (idx, char) in string.char_indices() {
        if last_was_backslash {
            match char {
                ',' | '"' | '\\' => {
                    current_arg.push_str(&string[prev_idx..idx - 1]);
                    prev_idx = idx;
                }
                _ => {
                    return Err(anyhow!(
                        "Unexpected character after backslash escape - found {} at index {}",
                        char,
                        idx
                    ));
                }
            }
        } else if char == ',' {
            current_arg.push_str(&string[prev_idx..idx]);
            unescaped.push(current_arg);
            current_arg = String::new();
            prev_idx = idx + 1;
        } else if char == '"' {
            return Err(anyhow!(
                "Unexpected '\"' found at index {} - perhaps you meant to escape it with \\",
                idx
            ));
        }
        last_was_backslash = !last_was_backslash && char == '\\';
    }
    if last_was_backslash {
        return Err(anyhow!("Unexpected end of string after '\\'"));
    }
    current_arg.push_str(&string[prev_idx..]);
    unescaped.push(current_arg);
    Ok(unescaped)
}

#[cfg(test)]
mod tests {
    use super::*;
    use proptest::{prop_assert_eq, proptest};
    use proptest_derive::Arbitrary;
    use test_case::test_case;

    #[test_case("no commas", Some(["no commas"].to_vec()))]
    #[test_case("simple,case", Some(["simple", "case"].to_vec()))]
    #[test_case("comma\\,escape", Some(["comma,escape"].to_vec()))]
    #[test_case("a,\\,,c", Some(["a", ",", "c"].to_vec()))]
    #[test_case("a,\\,\\\",d", Some(["a", ",\"", "d"].to_vec()))]
    #[test_case("£,c", Some(["£", "c"].to_vec()))]
    #[test_case("multi_byte_characters,🎡", Some(["multi_byte_characters", "🎡"].to_vec()))]
    #[test_case("\\\"", Some(["\""].to_vec()))]
    #[test_case("--read-only", Some(["--read-only"].to_vec()))]
    #[test_case("ends,with,\\", None)]
    #[test_case("random,\"quotes\"", None)]
    #[test_case("\\e\\scaped,\\w\\rong", None)]
    fn test_split_commas(string: &str, expected: Option<Vec<&str>>) {
        assert_eq!(
            split_commas(string).ok(),
            expected.map(|v| v.iter().map(|&x| x.into()).collect())
        );
    }

    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", ""].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "_netdev"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "ro"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "rw"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "uid=2,gid=4,debug"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "prefix=foo/bar\\,baz/"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "--uid=2"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "ro,rw"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "foreground"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "read-only"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "typo"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "\\"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "\\a"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "cache=\\\"foo\\\""].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "cache=\""].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "-f"].to_vec(), false)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "run-as-user=testuser"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "run-as-user=root,uid=1000"].to_vec(), true)]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "uid=1000,run-as-user=nobody,debug"].to_vec(), true)]
    fn test_fstab_cli_args_parses(args: Vec<&str>, should_parse: bool) {
        let res: Result<CliArgs, clap::Error> =
            FsTabCliArgs::try_parse_from(&args).and_then(|fstab_cli_args| fstab_cli_args.try_into());
        assert_eq!(res.is_ok(), should_parse, "args={:?}\n res={:?}", args, res);
    }

    #[test]
    fn test_fstab_cli_args_parses_correctly() {
        let args = [
            "_",
            "demo_s3_bucket",
            "/mnt/test",
            "-o",
            "prefix=foo/bar\\,baz/,_netdev,uid=2,ro",
        ]
        .to_vec();
        let fstab_cli_args = FsTabCliArgs::try_parse_from(args).unwrap();
        let cli_args: CliArgs = fstab_cli_args.try_into().unwrap();

        assert!(!cli_args.foreground);
        assert_eq!(cli_args.mount_point.to_str(), Some("/mnt/test"));
        assert_eq!(cli_args.bucket_name, "demo_s3_bucket");
        assert_eq!(cli_args.prefix.unwrap().as_str(), "foo/bar,baz/");
        assert_eq!(cli_args.uid, Some(2));
        assert_eq!(cli_args.gid, None);
        assert!(cli_args.read_only);
    }

    /// Test run-as-user parsing in fstab options
    #[test_case("run-as-user=testuser", Some("testuser"), "simple username")]
    #[test_case("run-as-user=root", Some("root"), "root user")]
    #[test_case("run-as-user=nobody", Some("nobody"), "nobody user")]
    #[test_case("run-as-user=user123", Some("user123"), "alphanumeric username")]
    #[test_case("run-as-user=test-user", Some("test-user"), "username with dash")]
    #[test_case("run-as-user=test_user", Some("test_user"), "username with underscore")]
    #[test_case("run-as-user=", Some(""), "empty username")]
    #[test_case("uid=1000", None, "no run-as-user option")]
    fn test_run_as_user_parsing(option: &str, expected_user: Option<&str>, _description: &str) {
        let args = ["_", "demo_s3_bucket", "/mnt/test", "-o", option].to_vec();

        let fstab_cli_args = FsTabCliArgs::try_parse_from(args).unwrap();
        let cli_args: CliArgs = fstab_cli_args.try_into().unwrap();

        assert_eq!(cli_args.run_as_user.as_deref(), expected_user);
        assert!(cli_args.is_fstab);
    }

    /// Test run-as-user combined with other options
    #[test]
    fn test_run_as_user_with_multiple_options() {
        let args = [
            "_",
            "demo_s3_bucket",
            "/mnt/test",
            "-o",
            "uid=1000,run-as-user=testuser,gid=1000,debug,ro",
        ]
        .to_vec();

        let fstab_cli_args = FsTabCliArgs::try_parse_from(args).unwrap();
        let cli_args: CliArgs = fstab_cli_args.try_into().unwrap();

        assert_eq!(cli_args.run_as_user.as_deref(), Some("testuser"));
        assert_eq!(cli_args.uid, Some(1000));
        assert_eq!(cli_args.gid, Some(1000));
        assert!(cli_args.debug);
        assert!(cli_args.read_only);
        assert!(cli_args.is_fstab);
    }

    /// Test that run-as-user is filtered out from CLI args but preserved in CliArgs
    #[test]
    fn test_run_as_user_filtering() {
        let args = [
            "_",
            "demo_s3_bucket",
            "/mnt/test",
            "-o",
            "run-as-user=testuser,uid=1000,debug",
        ]
        .to_vec();

        let fstab_cli_args = FsTabCliArgs::try_parse_from(args).unwrap();
        let (cli_arg_list, run_as_user) = fstab_cli_args.into_cli_arg_list().unwrap();

        // run-as-user should be extracted
        assert_eq!(run_as_user.as_deref(), Some("testuser"));

        // run-as-user should not appear in the CLI arg list
        let args_string = cli_arg_list.join(" ");
        assert!(!args_string.contains("run-as-user"));

        // Other options should still be present
        assert!(args_string.contains("--uid"));
        assert!(args_string.contains("--debug"));
    }

    /// Test run-as-user with escaped characters
    #[test]
    fn test_run_as_user_with_escaped_chars() {
        let args = [
            "_",
            "demo_s3_bucket",
            "/mnt/test",
            "-o",
            "run-as-user=test\\,user,uid=1000",
        ]
        .to_vec();

        let fstab_cli_args = FsTabCliArgs::try_parse_from(args).unwrap();
        let cli_args: CliArgs = fstab_cli_args.try_into().unwrap();

        // The comma should be unescaped in the username
        assert_eq!(cli_args.run_as_user.as_deref(), Some("test,user"));
        assert_eq!(cli_args.uid, Some(1000));
        assert!(cli_args.is_fstab);
    }

    /// Test run-as-user position independence
    #[test_case("run-as-user=testuser,uid=1000,debug")]
    #[test_case("uid=1000,run-as-user=testuser,debug")]
    #[test_case("uid=1000,debug,run-as-user=testuser")]
    fn test_run_as_user_position_independence(options: &str) {
        let args = ["_", "demo_s3_bucket", "/mnt/test", "-o", options].to_vec();

        let fstab_cli_args = FsTabCliArgs::try_parse_from(args).unwrap();
        let cli_args: CliArgs = fstab_cli_args.try_into().unwrap();

        assert_eq!(cli_args.run_as_user.as_deref(), Some("testuser"));
        assert_eq!(cli_args.uid, Some(1000));
        assert!(cli_args.debug);
        assert!(cli_args.is_fstab);
    }

    proptest! {
        #[test]
        fn proptest_split_commas_errors_correctly_and_reconstructs(string: String) {
            let should_err_backslash_escape = string.chars().fold((false, false), |(last_was_backslash, should_err), char| {
                if should_err {
                    (false, true)
                } else {
                    (
                        // A backslash escapes itself, and shouldn't be used to escape the next character.
                        !last_was_backslash && char == '\\',
                        // Error if a backslash escapes a character other than '"', ',', '\', or '"' is used without a backslash
                        (last_was_backslash && !['"', ',', '\\'].contains(&char)) || (!last_was_backslash && char == '"')
                    )
                }
            }).1;

            let should_err_ends_with_unescaped_backslash = (string.len() - string.trim_end_matches("\\").len()) % 2 == 1;
            let maybe_split = split_commas(&string);

            prop_assert_eq!(
                maybe_split.is_err(),
                should_err_backslash_escape || should_err_ends_with_unescaped_backslash,
                "\n split string should have been Err: {}, returned {:?}",
                should_err_backslash_escape || should_err_ends_with_unescaped_backslash,
                maybe_split
            );

            if let Ok(split) = maybe_split {
                let reconstructed = split.iter()
                    .map(|str| str.replace("\\", "\\\\").replace("\"", "\\\"").replace(",", "\\,"))
                    .collect::<Vec<_>>()
                    .join(",");

                prop_assert_eq!(string, reconstructed, "\n split string was {:?}", split);
            }
        }
    }

    #[derive(Debug, Clone, Arbitrary, PartialEq)]
    #[cfg_attr(test, proptest(no_params))]
    struct FstabCompatibleCliArgs {
        #[proptest(regex = "bucket-[a-z]{3,10}")]
        bucket_name: String,
        #[proptest(regex = "/mnt/test-[a-z]{1,5}")]
        mount_point: String,
        uid: u32,
        allow_delete: bool,
        allow_other: bool,
        debug: bool,
        read_only: bool,
    }

    impl From<CliArgs> for FstabCompatibleCliArgs {
        fn from(cli: CliArgs) -> Self {
            FstabCompatibleCliArgs {
                bucket_name: cli.bucket_name,
                mount_point: cli.mount_point.to_string_lossy().into_owned(),
                uid: cli.uid.unwrap_or_default(),
                allow_delete: cli.allow_delete,
                allow_other: cli.allow_other,
                debug: cli.debug,
                read_only: cli.read_only,
            }
        }
    }

    fn serialize_to_fstab_args(cli_args: &FstabCompatibleCliArgs) -> Vec<String> {
        let mut args = vec![
            "mount-s3".to_string(),
            cli_args.bucket_name.clone(),
            cli_args.mount_point.clone(),
        ];

        let mut options = vec![format!("uid={}", cli_args.uid)];
        if cli_args.allow_delete {
            options.push("allow-delete".to_string());
        }
        if cli_args.allow_other {
            options.push("allow-other".to_string());
        }
        if cli_args.debug {
            options.push("debug".to_string());
        }
        if cli_args.read_only {
            options.push("ro".to_string());
        }

        args.push("-o".to_string());
        args.push(options.join(","));
        args
    }

    // Test roundtrip conversion between CLI argument formats
    proptest! {
        #[test]
        fn cli_args_roundtrip_from_fstab_args(original: FstabCompatibleCliArgs) {
            let args = serialize_to_fstab_args(&original);
            let fstab = FsTabCliArgs::try_parse_from(&args).unwrap();
            let roundtripped: CliArgs = fstab.try_into().unwrap();

            prop_assert_eq!(FstabCompatibleCliArgs::from(roundtripped), original);
        }
    }
}

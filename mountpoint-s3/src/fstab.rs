use anyhow::anyhow;
use clap::Parser;
use mountpoint_s3_fs::cli::CliArgs;
use std::env;
use std::ffi::OsString;

#[derive(Parser, Debug)]
pub struct FsTabCliArgs {
    pub bucket_name: String,
    #[clap(value_name = "DIRECTORY")]
    pub mount_point: String,
    #[clap(short = 'o')]
    pub options: String,
}

impl FsTabCliArgs {
    pub fn try_to_cli_args(self) -> anyhow::Result<CliArgs> {
        let cli_arg_list = self.build_cli_arg_list()?;
        Self::build_cli_args(cli_arg_list)
    }

    /// Parse the args we've been given into an iterator of options to pass to the main CliArgs parser
    /// Filters out arguments that aren't meant for Mountpoint, and add `--` to any argument that's not prefixed with `-`.
    fn build_cli_arg_list(&self) -> anyhow::Result<impl Iterator<Item = OsString>> {
        let mut options: Vec<String> = Self::split_commas(&self.options)?
            .into_iter()
            .filter(|option| !Self::filter_option(option))
            .map(|option| {
                if option.starts_with("-") {
                    option
                } else {
                    format!("--{}", option)
                }
            })
            .map(Self::rename_option)
            .collect();

        Self::validate_options(&options)?;
        options.retain(|x| x != "--read-write");

        let cli_arg_list = [
            env::args_os().nth(0).unwrap_or("mount-s3".into()),
            (&self.bucket_name).into(),
            (&self.mount_point).into(),
        ]
        .into_iter()
        .chain(options.into_iter().map(|s| s.into()));

        Ok(cli_arg_list)
    }

    fn build_cli_args(cli_arg_list: impl Iterator<Item = OsString>) -> anyhow::Result<CliArgs> {
        let mut cli_args = CliArgs::try_parse_from(cli_arg_list).map_err(|e| anyhow!(e))?;
        cli_args.foreground = true;
        Ok(cli_args)
    }

    /// Remove options that are for systemd/the fstab parser
    /// The hard-coded options listed aren't relevant to Mountpoint, but means we can't add them in the future.
    /// Options prefixed with `x-` are 'comments' in fstab, and can be ignored by us.
    fn filter_option(option: &str) -> bool {
        // Same as from https://github.com/libfuse/sshfs/blob/ed0825440c48895b7e20cc1440bbafd8d9c88eb8/sshfs.c#L533-L538
        ["auto", "noauto", "user", "nouser", "users", "_netdev"].contains(&option) || option.starts_with("x-")
    }

    fn rename_option(option: String) -> String {
        match option.as_str() {
            "--ro" => "--read-only".to_string(),
            "--rw" => "--read-write".to_string(),
            _ => option,
        }
    }

    fn validate_options(options: &[String]) -> anyhow::Result<()> {
        if options.iter().any(|x| x == "--read-only") && options.iter().any(|x| x == "--read-write") {
            return Err(anyhow!("Cannot use 'read-only' flag combined with 'read-write' flag"));
        }
        if options.iter().any(|x| x == "--foreground" || x == "-f") {
            return Err(anyhow!("Cannot use 'foreground' flag when using fstab style arguments"));
        }
        Ok(())
    }

    /// Split a string by commas, but allowing escapes with backslash.
    /// We're implementing this as fstab doesn't have a standard for escaping commas, and backslash
    /// escapes are fairly common in programming.
    /// overlayfs uses this approach to allow escapes.
    /// We disallow usage of double quotes to allow us to introduce quotes as another potential way to escape in the future.
    fn split_commas(string: &str) -> anyhow::Result<Vec<String>> {
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
}

#[cfg(test)]
mod tests {
    use super::*;
    use proptest::{prop_assert_eq, proptest};
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
            FsTabCliArgs::split_commas(string).ok(),
            expected.map(|v| v.iter().map(|&x| x.into()).collect())
        );
    }

    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", ""].to_vec())]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "_netdev"].to_vec())]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "ro"].to_vec())]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "rw"].to_vec())]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "uid=2,gid=4,debug"].to_vec())]
    #[test_case(["_", "demo_s3_bucket", "/mnt/test", "-o", "prefix=foo/bar\\,baz/"].to_vec())]
    fn test_fstab_cli_args_parses(args: Vec<&str>) {
        let fstab_cli_args = FsTabCliArgs::try_parse_from(&args).unwrap();
        let _ = fstab_cli_args.try_to_cli_args().unwrap();
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
        let cli_args = fstab_cli_args.try_to_cli_args().unwrap();

        assert!(cli_args.foreground);
        assert_eq!(cli_args.mount_point.to_str(), Some("/mnt/test"));
        assert_eq!(cli_args.bucket_name, "demo_s3_bucket");
        assert_eq!(cli_args.prefix.unwrap().as_str(), "foo/bar,baz/");
        assert_eq!(cli_args.uid, Some(2));
        assert_eq!(cli_args.gid, None);
        assert!(cli_args.read_only);
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
            let maybe_split = FsTabCliArgs::split_commas(&string);

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
}

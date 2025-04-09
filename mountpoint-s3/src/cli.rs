use crate::build_info;

use anyhow::anyhow;
use clap::{CommandFactory, FromArgMatches, Parser};
use mountpoint_s3_fs::cli::{CliArgs, CliArgsBase, MOUNT_OPTIONS_HEADER};
use std::env;
use std::ffi::OsString;

// TODO: Extract `mountpoint_s3_fs::cli::CliArgs` to this crate.
// TODO: Stabilise the library API
#[derive(Parser, Debug)]
#[clap(
    name = "mount-s3",
    about = "Mountpoint for Amazon S3",
    version = build_info::FULL_VERSION,
)]
pub struct AppCliArgs {
    #[clap(flatten)]
    pub cli_args: CliArgs,
}

#[derive(Parser, Debug)]
struct FsTabCliArgs {
    #[clap(help = "Name of bucket to mount")]
    pub bucket_name: String,

    #[clap(
        help = "Directory or FUSE file descriptor to mount the bucket at",
        value_name = "DIRECTORY"
    )]
    pub mount_point: String,

    #[clap(help = "FsTab style options", short = 'o')]
    pub options: String,
}

impl FsTabCliArgs {
    pub fn try_to_cli_args(self) -> anyhow::Result<CliArgs> {
        let cli_arg_list = self.build_cli_arg_list()?;
        Self::build_cli_args(cli_arg_list)
    }

    fn build_cli_arg_list(&self) -> anyhow::Result<impl Iterator<Item = OsString>> {
        let options = Self::split_commas(&self.options)?
            .into_iter()
            .filter(|option| !Self::filter_option(option))
            .map(|option| {
                if option.starts_with("-") {
                    option
                } else {
                    format!("--{}", option)
                }
            });
        let cli_arg_list = [
            env::args_os().nth(0).unwrap_or("mount-s3".into()),
            (&self.bucket_name).into(),
            (&self.mount_point).into(),
        ]
        .into_iter()
        .chain(options.map(|s| s.into()));

        Ok(cli_arg_list)
    }

    fn build_cli_args(cli_arg_list: impl Iterator<Item = OsString>) -> anyhow::Result<CliArgs> {
        let mut arg_matches = FsTabOptions::command().get_matches_from(cli_arg_list);
        // `read_write` is only used to be exclusive with read-only. We don't actually use it for anything else as it's the default.
        let _ = arg_matches.try_remove_one::<bool>("read_write");
        CliArgs::from_arg_matches(&arg_matches).map_err(|e| anyhow!(e))
    }

    fn filter_option(option: &str) -> bool {
        // Same as from https://github.com/s3fs-fuse/s3fs-fuse/blob/22ca6ba6ee9ffb27602046e6f4334ec4e9b0b7d7/src/s3fs.cpp#L5340-L5345
        // and https://github.com/libfuse/sshfs/blob/ed0825440c48895b7e20cc1440bbafd8d9c88eb8/sshfs.c#L533-L538
        ["auto", "noauto", "user", "nouser", "users", "_netdev"].contains(&option) || option.starts_with("x-")
    }

    fn split_commas(string: &str) -> anyhow::Result<Vec<String>> {
        let mut unescaped = Vec::new();
        let mut fragments = Vec::new();

        let mut last_was_backslash = false;
        let mut prev_idx = 0usize;
        for (idx, char) in string.char_indices() {
            if last_was_backslash {
                match char {
                    ',' | '"' | '\\' => {
                        fragments.push(&string[prev_idx..idx - 1]);
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
                fragments.push(&string[prev_idx..idx]);
                unescaped.push(fragments.join(""));
                fragments.clear();
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
        fragments.push(&string[prev_idx..]);
        unescaped.push(fragments.join(""));
        Ok(unescaped)
    }
}

#[derive(Parser, Debug)]
#[clap(disable_help_flag = true)]
struct FsTabOptions {
    #[clap(flatten)]
    pub cli_args: CliArgsBase,
    #[clap(
        long="ro",
        help = "Mount file system in read-only mode",
        help_heading = MOUNT_OPTIONS_HEADER,
        conflicts_with="read_write",
    )]
    pub read_only: bool,
    #[clap(
        long="rw",
        help = "Mount file system in read-write mode",
        help_heading = MOUNT_OPTIONS_HEADER,
        conflicts_with="read_only",
    )]
    pub read_write: bool,
    #[clap(long = "", default_value = "true", hide = true)]
    pub foreground: bool,
}

pub fn get_cli_args() -> anyhow::Result<CliArgs> {
    let is_fstab = env::args_os().len() == 5 && env::args_os().nth(3) == Some("-o".parse().unwrap());

    if is_fstab {
        let args = FsTabCliArgs::parse();
        args.try_to_cli_args()
    } else {
        let args = AppCliArgs::parse();
        Ok(args.cli_args)
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
        assert_eq!(cli_args.base.mount_point.to_str(), Some("/mnt/test"));
        assert_eq!(cli_args.base.bucket_name, "demo_s3_bucket");
        assert_eq!(cli_args.base.prefix.unwrap().as_str(), "foo/bar,baz/");
        assert_eq!(cli_args.base.uid, Some(2));
        assert_eq!(cli_args.base.gid, None);
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

use mountpoint_s3::build_info;
use mountpoint_s3::try_parse_cli_args;

fn main() -> anyhow::Result<()> {
    let cli_args = try_parse_cli_args()
        .inspect_err(|err| {
            err.exit();
        })
        .unwrap();

    let context = mountpoint_s3_fs::cli::ContextParams {
        full_version: build_info::FULL_VERSION.to_string(),
    };
    mountpoint_s3_fs::cli::main(mountpoint_s3_fs::cli::create_s3_client, cli_args, context)
}

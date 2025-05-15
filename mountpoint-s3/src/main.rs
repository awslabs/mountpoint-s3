use mountpoint_s3::{create_s3_client, parse_cli_args};

fn main() -> anyhow::Result<()> {
    let cli_args = parse_cli_args();
    mountpoint_s3::run(create_s3_client, cli_args)
}

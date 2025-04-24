use mountpoint_s3::{create_s3_client, try_parse_cli_args};

fn main() -> anyhow::Result<()> {
    match try_parse_cli_args() {
        Ok(cli_args) => mountpoint_s3::run(create_s3_client, cli_args),
        Err(err) => err.exit(),
    }
}

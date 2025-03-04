fn main() -> anyhow::Result<()> {
    mountpoint_s3_fs::cli::main(mountpoint_s3_fs::cli::create_s3_client)
}

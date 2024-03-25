use metrics_exporter_prometheus::PrometheusBuilder;

fn main() -> anyhow::Result<()> {
    PrometheusBuilder::new()
        .install()
        .expect("failed to install Prometheus exporter");
    mountpoint_s3::cli::main(mountpoint_s3::cli::create_s3_client)
}

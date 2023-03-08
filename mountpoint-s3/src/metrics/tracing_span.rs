use std::time::Instant;

use metrics::histogram;
use tracing::span::Attributes;
use tracing::{Id, Level, Subscriber};
use tracing_subscriber::filter::Targets;
use tracing_subscriber::layer::Context;
use tracing_subscriber::registry::{LookupSpan, SpanRef};
use tracing_subscriber::Layer;

/// A [tracing::Layer] that publishes metrics about important [Span]s (mostly the root span of FUSE
/// and S3 client requests) into the aggregate metrics.
///
/// This layer "knows about" some of our Span targets and names, and uses them to decide when and
/// how to emit metrics. If those names change, this needs to change as well.
#[derive(Debug)]
struct MetricsTracingSpanLayer;

impl MetricsTracingSpanLayer {
    fn should_instrument_request_time<'a, S: LookupSpan<'a>>(span: Option<SpanRef<'a, S>>) -> bool {
        if let Some(data) = span {
            if data.metadata().target() == "mountpoint_s3::fuse" && data.parent().is_none() {
                return true;
            }
        }
        false
    }
}

impl<S> Layer<S> for MetricsTracingSpanLayer
where
    S: Subscriber + for<'a> LookupSpan<'a>,
{
    fn on_new_span(&self, _attrs: &Attributes<'_>, id: &Id, ctx: Context<'_, S>) {
        if Self::should_instrument_request_time(ctx.span(id)) {
            let data = ctx.span(id).unwrap();
            data.extensions_mut().insert(RequestTime(Instant::now()));
        }
    }

    fn on_close(&self, id: Id, ctx: Context<'_, S>) {
        if Self::should_instrument_request_time(ctx.span(&id)) {
            let data = ctx.span(&id).unwrap();
            let RequestTime(start_time) = *data.extensions().get::<RequestTime>().unwrap();
            histogram!("fuse.op_latency_us", start_time.elapsed().as_micros() as f64, "op" => data.name());
        }
    }
}

pub fn metrics_tracing_span_layer<S>() -> impl Layer<S>
where
    S: Subscriber + for<'a> LookupSpan<'a>,
{
    MetricsTracingSpanLayer.with_filter(Targets::new().with_target("mountpoint_s3::fuse", Level::DEBUG))
}

/// The time at which a request started
#[derive(Debug, Clone, Copy)]
struct RequestTime(Instant);

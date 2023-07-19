//! Provides a subscriber that sends [tracing] logs to `syslog` over a Unix socket.
//!
//! We do this by implementing a [tracing_subscriber::Layer] that listens for [tracing] events and
//! emits them to a syslog socket that was opened when the layer was created.

use std::fmt::Write;
use std::sync::Mutex;

use syslog::{Facility, Formatter3164, Logger, LoggerBackend};
use tracing::field::{Field, Visit};
use tracing::span::{Attributes, Record};
use tracing::{Event, Id, Level, Subscriber};
use tracing_subscriber::layer::Context;
use tracing_subscriber::registry::LookupSpan;
use tracing_subscriber::Layer;

/// A [tracing_subscriber::Layer] that emits log events to syslog. This layer does no filtering,
/// and so should be paired with a [tracing_subscriber::Filter].
pub struct SyslogLayer<Backend: std::io::Write = LoggerBackend> {
    logger: Mutex<Logger<Backend, Formatter3164>>,
}

impl SyslogLayer {
    pub fn new() -> Result<Self, syslog::Error> {
        let formatter = Self::formatter();
        let logger = syslog::unix(formatter)?;
        Ok(Self {
            logger: Mutex::new(logger),
        })
    }
}

impl<B: std::io::Write> SyslogLayer<B> {
    #[cfg(test)]
    pub fn new_generic(backend: B) -> Self {
        let formatter = Self::formatter();
        let logger = Logger::new(backend, formatter);
        Self {
            logger: Mutex::new(logger),
        }
    }

    fn formatter() -> Formatter3164 {
        Formatter3164 {
            facility: Facility::LOG_USER,
            hostname: None,
            process: "mount-s3".into(),
            pid: std::process::id(),
        }
    }
}

/// Implement a [tracing_subscriber::Layer] that will emit [tracing] events to syslog.
///
/// [tracing] has both "spans", a period of time during program execution, and "events", something
/// that happens at a moment in time. We use spans to remember information for the duration of an
/// interesting context -- for example, a GetObject request might have a span for the duration of
/// the request that records the key being retrieved. We use events to record interesting things
/// that happened -- for example, the GetObject request succeeded or failed. When an event is
/// generated, we can look up all the open spans at that moment in time to recover all the
/// interesting context for the event.
///
/// This layer listens for new spans and records the information associated with them (which tracing
/// allows to be mutated via [on_record]). Then it listens for events, and when an event is
/// received, it builds a message to send to syslog by combining the previously recorded information
/// for all open spans with the information for the event.
///
/// This is a stripped down version of [tracing_subscribers::fmt::Layer] that skips some tracing
/// stuff we don't need, like timings and span enter/exit events.
/// https://github.com/tokio-rs/tracing/blob/0114ec1cf56e01e79b2e429e77c660457711d263/tracing-subscriber/src/fmt/fmt_layer.rs#L786
impl<S, B> Layer<S> for SyslogLayer<B>
where
    S: Subscriber + for<'a> LookupSpan<'a>,
    B: std::io::Write + 'static,
{
    // A new span has been constructed -- record its fields for use in [on_event]
    fn on_new_span(&self, attrs: &Attributes<'_>, id: &Id, ctx: Context<'_, S>) {
        let span = ctx.span(id).expect("span must exist");
        // Format the span fields now (we won't have access to them at [on_event] time) and stash
        // the result in the `extensions` bag to access from [on_event]
        let mut extensions = span.extensions_mut();
        if extensions.get_mut::<FormattedFields>().is_none() {
            let mut fields = FormattedFields(String::new());
            FormatFields::format_attributes(&mut fields.0, attrs);
            extensions.insert(fields);
        }
    }

    // An existing span is being mutated with new values -- update the recorded fields
    fn on_record(&self, id: &Id, values: &Record<'_>, ctx: Context<'_, S>) {
        let span = ctx.span(id).expect("span must exist");
        let mut extensions = span.extensions_mut();
        // Append the fields to the existing string if it exists (from [on_new_span]), otherwise
        // store a new string
        if let Some(fields) = extensions.get_mut::<FormattedFields>() {
            FormatFields::format_record(&mut fields.0, values);
        } else {
            let mut fields = FormattedFields(String::new());
            FormatFields::format_record(&mut fields.0, values);
            extensions.insert(fields);
        }
    }

    // An event has been emitted
    fn on_event(&self, event: &Event<'_>, ctx: Context<'_, S>) {
        // No need to do any filtering -- we assume this layer is paired with a filter. So just
        // build the message and ship it.
        let metadata = event.metadata();
        let mut message = format!("[{}] ", metadata.level());
        // First deal with any spans by walking up the span tree and adding each span's formatted
        // representation to the message
        if let Some(scope) = ctx.event_scope(event) {
            let mut seen = false;
            for span in scope.from_root() {
                seen = true;
                let _ = write!(message, "{}", span.metadata().name());
                if let Some(fields) = span.extensions().get::<FormattedFields>() {
                    let _ = write!(message, "{{{}}}", fields.0);
                }
                let _ = write!(message, ":");
            }
            if seen {
                let _ = write!(message, " ");
            }
        }
        let _ = write!(message, "{}: ", metadata.target());
        // Now deal with the event itself
        FormatFields::format_event(&mut message, event);

        let mut logger = self.logger.lock().unwrap();
        let _ = match *event.metadata().level() {
            Level::ERROR => logger.err(message),
            Level::WARN => logger.warning(message),
            Level::INFO => logger.info(message),
            Level::DEBUG => logger.debug(message),
            // syslog has no trace level, so just re-use debug (the lowest syslog level)
            Level::TRACE => logger.debug(message),
        };
    }
}

/// Convert `tracing` events/attributes into strings with a visitor pattern.
struct FormatFields<'a> {
    buf: &'a mut String,
}

impl<'a> FormatFields<'a> {
    fn format_event(buf: &'a mut String, event: &Event<'_>) {
        let mut fmt = Self { buf };
        event.record(&mut fmt);
    }

    fn format_attributes(buf: &'a mut String, attrs: &Attributes<'_>) {
        let mut fmt = Self { buf };
        attrs.record(&mut fmt);
    }

    fn format_record(buf: &'a mut String, record: &Record<'_>) {
        let mut fmt = Self { buf };
        record.record(&mut fmt);
    }
}

impl Visit for FormatFields<'_> {
    fn record_debug(&mut self, field: &Field, value: &dyn std::fmt::Debug) {
        if field.name() == "message" {
            let _ = write!(self.buf, "{:?}", value);
        } else {
            if !self.buf.is_empty() {
                let _ = write!(self.buf, " ");
            }
            let _ = write!(self.buf, "{}={:?}", field.name(), value);
        }
    }

    fn record_str(&mut self, field: &Field, value: &str) {
        if field.name() == "message" {
            let _ = write!(self.buf, "{}", value);
        } else {
            if !self.buf.is_empty() {
                let _ = write!(self.buf, " ");
            }
            let _ = write!(self.buf, "{}={}", field.name(), value);
        }
    }
}

/// A newtype to store the formatted representation of a `tracing` Span's fields
struct FormattedFields(String);

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use super::*;

    use tracing_subscriber::layer::SubscriberExt;

    #[derive(Debug, Clone, Default)]
    struct LockedWriter {
        inner: Arc<Mutex<Vec<u8>>>,
    }

    impl std::io::Write for LockedWriter {
        fn write(&mut self, buf: &[u8]) -> std::io::Result<usize> {
            let mut inner = self.inner.lock().unwrap();
            inner.extend_from_slice(buf);
            Ok(buf.len())
        }

        fn flush(&mut self) -> std::io::Result<()> {
            Ok(())
        }
    }

    #[test]
    fn test_syslog_layer() {
        let buf = LockedWriter::default();
        let layer = SyslogLayer::new_generic(buf.clone());
        let subscriber = tracing_subscriber::registry().with(layer);
        tracing::subscriber::with_default(subscriber, || {
            let span = tracing::info_span!("span1", field1 = 1, field2 = 2, "msg1={:?}", 1);
            let _enter = span.enter();
            let span2 = tracing::warn_span!("span2", field3 = 3, field4 = 4, "msg2={:?}", 2);
            let _enter2 = span2.enter();
            tracing::info!(field5 = 5, field6 = 6, "this is a real {:?} message", "cool");
        });
        let vec = std::mem::take(&mut *buf.inner.lock().unwrap());
        let output = String::from_utf8(vec).unwrap();
        // The actual output is syslog-formatted, so includes the current time and PID. Let's just
        // check the parts of the payload we really care about.
        let expected = "[INFO] span1{msg1=1 field1=1 field2=2}:span2{msg2=2 field3=3 field4=4}: mountpoint_s3::logging::syslog::tests: this is a real \"cool\" message field5=5 field6=6";
        assert!(
            output.ends_with(expected),
            "expected payload {:?} to end with {:?}",
            output,
            expected
        );
        assert!(
            output.contains("mount-s3"),
            "expected payload {:?} to contain mount-s3",
            output
        );
        assert!(
            output.starts_with("<14>"),
            "expected payload {:?} to start with syslog PRI <14>",
            output
        );
    }
}

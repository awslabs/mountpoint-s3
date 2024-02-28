use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex};

use once_cell::sync::Lazy;
use tracing::{Event, Level, Subscriber};
use tracing_subscriber::field::VisitOutput;
use tracing_subscriber::fmt::format::{DefaultVisitor, Writer};
use tracing_subscriber::layer::Context;
use tracing_subscriber::Layer;

static TRACING_TEST_LAYER: Lazy<TracingTestLayer> = Lazy::new(TracingTestLayer::new);

/// This is a singleton [tracing::Layer] that can be used to write tests for log events.
///
/// Use it like this:
/// ```rust
/// let _guard = TracingTestLayer::enable();
/// // ... do work that emits tracing events ...
/// drop(_guard);
/// let events = TracingTestLayer::take_events();
/// // events is a list of all events emitted
/// ```
///
/// THIS IS NOT THREAD SAFE! tracing doesn't give us a good way to separate threads, as tracing
/// subscribers are global state. You almost certainly want to use [rusty_fork] to write tests using
/// this layer.
#[derive(Debug, Default, Clone)]
pub struct TracingTestLayer {
    inner: Arc<Inner>,
}

#[derive(Debug, Default)]
struct Inner {
    events: Mutex<Vec<(Level, String)>>,
    enabled: AtomicBool,
}

impl TracingTestLayer {
    fn new() -> Self {
        Self {
            inner: Arc::new(Inner {
                events: Mutex::new(Vec::new()),
                enabled: AtomicBool::new(false),
            }),
        }
    }

    /// Get a handle to the singleton layer
    pub fn get() -> Self {
        TRACING_TEST_LAYER.clone()
    }

    /// Start collecting tracing events, and stop collecting them when the returned guard drops.
    #[must_use = "returns a guard that disables tracing when dropped"]
    pub fn enable() -> TracingTestLayerEnableGuard {
        TRACING_TEST_LAYER.inner.enabled.store(true, Ordering::SeqCst);
        TracingTestLayerEnableGuard {}
    }

    /// Take all the collected events
    pub fn take_events() -> Vec<(Level, String)> {
        TRACING_TEST_LAYER.inner.events.lock().unwrap().drain(..).collect()
    }
}

impl<S: Subscriber> Layer<S> for TracingTestLayer {
    fn on_event(&self, event: &Event<'_>, _ctx: Context<'_, S>) {
        if self.inner.enabled.load(Ordering::SeqCst) {
            let mut msg = String::new();
            let writer = Writer::new(&mut msg);
            let visitor = DefaultVisitor::new(writer, true);
            visitor.visit(event).unwrap();
            self.inner.events.lock().unwrap().push((*event.metadata().level(), msg));
        }
    }
}

pub struct TracingTestLayerEnableGuard;

impl Drop for TracingTestLayerEnableGuard {
    fn drop(&mut self) {
        TRACING_TEST_LAYER.inner.enabled.store(false, Ordering::SeqCst);
    }
}

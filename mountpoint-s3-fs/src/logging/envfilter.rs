use anyhow::Result;
use tracing_subscriber::EnvFilter;
use tracing_subscriber::reload::{Handle as ReloadHandle, Layer};

/// A List of filters to toggle between.
type ToggleableFilters = Vec<Box<dyn FnMut() -> EnvFilter + Send + 'static>>;

/// A toggleable [EnvFilter] layer.
type ToggleableLayer<S> = Layer<EnvFilter, S>;

/// ToggleableHandle allows toggling between [filters](ToggleableFilters) using the [ToggleableHandle::next] method.
pub struct ToggleableHandle<S> {
    index: usize,
    filters: ToggleableFilters,
    handle: ReloadHandle<EnvFilter, S>,
}

impl<S> ToggleableHandle<S> {
    /// Switches to the next [EnvFilter] and returns a description of the next [EnvFilter].
    pub fn next(&mut self) -> Result<String> {
        self.index = (self.index + 1) % self.filters.len();
        let next_filter = self.filters[self.index]();
        let next_filter_desc = format!("{next_filter}");
        self.handle.modify(|filter| *filter = next_filter)?;
        Ok(next_filter_desc)
    }
}

/// Returns a new [tracing_subscriber::Layer] and a [handle](ToggleableHandle) to toggle between given [filters](ToggleableFilters).
pub fn toggleable<S>(mut filters: ToggleableFilters) -> (ToggleableLayer<S>, ToggleableHandle<S>) {
    assert!(filters.len() > 1, "there must be at least 2 filters to toggle between");

    let first = filters[0]();
    let (filter, handle) = Layer::new(first);

    (
        filter,
        ToggleableHandle {
            index: 0,
            filters,
            handle,
        },
    )
}

#[cfg(test)]
mod tests {
    use tracing_subscriber::layer::SubscriberExt;

    use super::super::testing::LockedWriter;
    use super::*;

    #[test]
    fn it_works() {
        let buf = LockedWriter::default();

        let filters = vec![make_filter("error"), make_filter("debug"), make_filter("info")];
        let (filter, mut handle) = toggleable(filters);

        let writer = buf.clone();
        let subscriber = tracing_subscriber::registry().with(filter).with(
            tracing_subscriber::fmt::layer()
                .with_ansi(false)
                .without_time()
                .compact()
                .with_writer(move || writer.clone()),
        );

        tracing::subscriber::with_default(subscriber, || {
            tracing::error!(target: "test", "error log 1");
            tracing::debug!(target: "test", "debug log 1");

            assert_eq!(handle.next().unwrap(), "debug"); // Will toggle to `DEBUG` level
            tracing::trace!(target: "test", "trace log 1");
            tracing::debug!(target: "test", "debug log 2");

            assert_eq!(handle.next().unwrap(), "info"); // Will toggle to `INFO` level
            tracing::debug!(target: "test", "debug log 3");
            tracing::info!(target: "test", "info log 1");

            assert_eq!(handle.next().unwrap(), "error"); // Will reset back to `ERROR` level
            tracing::info!(target: "test", "info log 2");
            tracing::error!(target: "test", "error log 2");
        });

        assert_eq!(
            buf.get_string(),
            "\
ERROR test: error log 1
DEBUG test: debug log 2
 INFO test: info log 1
ERROR test: error log 2
"
        );
    }

    fn make_filter(level: &str) -> Box<dyn FnMut() -> EnvFilter + Send + 'static> {
        let level = level.to_string();
        Box::new(move || EnvFilter::new(level.clone()))
    }
}

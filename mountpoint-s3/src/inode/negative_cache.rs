use std::time::{Duration, Instant};

use linked_hash_map::LinkedHashMap;

use super::{expiry::Expiry, InodeNo};

use crate::sync::RwLock;

/// A caches for negative lookups.
/// Maintains a bounded set of (parent_ino, child_name) entries that expire after a fixed time.
#[derive(Debug)]
pub struct NegativeCache {
    /// Holds keys in expiration order from oldest to newest.
    map: RwLock<LinkedHashMap<Key, Expiry>>,
    /// Upper bound for the cache.
    max_size: usize,
    /// TTL of a key at insertion.
    ttl: Duration,
}

#[derive(Debug, Hash, PartialEq, Eq)]
struct Key {
    parent_ino: InodeNo,
    child_name: String,
}

impl NegativeCache {
    pub fn new(max_size: usize, ttl: Duration) -> Self {
        Self {
            map: RwLock::new(Default::default()),
            max_size,
            ttl,
        }
    }

    /// Check whether the cache contains a **current** entry for the given
    /// (`parent_ino`, `child_name`) pair.
    pub fn contains(&self, parent_ino: InodeNo, child_name: &str) -> bool {
        let key = Key {
            parent_ino,
            child_name: child_name.to_owned(),
        };
        let start = Instant::now();
        let contains_current = self
            .map
            .read()
            .unwrap()
            .get(&key)
            .is_some_and(|expiry| !expiry.is_expired());
        metrics::histogram!(
            "metadata_cache.negative_cache.operation_duration_us",
            start.elapsed().as_micros() as f64,
            "op" => "contains",
        );
        metrics::counter!("metadata_cache.negative_cache.cache_hit", contains_current.into());
        contains_current
    }

    /// Remove an entry from the cache. If the entry was not present, this is a no-op.
    pub fn remove(&self, parent_ino: InodeNo, child_name: &str) {
        let key = Key {
            parent_ino,
            child_name: child_name.to_owned(),
        };
        let start = Instant::now();
        let mut map = self.map.write().unwrap();
        if map.remove(&key).is_some() {
            metrics::gauge!("metadata_cache.negative_cache.entries", map.len() as f64);
        }
        metrics::histogram!(
            "metadata_cache.negative_cache.operation_duration_us",
            start.elapsed().as_micros() as f64,
            "op" => "remove",
        );
    }

    /// Insert an entry into the cache. If the entry already existed,
    /// update its TTL.
    /// Upon insertion, remove entries that exceed the cache limit or
    /// that have already expired.
    pub fn insert(&self, parent_ino: InodeNo, child_name: &str) {
        let expiry = Expiry::from_now(self.ttl);
        let key = Key {
            parent_ino,
            child_name: child_name.to_owned(),
        };
        let start = Instant::now();
        let mut map = self.map.write().unwrap();
        if map.insert(key, expiry).is_none() {
            // Remove entries that have expired.
            while map.front().is_some_and(|(_, e)| e.is_expired()) {
                _ = map.pop_front();
            }

            // Remove entries that exceed the limit.
            while map.len() > self.max_size {
                let Some((_, e)) = map.pop_front() else {
                    break;
                };
                // Report how many entries are evicted while still current.
                metrics::counter!(
                    "metadata_cache.negative_cache.entries_evicted_before_expiry",
                    (!e.is_expired()).into()
                );
            }
            metrics::gauge!("metadata_cache.negative_cache.entries", map.len() as f64);
        }

        metrics::histogram!(
            "metadata_cache.negative_cache.operation_duration_us",
            start.elapsed().as_micros() as f64,
            "op" => "insert",
        );
    }
}

#[cfg(test)]
mod tests {
    use std::thread::sleep;
    use std::time::{Duration, Instant};

    use super::NegativeCache;

    #[test]
    fn test_contains() {
        let cache = NegativeCache::new(100, Duration::from_secs(60));

        cache.insert(1, "child1");
        assert!(cache.contains(1, "child1"));
        assert!(!cache.contains(1, "child2"));
        assert!(!cache.contains(2, "child1"));
    }

    #[test]
    fn test_insert() {
        let cache = NegativeCache::new(100, Duration::from_secs(60));

        cache.insert(1, "child1");
        assert!(cache.contains(1, "child1"));

        cache.insert(1, "child2");
        assert!(cache.contains(1, "child2"));
        assert!(cache.contains(1, "child1"));

        cache.insert(2, "child1");
        assert!(cache.contains(2, "child1"));
        assert!(cache.contains(1, "child2"));
        assert!(cache.contains(1, "child1"));
    }

    #[test]
    fn test_remove() {
        let cache = NegativeCache::new(100, Duration::from_secs(60));

        cache.insert(1, "child1");
        cache.insert(1, "child2");
        cache.insert(2, "child1");
        assert!(cache.contains(1, "child1"));
        assert!(cache.contains(1, "child2"));
        assert!(cache.contains(2, "child1"));

        cache.remove(1, "child1");
        assert!(!cache.contains(1, "child1"));
        assert!(cache.contains(1, "child2"));
        assert!(cache.contains(2, "child1"));
    }

    #[test]
    fn test_max_size() {
        let cache = NegativeCache::new(2, Duration::from_secs(60));

        cache.insert(1, "child1");
        assert!(cache.contains(1, "child1"));

        cache.insert(1, "child2");
        assert!(cache.contains(1, "child2"));
        assert!(cache.contains(1, "child1"));

        cache.insert(1, "child3");
        assert!(cache.contains(1, "child3"));
        assert!(cache.contains(1, "child2"));
        assert!(!cache.contains(1, "child1"));
    }

    #[test]
    fn test_expiration() {
        let cache = NegativeCache::new(100, Duration::from_millis(1));

        cache.insert(1, "child1");
        sleep(Duration::from_millis(2));
        assert!(!cache.contains(1, "child1"));
    }

    #[test]
    fn test_insert_after_expiry() {
        let cache = NegativeCache::new(100, Duration::from_millis(50));

        cache.insert(1, "child1");
        sleep(Duration::from_millis(100));
        assert!(!cache.contains(1, "child1"));

        cache.insert(1, "child1");
        assert!(cache.contains(1, "child1"));
    }

    #[test]
    fn test_insert_resets_ttl() {
        let ttl = Duration::from_millis(100);
        let cache = NegativeCache::new(100, ttl);

        cache.insert(1, "child1");
        let inserted_time = Instant::now();
        // Wait for about half ttl, verify the entry has not expirted yet.
        let half_ttl = ttl / 2;
        while Instant::now().saturating_duration_since(inserted_time) <= half_ttl {
            sleep(Duration::from_millis(1));
        }
        assert!(Instant::now().saturating_duration_since(inserted_time) < ttl);
        assert!(cache.contains(1, "child1"));

        cache.insert(1, "child1");
        let reset_time = Instant::now();
        // Wait until the initial insert has expired, but the reset has not.
        while Instant::now().saturating_duration_since(inserted_time) <= ttl {
            sleep(Duration::from_millis(1));
        }
        assert!(Instant::now().saturating_duration_since(reset_time) < ttl);
        assert!(cache.contains(1, "child1"));
    }
}

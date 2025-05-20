use std::fs;
use std::hint::black_box;
use std::path::Path;

use criterion::async_executor::{AsyncExecutor, FuturesExecutor};
use criterion::measurement::WallTime;
use criterion::{criterion_group, criterion_main, BenchmarkGroup, Criterion};

use mountpoint_s3_client::types::ETag;
use mountpoint_s3_fs::data_cache::{ChecksummedBytes, DataCache, DiskDataCache, DiskDataCacheConfig};
use mountpoint_s3_fs::object::ObjectId;
use rand::RngCore;
use tempfile::TempDir;

const BLOCK_SIZE: u64 = 1024 * 1024;
const OBJECT_SIZE: usize = 10 * BLOCK_SIZE as usize;

#[inline]
async fn read_cache_block(cache: &DiskDataCache, cache_key: &ObjectId) {
    _ = black_box(
        cache
            .get_block(cache_key, 0, 0, OBJECT_SIZE)
            .await
            .expect("is able to read")
            .expect("data is there"),
    );
}

fn random_bytes(length: usize) -> Vec<u8> {
    let mut rng = rand::thread_rng();
    let mut random_bytes = vec![0u8; length];
    rng.fill_bytes(&mut random_bytes);
    random_bytes
}

fn cache_read_benchmark(group: &mut BenchmarkGroup<'_, WallTime>, dir_path: &Path, data: &[u8]) {
    let config = DiskDataCacheConfig {
        cache_directory: dir_path.to_path_buf(),
        block_size: BLOCK_SIZE,
        limit: mountpoint_s3_fs::data_cache::CacheLimit::Unbounded,
    };
    let cache = DiskDataCache::new(config);
    let cache_key = ObjectId::new("a".into(), ETag::for_tests());
    let bytes = ChecksummedBytes::new(data.to_owned().into());

    FuturesExecutor.block_on(async {
        cache
            .put_block(cache_key.clone(), 0, 0, bytes, OBJECT_SIZE)
            .await
            .expect("is able to write to cache")
    });

    group.bench_function("read_cache_block", |b| {
        b.to_async(FuturesExecutor)
            .iter(|| read_cache_block(&cache, &cache_key))
    });
}

fn file_read_benchmark(group: &mut BenchmarkGroup<'_, WallTime>, dir_path: &Path, data: &[u8]) {
    let file_path = dir_path.join("file");
    fs::write(&file_path, data).expect("can write to file");

    group.bench_function("read_file", |b| {
        b.iter(|| _ = black_box(fs::read(&file_path).expect("is able to read file")))
    });
}

fn read_benchmark(c: &mut Criterion) {
    let temp_dir = TempDir::with_prefix("mp-cache-benchmarks").unwrap();
    let data = random_bytes(BLOCK_SIZE.try_into().unwrap());

    let mut group = c.benchmark_group("Block Read");

    file_read_benchmark(&mut group, temp_dir.path(), &data);
    cache_read_benchmark(&mut group, temp_dir.path(), &data);

    group.finish();
}

criterion_group!(benches, read_benchmark);
criterion_main!(benches);

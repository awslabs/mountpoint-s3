use std::{fs, io::Write, path::PathBuf, sync::Arc};

use criterion::{criterion_group, criterion_main, Criterion};

use mountpoint_s3::data_cache::{
    Bincode2DiskBlockFileReader, Bincode2DiskBlockFileWriter, ChecksummedBytes, DataCache, DiskDataCache,
    DiskDataCacheConfig, ObjectId,
};
use mountpoint_s3_client::types::ETag;
use rand::Rng;
const BLOCK_SIZE: u64 = 1024 * 1024;

#[inline]
fn read_cache_bincode() {
    let config = DiskDataCacheConfig {
        block_size: BLOCK_SIZE,
        limit: mountpoint_s3::data_cache::CacheLimit::Unbounded,
        ..Default::default()
    };
    let cache_directory = PathBuf::from("/tmp/mp-cache1/");
    let cache = DiskDataCache::new(cache_directory, config);
    let cache_key = ObjectId::new("a".into(), ETag::for_tests());
    let _data = cache
        .get_block(&cache_key, 0, 0)
        .expect("is able to read")
        .expect("data is there");
}

#[inline]
fn read_cache_bincode2() {
    let config = DiskDataCacheConfig {
        block_size: BLOCK_SIZE,
        limit: mountpoint_s3::data_cache::CacheLimit::Unbounded,
        reader: Arc::new(Bincode2DiskBlockFileReader {}),
        writer: Arc::new(Bincode2DiskBlockFileWriter {}),
    };
    let cache_directory = PathBuf::from("/tmp/mp-cache2/");
    let cache = DiskDataCache::new(cache_directory, config);
    let cache_key = ObjectId::new("a".into(), ETag::for_tests());
    let _data = cache
        .get_block(&cache_key, 0, 0)
        .expect("is able to read")
        .expect("data is there");
}

#[inline]
fn read_file() {
    let _read = fs::read("/tmp/mp-file/file").expect("is able to read file");
}

fn random_bytes(length: usize) -> Vec<u8> {
    let mut rng = rand::thread_rng();
    let random_bytes: Vec<u8> = (0..length).map(|_| rng.gen()).collect();
    random_bytes
}

fn write_file(data: &Vec<u8>) {
    fs::create_dir("/tmp/mp-file").expect("is able to create temp dir");
    let file_path = "/tmp/mp-file/file";
    let mut file = fs::File::create(file_path).expect("is able to create file");
    file.write_all(data.as_slice()).expect("is able to write file");
}

fn write_cache_bincode(data: &[u8]) {
    let config = DiskDataCacheConfig {
        block_size: BLOCK_SIZE,
        limit: mountpoint_s3::data_cache::CacheLimit::Unbounded,
        ..Default::default()
    };
    fs::create_dir("/tmp/mp-cache1").expect("is able to create dir 1");
    let cache_dir = PathBuf::from("/tmp/mp-cache1/");
    let cache = DiskDataCache::new(cache_dir, config);
    let cache_key = ObjectId::new("a".into(), ETag::for_tests());
    let data = ChecksummedBytes::new(data.to_owned().into());
    cache
        .put_block(cache_key.clone(), 0, 0, data)
        .expect("is able to write to cache");
}

fn write_cache_bincode2(data: &[u8]) {
    let config = DiskDataCacheConfig {
        block_size: BLOCK_SIZE,
        limit: mountpoint_s3::data_cache::CacheLimit::Unbounded,
        reader: Arc::new(Bincode2DiskBlockFileReader {}),
        writer: Arc::new(Bincode2DiskBlockFileWriter {}),
    };
    fs::create_dir("/tmp/mp-cache2").expect("is able to create dir 1");
    let cache_dir = PathBuf::from("/tmp/mp-cache2/");
    let cache = DiskDataCache::new(cache_dir, config);
    let cache_key = ObjectId::new("a".into(), ETag::for_tests());
    let data = ChecksummedBytes::new(data.to_owned().into());
    cache
        .put_block(cache_key.clone(), 0, 0, data)
        .expect("is able to write to cache");
}

fn cleanup() {
    let _ = fs::remove_dir_all("/tmp/mp-file");
    let _ = fs::remove_dir_all("/tmp/mp-cache1");
    let _ = fs::remove_dir_all("/tmp/mp-cache2");
}

fn setup() {
    let data = random_bytes(BLOCK_SIZE.try_into().unwrap());
    write_file(&data);
    write_cache_bincode(&data);
    write_cache_bincode2(&data);
}

pub fn criterion_benchmark(c: &mut Criterion) {
    setup();

    c.bench_function("read_cache_bincode", |b| b.iter(read_cache_bincode));
    c.bench_function("read_cache_bincode2", |b| b.iter(read_cache_bincode2));
    c.bench_function("read_file", |b| b.iter(read_file));

    cleanup();
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);

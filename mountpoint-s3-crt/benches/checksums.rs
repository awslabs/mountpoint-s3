//! Benchmarks for the CRT checksums library
use std::hint::black_box;

use criterion::{BenchmarkId, Criterion, Throughput, criterion_group, criterion_main};
use mountpoint_s3_crt::checksums::{crc32, crc32c, crc64nvme, sha1, sha256};
use rand::rngs::SmallRng;
use rand::{RngExt, SeedableRng};

#[ctor::ctor]
fn init_crt() {
    // TODO: If we add additional benchmarks needing CRT initialization, move to a benchmark harness script.
    mountpoint_s3_crt::io::io_library_init(&mountpoint_s3_crt::common::allocator::Allocator::default());
}

fn benchmark_hasher<F, R>(c: &mut Criterion, hash_fn: F, name: &str)
where
    F: Fn(&[u8]) -> R,
{
    let mut group = c.benchmark_group(name);
    let mut rng = SmallRng::seed_from_u64(0x12345678);
    for expt in [4, 8, 12, 16, 20] {
        let size = 1usize << expt;
        group.throughput(Throughput::Bytes(size as u64));

        let mut data = vec![0u8; size];
        rng.fill(&mut data[..]);

        group.bench_with_input(BenchmarkId::from_parameter(size), &data[..], |b, data| {
            b.iter(|| {
                let _ = black_box(hash_fn(data));
            })
        });
    }
    group.finish();
}

fn crc32(c: &mut Criterion) {
    benchmark_hasher(c, crc32::checksum, "crc32");
}

fn crc32c(c: &mut Criterion) {
    benchmark_hasher(c, crc32c::checksum, "crc32c");
}

fn crc64nvme(c: &mut Criterion) {
    benchmark_hasher(c, crc64nvme::checksum, "crc64");
}

fn sha1(c: &mut Criterion) {
    benchmark_hasher(c, sha1::checksum, "sha1");
}

fn sha256(c: &mut Criterion) {
    benchmark_hasher(c, sha256::checksum, "sha256");
}

criterion_group!(checksum_benches, crc32, crc32c, crc64nvme, sha1, sha256);
criterion_main!(checksum_benches);

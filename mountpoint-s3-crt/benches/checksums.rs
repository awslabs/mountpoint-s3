//! Benchmarks for the CRT checksums library

use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion, Throughput};
use mountpoint_s3_crt::checksums;
use rand::rngs::SmallRng;
use rand::{Rng, SeedableRng};

fn benchmark_hasher<F, R>(c: &mut Criterion, hash_fn: F, name: &str)
where
    F: Fn(&[u8], u32) -> R,
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
                let _ = black_box(hash_fn(data, 0));
            })
        });
    }
    group.finish();
}

fn crc32(c: &mut Criterion) {
    benchmark_hasher(c, checksums::crc32, "crc32");
}

fn crc32c(c: &mut Criterion) {
    benchmark_hasher(c, checksums::crc32c, "crc32c");
}

criterion_group!(checksum_benches, crc32, crc32c);
criterion_main!(checksum_benches);

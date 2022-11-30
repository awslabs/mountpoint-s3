//! Some basic spawn benchmarks, borrowed from Tokio:
//! https://github.com/tokio-rs/tokio/blob/1c823093cb685c421ea614a2931e4b6db3918b22/benches/spawn.rs

use std::future::Future;
use std::pin::Pin;
use std::task::{Context, Poll};

use aws_crt_s3::common::allocator::Allocator;
use aws_crt_s3::io::event_loop::EventLoopGroup;
use aws_crt_s3::io::futures::FutureSpawner;
use criterion::{black_box, criterion_group, criterion_main, Criterion};
use futures::executor::block_on;

async fn yield_now() {
    struct YieldNow(bool);

    impl Future for YieldNow {
        type Output = ();

        fn poll(mut self: Pin<&mut Self>, cx: &mut Context) -> Poll<Self::Output> {
            if self.0 {
                return Poll::Ready(());
            }

            self.0 = true;
            cx.waker().wake_by_ref();
            Poll::Pending
        }
    }
}

async fn work() -> usize {
    let val = 1 + 1;
    yield_now().await;
    black_box(val)
}

fn event_loop_future(c: &mut Criterion) {
    let allocator = Allocator::default();
    let el_group = EventLoopGroup::new_default(&allocator, Some(1), || {}).unwrap();

    c.bench_function("event_loop_future", |b| {
        b.iter(|| {
            const NUM_TASKS: usize = 10;

            let mut handles = Vec::with_capacity(NUM_TASKS);
            for _ in 0..NUM_TASKS {
                handles.push(el_group.spawn_future(work()));
            }

            for handle in handles {
                assert_eq!(block_on(handle.into_future()).unwrap(), 2);
            }
        })
    });
}

criterion_group!(event_loop_future_benches, event_loop_future);
criterion_main!(event_loop_future_benches);

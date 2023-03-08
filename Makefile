# Most of these targets just exist so we can avoid running clippy and rustfmt on the vendored
# fuser crate. If those tools ever get stabilized `ignore` features, or we stop vendoring, this can
# go away.

CRATES = mountpoint-s3-crt-sys mountpoint-s3-crt mountpoint-s3-client mountpoint-s3
RUST_FEATURES ?= fuse_tests

.PHONY: all
all:
	cargo build --all-targets

.PHONY: release
release:
	cargo build --release --all-targets

.PHONY: check
check:
	cargo check --all-targets --all-features

.PHONY: test
test:
	@packages=`echo "$(CRATES)" | sed -E 's/(^| )/ -p /g'`; \
	cargo test $$packages

# Run a test that we know should fail if ASan is enabled
.PHONY: test-asan-working
test-asan-working:
	@packages=`echo "$(CRATES)" | sed -E 's/(^| )/ -p /g'`; \
	RUSTFLAGS="-Zsanitizer=address" \
	cargo +nightly test -Z build-std --target x86_64-unknown-linux-gnu --features $(RUST_FEATURES) $$packages -- --ignored test_asan_working 2>&1 \
	| tee /dev/stderr \
	| grep "heap-use-after-free" \
	  && echo "ASan is working" || (echo "ASan did not find the use-after-free; something's wrong"; exit 1)

.PHONY: test-asan
test-asan:
	@packages=`echo "$(CRATES)" | sed -E 's/(^| )/ -p /g'`; \
	LSAN_OPTIONS=suppressions="$$(pwd)/lsan-suppressions.txt" \
	RUSTFLAGS="-Zsanitizer=address" \
	cargo +nightly test -Z build-std --target x86_64-unknown-linux-gnu --features $(RUST_FEATURES) $$packages -- \
	--skip reftest_ \
	--skip proptest_ \
	--skip fork_test \
	--skip sequential_read_large

.PHONY: fmt
fmt:
	@for crate in $(CRATES); do \
		cargo fmt --manifest-path $$crate/Cargo.toml; \
	done

.PHONY: fmt-check
fmt-check:
	@fail=0; \
	for crate in $(CRATES); do \
		cargo fmt --manifest-path $$crate/Cargo.toml -- --check || fail=1; \
	done; \
	exit $$fail

.PHONY: clippy
clippy:
	@packages=`echo "$(CRATES)" | sed -E 's/(^| )/ -p /g'`; \
	cargo clippy $$packages --no-deps --all-targets --all-features -- -D clippy::all

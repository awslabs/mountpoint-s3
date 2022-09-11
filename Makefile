# Most of these targets just exist so we can avoid running clippy and rustfmt on the vendored
# fuser crate. If those tools ever get stabilized `ignore` features, or we stop vendoring, this can
# go away.

CRATES = aws-crt-s3-sys aws-crt-s3 s3-client s3-file-connector

.PHONY: all
all:
	cargo build --all-targets

.PHONY: release
release:
	cargo build --release --all-targets

.PHONY: test
test:
	@packages=`echo "$(CRATES)" | sed -E 's/(^| )/ -p /g'`; \
	cargo test $$packages

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
	cargo clippy $$packages --no-deps --all-targets -- -D clippy::all
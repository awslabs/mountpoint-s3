VERSION = $(shell git describe --tags --always --dirty)
INTERACTIVE ?= i


build: pre
	cargo build --examples --features=experimental

format:
	cargo +nightly fmt --all

pre:
	cargo +nightly fmt --all -- --check
	cargo deny check licenses
	cargo clippy --all-targets
	cargo clippy --all-targets --no-default-features

xfstests:
	docker build -t fuser:xfstests -f xfstests.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --cap-add IPC_OWNER --device /dev/fuse --security-opt apparmor:unconfined \
	 --memory=2g --kernel-memory=200m \
	 -v "$(shell pwd)/logs:/code/logs" fuser:xfstests bash -c "cd /code/fuser && ./xfstests.sh"

pjdfs_tests: pjdfs_tests_fuse2 pjdfs_tests_fuse3 pjdfs_tests_pure

pjdfs_tests_fuse2:
	docker build --build-arg BUILD_FEATURES='--features=libfuse2' -t fuser:pjdfs-2 -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs-2 bash -c "cd /code/fuser && ./pjdfs.sh"

pjdfs_tests_fuse3:
	docker build --build-arg BUILD_FEATURES='--features=libfuse3' -t fuser:pjdfs-3 -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs-3 bash -c "cd /code/fuser && ./pjdfs.sh"

pjdfs_tests_pure:
	docker build --build-arg BUILD_FEATURES='' -t fuser:pjdfs-pure -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs-pure bash -c "cd /code/fuser && ./pjdfs.sh"

mount_tests:
	docker build -t fuser:mount_tests_libfuse2 -f mount_tests_libfuse2.Dockerfile .
	docker build -t fuser:mount_tests_libfuse3 -f mount_tests_libfuse3.Dockerfile .
	mkdir -p docker-cargo-caches/target docker-cargo-caches/git docker-cargo-caches/registry
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/docker-cargo-caches/target:/code/fuser/target" \
	 -v "$(shell pwd)/docker-cargo-caches/git:/root/.cargo/git" \
	 -v "$(shell pwd)/docker-cargo-caches/registry:/root/.cargo/registry" \
	 fuser:mount_tests_libfuse3 bash -c "cd /code/fuser && cargo run -p fuser-tests -- simple"
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/docker-cargo-caches/target:/code/fuser/target" \
	 -v "$(shell pwd)/docker-cargo-caches/git:/root/.cargo/git" \
	 -v "$(shell pwd)/docker-cargo-caches/registry:/root/.cargo/registry" \
	 fuser:mount_tests_libfuse2 bash -c "cd /code/fuser && cargo run -p fuser-tests -- linux-mount-libfuse2"
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/docker-cargo-caches/target:/code/fuser/target" \
	 -v "$(shell pwd)/docker-cargo-caches/git:/root/.cargo/git" \
	 -v "$(shell pwd)/docker-cargo-caches/registry:/root/.cargo/registry" \
	 fuser:mount_tests_libfuse3 bash -c "cd /code/fuser && cargo run -p fuser-tests -- linux-mount-libfuse3"

test_passthrough:
	cargo build --example passthrough
	sudo tests/test_passthrough.sh target/debug/examples/passthrough

test: pre mount_tests pjdfs_tests xfstests
	cargo test

test_macos: pre
	cargo doc --all --no-deps
	cargo test --all --all-targets --features=libfuse2 -- --skip=mnt::test::mount_unmount
	cargo run -p fuser-tests -- macos-mount
	./tests/macos_pjdfs.sh

VERSION = $(shell git describe --tags --always --dirty)
INTERACTIVE ?= i


build: pre
	cargo build --examples

pre:
	cargo fmt --all -- --check
	cargo deny check licenses
	cargo clippy --all-targets
	cargo clippy --all-targets --no-default-features
	cargo clippy --all-targets --features=abi-7-30

xfstests:
	docker build -t fuser:xfstests -f xfstests.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 --memory=2g --kernel-memory=200m \
	 -v "$(shell pwd)/logs:/code/logs" fuser:xfstests bash -c "cd /code/fuser && ./xfstests.sh"

pjdfs_tests: pjdfs_tests_fuse2 pjdfs_tests_fuse3 pjdfs_tests_pure

pjdfs_tests_fuse2:
	docker build --build-arg BUILD_FEATURES='--features=abi-7-19' -t fuser:pjdfs -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs bash -c "cd /code/fuser && ./pjdfs.sh"

pjdfs_tests_fuse3:
	docker build --build-arg BUILD_FEATURES='--features=abi-7-21' -t fuser:pjdfs -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs bash -c "cd /code/fuser && ./pjdfs.sh"

pjdfs_tests_pure:
	docker build --build-arg BUILD_FEATURES='--no-default-features --features=abi-7-19' -t fuser:pjdfs -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs bash -c "cd /code/fuser && ./pjdfs.sh"

mount_tests:
	docker build -t fuser:mount_tests -f mount_tests.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 fuser:mount_tests bash -c "cd /code/fuser && bash ./mount_tests.sh"

test: pre mount_tests pjdfs_tests xfstests
	cargo test
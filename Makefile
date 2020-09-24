VERSION = $(shell git describe --tags --always --dirty)
INTERACTIVE ?= i


build: pre
	cargo build

pre:
	cargo fmt --all -- --check
	cargo deny check licenses
	cargo clippy --all

xfstests:
	docker build -t fuser:xfstests -f xfstests.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 --memory=2g --kernel-memory=200m \
	 -v "$(shell pwd)/logs:/code/logs" fuser:xfstests bash -c "cd /code/fuser && ./xfstests.sh"

pjdfs_tests: pjdfs_tests_fuse2 pjdfs_tests_fuse3

pjdfs_tests_fuse2:
	docker build --build-arg FUSE_ABI=7-19 -t fuser:pjdfs -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs bash -c "cd /code/fuser && ./pjdfs.sh"

pjdfs_tests_fuse3:
	docker build --build-arg FUSE_ABI=7-21 -t fuser:pjdfs -f pjdfs.Dockerfile .
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:pjdfs bash -c "cd /code/fuser && ./pjdfs.sh"

test: pre pjdfs_tests xfstests
	cargo test
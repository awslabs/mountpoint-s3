VERSION = $(shell git describe --tags --always --dirty)
INTERACTIVE ?= i


build_integration_tests:
	docker build -t fuser:tests -f integration_tests.Dockerfile .

xfstests: build_integration_tests
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 --memory=2g --kernel-memory=200m \
	 -v "$(shell pwd)/logs:/code/logs" fuser:tests bash -c "cd /code/fuser && ./xfstests.sh"

pjdfs_tests: build_integration_tests
	# Additional permissions are needed to be able to mount FUSE
	docker run --rm -$(INTERACTIVE)t --cap-add SYS_ADMIN --device /dev/fuse --security-opt apparmor:unconfined \
	 -v "$(shell pwd)/logs:/code/logs" fuser:tests bash -c "cd /code/fuser && ./pjdfs.sh"

test: pre pjdfs_tests xfstests
	cargo test
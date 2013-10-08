CC ?= cc
CFLAGS ?= -Os
RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

all: lib/libfuse.dylib

check: bin/fuse_test
	bin/fuse_test

clean:
	rm -rf bin lib

.PHONY: all check clean

bin lib:
	mkdir -p $@

lib/libfuse.dylib: src/lib.rs src/*.rs lib
	$(RUSTC) $(RUSTFLAGS) --lib --out-dir $(dir $@) $<

bin/fuse_test: src/lib.rs src/*.rs bin
	$(RUSTC) $(RUSTFLAGS) --test -o $@ $<

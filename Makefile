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


EXAMPLE_SRCS=$(wildcard examples/*.rs)
EXAMPLE_BINS=$(patsubst examples/%.rs,bin/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): bin/%: examples/%.rs bin lib/libfuse.dylib
	$(RUSTC) $(RUSTFLAGS) -L lib --bin -o $@ $<

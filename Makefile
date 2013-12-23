RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

LIBFUSE := $(shell $(RUSTC) --crate-file-name --dylib src/lib.rs)

all: build/$(LIBFUSE)

check: build/libfuse_test
	build/libfuse_test

clean:
	rm -rf build

.PHONY: all check clean

build/$(LIBFUSE): src/lib.rs
	mkdir -p build
	$(RUSTC) $(RUSTFLAGS) --dep-info build/libfuse.d --dylib --rlib --out-dir $(dir $@) $<

-include build/libfuse.d

build/libfuse_test: src/lib.rs
	mkdir -p build
	$(RUSTC) $(RUSTFLAGS) --dep-info build/libfuse_test.d --test -o $@ $<

-include build/libfuse_test.d


EXAMPLE_SRCS := $(wildcard examples/*.rs)
EXAMPLE_BINS := $(patsubst examples/%.rs,build/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): build/%: examples/%.rs build/$(LIBFUSE)
	$(RUSTC) $(RUSTFLAGS) -L build --bin -Z prefer-dynamic -o $@ $<

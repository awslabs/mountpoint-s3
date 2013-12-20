RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

LIBFUSE := $(shell $(RUSTC) --crate-file-name --dylib --out-dir build src/lib.rs)

all: $(LIBFUSE)

check: build/libfuse_test
	build/libfuse_test

clean:
	rm -rf build

.PHONY: all check clean

build:
	mkdir -p $@

$(LIBFUSE): src/lib.rs build
	$(RUSTC) $(RUSTFLAGS) --dep-info --dylib --rlib --out-dir build $<
	mv build/lib.d build/libfuse.d

-include build/libfuse.d

build/libfuse_test: src/lib.rs build
	$(RUSTC) $(RUSTFLAGS) --dep-info --test -o $@ $<
	mv build/lib.d build/libfuse_test.d

-include build/libfuse_test.d


EXAMPLE_SRCS := $(wildcard examples/*.rs)
EXAMPLE_BINS := $(patsubst examples/%.rs,build/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): build/%: examples/%.rs build $(LIBFUSE)
	$(RUSTC) $(RUSTFLAGS) -L build --bin -Z prefer-dynamic -o $@ $<

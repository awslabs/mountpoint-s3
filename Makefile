RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

all: build/libfuse.dummy

check: build/libfuse_test
	build/libfuse_test

clean:
	rm -rf build

.PHONY: all check clean

build:
	mkdir -p $@

build/libfuse.dummy: src/lib.rs build
	$(RUSTC) $(RUSTFLAGS) --dep-info --dylib --rlib --out-dir $(dir $@) $<
	mv build/lib.d build/libfuse.d
	touch $@

-include build/libfuse.d

build/libfuse_test: src/lib.rs build
	$(RUSTC) $(RUSTFLAGS) --dep-info --test -o $@ $<
	mv build/lib.d build/libfuse_test.d

-include build/libfuse_test.d


EXAMPLE_SRCS := $(wildcard examples/*.rs)
EXAMPLE_BINS := $(patsubst examples/%.rs,build/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): build/%: examples/%.rs build build/libfuse.dummy
	$(RUSTC) $(RUSTFLAGS) -L build --bin -Z prefer-dynamic -o $@ $<

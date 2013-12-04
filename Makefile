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

build/libfuse.dummy: src/lib.rs src/*.rs build
	$(RUSTC) $(RUSTFLAGS) --dylib --rlib --out-dir $(dir $@) $<

build/libfuse_test: src/lib.rs src/*.rs build
	$(RUSTC) $(RUSTFLAGS) --test -o $@ $<


EXAMPLE_SRCS=$(wildcard examples/*.rs)
EXAMPLE_BINS=$(patsubst examples/%.rs,build/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): build/%: examples/%.rs build build/libfuse.dummy
	$(RUSTC) $(RUSTFLAGS) -L build --bin -Z prefer-dynamic -o $@ $<

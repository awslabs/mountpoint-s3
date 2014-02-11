RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

LIBFUSE := $(patsubst %,build/%,$(shell $(RUSTC) --crate-file-name src/lib.rs))

all: $(LIBFUSE)

check: build/libfuse_test
	build/libfuse_test

clean:
	rm -rf build

.PHONY: all check clean

$(LIBFUSE): src/lib.rs
	mkdir -p build
	$(RUSTC) $(RUSTFLAGS) --dep-info build/libfuse.d --out-dir $(dir $@) $<

-include build/libfuse.d

build/libfuse_test: src/lib.rs
	mkdir -p build
	$(RUSTC) $(RUSTFLAGS) --dep-info build/libfuse_test.d --test -o $@ $<

-include build/libfuse_test.d


EXAMPLE_SRCS := $(wildcard examples/*.rs)
EXAMPLE_BINS := $(patsubst examples/%.rs,build/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): build/%: examples/%.rs $(LIBFUSE)
	$(RUSTC) $(RUSTFLAGS) -L build -C prefer-dynamic -o $@ $<

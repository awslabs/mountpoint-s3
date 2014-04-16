RUSTC ?= rustc
RUSTDOC ?= rustdoc
ifdef DEBUG
RUSTFLAGS ?= -g
RUSTDOCFLAGS ?=
else
RUSTFLAGS ?= -O --cfg ndebug
RUSTDOCFLAGS ?= --cfg ndebug
endif

LIBFUSE := $(patsubst %,build/%,$(shell $(RUSTC) --crate-file-name src/lib.rs))

all: $(LIBFUSE)

check: build/libfuse_test
	build/libfuse_test

doc: doc/fuse/index.html

clean:
	rm -rf build doc

.PHONY: all check doc clean

$(LIBFUSE): src/lib.rs
	mkdir -p build
	$(RUSTC) $(RUSTFLAGS) --dep-info build/libfuse.d --out-dir $(dir $@) $<

-include build/libfuse.d

build/libfuse_test: src/lib.rs
	mkdir -p build
	$(RUSTC) $(RUSTFLAGS) --dep-info build/libfuse_test.d --test -o $@ $<

-include build/libfuse_test.d

doc/fuse/index.html:
	$(RUSTDOC) $(RUSTDOCFLAGS) --output doc src/lib.rs


EXAMPLE_SRCS := $(wildcard examples/*.rs)
EXAMPLE_BINS := $(patsubst examples/%.rs,build/%,$(EXAMPLE_SRCS))

examples: $(EXAMPLE_BINS)

.PHONY: examples

$(EXAMPLE_BINS): build/%: examples/%.rs $(LIBFUSE)
	$(RUSTC) $(RUSTFLAGS) -L build -C prefer-dynamic -o $@ $<

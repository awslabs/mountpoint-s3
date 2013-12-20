RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

CRATE_ID := $(shell sed -ne 's/^\#\[ *crate_id *= *"\(.*\)" *\];$$/\1/p' src/lib.rs)
CRATE_NAME := $(shell printf $(CRATE_ID) |sed -ne 's/^[^\#]*\#\([^:]*\):.*$$/\1/p')
CRATE_VERSION := $(shell printf $(CRATE_ID) |sed -ne 's/^[^\#]*\#[^:]*:\(.*\)$$/\1/p')
CRATE_HASH := $(shell printf $(CRATE_ID) |shasum -a 256 |sed -ne 's/^\(.\{8\}\).*$$/\1/p')
LIBEXT := $(if $(filter Darwin,$(shell uname)),dylib,so)
LIBNAME := libfuse-$(CRATE_HASH)-$(CRATE_VERSION).$(LIBEXT)

all: build/$(LIBNAME)

check: build/libfuse_test
	build/libfuse_test

clean:
	rm -rf build

.PHONY: all check clean

build:
	mkdir -p $@

build/$(LIBNAME): src/lib.rs build
	$(RUSTC) $(RUSTFLAGS) --dep-info --dylib --rlib --out-dir $(dir $@) $<
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

$(EXAMPLE_BINS): build/%: examples/%.rs build build/$(LIBNAME)
	$(RUSTC) $(RUSTFLAGS) -L build --bin -Z prefer-dynamic -o $@ $<

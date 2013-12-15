RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

PKGID := $(shell sed -ne 's/^\#\[ *pkgid *= *"\(.*\)" *\];$$/\1/p' src/lib.rs)
VERSION := $(shell printf $(PKGID) |sed -ne 's/^[^\#]*\#\(.*\)$$/\1/p')
HASH := $(shell printf $(PKGID) |shasum -a 256 |sed -ne 's/^\(.\{8\}\).*$$/\1/p')
ifeq ($(shell uname),Darwin)
LIBEXT := dylib
else
LIBEXT := so
endif
LIBNAME := libfuse-$(HASH)-$(VERSION).$(LIBEXT)

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

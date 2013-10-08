CC ?= cc
CFLAGS ?= -Os
RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

all: lib/libfuse.dylib

check: bin/fuse_test
	bin/fuse_test

clean:
	rm -rf bin lib build
#	rm -rf *.dSYM *.o *.a *~ libfuse*.dylib fuse_test

.PHONY: all check clean

bin lib build:
	mkdir -p $@

build/glue.o: src/glue.c build
	$(CC) $(CFLAGS) -c -o $@ $<

build/libglue.a: build/glue.o
	$(AR) -rcs $@ $+

lib/libfuse.dylib: src/lib.rs src/*.rs build/libglue.a lib
	$(RUSTC) $(RUSTFLAGS) -L build --lib --out-dir $(dir $@) $<

bin/fuse_test: src/lib.rs src/*.rs build/libglue.a bin
	$(RUSTC) $(RUSTFLAGS) -L build --test -o $@ $<

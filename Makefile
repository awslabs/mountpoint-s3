CC ?= cc
CFLAGS ?= -Os
RUSTC ?= rustc
RUSTFLAGS ?= -O --cfg ndebug

all: libfuse.dylib

check: fuse_test
	./fuse_test

clean:
	rm -rf *.dSYM *.o *.a *~ libfuse.dylib fuse_test

.PHONY: all check clean

libglue.a: glue.o
	$(AR) -rcs $@ $+

libfuse.dylib fuse_test: libglue.a

libfuse.dylib: lib.rs *.rs
	$(RUSTC) $(RUSTFLAGS) --lib $<

fuse_test: lib.rs *.rs
	$(RUSTC) $(RUSTFLAGS) --test -o $@ $<

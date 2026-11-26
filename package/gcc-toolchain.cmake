# CMake toolchain file for the release build (see build_mountpoint_binary in package.py): compile the CRT with the
# image's gcc instead of cargo-zigbuild's `zig cc` wrapper. zig still links the binary against its glibc 2.17 stubs.
set(CMAKE_C_COMPILER /usr/bin/gcc)
set(CMAKE_CXX_COMPILER /usr/bin/g++)

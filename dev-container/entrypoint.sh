#!/bin/bash
set -e

# Ensure the correct Rust toolchain is installed (reads /workspace/rust-toolchain.toml)
rustup show active-toolchain

if [ $# -eq 0 ]; then
    exec /bin/bash
else
    exec "$@"
fi

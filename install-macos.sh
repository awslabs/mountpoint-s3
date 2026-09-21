#!/usr/bin/env bash
#
# Install Mountpoint for Amazon S3 on macOS.
#
# Prebuilt packages are Linux only, so on macOS Mountpoint is built from source against FUSE-T. This
# script does what doc/MACOS.md describes by hand: install FUSE-T if it is missing, build the
# `mount-s3` binary against it, and put that binary on your PATH.
#
# Run it from a clone of this repository:
#
#     ./install-macos.sh
#
set -euo pipefail

# The FUSE-T release Mountpoint is tested against. Newer releases are likely to work; this is the one
# the behaviour documented in doc/MACOS.md was observed with.
FUSE_T_VERSION=1.2.7
FUSE_T_PKG_URL="https://github.com/macos-fuse-t/fuse-t/releases/download/$FUSE_T_VERSION/fuse-t-macos-installer-$FUSE_T_VERSION.pkg"
# FUSE-T is distributed as a package signed and notarized by its author. We check the signature
# rather than a checksum so that the check keeps working across releases.
FUSE_T_TEAM_ID=6DY7Z4SVDZ

BASE_PATH=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PREFIX=/usr/local/bin
ASSUME_YES=false
INSTALL_FUSE_T=true
FUSE_T_ONLY=false

usage() {
    cat <<EOF
Usage: ./install-macos.sh [options]

Builds mount-s3 against FUSE-T and installs it.

Options:
  --prefix DIR      Directory to install the mount-s3 binary into (default: $PREFIX).
                    sudo is used if the directory is not writable by you.
  --skip-fuse-t     Fail instead of installing FUSE-T when it cannot be found.
  --fuse-t-only     Stop once FUSE-T is installed, printing the PKG_CONFIG_PATH to build with
                    on standard output and nothing else. Useful in CI.
  -y, --yes         Do not ask before downloading and installing FUSE-T.
  -h, --help        Show this message.
EOF
}

while [ $# -gt 0 ]; do
    case "$1" in
        --prefix) PREFIX="${2:?--prefix needs a directory}"; shift 2 ;;
        --skip-fuse-t) INSTALL_FUSE_T=false; shift ;;
        --fuse-t-only) FUSE_T_ONLY=true; shift ;;
        -y|--yes) ASSUME_YES=true; shift ;;
        -h|--help) usage; exit 0 ;;
        *) echo >&2 "Unknown argument: $1"; usage >&2; exit 1 ;;
    esac
done

# Progress goes to stderr so that --fuse-t-only leaves nothing but the path on stdout.
info() { echo >&2 "==> $*"; }
die() { echo >&2 "error: $*"; exit 1; }

# --- 1. Is this a machine we can build on at all?

[ "$(uname -s)" = "Darwin" ] || die "this script is for macOS; on Linux see doc/INSTALL.md"

# Building needs a compiler and Rust; installing FUSE-T on its own does not.
if $FUSE_T_ONLY; then
    TOOLS=(pkg-config curl)
else
    TOOLS=(cargo cmake pkg-config clang git curl)
fi

MISSING=()
for tool in "${TOOLS[@]}"; do
    command -v "$tool" >/dev/null || MISSING+=("$tool")
done
if [ ${#MISSING[@]} -gt 0 ]; then
    echo >&2 "error: missing build tools: ${MISSING[*]}"
    echo >&2
    echo >&2 "Install the Xcode command line tools, which provide clang and git:"
    echo >&2 "    xcode-select --install"
    echo >&2 "Install cmake and pkg-config, for example with Homebrew:"
    echo >&2 "    brew install cmake pkg-config"
    echo >&2 "Install the Rust compiler with rustup:"
    echo >&2 "    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y"
    exit 1
fi

# The CRT is vendored as git submodules, and the build fails confusingly without them.
if ! $FUSE_T_ONLY && git -C "$BASE_PATH" submodule status | grep -q '^-'; then
    die "some git submodules are not checked out; run: git submodule update --init --recursive"
fi

# --- 2. Find FUSE-T, and install it if it is missing.

# Everywhere FUSE-T's own installer can leave its pkg-config files, plus whatever is already set.
fuse_t_search_path() {
    local dirs=()
    [ -n "${PKG_CONFIG_PATH:-}" ] && dirs+=("$PKG_CONFIG_PATH")
    dirs+=("$HOME/.fuse-t/usr/local/lib/pkgconfig")   # installed for this user only
    dirs+=("/usr/local/lib/pkgconfig")                # installed for all users
    command -v brew >/dev/null && dirs+=("$(brew --prefix)/lib/pkgconfig")
    local IFS=:
    echo "${dirs[*]}"
}

# True when pkg-config can describe fuse-t *and* the library it points at is really there. A
# user-only install ships pkg-config files that still name the system prefix, so this is not
# redundant: it is what tells us they need repairing.
fuse_t_usable() {
    PKG_CONFIG_PATH="$1" pkg-config --exists fuse-t 2>/dev/null || return 1
    local libdir
    libdir=$(PKG_CONFIG_PATH="$1" pkg-config --variable=libdir fuse-t)
    [ -e "$libdir/libfuse-t.dylib" ]
}

# Point the pkg-config files installed under $HOME at the prefix they were actually installed into.
repair_user_pkgconfig() {
    local prefix="$HOME/.fuse-t/usr/local"
    local pc
    for pc in "$prefix/lib/pkgconfig/fuse-t.pc" "$prefix/lib/pkgconfig/fuse3.pc"; do
        [ -f "$pc" ] || continue
        sed -i '' "s|^prefix=.*|prefix=$prefix|" "$pc"
    done
}

install_fuse_t() {
    local tmp pkg signature
    tmp=$(mktemp -d)
    # shellcheck disable=SC2064  # $tmp is expanded now on purpose
    trap "rm -rf '$tmp'" RETURN
    pkg="$tmp/fuse-t.pkg"

    info "Downloading FUSE-T $FUSE_T_VERSION"
    curl -fsSL -o "$pkg" "$FUSE_T_PKG_URL" || die "could not download $FUSE_T_PKG_URL"

    info "Verifying the package signature"
    signature=$(pkgutil --check-signature "$pkg" 2>&1) || die "the package is not signed: $signature"
    grep -q "trusted by the Apple notary service" <<<"$signature" \
        || die "the package is not notarized by Apple; refusing to install it"
    grep -q "($FUSE_T_TEAM_ID)" <<<"$signature" \
        || die "the package is not signed by FUSE-T's developer ($FUSE_T_TEAM_ID); refusing to install it"

    # Installing for this user needs no administrator rights and loads no kernel extension: FUSE-T
    # runs entirely as your own user, and its library looks under $HOME before the system prefix.
    info "Installing FUSE-T for this user, under $HOME/.fuse-t"
    installer -pkg "$pkg" -target CurrentUserHomeDirectory >/dev/null
    repair_user_pkgconfig
}

PKG_CONFIG_PATH_FOR_BUILD=$(fuse_t_search_path)
if ! fuse_t_usable "$PKG_CONFIG_PATH_FOR_BUILD"; then
    repair_user_pkgconfig
fi
if ! fuse_t_usable "$PKG_CONFIG_PATH_FOR_BUILD"; then
    $INSTALL_FUSE_T || die "FUSE-T was not found and --skip-fuse-t was given"
    if ! $ASSUME_YES; then
        echo "FUSE-T was not found. This script will download it from"
        echo "    $FUSE_T_PKG_URL"
        echo "check that it is signed and notarized by its developer, and install it for your user"
        echo "only. No administrator rights and no kernel extension are needed."
        read -r -p "Continue? [y/N] " reply
        case "$reply" in [yY]*) ;; *) die "cancelled; install FUSE-T yourself and re-run" ;; esac
    fi
    install_fuse_t
    PKG_CONFIG_PATH_FOR_BUILD=$(fuse_t_search_path)
    fuse_t_usable "$PKG_CONFIG_PATH_FOR_BUILD" \
        || die "FUSE-T still cannot be found by pkg-config after installing it"
fi
info "Using FUSE-T $(PKG_CONFIG_PATH="$PKG_CONFIG_PATH_FOR_BUILD" pkg-config --modversion fuse-t)"

if $FUSE_T_ONLY; then
    echo "$PKG_CONFIG_PATH_FOR_BUILD"
    exit 0
fi

# --- 3. Build mount-s3 against it.

# This repository pins a Rust version, but a cargo installed outside rustup ignores that pin and can
# shadow the rustup one on PATH. Go through rustup when it can honour the pin.
CARGO=(cargo)
CHANNEL=$(sed -n 's/^channel *= *"\(.*\)"/\1/p' "$BASE_PATH/rust-toolchain.toml")
if [ -n "$CHANNEL" ] && command -v rustup >/dev/null && rustup toolchain list | grep -q "^$CHANNEL"; then
    CARGO=(rustup run "$CHANNEL" cargo)
fi

# The workspace already asks the vendored fuser crate for its libfuse feature, which is what links
# against FUSE-T, so the only thing the build needs from us is where to find it.
info "Building mount-s3 with ${CARGO[*]} (this takes a few minutes the first time)"
PKG_CONFIG_PATH="$PKG_CONFIG_PATH_FOR_BUILD" \
    "${CARGO[@]}" build --release -p mountpoint-s3 --manifest-path "$BASE_PATH/Cargo.toml"

BINARY="$BASE_PATH/target/release/mount-s3"
[ -x "$BINARY" ] || die "the build did not produce $BINARY"

# --- 4. Install it, and prove the installed copy runs.

mkdir -p "$PREFIX" 2>/dev/null || true
if [ -w "$PREFIX" ]; then
    install -m 755 "$BINARY" "$PREFIX/mount-s3"
else
    info "$PREFIX is not writable by you, so sudo is needed to install into it"
    sudo install -m 755 "$BINARY" "$PREFIX/mount-s3"
fi

VERSION=$("$PREFIX/mount-s3" --version)
info "Installed $VERSION at $PREFIX/mount-s3"

case ":$PATH:" in
    *":$PREFIX:"*) ;;
    *)
        echo
        echo "$PREFIX is not on your PATH. Add it, for example:"
        echo "    echo 'export PATH=\"\$PATH:$PREFIX\"' >> \"\$HOME/.zshrc\""
        ;;
esac

cat <<EOF

Mount a bucket with it:
    mkdir -p ~/s3
    mount-s3 my-bucket ~/s3 --region us-east-1

Add --allow-overwrite to replace existing objects and --allow-delete to remove them.
Unmount with:
    umount ~/s3

macOS behaves differently from Linux in a few places that are worth knowing about before you rely on
the mount; they are listed in doc/MACOS.md.
EOF

#!/usr/bin/env bash

getopt --test > /dev/null
ENHANCED_GETOPT=$?

if [[ $ENHANCED_GETOPT -ne 4 ]]; then
    echo "no enhanced getopt installed" >&2
    exit 1
fi

LONGOPTS="fuse-version:,with-fio,with-libunwind,with-llvm,dry-run"
getopt --quiet-output --long=$LONGOPTS --name "$0" -- "$@"
if [[ $? -ne 0 ]]; then
    echo "couldn't read arguments" >&2
    exit 2
fi

dry_run=false
install_llvm=false
install_fio=false
install_libunwind=false
unset -v fuse_version

while true; do
    case "$1" in
        --dry-run)
            dry_run=true
            shift
            ;;
        --fuse-version)
            fuse_version="$2"
            shift 2
            ;;
        --with-fio)
            install_fio=true
            shift
            ;;
        --with-libunwind)
            install_libunwind=true
            shift
            ;;
        --with-llvm)
            install_llvm=true
            shift
            ;;
        --)
            shift
            break
            ;;
        -*|--*)
            echo "unknown option $1" >&2
            exit 3
            ;;
        ?*)
            echo "no positional argument allowed (\"$1\")" >&2
            exit 3
            ;;
        *)
            shift
            break
            ;;
    esac
done

if [ -z "$fuse_version" ]; then
        echo "missing --fuse-version" >&2
        exit 4
fi

if [[ ! -f "/etc/os-release" ]]; then
    echo "/etc/os-release does not exist" >&2
    exit 5
fi


os_release_id=$(cat /etc/os-release | grep "^ID=" | cut -d '=' -f2 | tr -d '"')

package_list="jq"

case "$os_release_id" in
    amzn)
        package_list="${package_list} clang-devel"
        package_list="${package_list} pkgconfig"
        package_list="${package_list} cmake3"
        ;;
    ubuntu)
        package_list="${package_list} libclang-dev"
        package_list="${package_list} pkg-config"
        package_list="${package_list} cmake=3*"
        ;;
    *)
        echo "no distro specific config for $OS_RELEASE_ID" >&2
        exit 6
        ;;
esac

case $fuse_version in
    2)
        fuse_package_name="fuse"
        ;;
    3)
        fuse_package_name="fuse3"
        ;;
    *)
        echo "unexpected fuse version $fuse_version" >&2
        exit 7
esac

case "$os_release_id" in
    amzn)
        package_list="${package_list} ${fuse_package_name} ${fuse_package_name}-devel"
        ;;
    ubuntu)
        package_list="${package_list} ${fuse_package_name} lib${fuse_package_name}-dev"
        ;;
    *)
        echo "no distro specific config for $OS_RELEASE_ID" &>2
        exit 6
        ;;
esac

if [[ $install_llvm == true ]]; then
    case "$os_release_id" in
        amzn)
            package_list="${package_list} llvm-devel"
            ;;
        ubuntu)
            package_list="${package_list} llvm-dev"
            ;;
        *)
            echo "no distro specific config for $OS_RELEASE_ID" &>2
            exit 6
            ;;
    esac
fi

if [[ $install_fio == true ]]; then
    package_list="${package_list} fio"
fi

if [[ $install_libunwind == true ]]; then
    case "$os_release_id" in
        amzn)
            package_list="${package_list} libunwind-devel"
            ;;
        ubuntu)
            package_list="${package_list} libunwind-dev"
            ;;
        *)
            echo "no distro specific config for $OS_RELEASE_ID" &>2
            exit 6
            ;;
    esac
fi

echo "Package list to install: \"${package_list}\""

if [[ $dry_run == false ]]; then
    case $os_release_id in
        amzn)
            sudo yum install -y $package_list
            ;;
        ubuntu)
            sudo apt-get -q update
            sudo apt-get install -y $package_list
            ;;
        *)
            echo "no distro specific config for $OS_RELEASE_ID" &>2
            exit 6
            ;;
    esac
else
    echo "dry-run, no changes made"
fi

exit 0

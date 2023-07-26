#!/usr/bin/env python3

"""
Build script for compiling a new Mountpoint release.

This script builds RPM and DEB packages and an archive. It places the outputs in a new `out`
directory in the root of the Mountpoint repository.
"""

import argparse
from dataclasses import dataclass
import json
import os
import shutil
import subprocess
import sys
import tempfile
from typing import *


def log(msg: str):
    print(f"*** {msg}")
    sys.stdout.flush()


def run(cmd, **kwargs):
    print(f"+++ {cmd}")
    sys.stdout.flush()
    return subprocess.check_output(cmd, **kwargs)


@dataclass
class BuildMetadata:
    output_dir: str
    cargoroot: str
    version: str
    version_string: str
    buildroot: str
    arch: str

    def artifact_name(self, extension: str):
        return f"mount-s3-{self.version_string}-{self.arch}.{extension}"


OPT_PATH = "opt/aws/mountpoint-s3"


def check_dependencies(args: argparse.Namespace):
    """Check that all the required dependencies are available so we don't fail mid-build."""

    log(f"Checking dependencies")

    deps = ["cargo", "cargo-about", "tar", "whereis"]
    if not args.no_rpm:
        deps.extend(["rpm", "rpmbuild"])
    if not args.no_deb:
        deps.extend(["fakeroot", "dpkg-deb"])

    for dep in deps:
        if shutil.which(dep) is None:
            raise Exception(f"`{dep}` must be installed")

    output = run(["whereis", "libfuse"])
    if b"libfuse.so" not in output:
        raise Exception(f"libfuse not found (whereis output: {output})")

    output = run(["whereis", "libfuse3"])
    if b"libfuse3.so" in output:
        raise Exception(f"libfuse3 should not be installed (whereis output: {output})")


def get_build_metadata(args: argparse.Namespace) -> BuildMetadata:
    """Parse the Cargo metadata to find the version of the crate and its actual location."""

    log(f"Getting Cargo metadata from root dir {args.root_dir}")

    # Parse cargo metadata to find cargo root directory and mount-s3 version
    output = run(["cargo", "metadata", "--no-deps", "--format-version", "1"], cwd=args.root_dir)
    output = json.loads(output)
    root_dir = output["workspace_root"]
    version = None
    for package in output["packages"]:
        if package["name"] == "mountpoint-s3":
            version = package["version"]
            break
    if version is None:
        raise Exception(f"couldn't find mountpoint-s3 in Cargo metadata in {root_dir}")
    if args.expected_version is not None:
        if args.expected_version != version:
            raise Exception(f"version mismatch: expected {args.expected_version} but found {version} in Cargo metadata")
    version_string = version
    if args.unofficial:
        version_string += "+unofficial"

    # Use a temp directory for all our build's intermediate state
    buildroot = tempfile.mkdtemp()

    # Discover the architecture of this host
    arch = run(["uname", "-p"]).decode("ascii").strip()

    # Fully resolve output dir
    output_dir = os.path.join(root_dir, "out")
    os.makedirs(output_dir, exist_ok=True)

    metadata = BuildMetadata(
        output_dir=output_dir,
        cargoroot=root_dir,
        version=version,
        version_string=version_string,
        buildroot=buildroot,
        arch=arch,
    )
    return metadata


def build_mountpoint_binary(metadata: BuildMetadata, args: argparse.Namespace) -> str:
    """Compile the Mountpoint binary and make sure it has works/has the right version number.
    Return the path to the binary."""

    env = {
        "PATH": os.environ["PATH"],
        # Keep enough debug info to give line numbers. We can always `strip` in the future if we want to.
        "RUSTFLAGS": "-C debuginfo=line-tables-only",
    }
    target_dir = os.path.join(metadata.buildroot, "cargo-target")
    env["CARGO_TARGET_DIR"] = target_dir
    if not args.unofficial:
        # Remove the commit from the User-agent version number
        env["MOUNTPOINT_S3_AWS_RELEASE"] = "true"

    # Build the binary
    cmd = ["cargo", "build", "--bin", "mount-s3", "--release"]
    log(f"Building binary in target dir {target_dir} with environment {env}")
    run(cmd, cwd=metadata.cargoroot, env=env)
    binary_path = os.path.join(target_dir, "release/mount-s3")
    if not os.path.exists(binary_path):
        raise Exception(f"binary wasn't found at path {binary_path}")

    # Validate the binary runs and is the right version
    log(f"Validating binary at {binary_path}")
    output = run([binary_path, "-V"])
    output = output.decode("ascii").strip()
    if args.unofficial:
        # Might not have a known Git hash available, so just check for the 'unofficial' part
        if not output.startswith(f"mount-s3 {metadata.version}-unofficial"):
            raise Exception(f"unexpected compiled version {output}")
    else:
        if output != f"mount-s3 {metadata.version}":
            raise Exception(f"unexpected compiled version {output}")

    log(f"Built binary for {output} at {binary_path}")

    return binary_path


def build_attribution(metadata: BuildMetadata) -> str:
    """Build the attribution document for third-party open-source code."""

    template_path = os.path.join(metadata.cargoroot, "release/attribution.hbs")
    config_path = os.path.join(metadata.cargoroot, "release/attribution.toml")
    attribution_path = os.path.join(metadata.buildroot, "THIRD_PARTY_LICENSES")

    log(f"Building attribution document to {attribution_path}")

    cmd = ["cargo", "about", "generate", "--config", config_path, "--output-file", attribution_path, template_path]
    run(cmd, cwd=metadata.cargoroot)

    return attribution_path


def build_package_dir(metadata: BuildMetadata, binary_path: str, attribution_path: str) -> str:
    """Assemble the contents of the directory that will eventually become /opt/aws/mountpoint-s3.
    Return the path to the directory."""

    package_dir = os.path.join(metadata.buildroot, "package")
    bin_dir = os.path.join(package_dir, "bin")
    log(f"Building package directory at {package_dir}")

    os.mkdir(package_dir)
    os.mkdir(bin_dir)

    shutil.copy2(binary_path, bin_dir)

    for path in ["LICENSE", "NOTICE"]:
        shutil.copy2(os.path.join(metadata.cargoroot, path), package_dir)
    shutil.copy2(attribution_path, package_dir)

    with open(os.path.join(package_dir, "VERSION"), "w") as f:
        f.write(metadata.version_string)

    return package_dir


def build_rpm(metadata: BuildMetadata, package_dir: str) -> str:
    """Build an RPM package from the contents of the package directory. Return the path to the
    final RPM package."""

    rpm_topdir = os.path.join(metadata.buildroot, "rpm-topdir")
    log(f"Building RPM in topdir {rpm_topdir}")

    # Assemble the contents of the RPM, rooted at /
    rpm_package_dir = os.path.join(metadata.buildroot, "rpm-package")
    rpm_opt_dir = os.path.join(rpm_package_dir, OPT_PATH)
    shutil.copytree(package_dir, rpm_opt_dir)

    # RPM expects the "sources" to be provided in a .tar.gz file, so assemble one out of the package
    # directory we've already built (just for RPM to un-extract it again...)
    os.makedirs(os.path.join(rpm_topdir, "SOURCES"))
    source_tar_path = os.path.join(rpm_topdir, "SOURCES/mount-s3.tar.gz")
    run(["tar", "czvf", source_tar_path, "-C", rpm_package_dir, "opt"])

    # Build the RPM
    spec_file = os.path.join(metadata.cargoroot, "release/mount-s3.spec")
    cmd = [
        "rpmbuild",
        "-bb",
        "--define",
        f"MOUNTPOINT_VERSION {metadata.version_string}",
        "--define",
        f"_topdir {rpm_topdir}",
        spec_file,
    ]
    run(cmd)

    arch_dir = os.path.join(rpm_topdir, f"RPMS/{metadata.arch}")
    # Annoying to find the RPM by name but there should only be one
    rpms = os.listdir(arch_dir)
    assert len(rpms) == 1
    rpm_path = os.path.join(arch_dir, rpms[0])
    final_rpm_path = os.path.join(metadata.output_dir, metadata.artifact_name("rpm"))
    shutil.copy2(rpm_path, final_rpm_path)

    log(f"Built RPM: {final_rpm_path}")

    return final_rpm_path


def build_deb(metadata: BuildMetadata, package_dir: str) -> str:
    """Build a DEB package from the contents of the package directory. Return the path to the final
    DEB package."""

    deb_buildroot = os.path.join(metadata.buildroot, "deb-buildroot")
    log(f"Building DEB in buildroot {deb_buildroot}")

    # Assemble the contents of the DEB, rooted at /
    deb_package_dir = os.path.join(deb_buildroot, "pkg")
    deb_opt_dir = os.path.join(deb_package_dir, OPT_PATH)
    shutil.copytree(package_dir, deb_opt_dir)
    deb_DEBIAN_dir = os.path.join(deb_package_dir, "DEBIAN")
    os.makedirs(deb_DEBIAN_dir)

    # Construct the package control file (the package metadata). We need to fill in the version
    # number ourselves, unlike RPM.
    control_file_template = os.path.join(metadata.cargoroot, "release/mount-s3.debian-control")
    with open(control_file_template) as f:
        control_file = f.read()
    control_file = control_file.replace("__VERSION__", metadata.version_string)
    # Debian's architecture strings don't match `uname`
    if metadata.arch == "x86_64":
        deb_arch = "amd64"
    elif metadata.arch == "aarch64":
        deb_arch = "arm64"
    else:
        raise Exception(f"unknown architecture {metadata.args} for DEB package")
    control_file = control_file.replace("__ARCH__", deb_arch)
    control_file_path = os.path.join(deb_DEBIAN_dir, "control")
    with open(control_file_path, "w") as f:
        f.write(control_file)

    # For DEB we need to create the bin symlinks ourselves
    deb_bin_dir = os.path.join(deb_package_dir, "usr/bin")
    os.makedirs(deb_bin_dir)
    os.symlink(f"/{OPT_PATH}/bin/mount-s3", os.path.join(deb_bin_dir, "mount-s3"))

    # Build the DEB
    deb_path = os.path.join(deb_buildroot, "mount-s3.deb")
    run(["fakeroot", "dpkg-deb", "--build", "-Zxz", deb_package_dir, deb_path])

    final_deb_path = os.path.join(metadata.output_dir, metadata.artifact_name("deb"))
    shutil.copy2(os.path.join(deb_buildroot, "mount-s3.deb"), final_deb_path)

    log(f"Built DEB: {final_deb_path}")

    return final_deb_path


def build_package_archive(metadata: BuildMetadata, package_dir: str) -> str:
    """Build a .tar.gz archive from the contents of the package directory. Return the path to the
    final .tar.gz archive."""

    archive_path = os.path.join(metadata.output_dir, metadata.artifact_name("tar.gz"))
    run(["tar", "czvf", archive_path, "-C", package_dir, "."])
    return archive_path


def build(args: argparse.Namespace) -> str:
    """Top-level build driver."""

    check_dependencies(args)
    metadata = get_build_metadata(args)

    binary_path = build_mountpoint_binary(metadata, args)
    attribution_path = build_attribution(metadata)

    package_dir = build_package_dir(metadata, binary_path, attribution_path)

    artifacts = []
    if not args.no_rpm:
        artifacts.append(build_rpm(metadata, package_dir))
    if not args.no_deb:
        artifacts.append(build_deb(metadata, package_dir))
    artifacts.append(build_package_archive(metadata, package_dir))

    for path in artifacts:
        os.chmod(path, 0o755)

    return artifacts


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--root-dir", help="override the path to the Cargo workspace")
    p.add_argument("--expected-version", help="expected version number for the Mountpoint binary")
    p.add_argument("--no-rpm", action="store_true", help="do not build an RPM")
    p.add_argument("--no-deb", action="store_true", help="do not build a DEB")
    p.add_argument("--unofficial", action="store_true", help="tag the release as unofficial (for CI use)")

    args = p.parse_args()

    p = build(args)
    print(p)

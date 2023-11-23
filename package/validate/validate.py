#!/usr/bin/env python3

"""
Script for validating a Mountpoint release package.

This script validates the RPM and DEB packages and the gzip archive built for a Mountpoint release.
"""

import argparse
import os
import subprocess

def validate(args: argparse.Namespace) -> str:
    """Top-level driver."""

    package=f"{args.artifact}-{args.os}"
    if package == "deb-ubuntu":
        image = "ubuntu/ubuntu:20.04"
    elif package == "rpm-al2" or package == "gzip-al2":
        image = "amazonlinux/amazonlinux:2"
    else:
        raise Exception(f"unsupported OS {args.os} for {args.artifact}. Supported combinations are: deb-ubuntu, rpm-al2, gzip-al2")

    print("Validating Mountpoint Release Package")
    print(f"\tVersion: {args.version}")
    print(f"\tArch: {args.arch}")
    print(f"\tOS: {args.os}")
    print(f"\tArtifact: {args.artifact}")
    print(f"\tBucket: {args.bucket}")
    print("\n")

    full_image = f"public.ecr.aws/{image}"
    validate_script = f"validate-{package}.sh"
    scripts_dir = os.path.dirname(os.path.realpath(__file__))

    subprocess.run(["docker", "pull", full_image])
    subprocess.run(["docker", 
                    "run",
                    "--rm", 
                    "--cap-add=SYS_ADMIN", 
                    "--device=/dev/fuse", 
                    f"-v={scripts_dir}:/scripts", 
                    f"--env=ARCH={args.arch}", 
                    f"--env=VERSION={args.version}", 
                    f"--env=BUCKET={args.bucket}",
                    full_image, 
                    "/bin/bash", 
                    f"/scripts/{validate_script}"])

if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--version", help="the version number for the Mountpoint release", required=True)
    p.add_argument("--arch", help="the architecture to validate", required=True, choices=["x86_64", "arm64"])
    p.add_argument("--artifact", help="the artifact to validate", required=True, choices=["deb", "rpm", "gzip"])
    p.add_argument("--os", help="the OS to validate on", required=True, choices=["ubuntu", "al2"])
    p.add_argument("--bucket", help="the public bucket to mount", required=True)

    args = p.parse_args()

    validate(args)

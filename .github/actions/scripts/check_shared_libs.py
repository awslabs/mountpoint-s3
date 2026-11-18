#!/usr/bin/env python3

"""Check the shared-library requirements of a packaged mount-s3 binary against a baseline.
This check fails when the binary needs a new shared library, or needs a symbol version newer than the baseline.
"""

import argparse
import json
import os
import re
import subprocess
import sys
from collections import defaultdict


def readelf(flag, binary):
    # LC_ALL=C keeps readelf's labels in English. readelf can report a damaged file on stderr yet
    # exit 0, so any stderr output fails the check as well.
    try:
        result = subprocess.run(
            ["readelf", flag, binary], capture_output=True, text=True, env=dict(os.environ, LC_ALL="C"), check=False
        )
    except (OSError, UnicodeDecodeError) as error:
        sys.exit(f"FAIL: cannot run readelf {flag} {binary}: {error}")
    if result.returncode != 0 or result.stderr:
        first_error = result.stderr.strip().partition("\n")[0]
        sys.exit(f"FAIL: readelf {flag} {binary} failed: {first_error}")
    return result.stdout


def read_needed(binary):
    """Return the binary's NEEDED shared libraries."""
    return re.findall(r"\(NEEDED\)\s+Shared library: \[(.*)\]", readelf("-d", binary))


def read_version_needs(binary):
    """Return {library: [version nodes such as GLIBC_2.17]} from the .gnu.version_r section."""
    needs = defaultdict(list)
    library = None
    in_version_needs = False
    for line in readelf("-V", binary).splitlines():
        if "section '" in line:
            in_version_needs = "'.gnu.version_r'" in line
        elif in_version_needs and (match := re.search(r"\bFile:\s*(\S+)", line)):
            library = match.group(1)
        elif in_version_needs and (match := re.search(r"\bName:\s*(\S+)", line)):
            needs[library].append(match.group(1))
    return needs


def parse_version(text):
    return tuple(int(part) for part in text.split("."))


def check(needed, version_needs, libraries):
    """Return the ways the binary's requirements exceed the baseline's libraries."""
    if not needed or not any(version_needs.values()):
        return ["readelf shows no NEEDED libraries or no symbol-version needs, so the binary cannot be checked"]
    failures = [f"{library} is NEEDED but not in the baseline" for library in needed if library not in libraries]
    for library, nodes in version_needs.items():
        if library in needed and library not in libraries:
            continue
        for node in nodes:
            family, _, text = node.partition("_")
            version = parse_version(text)
            allowed = libraries.get(library, {}).get(family)
            if version > parse_version(allowed):
                failures.append(f"{library} needs {node}, newer than the baseline's {family}_{allowed}")
    return failures


def highest_versions(needed, version_needs):
    """Return the baseline that allows exactly what the binary needs: {library: {family: version}}."""
    libraries = {library: {} for library in needed}
    for library, nodes in version_needs.items():
        for node in nodes:
            family, _, text = node.partition("_")
            version = parse_version(text)
            current = libraries[library].get(family)
            if current is None or version > parse_version(current):
                libraries[library][family] = text
    return libraries


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--binary", required=True, help="path to the mount-s3 binary")
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--baseline", help="per-architecture JSON baseline to check the binary against")
    mode.add_argument("--emit-baseline", action="store_true", help="print a JSON baseline for the binary instead")
    args = parser.parse_args()

    needed = read_needed(args.binary)
    version_needs = read_version_needs(args.binary)
    if args.emit_baseline:
        libraries = highest_versions(needed, version_needs)
    else:
        with open(args.baseline) as handle:
            libraries = json.load(handle)["libraries"]

    # An emitted baseline is checked too, so one is never printed for a binary the check rejects.
    failures = check(needed, version_needs, libraries)
    for failure in failures:
        print(f"FAIL: {failure}", file=sys.stderr)
    if failures:
        return 1
    if args.emit_baseline:
        print(json.dumps({"libraries": libraries}, indent=2, sort_keys=True))
    else:
        print(f"OK: {args.binary} is within {args.baseline}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

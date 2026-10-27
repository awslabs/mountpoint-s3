"""
This RPM spec generator creates a distribution-specific .spec file.
It extracts versions from Cargo.toml/rust-toolchain.toml and scans git submodules and the aws-lc-sys crate for bundled
library declarations.

The script takes a target distribution, loads the corresponding template,
and outputs a complete RPM spec file ready for rpmbuild.
"""

import argparse
import json
import re
import subprocess
import tomllib
from datetime import datetime
from pathlib import Path

from jinja2 import Environment, FileSystemLoader

script_dir = Path(__file__).parent
project_root = script_dir.parent.parent
templates_dir = script_dir / "templates"


def get_version() -> str:
    cargo_path = project_root / "mountpoint-s3" / "Cargo.toml"
    with open(cargo_path, "rb") as f:
        data = tomllib.load(f)
        return data["package"]["version"]


def get_rust_version() -> str:
    rust_path = project_root / "rust-toolchain.toml"
    with open(rust_path, "rb") as f:
        data = tomllib.load(f)
        return data["toolchain"]["channel"]


def get_submodule_versions() -> dict[str, str]:
    result = subprocess.run(  # noqa: PLW1510
        'git submodule foreach -q \'echo $name `git describe --tags`\'', capture_output=True, text=True, shell=True
    )
    versions = {}
    for line in result.stdout.strip().split('\n'):
        match line.split(' ', 1):
            case [name, version]:
                versions[name] = version.removeprefix('v')
    return versions


def get_aws_lc_version() -> str:
    """The version of aws-lc built by the `aws-lc-sys` crate, which the CRT is built against."""
    result = subprocess.run(
        ["cargo", "metadata", "--format-version", "1", "--locked", "--manifest-path", project_root / "Cargo.toml"],
        stdout=subprocess.PIPE,
        text=True,
        check=True,
    )
    package = next(p for p in json.loads(result.stdout)["packages"] if p["name"] == "aws-lc-sys")
    base_h = Path(package["manifest_path"]).parent / "aws-lc" / "include" / "openssl" / "base.h"
    match = re.search(r'^#define AWSLC_VERSION_NUMBER_STRING "(.+)"$', base_h.read_text(), re.MULTILINE)
    if match is None:
        raise ValueError(f"AWSLC_VERSION_NUMBER_STRING not found in {base_h}")
    return match.group(1)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate RPM spec files for different distributions")
    parser.add_argument("build_target", help="Target distribution (e.g., amzn2023)")
    parser.add_argument("--template", help="Custom template file (default: {build_target}.spec.template)")
    parser.add_argument("--output", "-o", help="Output file path (default: {build_target}.spec)")
    parser.add_argument(
        "--use-github-source",
        action="store_true",
        help="Use GitHub release tarball URL for Source0 instead of local tarball",
    )

    args = parser.parse_args()
    build_target = args.build_target

    template_file = args.template or f'{build_target}.spec.template'

    template_path = templates_dir / template_file

    if not template_path.exists():
        raise FileNotFoundError(f"Template file {template_path} not found")

    version = get_version()
    rust_version = get_rust_version()
    bundled_versions = dict(sorted({**get_submodule_versions(), "aws-lc": get_aws_lc_version()}.items()))
    current_date = datetime.now().strftime("%a %b %d %Y")

    env = Environment(loader=FileSystemLoader(templates_dir), trim_blocks=True, lstrip_blocks=True)

    template = env.get_template(template_file)

    spec_content = template.render(
        version=version,
        rust_version=rust_version,
        current_date=current_date,
        bundled_versions=bundled_versions,
        use_github_source=args.use_github_source,
    )

    output_file = args.output or f"{build_target}.spec"
    with open(output_file, "w") as f:
        f.write(spec_content)

    print(f"Generated {output_file}")


if __name__ == "__main__":
    main()

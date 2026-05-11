# Building Mountpoint RPM spec files

This directory contains the infrastructure to generate RPM spec files for different Linux distributions. It creates distribution-specific `.spec` files by extracting version information from the project and rendering templates.

## Contents

- `generate_spec.py` - Python script that generates distribution-specific RPM spec files
- `templates/` - template files for different distributions
  - `amzn2023.spec.template` - Amazon Linux 2023 RPM spec template
- `pyproject.toml` - Python project configuration with dependencies

## How it works

The spec generator automatically:

1. **Extracts versions** from project files:
   - Package version from `mountpoint-s3/Cargo.toml`
   - Rust toolchain version from `rust-toolchain.toml`
   - Git submodule versions for bundled library declarations

2. **Renders templates** with the extracted version data

3. **Outputs** complete `.spec` files ready for `rpmbuild`

## Building spec files

Generate a spec file for a target distribution:

    uv run python generate_spec.py amzn2023 --output ~/rpmbuild/SPECS/amzn2023.spec

You can use custom templates and output files:

    uv run python generate_spec.py amzn2023 --template custom.spec.template --output my-package.spec

"""Shared configuration utilities for benchmarks."""


def get_s3_keys(s3_keys_config, app_workers: int, object_size_in_gib: int) -> list:
    """Get S3 keys from config or generate defaults."""
    if s3_keys_config:
        keys = [key.strip() for key in s3_keys_config.split(',') if key.strip()]
        return keys
    return default_object_keys(app_workers, object_size_in_gib)


def default_object_keys(app_workers, object_size_in_gib) -> list:
    """Generate default object keys for benchmarks."""
    keys = []
    for i in range(app_workers):
        keys.append(f"j{i}_{object_size_in_gib}GiB.bin")
    return keys

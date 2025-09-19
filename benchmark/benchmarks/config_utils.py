"""Shared configuration utilities for benchmarks."""


def parse_comma_separated_string_to_array(comma_separated_string: str) -> list:
    """Parse a comma-separated string into a list of strings."""
    if not comma_separated_string:
        return []
    keys = [key.strip() for key in comma_separated_string.split(',')]
    # Filter out any empty keys
    keys = [key for key in keys if key]
    return keys


def default_object_keys(app_workers, object_size_in_gib) -> list:
    """Generate default object keys for benchmarks."""
    keys = []
    for i in range(app_workers):
        keys.append(f"j{i}_{object_size_in_gib}GiB.bin")
    return keys

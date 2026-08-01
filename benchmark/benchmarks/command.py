import os
from dataclasses import dataclass, field


@dataclass
class CommandResult:
    """Result of command execution."""

    returncode: int
    stdout: str | None = None
    stderr: str | None = None


@dataclass
class Command:
    """Represents a command to be executed with its environment."""

    args: list[str]
    env: dict[str, str] = field(default_factory=dict)

    def __post_init__(self):
        """Merge command environment with current environment."""
        full_env = os.environ.copy()
        full_env.update(self.env)
        self.env = full_env

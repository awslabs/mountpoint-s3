from dataclasses import dataclass, field
from typing import List, Dict, Optional
import os


@dataclass
class CommandResult:
    """Result of command execution."""

    returncode: int
    stdout: Optional[str] = None
    stderr: Optional[str] = None


@dataclass
class Command:
    """Represents a command to be executed with its environment."""

    args: List[str]
    env: Dict[str, str] = field(default_factory=dict)

    def __post_init__(self):
        """Merge command environment with current environment."""
        full_env = os.environ.copy()
        full_env.update(self.env)
        self.env = full_env

# Code review guidelines

This document describes what reviewers look for in pull requests to Mountpoint for Amazon S3.
It is written both for reviewers and for contributors who want to anticipate review feedback.

## Severity

When leaving feedback, make clear how important it is:

* **Blocking**: incorrect behavior, data loss or corruption, undocumented changes to file system semantics,
  soundness issues in `unsafe` code, security issues, missing changelog or version updates, missing tests for a bug fix.
* **Non-blocking**: readability, naming, simplifications, and suggestions that the author may reasonably decline.
  Prefix these with "nit:" or "suggestion:".

## Formatting, lints, and comments

CI enforces formatting (`rustfmt`), lints (`clippy` with warnings denied), doc-tests, and dependency checks (`cargo deny`).
Contributors can run most of these locally with `make pre-pr-check`.

* Reviews do not comment on anything CI already enforces. If a style rule is worth enforcing, propose a lint or
  configuration change in a separate pull request rather than repeating it in reviews.
* Code comments explain *why*, not *what*: intent, invariants, non-obvious constraints, and the reason for a
  workaround (with a link to the GitHub issue where relevant). Comments that restate the code are removed,
  and comments are updated when the code they describe changes.
* Public items and important internal types have rustdoc (`///`) describing behavior and contract rather than
  implementation, with `# Errors`, `# Panics`, or `# Safety` sections where they apply, and intra-doc links
  (``[`Type`]``) to related items. Modules with non-trivial design have a `//!` overview.
* `TODO` comments say what is missing and link a GitHub issue if the work is not done in the same pull request.

## Pull request hygiene

* The title and description explain what changed and why, and every section of the
  [pull request template](../.github/pull_request_template.md) is answered.
  They become the squash commit message, so they must stay accurate as the change evolves.
* The change is focused. Unrelated refactors belong in a separate pull request.
* Significant work has a linked issue where the approach was discussed.
* Commits are signed off for the [DCO](https://developercertificate.org/).

## Changelog and versioning

See [CONTRIBUTING.md](CONTRIBUTING.md#changelog-updates) for the full rules. In review, check that:

* New features, bug fixes, and behavior changes have an entry in the `CHANGELOG.md` of each affected crate
  (`mountpoint-s3`, `mountpoint-s3-fs`, `mountpoint-s3-client`, `mountpoint-s3-crt`, `mountpoint-s3-crt-sys`;
  not `mountpoint-s3-fuser`, whose `CHANGELOG.md` tracks the upstream `fuser` crate).
* The version is bumped relative to the latest *published* release, not just the previous commit:
  * `mountpoint-s3` (1.x): new features or very minor breaking changes bump the minor version; fixes bump the patch version.
  * Other crates (0.x): breaking changes bump the middle number; additions and fixes bump the last number.
* Dependent crates and the root `Cargo.toml` declare the new version, and `Cargo.lock` is updated.
* Changes to public items of the library crates are considered for semver impact, including changes to trait bounds,
  error enum variants, and re-exports.

## File system semantics

Mountpoint's behavior is described in [SEMANTICS.md](SEMANTICS.md). Its tenets guide most review decisions:

1. Do not support file operations that cannot be implemented efficiently against S3's object APIs.
2. Present a common view of object data through file and object APIs; do not emulate POSIX features with no S3 analog.
3. When these conflict with POSIX, fail early and explicitly rather than silently accepting an operation that will never be persisted.

Check that:

* Any user-visible change in behavior is intended, called out in the description, and reflected in `SEMANTICS.md`.
* Unsupported operations fail with an appropriate errno, as early as possible (for example at `open` rather than at `close`),
  instead of appearing to succeed.
* Behavior is correct across bucket types (general purpose and directory buckets) and with caching enabled and disabled.
* Edge cases are handled: object keys that are not valid file names, keys that conflict with directories,
  concurrent modification of objects outside Mountpoint, and objects that change between lookup and read.

## Errors and logging

* File system errors are built with the `err!` macro (`mountpoint-s3-fs/src/fs/error.rs`) so they carry an errno.
  The errno should be the one an application would expect from a local file system for the same situation.
* The original error is preserved with `source:` so that logs keep the full chain.
* Log levels are proportionate. Expected conditions (for example `ENOENT` on lookup) should not log at `WARN` or `ERROR`,
  and hot paths should not log per request above `DEBUG`.
  Note that `err!` logs at `WARN` unless a level is passed explicitly, so new `err!` calls for expected errors need one.
* Credentials, signed headers, and other secrets are never logged at any level.

## Concurrency and async

* In `mountpoint-s3-fs`, synchronization primitives come from `crate::sync`, not `std::sync`,
  so that [Shuttle](https://github.com/awslabs/shuttle) tests can explore interleavings.
* No blocking calls (file I/O, blocking locks, `block_on`) inside async tasks, and no synchronous locks held across an `.await`.
* Lock ordering is consistent, and state shared between FUSE worker threads is protected.
* Races between concurrent FUSE requests on the same inode or file handle are considered (for example `read` racing `release`,
  or `lookup` racing `unlink`).
* Background tasks are cancelled or cleaned up when their owner is dropped.

## Performance and memory

Mountpoint is optimized for high-throughput sequential reads and writes of large objects.

* The read and write paths avoid unnecessary copies, allocations, and S3 requests.
* Buffers for object data go through the memory pool and respect the configured memory limits; new unbounded queues or caches are a red flag.
* Changes to prefetching, caching, or the S3 client explain the expected performance impact.
  Reviewers may ask for benchmark results (see [BENCHMARKING.md](BENCHMARKING.md)).

## `unsafe` code and FFI

* Every `unsafe` block has a `// SAFETY:` comment (enforced by clippy). Review its content: it must explain
  why each invariant actually holds, not just restate that the call is unsafe.
* `mountpoint-s3-crt` exposes safe, idiomatic wrappers over `mountpoint-s3-crt-sys`. Raw CRT types and pointers should not leak into higher crates.
* Lifetimes of data shared with CRT callbacks are checked carefully: who owns it, when it is freed, and which thread callbacks run on.

## Configuration, CLI, and metrics

* New CLI flags have clear help text, are documented in [CONFIGURATION.md](CONFIGURATION.md), and are covered by tests in `mountpoint-s3/tests/cli.rs`.
* Existing flags and defaults are not changed or removed without a deprecation path and a changelog entry.
* New metrics follow the existing dot-separated naming, are listed in [METRICS.md](METRICS.md),
  and use the `experimental.` prefix unless we are committing to keep them stable.

## Tests

* Bug fixes include a test that fails without the fix.
* New behavior is tested at the lowest practical level: unit tests with the mock client first,
  then FUSE tests (`fuse_tests` feature) and S3 tests (`s3_tests` feature) where real kernel or S3 behavior matters.
* Changes to file system semantics consider the property-based reference tests in `mountpoint-s3-fs/tests/reftests`.
* Changes to concurrent code consider adding or updating Shuttle tests.
* Tests are deterministic and do not rely on timing (sleeps) to pass.

## Dependencies

* New dependencies are justified, well maintained, and compatible with the licenses allowed by `deny.toml`.
* Changes to `mountpoint-s3-fuser` follow the [fork maintenance process](../mountpoint-s3-fuser/README.md#fork-maintenance).

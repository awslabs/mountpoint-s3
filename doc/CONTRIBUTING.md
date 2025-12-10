# Contributing Guidelines

Thank you for your interest in contributing to Mountpoint for Amazon S3. Whether it's a bug report, new feature, correction, or additional documentation, we greatly value feedback and contributions from our community.

Please read through this document before submitting any issues or pull requests to ensure we have all the necessary
information to effectively respond to your bug report or contribution.

## Reporting Bugs/Feature Requests

Please use the GitHub issue tracker to [report bugs](https://github.com/awslabs/mountpoint-s3/issues/new?assignees=&labels=bug&template=bug-report.yml) or [suggest features](https://github.com/awslabs/mountpoint-s3/issues/new?assignees=&labels=enhancement&template=feature-request.yml).

When filing an issue, please check existing open, or recently closed, issues to make sure somebody else hasn't already
reported the issue. Please try to include as much information as you can. Details like these are incredibly useful:

* A reproducible test case or series of steps
* The version of our code being used
* Any modifications you've made relevant to the bug
* Anything unusual about your environment or deployment

Logs are also valuable for bug reports. Please read the [logging documentation](LOGGING.md) for details on how to capture verbose logs.

## Contributing via Pull Requests

Contributions via pull requests are much appreciated. Before sending us a pull request, please ensure that:

1. You open an issue to discuss any significant work before starting implementation -- we would hate for your time to be wasted.
2. You check existing open, and recently merged, pull requests to make sure someone else hasn't addressed the problem already.
3. You are working against the latest source on the *main* branch.

To send us a pull request, please:

1. Fork the repository.
2. Modify the source. Please focus on the specific change you are contributing; we value multiple small pull requests that are easier to review.
3. Ensure local tests pass by running: `make pre-pr-checks`
4. Commit to your fork using clear commit messages.
     * We require all contributors to agree to the terms of the [Developer Certificate of Origin (DCO)](https://developercertificate.org/),and to indicate this agreement by signing their commits using [Git's `Signed-off-by` support](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---signoff).
     * To add this trailer to your commits, use the `-s, --sign-off` option to `git commit`.
5. Send us a pull request, answering the default questions in the pull request interface.
6. Pay attention to any automated CI failures reported in the pull request, and stay involved in the conversation.

GitHub provides additional document on [forking a repository](https://help.github.com/articles/fork-a-repo/) and
[creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

### Pull request title and description

The pull request title and description is there to describe the change - both what is changing and why.

It is important to address each section of the pull request template, and additionally to keep it maintained.
The title and description will be used at merge time to create the squash commit message on the base branch (usually `main`).
Keeping them both up-to-date as the code change evolves ensures that the commit message is useful for future readers.

### Changelog updates

New features, bug fixes, or changes in behavior often justify a note in the `CHANGELOG.md` file for the relevant crate.

The main Mountpoint changelog lives in the `mountpoint-s3` crate/directory, but we also maintain changelog entries for each of the crates that are published to crates.io.

Here is the full list of changelog files we maintain for reference.

- https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md
- https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-fs/CHANGELOG.md
- https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md
- https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md
- https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md

Note that we do not maintain a change log for `mountpoint-s3-fuser`.

### Version numbers

Mountpoint and the other `mountpoint-s3-*` crates in this repository follow [semantic versioning](https://semver.org/) rules.
`mountpoint-s3` is the only crate with a stable release version (1.x), while the internal crates are unstable (0.x).
All but the `mountpoint-s3` crate are published to crates.io.
For `mountpoint-s3` (i.e. Mountpoint itself), new features and very minor breaking changes result in a minor version update while bug fixes result in a patch version update.
For the crates, both we and Cargo treat the middle number (0.Y.z) as breaking changes and all new additions or bug fixes should update the latter number (0.y.Z).

When a pull request is submitted, we consider whether the changes it contains should trigger a version number increment
by comparing the latest published version with the one on `main`.
Ultimately, we want both the crate version and the changelog to reflect all changes since the last published release.

We should ensure that the dependent packages (for example, `mountpoint-s3-client` is a dependent of `mountpoint-s3-crt`) declare a dependency on the latest version number.
In other words, when updating `mountpoint-s3-crt` from `0.1.0` to `0.1.1`,
we should update `mountpoint-s3-client`'s dependency on that package to `0.1.1` also.

Mountpoint (`mountpoint-s3`) change example:

* A pull request introduces a new feature to Mountpoint such as a CLI flag and adds an entry to the changelog.
* The latest release, as reported on the changelog, is `1.13.0`.
* The minor version number must be incremented as a new feature is introduced when compared to the published (i.e. released) version,
  so the new version should be `1.14.0`.

`mountpoint-s3-client` change example:

* A pull request adds a new configurable option to the client and adds an entry to the changelog.
* The latest release, as reported on the changelog, is `0.14.0`.
* The patch version number should be incremented compared to the published version as this is new behavior for an unstable crate,
  so the new version should be `0.14.1`.
* The dependents of this package - both `mountpoint-s3` and `mountpoint-s3-fs` - should update their declared dependency
  from `0.14.0` to `0.14.1`.

For any versioning change, we should ensure that the workspace lock file is updated and committed.
This can be done by running a build, or something like `cargo check`.

## Finding contributions to work on

Looking at the existing issues is a great way to find something to contribute on. We use issue labels to identify [good first issues](https://github.com/awslabs/mountpoint-s3/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) as a great place to start.

## Code of Conduct
This project has adopted the [Amazon Open Source Code of Conduct](https://aws.github.io/code-of-conduct).
For more information see the [Code of Conduct FAQ](https://aws.github.io/code-of-conduct-faq) or contact
opensource-codeofconduct@amazon.com with any additional questions or comments.

## Security issue notifications
If you discover a potential security issue in this project we ask that you notify AWS Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public GitHub issue.

## Licensing

Mountpoint for Amazon S3 is licensed under the Apache-2.0 license. The pull request template will ask you to confirm the licensing of your contribution and to agree to the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).

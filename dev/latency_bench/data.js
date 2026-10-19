window.BENCHMARK_DATA = {
  "lastUpdate": 1792410484045,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Latency Benchmark (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0a1f63f7605028b41c2fc47e581197032a890ed",
          "message": "Bump actions-rust-lang/setup-rust-toolchain from 1.17.0 to 2.0.0 (#1958)\n\nBumps\n[actions-rust-lang/setup-rust-toolchain](https://github.com/actions-rust-lang/setup-rust-toolchain)\nfrom 1.17.0 to 2.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/releases\">actions-rust-lang/setup-rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/pull/103\">actions-rust-lang/setup-rust-toolchain#103</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v1.17.0...v2.0.0\">https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v1.17.0...v2.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/blob/main/CHANGELOG.md\">actions-rust-lang/setup-rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>The format is based on <a\nhref=\"https://keepachangelog.com/en/1.0.0/\">Keep a Changelog</a>,\nand this project adheres to <a\nhref=\"https://semver.org/spec/v2.0.0.html\">Semantic Versioning</a>.</p>\n<h2>[Unreleased]</h2>\n<h2>[2.0.0] - 2026-09-07</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>[1.17.0] - 2026-06-25</h2>\n<ul>\n<li>Add new parameter <code>cache-targets</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>cache-targets</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/84\">#84</a>).\nThis allows disabling caching of the workspace <code>target</code>\ndirectory, e.g. when using <code>sccache</code>, while keeping the rest\nof the cache enabled.</li>\n</ul>\n<h2>[1.16.1] - 2026-05-08</h2>\n<ul>\n<li>Renamed internally used variable to avoid clashes with globally\nexisting variables.\nThis fixes the interference of the TOOLCHAIN variable as reported in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/91\">#91</a>.</li>\n</ul>\n<h2>[1.16.0] - 2026-04-13</h2>\n<ul>\n<li>Add new parameter <code>cache-save-if</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>save-if</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/90\">#90</a>\nby <a\nhref=\"https://github.com/ChanTsune\"><code>@​ChanTsune</code></a>)</li>\n</ul>\n<h2>[1.15.4] - 2026-03-15</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.2 to 2.9.1 (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/87\">#87</a>\nby <a\nhref=\"https://github.com/hyperfinitism\"><code>@​hyperfinitism</code></a>)\nThis gets rid of the warnings about Node.js 20.</li>\n</ul>\n<h2>[1.15.3] - 2026-03-01</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.1 to 2.8.2</li>\n</ul>\n<h2>[1.15.2] - 2025-10-04</h2>\n<ul>\n<li>Fix: Run the version detection steps in the selected\n<code>rust-src-dir</code> directory.\nThis should enable the version selection even without a default\ntoolchain installed.\nFixes <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/74\">#74</a>.</li>\n</ul>\n<h2>[1.15.1] - 2025-09-23</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/ecabd13d1c56bd1345c230e542e9144811ad706f\"><code>ecabd13</code></a>\nPrepare changelog for 2.0.0 release</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/dc0039119c40a73363ef8aa36cecf5b44a260d7f\"><code>dc00391</code></a>\nAdd error matcher for Rust panics</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/70de7eb7ad0b09e07bfd410f1322fa8c0cabfe80\"><code>70de7eb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nfrom ChihweiLHBird/reuse-rustc-verbose-output</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c420b69d2b138295fd15e0657ee6df4082082b52\"><code>c420b69</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/105\">#105</a>\nfrom actions-rust-lang/use-build-warnings</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/d94d10afcf74900a3a5d9e06ca0f742e9939fa8b\"><code>d94d10a</code></a>\nUse CARGO_BUILD_WARNINGS for enforcing warning free compilations</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/34430aa949d489e52a8298cf44d37687816a388e\"><code>34430aa</code></a>\nReuse rustc verbose output instead of invoking rustc three times.</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/0267444136ce4919088f5eae0461f736f21356de\"><code>0267444</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/102\">#102</a>\nfrom actions-rust-lang/dependabot/github_actions/Swat...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/5fa2882d530879536093c3ccff2f02f8cf17d8fb\"><code>5fa2882</code></a>\nBump Swatinem/rust-cache from 2.9.1 to 2.9.2</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/8439c15d249cd2e2a5c80ad3da200c3d8c553ae4\"><code>8439c15</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/100\">#100</a>\nfrom actions-rust-lang/dependabot/github_actions/acti...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c8f944a9fe45dd3927fc57284f27f46460f067ba\"><code>c8f944a</code></a>\nBump actions/checkout from 7.0.0 to 7.0.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/166cdcfd11aee3cb47222f9ddb555ce30ddb9659...ecabd13d1c56bd1345c230e542e9144811ad706f\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions-rust-lang/setup-rust-toolchain&package-manager=github_actions&previous-version=1.17.0&new-version=2.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-15T12:30:01Z",
          "tree_id": "ef1d4a60d6734bf666c5aa01d893f8dd15687631",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0a1f63f7605028b41c2fc47e581197032a890ed"
        },
        "date": 1789477632674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 232.17439356,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.093,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.411,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.6470126,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 17.0388269,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.2987791,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c53575afa57d5dd786a7c64b126097d263eded6f",
          "message": "Add override to otel-collector version (#1963)\n\nAllow to override the latest version discovery when installing the\nOpenTelemetry collector for the metrics tests in GitHub Actions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-16T12:23:24Z",
          "tree_id": "9112357a296268de5b7f91041be7f73171eff061",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c53575afa57d5dd786a7c64b126097d263eded6f"
        },
        "date": 1789563259966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 216.74137929,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.103,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.205,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 36.565955100000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.6054099,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.440882100000003,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d889c9beb3b98cefe0d11bc2a1c5e5f2ef724101",
          "message": "Fix warnings setting in setup-rust-toolchain (#1962)\n\nHandling of warnings has changes in setup-rust-toolchain v2.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-16T13:29:44Z",
          "tree_id": "3b34f79e4c3e587633efa21bd6401e17bf8f40c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d889c9beb3b98cefe0d11bc2a1c5e5f2ef724101"
        },
        "date": 1789567539526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 226.7142039300002,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.74,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.2259304,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.4158018,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.7282486,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2ffcbde7cc5aa1ec6f5714cf326f1de2d3c8b0e",
          "message": "Upgrade Rust toolchain to 1.98 (#1961)\n\nUpgrade Rust toolchain to 1.98 and address new clippy warnings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-17T06:39:30Z",
          "tree_id": "9c7da4c527a9329c16add4edbe8cfe9a6345b39d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2ffcbde7cc5aa1ec6f5714cf326f1de2d3c8b0e"
        },
        "date": 1789629037351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 250.9521434000001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.708,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 35.0251346,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 19.1855431,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.7677785,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cayoub@openai.com",
            "name": "Chris Ayoub",
            "username": "cayoub-oai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd69056aed9dd6ae004e3adb98adf4ba60f5c682",
          "message": "Fix directory lookup after empty S3 list pages (#1954)\n\nS3 can return empty `ListObjectsV2` pages with a continuation token.\nDirectory lookup currently treats these as evidence that the directory\nis missing, causing false `ENOENT` errors or exposing a file that should\nbe shadowed by a directory.\n\nContinue listing while both objects and common prefixes are empty and a\ncontinuation token is present. Stop once the directory is found or the\nlisting is exhausted.\n\nAs part of testing, reproduced the failure with unpatched Mountpoint\nagainst real S3 and verified that the patched binary resolves the\ndirectory and reads a nested file matching its direct S3 download.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Fixes incorrect lookup results after empty,\ntruncated pages. Lookups may take longer because they now follow\npagination instead of returning an incorrect result early.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Chris Ayoub <cayoub@openai.com>",
          "timestamp": "2026-09-18T12:29:56Z",
          "tree_id": "71a1e7be1fe3c4e7b472594a0a948d8b4a889a06",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd69056aed9dd6ae004e3adb98adf4ba60f5c682"
        },
        "date": 1789736647936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 217.80310432000005,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.989,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.669,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 30.955258899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.115948,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 29.587759600000002,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5fb7671de0ea86b0fdd4ed7343cbd4094589138c",
          "message": "Bump taiki-e/install-action from 2.87.8 to 2.87.12 (#1965)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.8 to 2.87.12.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.12</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 48.0.2.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.259.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.13.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.165.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.1.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.144.</p>\n</li>\n</ul>\n<h2>2.87.11</h2>\n<ul>\n<li>\n<p>Update <code>biome@latest</code> to 2.5.13.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.12.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.4.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.19.0.</p>\n</li>\n</ul>\n<h2>2.87.10</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.30.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.11.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.164.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.3.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.2.0.</p>\n</li>\n</ul>\n<h2>2.87.9</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.82.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.2.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.18.0.</p>\n</li>\n<li>\n<p>Update <code>d2@latest</code> to 0.9.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.1.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3f74d7c16a4242f1c95561e98edc25d36adb4375\"><code>3f74d7c</code></a>\nRelease 2.87.12</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e7f36aa5946476a40e5a2af1a5153c247e70d548\"><code>e7f36aa</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b208ecf6341e27a32fd9a0f8e1821a008552f41c\"><code>b208ecf</code></a>\nUpdate zola manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/497268209395d5883d6a88462e1c9c6bf3fbbeff\"><code>4972682</code></a>\nUpdate <code>wasmtime@latest</code> to 48.0.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9f978f55d62c453c7eb420ab8cc3f13ba748aa42\"><code>9f978f5</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.259.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/01d96944a7a5eab62bfb45b5ba70d36285f8534c\"><code>01d9694</code></a>\nUpdate <code>uv@latest</code> to 0.12.13</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7af43af4f6fc1df7d126ab45be6a2e8770112f87\"><code>7af43af</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.165</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5ebe8aae964ff306a8f78d0e61277195869cc640\"><code>5ebe8aa</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/c054431878700879a4853ce12d3c492be3580620\"><code>c054431</code></a>\nUpdate <code>mise@latest</code> to 2026.9.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/2ad5cec3cabb51430ef1c2ac40ba63f32add42a9\"><code>2ad5cec</code></a>\nUpdate <code>cargo-nextest@latest</code> to 0.9.144</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.8...v2.87.12\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.8&new-version=2.87.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-21T09:26:50Z",
          "tree_id": "119a1d5a6b3382c6f7e2f3f0da544f224fc341fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5fb7671de0ea86b0fdd4ed7343cbd4094589138c"
        },
        "date": 1789984688397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 189.70447393000003,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.981,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.971,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 26.667424399999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.1279324,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.5408392,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c39da96972976ab28c9bd4eb3ae6e670ee4e6394",
          "message": "Bump astral-sh/setup-uv from 10.0.1 to 10.1.0 (#1966)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.0.1 to 10.1.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.1.0 🌈 New output <code>python-runtime-id</code>and respect\nNO_PROXY</h2>\n<h2>Changes</h2>\n<p>This release adds more bheind the scene security improvements and\nalso 2 small improvements.</p>\n<h3>NO_PROXY</h3>\n<p>This action now respects <code>no_proxy/NO_PROXY</code> environment\nvariables which were previously ignored.</p>\n<h3>New output <code>python-runtime-id</code></h3>\n<p>The new output <code>python-runtime-id</code> can be used to know\nwhich python version exactly was installed if you use\n<code>activate-environment</code>. See <a\nhref=\"https://redirect.github.com/pyca/cryptography/pull/15572#discussion_r3913508686\">pyca/cryptography#15572</a>\nfor details on why this can be useful.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>fix: respect no proxy directive <a\nhref=\"https://github.com/mj0nez\"><code>@​mj0nez</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1037\">#1037</a>)</li>\n<li>Use JSON + a typed wrapper instead of TS codegen <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1025\">#1025</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Expose a Python &quot;identity&quot; output <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1036\">#1036</a>)</li>\n<li>Verify downloads with astral-sh/versions checksums <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1033\">#1033</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.12 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1041\">#1041</a>)</li>\n<li>chore: update known checksums for 0.12.10/0.12.11 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1038\">#1038</a>)</li>\n<li>chore: update known checksums for 0.12.9 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1035\">#1035</a>)</li>\n<li>chore: update known checksums for 0.12.7/0.12.8 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1031\">#1031</a>)</li>\n<li>chore: update known checksums for 0.12.6 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1030\">#1030</a>)</li>\n<li>chore: update known checksums for 0.12.5 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1020\">#1020</a>)</li>\n<li>Use self-repo syntax for all in-repo actions/reusable workflows <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1024\">#1024</a>)</li>\n<li>Pin one-shot tools <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1022\">#1022</a>)</li>\n<li>ci: remove obsolete direct push attempts <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1019\">#1019</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1018\">#1018</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps-dev): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1043\">#1043</a>)</li>\n<li>Harden npm install defaults <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1026\">#1026</a>)</li>\n<li>Add dependency cooldowns <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1021\">#1021</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bec219d24cd3e171d82865faccec33120bb574f4\"><code>bec219d</code></a>\nchore(deps-dev): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1043\">#1043</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b90ec40d15bfa44c33c6700196eb6efcdddb4373\"><code>b90ec40</code></a>\nfix: respect no proxy directive (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1037\">#1037</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/421feb646df5262e7dd93bc54161edfa30372417\"><code>421feb6</code></a>\nchore: update known checksums for 0.12.12 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1041\">#1041</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f634bf473ad85bf3e23a613f52c5fa9f363874fc\"><code>f634bf4</code></a>\nExpose a Python &quot;identity&quot; output (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1036\">#1036</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a6772c8f0a09dc9e3582c70a994b0c55af921803\"><code>a6772c8</code></a>\nchore: update known checksums for 0.12.10/0.12.11 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1038\">#1038</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e105c8fb1d7b13074b851babdaef4185243c6a07\"><code>e105c8f</code></a>\nchore: update known checksums for 0.12.9 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1035\">#1035</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/cd13f9217092d43a771cf9ba7b09bdd3da8d7c4d\"><code>cd13f92</code></a>\nVerify downloads with astral-sh/versions checksums (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1033\">#1033</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3aef7b92c52cec135792ea1e95f4c77683d39e61\"><code>3aef7b9</code></a>\nchore: update known checksums for 0.12.7/0.12.8 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1031\">#1031</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d08d816a1ea176d61a318eff45abd3dffef415b1\"><code>d08d816</code></a>\nchore: update known checksums for 0.12.6 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1030\">#1030</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/19b4d1e990bec64818914c40230bde93a0de300b\"><code>19b4d1e</code></a>\nHarden npm install defaults (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1026\">#1026</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/20cfd1bf945f4377ade1205e4dbc17946fc9a30d...bec219d24cd3e171d82865faccec33120bb574f4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.0.1&new-version=10.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-21T10:00:24Z",
          "tree_id": "6efa144aad3422cb2afdcc12d26eec9b038cf599",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c39da96972976ab28c9bd4eb3ae6e670ee4e6394"
        },
        "date": 1789987265377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 216.52500842999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.048,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.363,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 33.3417322,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.8611814,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 25.092953100000003,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffa5658c676e4c646d06a2b013ead6b27160f2e2",
          "message": "Update CRT submodules to latest releases (#1967)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v0.10.4` -> `v1.0.0`\n* `aws-c-cal` `v0.9.14` -> `v1.0.0`\n* `aws-c-common` `v0.14.2` -> `v1.0.1`\n* `aws-c-compression` `v0.3.2` -> `v1.0.0`\n* `aws-c-http` `v0.11.0` -> `v1.0.0`\n* `aws-c-io` `v0.27.3` -> `v1.0.0`\n* `aws-c-s3` `v0.12.8` -> `v1.1.3`\n* `aws-c-sdkutils` `v0.2.7` -> `v1.0.0`\n* `aws-checksums` `v0.2.10` -> `v1.0.0`\n* `aws-lc` `v5.1.0` -> `v5.9.0`\n* `s2n-tls` `v1.7.5` -> `v1.7.10`\n\nAlso exclude aws-lc's new Keccak test vectors from the published\nmountpoint-s3-crt-sys archive, as they are not required to build the\nCRT. The compressed crate is 9.2MiB, within the 10MiB crates.io limit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 4b5d524bf..055e822f0:\n  > chore(release): add governance files (#303)\n  > Clean up docs (#301)\n  > chore(release): patch-update to VERSION - 0.10.5\n  > CI/CD improvements (#302)\n  > Use latest as aws-crt-builder version (#300)\n  > Add thread sanitizer CI job (#299)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 9edd8eac2..2441187f3:\n  > chore(release): add governance files (#257)\n  > Clean up docs (#255)\n  > CI/CD improvements (#256)\n  > Expand ecc validation test (#254)\n  > ECC Validation Test (#253)\n  > Use latest as aws-crt-builder version (#252)\n  > Swap fatal for soft error (#251)\n  > Update deprecated OpenBSD CI job (#250)\n  > Regression Labeler Fix (#249)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common a9d57d2d3..69cd45209:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Helpers for file descriptor opertaions.  (#1272)\n  > Debug API to override default thread options (#1273)\n  > Bullseye -> Bookworm (#1276)\n  > Fix wrong libdir on some platforms (#1271)\n  > Add some error code utility functions (#1270)\n  > External shutdown error (#1269)\n  > chore(release): add governance files (#1267)\n  > Suppress MSAN false positive (#1264)\n  > Clean up docs (#1263)\n  > Release 0.14.5 (patch)\n  > CI/CD improvements (#1250)\n  > Use latest as aws-crt-builder version (#1261)\n  > aws_file_get_last_modified_epoch (#1258)\n  > Fix windows nonascii env (#1260)\n  > Add HWASan suppression support (#1256)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression d8264e64f..891312c05:\n  > chore(release): add governance files (#81)\n  > Clean up docs (#79)\n  > chore(release): patch-update to VERSION - 0.3.3\n  > CI/CD improvements (#80)\n  > Use latest as aws-crt-builder version (#78)\n  > Regression Labeler Fix (#77)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 8aefd899f..2b563f8a7:\n  > chore(release): add governance files (#575)\n  > Clean up docs (#573)\n  > chore(release): patch-update to VERSION - 0.11.1\n  > CI/CD improvements (#574)\n  > HPACK String Length Validation (#572)\n  > Enforce MAX_HEADER_LIST_SIZE (#568)\n  > Fix use-after-free in stats gathering during connection shutdown(#570)\n  > Use latest as aws-crt-builder version (#569)\n  > Regression Labeler Fix (#564)\n  > Support s2n-tls on macOS (#560)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8bda5cf0f..1685abcd3:\n  > chore(release): add governance files (#828)\n  > Clean up docs (#821)\n  > chore(release): patch-update to VERSION - 0.27.7\n  > CI/CD improvements (#824)\n  > Fix read-window stall by gating window updates on the scarcest slot (#818)\n  > Automate test cert renewal (#820)\n  > Use latest as aws-crt-builder version (#817)\n  > Expose option to set TCP_NODELAY on sockets (#816)\n  > log the negotiated TLS version (#815)\n  > Handle optional s2n-tls in the install CMake config (#814)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 448ec5e49..805ca0f4c:\n  > chore(release): patch-update to VERSION - 1.1.3\n  > feat: add more metrics to S3 metrics object (#673)\n  > Checksum validation handling cleanup (#678)\n  > API to Get Default S3 Memory Limits (#681)\n  > chore(release): patch-update to VERSION - 1.1.2\n  > move the check and relax it for the file streaming case (#680)\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Add S3 Metrics (#674)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Add retry_config to aws_s3_client_config (#672)\n  > Retry on 502 504 errors (#671)\n  > Sub 10Gbps S3 Throughput Handling (#670)\n  > chore(release): add governance files (#668)\n  > chore(release): patch-update to VERSION - 0.13.7\n  > update doc on endpoint resolver update script (#667)\n  > fix(copy-object): forward request-payer to the source-size HEAD (#654)\n  > Clean up docs (#665)\n  > chore(release): patch-update to VERSION - 0.13.6\n  > CI/CD improvements (#666)\n  > Combine per-part CRCs for whole-object download checksum validation (#663)\n  > support opaque etags (#664)\n  > fix resume token build (#661)\n  > Use latest as aws-crt-builder version (#660)\n  > [feat.] async pause and on_error_resume_token (#649)\n  > Turn nagle off (#659)\n  > Restore enums values that were deleted on accident. (#658)\n  > fix ordering of read from stream (#655)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils cb14fea36..de0fbe807:\n  > chore(release): add governance files (#74)\n  > Clean up docs (#72)\n  > chore(release): patch-update to VERSION - 0.2.10\n  > CI/CD improvements (#73)\n  > Relax handling of unmodeled context params in bdd (#71)\n  > Use latest as aws-crt-builder version (#70)\n  > fix bdd header encoding (#69)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 1d5f2f1f3..ee7c435de:\n  > chore(release): add governance files (#119)\n  > Clean up docs (#116)\n  > chore(release): patch-update to VERSION - 0.2.11\n  > CI/CD improvements (#117)\n  > Use latest as aws-crt-builder version (#115)\n  > Update deprecated OpenBSD CI job (#114)\n  > Regression Labeler Fix (#113)\n  > Fix clang-cl compilation (#112)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 6283365b1..39b142ec3:\n  > Prepare v5.9.0 (#3523)\n  > Report unexpected EOF as `SSL_ERROR_SSL` for OpenSSL 3.x parity (#3484)\n  > Parallelise the serial Windows builds in Windows Alternative Compilers (#3516)\n  > Avoid duplicate formal-verification runs on PR branches (#3526)\n  > Fail the ABI check when abidiff cannot run (#3511)\n  > Bump the pip-ci group across 1 directory with 3 updates (#3399)\n  > Replace the error-queue trim helpers with a suppression scope (#3529)\n  > Run the macOS jobs on a single OS version (#3513)\n  > Stop building the test suite in the ABI diff image (#3512)\n  > Thin the compiler-tests config axis (#3515)\n  > Remove duplicate Python CRT integration work (#3525)\n  > ci: enable shared libraries for clang-tidy provider build (#3520)\n  > ci: fix OpenSSH integration (#3519)\n  > ci: fix librelp integration test (#3517)\n  > ci: fix mariadb integration (#3518)\n  > Add ERR_num_errors and ERR_pop_to_count (#3501)\n  > Cache the CMake-from-source image layers in CMake compatibility CI (#3510)\n  > Add OpenSSL-compatible EVP_CTRL_CCM_* aliases (#3490)\n  > Fix EVP signing-context control collision (#3458)\n  > Fix BN_CTX leak on allocation failure in `EC_GROUP_new_curve_GFp` (#3506)\n  > ci: handle expired Bullseye repository in legacy GCC jobs (#3508)\n  > Export OpenSSL-compatible ECPKParameters buffer APIs (#3493)\n  > Fix tpm2-tss integration build without SM4 (#3507)\n  > Add legacy SSL function codes for OpenSSL compatibility (#3491)\n  > Register -tls1_2 and -tls1_3 flags in bssl client (#3492)\n  > Gate ruby master rubygems ML-DSA tests on key loading, not generation (#3479)\n  > Use OpenSSL-compatible long names for ML-DSA OIDs (#3481)\n  > Document the AWS-LC provider (#3434)\n  > Implement SHA-256 through the AWS-LC provider (#3433)\n  > ci: record integration failure metadata (#3482)\n  > ci: fix failing librelp integration (#3480)\n  > Add ML-KEM support to HPKE (draft-ietf-hpke-pq-05) (#3277)\n  > Limit push-triggered CI to main and fips-* branches (#3478)\n  > Prepare 5.8.0 (#3476)\n  > Implement the AWS-LC provider interface (#3432)\n  > Route req -extensions to the certificate and add -reqexts for the CSR (#3469)\n  > Add FIPS_module_name to report the cryptographic module name (#3473)\n  > Print FIPS module name in cli tooling (#3471)\n  > Prepare 5.7.0 (#3465)\n  > Fix EVP_DecryptUpdate output handling (#3460)\n  > Define AT_HWCAP* when <sys/auxv.h> hides them (#3429)\n  > Add SECURITY.md with AWS-LC threat model (#3421)\n  > Prepare 5.6.0 (#3448)\n  > Re-import mlkem-native and mldsa-native; drop custom meta headers (#3367)\n  > Define BN_FLG_CONSTTIME as zero for source compatibility (#3446)\n  > ci: consolidate android-omnibus deployments on external PRs (#3447)\n  > ci: stop deployment noise for maintainers (#3445)\n  > Install OpenSSL-compat libcrypto.pc and libssl.pc with the shim (#3370)\n  > Pin librelp to a release, wrap `SSL_get_shutdown` for failing integration test (#3431)\n  > Fix ML-DSA externalMu JSON tags (#3439)\n  > Upgrade JDK to JDK21 for ACCP tests (#3440)\n  > Decouple symbol versioning from distribution packaging mode (#3426)\n  > Bump the cargo-ci-lambda group in /tests/ci/lambda with 4 updates (#3390)\n  > Add latest compiler coverage to CI (#3406)\n  > Move network-dependent s_client tests into integration_test (#3407)\n  > Update pull request template (#3436)\n  > Add AWS-LC provider build and CI infrastructure (#3419)\n  > Add backport apply command (#3414)\n  > ci: re-enable gcc-14 + FIPS build in gcc-14-hardened job (#3428)\n  > ci: use preinstalled Rust in pyopenssl integration (#3430)\n  > Fix Windows OPENSSL_SMALL Debug builds with NASM 2.16.01 (#3420)\n  > ci: install Rust in the Linux docker images (#3393)\n  > Enable mtr retries in MariaDB CI integration (#3427)\n  > Add Backport Tool Analysis (#3389)\n  > Reject GCM IV lengths below 8 in EVP_CTRL_GCM_IV_GEN (#3424)\n  > ci: pin security review to the PR head commit (#3425)\n  > Add Keccak-256 (Ethereum-style, original 0x01 padding) (#3245)\n  > Add memcached integration test (#3410)\n  > Add CPython 3.15 integration test (#3422)\n  > Add brainpool EC_group symbols; make public API symbol registration self-service (#3423)\n  > Harden CLI input validation and file output (#3347)\n  > Document how to build applications against AWS-LC (#3386)\n  > Add brainpoolP224r1, brainpoolP256r1, brainpoolP320r1, brainpoolP384r1, brainpoolP512r1 EC group support (#3286)\n  > Avoid /usr/bin/env dependency in FIPS compiler wrapper (#3411)\n  > BoringSSL: Fix beeu_mod_inverse_vartime on aarch64 (#3381)\n  > Update MySQL CI integration to mysql-cluster-9.7.2 (#3409)\n  > Fix `grpc-master-x86_64` integration test  (#3346)\n  > ci: remove Graviton5 c9g fleet and job (#3400)\n  > Share Bedrock model settings between autofix and util/backport (#3395)\n  > Fix thread-local destructors with MSYS2 clang64 (#3405)\n  > Prepare 5.5.0 (#3401)\n  > Enable linker garbage collection for non-FIPS static builds (#3397)\n  > Update concurrency in `security-review` (#3403)\n  > Add MinGW shared-library Windows CI coverage (#3398)\n  > Bump urllib3 from 2.6.3 to 2.7.0 in /tests/ci (#3372)\n  > Update FIPS.md (#3382)\n  > Fix docker image dependencies and update octocrab initialization (#3388)\n  > Bump ring from 0.17.8 to 0.17.14 in /tests/ci/lambda (#3375)\n  > Add Neoverse-V3 (Graviton5) detection and dispatch (#3374)\n  > delocate: Drop redundant `-dI` flag (#3384)\n  > ci: pin openssh required job (#3387)\n  > Rename autofix reasoning role to AwsLcGitHubActionsBedrockRole (#3376)\n  > Link header documentation from README (#3378)\n  > Add tests for RSASSA-PSS with SHA-3 digest and MGF1 (#3377)\n  > chore: simplify the api docs workflow (#3186)\n  > Fix flaky s_client cipher tests by using better ciphers (#3373)\n  > ci: harden security-review.yml against script injection (#3365)\n  > Include <openssl/cipher.h> from <openssl/hmac.h> for OpenSSL compat (#3371)\n  > Restore ADX/AVX2 code paths under OPENSSL_SMALL via new MY_ASSEMBLER_IS_TOO_OLD_FOR_ADX_AVX2 flag (#3368)\n  > Bump to v5.4.0, add AES-KWP wrap/unwrap CASTs (#3366)\n  > Use built-in Camellia in krb5 integration patch; fix CTS doc label (#3349)\n  > Remove dead P-256 nistz asm under OPENSSL_SMALL and extend the size-check harness (#3350)\n  > ci:ctest timing summary for MacOS (#3288)\n  > Support for `EVP_AEAD_CTX_copy` (#3332)\n  > Add AArch64 NEON runtime fallback for ML-KEM and ML-DSA (#3353)\n  > Prepare 5.3.0 (#3354)\n  > Add ACVP support for multi-expansion HKDF (#3352)\n  > Bump golang.org/x/crypto from 0.47.0 to 0.52.0 in /util/vecgen (#3339)\n  > Auto-fix integration patches and upload to S3 (#3324)\n  > Bump log from 0.4.30 to 0.4.33 in /tests/ci/lambda in the cargo-ci-lambda group (#3329)\n  > Prepare v5.2.0 (#3348)\n  > Fix `SSL_OP_IGNORE_UNEXPECTED_EOF` being ignored over sockets (#3341)\n  > Gate s2n-bignum _alt variants under OPENSSL_SMALL (#3320)\n  > Add CTS mode, krb5 integration test (#3308)\n  > Bump github.com/google/go-cmp from 0.6.0 to 0.7.0 in /tests/ci/x509/limbo-report in the gomod-limbo-report group (#3328)\n  > Bump github.com/cloudflare/circl from 1.6.3 to 1.6.4 in /util/vecgen in the gomod-vecgen group (#3327)\n  > openssl/target.h: Allow building for the e2k architecture (#3314)\n  > ci: harden GitHub Actions workflows against script injection (#3323)\n  > Pin required libssh2 integration to a release; track main separately (#3343)\n  > Add ML-KEM decapsulate CASTs to break-kat tooling (#3342)\n  > Update security review workflow (#3333)\n  > Symbol versioning follow-ups: register peer cert APIs, fix dist_pkg_tests matrix (#3338)\n  > Add Symbol Versioning Support (#3096)\n  > Null-guard EVP_AEAD_CTX_cleanup for fork+shm safety (#3336)\n  > Fix libgit2, xtrabackup, grpc tests and add OSSL3 peer cert APIs (#3331)\n  > Documented and added feature stability tests for EVP_AEAD implementations that support concurrency through EVP_AEAD_CTX_seal/gather functions (#3325)\n  > OPENSSL_SMALL: imply MY_ASSEMBLER_IS_TOO_OLD_FOR_512AVX on x86_64 (#3319)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls f5f6c6c2c..bce022f41:\n  > feat(metrics-subscriber): expose compatibility profile allow-lists (#6086)\n  > fix: free client pub_key on all error paths in server shared secret (#6063)\n  > fix: free encoded point on write failure in s2n_ecc_evp_write_params_point (#5964)\n  > fix: zero-initialize s2n_tls13_keys in PSK binder functions (#6048)\n  > fix: enforce JA4 list limit when building fingerprint (#6047)\n  > fix: always free async offload op during connection teardown (#6080)\n  > feat(s2n-tls-metrics): Add hello_retry_request_count (#6078)\n  > fix(integration): replace BoringSSL fork git dependency with btls crate (#6067)\n  > fix: bounds-check cert pkey type before array indexing (#6054)\n  > feat(bindings): add signature_public_key_type to Connection (#6076)\n  > fix(metrics): normalize s2n signature (#6077)\n  > fix: restrict cert signature preferences in custom CNSA2 interop policies (#6073)\n  > feat: skip blinding delay on missing required client cert (#6072)\n  > feat(metrics): add negotiated metrics for compatibility (#6068)\n  > feat: add `s2n_conn_get_signature_public_key_type` API (#5963)\n  > chore(bindings): release bump v0.3.43 (#6070)\n  > perf(sidetrail): Avoid digest zeroing in proof (#6056)\n  > chore: upgrade CBMC to 6.11.0 (#6061)\n  > fix: set actual_protocol_version_established on deserialized connections (#6049)\n  > fix(bindings): avoid mutable aliasing in shared Config callbacks (#6053)\n  > docs: io callback examples (#6036)\n  > feat: add backwards compatible hybrid PQ policies (#6044)\n  > chore: bump metrics subscriber for release (#6050)\n  > fix(metrics): jitter export timing (#6046)\n  > fix(cbc): Disable padding after key init and check decrypt len (#6042)\n  > test: print assertion backtraces in FAIL_MSG_PRINT (#5785)\n  > build(deps): bump cross-platform-actions/action from 1.3.0 to 1.4.0 in /.github/workflows in the all-gha-updates group (#6035)\n  > fix(connection): Make set_config validator replacement transactional (#5847)\n  > feat: add s2n_connection_handshake_complete() public API (#5906)\n  > fix: Add fail-closed default cases to all switch statements (#6006)\n  > fix: Zero-initialize all local variable declarations (#6007)\n  > feat(metrics): flush on drop (#6032)\n  > fix: fail explicitly when server selects unavailable KEM group in key share recv (#6026)\n  > ci: Use GitHub mirror for musl and upgrade octokit action to Node 24 (#6031)\n  > chore: update http test with new status code (#6034)\n  > fix(bindings): default to efficient record size (#6020)\n  > test: add behavior tests for Connection::wipe (#6029)\n  > fix: handshake integrity over content types (#6017)\n  > fix: zero-init hash state and guard async offload wipe against in-flight ops (#6028)\n  > chore(bindings): release bump (#6027)\n  > chore: remove inline policy builder code (#6025)\n  > fix: prevent use-after-free in `Connection::set_config` when C setter rejects replacement (#6023)\n  > fix(psk): return usage error for uninitialized offered PSK (#6009)\n  > test: peer_cert_chain behavior with elided CA (#5914)\n  > fix(docs): Hide unstable-renegotiate poll_send cfg in rustdoc (#6022)\n  > fix: null `evp_cipher_ctx` after free in `s2n_session_key_alloc()` error path (#6024)\n  > fix(ci): update msrv check to use Cargo.toml (#6021)\n  > feat: add custom CNSA2 interop policies (#6011)\n  > docs(build): clarify OpenSSL FIPS support and shared responsibility (#5856)\n  > docs: document threading contract on s2n_async_pkey_op_apply and reje… (#5845)\n  > fix: emit trailing colons for IPv6 addresses ending in a zero run (#5842)\n  > fix: ensure record integrity over header version (#6014)\n  > build(deps): bump actions/stale from 10 to 11 in /.github/workflows in the all-gha-updates group (#6016)\n  > refactor: use header struct for decryption (#6004)\n  > docs: add resources about Coordinated Vulnerability Disclosure to SECURITY.md (#5927)\n  > build(deps): update crabgrind requirement from 0.2 to 0.3 in /tests/regression in the all-cargo-updates group across 1 directory (#5972)\n  > style(integv2): run latest ruff format & check (#6005)\n  > ci: update stale patch files for clang-format (#6000)\n  > build(deps): bump the all-gha-updates group across 1 directory with 4 updates (#5994)\n  > fix: use leaf public key NID for ML-DSA signature scheme matching (#5997)\n  > feat: Include the error code in s2n_error Display impl (#5988)\n  > fix: prefer clang for libs2n LTO to work under rust-lld (#5996)\n  > chore: s2n-tls rust bindings v0.3.41 release (#5998)\n  > fix(duvet): Correct CCS quote attribution to RFC 8446 section 5 (#5999)\n  > Merge commit from fork\n  > Merge commit from fork\n  > fix: guard against underflow in record wipe length (#5973)\n  > feat(docs): Render Cargo feature-gated code in docs (#5967)\n  > ci: upgrade cppcheck from 2.3 to 2.13 via apt (#5943)\n  > ci: add MSRV consumer check (#5986)\n  > feat: add per-message handshake timing instrumentation (#5903)\n  > chore: version bump (#5984)\n  > feat: add client issue metrics (#5979)\n  > refactor: export trait owns MetricRecord (#5981)\n  > docs: Windows MinGW support is available (#5970)\n  > chore: delete unused functions (#5978)\n  > test: enable rust bindings tests on Windows (#5969)\n  > ci: bump MSRV for extended workspace from 1.89 to 1.91 (#5980)\n  > refactor(metrics): make record update infallible (#5976)\n  > test: client_hello retrieval with HRR (#5975)\n  > feat(bindings): add init feature flag (#5831)\n  > build(deps): update openssl-src requirement from 300.5 to 400.0 in /bindings/rust/standard (#5971)\n  > feat: enable rust bindings build and tests on Windows (#5958)\n  > chore: metrics-subscriber release v0.0.4 (#5965)\n  > refactor: two more self talk tests to use in-memory io pair (#5950)\n  > refactor: fork based handshake tests to use in memory io pair (#5940)\n  > chore: bindings release 0.3.39 (#5962)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo breaking changes. There are a few behaviour changes inherited from\nthe CRT worth calling out:\n- `aws-c-s3` now retries `502 Bad Gateway` and `504 Gateway Timeout`\nresponses\n([aws-c-s3#671](https://github.com/awslabs/aws-c-s3/pull/671)).\n- `aws-c-s3` now disables Nagle's algorithm on S3 connections\n([aws-c-s3#659](https://github.com/awslabs/aws-c-s3/pull/659)).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-09-22T11:45:26Z",
          "tree_id": "3a665dae4d7743bffc23d3b2d0ab6d792515d2cf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffa5658c676e4c646d06a2b013ead6b27160f2e2"
        },
        "date": 1790079323921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 220.90827515999993,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.998,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.777,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 32.8505245,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.2807882,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 28.376973800000002,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d397663f84aaa2e0757fc3b73a6cccb97322866",
          "message": "Update changelogs in preparation of `mountpoint-s3-client` release (#1968)\n\nUpdate the CHANGELOGs in order to release the client crates:\n\n* `mountpoint-s3-crt-sys` - `v0.17.1`\n* `mountpoint-s3-crt` - `v0.16.1`\n* `mountpoint-s3-client` - `v0.22.1`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-09-24T11:40:43Z",
          "tree_id": "64d57fb42fb572817831eef7a2f970fb5e7c184f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d397663f84aaa2e0757fc3b73a6cccb97322866"
        },
        "date": 1790251932366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 261.6859187600001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.053,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.846,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 34.9554856,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.8562469,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.327986399999997,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b039b0f03708bf8cae23b02e353f3ecb9db9d823",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.4 to 6.3.0 (#1975)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.4 to 6.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.3.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.4...v6.3.0\">6.3.0</a>\n(2026-09-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\">57b8365</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.4...v6.3.0\">6.3.0</a>\n(2026-09-11)</h2>\n<h3>Features</h3>\n<ul>\n<li>add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\">57b8365</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e1253824e5c10ff9df46874f81ed3ec929e19cfd\"><code>e125382</code></a>\nchore(main): release 6.3.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1963\">#1963</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/438100a0eb37d9180319c727b1e108d9a112a27a\"><code>438100a</code></a>\nchore: add link to GH security docs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1962\">#1962</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e92ebccf3986be80a7535da17f1ed57aec450139\"><code>e92ebcc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/57b83659c2db2eb3b9c655186bef9a6a8f6620cb\"><code>57b8365</code></a>\nfeat: add translate-env-variables option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1961\">#1961</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cc49fa741eb53f7c83be6fce8f9b4df000cd3af7\"><code>cc49fa7</code></a>\nchore(docs): README main branch guidance (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1960\">#1960</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/866cb167f1d1a75ae9c75cdb39377cfd9c0f794e\"><code>866cb16</code></a>\nchore(deps-dev): bump smol-toml from 1.7.0 to 1.7.2 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1958\">#1958</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6782cb1b6df5d32e9354c1e6d6da4f956c0d61c4\"><code>6782cb1</code></a>\nchore(deps-dev): bump generate-license-file from 4.2.4 to 4.2.5 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1951\">#1951</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c20509ac5cba30e782e34cf33a0067e67c746cf0\"><code>c20509a</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7a41fc6cd2b4970e71974e29fb3f0979f4eb20cb\"><code>7a41fc6</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1121.0 to\n3.1127.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1954\">#1954</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/726b71346f7761addb59879a6c73e0c64ec8f959\"><code>726b713</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.11 to 2.5.12\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1957\">#1957</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/cbe3b392738ccf3f987d68400dafcf4b0624a56c...e1253824e5c10ff9df46874f81ed3ec929e19cfd\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=6.2.4&new-version=6.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T08:58:34Z",
          "tree_id": "97f6ec44300836f8f24f63c08709d2f7e0dff899",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b039b0f03708bf8cae23b02e353f3ecb9db9d823"
        },
        "date": 1790589040139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 201.51857532000002,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.048,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.983,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.104,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.2476401,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.240265599999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.4508193,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "aaf1d7fff474735e8b078ce47060b9793810e57c",
          "message": "Bump benchmark-action/github-action-benchmark from 1.22.1 to 1.22.2 (#1972)\n\nBumps\n[benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark)\nfrom 1.22.1 to 1.22.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases\">benchmark-action/github-action-benchmark's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.22.2</h2>\n<ul>\n<li><strong>perf</strong> shallow-clone the target branch only (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/pull/364\">benchmark-action/github-action-benchmark#364</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.22.1...v1.22.2\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.22.1...v1.22.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md\">benchmark-action/github-action-benchmark's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Unreleased</h2>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.2\">v1.22.2</a>\n- 15 Sep 2026</h1>\n<ul>\n<li><strong>perf</strong> shallow-clone the target branch only (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/364\">#364</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.1\">v1.22.1</a>\n- 6 May 2026</h1>\n<ul>\n<li><strong>fix</strong> scope tsconfig.build.json to src/ for\nreproducibility (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/352\">#352</a>)</li>\n<li><strong>chore</strong> bump minimatch from 3.1.2 to 3.1.5 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/347\">#347</a>)</li>\n<li><strong>chore</strong> bump uuid and <code>@​actions/core</code> (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/350\">#350</a>)</li>\n<li><strong>chore</strong> bump flatted from 3.2.4 to 3.4.2 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/346\">#346</a>)</li>\n<li><strong>chore</strong> bump js-yaml (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/344\">#344</a>)</li>\n<li><strong>chore</strong> bump picomatch from 2.3.0 to 2.3.2 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/342\">#342</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.22.0\">v1.22.0</a>\n- 31 Mar 2026</h1>\n<ul>\n<li><strong>chore</strong> bump node to 24 (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/339\">#339</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.21.0\">v1.21.0</a>\n- 02 Mar 2026</h1>\n<ul>\n<li><strong>fix</strong> include package name for duplicate bench names\n(<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/330\">#330</a>)</li>\n<li><strong>fix</strong> avoid duplicate package suffix in Go benchmarks\n(<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/337\">#337</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.7\">v1.20.7</a>\n- 06 Sep 2025</h1>\n<ul>\n<li><strong>fix</strong> improve parsing for custom benchmarks (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/323\">#323</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.5\">v1.20.5</a>\n- 02 Sep 2025</h1>\n<ul>\n<li><strong>feat</strong> allow to parse generic cargo bench/criterion\nunits (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/280\">#280</a>)</li>\n<li><strong>fix</strong> add summary even when failure threshold is\nsurpassed (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/285\">#285</a>)</li>\n<li><strong>fix</strong> time units are not normalized (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/318\">#318</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.4\">v1.20.4</a>\n- 23 Oct 2024</h1>\n<ul>\n<li><strong>feat</strong> add typings and validation workflow (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/257\">#257</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.3\">v1.20.3</a>\n- 19 May 2024</h1>\n<ul>\n<li><strong>fix</strong> Catch2 v.3.5.0 changed output format (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/247\">#247</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.2\">v1.20.2</a>\n- 19 May 2024</h1>\n<ul>\n<li><strong>fix</strong> Support sub-nanosecond precision on Cargo\nbenchmarks (<a\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/246\">#246</a>)</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h1><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.20.1\">v1.20.1</a>\n- 02 Apr 2024</h1>\n<ul>\n<li><strong>fix</strong> release script</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/4322e5726e6334590d251fc4f92bec0efafc45dc\"><code>4322e57</code></a>\nrelease v1.22.2</li>\n<li>See full diff in <a\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/52576c92bccf6ac60c8223ec7eb2565637cae9ba...4322e5726e6334590d251fc4f92bec0efafc45dc\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=benchmark-action/github-action-benchmark&package-manager=github_actions&previous-version=1.22.1&new-version=1.22.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:11:01Z",
          "tree_id": "b72889a243cfe253fc90d19b480220b7ac5d2ec7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aaf1d7fff474735e8b078ce47060b9793810e57c"
        },
        "date": 1790597679500,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 222.00575778000007,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.049,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.489,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 33.5941295,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.223271099999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 28.2278229,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e144a7bb84948045f0d7cde77060afaa7ed91b53",
          "message": "Bump astral-sh/setup-uv from 10.1.0 to 10.2.0 (#1971)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.1.0 to 10.2.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.2.0 🌈 Disable automatic cache saves for merge queues</h2>\n<h2>Changes</h2>\n<p>This release contains the known-checksum of the most recent uv\nreleases and also disabled the uploading(saving) of the cache when in a\nmerge queue since theses caches would almost never be used.</p>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Disable automatic cache saves for merge queues <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1056\">#1056</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.17 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1058\">#1058</a>)</li>\n<li>chore: update known checksums for 0.12.16 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1057\">#1057</a>)</li>\n<li>chore: update known checksums for 0.12.15 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1054\">#1054</a>)</li>\n<li>chore: update known checksums for 0.12.14 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1053\">#1053</a>)</li>\n<li>chore: update known checksums for 0.12.13 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1045\">#1045</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.1.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1044\">#1044</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1059\">#1059</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c18668ad3cf93ea998bef934396af7bb5c839dc7\"><code>c18668a</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1059\">#1059</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ffe14763056ca34ecd158146a9fc7e144c8a2753\"><code>ffe1476</code></a>\nchore: update known checksums for 0.12.17 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1058\">#1058</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f5548c55522a1db0af3c84f2af3d058bc9bc2de2\"><code>f5548c5</code></a>\nchore: update known checksums for 0.12.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1057\">#1057</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a761a4e9afd7b2f353ae020bd6d3a3af34c6c4d5\"><code>a761a4e</code></a>\nDisable automatic cache saves for merge queues (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1056\">#1056</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3377a30666f438759955882b3eba6a92b2b29b12\"><code>3377a30</code></a>\nchore: update known checksums for 0.12.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1054\">#1054</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/dfb5f386776afcea37f271f3b656318d9949b9f1\"><code>dfb5f38</code></a>\nchore: update known checksums for 0.12.14 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1053\">#1053</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/45c121f982720f3bdf236c2ac06f126ca211949c\"><code>45c121f</code></a>\nchore: update known checksums for 0.12.13 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1045\">#1045</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8073452fd4b566e886f04f731bcdbd8332b0b779\"><code>8073452</code></a>\ndocs: update version references to v10.1.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1044\">#1044</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/bec219d24cd3e171d82865faccec33120bb574f4...c18668ad3cf93ea998bef934396af7bb5c839dc7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.1.0&new-version=10.2.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:25:19Z",
          "tree_id": "c3a5d4c44681f09ea4a336c511a81ba86f7f5f60",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e144a7bb84948045f0d7cde77060afaa7ed91b53"
        },
        "date": 1790607768505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 199.88922871999995,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.014,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.666,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.8607783,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.1224282,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 29.047207800000002,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5019468624d590bf589cb39dfddf0ec1507f45d",
          "message": "Don't mount /mnt on GH actions (#1976)\n\nPrevious workaround for fstab integration tests was failing due to\nGithub changing the name of the device mounted to `/mnt`. Fix the tests\nby ensuring nothing is mounted at `/mnt`\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-02T16:35:09Z",
          "tree_id": "d07f7ee8eb25b5e0ec32c1bac17ae8aecb79144e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b5019468624d590bf589cb39dfddf0ec1507f45d"
        },
        "date": 1790960867745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 237.44233845999995,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.05,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.948,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.269,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 39.046639799999994,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.727309,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 28.3197976,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b851f704b3a0685b7180e7f064711f565ffb32e0",
          "message": "Fail benchmarks when a memory limit is breached (#1940)\n\nMemory-limited benchmark jobs already report peak RSS breaches in a\nsummary table but still pass. This makes a breach fail the job, after\nthe results have been saved and published.\n\nTesting:\n- `render-mem-summary.sh` over 5 input shapes locally (no results, all\nwithin limit, partial breach, full breach) - correct output and exit\ncode in each.\n- Gate wiring on a real Actions run, 4 cases: a breach fails the job;\n`false` and a skipped render step both pass; a breach still fails when\nan earlier step had already failed.\n- Not covered: a real breaching benchmark run, as `--memory-target` has\na 512 MiB floor.\n\nSupersedes #1935, which was auto-closed when its base branch was\ndeleted. Same change, rebased onto `main`.\n\n### Does this change impact existing behavior?\n\nYes, intentionally: memory-limited benchmark jobs now fail on a breach.\nResults are still saved and published first, and other variants are\nunaffected.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this only changes CI benchmark workflows.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-10-05T13:34:17Z",
          "tree_id": "45533325b67a4c4eda1eda8d5eeacedd1bd3eb9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b851f704b3a0685b7180e7f064711f565ffb32e0"
        },
        "date": 1791210590514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 218.50244043999993,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.047,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.053,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.438,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 34.1682208,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.2725914,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 29.1348369,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngpil.yoon@gmail.com",
            "name": "Aaron Y.",
            "username": "ziwon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b525122fdc28fb34b8695cdaccf15e3f483f14c5",
          "message": "fix(metrics): poll S3 client metrics periodically (#1957)\n\n**What changed and why?**\n\nS3 CRT client gauges (`s3.client.*`) were sampled only when\n`make_meta_request()` ran. The metrics publisher still flushed every\nfive seconds, but it only refreshed process metrics before `publish()`.\nFor meta requests that last longer than that interval, the CRT gauges\nwere therefore frozen after the first sample.\n\nThis change moves sampling onto the existing publisher cycle:\n\n1. `MetricsSinkHandle::register_poller` stores a `Send + Sync` callback\nin a publisher-lifecycle registry. Registration does **not** go through\nthe shutdown/`recv_timeout` channel, so it cannot reset or delay the\nfive-second wait.\n2. On each timeout and on shutdown, the publisher runs\n`poll_process_metrics()`, then the registered client pollers, then\n`publish()`.\n3. After the object client is built, `run` and the FS examples that\ninstall metrics register a clone of the client. `S3CrtClient` is `Clone`\nvia `Arc`, so the final drain can safely sample after the FUSE session\nends.\n4. The poller registry is shared only by the publisher thread and\n`MetricsSinkHandle`. Dropping the handle joins the final publication and\nthen releases the callbacks and captured client clones; the\nprocess-global metrics recorder does not retain them.\n5. `ObjectClient::poll_client_metrics` is a default no-op, overridden by\n`S3CrtClient`. Mock and other non-CRT clients keep working without\nCRT-specific behavior.\n6. The polling call immediately after `make_meta_request()` is removed.\nMetric names, gauge/histogram types, and changed-value emission behavior\nare unchanged.\n\nFixes #1410\n\n### Does this change impact existing behavior?\n\nYes, in the intended way: `s3.client.*` gauges now update on every\nfive-second publication cycle even when no new meta request is created.\nLong-running requests no longer leave those gauges stuck at the value\nfrom request start. Existing `ObjectClient` implementations inherit the\nnew no-op method and do not need to override it.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Unreleased notes were added for `mountpoint-s3`,\n`mountpoint-s3-fs`, and `mountpoint-s3-client`. Version numbers are left\nfor the next release cut.\n\n### Tests\n\nDeterministic unit tests require no AWS credentials, network access, or\nreal S3 service:\n\n- A registered poller runs on repeated publisher timeouts with no meta\nrequests, each poll occurs before the matching `publish()`, and shutdown\nperforms one final poll and publication.\n- Registering pollers during the wait does not reset or stop the cadence\nand does not trigger an immediate publication.\n- Dropping `MetricsSinkHandle` releases registered callbacks even while\nthe metrics sink remains alive.\n- `S3CrtClient::poll_client_metrics`, constructed with `NoSigning`,\nemits the existing `s3.client.*` gauges under a local recorder.\n- Mock `ObjectClient::poll_client_metrics` remains a no-op.\n\nAfter rebasing onto current upstream `main`, `make pre-pr-check`\nsucceeded: formatting, `cargo check --all-targets --all-features`,\nrepository-standard clippy with warnings denied, and 941 nextest tests\npassed with 1 skipped. This PR does **not** include an end-to-end\nAWS/`--log-metrics` mount run.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Aaron Y. <yngpil.yoon@gmail.com>",
          "timestamp": "2026-10-06T10:42:58Z",
          "tree_id": "ffb0700ad0d89c5b3a062df477d12b641f3029e9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b525122fdc28fb34b8695cdaccf15e3f483f14c5"
        },
        "date": 1791286624070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 204.73738180999996,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.049,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.957,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.346,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 28.7741581,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 9.673028,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 31.4533413,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "77bd88d56091f47b24b06f8fd0bb05a20ea6d598",
          "message": "Bound the CRT thread join at exit and skip cleanup on timeout (#1978)\n\n**Problem:** In #1850 we have added CRT cleanup at exit, but this may\ncause a process hang in some cases during shutdown if CRT threads are\nstill running.\n\n**Solution**: Add 1 second timeout to wait for CRT threads to join\ninstead of waiting indefinitely\n\n**Testing**: Added 2 unit tests that re-produced the hang. They are\ngreen after the fix.\n\n### Does this change impact existing behavior?\n\nProcesses that exit while a CRT client is still alive now exit after up\nto 1 second, without CRT cleanup, instead of hanging. Processes that\ndrop all their clients before exit are unaffected. No public API change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry under `Unreleased` in\n`mountpoint-s3-crt/CHANGELOG.md`. It needs a patch version bump of\n`mountpoint-s3-crt` when released.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T11:38:31Z",
          "tree_id": "689fb38fe0d308d3c5a9fbaf8e181397ba38871d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77bd88d56091f47b24b06f8fd0bb05a20ea6d598"
        },
        "date": 1791288435825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 226.89766078000005,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.03,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.085,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.4981355,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.6275995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 30.870875,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ababef079bd81106c9dce644f797f5ba3cd34cf9",
          "message": "Update changelog in preparation of `mountpoint-s3-crt` release (#1979)\n\nUpdate the CHANGELOG in order to release the `mountpoint-s3-crt` crate:\n\n* `mountpoint-s3-crt` - `v0.16.2`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T13:40:15Z",
          "tree_id": "6906dac3eecb937361d343b2836ea54618e541be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ababef079bd81106c9dce644f797f5ba3cd34cf9"
        },
        "date": 1791295893584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 234.47901543000006,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.05,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.049,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.159,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 32.9989437,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.1993377,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.1594749,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e373e4159606f66ca07edf214a4fead004153e4b",
          "message": "Update release workflow to create a git tag (#1969)\n\nUpdate the release workflow to be manually triggered with the intended\nrelease version number.\nThis now creates and pushes the git tag to the repository, as well as\ncreating a github release.\n\nExample run:\nhttps://github.com/muddyfish/mountpoint-s3/actions/runs/36004359806/job/107648757049\nExample release:\nhttps://github.com/muddyfish/mountpoint-s3/releases/tag/mountpoint-s3-1.24.0\n\n### Does this change impact existing behavior?\n\nChanges release.yml to be ran on a manual workflow rather than on a tag\npush.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-07T08:54:40Z",
          "tree_id": "2b0e2a928b10a1af574c80c9c8e222570a20f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e373e4159606f66ca07edf214a4fead004153e4b"
        },
        "date": 1791365141440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 217.34318898999987,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.519,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 30.7490168,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.6975866,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.3799147,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8",
          "message": "Send If-Match on incremental upload at offset 0 (#1970)\n\nFix inconsistency when during incremental upload we do not attach\n`If-Match` ETag header (when ETag is known) at offset 0.\n\n### Does this change impact existing behavior?\n\nYes. If there was concurrent modification file operation will fail with\nEIO. This now matches behaviour for `offset > 0`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-07T09:38:56Z",
          "tree_id": "2eb04ccdd5ac2df67b8acc94aaefd2a84bda81fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8"
        },
        "date": 1791368459882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 220.05579606999993,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.027,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.23,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 38.1501313,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.7883801,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 29.2438518,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49ba6c8e067aa1c584a1c7008590e5741235ddb0",
          "message": "Bump taiki-e/install-action from 2.87.17 to 2.87.21 (#1977)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.17 to 2.87.21.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.21</h2>\n<ul>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.129.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.3.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.19.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.13.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.7.0.</p>\n</li>\n</ul>\n<h2>2.87.20</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.14.0.</p>\n</li>\n</ul>\n<h2>2.87.19</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.146.</p>\n</li>\n</ul>\n<h2>2.87.18</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.84.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.12.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.3.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4cef1412cce204788f482e778a0b9187f9626a29\"><code>4cef141</code></a>\nRelease 2.87.21</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/133135e7fd1570baff8964a044bcf0d2147fc57a\"><code>133135e</code></a>\nUpdate <code>wasm-bindgen@latest</code> to 0.2.129</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8589241798155a8c0c86c7c0ae4f642a90a698e1\"><code>8589241</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/95e5bbc4a58633e12ebefd904f798c1eb76c18f7\"><code>95e5bbc</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/48ce11d4f97676e64a76a3dc4b83a4f59245b702\"><code>48ce11d</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/368e6617a899743920fa751bb5d414b6f0352cc0\"><code>368e661</code></a>\nUpdate wasm-bindgen manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/57f22a457e27d10a13bfcaee43e03dff1c20dedd\"><code>57f22a4</code></a>\nUpdate <code>uv@latest</code> to 0.12.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/888634e2727c1021a94ebfac9a2d266109a366b8\"><code>888634e</code></a>\nUpdate typos manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3bcab01fb9790f533b19647e60396514a9d08f96\"><code>3bcab01</code></a>\nUpdate protoc-gen-connect-openapi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/947e90eb285641d8325cc2d55ae24bd51d5c6b8a\"><code>947e90e</code></a>\nUpdate <code>mise@latest</code> to 2026.9.13</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.17...v2.87.21\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.17&new-version=2.87.21)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-08T11:21:48Z",
          "tree_id": "98f3c2ea75860030fbdf62a8581b5634dd8927aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49ba6c8e067aa1c584a1c7008590e5741235ddb0"
        },
        "date": 1791460355082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 210.1129770999999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.871,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.3980374,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.1892649,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 33.381549,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc0d76da41691ab73a170345e57a9654bf2c5cc1",
          "message": "Add packaging support for AL2027 (#1980)\n\nAdd support for packaging Mountpoint for Amazon Linux 2027 (currently in\n[Public\nPreview](https://aws.amazon.com/about-aws/whats-new/2026/09/announcing-amazon-linux-2027/)).\n\nThis change only ensures that out packaging scripts are compatible with\n2027 and that the package builds correctly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-09T14:48:44Z",
          "tree_id": "97f6e4b9bc841c7caa5cba20a9a290e1beaf1b6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc0d76da41691ab73a170345e57a9654bf2c5cc1"
        },
        "date": 1791560087292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 226.50261229000003,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.732,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 30.1363502,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.7309641,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.9531082,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27f32de4e0b5d97797bf54a00a940c3f3e4065fc",
          "message": "Fix ruff lint failures from new 0.17 default rule set (#1983)\n\nruff 0.17.0 expanded its default lint selection from `E4,E7,E9,F` to\nseveral hundred rules. CI runs `uvx ruff` unpinned, so the release broke\nthe Benchmark and Packaging script checks without any change on our\nside.\n\nApply the autofixes for the newly-enabled rules:\n\n- UP017: use the `datetime.UTC` alias instead of `timezone.utc`.\n- I001: `tomllib` now sorts into the stdlib import block.\n- RUF100: drop the `# noqa: DTZ005`, unused since DTZ is not enabled.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-12T15:31:22Z",
          "tree_id": "39ad30ae58ccd869bda2936dccdb3113dccac4fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27f32de4e0b5d97797bf54a00a940c3f3e4065fc"
        },
        "date": 1791821160687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 233.1251743,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.49,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.41154,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.3253766,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 30.8704653,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cc1a6ded1d2bfcdbb393ae6540b66d306ee182a2",
          "message": "Clarify mountpoint can overwrite objects (#1982)\n\nDocuments that Mountpoint can replace an existing object even when\n--allow-overwrite is not set: existence is only checked at file-open\ntime, so an object uploaded to the bucket after that check may be\nreplaced when the write completes. Metadata caching (negative cache)\nwidens this window.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2026-10-12T16:01:13Z",
          "tree_id": "21302bac8198a6e3315040305f42431b9d468ff9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc1a6ded1d2bfcdbb393ae6540b66d306ee182a2"
        },
        "date": 1791823932513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 232.49372123999993,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.065,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 32.5324918,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.1267461,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.377165100000003,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f6866c101cae19d1e99a1e89c260c646b4730f6",
          "message": "Bump hydra-core from 1.3.4 to 1.3.7 in /benchmark (#1981)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.4\nto 1.3.7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.7</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state, process-environment mutation, and logging formatters.\nThese checks are not a complete security boundary. (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3442\">#3442</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7</a></p>\n<h2>Hydra 1.3.6</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blacklist to Python logging configuration. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6</a></p>\n<h2>Hydra 1.3.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Warn Hydra 1.3 users relying on Hydra 1.1 behavior (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5\">https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.7/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.7 (2026-09-14)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state,\nprocess-environment mutation, and logging formatters. These checks are\nnot a\ncomplete security boundary. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3442\">#3442</a>)\n1.3.6 (2026-08-29)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blocklist to Python logging configuration.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<h1>1.3.5 (2026-08-06)</h1>\n<h3>API Change (Renames, deprecations and removals)</h3>\n<ul>\n<li>Warn Hydra 1.3 applications that rely on Hydra 1.1 compatibility\nbefore\nupgrading to Hydra 1.4. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3334\">#3334</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81715a5a258ae2657369344f4e3523e5fbabb2af\"><code>81715a5</code></a>\nPrepare hydra-core 1.3.7 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/4720dfca2bde27fa140ec287a05709668fbdf168\"><code>4720dfc</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/27df7550bfd6582a111df148ef96de499474c243\"><code>27df755</code></a>\nPrepare Hydra 1.3.6 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ff3e4dba890c29a21d8c2bb867ee87d37ccf21d0\"><code>ff3e4db</code></a>\nHarden logging target resolution on 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3420\">#3420</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/aa102eaabfa8c93f481ac4938dd7a34203c58d24\"><code>aa102ea</code></a>\nHarden deferred instantiate dispatch on 1.3</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2c82bbb3f39603b336cb852461739fdf7a38798a\"><code>2c82bbb</code></a>\nBackport instantiate target authorization hardening to 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3413\">#3413</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/06613cef4c44bf3473b92ecde533487647784b0b\"><code>06613ce</code></a>\nBump Hydra to 1.3.6.dev0</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/51647a2183512bc4e5556842c494e7efdbd75375\"><code>51647a2</code></a>\nRelease Hydra 1.3.5</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/445b0a7505c0c07a7f0bd3dde3baf4811c2fea27\"><code>445b0a7</code></a>\nWarn Hydra 1.3 users relying on 1.1 compatibility (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.4&new-version=1.3.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-12T16:53:49Z",
          "tree_id": "2cbe058a18d7d75fdf61ce5f778dcc719a9f85bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f6866c101cae19d1e99a1e89c260c646b4730f6"
        },
        "date": 1791826945077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 227.71078598999998,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.701,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.8268273,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.5175125,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.796695600000003,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0",
          "message": "Bump taiki-e/install-action from 2.87.21 to 2.87.26 (#1984)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.21 to 2.87.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.26</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.2.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.3.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.0.0.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 1.21.0.</p>\n</li>\n</ul>\n<h2>2.87.25</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.23.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.2.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.10.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.60.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-semver-checks@latest</code> to 0.51.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.1.</p>\n</li>\n</ul>\n<h2>2.87.24</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.59.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-leptos@latest</code> to 0.3.11.</p>\n</li>\n<li>\n<p>Update <code>cargo-insta@latest</code> to 1.49.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.0.</p>\n</li>\n</ul>\n<h2>2.87.23</h2>\n<ul>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.261.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.22.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.75.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.1.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.28.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.0.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.9.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f7e5d7c961414b23f5b25b2da9294395d08513ad\"><code>f7e5d7c</code></a>\nRelease 2.87.26</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/148b70c8533f32f0f67928d48f6234c224cc2717\"><code>148b70c</code></a>\nUpdate <code>tombi@latest</code> to 1.7.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9856be60d227976dcbe71f75a36a857c6bf3504a\"><code>9856be6</code></a>\nUpdate <code>prek@latest</code> to 0.5.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/246da9e6f2857c0c408cc9b590117673cd74d06e\"><code>246da9e</code></a>\nUpdate <code>mise@latest</code> to 2026.10.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8ec05a70c3252cd782c8c266ee7c57fdfa6b0699\"><code>8ec05a7</code></a>\nUpdate <code>kache@latest</code> to 1.0.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a5ed626e494481910920bbdee016db18f33bf1df\"><code>a5ed626</code></a>\nUpdate <code>hyperfine@latest</code> to 1.21.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/183e4297cca2404691e9380e1307288dced5c82a\"><code>183e429</code></a>\nRelease 2.87.25</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5e241e4899f64a7ba9011f0c3a46f591b6527640\"><code>5e241e4</code></a>\nUpdate <code>uv@latest</code> to 0.12.23</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/126791b91b3ba2303cb850bbdb6943156fe7c71b\"><code>126791b</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/35ba21c90f3f48ed80e4934a494a422e17488157\"><code>35ba21c</code></a>\nUpdate prek manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.21...v2.87.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.21&new-version=2.87.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:20:46Z",
          "tree_id": "570e1562229933fcc5317a95493cf69da0956e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0"
        },
        "date": 1791911233344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 251.1602988800001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.108,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.126,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 48.8591913,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.0401539,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 31.7133913,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109811970+samridh10exe@users.noreply.github.com",
            "name": "Samridh",
            "username": "samridh10exe"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b965f46c655b14be6fbbf9db3d93907cbbb6061",
          "message": "Purge the negative cache entry on create (#1985)\n\n`create` doesn't purge the new name from the negative metadata cache.\nWith negative caching enabled, if a lookup misses, the file or directory\nis then created through Mountpoint, and the kernel later forgets its\ninode, lookups for it return `ENOENT` until the negative entry expires.\n\nPurge the entry in `create`, as `rename` already does for its\ndestination. This picks up #1250 by @c-hagem and adds the test requested\nthere: `test_create_purges_negative_cache` covers a file and a\ndirectory, and fails without the change.\n\nAlso reproduced with `--metadata-ttl indefinite` against a local\nS3-compatible endpoint: after dropping the kernel's dentry and inode\ncaches, the created file and directory return `ENOENT` with unpatched\nMountpoint and are found with this change.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Files and directories created after a failed lookup\nof the same name are no longer reported as missing.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Samridh <109811970+samridh10exe@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:25:10Z",
          "tree_id": "15226e77d43d7e2040c2f91b8809e0ed240f0981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6b965f46c655b14be6fbbf9db3d93907cbbb6061"
        },
        "date": 1791912763076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 255.40087723000005,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.049,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.937,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.083,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 38.237085,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.2380981,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.4021249,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06757889535392d04f03b7b7e676983716700768",
          "message": "Update cargo dependencies (#1987)\n\nIn particular, update `rustls` to 0.23.46 to address\n[RUSTSEC-2026-0347](https://rustsec.org/advisories/RUSTSEC-2026-0347),\n[RUSTSEC-2026-0348](https://rustsec.org/advisories/RUSTSEC-2026-0348),\nand\n[RUSTSEC-2026-0349](https://rustsec.org/advisories/RUSTSEC-2026-0349).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T08:53:11Z",
          "tree_id": "bec0d423d4ab5dd6d059e993e27e4eec237f4346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06757889535392d04f03b7b7e676983716700768"
        },
        "date": 1792056376726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 236.37232754999985,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.035,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.434,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 28.9198638,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.9822346,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 26.892986399999998,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "372450bcac90421f5ab8136550bfac2381b9b081",
          "message": "Add code review guidelines (#1986)\n\nAdd doc/REVIEW_GUIDELINES.md, which collects what reviewers look for in\npull requests: severity, formatting and comment style, PR hygiene,\nchangelog and versioning, file system semantics, errors and logging,\nconcurrency, performance and memory, unsafe code and FFI, configuration\nand metrics, tests, and dependencies. It mostly consolidates existing\nguidance from CONTRIBUTING.md and SEMANTICS.md and conventions already\nfollowed in review.\n\nCONTRIBUTING.md now asks contributors to review their change against the\nguidelines before opening a pull request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T12:52:17Z",
          "tree_id": "8ed667694bc6da4006937c670cf1733765d5f04d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/372450bcac90421f5ab8136550bfac2381b9b081"
        },
        "date": 1792070717388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 234.3522939499999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.62,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 29.3519577,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 20.9525802,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 30.3146417,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5cc3445f94edb508faf05f2b28ef5f99bcb768af",
          "message": "Bump actions/download-artifact from 8.0.1 to 8.0.2 (#1992)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 8.0.1 to 8.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update the readme by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/473\">actions/download-artifact#473</a></li>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Update <code>@​actions/artifact</code> to 6.3.1 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n<li>Prepare download-artifact v8.0.2 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/493\">actions/download-artifact#493</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2\">https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/9000827ccba6bdab643e8b6fd33ac0654aef8333\"><code>9000827</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/493\">#493</a>\nfrom actions/tunc-d-prepare-download-v8-0-2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e455989ae00f5bdd4054f05d3e972c6bf8a62dc5\"><code>e455989</code></a>\nPrepare download-artifact v8.0.2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/a00b90c4a2f01d73a8c89552caabca6ea3b43137\"><code>a00b90c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/492\">#492</a>\nfrom actions/tunc-d-download-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/29bb7ce6af5345aeab5bb4774ce7249ee3ccc27f\"><code>29bb7ce</code></a>\nUpdate <code>@​actions/artifact</code> to 6.3.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/484a0b528fb4d7bd804637ccb632e47a0e638317\"><code>484a0b5</code></a>\nUpdate the readme (<a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/473\">#473</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=8.0.1&new-version=8.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T09:12:34Z",
          "tree_id": "e6120675afa7de292698398a8e829cee39d135c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cc3445f94edb508faf05f2b28ef5f99bcb768af"
        },
        "date": 1792404164864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 223.9779065,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.144,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.983,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.31,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 28.306026399999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.9101576,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 29.910888,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "498ab6c47f41a744feca5682bca8644107018cfe",
          "message": "Bump taiki-e/install-action from 2.87.26 to 2.87.28 (#1993)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.26 to 2.87.28.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.28</h2>\n<ul>\n<li>\n<p>Update <code>dprint@latest</code> to 0.62.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.33.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.171.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.75.2.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.7.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.3.</p>\n</li>\n</ul>\n<h2>2.87.27</h2>\n<ul>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.32.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.24.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.3.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.54.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.170.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.4.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.11.1.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.61.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.148.</p>\n</li>\n<li>\n<p>Update <code>cargo-neat@latest</code> to 0.6.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.2.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1168f6810a3cb30a3514bf5756a3b7f0422c6df8\"><code>1168f68</code></a>\nRelease 2.87.28</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/db1b9097c912e3ea0e3e3365a6b0b2b5b8cdb5b5\"><code>db1b909</code></a>\nUpdate <code>tombi@latest</code> to 1.8.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4fe7379362f9253601faa9a874184709db566a9e\"><code>4fe7379</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7443747ad21a8d8cfbf02ce264bd9ca0a8c08a6e\"><code>7443747</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6ff1c9bf2d9b6301b7c5a384025b33eb79addc2b\"><code>6ff1c9b</code></a>\nUpdate kingfisher manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cb40720d9a6bd77ff3b42bd2dbf2a11439dd64ab\"><code>cb40720</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4c1bf3400474f19d88f073ec38c34ddff9950f60\"><code>4c1bf34</code></a>\nUpdate <code>dprint@latest</code> to 0.62.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3dfabf76a32e8b71d8ceaf749b0e53a8c9cc5f2c\"><code>3dfabf7</code></a>\nUpdate <code>vacuum@latest</code> to 0.33.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a80e680a4cfbe929ef82b1402f4d57ce06b6d987\"><code>a80e680</code></a>\nUpdate <code>uv@latest</code> to 0.13.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/10f4ee9837c4e8479cd0cd010e2dc6397f5b1bcd\"><code>10f4ee9</code></a>\nUpdate <code>tombi@latest</code> to 1.8.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.26...v2.87.28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.26&new-version=2.87.28)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:11Z",
          "tree_id": "6a08a364a9df424ceb58b6036ec87f8580f40b96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/498ab6c47f41a744feca5682bca8644107018cfe"
        },
        "date": 1792410482439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 212.84327318999993,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.049,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.205,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 30.746011199999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.363666199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 27.432269899999998,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}
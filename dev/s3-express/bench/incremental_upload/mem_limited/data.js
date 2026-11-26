window.BENCHMARK_DATA = {
  "lastUpdate": 1795715720077,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone, Incremental Upload, Memory-Limited)": [
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
          "id": "5a5bedbdc1ef4dd19d633f1963faf68fafa4b9fb",
          "message": "Update CRT submodules to latest releases (#2020)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.2` -> `v1.0.3`\n* `aws-c-s3` `v1.5.0` -> `v1.5.2`\n\nAll other submodules are already at their latest release.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Changes in behavior:\n- Requests to S3 carry the `amz-sdk-invocation-id` and `amz-sdk-request`\nheaders on every attempt.\n- Credential provider endpoints for `eusc-` regions now use the\n`amazonaws.eu` DNS suffix.\n\nThe new `aws-c-s3` also accepts `request_body` on `PUT_OBJECT` meta\nrequests. `mountpoint-s3-client` only sets `request_body` for single\nPutObject requests, which use the `DEFAULT` meta request type, so this\nchange does not affect it.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. The unreleased sections of `mountpoint-s3-crt-sys` (v0.18.0),\n`mountpoint-s3-crt` (v0.17.0) and `mountpoint-s3-client` (v0.23.0)\nalready include \"Update to latest CRT dependencies.\" and the version\nbumps from #2010.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 3d29adcec..6f9496f2f:\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Add aws-eusc partition DNS suffix for credential provider endpoints (#309)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 fcb0e322b..bc923d67e:\n  > chore(release): patch-update to VERSION - 1.5.2\n  > Zero-copy uploads: request_body on PUT_OBJECT (#709)\n  > Adding Retry headers to every attempt (#710)\n  > chore(release): patch-update to VERSION - 1.5.1\n  > Getters for default max part size and configured memory limit (#711)\n  > Resume token ETag with caller If-Match (#708)\n```\n\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-11-03T10:16:27Z",
          "tree_id": "115ded402e2824de775b5776a896f73c2bbe323f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a5bedbdc1ef4dd19d633f1963faf68fafa4b9fb"
        },
        "date": 1793704427379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.34921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 476.0630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 620.36953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.66103515625,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "583dfe8e8f9b20861e3095b37a13f29df477b2c4",
          "message": "Authenticate packaging image pulls against Amazon ECR Public (#2014)\n\nThe `Packaging` job pulls its CentOS 7 build image anonymously from\n`public.ecr.aws`. That quota is enforced per source IP, and\nGitHub-hosted runners\nshare a NAT pool with other tenants, so we regularly inherited an\nalready-exhausted\nbudget and failed with:\n\n```\npublic.ecr.aws/docker/library/centos:7: failed to resolve source metadata:\n429 Too Many Requests - Server message: toomanyrequests: Data limit exceeded\n```\n\nThis accounted for **15 of the last 40 `Packaging` runs** (~38%),\nincluding merge-queue\nruns, where it blocked unrelated pull requests. Only the `x86_64` leg\nfailed; the\n`aarch64` leg runs on a self-hosted runner, which egresses from our own\naddress rather\nthan a shared one.\n\n1. **Authenticate the pull** against ECR Public using the existing\n`ACTIONS_IAM_ROLE`,\nso we use the account quota instead of the shared anonymous one. Both\ncredential\nsteps are best effort: where we can't authenticate, we fall back to an\nanonymous\n   pull.\n2. **The job moves into the integration tests workflow**, so it sits\nbehind the same\napproval gate as the other jobs that use our own credentials and\nrunners.\n3. **`fail-fast: false`** keeps a failure on one architecture from\ncancelling an\n   otherwise healthy build on the other.\n\n`.github/workflows/package.yml` is removed; the job is now `packaging`\nin\n`integration.yml` and is included in the `Integration Tests Complete`\naggregate check.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-11-03T14:28:11Z",
          "tree_id": "9ff696b13437c4fb10dfda18ab8cabce1030d8f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/583dfe8e8f9b20861e3095b37a13f29df477b2c4"
        },
        "date": 1793719531293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 562.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 473.24423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 621.3494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 110.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.82255859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120339761+Manishram-ai@users.noreply.github.com",
            "name": "Manish Ram",
            "username": "Manishram-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "51e28e1b7f7dbc73e67b28d21e78dc98403757e6",
          "message": "Fix the CSI driver install link in INSTALL.md (#2021)\n\nThe CSI driver install link in `doc/INSTALL.md` goes to\n`docs/install.md`, which is a 404. The file in the CSI driver repo is\n`docs/INSTALL.md`, so I fixed the case. The `#installation` anchor is\nstill right.\n\n### Does this change impact existing behavior?\n\nNo, it's a docs link fix.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it only changes docs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Manish Ram <manishrm@uw.edu>",
          "timestamp": "2026-11-03T16:16:32Z",
          "tree_id": "c4d3ede5007e4f524c0352996f4f476eca7d6ce0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/51e28e1b7f7dbc73e67b28d21e78dc98403757e6"
        },
        "date": 1793726173270,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 563.45595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 473.53525390625003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 631.57138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.3236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.79150390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "120339761+Manishram-ai@users.noreply.github.com",
            "name": "Manish Ram",
            "username": "Manishram-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3d031a125c3e47ec67073d18c285ee5846e7f36d",
          "message": "Keep listing a directory after empty S3 list pages (#2023)\n\n#1954 fixed lookup for the case where S3 returns empty `ListObjectsV2`\npages with a continuation token. `readdir` has the same problem.\n\n`RemoteIter::next` lists one page when it has no buffered entries, then\nreturns the first entry. If that page is empty, it returns `None` even\nthough there's a continuation token. `Superblock::readdir` ends the\nreply on `None`, and if that leaves the reply with no entries, the\nkernel treats it as the end of the directory. So when a readdir call\nstarts on an empty page, the rest of the listing is never read. For\nexample, with two empty pages at the start, `ls` shows the directory as\nempty.\n\nThis changes the `if` to a `while`, so `next` keeps listing until it has\nentries or the listing is finished.\n\nThe new unit test lists `dir/` through a `MetadataClient` that returns\ntwo empty pages and then a page with two objects, for both the ordered\nand unordered iterators. On `main` it lists nothing, and with this\nchange it lists both objects. I didn't reproduce this against real S3.\n#1954 showed S3 does return these pages.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. A listing that used to stop early after an empty\npage now returns the rest of the directory, which can take more\nListObjectsV2 requests in that case.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, I added an entry to `mountpoint-s3-fs/CHANGELOG.md`. No version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Manish Ram <manishrm@uw.edu>",
          "timestamp": "2026-11-07T07:05:08Z",
          "tree_id": "ea6896fc7d60ec755fe0181a3530b1b4bdabb928",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d031a125c3e47ec67073d18c285ee5846e7f36d"
        },
        "date": 1794038366589,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 562.28310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 475.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 625.17138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.13203125,
            "unit": "MiB/s"
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
          "id": "31b7fd21940f3aec759e57bc041822b561fe0290",
          "message": "Bump rusqlite to 0.41 to fix RUSTSEC-2026-0459 (#2031)\n\nBump `rusqlite` to 0.41 (`libsqlite3-sys` 0.39.1) to fix\n[RUSTSEC-2026-0459](https://rustsec.org/advisories/RUSTSEC-2026-0459),\nwhich fails `cargo deny` and blocks the merge queue\n([failure](https://github.com/awslabs/mountpoint-s3/actions/runs/42625679396/job/129188703909)).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-11-09T15:02:45Z",
          "tree_id": "3ff32059a6f4810b70f24743e0dc0fb21c7a21e7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31b7fd21940f3aec759e57bc041822b561fe0290"
        },
        "date": 1794241371148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 567.50634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 475.69521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 622.56630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.430078125,
            "unit": "MiB/s"
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
          "id": "e1bcb1e0424797788b0ded51bb91dead91ef3860",
          "message": "Detect EC2 instance type from the instance's DMI tables (#2006)\n\nMountpoint reads the EC2 instance type from IMDS to auto-configure the\ndefault target throughput. When IMDS is disabled or unreachable, the\ntarget falls back to 10 Gbps regardless of the instance's bandwidth.\n`InstanceInfo::instance_type` now reads the DMI tables the kernel\nexposes in `sysfs` first, falling back to IMDS.\n\n### Does this change impact existing behavior?\n\nNo breaking change. Where IMDS is unavailable but the DMI tables are\nreadable, the default target throughput changes from 10 Gbps to the\ninstance's network bandwidth. `AWS_EC2_METADATA_DISABLED=true` no longer\nsuppresses instance-type detection.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-11-09T20:18:35Z",
          "tree_id": "c85482498b31376e51af3249ba9134e834b3255e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1bcb1e0424797788b0ded51bb91dead91ef3860"
        },
        "date": 1794260964199,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.44248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 479.09140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 628.2043945312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.05927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.15712890625,
            "unit": "MiB/s"
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
          "id": "b6ade41d83f79d8a9201b2681398560ccc4e9fb9",
          "message": "Bump astral-sh/setup-uv from 10.3.2 to 10.3.3 (#2030)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.3.2 to 10.3.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.3 🌈 Use Astral mirror for version manifests with GitHub\nfallback</h2>\n<h2>Changes</h2>\n<p>This release contains something that should have been included a very\nlong time ago. Sorry for sleeping on that.</p>\n<p>This action now retrieves the release manifest that contains the\navailable versions, their download links and checksums from the Astral\nmirror, rather than trying GitHub first. This should present much more\nstable.\n(Known checksums are still checked, so the security impact does not\nchange)</p>\n<p>Also a big thank you to <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> for a set\nof bugfixes 👏</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Use Astral mirror for version manifests with GitHub fallback <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1119\">#1119</a>)</li>\n<li>fix: allow whitespace in uv requirement specifiers <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1112\">#1112</a>)</li>\n<li>fix: resolve ~= specifiers with PEP 440 semantics <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1111\">#1111</a>)</li>\n<li>fix: only report a saved cache when saving succeeded <a\nhref=\"https://github.com/soujasK\"><code>@​soujasK</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1110\">#1110</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.6 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1117\">#1117</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: use JSDoc for compatible release specifier comment <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1113\">#1113</a>)</li>\n<li>docs: update version references to v10.3.2 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1104\">#1104</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/68559e99cc807c1eb7e9238fd43a15bba460eec2\"><code>68559e9</code></a>\nUse Astral mirror for version manifests with GitHub fallback (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1119\">#1119</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/0192b6951893e558e24cfbd971d641a8cd336a95\"><code>0192b69</code></a>\nchore: update known checksums for 0.13.6 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1117\">#1117</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/2f29784424ba0f5755e2d0bbc18227082a5daff1\"><code>2f29784</code></a>\ndocs: use JSDoc for compatible release specifier comment (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1113\">#1113</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/9c7332190cf7291329c770bedb2ba1b3e441b37c\"><code>9c73321</code></a>\nfix: allow whitespace in uv requirement specifiers (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1112\">#1112</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/80fbe0140ccf08d50eff5eeb98dff9021c415a21\"><code>80fbe01</code></a>\nfix: resolve ~= specifiers with PEP 440 semantics (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1111\">#1111</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/36b7b57007634b5d947fd73fcd85c7b44863efec\"><code>36b7b57</code></a>\nfix: only report a saved cache when saving succeeded (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1110\">#1110</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/56618cab7a58e3efc9b282dd3de75bbf1075db9b\"><code>56618ca</code></a>\ndocs: update version references to v10.3.2 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1104\">#1104</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/07a047e608db84b3d8c06cd9a7c7dcc9c355c18e...68559e99cc807c1eb7e9238fd43a15bba460eec2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.3.2&new-version=10.3.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T09:10:45Z",
          "tree_id": "16af884da90e9e56902ffaff849d378643e0307b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6ade41d83f79d8a9201b2681398560ccc4e9fb9"
        },
        "date": 1794305353355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 564.91630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 474.6966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 626.7419921874999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.31298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.980078125,
            "unit": "MiB/s"
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
          "id": "e1839ccffba19574c61849803b59862d5bcc3854",
          "message": "Add an opt-in to retry without the retry quota (#2032)\n\n- Add an opt-in to retry without the retry quota using\n`UNSTABLE_MOUNTPOINT_DISABLE_RETRY_QUOTA` env variable.\n- Update docs to mention retry quota and how to disable it.\n- Update docs to say that polling for files that do not exist yet is not\nrecommended.\n\nRef:\nhttps://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html#retry-quota-token-bucket\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-11-10T10:16:09Z",
          "tree_id": "e2816179c87bd44c3d6260e034faeab816e7fc76",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1839ccffba19574c61849803b59862d5bcc3854"
        },
        "date": 1794309069063,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 474.7271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 633.3358398437499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.11552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.077734375,
            "unit": "MiB/s"
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
          "id": "804fd135ef5e89c0e91c9df8115b64eeda8fe268",
          "message": "Make the metrics tests diagnosable and stop concurrent runs sharing objects (#2022)\n\nThe metrics tests fail intermittently, and a failure tells us nothing:\nevery `dd` sent its stderr to `/dev/null`, and cleanup deleted the\nMountpoint logs on its way out.\n\nThe cause looks like the two legs of the job, which run at the same time\nand mounted the same prefix, writing the same keys with\n`--allow-overwrite`: in [run\n41068113615](https://github.com/awslabs/mountpoint-s3/actions/runs/41068113615)\nthe arm leg failed 3s after the x86 leg started writing those keys in\nthe same mode, and in [run\n41051242705](https://github.com/awslabs/mountpoint-s3/actions/runs/41051242705)\nboth legs were in their file operations at once and both failed.\nRe-running one leg on its own passed.\n\n- **Report which operation fails**: `dd status=none` keeps error\nmessages, and an `ERR` trap names the failing command. `pipefail` goes\nwith it, so the `jq` reading the exported metrics now tolerates a torn\nread explicitly, and the per-metric check uses `grep -qxF` instead of a\npipeline.\n- **Keep the logs of a failed test**: print their tail and, if\n`FAILED_LOGS_DIR` is set, copy them there for the workflow to upload.\nCleanup no longer recurses into the mount point, which would delete the\ntest's objects from S3, or hang, if the unmount failed.\n- **Give each run its own prefix**, named after the runner and PID, and\neach test one within it, so no test overwrites another's objects. The\ncollector's output file is named after the PID too, since `/tmp` is\nshared between a self-hosted runner's processes.\n\n### Does this change impact existing behavior?\n\nNo. Test and workflow only; the same metrics are asserted in the same\nthree configurations.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo: no change to any published crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-11-10T11:38:08Z",
          "tree_id": "8d51e1916673cb06ca19a2426f970ae6a47e8fe1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/804fd135ef5e89c0e91c9df8115b64eeda8fe268"
        },
        "date": 1794315904395,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 564.74375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 476.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 628.141015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 110.7025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.1126953125,
            "unit": "MiB/s"
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
          "id": "12229d073cc14ac7c760d705bf81cca0353914df",
          "message": "Bump actions-rust-lang/setup-rust-toolchain from 2.0.0 to 2.0.1 (#2029)\n\nBumps\n[actions-rust-lang/setup-rust-toolchain](https://github.com/actions-rust-lang/setup-rust-toolchain)\nfrom 2.0.0 to 2.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/releases\">actions-rust-lang/setup-rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.9.2 to 2.9.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/pull/109\">actions-rust-lang/setup-rust-toolchain#109</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v2.0.0...v2.0.1\">https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v2.0.0...v2.0.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/blob/main/CHANGELOG.md\">actions-rust-lang/setup-rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>The format is based on <a\nhref=\"https://keepachangelog.com/en/1.0.0/\">Keep a Changelog</a>,\nand this project adheres to <a\nhref=\"https://semver.org/spec/v2.0.0.html\">Semantic Versioning</a>.</p>\n<h2>[Unreleased]</h2>\n<h2>[2.0.1] - 2026-11-02</h2>\n<ul>\n<li>Update Swatinem/rust-cache to 2.9.3</li>\n</ul>\n<h2>[2.0.0] - 2026-09-07</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>[1.17.0] - 2026-06-25</h2>\n<ul>\n<li>Add new parameter <code>cache-targets</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>cache-targets</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/84\">#84</a>).\nThis allows disabling caching of the workspace <code>target</code>\ndirectory, e.g. when using <code>sccache</code>, while keeping the rest\nof the cache enabled.</li>\n</ul>\n<h2>[1.16.1] - 2026-05-08</h2>\n<ul>\n<li>Renamed internally used variable to avoid clashes with globally\nexisting variables.\nThis fixes the interference of the TOOLCHAIN variable as reported in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/91\">#91</a>.</li>\n</ul>\n<h2>[1.16.0] - 2026-04-13</h2>\n<ul>\n<li>Add new parameter <code>cache-save-if</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>save-if</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/90\">#90</a>\nby <a\nhref=\"https://github.com/ChanTsune\"><code>@​ChanTsune</code></a>)</li>\n</ul>\n<h2>[1.15.4] - 2026-03-15</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.2 to 2.9.1 (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/87\">#87</a>\nby <a\nhref=\"https://github.com/hyperfinitism\"><code>@​hyperfinitism</code></a>)\nThis gets rid of the warnings about Node.js 20.</li>\n</ul>\n<h2>[1.15.3] - 2026-03-01</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.1 to 2.8.2</li>\n</ul>\n<h2>[1.15.2] - 2025-10-04</h2>\n<ul>\n<li>Fix: Run the version detection steps in the selected\n<code>rust-src-dir</code> directory.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/a188e68d0fd2bd36ad51dccb2b07ba6e75105f30\"><code>a188e68</code></a>\nUpdate CHANGELOG for 2.0.1</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/b328d6be848e9b620901df2e49d27ad7e5536c0b\"><code>b328d6b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/109\">#109</a>\nfrom actions-rust-lang/dependabot/github_actions/Swat...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/238616c8889661c4193c26311ba8ad9a36d57c23\"><code>238616c</code></a>\nBump Swatinem/rust-cache from 2.9.2 to 2.9.3</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c8ff772090ab9d00f7f7bd7b388f3c3032282e3b\"><code>c8ff772</code></a>\nUpdate Readme</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/ecabd13d1c56bd1345c230e542e9144811ad706f...a188e68d0fd2bd36ad51dccb2b07ba6e75105f30\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions-rust-lang/setup-rust-toolchain&package-manager=github_actions&previous-version=2.0.0&new-version=2.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T12:18:03Z",
          "tree_id": "8366a214ccceae7569fb89dcc4f3d904fc16b780",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12229d073cc14ac7c760d705bf81cca0353914df"
        },
        "date": 1794316484288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 564.825390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 476.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 627.5733398437501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 110.87841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.93544921875,
            "unit": "MiB/s"
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
          "id": "19aade0f4a0be86113e22cd9f2ed9fe988550747",
          "message": "Bump taiki-e/install-action from 2.87.32 to 2.89.1 (#2028)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.32 to 2.89.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.89.1</h2>\n<ul>\n<li>\n<p>Install <code>ld.mold</code> symlink when installing\n<code>mold</code> on Linux. Previously, only <code>mold</code> binary\nwas installed. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2050\">#2050</a>,\nthanks <a\nhref=\"https://github.com/FirelightFlagboy\"><code>@​FirelightFlagboy</code></a>)</p>\n</li>\n<li>\n<p>Update <code>parse-dockerfile@latest</code> to 0.1.9.</p>\n</li>\n<li>\n<p>Update <code>parse-changelog@latest</code> to 0.6.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-minimal-versions@latest</code> to 0.1.38.</p>\n</li>\n<li>\n<p>Update <code>cargo-hack@latest</code> to 0.6.46.</p>\n</li>\n</ul>\n<h2>2.89.0</h2>\n<ul>\n<li>\n<p>Support <code>yq</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2036\">#2036</a>,\nthanks <a\nhref=\"https://github.com/FirelightFlagboy\"><code>@​FirelightFlagboy</code></a>)</p>\n</li>\n<li>\n<p>Support <code>mold</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2044\">#2044</a>,\nthanks <a\nhref=\"https://github.com/FirelightFlagboy\"><code>@​FirelightFlagboy</code></a>)</p>\n</li>\n<li>\n<p>Fix an error when old cargo-binstall had already been installed at\nnon-standard location. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/2048\">#2048</a>)</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.263.0.</p>\n</li>\n<li>\n<p>Update <code>wasm-pack@latest</code> to 0.15.1.</p>\n</li>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.130.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.36.1.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.9.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.25.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.16.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.26.2.</p>\n</li>\n</ul>\n<h2>2.88.1</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 50.0.1.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.36.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.8.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.23.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.15.0.</p>\n</li>\n<li>\n<p>Update <code>espup@latest</code> to 0.19.0.</p>\n</li>\n<li>\n<p>Update <code>deepsource@latest</code> to 0.10.2.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.4.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/682ce6c3c696a4cd5168a05f98e51aa02b877941\"><code>682ce6c</code></a>\nRelease 2.89.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0d9077fcb6e81df0a88ab9271028fb5e92d08f51\"><code>0d9077f</code></a>\nUpdate changelog</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/ad358d449d89d465b6257a630f6b390216287f27\"><code>ad358d4</code></a>\nAdd missing bin <code>ld.mold</code> (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/issues/2050\">#2050</a>)</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/353b306589491a9b1a29fad27af80008d6c5f790\"><code>353b306</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e1a0ce81ae2c0b2940fa5bce1bb79605b22723ef\"><code>e1a0ce8</code></a>\nUpdate syft manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/2a3464cd4b7debd4f1a129a3fcb4bcd54bf8bd96\"><code>2a3464c</code></a>\nUpdate release-plz manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5f1e428a2af15b0861239c953f2fd29b7afc6ccf\"><code>5f1e428</code></a>\nUpdate <code>parse-dockerfile@latest</code> to 0.1.9</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/96f9ee39b02b7d8380b3a00fd947ca8fa6d698ef\"><code>96f9ee3</code></a>\nUpdate <code>parse-changelog@latest</code> to 0.6.18</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/75d961f4a7fca5eaedda9bddd7d95cb4bc39aa2b\"><code>75d961f</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/202fd96ad6091c6d22356e6ec36ed1e75feca1c9\"><code>202fd96</code></a>\nUpdate <code>cargo-minimal-versions@latest</code> to 0.1.38</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.32...v2.89.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.32&new-version=2.89.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T12:25:50Z",
          "tree_id": "98cdd4fb25ad2a26c3fe70e51d6ad0b3d50adb71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19aade0f4a0be86113e22cd9f2ed9fe988550747"
        },
        "date": 1794321199584,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 568.95791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 477.476171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 626.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.07998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.25078125,
            "unit": "MiB/s"
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
          "id": "4b955fb9034bde037c79e6f94da4a67eb297a8e7",
          "message": "Bump taiki-e/create-gh-release-action from 1.11.0 to 1.12.0 (#2027)\n\nBumps\n[taiki-e/create-gh-release-action](https://github.com/taiki-e/create-gh-release-action)\nfrom 1.11.0 to 1.12.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/create-gh-release-action/releases\">taiki-e/create-gh-release-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.12.0</h2>\n<ul>\n<li>Update <code>parse-changelog</code> to 0.6.18. This improves\ncompatibility with GFM (GitHub Flavored Markdown) and CommonMark,\nimproves performance, and fixes bugs.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/create-gh-release-action/blob/main/CHANGELOG.md\">taiki-e/create-gh-release-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>This project adheres to <a href=\"https://semver.org\">Semantic\nVersioning</a>.</p>\n<!-- raw HTML omitted -->\n<h2>[Unreleased]</h2>\n<h2>[1.12.0] - 2026-11-02</h2>\n<ul>\n<li>Update <code>parse-changelog</code> to 0.6.18. This improves\ncompatibility with GFM (GitHub Flavored Markdown) and CommonMark,\nimproves performance, and fixes bugs.</li>\n</ul>\n<h2>[1.11.0] - 2026-04-17</h2>\n<ul>\n<li>\n<p>Support powerpc64le/riscv64/s390x Linux host.</p>\n</li>\n<li>\n<p>Improve support for AArch64 macOS/Windows host.</p>\n</li>\n<li>\n<p>Update <code>parse-changelog</code> to 0.6.16.</p>\n</li>\n<li>\n<p>Improve robustness for network failure.</p>\n</li>\n</ul>\n<h2>[1.10.0] - 2026-04-04</h2>\n<ul>\n<li>\n<p>create-gh-release-action no longer requires <code>token</code> input.\nThis action now uses <code>${{ github.token }}</code> as the default\ntoken, like <code>actions/checkout</code> does.</p>\n</li>\n<li>\n<p>Documentation improvements.</p>\n</li>\n</ul>\n<h2>[1.9.3] - 2026-03-08</h2>\n<ul>\n<li>Avoid triggering <a\nhref=\"https://docs.zizmor.sh/audits/#ref-confusion\">zizmor\nref-confusion</a> when using this action in form of <code>uses:\ntaiki-e/create-gh-release-action@v1</code>.</li>\n</ul>\n<h2>[1.9.2] - 2026-01-06</h2>\n<ul>\n<li>\n<p>Enable <a\nhref=\"https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/immutable-releases\">release\nimmutability</a>.</p>\n</li>\n<li>\n<p>Update <code>parse-changelog</code> to 0.6.15.</p>\n</li>\n</ul>\n<h2>[1.9.1] - 2025-03-29</h2>\n<ul>\n<li>Increase version for workaround Dependabot issue.</li>\n</ul>\n<h2>[1.8.4] - 2025-01-20</h2>\n<ul>\n<li>Update <code>parse-changelog</code> to 0.6.11.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/045e5c0ed9c50cc1f96de7e891a09ad3daea245f\"><code>045e5c0</code></a>\nRelease 1.12.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/e6bff2d1273683ac961edaf0b739fac3e39d8c1a\"><code>e6bff2d</code></a>\nTweak action.yml</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/009312afa6921eef17011893055c2b30ce94a72d\"><code>009312a</code></a>\nUpdate parse-changelog to 0.6.18</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/8c8bed32a7ffc299e8a509a6da809f61f35e2a15\"><code>8c8bed3</code></a>\ntools: Update tidy.sh</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/3a8aeda082471badc50f9369df618ee9307707c6\"><code>3a8aeda</code></a>\nci: Update taiki-e/github-actions workflows</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/fda69944781cb7ec4d9cf88843398beb68683c09\"><code>fda6994</code></a>\ntools: Update tidy.sh</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/68b72686453efc50fdddec8a9168a07b4d89c27b\"><code>68b7268</code></a>\nci: Update config</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/e99032f137a6fe81a69305fcfd06c809618b24da\"><code>e99032f</code></a>\nci: Update taiki-e/github-actions workflows</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/d95ab4c4dc917cfa4a7cfc6468a0e5267ede79ac\"><code>d95ab4c</code></a>\nci,tools: Update config and script</li>\n<li><a\nhref=\"https://github.com/taiki-e/create-gh-release-action/commit/96023fa29ad717ebcc72f6b808878a9013d7f15c\"><code>96023fa</code></a>\nAdd note about unset</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/create-gh-release-action/compare/eba8ea96c86cca8a37f1b56e94b4d13301fba651...045e5c0ed9c50cc1f96de7e891a09ad3daea245f\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/create-gh-release-action&package-manager=github_actions&previous-version=1.11.0&new-version=1.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-10T13:32:26Z",
          "tree_id": "44ada5c81f355a137e03ab4fbceda35ea78233ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4b955fb9034bde037c79e6f94da4a67eb297a8e7"
        },
        "date": 1794323218463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 564.06884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 474.82109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 625.1666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.06005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.05029296875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "61a93af6715d16f474a5684ba7ab5dc61e4a5b8c",
          "message": "Remove remaining Amazon Linux 2 references (#2033)\n\nAmazon Linux 2 reached end of support on June 30, 2026. This adds a\nchangelog entry announcing that AL2 is no longer tested and recommending\nAmazon Linux 2023, and enables FUSE 3 tests on the AL2023 arm CI runner.\n\n- Add a changelog entry under breaking changes recommending Amazon Linux\n2023.\n- Remove the FUSE 3 exclusion for the AL2023 arm runner in\n`integration.yml`. It was added when that runner was Amazon Linux 2,\nwhich has no fuse3. The runner is now AL2023, which does.\n\nThe PyTorch example update will follow in a separate PR.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint itself. The changelog entry is listed under\nbreaking changes because AL2 is no longer tested or supported, although\nreleases may continue to install and run on it. CI now also runs the\nFUSE 3 tests on the AL2023 arm runner.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a changelog entry announcing that Amazon Linux 2 is no longer\ntested. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-11T22:07:58Z",
          "tree_id": "e9aee27d4884a74475f980c5aabac7a50c974723",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61a93af6715d16f474a5684ba7ab5dc61e4a5b8c"
        },
        "date": 1794446769191,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.1174804687499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 479.26005859375005,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 625.86337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.33759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.21826171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "12f00c23775ed78a6a687cf34c39fd118dba95d8",
          "message": "Fix mount timeout when cleaning up a large cache (#2024)\n\nWhen Mountpoint runs in the background, the child process removes any\ncache directory left over from a previous run before mounting, while the\nparent waits at most 30 seconds for the mount status. Removing a large\nleftover cache can take longer, so the mount fails with `Timeout after\n30 seconds while waiting for mount process to be ready`. Fixes #1251.\n\n* The child still removes the directory synchronously, as today.\n* While it does, a separate thread in the child sends a heartbeat byte\nto the parent every second. Heartbeats stop as soon as the cleanup ends,\nso the rest of the mount keeps the 30 second timeout.\n* The parent waits with `poll` instead of a separate thread and channel.\nEach heartbeat restarts the 30 second timeout, and signals interrupting\n`poll` don't extend it. The parent prints a warning if the cleanup takes\nlonger than 30 seconds.\n* If the parent can't read the child's status, it stops the child\ninstead of waiting for it to exit.\n* The child closes the read end of the pipe right after the fork.\n\nThe new code is in `mountpoint-s3/src/mount_progress.rs`.\n\n### Testing\n\n* Unit tests for the status and heartbeat messages, the timeout once\nheartbeats stop, the child exiting without a status, and errors reading\nthe status.\n* Added `run_in_background_large_cache_cleanup_does_not_time_out` to\n`fork_test.rs`. It creates 2M files, so it's `#[ignore]` and needs to be\nrun manually.\n* Manually mounted in the background with a 400,000-file leftover cache:\nthe mount succeeded after 78 seconds, printed the warning at 30 seconds,\nand emptied the cache.\n\n### Does this change impact existing behavior?\n\nYes. With a large leftover cache, the mount now waits for the cleanup to\nfinish instead of failing after 30 seconds. There's no timeout while the\nold cache is removed, but the rest of the mount still fails if it makes\nno progress for 30 seconds. That error now reads `Timeout while waiting\nfor mount process to be ready: no progress for 30 seconds`. Other mounts\nare unaffected.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, changelog entry added for `mountpoint-s3`. No version change\nneeded, it's already at an unreleased v1.25.0.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-12T02:07:22Z",
          "tree_id": "82a3c26348674b30cdd30abb3dcd3ebd5dd22ba4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12f00c23775ed78a6a687cf34c39fd118dba95d8"
        },
        "date": 1794454867442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.67822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 475.12607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 626.83583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.021875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.83759765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "51c4d18fad9b1af0945852a24a023de5886fcb70",
          "message": "Move release package validation from Amazon Linux 2 to AL2023 (#2036)\n\nAmazon Linux 2 reached end of support on June 30, 2026. This moves the\nrelease validation scripts for the rpm and tar.gz artifacts from Amazon\nLinux 2 to Amazon Linux 2023.\n\n- `validate.py`: replace the `al2` OS option with `al2023`, using the\n`amazonlinux:2023` image.\n- Rename `validate-{rpm,gzip}-al2.sh` to `-al2023.sh` and switch `yum`\nto `dnf`.\n- Install the full `gnupg2` with `--allowerasing`. The AL2023 image\nships `gnupg2-minimal`, which conflicts with `gnupg2` and has no\n`gpg-agent`, so `gpg --import` fails without it.\n- Drop the `yum update -y` step. `dnf install` refreshes repository\nmetadata itself, and skipping a full system update keeps validation\nfaster and more reproducible.\n\nTested locally on x86_64 following the release runbook (1.3.4), against\n1.24.0 and the `giab` bucket:\n- `--artifact rpm --os al2023`: signature verified, `mount-s3 1.24.0`\ninstalled, bucket mounted and listed.\n- `--artifact gzip --os al2023`: signature verified, `mount-s3 1.24.0`\ninstalled, bucket mounted and listed.\n\narm64 not tested locally.\n\n### Does this change impact existing behavior?\n\nOnly the manual release validation tooling. The `--os al2` option\nbecomes `--os al2023`, and the release runbook will be updated to match\nafter this merges.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. This is internal release tooling and doesn't affect Mountpoint or\nany crate. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-12T11:43:26Z",
          "tree_id": "96abe1e472398e6cebc6103b51aed9b1660790ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/51c4d18fad9b1af0945852a24a023de5886fcb70"
        },
        "date": 1794487230720,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 561.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 477.45097656250005,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 624.6109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.0787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.91689453125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c18f30d82f76457f3e8ff882a4d29451654aeb24",
          "message": "Update changelogs to prepare v1.25.0 release (#2035)\n\n### Description\n\n- Add v1.25.0 / v0.x.0 changelog headers\n- Add missing mountpoint-s3 entries: #1954 (directory lookup after empty\nlist pages, which I think affects customer behaviour in mount-s3 usage)\nand the CRT update #1967, #2010, #2020 (with some important mount-s3\nfacing changes)\n- Add missing #2032 PR links\n- Credit external contributors on #1957, #1985, #1954 and #2023 (just\nbecause previous releases did that)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis PR changes changelog entries and does not need a change log entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-11-12T14:22:53Z",
          "tree_id": "0bee418b6bee203ddd057bb02d6e9cfb74293019",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c18f30d82f76457f3e8ff882a4d29451654aeb24"
        },
        "date": 1794496779554,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.11005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 476.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 631.3181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.131640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.171484375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2b391202bb2ac04812e5c606d7c8ee61e0cb21a9",
          "message": "Update PyTorch example for Amazon Linux 2023 (#2037)\n\nAmazon Linux 2 is no longer supported, so this updates the PyTorch\nexample to use Amazon Linux 2023.\n\n- Use the Amazon Linux 2023 PyTorch Deep Learning AMI.\n- Pin PyTorch library versions that still work with the example.\n- Install the example's dependencies in a separate virtual environment,\nso the AMI's own PyTorch isn't changed.\n- Install Mountpoint with `dnf`.\n- Note that the existing results came from an older setup.\n\nTesting: ran the full example on a GPU instance with the Amazon Linux\n2023 PyTorch Deep Learning AMI. Training completed successfully.\n\n### Does this change impact existing behavior?\n\nNo. This only changes the example's README and requirements.txt.\nMountpoint itself is unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It's a documentation change to an example and doesn't affect any\ncrate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-12T16:44:49Z",
          "tree_id": "3d2b4e79198d65c61037b7fc39a49e4886a8e2d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b391202bb2ac04812e5c606d7c8ee61e0cb21a9"
        },
        "date": 1794508154602,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.81689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 474.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 627.8873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.067578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.0869140625,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "8bde58ccb2ff596e342b24baa732bb2b3ad9d261",
          "message": "Make the FUSE test client and test sessions async (#2038)\n\nThe FUSE tests in `mountpoint-s3-fs` seed and inspect the bucket through\nthe `TestClient` trait, and create their mounts through\n`TestSessionCreator`. Both were synchronous: the implementations wrapped\nevery async call to `MockClient` and every call to the AWS SDK client in\n`tokio_block_on`, which builds and drops a new Tokio runtime for each\ncall, and the S3 sessions built their SDK client the same way. This\nchange makes the helpers async, so that tests await them on their own\nruntime. It prepares the test harness for clients that have to run on\nthe test's runtime, and removes the throwaway runtimes.\n\n- `TestClient` is an `#[async_trait]` trait, and its implementations\nawait their clients directly.\n- `TestSessionCreator` is an alias of `AsyncFnOnce(&str,\nTestSessionConfig) -> TestSession`. `mock_session::new`,\n`s3_session::new` and the creators that `new_with_cache` returns are\nasync. `s3_session::new_with_test_client` and\n`new_with_test_client_and_disk_cache` take an SDK client that the caller\nhas built, and stay synchronous.\n- The FUSE tests, the direct I/O test and the stress scenarios are\n`#[tokio::test]` functions. The test bodies that take a session creator\nare async functions, and the `test_case` and `test_matrix` attributes\nare unchanged. The tests still exercise the mount with blocking file\nsystem calls, which is fine on the test's current-thread runtime: the\nmount is served by the FUSE worker threads and the file system's own\nruntime, and the tests only use their runtime when they await the test\nclient.\n- The shared `tokio_block_on` helper in `tests/common` is removed,\ntogether with `create_objects`, an S3 helper that no test uses.\n\nA few tests needed more than an added `.await`:\n\n- `multi_thread_test` writes to and closes the file on another thread as\nbefore, and checks the bucket on the test's thread after joining it.\n- The metrics tests run in a forked child process with\n`rusty_fork_test!`, which only supports synchronous test functions, so\neach of them runs its body on a current-thread runtime of its own.\n- The FUSE reference tests run as synchronous proptest bodies, so the\nMountpoint side of the comparison owns a current-thread runtime to\ncreate its session and to seed the bucket.\n- The test matrix of `open_after_closing_empty_file_test` names the\nsession creators `MOCK` and `S3` with `use` aliases, because the type of\nan async function cannot be written as the function pointer type that\nthe constants had. The test names are unchanged.\n\n### Does this change impact existing behavior?\n\nNo. The change only touches test code. The same tests run with the same\nnames and assertions.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. The change only touches test code and doesn't affect any published\ncrate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-13T13:38:18Z",
          "tree_id": "af7f0846ed5f56c19b5aebca5b33aa52483720cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8bde58ccb2ff596e342b24baa732bb2b3ad9d261"
        },
        "date": 1794580537891,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.02451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 475.46591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 627.5041992187499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 110.94716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 110.9498046875,
            "unit": "MiB/s"
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
          "id": "40952b3f45dcec9bbfdb0f3460f364e8002abf93",
          "message": "Add a CI check for the release binary's shared-library requirements (#2040)\n\nAdd a CI check to the release binary to verify:\n- We do not accidentally gain extra needed libraries\n- The minimum symbol version required by our needed libraries does not\nincrease by accident.\n\nIt is fine for us to drop shared libraries, and also to use a lower\nversion and have the check pass.\n\nAdding this as a prerequisite to a change to our official build system\nto help us verify no runtime dependencies have changed.\n\nYou can recreate the baseline with a Mountpoint binary using\n`--emit-baseline`\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-11-13T15:02:34Z",
          "tree_id": "8b18ffe08ca35d1dfd67e8bba7190a8c9520de77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/40952b3f45dcec9bbfdb0f3460f364e8002abf93"
        },
        "date": 1794593986897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 566.7400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 477.79599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 630.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.07841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.0435546875,
            "unit": "MiB/s"
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
          "id": "4617ada25cba10c4aaa0185ff35e669f7c965a5a",
          "message": "Bump taiki-e/install-action from 2.89.1 to 2.90.3 (#2044)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.89.1 to 2.90.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.90.3</h2>\n<ul>\n<li>\n<p>Update <code>yq@latest</code> to 4.54.2.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.39.3.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.57.0.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.76.0.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.30.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.11.3.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.17.0.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.6.</p>\n</li>\n</ul>\n<h2>2.90.2</h2>\n<ul>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.2.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.10.0.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.10.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.11.2.</p>\n</li>\n<li>\n<p>Update <code>mdbook-d2@latest</code> to 0.3.10.</p>\n</li>\n<li>\n<p>Update <code>cargo-zigbuild@latest</code> to 0.24.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.6.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.5.</p>\n</li>\n</ul>\n<h2>2.90.1</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.32.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.7.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.52.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.9.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.56.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.11.0.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.151.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cfdb7ed4ccc7c7dce37759eae89dc5674b469b39\"><code>cfdb7ed</code></a>\nRelease 2.90.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0a7121930a2b50a86493394ff371be5944d87f42\"><code>0a71219</code></a>\nUpdate <code>yq@latest</code> to 4.54.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4072c983d74b307847287f7220fce7a9c141b992\"><code>4072c98</code></a>\nUpdate <code>vacuum@latest</code> to 0.39.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d429e9b8ea70b66f46e73feb606ddc9ee0f4efde\"><code>d429e9b</code></a>\nUpdate <code>syft@latest</code> to 1.57.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/24c26286aac008b9637a57b31fe0b3ddb2bd4ded\"><code>24c2628</code></a>\nUpdate <code>rclone@latest</code> to 1.76.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/ab9bbc83facfaf93b4b8c40d6b13ddc1bb0169a3\"><code>ab9bbc8</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.30.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4bff33fa4dd584dfccaa7582398a2b31ddd8f0cb\"><code>4bff33f</code></a>\nUpdate <code>mise@latest</code> to 2026.11.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cdf8dc3a14f3d788d3da291c51381dd2849ae5cf\"><code>cdf8dc3</code></a>\nUpdate <code>kingfisher@latest</code> to 2.17.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b8b14a4959fcb616bab58d718dcffcc06ecc6bdb\"><code>b8b14a4</code></a>\nUpdate <code>biome@latest</code> to 2.6.6</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3a3daafd3b7f23b8f65d9f5ba2db203fb59b79e2\"><code>3a3daaf</code></a>\nRelease 2.90.2</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.89.1...v2.90.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.89.1&new-version=2.90.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-16T11:01:53Z",
          "tree_id": "fe59401dcbed86ace10f08c18d8cc0bede47e8bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4617ada25cba10c4aaa0185ff35e669f7c965a5a"
        },
        "date": 1794830233298,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 566.47060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 478.22607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 625.1134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.90224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.21474609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0d76acf34fc7f7fe86f76b70058ef1b8307c62fa",
          "message": "Update publishing crates doc as fuser is in a different workspace (#2042)\n\n### Description\n\nUpdate `doc/PUBLISHING_CRATES.md` for the crate layout after #2005.\n\nSince #2005, `mountpoint-s3-fuser` declares its own `[workspace]` and is\nexcluded from the root workspace. So `cargo publish --workspace` does\nnot include it, `-p mountpoint-s3-fuser` cannot select it, and `cargo\npublish --workspace --dry-run` fails at `mountpoint-s3-fs` until the new\nfuser version is on crates.io.\n\n- Publish `mountpoint-s3-fuser` first with `--manifest-path\nmountpoint-s3-fuser/Cargo.toml`.\n- Move the workspace dry run after it.\n- Keep the per-crate steps for the other crates, and add publishing all\nfour together with `cargo publish --workspace` when they all need a\nrelease (it is the process used for the v1.25.0 release, a slightly\nquicker way to publish them all together :) )\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-11-16T11:41:06Z",
          "tree_id": "3556337ce06bdb7f7248bbd65a45fc3804b3cb96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d76acf34fc7f7fe86f76b70058ef1b8307c62fa"
        },
        "date": 1794832711142,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.828515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 475.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 622.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.5158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.2763671875,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "a51612942fb0e301ee50177f85289772d47c30a3",
          "message": "Update dependencies and replace humantime-serde with jiff (#2046)\n\n`cargo deny` fails on two new advisories:\n\n* RUSTSEC-2026-0544 (heap buffer overflow in zlib) affects `libz-sys`\n1.1.31, a build dependency through `built` and `git2`. Running `cargo\nupdate` moves it to 1.1.33, along with routine updates to other\ndependencies.\n* RUSTSEC-2026-0542 marks `humantime` as unmaintained, with no fixed\nversion. It was only used, through `humantime-serde`, to parse the\ndurations in the `s3io_benchmark` example configuration. The example now\nuses `jiff`, which parses the same duration strings (such as `100ms` or\n`1h 30m`) and ISO 8601 durations, but rejects days and weeks.\n\nRemove the ignore entry for RUSTSEC-2025-0141 from `deny.toml`, as\n`bincode` is no longer a dependency.\n\n### Does this change impact existing behavior?\n\nNo. Mountpoint is unchanged. The `s3io_benchmark` example no longer\naccepts durations in days or weeks.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Only `Cargo.lock`, a dev-dependency and an example change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-17T14:07:54Z",
          "tree_id": "fb2e1bec726a6cb00160171d83d121b3bf6bc394",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a51612942fb0e301ee50177f85289772d47c30a3"
        },
        "date": 1794928109036,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 566.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 479.68486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 625.99033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.55966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.29287109375,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "1cae0a438b6d7b4fed1df06965aed2fca5cc99b3",
          "message": "Keep the disk data cache within its limit while blocks are being written (#2041)\n\n`DiskDataCache::put_block` evicted blocks until the cache was within its\nlimit, and then wrote the new block. The check counted neither the new\nblock nor the blocks that other puts were still writing. A single put\ncould therefore leave the cache one block over its limit, and concurrent\nputs that all saw the same free space could overshoot it by one block\neach. With the default limit, which keeps 5% of the file system free,\nthe file system could end up with less free space than that.\n\nA put now computes the size of its block on disk and reserves room for\nit. It then evicts until the limit holds with all the room reserved by\nputs in progress, taking the usage lock for each eviction as before. It\nreleases the room once the block is in the usage index, or when the\nwrite fails. With `--max-cache-size`, a block that cannot fit even in an\nempty cache fails without evicting anything.\n\n### Does this change impact existing behavior?\n\nYes, as a bug fix. The local cache stays within `--max-cache-size`, or\nwithin the default free-space limit, while blocks are being written, so\nit can hold one block fewer than before for the same limit. A\n`--max-cache-size` smaller than one cache block caches nothing; it used\nto keep one block. A block is also not cached when the blocks that are\nbeing written already fill the `--max-cache-size`. No CLI flags or\ndefaults change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. There are changelog entries for `mountpoint-s3-fs` and\n`mountpoint-s3`, with patch bumps for the fix: `mountpoint-s3-fs` 0.12.0\nto 0.12.1 and `mountpoint-s3` 1.25.0 to 1.25.1.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-17T21:00:21Z",
          "tree_id": "e141f37c09d93048c106a386e481f2fda242cc55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1cae0a438b6d7b4fed1df06965aed2fca5cc99b3"
        },
        "date": 1794952718702,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 473.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 623.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.11728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.24296875,
            "unit": "MiB/s"
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
          "id": "60d95c713843c2a75771adb6f743958d7930de90",
          "message": "Upgrade cargo-about to 0.9.2 for the third-party attribution (#2047)\n\nRelease packages ship a `THIRD_PARTY_LICENSES` file generated by\ncargo-about. This change upgrades cargo-about from 0.8.2 to 0.9.2 in\n`package/Dockerfile` and in the SRPM CI job: 0.8.2 can silently leave\nout linked crates that are reached through optional dependencies, while\n0.9.2 lists every crate that `cargo tree -e normal` reports for\n`mountpoint-s3` on x86_64 and aarch64 Linux. The generated attribution\nkeeps every current entry and only adds `md-5` (an optional dependency\nof `mountpoint-s3-client`'s `mock` feature) and a few licence texts that\n0.8.2 left out.\n\nThe change also removes the `no-clearly-defined` option from\n`package/attribution.toml`: cargo-about 0.9 rejects it, and it has had\nno effect since ClearlyDefined support was removed in 0.8.0. cargo-about\n0.8.2 produces the same attribution without it.\n\n`cargo deny` passes without changes to `deny.toml`.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint's behaviour. The shipped attribution includes a\nfew more licence texts.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo: packaging tooling only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-18T08:33:37Z",
          "tree_id": "bd828a3beb81959e1d1aa7f047ad64165f951170",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/60d95c713843c2a75771adb6f743958d7930de90"
        },
        "date": 1794994395446,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 565.560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 477.55888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 623.24716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.51650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.44052734375,
            "unit": "MiB/s"
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
          "id": "d1045f2aa9bef19903219296b71775ac3ebd568a",
          "message": "Update CRT submodules to latest releases and pin the default credentials chain (#2049)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.3` -> `v1.1.0`\n* `aws-c-http` `v1.1.1` -> `v1.3.0`\n* `aws-c-io` `v1.1.1` -> `v1.1.2`\n* `aws-lc` `v5.12.0` -> `v5.15.0`\n* `s2n-tls` `v1.7.13` -> `v1.7.14`\n\nAll other submodules are already at their latest release.\n\nThe new `aws-c-auth` adds an option to pin the default credentials\nprovider chain to the first provider that returns credentials\n(awslabs/aws-c-auth#317). This PR exposes it in `mountpoint-s3-crt` as\n`CredentialsProviderChainDefaultOptions::pin_credential_provider`, and\n`S3CrtClient` always sets it for `S3ClientAuthConfig::Default`.\n\n### Does this change impact existing behavior?\n\nNo breaking changes for Mountpoint users. Changes in behavior:\n- Mountpoint no longer switches to a different AWS credentials source\nwhen the one it is using fails to refresh credentials. Requests that\nneed new credentials fail until that source recovers.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.55MiB, within the\n10MiB crates.io limit.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. \n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 6f9496f2f..cf69fb7ed:\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Fix a crash triggered by failure to fully construct an IMDS client (#316)\n  > Add optional sticky provider chain (#317)\n  > Actually use the tls context in the imds client if appropriate (#313)\n  > chore(release): patch-update to VERSION - 1.0.4\n  > Preserve and use the sign-in region in the login token (#308)\n  > updating macos runner (#310)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http d19eabf4c..f97e6cfeb:\n  > chore(release): minor-update to VERSION - 1.3.0\n  > feat: stream acquision timeout (#597)\n  > HTTP/2 stream manager updates (#596)\n  > chore(release): minor-update to VERSION - 1.2.0\n  > Stream manager config (#595)\n  > Reject duplicate Content-Length header in h1_encoder (#571)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io cbc368573..eac372568:\n  > chore(release): patch-update to VERSION - 1.1.2\n  > Add a static default event loop group with a loop cap (#861)\n  > updating macos runner (#859)\n  > [s2n_tls] Fix const ALPN buffers (#856)\n  > Fix epoll event loop delays tasks after device suspend  (#840)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc cd481c207..4378134b6:\n  > Prepare v5.15.0 (#3805)\n  > ci: bump xwin to 0.10.0 to fix cross-clang-cl-ninja toolchain setup (#3789)\n  > Add OPENSSL_cpuid_setup for aarch64 QNX (#3780)\n  > delocate: handle .set aliases inside relro sections (#3681)\n  > Test that RSA_X931_PADDING is rejected (#3778)\n  > fix(evp): Preserve zero-length update behavior (#3771)\n  > Bump AWSLC_API_VERSION to 38 (#3786)\n  > test(tool-openssl): Verify x509 serial persistence (#3745)\n  > Rename SHAKE128_Init_x4, expose batched SHAKE256 and add into MLDSA (#2917)\n  > Enforce CN name constraints for boundary hyphens and trailing dots (#3708)\n  > Mark FIPS 1.x branches as no longer actively maintained (#3776)\n  > Use macos-latest for aws-lc-rs iOS CI (#3774)\n  > Reject ChaCha20-Poly1305 counter wrap in EVP_CIPHER (#3722)\n  > fix(tool-openssl): Accept trusted CA certificates (#3760)\n  > Gate Neoverse x4 Keccak dispatch on runtime SHA3 support (#3720)\n  >  Isolate fork-PR fuzz storage from trusted builds (#3580)\n  > Reject a zero modulus in RSA_verify_PKCS1_PSS_mgf1 (#3706)\n  > CI: move image promotion to a dedicated role and remove image writes from the shared runner role (#3573)\n  > Add overflow checks to a2i/PEM/name/TXT_DB parsers (#3673)\n  > Exclude generated obj_dat.h from clang-tidy review (#3757)\n  > Prepare v5.14.0 (#3758)\n  > Separate VM setup from the tests in BSD CI so infra flakes do not alarm (#3752)\n  > Match OpenSSL s_client cipher parsing (#3756)\n  > ci: drop SM4 hunk from tpm2-tss integration patch (#3755)\n  > Fix libwebsockets v5.1.0 integration tests (#3750)\n  > Make SSL_set_SSL_CTX apply the new context's cipher suites and verify sigalgs (#3633)\n  > Fix flaky pkeyutl decryption failure test (#3748)\n  > Freeze mainline ABI against AWS-LC-FIPS 5 until 6.0.0 (#3667)\n  > Restrict permissions on secret files written by the CLI tools (#3577)\n  > cmake: set Win7 target for old mingw-w64 gcc only (#3660)\n  > Fix Ubuntu 26.04 integration test failures (#3747)\n  > Cleanse ML-DSA SHAKE contexts on release (#3737)\n  > fix(console): pass correct buffer size to WideCharToMultiByte (#3641)\n  > Prepare v5.13.0 (#3749)\n  > Pin RFC 6125 CN-fallback behavior for duplicate SANs (#3668)\n  > Harden ACVP large-data hash handling (#3628)\n  > Validate Ed25519 inputs in ACVP modulewrapper (#3626)\n  > Add raw ChaCha20 EVP_CIPHER (EVP_chacha20) (#3704)\n  > Reject repeated AES-CCM encryption updates (#3721)\n  > Retry BSD CI package installs to tolerate transient mirror errors (#3736)\n  > feat(tool-openssl): Add digest selection to x509 signing (#3710)\n  > Validate SHAKE output lengths in ACVP tooling (#3718)\n  > Clear unreported bytes written on early data reject (#3581)\n  > Zeroise on Windows for all build mode types (#3684)\n  > aws-lc-provider Refactors (#3694)\n  > Reject critical CRL distribution points when CRL checking is disabled (#3652)\n  > Preserve the TLS 1.3 cipher policy when a cipher setter fails (#3638)\n  > Fix use-after-free in copied AES key-wrap contexts (#3711)\n  > feat(tool-openssl): Accept x509 -CAcreateserial for OpenSSL compatiility (#3709)\n  > Return the default section from NCONF_get_section(conf, NULL) (#3732)\n  > Update security.md (#3734)\n  > For distrusted SPKIs, change error code to rejected (#3733)\n  > Don't crash on deep copy error in EC_GROUP_new and fix wrong time zone offset calculation (#3731)\n  > test(tool-openssl): Cover dgst -r -binary precedence and clean up temp dir (#3729)\n  > Normalize trailing dot in email name constraints (#3650)\n  > Validate SHAKE MCT length inputs (#3719)\n  > CI: stop giving containers the Docker socket and PR-run credentials (#3572)\n  > Publish a failure metric from the nightly BSD CI run (#3692)\n  > feat(tool-openssl): Add dgst -r coreutils output flag (#3703)\n  > Fix wrapper escape in tool-openssl rand (#3690)\n  > Apply the name-constraints CN fallback to the end-entity certificate only (#3603)\n  > Harden ChaCha20-Poly1305 EVP_CIPHER state handling (#3644)\n  > Pin MySQL CI to 26.10.0 and sort release tags by version (#3714)\n  > Check for int overflow in ASN1_STRING_print_ex and X509_NAME_print_ex output lengths (#3629)\n  > fix(ssl): check handshake state in ClientHello getters (#3602)\n  > [ci] fix: Make s_client TLS 1.1 integration tests self-contained (#3687)\n  > Make NEON SHA3 assembler probe robust to -march overrides in CFLAGS (#3655)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls e7ce83a27..036986196:\n  > fix: suppress clang-tidy warnings for test macros (#6170)\n  > test: compare s2n_psk_parameters fields instead of raw bytes (#6169)\n  > chore: bindings release 0.3.48 (#6168)\n  > perf: reuse hybrid key as standalone classical key share (#6129)\n  > fix: Revert throughput default change (#6167)\n  > ci: add AI security review workflow (#6159)\n  > chore: version bump s2n-tls-metrics-subscriber and s2n-tls-metrics-schema (#6165)\n  > fix: (bindings/rust) use as_mut_ptr for recv buffers passed to C (#6158)\n  > fix: Several github actions updates causing CI failures (#6164)\n  > build(deps): bump cross-platform-actions/action from 1.6.0 to 1.7.0 in /.github/workflows in the all-gha-updates group across 1 directory (#6151)\n  > fix: prevent hostname callback switch when set_config fails (#6144)\n  > fix(bindings): avoid assuming receive buffers are initialized (#6156)\n  > refactor(unit-test): use pipes for synchronization (#6157)\n  > fix: remove SHA-1 signatures from 20261021 security policies (#6153)\n  > ci: add clang-tidy to linting (#6057)\n  > chore: s2n-tls rust bindings release v0.3.47 (#6145)\n  > fix: s2n_set_server_name should clear the previous SNI (#6136)\n  > fix: config build shouldn't reloads system cert after wipe_trust_store (#6134)\n```\n\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-11-18T16:13:26Z",
          "tree_id": "098127a429b80927540105d719e4f89985feb260",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1045f2aa9bef19903219296b71775ac3ebd568a"
        },
        "date": 1795023082854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 567.96455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 476.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 629.27080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.40087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.37392578125,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "e04e457a3e0e176a09ef9eb2c9d0daf1b0204037",
          "message": "Bump url from 2.5.8 to 2.5.9 (RUSTSEC-2026-0592) (#2059)\n\nBumps url to 2.5.9 to fix RUSTSEC-2026-0592, which currently fails the\n`cargo deny` advisories check. The update also bumps form_urlencoded\nfrom 1.2.2 to 1.2.3, which url 2.5.9 requires. Cargo.lock only, no code\nchanges.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-23T12:00:47Z",
          "tree_id": "2979d5f00a9d6c25346bf64e3716bac78c517524",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e04e457a3e0e176a09ef9eb2c9d0daf1b0204037"
        },
        "date": 1795438925943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 566.9025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 476.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 629.70283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.5580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.400390625,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "7c2d63e313f921a90896f560f5af002f7e523e26",
          "message": "Run Mountpoint's S3-semantics tests against a local S3 mock server (#2048)\n\nTests that depend on S3 semantics run against `MockClient`, an in-memory\n`ObjectClient`, so they never exercise the production clients. This\nchange adds a harness to the integration tests of `mountpoint-s3-fs`\nthat runs the production clients against a local `s3-mock-server`, and\nmoves the file system tests in `tests/fs.rs` and the FUSE `_mock` tests\nto it.\n\n### Harness\n\n- `MockServer` (`tests/common/mock_server.rs`) runs the server with one\nin-memory bucket, general purpose or directory. Tests seed and inspect\nthe bucket, count requests and inject faults, and build CRT or SDK\nclients from the configurations it returns. `MockServerGuard` keeps the\nserver running while a component uses it.\n- `s3-mock-server` is a dev-dependency from the new\n`third_party/aws-s3-transfer-manager-rs` submodule, at the transfer\nmanager's 1.0 release (`release-2026-11-18`). Its `s3s` dependency\nbrings in chrono, which is unmaintained, so `deny.toml` ignores that\nadvisory (RUSTSEC-2026-0543). `third_party/UPDATE_SUBMODULES.md`\ndescribes how to update the submodule.\n- `mountpoint-s3-client` gets\n`EndpointConfig::disable_s3express_session_auth`, because the CRT sends\nCreateSession with the bucket only in the host name, which a path-style\nmock server cannot see.\n- `mock_server_session` mounts the file system with the production CRT\nclient against the server, as `s3_session` does against S3.\n\n### Tests moved to the server\n\n- The file system tests in `tests/fs.rs` cover lookups, listings, reads,\nuploads, request counts, archived objects and renames without rename\nsupport. They seed the server with its own `AddObjectRequest`, with the\nsame content and ETags as before.\n- The FUSE tests with a `_mock` suffix, and the other FUSE tests that\nmounted with `mock_session`, now use `mock_server_session` and keep\ntheir names. They include the metrics, manifest, error logger, write\nhandle and direct I/O tests. The reference tests keep using\n`mock_session`.\n- `write_checksums_test` checks exact checksums with HeadObject instead\nof GetObjectAttributes, which the server does not serve.\n`TestClient::head_object` replaces the size, checksum and storage-class\ngetters.\n\nTwo tests needed a different approach:\n\n- `write_too_big_test` checks what happens when a file grows beyond the\nlargest size an atomic upload can write: the write fails with `EFBIG`,\n`fsync` fails with `ENOSPC`, and no object is created. The limit is S3's\n10,000 parts, so with parts of at least 5 MiB the test would have to\nwrite 50 GiB. This change adds a hidden\n`S3FilesystemConfig::max_upload_parts` option for that limit, with S3's\nlimit as the default, and the test sets it to 3 parts of 5 MiB. With\nthat limit, the test also runs against S3.\n- `basic_read_test_mock_large` used to check that each read window\nincrement is aligned to part boundaries. A new unit test of the\nprefetcher's backpressure controller now checks that, so the large read\nruns on the server, and the test sessions lose their\n`fail_on_non_aligned_read_window` option.\n\n### Does this change impact existing behavior?\n\nNo. `max_upload_parts` defaults to S3's limit of 10,000 parts, the value\nMountpoint used before, and Mountpoint's configuration doesn't set it.\n`EndpointConfig::disable_s3express_session_auth` is off by default. The\nrest of the change only modifies tests and documentation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries, and no version change:\n\n- `mountpoint-s3-client`: an entry for\n`EndpointConfig::disable_s3express_session_auth`. The unreleased 0.24.0\nalready bumps the version.\n- `mountpoint-s3-fs`: an entry for\n`S3FilesystemConfig::max_upload_parts`. The new public field is a\nbreaking change, which the unreleased 0.13.0 already allows.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-23T16:14:03Z",
          "tree_id": "050985ecf93ae056fd21b47126606026d05873b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c2d63e313f921a90896f560f5af002f7e523e26"
        },
        "date": 1795454130882,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 568.28896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 475.19130859374997,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 626.8976562500001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.58515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.20205078125,
            "unit": "MiB/s"
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
          "id": "e85a6b4a3b7c8c0128bb543c9a95f75205eea000",
          "message": "Bump taiki-e/install-action from 2.90.3 to 2.90.5 (#2058)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.90.3 to 2.90.5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.90.5</h2>\n<ul>\n<li>\n<p>Update <code>mise@latest</code> to 2026.11.8.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.152.</p>\n</li>\n</ul>\n<h2>2.90.4</h2>\n<ul>\n<li>\n<p>Update <code>yq@latest</code> to 4.54.3.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.40.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.8.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.52.2.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.11.2.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.57.1.</p>\n</li>\n<li>\n<p>Update <code>rafn@latest</code> to 0.1.7.</p>\n</li>\n<li>\n<p>Update <code>osv-scanner@latest</code> to 2.7.1.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.11.7.</p>\n</li>\n<li>\n<p>Update <code>knope@latest</code> to 0.24.0.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.18.1.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 2.1.1.</p>\n</li>\n<li>\n<p>Update <code>grcov@latest</code> to 0.10.8.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.14.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-cyclonedx@latest</code> to 0.5.10.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.27.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-audit@latest</code> to 0.23.0.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.7.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/ab49d3c64680143e184118bed66a46419fc15519\"><code>ab49d3c</code></a>\nRelease 2.90.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/ee9ccb95076769f58ae60ae6817f7155e4755905\"><code>ee9ccb9</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9be7669a8e379e53956a82c8248fd49d07afd75a\"><code>9be7669</code></a>\nUpdate <code>mise@latest</code> to 2026.11.8</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/73f286eaa96fdb427d632cb39be667db68c7d79b\"><code>73f286e</code></a>\nUpdate <code>cargo-nextest@latest</code> to 0.9.152</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/80e4b21c01cb325be3c56d5e5ddcc92cd4606712\"><code>80e4b21</code></a>\nUpdate cargo-machete manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4a76afe23f9e08d2d9550fb56e556444e8611d21\"><code>4a76afe</code></a>\nRelease 2.90.4</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4de5f080085e6d50499669e8a004da1b6c389003\"><code>4de5f08</code></a>\nUpdate <code>yq@latest</code> to 4.54.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/465b61da939dc88f7f325f0789d94bd436880a8f\"><code>465b61d</code></a>\nUpdate <code>vacuum@latest</code> to 0.40.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5b316dad542366d3f66fe845efb654d639e2b376\"><code>5b316da</code></a>\nUpdate <code>uv@latest</code> to 0.13.8</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9fac2d0bccda53d78016e774d21e12241e6e7786\"><code>9fac2d0</code></a>\nUpdate <code>typos@latest</code> to 1.52.2</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.90.3...v2.90.5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-23T16:37:08Z",
          "tree_id": "f7c31c111faafc6b0413cd43409df4b9f3334336",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e85a6b4a3b7c8c0128bb543c9a95f75205eea000"
        },
        "date": 1795456224318,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 566.21279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 477.24794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 625.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 110.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.150390625,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "7b46fd173351979f727692c721f61df1a747e4c0",
          "message": "Test the errno and error metadata of failed metadata requests (#2060)\n\nThis change follows up on #2048, which runs the S3-semantics tests\nagainst a local S3 mock server. A table-driven test in\n`tests/fs/error_mapping.rs` checks how the file system reports S3 error\nresponses to its metadata requests. Each case makes a request on the\nlocal mock server fail with an S3 error response. It then runs a file\nsystem operation that sends the request and checks the errno of the\noperation and the error metadata that the event log records. The table\npins down the errno and the logged error metadata of each failure. A\nchange to the client behind the metadata requests then can't change them\nunnoticed.\n\nThe 21 cases:\n\n* HeadObject: not found, access denied, throttling (`SlowDown`) and an\ninternal error (HTTP 500).\n* ListObjectsV2: for a lookup, no such bucket, access denied, throttling\nand an internal error. For a directory listing, access denied.\n* DeleteObject: no such bucket, access denied, throttling and an\ninternal error.\n* RenameObject: no such key, a failed condition, not implemented, a key\nthat is too long, an invalid request, access denied, throttling and an\ninternal error.\n\n### Does this change impact existing behavior?\n\nNo. The change only adds a test.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. The change only adds a test.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-11-26T15:05:56Z",
          "tree_id": "4d3736db3fe54d396beeb2e81959f9ab19602f0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7b46fd173351979f727692c721f61df1a747e4c0"
        },
        "date": 1795711434980,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 566.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 478.04091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 627.63095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.81787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.61298828125,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "57e62f51966eb06975e633ede5a0fd6a2e94ef1f",
          "message": "Build release packages with cargo-zigbuild on Amazon Linux 2023. (#2045)\n\nMigrate the production image build from Centos7 to AL2023.\nWe're changing to drop Centos as it's been end of life for a significant\nperiod, and AL2023 still receives updates.\n\nWe're using zigbuild rather than a sysroot as zigbuild 'just worked',\nand a sysroot had a dependency on downloading the glibc version from\nCentos vault.\n\n### Does this change impact existing behavior?\n\nNo known breaking changes. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\n### Testing\n\nTried installing using AppStream using Rocky8 with FIPS mode:\n\n- `./mount-s3.rpm` is the latest official build\n- `./mount-s3-1.25.1+unofficial-x86_64.rpm` is the build created using\nGH actions on this PR.\n\n```\n[ImageBuilderAdmin@ip-198-19-112-68 ~]$ sudo yum install ./mount-s3.rpm\nLast metadata expiration check: 0:31:14 ago on Tue 24 Nov 2026 04:16:39 PM UTC.\nDependencies resolved.\n================================================================================\n Package          Architecture   Version             Repository            Size\n================================================================================\nInstalling:\n mount-s3         x86_64         1.25.0-1            @commandline          15 M\n\nTransaction Summary\n================================================================================\nInstall  1 Package\n\nTotal size: 15 M\nInstalled size: 70 M\nIs this ok [y/N]: y\nDownloading Packages:\nRunning transaction check\nTransaction check succeeded.\nRunning transaction test\nError: Transaction test error:\n  package mount-s3-1.25.0-1.x86_64 does not verify: no digest\n\n[ImageBuilderAdmin@ip-198-19-112-68 ~]$ sudo yum install ./mount-s3-1.25.1+unofficial-x86_64.rpm \nLast metadata expiration check: 0:31:21 ago on Tue 24 Nov 2026 04:16:39 PM UTC.\nDependencies resolved.\n================================================================================\n Package        Architecture Version                   Repository          Size\n================================================================================\nInstalling:\n mount-s3       x86_64       1.25.1+unofficial-1       @commandline        15 M\n\nTransaction Summary\n================================================================================\nInstall  1 Package\n\nTotal size: 15 M\nInstalled size: 65 M\nIs this ok [y/N]: y\nDownloading Packages:\nRunning transaction check\nTransaction check succeeded.\nRunning transaction test\nTransaction test succeeded.\nRunning transaction\n  Preparing        :                                                        1/1 \n  Installing       : mount-s3-1.25.1+unofficial-1.x86_64                       1/1 \n  Verifying        : mount-s3-1.25.1+unofficial-1.x86_64                                   1/1 \n\nInstalled:\n  mount-s3-1.25.1+unofficial-1.x86_64                                                                                 \n\nComplete!\n\n```\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-11-26T16:54:40Z",
          "tree_id": "7fc0b4d08802f5b606fbdbb83fa7e856467f5ca6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57e62f51966eb06975e633ede5a0fd6a2e94ef1f"
        },
        "date": 1795715718418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 567.45146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 477.15458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 627.1736328124999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 111.3541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 111.829296875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
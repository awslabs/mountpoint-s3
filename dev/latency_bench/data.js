window.BENCHMARK_DATA = {
  "lastUpdate": 1748867367321,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Latency Benchmark (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78adb5f947e71b1937b349e555867008975eeb5f",
          "message": "Update CRT submodules (#1404)\n\n**What changed and why?**\nThis pull request updates the CRT submodules (aws-c-cal, aws-c-http,\naws-c-io, aws-c-s3, aws-checksums, aws-lc, s2n-tls) to their latest\ntagged releases.\n\nUpdating these ensures we incorporate the latest bug fixes, security\nupdates, and improvements from the AWS CRT libraries, including\naddressing the issue tracked in\n[#1381](https://github.com/awslabs/mountpoint-s3/issues/1381) related to\navoiding unnecessary Content-Length: 0 headers on GET/HEAD/DELETE\nrequests.\n\n### Does this change impact existing behavior?\n\nThere are no breaking changes to the Mountpoint S3 client or filesystem\nbehavior.\nAll tests (cargo test) passed locally after the update, and changelogs\nhave been updated accordingly.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries have been added to:\n\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n\nVersion numbers have also been updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T10:04:49Z",
          "tree_id": "760739eb6345a678f209b068f69aacdb7c1a5ae2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78adb5f947e71b1937b349e555867008975eeb5f"
        },
        "date": 1746786608624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 237.62717455000006,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.926,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.6,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.5921288,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 30.5445179,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 19.7871245,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746800847146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 247.41804204999988,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.89,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.213,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 36.7159247,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 17.2316101,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 18.7485954,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747045600539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 231.94203737999996,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.901,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.532,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 24.977800600000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.441892,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 25.6085887,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1420c5a65b778e6e00d1f4d3bdd01172d0dd622a",
          "message": "Add example for new configuration options and manifest (#1403)\n\nThis adds a new example to Mountpoint, which showcases how MP can be\nconfigured via API. In this example, we use the API to set configuration\noptions parsed from a json file.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-13T08:46:58Z",
          "tree_id": "d54f7eaed4e0def99e69fd5c7618ab94a730c1e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1420c5a65b778e6e00d1f4d3bdd01172d0dd622a"
        },
        "date": 1747127558920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 251.9979483699999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.056,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.901,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.533,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.807148100000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.436331,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.7987566,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747139848430,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 244.45286997,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.888,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.342,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.4878209,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 27.2870026,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 31.051323800000002,
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
          "id": "a1a162a36a9157699656ed97f3b178d345254114",
          "message": "Bump astral-sh/setup-uv from 5 to 6 (#1390)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 5\nto 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0 🌈 activate-environment and working-directory</h2>\n<h2>Changes</h2>\n<p>This version contains some breaking changes which have been gathering\nup for a while. Lets dive into them:</p>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#activate-environment\">Activate\nenvironment</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#working-directory\">Working\nDirectory</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#default-cache-dependency-glob\">Default\n<code>cache-dependency-glob</code></a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#use-default-cache-dir-on-self-hosted-runners\">Use\ndefault cache dir on self hosted runners</a></li>\n</ul>\n<h3>Activate environment</h3>\n<p>In previous versions using the input <code>python-version</code>\nautomatically activated a venv at the repository root.\nThis led to some unwanted side-effects, was sometimes unexpected and not\nflexible enough.</p>\n<p>The venv activation is now explicitly controlled with the new input\n<code>activate-environment</code> (false by default):</p>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv and\nactivate the environment\n  uses: astral-sh/setup-uv@v6\n  with:\n    activate-environment: true\n- run: uv pip install pip\n</code></pre>\n<p>The venv gets created by the <a\nhref=\"https://docs.astral.sh/uv/pip/environments/\"><code>uv\nvenv</code></a> command so the python version is controlled by the\n<code>python-version</code> input or the files\n<code>pyproject.toml</code>, <code>uv.toml</code>,\n<code>.python-version</code> in the <code>working-directory</code>.</p>\n<h3>Working Directory</h3>\n<p>The new input <code>working-directory</code> controls where we look\nfor <code>pyproject.toml</code>, <code>uv.toml</code> and\n<code>.python-version</code> files\nwhich are used to determine the version of uv and python to install.</p>\n<p>It can also be used to control where the venv gets created.</p>\n<pre lang=\"yaml\"><code>- name: Install uv based on the config files in\nthe working-directory\n  uses: astral-sh/setup-uv@v6\n  with:\n    working-directory: my/subproject/dir\n</code></pre>\n<blockquote>\n<p>[!CAUTION]</p>\n<p>The inputs <code>pyproject-file</code> and <code>uv-file</code> have\nbeen removed.</p>\n</blockquote>\n<h3>Default <code>cache-dependency-glob</code></h3>\n<p><a href=\"https://github.com/ssbarnea\"><code>@​ssbarnea</code></a>\nfound out that the default <code>cache-dependency-glob</code> was not\nsuitable for a lot of users.</p>\n<p>The old default</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c7f87aa956e4c323abf06d5dec078e358f6b4d04\"><code>c7f87aa</code></a>\nbump to v6 in README (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/382\">#382</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aadfaf08d64f83cdd98eea14fdab8eb08f73656c\"><code>aadfaf0</code></a>\nChange default cache-dependency-glob (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/352\">#352</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a0f9da6273a171f2d94cce2036eaf5a07fefa23c\"><code>a0f9da6</code></a>\nNo default UV_CACHE_DIR on selfhosted runners (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/380\">#380</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ec4c6916287cf1471f9f803d79ef6a0a04520e81\"><code>ec4c691</code></a>\nnew inputs activate-environment and working-directory (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/381\">#381</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aa1290542ebcd3b6932d825ed2b40807f82b2fdd\"><code>aa12905</code></a>\nchore: update known checksums for 0.6.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/378\">#378</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fcaddda076a8158a712b6d64986baf606c446694\"><code>fcaddda</code></a>\nchore: update known checksums for 0.6.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/377\">#377</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fb3a0a97fac846cb3395265a3087ab94ad3ca2a0\"><code>fb3a0a9</code></a>\nlog info on venv activation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/375\">#375</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-14T08:03:22Z",
          "tree_id": "530db272c1f8159fc1ebb78eef733907b3d97719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1a162a36a9157699656ed97f3b178d345254114"
        },
        "date": 1747211175569,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 239.49115184000001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.926,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.822,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.646073899999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 26.979932899999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.4941533,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e76a2ad831c2f57758fbb69ad69ab5326e807f2b",
          "message": "Add test demonstrating MP behavior with ABAC IAM policies (#1415)\n\nThis adds new tests to demonstrate/document the behavior of Mountpoint\nwhen trying to implement attribute-based access control (ABAC). The\npurpose here is to simply demonstrate the behavior, so that we can\nunderstand current state/options.\n\n### Does this change impact existing behavior?\n\nNo, new test only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T12:54:04Z",
          "tree_id": "18059fa40acc87fb9f2e0c4187f55392a6047f80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e76a2ad831c2f57758fbb69ad69ab5326e807f2b"
        },
        "date": 1747228726255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 247.18621677,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.05,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.247,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.0785937,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.5296284,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.2529025,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6f91f234c6fb939c92d1a115cacaf8f881e17dfe",
          "message": "Update contributing to address updates of 0.x.y patch versions (#1406)\n\nThe guidance on how to update dependencies (and their dependents) was\nunclear. This change updates the contributing guide.\n\n### Does this change impact existing behavior?\n\nDoc change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, doc change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T14:24:29Z",
          "tree_id": "d98c0c4a2becbd973d4a658530432b01325165a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f91f234c6fb939c92d1a115cacaf8f881e17dfe"
        },
        "date": 1747234142034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 250.28133081999997,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.917,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.928,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.990142300000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.192163899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 30.170233,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "09a22a9c025816872a6c6607166ed8ef0f80d3d6",
          "message": "Remove unused read timeout from prefetcher configuration (#1421)\n\nPrefetcher read timeouts were removed in commit 0ca2c771. The motivation\nthere was that timeouts were added due to deadlock issues early in\ndevelopment of Mountpoint, and that they had since been eliminated.\nThere is an open next step to introduce timeouts at a FUSE operation\nlevel which has not yet been completed (see\nhttps://github.com/awslabs/mountpoint-s3/issues/124).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes internal config struct only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-15T09:26:02Z",
          "tree_id": "c016737272a4116b9a05d18a765e2482c621cc16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a22a9c025816872a6c6607166ed8ef0f80d3d6"
        },
        "date": 1747302587884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 234.62339899000006,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.049,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.904,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.797,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 23.8047917,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 19.8934873,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.3008867,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "676157b668a0b76b3387acb3f67d3bce58d2774e",
          "message": "Add errno check to FS mock S3 tests (#1424)\n\nSimple update to the test to check error number. We check this in other\nparts of the code, but this provides integration testing using the mock\nS3 HTTP server tests.\n\nProvides some basic coverage related to #1422.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-16T11:57:29Z",
          "tree_id": "e4a9ba6ba6b16ff193851b4ddef74cc132179ef3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/676157b668a0b76b3387acb3f67d3bce58d2774e"
        },
        "date": 1747398169617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 236.91499838000007,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.851,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.565,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.7142065,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 17.6812054,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.580795600000002,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "172b4a14f53004bec00bca69110a88a895348b22",
          "message": "Propagate S3 response with `PrefetchReadError` (#1411)\n\nFor logging purposes we want S3 response (http_code, error_code,\nerror_message) to be retrievable via `fs::Error` when errors occur\nduring `S3FuseFilesystem::read` operation.\n\nTo achieve that we preserve this information during `PrefetchReadError\n-> fs::Error` conversion in `PrefetchReadError::get_request_failed`\nmethod. We also adjust `mountpoint-s3-client` to parse and store S3\nresponse with the following errors:\n\n1. GetObjectError::NoSuchBucket\n1. GetObjectError::NoSuchKey\n1. GetObjectError::PreconditionFailed\n1. S3RequestError::Forbidden\n1. S3RequestError::ResponseError\n1. S3RequestError::Throttled\n1. S3RequestError::IncorrectRegion\n1. Other `S3RequestError` variants occur before the response arrives and\nthus don't provide metadata\n\n### Does this change impact existing behavior?\n\nIn logs, read errors do not contain redundant token:\n> ..read failed with errno 5: get request failed: ~get object request\nfailed:~ Client error: ..\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAn entry for the `mountpoint-s3-client` changelog and a minor version\nbump (`0.14.1` -> `0.15.0`) to account for changes to error enum\nvariants?\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-19T13:02:01Z",
          "tree_id": "bf7371a714593d161ada9ab239fc11073ae65ba1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/172b4a14f53004bec00bca69110a88a895348b22"
        },
        "date": 1747661242814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 246.99914937000003,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.88,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.132,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.917287100000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.6009298,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.05337,
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
          "id": "5d806d69faf2af77c2484122b5343cc435151047",
          "message": "Add cache block serialization benchmark (#1426)\n\nIntroduce a criterion benchmark to measure the performance of reading a\nsingle cache block. In order to establish a performance baseline, we\nalso include a separate benchmark for reading a file the size of a\nblock.\n\nUpdates `criterion` to `v0.6.0`.\n\nThe benchmark can be run with this command:\n\n```\ncargo bench --bench cache_serialization\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-20T10:03:34Z",
          "tree_id": "4b156d9809f55665e3087cbfc2165601dc21b561",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d806d69faf2af77c2484122b5343cc435151047"
        },
        "date": 1747736955863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 248.45445706999996,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.923,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.023,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.860924899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.781003100000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.4871469,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54a1cb7760e5372f48a87a1d1d69ab37e4433678",
          "message": "Fstab cliargs roundtrip tests (#1414)\n\n### Fstab cliargs roundtrip tests\n\n\n\nThis PR adds a property-based test that ensures roundtrip conversion\nbetween CliArgs and FsTabCliArgs behaves as expected. Specifically, we:\n\nImplemented a custom FstabCompatibleCliArgs strategy for generating\nvalid CliArgs inputs.\n\nSerialise these into fstab-style CLI arguments.\n\nParse them back into CliArgs through the FsTabCliArgs path.\n\nAssert equality with the original input.\n\nThis responds to a prior review comment requesting a test for round-trip\nparsing of CLI arguments.\n\n\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact runtime behavior. It only adds\nnon-breaking test code under #[cfg(test)].\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo changelog entry is required. This is an internal test-only\nenhancement and does not affect functionality or the public interface.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-20T14:20:06Z",
          "tree_id": "7b580da15d6a2e1010a97294d88d6126c47d0ee9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54a1cb7760e5372f48a87a1d1d69ab37e4433678"
        },
        "date": 1747752409226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 245.22356000000002,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.894,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.5,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 24.4202546,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.7514955,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.5299468,
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
          "id": "46f6db41bd261670267fdf6f33a03d9e1ec67d38",
          "message": "Add fstab to GitHub CI (#1419)\n\nAdd integration tests to Github CI\n\nTests passed here:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15135395318/job/42545885483\n\n\n### Does this change impact existing behavior?\n- fstab now forces runs in the background instead of the foreground\n- When ran through fstab, Mountpoint now ignores the `nodev` and\n`nosuid` options, as we default to these capabilities.\n\nNo breaking changes, as fstab is not released.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-20T15:31:26Z",
          "tree_id": "dbe80da7b387e058d50cfdb5620f4d9096b4c015",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46f6db41bd261670267fdf6f33a03d9e1ec67d38"
        },
        "date": 1747756720627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 246.42633339,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.886,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.694,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 34.351004200000006,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.0667212,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.670988,
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
          "id": "8dde952a1813af5a3f2b6412eb3c545205950e8a",
          "message": "Improve safety checks when reading disk cache blocks (#1427)\n\nWhen reading data from the disk cache, we were not checking the declared\nlength of strings (such as the S3 key or ETag) and data, potentially\nleading to allocations for the wrong size in case of corruption of the\ncache block. While the corrupted block would still be detected later by\nthe integrity check and never returned to the user, the read could still\ncause memory overflow in the worst case.\n\nThis change reworks the deserialization of a cache block from disk and\nensures that the length of strings is always within a fixed limit\n(`10000`, using `bincode` configuration) and the data size is checked\nagainst the cache block size (1 MiB).\n\nIn addition, we updated the `bincode` crate to the latest version\n(`2.0.1`).\n\n### Does this change impact existing behavior?\n\nThe change affect the on disk cache format, but it does not result in\nany behavior change for the user.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in the `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-21T14:08:01Z",
          "tree_id": "740da280e29d52dce38b57e11d9fedb998ce7d6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8dde952a1813af5a3f2b6412eb3c545205950e8a"
        },
        "date": 1747838027342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 260.48544399,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.056,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.91,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.771,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.796710100000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 19.2021114,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.6777635,
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
          "id": "f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5",
          "message": "Add \"nofail\" to list of ignored arguments in fstab (#1429)\n\nAdded \"nofail\" to the list of ignored arguments with fstab. Whilst\n`systemd` removed `nofail` when launching Mountpoint, `mount` did not,\nwhich meant `mount -a` could fail when systemd launched Mountpoint fine.\n\n### Does this change impact existing behavior?\n\nYes, Mountpoint no longer crashes if given `nofail` with fstab\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-21T16:09:48Z",
          "tree_id": "5d6a698e7fe81c4d495c45964192fba4cce9a2c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5"
        },
        "date": 1747845293856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 249.4917399100001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.949,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.802,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 33.4394728,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.343376600000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.141826100000003,
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
          "distinct": false,
          "id": "ee6d44ac1096251bd7d18601587f6bc3da3392a4",
          "message": "Update CRT submodules to latest releases (#1430)\n\nUpdate the CRT libraries to the latest releases. \n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..938d0fea:\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..3eedf1ef:\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..689dee3c:\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..52c90d39:\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T08:36:19Z",
          "tree_id": "7c9069bfb532b9dd1630e0e8fa60f3c9fc716208",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ee6d44ac1096251bd7d18601587f6bc3da3392a4"
        },
        "date": 1747990927485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 235.3100859599999,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.841,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.4125627,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 16.5163606,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.6042547,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a861849f21edf0d9c072da8965ea3dc6f37e04e0",
          "message": "Logging errors in a structured format (#1416)\n\nImplement an `FileErrorLogger` and use it to write errors occurring\nduring supported fuse calls in `S3FuseFilesystem`. This logging is not\nenabled in the main executable, only in the `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, only used in the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in the example.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-05-23T09:58:44Z",
          "tree_id": "2b544694b6a1d3c00e5e4410eb80b0df49961517",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a861849f21edf0d9c072da8965ea3dc6f37e04e0"
        },
        "date": 1747995805179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 242.70267862999998,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.922,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.7,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 23.4088125,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.6321775,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.758775699999997,
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
          "id": "4e9fe1d0b9e51f66475620ce990860416739d237",
          "message": "Revert \"Update CRT submodules to latest releases (#1430)\" (#1435)\n\nThis reverts #1430 (commit ee6d44ac1096251bd7d18601587f6bc3da3392a4).\n\nAfter merging the latest change to the CRT we have seen benchmark runs\nfailing (e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15206336823/job/42770250949).\nWe are reverting the change while we further investigate the issue.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nReverts the previous changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T14:43:38Z",
          "tree_id": "148ee1304bd81ee40b0109c6a9704f7670bdabf9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e9fe1d0b9e51f66475620ce990860416739d237"
        },
        "date": 1748012944816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 247.73328206999997,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.932,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.158,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 51.3752712,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.1155174,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.6584608,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7",
          "message": "Prepare crate changelog before releasing up to fs-crate (#1437)\n\nAdjusts the Changelogs for the `mountpoint-s3-fs` crate and it's\ndependencies.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-27T15:09:05Z",
          "tree_id": "e278b19ec0ac48c790b41fc78eaceffeb8135caa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7"
        },
        "date": 1748360081155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 275.43129820999997,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.962,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.112,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.305198,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 20.8415721,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.1219857,
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
          "id": "0344b0b3c4ab0ee04467486bc036cfeebead6d59",
          "message": "Add support for passing S3 URIs as part of the bucket name field (#1434)\n\nAllows invoking Mountpoint with an S3 URI in the 'bucket name' parameter\n\n\n- When using an S3 URI, a prefix can also be supplied. When it is, the\n`--prefix` option cannot be given.\n- Allows using an S3 URI with the `--cache-xz` parameter, but without a\nprefix.\n- Documentation entry for the feature was introduced\n\n### Does this change impact existing behavior?\n\nYes, the 'bucket name' and 'cache-xz' parameters now can take S3 URIs.\nThere are no breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry was made. Needs minor version bump.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T09:32:42Z",
          "tree_id": "0648435f0fd96f4763d631777ba173a0dac7af2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0344b0b3c4ab0ee04467486bc036cfeebead6d59"
        },
        "date": 1748599048862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 230.31264061999994,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.94,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.477,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 27.6371873,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 18.850031899999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.2598486,
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
          "id": "d71b040b53261f0e133b1937adf436bdc2fd489d",
          "message": "Remove fstab feature flag (#1446)\n\nRemoves fstab feature flag\n\n### Does this change impact existing behavior?\n\nYes, enables fstab feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - changelog is included in this PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/1441\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T10:31:47Z",
          "tree_id": "878963d0abc5939147ee13d791f649d8ffd09354",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d71b040b53261f0e133b1937adf436bdc2fd489d"
        },
        "date": 1748602575654,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 226.62635174999997,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.97,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.92,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 23.474959899999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 29.2560112,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.681262699999998,
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
          "id": "8c4ce5abafd546bff3f01a0159ae9561a364abaa",
          "message": "Package fstab file (#1442)\n\nDraft PR because I want to remove the fstab feature outside this PR\n\nAdds `mount.mount-s3` symlink to our rpm and deb installers. This file\nis placed in `/usr/sbin` in the host when installed.\n\n### Does this change impact existing behavior?\n\nYes, a new `mount.mount-s3` file is added during installation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:05:35Z",
          "tree_id": "4ef3452cd65154566194a327cc71965dfea73b0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c4ce5abafd546bff3f01a0159ae9561a364abaa"
        },
        "date": 1748604617985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 237.01420557000006,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.873,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.879,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 31.2605135,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.715952300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.7264865,
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
          "id": "5f962cbdf5c3a5beafb61cebb7549b84db1a1acd",
          "message": "Add documentation for fstab feature (#1441)\n\nAdds documentation for new fstab feature\n\n### Does this change impact existing behavior?\n\nNo\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:53:57Z",
          "tree_id": "72bc0427a52496d37124452a1b6bd474a52d2619",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5f962cbdf5c3a5beafb61cebb7549b84db1a1acd"
        },
        "date": 1748607517009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 235.1948285500001,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.901,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.847,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 25.8149384,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.6077455,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 19.901149699999998,
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
          "id": "da20daa33c97be569113890736ac62049840b8ff",
          "message": "Release v1.18.0 (#1448)\n\nPrepare for v1.18.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T12:14:04Z",
          "tree_id": "e779a1e594bfbd997857e9daa9b2a42ae0351cf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/da20daa33c97be569113890736ac62049840b8ff"
        },
        "date": 1748608716873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 235.85822984999996,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.835,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.952,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 24.9339567,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.6403879,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.063401199999998,
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
          "id": "ca60ca2153664d92d6817a7de07f5bbac4522fbf",
          "message": "Fix changelog for v1.18.0 (#1449)\n\nFixes changelog for v1.18.0 release\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChanged\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T13:33:24Z",
          "tree_id": "8f1d5153ae3d609f1acd010ba43ca2d93e8d69f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca60ca2153664d92d6817a7de07f5bbac4522fbf"
        },
        "date": 1748613439287,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 232.40303862000005,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.897,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.688,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 29.3162795,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.4007566,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.3128627,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2eb41bc55469b66a05881f85ec214b0049268f26",
          "message": "Update prefetcher wait_for_read_window_increment to drain queue (#1425)\n\nWhen reviewing the prefetcher logic, the\n`wait_for_read_window_increment` method call in the S3 part stream was\nidentified as a potential issue. The logic currently pulls only one\nincrement from the queue of read window increments when large amounts of\ndata are being fetched. Today, this is likely not to cause an issue as\nthe read increments are much larger than the size of the parts emitted\nby `part_stream`. However, it would cause issues if there were changes\nhere in future that resulted in increments smaller than those parts.\n\nThis change updates the method to drain all available increments and\nreturn the new value to the caller. This ensures that the backpressure\nmechanism doesn't wait for each part before processing only one window\nincrement event. A new test is added to verify this behavior is\nguaranteed.\n\n### Does this change impact existing behavior?\n\nThere should be no impact, other than fixing logic that currently is\nunlikely to introduce performance changes outside of very large parts\nsizes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there is no known customer impact of the current issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-30T14:47:46Z",
          "tree_id": "ad81345f3d3e005a5b68c3418e9c55fda5b41aaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2eb41bc55469b66a05881f85ec214b0049268f26"
        },
        "date": 1748617923760,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 244.94221795,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.896,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.865,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 23.840723899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.330197,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.2979989,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2d1e773481408c95e9e36dd7588b0c53f7cbbc6",
          "message": "Fstab tests: Ignore empty directory (#1443)\n\nCurrently, our fstab tests can fail if run in an environment where the\noutput dir does not exist.\nThis PR changes the `rm -r` call to a `rm -rf` to ignore cases where the\ndirectory is empty.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-30T14:50:18Z",
          "tree_id": "178e0afe47f45a9481ecd6e6de7e1ddb96bf2084",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b2d1e773481408c95e9e36dd7588b0c53f7cbbc6"
        },
        "date": 1748618029703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 243.12079183999992,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.902,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.671,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 34.9460159,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.0673223,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 20.8240995,
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
          "id": "3fef44e2590d952b828e099803b5334ec909f53b",
          "message": "Fix example for using fstab in user data (#1450)\n\nThe previous example for using fstab with user data failed to install\nMountpoint occasionally on AL2023 hosts, and appears to be impacted by\nthis bug: https://github.com/amazonlinux/amazon-linux-2023/issues/397 &\nhttps://repost.aws/questions/QU_tj7NQl6ReKoG53zzEqYOw/amazon-linux-2023-issue-with-installing-packages-with-cloud-init.\n\nUpdating the example user data script to retry installing Mountpoint if\nit fails.\n\nI tested this by creating 6 AL2023 instances and saw they all started up\nand had Mountpoint available after swapping out the s3 bucket in the\nexample with my s3 bucket\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T15:21:56Z",
          "tree_id": "cea02b98052d7556b88a0cb52122e804903e6234",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fef44e2590d952b828e099803b5334ec909f53b"
        },
        "date": 1748619902463,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 242.05193342999996,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.898,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.921,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 26.120981899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.388840400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.2004385,
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
          "id": "26c8bba25fbd7d09531930f524d5067c530a6564",
          "message": "Update fstab documentation with more examples (#1451)\n\nUpdate fstab documentation with more examples.\nInclude a failed mount example.\n\nRendered docs:\nhttps://github.com/muddyfish/mountpoint-s3/blob/fstab-docs-pr-feedback/doc/CONFIGURATION.md#automatically-mounting-an-s3-bucket-at-boot\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-06-02T12:04:13Z",
          "tree_id": "d637dcea9e15b7e291315d55dfa7847d79a86a90",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26c8bba25fbd7d09531930f524d5067c530a6564"
        },
        "date": 1748867366393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "One Byte File Creation - Average Total Latency",
            "value": 237.23145617000003,
            "unit": "milliseconds"
          },
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.908,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.661,
            "unit": "seconds"
          },
          {
            "name": "time_to_write_one_byte_file",
            "value": 24.0833155,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.658560300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.9794222,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}
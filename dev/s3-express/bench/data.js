window.BENCHMARK_DATA = {
  "lastUpdate": 1784056508519,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
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
          "id": "b05b605e488ec6b65330d2ffc4c1d652c6790e8c",
          "message": "Bump pytest from 8.4.1 to 9.0.3 in /benchmark (#1807)\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 8.4.1 to\n9.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pytest-dev/pytest/releases\">pytest's\nreleases</a>.</em></p>\n<blockquote>\n<h2>9.0.3</h2>\n<h1>pytest 9.0.3 (2026-04-07)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12444\">#12444</a>:\nFixed <code>pytest.approx</code> which now correctly takes into account\n<code>~collections.abc.Mapping</code> keys order to compare them.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13634\">#13634</a>:\nBlocking a <code>conftest.py</code> file using the <code>-p no:</code>\noption is now explicitly disallowed.</p>\n<p>Previously this resulted in an internal assertion failure during\nplugin loading.</p>\n<p>Pytest now raises a clear <code>UsageError</code> explaining that\nconftest files are not plugins and cannot be disabled via\n<code>-p</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13734\">#13734</a>:\nFixed crash when a test raises an exceptiongroup with\n<code>__tracebackhide__ = True</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14195\">#14195</a>:\nFixed an issue where non-string messages passed to <!-- raw HTML omitted\n-->unittest.TestCase.subTest()<!-- raw HTML omitted --> were not\nprinted.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>:\nFixed use of insecure temporary directory (CVE-2025-71176).</p>\n</li>\n</ul>\n<h2>Improved documentation</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13388\">#13388</a>:\nClarified documentation for <code>-p</code> vs\n<code>PYTEST_PLUGINS</code> plugin loading and fixed an incorrect\n<code>-p</code> example.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13731\">#13731</a>:\nClarified that capture fixtures (e.g. <code>capsys</code> and\n<code>capfd</code>) take precedence over the <code>-s</code> /\n<code>--capture=no</code> command-line options in <code>Accessing\ncaptured output from a test function\n&lt;accessing-captured-output&gt;</code>.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14088\">#14088</a>:\nClarified that the default <code>pytest_collection</code> hook sets\n<code>session.items</code> before it calls\n<code>pytest_collection_finish</code>, not after.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14255\">#14255</a>:\nTOML integer log levels must be quoted: Updating reference\ndocumentation.</li>\n</ul>\n<h2>Contributor-facing changes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12689\">#12689</a>:\nThe test reports are now published to Codecov from GitHub Actions.\nThe test statistics is visible <a\nhref=\"https://app.codecov.io/gh/pytest-dev/pytest/tests\">on the web\ninterface</a>.</p>\n<p>-- by <code>aleguy02</code></p>\n</li>\n</ul>\n<h2>9.0.2</h2>\n<h1>pytest 9.0.2 (2025-12-06)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13896\">#13896</a>:\nThe terminal progress feature added in pytest 9.0.0 has been disabled by\ndefault, except on Windows, due to compatibility issues with some\nterminal emulators.</p>\n<p>You may enable it again by passing <code>-p terminalprogress</code>.\nWe may enable it by default again once compatibility improves in the\nfuture.</p>\n<p>Additionally, when the environment variable <code>TERM</code> is\n<code>dumb</code>, the escape codes are no longer emitted, even if the\nplugin is enabled.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13904\">#13904</a>:\nFixed the TOML type of the <code>tmp_path_retention_count</code>\nsettings in the API reference from number to string.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13946\">#13946</a>:\nThe private <code>config.inicfg</code> attribute was changed in a\nbreaking manner in pytest 9.0.0.\nDue to its usage in the ecosystem, it is now restored to working order\nusing a compatibility shim.\nIt will be deprecated in pytest 9.1 and removed in pytest 10.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/a7d58d7a21b78581e636bbbdea13c66ad1657c1e\"><code>a7d58d7</code></a>\nPrepare release version 9.0.3</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/089d98199c253d8f89a040243bc4f2aa6cd5ab22\"><code>089d981</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14366\">#14366</a>\nfrom bluetech/revert-14193-backport</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/8127eaf4ab7f6b2fdd0dc1b38343ec97aeef05ac\"><code>8127eaf</code></a>\nRevert &quot;Fix: assertrepr_compare respects dict insertion order (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14050\">#14050</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14193\">#14193</a>)&quot;</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/99a7e6029e7a6e8d53e5df114b1346e035370241\"><code>99a7e60</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14363\">#14363</a>\nfrom pytest-dev/patchback/backports/9.0.x/95d8423bd...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/ddee02a578da30dd43aedc39c1c1f1aaadfcee95\"><code>ddee02a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>\nfrom bluetech/cve-2025-71176-simple</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/74eac6916fee34726cb194f16c516e96fbd29619\"><code>74eac69</code></a>\ndoc: Update training info (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14298\">#14298</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14301\">#14301</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/f92dee777cfdb77d1c43633d02766ddf1f07c869\"><code>f92dee7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14267\">#14267</a>\nfrom pytest-dev/patchback/backports/9.0.x/d6fa26c62...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/7ee58acc8777c31ac6cf388d01addf5a414a7439\"><code>7ee58ac</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12378\">#12378</a>\nfrom Pierre-Sassoulas/fix-implicit-str-concat-and-d...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/37da870d37e3a2f5177cae075c7b9ae279432bf8\"><code>37da870</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14259\">#14259</a>\nfrom mitre88/patch-4 (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14268\">#14268</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/c34bfa3b7acb65b594707c714f1d8461b0304eed\"><code>c34bfa3</code></a>\nAdd explanation for string context diffs (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14257\">#14257</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14266\">#14266</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pytest-dev/pytest/compare/8.4.1...9.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pytest&package-manager=uv&previous-version=8.4.1&new-version=9.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-18T07:23:24Z",
          "tree_id": "2f703944b7dff2ba473abc4efca2e58cec6155f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b05b605e488ec6b65330d2ffc4c1d652c6790e8c"
        },
        "date": 1776505237834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5293.19609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4739.594921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6082.3353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.92861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.0111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 104.06240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.7361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.98251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.51318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.37392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.68505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6472.03671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.8814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5399.9986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 509.57275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1623.84287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.8107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1635.20576171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1330.44755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.54443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1996.78896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1175.7576171875,
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
          "distinct": true,
          "id": "59cfc3c750549a97d4badf853170cae9b15a4d09",
          "message": "Propagate file handle ID through the prefetcher as a HandleId type (#1809)\n\nWe need to attribute CRT meta-request buffer allocations back to the\nfile handle that originated them. This is a prerequisite for per-handle\nmemory accounting in the `MemoryLimiter`.\n\nThis PR threads the FUSE file handle ID (`fh`) from the point where a\nfile is opened (`FileHandleState::new`) all the way down to\n`GetObjectParams`, where it is available in scope when the CRT\nmeta-request is created. The changes are purely additive data threading\n— no existing logic is altered.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is an internal refactor with no user-visible behavior change\nand no public API impact.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-04-21T13:19:02Z",
          "tree_id": "e28bb22929a99eedebef02b67b2c74728aca85ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59cfc3c750549a97d4badf853170cae9b15a4d09"
        },
        "date": 1776785787084,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5373.95595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4691.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5968.5140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 109.45888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 154.5296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 105.41982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 143.9904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.04033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.696484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.43955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.97705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6352.00458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 550.17080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5252.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 547.6130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1734.3111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.01767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1872.2919921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1376.6015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 134.323828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2064.65185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1182.84013671875,
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
          "distinct": true,
          "id": "572e73b6691d01966f3f10bf1d10b5d649346278",
          "message": "Bump rustls-webpki from 0.103.12 to 0.103.13 (RUSTSEC-2026-0104) (#1814)\n\nBumps rustls-webpki to 0.103.13 to fix a security vulnerability\n(RUSTSEC-2026-0104).\nCargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T12:51:43Z",
          "tree_id": "8f708e74f21aee814535717b6c96bbbdf84117ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/572e73b6691d01966f3f10bf1d10b5d649346278"
        },
        "date": 1776871476485,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5368.17978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4786.11982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5932.79931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 108.30400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 155.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 105.484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 144.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.12919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.98115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.2728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.21015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6666.08173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 554.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5272.53486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 549.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1710.2859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 135.0205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1796.9955078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1474.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 134.55400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1455.88037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.09921875,
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
          "id": "912f18414eb1947362edef64501dfbc21fb92c82",
          "message": "Thread request ID from meta-request options into CRT buffer pool reservations (#1812)\n\nWe need to be able to identify which meta-request a buffer allocation\nbelongs to at the CRT pool layer.\n\nThis PR adds an optional `custom_id` to `MetaRequestOptionsInner` and\nexposes it through `MetaRequest`, which is now passed directly to\n`MemoryPool::get_buffer` / `get_buffer_async`. The identifier can be set\nvia `GetObjectParams::custom_id` and `PutObjectParams::custom_id` in the\nclient crate.\n\n\n### Does this change impact existing behavior?\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nThe `MemoryPool` trait signature changed, but the trait is marked\nexperimental. No user-visible behavior change otherwise.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T14:53:34Z",
          "tree_id": "3bb89fe1d597eb5d271dad40ddae5b16b16ad701",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/912f18414eb1947362edef64501dfbc21fb92c82"
        },
        "date": 1776878156140,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5317.42744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4704.2728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6108.49599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.9146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.61181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.78369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.551171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.4001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.97275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.70126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6531.57001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 547.3654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5307.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 540.40947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1739.14072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 135.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1810.1541015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1374.76025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.2806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2099.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1097.751953125,
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
          "distinct": true,
          "id": "2e31ed5bca353e0b3c912c58769b040e117970dc",
          "message": "Pass HandleId as custom_id in S3 request params (#1815)\n\nConnects the file handle ID to S3 request params, completing the link\nbetween PR #1809 (HandleId through prefetcher) and PR #1812 (custom_id\nthrough CRT buffer pool).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-23T15:11:04Z",
          "tree_id": "10430fff1d46b8832452ee6de66be30c0717b765",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e31ed5bca353e0b3c912c58769b040e117970dc"
        },
        "date": 1776965317426,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5308.1078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4772.8263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6087.6791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 150.3578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.9525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.71533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.06474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.94560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6562.50361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 545.77978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5296.91044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.6697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1710.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.39892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1580.22294921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1531.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.8751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2140.8640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1128.35126953125,
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
          "id": "72e3a504cfb783ca2d76844461fa1c879238ee67",
          "message": "bench: Add memory-limited FIO benchmarks with breach detection (#1808)\n\n## Summary\n\nExtend the existing FIO throughput benchmarks CI so that each supported\nworkload also runs with Mountpoint built using `--features mem_limiter`\nand mounted with `--max-memory-target=512` (MiB - fixed). Under this\nextra pressure, Mountpoint must stay within the configured budget; the\nnew jobs surface per-test peak memory usage in a GitHub Actions step\nsummary table so regressions/improvements in the memory limiter are easy\nto spot.\n\nNon-latency only. Same FIO job definitions are used for both the regular\nand memory-limited variants.\n\n- The existing `bench` (S3 Standard), `cache-bench`, and S3 Express\n`bench` jobs are extended with a `strategy.matrix` that fans each one\nout to two variants:\n  - `default` — unchanged behaviour.\n- `mem-limited` — builds with `--features mem_limiter`, runs with\n`S3_MAX_MEMORY_TARGET_MIB=512`, and emits an extra GitHub Actions\nsummary table.\n\nThe matrix also drives per-variant job name suffixes, gh-pages chart\nsub-paths, and S3 results sub-prefixes, so the two variants don't\ncollide.\n- New `.github/actions/scripts/render-mem-summary.sh` that renders a\nMarkdown table to `$GITHUB_STEP_SUMMARY` with per-test peak RSS, the\nlimit, a breach flag, and peak reserved memory per area/kind. Gated on\n`matrix.variant == 'mem-limited'`.\n- Shared benchmark scripts (`fs_bench.sh`, `fs_cache_bench.sh`) are now\nparameterised via the `S3_MAX_MEMORY_TARGET_MIB` env variable. When set,\nthey:\n  - Build with `--features mem_limiter`.\n  - Mount with `--max-memory-target=<N>`.\n- Ask `mount-s3-log-analyzer` for an additional JSON file via\n`--mem-limit-mib=<N> --extra-metrics-out=<PATH>`.\n\n  When unset, behaviour is unchanged.\n- `mount-s3-log-analyzer` gains two optional flags, `--mem-limit-mib`\nand `--extra-metrics-out`, wired together with `clap`'s `requires` so\neither both are set or neither. When both are set, the analyzer also\nparses Mountpoint metric log lines for:\n  - `mem.bytes_reserved[area=prefetch]`\n  - `mem.bytes_reserved[area=upload]`\n  - `pool.reserved_bytes[kind=get_object]`\n  - `pool.reserved_bytes[kind=put_object]`\n\nand writes JSON with the test name, peak RSS in MiB, memory limit in\nMiB, a `breached = peak_rss_mib\n\n## Example GitHub Actions summary\n\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/24720419069\n\n```\n| Test | Peak RSS (MiB) | Memory Limit (MiB) | Status | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) |\n|---|---|---|---|---|---|---|---|\n| mix_1r4w | 1562.546875 | 512 | ❌ BREACHED | 32 | N/A | 32 | 1376 |\n| rand_read_4t_direct | 22.0625 | 512 | ✅ OK | 68.5 | N/A | 64 | N/A |\n```\n\nNotes:\n- Breach is **non-fatal**: the ❌ is informational; the CI job does not\nfail on a breach.\n- A metric is rendered as `N/A` only when Mountpoint never emitted it in\nthe logs (e.g. `pool.reserved_bytes[kind=get_object]` in a write-only\nworkload). If the metric was emitted with value 0, the column shows\n`0.0`.\n- The `_extra_metrics.json` file is consumed **only** by the memory\nsummary step. It is not fed into the gh-pages benchmark charts.\n\n## Where results are stored\n\nMemory-limited results are stored under distinct `mem_limited` sub-paths\nso they don't collide with the existing charts:\n\n| Workload | Throughput chart path | Peak-memory chart path |\n\n|---------------------------------|-----------------------------------------------|-------------------------------------------------------------|\n| S3 Standard throughput | `dev/bench/mem_limited` |\n`dev/bench/mem_limited/peak_mem_usage` |\n| S3 Standard cache | `dev/cache_bench/mem_limited` |\n`dev/cache_bench/mem_limited/peak_mem_usage` |\n| S3 Express One Zone throughput | `dev/s3-express/bench/mem_limited` |\n`dev/s3-express/bench/mem_limited/peak_mem_usage` |\n\n## Why a separate `_extra_metrics.json`?\n\nThe existing `<test>_peak_mem.json` follows the `{name, value, unit}`\nschema required by `benchmark-action/github-action-benchmark` and feeds\nthe gh-pages charts. Adding more fields there would pollute the charts\nfor non-memory-limited runs. Keeping the file separate lets each\nconsumer (benchmark-action vs. GH Actions summary) receive only what it\nneeds.\n\n### Does this change impact existing behavior?\n\nNo - adding new benchmarks only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-24T14:24:02Z",
          "tree_id": "ecd9198213eb3e1fb01aa871847b055e26b111b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/72e3a504cfb783ca2d76844461fa1c879238ee67"
        },
        "date": 1777048869854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5364.126660156249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4747.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5977.525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 111.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 153.21005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 107.894140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 142.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.26884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.7056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.49970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.50244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6553.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 550.46865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5297.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 542.6109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1765.29228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.42431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1501.9728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1443.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.39521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1509.180078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.26484375,
            "unit": "MiB/s"
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
          "id": "f5a6d919db133203e9914477222fed168959c581",
          "message": "Update CRT submodules to latest releases (#1819)\n\nUpdate the CRT submodules to the latest releases.\n\n  Updated libraries:\n  \n  - aws-c-auth: v0.10.0 -> v0.10.1\n  - aws-c-http: v0.10.11 -> v0.10.14\n  - aws-c-io: v0.26.1 -> v0.26.3\n  - aws-c-s3: v0.11.5 -> v0.12.3\n  - aws-lc: v1.69.0 -> v1.72.0 \n  - s2n-tls: v1.7.0 -> v1.7.2\n\nFull CRT changelog:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 5aefd277..fc4b8765:\n  > fix byo crypto (#290)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 0d8e1a93..da535b1b:\n  > Add default cancel error code (#555)\n  > Unified write data API (#552)\n  > Support on_h2_remote_end_stream (#554)\n  > introduce max concurrent streams for stream manager (#553)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io bfb0819d..1ec8081f:\n  > Add default non-pq policy (#796)\n  > Only invoke shutdown callbacks if the setup was successful (#794)\n  > Fix compilation warnings (#795)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 e9d1bde1..a31a6578:\n  > Fix recognition of user provided unknown checksums (#624)\n  > Better checksumming support (#623)\n  > fix the try-trim logic (#621)\n  > Optimize the sizes of buffers requested from mem pool (#563)\n  > Auto - Update S3 Ruleset & Partition (#613)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 37d86461..d50ded59:\n  > Prepare v1.72.0 (#3162)\n  > Make some more half-empty EVP_PKEY states impossible (#3056)\n  > Update target.h to support Loongarch64 ABI1.0 architecture (#3093)\n  > Shard valgrind CI job to avoid GitHub Actions timeout (#3158)\n  > Check RSA-PSS digest algorithms for X509 (#3138)\n  > Lower default SSL peek test rounds and remove CI workarounds (#3155)\n  > Add missing error return for short metadata keys (#3151)\n  > Change ML-KEM PKCS#8 encoding from expanded to seed form (#3149)\n  > Bound ReadConsoleW by stack buffer size (#3154)\n  > Add OPENSSL_INIT_ATFORK compatibility stub (#3134)\n  > Small fixes for RSA_METHOD and EVP_PKEY_derive_set_peer (#3130)\n  > Fix Clang 19 C++ headers and LLVM tool version mismatches on AL2023 (#3157)\n  > Fix Clang 19 C++ header detection on AL2023 aarch64 (#3152)\n  > Fix Clang 19 GCC runtime detection on AL2023 aarch64 (#3150)\n  > Increase SSL test runner idle timeout for FreeBSD CI (#3144)\n  > Harden OCSP response printing and fix integer overflow in `x509v3_bytes_to_hex` (#3127)\n  > Update PyOpenSSL patch w/ PR #2897 (#3145)\n  > Fix CMake install dir defaults on macOS/Windows when CMAKE_INSTALL_LIBDIR is specified (#3069)\n  > Upgrade CI sanitizer jobs from Clang 15 to Clang 19 (#3148)\n  > Upgrade custom libc++ to LLVM 19 and add sanitizer support to `build_and_test.sh` (#3131)\n  > Rename __AWS_LC_ENSURE to AWS_LC_ENSURE to avoid reserved identifier (#3137)\n  > Add openssl version -a and -p flag support (#3092)\n  > Add NULL pointer validation to ML-KEM EVP encapsulate/decapsulate (#3132)\n  > Add -msg and -servername support to openssl s_client (#3098)\n  > Consistently set outlen to zero for all error paths (#3104)\n  > Fix bind9 integration test for upstream build system changes (#3126)\n  > Hardening fixes for ML-DSA digest mode, XTS key comparison, and urandom fd (#3129)\n  > Fix Windows ARM64 FIPS build; add Clang support for Windows FIPS (#3013)\n  > Fix PostgreSQL integration SSL test failures for upstream error string changes (#3125)\n  > Exclude OCSPIntegrationTest from normal CI test runs (#3128)\n  > openssl-tool CLI: CA cleanup (#3120)\n  > `WIN32_rename`: fix errno mapping and increase retry budget for transient failures (#3124)\n  > Fix entropy source selection for Apple cross-compilation targets (#3113)\n  > Zeroize sensitive stack buffers in DRBG, X25519, Ed25519, ECDSA, ECDH… (#3121)\n  > fipsmodule/ml-kem: Import mlkem-native v1.1.0 (#3090)\n  > Remove redundant definitions (#3118)\n  > Fix intermittent `WIN32_rename` failures in `openssl ca` CLI tool due to transient file locks (#3100)\n  > Add Optimized and HOL Light verified AVX2 Keccak x4 (#3020)\n  > Add SSL_use_cert_and_key for per-connection cert/key setting (#3114)\n  > Reject point at infinity in EC_KEY_set_public_key (#3101)\n  > Fix CRL distribution point scope check logic in crl_crldp_check (#3105)\n  > Fix CN fallback handling in name constraints checking (#3107)\n  > BoringSSL: Const-correct the kPrintMethods table and Update citations from RFC 3447 to RFC 8017 (#3026)\n  > Prepare v1.71.0 (#3102)\n  > Use explicit check for X509 path length (#3080)\n  > Fix issues in `pass_util.cc` password handling (#3032)\n  > Correct types finished-based APIs for TLS 1.3 (#3087)\n  > Correct purpose setting for OCSP_request_verify (#3089)\n  > Clean up on X509_STORE_CTX_add_custom_crit_oid error paths (#3088)\n  > Fix stale `key_method` pointer after private key switch in `CERT` (#3085)\n  > Fall back to EVP_{marshal,parse} in {i2d,d2i}_{Public,Private}Key (#2897)\n  > Fix race condition in  `new_certs_dir` output path (#3095)\n  > Abort on `RAND_bytes` failure (#3078)\n  > Reject IPv6 literal URIs in name constraint checking (#3045)\n  > More NULL checks in bio_ssl.cc (#3076)\n  > Clean up sensitive stack buffers and minor fixes in PKCS#8 (#3067)\n  > Add bounds checks for `size_t` to `int` truncation in `RSA_METHOD` calls (#3084)\n  > Distribution Packaging Improvements (#3042)\n  > Fix modulewrapper memory leak (#3094)\n  > Harden HMAC error paths: fix resource leaks, state bugs, and missing cleansing (#3081)\n  > Relicense OpenSSL Sources to Apache-2.0, Cleanup Sources and LICENSE file Details (#3091)\n  > Allow zero-length PEM passwords in callback paths (#3073)\n  > Fixes for `PKCS12_set_mac` (#3079)\n  > Prepare v1.70.0 (#3086)\n  > Fix NetBSD AArch64 CPU feature detection on big.LITTLE systems (#3082)\n  > Clean up CLI code (#2927)\n  > Various Small Additions to ACVP Tool (#3024)\n  > Add ACVP Support for KTS-IFC (#3009)\n  > Add ACVP Support for KAS-ECC (#3010)\n  > Fix uninitialized EVP_MD_CTX and harden bn_dup_into (#3033)\n  > Improve type safety and bounds checking in EVP cipher ctrl handlers (#3034)\n  > Add a test that arbitrary curves can be wrapped in EVP_PKEY (#3055)\n  > XOF fixes (#3064)\n  > TLS Transfer Serialization Findings (#3071)\n  > Remove dead declarations in public headers (#3053)\n  > Fix sizeof-on-pointer bugs in FIPS assertion failure messages (#3074)\n  > Bump github.com/cloudflare/circl from 1.6.2 to 1.6.3 in /util/vecgen (#3046)\n  > Zeroize intermediate values for ed25519 (#3075)\n  > Use proper function type for different callback types (#3066)\n  > IWYU: guard stdint.h in fips_shared_support.c (#3027)\n  > Fix CMake 4.0 CI jobs (#3068)\n  > Fix PKCS8_encrypt crash when pass is NULL with negative pass_len_in (#3052)\n  > Add INT_MAX bounds check before EVP_CipherUpdate in PKCS8/PKCS12 encryption (#3043)\n  > Cleanup EVP_DH asn1 parsing (#3047)\n  > Fix PKCS12_verify_mac OOB read with invalid password_len (#3051)\n  > Fix PKCS8_decrypt to handle all negative pass_len values (#3039)\n  > Latent memory leaks in KEM_KEY setter functions (#3041)\n  > Fix gRPC integration (#3070)\n  > Add NULL checks for MakeUnique in SSL cipher list inheritance (#3065)\n  > Cache peer CA names on client side after handshake (#2994)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls f5e5e830..a71ea1f9:\n  > fix(ci): update MSRV for extended crates from 1.72 to 1.77 (#5810)\n  > ci: upgrade nix awslc version (#5805)\n  > fix: reject certs with literal-IP CN and no SAN  (#5804)\n  > docs: clean up DRBG references across docs, APIs, and templates (#5789)\n  > chore: remove codeowners (#5797)\n  > fix: Gates rolling hash of all supported hash algorithms to TLS1.2 (#5803)\n  > ci: fix install_awslc_fips script (#5790)\n  > feat(build): Add option to enforce correct libcrypto feature probing (#5579)\n  > fix(aws-lc): Update test for https://github.com/aws/aws-lc/pull/3101 (#5788)\n  > ci: add 'style' to PR title check (#5792)\n  > feat: add strict and interop CNSA 2.0 policies (#5760)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 2 updates (#5787)\n  > docs: clarify integrity protection requirements for connection serialization (#5782)\n  > refactor(rand): deprecate internal DRBG implementation (#5775)\n  > build(deps): bump jidicula/clang-format-action from 4.16.0 to 4.17.0 in /.github/workflows in the all-gha-updates group (#\n5784)\n  > feat(s2n-metric-subscriber): add supported parameters (#5768)\n  > fix(bindings): replace bare as usize casts in Tokio I/O callbacks (#5780)\n  > docs: add comments about sslv3 weaknesses (#5777)\n  > fix: add required metadata for subscriber (#5776)\n  > chore: delete unused s2n_stuffer_alloc_ro functions (#5757)\n  > chore: fix crate name (#5769)\n  > fix: make get_alert idempotent (#5767)\n  > fix: update memory snapshots (#5771)\n  > chore(s2n-tls): v0.3.35 release (#5765)\n  > revert: \"fix: rust alert getter should not modify\" (#5766)\n  > Merge commit from fork\n  > build(deps): bump actions/upload-artifact from 6 to 7 in /.github/workflows in the all-gha-updates group (#5764)\n  > fix: Use logical OR instead of bitwise OR (#5763)\n  > Necessary changes were made in the s2n module to support AIX OS. (#5724)\n  > fix: rust alert getter should not modify (#5756)\n  > docs: Add security reporting policy (#5734)\n  > feat: add clearer errors for hostname, security policy failures (#5761)\n  > refactor: Use strong libcrypto randomness instead of custom random (#5726)\n  > test(integration): add coverage of error types for cert related failures (#5755)\n  > build(deps): update strum requirement from 0.27 to 0.28 in /bindings/rust/standard (#5759)\n  > build(deps): bump baptiste0928/cargo-install from 3.3.2 to 3.4.0 in /.github/workflows in the all-gha-updates group (#5758\n)\n  > refactor(integration): utilities module with cert materials (#5753)\n  > fix(quic support): Wipe buffers after reading post-handshake message (#5750)\n  > ci: trigger PR title check upon edit (#5749)\n  > ci: revert clang-format workflow (#5751)\n  > chore: Delete all code that references Kyber (#5705)\n  > fix(bindings): use max_align_t for allocator alignment (#5745)\n  > fix: Add additional verification checks to ECDSA curves (#5736)\n  > build(deps): bump actions/checkout from 4 to 6 in /.github/workflows in the all-gha-updates group (#5746)\n  > chore: unpin rust integration dependencies (#5748)\n  > fix: add bound check for Yc_length against server DH params (#5737)\n  > fix(bindings): tie ClientHello lifetime to Fingerprint (#5747)\n  > ci: fix conventional commit check (#5744)\n  > chore: unpin rtshark version (#5743)\n  > ci: fix fuzz failure artifact upload (#5742)\n  > feat(metrics): add EMF emitter (#5730)\n  > ci: Add CI guardrail for BoringSSL fork (#5715)\n  > chore: fix sidetrail timings (#5729)\n  > fix(benches): reduce flakiness in s2n-tls-bench daily job (#5728)\n  > ci: temporary replace clang-format-action (#5735)\n  > Add X25519MLKEM768 benchmarks (#5616)\n  > nix: Use rustup toolchain over nix packages rustc in devshell (#5712)\n  > build(deps): bump aws-actions/configure-aws-credentials from 5.1.1 to 6.0.0 in /.github/workflows in the all-gha-updates g\nroup (#5722)\n  > fix: correct calculation of extensions bitfield size (#5719)\n  > feat(bindings): add support for metric aggregation (#5709)\n  > ci: fix typo in readme (#5718)\n  > build(deps): update crabgrind requirement from 0.1 to 0.2 in /tests/regression in the all-cargo-updates group across 1 dir\nectory (#5716)\n  > feat(bindings): expose signature scheme API (#5708)\n  > fix: restrict mldsa signatures based on certificate (#5713)\n```\n\n\nConfirmed the crate size is under the 10MiB limit (8.2MiB compressed)\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2026-04-28T10:31:41Z",
          "tree_id": "b9f89087e1f5de3f537e13f4657da06a242e1c70",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5a6d919db133203e9914477222fed168959c581"
        },
        "date": 1777380535855,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5282.6994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4761.6314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6121.855175781249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.50087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 150.2892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.21689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.33837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.8880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.5455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6855.247265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 543.136328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5338.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 537.5294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2148.74912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.74931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1465.7365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1466.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.096484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.74404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1055.8705078125,
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
          "id": "4a63263681e5003f9774c7a6643329b241cd57ed",
          "message": "Upgrade cargo dependencies (#1818)\n\nUpgrade cargo dependencies. Notes: \n- in order to handle a minor breaking change in the `md5` crate, we now\nalso import the `hex` crate (when building `mountpoint-s3-client` with\nthe `mock` feature).\n- upgrading to the latest `shuttle` version (`0.9.1`) led to a segfault\nin shuttle tests. Reverted while we investigate further.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated version numbers and changelogs to reflected existing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-28T11:59:35Z",
          "tree_id": "878549dc0915f9ba16cce3674d5b4744d213b9a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a63263681e5003f9774c7a6643329b241cd57ed"
        },
        "date": 1777385994985,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5313.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4737.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6009.48671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 114.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 154.70400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 110.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 142.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.9291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.83427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.55458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.1029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6453.09267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 551.30849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5300.08779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 543.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2075.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.2806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1513.523046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1332.58603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1715.7078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.6787109375,
            "unit": "MiB/s"
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
          "id": "1141b9514fdd1bc85fc25683d2b386a5c185f913",
          "message": "Update changelogs to prepare v1.22.3 release (#1821)\n\nUpdates the changelogs prior to  release of MP v1.22.3\n\n### Does this change impact existing behavior?\n\nDoes not impact behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, the change itself is changelog updates\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2026-04-28T15:42:11Z",
          "tree_id": "3fa119ebaef7e2cbcea2e40adff1f71e0ca9f2e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1141b9514fdd1bc85fc25683d2b386a5c185f913"
        },
        "date": 1777399186754,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5350.2576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4763.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6047.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.5546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 154.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.9248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.48828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.723046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6580.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 548.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5270.8111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 542.07724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1807.34248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1506.2208984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1322.63720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.70146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1500.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 974.42392578125,
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
          "id": "0de1563d1a9d383a0f7b7c8bfb595ee19109a589",
          "message": "fix: Use cgroup-aware memory detection in mem limiter (#1806)\n\n**What changed and why?** \n\nReplace direct `sysinfo::System::total_memory()` call with a new\n`effective_total_memory()` helper that respects `cgroup` memory limits.\nThis fixes incorrect memory limit detection when running inside\ncontainers with memory constraints.\n\nChanges:\n- Add `effective_total_memory()` to `mem_limiter` that checks\n`sysinfo`'s `cgroup_limits()` before falling back to total physical\nmemory\n- Library automatically handles cgroup v1 vs v2, path resolution, no\nlimit, Linux vs non-Linux, and other edge cases:\nhttps://github.com/GuillaumeGomez/sysinfo/blob/main/src/unix/linux/cgroup.rs\n- Update `cli.rs` and `benchmark` examples to use the new helper\n- Add CI job to run cgroup memory detection test in a memory-limited\ncontainer\n\n### Does this change impact existing behavior?\n\nNo - it prevents potential OOM in containers with memory constraints.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDone.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-30T16:27:04Z",
          "tree_id": "ce92a20e2db111b1eeb3ed3c3e763ff953907be7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0de1563d1a9d383a0f7b7c8bfb595ee19109a589"
        },
        "date": 1777574664386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5406.1509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4874.72744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6061.271875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.25205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 151.02568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.5607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.4771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.61611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.266015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.40595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6499.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 535.284375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5274.37861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 539.86982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2133.6333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.81611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1562.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1511.776953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.49033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1810.39248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1031.56259765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zxilly@outlook.com",
            "name": "Zxilly",
            "username": "Zxilly"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5fdb9b4bf47a9f7ce6d9f42c89374b89f2dcac8a",
          "message": "Implement content type detection for uploaded objects (#1790)\n\nFixes #632\n\nAdd `--infer-content-type` flag to automatically set Content-Type on\nuploaded objects.\n\nWhen enabled, Mountpoint infers the Content-Type from the uploaded\nobject's file extension.\n\n### Does this change impact existing behavior?\n\nNo breaking change, new behavior will only act if `--infer-content-type`\nwas set.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Zxilly <zxilly@outlook.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2026-05-01T09:16:16Z",
          "tree_id": "65ea1b3e7458bf0974c23d48d46cfb1280d1bb6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5fdb9b4bf47a9f7ce6d9f42c89374b89f2dcac8a"
        },
        "date": 1777635224747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5323.0134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4703.691796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5942.6482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 110.730078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 153.84443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.7837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 142.03857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.42314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.06552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6178.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 548.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5233.4263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 543.019921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2097.71171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 135.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1515.88662109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1335.15947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.11298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2081.75625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1185.11826171875,
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
          "id": "5374a7383d73d41724be545665e393c8c6b81f8c",
          "message": "Upgrade to Rust 1.95 (#1823)\n\nUpgrade Rust toolchain to 1.95 and address new clippy issues in tests\nand mock client.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-01T09:30:25Z",
          "tree_id": "279e1f361fe96d2acd26550318f537d6802677ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5374a7383d73d41724be545665e393c8c6b81f8c"
        },
        "date": 1777636315401,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5314.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4777.85263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6095.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 109.04384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 153.02841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 105.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.208203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.19931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.7939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.187890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.7037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6515.03056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 547.312109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5263.419140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 542.1560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1833.4935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1745.53388671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1359.62900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.0453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1069.569921875,
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
          "id": "4dfad6f5052933c16114365d8adbfdd49e88ebf0",
          "message": "bench: Add incremental-upload throughput benchmark to S3 Express CI (#1813)\n\n## Summary\n\nExtend the existing S3 Express throughput benchmark CI with two new\n`--incremental-upload` variants, folded into the existing `bench` matrix\nintroduced by #1808 rather than as a separate job:\n\n- `incremental-upload` — default memory budget.\n- `incremental-upload-mem-limited` — `--features mem_limiter` +\n`--max-memory-target=512`.\n\nBoth new variants only run the `write` and `mix` fio categories (read is\nskipped since incremental upload is an upload-path feature).\n\nThis PR also isolates `S3_BUCKET_TEST_PREFIX` per matrix leg on the\nthroughput `bench` jobs (S3 Standard and S3 Express). The single\nworkflow-level prefix previously caused all matrix legs to race for the\nsame fio scratch keys in the benchmark bucket. This was latent (silent\noverlapping MPUs) for non-incremental legs but fatal for incremental\nupload: the append pipeline conditions each `PutObject` on the object's\ncurrent ETag, and a sibling leg's `unlink=1` between iterations aborts\nthe upload with `NoSuchKey`.\n\ngh-pages paths follow the `data_path_suffix` convention from #1808:\n\n| Variant | Throughput chart path |\n|---|---|\n| Incremental Upload | `dev/s3-express/bench/incremental_upload` |\n| Incremental Upload, Memory-Limited |\n`dev/s3-express/bench/incremental_upload/mem_limited` |\n\n### Does this change impact existing behavior?\n\nNo - only benchmark prefix changes generating/using new objects.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo — CI-only change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-01T13:20:46Z",
          "tree_id": "de8315ee6937f02426ad4964b0dd3f5ac60320b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dfad6f5052933c16114365d8adbfdd49e88ebf0"
        },
        "date": 1777649918418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5306.46396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4724.543652343749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6048.675,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.60634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 153.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.27041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.84453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.36962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.8052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.49951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6453.70185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 551.24462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5244.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 544.126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2037.28671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.84306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1596.1779296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1351.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.55546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1829.76962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.68662109375,
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
          "id": "586bc9bccb197f59cd516534aa6b0785bff68691",
          "message": "Add stress tests (#1820)\n\n### Summary\n\n- Adds a stress test harness under\n`mountpoint-s3-fs/tests/stress_tests/` with four scenarios\n(`sustained_reads`, `sustained_writes`, `mixed_rw`, `idle_and_churn`)\nthat drive real S3 traffic under the 512 MiB memory limit to shake out\ndeadlocks, per-worker stalls, tail-latency regressions, and memory\nissues.\n- Asserts at teardown: reservation gauges return to zero, per-op p100\nlatency within a configurable ceiling (20sec default), and per-worker\nwatchdog against stalls.\n- Adds a feature flag `stress_tests`, an aggregated metrics recorder in\n`tests/common/test_recorder.rs` and GitHub workflows when a PR is\nlabelled `stress` (similar to benchmarks/performance workflows).\n- Runs on the same hosts as benchmarks\n- Example stress test run and CI logs from my fork:\nhttps://github.com/yerzhan7/mountpoint-s3/actions/runs/25390606910\n- For now set it to run for 15min in CI\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-06T09:05:46Z",
          "tree_id": "4f527d703690bb26732efe4f3278949f0625480d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/586bc9bccb197f59cd516534aa6b0785bff68691"
        },
        "date": 1778066690755,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5316.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4674.880078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6071.341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.30498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.02275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.1453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.23857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.6333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.39736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6467.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 546.76865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5288.06865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.92275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2103.55810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.80849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1471.37783203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1253.0822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1793.24912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.64375,
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
          "id": "1ffbafad9cfbb01715e549665ea74009f896e5c3",
          "message": "Bump slackapi/slack-github-action from 3.0.1 to 3.0.3 (#1824)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 3.0.1 to 3.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>Slack GitHub Action v3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/blob/main/CHANGELOG.md\">slackapi/slack-github-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/45a88b9581bfab2566dc881e2cd66d334e621e2c\"><code>45a88b9</code></a>\nchore: release</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1c0bcf08feaa559a9bcfcc249184e13b136ffa55\"><code>1c0bcf0</code></a>\nchore: release (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/606\">#606</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/66834e4b0cad4cbf09ca680587ad8af71d615d4b\"><code>66834e4</code></a>\nfeat: add instrumentation to address error rates (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/600\">#600</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0fe0f902b9f8da107ca0e1314a388c0f57e20d48\"><code>0fe0f90</code></a>\nbuild(deps): bump <code>@​actions/github</code> from 9.0.0 to 9.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/605\">#605</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5e70597945c255539c5218d4178ed3c7d8188be\"><code>c5e7059</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.15.0 to 7.15.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/604\">#604</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0325526875571a27abcfd2b302453a90871abbff\"><code>0325526</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 2.4.10 to 2.4.13\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/601\">#601</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/900cd3e6fa9d6eacd8a5512ecff230d08e65aec7\"><code>900cd3e</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.12.0 to 24.12.2\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/603\">#603</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/53fdcffeb6e4d34cbdf3276f7beadb0ecc7c9fcd\"><code>53fdcff</code></a>\nbuild(deps): bump <code>@​actions/core</code> from 3.0.0 to 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/602\">#602</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/26856cc7fb2c1c2951483645f5fdc3643dbe96eb\"><code>26856cc</code></a>\nbuild(deps): bump slackapi/slack-github-action from 3.0.1 to 3.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/596\">#596</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/feba1e29702383a5a3cd5136af0559ba10859b04\"><code>feba1e2</code></a>\nci: skip publish step if no release is needed (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/599\">#599</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.1...v3.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=3.0.1&new-version=3.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-06T14:58:44Z",
          "tree_id": "8619b9eaaf71a7012b9095f2120b105979f5d7ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ffbafad9cfbb01715e549665ea74009f896e5c3"
        },
        "date": 1778087932285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5319.83310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4726.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6088.64658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.2916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.20322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.02998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.39208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.7875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.95400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6768.08974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 539.70078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5378.7115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 534.32080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1914.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.57626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1755.0435546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1378.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2089.15849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.369921875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipnd@amazon.co.uk",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "daa8f977c3c98cebf13d41e121746f93479c963f",
          "message": "Add requester process' PID to file system logs (#1718)\n\nAdd requester's PID to Filesystem logs.\nIt also adds an entry point \"New request\" log to all the (supported)\nfilesystem methods as a proxy for tracking incoming requests at FUSER.\n\nThis makes it easier to trace requests dispatched to Mountpoint,\nespecially during workflows using multiple customer processes to make\nrequests concurrently for the same inode(s).\n\nAdditionally, the commit adds/re-orders some other fields in the logs\n(for a few FS methods) to reattain a consistent order of logging request\nparameters.\n\nSample log:\n```\n2025-12-04T14:56:23.330127Z DEBUG ThreadId(11) lookup{req=3 ino=1 name=\"._.\" pid=1860}:head_object{id=3 bucket=\"multinictesting-iad-benchmarksetupbucket07d0221d-jc1kskgzz2gx\" key=\"._.\"}: mountpoint_s3_client::s3_crt_client::head_object: new request\n```\n\nThe commit also does some minor refactoring to name unused method\nparameters more consistent and adhering to Rust guidelines.\n\n### Does this change impact existing behavior?\nNo, only (warn-level and higher) logging change.\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo, and no.\nLogging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-05-07T13:16:23Z",
          "tree_id": "934fa2f4633d1902716efc40ff987db628102113",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/daa8f977c3c98cebf13d41e121746f93479c963f"
        },
        "date": 1778168085891,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5295.033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4764.10400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6057.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.1794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.94609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.075,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.01875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6664.6673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 547.24755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5285.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 543.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2154.82939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.7994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1666.8181640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1488.37646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.84443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1500.4744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.23837890625,
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
          "id": "202d6d6b12cf9d803d93473423909948cd206858",
          "message": "Fix skip ranges in metrics tests (#1828)\n\nThe script testing metrics emissions tries to exercise a mix of\nsequential and \"random\" reads to then verify the expected metrics are\nrecorded. This change simplifies the skip pattern used to drive the\nreads and avoids moving past the size of the test file.\n\nUnrelated minor change: add a random pattern to the temporary folders in\nline with similar scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-13T09:09:34Z",
          "tree_id": "7fc0312432154b49ec27cef34d82433bca472ed5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/202d6d6b12cf9d803d93473423909948cd206858"
        },
        "date": 1778671690311,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5295.73623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4719.09169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6075.40791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.00908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.16396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.18525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.08369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.16162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6647.2087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 543.915625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5289.52568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1669.10126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.1380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1820.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.6419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.96396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1760.44765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1009.98369140625,
            "unit": "MiB/s"
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
          "id": "a87aabd48c517e1fb19c955d48f82c5aa3dc66dd",
          "message": "Rework IAM documentation for directory buckets (#1455)\n\nReworks the section on IAM permissions to be more clearly split between\ngeneral purpose buckets and directory buckets.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-13T09:55:39Z",
          "tree_id": "24496115ba9faf4e672d543874516e9656056ab8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a87aabd48c517e1fb19c955d48f82c5aa3dc66dd"
        },
        "date": 1778674539096,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5352.7720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4777.00810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6113.965625000001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 110.6150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.63271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.3708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.9681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.62998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.98837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.81220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6932.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.7126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5364.25888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 532.75546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2015.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.84873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.0599609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1312.0876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1691.31591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.52978515625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kiron1@gmail.com",
            "name": "kiron1",
            "username": "kiron1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c6a7779eec77dcab7493ffda7292433577524ed",
          "message": "mountpoint-s3-fs: allow mounting on top of autofs (#1762)\n\nAllow mounting on a directory if it is already a mountpoint as long as\nit is of type `autofs`.\nThe fs_type autofs is used by autofs (and therefor SystemD automount\nunits) to enable the automatic mount functionallity.\n\n### Does this change impact existing behavior?\n\nOnly slightly, it enables now to use mount-s3 in combination with auto\nmount.\n\nuser @StarlightSyndrome mentions this problem already in #44, but no\nsolution was provided so far.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nShould be added: mount-s3 can now be used with autofs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Kiron <kiron1@gmail.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nCo-authored-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-06-02T16:53:34Z",
          "tree_id": "17510215aa930a3e166ce1180aefca7f65636758",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c6a7779eec77dcab7493ffda7292433577524ed"
        },
        "date": 1780427589823,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5327.01640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4820.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6121.706445312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.5708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.43076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.120703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.43681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.06708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.954296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.2009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.83212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6554.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.89267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5325.5791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 532.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2031.81591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.8814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1603.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.93017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.6115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1798.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1029.79677734375,
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
          "id": "597ff65c29c5aea35deaacf79ac00b0f77f8e42e",
          "message": "Update CRT submodules to latest releases (excl. aws-lc) (#1842)\n\nUpdate the CRT submodules to the latest releases:\n\n* aws-c-auth v0.10.3\n* aws-c-cal v0.9.14\n* aws-c-common v0.14.0\n* aws-c-compression v0.3.2\n* aws-c-http v0.11.0\n* aws-c-io v0.27.2\n* aws-c-s3 v0.12.6\n* aws-c-sdkutils v0.2.5\n* aws-checksums v0.2.10\n* s2n-tls v1.7.4\n\n**Notes**: \n- aws-lc to be updated separately.\n- crypto libraries are now included on macOS, since s2n is required when\nbuilding aws-c-http/io.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth fc4b87655..4cb7127fc:\n  > Fix error handling for profile provider (#295)\n  > builder -> v0.9.92 and clang-latest (#293)\n  > fix: Remove strict requirement for ECS SessionToken (#292)\n  > imds: fix NULL check (#289)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 1cb941215..9edd8eac2:\n  > Add sanity checking on der empty bit string decoding (#248)\n  > builder -> v0.9.92 and clang-latest (#247)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 95515a8b1..48dd6cdff:\n  > base64 decode fix (#1248)\n  > Cbor decoder resource limits (#1247)\n  > Add helpers to unescape xml strings (#1244)\n  > Couple helpers to read little endian ints from cursor (#1243)\n  > builder -> v0.9.92 (#1242)\n  > Helper to split string on multiple chars (#1241)\n  > Helper to parse negative ints from string (#1240)\n  > Fix tests on big-endian (#1218)\n  > Read signed 32 bit integer (#1239)\n  > ring buffer: avoid NULL dereference (#1238)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http da535b1bf..8aefd899f:\n  > Fix rounding error in hpack resizing (#559)\n  > [fix] h2 double complete (#558)\n  > builder -> v0.9.92 and clang-latest (#557)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 1ec8081f2..9156a8f79:\n  > Option to disable revocation check (#806)\n  > Minor regex fix (#802)\n  > Support s2n-tls on macOS (#799)\n  > builder -> v0.9.92 and clang-latest (#800)\n  > Interleave threads in serialized scheduling test (#797)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 a31a65784..e8bf59aaa:\n  > CopyObject limitations (#641)\n  > fix copy object mpu (#643)\n  > Support s2n-tls on macOS (#640)\n  > Add gpu instance platform info (#637)\n  > fix unknown checksum handling (#633)\n  > Expose max_parts_pending_read as an env variable (#629)\n  > Switch to generic xml unescaping logic (#631)\n  > Auto - Update S3 Ruleset & Partition (#632)\n  > builder -> v0.9.92 and clang-latest (#628)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils f678bda9e..c70418c17:\n  > Align profile name parsing with SDKs (#65)\n  > BDD loader optimizations (#61)\n  > Ingest BDD endpoints (#60)\n  > change stale issue and discussion handling to run once a week (#57)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#55)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls a71ea1f97..eaf2c08a7:\n  > refactor: make MetricLabel more generic (#5912)\n  > refactor(metrics snapshot test): use per-unit measurements (#5910)\n  > test(metrics): add EMF snapshot test (#5909)\n  > fix: enable s2n-tls feature probes on Windows (#5907)\n  > feat(event): add security policy label to handshake event (#5893)\n  > feat(metrics-schema): Seperate out schema serialization from s2n-tls-metrics-subscriber (#5877)\n  > build(deps): update s2n-codec requirement from 0.80 to 0.81 in /bindings/rust/standard (#5900)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 3 updates (#5902)\n  > build(deps): update tabled requirement from 0.20.0 to 0.21.0 in /bindings/rust/standard (#5901)\n  > chore: add new team member (#5899)\n  > ci: set up Windows MSYS2 Github Actions (#5898)\n  > refactor: gate socket support for Linux only (#5895)\n  > feat: add unstable API to allow IP addresses in CN for hostname validation (#5897)\n  > build(deps): bump aws-actions/configure-aws-credentials from 6.1.1 to 6.1.3 in /.github/workflows in the all-gha-updates group across 1 directory (#5894)\n  > feat: add PQ-compatible variants of security policies (#5887)\n  > fix: pad DH shared secret to constant length (#5778)\n  > chore: release metrics subscriber v0.0.3 (#5896)\n  > feat(metrics-subscriber): add operation field to Attribution (#5892)\n  > refactor(metrics-subscriber): cache parsed ClientHello lists (#5884)\n  > feat(serialize): add SSLv3 and TLS 1.0 CBC implicit IV preservation (#5873)\n  > fix: validate pointer parameters in public API functions (#5889)\n  > feat(metrics-subscriber): pluggable synthetic-traffic detector (#5885)\n  > refactor: replace MIN/MAX with S2N_MIN/S2N_MAX to remove <sys/param.h> dependency (#5879)\n  > refactor: gate KTLS module out of Windows build (#5886)\n  > test(metrics-subscriber): add memory profile test (#5883)\n  > refactor: disable MLock on Windows (#5881)\n  > refactor: add iovec definition for Windows (#5880)\n  > chore: bindings release 0.3.37 (#5882)\n  > build(deps): update s2n-codec requirement from 0.79 to 0.80 in /bindings/rust/standard (#5874)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#5878)\n  > feat(metrics-subscriber): Public access to types for deserialization (#5875)\n  > fix(config): Re-complete domain cert map after failed add (#5846)\n  > build(deps): update s2n-codec requirement from 0.78 to 0.79 in /bindings/rust/standard (#5872)\n  > fix: relax cert key preferences requirement (#5860)\n  > refactor(metrics-subscriber): serialize FrozenCounter as a list (#5870)\n  > chore: update fxhash dependency (#5869)\n  > test: document io behaviors (#5864)\n  > refactor(metrics-subscriber): key handshake counters by IANA id (#5858)\n  > ci: update to CBMC 6.9.0 (#5867)\n  > refactor: reset d2i pointer before private key type-hint fallback (#5844)\n  > ci: fix OpenSSL 1.0.2u download in Rust bindings CI (#5868)\n  > test: add integration tests for serialization (#5861)\n  > chore: bump MSRV (#5862)\n  > test: Cert retrieval behavior in Rust bindings (#5857)\n  > docs: clarify OCSP_basic_verify() behavior on delegated responder certs (#5859)\n  > feat: add pure mlkem1024 to CRT PQ policies (#5830)\n  > feat(metrics-subscriber): extract cert parameters from der (#5838)\n  > fix: make get_handshake_type_name procotol aware (#5843)\n  > fix: enable FIPS mode with validated 3+ providers and OpenSSL 3.5+ (#5840)\n  > ci: accept 400 from ebay.com in https_client network test (#5853)\n  > fix: cleanup kem public key in failure case (#5841)\n  > build(deps): update s2n-codec requirement from 0.77 to 0.78 in /bindings/rust/standard (#5839)\n  > ci: fix failed renegotiation tests in the Rust bindings (#5837)\n  > fix: typos in s2n-tls codebase (#5835)\n  > style(bindings): standardize doc links to monospaced format (#5791)\n  > ci: disable go when build awslc (#5833)\n  > chore: release metrics subscriber v0.0.2 (#5828)\n  > refactor(metrics-subscriber): simplify per-resource export flow (#5786)\n  > fix: unchecked NULL return from X509_EXTENSION_get_data (#5825)\n  > revert: \"fix: pin aws crt cpp to resolve general batch failures\" (#5827)\n  > feat(metrics): add compatibility metrics (#5823)\n  > build(deps): bump cross-platform-actions/action from 0.32.0 to 1.0.0 in /.github/workflows in the all-gha-updates group (#5824)\n  > fix: enforce DH public key range (#5818)\n  > fix: pin aws crt cpp to resolve general batch failures (#5822)\n  > build(deps): bump aws-actions/configure-aws-credentials from 6.0.0 to 6.1.0 in /.github/workflows in the all-gha-updates group (#5820)\n  > fix: use uint32_t for partial_client_hello_size to prevent truncation (#5808)\n  > fix: validate ML-DSA key type (#5772)\n  > fix: add NULL check for X509_STORE_new() in s2n_x509_trust_store_add_pem (#5817)\n  > fix: zero the blob in s2n_free_without_wipe before invoking callback (#5811)\n  > fix: add non-negative length check in s2n_utf8_string_from_extension_data (#5816)\n  > chore: bindings release 0.3.36 (#5814)\n  > fix: explicit size checks in s2n_connection_set_session (#5812)\n  > chore: use s2n_add_overflow for arithmetics in s2n_server_key_exchange.c (#5809)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-06-24T14:42:26Z",
          "tree_id": "3362f13a72f72e0578e329876ae956a683410fbb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/597ff65c29c5aea35deaacf79ac00b0f77f8e42e"
        },
        "date": 1782320570982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5241.297558593749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4706.28388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6075.919335937499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.8697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 149.321484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.90244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 138.08623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.92080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.09794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.56875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6533.74189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 540.94609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5279.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 532.77861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2018.51396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.19111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1607.05908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1415.93564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.30869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2105.63662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.20087890625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alecjakerubin@gmail.com",
            "name": "Alec Rubin",
            "username": "alecrubin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e23c5d486d2797c75c9406f586e1b5ff55135c5",
          "message": "Add CRC64NVME option for upload checksums (#1838)\n\nAdds CRC64NVME as a third value (alongside `crc32c` and `off`) for\n`--upload-checksums`, wired end-to-end through the atomic and\nincremental upload paths.\n\nCRC32C keeps using S3's composite (checksum-of-checksums) format on\nmultipart uploads. CRC64NVME uses S3's `FULL_OBJECT` mode (S3 rejects\ncomposite for it), so the object-level checksum is computed by\nMountpoint's local hasher and sent on `CompleteMultipartUpload`. That\nvalue travels through the existing upload-review callback:\n`review_and_complete` returns an `UploadReviewOutcome`\n(`Proceed(Option<UploadChecksum>)` / `Abort`), and the CRT sends the\nreturned checksum on completion. (An earlier revision used a separate\n`FullObjectChecksumHandle`; that's been folded into the review API per\nreview feedback, so there's no handle to populate-before-complete and\nforget.)\n\n### Does this change impact existing behavior?\n\n**Mountpoint end users:** no breaking changes. `crc32c` and `off` keep\nidentical semantics, `crc64nvme` is additive and opt-in, and defaults\nare unchanged. Objects uploaded with `crc64nvme` report `ChecksumType:\nFULL_OBJECT` from `GetObjectAttributes` and a bare-base64\n`x-amz-checksum-crc64nvme` value (no `-<part-count>` suffix), versus\n`COMPOSITE` + `<base64>-<N>` for CRC32C. Downstream tools that strip a\ncomposite suffix or branch on `ChecksumType == COMPOSITE` should handle\nthe FULL_OBJECT case, but only ever see it if a user opts in.\n\n**Library consumers of `mountpoint-s3-client` / `mountpoint-s3-fs`:**\n- `PutObjectTrailingChecksums` carries the algorithm in its variants:\n`Disabled` / `Composite(algo)` / `FullObject(algo)` /\n`ReviewOnly(algo)`.\n- `PutObjectRequest::review_and_complete`'s callback returns\n`UploadReviewOutcome` instead of `bool`; `complete()` is unchanged.\n- `S3FilesystemConfig::upload_checksum_algorithm` changes from\n`Option<ChecksumAlgorithm>` to the narrower\n`Option<UploadChecksumAlgorithm>` (`Crc32c` | `Crc64nvme`).\n\nThese are breaking changes for direct API consumers.\n\n### Notable internals\n\n- A narrower `UploadChecksumAlgorithm` on the FS-config/CLI boundary and\nan `AtomicUploadHasher` newtype make the FS-side checksum paths total,\nremoving the runtime `expect`/guard chains (the `unimplemented!` arm in\n`atomic.rs` stays as defense-in-depth, now unreachable from any\nsanctioned path).\n- In full-object mode the CRT stashes the checksum returned by the\nupload-review callback and sends it on `CompleteMultipartUpload`. This\nrelies on the prepare-step ordering where the upload-review callback\nruns immediately before the full-object checksum callback on the same\nthread.\n- `write_checksums_test` asserts the object-level checksum shape on both\nupload modes: bare base64 for CRC64NVME and for the CRC32C\nappend/incremental path, and `<base64>-<N>` for CRC32C composite\n(multipart). A regression that flipped CRC64NVME to composite, or\nquietly broke CRC32C composite, fails loudly. Runs on the mock and\nreal-S3 matrices.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThe `mountpoint-s3/CHANGELOG.md` entry (new flag value + read-side\nsemantics) is included. Crate version bumps aren't included yet. Happy\nto add once scope is settled:\n- `mountpoint-s3-crt`, `mountpoint-s3`: additive (new public API / CLI\nvalue), patch / minor.\n- `mountpoint-s3-client`, `mountpoint-s3-fs`: breaking API changes,\nminor.\n\n### Local verification\n\n`fmt-check`, `cargo check --workspace --tests`, and clippy pass locally,\nusing a stub `fuse.pc` to satisfy the `mountpoint-s3-fuser` build script\n(macFUSE isn't installed on the dev machine, and `cargo check` doesn't\nlink). Unit tests are green on the non-FUSE crates and the FS upload\npath:\n- `cargo test -p mountpoint-s3-crt --lib`\n- `cargo test -p mountpoint-s3-client --lib --features mock` (incl.\n`crc64nvme_full_object_checksum_lands_on_object`)\n- `cargo test -p mountpoint-s3-fs --lib upload::atomic`\n\nThe FUSE integration tests (`write_checksums_test` and the rest of the\n`fuse_tests` suite) need real libfuse to link, so they run in CI rather\nthan locally. The object-level shape assertion lives in\n`write_checksums_test`, which runs in the mock, `s3_tests`, and\n`s3express_tests` matrices.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alec Rubin <alecjakerubin@gmail.com>",
          "timestamp": "2026-06-29T06:50:38Z",
          "tree_id": "55c6c70fd494bc870f808b2fb9536261c908f267",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e23c5d486d2797c75c9406f586e1b5ff55135c5"
        },
        "date": 1782724284931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5290.6466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4746.44326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5973.97041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.20888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 152.2080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.858203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.98740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.52705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6303.262890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 547.7869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5273.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 543.02294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1714.78408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1880.2744140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.74970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 133.42509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2193.816015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.13330078125,
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
          "id": "4cc7d319c8915ede3e62651e0a541cf30ed50f34",
          "message": "Bump actions/cache from 5 to 6 (#1854)\n\nBumps [actions/cache](https://github.com/actions/cache) from 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/releases\">actions/cache's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update packages, migrate to ESM by <a\nhref=\"https://github.com/Samirat\"><code>@​Samirat</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1760\">actions/cache#1760</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v6.0.0\">https://github.com/actions/cache/compare/v5...v6.0.0</a></p>\n<h2>v5.1.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump <code>@​actions/cache</code> to v5.1.0 - handle read-only cache\naccess by <a\nhref=\"https://github.com/jasongin\"><code>@​jasongin</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1775\">actions/cache#1775</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.1.0\">https://github.com/actions/cache/compare/v5...v5.1.0</a></p>\n<h2>v5.0.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update ts-http-runtime dependency by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1747\">actions/cache#1747</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.0.5\">https://github.com/actions/cache/compare/v5...v5.0.5</a></p>\n<h2>v5.0.4</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add release instructions and update maintainer docs by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1696\">actions/cache#1696</a></li>\n<li>Potential fix for code scanning alert no. 52: Workflow does not\ncontain permissions by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1697\">actions/cache#1697</a></li>\n<li>Fix workflow permissions and cleanup workflow names / formatting by\n<a href=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1699\">actions/cache#1699</a></li>\n<li>docs: Update examples to use the latest version by <a\nhref=\"https://github.com/XZTDean\"><code>@​XZTDean</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1690\">actions/cache#1690</a></li>\n<li>Fix proxy integration tests by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1701\">actions/cache#1701</a></li>\n<li>Fix cache key in examples.md for bun.lock by <a\nhref=\"https://github.com/RyPeck\"><code>@​RyPeck</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1722\">actions/cache#1722</a></li>\n<li>Update dependencies &amp; patch security vulnerabilities by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1738\">actions/cache#1738</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/XZTDean\"><code>@​XZTDean</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1690\">actions/cache#1690</a></li>\n<li><a href=\"https://github.com/RyPeck\"><code>@​RyPeck</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1722\">actions/cache#1722</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.0.4\">https://github.com/actions/cache/compare/v5...v5.0.4</a></p>\n<h2>v5.0.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump <code>@actions/cache</code> to v5.0.5 (Resolves: <a\nhref=\"https://github.com/actions/cache/security/dependabot/33\">https://github.com/actions/cache/security/dependabot/33</a>)</li>\n<li>Bump <code>@actions/core</code> to v2.0.3</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v5...v5.0.3\">https://github.com/actions/cache/compare/v5...v5.0.3</a></p>\n<h2>v.5.0.2</h2>\n<h1>v5.0.2</h1>\n<h2>What's Changed</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/blob/main/RELEASES.md\">actions/cache's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Releases</h1>\n<h2>How to prepare a release</h2>\n<blockquote>\n<p>[!NOTE]\nRelevant for maintainers with write access only.</p>\n</blockquote>\n<ol>\n<li>Switch to a new branch from <code>main</code>.</li>\n<li>Run <code>npm test</code> to ensure all tests are passing.</li>\n<li>Update the version in <a\nhref=\"https://github.com/actions/cache/blob/main/package.json\"><code>https://github.com/actions/cache/blob/main/package.json</code></a>.</li>\n<li>Run <code>npm run build</code> to update the compiled files.</li>\n<li>Update this <a\nhref=\"https://github.com/actions/cache/blob/main/RELEASES.md\"><code>https://github.com/actions/cache/blob/main/RELEASES.md</code></a>\nwith the new version and changes in the <code>## Changelog</code>\nsection.</li>\n<li>Run <code>licensed cache</code> to update the license report.</li>\n<li>Run <code>licensed status</code> and resolve any warnings by\nupdating the <a\nhref=\"https://github.com/actions/cache/blob/main/.licensed.yml\"><code>https://github.com/actions/cache/blob/main/.licensed.yml</code></a>\nfile with the exceptions.</li>\n<li>Commit your changes and push your branch upstream.</li>\n<li>Open a pull request against <code>main</code> and get it reviewed\nand merged.</li>\n<li>Draft a new release <a\nhref=\"https://github.com/actions/cache/releases\">https://github.com/actions/cache/releases</a>\nuse the same version number used in <code>package.json</code>\n<ol>\n<li>Create a new tag with the version number.</li>\n<li>Auto generate release notes and update them to match the changes you\nmade in <code>RELEASES.md</code>.</li>\n<li>Toggle the set as the latest release option.</li>\n<li>Publish the release.</li>\n</ol>\n</li>\n<li>Navigate to <a\nhref=\"https://github.com/actions/cache/actions/workflows/release-new-action-version.yml\">https://github.com/actions/cache/actions/workflows/release-new-action-version.yml</a>\n<ol>\n<li>There should be a workflow run queued with the same version\nnumber.</li>\n<li>Approve the run to publish the new version and update the major tags\nfor this action.</li>\n</ol>\n</li>\n</ol>\n<h2>Changelog</h2>\n<h3>6.1.0</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v6.1.0 to pick up <a\nhref=\"https://redirect.github.com/actions/toolkit/pull/2435\">actions/toolkit#2435\nHandle cache write error due to read-only token</a></li>\n<li>Switch redundant &quot;Cache save failed&quot; warning to debug log\nin save-only</li>\n</ul>\n<h3>6.0.0</h3>\n<ul>\n<li>Updated <code>@actions/cache</code> to ^6.0.1,\n<code>@actions/core</code> to ^3.0.1, <code>@actions/exec</code> to\n^3.0.0, <code>@actions/io</code> to ^3.0.2</li>\n<li>Migrated to ESM module system</li>\n<li>Upgraded Jest to v30 and test infrastructure to be ESM\ncompatible</li>\n</ul>\n<h3>5.0.4</h3>\n<ul>\n<li>Bump <code>minimatch</code> to v3.1.5 (fixes ReDoS via globstar\npatterns)</li>\n<li>Bump <code>undici</code> to v6.24.1 (WebSocket decompression bomb\nprotection, header validation fixes)</li>\n<li>Bump <code>fast-xml-parser</code> to v5.5.6</li>\n</ul>\n<h3>5.0.3</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v5.0.5 (Resolves: <a\nhref=\"https://github.com/actions/cache/security/dependabot/33\">https://github.com/actions/cache/security/dependabot/33</a>)</li>\n<li>Bump <code>@actions/core</code> to v2.0.3</li>\n</ul>\n<h3>5.0.2</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/cache/commit/55cc8345863c7cc4c66a329aec7e433d2d1c52a9\"><code>55cc834</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1768\">#1768</a>\nfrom jasongin/readonly-cache</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/d8cd72f230726cdf4457ebb61ec1b593a8d12337\"><code>d8cd72f</code></a>\nBump <code>@​actions/cache</code> to v6.1.0 - handle cache write error\ndue to RO token</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/2c8a9bd7457de244a408f35966fab2fb45fda9c8\"><code>2c8a9bd</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1760\">#1760</a>\nfrom actions/samirat/esm_migration_and_package_update</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/e9b91fdc3fea7d79165fceb79042ef45c2d51023\"><code>e9b91fd</code></a>\nPrettier fixes</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/e4884b8ff7f92ef6b52c79eda480bbc86e685adb\"><code>e4884b8</code></a>\nRebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/10baf0191a3c426ea0fa4a3253a5c04233b6e18f\"><code>10baf01</code></a>\nFixed licenses</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/e39b386c9004d72a15d864ade8c0b3a702d47a37\"><code>e39b386</code></a>\nFix test mock return order</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/b6928203372a8571ff984c0c883ef3a1adfb0c06\"><code>b692820</code></a>\nPR feedback</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/60749128a44d25d3c520a489e576380cf00ff3f1\"><code>6074912</code></a>\nRebuild dist bundles as ESM to match type:module</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/5a912e8b4af820fa082a0e75cfd2c782f8fbfe0e\"><code>5a912e8</code></a>\nFix lint and jest issues</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/cache/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/cache&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-29T10:50:15Z",
          "tree_id": "d36fe048697ec14bc77921e1c0f040501c63e6a2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4cc7d319c8915ede3e62651e0a541cf30ed50f34"
        },
        "date": 1782738528901,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5355.562890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4749.363574218751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6010.54912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 110.6853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.809765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.77109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.221484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6439.7419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 546.348828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5359.994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 538.4255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.67080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 130.8599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1561.15419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1237.040625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.94931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1953.03671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.33046875,
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
          "distinct": true,
          "id": "02028e3786abb14f1b3655ef1227179b6eed2ced",
          "message": "Bump anyhow to 1.0.103 for RUSTSEC-2026-0190 (#1857)\n\ncargo-deny flagged `anyhow 1.0.102` as unsound under\n[RUSTSEC-2026-0190](https://rustsec.org/advisories/RUSTSEC-2026-0190):\n`Error::downcast_mut` violates borrow rules after `Error::context`,\ncausing undefined behavior. The fix landed in `anyhow 1.0.103`.\n\nThis bumps the lockfile entry via `cargo update -p anyhow`. No source\nchanges required.\n\nFailing run:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/28378845507/job/84075625921\n\n### Does this change impact existing behavior?\n\nNo. This is a transitive lockfile bump within the `1.x` range.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Lockfile-only update with no user-visible behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-06-29T16:41:11Z",
          "tree_id": "e34dd545a44834c2fca51a558ccded99b9653890",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02028e3786abb14f1b3655ef1227179b6eed2ced"
        },
        "date": 1782759648896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5285.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4789.99931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6037.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.49873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 150.53154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.52001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.41689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.94970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.61630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.24716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6313.22294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 546.6125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5356.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 542.79140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1743.4431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 133.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1407.5109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1367.25400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1533.8828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.88388671875,
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
          "id": "6bd6e927eef039d14b2aa245b498c0a0dfbe094d",
          "message": "Update CRT submodules to latest releases (excl. aws-lc) (#1856)\n\nUpdate the CRT submodules to the latest releases:\n\n* aws-c-common v0.14.1\n* aws-c-s3 v0.12.7\n* aws-c-sdkutils v0.2.6\n* s2n-tls v1.7.5\n\nNotes:\n- aws-lc is intentionally left at v1.72.0 (to be updated separately, as\nin #1842).\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 48dd6cdf..2b4c620f:\n  > aws_cbor_decoder_get_unconsumed_length (#1251)\n  > odirect write support (#1245)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 e8bf59aa..9bcccf21:\n  > o_direct download support (#634)\n  > stop forcing connection to be closed (#646)\n  > Support deferred buffer reservations in async-write path (#645)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils c70418c1..727df06f:\n  > [fix] deepcopy user provided name (#66)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls eaf2c08a..f5f6c6c2:\n  > feat(s2n-tls-tokio): add TlsStream::into_parts and from_parts (#5957)\n  > fix: add extern \"C\" guards to unstable API headers (#5954)\n  > feat: add numbered cnsa2 interop policies (#5905)\n  > build(deps): update s2n-codec requirement from 0.82 to 0.83 in /bindings/rust/standard (#5956)\n  > refactor: additional self talk and memory tests to use in memory io pair (#5944)\n  > ci: enable ASAN for Windows tests (#5952)\n  > build(deps): bump the all-gha-updates group across 1 directory with 3 updates (#5955)\n  > fix(metrics): correct cert attribution (#5951)\n  > build: fix CMake compilation issue on macOS x64 (#5923)\n  > test(metrics): pseudo-stability of event APIs (#5949)\n  > chore: update doxygen (#5945)\n  > feat(metrics): cert usage (#5911)\n  > ci: remove codeql python analysis (#5933)\n  > refactor(metrics-schema): centralize metric name definitions for cross-crate reuse (#5937)\n  > refactor: convert 3 fork self talk tests to in memory io pair tests (#5939)\n  > fix: initialize *blocked on early-return paths (#5931)\n  > feat: s2n_connection_get_mode (#5922)\n  > refactor: avoid IP protocol state (#5935)\n  > fix: null-check cert_and_key fields in load helpers (#5932)\n  > fix: initialize *blocked on early-return paths (#5930)\n  > ci: delegate cache retrieval to nix (#5934)\n  > ci: update expected status codes (#5936)\n  > feat(metrics): alert visibility (#5920)\n  > test: configure non fork tests to run on Windows (#5904)\n  > fix: perform fallable checks before interting into domain name map (#5813)\n  > fix: release EVP_PKEY on cert recv error paths (#5926)\n  > ci: bump MSRV for extended workspace (#5929)\n  > ci(aws-kms-tls-auth): pin time crate version (#5928)\n  > build(deps): update s2n-codec requirement from 0.81 to 0.82 in /bindings/rust/standard (#5924)\n  > ci: cache all dev shells (#5925)\n  > ci: remove redundant download in buildspec (#5921)\n  > feat(metrics): add security policy information (#5908)\n  > chore: bindings release 0.3.38 (#5916)\n  > feat(metrics): add visibility into failures (#5913)\n  > ci: fix OpenBSD CI mirror and bump to 7.9 (#5915)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Already updated in previous PR\nhttps://github.com/awslabs/mountpoint-s3/pull/1842\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-06-29T17:44:48Z",
          "tree_id": "cb25671f80f5b56e34f39073cd54b1cd74b91fbc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6bd6e927eef039d14b2aa245b498c0a0dfbe094d"
        },
        "date": 1782763473498,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5297.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4703.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6028.77294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 110.39794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.20009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 107.12158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.49189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.56494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.75517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.8083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6363.39013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 540.4865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5276.98720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 538.714453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2106.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.0900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1651.68037109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1473.43125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.22880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2050.9359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1241.0283203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mvdoster@gmail.com",
            "name": "vladislav doster",
            "username": "vladdoster"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f455c4df12fb70fc16c35cebe6727673bc42841b",
          "message": "fix: correct spelling across markdown and rust files (#1837)\n\nCorrected all typos across project except for `CHANGELOG.md` files. I\nwas reading through the code and I noticed them all over the place.\n\n### Does this change impact existing behavior?\n\nNo. All rust tests pass running them locally.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It is purely spelling fixes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Doster <mvdoster@gmail.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.com>\nCo-authored-by: Renan Magagnin <renanmag@amazon.com>",
          "timestamp": "2026-06-29T20:11:47Z",
          "tree_id": "7d3b2aa9480b36f059d6775562a7234547152c9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f455c4df12fb70fc16c35cebe6727673bc42841b"
        },
        "date": 1782773051838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5341.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4799.401171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6056.18671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.47890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 148.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 137.85322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.6357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.21220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.99228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6620.29638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 546.60400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5278.891015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 536.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1618.6009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.00029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1614.51142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1256.61259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.67763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1654.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.09130859375,
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
          "id": "cb220a1f19e65db1ad711809c6f6c7af0f06c0aa",
          "message": "Upgrade cargo dependencies (#1859)\n\nUpgrade cargo dependencies to the latest releases.\n\nChanges required to adapt to incompatible upgrades (all in test code):\n- switch to the new syntax `#[ctor::ctor(unsafe)]`\n- remove `filetime` dependency in favor of `std`\n- move `regex` usage out of shuttle tests\n- increase stack size in shuttle config for prefetch tests\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-06T12:30:37Z",
          "tree_id": "dd1e69dd4830cef88165263978886ee686b91081",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cb220a1f19e65db1ad711809c6f6c7af0f06c0aa"
        },
        "date": 1783351756982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5287.85,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4737.009570312501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6061.04462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.15224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.05068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.74052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.42275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.65009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.19384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.610546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6512.53271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 547.80107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5354.79619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 541.02978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2136.71416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1843.7498046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1330.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 132.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1849.2884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.09306640625,
            "unit": "MiB/s"
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
          "id": "fc04a2533e8088a48b029903239f09e41e569645",
          "message": "Add 7-day cooldown to GitHub Actions dependency updates (#1863)\n\nAdds a cooldown to Dependabot, so PRs won't be opened until the version\nis at least 7 days old. This provides some mitigation to avoid picking\nup dependencies that may not be suitable due to bug or malicious\nbehavior, as there is time for vetting or bug fixes.\n\nThis still respects Dependabot's cadence - for example, it will run\nweekly still but on that weekly run, the new versions must be at least 7\ndays old to be considered eligible.\n\nNote, security updates do not respect this config and will open a PR as\nsoon as an update is available.\nhttps://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown-\n\nZizmor would report no specification of cooldown (albeit as a pedantic\nfinding): https://docs.zizmor.sh/audits/#dependabot-cooldown\n\n### Does this change impact existing behavior?\n\nThis impacts dependencies updates only - dependencies will only be\nprompted to update if they are at least 7 days old.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-07-06T17:51:09Z",
          "tree_id": "b04a35257370b2449e79b275ac270946aa9f3cbc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc04a2533e8088a48b029903239f09e41e569645"
        },
        "date": 1783368555208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5274.16162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4739.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6021.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.9048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.15068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 99.5033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.13095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.72744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.86875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6452.93935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 538.3865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5345.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 532.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2138.81240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1646.80712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1240.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.45810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1586.4119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.30263671875,
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
          "distinct": true,
          "id": "39c877986e519a6baf498fff50e36d35b3abfd35",
          "message": "Update cargo dependencies to fix RUSTSEC-2026-0204 (#1870)\n\n`cargo deny` (the Licenses CI job) started [failing on all\nbranches](https://github.com/awslabs/mountpoint-s3/actions/runs/28829504535/job/85580842785?pr=1868)\nafter RUSTSEC-2026-0204 was published against `crossbeam-epoch` 0.9.18\n(an invalid pointer dereference in the `fmt::Pointer` impl for\n`Atomic`/`Shared`), pulled in transitively via `crossbeam-deque`. The\nadvisory database is fetched fresh on every run, so this fails by date\nrather than by commit.\n\nRan `cargo update`, which bumps 18 packages to their latest\nsemver-compatible versions -- including `crossbeam-epoch` 0.9.18 ->\n0.9.20, which clears the advisory. All are patch/minor releases (no\nmajor bumps), and `proc-macro-error2` / `proc-macro-error-attr2` drop\nout as they are no longer depended on.\n\n### Does this change impact existing behavior?\n\nNo -- lockfile-only change, all semver-compatible. `cargo deny check`\npasses all sections (advisories, bans, licenses, sources) and `cargo\nbuild --all-targets` succeeds.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency maintenance.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-07-07T15:39:31Z",
          "tree_id": "02b2fb141cd8401677a6e353b7453a24f11e3733",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c877986e519a6baf498fff50e36d35b3abfd35"
        },
        "date": 1783447544673,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5237.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4737.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5921.972070312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.50380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 150.07744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.8619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 139.75576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.33681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.8685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.14267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.1130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6507.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 538.350390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5276.246484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 538.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2035.124609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 134.55283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1575.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1326.40771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 131.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1566.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.67890625,
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
          "id": "b3832bfd7f7f603fbd10556f89ccb7b6e4e8fc99",
          "message": "Use zero-copy request_body for single PutObject uploads (#1882)\n\nBump aws-c-s3 to v0.12.8, which adds the `request_body` meta request\noption to send a body from caller-owned memory with no extra CRT-side\nallocation or copy. Wire it through `MetaRequestOptions::request_body`\nand use it in `put_object_single` (used by incremental/append uploads)\ninstead of an input-stream body, so the CRT uploads directly from the\npooled buffer.\n\nThis removes an unnecessary buffer copy that increased peak memory usage\nduring incremental (append) uploads.\n\n`InputStream` (`io::stream`) and `Message::set_body_stream` are removed\nas they are superseded by `request_body`, and\n`Message`/`MetaRequestOptions` are no longer generic over a lifetime.\n`put_object_single` now requires `contents: impl AsRef<[u8]> + Send +\n'static` so the body can be held until the meta request is fully torn\ndown.\n\nBased on https://github.com/awslabs/mountpoint-s3/pull/1860\n\n### Does this change impact existing behavior?\n\nNo behavior change. Reduces peak memory usage on the incremental\n(append) upload write paths.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-07-14T07:00:59Z",
          "tree_id": "d9e18168baf4dcea3a3ae4fcedc1d9638d13e770",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b3832bfd7f7f603fbd10556f89ccb7b6e4e8fc99"
        },
        "date": 1784034819223,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5318.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4748.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5960.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 147.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 36.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.62197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.26796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6447.2771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 541.42822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5324.48505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 533.040625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1650.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.7251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1484.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1356.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.74814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1429.403515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.18828125,
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
          "id": "a9e71eb8f3e932c708851f97fcf5517804715a02",
          "message": "Improve stability of metrics tests  (#1881)\n\nImprove the stability of the metrics tests by making cleanup in\notel_export.sh more robust. The script now waits for the OTel collector\nto fully exit (time-box for 5s, then SIGKILL) so its port is released\nbefore the next iteration, and then clears the PID so the EXIT trap\ndoesn't re-kill a stale PID. It also logs when cleanup runs after a\nfailure.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-14T16:25:29Z",
          "tree_id": "71d4d09663a2efb229aa6910fee3c9d5c060ff71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a9e71eb8f3e932c708851f97fcf5517804715a02"
        },
        "date": 1784056507243,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5386.229296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4764.75107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6121.36923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.953515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 146.67333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.63408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 136.06884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.55712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.02822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.93037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6554.10986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 539.07001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5342.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 534.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2055.15107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 131.54033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1673.56376953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1373.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.72744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1641.9173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1152.361328125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
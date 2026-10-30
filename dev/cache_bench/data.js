window.BENCHMARK_DATA = {
  "lastUpdate": 1793361016378,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
        "date": 1791294158264,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1363.070703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2139.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 850.5578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1675.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.530078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 428.9509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 271.80556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4313.38095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4167.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1239.6833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1299.321484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1600.69951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1643.2212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1289.93818359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1033.968359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1313.82822265625,
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
          "id": "ababef079bd81106c9dce644f797f5ba3cd34cf9",
          "message": "Update changelog in preparation of `mountpoint-s3-crt` release (#1979)\n\nUpdate the CHANGELOG in order to release the `mountpoint-s3-crt` crate:\n\n* `mountpoint-s3-crt` - `v0.16.2`\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-06T13:40:15Z",
          "tree_id": "6906dac3eecb937361d343b2836ea54618e541be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ababef079bd81106c9dce644f797f5ba3cd34cf9"
        },
        "date": 1791303024546,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1369.0630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2121.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 875.48154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1591.283984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.498828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 430.07109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.4708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 392.004296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4491.37568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4066.29072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1200.097265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1316.5388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1479.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 818.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1180.87490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.83916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1102.68779296875,
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
          "id": "e373e4159606f66ca07edf214a4fead004153e4b",
          "message": "Update release workflow to create a git tag (#1969)\n\nUpdate the release workflow to be manually triggered with the intended\nrelease version number.\nThis now creates and pushes the git tag to the repository, as well as\ncreating a github release.\n\nExample run:\nhttps://github.com/muddyfish/mountpoint-s3/actions/runs/36004359806/job/107648757049\nExample release:\nhttps://github.com/muddyfish/mountpoint-s3/releases/tag/mountpoint-s3-1.24.0\n\n### Does this change impact existing behavior?\n\nChanges release.yml to be ran on a manual workflow rather than on a tag\npush.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-10-07T08:54:40Z",
          "tree_id": "2b0e2a928b10a1af574c80c9c8e222570a20f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e373e4159606f66ca07edf214a4fead004153e4b"
        },
        "date": 1791370906449,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1358.87939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2187.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 854.00341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1600.882421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.218359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.61689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 283.64775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3921.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4083.40693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1280.37080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1221.3826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1408.9458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 775.573046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1160.755078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.34951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1298.961328125,
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
          "id": "1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8",
          "message": "Send If-Match on incremental upload at offset 0 (#1970)\n\nFix inconsistency when during incremental upload we do not attach\n`If-Match` ETag header (when ETag is known) at offset 0.\n\n### Does this change impact existing behavior?\n\nYes. If there was concurrent modification file operation will fail with\nEIO. This now matches behaviour for `offset > 0`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-07T09:38:56Z",
          "tree_id": "2eb04ccdd5ac2df67b8acc94aaefd2a84bda81fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f1c0c523e09b1fb2e460e5cfa6d55dccda493d8"
        },
        "date": 1791374171751,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1369.21796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2204.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 865.6931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1572.32861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 331.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 385.006640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.82724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.7435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3965.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4402.646875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1499.87216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1185.78154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 868.52724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1212.90908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1072.52099609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1145.46953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 905.388671875,
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
          "id": "49ba6c8e067aa1c584a1c7008590e5741235ddb0",
          "message": "Bump taiki-e/install-action from 2.87.17 to 2.87.21 (#1977)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.17 to 2.87.21.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.21</h2>\n<ul>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.129.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.3.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.19.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.13.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.7.0.</p>\n</li>\n</ul>\n<h2>2.87.20</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.18.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.14.0.</p>\n</li>\n</ul>\n<h2>2.87.19</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.146.</p>\n</li>\n</ul>\n<h2>2.87.18</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.84.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.12.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.3.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4cef1412cce204788f482e778a0b9187f9626a29\"><code>4cef141</code></a>\nRelease 2.87.21</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/133135e7fd1570baff8964a044bcf0d2147fc57a\"><code>133135e</code></a>\nUpdate <code>wasm-bindgen@latest</code> to 0.2.129</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8589241798155a8c0c86c7c0ae4f642a90a698e1\"><code>8589241</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/95e5bbc4a58633e12ebefd904f798c1eb76c18f7\"><code>95e5bbc</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/48ce11d4f97676e64a76a3dc4b83a4f59245b702\"><code>48ce11d</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/368e6617a899743920fa751bb5d414b6f0352cc0\"><code>368e661</code></a>\nUpdate wasm-bindgen manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/57f22a457e27d10a13bfcaee43e03dff1c20dedd\"><code>57f22a4</code></a>\nUpdate <code>uv@latest</code> to 0.12.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/888634e2727c1021a94ebfac9a2d266109a366b8\"><code>888634e</code></a>\nUpdate typos manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3bcab01fb9790f533b19647e60396514a9d08f96\"><code>3bcab01</code></a>\nUpdate protoc-gen-connect-openapi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/947e90eb285641d8325cc2d55ae24bd51d5c6b8a\"><code>947e90e</code></a>\nUpdate <code>mise@latest</code> to 2026.9.13</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.17...v2.87.21\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.17&new-version=2.87.21)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-08T11:21:48Z",
          "tree_id": "98f3c2ea75860030fbdf62a8581b5634dd8927aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49ba6c8e067aa1c584a1c7008590e5741235ddb0"
        },
        "date": 1791466139408,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1349.33701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2138.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 849.0046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1648.18408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 299.17197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 439.31728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.8771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 234.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4187.5982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4115.03818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1344.02041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1256.7638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 844.323828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 826.1486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1378.7703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1104.66630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1028.14853515625,
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
          "id": "dc0d76da41691ab73a170345e57a9654bf2c5cc1",
          "message": "Add packaging support for AL2027 (#1980)\n\nAdd support for packaging Mountpoint for Amazon Linux 2027 (currently in\n[Public\nPreview](https://aws.amazon.com/about-aws/whats-new/2026/09/announcing-amazon-linux-2027/)).\n\nThis change only ensures that out packaging scripts are compatible with\n2027 and that the package builds correctly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-09T14:48:44Z",
          "tree_id": "97f6e4b9bc841c7caa5cba20a9a290e1beaf1b6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc0d76da41691ab73a170345e57a9654bf2c5cc1"
        },
        "date": 1791566997271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1339.5138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2088.634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.71025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1646.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 306.09423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 515.26298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.69365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.12275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4054.07705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4500.566015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1372.42470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1277.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 927.48779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 873.56455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1073.43193359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1108.44423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 919.21396484375,
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
          "id": "27f32de4e0b5d97797bf54a00a940c3f3e4065fc",
          "message": "Fix ruff lint failures from new 0.17 default rule set (#1983)\n\nruff 0.17.0 expanded its default lint selection from `E4,E7,E9,F` to\nseveral hundred rules. CI runs `uvx ruff` unpinned, so the release broke\nthe Benchmark and Packaging script checks without any change on our\nside.\n\nApply the autofixes for the newly-enabled rules:\n\n- UP017: use the `datetime.UTC` alias instead of `timezone.utc`.\n- I001: `tomllib` now sorts into the stdlib import block.\n- RUF100: drop the `# noqa: DTZ005`, unused since DTZ is not enabled.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-12T15:31:22Z",
          "tree_id": "39ad30ae58ccd869bda2936dccdb3113dccac4fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27f32de4e0b5d97797bf54a00a940c3f3e4065fc"
        },
        "date": 1791826840450,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1340.40810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2091.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.194921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1594.4615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.75380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.71884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 202.50087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.0998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4040.4513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4312.92646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1493.76806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1223.91279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 856.804296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.301171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1108.5875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1135.6904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 956.33837890625,
            "unit": "MiB/s"
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
        "date": 1791829694180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1404.2759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2235.09541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 867.00908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1638.187109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 471.88876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.23447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.2765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3823.91953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4100.48779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1217.29384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1117.190625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1292.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1270.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1108.2677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1129.3375,
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
          "id": "4f6866c101cae19d1e99a1e89c260c646b4730f6",
          "message": "Bump hydra-core from 1.3.4 to 1.3.7 in /benchmark (#1981)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.4\nto 1.3.7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.7</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state, process-environment mutation, and logging formatters.\nThese checks are not a complete security boundary. (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3442\">#3442</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.6...v1.3.7</a></p>\n<h2>Hydra 1.3.6</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blacklist to Python logging configuration. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6\">https://github.com/hydra-ecosystem/hydra/compare/v1.3.5...v1.3.6</a></p>\n<h2>Hydra 1.3.5</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Warn Hydra 1.3 users relying on Hydra 1.1 behavior (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5\">https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.5</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.7/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.7 (2026-09-14)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Strengthen defense-in-depth checks for configured targets, Python\nruntime state,\nprocess-environment mutation, and logging formatters. These checks are\nnot a\ncomplete security boundary. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3442\">#3442</a>)\n1.3.6 (2026-08-29)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Harden instantiate authorization against unsafe aliases and callable\nresults.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3410\">#3410</a>)</li>\n<li>Apply Hydra's target blocklist to Python logging configuration.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3418\">#3418</a>)</li>\n</ul>\n<h1>1.3.5 (2026-08-06)</h1>\n<h3>API Change (Renames, deprecations and removals)</h3>\n<ul>\n<li>Warn Hydra 1.3 applications that rely on Hydra 1.1 compatibility\nbefore\nupgrading to Hydra 1.4. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3334\">#3334</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81715a5a258ae2657369344f4e3523e5fbabb2af\"><code>81715a5</code></a>\nPrepare hydra-core 1.3.7 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/4720dfca2bde27fa140ec287a05709668fbdf168\"><code>4720dfc</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/27df7550bfd6582a111df148ef96de499474c243\"><code>27df755</code></a>\nPrepare Hydra 1.3.6 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ff3e4dba890c29a21d8c2bb867ee87d37ccf21d0\"><code>ff3e4db</code></a>\nHarden logging target resolution on 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3420\">#3420</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/aa102eaabfa8c93f481ac4938dd7a34203c58d24\"><code>aa102ea</code></a>\nHarden deferred instantiate dispatch on 1.3</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2c82bbb3f39603b336cb852461739fdf7a38798a\"><code>2c82bbb</code></a>\nBackport instantiate target authorization hardening to 1.3 (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3413\">#3413</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/06613cef4c44bf3473b92ecde533487647784b0b\"><code>06613ce</code></a>\nBump Hydra to 1.3.6.dev0</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/51647a2183512bc4e5556842c494e7efdbd75375\"><code>51647a2</code></a>\nRelease Hydra 1.3.5</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/445b0a7505c0c07a7f0bd3dde3baf4811c2fea27\"><code>445b0a7</code></a>\nWarn Hydra 1.3 users relying on 1.1 compatibility (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3347\">#3347</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.4...v1.3.7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.4&new-version=1.3.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-12T16:53:49Z",
          "tree_id": "2cbe058a18d7d75fdf61ce5f778dcc719a9f85bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f6866c101cae19d1e99a1e89c260c646b4730f6"
        },
        "date": 1791832787727,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1404.22001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2060.75673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 833.33828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1641.92607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 379.69423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.55546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4008.30927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4231.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1213.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1314.1802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 870.1876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 787.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1087.0494140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 991.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1410.68916015625,
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
          "id": "2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0",
          "message": "Bump taiki-e/install-action from 2.87.21 to 2.87.26 (#1984)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.21 to 2.87.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.26</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.2.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.3.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.0.0.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 1.21.0.</p>\n</li>\n</ul>\n<h2>2.87.25</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.23.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.2.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.10.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.60.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-semver-checks@latest</code> to 0.51.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.1.</p>\n</li>\n</ul>\n<h2>2.87.24</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.59.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-leptos@latest</code> to 0.3.11.</p>\n</li>\n<li>\n<p>Update <code>cargo-insta@latest</code> to 1.49.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.0.</p>\n</li>\n</ul>\n<h2>2.87.23</h2>\n<ul>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.261.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.22.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.75.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.1.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.28.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.0.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.9.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f7e5d7c961414b23f5b25b2da9294395d08513ad\"><code>f7e5d7c</code></a>\nRelease 2.87.26</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/148b70c8533f32f0f67928d48f6234c224cc2717\"><code>148b70c</code></a>\nUpdate <code>tombi@latest</code> to 1.7.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9856be60d227976dcbe71f75a36a857c6bf3504a\"><code>9856be6</code></a>\nUpdate <code>prek@latest</code> to 0.5.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/246da9e6f2857c0c408cc9b590117673cd74d06e\"><code>246da9e</code></a>\nUpdate <code>mise@latest</code> to 2026.10.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8ec05a70c3252cd782c8c266ee7c57fdfa6b0699\"><code>8ec05a7</code></a>\nUpdate <code>kache@latest</code> to 1.0.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a5ed626e494481910920bbdee016db18f33bf1df\"><code>a5ed626</code></a>\nUpdate <code>hyperfine@latest</code> to 1.21.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/183e4297cca2404691e9380e1307288dced5c82a\"><code>183e429</code></a>\nRelease 2.87.25</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5e241e4899f64a7ba9011f0c3a46f591b6527640\"><code>5e241e4</code></a>\nUpdate <code>uv@latest</code> to 0.12.23</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/126791b91b3ba2303cb850bbdb6943156fe7c71b\"><code>126791b</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/35ba21c90f3f48ed80e4934a494a422e17488157\"><code>35ba21c</code></a>\nUpdate prek manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.21...v2.87.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.21&new-version=2.87.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-13T16:20:46Z",
          "tree_id": "570e1562229933fcc5317a95493cf69da0956e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2095fd7f9cc5611d6bea201ef4b39c73ba7f17b0"
        },
        "date": 1791916945164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1396.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2189.72744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 837.66650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1611.4060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 299.4294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 498.33935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.84814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.7140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4403.68017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4322.87626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1313.9181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1277.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1658.4166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 851.37451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1176.61875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1222.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1314.59609375,
            "unit": "MiB/s"
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
        "date": 1791918412996,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1409.05771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2215.16240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 880.73515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1633.2400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.65478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.80224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 233.37509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.57958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3958.94501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4136.85986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1410.2806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1258.65556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1040.69970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1140.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1111.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1419.23896484375,
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
          "id": "06757889535392d04f03b7b7e676983716700768",
          "message": "Update cargo dependencies (#1987)\n\nIn particular, update `rustls` to 0.23.46 to address\n[RUSTSEC-2026-0347](https://rustsec.org/advisories/RUSTSEC-2026-0347),\n[RUSTSEC-2026-0348](https://rustsec.org/advisories/RUSTSEC-2026-0348),\nand\n[RUSTSEC-2026-0349](https://rustsec.org/advisories/RUSTSEC-2026-0349).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T08:53:11Z",
          "tree_id": "bec0d423d4ab5dd6d059e993e27e4eec237f4346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06757889535392d04f03b7b7e676983716700768"
        },
        "date": 1792062048676,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1381.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2139.29716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 885.461328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1602.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 319.60732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.95556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.320703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 238.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4012.50341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4038.6916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1177.46708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.52744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 855.428515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 738.23330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1078.1302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1140.22783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1355.4734375,
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
          "id": "372450bcac90421f5ab8136550bfac2381b9b081",
          "message": "Add code review guidelines (#1986)\n\nAdd doc/REVIEW_GUIDELINES.md, which collects what reviewers look for in\npull requests: severity, formatting and comment style, PR hygiene,\nchangelog and versioning, file system semantics, errors and logging,\nconcurrency, performance and memory, unsafe code and FFI, configuration\nand metrics, tests, and dependencies. It mostly consolidates existing\nguidance from CONTRIBUTING.md and SEMANTICS.md and conventions already\nfollowed in review.\n\nCONTRIBUTING.md now asks contributors to review their change against the\nguidelines before opening a pull request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T12:52:17Z",
          "tree_id": "8ed667694bc6da4006937c670cf1733765d5f04d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/372450bcac90421f5ab8136550bfac2381b9b081"
        },
        "date": 1792076302161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1320.25400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2156.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 878.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1611.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 369.36142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 509.14267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.125390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.8294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4596.524609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4122.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1305.97978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1239.77373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1499.6046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1079.1095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1225.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1177.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1495.612109375,
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
          "id": "5cc3445f94edb508faf05f2b28ef5f99bcb768af",
          "message": "Bump actions/download-artifact from 8.0.1 to 8.0.2 (#1992)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 8.0.1 to 8.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update the readme by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/473\">actions/download-artifact#473</a></li>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Update <code>@​actions/artifact</code> to 6.3.1 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n<li>Prepare download-artifact v8.0.2 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/493\">actions/download-artifact#493</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2\">https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/9000827ccba6bdab643e8b6fd33ac0654aef8333\"><code>9000827</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/493\">#493</a>\nfrom actions/tunc-d-prepare-download-v8-0-2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e455989ae00f5bdd4054f05d3e972c6bf8a62dc5\"><code>e455989</code></a>\nPrepare download-artifact v8.0.2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/a00b90c4a2f01d73a8c89552caabca6ea3b43137\"><code>a00b90c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/492\">#492</a>\nfrom actions/tunc-d-download-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/29bb7ce6af5345aeab5bb4774ce7249ee3ccc27f\"><code>29bb7ce</code></a>\nUpdate <code>@​actions/artifact</code> to 6.3.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/484a0b528fb4d7bd804637ccb632e47a0e638317\"><code>484a0b5</code></a>\nUpdate the readme (<a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/473\">#473</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=8.0.1&new-version=8.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T09:12:34Z",
          "tree_id": "e6120675afa7de292698398a8e829cee39d135c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cc3445f94edb508faf05f2b28ef5f99bcb768af"
        },
        "date": 1792411187547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.47314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2243.29228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 815.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1572.2435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.415625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 453.964453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 250.58291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.4544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4018.33056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3929.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1295.57880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1272.77373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 763.47080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 830.30498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1049.47880859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1159.52744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 919.58876953125,
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
          "id": "498ab6c47f41a744feca5682bca8644107018cfe",
          "message": "Bump taiki-e/install-action from 2.87.26 to 2.87.28 (#1993)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.26 to 2.87.28.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.28</h2>\n<ul>\n<li>\n<p>Update <code>dprint@latest</code> to 0.62.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.33.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.171.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.75.2.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.7.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.3.</p>\n</li>\n</ul>\n<h2>2.87.27</h2>\n<ul>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.32.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.24.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.3.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.54.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.170.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.4.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.11.1.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.61.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.148.</p>\n</li>\n<li>\n<p>Update <code>cargo-neat@latest</code> to 0.6.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.2.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1168f6810a3cb30a3514bf5756a3b7f0422c6df8\"><code>1168f68</code></a>\nRelease 2.87.28</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/db1b9097c912e3ea0e3e3365a6b0b2b5b8cdb5b5\"><code>db1b909</code></a>\nUpdate <code>tombi@latest</code> to 1.8.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4fe7379362f9253601faa9a874184709db566a9e\"><code>4fe7379</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7443747ad21a8d8cfbf02ce264bd9ca0a8c08a6e\"><code>7443747</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6ff1c9bf2d9b6301b7c5a384025b33eb79addc2b\"><code>6ff1c9b</code></a>\nUpdate kingfisher manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cb40720d9a6bd77ff3b42bd2dbf2a11439dd64ab\"><code>cb40720</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4c1bf3400474f19d88f073ec38c34ddff9950f60\"><code>4c1bf34</code></a>\nUpdate <code>dprint@latest</code> to 0.62.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3dfabf76a32e8b71d8ceaf749b0e53a8c9cc5f2c\"><code>3dfabf7</code></a>\nUpdate <code>vacuum@latest</code> to 0.33.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a80e680a4cfbe929ef82b1402f4d57ce06b6d987\"><code>a80e680</code></a>\nUpdate <code>uv@latest</code> to 0.13.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/10f4ee9837c4e8479cd0cd010e2dc6397f5b1bcd\"><code>10f4ee9</code></a>\nUpdate <code>tombi@latest</code> to 1.8.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.26...v2.87.28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.26&new-version=2.87.28)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:11Z",
          "tree_id": "6a08a364a9df424ceb58b6036ec87f8580f40b96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/498ab6c47f41a744feca5682bca8644107018cfe"
        },
        "date": 1792416091227,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1346.70048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2179.39423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 859.48740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1616.023828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.325,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 400.26611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 230.44931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4246.04970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4332.025,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1450.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1364.913671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 723.262109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 907.805859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1156.076953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1120.9669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1168.89169921875,
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
          "id": "81dc534ca5cc489cf18d5a34d672e1a95d354605",
          "message": "Bump actions/upload-artifact from 7.0.1 to 7.0.2 (#1991)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 7.0.1 to 7.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Updates <code>@​actions/artifact</code> to v6.3.1.</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/821\">actions/upload-artifact#821</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2\">https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cf430e030ddbb5b0abf93d22962f4752f3646cd9\"><code>cf430e0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/822\">#822</a>\nfrom actions/tunc-d-prepare-upload-v7-0-2</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/c2acdedd35a8824a1552c7137f8c18288c3ea469\"><code>c2acded</code></a>\nchore: prepare v7.0.2 release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/4687c1bbaa0a58abb517d90b4bbade6754c80c1a\"><code>4687c1b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/821\">#821</a>\nfrom actions/tunc-d-upload-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8cbe1bebdb858105d8fdd88f81404d4de4595719\"><code>8cbe1be</code></a>\nBump <code>@​actions/artifact</code> to 6.3.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=7.0.1&new-version=7.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:31Z",
          "tree_id": "57a72ec72e13e2df516584a57cedd49fb9101275",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81dc534ca5cc489cf18d5a34d672e1a95d354605"
        },
        "date": 1792419021664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1348.8001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2167.058203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 873.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1629.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 299.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 790.18974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 278.24658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4064.95947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4434.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1327.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1263.721875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 844.77724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 791.571484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1373.7537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1258.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.62890625,
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
          "id": "f21ec47cb4de7dde6478e307dc5d7be51ad48682",
          "message": "Bump astral-sh/setup-uv from 10.2.0 to 10.3.0 (#1990)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.2.0 to 10.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.0 🌈 Add Python architecture selection</h2>\n<h2>Changes</h2>\n<p>This release adds the <code>python-arch</code> input to select a\nPython architecture independently of the Python version. With\n<code>uv</code> 0.13.0 or later, set <code>python-arch: x86_64</code> to\nuse x64 Python on Windows ARM64 runners.</p>\n<p>It also includes embedded checksums for <code>uv</code> releases\nthrough 0.13.0.</p>\n<ul>\n<li>Use macOS 15 runners for tests <a\nhref=\"https://github.com/charliermarsh\"><code>@​charliermarsh</code></a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Add <code>python-arch</code> support <a\nhref=\"https://github.com/zanieb\"><code>@​zanieb</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li>chore: update known checksums for 0.12.24 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li>chore: update known checksums for 0.12.23 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li>chore: update known checksums for 0.12.22 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li>chore: update known checksums for 0.12.21 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li>chore: update known checksums for 0.12.20 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li>chore: update known checksums for 0.12.19 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>chore: update known checksums for 0.12.18 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1065\">#1065</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 @<a\nhref=\"https://github.com/apps/dependabot\">dependabot[bot]</a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/1c37ad07a6a961277cf70c0d37d6f313000f5884\"><code>1c37ad0</code></a>\nchore: update known checksums for 0.13.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b3c9b5fc56ebc90760c43b1ac9552c0d1705d3ca\"><code>b3c9b5f</code></a>\nchore: update known checksums for 0.12.24 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b06acff4b6a41bdd9cdac56507ead0bd7734e757\"><code>b06acff</code></a>\nAdd <code>python-arch</code> support (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c84232ca4fde9b022e20a930bfbbecd386b56fdf\"><code>c84232c</code></a>\nchore: update known checksums for 0.12.23 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/51fdd265d38a27ffcbca0da885510bc6fcc0ff55\"><code>51fdd26</code></a>\nUse macOS 15 runners for tests (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a96208bed1fb5efb8da349c9bcc6cc58af9e7d74\"><code>a96208b</code></a>\nchore: update known checksums for 0.12.22 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/0e3884b860e20d3f4d5daa2347130beb51ccde47\"><code>0e3884b</code></a>\nchore: update known checksums for 0.12.21 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bcf05803b55ef01a5ec6368521ee1b42f97bc438\"><code>bcf0580</code></a>\nchore: update known checksums for 0.12.20 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b92a892142bde7280cd163c2abff341413314f9f\"><code>b92a892</code></a>\nchore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/227a0f6bea25cde3444f52decccf4a18de6635f4\"><code>227a0f6</code></a>\nchore: update known checksums for 0.12.19 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/c18668ad3cf93ea998bef934396af7bb5c839dc7...1c37ad07a6a961277cf70c0d37d6f313000f5884\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.2.0&new-version=10.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:23:37Z",
          "tree_id": "81070e27645e2fa91faa0be8f22b82ca48c14817",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f21ec47cb4de7dde6478e307dc5d7be51ad48682"
        },
        "date": 1792423118946,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1386.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2108.9451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 895.8228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1613.96494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.55,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.2875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.76357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.49814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4318.57451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4563.9306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1341.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1259.156640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 775.77861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 804.7208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1271.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 963.9587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1337.8453125,
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
          "id": "982d5c0933c54c785087407f47bbbef7cbf5e6be",
          "message": "mock-client: align checksum behaviour with S3 (#1988)\n\nAlign the mock client's checksum behaviour with S3:\n\n- Uploads without an additional checksum (PutObject, multipart upload\nwithout trailing checksums, and appends that create a new object) now\nstore S3's default full-object CRC64NVME checksum.\n- An append without a checksum is treated as CRC64NVME. It is accepted\non objects with a CRC64NVME checksum (or none) and rejected with\n`InvalidChecksumType` otherwise.\n- `MockGetObjectResponse::get_object_checksum` now returns\n`DidNotRequestChecksums` unless the request enabled checksum mode,\nmatching `S3CrtClient`. It returns an empty checksum for a ranged GET\nthat does not cover the whole object.\n\n`write_checksums_test` now asserts the default CRC64NVME checksum for\nuploads without checksums, on both the mock and S3, instead of ignoring\nit.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint's file system behaviour. The `MockClient`\n(`mock` feature of `mountpoint-s3-client`) changes behaviour: callers of\n`get_object_checksum` must now enable checksum mode on the GET, and\nobjects uploaded without checksums now report a CRC64NVME checksum.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry describing the mock client\nchanges. The crate is already at an unreleased patch version (0.22.2).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-20T13:34:14Z",
          "tree_id": "1e9aca50df41a802434807c0b686726724371ff7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/982d5c0933c54c785087407f47bbbef7cbf5e6be"
        },
        "date": 1792510906648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1355.856640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2253.00361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 842.03046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1615.0607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 310.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.1080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 224.05625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 441.86064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3886.79990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4519.1771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1249.14619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1215.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 938.35068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1524.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1396.21943359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1177.43115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1231.203515625,
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
          "id": "102cd612d4e87c6f1cdf77aa907215c28ce81df3",
          "message": "Bump rustls-webpki from 0.103.15 to 0.103.16 (RUSTSEC-2026-0382) (#2001)\n\nBumps rustls-webpki to 0.103.16 to fix RUSTSEC-2026-0382 (certificate\nverification may accept distrusted intermediates), which currently fails\nthe `cargo deny` advisories check. Cargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T16:51:43Z",
          "tree_id": "3de7d53a1a0d8d5f55ddac565df00118b7685447",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/102cd612d4e87c6f1cdf77aa907215c28ce81df3"
        },
        "date": 1792611309358,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1396.11455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2106.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 873.4,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1613.308984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.4787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 684.09736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.15810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4348.70947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4382.274609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1286.828515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1286.8833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1186.28486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 836.60830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1286.90908203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1048.440234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1122.5869140625,
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
          "id": "9336fd883f6838b15f19aef80bb0f721b369eed4",
          "message": "Run CI on pushes and PRs to feature branches (#1997)\n\nLong-lived feature branches (`feature/**`) should get the same CI as\n`main`. Tests and the PR integration tests already run on PRs to any\nbranch, but some workflows only run for `main`:\n\n- Crate checks and packaging now also run on PRs to feature branches.\n- Tests, integration tests, crate checks and packaging now also run on\npushes to feature branches, so that each merge into them (including\nmerges from `main`) is tested.\n\nScheduled runs, benchmarks and stress tests stay `main`-only. Benchmarks\nand stress tests are still available on feature-branch PRs through their\nlabels.\n\n### Does this change impact existing behavior?\n\nNo. Runs for `main`, PRs to `main` and the merge queue are unchanged.\nExisting feature branches pick up the new triggers only once they merge\n`main`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T18:44:13Z",
          "tree_id": "5d21527e4ba2bee6e55fc7a8b8cf52fe6f8ec696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9336fd883f6838b15f19aef80bb0f721b369eed4"
        },
        "date": 1792619204187,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1377.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2213.25908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 839.2650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1636.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 309.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 401.0376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 234.67783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4202.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4774.7912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1340.981640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1295.6271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1163.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 793.5091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1067.01552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1271.910546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1106.5958984375,
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
          "id": "fb36799638c268ffd7d7267e936b255e203fe1df",
          "message": "Extract `MockBucket` from `MockClient` (#1989)\n\nExtract the in-memory bucket model of `MockClient` into a new\n`MockBucket`.\n\n`MockBucket` owns the bucket state (objects, in-progress uploads,\noperation counts) and serves HeadObject, ListObjectsV2, DeleteObject and\nRenameObject synchronously. `MockClient` becomes a view over an\n`Arc<MockBucket>` that adds the client-side behaviour: part sizes,\nbackpressure, and the `ObjectClient` interface. A bucket can then be\nshared between a `MockClient` and other in-memory test backends without\ngoing through `ObjectClient`, for example a metadata-only fake for the\nfile system's superblock, so that tests exercising the superblock can\nrun on synchronous operations.\n\nThe configuration is split the same way. `MockBucketConfig` (name,\nlisting order, rename support) builds a `MockBucket`. `MockDataConfig`\n(part size, backpressure, read window checks) configures a `MockClient`\nover an existing bucket with `MockClient::with_bucket`.\n`MockClientConfig` keeps its API and combines both.\n\n### Does this change impact existing behavior?\n\nNo. This only affects test-support code under the `mock` feature of\n`mountpoint-s3-client`. The existing `MockClient` and `MockClientConfig`\nAPIs and their behaviour are unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry for the new public\n`MockBucket`, `MockBucketConfig`, `MockDataConfig`,\n`MockClient::with_bucket` and `MockClient::mock_bucket`. No version\nchange: these are additions, and v0.22.2 is already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T21:21:17Z",
          "tree_id": "b15590ec69e2ff0a11cc962d202eb1c3d68af7dd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb36799638c268ffd7d7267e936b255e203fe1df"
        },
        "date": 1792626972832,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1388.1599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2086.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 895.94072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1576.7240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.17900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 489.7240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 231.294140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 272.01376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4336.40654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4263.95595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1297.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.49833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1572.87529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1318.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1222.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1193.49990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 903.62021484375,
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
          "id": "b36809b56455bf2b1d8c63a7fea9f963a4ee71d3",
          "message": "Narrow the superblock's S3 dependency to a `MetadataClient` interface (#1998)\n\nNarrow the file system's superblock to the S3 metadata operations it\nactually issues, behind a new `MetadataClient` trait, and run the\nsuperblock's slow, deterministic tests (shuttle tests and reftests) on\nan in-memory implementation of it.\n\nThe superblock only issues HeadObject, ListObjectsV2, DeleteObject and\nRenameObject, and only reads a few response fields. `Superblock<OC:\nObjectClient>` becomes `Superblock<M: MetadataClient>`, an interface\nshaped after exactly that: plain request parameters (rename takes\n`overwrite` instead of precondition params), and small result types\n(`HeadInfo`, `ListPage`) with only the fields the superblock uses. Every\n`ObjectClient` implements `MetadataClient` through a blanket\nimplementation that converts its results, so production code paths are\nunchanged.\n\n`MetadataError` classifies the failures the superblock handles\nspecifically (not found, precondition failed, not implemented, key too\nlong) and keeps the client error as its source. It is transparent for\n`Display` and `source()`, and delegates `ProvideErrorMetadata`, so logs\nand error metadata are unchanged. The kinds don't depend on\n`mountpoint-s3-client` error types, so other clients can classify their\nown errors.\n\n`InMemoryMetadata` (new `mock` feature, enabled for the crate's own\ntests) serves the interface synchronously from a `MockBucket` (#1989),\nwhich can be shared with a `MockClient` serving the data path.\nOperations complete on the first poll, without threads or I/O:\n\n* the superblock shuttle tests use it directly, so shuttle only\nschedules at the superblock's own synchronization points;\n* the reftest harness builds its file system with the superblock on\n`InMemoryMetadata` and the data path on `MockClient`, over the same\nbucket. Runtime is unchanged (the mutations reftest is within 2-4%).\n\n### Does this change impact existing behavior?\n\nNo. The `Superblock` bounds are relaxed from `ObjectClient + Send +\nSync` to `MetadataClient`, which every such client implements, so\nexisting uses compile and behave as before. Errors keep the same\ndisplay, source chain and error metadata.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-fs` changelog entry for the new public\n`MetadataClient` interface and the `mock` feature with\n`InMemoryMetadata`. No version change: these are additive, and v0.11.1\nis already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T15:39:59Z",
          "tree_id": "1561f9d5314b778c198deb6a377dda2f71428ac9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b36809b56455bf2b1d8c63a7fea9f963a4ee71d3"
        },
        "date": 1792691742180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1328.0255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2089.9107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1665.599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.83466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 409.28095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.19208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.30712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3945.72880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4442.635546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1418.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1250.55,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 788.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1612.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.08505859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1001.29736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 978.11201171875,
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
          "id": "9e23c24e5962d249ef06370124309d3e52661b33",
          "message": "Restrict FUSE test mounts to the user running the tests (#2000)\n\nThe FUSE test sessions mounted with `allow_other`, so any process on the\nhost could open files in the test file systems. Other processes, such as\nfile scanners, can then interfere with the tests: if one opens a file\nfor reading just after a test closes it, Mountpoint correctly rejects\nthe test's next open of that file for writing with `EPERM` (a file can't\nhave a reader and a writer at the same time, see SEMANTICS.md). That\nmade tests such as `rename_append_mock`, `read_errors_test_mock` and\n`reftests::fuse::proptest_fuse` fail intermittently, more often under\nload.\n\nThis change mounts the test sessions without `allow_other` and with the\nmatching owner-only session ACL, as `mount-s3` does by default. The\nkernel then rejects accesses from other users, root included, and the\ntests remain the only clients of their file systems.\n\n### Does this change impact existing behavior?\n\nNo. Only the test harness changes; Mountpoint's behavior is unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test-only change, no published code is affected.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T16:47:08Z",
          "tree_id": "a048439bd443814faa8b72fdea91aca20e6a6c32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9e23c24e5962d249ef06370124309d3e52661b33"
        },
        "date": 1792696388566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1309.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2113.5814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.73974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1650.39521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.370703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 211.1353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 337.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3891.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4443.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1410.3443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1410.7171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 872.76884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 784.5265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1261.64248046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 998.2181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1008.7662109375,
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
          "id": "98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e",
          "message": "Update dependencies to fix security vulnerabilities (#2008)\n\nUpdates ctutils from 0.4.3 to 0.4.6 via `cargo update -p ctutils`.\n\nTemporarily adds RUSTSEC-2026-0387 (crypto-bigint) to deny.toml ignore\nlist - this is a pre-existing issue on main, blocked on AWS SDK upstream\nreleasing a version with crypto-bigint 0.7.x.\n### Does this change impact existing behavior?\n\nNo. Security patch only, no API or behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-26T15:25:34Z",
          "tree_id": "7531fded5baaca215c2865e5aab50330dcdbde7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e"
        },
        "date": 1793035921515,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1363.3658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2110.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 879.28447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1615.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 313.54658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.2548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.12822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3852.94482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4413.2921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1274.58388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1230.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1598.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 736.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1069.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1122.14287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1028.99521484375,
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
          "id": "e6e4f739c460f5ed356db01df673de220937da5f",
          "message": "Re-enable jemalloc background threads in the background mount process (#1999)\n\n`mount-s3` configures jemalloc with `background_thread:true`, so that\npage purging runs on jemalloc's own threads rather than on the threads\nthat free memory. jemalloc turns its background threads off in a forked\nchild, though, so a mount in background mode (the default, without\n`--foreground`) ran without them, and only foreground mounts had them.\nIn background mode, freed memory was returned to the operating system\n(`madvise`) on the threads that freed it, the ones serving file system\nrequests and S3 transfers, which is what the setting is meant to avoid.\n\nThis change checks whether background threads are enabled before forking\nand, if so, turns them back on in the child before it does anything\nelse, using jemalloc's `background_thread` `mallctl` control. If that\nfails, the mount fails, as a foreground mount does when jemalloc can't\nstart its background thread.\n\njemalloc's background threads can write error messages directly to\nstderr. The background process used to close stdin, stdout and stderr\nonce mounted, so files and sockets opened later could reuse those\ndescriptors and receive such writes. It now points them to `/dev/null`\ninstead.\n\nA new test checks that the mount process has jemalloc background threads\nin both background and foreground mode.\n\n### Does this change impact existing behavior?\n\nBackground-mode mounts now run with jemalloc background threads, like\nforeground mounts. As a result, memory freed after a workload is\nreturned to the operating system gradually by those threads rather than\nimmediately on the thread that freed it: this is the intended behavior\nof the setting, and matches `--foreground` mounts. A background mount\nnow fails if those threads can't be started. Its standard streams are\nredirected to `/dev/null` rather than closed. No CLI or configuration\nchanges. Setting `background_thread:false` through `_RJEM_MALLOC_CONF`\nstill disables them.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in `mountpoint-s3/CHANGELOG.md` under Unreleased\n(v1.24.1). No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-27T15:50:50Z",
          "tree_id": "8c9d0bf566d36d183adb4c0be5bde0a80bcc9873",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6e4f739c460f5ed356db01df673de220937da5f"
        },
        "date": 1793126351008,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1414.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2187.23486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 886.70556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1623.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.37978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 815.22822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.0263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4221.7890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4294.8044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1235.10927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1298.4544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1397.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1442.410546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1457.06416015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1272.93798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1302.56689453125,
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
          "id": "2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d",
          "message": "Bump taiki-e/install-action from 2.87.28 to 2.87.29 (#2007)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.28 to 2.87.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.29</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.31.0.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.262.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.1.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.172.</p>\n</li>\n<li>\n<p>Update <code>osv-scanner@latest</code> to 2.7.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.11.</p>\n</li>\n<li>\n<p>Update <code>mdbook-d2@latest</code> to 0.3.9.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.13.0.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.2.1.</p>\n</li>\n<li>\n<p>Update <code>just@latest</code> to 1.59.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.63.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-crap@latest</code> to 0.8.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.12.0.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8cca0918f8471c33515202b73f56ab27f2bed283\"><code>8cca091</code></a>\nRelease 2.87.29</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/fc26824601b40bd3b26712c48942016e2b2d12f6\"><code>fc26824</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5018b2ebebbb2657068e91071ea73d9a53a44f2d\"><code>5018b2e</code></a>\nUpdate <code>zizmor@latest</code> to 1.31.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d0e52041f440d731eae552c575c81c4cccd601c8\"><code>d0e5204</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/517774f2ae949bb5d89258edba4466e75f1a33be\"><code>517774f</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.262.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4bc69b1c8214eb6efb50b217dfb04ae04d8af1f5\"><code>4bc69b1</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0470a3f16345a16a36a8b4b51fd72f0de5cc6b5b\"><code>0470a3f</code></a>\nUpdate <code>uv@latest</code> to 0.13.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7a2b747eb5f89f888d956c73464777912a182a35\"><code>7a2b747</code></a>\nUpdate <code>trivy@latest</code> to 0.76.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7efb5337f67975eb612c46a52d9c7790a5829f97\"><code>7efb533</code></a>\nUpdate <code>tombi@latest</code> to 1.8.4</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e5d37d6fd4d56d59f3bdc428d4138afa60276954\"><code>e5d37d6</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.172</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.28...v2.87.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.28&new-version=2.87.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T09:45:55Z",
          "tree_id": "a43a4984b96baf2ec7f6d9935a8ca8c5660db69f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d"
        },
        "date": 1793188346086,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1412.12568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 884.68427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1615.83271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.25673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 441.17216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 213.32412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 274.755078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4053.3376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4544.95791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1226.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1306.82158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1519.68740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1839.82568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1142.246484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1289.87021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 951.6896484375,
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
          "id": "59c7bbc1843652ccd239ef8a9235e56ad1842774",
          "message": "Update cargo dependencies (#2009)\n\nRun cargo update to pick up in particular `crypto-bigint v0.7.10` which\naddresses RUSTSEC-2026-0387.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-28T10:56:19Z",
          "tree_id": "7fa69936bf6b5f0af7c779be06b559d490744c43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59c7bbc1843652ccd239ef8a9235e56ad1842774"
        },
        "date": 1793192586580,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1349.63544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2166.15576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 850.46103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1679.17568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.8849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 387.2853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 242.95654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4044.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4308.1853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1472.74990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1289.26865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1390.94404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1233.99912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1059.3583984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1117.785546875,
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
          "id": "36b537e5f5e439bdd4f942746e02d86f8851ae48",
          "message": "Bump hydra-core from 1.3.7 to 1.3.8 in /benchmark (#2011)\n\nBumps [hydra-core](https://github.com/hydra-ecosystem/hydra) from 1.3.7\nto 1.3.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.8</h2>\n<h3>Bug fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.8/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.8 (2026-10-25)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/004658aa49f466982433dded1e4f413c5fd35da8\"><code>004658a</code></a>\nClarify the Hydra 1.3.8 security release note</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2f20addd723d2f07eff55cae63e7df5b3170059d\"><code>2f20add</code></a>\nPrepare Hydra 1.3.8 security release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/de5554320c17cd2d974492c03d0b1456adb4a8ef\"><code>de55543</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/39f3b31ae38a44fa3ba9f50fe5859265b3bbaa10\"><code>39f3b31</code></a>\nPrepare Ray launcher 1.2.2 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ed11e57534d93a7e16d7dd1a42665f02859bb4fb\"><code>ed11e57</code></a>\nBackport the Ray version resolver fix to Hydra 1.3 (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3567\">#3567</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d620c0b2b72838a20ff634a49e5cf19b82e5a66d\"><code>d620c0b</code></a>\nUpdate Hydra 1.3 package metadata after repository transfer</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/35cd89dfd67ca1718c33cc9b783529804b9244c7\"><code>35cd89d</code></a>\nSupport publishing 1.3 plugins</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/8429daa0fa1212e57240de5613d7ec74380705e8\"><code>8429daa</code></a>\nPrepare hydra-optuna-sweeper 1.3.0 release</li>\n<li>See full diff in <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.7...v1.3.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.7&new-version=1.3.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T11:41:00Z",
          "tree_id": "d0e1d32ab40a68581cd558f77a859cb6e1f6b8ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36b537e5f5e439bdd4f942746e02d86f8851ae48"
        },
        "date": 1793196106146,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1424.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2232.94755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 881.83271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1644.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.6818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 495.7037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.84541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.7681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4073.9396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4568.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1325.10859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1267.0775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1439.0658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 794.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1376.35283203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1041.24697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 902.320703125,
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
          "id": "f0b0e02cbf2a37e912697e5cd4b8830c3ededa04",
          "message": "Update CRT submodules to latest releases (#2010)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.0` -> `v1.0.2`\n* `aws-c-common` `v1.0.1` -> `v1.0.5`\n* `aws-c-http` `v1.0.0` -> `v1.1.1`\n* `aws-c-io` `v1.0.0` -> `v1.1.1`\n* `aws-c-s3` `v1.1.3` -> `v1.5.0`\n* `aws-c-sdkutils` `v1.0.0` -> `v1.0.1`\n* `aws-checksums` `v1.0.0` -> `v1.0.1`\n* `aws-lc` `v5.9.0` -> `v5.12.0`\n* `s2n-tls` `v1.7.10` -> `v1.7.13`\n\nChanges in behavior:\n- With the new `aws-c-io`, the CRT retry strategy no longer rejects more\nthan 63 retries, so setting `AWS_MAX_ATTEMPTS` (or `max_attempts` in the\nclient) above 64 no longer makes the client panic at creation and\nMountpoint at startup. A new test covers it.\n- The new `aws-c-s3` starts up to 8 threads per client for meta requests\nthat upload from or download to a file. `mountpoint-s3-crt` doesn't\nsupport those requests, so its `Client` limits them to one thread, the\nminimum the CRT allows. A new test covers it.\n- The User-Agent header carries new CRT metadata.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 055e822f0..3d29adcec:\n  > chore(release): patch-update to VERSION - 1.0.2\n  > Fix warnings found by the Undefined Behavior Sanitizer- #274 (#305)\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Uri secure cleanup (#307)\n  > Secure cleanup to the key buffers (#304)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 69cd45209..45e930738:\n  > Fix version (#1307)\n  > Set sticky bit on cross process lock file (#1306)\n  > add bignum (#1300)\n  > Make UBSan errors fatal (#1266)\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Uri secure cleanup (#1286)\n  > chore(release): patch-update to VERSION - 1.0.2\n  > fix: reduce warnings and support windows-arm builds (#1278)\n  > Add callback-compatible wrappers for byte cursor equality functions (#1281)\n  > Cache CPU feature detection at library init (#1280)\n  > Windows thread failure cleanup (#1279)\n  > Revert thread detach state to not created when OS thread creation fails (#1277)\n  > Optimize the size of encoded double values (#1268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 2b563f8a7..d19eabf4c:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Add path to responds immediately for H2 mock server (#593)\n  > Make ubsan useful (#587)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Move l4 proxy config to end of public structs (#591)\n  > Securely destroying data path  (#590)\n  > fix: strip absolute-form request-target to spec (#584)\n  > fix: validate WebSocket CLOSE frames (#583)\n  > fix: harden HPACK decoding and table sizing (#582)\n  > fix: validate HTTP/2 request pseudo headers (#581)\n  > Socks5 support (#585)\n  > Lower fuzz test log level to avoid ctest running out of memory (#589)\n  > chore: make h2benchmark configurable (#580)\n  > chore: document and pin existing behavior (#578)\n  > chore: remove unreachable OOM handling (#577)\n  > chore: address TODO comments (#576)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 1685abcd3..cbc368573:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Update API names to avoid conflict (#857)\n  > [Feat]: Adding Adaptive retry strategy (#849)\n  > Register cleanup callback on accepted socket instead of listener (#855)\n  > Fix Server Channel Use After Free (#854)\n  > chore: tester fix to notify with lock (#853)\n  > [Chore]: Removing max_retry check (#850)\n  > Make ubsan useful (#844)\n  > Fix naming of the arguments (#848)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Fix find s2n result in pre-installed s2n even when we build s2n source together (#845)\n  > Socks5 Implementation  (#832)\n  > Fix and test for thread launch failure leading to shutdown deadlock (#842)\n  > Updated `s_do_read` to handle NULL right slot (#805)\n  > chore: Clarifying comment for SecIdentityCreate Api (#839)\n  > feat: keychain-less macOS identity mode (#826)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 805ca0f4c..fcb0e322b:\n  > chore(release): minor-update to VERSION - 1.5.0\n  > Fix Clang 21 -Wdefault-const-init-field-unsafe error (#707)\n  > Add recv_buffer: buffer-pool  (#693)\n  > fix: limit the eventloops spawned (#702)\n  > chore(release): patch-update to VERSION - 1.4.1\n  > Get Defalut Part Size (#706)\n  > chore(release): minor-update to VERSION - 1.4.0\n  > User Agent fix (#703)\n  > Retry strategy Modes (#705)\n  > fix: prevent segfault from early request finish (#701)\n  > fix: surface errors with first part get (#700)\n  > fix: stream creation failure on odd part sizes (#699)\n  > Validate whole-object checksum before finish decides outcome (#698)\n  > Fix undefined behavior from function pointer type casts flagged by UBSan (#688)\n  > chore(release): patch-update to VERSION - 1.3.1\n  > Run the tests in parallel (#696)\n  > limit the file io threads by default and make it configurable via env… (#694)\n  > Full object checksum for round-trip tests (#690)\n  > chore(release): minor-update to VERSION - 1.3.0\n  > Manual changelog and more validation (#691)\n  > fix the bug where we delete the file even succeed (#689)\n  > Expected checksum and validation mode changes (#684)\n  > chore(release): minor-update to VERSION - 1.2.0\n  > Clarify the bit mask logic. (#687)\n  > Parallel out of order write to file (#679)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils de0fbe807..66a79c011:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Fix misaligned data in endpoints (#76)\n  > Ubsan fixes (#75)\n  > feat:  Add streaming aws-chunked content encoding decoder (#64)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ee7c435de..12cd22e81:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > fix: use clang's intrinsics header under clang-cl on ARM64 (#120)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 39b142ec3..cd481c207:\n  > Prepare v5.12.0 (#3689)\n  > feat(tool-openssl): add ocsp command (#3635)\n  > feat(tool-openssl): support CA signing, revocation, and CRLs in ca (#3634)\n  > Explicitly block a small set of intermediates (#3688)\n  > Hold HPKE key and context buffers out of line (#3637)\n  > feat(tool-openssl): add x509 -serial/-addtrust/-trustout (#3636)\n  > tool-openssl: add password-based key derivation to openssl enc (#3665)\n  > tool-openssl: add openssl rand subcommand (#3664)\n  > Fix PKCS12 password prompt test isolation on OpenBSD (#3680)\n  > Make the SSL_SHA256 constant non-overlapping with the rest (#3659)\n  > tool-openssl: support cipher name as command (e.g. openssl aes-256-cbc) (#3666)\n  > Move AArch64 Keccak round constants out of .text (#3674)\n  > Use CMake find_package for OpenSSL (#3662)\n  > Implement aws-lc-provider error queue handling (#3488)\n  > fix(ssl): Reject non-ECDHE cipher in handback (#3653)\n  > Import s2n-bignum 2026-09-29 (#3661)\n  > Reject ECH configuration on DTLS connections (#3578)\n  > fix(ci): running ci in dedicated msys shell (#3669)\n  > Scope OCSP noCheck exemption to the responder certificate (#3576)\n  > Bump the pip-ci group across 1 directory with 3 updates (#3657)\n  > Bump the cargo-ci-lambda group across 1 directory with 3 updates (#3658)\n  > Add FIPS support to the aws-lc-provider (#3487)\n  > Bump rustls from 0.23.40 to 0.23.45 in /tests/ci/lambda (#3649)\n  > Bump urllib3 from 2.7.0 to 2.8.0 in /tests/ci (#3606)\n  > Bump the github-actions group across 1 directory with 3 updates (#3627)\n  > Ensure UBE is caught between thread-local state init and uniqueness test (#3654)\n  > Validate OCSP HTTP request inputs (#3639)\n  > Fix -Wunused-but-set-global in rand_isolated_test.cc (#3648)\n  > fix(ci): scope id-token permission to report-failures job in integration omnibus (#3640)\n  > Reserve alignment slack in SSLBuffer max capacity (#3642)\n  > Reject failed signature controls (CWE-393) (#3643)\n  > Fix -Wunused-but-set-global in fork_ube_detect.c (#3645)\n  > Verify provider-wide algorithm reachability (#3486)\n  > Reject repeated AES-XTS data unit operations (#3621)\n  > Salt len truncation fix (#3570)\n  > Implement remaining SHA2 digests (#3485)\n  > Adding RC2 EVP key length signed truncation guard (#3589)\n  > Grow BIO_read_asn1's buffer incrementally, not from the claimed length (#3583)\n  > Add SHA2-224 and establish the SHA-2 variant pattern (#3449)\n  > Check `EVP_PKEY_assign_EC_KEY` return (#3620)\n  > Honor restricted PSS min saltlen for AUTO verify (#3470)\n  > Reset cached extension state when reusing an X509 or X509_CRL (#3584)\n  > Deduplicate digest algorithms in PKCS7_dataInit (#3579)\n  > Clear buffered cipher state per record in aead_tls_open (#3587)\n  > Prepare v5.11.0 (#3610)\n  > Harden previous-finished* length in v1/v2 transfer (#3595)\n  > Recognise known safe DH groups/primes and short-circuit Diffie-Hellman test (#3337)\n  > fix(ci): restrict calls for autofix (#3599)\n  > fix(ml_kem): Gate ML-KEM x86-64 on BMI2 in addition to AVX2 (#3596)\n  > Support RSA encryption/decryption and additional ciphers in the OpenSSL CLI (#3605)\n  > Resize md_data when an HMAC EVP_MD_CTX changes digest (#3586)\n  > Use the dummy key when a PKCS#7 content encryption key is the wrong length (#3585)\n  > Remove nameRelativeToCRLIssuer CRL distribution point support (#3598)\n  > fix(x509): Verify CSR proof-of-possession on -req (#3592)\n  > fix(ssl): Check buffer-view bounds before pointer arithmetic (#3566)\n  > Reject unoffered cipher suite in TLS 1.3 client (#3537)\n  > fix: Add patch for failing gRPC master branch (#3591)\n  > feat(duvet): RFC 8032 (EdDSA) requirement coverage + annotation-regression CI (#3477)\n  > Support `pkcs12 -export` and `req -batch` in the OpenSSL CLI (#3575)\n  > fix(acvp): place the IUT public key correctly in KAS-ECC fixedInfo (#3597)\n  > fix: Update Ruby (master) integration patch (#3590)\n  > Extend FIPS 3.x EOS to February 2030 (#3539)\n  > Seed groups and signature algorithms from the system crypto policy (#3504)\n  > Gating PR auth checks on actor pushing the code instead of author (#3567)\n  > Fail openssl ca when the issued certificate cannot be written (#3568)\n  > Guard against NULL attribute type names in X509_NAME_print_ex (#3574)\n  > Harden a number of code-paths to avoid e.g. hangs and invalid input (#3543)\n  > Add OpenSSL-compatible rehash -compat support (#3563)\n  > Reject [UNIVERSAL 0] elements with content as end-of-contents (#3560)\n  > Fix BIO socket error handling (#3459)\n  > Restricting CI permissions so fork-PR code doesn't run CI with ECR push and shared S3 write permissions (#3546)\n  > Record job settings (#3569)\n  > Zeroize ChaCha20-Poly1305 key material (#3552)\n  > Skip AEAD ConcurrentStability under Intel SDE; add deterministic context-immutability test (#3562)\n  > ci: fix openssh-master integration (#3561)\n  > Prepare 5.10.0 (#3553)\n  > Add EVP_add_cipher as a compatibility no-op (#3554)\n  > Fix SIGPIPE race in linkage checks (#3551)\n  > Quote shell arguments in tool tests (#3499)\n  > Bump the github-actions group with 8 updates (#3550)\n  > Reject non-canonical Ed25519 public keys in the nohw decoder (#3457)\n  > Add pkcs12 import subcommand to the CLI (#3532)\n  > Improve verify and x509 CLI compatibility  (#3548)\n  > Seed cipher lists and version bounds from the system crypto policy (#3503)\n  > Prevent tests from creating temporary files in the source tree (#3498)\n  > Return process exit codes from openssl CLI tool entry points (#3536)\n  > Add EVP_PKEY_check and EVP_PKEY_public_check for KEMs (#2709)\n  > Add context length guard in ML-DSA ACVP siggen (#3538)\n  > fix: declare FIPS service-indicator funcs in curve25519.c (#3514)\n  > fix: restore alloc-size >= ivlen invariant in legacy AES-GCM SET_IVLEN (#3466)\n  > Export the crypto-policies reader and add its CI job (#3527)\n  > Add a reader for the system crypto-policies OpenSSL back-end (#3502)\n  > Retry failed rndr register read a bounded number of times (#3475)\n  > Shard WASM gtests across runner CPUs (#3524)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls bce022f41..e7ce83a27:\n  > feat: add 20261021 security policies (#6141)\n  > test: add rust buffered send test (#6060)\n  > feat: Adds API to make fragment length configurable (#6139)\n  > fix(bindings): remove Result from CertValidationCallbackSync (#5779)\n  > fix: validate x509 extension length on the length-only path (#6126)\n  > fix: add null check for quic_transport_parameters (#6135)\n  > refactor: guard libcrypto function calls (#6133)\n  > docs: clarify aws-kms-tls-auth revocation requires KMS key rotation (#6128)\n  > chore: bindings release 0.3.46 (#6130)\n  > fix: prefer ECDSA signature schemes in ELB TLS 1.3 security policies (#6127)\n  > fix(mem): Reverse MADV_DONTDUMP on mlock allocator free (#6120)\n  > fix: treat s2n_allowed_to_cache_connection error return as false (#6125)\n  > chore: add new team member (#6122)\n  > fix: enforce max handshake length in parse_message (#6055)\n  > fix: copy ticket key before use to avoid concurrent rotation UAF (#6043)\n  > fix: initialize s2n_cert fields in s2n_connection_get_peer_cert_chain (#6045)\n  > fix: guard DH param sizes against uint16 truncation (#6062)\n  > refactor: remove length-prefixed logic for PQ key shares (#6041)\n  > chore: bindings release 0.3.45 (#6116)\n  > build(deps): update bindgen requirement from 0.72 to 0.73 in /bindings/rust/standard (#6084)\n  > feat: add OpenSSL 4.0 compatibility (#6111)\n  > fix: prevent trust store switch when s2n_connection_set_config fails (#6105)\n  > feat(rust-examples): add mutual TLS example (#5995)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6098)\n  > fix: re-enable TLS_RSA cipher suites in the Java integration test client (#6114)\n  > revert: new AMI for the kTLS fleet was published with updated PGP key for the github CLI. (#6109)\n  > ci: pin macOS CI to openssl@3 to fix OpenSSL 4 build break (#6113)\n  > build(cmake): add opt-in discovery for a distribution-packaged AWS-LC (#6108)\n  > fix: disable TLS1.3 resumption when client auth is required (#6103)\n  > feat: Adds split API on the Rust bindings Connection (#5774)\n  > fix: report Finished and PSK binder mismatches as decrypt_error (#6104)\n  > chore: bindings bump v.0.3.44 (#6099)\n  > chore: Update gh cli PGP key (#6102)\n  > chore(bindings): Address 2 Rustsec advisories (#6095)\n  > style: order tls 1.3 cipher suites first (#6092)\n  > fix: remove unused variable to fix Clang build with Werror (#6093)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6079)\n  > feat: Preserve count in handshake/compute duration (#6069)\n  > fix: Ensure that TLS1.3 ticket is not accepted on TLS1.2 codepath (#6081)\n  > build(deps): update brass-aphid-wire crates (#6090)\n  > fix: cleanup kms-tls-auth crate (#6094)\n  > feat(bindings): add async cert validation callback (#6071)\n  > feat(metrics): skip export when record is zero (#6087)\n  > fix: relax https test to accept all status codes (#6091)\n  > feat(bindings): deprecate & alias Connection::wipe (#6033)\n  > fix: cleanup dhparams in failure case (#6085)\n  > chore: add simonmarty to the team (#6089)\n  > feat(policy): Add ELB, KMS, and service TLS security policies (#5977)\n```\n</details>\n\n### Does this change impact existing behavior?\n\n`AWS_MAX_ATTEMPTS` values above 64 are now accepted, where Mountpoint\nused to panic at startup. Each client has one additional idle thread.\nSee the changes in behavior above.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: \"Update to latest CRT dependencies\" entries for\n`mountpoint-s3-crt-sys`, `mountpoint-s3-crt` and `mountpoint-s3-client`,\n\"Update to latest S3 client\" for `mountpoint-s3-fs`, and entries for the\n`AWS_MAX_ATTEMPTS` fix in `mountpoint-s3-client` and `mountpoint-s3`.\nMinor version bumps: `mountpoint-s3-crt-sys` 0.18.0, `mountpoint-s3-crt`\n0.17.0, `mountpoint-s3-client` 0.23.0, `mountpoint-s3-fs` 0.12.0.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-29T06:52:50Z",
          "tree_id": "451fcd2f4a5dd7b7b92a1d893bdac454a0ba1a3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0b0e02cbf2a37e912697e5cd4b8830c3ededa04"
        },
        "date": 1793264389164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1363.73583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2161.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 834.9416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1622.90595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.75439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 442.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.50595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.80498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3871.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4240.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1262.58740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1355.567578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1363.95712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 772.73134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1146.13125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1049.90986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 951.27373046875,
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
          "id": "f5d283be78d717f3f219d82740608a1483dfa301",
          "message": "Bump libz-sys from 1.1.30 to 1.1.31 (RUSTSEC-2026-0418) (#2013)\n\nBumps libz-sys to 1.1.31 to fix RUSTSEC-2026-0418 (the libz-sys build\nscript logs its compiler probe command, leaking environment variables\ninto the build directory), which currently fails the `cargo deny`\nadvisories check. Cargo.lock only, no code changes.\n\nlibz-sys is a build-time dependency only, reached via\n`built` -> `git2` -> `libgit2-sys` from the `mountpoint-s3` and\n`mountpoint-s3-client` build scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-30T09:44:05Z",
          "tree_id": "23b855040345b40f370758ceb7539c4582cf29a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5d283be78d717f3f219d82740608a1483dfa301"
        },
        "date": 1793361014626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1424.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2158.78095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 834.0265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1636.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.00068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 835.430859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 207.92158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4350.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4481.779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1275.6369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1273.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1726.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1687.3298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1203.69462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1139.68955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.8861328125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
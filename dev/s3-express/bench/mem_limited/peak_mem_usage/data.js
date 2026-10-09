window.BENCHMARK_DATA = {
  "lastUpdate": 1791566437787,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone, Memory-Limited)": [
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
          "id": "17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29",
          "message": "Bump astral-sh/setup-uv from 7.6.0 to 10.0.1 (#1945)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n7.6.0 to 10.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.0.1 🌈 Tolerate transient manifest timeouts</h2>\n<h2>Changes</h2>\n<p>Thank you <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- for making\nthis action more resilient.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Tolerate transient manifest timeouts <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.4 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n</ul>\n<h2>v10.0.0 🌈 Disable automatic caching for sensitive events and new QOL\nfeatures</h2>\n<h2>Changes</h2>\n<p>Another breaking release, directly after v9.0.0 but we think the\nadded security justifies that.</p>\n<h3>Extra security by default</h3>\n<p>If you use the default <code>enable-cache: auto</code> this will now\n<strong>DISABLE THE CACHE</strong> to protect against cache poisoning\nfor the following events:</p>\n<ul>\n<li><code>pull_request_target</code></li>\n<li><code>workflow_run</code></li>\n<li><code>release</code></li>\n</ul>\n<p>You can read the full reasoning in <a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/984\">astral-sh/setup-uv#984</a></p>\n<h3><code>version: latest-known</code></h3>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv known to\nsetup-uv\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version: &quot;latest-known&quot;\n</code></pre>\n<p>This will now install the latest version with a checksum that is\nknown by this action. The <a\nhref=\"https://github.com/astral-sh/setup-uv/blob/4f6036f71cec78afb113b323f220c9185d983c12/src/download/checksum/known-checksums.ts\">known\n<code>uv</code> checksums</a> are automatically updated but will take a\nrelease of this action to take effect. You won't be always using the\nlatest &amp; greatest but you will have an extra level of security.</p>\n<h3>Read python version from <code>.tool-versions</code></h3>\n<pre lang=\"yaml\"><code>- name: Install uv based on the version defined\nin .tool-versions and also set python\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version-file: &quot;pyproject.toml&quot;\n&lt;/tr&gt;&lt;/table&gt; \n</code></pre>\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/20cfd1bf945f4377ade1205e4dbc17946fc9a30d\"><code>20cfd1b</code></a>\nchore: update known checksums for 0.12.4 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d73a0cab66a532d7afa440d9df4a67ea9fe65a30\"><code>d73a0ca</code></a>\nTolerate transient manifest timeouts (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae3b92d1bdb308a10adfe7b8f408e5cc8c30f3f6\"><code>ae3b92d</code></a>\ndocs: update version references to v10.0.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae62891fec2bb8e7d6c99fc78c9fec3a63790f8d\"><code>ae62891</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1013\">#1013</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f9cdb47d487aee2be8925d1e57290177ad9e1ac2\"><code>f9cdb47</code></a>\nReject paths in .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1007\">#1007</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4f6036f71cec78afb113b323f220c9185d983c12\"><code>4f6036f</code></a>\nRequire pull requests for Dependabot rollups (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1005\">#1005</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8d6402c9b71205b2d8d0b82de531d8fed8430182\"><code>8d6402c</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1004\">#1004</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/46f427bd47c794e99536b75ffaa9f27602425027\"><code>46f427b</code></a>\nRead Python version from .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/996\">#996</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8ed89c51143f65ea13eaba62db51dbb8ea52d0a3\"><code>8ed89c5</code></a>\nci: pin Alpine container image (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/995\">#995</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8473c7fea42cdfd540f4b01317a17ac5f54126ae\"><code>8473c7f</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/994\">#994</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/37802adc94f370d6bfd71619e3f0bf239e1f3b78...20cfd1bf945f4377ade1205e4dbc17946fc9a30d\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T16:22:42Z",
          "tree_id": "faf85be8412f8677867f6c061ae28caf9dcfc47f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29"
        },
        "date": 1787686886899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 475.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 475.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 457.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.875,
            "unit": "MiB"
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
          "id": "70bd7b627969ed6decdeab91a6a445a2347d827c",
          "message": "Remove AL2 from various pieces of documentation (#1921)\n\nReplace AL2 with AL2023 in various pieces of documentation. Removing\nbecause AL2 is now end of life\n\nRemove instructions for building the packaging script without docker, as\nAL2023 already comes with a native release, and `dpkg` cannot be\ninstalled on it. Users who want to build custom releases can use docker.\n\n### Does this change impact existing behavior?\n\nOnly documentation is changed. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-08-27T19:30:58Z",
          "tree_id": "f5f5b0f74d031e233101d718d70779322e076990",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70bd7b627969ed6decdeab91a6a445a2347d827c"
        },
        "date": 1787868136787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.7421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 62.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.84375,
            "unit": "MiB"
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
          "id": "41b00f8aa4db8bed5217f1577fb78f0c96c49776",
          "message": "Replace bincode with wincode in disk data cache (#1947)\n\nReplace unmaintained bincode serialization library with wincode (a\nbincode-compatible, actively maintained library) for disk cache header\nserialization/deserialization in `mountpoint-s3-fs`. bincode has been\npermanently marked as unmaintained\n([RUSTSEC-2025-0141](https://osv.dev/vulnerability/RUSTSEC-2025-0141)).\n  \nImplementation:\n  \n- Read: Header deserialized directly from the file reader via\nReadAdapter. Data read directly into pool buffer.\n- Write: Header serialized directly to file via WriteAdapter (no\nintermediate allocation, same pattern as bincode).\n- Added `write_cache_block` and `write_file` benchmarks.\n\nBenchmark results:\n- `read_cache_block`: wincode 99.3 µs vs bincode 103.6 µs (faster ✅)\n- `write_cache_block`: wincode 4.02 ms vs bincode 4.02 ms (identical)\n  \nNo performance regression. Read path is slightly faster.\n\nNote: `mountpoint-s3-fuser `still uses bincode 1.3.1 - will be addressed\nin a follow-up. The advisory suppression can be reverted once both are\nmigrated.\n \n### Does this change impact existing behavior?\n\nNo user-facing changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-09-02T07:36:44Z",
          "tree_id": "eabef6d4d55a3c658eb09c12dba719b50cff0d4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41b00f8aa4db8bed5217f1577fb78f0c96c49776"
        },
        "date": 1788344239202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 480.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 468.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 63.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 436.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 331.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 310.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.87109375,
            "unit": "MiB"
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
          "id": "835142e70dadc1994ec77ee64ab1223cc7b8b545",
          "message": "Retroactively fix changelog for 1.23.0 (#1952)\n\nWe missed an entry in the changelog for Mountpoint 1.23.0: we should\nhave included #1762.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-02T08:47:18Z",
          "tree_id": "4773818625d9abe78d3a37475ee0a8829e2acc98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/835142e70dadc1994ec77ee64ab1223cc7b8b545"
        },
        "date": 1788347205821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 474,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 76.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 376.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.8046875,
            "unit": "MiB"
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
          "id": "32779e2790b07cdf53df6efac5169e53c64d80bf",
          "message": "Bump taiki-e/install-action from 2.86.2 to 2.87.2 (#1955)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.86.2 to 2.87.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.2</h2>\n<ul>\n<li>\n<p>Update <code>typos@latest</code> to 1.50.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.0.</p>\n</li>\n<li>\n<p>Update <code>shfmt@latest</code> to 3.14.0.</p>\n</li>\n</ul>\n<h2>2.87.1</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.7.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.49.1.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.0.</p>\n</li>\n<li>\n<p>Update <code>d2@latest</code> to 0.8.2.</p>\n</li>\n<li>\n<p>Update <code>cargo-zigbuild@latest</code> to 0.23.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.2.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.5.11.</p>\n</li>\n</ul>\n<h2>2.87.0</h2>\n<ul>\n<li>\n<p>Support <code>kache</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1980\">#1980</a>,\nthanks <a\nhref=\"https://github.com/ChrisJr404\"><code>@​ChrisJr404</code></a>)</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.30.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.6.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.14.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.2.</p>\n</li>\n</ul>\n<h2>2.86.8</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 48.0.1.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.258.0.</p>\n</li>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.80.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.12.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-zigbuild@latest</code> to 0.23.2.</p>\n</li>\n</ul>\n<h2>2.86.7</h2>\n<ul>\n<li>Update <code>tombi@latest</code> to 1.4.1.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1ed6d7be6168f6c9046541087ff549b6bc581fdf\"><code>1ed6d7b</code></a>\nRelease 2.87.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0fbfc5b541ba726278965a75a3fd222af703b279\"><code>0fbfc5b</code></a>\nUpdate <code>typos@latest</code> to 1.50.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5f68cef2c452eb3fcb5dccbbcd5f6d192a13a892\"><code>5f68cef</code></a>\nUpdate <code>tombi@latest</code> to 1.5.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d46a5ec40dd3eef68104c5b342f24e599519675f\"><code>d46a5ec</code></a>\nUpdate <code>shfmt@latest</code> to 3.14.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/742a3317eac7bd62f91cd888b4eead5e784ba833\"><code>742a331</code></a>\nRelease 2.87.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/c5b69cd73ba573d80324cdcd0b052ca509084b22\"><code>c5b69cd</code></a>\nUpdate <code>uv@latest</code> to 0.12.7</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/85e6400c85d74d612698536feafd9e20f40aa257\"><code>85e6400</code></a>\nUpdate <code>typos@latest</code> to 1.49.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/91f3a12371baac5722df4e5c6d42937d16656ffe\"><code>91f3a12</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/160f8b13c099dc3c9067e0658c0da7ac925a00ff\"><code>160f8b1</code></a>\nUpdate <code>syft@latest</code> to 1.51.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/aa48d3e72e94215619c754df53a143cdaabefc8b\"><code>aa48d3e</code></a>\nUpdate shfmt manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.86.2...v2.87.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.86.2&new-version=2.87.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-07T17:50:38Z",
          "tree_id": "e4cb7d97babd524b9053de2a55a3bbb4c4c6d3ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/32779e2790b07cdf53df6efac5169e53c64d80bf"
        },
        "date": 1788814167083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 473.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 466.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 453.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 323.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 226.06640625,
            "unit": "MiB"
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
          "id": "95c11992633413a8fadbfb445eaa7c8b2507833b",
          "message": "Bump slackapi/slack-github-action from 3.0.3 to 4.0.0 (#1951)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 3.0.3 to 4.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v4.0.0</h2>\n<h3>Major Changes</h3>\n<ul>\n<li>\n<p>b1974f0: build: parse yaml with more strict multiline indentation\nrules</p>\n<p>Internal dependencies of <a\nhref=\"https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md#500---2026-06-20\"><code>js-yaml@v5</code></a>\nmake YAML parsing more strict and compliant with the YAML specification.\nIndentation is now required for values that span multiple lines against\nthe base value.</p>\n<p>See the YAML <a\nhref=\"https://yaml.org/spec/1.2.2/#63-line-prefixes\">line prefixes</a>\nspec for the expected indentation rule:</p>\n<pre lang=\"diff\"><code>  channel: &quot;C0123&quot;\n  text: &quot;first line\n<ul>\n<li>second line&quot;</li>\n</ul>\n<ul>\n<li>second line&quot;<br />\n</code></pre></li>\n</ul>\n</li>\n</ul>\n<h3>Patch Changes</h3>\n<ul>\n<li>654bb72: chore: provide global fetch proxied configurations with\nupdates to web api and webhook packages</li>\n</ul>\n<h2>Slack GitHub Action v3.0.5</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>96fddbe: fix: revert multiline yaml parsing indentation change</li>\n</ul>\n<h2>Slack GitHub Action v3.0.4</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>fa03fe4: refactor: send webhooks with the <a\nhref=\"https://docs.slack.dev/tools/node-slack-sdk/webhook\"><code>@slack/webhook</code></a>\npackage</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/blob/main/CHANGELOG.md\">slackapi/slack-github-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>slack-github-action</h1>\n<h2>4.0.0</h2>\n<h3>Major Changes</h3>\n<ul>\n<li>\n<p>b1974f0: build: parse yaml with more strict multiline indentation\nrules</p>\n<p>Internal dependencies of <a\nhref=\"https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md#500---2026-06-20\"><code>js-yaml@v5</code></a>\nmake YAML parsing more strict and compliant with the YAML specification.\nIndentation is now required for values that span multiple lines against\nthe base value.</p>\n<p>See the YAML <a\nhref=\"https://yaml.org/spec/1.2.2/#63-line-prefixes\">line prefixes</a>\nspec for the expected indentation rule:</p>\n<pre lang=\"diff\"><code>  channel: &quot;C0123&quot;\n  text: &quot;first line\n<ul>\n<li>second line&quot;</li>\n</ul>\n<ul>\n<li>second line&quot;<br />\n</code></pre></li>\n</ul>\n</li>\n</ul>\n<h3>Patch Changes</h3>\n<ul>\n<li>654bb72: chore: provide global fetch proxied configurations with\nupdates to web api and webhook packages</li>\n</ul>\n<h2>3.0.5</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>96fddbe: fix: revert multiline yaml parsing indentation change</li>\n</ul>\n<h2>3.0.4</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>fa03fe4: refactor: send webhooks with the <a\nhref=\"https://docs.slack.dev/tools/node-slack-sdk/webhook\"><code>@slack/webhook</code></a>\npackage</li>\n</ul>\n<h2>3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/dcb1066f776dd043e64d0e8ba94ca15cc7e1875d\"><code>dcb1066</code></a>\nchore: release</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/53861e0291660faf57ba686eabf046d5a47fa304\"><code>53861e0</code></a>\nchore: release (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/645\">#645</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b1974f0d29f2b6150fc5a376312d365bd75fdd9b\"><code>b1974f0</code></a>\nbuild!: parse yaml with more strict multiline indentation rules (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/640\">#640</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/947ed0677cba8e56cf374d88bfd2d8f72aa9100c\"><code>947ed06</code></a>\nbuild(deps): bump undici from 7.28.0 to 8.7.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/653\">#653</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/03922a90c917c4d3d3b1c0f35984c2ac23955560\"><code>03922a9</code></a>\nchore: track undici-types to the resolved undici version (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/652\">#652</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/31d473e1d0da2837ee5149493a62a54103e5b45a\"><code>31d473e</code></a>\nbuild(deps-dev): bump typescript from 6.0.3 to 7.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/651\">#651</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/3ca6997fb72e86b0babe7037ff2ca4a5908b6148\"><code>3ca6997</code></a>\nbuild(deps-dev): bump sinon and <code>@​types/sinon</code> (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/649\">#649</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/26a5ad3c5af9cde63a5bb0667fc9e40accce2710\"><code>26a5ad3</code></a>\nbuild(deps): bump actions/setup-node from 6.4.0 to 7.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/647\">#647</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/5092efb0558a5d075f0dd02279f332a116a461ef\"><code>5092efb</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.3 to 2.5.4\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/650\">#650</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/3548c3e9500515cd56aa64222b12088f5e6bd6fe\"><code>3548c3e</code></a>\nbuild(deps): bump slackapi/slack-github-action from 3.0.3 to 3.0.5 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/646\">#646</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/45a88b9581bfab2566dc881e2cd66d334e621e2c...dcb1066f776dd043e64d0e8ba94ca15cc7e1875d\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=3.0.3&new-version=4.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-07T17:50:59Z",
          "tree_id": "01c23251d93f97ae97148cf1c0f22b31c6006e65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/95c11992633413a8fadbfb445eaa7c8b2507833b"
        },
        "date": 1788814255264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 478.546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 466.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 453.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 56.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 331.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 311.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 226.390625,
            "unit": "MiB"
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
          "id": "634df5d09017293d24bd2b821aa8530ade9d14c7",
          "message": "Run cargo update (#1953)\n\nRuns `cargo update` to refresh transitive dependencies in `Cargo.lock`.\nThis clears a `cargo-deny` yanked-crate warning for `chacha20` 0.10.1\n(pulled in via `rand`) and picks up routine upstream patch releases.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-09-07T17:51:22Z",
          "tree_id": "d6a7d12f79da5ca590512783c7d456b040f58644",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/634df5d09017293d24bd2b821aa8530ade9d14c7"
        },
        "date": 1788816327070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 468.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 74.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 49.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.0078125,
            "unit": "MiB"
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
          "id": "5e400f788f8cbca028f3314d84ef2df2c7fcf536",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.3 to 6.2.4 (#1956)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.3 to 6.2.4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.2.4</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n<li>support custom STS endpoints (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1762\">#1762</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8d52d05d7a4521fa52b39de50cb6114b12e5c332\">8d52d05</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>skip credential check on output-env-credentials: false (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1778\">#1778</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58e7c47adf77846879008deadfeeef8a6969fe6c\">58e7c47</a>)</li>\n<li>assumeRole failing from session tag size too large (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1808\">#1808</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d6f5dc331b44474b19a52caaf85fa4d637b13c8e\">d6f5dc3</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbe3b392738ccf3f987d68400dafcf4b0624a56c\"><code>cbe3b39</code></a>\nchore(main): release 6.2.4 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1942\">#1942</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58065db07c99675fc21675188b003b7f0b167004\"><code>58065db</code></a>\nchore(deps): bump js-yaml (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1944\">#1944</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/609df23709e359dc01a42b4c5183ba71167ac38c\"><code>609df23</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\"><code>aa65264</code></a>\nfix: account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7fdbbb8968c49fb55011ace47efc7b0ccfc9a28f\"><code>7fdbbb8</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\"><code>3852440</code></a>\nfix: skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c16f89bdf4cd065448ea7bde8b96a1dad4c77e41\"><code>c16f89b</code></a>\nmention renamed repos use the new immutable identifiers (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1941\">#1941</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9c362eeba7ac7d0419073a8b4af5a83e49e2afaf\"><code>9c362ee</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d5f8da8822f961cd3016c2cf87aad7e80b40558e\"><code>d5f8da8</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1111.0 to\n3.1116.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1935\">#1935</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2db24970cf129d7ff6fc04639072bcbe35f8c288\"><code>2db2497</code></a>\nchore: Update dist</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/e6de054238d6b7531b4efff3b6587d9aade6a06c...cbe3b392738ccf3f987d68400dafcf4b0624a56c\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=6.2.3&new-version=6.2.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-08T06:07:28Z",
          "tree_id": "9e6450cdf615ceca6502e3d8f5cc9d6da16ea04b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e400f788f8cbca028f3314d84ef2df2c7fcf536"
        },
        "date": 1788855832014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 482.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 469.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 452.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 63.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 275.83203125,
            "unit": "MiB"
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
          "id": "617a92940d74e19e3ad7a6e50cd478d233f13bf4",
          "message": "Update rustls to 0.23.45 (#1960)\n\nUpdate rustls to 0.23.45 in order to address [TLS 1.3 handshake messages\nincorrectly accepted across encryption level\nboundaries](https://github.com/rustls/rustls/security/advisories/GHSA-2mjx-qc3c-rqvc).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-15T10:35:01Z",
          "tree_id": "2c80311fb0b9cd79f373fdca51f066f5afb6f71d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/617a92940d74e19e3ad7a6e50cd478d233f13bf4"
        },
        "date": 1789476908220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 489.07421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 470.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 453.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 432.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 290.22265625,
            "unit": "MiB"
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
          "id": "78ab8e71ec20d1999797b6e8ab7e269730241473",
          "message": "Bump taiki-e/install-action from 2.87.2 to 2.87.8 (#1959)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.2 to 2.87.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.8</h2>\n<ul>\n<li>\n<p>Update <code>shfmt@latest</code> to 3.14.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.162.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.26.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.57.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-llvm-cov@latest</code> to 0.9.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-crap@latest</code> to 0.5.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.23.0.</p>\n</li>\n</ul>\n<h2>2.87.7</h2>\n<ul>\n<li>\n<p>Update <code>wasm-bindgen@latest</code> to 0.2.128.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.10.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.2.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.75.1.</p>\n</li>\n</ul>\n<h2>2.87.6</h2>\n<ul>\n<li>\n<p>Update <code>rafn@latest</code> to 0.1.6.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.3.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.57.1.</p>\n</li>\n<li>\n<p>Update <code>convco@latest</code> to 0.7.2.</p>\n</li>\n</ul>\n<h2>2.87.5</h2>\n<ul>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.30.3.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.9.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.50.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.161.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.2.</p>\n</li>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.81.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d438492cf8a250514fa2d34b30bc3c0dc37c65ff\"><code>d438492</code></a>\nRelease 2.87.8</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cf1fadefa81706888511de4b6dda5534a9810ce9\"><code>cf1fade</code></a>\nUpdate <code>shfmt@latest</code> to 3.14.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/716144916a3915dc9bcab576a4b42f6a73a7916c\"><code>7161449</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.162</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/58df4bb0bb13dd31dec0368d34a84838ee17cc3f\"><code>58df4bb</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.26.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/33e9ffe8c37b89671bb5af911d757e2c8f6edb06\"><code>33e9ffe</code></a>\nUpdate oxfmt manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/60bf88260035dd852365b5be9ea4c5943f6f78b4\"><code>60bf882</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/667469ac9d4299c56a06cc1254ce49d5fbbce0d4\"><code>667469a</code></a>\nUpdate <code>dprint@latest</code> to 0.57.4</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/aa52fd60cfec9c5d7b51a839a6c959b637e2fff4\"><code>aa52fd6</code></a>\nUpdate <code>cargo-llvm-cov@latest</code> to 0.9.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/834d344d8d8be0d9a673636b899f33f177f880a5\"><code>834d344</code></a>\nUpdate <code>cargo-crap@latest</code> to 0.5.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/097f1f0064569e498b3b1f6085a6bc5ff24c91f5\"><code>097f1f0</code></a>\nUpdate <code>cargo-binstall@latest</code> to 1.23.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.2...v2.87.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.2&new-version=2.87.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-15T12:29:53Z",
          "tree_id": "89fc9747c06f9c40688b3a6f9727726ce663f981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78ab8e71ec20d1999797b6e8ab7e269730241473"
        },
        "date": 1789483802001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 474.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 453.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 76.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 91.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 49.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.26171875,
            "unit": "MiB"
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
          "id": "a0a1f63f7605028b41c2fc47e581197032a890ed",
          "message": "Bump actions-rust-lang/setup-rust-toolchain from 1.17.0 to 2.0.0 (#1958)\n\nBumps\n[actions-rust-lang/setup-rust-toolchain](https://github.com/actions-rust-lang/setup-rust-toolchain)\nfrom 1.17.0 to 2.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/releases\">actions-rust-lang/setup-rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/pull/103\">actions-rust-lang/setup-rust-toolchain#103</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v1.17.0...v2.0.0\">https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v1.17.0...v2.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/blob/main/CHANGELOG.md\">actions-rust-lang/setup-rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>The format is based on <a\nhref=\"https://keepachangelog.com/en/1.0.0/\">Keep a Changelog</a>,\nand this project adheres to <a\nhref=\"https://semver.org/spec/v2.0.0.html\">Semantic Versioning</a>.</p>\n<h2>[Unreleased]</h2>\n<h2>[2.0.0] - 2026-09-07</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>[1.17.0] - 2026-06-25</h2>\n<ul>\n<li>Add new parameter <code>cache-targets</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>cache-targets</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/84\">#84</a>).\nThis allows disabling caching of the workspace <code>target</code>\ndirectory, e.g. when using <code>sccache</code>, while keeping the rest\nof the cache enabled.</li>\n</ul>\n<h2>[1.16.1] - 2026-05-08</h2>\n<ul>\n<li>Renamed internally used variable to avoid clashes with globally\nexisting variables.\nThis fixes the interference of the TOOLCHAIN variable as reported in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/91\">#91</a>.</li>\n</ul>\n<h2>[1.16.0] - 2026-04-13</h2>\n<ul>\n<li>Add new parameter <code>cache-save-if</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>save-if</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/90\">#90</a>\nby <a\nhref=\"https://github.com/ChanTsune\"><code>@​ChanTsune</code></a>)</li>\n</ul>\n<h2>[1.15.4] - 2026-03-15</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.2 to 2.9.1 (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/87\">#87</a>\nby <a\nhref=\"https://github.com/hyperfinitism\"><code>@​hyperfinitism</code></a>)\nThis gets rid of the warnings about Node.js 20.</li>\n</ul>\n<h2>[1.15.3] - 2026-03-01</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.1 to 2.8.2</li>\n</ul>\n<h2>[1.15.2] - 2025-10-04</h2>\n<ul>\n<li>Fix: Run the version detection steps in the selected\n<code>rust-src-dir</code> directory.\nThis should enable the version selection even without a default\ntoolchain installed.\nFixes <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/74\">#74</a>.</li>\n</ul>\n<h2>[1.15.1] - 2025-09-23</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/ecabd13d1c56bd1345c230e542e9144811ad706f\"><code>ecabd13</code></a>\nPrepare changelog for 2.0.0 release</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/dc0039119c40a73363ef8aa36cecf5b44a260d7f\"><code>dc00391</code></a>\nAdd error matcher for Rust panics</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/70de7eb7ad0b09e07bfd410f1322fa8c0cabfe80\"><code>70de7eb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nfrom ChihweiLHBird/reuse-rustc-verbose-output</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c420b69d2b138295fd15e0657ee6df4082082b52\"><code>c420b69</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/105\">#105</a>\nfrom actions-rust-lang/use-build-warnings</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/d94d10afcf74900a3a5d9e06ca0f742e9939fa8b\"><code>d94d10a</code></a>\nUse CARGO_BUILD_WARNINGS for enforcing warning free compilations</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/34430aa949d489e52a8298cf44d37687816a388e\"><code>34430aa</code></a>\nReuse rustc verbose output instead of invoking rustc three times.</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/0267444136ce4919088f5eae0461f736f21356de\"><code>0267444</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/102\">#102</a>\nfrom actions-rust-lang/dependabot/github_actions/Swat...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/5fa2882d530879536093c3ccff2f02f8cf17d8fb\"><code>5fa2882</code></a>\nBump Swatinem/rust-cache from 2.9.1 to 2.9.2</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/8439c15d249cd2e2a5c80ad3da200c3d8c553ae4\"><code>8439c15</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/100\">#100</a>\nfrom actions-rust-lang/dependabot/github_actions/acti...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c8f944a9fe45dd3927fc57284f27f46460f067ba\"><code>c8f944a</code></a>\nBump actions/checkout from 7.0.0 to 7.0.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/166cdcfd11aee3cb47222f9ddb555ce30ddb9659...ecabd13d1c56bd1345c230e542e9144811ad706f\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions-rust-lang/setup-rust-toolchain&package-manager=github_actions&previous-version=1.17.0&new-version=2.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-15T12:30:01Z",
          "tree_id": "ef1d4a60d6734bf666c5aa01d893f8dd15687631",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0a1f63f7605028b41c2fc47e581197032a890ed"
        },
        "date": 1789488143403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 475.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 476.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 58.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 424.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 275.79296875,
            "unit": "MiB"
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
        "date": 1789569728773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 475.42578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 473.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 453.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 58.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 426.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.96484375,
            "unit": "MiB"
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
        "date": 1789575391942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 62.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 83.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 331.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.0625,
            "unit": "MiB"
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
        "date": 1789635599117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 430.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.65625,
            "unit": "MiB"
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
        "date": 1789743170054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 476.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 418.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.81640625,
            "unit": "MiB"
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
        "date": 1789991252299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 475.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 468.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 62.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 52.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 326.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.35546875,
            "unit": "MiB"
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
        "date": 1789993158270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 474.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 56.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 49.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.3046875,
            "unit": "MiB"
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
        "date": 1790259897002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 467.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 63.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 49.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 272.515625,
            "unit": "MiB"
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
        "date": 1790595578329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 482.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 475.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 57.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 431.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 319.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.734375,
            "unit": "MiB"
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
        "date": 1790604289422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 471.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 51.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 435.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 273.65234375,
            "unit": "MiB"
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
          "id": "338d7062a33a9a9529ebf11f5602214519e028d5",
          "message": "Bump docker/build-push-action from 7.3.0 to 7.4.0 (#1973)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 7.3.0 to 7.4.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.4.0</h2>\n<ul>\n<li>Use the shared error helper for Buildx commands by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1620\">docker/build-push-action#1620</a></li>\n<li>Prevent workflow command injection in metadata logs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1617\">docker/build-push-action#1617</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.92.0 to 0.100.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1614\">docker/build-push-action#1614</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1618\">docker/build-push-action#1618</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1621\">docker/build-push-action#1621</a></li>\n<li>Bump <code>@​humanfs/node</code> from 0.16.7 to 0.16.8 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1609\">docker/build-push-action#1609</a></li>\n<li>Bump brace-expansion from 1.1.13 to 1.1.18 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1592\">docker/build-push-action#1592</a></li>\n<li>Bump csv-parse from 7.0.0 to 7.0.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1613\">docker/build-push-action#1613</a></li>\n<li>Bump js-yaml from 4.3.0 to 4.3.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1605\">docker/build-push-action#1605</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1615\">docker/build-push-action#1615</a></li>\n<li>Bump nanoid from 3.3.16 to 3.3.18 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1611\">docker/build-push-action#1611</a></li>\n<li>Bump postcss from 8.5.10 to 8.5.25 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1590\">docker/build-push-action#1590</a></li>\n<li>Bump postcss-selector-parser from 7.1.1 to 7.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1606\">docker/build-push-action#1606</a></li>\n<li>Bump sigstore from 4.1.0 to 4.1.1 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1577\">docker/build-push-action#1577</a></li>\n<li>Bump undici from 6.27.0 to 6.28.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1594\">docker/build-push-action#1594</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v7.3.0...v7.4.0\">https://github.com/docker/build-push-action/compare/v7.3.0...v7.4.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/c3c9e263c25d99ce0380d002d59b67737d91b0dc\"><code>c3c9e26</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1621\">#1621</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/459b6741834dcd35f946352017e7675bd2089d42\"><code>459b674</code></a>\n[dependabot skip] chore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/4dedcb23c91d79c1629bf53ec2c3bcfffef5b34e\"><code>4dedcb2</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.99.0 to\n0.100.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/379bf63a979bd70751945601fa04c50674509952\"><code>379bf63</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1620\">#1620</a>\nfrom crazy-max/buildx-error-message</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/9877975c9e0b0b661592ff61049069507f9bc2f6\"><code>9877975</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7ed0556ffafb8eb312463411ef0a84a1dfe24d94\"><code>7ed0556</code></a>\nuse the shared Buildx error summary helper</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/91670ba5a4df99a24efff8637a78c83fd1b0f6b1\"><code>91670ba</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1618\">#1618</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/80dbc8614a5c0ce4356740f69179cf829ecdc79a\"><code>80dbc86</code></a>\n[dependabot skip] chore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/50cac3a3b6f55e6015d6483d1dd72a3ecb90d20d\"><code>50cac3a</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.98.0 to\n0.99.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03b4d6cac0163b44733e1fa60adfd6da560ee4d1\"><code>03b4d6c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1617\">#1617</a>\nfrom crazy-max/fix-metadata-workflow-commands</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/53b7df96c91f9c12dcc8a07bcb9ccacbed38856a...c3c9e263c25d99ce0380d002d59b67737d91b0dc\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=7.3.0&new-version=7.4.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-28T11:15:06Z",
          "tree_id": "967d871b1a4c1b8c1306accf4aca5328075a3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338d7062a33a9a9529ebf11f5602214519e028d5"
        },
        "date": 1790605585909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 467.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 260.859375,
            "unit": "MiB"
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
        "date": 1790612781237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 483.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 468.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 58.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 64.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 333.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 417.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.36328125,
            "unit": "MiB"
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
        "date": 1790967501906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 479.375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 469.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 63.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 416.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.6171875,
            "unit": "MiB"
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
        "date": 1791217150769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 472.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 455.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 107.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 91.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 434.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 331.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 311.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.51953125,
            "unit": "MiB"
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
        "date": 1791295492598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 477.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 480.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 435.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 432.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.28515625,
            "unit": "MiB"
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
        "date": 1791302403197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 481.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 473.25,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 60.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 82.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 332.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 319.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.546875,
            "unit": "MiB"
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
        "date": 1791371560036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 474.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 466.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 435.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 329.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 333.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.22265625,
            "unit": "MiB"
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
        "date": 1791376372513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 483.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 470.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 454.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 333.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.70703125,
            "unit": "MiB"
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
        "date": 1791466942001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 480.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 469.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 456.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 433.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 433.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 331.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 332.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 426.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 263.74609375,
            "unit": "MiB"
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
        "date": 1791566437707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 482.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 467.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 451.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 434.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 330.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 332.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 334.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 243.33984375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1777048872255,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "61f2416088f120238aa393b66247bfc487a7658e",
          "message": "Make `MemoryPool` buffer acquisition async-ready (#1768)\n\n**What changed and why?**\n\nThis PR makes the `MemoryPool` trait async-capable by adding a new\n`get_buffer_async()` method, and wires up the CRT bridge so that buffer\nacquisition on the read path is spawned on a CRT event loop. (Note that\non write-path we must keep doing `get_buffer()` in a sync way due to CRT\nlimitation\n[here](https://github.com/awslabs/aws-c-s3/blob/main/source/s3_meta_request.c#L2618-L2631))\n\nCurrently, when the S3 client needs a memory buffer, it calls\n`get_buffer` and blocks until the buffer is allocated. This works fine\nnow because allocation is instant. But we want to support a future\nscenario where the pool is full and needs to wait for memory to free up.\nAdding `get_buffer_async` lays the groundwork — the actual behavior\ndoesn't change much (allocations are still instant, but they now execute\non a separate Task/Future on the read path), but the infrastructure is\nin place.\n\nThe async future is spawned on existing CRT's `EventLoopGroup`. Note\nthat there is a timing issue: we create the `CrtBufferPoolFactory`\n(wrapping `MemoryPoolFactory`) when building `S3ClientConfig`, but the\n`EventLoopGroup` doesn't exist yet — it's created inside\n`S3CrtClientInner::new()`. So the factory must be constructed before the\nthread pool it needs to reference. The solution is to create wrapper\n`MemoryPoolFactoryWrapper`.\n\n### Does this change impact existing behavior?\n\n- Get buffer on read-path is now fulfilled on a separate spawned\nTask/Future instead of immediately in a sync way.\n- `MemoryPool` trait has now `'static + Send` bounds\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-02T22:57:56Z",
          "tree_id": "8c343884699c4747da1913cb7573998c70b0d541",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f2416088f120238aa393b66247bfc487a7658e"
        },
        "date": 1772500518534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2887.515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4548.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8389.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8017.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8070.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 395.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.69140625,
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
          "id": "726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f",
          "message": "Upgrade Cargo dependencies (#1777)\n\nUpgrade Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-03T10:45:25Z",
          "tree_id": "b8094bd57bfc31d5559eb6a277e7e4a60ebdbf54",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f"
        },
        "date": 1772542963279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2850.125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4577.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8278.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8059.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8099.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 305.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.07421875,
            "unit": "MiB"
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
          "id": "41ae7ff7e7169de4f25bd33c39cee43c8c1c8555",
          "message": "Add DEVELOPMENT.md doc (#1717)\n\nThis introduces a document describing how to get started as a\ncontributor to Mountpoint. This partially replaces existing internal\ndocumentation that we have.\n\nBy moving it into the repository, it is:\n\n- In an expected location\n- Available to internal and external contributors alike\n- Available for both developers but also AI agents should a developer\nwant to make use of AI tooling\n\n### Does this change impact existing behavior?\n\nNo, project docs change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-03T16:51:54Z",
          "tree_id": "9c75bc8fdbc30b5488075e814acdb510ced61e2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41ae7ff7e7169de4f25bd33c39cee43c8c1c8555"
        },
        "date": 1772564891817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2892.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8298.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8281.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8073.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.80078125,
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
          "id": "27ca3a014d7f5c8fb087faca52fd823a31a8788f",
          "message": "Bump docker/build-push-action from 6 to 7 (#1783)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<ul>\n<li>Node 24 as default runtime (requires <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Actions\nRunner v2.327.1</a> or later) by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1470\">docker/build-push-action#1470</a></li>\n<li>Remove deprecated <code>DOCKER_BUILD_NO_SUMMARY</code> and\n<code>DOCKER_BUILD_EXPORT_RETENTION_DAYS</code> envs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1473\">docker/build-push-action#1473</a></li>\n<li>Remove legacy export-build tool support for build summary by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1474\">docker/build-push-action#1474</a></li>\n<li>Switch to ESM and update config/test wiring by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1466\">docker/build-push-action#1466</a></li>\n<li>Bump <code>@​actions/core</code> from 1.11.1 to 3.0.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1454\">docker/build-push-action#1454</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.62.1 to 0.79.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1453\">docker/build-push-action#1453</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1472\">docker/build-push-action#1472</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1479\">docker/build-push-action#1479</a></li>\n<li>Bump minimatch from 3.1.2 to 3.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1463\">docker/build-push-action#1463</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0\">https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0</a></p>\n<h2>v6.19.2</h2>\n<ul>\n<li>Preserve port in <code>GIT_AUTH_TOKEN</code> host by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1458\">docker/build-push-action#1458</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2\">https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2</a></p>\n<h2>v6.19.1</h2>\n<ul>\n<li>Derive <code>GIT_AUTH_TOKEN</code> host from GitHub server URL by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1456\">docker/build-push-action#1456</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1\">https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1</a></p>\n<h2>v6.19.0</h2>\n<ul>\n<li>Scope default git auth token to <code>github.com</code> by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1451\">docker/build-push-action#1451</a></li>\n<li>Bump brace-expansion from 1.1.11 to 1.1.12 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1396\">docker/build-push-action#1396</a></li>\n<li>Bump form-data from 2.5.1 to 2.5.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1391\">docker/build-push-action#1391</a></li>\n<li>Bump js-yaml from 3.14.1 to 3.14.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1429\">docker/build-push-action#1429</a></li>\n<li>Bump lodash from 4.17.21 to 4.17.23 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1446\">docker/build-push-action#1446</a></li>\n<li>Bump tmp from 0.2.3 to 0.2.4 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1398\">docker/build-push-action#1398</a></li>\n<li>Bump undici from 5.28.4 to 5.29.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1397\">docker/build-push-action#1397</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0\">https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0</a></p>\n<h2>v6.18.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.61.0 to 0.62.1 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1381\">docker/build-push-action#1381</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\n<a\nhref=\"https://docs.docker.com/build/ci/github-actions/build-summary/\">Build\nsummary</a> is now supported with <a\nhref=\"https://docs.docker.com/build-cloud/\">Docker Build Cloud</a>.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0\">https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0</a></p>\n<h2>v6.17.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.59.0 to 0.61.0 by\n<a href=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1364\">docker/build-push-action#1364</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\nBuild record is now exported using the <a\nhref=\"https://docs.docker.com/reference/cli/docker/buildx/history/export/\"><code>buildx\nhistory export</code></a> command instead of the legacy export-build\ntool.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0\">https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0</a></p>\n<h2>v6.16.0</h2>\n<ul>\n<li>Handle no default attestations env var by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1343\">docker/build-push-action#1343</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/d08e5c354a6adb9ed34480a06d141179aa583294\"><code>d08e5c3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1479\">#1479</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cbd2dff9a0f0ef650dcce9c635bb2f877ab37be5\"><code>cbd2dff</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/f76f51f12900bb84aa9d1a498f35870ef1f76675\"><code>f76f51f</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.78.0 to\n0.79.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7d03e66b5f24d6b390ab64b132795fd3ef4152c8\"><code>7d03e66</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1473\">#1473</a>\nfrom crazy-max/rm-deprecated-envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/98f853d923dd281a3bcbbb98a0712a91aa913322\"><code>98f853d</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cadccf6e8c7385c86d9cb0800cf07672645cc238\"><code>cadccf6</code></a>\nremove deprecated envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03fe8775e325e34fffbda44c73316f8287aea372\"><code>03fe877</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1478\">#1478</a>\nfrom docker/dependabot/github_actions/docker/setup-b...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/827e36650e1fa7386d09422b5ba3c068fdbe0a1d\"><code>827e366</code></a>\nchore(deps): Bump docker/setup-buildx-action from 3 to 4</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/e25db879d025485a4eebd64fea9bb88a43632da6\"><code>e25db87</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1474\">#1474</a>\nfrom crazy-max/rm-export-build-tool</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/1ac2573b5c8b4e4621d5453ab2a99e83725242bd\"><code>1ac2573</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1470\">#1470</a>\nfrom crazy-max/node24</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-09T09:33:27Z",
          "tree_id": "c9ba3743efd90d6b4ae95a2dad003035dfe5d3ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27ca3a014d7f5c8fb087faca52fd823a31a8788f"
        },
        "date": 1773057004871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2862.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8194.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8208.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8161.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.453125,
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
          "id": "90bb0b4d4f890bc0a77898f6d7cdbb20895a9650",
          "message": "Fix default data cache limit validation during eviction (#1779)\n\nFixes `is_limit_exceeded()` function used by the data cache when in\ndefault mode (which should keep 5% of space in the cache file system).\nBefore the fix, it was incorrectly considering space reserved by the\nfile system as available space leading to 100% space usage. Now,\nreserved space is considered and the 5% available space is respected. A\nregression test was also added.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-09T16:47:27Z",
          "tree_id": "20f6ef4d0237f2a088335d68be2c71196eaf7748",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bb0b4d4f890bc0a77898f6d7cdbb20895a9650"
        },
        "date": 1773083107612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2858.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4596.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8316.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8148.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8134.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2113.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.04296875,
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
          "id": "855fa94bd3b40780018368a90b16ef837eb7e2f4",
          "message": "Fix read issue on concurrent open after truncate (#1781)\n\nFix race condition when 2 concurrent open requests occur after a\ntruncate and resulting in errors on read.\n\nThe issue is caused by a concurrent operation which ignores that the\ninode is still completing an upload and tries to refresh its state by\nperforming a remote lookup to the bucket. By the time the remote lookup\ncompletes, its result may be stale but still be used to overwrite the\nresult of the upload. This fix adds a check for a pending upload instead\nof only relying on the `write_status` field.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog entries for a patch release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T17:42:42Z",
          "tree_id": "beb72a04226e62ebc716133f9c9b272a97fa25ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/855fa94bd3b40780018368a90b16ef837eb7e2f4"
        },
        "date": 1773086422479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2863.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4558.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8210.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8198.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8072.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.828125,
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
          "id": "4270f8c47fa0717a9dcc87828eca01d12fc42d7a",
          "message": "Update changelogs for v1.22.1 release (#1784)\n\nUpdate changelogs for v1.22.1 release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T18:29:42Z",
          "tree_id": "c65d8b678eb9cb90ff43817065ad504b9b8cd445",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4270f8c47fa0717a9dcc87828eca01d12fc42d7a"
        },
        "date": 1773089299996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2931.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4554.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8259.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8070.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8218.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 307.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.02734375,
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
          "id": "0e042567569dedfe47397ee0dc023917771faefb",
          "message": "Update CRT submodules to latest releases (#1778)\n\nUpdate the CRT submodules to the latest releases.\n\nUpdated libraries:\n- aws-c-auth: v0.9.5 -> v0.10.0\n- Pick up: support imds endpoint override\n([#286](https://github.com/awslabs/aws-c-auth/pull/286))\n- aws-c-http: v0.10.9 -> v0.10.11\n- aws-c-io: v0.26.0 -> v0.26.1\n- aws-checksums: v0.2.8 -> v0.2.10\n- aws-lc: v1.66.2 -> v1.69.0\n- s2n-tls: v1.6.4 -> v1.7.0\n\n\n<details> <summary>Full CRT changelog:</summary>\n\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth a4409b95..5aefd277:\n  > support imds endpoint override (#286)\n  > Prioritizing profile credentials over credential_process when both are present (#288)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http acf31399..0d8e1a93:\n  > Fail http proxy configuration when using SecItem (#551)\n  > [fix] h2 stream manager initial settings not passed correctly & Log the headers (#544)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io d5ad01ce..bfb0819d:\n  > Add PQ-opt-out pref to supported s2n cases (#786)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 270b15ac..1d5f2f1f:\n  > Add flag to disable unknown pragmas on ARM (#111)\n  > Add XXHash algos (#110)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 728811ee..37d86461:\n  > Return correct error value when parsing PKCS7 authenticated attributes fails (#3061)\n  > Use CRYPTO_memcmp instead of OPENSSL_memcmp for tag verification (#3060)\n  > Ensure all signer certificate chains are verified (#3059)\n  > Prepare v1.69.0 (#3049)\n  > Simplify `d2i_PKCS7` by removing redundant BER-to-DER conversion (#3037)\n  > Key state consistency in PQDSA_KEY setter functions (#3040)\n  > Fix error return values for no-op UI_xxx stub functions (#3025)\n  > Update ACVP documentation (#2960)\n  > Retain flag after custom critical extensions check (#3030)\n  > Fix PKCS7 verify content memleak (#3036)\n  > Fix error reporting and document EC explicit params single-cert behavior (#3044)\n  > Various PKCS7 fixups (#3035)\n  > Fix link in README.md (#2945)\n  > Fix FIPS delocator handling of floating-point immediates on aarch64 (#3029)\n  > Prepare v1.68.0 (#3022)\n  > Refactor PQDSA_KEY set_raw functions to use goto-err cleanup (#2993)\n  > Generate Rust Bindings (#2999)\n  > Support WASM/Emscripten (#2959)\n  > Update Ubuntu 24:04 image compiler verification (#3017)\n  > Fix CI: mariadb (#3015)\n  > Miscellaneous CI improvements (#2978)\n  > Fix argument order in `hmac_copy` (#3014)\n  > Fix OPENSSL_memchr per C23 (#3008)\n  > Fix Windows CI: use `cd /d` in run_windows_tests.bat to handle cross-drive paths (#3012)\n  > Fix CI: gcc-4.8 (#3011)\n  > Reject XOF digests in DH_compute_key_hashed\n  > reject zero-sized digests in HKDF EVP_PKEY\n  > evp: disable EVP_PKEY_derive for KEM method\n  > pkcs8: cap ciphertext length before allocating in pkcs8_pbe_decrypt\n  > 1-byte OOB read in EVP_PKEY_asn1_find_str length calculation\n  > evp: fix DSA keygen error-path UAF/double-free\n  > Correct CCM nids in object definition (#2991)\n  > Ensure public key is set before verifying through ML-DSA verify (#2990)\n  > Remove redundant CPython 3.9 integration test (#2996)\n  > Ensure no overflow in signed output length in do_buf (#2988)\n  > Ensure index argument is not negative in ASN1_BIT_STRING_set_bit (#2987)\n  > Add PyOpenSSL integration test (#2992)\n  > Free potential memory before assigning new pointer (#2989)\n  > Support GCC 4.8 for aarch64 (#2964)\n  > Bump bytes from 1.7.1 to 1.11.1 in /tests/ci/lambda (#2983)\n  > Address some CMake findings (#2979)\n  > Update Wycheproof ECDSA test vectors and fix workflow typo (#2972)\n  > Disable SLP vectorizer for FIPS shared library builds on GCC 14+ (#2977)\n  > Nmap build needs liblinear (#2985)\n  > Add method to get type of ML-DSA instance configured under EVP PKEY (#2980)\n  > Fix aws-lc-rs CI job (#2966)\n  > Simplify FIPS conditional in top-level build script (#2976)\n  > Integrate Wycheproof ML-DSA test vectors (#2973)\n  > Bump mysql cluster version (#2967)\n  > Shorten Windows Build Directory Path (#2974)\n  > Add missing env vars to check-vectors workflow step (#2962)\n  > Fix checkout logic for android-omnibus (#2970)\n  > Ensure pkcs7 checks ASN1_TYPE->type (#2968)\n  > Migrate Android Testing to GitHub Actions (#2969)\n  > Adds a new randomness generation API (#2963)\n  > Model Device Farm CI Resources in CDK (#2965)\n  > Remove FIPS counter framework and other tidying up (#2947)\n  > Fix image-build-windows workflow to only push on workflow_call and workflow_dispatch (#2961)\n  > Move md4 out of FIPS module (#2956)\n  > Initial Framework for Using Doxygen to Document Public Header Files (#2908)\n  > openssl-ca command implementation for self-sign certificates (#2937)\n  > Remove AVX conditional from cmake script (#2958)\n  > Enable Hybrid PQ KeyShares by default (#2531)\n  > Add weekly automated check for outdated third-party test vectors (#2933)\n  > Bump urllib3 from 2.6.0 to 2.6.3 in /tests/ci (#2932)\n  > Prepare v1.67.0 (#2952)\n  > Bump FreeBSD testing to v14.2 and v15.0 (#2955)\n  > Fix CMake CI jobs (#2953)\n  > Update patch for nmap. (#2954)\n  > Cleanup pass on Go code in repository (#2951)\n  > Avoid cross-compilation build failure (#2944)\n  > Integrate Wycheproof ML-KEM test vectors (#2891)\n  > Use existing session context if new is actually NULL (#2946)\n  > Import mldsa-native (#2902)\n  > Windows 7 support (#2940)\n  > Remove Kyber completely (#2941)\n  > Use already defined macro for no inline (#2942)\n  > AES-GCM: Add function pointer trampolines to avoid delocator issue (#2919)\n  > Add support for Big Endian in ACVP tool (#2938)\n  > Service Indicator: Add error call trampoline to avoid delocator issue (#2920)\n  > Fix failing Windows Docker image build (#2931)\n  > Rename volatile state/memory to unique state/memory (#2935)\n  > increase timeout for SDE tests (#2936)\n  > Migrate Wycheproof test vectors for ECDSA, RSA PKCS#1, and some more (#2887)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 3276a087..f5e5e830:\n  > chore: rust binding release v0.3.34 (#5707)\n  > chore: add static lists of supported TLS parameters (#5698)\n  > feat(bindings): expose disable_x509_intent_verification API (#5703)\n  > test (integration): add renegotiate rust test (#5689)\n  > test(integration): add rust test for session resumption (#5683)\n  > chore: move s2n-tls-bench to Codebuild (#5693)\n  > chore: update s2n-tls-hyper crates version to 0.1.0 (#5702)\n  > Mark Kyber as unsupported on all LibCrypto variants (#5701)\n  > chore: bump standard MSRV to 1.83 (#5700)\n  > chore: bump to nixpkgs 2025.05 (#5489)\n  > build(deps): update reqwest requirement from 0.12.7 to 0.13.1 in /tests/pcap in the all-cargo-updates group across 1 directory (#5690)\n  > (chore): Rust bindings bump 0.3.33 (#5694)\n```\n\n\n</details>\n\nConfirmed the crate size is under the 10MiB limit (8.3MiB compressed)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-10T10:36:51Z",
          "tree_id": "8aa074215eb0f1357c6bdf9c18daed19542706ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e042567569dedfe47397ee0dc023917771faefb"
        },
        "date": 1773147286851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2926.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4588.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8215.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8013.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8150.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.68359375,
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
          "id": "d2c41aba090af32c8d867b0fe4a67ae82169763a",
          "message": "Fix build failure on macOS (#1785)\n\nFix a platform-specific type casting error surfaced on macOS.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-11T10:40:37Z",
          "tree_id": "813a7ad399f17fbc0a4ee3deee0ce08c0ccfcb0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2c41aba090af32c8d867b0fe4a67ae82169763a"
        },
        "date": 1773233815548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4572.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8411.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8191.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8264.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2100.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2097.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.3125,
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
          "id": "43618edd0ccfb65c7264eeeca35cab59e4741cbf",
          "message": "CI: Run Clippy on macOS (#1786)\n\nAdd clippy to the macOS workflow. It will help detect issues like #1785\nearly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-12T12:24:24Z",
          "tree_id": "293d67e3c74b0b61d7e55481a4d31228a782d02c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43618edd0ccfb65c7264eeeca35cab59e4741cbf"
        },
        "date": 1773326605142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2895.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.2578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8323.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8111.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8157.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1078.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.046875,
            "unit": "MiB"
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
          "id": "0a205061c3231ef239d67c6836d1cb94aaaeabb0",
          "message": "Add developer container to support running integration tests, etc. on macOS (#1780)\n\nOn macOS, it is not considered reliable to run the integration tests for\nFUSE. This PR introduces a container for performing development-related\ntasks, but in particular running integration tests.\n\nThis allows developers using a macOS system to run FUSE tests using a\nreal Linux kernel (when using something like Docker Desktop, Colima,\nFinch, etc..).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, developer change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-13T10:23:17Z",
          "tree_id": "97f08ec0d1b4b9c529653eba5a90b5db47d8f6d1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a205061c3231ef239d67c6836d1cb94aaaeabb0"
        },
        "date": 1773405639050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2893.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4591.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8326.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8232.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8050.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 1072.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.4609375,
            "unit": "MiB"
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
          "id": "7c41baaa3ca29d9f0215573fb3bb9e6303150e9d",
          "message": "Update dev container to support local cache tests depending on loopback fs (#1788)\n\nBefore this change, running integration tests in the container would\nfail as it would not be able to run sudo, create the ext4 filesystem\netc. introduced by #1779.\n\nThis change updates the container to be able to invoke sudo, and adds\nmissing dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dev container change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T14:37:38Z",
          "tree_id": "807ed655a8ee90ed37491395f499f4f382f17ab6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c41baaa3ca29d9f0215573fb3bb9e6303150e9d"
        },
        "date": 1773766601672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4575.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8340.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8040.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8194.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.625,
            "unit": "MiB"
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
          "id": "57116c95347e5ff868fd45853f33c26e9dad12ee",
          "message": "Update local cache loop device fs tests with better error handling (#1789)\n\nBefore this change, it was difficult to identify what was going wrong\nwith a test that involved creating a new ext4 filesystem using a loop\ndevice. It might fail simply with \"file not found\" when `sudo` was not\ninstalled.\n\nThis change updates the test to use anyhow in order to capture\nadditional context about what went wrong. The use of anyhow is limited\nto the tests and not the source code.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T15:10:16Z",
          "tree_id": "63e9ff6474a19b6807e1285a90c24f50cc03c892",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57116c95347e5ff868fd45853f33c26e9dad12ee"
        },
        "date": 1773769005516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2898.15234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4616.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8228.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8035.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8251.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2099.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2081.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.81640625,
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
          "id": "1be83cb7c78a297819cffe35d7782e84e4d3ad19",
          "message": "Bump slackapi/slack-github-action from 2.1.1 to 3.0.1 (#1791)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.1 to 3.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.1</h2>\n<h2>What's Changed</h2>\n<p>Alongside the breaking changes of <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.0\"><code>@v3.0.0</code></a>\nand a <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/\">new\ntechnique</a> to run Slack CLI commands, we tried the wrong name to\npublish to the GitHub Marketplace 🐙 This action is now noted as <a\nhref=\"https://github.com/marketplace/actions/the-slack-github-action\"><strong>The\nSlack GitHub Action</strong></a> in listings 🎶 ✨</p>\n<h3>:art: Maintenance</h3>\n<ul>\n<li>chore: use a unique title for marketplace in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/576\">slackapi/slack-github-action#576</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>chore(release): tag version 3.0.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/577\">slackapi/slack-github-action#577</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1\">https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1</a></p>\n<h2>Slack GitHub Action v3.0.0</h2>\n<blockquote>\n<p>The <code>@v3.0.0</code> release had a hiccup on publish and we\nrecommend using <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.1\"><strong><code>@​v3.0.1</code></strong></a>\nor a more recent version when updating! Oops!</p>\n</blockquote>\n<p>🎽 <strong>Running Slack CLI commands and the active Node runtime,\nboth included in this release</strong> 👟 ✨</p>\n<h3>⚠️ Breaking change: Node.js 24 the runtime</h3>\n<p>This major version updates the GitHub Actions required runtime to <a\nhref=\"https://nodejs.org/en/about/previous-releases\"><strong>Node.js\n24</strong>.</a> Most <a\nhref=\"https://github.com/actions/runner-images?tab=readme-ov-file#software-and-image-support\">GitHub-hosted\nrunners</a> already include this, but self-hosted runners may need to be\nupdated ahead of <a\nhref=\"https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/\">planned\ndeprecations of Node 20 on GitHub Actions runners</a>.</p>\n<h3>📺 Enhancement: Run Slack CLI commands</h3>\n<p>This release introduces a new technique for running <a\nhref=\"https://docs.slack.dev/tools/slack-cli\">Slack CLI</a> commands\ndirectly in GitHub Actions workflows. Use this to install the latest\nversion (or a specific one) of the CLI and execute commands like\n<code>deploy</code> for merges to main, <code>manifest validate</code>\nwith tests, and other <a\nhref=\"https://docs.slack.dev/tools/slack-cli/reference/commands/slack\">commands</a>.</p>\n<p>Gather a token using the following CLI command to store with repo\nsecrets, then get started with an example below:</p>\n<pre><code>$ slack auth token\n</code></pre>\n<h3>🧪 Validate an app manifest on pull requests</h3>\n<p>Check that your app manifest is valid before merging changes:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest</a></p>\n<pre lang=\"yaml\"><code>- name: Validate the manifest\n  uses: slackapi/slack-github-action/cli@v3.0.0\n  with:\ncommand: &quot;manifest validate --app ${{ vars.SLACK_APP_ID }}&quot;\n    token: ${{ secrets.SLACK_SERVICE_TOKEN }}\n</code></pre>\n<h3>🚀 Deploy your app on push to main</h3>\n<p>Automate deployments whenever changes land on your main branch:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/af78098f536edbc4de71162a307590698245be95\"><code>af78098</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/add1a00063f351e4c0e55c3703da81637f03a8be\"><code>add1a00</code></a>\nchore(release): tag version 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/577\">#577</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/2bc9e7a4cd10f4d06ef49b8fa8a11efdc7fb891b\"><code>2bc9e7a</code></a>\nchore: use a unique title for marketplace (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/576\">#576</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5d43dad17bba7ebd47486137b9ab6936fd6bbf4\"><code>c5d43da</code></a>\nchore(release): tag version 3.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/575\">#575</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/963b9796dcc3184602a0aefe2f052d034027bfaf\"><code>963b979</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.14.1 to 7.15.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/574\">#574</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/90b7328a4cea35bd9dc6fc64d7f70e772d6d5876\"><code>90b7328</code></a>\nbuild(deps): bump <code>@​slack/logger</code> from 4.0.0 to 4.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/573\">#573</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e45cb891a61f925570820f137980df2028625fec\"><code>e45cb89</code></a>\nfeat: support slack cli commands with composite action inputs (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/560\">#560</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0aed2c2a70fe17c67bfd489b5dc3d9b410f69f79\"><code>0aed2c2</code></a>\nbuild(deps): bump https-proxy-agent from 7.0.6 to 8.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/572\">#572</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/4795f96c2818074349810cac0abc3bf5437bdc2c\"><code>4795f96</code></a>\nbuild(deps-dev): bump sinon from 21.0.1 to 21.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/571\">#571</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/bd9e2ce619554772120b8cfcbbc7fe4bd2d42a2f\"><code>bd9e2ce</code></a>\nbuild(deps): bump actions/setup-node from 6.2.0 to 6.3.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/569\">#569</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.1...v3.0.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.1&new-version=3.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-17T16:05:49Z",
          "tree_id": "c9ed45fb7b9e1caaa063e173f7c310ae62c7d5a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1be83cb7c78a297819cffe35d7782e84e4d3ad19"
        },
        "date": 1773773777532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2895.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4580.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8339.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8153.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8190.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 718.0703125,
            "unit": "MiB"
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
          "id": "e7eaeb6717b9ca938c8d8fa14006bcd32c765da6",
          "message": "Update changelogs for v1.22.2 release (#1794)\n\nUpdate changelogs for v1.22.2 release.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-03-20T15:11:04Z",
          "tree_id": "d3517aaf8f5617f8a9ace3424b0acd952f5962f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7eaeb6717b9ca938c8d8fa14006bcd32c765da6"
        },
        "date": 1774027735949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2865.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4582.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8291.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8229.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8102.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 396.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 224.57421875,
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
          "id": "55d81b6a748372c4e9e4164dfbf80bf02168c257",
          "message": "Update usages of GPG public keys with new rotated key (#1795)\n\nWe have a new GPG public key because the old one will expire soon. In\nthis PR we:\n- Update the usages of the public keys in the documentation with the new\none.\n- Simplify the `docker/Dockerfile` by installing `mount-s3` from AL2023\npackage repository\n\nTesting:\n```\n$ docker build -t mountpoint-s3 docker/\n[+] Building 16.9s (7/7) FINISHED                                                                                                                                                                                                                                              docker:default\n => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                     0.0s\n => => transferring dockerfile: 334B                                                                                                                                                                                                                                                     0.0s\n => [internal] load metadata for public.ecr.aws/amazonlinux/amazonlinux:2023                                                                                                                                                                                                             1.2s\n => [internal] load .dockerignore                                                                                                                                                                                                                                                        0.0s\n => => transferring context: 2B                                                                                                                                                                                                                                                          0.0s\n => CACHED [1/3] FROM public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                0.0s\n => => resolve public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                       0.0s\n => [2/3] RUN dnf upgrade -y &&     dnf install -y mount-s3 &&     dnf clean all                                                                                                                                                                                                        14.9s\n => [3/3] RUN echo \"user_allow_other\" >> /etc/fuse.conf                                                                                                                                                                                                                                  0.6s\n => exporting to image                                                                                                                                                                                                                                                                   0.1s \n => => exporting layers                                                                                                                                                                                                                                                                  0.1s \n => => writing image sha256:3ba80d05a326e4049cfeefb1d09697d977eaebfdcfcce565308e5de293a5f143                                                                                                                                                                                             0.0s \n => => naming to docker.io/library/mountpoint-s3                                                                                                                                                                                                                                         0.0s \n\n$ docker run --rm mountpoint-s3 --version\nmount-s3 1.22.0+1.amzn2023\n```\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nYes (in the release commit) and no.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-20T16:22:45Z",
          "tree_id": "aa7c2c082e5e2d9d5d865e1e51099f70768a366b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55d81b6a748372c4e9e4164dfbf80bf02168c257"
        },
        "date": 1774032092000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2851.453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8240.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8082.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8002.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 271.04296875,
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
          "id": "813d41a1826d02288912ff7f72f118bedc2dcc64",
          "message": "Update Cargo dependencies (#1797)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-23T11:14:08Z",
          "tree_id": "eeeaf89f1bdf841214f4b0bb48bb4d216727f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813d41a1826d02288912ff7f72f118bedc2dcc64"
        },
        "date": 1774272712376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2890.43359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8326.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8137.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8037.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.32421875,
            "unit": "MiB"
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
          "id": "6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2",
          "message": "Add dev-container environment variable propagation allowlist (#1792)\n\nTo debug an issue, I wanted to use a different logging level in tests.\nThis change adds an allowlist of environment variables to automatically\npass into the dev-container.\n\n### Does this change impact existing behavior?\n\nNo, dev-container change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-23T16:06:04Z",
          "tree_id": "d4a007c7e3899b2a7805e2c8c3578748da154b2e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2"
        },
        "date": 1774290483389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2852.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8393.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 55.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8147.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.04296875,
            "unit": "MiB"
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
          "id": "fd1c93202af0b75eaff505ffeeb08cc283048b4f",
          "message": "Add client error for S3 Express session creation failure (#1793)\n\nThis change introduces a proper S3 client error for when the CRT fails\nto create an S3 Express session, such as when having no authorization to\ndo so.\n\nInstead of a CRT error code, the customer will now see a clear message\n\"Failed to create S3 Express session, see CRT debug logs\".\n\nThis change also updates many tests that were previously testing S3\ngeneral purpose buckets to correctly test S3 Express / directory\nbuckets.\n\n### Does this change impact existing behavior?\n\nYes, it improves S3 Express session creation failure error messages. It\nincludes a call to action to direct the customer to check CRT debug logs\nto help them resolve the issue.\n\nIn the client, it introduces a new error variant.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nGiven the new error variant, the S3 client is a unstable minor version\nbump. (Effectively major.)\n\nFor all other crates and MP itself, a patch version bump has been\napplied, alongside changelog entries. The change is fairly minimal.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T11:22:07Z",
          "tree_id": "88c5ee68d8cdf7f802dbdc0228a84d9dc0e624af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd1c93202af0b75eaff505ffeeb08cc283048b4f"
        },
        "date": 1774618768457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2907.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8241.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8066.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8192.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.3984375,
            "unit": "MiB"
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
          "id": "57cd918400cb3448f523c801fe11dc9675c93fdb",
          "message": "Update Mountpoint crates to track dependencies between each other via workspace manifest, update dependencies (#1799)\n\nThis is a simple change to where the dependencies between Mountpoint\ncrates resides. Instead of this being scattered and duplicated across\nthe crate manifests, each manifest instead declares a dependency where\nthe specifics of the dependency are defined on the workspace. In the\nworkspace, we define the version, path, and features.\n\nThe motivation is to reduce the burden when making changes to the\nversion numbers of our crates.\n\nThis change also updates some dependencies via `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just Cargo manifest updates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T13:03:13Z",
          "tree_id": "931b3c3fd031de31ad6a6c791c9d4699872a0870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57cd918400cb3448f523c801fe11dc9675c93fdb"
        },
        "date": 1774624782673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2913.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4554.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8295.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 56.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8148.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8253.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 426.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.59375,
            "unit": "MiB"
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
          "id": "90bc1bfe91575198b5e3b413bb6b89b5dca2af6c",
          "message": "Remove last usages of forbidden CI bucket (#1802)\n\nThis change removes the last of the 'forbidden bucket' test\ndependencies. The tests were previously dependent on a bucket with a\npolicy banning almost all S3 operations. Instead, we now use session\npolicies to restrict access on a per-test basis.\n\n### Does this change impact existing behavior?\n\nTest change only. Removes the need to supply a forbidden bucket for\ntests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-04-08T13:57:32Z",
          "tree_id": "a3b2608bb8cf0baac3ae6f159a3c5c361c66eb79",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bc1bfe91575198b5e3b413bb6b89b5dca2af6c"
        },
        "date": 1775664978218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2908.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4633.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8202.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8199.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 416.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.54296875,
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
          "id": "3a5e2d4981df3e21765c730618fa1eafa09dd14e",
          "message": "Bump rand from 0.10.0 to 0.10.1 (#1805)\n\nBumps [rand](https://github.com/rust-random/rand) from 0.10.0 to 0.10.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-random/rand/blob/master/CHANGELOG.md\">rand's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.10.1] — 2026-02-11</h2>\n<p>This release includes a fix for a soundness bug; see <a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>.</p>\n<h3>Changes</h3>\n<ul>\n<li>Document panic behavior of <code>make_rng</code> and add\n<code>#[track_caller]</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li>Deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1761\">rust-random/rand#1761</a>\n<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1763\">rust-random/rand#1763</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/27ff4cb7ced3122a1f677fc248c1a07e59ddc8cd\"><code>27ff4cb</code></a>\nPrepare v0.10.1: deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/98d06386dc4e1d1c89a91f4e483d571921c29ecf\"><code>98d0638</code></a>\nmake_rng: document panic and add #[track_caller] (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/54e5eaaa7ac11af3aa60b5ccc486182189e6f9ef\"><code>54e5eaa</code></a>\nFix doc error (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1758\">#1758</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/1ce4c080186730595a8d464591d17aac22a42252\"><code>1ce4c08</code></a>\nBump itoa from 1.0.17 to 1.0.18 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1756\">#1756</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/ccb734b9c22891a19f11be125c2f09a43809b08e\"><code>ccb734b</code></a>\ndocs: fix typo in doc comment (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1754\">#1754</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/357eb7de9c9c80184449e8b515c821e48cf4df74\"><code>357eb7d</code></a>\nBump libc from 0.2.182 to 0.2.183 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1753\">#1753</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/5e77fe5d61b886988cae67b6d8fb09e405845c63\"><code>5e77fe5</code></a>\nFix trait references in documentation (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1752\">#1752</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/da891850ab2b38f4322ec140ae29d305dfb162c3\"><code>da89185</code></a>\nBump the all-deps group with 3 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1751\">#1751</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/50516ff45c3675d9c2d247e70bc8db691ed8366d\"><code>50516ff</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1749\">#1749</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/fd71de97fdc7050b9a2d8384f5f8afce7d991ca3\"><code>fd71de9</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1747\">#1747</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-random/rand/compare/0.10.0...0.10.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=rand&package-manager=cargo&previous-version=0.10.0&new-version=0.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-14T15:45:15Z",
          "tree_id": "2ce5a955925bab2ea8a698d714fa151014d315b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a5e2d4981df3e21765c730618fa1eafa09dd14e"
        },
        "date": 1776190982269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2877.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8186.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8239,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.03515625,
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
          "distinct": false,
          "id": "4625a683175a83619d8e9967f85e025ded4711bc",
          "message": "Update Cargo dependencies (#1811)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased `mount-s3` patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-17T23:17:48Z",
          "tree_id": "dac787a5797eac8f4a50e7da0cd2db79a1e0f501",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4625a683175a83619d8e9967f85e025ded4711bc"
        },
        "date": 1776476333920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2884.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4553.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8265.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 44.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8082.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8219.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2091.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.5625,
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
          "id": "49dd2df24d8c6adacd34e30df5b63026750578be",
          "message": "Bump pygments from 2.19.2 to 2.20.0 in /benchmark (#1803)\n\nBumps [pygments](https://github.com/pygments/pygments) from 2.19.2 to\n2.20.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/releases\">pygments's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.20.0</h2>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/blob/master/CHANGES\">pygments's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Version 2.20.0</h2>\n<p>(released March 29th, 2026)</p>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/708197d82827ba2d5ca78bcbb653c7102ce86dcd\"><code>708197d</code></a>\nFix underline length.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d4538ae8621d766ecc91ff59caf76ab75983abc\"><code>1d4538a</code></a>\nPrepare 2.20 release.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/2ceaee4e634eebae2d10a47fd05406871f6bac8f\"><code>2ceaee4</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/e3a3c54b58c7f80bc4db887e471d4f91c77844ed\"><code>e3a3c54</code></a>\nFix Haskell lexer: handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/d7c3453e342dac319f58e4091f4ef183cc49d802\"><code>d7c3453</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3071\">#3071</a>\nfrom pygments/harden-html-formatter</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/0f97e7c37d44abfa4ddfddf44a3290fdad586034\"><code>0f97e7c</code></a>\nHarden the HTML formatter against CSS.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/9f981b2ba42b88ca5bdcebf12cd01efd7cd80aec\"><code>9f981b2</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d889151024e9a53f3702a60558b29b070306e9e\"><code>1d88915</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/c3d93adb9827fc054c3c12b47bde31c781a36a93\"><code>c3d93ad</code></a>\nFix ASN.1 lexer: recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/4f06bcf8a5ba3f2b5bda24a26ccf041a1a65d91e\"><code>4f06bcf</code></a>\nfix bad behaving backtracking regex in CommonLispLexer</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pygments/pygments/compare/2.19.2...2.20.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pygments&package-manager=uv&previous-version=2.19.2&new-version=2.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-17T23:18:51Z",
          "tree_id": "fd96b6795171141aa6958932ddb0d93050463a22",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49dd2df24d8c6adacd34e30df5b63026750578be"
        },
        "date": 1776477503472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2873.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4570.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8425.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8246.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8250.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.796875,
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
          "id": "b05b605e488ec6b65330d2ffc4c1d652c6790e8c",
          "message": "Bump pytest from 8.4.1 to 9.0.3 in /benchmark (#1807)\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 8.4.1 to\n9.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pytest-dev/pytest/releases\">pytest's\nreleases</a>.</em></p>\n<blockquote>\n<h2>9.0.3</h2>\n<h1>pytest 9.0.3 (2026-04-07)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12444\">#12444</a>:\nFixed <code>pytest.approx</code> which now correctly takes into account\n<code>~collections.abc.Mapping</code> keys order to compare them.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13634\">#13634</a>:\nBlocking a <code>conftest.py</code> file using the <code>-p no:</code>\noption is now explicitly disallowed.</p>\n<p>Previously this resulted in an internal assertion failure during\nplugin loading.</p>\n<p>Pytest now raises a clear <code>UsageError</code> explaining that\nconftest files are not plugins and cannot be disabled via\n<code>-p</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13734\">#13734</a>:\nFixed crash when a test raises an exceptiongroup with\n<code>__tracebackhide__ = True</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14195\">#14195</a>:\nFixed an issue where non-string messages passed to <!-- raw HTML omitted\n-->unittest.TestCase.subTest()<!-- raw HTML omitted --> were not\nprinted.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>:\nFixed use of insecure temporary directory (CVE-2025-71176).</p>\n</li>\n</ul>\n<h2>Improved documentation</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13388\">#13388</a>:\nClarified documentation for <code>-p</code> vs\n<code>PYTEST_PLUGINS</code> plugin loading and fixed an incorrect\n<code>-p</code> example.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13731\">#13731</a>:\nClarified that capture fixtures (e.g. <code>capsys</code> and\n<code>capfd</code>) take precedence over the <code>-s</code> /\n<code>--capture=no</code> command-line options in <code>Accessing\ncaptured output from a test function\n&lt;accessing-captured-output&gt;</code>.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14088\">#14088</a>:\nClarified that the default <code>pytest_collection</code> hook sets\n<code>session.items</code> before it calls\n<code>pytest_collection_finish</code>, not after.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14255\">#14255</a>:\nTOML integer log levels must be quoted: Updating reference\ndocumentation.</li>\n</ul>\n<h2>Contributor-facing changes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12689\">#12689</a>:\nThe test reports are now published to Codecov from GitHub Actions.\nThe test statistics is visible <a\nhref=\"https://app.codecov.io/gh/pytest-dev/pytest/tests\">on the web\ninterface</a>.</p>\n<p>-- by <code>aleguy02</code></p>\n</li>\n</ul>\n<h2>9.0.2</h2>\n<h1>pytest 9.0.2 (2025-12-06)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13896\">#13896</a>:\nThe terminal progress feature added in pytest 9.0.0 has been disabled by\ndefault, except on Windows, due to compatibility issues with some\nterminal emulators.</p>\n<p>You may enable it again by passing <code>-p terminalprogress</code>.\nWe may enable it by default again once compatibility improves in the\nfuture.</p>\n<p>Additionally, when the environment variable <code>TERM</code> is\n<code>dumb</code>, the escape codes are no longer emitted, even if the\nplugin is enabled.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13904\">#13904</a>:\nFixed the TOML type of the <code>tmp_path_retention_count</code>\nsettings in the API reference from number to string.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13946\">#13946</a>:\nThe private <code>config.inicfg</code> attribute was changed in a\nbreaking manner in pytest 9.0.0.\nDue to its usage in the ecosystem, it is now restored to working order\nusing a compatibility shim.\nIt will be deprecated in pytest 9.1 and removed in pytest 10.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/a7d58d7a21b78581e636bbbdea13c66ad1657c1e\"><code>a7d58d7</code></a>\nPrepare release version 9.0.3</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/089d98199c253d8f89a040243bc4f2aa6cd5ab22\"><code>089d981</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14366\">#14366</a>\nfrom bluetech/revert-14193-backport</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/8127eaf4ab7f6b2fdd0dc1b38343ec97aeef05ac\"><code>8127eaf</code></a>\nRevert &quot;Fix: assertrepr_compare respects dict insertion order (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14050\">#14050</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14193\">#14193</a>)&quot;</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/99a7e6029e7a6e8d53e5df114b1346e035370241\"><code>99a7e60</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14363\">#14363</a>\nfrom pytest-dev/patchback/backports/9.0.x/95d8423bd...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/ddee02a578da30dd43aedc39c1c1f1aaadfcee95\"><code>ddee02a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>\nfrom bluetech/cve-2025-71176-simple</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/74eac6916fee34726cb194f16c516e96fbd29619\"><code>74eac69</code></a>\ndoc: Update training info (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14298\">#14298</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14301\">#14301</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/f92dee777cfdb77d1c43633d02766ddf1f07c869\"><code>f92dee7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14267\">#14267</a>\nfrom pytest-dev/patchback/backports/9.0.x/d6fa26c62...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/7ee58acc8777c31ac6cf388d01addf5a414a7439\"><code>7ee58ac</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12378\">#12378</a>\nfrom Pierre-Sassoulas/fix-implicit-str-concat-and-d...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/37da870d37e3a2f5177cae075c7b9ae279432bf8\"><code>37da870</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14259\">#14259</a>\nfrom mitre88/patch-4 (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14268\">#14268</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/c34bfa3b7acb65b594707c714f1d8461b0304eed\"><code>c34bfa3</code></a>\nAdd explanation for string context diffs (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14257\">#14257</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14266\">#14266</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pytest-dev/pytest/compare/8.4.1...9.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pytest&package-manager=uv&previous-version=8.4.1&new-version=9.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-18T07:23:24Z",
          "tree_id": "2f703944b7dff2ba473abc4efca2e58cec6155f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b05b605e488ec6b65330d2ffc4c1d652c6790e8c"
        },
        "date": 1776505239507,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2876.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4542.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8332.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7946.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8162.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.85546875,
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
          "id": "59cfc3c750549a97d4badf853170cae9b15a4d09",
          "message": "Propagate file handle ID through the prefetcher as a HandleId type (#1809)\n\nWe need to attribute CRT meta-request buffer allocations back to the\nfile handle that originated them. This is a prerequisite for per-handle\nmemory accounting in the `MemoryLimiter`.\n\nThis PR threads the FUSE file handle ID (`fh`) from the point where a\nfile is opened (`FileHandleState::new`) all the way down to\n`GetObjectParams`, where it is available in scope when the CRT\nmeta-request is created. The changes are purely additive data threading\n— no existing logic is altered.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is an internal refactor with no user-visible behavior change\nand no public API impact.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-04-21T13:19:02Z",
          "tree_id": "e28bb22929a99eedebef02b67b2c74728aca85ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59cfc3c750549a97d4badf853170cae9b15a4d09"
        },
        "date": 1776785789561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2896.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4572.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 26.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8174.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8053.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.0625,
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
          "distinct": true,
          "id": "572e73b6691d01966f3f10bf1d10b5d649346278",
          "message": "Bump rustls-webpki from 0.103.12 to 0.103.13 (RUSTSEC-2026-0104) (#1814)\n\nBumps rustls-webpki to 0.103.13 to fix a security vulnerability\n(RUSTSEC-2026-0104).\nCargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T12:51:43Z",
          "tree_id": "8f708e74f21aee814535717b6c96bbbdf84117ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/572e73b6691d01966f3f10bf1d10b5d649346278"
        },
        "date": 1776871478971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2881.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8351.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8155.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8172.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 332.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.046875,
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
          "id": "912f18414eb1947362edef64501dfbc21fb92c82",
          "message": "Thread request ID from meta-request options into CRT buffer pool reservations (#1812)\n\nWe need to be able to identify which meta-request a buffer allocation\nbelongs to at the CRT pool layer.\n\nThis PR adds an optional `custom_id` to `MetaRequestOptionsInner` and\nexposes it through `MetaRequest`, which is now passed directly to\n`MemoryPool::get_buffer` / `get_buffer_async`. The identifier can be set\nvia `GetObjectParams::custom_id` and `PutObjectParams::custom_id` in the\nclient crate.\n\n\n### Does this change impact existing behavior?\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nThe `MemoryPool` trait signature changed, but the trait is marked\nexperimental. No user-visible behavior change otherwise.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T14:53:34Z",
          "tree_id": "3bb89fe1d597eb5d271dad40ddae5b16b16ad701",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/912f18414eb1947362edef64501dfbc21fb92c82"
        },
        "date": 1776878158576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2913.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4538.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8267.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8135.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8112.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 418.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.8984375,
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
          "distinct": true,
          "id": "2e31ed5bca353e0b3c912c58769b040e117970dc",
          "message": "Pass HandleId as custom_id in S3 request params (#1815)\n\nConnects the file handle ID to S3 request params, completing the link\nbetween PR #1809 (HandleId through prefetcher) and PR #1812 (custom_id\nthrough CRT buffer pool).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-23T15:11:04Z",
          "tree_id": "10430fff1d46b8832452ee6de66be30c0717b765",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e31ed5bca353e0b3c912c58769b040e117970dc"
        },
        "date": 1776965319790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2872.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8322.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8184.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.80859375,
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
          "id": "72e3a504cfb783ca2d76844461fa1c879238ee67",
          "message": "bench: Add memory-limited FIO benchmarks with breach detection (#1808)\n\n## Summary\n\nExtend the existing FIO throughput benchmarks CI so that each supported\nworkload also runs with Mountpoint built using `--features mem_limiter`\nand mounted with `--max-memory-target=512` (MiB - fixed). Under this\nextra pressure, Mountpoint must stay within the configured budget; the\nnew jobs surface per-test peak memory usage in a GitHub Actions step\nsummary table so regressions/improvements in the memory limiter are easy\nto spot.\n\nNon-latency only. Same FIO job definitions are used for both the regular\nand memory-limited variants.\n\n- The existing `bench` (S3 Standard), `cache-bench`, and S3 Express\n`bench` jobs are extended with a `strategy.matrix` that fans each one\nout to two variants:\n  - `default` — unchanged behaviour.\n- `mem-limited` — builds with `--features mem_limiter`, runs with\n`S3_MAX_MEMORY_TARGET_MIB=512`, and emits an extra GitHub Actions\nsummary table.\n\nThe matrix also drives per-variant job name suffixes, gh-pages chart\nsub-paths, and S3 results sub-prefixes, so the two variants don't\ncollide.\n- New `.github/actions/scripts/render-mem-summary.sh` that renders a\nMarkdown table to `$GITHUB_STEP_SUMMARY` with per-test peak RSS, the\nlimit, a breach flag, and peak reserved memory per area/kind. Gated on\n`matrix.variant == 'mem-limited'`.\n- Shared benchmark scripts (`fs_bench.sh`, `fs_cache_bench.sh`) are now\nparameterised via the `S3_MAX_MEMORY_TARGET_MIB` env variable. When set,\nthey:\n  - Build with `--features mem_limiter`.\n  - Mount with `--max-memory-target=<N>`.\n- Ask `mount-s3-log-analyzer` for an additional JSON file via\n`--mem-limit-mib=<N> --extra-metrics-out=<PATH>`.\n\n  When unset, behaviour is unchanged.\n- `mount-s3-log-analyzer` gains two optional flags, `--mem-limit-mib`\nand `--extra-metrics-out`, wired together with `clap`'s `requires` so\neither both are set or neither. When both are set, the analyzer also\nparses Mountpoint metric log lines for:\n  - `mem.bytes_reserved[area=prefetch]`\n  - `mem.bytes_reserved[area=upload]`\n  - `pool.reserved_bytes[kind=get_object]`\n  - `pool.reserved_bytes[kind=put_object]`\n\nand writes JSON with the test name, peak RSS in MiB, memory limit in\nMiB, a `breached = peak_rss_mib\n\n## Example GitHub Actions summary\n\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/24720419069\n\n```\n| Test | Peak RSS (MiB) | Memory Limit (MiB) | Status | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) |\n|---|---|---|---|---|---|---|---|\n| mix_1r4w | 1562.546875 | 512 | ❌ BREACHED | 32 | N/A | 32 | 1376 |\n| rand_read_4t_direct | 22.0625 | 512 | ✅ OK | 68.5 | N/A | 64 | N/A |\n```\n\nNotes:\n- Breach is **non-fatal**: the ❌ is informational; the CI job does not\nfail on a breach.\n- A metric is rendered as `N/A` only when Mountpoint never emitted it in\nthe logs (e.g. `pool.reserved_bytes[kind=get_object]` in a write-only\nworkload). If the metric was emitted with value 0, the column shows\n`0.0`.\n- The `_extra_metrics.json` file is consumed **only** by the memory\nsummary step. It is not fed into the gh-pages benchmark charts.\n\n## Where results are stored\n\nMemory-limited results are stored under distinct `mem_limited` sub-paths\nso they don't collide with the existing charts:\n\n| Workload | Throughput chart path | Peak-memory chart path |\n\n|---------------------------------|-----------------------------------------------|-------------------------------------------------------------|\n| S3 Standard throughput | `dev/bench/mem_limited` |\n`dev/bench/mem_limited/peak_mem_usage` |\n| S3 Standard cache | `dev/cache_bench/mem_limited` |\n`dev/cache_bench/mem_limited/peak_mem_usage` |\n| S3 Express One Zone throughput | `dev/s3-express/bench/mem_limited` |\n`dev/s3-express/bench/mem_limited/peak_mem_usage` |\n\n## Why a separate `_extra_metrics.json`?\n\nThe existing `<test>_peak_mem.json` follows the `{name, value, unit}`\nschema required by `benchmark-action/github-action-benchmark` and feeds\nthe gh-pages charts. Adding more fields there would pollute the charts\nfor non-memory-limited runs. Keeping the file separate lets each\nconsumer (benchmark-action vs. GH Actions summary) receive only what it\nneeds.\n\n### Does this change impact existing behavior?\n\nNo - adding new benchmarks only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-24T14:24:02Z",
          "tree_id": "ecd9198213eb3e1fb01aa871847b055e26b111b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/72e3a504cfb783ca2d76844461fa1c879238ee67"
        },
        "date": 1777048872195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2879.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4558.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8313.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8169.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8206.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.54296875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
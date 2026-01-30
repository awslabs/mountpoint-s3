window.BENCHMARK_DATA = {
  "lastUpdate": 1769797429277,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d38a81f79fbdddbbff49eb24348b7eab49b70fb0",
          "message": "Add integration test for OTel integration (#1656)\n\nThis change tests Mountpoint metrics integration with OTel collector\n\n\n\n### Does this change impact existing behavior?\n\nNo, adds an integration test\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, adds an integration test\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-23T09:31:51Z",
          "tree_id": "0fa8794b7a107730527fcef52824fc79c4d5a03c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d38a81f79fbdddbbff49eb24348b7eab49b70fb0"
        },
        "date": 1761219933438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2904.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4562.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8337.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8148.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8215.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2088.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2091.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 217.5625,
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
          "id": "a76b4814e6f4c6824537b0174b2e5e4da03658a2",
          "message": "Propagate -O flags when building aws-lc (#1673)\n\nAddress an issue with our build of `aws-lc` using the `cmake` crate\nwhere optimization flags were not propagated during the configure step\nand could resulting in failed builds under certain configurations (e.g.\nrpmbuild).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-23T13:49:07Z",
          "tree_id": "49ecf4d633ae0f51cde79351a666d75b41dec09f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a76b4814e6f4c6824537b0174b2e5e4da03658a2"
        },
        "date": 1761235433342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2884.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4559.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8153.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8049.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8193.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2092.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2085.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2083.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 270.765625,
            "unit": "MiB"
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
          "distinct": false,
          "id": "c8b45ba1816b6f482b8975e1b89bf3b551825b2d",
          "message": "Keep a constant memory reservation for backwards seek for each fh (#1631)\n\nCurrently we reserve memory for backwards seek only when an actual seek\noccurs. The memory is used even if there is no such seek. Also we\nreserve too few memory, up to `1MiB`, while the whole extra buffer of\nsize `part_size` may be kept in RAM.\n\nWith this change MP makes a memory reservation upon the creation of\n`PrefetchGetObject` and releases memory once it is dropped. This is done\nin addition to the existing mechanism which reserves memory in\n`PartQueue::push_front`.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nPatch version change and a change log to `mountpoint-s3-fs`, will add\nlater.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-24T14:57:33Z",
          "tree_id": "6e2734f5acba1db6ce5eeb6f2ecc7e635d25decc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c8b45ba1816b6f482b8975e1b89bf3b551825b2d"
        },
        "date": 1761325928718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2889.40234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4571.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8355.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8219.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8203.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2082.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.51171875,
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
          "id": "026d40f8f5805e4c6e31c85756b5db1e58a5b39d",
          "message": "Bump actions/download-artifact from 4 to 6 (#1679)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 4 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<p><strong>BREAKING CHANGE:</strong> this update supports Node\n<code>v24.x</code>. This is not a breaking change per-se but we're\ntreating it as such.</p>\n<ul>\n<li>Update README for download-artifact v5 changes by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/417\">actions/download-artifact#417</a></li>\n<li>Update README with artifact extraction details by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/424\">actions/download-artifact#424</a></li>\n<li>Readme: spell out the first use of GHES by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/431\">actions/download-artifact#431</a></li>\n<li>Bump <code>@actions/artifact</code> to <code>v4.0.0</code></li>\n<li>Prepare <code>v6.0.0</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/438\">actions/download-artifact#438</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/431\">actions/download-artifact#431</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v5...v6.0.0\">https://github.com/actions/download-artifact/compare/v5...v6.0.0</a></p>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/407\">actions/download-artifact#407</a></li>\n<li>BREAKING fix: inconsistent path behavior for single artifact\ndownloads by ID by <a\nhref=\"https://github.com/GrantBirki\"><code>@​GrantBirki</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/416\">actions/download-artifact#416</a></li>\n</ul>\n<h2>v5.0.0</h2>\n<h3>🚨 Breaking Change</h3>\n<p>This release fixes an inconsistency in path behavior for single\nartifact downloads by ID. <strong>If you're downloading single artifacts\nby ID, the output path may change.</strong></p>\n<h4>What Changed</h4>\n<p>Previously, <strong>single artifact downloads</strong> behaved\ndifferently depending on how you specified the artifact:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (direct)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/my-artifact/</code> (nested)</li>\n</ul>\n<p>Now both methods are consistent:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (unchanged)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/</code> (fixed - now direct)</li>\n</ul>\n<h4>Migration Guide</h4>\n<h5>✅ No Action Needed If:</h5>\n<ul>\n<li>You download artifacts by <strong>name</strong></li>\n<li>You download <strong>multiple</strong> artifacts by ID</li>\n<li>You already use <code>merge-multiple: true</code> as a\nworkaround</li>\n</ul>\n<h5>⚠️ Action Required If:</h5>\n<p>You download <strong>single artifacts by ID</strong> and your\nworkflows expect the nested directory structure.</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/018cc2cf5baa6db3ef3c5f8a56943fffe632ef53\"><code>018cc2c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/438\">#438</a>\nfrom actions/danwkennedy/prepare-6.0.0</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/815651c680ffe1c95719d0ed08aba1a2f9d5c177\"><code>815651c</code></a>\nRevert &quot;Remove <code>github.dep.yml</code>&quot;</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bb3a066a8babc8ed7b3e4218896c548fe34e7115\"><code>bb3a066</code></a>\nRemove <code>github.dep.yml</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fa1ce46bbd11b8387539af12741055a76dfdf804\"><code>fa1ce46</code></a>\nPrepare <code>v6.0.0</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/4a24838f3d5601fd639834081e118c2995d51e1c\"><code>4a24838</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/431\">#431</a>\nfrom danwkennedy/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/5e3251c4ff5a32e4cf8dd4adaee0e692365237ae\"><code>5e3251c</code></a>\nReadme: spell out the first use of GHES</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/abefc31eafcfbdf6c5336127c1346fdae79ff41c\"><code>abefc31</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/424\">#424</a>\nfrom actions/yacaovsnc/update_readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac43a6070aa7db8a41e756e7a2846221edca7027\"><code>ac43a60</code></a>\nUpdate README with artifact extraction details</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/de96f4613b77ec03b5cf633e7c350c32bd3c5660\"><code>de96f46</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/417\">#417</a>\nfrom actions/yacaovsnc/update_readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/7993cb44e9052f2f08f9b828ae5ef3ecca7d2ac7\"><code>7993cb4</code></a>\nRemove migration guide for artifact download changes</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v4...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-27T11:27:22Z",
          "tree_id": "96851d2fe66eb073294c7bacd185736752836da9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/026d40f8f5805e4c6e31c85756b5db1e58a5b39d"
        },
        "date": 1761572463785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2892.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4536.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8355.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8243.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8052.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 348.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.01171875,
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
          "id": "3ad82143185cad3545d69f4d014d25ced59c09e2",
          "message": "Bump actions/upload-artifact from 4 to 5 (#1680)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<p><strong>BREAKING CHANGE:</strong> this update supports Node\n<code>v24.x</code>. This is not a breaking change per-se but we're\ntreating it as such.</p>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/681\">actions/upload-artifact#681</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/712\">actions/upload-artifact#712</a></li>\n<li>Readme: spell out the first use of GHES by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/727\">actions/upload-artifact#727</a></li>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/725\">actions/upload-artifact#725</a></li>\n<li>Bump <code>@actions/artifact</code> to <code>v4.0.0</code></li>\n<li>Prepare <code>v5.0.0</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/734\">actions/upload-artifact#734</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/681\">actions/upload-artifact#681</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/712\">actions/upload-artifact#712</a></li>\n<li><a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/727\">actions/upload-artifact#727</a></li>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/725\">actions/upload-artifact#725</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v5.0.0\">https://github.com/actions/upload-artifact/compare/v4...v5.0.0</a></p>\n<h2>v4.6.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use artifact 2.3.2 package &amp; prepare for new\nupload-artifact release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/685\">actions/upload-artifact#685</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/685\">actions/upload-artifact#685</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.2\">https://github.com/actions/upload-artifact/compare/v4...v4.6.2</a></p>\n<h2>v4.6.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use artifact 2.2.2 package by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/673\">actions/upload-artifact#673</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.1\">https://github.com/actions/upload-artifact/compare/v4...v4.6.1</a></p>\n<h2>v4.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Expose env vars to control concurrency and timeout by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/662\">actions/upload-artifact#662</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.0\">https://github.com/actions/upload-artifact/compare/v4...v4.6.0</a></p>\n<h2>v4.5.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>fix: deprecated <code>Node.js</code> version in action by <a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/578\">actions/upload-artifact#578</a></li>\n<li>Add new <code>artifact-digest</code> output by <a\nhref=\"https://github.com/bdehamer\"><code>@​bdehamer</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/656\">actions/upload-artifact#656</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/578\">actions/upload-artifact#578</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/330a01c490aca151604b8cf639adc76d48f6c5d4\"><code>330a01c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/734\">#734</a>\nfrom actions/danwkennedy/prepare-5.0.0</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/03f282445299bbefc96171af272a984663b63a26\"><code>03f2824</code></a>\nUpdate <code>github.dep.yml</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/905a1ecb5915b264cbc519e4eb415b5d82916018\"><code>905a1ec</code></a>\nPrepare <code>v5.0.0</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/2d9f9cdfa99fedaddba68e9b5b5c281eca26cc63\"><code>2d9f9cd</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/725\">#725</a>\nfrom patrikpolyak/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9687587dec67f2a8bc69104e183d311c42af6d6f\"><code>9687587</code></a>\nMerge branch 'main' into patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/2848b2cda0e5190984587ec6bb1f36730ca78d50\"><code>2848b2c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/727\">#727</a>\nfrom danwkennedy/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9b511775fd9ce8c5710b38eea671f856de0e70a7\"><code>9b51177</code></a>\nSpell out the first use of GHES</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cd231ca1eda77976a84805c4194a1954f56b0727\"><code>cd231ca</code></a>\nUpdate GHES guidance to include reference to Node 20 version</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/de65e23aa2b7e23d713bb51fbfcb6d502f8667d8\"><code>de65e23</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/712\">#712</a>\nfrom actions/nebuk89-patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8747d8cd7632611ad6060b528f3e0f654c98869c\"><code>8747d8c</code></a>\nUpdate README.md</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-27T11:36:44Z",
          "tree_id": "d4454ef26a8fab29b6110d4e62b432b07f6125a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ad82143185cad3545d69f4d014d25ced59c09e2"
        },
        "date": 1761573004049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2862.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4550.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8227.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 54.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8215.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8131.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2087.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2090.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.75390625,
            "unit": "MiB"
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
          "id": "a931969e3482d5dd76e1ae778537d8a95852563e",
          "message": "Release crates including mounpoint-s3-fs 0.8.2 (#1682)\n\nRelease mounpoint-s3-fs 0.8.2 and dependencies.\n\nChanges since last release:\n[compare](https://github.com/awslabs/mountpoint-s3/compare/5502a861ee11eaa6dc61aa8e711262b2d4388d8c...main).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-27T17:23:18Z",
          "tree_id": "b94b58918882329a36767c147240eee78e02962d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a931969e3482d5dd76e1ae778537d8a95852563e"
        },
        "date": 1761594425074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2876.90234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4561.421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8505.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 70.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8289.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8210.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2088.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2091.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2092.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.21484375,
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
          "id": "9dfd5ddd9a91d1ee7b76e10083be0f79af980350",
          "message": "Upgrade aws-lc to 1.62.1 (#1683)\n\nUpgrade aws-lc to 1.62.1. In particular, pick up:\n* Do no consider warnings fatal in CPU Jitter for LTO build\n[#2769](https://github.com/aws/aws-lc/pull/2769).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 5a9df219..e0ee14ec:\n  > Prepare v1.62.1 (#2771)\n  > Add more options to genrsa (#2770)\n  > Do no consider warnings fatal in CPU Jitter for LTO build (#2769)\n  > Add Windows Docker Image Build (#2760)\n  > Migrate Graviton2 and Graviton4 from EC2 Test Framework (#2759)\n  > AL2023 x509-limbo container (#2761)\n  > Implement -passin for dgst cli (#2763)\n  > Fix librelp integration CI (#2766)\n  > ci: scope down GitHub Token permissions (#2762)\n  > AWS CodeBuild Fleets Setup (#2758)\n  > Implement more options for x509 CLI (#2735)\n  > Don't log feature probe error message unless requested (#2755)\n  > Consolidate GitHub CodeBuild Projects (#2757)\n  > Fix windows CI job (#2744)\n  > Cipher-stealing: no need for re-loading round keys; they're still in registers. (#2734)\n  > Add OPENSSL_NO_UI_CONSOLE macro (#2751)\n  > Use New Docker Images in GitHub Workflows (#2752)\n  > Add ecr:BatchImportUpstreamImage for first-time cache pull-thru (#2747)\n  > Add Docker Image Build Workflows (#2746)\n  > CodeBuild Setup for GitHub Docker Image Builds (#2745)\n  > Implement ecparam CLI tool (#2718)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-27T22:27:02Z",
          "tree_id": "9dea7f8dc4561e525a4a47b90caa1567c2fa4b60",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9dfd5ddd9a91d1ee7b76e10083be0f79af980350"
        },
        "date": 1761612488702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2850.6875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4553.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8283.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8274.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8129.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2098.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.16015625,
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
          "id": "8590e4e6abbbcf4593bc5925c760f743c8e8fac4",
          "message": "Remove CFLAGS workaround from al2023 spec (#1674)\n\nRemove CFLAGS workaround from al2023 spec.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T08:41:45Z",
          "tree_id": "80279ea98baf5bae6d38f46ee2f472cafa75796c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8590e4e6abbbcf4593bc5925c760f743c8e8fac4"
        },
        "date": 1761648783661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2825.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.42578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8315.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 54.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8242.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2079.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 306.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56d8b179e993351e7f7ecf7087f0c4ca10a7887d",
          "message": "Add units for metrics in logs (#1677)\n\nThis change adds units canonical labels to metrics in logs. Currently,\nit only includes units for metrics eligible for OTLP export.\n\n### Does this change impact existing behavior?\n\nYes, it updates the log format\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it updates the log format\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T09:50:41Z",
          "tree_id": "6436d9b459bc9fd691ab820eba8b7387510de680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56d8b179e993351e7f7ecf7087f0c4ca10a7887d"
        },
        "date": 1761652984025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2885.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4562.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8390.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 57.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8074.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8100.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2095.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2097.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.76171875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66a9ac1b583f96f34925cbdd73a1087b9a186ad2",
          "message": "Add otlp metrics user-agent tag (#1686)\n\nThis adds a user-agent tag when otlp endpoint is configured to get\ninsights into usage of otlp metrics.\n\n### Does this change impact existing behavior?\n\nNo, under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T13:37:18Z",
          "tree_id": "5498f079aa321b68855296e214b52becd64915f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/66a9ac1b583f96f34925cbdd73a1087b9a186ad2"
        },
        "date": 1761666568337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2902.53125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4497.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8287.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8172.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8207.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2088.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2088.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2092.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 452.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 265.51171875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b27977ba9c6cc0b770933fc55e1d32bec9eac8f0",
          "message": "Remove OTLP integration feature flag (#1685)\n\nRemoves the `otlp_integration` feature flag\n\n### Does this change impact existing behavior?\n\nNo, this enables otlp metrics without requiring a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added a mountpoint-s3-fs changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T18:42:12Z",
          "tree_id": "b41459cc8c7cac4ad6912ad4e9173b6cdd7aed47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b27977ba9c6cc0b770933fc55e1d32bec9eac8f0"
        },
        "date": 1761685001139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2857.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4545.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8309.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8288.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8220.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2089.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2094.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 308.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.8125,
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
          "id": "0d0ceb9b898c84ff62486c295f257d0143bc953c",
          "message": "Merge al2023 workflow into integration tests (#1689)\n\nAvoids duplicate approval request. Also fixes checkout and requires\napproval for the build SRPM step.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T21:07:52Z",
          "tree_id": "c8cfa475328a9edfb651edba1ce086b0498ba5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d0ceb9b898c84ff62486c295f257d0143bc953c"
        },
        "date": 1761693676576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2879.84375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4554.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8352.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7962.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8118.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2086.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.72265625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b84f6e2db38744a1b79d870084fd1ea42bff7c2f",
          "message": "Add documentation for OTLP metrics (#1681)\n\nDocument metrics available for OTLP export and how to export them to\nobservability backends.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-29T17:22:59Z",
          "tree_id": "5602bbb6348fc5226aeb00c40328110892b189ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b84f6e2db38744a1b79d870084fd1ea42bff7c2f"
        },
        "date": 1761766633843,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2942.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4581.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8302.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8163.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8113.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2099.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 414.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.82421875,
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
          "id": "613e4676d25d59e2621c41c4c141097dcc2cf00a",
          "message": "docs: Update LOGGING.md for default INFO level and metrics behavior (#1620)\n\nUpdate documentation to reflect new default logging level\n\n### What changed and why?\n- Updated LOGGING.md to reflect the new default INFO logging level\n(changed from WARN)\n- Added explanation of metrics logging behavior with --log-metrics and\n--debug flags\n- Clarified verbosity levels in documentation\n\nThese changes align the documentation with the implementation changes\nmade in PR #1605.\n\n### Does this change impact existing behavior?\nNo, this is a documentation-only change that reflects already merged\nchanges from PR #1605\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo changelog entry or version change needed as this is only updating\ndocumentation to match existing behavior.\n\n---\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-29T19:58:55Z",
          "tree_id": "d68c93d36fc4038ba611232771d126ed7e598cec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/613e4676d25d59e2621c41c4c141097dcc2cf00a"
        },
        "date": 1761776180475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2856.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4544.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8462.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8232.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8193.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2088.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2093.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.1171875,
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
          "id": "854836ac0d0810f943371082b8f79305f592377d",
          "message": "Update RPM workflow to handle configurable release (#1690)\n\nUpdate the RPM workflow to use a \"version tag\" (`<VERSION>-<RELEASE>`),\nwhich will allow to handle a configurable release in a future change.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-29T22:09:39Z",
          "tree_id": "fbd562fa793b449fba3b079884b323ce0969dad1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/854836ac0d0810f943371082b8f79305f592377d"
        },
        "date": 1761783900884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2891.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4575.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8415.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8224.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8215.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2088.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 269.3515625,
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
          "distinct": false,
          "id": "ace6f51bf3e5e2192abd9c3cc7352c443d4d548c",
          "message": "Update AL2023 RPM build process and package structure (#1684)\n\nUpdate AL2023 RPM package structure and adjust the build steps in CI.\n\n* Updated generate_amzn2023_srpm.sh to create and include separate\nvendor dependencies tarball\n* Moved from custom /opt/aws/mountpoint-s3/ directory to standard\n/usr/bin/ and /usr/share/doc/ locations\n* Updated release field\n* Configured RUSTFLAGS for cargo build\n* Added option to link to source on GitHub\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-30T12:11:24Z",
          "tree_id": "beea2e55b44dee97564f383c37d2b49112b87180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace6f51bf3e5e2192abd9c3cc7352c443d4d548c"
        },
        "date": 1761834310277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2897.4765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4585.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8332.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8222.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8237.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2098.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2096.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2087.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.5703125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "837675f5c83343b882b28cf3e1be1e2368596d6a",
          "message": "Prepare for 1.21.0 release (#1692)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-30T13:48:29Z",
          "tree_id": "784cb19e88184a344fc80236263c8ee250e3abb0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/837675f5c83343b882b28cf3e1be1e2368596d6a"
        },
        "date": 1761840171401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2858.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4551.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8234.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8223.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8258.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2092.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2086.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.06640625,
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
          "id": "820ae346c009eb336de1cbebb196ecd8403207c0",
          "message": "Fix race condition in logging tests (#1693)\n\nSome of the logging tests occasionally failed because `LockedWriter`\npanicked when trying to retrieve the underlying buffer. For example in\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/18838458022/job/53744837442#step:7:2151:\n\n```\nthread 'logging::syslog::tests::test_syslog_layer' panicked at mountpoint-s3-fs/src/logging/testing.rs:11:47:\ncalled `Result::unwrap()` on an `Err` value: Mutex [..]\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-31T18:28:18Z",
          "tree_id": "c359f1cf074d4809bf9fe291b70a7e53ab6bdda2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/820ae346c009eb336de1cbebb196ecd8403207c0"
        },
        "date": 1761943582099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3348.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4711.6875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8383.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 30.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8161.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8246.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2089.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 435.1171875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "484b81367e678f504b50d0c3aa049f96015b8559",
          "message": "Correct metric type documentation (#1696)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-11-03T11:05:20Z",
          "tree_id": "6027812a4fc35fae0319fddb700ab70ec154262a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484b81367e678f504b50d0c3aa049f96015b8559"
        },
        "date": 1762176037634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2907.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4543.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8334.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8205.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8246.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2088.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2097.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.95703125,
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
          "id": "c46c37365bd1d50df9e9104227eb9b2095ab08c0",
          "message": "Bump actions/download-artifact from 6 to 7 (#1727)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/download-artifact@v7 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v6 had preliminary\nsupport for Node 24, however this action was by default still running on\nNode.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li>Download Artifact Node24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n<li>fix: update <code>@​actions/artifact</code> to fix Node.js 24\npunycode deprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/451\">actions/download-artifact#451</a></li>\n<li>prepare release v7.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/452\">actions/download-artifact#452</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0\">https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/37930b1c2abaa49bbe596cd826c3c89aef350131\"><code>37930b1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/452\">#452</a>\nfrom actions/download-artifact-v7-release</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/72582b9e0acd370909e83fa4a1fd0fca3ad452d8\"><code>72582b9</code></a>\ndoc: update readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/0d2ec9d4cbcefe257d822f108de2a1f15f8da9f6\"><code>0d2ec9d</code></a>\nchore: release v7.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fd7ae8fda6dc16277a9ffbc91cdb0eedf156e912\"><code>fd7ae8f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/451\">#451</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/d484700543354b15886d6a52910cf61b7f1d2b27\"><code>d484700</code></a>\nchore: restore minimatch.dep.yml license file</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/03a808050efe42bb6ad85281890afd4e4546672c\"><code>03a8080</code></a>\nchore: remove obsolete dependency license files</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/56fe6d904b0968950f8b68ea17774c54973ed5e2\"><code>56fe6d9</code></a>\nchore: update <code>@​actions/artifact</code> license file to 5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/8e3ebc4ab4d2e095e5eb44ba1a4a53b6b03976ad\"><code>8e3ebc4</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/1e3c4b4d4906c98ab57453c24efefdf16c078044\"><code>1e3c4b4</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/458627d354794c71bc386c8d5839d20b5885fe2a\"><code>458627d</code></a>\nchore: use local <code>@​actions/artifact</code> package for Node.js 24\ntesting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T13:01:52Z",
          "tree_id": "07e45296629cf48ddda94fe169224b2316021dfb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c46c37365bd1d50df9e9104227eb9b2095ab08c0"
        },
        "date": 1765811997793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2858.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4556.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8368.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8173.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8141.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 221.33984375,
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
          "id": "bd31858c8c9058a7890e7d939452413577215633",
          "message": "Bump actions/upload-artifact from 5 to 6 (#1725)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>v6 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/upload-artifact@v6 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v5 had preliminary\nsupport for Node.js 24, however this action was by default still running\non Node.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Upload Artifact Node 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/719\">actions/upload-artifact#719</a></li>\n<li>fix: update <code>@​actions/artifact</code> for Node.js 24 punycode\ndeprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/744\">actions/upload-artifact#744</a></li>\n<li>prepare release v6.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/745\">actions/upload-artifact#745</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0\">https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b7c566a772e6b6bfb58ed0dc250532a479d7789f\"><code>b7c566a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/745\">#745</a>\nfrom actions/upload-artifact-v6-release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/e516bc8500aaf3d07d591fcd4ae6ab5f9c391d5b\"><code>e516bc8</code></a>\ndocs: correct description of Node.js 24 support in README</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/ddc45ed9bca9b38dbd643978d88e3981cdc91415\"><code>ddc45ed</code></a>\ndocs: update README to correct action name for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/615b319bd27bb32c3d64dca6b6ed6974d5fbe653\"><code>615b319</code></a>\nchore: release v6.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/017748b48f8610ca8e6af1222f4a618e84a9c703\"><code>017748b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/744\">#744</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/38d4c7997f5510fcc41fc4aae2a6b97becdbe7fc\"><code>38d4c79</code></a>\nchore: rebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/7d27270e0cfd253e666c44abac0711308d2d042f\"><code>7d27270</code></a>\nchore: add missing license cache files for <code>@​actions/core</code>,\n<code>@​actions/io</code>, and mi...</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5f643d3c9475505ccaf26d686ffbfb71a8387261\"><code>5f643d3</code></a>\nchore: update license files for <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1 dependencies</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/1df1684032c88614064493e1a0478fcb3583e1d0\"><code>1df1684</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b5b1a918401ee270935b6b1d857ae66c85f3be6f\"><code>b5b1a91</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T12:58:56Z",
          "tree_id": "b12f49c2ddb33941c8a7ca26780450e778701a18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd31858c8c9058a7890e7d939452413577215633"
        },
        "date": 1765898218850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2854.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4571.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8223.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8221.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8233.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2086.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.453125,
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
          "id": "31a7d31db23463310bf82403ca1e678b7f311523",
          "message": "Extend autogroup.py to present benchmark output in json format (#1714)\n\n### What changed and why?\nAdded --json-output option to export benchmark results in JSON format\nwith separate parameter keys\n\n### Does this change impact existing behavior?\nNo breaking changes. Only adds new optional --json-output functionality.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-12-17T11:04:28Z",
          "tree_id": "fcc12704c5032d4e196a859464246e9cfcf3200c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7d31db23463310bf82403ca1e678b7f311523"
        },
        "date": 1765977705440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2872.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8398.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8259.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8132.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2092.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2090,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2096.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 451.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.1171875,
            "unit": "MiB"
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
          "id": "7520e72e68a574e2b6839db4638e058d2a2791d9",
          "message": "Release crates, including mountpoint-s3-fs 0.8.4 (#1734)\n\nBump versions / update changelogs of the following crates prior to the\nrelease:\n\n- `mountpoint-s3-crt`\n- `mountpoint-s3-client`\n- `mountpoint-s3-fs`\n\nDiff with the previous release:\nhttps://github.com/awslabs/mountpoint-s3/compare/mountpoint-s3-fs-0.8.3..main\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T14:29:43Z",
          "tree_id": "304205e26732fe787c0e0a854d52a799eea10f3e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7520e72e68a574e2b6839db4638e058d2a2791d9"
        },
        "date": 1766422029089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2906.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4577.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8208.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8144.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8198.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 319.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.3203125,
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
          "id": "48e67efde2ccb13f4ef20f40564352e6a27591ae",
          "message": "Upgrade cargo dependencies (#1742)\n\nUpgrade cargo dependencies to the latest compatible releases. Exception:\nadapted to minor breaking change in the `assert_cmd` crate (tests only).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, bumped crate versions where required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-12T15:58:38Z",
          "tree_id": "720101ea3942739ad06ffb5e9e8557f01ad055b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48e67efde2ccb13f4ef20f40564352e6a27591ae"
        },
        "date": 1768241714798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2850.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8224.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 55.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8193.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8277.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.83984375,
            "unit": "MiB"
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
          "id": "763ac0f9dac0c57059c60957373ea34fa10f161c",
          "message": "Update Mountpoint's semantics to enable opening a new file handle on an inode if all the existing open handles have been flushed (#1704)\n\nUpdate Mountpoint's semantics to enable opening a new file handle on an\ninode if **all** the existing open handles have been flushed.\n\nThis allows for the filesystem to not depend on a `release` request to\ncomplete pending (delayed) upload and cleanup the internal state of the\ninode within Mountpoint; alleviating situations where an `open` request\nmade immediately after a close(`flush`) request leads to a race\ncondition between the `release` following the close and the new `open`,\nwhich is sometimes an issue when the upload to S3 has been delayed until\n`release`.\n\n### Does this change impact existing behavior?\n\nThe semantics continue to allow **only one writer OR one/many readers**\nconcurrently active for a file; however, now a new handle can be opened\nwhich can override the current active handles (despite not being\nofficially released) if all the active handles are marked \"flushed\".\nAs part of opening the new handle, Mountpoint will also attempt\nuploading any pending data written for the previous file handle. All the\nrequests to the overridden handle(s) will then start to fail or be\nno-op.\nMultiple concurrent writers or concurrent readers and writers are still\nnot allowed.\n\nA handle is marked \"flushed\" when a close/`flush` is called on a file\ndescriptor mapped to that handle. A following `read`/`write` request\nwill revert that flushed state and signify that the handle is actively\nin use and can not be overridden. We maintain this information at the\nindividual handle level and also in an inode-locked map of handles.\n\nBreaking changes:\n- Requests made to a duplicate file descriptor for a flushed file handle\nwill start to fail (for e.g. a `read`/`write` would fail with `EBADF:\nfile handle has been invalidated by a newer handle opened`) or be no-op\n(for e.g. `flush`, `release`) if a new `open` has overridden the flushed\nhandle(s).\n- A race condition can occur between a `read`/`write` request for a\nduplicate file descriptor on an existing (flushed) handle and multiple\nconcurrent `open` requests, and any of them might succeed due to\nparallel processing of FUSE requests within Mountpoint. However, only\none of them will ever succeed and there cannot be two concurrent writers\nor reader+writer for the inode at any point in time.\n- An `open` request for an inode might fail if the pending upload to S3\nfails. This is independent of whether the file has been truncated in the\nsecond `open`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it needs a changelog entry and update to the semantics.md. Yes it\nalso requires a version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-14T19:13:24Z",
          "tree_id": "15a4bfce27a0cdfc0d625226b5aa90d567d5ff5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/763ac0f9dac0c57059c60957373ea34fa10f161c"
        },
        "date": 1768426267207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2889.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4613.67578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8350.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8240.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8273.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.33984375,
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
          "id": "3fd98410a7b05ca146eb4ba2c0020315238af37b",
          "message": "Upgrade toolchain to Rust 1.92 (#1748)\n\nUpgrade toolchain to Rust 1.92.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-16T12:36:14Z",
          "tree_id": "962ecad6da58428677b0da93e33635a6bb318d7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fd98410a7b05ca146eb4ba2c0020315238af37b"
        },
        "date": 1768575187771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2870.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4586.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8415.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 45.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8150.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8275.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.81640625,
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
          "id": "0e71446993dd83762e4556dcecac4fa2357bf52c",
          "message": "Upgrade aws-sdk-s3 dependency (in tests) (#1750)\n\nUpgrade `aws-sdk-s3` dependency (used in tests) to\n[v1.120.0](https://crates.io/crates/aws-sdk-s3/1.120.0).\n\nAddresses\n[RUSTSEC-2026-0002](https://rustsec.org/advisories/RUSTSEC-2026-0002.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-21T14:35:28Z",
          "tree_id": "6a50f5735970f428c781c47839c64d66dac9028b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e71446993dd83762e4556dcecac4fa2357bf52c"
        },
        "date": 1769014395644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2886.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4596.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8382.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 46.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8223.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8126.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6f34b6826b437ee3fc33e6dda40433964f041592",
          "message": "Udpate docs with cache metrics for OTLP export (#1739)\n\nUpdates documentation with new cache metrics available for OTLP export\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-22T12:04:41Z",
          "tree_id": "1787e28a58736bcfaf6d8a5ca150e09fb991df7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f34b6826b437ee3fc33e6dda40433964f041592"
        },
        "date": 1769091721783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2857.1875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4557.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8318.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8197.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8217.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 379.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.71484375,
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
          "id": "0fbb3de56f645defa5c398b007e60a829fe97c9e",
          "message": "Benchmark: Create s3io_benchmark (#1757)\n\n**What changed and why?** Need to create new fio-like benchmark tool for\nPrefetcher/Uploader level of abstraction that can run several jobs\nconcurrently.\n\nCreated new s3io_benchmark script:\n - Create single shareable instance of `Prefetcher` and `Uploader`\n- Read/Write job logic is mostly adapted/copied from existing separate\n`prefetch_benchmark.rs` and `upload_benchmark.rs` files\n- Random Read implementation logic is copied from\nhttps://github.com/awslabs/mountpoint-s3/pull/1747/changes\n- FIO-like job config file parsing. Precedence order: Job-specific >\nGlobal > Built-in default\n - Uses Tokio runtime for spawning multiple jobs concurrently\n\n**Manual Runs**:\n\n```\ncargo build --example s3io_benchmark\n./target/debug/examples/s3io_benchmark mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\n```\n\n```\nS3 I/O Benchmark\nConfig file: \"mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\"\n\nLoading configuration...\nPreparing and validating jobs...\nFound 5 job(s) to execute\nCreating shared resources...\nExecuting jobs...\nJob 'read_2' completed: 3 iterations, 0.03 GB, 21.83s\nJob 'write_1_0' completed: 3 iterations, 0.03 GB, 6.73s\nJob 'write_1_1' completed: 3 iterations, 0.03 GB, 5.73s\nJob 'write_1_2' completed: 3 iterations, 0.03 GB, 5.23s\nJob 'read_1' completed: 3 iterations, 0.01 GB, 10.08s\nCompleted 5 job(s)\n\nAggregating results...\nWriting results to: example_results.json\n\nBenchmark complete!\n  Total bytes: 127114460\n  Duration: 21.15s\n  Total errors: 0\n```\n\n```\n{\n  \"jobs\": [\n    {\n      \"job_name\": \"read_2\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30000000,\n      \"elapsed_seconds\": 21.152757958,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_0\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 6.731901292,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_1\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.72617075,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_2\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.225869416,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"read_1\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 6281564,\n      \"elapsed_seconds\": 9.367737875,\n      \"errors\": []\n    }\n  ],\n  \"summary\": {\n    \"total_bytes\": 127114460,\n    \"total_elapsed_seconds\": 21.152757958,\n    \"total_errors\": 0\n  }\n}\n```\n\n### Does this change impact existing behavior? No.\n\n### Does this change need a changelog entry? Does it require a version\nchange? No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-29T21:18:54Z",
          "tree_id": "22ecfa4bdfe0b5939cfb1b709cf772739c839dcd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbb3de56f645defa5c398b007e60a829fe97c9e"
        },
        "date": 1769729846334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2909.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4577.08984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8400.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8240.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8260.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.5703125,
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
          "id": "17b7ca6dcf8556f9b09822a40c8dce6cff8393e7",
          "message": "s3io_benchmark: Add peak memory reporting (#1760)\n\n**What changed and why?** Need to track peak memory usage for\n`s3io_benchmark.rs`\n\n- Created memory tracker (adapted from `metrics.rs`)\n- Set default polling interval to 100ms.\n\n### Does this change impact existing behavior?\n\nN/A - benchmark only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - benchmark only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-30T16:06:47Z",
          "tree_id": "fcb4730679608bc9766818a57dfd8c3c3cbabde4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17b7ca6dcf8556f9b09822a40c8dce6cff8393e7"
        },
        "date": 1769797429221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2896.21875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8371.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 27.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8290.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8240.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.9921875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
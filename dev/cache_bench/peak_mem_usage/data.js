window.BENCHMARK_DATA = {
  "lastUpdate": 1768240910072,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1761325075515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2186.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2181.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 35.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2181.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2186.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2327.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2194.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2203.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.08203125,
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
        "date": 1761571502747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2440.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2186.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2304.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2196.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 38.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2203.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 34.2734375,
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
        "date": 1761572083958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2174.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2188.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2198.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 48.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 42.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2206.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2171.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2175.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8125,
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
        "date": 1761593635943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2180.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2412.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2183.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2175.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2196.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2166.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2192.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.609375,
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
        "date": 1761648011200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2196.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2433.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2191.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 50.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2178.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2545.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.28515625,
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
        "date": 1761652160864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2186.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2200.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2473.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2391.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2184.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2185.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.61328125,
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
        "date": 1761665824325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2368.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2215.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2188.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2190.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2412.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2179.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2190.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2190.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2204.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 38.09375,
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
        "date": 1761684301759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 35.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2177.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2179.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2182.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 43.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2185.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2200.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.97265625,
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
        "date": 1761692837284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2173.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2224.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2186.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2188.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2175.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 32.27734375,
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
        "date": 1761765852348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2169.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2197.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.48046875,
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
        "date": 1761775371301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2192.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2185.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2179.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2172.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2303.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2194.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2201,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2199.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.66015625,
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
        "date": 1761783099167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2302.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 35.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2195.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2176.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3097.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2197.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2598.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2168.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2187.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 33.92578125,
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
        "date": 1761833501945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2194.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2187.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2217.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2173.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2179.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 39.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2453.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2193.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.54296875,
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
        "date": 1761839424979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2197.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2198.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2184.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2185.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2178.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.78515625,
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
        "date": 1761942610353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2341.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.1015625,
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
        "date": 1762175276816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2175.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2184.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2195.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2175.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2184.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2192.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 31.49609375,
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
          "id": "63d79f65d2b4142fd16613472e9cc328a42f9ba6",
          "message": "Fix workflow permissions to publish benchmark results (#1722)\n\nThe changes in #1695 resulted in benchmark actions on push to main to\nfail when trying to publish results. This change will allow benchmark\nworkflows to write to github pages by fixing their permissions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-10T17:51:26Z",
          "tree_id": "dd3d1b999ab4c31439f0769cccf0f63bae29c556",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63d79f65d2b4142fd16613472e9cc328a42f9ba6"
        },
        "date": 1765396468073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2187.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2195.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2224.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 38.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2288.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2236.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2376.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.19921875,
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
          "id": "a3d487c5b4b416478351f90693a17fe1399b6d98",
          "message": "Refactor cache metrics for consistency and completeness (#1721)\n\nThis PR streamlines cache metrics collection across disk and express\ncache implementations.\n\nThis change renames caching metrics for consistency with other OTLP\nmetrics. This change also captures latency, bytes_transferred from/to\ncache and errors consistently across both disk and express cache\nimplementations.\n\n### Does this change impact existing behavior?\n\nYes, updates cache metrics in logs\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-12-10T18:49:08Z",
          "tree_id": "382f4e0f5addcf5fa0ecfe04b5a10b853c56bdc7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3d487c5b4b416478351f90693a17fe1399b6d98"
        },
        "date": 1765400117001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2556.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2191.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 39.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2204.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2426.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2191.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2365.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2191.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.48046875,
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
          "distinct": false,
          "id": "adde28b1ceb63153f117d63d1dd63d47806a71cd",
          "message": "Fix workflow-complete jobs for GitHub workflows (#1723)\n\nUpdates jobs to always run and then fail, rather than be skipped when\nneeded jobs fail.\nThis will allow GitHub to correctly block when tests fail.\n\n`needs` JSON context:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/contexts#needs-context\n\nEquivalent CSI driver PR:\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/pull/661\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, CI change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-11T18:50:16Z",
          "tree_id": "cf312a1c597b9961e0e8e2ca9ed6c85dcc27c11e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/adde28b1ceb63153f117d63d1dd63d47806a71cd"
        },
        "date": 1765486443482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2522.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2176.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 43.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2192.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 36.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2390.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2195.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2317,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.67578125,
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
        "date": 1765811231779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2333.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2233.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2190.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2930.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2346.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2379.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2491.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2367.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2230.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.41796875,
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
        "date": 1765897425860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2404.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2173.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2192.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2202.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2446.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2267.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 41.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2172.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2203.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2177.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.71875,
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
        "date": 1765976878862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2212.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 35.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2600.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2383.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2289.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 36.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2268.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2522.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.8359375,
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
          "id": "eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca",
          "message": "Add cache metrics for OTLP export (#1724)\n\nThis change adds cache metrics for OTLP export. \n\n### Does this change impact existing behavior?\n\nYes, adds new metrics for OTLP export\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-17T12:03:15Z",
          "tree_id": "98d1447807f41eeef7647db0e823549431bfe64a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca"
        },
        "date": 1765980406591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2219.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2196.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2175.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2183.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2347.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2178.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2189.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.109375,
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
          "id": "ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58",
          "message": "Fix internal race condition in the incremental upload queue (#1728)\n\nThis change addresses an issue that caused the\n`upload::incremental::tests::test_append_failure_on_object_replaced` to\nfail\n[occasionally](https://github.com/awslabs/mountpoint-s3/actions/runs/20229391488/job/58068496627#step:8:576).\nThe root cause was a race condition in `AppendUploadQueue` when\nattempting to write more data after a failure to retrieve the checksum\nalgorithm, which would occasionally result in a panic instead of\nreturning an `UploadAlreadyTerminated` error.\n\nThe issue could be fixed with a simple change (see first commit), but I\nopted to refactor the queue to use a single channel to return both the\nchecksum algorithm and the PutObject responses, making error handling\nmore uniform.\n\n**Note that there is no user impact**, since further writes after an\nerror are not allowed by the \"file system\" layer.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T16:33:54Z",
          "tree_id": "d439318b2f53945d6d6415df16e0e51e6d2bd970",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58"
        },
        "date": 1765996674478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2174.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 36.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2180.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2200.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2191.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2214.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2258.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2266.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2321.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.734375,
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
          "id": "2c8b96b3cc004645bc24bdae903d4007f7f02fca",
          "message": "Fix benchmarks not running on PRs (#1731)\n\nAddress an issue introduced in #1722 where benchmark workflows would not\nrun on PRs (enabled when setting the \"performance\" label).\n\n### Does this change impact existing behavior?\n\nNo, CI only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T17:23:34Z",
          "tree_id": "b730453a5da4939aabc07d8f540a14e303006298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2c8b96b3cc004645bc24bdae903d4007f7f02fca"
        },
        "date": 1765999535319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2536.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 65.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2245.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2262.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2578.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 33.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2393.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2474.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2882.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.46875,
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
          "id": "deba195af5cfc231784d226a00468cffc284df27",
          "message": "Align read window with part boundaries + configurable `initial_request_size` (#1707)\n\nRe-created https://github.com/awslabs/mountpoint-s3/pull/1618, in this\nPR:\n\n- we align read window end to the part boundary for the second request\n(see `round_up_to_part_boundary` method);\n- we update mock client to allow testing of this change;\n- we add `PrefetcherConfig::initial_request_size` field and use it in\n`mount_from_config.rs` example.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMinor version change and a change log to `mountpoint-s3-fs`, will add\nlater. Patch version change to the `mountpoint-s3-fs-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T11:19:28Z",
          "tree_id": "8c01e60eb5f63bdbc01ecb41f5c66fcc5b046b1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/deba195af5cfc231784d226a00468cffc284df27"
        },
        "date": 1766409725919,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2483.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2175.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2272.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2515.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2178.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2183.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.46484375,
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
          "id": "8adc7549733902dd2169cd540abc878b01987004",
          "message": "Fix internal failure on atomic upload (#1733)\n\nImprove handling of errors on `CreateMultiPartUpload` in the atomic\nupload code path. Similarly to the change in #1728, the issue only\nmanifests when attempting to further write or complete an upload after\nan error and it does not affect Mountpoint file system users, since\nthat's already prevented at that level.\n\n### Does this change impact existing behavior?\n\nNo, user-visible behavior not impacted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-24T12:45:36Z",
          "tree_id": "c4508f6e35e19f9238eee792e408780298d56f7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8adc7549733902dd2169cd540abc878b01987004"
        },
        "date": 1766587708616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2184.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2187.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2207.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2188.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2204.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2184.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2275.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.50390625,
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
          "id": "2ff12d030057e30881527035c62dbac8f4f20efd",
          "message": "Fix broken link in SEMANTICS.md (#1736)\n\nFixes broken link in SEMANTICS.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-01-07T16:24:19Z",
          "tree_id": "224ecb4cb8678324f7e8f60979a173090e444abb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2ff12d030057e30881527035c62dbac8f4f20efd"
        },
        "date": 1767810508775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2168.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2177.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2215.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2332.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 59.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2198.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2183.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.3828125,
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
          "id": "a449eead062b530bf8ad4c1aa735045454cf8e3f",
          "message": "Ignore bincode's unmaintained status temporarily (#1740)\n\nUntil we migrate away from bincode, ignore the [unmaintained\nstatus](https://rustsec.org/advisories/RUSTSEC-2025-0141) to unblock the\nbuilds\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-09T16:19:13Z",
          "tree_id": "ce5cd74f403ffc24db87831a33ff08e0b4219f4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a449eead062b530bf8ad4c1aa735045454cf8e3f"
        },
        "date": 1767983106394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2336.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2411.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2305.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2413.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2185.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2195.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.95703125,
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
        "date": 1768240910012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2277.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2301.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2380.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 52.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2182.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 41.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2181.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2191.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.23828125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
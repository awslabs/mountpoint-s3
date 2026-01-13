window.BENCHMARK_DATA = {
  "lastUpdate": 1768298258968,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
        "date": 1761571500548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1406.14091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2362.6423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.06533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1714.3494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.0431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 403.7419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.19267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 238.48837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4093.762109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4489.65810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1252.78359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1403.5404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 866.25078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 800.6583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1244.8888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1123.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1006.987109375,
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
          "id": "3ad82143185cad3545d69f4d014d25ced59c09e2",
          "message": "Bump actions/upload-artifact from 4 to 5 (#1680)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<p><strong>BREAKING CHANGE:</strong> this update supports Node\n<code>v24.x</code>. This is not a breaking change per-se but we're\ntreating it as such.</p>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/681\">actions/upload-artifact#681</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/712\">actions/upload-artifact#712</a></li>\n<li>Readme: spell out the first use of GHES by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/727\">actions/upload-artifact#727</a></li>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/725\">actions/upload-artifact#725</a></li>\n<li>Bump <code>@actions/artifact</code> to <code>v4.0.0</code></li>\n<li>Prepare <code>v5.0.0</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/734\">actions/upload-artifact#734</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/681\">actions/upload-artifact#681</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/712\">actions/upload-artifact#712</a></li>\n<li><a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/727\">actions/upload-artifact#727</a></li>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/725\">actions/upload-artifact#725</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v5.0.0\">https://github.com/actions/upload-artifact/compare/v4...v5.0.0</a></p>\n<h2>v4.6.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use artifact 2.3.2 package &amp; prepare for new\nupload-artifact release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/685\">actions/upload-artifact#685</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/685\">actions/upload-artifact#685</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.2\">https://github.com/actions/upload-artifact/compare/v4...v4.6.2</a></p>\n<h2>v4.6.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use artifact 2.2.2 package by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/673\">actions/upload-artifact#673</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.1\">https://github.com/actions/upload-artifact/compare/v4...v4.6.1</a></p>\n<h2>v4.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Expose env vars to control concurrency and timeout by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/662\">actions/upload-artifact#662</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.0\">https://github.com/actions/upload-artifact/compare/v4...v4.6.0</a></p>\n<h2>v4.5.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>fix: deprecated <code>Node.js</code> version in action by <a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/578\">actions/upload-artifact#578</a></li>\n<li>Add new <code>artifact-digest</code> output by <a\nhref=\"https://github.com/bdehamer\"><code>@​bdehamer</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/656\">actions/upload-artifact#656</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/578\">actions/upload-artifact#578</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/330a01c490aca151604b8cf639adc76d48f6c5d4\"><code>330a01c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/734\">#734</a>\nfrom actions/danwkennedy/prepare-5.0.0</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/03f282445299bbefc96171af272a984663b63a26\"><code>03f2824</code></a>\nUpdate <code>github.dep.yml</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/905a1ecb5915b264cbc519e4eb415b5d82916018\"><code>905a1ec</code></a>\nPrepare <code>v5.0.0</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/2d9f9cdfa99fedaddba68e9b5b5c281eca26cc63\"><code>2d9f9cd</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/725\">#725</a>\nfrom patrikpolyak/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9687587dec67f2a8bc69104e183d311c42af6d6f\"><code>9687587</code></a>\nMerge branch 'main' into patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/2848b2cda0e5190984587ec6bb1f36730ca78d50\"><code>2848b2c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/727\">#727</a>\nfrom danwkennedy/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9b511775fd9ce8c5710b38eea671f856de0e70a7\"><code>9b51177</code></a>\nSpell out the first use of GHES</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cd231ca1eda77976a84805c4194a1954f56b0727\"><code>cd231ca</code></a>\nUpdate GHES guidance to include reference to Node 20 version</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/de65e23aa2b7e23d713bb51fbfcb6d502f8667d8\"><code>de65e23</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/712\">#712</a>\nfrom actions/nebuk89-patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8747d8cd7632611ad6060b528f3e0f654c98869c\"><code>8747d8c</code></a>\nUpdate README.md</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-27T11:36:44Z",
          "tree_id": "d4454ef26a8fab29b6110d4e62b432b07f6125a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ad82143185cad3545d69f4d014d25ced59c09e2"
        },
        "date": 1761572081706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1435.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2306.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 853.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1628.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 317.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 666.448046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.1466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4236.03505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5038.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1422.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1389.665625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1494.286328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1307.68427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1323.526953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1196.66982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1672.28701171875,
            "unit": "MiB/s"
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
        "date": 1761593633375,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.23125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2356.10166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 839.7814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1636.494921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 315.18974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 571.58623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.61533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4652.6876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4714.709765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1353.71787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1352.68134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 787.3158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 800.00712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1085.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.675,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1001.4861328125,
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
          "id": "8590e4e6abbbcf4593bc5925c760f743c8e8fac4",
          "message": "Remove CFLAGS workaround from al2023 spec (#1674)\n\nRemove CFLAGS workaround from al2023 spec.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T08:41:45Z",
          "tree_id": "80279ea98baf5bae6d38f46ee2f472cafa75796c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8590e4e6abbbcf4593bc5925c760f743c8e8fac4"
        },
        "date": 1761648009561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1371.83623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2375.53876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 829.4115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1656.669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.88232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.82470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 230.32861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4257.04052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4719.29228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1247.62470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1376.98876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 754.70751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1830.62099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1386.57001953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.65546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1323.45361328125,
            "unit": "MiB/s"
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
        "date": 1761652158675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1381.37041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2297.66220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 834.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1676.52001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.76572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 393.1080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 225.7904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.47744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4521.29365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4680.1541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1359.96259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1492.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1503.38779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 843.473046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1131.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1158.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 897.959765625,
            "unit": "MiB/s"
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
        "date": 1761665821990,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2379.66513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 886.63056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1624.85810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.69931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.33427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 286.7408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4440.6998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4419.7587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1446.11494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1416.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 935.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 762.5033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1060.35126953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1225.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1170.18291015625,
            "unit": "MiB/s"
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
        "date": 1761684299518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1342.96728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2228.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 876.3130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1627.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.0095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 816.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 204.23779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 273.28603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4070.702734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4601.75439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1396.31474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1391.2783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 929.00185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 819.87734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1086.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1176.1935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1284.9017578125,
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
          "id": "0d0ceb9b898c84ff62486c295f257d0143bc953c",
          "message": "Merge al2023 workflow into integration tests (#1689)\n\nAvoids duplicate approval request. Also fixes checkout and requires\napproval for the build SRPM step.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T21:07:52Z",
          "tree_id": "c8cfa475328a9edfb651edba1ce086b0498ba5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d0ceb9b898c84ff62486c295f257d0143bc953c"
        },
        "date": 1761692835066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1414.56650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2263.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.55517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 310.86416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.57919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.91015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 274.78369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4169.34130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4996.99541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1254.63134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1374.88759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1438.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1672.83955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.84521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1160.29150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.74482421875,
            "unit": "MiB/s"
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
        "date": 1761765850084,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1403.0775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2167.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 861.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1626.65419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.34267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.53662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 225.68291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.61357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4186.04833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4552.78369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1324.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1385.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1136.28466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1782.7703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1043.1556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 979.6662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1295.4287109375,
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
          "id": "613e4676d25d59e2621c41c4c141097dcc2cf00a",
          "message": "docs: Update LOGGING.md for default INFO level and metrics behavior (#1620)\n\nUpdate documentation to reflect new default logging level\n\n### What changed and why?\n- Updated LOGGING.md to reflect the new default INFO logging level\n(changed from WARN)\n- Added explanation of metrics logging behavior with --log-metrics and\n--debug flags\n- Clarified verbosity levels in documentation\n\nThese changes align the documentation with the implementation changes\nmade in PR #1605.\n\n### Does this change impact existing behavior?\nNo, this is a documentation-only change that reflects already merged\nchanges from PR #1605\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo changelog entry or version change needed as this is only updating\ndocumentation to match existing behavior.\n\n---\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-29T19:58:55Z",
          "tree_id": "d68c93d36fc4038ba611232771d126ed7e598cec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/613e4676d25d59e2621c41c4c141097dcc2cf00a"
        },
        "date": 1761775369581,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1370.3041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2191.34052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 849.3609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1644.7287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.28037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 506.86845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.7970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.9046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4140.6365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4841.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1317.047265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1399.36630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1640.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 793.4748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1014.07578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1070.13876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1258.69267578125,
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
          "id": "854836ac0d0810f943371082b8f79305f592377d",
          "message": "Update RPM workflow to handle configurable release (#1690)\n\nUpdate the RPM workflow to use a \"version tag\" (`<VERSION>-<RELEASE>`),\nwhich will allow to handle a configurable release in a future change.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-29T22:09:39Z",
          "tree_id": "fbd562fa793b449fba3b079884b323ce0969dad1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/854836ac0d0810f943371082b8f79305f592377d"
        },
        "date": 1761783097022,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1356.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2354.0580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 824.72021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1638.4724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 422.50625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 229.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 270.85615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4452.50107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4458.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1376.05732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1412.7599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1068.6771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1023.44375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1247.13212890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 981.95859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 991.5431640625,
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
          "distinct": false,
          "id": "ace6f51bf3e5e2192abd9c3cc7352c443d4d548c",
          "message": "Update AL2023 RPM build process and package structure (#1684)\n\nUpdate AL2023 RPM package structure and adjust the build steps in CI.\n\n* Updated generate_amzn2023_srpm.sh to create and include separate\nvendor dependencies tarball\n* Moved from custom /opt/aws/mountpoint-s3/ directory to standard\n/usr/bin/ and /usr/share/doc/ locations\n* Updated release field\n* Configured RUSTFLAGS for cargo build\n* Added option to link to source on GitHub\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-30T12:11:24Z",
          "tree_id": "beea2e55b44dee97564f383c37d2b49112b87180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace6f51bf3e5e2192abd9c3cc7352c443d4d548c"
        },
        "date": 1761833500020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1398.323828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2349.3625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 880.73896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1697.4076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.20712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 491.9046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.39228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.0892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4478.91259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4792.49892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1242.13056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1437.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 816.75712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1425.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1012.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1077.76591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1007.4560546875,
            "unit": "MiB/s"
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
        "date": 1761839422461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1387.1625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2212.391796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 833.90966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1612.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.383203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 498.308984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.34052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4154.201953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4686.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1343.04921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1461.8154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1501.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 797.2078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1107.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1279.2052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 989.5810546875,
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
          "id": "820ae346c009eb336de1cbebb196ecd8403207c0",
          "message": "Fix race condition in logging tests (#1693)\n\nSome of the logging tests occasionally failed because `LockedWriter`\npanicked when trying to retrieve the underlying buffer. For example in\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/18838458022/job/53744837442#step:7:2151:\n\n```\nthread 'logging::syslog::tests::test_syslog_layer' panicked at mountpoint-s3-fs/src/logging/testing.rs:11:47:\ncalled `Result::unwrap()` on an `Err` value: Mutex [..]\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-31T18:28:18Z",
          "tree_id": "c359f1cf074d4809bf9fe291b70a7e53ab6bdda2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/820ae346c009eb336de1cbebb196ecd8403207c0"
        },
        "date": 1761942608659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1373.3763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2293.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.52451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.728125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.24423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 498.57880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 212.39677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 244.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4169.546484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4414.7759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1249.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1402.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1491.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1145.74794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1149.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1016.655859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1525.7712890625,
            "unit": "MiB/s"
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
        "date": 1762175274897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1375.78759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2420.358203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 835.261328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1655.33310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.38173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 349.53203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4472.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4850.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1456.433203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1396.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1546.971875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1761.52255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1292.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 977.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1522.233203125,
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
          "id": "63d79f65d2b4142fd16613472e9cc328a42f9ba6",
          "message": "Fix workflow permissions to publish benchmark results (#1722)\n\nThe changes in #1695 resulted in benchmark actions on push to main to\nfail when trying to publish results. This change will allow benchmark\nworkflows to write to github pages by fixing their permissions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-10T17:51:26Z",
          "tree_id": "dd3d1b999ab4c31439f0769cccf0f63bae29c556",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63d79f65d2b4142fd16613472e9cc328a42f9ba6"
        },
        "date": 1765396465930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1424.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2188.43994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 879.64814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1632.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 320.15341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 547.25126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 335.31162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4618.3119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4386.96982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1312.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1398.8951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1534.92412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1175.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1348.1412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1048.9984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 983.75087890625,
            "unit": "MiB/s"
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
        "date": 1765400114688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.48759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2226.49375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 881.98291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.8921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 470.7029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.81845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4347.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4519.13720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1268.1267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1407.45927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 933.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1119.3705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1375.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1207.5439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1227.6423828125,
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
          "distinct": false,
          "id": "adde28b1ceb63153f117d63d1dd63d47806a71cd",
          "message": "Fix workflow-complete jobs for GitHub workflows (#1723)\n\nUpdates jobs to always run and then fail, rather than be skipped when\nneeded jobs fail.\nThis will allow GitHub to correctly block when tests fail.\n\n`needs` JSON context:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/contexts#needs-context\n\nEquivalent CSI driver PR:\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/pull/661\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, CI change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-11T18:50:16Z",
          "tree_id": "cf312a1c597b9961e0e8e2ca9ed6c85dcc27c11e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/adde28b1ceb63153f117d63d1dd63d47806a71cd"
        },
        "date": 1765486441892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1359.844140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2228.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 831.36298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1660.35341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 409.17666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 261.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 283.85927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4148.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4317.50419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1319.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1383.6888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1374.67783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 822.85869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1301.81787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.68505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1185.9625,
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
          "id": "c46c37365bd1d50df9e9104227eb9b2095ab08c0",
          "message": "Bump actions/download-artifact from 6 to 7 (#1727)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/download-artifact@v7 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v6 had preliminary\nsupport for Node 24, however this action was by default still running on\nNode.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li>Download Artifact Node24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n<li>fix: update <code>@​actions/artifact</code> to fix Node.js 24\npunycode deprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/451\">actions/download-artifact#451</a></li>\n<li>prepare release v7.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/452\">actions/download-artifact#452</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0\">https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/37930b1c2abaa49bbe596cd826c3c89aef350131\"><code>37930b1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/452\">#452</a>\nfrom actions/download-artifact-v7-release</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/72582b9e0acd370909e83fa4a1fd0fca3ad452d8\"><code>72582b9</code></a>\ndoc: update readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/0d2ec9d4cbcefe257d822f108de2a1f15f8da9f6\"><code>0d2ec9d</code></a>\nchore: release v7.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fd7ae8fda6dc16277a9ffbc91cdb0eedf156e912\"><code>fd7ae8f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/451\">#451</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/d484700543354b15886d6a52910cf61b7f1d2b27\"><code>d484700</code></a>\nchore: restore minimatch.dep.yml license file</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/03a808050efe42bb6ad85281890afd4e4546672c\"><code>03a8080</code></a>\nchore: remove obsolete dependency license files</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/56fe6d904b0968950f8b68ea17774c54973ed5e2\"><code>56fe6d9</code></a>\nchore: update <code>@​actions/artifact</code> license file to 5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/8e3ebc4ab4d2e095e5eb44ba1a4a53b6b03976ad\"><code>8e3ebc4</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/1e3c4b4d4906c98ab57453c24efefdf16c078044\"><code>1e3c4b4</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/458627d354794c71bc386c8d5839d20b5885fe2a\"><code>458627d</code></a>\nchore: use local <code>@​actions/artifact</code> package for Node.js 24\ntesting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T13:01:52Z",
          "tree_id": "07e45296629cf48ddda94fe169224b2316021dfb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c46c37365bd1d50df9e9104227eb9b2095ab08c0"
        },
        "date": 1765811229787,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1344.0625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2285.36103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 889.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1628.88681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 514.440625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.4271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.23642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4394.4849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4731.12685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1410.82646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1480.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1577.9302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 842.83876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1036.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.73486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1288.13037109375,
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
          "id": "bd31858c8c9058a7890e7d939452413577215633",
          "message": "Bump actions/upload-artifact from 5 to 6 (#1725)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>v6 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/upload-artifact@v6 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v5 had preliminary\nsupport for Node.js 24, however this action was by default still running\non Node.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Upload Artifact Node 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/719\">actions/upload-artifact#719</a></li>\n<li>fix: update <code>@​actions/artifact</code> for Node.js 24 punycode\ndeprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/744\">actions/upload-artifact#744</a></li>\n<li>prepare release v6.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/745\">actions/upload-artifact#745</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0\">https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b7c566a772e6b6bfb58ed0dc250532a479d7789f\"><code>b7c566a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/745\">#745</a>\nfrom actions/upload-artifact-v6-release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/e516bc8500aaf3d07d591fcd4ae6ab5f9c391d5b\"><code>e516bc8</code></a>\ndocs: correct description of Node.js 24 support in README</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/ddc45ed9bca9b38dbd643978d88e3981cdc91415\"><code>ddc45ed</code></a>\ndocs: update README to correct action name for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/615b319bd27bb32c3d64dca6b6ed6974d5fbe653\"><code>615b319</code></a>\nchore: release v6.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/017748b48f8610ca8e6af1222f4a618e84a9c703\"><code>017748b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/744\">#744</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/38d4c7997f5510fcc41fc4aae2a6b97becdbe7fc\"><code>38d4c79</code></a>\nchore: rebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/7d27270e0cfd253e666c44abac0711308d2d042f\"><code>7d27270</code></a>\nchore: add missing license cache files for <code>@​actions/core</code>,\n<code>@​actions/io</code>, and mi...</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5f643d3c9475505ccaf26d686ffbfb71a8387261\"><code>5f643d3</code></a>\nchore: update license files for <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1 dependencies</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/1df1684032c88614064493e1a0478fcb3583e1d0\"><code>1df1684</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b5b1a918401ee270935b6b1d857ae66c85f3be6f\"><code>b5b1a91</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T12:58:56Z",
          "tree_id": "b12f49c2ddb33941c8a7ca26780450e778701a18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd31858c8c9058a7890e7d939452413577215633"
        },
        "date": 1765897424090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1336.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2278.92197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 891.8068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1684.0576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.227734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 647.53701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.89306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4165.0189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4392.7439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1254.18134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1405.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 918.24306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 769.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1424.776171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.70478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1118.115625,
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
          "id": "31a7d31db23463310bf82403ca1e678b7f311523",
          "message": "Extend autogroup.py to present benchmark output in json format (#1714)\n\n### What changed and why?\nAdded --json-output option to export benchmark results in JSON format\nwith separate parameter keys\n\n### Does this change impact existing behavior?\nNo breaking changes. Only adds new optional --json-output functionality.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-12-17T11:04:28Z",
          "tree_id": "fcc12704c5032d4e196a859464246e9cfcf3200c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7d31db23463310bf82403ca1e678b7f311523"
        },
        "date": 1765976877156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1382.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2301.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 849.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1638.50751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.5234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 769.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 230.7826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 323.7431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4143.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4476.6810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1550.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1362.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1165.03818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1242.9314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1068.5755859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1161.4728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1587.93974609375,
            "unit": "MiB/s"
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
        "date": 1765980404944,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1384.60341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2445.86455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1648.84072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.03671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 382.37265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.36943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 371.80390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4222.74365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4854.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1273.5919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1506.00126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1258.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 820.49462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1412.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1091.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1281.18525390625,
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
          "id": "ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58",
          "message": "Fix internal race condition in the incremental upload queue (#1728)\n\nThis change addresses an issue that caused the\n`upload::incremental::tests::test_append_failure_on_object_replaced` to\nfail\n[occasionally](https://github.com/awslabs/mountpoint-s3/actions/runs/20229391488/job/58068496627#step:8:576).\nThe root cause was a race condition in `AppendUploadQueue` when\nattempting to write more data after a failure to retrieve the checksum\nalgorithm, which would occasionally result in a panic instead of\nreturning an `UploadAlreadyTerminated` error.\n\nThe issue could be fixed with a simple change (see first commit), but I\nopted to refactor the queue to use a single channel to return both the\nchecksum algorithm and the PutObject responses, making error handling\nmore uniform.\n\n**Note that there is no user impact**, since further writes after an\nerror are not allowed by the \"file system\" layer.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T16:33:54Z",
          "tree_id": "d439318b2f53945d6d6415df16e0e51e6d2bd970",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58"
        },
        "date": 1765996673042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1320.4771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2173.81630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.42041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1644.683984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 468.71220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.59306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 286.65751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4523.2220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4810.01435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1270.35771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1376.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1647.8078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 794.28310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1372.661328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1262.22001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1209.94560546875,
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
          "id": "2c8b96b3cc004645bc24bdae903d4007f7f02fca",
          "message": "Fix benchmarks not running on PRs (#1731)\n\nAddress an issue introduced in #1722 where benchmark workflows would not\nrun on PRs (enabled when setting the \"performance\" label).\n\n### Does this change impact existing behavior?\n\nNo, CI only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T17:23:34Z",
          "tree_id": "b730453a5da4939aabc07d8f540a14e303006298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2c8b96b3cc004645bc24bdae903d4007f7f02fca"
        },
        "date": 1765999533126,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1407.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2368.25654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 883.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1684.94189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 310.8625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 736.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 177.74033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.65869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3939.89404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4449.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1447.72392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1373.88408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1421.0697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 811.91240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1405.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1104.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1253.31103515625,
            "unit": "MiB/s"
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
        "date": 1766409723711,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1437.9666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2388.258203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 842.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1674.8771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.91103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 390.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.96171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.6111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4332.9841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4721.86552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1277.9478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1351.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 906.4431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1345.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1124.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1189.90283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1302.202734375,
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
          "id": "8adc7549733902dd2169cd540abc878b01987004",
          "message": "Fix internal failure on atomic upload (#1733)\n\nImprove handling of errors on `CreateMultiPartUpload` in the atomic\nupload code path. Similarly to the change in #1728, the issue only\nmanifests when attempting to further write or complete an upload after\nan error and it does not affect Mountpoint file system users, since\nthat's already prevented at that level.\n\n### Does this change impact existing behavior?\n\nNo, user-visible behavior not impacted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-24T12:45:36Z",
          "tree_id": "c4508f6e35e19f9238eee792e408780298d56f7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8adc7549733902dd2169cd540abc878b01987004"
        },
        "date": 1766587706949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1410.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2261.42978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 901.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1665.52890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 316.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.74775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 220.91630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3898.9357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4327.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1243.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1360.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1275.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1068.84970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1258.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.2310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1178.05009765625,
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
          "id": "2ff12d030057e30881527035c62dbac8f4f20efd",
          "message": "Fix broken link in SEMANTICS.md (#1736)\n\nFixes broken link in SEMANTICS.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-01-07T16:24:19Z",
          "tree_id": "224ecb4cb8678324f7e8f60979a173090e444abb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2ff12d030057e30881527035c62dbac8f4f20efd"
        },
        "date": 1767810506850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1345.309765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2330.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 831.74873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1608.31806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 343.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 650.33046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 221.11162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 287.37861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4383.0142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4350.34375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1313.745703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1368.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.78408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1095.07470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1064.43671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1094.97431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1430.471875,
            "unit": "MiB/s"
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
        "date": 1767983104144,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2294.7595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 840.06611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1698.5177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.3580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 786.3216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.27158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4515.59208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4457.3693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1557.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1384.26552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 786.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.8009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1042.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1100.63515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1407.41669921875,
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
          "id": "48e67efde2ccb13f4ef20f40564352e6a27591ae",
          "message": "Upgrade cargo dependencies (#1742)\n\nUpgrade cargo dependencies to the latest compatible releases. Exception:\nadapted to minor breaking change in the `assert_cmd` crate (tests only).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, bumped crate versions where required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-12T15:58:38Z",
          "tree_id": "720101ea3942739ad06ffb5e9e8557f01ad055b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48e67efde2ccb13f4ef20f40564352e6a27591ae"
        },
        "date": 1768240907854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1347.8587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2183.729296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.254296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1651.503125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.22978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 739.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.389453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.30205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4448.92900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4236.40009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1437.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1343.74453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 869.51708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1249.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1254.4328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.8970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.308984375,
            "unit": "MiB/s"
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
          "id": "af2480220f9999c62c3c6b15bae6394452c62799",
          "message": "Correct cache io_size metric type to histogram (#1738)\n\nUntil this change, these are incorrectly recorded as counters, which do\nnot help capture the bytes get/put to cache.\n\n### Does this change impact existing behavior?\n\nYes, Changes how these metrics are recorded in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-13T07:54:22Z",
          "tree_id": "b83488b7b5583a1b1d9a9b4cdf14cb559b6ffe48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/af2480220f9999c62c3c6b15bae6394452c62799"
        },
        "date": 1768298257862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1386.109765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2117.5017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 844.30595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1690.68056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 304.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 855.32255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 228.60263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.81650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4540.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4672.3947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1266.98623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1421.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1339.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1056.21328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1071.98544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.7892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1664.96142578125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
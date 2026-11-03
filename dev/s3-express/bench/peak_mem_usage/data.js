window.BENCHMARK_DATA = {
  "lastUpdate": 1793731272423,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
        "date": 1792062805528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2906.59765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4591.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8186.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8134.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8137.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2143.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2147.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2135.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.1953125,
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
          "id": "372450bcac90421f5ab8136550bfac2381b9b081",
          "message": "Add code review guidelines (#1986)\n\nAdd doc/REVIEW_GUIDELINES.md, which collects what reviewers look for in\npull requests: severity, formatting and comment style, PR hygiene,\nchangelog and versioning, file system semantics, errors and logging,\nconcurrency, performance and memory, unsafe code and FFI, configuration\nand metrics, tests, and dependencies. It mostly consolidates existing\nguidance from CONTRIBUTING.md and SEMANTICS.md and conventions already\nfollowed in review.\n\nCONTRIBUTING.md now asks contributors to review their change against the\nguidelines before opening a pull request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-15T12:52:17Z",
          "tree_id": "8ed667694bc6da4006937c670cf1733765d5f04d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/372450bcac90421f5ab8136550bfac2381b9b081"
        },
        "date": 1792077204488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2918.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4583.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8219.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8053.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2151.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2152.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2137.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 532.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.02734375,
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
          "id": "5cc3445f94edb508faf05f2b28ef5f99bcb768af",
          "message": "Bump actions/download-artifact from 8.0.1 to 8.0.2 (#1992)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 8.0.1 to 8.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update the readme by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/473\">actions/download-artifact#473</a></li>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Update <code>@​actions/artifact</code> to 6.3.1 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n<li>Prepare download-artifact v8.0.2 by <a\nhref=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/493\">actions/download-artifact#493</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/492\">actions/download-artifact#492</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2\">https://github.com/actions/download-artifact/compare/v8.0.1...v8.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/9000827ccba6bdab643e8b6fd33ac0654aef8333\"><code>9000827</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/493\">#493</a>\nfrom actions/tunc-d-prepare-download-v8-0-2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e455989ae00f5bdd4054f05d3e972c6bf8a62dc5\"><code>e455989</code></a>\nPrepare download-artifact v8.0.2</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/a00b90c4a2f01d73a8c89552caabca6ea3b43137\"><code>a00b90c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/492\">#492</a>\nfrom actions/tunc-d-download-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/29bb7ce6af5345aeab5bb4774ce7249ee3ccc27f\"><code>29bb7ce</code></a>\nUpdate <code>@​actions/artifact</code> to 6.3.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/484a0b528fb4d7bd804637ccb632e47a0e638317\"><code>484a0b5</code></a>\nUpdate the readme (<a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/473\">#473</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=8.0.1&new-version=8.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T09:12:34Z",
          "tree_id": "e6120675afa7de292698398a8e829cee39d135c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cc3445f94edb508faf05f2b28ef5f99bcb768af"
        },
        "date": 1792411384905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2933.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4606.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8442.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8160.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8222.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2151.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2145.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2146.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 311.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.2109375,
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
          "id": "498ab6c47f41a744feca5682bca8644107018cfe",
          "message": "Bump taiki-e/install-action from 2.87.26 to 2.87.28 (#1993)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.26 to 2.87.28.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.28</h2>\n<ul>\n<li>\n<p>Update <code>dprint@latest</code> to 0.62.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.33.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.171.</p>\n</li>\n<li>\n<p>Update <code>rclone@latest</code> to 1.75.2.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.7.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.3.</p>\n</li>\n</ul>\n<h2>2.87.27</h2>\n<ul>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.32.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.24.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.7.3.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.54.1.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.170.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.4.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.11.1.</p>\n</li>\n<li>\n<p>Update <code>hyperfine@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.61.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.148.</p>\n</li>\n<li>\n<p>Update <code>cargo-neat@latest</code> to 0.6.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.25.2.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1168f6810a3cb30a3514bf5756a3b7f0422c6df8\"><code>1168f68</code></a>\nRelease 2.87.28</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/db1b9097c912e3ea0e3e3365a6b0b2b5b8cdb5b5\"><code>db1b909</code></a>\nUpdate <code>tombi@latest</code> to 1.8.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4fe7379362f9253601faa9a874184709db566a9e\"><code>4fe7379</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7443747ad21a8d8cfbf02ce264bd9ca0a8c08a6e\"><code>7443747</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6ff1c9bf2d9b6301b7c5a384025b33eb79addc2b\"><code>6ff1c9b</code></a>\nUpdate kingfisher manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cb40720d9a6bd77ff3b42bd2dbf2a11439dd64ab\"><code>cb40720</code></a>\nUpdate kache manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4c1bf3400474f19d88f073ec38c34ddff9950f60\"><code>4c1bf34</code></a>\nUpdate <code>dprint@latest</code> to 0.62.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3dfabf76a32e8b71d8ceaf749b0e53a8c9cc5f2c\"><code>3dfabf7</code></a>\nUpdate <code>vacuum@latest</code> to 0.33.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/a80e680a4cfbe929ef82b1402f4d57ce06b6d987\"><code>a80e680</code></a>\nUpdate <code>uv@latest</code> to 0.13.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/10f4ee9837c4e8479cd0cd010e2dc6397f5b1bcd\"><code>10f4ee9</code></a>\nUpdate <code>tombi@latest</code> to 1.8.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.26...v2.87.28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.26&new-version=2.87.28)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:11Z",
          "tree_id": "6a08a364a9df424ceb58b6036ec87f8580f40b96",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/498ab6c47f41a744feca5682bca8644107018cfe"
        },
        "date": 1792416993855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2908.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4614.7265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8496.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 51.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8259.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8172.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2146.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2144.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2147.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.671875,
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
          "id": "81dc534ca5cc489cf18d5a34d672e1a95d354605",
          "message": "Bump actions/upload-artifact from 7.0.1 to 7.0.2 (#1991)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 7.0.1 to 7.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Improves artifact download retries when the service returns HTTP 429\n(rate limiting), including honoring valid Retry-After headers.</li>\n<li>Updates <code>@​actions/artifact</code> to v6.3.1.</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tunc-d\"><code>@​tunc-d</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/821\">actions/upload-artifact#821</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2\">https://github.com/actions/upload-artifact/compare/v7.0.1...v7.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cf430e030ddbb5b0abf93d22962f4752f3646cd9\"><code>cf430e0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/822\">#822</a>\nfrom actions/tunc-d-prepare-upload-v7-0-2</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/c2acdedd35a8824a1552c7137f8c18288c3ea469\"><code>c2acded</code></a>\nchore: prepare v7.0.2 release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/4687c1bbaa0a58abb517d90b4bbade6754c80c1a\"><code>4687c1b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/821\">#821</a>\nfrom actions/tunc-d-upload-artifact-package-bump</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8cbe1bebdb858105d8fdd88f81404d4de4595719\"><code>8cbe1be</code></a>\nBump <code>@​actions/artifact</code> to 6.3.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=7.0.1&new-version=7.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:15:31Z",
          "tree_id": "57a72ec72e13e2df516584a57cedd49fb9101275",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81dc534ca5cc489cf18d5a34d672e1a95d354605"
        },
        "date": 1792419071439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2975.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4552.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8283.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 57.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8269.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8289.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2142.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2152.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2147.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 418.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.9140625,
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
          "id": "f21ec47cb4de7dde6478e307dc5d7be51ad48682",
          "message": "Bump astral-sh/setup-uv from 10.2.0 to 10.3.0 (#1990)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.2.0 to 10.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.0 🌈 Add Python architecture selection</h2>\n<h2>Changes</h2>\n<p>This release adds the <code>python-arch</code> input to select a\nPython architecture independently of the Python version. With\n<code>uv</code> 0.13.0 or later, set <code>python-arch: x86_64</code> to\nuse x64 Python on Windows ARM64 runners.</p>\n<p>It also includes embedded checksums for <code>uv</code> releases\nthrough 0.13.0.</p>\n<ul>\n<li>Use macOS 15 runners for tests <a\nhref=\"https://github.com/charliermarsh\"><code>@​charliermarsh</code></a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Add <code>python-arch</code> support <a\nhref=\"https://github.com/zanieb\"><code>@​zanieb</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li>chore: update known checksums for 0.12.24 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li>chore: update known checksums for 0.12.23 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li>chore: update known checksums for 0.12.22 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li>chore: update known checksums for 0.12.21 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li>chore: update known checksums for 0.12.20 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li>chore: update known checksums for 0.12.19 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>chore: update known checksums for 0.12.18 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1065\">#1065</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 @<a\nhref=\"https://github.com/apps/dependabot\">dependabot[bot]</a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/1c37ad07a6a961277cf70c0d37d6f313000f5884\"><code>1c37ad0</code></a>\nchore: update known checksums for 0.13.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1089\">#1089</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b3c9b5fc56ebc90760c43b1ac9552c0d1705d3ca\"><code>b3c9b5f</code></a>\nchore: update known checksums for 0.12.24 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1084\">#1084</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b06acff4b6a41bdd9cdac56507ead0bd7734e757\"><code>b06acff</code></a>\nAdd <code>python-arch</code> support (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1079\">#1079</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c84232ca4fde9b022e20a930bfbbecd386b56fdf\"><code>c84232c</code></a>\nchore: update known checksums for 0.12.23 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1082\">#1082</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/51fdd265d38a27ffcbca0da885510bc6fcc0ff55\"><code>51fdd26</code></a>\nUse macOS 15 runners for tests (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1081\">#1081</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a96208bed1fb5efb8da349c9bcc6cc58af9e7d74\"><code>a96208b</code></a>\nchore: update known checksums for 0.12.22 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1080\">#1080</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/0e3884b860e20d3f4d5daa2347130beb51ccde47\"><code>0e3884b</code></a>\nchore: update known checksums for 0.12.21 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1078\">#1078</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bcf05803b55ef01a5ec6368521ee1b42f97bc438\"><code>bcf0580</code></a>\nchore: update known checksums for 0.12.20 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1076\">#1076</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b92a892142bde7280cd163c2abff341413314f9f\"><code>b92a892</code></a>\nchore(deps): bump zizmorcore/zizmor-action from 0.6.2 to 0.6.3 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1077\">#1077</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/227a0f6bea25cde3444f52decccf4a18de6635f4\"><code>227a0f6</code></a>\nchore: update known checksums for 0.12.19 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1068\">#1068</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/c18668ad3cf93ea998bef934396af7bb5c839dc7...1c37ad07a6a961277cf70c0d37d6f313000f5884\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.2.0&new-version=10.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-19T11:23:37Z",
          "tree_id": "81070e27645e2fa91faa0be8f22b82ca48c14817",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f21ec47cb4de7dde6478e307dc5d7be51ad48682"
        },
        "date": 1792422300218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2928.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4614.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8328.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8113.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8176.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2147.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2145.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2143.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 418.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.59375,
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
          "id": "982d5c0933c54c785087407f47bbbef7cbf5e6be",
          "message": "mock-client: align checksum behaviour with S3 (#1988)\n\nAlign the mock client's checksum behaviour with S3:\n\n- Uploads without an additional checksum (PutObject, multipart upload\nwithout trailing checksums, and appends that create a new object) now\nstore S3's default full-object CRC64NVME checksum.\n- An append without a checksum is treated as CRC64NVME. It is accepted\non objects with a CRC64NVME checksum (or none) and rejected with\n`InvalidChecksumType` otherwise.\n- `MockGetObjectResponse::get_object_checksum` now returns\n`DidNotRequestChecksums` unless the request enabled checksum mode,\nmatching `S3CrtClient`. It returns an empty checksum for a ranged GET\nthat does not cover the whole object.\n\n`write_checksums_test` now asserts the default CRC64NVME checksum for\nuploads without checksums, on both the mock and S3, instead of ignoring\nit.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint's file system behaviour. The `MockClient`\n(`mock` feature of `mountpoint-s3-client`) changes behaviour: callers of\n`get_object_checksum` must now enable checksum mode on the GET, and\nobjects uploaded without checksums now report a CRC64NVME checksum.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry describing the mock client\nchanges. The crate is already at an unreleased patch version (0.22.2).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-20T13:34:14Z",
          "tree_id": "1e9aca50df41a802434807c0b686726724371ff7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/982d5c0933c54c785087407f47bbbef7cbf5e6be"
        },
        "date": 1792511693822,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2897.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4614.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8391.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8255.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8262.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2149.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2142.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2139.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 260.1796875,
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
          "id": "102cd612d4e87c6f1cdf77aa907215c28ce81df3",
          "message": "Bump rustls-webpki from 0.103.15 to 0.103.16 (RUSTSEC-2026-0382) (#2001)\n\nBumps rustls-webpki to 0.103.16 to fix RUSTSEC-2026-0382 (certificate\nverification may accept distrusted intermediates), which currently fails\nthe `cargo deny` advisories check. Cargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T16:51:43Z",
          "tree_id": "3de7d53a1a0d8d5f55ddac565df00118b7685447",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/102cd612d4e87c6f1cdf77aa907215c28ce81df3"
        },
        "date": 1792611996690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2911.6328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4578.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8252.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 51.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 59.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8261.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8090.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2150.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2146.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2148.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.93359375,
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
          "id": "9336fd883f6838b15f19aef80bb0f721b369eed4",
          "message": "Run CI on pushes and PRs to feature branches (#1997)\n\nLong-lived feature branches (`feature/**`) should get the same CI as\n`main`. Tests and the PR integration tests already run on PRs to any\nbranch, but some workflows only run for `main`:\n\n- Crate checks and packaging now also run on PRs to feature branches.\n- Tests, integration tests, crate checks and packaging now also run on\npushes to feature branches, so that each merge into them (including\nmerges from `main`) is tested.\n\nScheduled runs, benchmarks and stress tests stay `main`-only. Benchmarks\nand stress tests are still available on feature-branch PRs through their\nlabels.\n\n### Does this change impact existing behavior?\n\nNo. Runs for `main`, PRs to `main` and the merge queue are unchanged.\nExisting feature branches pick up the new triggers only once they merge\n`main`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. It changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T18:44:13Z",
          "tree_id": "5d21527e4ba2bee6e55fc7a8b8cf52fe6f8ec696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9336fd883f6838b15f19aef80bb0f721b369eed4"
        },
        "date": 1792621483110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2924.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4611.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8408.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8100.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2146.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2156.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2145.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.7265625,
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
          "id": "fb36799638c268ffd7d7267e936b255e203fe1df",
          "message": "Extract `MockBucket` from `MockClient` (#1989)\n\nExtract the in-memory bucket model of `MockClient` into a new\n`MockBucket`.\n\n`MockBucket` owns the bucket state (objects, in-progress uploads,\noperation counts) and serves HeadObject, ListObjectsV2, DeleteObject and\nRenameObject synchronously. `MockClient` becomes a view over an\n`Arc<MockBucket>` that adds the client-side behaviour: part sizes,\nbackpressure, and the `ObjectClient` interface. A bucket can then be\nshared between a `MockClient` and other in-memory test backends without\ngoing through `ObjectClient`, for example a metadata-only fake for the\nfile system's superblock, so that tests exercising the superblock can\nrun on synchronous operations.\n\nThe configuration is split the same way. `MockBucketConfig` (name,\nlisting order, rename support) builds a `MockBucket`. `MockDataConfig`\n(part size, backpressure, read window checks) configures a `MockClient`\nover an existing bucket with `MockClient::with_bucket`.\n`MockClientConfig` keeps its API and combines both.\n\n### Does this change impact existing behavior?\n\nNo. This only affects test-support code under the `mock` feature of\n`mountpoint-s3-client`. The existing `MockClient` and `MockClientConfig`\nAPIs and their behaviour are unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-client` changelog entry for the new public\n`MockBucket`, `MockBucketConfig`, `MockDataConfig`,\n`MockClient::with_bucket` and `MockClient::mock_bucket`. No version\nchange: these are additions, and v0.22.2 is already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-21T21:21:17Z",
          "tree_id": "b15590ec69e2ff0a11cc962d202eb1c3d68af7dd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb36799638c268ffd7d7267e936b255e203fe1df"
        },
        "date": 1792627719426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2874.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4594.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8303.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 49.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8142.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8257.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2150.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2146.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2142.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.1796875,
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
          "id": "b36809b56455bf2b1d8c63a7fea9f963a4ee71d3",
          "message": "Narrow the superblock's S3 dependency to a `MetadataClient` interface (#1998)\n\nNarrow the file system's superblock to the S3 metadata operations it\nactually issues, behind a new `MetadataClient` trait, and run the\nsuperblock's slow, deterministic tests (shuttle tests and reftests) on\nan in-memory implementation of it.\n\nThe superblock only issues HeadObject, ListObjectsV2, DeleteObject and\nRenameObject, and only reads a few response fields. `Superblock<OC:\nObjectClient>` becomes `Superblock<M: MetadataClient>`, an interface\nshaped after exactly that: plain request parameters (rename takes\n`overwrite` instead of precondition params), and small result types\n(`HeadInfo`, `ListPage`) with only the fields the superblock uses. Every\n`ObjectClient` implements `MetadataClient` through a blanket\nimplementation that converts its results, so production code paths are\nunchanged.\n\n`MetadataError` classifies the failures the superblock handles\nspecifically (not found, precondition failed, not implemented, key too\nlong) and keeps the client error as its source. It is transparent for\n`Display` and `source()`, and delegates `ProvideErrorMetadata`, so logs\nand error metadata are unchanged. The kinds don't depend on\n`mountpoint-s3-client` error types, so other clients can classify their\nown errors.\n\n`InMemoryMetadata` (new `mock` feature, enabled for the crate's own\ntests) serves the interface synchronously from a `MockBucket` (#1989),\nwhich can be shared with a `MockClient` serving the data path.\nOperations complete on the first poll, without threads or I/O:\n\n* the superblock shuttle tests use it directly, so shuttle only\nschedules at the superblock's own synchronization points;\n* the reftest harness builds its file system with the superblock on\n`InMemoryMetadata` and the data path on `MockClient`, over the same\nbucket. Runtime is unchanged (the mutations reftest is within 2-4%).\n\n### Does this change impact existing behavior?\n\nNo. The `Superblock` bounds are relaxed from `ObjectClient + Send +\nSync` to `MetadataClient`, which every such client implements, so\nexisting uses compile and behave as before. Errors keep the same\ndisplay, source chain and error metadata.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, a `mountpoint-s3-fs` changelog entry for the new public\n`MetadataClient` interface and the `mock` feature with\n`InMemoryMetadata`. No version change: these are additive, and v0.11.1\nis already pending.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T15:39:59Z",
          "tree_id": "1561f9d5314b778c198deb6a377dda2f71428ac9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b36809b56455bf2b1d8c63a7fea9f963a4ee71d3"
        },
        "date": 1792692504361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2896.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4595.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8207.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 59.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8122.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2145.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2151.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2144.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 418.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 274.6328125,
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
          "id": "9e23c24e5962d249ef06370124309d3e52661b33",
          "message": "Restrict FUSE test mounts to the user running the tests (#2000)\n\nThe FUSE test sessions mounted with `allow_other`, so any process on the\nhost could open files in the test file systems. Other processes, such as\nfile scanners, can then interfere with the tests: if one opens a file\nfor reading just after a test closes it, Mountpoint correctly rejects\nthe test's next open of that file for writing with `EPERM` (a file can't\nhave a reader and a writer at the same time, see SEMANTICS.md). That\nmade tests such as `rename_append_mock`, `read_errors_test_mock` and\n`reftests::fuse::proptest_fuse` fail intermittently, more often under\nload.\n\nThis change mounts the test sessions without `allow_other` and with the\nmatching owner-only session ACL, as `mount-s3` does by default. The\nkernel then rejects accesses from other users, root included, and the\ntests remain the only clients of their file systems.\n\n### Does this change impact existing behavior?\n\nNo. Only the test harness changes; Mountpoint's behavior is unchanged.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test-only change, no published code is affected.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-22T16:47:08Z",
          "tree_id": "a048439bd443814faa8b72fdea91aca20e6a6c32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9e23c24e5962d249ef06370124309d3e52661b33"
        },
        "date": 1792697146407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2943.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4599.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8415.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 91.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 77.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8144.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8152.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2148.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2152.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2133.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 529.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.8125,
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
          "id": "98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e",
          "message": "Update dependencies to fix security vulnerabilities (#2008)\n\nUpdates ctutils from 0.4.3 to 0.4.6 via `cargo update -p ctutils`.\n\nTemporarily adds RUSTSEC-2026-0387 (crypto-bigint) to deny.toml ignore\nlist - this is a pre-existing issue on main, blocked on AWS SDK upstream\nreleasing a version with crypto-bigint 0.7.x.\n### Does this change impact existing behavior?\n\nNo. Security patch only, no API or behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-26T15:25:34Z",
          "tree_id": "7531fded5baaca215c2865e5aab50330dcdbde7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98e033c8f6f1d0855b64c9f2b38fb4d9cbbfcb1e"
        },
        "date": 1793036887442,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2926.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4596.515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8346.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 59.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 92.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 52.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8284.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8306.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2149.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2123,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2148.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.9453125,
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
          "id": "e6e4f739c460f5ed356db01df673de220937da5f",
          "message": "Re-enable jemalloc background threads in the background mount process (#1999)\n\n`mount-s3` configures jemalloc with `background_thread:true`, so that\npage purging runs on jemalloc's own threads rather than on the threads\nthat free memory. jemalloc turns its background threads off in a forked\nchild, though, so a mount in background mode (the default, without\n`--foreground`) ran without them, and only foreground mounts had them.\nIn background mode, freed memory was returned to the operating system\n(`madvise`) on the threads that freed it, the ones serving file system\nrequests and S3 transfers, which is what the setting is meant to avoid.\n\nThis change checks whether background threads are enabled before forking\nand, if so, turns them back on in the child before it does anything\nelse, using jemalloc's `background_thread` `mallctl` control. If that\nfails, the mount fails, as a foreground mount does when jemalloc can't\nstart its background thread.\n\njemalloc's background threads can write error messages directly to\nstderr. The background process used to close stdin, stdout and stderr\nonce mounted, so files and sockets opened later could reuse those\ndescriptors and receive such writes. It now points them to `/dev/null`\ninstead.\n\nA new test checks that the mount process has jemalloc background threads\nin both background and foreground mode.\n\n### Does this change impact existing behavior?\n\nBackground-mode mounts now run with jemalloc background threads, like\nforeground mounts. As a result, memory freed after a workload is\nreturned to the operating system gradually by those threads rather than\nimmediately on the thread that freed it: this is the intended behavior\nof the setting, and matches `--foreground` mounts. A background mount\nnow fails if those threads can't be started. Its standard streams are\nredirected to `/dev/null` rather than closed. No CLI or configuration\nchanges. Setting `background_thread:false` through `_RJEM_MALLOC_CONF`\nstill disables them.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in `mountpoint-s3/CHANGELOG.md` under Unreleased\n(v1.24.1). No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-27T15:50:50Z",
          "tree_id": "8c9d0bf566d36d183adb4c0be5bde0a80bcc9873",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6e4f739c460f5ed356db01df673de220937da5f"
        },
        "date": 1793127222348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2900.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4606.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8319.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 64.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 56.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8161.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8270.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2368.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2363.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2370.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 272.55078125,
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
          "id": "2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d",
          "message": "Bump taiki-e/install-action from 2.87.28 to 2.87.29 (#2007)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.28 to 2.87.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.29</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.31.0.</p>\n</li>\n<li>\n<p>Update <code>wasmtime@latest</code> to 49.0.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.262.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.1.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.8.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.172.</p>\n</li>\n<li>\n<p>Update <code>osv-scanner@latest</code> to 2.7.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.11.</p>\n</li>\n<li>\n<p>Update <code>mdbook-d2@latest</code> to 0.3.9.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.13.0.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 1.2.1.</p>\n</li>\n<li>\n<p>Update <code>just@latest</code> to 1.59.0.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.63.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-crap@latest</code> to 0.8.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.12.0.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/8cca0918f8471c33515202b73f56ab27f2bed283\"><code>8cca091</code></a>\nRelease 2.87.29</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/fc26824601b40bd3b26712c48942016e2b2d12f6\"><code>fc26824</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5018b2ebebbb2657068e91071ea73d9a53a44f2d\"><code>5018b2e</code></a>\nUpdate <code>zizmor@latest</code> to 1.31.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d0e52041f440d731eae552c575c81c4cccd601c8\"><code>d0e5204</code></a>\nUpdate <code>wasmtime@latest</code> to 49.0.3</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/517774f2ae949bb5d89258edba4466e75f1a33be\"><code>517774f</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.262.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4bc69b1c8214eb6efb50b217dfb04ae04d8af1f5\"><code>4bc69b1</code></a>\nUpdate vacuum manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0470a3f16345a16a36a8b4b51fd72f0de5cc6b5b\"><code>0470a3f</code></a>\nUpdate <code>uv@latest</code> to 0.13.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7a2b747eb5f89f888d956c73464777912a182a35\"><code>7a2b747</code></a>\nUpdate <code>trivy@latest</code> to 0.76.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7efb5337f67975eb612c46a52d9c7790a5829f97\"><code>7efb533</code></a>\nUpdate <code>tombi@latest</code> to 1.8.4</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e5d37d6fd4d56d59f3bdc428d4138afa60276954\"><code>e5d37d6</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.172</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.28...v2.87.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.28&new-version=2.87.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T09:45:55Z",
          "tree_id": "a43a4984b96baf2ec7f6d9935a8ca8c5660db69f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fafe9bbe9024cfcdb20fbfc1410581c2beb7f4d"
        },
        "date": 1793189203842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2917.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4596.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8404.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 53.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8217.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 85.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8236.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2369.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2370.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2371.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 415.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.37890625,
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
          "id": "59c7bbc1843652ccd239ef8a9235e56ad1842774",
          "message": "Update cargo dependencies (#2009)\n\nRun cargo update to pick up in particular `crypto-bigint v0.7.10` which\naddresses RUSTSEC-2026-0387.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-28T10:56:19Z",
          "tree_id": "7fa69936bf6b5f0af7c779be06b559d490744c43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59c7bbc1843652ccd239ef8a9235e56ad1842774"
        },
        "date": 1793193495267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2946.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4597.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8378.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 67.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8079.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8267.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2364.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2368.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2362.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 50.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.26953125,
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
          "id": "36b537e5f5e439bdd4f942746e02d86f8851ae48",
          "message": "Bump hydra-core from 1.3.7 to 1.3.8 in /benchmark (#2011)\n\nBumps [hydra-core](https://github.com/hydra-ecosystem/hydra) from 1.3.7\nto 1.3.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.8</h2>\n<h3>Bug fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.8/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.8 (2026-10-25)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Prevent arbitrary code execution through unsafe PyYAML loaders in\n<code>hydra.utils.instantiate()</code>. Safe YAML loading and dumping\nremain supported.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/004658aa49f466982433dded1e4f413c5fd35da8\"><code>004658a</code></a>\nClarify the Hydra 1.3.8 security release note</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/2f20addd723d2f07eff55cae63e7df5b3170059d\"><code>2f20add</code></a>\nPrepare Hydra 1.3.8 security release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/de5554320c17cd2d974492c03d0b1456adb4a8ef\"><code>de55543</code></a>\nMerge commit from fork</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/39f3b31ae38a44fa3ba9f50fe5859265b3bbaa10\"><code>39f3b31</code></a>\nPrepare Ray launcher 1.2.2 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/ed11e57534d93a7e16d7dd1a42665f02859bb4fb\"><code>ed11e57</code></a>\nBackport the Ray version resolver fix to Hydra 1.3 (<a\nhref=\"https://redirect.github.com/hydra-ecosystem/hydra/issues/3567\">#3567</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d620c0b2b72838a20ff634a49e5cf19b82e5a66d\"><code>d620c0b</code></a>\nUpdate Hydra 1.3 package metadata after repository transfer</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/35cd89dfd67ca1718c33cc9b783529804b9244c7\"><code>35cd89d</code></a>\nSupport publishing 1.3 plugins</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/8429daa0fa1212e57240de5613d7ec74380705e8\"><code>8429daa</code></a>\nPrepare hydra-optuna-sweeper 1.3.0 release</li>\n<li>See full diff in <a\nhref=\"https://github.com/hydra-ecosystem/hydra/compare/v1.3.7...v1.3.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.7&new-version=1.3.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-28T11:41:00Z",
          "tree_id": "d0e1d32ab40a68581cd558f77a859cb6e1f6b8ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36b537e5f5e439bdd4f942746e02d86f8851ae48"
        },
        "date": 1793196422976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2928.56640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4629.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8313.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 63.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8214.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 83.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8107.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 84.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2366.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 49.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2370.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2367.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 430.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.01171875,
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
          "id": "f0b0e02cbf2a37e912697e5cd4b8830c3ededa04",
          "message": "Update CRT submodules to latest releases (#2010)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.0` -> `v1.0.2`\n* `aws-c-common` `v1.0.1` -> `v1.0.5`\n* `aws-c-http` `v1.0.0` -> `v1.1.1`\n* `aws-c-io` `v1.0.0` -> `v1.1.1`\n* `aws-c-s3` `v1.1.3` -> `v1.5.0`\n* `aws-c-sdkutils` `v1.0.0` -> `v1.0.1`\n* `aws-checksums` `v1.0.0` -> `v1.0.1`\n* `aws-lc` `v5.9.0` -> `v5.12.0`\n* `s2n-tls` `v1.7.10` -> `v1.7.13`\n\nChanges in behavior:\n- With the new `aws-c-io`, the CRT retry strategy no longer rejects more\nthan 63 retries, so setting `AWS_MAX_ATTEMPTS` (or `max_attempts` in the\nclient) above 64 no longer makes the client panic at creation and\nMountpoint at startup. A new test covers it.\n- The new `aws-c-s3` starts up to 8 threads per client for meta requests\nthat upload from or download to a file. `mountpoint-s3-crt` doesn't\nsupport those requests, so its `Client` limits them to one thread, the\nminimum the CRT allows. A new test covers it.\n- The User-Agent header carries new CRT metadata.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 055e822f0..3d29adcec:\n  > chore(release): patch-update to VERSION - 1.0.2\n  > Fix warnings found by the Undefined Behavior Sanitizer- #274 (#305)\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Uri secure cleanup (#307)\n  > Secure cleanup to the key buffers (#304)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 69cd45209..45e930738:\n  > Fix version (#1307)\n  > Set sticky bit on cross process lock file (#1306)\n  > add bignum (#1300)\n  > Make UBSan errors fatal (#1266)\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Uri secure cleanup (#1286)\n  > chore(release): patch-update to VERSION - 1.0.2\n  > fix: reduce warnings and support windows-arm builds (#1278)\n  > Add callback-compatible wrappers for byte cursor equality functions (#1281)\n  > Cache CPU feature detection at library init (#1280)\n  > Windows thread failure cleanup (#1279)\n  > Revert thread detach state to not created when OS thread creation fails (#1277)\n  > Optimize the size of encoded double values (#1268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 2b563f8a7..d19eabf4c:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Add path to responds immediately for H2 mock server (#593)\n  > Make ubsan useful (#587)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Move l4 proxy config to end of public structs (#591)\n  > Securely destroying data path  (#590)\n  > fix: strip absolute-form request-target to spec (#584)\n  > fix: validate WebSocket CLOSE frames (#583)\n  > fix: harden HPACK decoding and table sizing (#582)\n  > fix: validate HTTP/2 request pseudo headers (#581)\n  > Socks5 support (#585)\n  > Lower fuzz test log level to avoid ctest running out of memory (#589)\n  > chore: make h2benchmark configurable (#580)\n  > chore: document and pin existing behavior (#578)\n  > chore: remove unreachable OOM handling (#577)\n  > chore: address TODO comments (#576)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 1685abcd3..cbc368573:\n  > chore(release): patch-update to VERSION - 1.1.1\n  > Update API names to avoid conflict (#857)\n  > [Feat]: Adding Adaptive retry strategy (#849)\n  > Register cleanup callback on accepted socket instead of listener (#855)\n  > Fix Server Channel Use After Free (#854)\n  > chore: tester fix to notify with lock (#853)\n  > [Chore]: Removing max_retry check (#850)\n  > Make ubsan useful (#844)\n  > Fix naming of the arguments (#848)\n  > chore(release): minor-update to VERSION - 1.1.0\n  > Fix find s2n result in pre-installed s2n even when we build s2n source together (#845)\n  > Socks5 Implementation  (#832)\n  > Fix and test for thread launch failure leading to shutdown deadlock (#842)\n  > Updated `s_do_read` to handle NULL right slot (#805)\n  > chore: Clarifying comment for SecIdentityCreate Api (#839)\n  > feat: keychain-less macOS identity mode (#826)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 805ca0f4c..fcb0e322b:\n  > chore(release): minor-update to VERSION - 1.5.0\n  > Fix Clang 21 -Wdefault-const-init-field-unsafe error (#707)\n  > Add recv_buffer: buffer-pool  (#693)\n  > fix: limit the eventloops spawned (#702)\n  > chore(release): patch-update to VERSION - 1.4.1\n  > Get Defalut Part Size (#706)\n  > chore(release): minor-update to VERSION - 1.4.0\n  > User Agent fix (#703)\n  > Retry strategy Modes (#705)\n  > fix: prevent segfault from early request finish (#701)\n  > fix: surface errors with first part get (#700)\n  > fix: stream creation failure on odd part sizes (#699)\n  > Validate whole-object checksum before finish decides outcome (#698)\n  > Fix undefined behavior from function pointer type casts flagged by UBSan (#688)\n  > chore(release): patch-update to VERSION - 1.3.1\n  > Run the tests in parallel (#696)\n  > limit the file io threads by default and make it configurable via env… (#694)\n  > Full object checksum for round-trip tests (#690)\n  > chore(release): minor-update to VERSION - 1.3.0\n  > Manual changelog and more validation (#691)\n  > fix the bug where we delete the file even succeed (#689)\n  > Expected checksum and validation mode changes (#684)\n  > chore(release): minor-update to VERSION - 1.2.0\n  > Clarify the bit mask logic. (#687)\n  > Parallel out of order write to file (#679)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils de0fbe807..66a79c011:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > Fix misaligned data in endpoints (#76)\n  > Ubsan fixes (#75)\n  > feat:  Add streaming aws-chunked content encoding decoder (#64)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ee7c435de..12cd22e81:\n  > chore(release): patch-update to VERSION - 1.0.1\n  > fix: use clang's intrinsics header under clang-cl on ARM64 (#120)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 39b142ec3..cd481c207:\n  > Prepare v5.12.0 (#3689)\n  > feat(tool-openssl): add ocsp command (#3635)\n  > feat(tool-openssl): support CA signing, revocation, and CRLs in ca (#3634)\n  > Explicitly block a small set of intermediates (#3688)\n  > Hold HPKE key and context buffers out of line (#3637)\n  > feat(tool-openssl): add x509 -serial/-addtrust/-trustout (#3636)\n  > tool-openssl: add password-based key derivation to openssl enc (#3665)\n  > tool-openssl: add openssl rand subcommand (#3664)\n  > Fix PKCS12 password prompt test isolation on OpenBSD (#3680)\n  > Make the SSL_SHA256 constant non-overlapping with the rest (#3659)\n  > tool-openssl: support cipher name as command (e.g. openssl aes-256-cbc) (#3666)\n  > Move AArch64 Keccak round constants out of .text (#3674)\n  > Use CMake find_package for OpenSSL (#3662)\n  > Implement aws-lc-provider error queue handling (#3488)\n  > fix(ssl): Reject non-ECDHE cipher in handback (#3653)\n  > Import s2n-bignum 2026-09-29 (#3661)\n  > Reject ECH configuration on DTLS connections (#3578)\n  > fix(ci): running ci in dedicated msys shell (#3669)\n  > Scope OCSP noCheck exemption to the responder certificate (#3576)\n  > Bump the pip-ci group across 1 directory with 3 updates (#3657)\n  > Bump the cargo-ci-lambda group across 1 directory with 3 updates (#3658)\n  > Add FIPS support to the aws-lc-provider (#3487)\n  > Bump rustls from 0.23.40 to 0.23.45 in /tests/ci/lambda (#3649)\n  > Bump urllib3 from 2.7.0 to 2.8.0 in /tests/ci (#3606)\n  > Bump the github-actions group across 1 directory with 3 updates (#3627)\n  > Ensure UBE is caught between thread-local state init and uniqueness test (#3654)\n  > Validate OCSP HTTP request inputs (#3639)\n  > Fix -Wunused-but-set-global in rand_isolated_test.cc (#3648)\n  > fix(ci): scope id-token permission to report-failures job in integration omnibus (#3640)\n  > Reserve alignment slack in SSLBuffer max capacity (#3642)\n  > Reject failed signature controls (CWE-393) (#3643)\n  > Fix -Wunused-but-set-global in fork_ube_detect.c (#3645)\n  > Verify provider-wide algorithm reachability (#3486)\n  > Reject repeated AES-XTS data unit operations (#3621)\n  > Salt len truncation fix (#3570)\n  > Implement remaining SHA2 digests (#3485)\n  > Adding RC2 EVP key length signed truncation guard (#3589)\n  > Grow BIO_read_asn1's buffer incrementally, not from the claimed length (#3583)\n  > Add SHA2-224 and establish the SHA-2 variant pattern (#3449)\n  > Check `EVP_PKEY_assign_EC_KEY` return (#3620)\n  > Honor restricted PSS min saltlen for AUTO verify (#3470)\n  > Reset cached extension state when reusing an X509 or X509_CRL (#3584)\n  > Deduplicate digest algorithms in PKCS7_dataInit (#3579)\n  > Clear buffered cipher state per record in aead_tls_open (#3587)\n  > Prepare v5.11.0 (#3610)\n  > Harden previous-finished* length in v1/v2 transfer (#3595)\n  > Recognise known safe DH groups/primes and short-circuit Diffie-Hellman test (#3337)\n  > fix(ci): restrict calls for autofix (#3599)\n  > fix(ml_kem): Gate ML-KEM x86-64 on BMI2 in addition to AVX2 (#3596)\n  > Support RSA encryption/decryption and additional ciphers in the OpenSSL CLI (#3605)\n  > Resize md_data when an HMAC EVP_MD_CTX changes digest (#3586)\n  > Use the dummy key when a PKCS#7 content encryption key is the wrong length (#3585)\n  > Remove nameRelativeToCRLIssuer CRL distribution point support (#3598)\n  > fix(x509): Verify CSR proof-of-possession on -req (#3592)\n  > fix(ssl): Check buffer-view bounds before pointer arithmetic (#3566)\n  > Reject unoffered cipher suite in TLS 1.3 client (#3537)\n  > fix: Add patch for failing gRPC master branch (#3591)\n  > feat(duvet): RFC 8032 (EdDSA) requirement coverage + annotation-regression CI (#3477)\n  > Support `pkcs12 -export` and `req -batch` in the OpenSSL CLI (#3575)\n  > fix(acvp): place the IUT public key correctly in KAS-ECC fixedInfo (#3597)\n  > fix: Update Ruby (master) integration patch (#3590)\n  > Extend FIPS 3.x EOS to February 2030 (#3539)\n  > Seed groups and signature algorithms from the system crypto policy (#3504)\n  > Gating PR auth checks on actor pushing the code instead of author (#3567)\n  > Fail openssl ca when the issued certificate cannot be written (#3568)\n  > Guard against NULL attribute type names in X509_NAME_print_ex (#3574)\n  > Harden a number of code-paths to avoid e.g. hangs and invalid input (#3543)\n  > Add OpenSSL-compatible rehash -compat support (#3563)\n  > Reject [UNIVERSAL 0] elements with content as end-of-contents (#3560)\n  > Fix BIO socket error handling (#3459)\n  > Restricting CI permissions so fork-PR code doesn't run CI with ECR push and shared S3 write permissions (#3546)\n  > Record job settings (#3569)\n  > Zeroize ChaCha20-Poly1305 key material (#3552)\n  > Skip AEAD ConcurrentStability under Intel SDE; add deterministic context-immutability test (#3562)\n  > ci: fix openssh-master integration (#3561)\n  > Prepare 5.10.0 (#3553)\n  > Add EVP_add_cipher as a compatibility no-op (#3554)\n  > Fix SIGPIPE race in linkage checks (#3551)\n  > Quote shell arguments in tool tests (#3499)\n  > Bump the github-actions group with 8 updates (#3550)\n  > Reject non-canonical Ed25519 public keys in the nohw decoder (#3457)\n  > Add pkcs12 import subcommand to the CLI (#3532)\n  > Improve verify and x509 CLI compatibility  (#3548)\n  > Seed cipher lists and version bounds from the system crypto policy (#3503)\n  > Prevent tests from creating temporary files in the source tree (#3498)\n  > Return process exit codes from openssl CLI tool entry points (#3536)\n  > Add EVP_PKEY_check and EVP_PKEY_public_check for KEMs (#2709)\n  > Add context length guard in ML-DSA ACVP siggen (#3538)\n  > fix: declare FIPS service-indicator funcs in curve25519.c (#3514)\n  > fix: restore alloc-size >= ivlen invariant in legacy AES-GCM SET_IVLEN (#3466)\n  > Export the crypto-policies reader and add its CI job (#3527)\n  > Add a reader for the system crypto-policies OpenSSL back-end (#3502)\n  > Retry failed rndr register read a bounded number of times (#3475)\n  > Shard WASM gtests across runner CPUs (#3524)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls bce022f41..e7ce83a27:\n  > feat: add 20261021 security policies (#6141)\n  > test: add rust buffered send test (#6060)\n  > feat: Adds API to make fragment length configurable (#6139)\n  > fix(bindings): remove Result from CertValidationCallbackSync (#5779)\n  > fix: validate x509 extension length on the length-only path (#6126)\n  > fix: add null check for quic_transport_parameters (#6135)\n  > refactor: guard libcrypto function calls (#6133)\n  > docs: clarify aws-kms-tls-auth revocation requires KMS key rotation (#6128)\n  > chore: bindings release 0.3.46 (#6130)\n  > fix: prefer ECDSA signature schemes in ELB TLS 1.3 security policies (#6127)\n  > fix(mem): Reverse MADV_DONTDUMP on mlock allocator free (#6120)\n  > fix: treat s2n_allowed_to_cache_connection error return as false (#6125)\n  > chore: add new team member (#6122)\n  > fix: enforce max handshake length in parse_message (#6055)\n  > fix: copy ticket key before use to avoid concurrent rotation UAF (#6043)\n  > fix: initialize s2n_cert fields in s2n_connection_get_peer_cert_chain (#6045)\n  > fix: guard DH param sizes against uint16 truncation (#6062)\n  > refactor: remove length-prefixed logic for PQ key shares (#6041)\n  > chore: bindings release 0.3.45 (#6116)\n  > build(deps): update bindgen requirement from 0.72 to 0.73 in /bindings/rust/standard (#6084)\n  > feat: add OpenSSL 4.0 compatibility (#6111)\n  > fix: prevent trust store switch when s2n_connection_set_config fails (#6105)\n  > feat(rust-examples): add mutual TLS example (#5995)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6098)\n  > fix: re-enable TLS_RSA cipher suites in the Java integration test client (#6114)\n  > revert: new AMI for the kTLS fleet was published with updated PGP key for the github CLI. (#6109)\n  > ci: pin macOS CI to openssl@3 to fix OpenSSL 4 build break (#6113)\n  > build(cmake): add opt-in discovery for a distribution-packaged AWS-LC (#6108)\n  > fix: disable TLS1.3 resumption when client auth is required (#6103)\n  > feat: Adds split API on the Rust bindings Connection (#5774)\n  > fix: report Finished and PSK binder mismatches as decrypt_error (#6104)\n  > chore: bindings bump v.0.3.44 (#6099)\n  > chore: Update gh cli PGP key (#6102)\n  > chore(bindings): Address 2 Rustsec advisories (#6095)\n  > style: order tls 1.3 cipher suites first (#6092)\n  > fix: remove unused variable to fix Clang build with Werror (#6093)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#6079)\n  > feat: Preserve count in handshake/compute duration (#6069)\n  > fix: Ensure that TLS1.3 ticket is not accepted on TLS1.2 codepath (#6081)\n  > build(deps): update brass-aphid-wire crates (#6090)\n  > fix: cleanup kms-tls-auth crate (#6094)\n  > feat(bindings): add async cert validation callback (#6071)\n  > feat(metrics): skip export when record is zero (#6087)\n  > fix: relax https test to accept all status codes (#6091)\n  > feat(bindings): deprecate & alias Connection::wipe (#6033)\n  > fix: cleanup dhparams in failure case (#6085)\n  > chore: add simonmarty to the team (#6089)\n  > feat(policy): Add ELB, KMS, and service TLS security policies (#5977)\n```\n</details>\n\n### Does this change impact existing behavior?\n\n`AWS_MAX_ATTEMPTS` values above 64 are now accepted, where Mountpoint\nused to panic at startup. Each client has one additional idle thread.\nSee the changes in behavior above.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: \"Update to latest CRT dependencies\" entries for\n`mountpoint-s3-crt-sys`, `mountpoint-s3-crt` and `mountpoint-s3-client`,\n\"Update to latest S3 client\" for `mountpoint-s3-fs`, and entries for the\n`AWS_MAX_ATTEMPTS` fix in `mountpoint-s3-client` and `mountpoint-s3`.\nMinor version bumps: `mountpoint-s3-crt-sys` 0.18.0, `mountpoint-s3-crt`\n0.17.0, `mountpoint-s3-client` 0.23.0, `mountpoint-s3-fs` 0.12.0.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-29T06:52:50Z",
          "tree_id": "451fcd2f4a5dd7b7b92a1d893bdac454a0ba1a3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0b0e02cbf2a37e912697e5cd4b8830c3ededa04"
        },
        "date": 1793265223296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2919,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4708.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8412.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 93.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8096.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8234.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2363.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2367.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2352.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 274.890625,
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
          "id": "f5d283be78d717f3f219d82740608a1483dfa301",
          "message": "Bump libz-sys from 1.1.30 to 1.1.31 (RUSTSEC-2026-0418) (#2013)\n\nBumps libz-sys to 1.1.31 to fix RUSTSEC-2026-0418 (the libz-sys build\nscript logs its compiler probe command, leaking environment variables\ninto the build directory), which currently fails the `cargo deny`\nadvisories check. Cargo.lock only, no code changes.\n\nlibz-sys is a build-time dependency only, reached via\n`built` -> `git2` -> `libgit2-sys` from the `mountpoint-s3` and\n`mountpoint-s3-client` build scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dependency lockfile update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-10-30T09:44:05Z",
          "tree_id": "23b855040345b40f370758ceb7539c4582cf29a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5d283be78d717f3f219d82740608a1483dfa301"
        },
        "date": 1793361878023,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2941.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4597.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8302.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 94.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 108.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 49.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8195.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8305.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2369.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2370.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1330.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 224.5234375,
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
          "id": "eed2626515d090b005ce3383a2e9ec878c266ecf",
          "message": "Fix lock-order deadlock between forget and rename/opendir in the superblock (#1995)\n\n`Superblock::forget` held the inode map lock while taking the parent\ndirectory's state lock to unlink the forgotten inode. `rename` and\nopening a directory take the inode map lock while holding a directory's\nstate lock. A forget racing with either in the same directory could\ntherefore deadlock and hang the file system.\n\n`forget` now removes the inode from the map under the map lock alone,\nand then locks the parent to unlink it, unless a lookup has remembered\nit again in between. While it is being unlinked, the inode stays in the\nmap with a lookup count of 0, so that the forget of a child still finds\nits parent if the parent is being forgotten at the same time. A\ndirectory that was unlinked before its children were forgotten can still\nhold children that are no longer in the inode map: opening the directory\nskips such local children instead of failing.\n\nTo keep the order from being broken again, the map's lock is now\ninternal to `InodeMap`: its methods lock internally and return clones,\nso no caller can hold the map lock while taking another lock. Operations\nthat need several steps under the lock (lowering an inode's lookup count\nand finding its parent, checking whether a directory is an ancestor of\nanother for rename) are `InodeMap` methods.\n\nAdds shuttle tests for forget racing with rename and opendir (both\ndeadlock without the fix), a lookup of the same inode, and the forget of\nthe parent directory, alone and together with a lookup of it, and a unit\ntest for listing a directory with a local child that is not in the inode\nmap.\n\n### Does this change impact existing behavior?\n\nIt fixes a possible hang, and opening a directory no longer fails when a\nlocal file in it has been forgotten. No other behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes: entries in the `mountpoint-s3-fs` and `mountpoint-s3` changelogs.\nBoth crates are already at unreleased patch versions (v0.11.1 and\nv1.24.1).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-30T12:05:41Z",
          "tree_id": "c3fd6343dc7f4d27bbca39f536afa82b0e243538",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eed2626515d090b005ce3383a2e9ec878c266ecf"
        },
        "date": 1793370385925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2934.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4715.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8292.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 62.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 94.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 63.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8202.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8232.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2371.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2370.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2368.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 273.203125,
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
          "id": "830e8a9d7c7d13d79fa8e143b87bd811d31a1d77",
          "message": "  Upgrade fuser to 0.17 (#2005)\n\nUpgrades the vendored fuser to 0.17 and adopts its typed wrappers.\n\n- `mountpoint-s3-fuser` is re-vendored from `fuser/fork` (`d59a11218`)\nand excluded from the workspace, since fuser 0.17 declares its own\n`[workspace]`.\n- `--auto-unmount` keeps its current behavior: with no `--allow-*`\noption, Mountpoint passes `auto_unmount` and `allow_other` to the kernel\nand keeps the ACL as `Owner`, as the previous fuser did. Tests cover\nthis.\n- `S3Filesystem` now matches fuser's `Filesystem` trait. `INodeNo`,\n`FileHandle`, `Errno`, `Generation`, `LockOwner`, `FopenFlags`,\n`BsdFileFlags`, `WriteFlags` and `u64` offsets are used all the way\ndown. Our `OpenFlags` and `RenameFlags` are kept and converted once in\n`fuse.rs`.\n\n### Does this change impact existing behavior?\n\nNo user-facing behavior changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n - `mountpoint-s3-fuser`: bumped to 0.2.0\n- `mountpoint-s3-fs`: added a changelog entry for the fuser 0.17\nalignment and the type changes. No version change needed.\n \n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-10-30T16:48:12Z",
          "tree_id": "c3655b84b58bdbcbff463b4dd97f32f8fbb1831a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/830e8a9d7c7d13d79fa8e143b87bd811d31a1d77"
        },
        "date": 1793387994167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3082.27734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4569.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8206.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 92.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 61.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8350.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8288.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2367.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2369.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2366.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 326.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 276.1015625,
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
          "id": "7c8d62364774d42086c0ac62de1693ef2bc68fc2",
          "message": "Fix `max_attempts = 1` still retrying failed requests (#1996)\n\nSetting the maximum number of attempts to 1\n(`S3ClientConfig::max_attempts` or `AWS_MAX_ATTEMPTS=1`) did not disable\nretries: failed requests were still attempted up to 4 times. The client\npasses `max_retries = attempts - 1` to the CRT's standard retry\nstrategy, which treats `max_retries = 0` as \"use the default\" (3\nretries).\n\nThe client now configures retries through the S3 client's built-in retry\nconfig, with the new `ClientConfig::retry_config` in\n`mountpoint-s3-crt`, instead of building a retry strategy: the no-retry\nmode (`AWS_S3_RETRY_MODE_NONE`, from awslabs/aws-c-s3#705) for 1\nattempt, and the standard mode with `max_attempts - 1` retries\notherwise, with the same backoff settings as before. In the no-retry\nmode the S3 client makes each request once, without acquiring a retry\ntoken, and also turns off the first-byte timeout it otherwise sets on\nUploadPart requests, which relies on retrying the parts that time out.\n\n`AWS_MAX_ATTEMPTS` must now be a positive integer. Other values make\nclient creation fail with `NewClientError::InvalidConfiguration`, so\nMountpoint fails to start with a clear error. Previously `0` selected\nthe CRT's default of 4 attempts, and other invalid values were silently\nignored.\n\nNew tests run against a local mock server (wiremock). They count the\nrequests made for failing ListObjectsV2 and HeadObject calls with 1, 2\nand 3 attempts, set from the client config or the environment, and check\nthat invalid `AWS_MAX_ATTEMPTS` values are rejected. The single-attempt\nand invalid-value tests fail without this fix.\n\n### Does this change impact existing behavior?\n\nYes:\n- Bug fix: `AWS_MAX_ATTEMPTS=1` and `max_attempts(1)` now make a single\nattempt.\n- Breaking change: Mountpoint and `S3CrtClient::new` now fail when\n`AWS_MAX_ATTEMPTS` is set to anything other than a positive integer (for\nexample `0`, `-1`, `\"\"` or `many`). These values were silently ignored,\nexcept `0`, which gave 4 attempts instead of no retries. Failing at\nstartup is safer than running with a different number of attempts than\nthe user asked for.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. There are changelog entries for `mountpoint-s3-crt`,\n`mountpoint-s3-client` and `mountpoint-s3`.\n- `mountpoint-s3` is bumped to 1.25.0 for the breaking change.\n- `mountpoint-s3-crt` 0.17.0 (new `ClientConfig::retry_config`, which\nreplaces the removed `ClientConfig::retry_strategy`) and\n`mountpoint-s3-client` 0.23.0 are already bumped past their latest\nreleases.\n- `mountpoint-s3-fs` gets the change through its existing \"Update to\nlatest S3 client\" entry (0.12.0, already bumped).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2026-10-30T18:39:55Z",
          "tree_id": "a98db25d75e805a696db1f0ab5a364c65c8df83f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c8d62364774d42086c0ac62de1693ef2bc68fc2"
        },
        "date": 1793397388575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2934.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4599.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8528.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 63.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 56.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8264.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8165.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2369.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2368.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2364.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.98828125,
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
          "id": "75b9f7ee92ac92be333a2fbd815e6d68776234fe",
          "message": "Name Amazon Linux source tarballs after the release tag (#2015)\n\nThe source and vendor tarballs used to build the Amazon Linux 2023 and\n2027 packages will be using `v<version>` release tag. They are named\nafter the tag and differ from the tarballs we build today:\n\n| | Before | After |\n|---|---|---|\n| `Source0` | `mountpoint-s3-<version>.tar.gz`, unpacking into\n`mountpoint-s3/` | `mountpoint-s3-v<version>.tar.gz`, unpacking into\n`mountpoint-s3-<version>/` |\n| `Source1` | `mountpoint-s3-<version>-vendor.tar.gz`, unpacking into\n`vendor/` | `mountpoint-s3-v<version>-vendor.tar.xz`, unpacking into\n`vendor/` |\n\nThis change updates the spec template to match, and updates\n`generate_amzn_srpm.sh` to build the CI tarballs with the same names and\nlayout, so the `Build SRPM` and `Test RPM` jobs keep testing the spec\nthat is submitted to Amazon Linux.\n\n### Does this change impact existing behavior?\n\nNo. It only changes the names and layout of the tarballs used to build\nthe Amazon Linux RPMs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is a packaging-only change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-10-30T22:01:00Z",
          "tree_id": "140c752615ef45094631d955cf5a4eb1900ba576",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/75b9f7ee92ac92be333a2fbd815e6d68776234fe"
        },
        "date": 1793406199364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2910.21875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4614.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8349.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 65.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 53.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8180.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 85.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8132.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2368.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2372.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2370.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 415.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 260.0390625,
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
          "id": "ae9e47e98aec7333616d51a3d440c8bbf64c2a2d",
          "message": "Bump astral-sh/setup-uv from 10.3.0 to 10.3.2 (#2016)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.3.0 to 10.3.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.3.2 🌈 update known checksums for 0.13.5</h2>\n<h2>Changes</h2>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.5 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1103\">#1103</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.3.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1102\">#1102</a>)</li>\n</ul>\n<h2>v10.3.1 🌈 preserve cache error class names in save-cache bundle</h2>\n<h2>Changes</h2>\n<p>This release includes a fix so that multiple concurrent workflows\ntrying to upload the same cache no longer warn</p>\n<p><code>##[warning]Failed to save: Unable to reserve cache with key\n..., another job may be creating this cache.</code></p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>fix: preserve cache error class names in save-cache bundle <a\nhref=\"https://github.com/dannyward630\"><code>@​dannyward630</code></a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1093\">#1093</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.13.4 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1099\">#1099</a>)</li>\n<li>chore: update known checksums for 0.13.2/0.13.3 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1098\">#1098</a>)</li>\n<li>chore: update known checksums for 0.13.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1094\">#1094</a>)</li>\n<li>Verify npm dependency signatures before builds <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1027\">#1027</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: cache-dependency-glob matches relative to the working\ndirectory <a\nhref=\"https://github.com/flange-ipb\"><code>@​flange-ipb</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1092\">#1092</a>)</li>\n<li>docs: update version references to v10.3.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1090\">#1090</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1101\">#1101</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/07a047e608db84b3d8c06cd9a7c7dcc9c355c18e\"><code>07a047e</code></a>\nchore: update known checksums for 0.13.5 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1103\">#1103</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e1b85369e72750369c935b004eccf97311bdf5dc\"><code>e1b8536</code></a>\ndocs: update version references to v10.3.1 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1102\">#1102</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/18d369b23da25a81e9458561248e1aafff6a70fa\"><code>18d369b</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1101\">#1101</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4ad2329c1e377d882fcae221cd1d17e7c0ad788e\"><code>4ad2329</code></a>\nchore: update known checksums for 0.13.4 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1099\">#1099</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4bc6759c82322ff7efa28de54a45404ca6869912\"><code>4bc6759</code></a>\nchore: update known checksums for 0.13.2/0.13.3 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1098\">#1098</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c97f06e356bcca1b426f396ef93ec35ce149ce7b\"><code>c97f06e</code></a>\nfix: preserve cache error class names in save-cache bundle (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1093\">#1093</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8ca4be000bfa5f8e6aaa01d8470878c90aa728d3\"><code>8ca4be0</code></a>\nchore: update known checksums for 0.13.1 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1094\">#1094</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b627d85691ead579b598a36169571b1c7123526f\"><code>b627d85</code></a>\ndocs: cache-dependency-glob matches relative to the working directory\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1092\">#1092</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f8c88970fcd8fff8e97bc62edc5f5c073a0527fe\"><code>f8c8897</code></a>\nVerify npm dependency signatures before builds (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1027\">#1027</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f64d32b1cd6cc11405a74665b3dfb7bb86fea9f0\"><code>f64d32b</code></a>\ndocs: update version references to v10.3.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1090\">#1090</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/1c37ad07a6a961277cf70c0d37d6f313000f5884...07a047e608db84b3d8c06cd9a7c7dcc9c355c18e\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.3.0&new-version=10.3.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-02T11:15:17Z",
          "tree_id": "90f98cc44ea6a2652fc81cf07c4a2dd5422d8f8d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae9e47e98aec7333616d51a3d440c8bbf64c2a2d"
        },
        "date": 1793626786535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2940.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4626.4296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8400.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 95.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 73.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8259.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 85.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8187.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2365.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2362.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2353.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 414.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 277.85546875,
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
          "id": "b7664ba77feb258418d8629302d6f77bf73f81c8",
          "message": "Bump taiki-e/install-action from 2.87.29 to 2.87.32 (#2018)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.29 to 2.87.32.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.32</h2>\n<ul>\n<li>\n<p>Update <code>wild@latest</code> to 0.11.0.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.35.2.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.5.</p>\n</li>\n<li>\n<p>Update <code>sccache@latest</code> to 0.19.0.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.4.1.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.19.</p>\n</li>\n<li>\n<p>Update <code>knope@latest</code> to 0.23.2.</p>\n</li>\n<li>\n<p>Update <code>dprint@latest</code> to 0.64.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-vet@latest</code> to 0.10.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-sort@latest</code> to 2.1.4.</p>\n</li>\n<li>\n<p>Update <code>cargo-binstall@latest</code> to 1.26.1.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.6.3.</p>\n</li>\n</ul>\n<h2>2.87.31</h2>\n<ul>\n<li>\n<p>Downgrade <code>cargo-sort@latest</code> to 2.1.3.</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.35.0.</p>\n</li>\n<li>\n<p>Update <code>xh@latest</code> to 0.26.3.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.13.5.</p>\n</li>\n<li>\n<p>Update <code>ubi@latest</code> to 0.13.0.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.76.1.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.9.0.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.174.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.7.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.10.17.</p>\n</li>\n<li>\n<p>Update <code>jaq@latest</code> to 3.1.2.</p>\n</li>\n<li>\n<p>Update <code>espup@latest</code> to 0.17.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5488ac5a951645ce95062214902ac4b6bc1a1037\"><code>5488ac5</code></a>\nRelease 2.87.32</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/688322dd8dfd7f9d8217a7c2ac457d4fa2fe3436\"><code>688322d</code></a>\nci: Mark cargo-vet as glibc_pre_2_34_incompat</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/cebf56e0546f8cbe3a317a3dbc527e4cb5c8c3a1\"><code>cebf56e</code></a>\nUpdate <code>wild@latest</code> to 0.11.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/84f1fb195ce4aaeb61ac0c67fc39e032938542b9\"><code>84f1fb1</code></a>\nUpdate <code>vacuum@latest</code> to 0.35.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/22b4d72da777df58c5ce1018d97c3436f2b40413\"><code>22b4d72</code></a>\nUpdate trunk manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/4aa26a3b8bcd9925bd25797b31dcb5647804e8de\"><code>4aa26a3</code></a>\nUpdate <code>tombi@latest</code> to 1.9.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/354bf5e1fe5e0639198bcea068b705c2f3714614\"><code>354bf5e</code></a>\nUpdate <code>sccache@latest</code> to 0.19.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/89eb2014d3d6cb70abda0a573687a03fafa32b12\"><code>89eb201</code></a>\nUpdate <code>release-plz@latest</code> to 0.4.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/304ba0dcffc8ad84cdb9f3d7c359b2a4223c2a42\"><code>304ba0d</code></a>\nUpdate <code>mise@latest</code> to 2026.10.19</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/104910e39f1be359337b9c0b2069bc5749f06c0d\"><code>104910e</code></a>\nUpdate <code>knope@latest</code> to 0.23.2</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.29...v2.87.32\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.29&new-version=2.87.32)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-02T13:26:19Z",
          "tree_id": "61ad6b9b6a442de4ab17e321d6ddd512fa3178d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b7664ba77feb258418d8629302d6f77bf73f81c8"
        },
        "date": 1793635827722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2937.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4619.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8374.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8057.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 85.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8249.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 87.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2366.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2368.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2354.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 413.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 272.74609375,
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
          "id": "dcda7b59458ac3d6228a5c1a3fb99cf4bcf68152",
          "message": "Bump actions/setup-python from 7.0.0 to 7.1.0 (#2017)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 7.0.0 to 7.1.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.1.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements</h3>\n<ul>\n<li>Add <code>mirror</code> and <code>mirror-token</code> inputs for\ncustom Python distribution sources by <a\nhref=\"https://github.com/luhenry\"><code>@​luhenry</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1302\">actions/setup-python#1302</a></li>\n<li>Improve error message clarity by <a\nhref=\"https://github.com/v-lmvysakh\"><code>@​v-lmvysakh</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1351\">actions/setup-python#1351</a></li>\n</ul>\n<h3>Dependency Upgrade</h3>\n<ul>\n<li>Upgrade browserslist from 4.28.2 to 4.28.9 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1353\">actions/setup-python#1353</a></li>\n<li>Upgrade <code>@​typescript-eslint/parser</code> from 8.62.0 to\n8.70.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1343\">actions/setup-python#1343</a></li>\n<li>Upgrade eslint-plugin-jest from 29.15.2 to 29.16.6 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1342\">actions/setup-python#1342</a></li>\n<li>Upgrade <code>@​vercel/ncc</code> from 0.44.0 to 0.45.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1357\">actions/setup-python#1357</a></li>\n<li>Upgrade <code>@​types/semver</code> from 7.7.1 to 7.8.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1359\">actions/setup-python#1359</a></li>\n<li>Upgrade undici from 6.28.0 to 6.29.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1364\">actions/setup-python#1364</a></li>\n<li>Upgrade ts-jest from 29.4.11 to 29.4.14 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1361\">actions/setup-python#1361</a></li>\n<li>Upgrade brace-expansion from 5.0.9 to 5.0.12 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1365\">actions/setup-python#1365</a></li>\n<li>Upgrade prettier from 3.8.4 to 3.9.9 and package.json from 7.0.0 to\n7.1.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1363\">actions/setup-python#1363</a></li>\n<li>Upgrade <code>@​typescript-eslint/eslint-plugin</code> from 8.62.0\nto 8.71.1 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1369\">actions/setup-python#1369</a></li>\n<li>Upgrade actions/checkout from 7.0.0 to 7.0.1 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1345\">actions/setup-python#1345</a></li>\n<li>Upgrade cache to 6.3.0 by <a\nhref=\"https://github.com/v-HarithaVattikuti\"><code>@​v-HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1370\">actions/setup-python#1370</a></li>\n<li>Resolve Basic Validation audit failures by <a\nhref=\"https://github.com/v-HarithaVattikuti\"><code>@​v-HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1347\">actions/setup-python#1347</a></li>\n<li>Resolve npm audit failures by <a\nhref=\"https://github.com/v-HarithaVattikuti\"><code>@​v-HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1350\">actions/setup-python#1350</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/luhenry\"><code>@​luhenry</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1302\">actions/setup-python#1302</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v7.0.0...v7.1.0\">https://github.com/actions/setup-python/compare/v7.0.0...v7.1.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/6d4fd22b20465ccc0f7354476588e8df7c9ca0e0\"><code>6d4fd22</code></a>\nCache upgrade to 6.3.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1370\">#1370</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/ec52d0af729a7c50ced4261d17a07916f43f5b8e\"><code>ec52d0a</code></a>\nBump <code>@​typescript-eslint/eslint-plugin</code> from 8.62.0 to\n8.71.1 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1369\">#1369</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/ff73b2463e2f3baa703f830da214b8dfeeaeccf8\"><code>ff73b24</code></a>\nBump prettier from 3.8.4 to 3.9.9 and package.json from 7.0.0 to 7.1.0\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1363\">#1363</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0e40890053525508c059c61932a6b8614f9e95db\"><code>0e40890</code></a>\nBump brace-expansion from 5.0.9 to 5.0.12 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1365\">#1365</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3892123fbe74688ccc83ec7c465dc688359e5199\"><code>3892123</code></a>\nBump ts-jest from 29.4.11 to 29.4.14 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1361\">#1361</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/660965736c4aecc62797ea07d351a3c259f14660\"><code>6609657</code></a>\nBump undici from 6.28.0 to 6.29.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1364\">#1364</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/e1be392b26fb1917a7b2c455817e4b4dad6544ce\"><code>e1be392</code></a>\nBump <code>@​types/semver</code> from 7.7.1 to 7.8.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1359\">#1359</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/06da6279cdbca41027908073e81a4544dc79c06b\"><code>06da627</code></a>\nBump <code>@​vercel/ncc</code> from 0.44.0 to 0.45.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1357\">#1357</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/af9bcc7548695e66d75709de6f29e337624b8de8\"><code>af9bcc7</code></a>\nBump eslint-plugin-jest from 29.15.2 to 29.16.6 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1342\">#1342</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/7aeabeba5501120d873c50398519dbfd0657031c\"><code>7aeabeb</code></a>\nBump <code>@​typescript-eslint/parser</code> from 8.62.0 to 8.70.0 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1343\">#1343</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/setup-python/compare/5fda3b95a4ea91299a34e894583c3862153e4b97...6d4fd22b20465ccc0f7354476588e8df7c9ca0e0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-11-02T19:54:37Z",
          "tree_id": "2d50d7e9cf3d0bf40dfc66a9aa5c8c347f6fe312",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dcda7b59458ac3d6228a5c1a3fb99cf4bcf68152"
        },
        "date": 1793659589349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2974.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4724.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8338.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 94.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 50.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 64.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 56.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8282.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8129.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 87.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2369.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2356.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2365.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 428.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 259.109375,
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
          "id": "fe23b080942dd6f505b05b45ffbfa85a96e330bf",
          "message": "Replace the crc32c crate with the CRT's CRC32C combine function (#2019)\n\nMountpoint used the `crc32c` crate only to combine CRC32C checksums. It\nwas added in #367 because the CRT had no combine function at the time.\nThe CRT has since added one\n([aws-checksums#109](https://github.com/awslabs/aws-checksums/pull/109)),\nand #1744 brought that version into Mountpoint, so this change uses it\nand removes the crate.\n\n- `mountpoint-s3-crt`: add `checksums::crc32c::combine`, matching\n`crc64nvme::combine`.\n- `mountpoint-s3-fs`: remove `checksums::combine_checksums` and call\n`crc32c::combine` directly, as is already done for CRC64NVME.\n\nThe CRT function returns the same results as the crate and is faster:\nabout 70 ns per combine, against 4–100 µs for the crate.\n\n### Does this change impact existing behavior?\n\nNo user-facing changes. Removing `combine_checksums` from\n`mountpoint-s3-fs` is a breaking change for library users, who should\nuse `crc32c::combine` instead.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries added for `mountpoint-s3-crt`, `mountpoint-s3-client`\nand `mountpoint-s3-fs`. No version change needed, because all three\nalready have unreleased version bumps.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-11-02T22:51:49Z",
          "tree_id": "0d3641477f868971c5d6b5111dbc832eb7684cc4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe23b080942dd6f505b05b45ffbfa85a96e330bf"
        },
        "date": 1793669104930,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2923.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4586.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8391.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 60.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 93.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 54.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 62.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8293.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8123.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2364.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2368.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2367.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 271.84765625,
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
          "id": "5a5bedbdc1ef4dd19d633f1963faf68fafa4b9fb",
          "message": "Update CRT submodules to latest releases (#2020)\n\nUpdate the CRT submodules to the latest releases:\n\n* `aws-c-auth` `v1.0.2` -> `v1.0.3`\n* `aws-c-s3` `v1.5.0` -> `v1.5.2`\n\nAll other submodules are already at their latest release.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Changes in behavior:\n- Requests to S3 carry the `amz-sdk-invocation-id` and `amz-sdk-request`\nheaders on every attempt.\n- Credential provider endpoints for `eusc-` regions now use the\n`amazonaws.eu` DNS suffix.\n\nThe new `aws-c-s3` also accepts `request_body` on `PUT_OBJECT` meta\nrequests. `mountpoint-s3-client` only sets `request_body` for single\nPutObject requests, which use the `DEFAULT` meta request type, so this\nchange does not affect it.\n\nThe compressed `mountpoint-s3-crt-sys` crate is 9.5MiB, within the 10MiB\ncrates.io limit.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. The unreleased sections of `mountpoint-s3-crt-sys` (v0.18.0),\n`mountpoint-s3-crt` (v0.17.0) and `mountpoint-s3-client` (v0.23.0)\nalready include \"Update to latest CRT dependencies.\" and the version\nbumps from #2010.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 3d29adcec..6f9496f2f:\n  > chore(release): patch-update to VERSION - 1.0.3\n  > Add aws-eusc partition DNS suffix for credential provider endpoints (#309)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 fcb0e322b..bc923d67e:\n  > chore(release): patch-update to VERSION - 1.5.2\n  > Zero-copy uploads: request_body on PUT_OBJECT (#709)\n  > Adding Retry headers to every attempt (#710)\n  > chore(release): patch-update to VERSION - 1.5.1\n  > Getters for default max part size and configured memory limit (#711)\n  > Resume token ETag with caller If-Match (#708)\n```\n\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-11-03T10:16:27Z",
          "tree_id": "115ded402e2824de775b5776a896f73c2bbe323f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a5bedbdc1ef4dd19d633f1963faf68fafa4b9fb"
        },
        "date": 1793709548384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2930.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4612.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8365.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 94.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 95.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 52.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 62.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 63.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 85.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8334.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 86.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2370.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 51.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2366.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2365.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 273.21484375,
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
          "id": "583dfe8e8f9b20861e3095b37a13f29df477b2c4",
          "message": "Authenticate packaging image pulls against Amazon ECR Public (#2014)\n\nThe `Packaging` job pulls its CentOS 7 build image anonymously from\n`public.ecr.aws`. That quota is enforced per source IP, and\nGitHub-hosted runners\nshare a NAT pool with other tenants, so we regularly inherited an\nalready-exhausted\nbudget and failed with:\n\n```\npublic.ecr.aws/docker/library/centos:7: failed to resolve source metadata:\n429 Too Many Requests - Server message: toomanyrequests: Data limit exceeded\n```\n\nThis accounted for **15 of the last 40 `Packaging` runs** (~38%),\nincluding merge-queue\nruns, where it blocked unrelated pull requests. Only the `x86_64` leg\nfailed; the\n`aarch64` leg runs on a self-hosted runner, which egresses from our own\naddress rather\nthan a shared one.\n\n1. **Authenticate the pull** against ECR Public using the existing\n`ACTIONS_IAM_ROLE`,\nso we use the account quota instead of the shared anonymous one. Both\ncredential\nsteps are best effort: where we can't authenticate, we fall back to an\nanonymous\n   pull.\n2. **The job moves into the integration tests workflow**, so it sits\nbehind the same\napproval gate as the other jobs that use our own credentials and\nrunners.\n3. **`fail-fast: false`** keeps a failure on one architecture from\ncancelling an\n   otherwise healthy build on the other.\n\n`.github/workflows/package.yml` is removed; the job is now `packaging`\nin\n`integration.yml` and is included in the `Integration Tests Complete`\naggregate check.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-11-03T14:28:11Z",
          "tree_id": "9ff696b13437c4fb10dfda18ab8cabce1030d8f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/583dfe8e8f9b20861e3095b37a13f29df477b2c4"
        },
        "date": 1793724769011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3048.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4601.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8409.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 94.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 64.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 95.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 51.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 60.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 64.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8310.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 85.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8175.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2367.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 50.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2373.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2365.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 52.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 305.9609375,
            "unit": "MiB"
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
        "date": 1793731272344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2986.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4613.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8433.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 61.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 95.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 79.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 94.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 53.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 63.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 55.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 63.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8230.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 84.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8294.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 85.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2365.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 52.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2368.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2364.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 51.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 244.3359375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1760020323322,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "1215a6df43bc5fe95672463cb16f91b579694ab2",
          "message": "Replace httpmock with wiremock (#1589)\n\nReplaces `httpmock` dependency with `wiremock` that is more often\nupdated.\n\nOnly replaces testing library.\n\nProbably needs a Changelog entry, will add later.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T10:49:18Z",
          "tree_id": "f4f32b234c8ad7dd3ec95068be935f1557bdf367",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1215a6df43bc5fe95672463cb16f91b579694ab2"
        },
        "date": 1756472664454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2893.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4561.30078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8163.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8249.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8225.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2084.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2091.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.57421875,
            "unit": "MiB"
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
          "id": "028ec721e5134829d2c1c8605ef8f3236d5ddeed",
          "message": "[Benchmarks] Ensure binaries are built with necessary flags for flamegraphing (#1575)\n\nEnsures that frame pointers for C and Rust code are emitted when\nflamegraphing mountpoint.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T13:28:20Z",
          "tree_id": "1384d0df12a36373765319f23a69312c3bcd9dcf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/028ec721e5134829d2c1c8605ef8f3236d5ddeed"
        },
        "date": 1756482077724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4557.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8430.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8195.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8213.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2097.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 396.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.30859375,
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
          "id": "61f94b3f80f002b29c98c4089273d1db6eed3438",
          "message": "Bump tracing-subscriber from 0.3.19 to 0.3.20 (#1590)\n\nBumps [tracing-subscriber](https://github.com/tokio-rs/tracing) from\n0.3.19 to 0.3.20.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tracing/releases\">tracing-subscriber's\nreleases</a>.</em></p>\n<blockquote>\n<h2>tracing-subscriber 0.3.20</h2>\n<p><strong>Security Fix</strong>: ANSI Escape Sequence Injection\n(CVE-TBD)</p>\n<h2>Impact</h2>\n<p>Previous versions of tracing-subscriber were vulnerable to ANSI\nescape sequence injection attacks. Untrusted user input containing ANSI\nescape sequences could be injected into terminal output when logged,\npotentially allowing attackers to:</p>\n<ul>\n<li>Manipulate terminal title bars</li>\n<li>Clear screens or modify terminal display</li>\n<li>Potentially mislead users through terminal manipulation</li>\n</ul>\n<p>In isolation, impact is minimal, however security issues have been\nfound in terminal emulators that enabled an attacker to use ANSI escape\nsequences via logs to exploit vulnerabilities in the terminal\nemulator.</p>\n<h2>Solution</h2>\n<p>Version 0.3.20 fixes this vulnerability by escaping ANSI control\ncharacters in when writing events to destinations that may be printed to\nthe terminal.</p>\n<h2>Affected Versions</h2>\n<p>All versions of tracing-subscriber prior to 0.3.20 are affected by\nthis vulnerability.</p>\n<h2>Recommendations</h2>\n<p>Immediate Action Required: We recommend upgrading to\ntracing-subscriber 0.3.20 immediately, especially if your\napplication:</p>\n<ul>\n<li>Logs user-provided input (form data, HTTP headers, query parameters,\netc.)</li>\n<li>Runs in environments where terminal output is displayed to\nusers</li>\n</ul>\n<h2>Migration</h2>\n<p>This is a patch release with no breaking API changes. Simply update\nyour Cargo.toml:</p>\n<pre lang=\"toml\"><code>[dependencies]\ntracing-subscriber = &quot;0.3.20&quot;\n</code></pre>\n<h2>Acknowledgments</h2>\n<p>We would like to thank <a href=\"http://github.com/zefr0x\">zefr0x</a>\nwho responsibly reported the issue at\n<code>security@tokio.rs</code>.</p>\n<p>If you believe you have found a security vulnerability in any\ntokio-rs project, please email us at <code>security@tokio.rs</code>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/4c52ca5266a3920fc5dfeebda2accf15ee7fb278\"><code>4c52ca5</code></a>\nfmt: fix ANSI escape sequence injection vulnerability (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3368\">#3368</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/f71cebe41e4c12735b1d19ca804428d4ff7d905d\"><code>f71cebe</code></a>\nsubscriber: impl Clone for EnvFilter (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3360\">#3360</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/3a1f571102b38bcdca13d59f3c454989d179055d\"><code>3a1f571</code></a>\nFix CI (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3361\">#3361</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e63ef57f3d686abe3727ddd586eb9af73d6715b7\"><code>e63ef57</code></a>\nchore: prepare tracing-attributes 0.1.30 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3316\">#3316</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e59a13b1a7bcdd78b8b5a7cbcf70a0b2cdd76f0\"><code>6e59a13</code></a>\nattributes: fix tracing::instrument regression around shadowing (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3311\">#3311</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e4df76127538aa8370d7dee32a6f84bbec6bbf10\"><code>e4df761</code></a>\ntracing: update core to 0.1.34 and attributes to 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3305\">#3305</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/643f392ebb73c4fb856f56a78c066c82582dd22c\"><code>643f392</code></a>\nchore: prepare tracing-attributes 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3304\">#3304</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/d08e7a6eea1833810ea527e18ea03b08cd402c9d\"><code>d08e7a6</code></a>\nchore: prepare tracing-core 0.1.34 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3302\">#3302</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e70c571d319a033d5f37c885ccf99aa675a9eac\"><code>6e70c57</code></a>\ntracing-subscriber: count numbers of enters in <code>Timings</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2944\">#2944</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/c01d4fd9def2fb061669a310598095c789ca0a32\"><code>c01d4fd</code></a>\nfix docs and enable CI on <code>main</code> branch (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3295\">#3295</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tracing/compare/tracing-subscriber-0.3.19...tracing-subscriber-0.3.20\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tracing-subscriber&package-manager=cargo&previous-version=0.3.19&new-version=0.3.20)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:05:39Z",
          "tree_id": "397b9b5bdbefbe0c2e5d65138c3244b0edf92cf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f94b3f80f002b29c98c4089273d1db6eed3438"
        },
        "date": 1756988493782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2979.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4542.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8274.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 55.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8203.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8223.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2086.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 359.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 269.91796875,
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
          "id": "10a0bf16d634087d35e077a47d77d196cc59ffb0",
          "message": "Bump actions/checkout from 4 to 5 (#1585)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to\n5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2238\">actions/checkout#2238</a></li>\n</ul>\n<h2>⚠️ Minimum Compatible Runner Version</h2>\n<p><strong>v2.327.1</strong><br />\n<a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Release\nNotes</a></p>\n<p>Make sure your runner is updated to this version or newer to use this\nrelease.</p>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5.0.0\">https://github.com/actions/checkout/compare/v4...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n<li>Prepare release v4.3.0 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2237\">actions/checkout#2237</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/motss\"><code>@​motss</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li><a href=\"https://github.com/mouismail\"><code>@​mouismail</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li><a href=\"https://github.com/benwells\"><code>@​benwells</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v4.3.0\">https://github.com/actions/checkout/compare/v4...v4.3.0</a></p>\n<h2>v4.2.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.1...v4.2.2\">https://github.com/actions/checkout/compare/v4.2.1...v4.2.2</a></p>\n<h2>v4.2.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Jcambass\"><code>@​Jcambass</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1919\">actions/checkout#1919</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.0...v4.2.1\">https://github.com/actions/checkout/compare/v4.2.0...v4.2.1</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>V5.0.0</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n</ul>\n<h2>V4.3.0</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<h2>v4.2.2</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<h2>v4.2.1</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>v4.2.0</h2>\n<ul>\n<li>Add Ref and Commit outputs by <a\nhref=\"https://github.com/lucacome\"><code>@​lucacome</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1180\">actions/checkout#1180</a></li>\n<li>Dependency updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>- <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1777\">actions/checkout#1777</a>,\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1872\">actions/checkout#1872</a></li>\n</ul>\n<h2>v4.1.7</h2>\n<ul>\n<li>Bump the minor-npm-dependencies group across 1 directory with 4\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1739\">actions/checkout#1739</a></li>\n<li>Bump actions/checkout from 3 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1697\">actions/checkout#1697</a></li>\n<li>Check out other refs/* by commit by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1774\">actions/checkout#1774</a></li>\n<li>Pin actions/checkout's own workflows to a known, good, stable\nversion. by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1776\">actions/checkout#1776</a></li>\n</ul>\n<h2>v4.1.6</h2>\n<ul>\n<li>Check platform to set archive extension appropriately by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1732\">actions/checkout#1732</a></li>\n</ul>\n<h2>v4.1.5</h2>\n<ul>\n<li>Update NPM dependencies by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1703\">actions/checkout#1703</a></li>\n<li>Bump github/codeql-action from 2 to 3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1694\">actions/checkout#1694</a></li>\n<li>Bump actions/setup-node from 1 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1696\">actions/checkout#1696</a></li>\n<li>Bump actions/upload-artifact from 2 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1695\">actions/checkout#1695</a></li>\n<li>README: Suggest <code>user.email</code> to be\n<code>41898282+github-actions[bot]@users.noreply.github.com</code> by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1707\">actions/checkout#1707</a></li>\n</ul>\n<h2>v4.1.4</h2>\n<ul>\n<li>Disable <code>extensions.worktreeConfig</code> when disabling\n<code>sparse-checkout</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1692\">actions/checkout#1692</a></li>\n<li>Add dependabot config by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1688\">actions/checkout#1688</a></li>\n<li>Bump the minor-actions-dependencies group with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1693\">actions/checkout#1693</a></li>\n<li>Bump word-wrap from 1.2.3 to 1.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1643\">actions/checkout#1643</a></li>\n</ul>\n<h2>v4.1.3</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/08c6903cd8c0fde910a37f88322edcfb5dd907a8\"><code>08c6903</code></a>\nPrepare v5.0.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2238\">#2238</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/9f265659d3bb64ab1440b03b12f4d47a24320917\"><code>9f26565</code></a>\nUpdate actions checkout to use node 24 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2226\">#2226</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:22:34Z",
          "tree_id": "21d164d6710c35f4ce4211d6cbaed1277161df03",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10a0bf16d634087d35e077a47d77d196cc59ffb0"
        },
        "date": 1756989490515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2829.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4566.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8434.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8173.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8185.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2089.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2083.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 250.42578125,
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
          "id": "9374ac123f8ed6811be4c9eca1ca72c7d62c3848",
          "message": "Remove locking assertion from unlink (#1596)\n\nDuring unlink we currently have an assumption related to locking and we\nassert it. However, we have seen some cases where the assumption does\nnot hold. The assumption is that, when removing the child node from the\nparent node, the VFS will hold a lock on the parent and child.\n\nThis change removes the assumption and its assertion. Instead, we\ninvalidate the cache in the case where concurrent operations within the\nsame Mountpoint process were made to to the file and its parent.\n\nFor testing, we created scenarios to trigger the existing assertions in\nthe current implementation of unlink:\n1. To trigger the `expect()` statement that follows the removal of the\n`inode`:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n- Workload: create a new file, remove it and (in a separate terminal)\nexecuted a `stat` on the file\n- The `stat` only completes after the deletion completes. The deletion\nthread panics holding a lock and poisons the other threads. Mountpoint\nunmounts.\n2. To trigger the `assert()` statement that handles `inode` number\nmismatch:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n     - We added a 45s sleep statement in forget (`fs.rs`)\n- Workload: create a new file, remove it, created a file with the same\nname using `aws cli` and (in a separate terminal) a `stat` on the file\n- Mountpoint behaviour is the same as the first case except the message\nis from the assert.\n\nWith the changes in this PR, Mountpoint does not unmount and the `stat`\nresults are as expected (non existent in the first case and the most\nrecent file in the second case).\n\n### Does this change impact existing behavior?\n\nNo, this is a fix.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, entires were added to the `CHANGELOG.md` files and the version of\nthe `mountpoint-s3-fs` crate was bumped to `0.7.1`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-10T13:58:27Z",
          "tree_id": "7fafe0ce4428c5c53d1e0c4bac7fe4fb6b0c63ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9374ac123f8ed6811be4c9eca1ca72c7d62c3848"
        },
        "date": 1757520814317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2877.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4571.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8311.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8123.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8192.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2088.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2091.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 217.14453125,
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
          "id": "8862a35451dc573c7f123ceb9d53e72d57553e7d",
          "message": "Change ioctl log level from warn to debug (#1598)\n\nReduces log noise in production environments by changing ioctl function\nlogging from WARN to DEBUG level. This change improves the\nsignal-to-noise ratio in logs without affecting functionality.\n\nDoes this change impact existing behavior? \nNo functional impact - only reduces log noise by moving expected ioctl\nfailures from WARN to DEBUG level.\n\nDoes this change need a changelog entry? Does it require a version\nchange?\nAdded entry to CHANGELOG.md. No version change required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-10T16:32:07Z",
          "tree_id": "8c9045f859b1a6ea3e48303f61230942bc8cabd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8862a35451dc573c7f123ceb9d53e72d57553e7d"
        },
        "date": 1757529879594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2803.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4552.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8268.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8107.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8151.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2093.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 391.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.8984375,
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
          "id": "3e65af8a82499b8ff23ebead21e3003ba770bfbf",
          "message": "Release v1.20.0 (#1604)\n\nUpdate `CHANGELOG.md` files of the `fs` and `client` crates to prepare\nfor release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-15T10:14:45Z",
          "tree_id": "b122f3dbc19ae8f068289386a2cf03f5123b833d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e65af8a82499b8ff23ebead21e3003ba770bfbf"
        },
        "date": 1757939364186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2827.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4555.90234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8290.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8171.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8253,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2096.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2087.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2090.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.40625,
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
          "id": "d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed",
          "message": "Benchmark sweeper fix (#1608)\n\nUpdate benchmarks to load sweeper parameters only from benchmark\nspecific configuration files\n\nUntil this change, we load configuration parameters from all benchmark\nconfiguration files\nand pick only the relevant benchmark parameters using regex matching.\nWhile this works\nfor most cases, it doesn't work for mountpoint parameters that don't\nhave benchmark-type\nsubstring and those parameters are picked up by all benchmarks. This\nchange will restrict\nsweeping through config parameters defined in the benchmark specific\nfile.\n\nThis also includes a change to replace the unused fuse threads\nconfiguration with the correct parameter that gets used in benchmarks.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it only updates benchmarks. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T09:57:35Z",
          "tree_id": "65532a76286833542c0cc4e5e1070026199c0b49",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed"
        },
        "date": 1758283862403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2863.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4542.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8350.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8147.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.91796875,
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
          "id": "d598453968b10b55c01371f0f594d586fcd8be43",
          "message": "Remove benchmark config parser (#1609)\n\nAs we shifted to using benchmark specific sweeper files, config.yaml\nwill define the defaults for all benchmark parameters and should not\nhave any overrides. So we don't need an additional parser to ensure\nbenchmarks are defaulting to appropriate values.\n\nAfter this change, all the default values except for\nnetwork.maximum_throughput_gbps. The config parser was defaulting to 100\nbut now picks the default resolved by Mountpoint.\n\n### Does this change impact existing behavior?\n\nNo benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T12:13:45Z",
          "tree_id": "9bd334a5122cf64ce83e0cef3bcef8f8f2149c25",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d598453968b10b55c01371f0f594d586fcd8be43"
        },
        "date": 1758291942279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2885.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4554.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8490.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8130.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2094.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.41015625,
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
          "id": "e6a938add8d3e752bffc1f188c533cfde7a69917",
          "message": "Bump actions/setup-python from 5 to 6 (#1594)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<h3>Breaking Changes</h3>\n<ul>\n<li>Upgrade to node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1164\">actions/setup-python#1164</a></li>\n</ul>\n<p>Make sure your runner is on version v2.327.1 or later to ensure\ncompatibility with this release. <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">See\nRelease Notes</a></p>\n<h3>Enhancements:</h3>\n<ul>\n<li>Add support for <code>pip-version</code> by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1129\">actions/setup-python#1129</a></li>\n<li>Enhance reading from .python-version by <a\nhref=\"https://github.com/krystof-k\"><code>@​krystof-k</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/787\">actions/setup-python#787</a></li>\n<li>Add version parsing from Pipfile by <a\nhref=\"https://github.com/aradkdj\"><code>@​aradkdj</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1067\">actions/setup-python#1067</a></li>\n</ul>\n<h3>Bug fixes:</h3>\n<ul>\n<li>Clarify pythonLocation behaviour for PyPy and GraalPy in environment\nvariables by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1183\">actions/setup-python#1183</a></li>\n<li>Change missing cache directory error to warning by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1182\">actions/setup-python#1182</a></li>\n<li>Add Architecture-Specific PATH Management for Python with --user\nFlag on Windows by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1122\">actions/setup-python#1122</a></li>\n<li>Include python version in PyPy python-version output by <a\nhref=\"https://github.com/cdce8p\"><code>@​cdce8p</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1110\">actions/setup-python#1110</a></li>\n<li>Update docs: clarification on pip authentication with setup-python\nby <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1156\">actions/setup-python#1156</a></li>\n</ul>\n<h3>Dependency updates:</h3>\n<ul>\n<li>Upgrade idna from 2.9 to 3.7 in /<strong>tests</strong>/data by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/843\">actions/setup-python#843</a></li>\n<li>Upgrade form-data to fix critical vulnerabilities <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/182\">#182</a>\n&amp; <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/183\">#183</a>\nby <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1163\">actions/setup-python#1163</a></li>\n<li>Upgrade setuptools to 78.1.1 to fix path traversal vulnerability in\nPackageIndex.download by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1165\">actions/setup-python#1165</a></li>\n<li>Upgrade actions/checkout from 4 to 5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1181\">actions/setup-python#1181</a></li>\n<li>Upgrade <code>@​actions/tool-cache</code> from 2.0.1 to 2.0.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1095\">actions/setup-python#1095</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/krystof-k\"><code>@​krystof-k</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/787\">actions/setup-python#787</a></li>\n<li><a href=\"https://github.com/cdce8p\"><code>@​cdce8p</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1110\">actions/setup-python#1110</a></li>\n<li><a href=\"https://github.com/aradkdj\"><code>@​aradkdj</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1067\">actions/setup-python#1067</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v6.0.0\">https://github.com/actions/setup-python/compare/v5...v6.0.0</a></p>\n<h2>v5.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Workflow updates related to Ubuntu 20.04 by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1065\">actions/setup-python#1065</a></li>\n<li>Fix for Candidate Not Iterable Error by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1082\">actions/setup-python#1082</a></li>\n<li>Upgrade semver and <code>@​types/semver</code> by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1091\">actions/setup-python#1091</a></li>\n<li>Upgrade prettier from 2.8.8 to 3.5.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1046\">actions/setup-python#1046</a></li>\n<li>Upgrade ts-jest from 29.1.2 to 29.3.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1081\">actions/setup-python#1081</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v5.6.0\">https://github.com/actions/setup-python/compare/v5...v5.6.0</a></p>\n<h2>v5.5.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements:</h3>\n<ul>\n<li>Support free threaded Python versions like '3.13t' by <a\nhref=\"https://github.com/colesbury\"><code>@​colesbury</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/973\">actions/setup-python#973</a></li>\n<li>Enhance Workflows: Include ubuntu-arm runners, Add e2e Testing for\nfree threaded and Upgrade <code>@​action/cache</code> from 4.0.0 to\n4.0.3 by <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1056\">actions/setup-python#1056</a></li>\n<li>Add support for .tool-versions file in setup-python by <a\nhref=\"https://github.com/mahabaleshwars\"><code>@​mahabaleshwars</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1043\">actions/setup-python#1043</a></li>\n</ul>\n<h3>Bug fixes:</h3>\n<ul>\n<li>Fix architecture for pypy on Linux ARM64 by <a\nhref=\"https://github.com/mayeut\"><code>@​mayeut</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1011\">actions/setup-python#1011</a>\nThis update maps arm64 to aarch64 for Linux ARM64 PyPy\ninstallations.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/e797f83bcb11b83ae66e0230d6156d7c80228e7c\"><code>e797f83</code></a>\nUpgrade to node 24 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1164\">#1164</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3d1e2d2ca0a067f27da6fec484fce7f5256def85\"><code>3d1e2d2</code></a>\nRevert &quot;Enhance cache-dependency-path handling to support files\noutside the w...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/65b071217a8539818fdb8b54561bcbae40380a54\"><code>65b0712</code></a>\nClarify pythonLocation behavior for PyPy and GraalPy in environment\nvariables...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/5b668cf7652160527499ee14ceaff4be9306cb88\"><code>5b668cf</code></a>\nBump actions/checkout from 4 to 5 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1181\">#1181</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/f62a0e252fe7114e86949abfa6e1e89f85bb38c2\"><code>f62a0e2</code></a>\nChange missing cache directory error to warning (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1182\">#1182</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/9322b3ca74000aeb2c01eb777b646334015ddd72\"><code>9322b3c</code></a>\nUpgrade setuptools to 78.1.1 to fix path traversal vulnerability in\nPackageIn...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/fbeb884f69f0ac1c0257302f62aa524c2824b649\"><code>fbeb884</code></a>\nBump form-data to fix critical vulnerabilities <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/182\">#182</a>\n&amp; <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/183\">#183</a>\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1163\">#1163</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/03bb6152f4f691b9d64579a1bd791904a083c452\"><code>03bb615</code></a>\nBump idna from 2.9 to 3.7 in /<strong>tests</strong>/data (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/843\">#843</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/36da51d563b70a972897150555bb025096d65565\"><code>36da51d</code></a>\nAdd version parsing from Pipfile (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1067\">#1067</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3c6f142cc0036d53007e92fa1e327564a4cfb7aa\"><code>3c6f142</code></a>\nupdate documentation (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1156\">#1156</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/setup-python&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-23T12:37:10Z",
          "tree_id": "7a3a898a2b8ef7d9a15cf008088ab3167f21fd6d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6a938add8d3e752bffc1f188c533cfde7a69917"
        },
        "date": 1758639155284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2850.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4545.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8455.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8159.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8022.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2091.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 391.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 232.53125,
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
          "id": "be4c8de456427069591f7fa48bf312063a475956",
          "message": "Bump aws-actions/configure-aws-credentials from 4 to 5 (#1595)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.1...v5.0.0\">5.0.0</a>\n(2025-09-03)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\">8c45f6b</a>)</li>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/74b3e27aa80db064b5bb8c04b22fc607e817acf7\">74b3e27</a>)</li>\n<li>support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\">c4be498</a>)</li>\n</ul>\n<h2>v4.3.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2>v4.3.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<p>NOTE: This release tag originally pointed to\n59b441846ad109fa4a1549b73ef4e149c4bfb53b, but a critical bug was\ndiscovered shortly after publishing. We updated this tag to\nd0834ad3a60a024346910e522a81b0002bd37fea to prevent anyone using the\n4.3.0 tag from encountering the bug, and we published 4.3.1 to allow\nworkflows to auto update correctly.</p>\n<h3>Features</h3>\n<ul>\n<li>dependency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 4.3.0 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3f7c2187213bafaa1ea60a850b27082cbf55dda0\">3f7c218</a>)</li>\n</ul>\n<h2>v4.2.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.0...v4.2.1\">4.2.1</a>\n(2025-05-14)</h2>\n<h3>Bug Fixes</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.1...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<h3>Features</h3>\n<ul>\n<li>depenency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 4.3.0 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3f7c2187213bafaa1ea60a850b27082cbf55dda0\">3f7c218</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.0...v4.2.1\">4.2.1</a>\n(2025-05-14)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>ensure explicit inputs take precedence over environment variables\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e56e6c4038915cd5a7238a671fe97f44c98a40b0\">e56e6c4</a>)</li>\n<li>prioritize explicit inputs over environment variables (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/df9c8fed6b364f0d1fb0e6e03a0ec26f1ea4e3fc\">df9c8fe</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.1.0...v4.2.0\">4.2.0</a>\n(2025-05-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>add Expiration field to Outputs (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a4f326760c1c1bf49ab86051c658d6501816b930\">a4f3267</a>)</li>\n<li>Document role-duration-seconds range (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5a0cf0167f837dfa7af7d951ba6a78a38dc2b79e\">5a0cf01</a>)</li>\n<li>support action inputs as environment variables (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1338\">#1338</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2c168adcae62d67531ba83842723c8f30695116a\">2c168ad</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>make sure action builds, also fix dependabot autoapprove (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c401b8a98c5067672f52e0387cdd87d54acfe1fd\">c401b8a</a>)</li>\n<li>role chaning on mulitple runs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1340\">#1340</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9e386419117a9edd458297e4f1822a5df7506a03\">9e38641</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a03048d87541d1d9fcf2ecf528a4a65ba9bd7838\"><code>a03048d</code></a>\nchore(main): release 5.0.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1451\">#1451</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/337f510212e7ae7a530e307fb43b87fa8916feb1\"><code>337f510</code></a>\nchore: Fix markdown link formatting in README.md (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1466\">#1466</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/f001d79eaa8d7e42dd7d421b18870b03c8097135\"><code>f001d79</code></a>\nchore: update README with versioning (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1465\">#1465</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cf5f2acba3ed5c403d00f6f9531a2dc3a5ef8d9a\"><code>cf5f2ac</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b394bdd9f0f03bd410ac15b3ca088d66be1fbd67\"><code>b394bdd</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1463\">#1463</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b632c0b5e467d8b4a89c389b6885a71a90ee4f62\"><code>b632c0b</code></a>\nchore(deps-dev): bump memfs from 4.38.1 to 4.38.2 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1462\">#1462</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/978e44aa3602bf5a26b98e2823c7f87ce78d4af8\"><code>978e44a</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\"><code>c4be498</code></a>\nfeat: support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c5a43c32e1873343614c533eb83ffabbe5bc53bc\"><code>c5a43c3</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\"><code>8c45f6b</code></a>\nfeat: add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-23T12:39:08Z",
          "tree_id": "7a80e80a652a9dace298ead0be70e6ac0ec50e41",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be4c8de456427069591f7fa48bf312063a475956"
        },
        "date": 1758639317017,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2943.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4529.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8303.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8283.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8322.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2087.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 397.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 247.33984375,
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
          "id": "175c3bafbb8d3e927e0871d7d170d67f02b868f6",
          "message": "Option to export OTLP metrics during benchmarks (#1610)\n\nAdds a flag to export OTLP metrics during benchmarks\n\nWith the change, we can test the impact of metrics on Mountpoint\nthroughput. This change also includes some refactoring that was missed\nwhile removing benchmark config parsing logic in #1609.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-24T14:01:48Z",
          "tree_id": "bda3f0062a32bcd8b48fae7d8a1d77fff4d324e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/175c3bafbb8d3e927e0871d7d170d67f02b868f6"
        },
        "date": 1758730657951,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2876.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4542.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8362.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8167.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8104.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2085.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 394.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.42578125,
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
          "id": "fdec4dbfe2610cd1b97428c61b88773aa86e3bf9",
          "message": "Change default logging level from WARN to INFO. (#1605)\n\nFixes #1244\n- Purpose: Improve visibility of important operational messages (mount\nsuccess, location) without requiring --debug flag\n- Users can now see essential mount information by default\n### What changed and why?\n1. Default Logging Level:\n- Changed default logging level from WARN to INFO in cli.rs\n- Added test_info_level_logging to verify the change\n- Default INFO logs now show important operational messages:\nINFO ThreadId(01) mountpoint_s3::cli: target network throughput 10 Gbps\nINFO ThreadId(01) fuser::session: Mounting /tmp/test-mount-new\nINFO ThreadId(01) mountpoint_s3::run: successfully mounted bucket \n\n2. Metrics Logging:\n- Metrics now show when either --log-metrics is set OR debug level is\nenabled\n- Explicitly turn off metrics when neither condition is met\n\n3. Log Level Optimization:\n- Changed setattr logging from INFO to DEBUG level as it's\nimplementation detail is more appropriate for debugging rather than\nregular operation\n\n### Does this change impact existing behavior?\n- All existing log levels (--debug, --no-log) continue to work as before\n- Only changes the default level to show more information\n- Setattr logging moved to DEBUG level to reduce noise\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n- Changelog entries added:\n* mountpoint-s3: Change default logging level from WARN to INFO to\nimprove visibility of important operational messages\n* mountpoint-s3-fs: Downgrade setattr logging level from INFO to DEBUG\nto reduce log noise\n- Version changes:\n  * mountpoint-s3: v1.20.0 -> v1.21.0 (for default logging level change)\n  * mountpoint-s3-fs: v0.7.1 -> v0.7.2 (for setattr logging change)\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-24T14:13:18Z",
          "tree_id": "1bd8347fd588fe82d13460d23d83beb8133fb5ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdec4dbfe2610cd1b97428c61b88773aa86e3bf9"
        },
        "date": 1758731078248,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2896.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4579.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8372.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8266.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8038.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2089.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2089.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2090.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.3125,
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
          "id": "d02c7df053b52dc26a23534fdf8534b74e11dec9",
          "message": "Add checking step to PUBLISHING_CRATES.md (#1607)\n\nWe currently don't have a step for checking the newly published\nversions. This change adds links to `crates.io` to facilitate this.\n\n### Does this change impact existing behavior?\n\nNo, only change to documentation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only change to documentation.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-25T10:26:28Z",
          "tree_id": "733e8027290feb2699337893d9da209f89279e08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d02c7df053b52dc26a23534fdf8534b74e11dec9"
        },
        "date": 1758803938535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2836.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4534.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8433.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 56.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8216.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8206.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2096.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 379.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.1640625,
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
          "id": "5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1",
          "message": "Adding Unicode 3 to Accepted Licenses (#1617)\n\n**What changed and why?**\nAdded \"Unicode-3.0\" to the licensing whitelist.\nIt is already included in the /mountpoint-s3/deny.toml\nhttps://github.com/awslabs/mountpoint-s3/blob/main/deny.toml allowlist,\nbut it wasn't added here aswell. This fixes that.\n\nThe license's absense from the attribution.toml also means the command\nto generate our third party dependancies fails.\n\n```rust\ncargo about generate --config package/attribution.toml --output-file THIRD_PARTY_LICENSES package/attribution.hbs\nerror: failed to satisfy license requirements\n   ┌─ /home/user/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-ident-1.0.18/Cargo.toml:36:36\n   │\n36 │ license = \"(MIT OR Apache-2.0) AND Unicode-3.0\"\n   │                                    -----------\n\n2025-09-25 12:20:14.780429812 +00:00:00 [ERROR] encountered 1 errors resolving licenses, unable to generate output\n\n```\nSo this fix addresses a need for us to be able to generate these\nlicenses at will, outside of the release process.\n\n### Does this change impact existing behaviour?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, very minor bug fix\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-25T15:55:59Z",
          "tree_id": "f2e242baa82d8b202b17d8006036db286f297396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1"
        },
        "date": 1758823744006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2878.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4540.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8228.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8070.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2088.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 297.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.88671875,
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
          "id": "a67f2631964cca1892d4aa2bcc42afef6fa56c37",
          "message": "Switch to real-time recording for OTLP metrics.  (#1615)\n\nSwitch OTLP metrics from batch recording to real-time recording directly\nto OTel SDK instruments. This eliminates the need for batch aggregation\nof histogram samples. This change also adds support for histogram export\nvia OTLP. Log-based metrics remain unchanged.\n\nWith this change, we are also removing the use of counter.absolute()\nmethod as OTel SDK doesn't provide an equivalent method to set absolute\nvalues for counters. We should use gauge or histogram to record absolute\nvalues.\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-26T13:12:37Z",
          "tree_id": "6940a6ae0c872a312ec23baf17cf6fe42ac7f918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a67f2631964cca1892d4aa2bcc42afef6fa56c37"
        },
        "date": 1758900465757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2852.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4575.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8429.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8177.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8197.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2088.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2092.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2089.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 383.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.15234375,
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
          "id": "b6a64b6129b573ab2ff3758cb948c5a2d15c1e82",
          "message": "Implement integrity checks for the metadata store (#1563)\n\nIntroduce checksum verification of:\n\n1. entries provided in the input CSV manifest (and for the whole file)\n2. entries stored in the metadata store\n\nSlightly refactored `ManifestEntry` in order to avoid huge `match`\nblocks. This PR also adds an example of the manifest creation.\n\n### Does this change impact existing behavior?\n\nNo, only `mount_from_config` example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, an entry for `mountpoint-s3-fs` crate, and a minor version bump of\nthis crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-09-29T10:12:13Z",
          "tree_id": "3c062f3c4a62ce4452388ef7dcad17531e0b0ac5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6a64b6129b573ab2ff3758cb948c5a2d15c1e82"
        },
        "date": 1759148737180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2850.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4539.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8461.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 56.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8201.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8204.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2089.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2098.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.64453125,
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
          "id": "38714cff667ae612376003567f6e006e6a650086",
          "message": "Add an option to configure cache in `mount_from_config` example (#1616)\n\nAdd an option to configure cache in `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-09-29T10:13:58Z",
          "tree_id": "b5e04047b825ac9d30290d01a146dba9a4b688ff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/38714cff667ae612376003567f6e006e6a650086"
        },
        "date": 1759148907136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2857.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4555.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8389.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8282.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8180.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2091.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2092.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1073.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.44140625,
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
          "id": "c08eb3fe54de0bef794946eae6851579f3812925",
          "message": "Release mountpoint-s3-fs 0.8.0 (#1623)\n\nBump the version of `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-09-30T13:30:12Z",
          "tree_id": "d2a77237bfca5bea93a5620e498ba0f36f07990f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c08eb3fe54de0bef794946eae6851579f3812925"
        },
        "date": 1759247038524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2824.43359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4563.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8436.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8129.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8256.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.64453125,
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
          "id": "6ebfad0752a0aa3acc4582a963661dee94208c74",
          "message": "Use OTel's exponential histograms for histogram metrics. (#1624)\n\nWith explicit hitograms, OTel uses fixed bucket bounds, which don't work\nwell for all Mountpoint metrics as they don't fall within the default\nrange. So we need to manually configure the bucket bounds for different\nmetrics with different boundaries. However, with exponential histograms,\nthe bucket boundss are automatically scaled and provide more accurate\nmetrics. However, this relies on OTel SDK's unstable feature.\n\nIn case this isn't supported in the future, we need to switch to\nexplicit Buckets with different bounds for different metrics.\n\n### Does this change impact existing behavior?\n\nNo, changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n\nNo, changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-30T18:17:39Z",
          "tree_id": "3ac3848aedf3c41ee75862d6373b5a10df33f68c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6ebfad0752a0aa3acc4582a963661dee94208c74"
        },
        "date": 1759264184088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2838.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4532.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8327.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8224.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8056.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.03515625,
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
          "id": "18bfb9da77cd131ea38a27b8336d918c9e1376a0",
          "message": "Use delta temporality as default for exporting OTLP metrics (#1625)\n\nBy default, we will use Delta temporality instead of Cumulative\ntemporality to minimise the network payload size while exporting\nmetrics. However, cutomers can switch to Cumulative temporality if their\nbackends don't support Delta temporality\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-02T14:19:01Z",
          "tree_id": "951fa54b689dd4e3456a600b7caed5a584a479a8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18bfb9da77cd131ea38a27b8336d918c9e1376a0"
        },
        "date": 1759422741053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2879.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4558.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8384.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 57.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8277.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8275.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 494.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.43359375,
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
          "id": "baaaf2d4deb94af1821392c7e6b43116c8a5ca86",
          "message": "Fix lifetime elision warnings and other lints (#1626)\n\nTo be ready for newer Rust versions, fix some lints which will start\nfailing builds if we upgrade.\n\n### Does this change impact existing behavior?\n\nNo, this only addresses lints by removing ambiguous code or updating to\nuse new methods that make code clearer.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-02T15:40:15Z",
          "tree_id": "6e79c86e93ac6bcef6b7469cc675332ec775b4ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/baaaf2d4deb94af1821392c7e6b43116c8a5ca86"
        },
        "date": 1759427572641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2871.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4567.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8285.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 37.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8266.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8107.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2093.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1073.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 294.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.390625,
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
          "id": "a911c7b46ed31de610a7f27e06be25f6f0109165",
          "message": "Upgrade toolchain to Rust 1.89 (#1628)\n\nUpgrade toolchain to Rust 1.89. Address relevant clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated crate versions as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-03T14:12:46Z",
          "tree_id": "71a490a5005dcba0128e6af3573eb590ac5da550",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a911c7b46ed31de610a7f27e06be25f6f0109165"
        },
        "date": 1759508896501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2898.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4535.6875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8403.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 54.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8167.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8158.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2091.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2091.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 356.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 248.90625,
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
          "id": "a0289d73bddbdb4a287ea962392716ce8e0692f1",
          "message": "Update CI approvals to use single job with 'needs' relationship (#1632)\n\nThis change reduces noise from CI approvals by using one single job with\nits own approval, which all other jobs \"need\" before they start.\n\n`needs` definition:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds\n\nReference: https://github.com/awslabs/s3-connector-for-pytorch/pull/373/\n\n### Does this change impact existing behavior?\n\nCI change only. It now has all jobs requiring approval wait on a single\njob to succeed, which is itself gated by the GitHub environment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-06T10:58:34Z",
          "tree_id": "744a0fcb1bf8efb6a795df948f1e81274814172d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0289d73bddbdb4a287ea962392716ce8e0692f1"
        },
        "date": 1759756271979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2935.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4549.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8369.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8168.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8226.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2092.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2100.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2093.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 395.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 249.20703125,
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
          "id": "85833e267c3bb8dd2ed34b86e2b5b74f440f051a",
          "message": "Fix typos in github workflows comments (#1634)\n\nFix a number of typos in the comments in github workflow definition.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T12:00:21Z",
          "tree_id": "fe4722fbfb82b913bfbe297e61f2441b399ab1b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85833e267c3bb8dd2ed34b86e2b5b74f440f051a"
        },
        "date": 1759760001299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2884.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4544.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8260.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 23.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8211.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2087.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 335.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.6484375,
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
          "id": "015d318aec8e5f43281d07852353c1f1b8a368cc",
          "message": "Skip fuser tests on macOS in CI (#1636)\n\nAvoid running unit tests in CI for the `mountpoint-s3-fuser` crate on\nmacOS. Since `fuser` also removed their macOS CI, we don't want to\ntrigger spurious failures on a platform we do not support.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T18:13:23Z",
          "tree_id": "ff50d59281f16f62a8c959e6eea1d364317bef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/015d318aec8e5f43281d07852353c1f1b8a368cc"
        },
        "date": 1759782488789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2863.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4532.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8325.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 40.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8168.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8283.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2081.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2094.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 332.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 218.13671875,
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
          "id": "c81521a4009a1edd242a72a867e28a76b6d99103",
          "message": "Merge changes from the fuser/fork branch (#1633)\n\nPull in changes from the `fuser/fork` branch, updating the\n`mountpoint-s3-fuser` crate to `v0.1.1`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-07T12:45:17Z",
          "tree_id": "b27aa7f7c965192cb024088eb7cec90c18b0e564",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c81521a4009a1edd242a72a867e28a76b6d99103"
        },
        "date": 1759849251788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2856.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4544.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8233.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 28.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8190.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8271.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2085.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 395.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.39453125,
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
          "id": "f46fd4e5b85d3253e5a26625db0430c42edfe9b1",
          "message": "Upgrade cargo dependencies (#1638)\n\nUpgrade cargo dependencies to latest versions. Required one minor code\nchange in 2 tests to adapt to changes in `nix::fcntl`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated `crt` and `crt-sys` crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T09:28:52Z",
          "tree_id": "3d2c78f32d5530c9b3411488cade56007956e49b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f46fd4e5b85d3253e5a26625db0430c42edfe9b1"
        },
        "date": 1759923878717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2932.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4530.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8388.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8175.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8224.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2099.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2099.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 365.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.13671875,
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
          "id": "02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8",
          "message": "Upgrade rand crate (#1639)\n\nVersion 0.9 of the `rand` crate introduced significant breaking changes.\nThis change upgrades the dependency and adopts the new API, following\nthe guidance provided in the [Rust Rand\nBook](https://rust-random.github.io/book/update-0.9.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T13:45:05Z",
          "tree_id": "22257c8d2faa8c330e95ecb7f7018779d42f5f48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8"
        },
        "date": 1759939207566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 2920.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4529.84375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8417.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 41.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8067.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8102.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2102.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2096.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.4921875,
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
          "id": "0279442c074f667703177f59f5f37be35241d50d",
          "message": "Update S3 request metrics for OTLP export (#1630)\n\nThis PR defines metric configuration for OTLP export and adds support\nfor passing units and filtering stable metrics for otlp export.\n\nThis change also updates S3 request metrics to use the new metric names\nand attributes in both logs and OTLP export.\n\n### Does this change impact existing behavior?\n\nChanges log format for S3 request metrics in logs. The rest of the\nchanges are under the otlp_integration feature flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires a changelog entry as it updates the format of logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-09T12:17:57Z",
          "tree_id": "2244101d8ab391462b5a526bcb30ee08b2e532d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0279442c074f667703177f59f5f37be35241d50d"
        },
        "date": 1760020323265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
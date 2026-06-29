window.BENCHMARK_DATA = {
  "lastUpdate": 1782719858419,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone, Incremental Upload)": [
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
        "date": 1777645801339,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1926.81923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3157.676171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5374.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 105.95224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.07333984375,
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
        "date": 1778062396223,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1886.7938476562501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3152.23876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5336.495214843751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.8119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.7642578125,
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
        "date": 1778083586038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1905.61181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3122.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5361.156835937501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 105.54365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.37431640625,
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
        "date": 1778163965200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 2071.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3192.327734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5454.537890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.30888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.28828125,
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
        "date": 1778667483106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 2024.53017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3178.8970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5424.1052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.34716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.24130859375,
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
        "date": 1778670298929,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1959.0162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3197.7515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5452.661816406249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.75126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.0279296875,
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
        "date": 1780423245731,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1936.23818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3121.7261718749996,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5320.00712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.42890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.26396484375,
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
        "date": 1782316273457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 2025.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3165.32021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5332.302050781251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.3783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 106.32021484375,
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
        "date": 1782719857128,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1948.4904296875002,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 3093.66083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5336.74658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 106.262890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 105.495703125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
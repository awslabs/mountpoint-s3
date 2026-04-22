window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "fae405ff70749a62f764f7d67c249e2c34a47e09",
          "message": "Bump actions/download-artifact from 7 to 8 (#1774)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 7 to 8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.0</h2>\n<h2>v8 - What's new</h2>\n<h3>Direct downloads</h3>\n<p>To support direct uploads in <code>actions/upload-artifact</code>,\nthe action will no longer attempt to unzip all downloaded files.\nInstead, the action checks the <code>Content-Type</code> header ahead of\nunzipping and skips non-zipped files. Callers wishing to download a\nzipped file as-is can also set the new <code>skip-decompress</code>\nparameter to <code>false</code>.</p>\n<h3>Enforced checks (breaking)</h3>\n<p>A previous release introduced digest checks on the download. If a\ndownload hash didn't match the expected hash from the server, the action\nwould log a warning. Callers can now configure the behavior on mismatch\nwith the <code>digest-mismatch</code> parameter. To be secure by\ndefault, we are now defaulting the behavior to <code>error</code> which\nwill fail the workflow run.</p>\n<h3>ESM</h3>\n<p>To support new versions of the @actions/* packages, we've upgraded\nthe package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Don't attempt to un-zip non-zipped downloads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/460\">actions/download-artifact#460</a></li>\n<li>Add a setting to specify what to do on hash mismatch and default it\nto <code>error</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/461\">actions/download-artifact#461</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8.0.0\">https://github.com/actions/download-artifact/compare/v7...v8.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/70fc10c6e5e1ce46ad2ea6f2b72d43f7d47b13c3\"><code>70fc10c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/461\">#461</a>\nfrom actions/danwkennedy/digest-mismatch-behavior</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/f258da9a506b755b84a09a531814700b86ccfc62\"><code>f258da9</code></a>\nAdd change docs</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ccc058e5fbb0bb2352213eaec3491e117cbc4a5c\"><code>ccc058e</code></a>\nFix linting issues</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bd7976ba57ecea96e6f3df575eb922d11a12a9fd\"><code>bd7976b</code></a>\nAdd a setting to specify what to do on hash mismatch and default it to\n<code>error</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac21fcf45e0aaee541c0f7030558bdad38d77d6c\"><code>ac21fcf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/460\">#460</a>\nfrom actions/danwkennedy/download-no-unzip</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/15999bff51058bc7c19b50ebbba518eaef7c26c0\"><code>15999bf</code></a>\nAdd note about package bumps</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/974686ed5098c7f9c9289ec946b9058e496a2561\"><code>974686e</code></a>\nBump the version to <code>v8</code> and add release notes</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fbe48b1d2756394be4cd4358ed3bc1343b330e75\"><code>fbe48b1</code></a>\nUpdate test names to make it clearer what they do</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/96bf374a614d4360e225874c3efd6893a3f285e7\"><code>96bf374</code></a>\nOne more test fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/b8c4819ef592cbe04fd93534534b38f853864332\"><code>b8c4819</code></a>\nFix skip decompress test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=7&new-version=8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T08:49:36Z",
          "tree_id": "862d172fb443a4c9b1d2451ac56aeee9a8d28c0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fae405ff70749a62f764f7d67c249e2c34a47e09"
        },
        "date": 1772449717034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5057.084179687499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4641.27333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5887.64931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.75078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.348828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.714453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.51455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6273.38369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.509375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5155.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1773.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.14404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1615.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1440.43759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.316796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1980.9,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1154.6666015625,
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
          "id": "93974a085d8e00a2290177fd37e536fe5e260385",
          "message": "Bump actions/upload-artifact from 6 to 7 (#1775)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 What's new</h2>\n<h3>Direct Uploads</h3>\n<p>Adds support for uploading single files directly (unzipped). Callers\ncan set the new <code>archive</code> parameter to <code>false</code> to\nskip zipping the file during upload. Right now, we only support single\nfiles. The action will fail if the glob passed resolves to multiple\nfiles. The <code>name</code> parameter is also ignored with this\nsetting. Instead, the name of the artifact will be the name of the\nuploaded file.</p>\n<h3>ESM</h3>\n<p>To support new versions of the <code>@actions/*</code> packages,\nwe've upgraded the package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Add proxy integration test by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/754\">actions/upload-artifact#754</a></li>\n<li>Upgrade the module to ESM and bump dependencies by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/762\">actions/upload-artifact#762</a></li>\n<li>Support direct file uploads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/764\">actions/upload-artifact#764</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Link\"><code>@​Link</code></a>- made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/754\">actions/upload-artifact#754</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v6...v7.0.0\">https://github.com/actions/upload-artifact/compare/v6...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/bbbca2ddaa5d8feaa63e36b76fdaad77386f024f\"><code>bbbca2d</code></a>\nSupport direct file uploads (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/764\">#764</a>)</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/589182c5a4cec8920b8c1bce3e2fab1c97a02296\"><code>589182c</code></a>\nUpgrade the module to ESM and bump dependencies (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/762\">#762</a>)</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/47309c993abb98030a35d55ef7ff34b7fa1074b5\"><code>47309c9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/754\">#754</a>\nfrom actions/Link-/add-proxy-integration-tests</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/02a8460834e70dab0ce194c64360c59dc1475ef0\"><code>02a8460</code></a>\nAdd proxy integration test</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T08:54:26Z",
          "tree_id": "26639ba3d195645e3f422dcb2b62b79a87e713fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93974a085d8e00a2290177fd37e536fe5e260385"
        },
        "date": 1772449999661,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5069.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4603.38310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5898.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.186328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.94638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.590625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6339.34833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5247.9232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.33095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1665.4578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.70869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1642.65390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1271.00908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.4962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.86513671875,
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
          "id": "61f2416088f120238aa393b66247bfc487a7658e",
          "message": "Make `MemoryPool` buffer acquisition async-ready (#1768)\n\n**What changed and why?**\n\nThis PR makes the `MemoryPool` trait async-capable by adding a new\n`get_buffer_async()` method, and wires up the CRT bridge so that buffer\nacquisition on the read path is spawned on a CRT event loop. (Note that\non write-path we must keep doing `get_buffer()` in a sync way due to CRT\nlimitation\n[here](https://github.com/awslabs/aws-c-s3/blob/main/source/s3_meta_request.c#L2618-L2631))\n\nCurrently, when the S3 client needs a memory buffer, it calls\n`get_buffer` and blocks until the buffer is allocated. This works fine\nnow because allocation is instant. But we want to support a future\nscenario where the pool is full and needs to wait for memory to free up.\nAdding `get_buffer_async` lays the groundwork — the actual behavior\ndoesn't change much (allocations are still instant, but they now execute\non a separate Task/Future on the read path), but the infrastructure is\nin place.\n\nThe async future is spawned on existing CRT's `EventLoopGroup`. Note\nthat there is a timing issue: we create the `CrtBufferPoolFactory`\n(wrapping `MemoryPoolFactory`) when building `S3ClientConfig`, but the\n`EventLoopGroup` doesn't exist yet — it's created inside\n`S3CrtClientInner::new()`. So the factory must be constructed before the\nthread pool it needs to reference. The solution is to create wrapper\n`MemoryPoolFactoryWrapper`.\n\n### Does this change impact existing behavior?\n\n- Get buffer on read-path is now fulfilled on a separate spawned\nTask/Future instead of immediately in a sync way.\n- `MemoryPool` trait has now `'static + Send` bounds\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-02T22:57:56Z",
          "tree_id": "8c343884699c4747da1913cb7573998c70b0d541",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f2416088f120238aa393b66247bfc487a7658e"
        },
        "date": 1772500652645,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4964.72880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4492.417285156251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5814.96083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.690625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.91064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.66533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.75810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.266796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6125.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5068.3337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.33115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.3150390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1284.23974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1419.9642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.89326171875,
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
          "id": "726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f",
          "message": "Upgrade Cargo dependencies (#1777)\n\nUpgrade Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-03T10:45:25Z",
          "tree_id": "b8094bd57bfc31d5559eb6a277e7e4a60ebdbf54",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f"
        },
        "date": 1772543077829,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5121.49267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4641.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5852.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.72890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5955.51962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.7359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5216.03779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.45947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1911.15361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.34931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1794.48984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1290.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.92255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.92666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1082.27705078125,
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
          "id": "41ae7ff7e7169de4f25bd33c39cee43c8c1c8555",
          "message": "Add DEVELOPMENT.md doc (#1717)\n\nThis introduces a document describing how to get started as a\ncontributor to Mountpoint. This partially replaces existing internal\ndocumentation that we have.\n\nBy moving it into the repository, it is:\n\n- In an expected location\n- Available to internal and external contributors alike\n- Available for both developers but also AI agents should a developer\nwant to make use of AI tooling\n\n### Does this change impact existing behavior?\n\nNo, project docs change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-03T16:51:54Z",
          "tree_id": "9c75bc8fdbc30b5488075e814acdb510ced61e2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41ae7ff7e7169de4f25bd33c39cee43c8c1c8555"
        },
        "date": 1772565007363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4889.60859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4468.682812499999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5832.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.7123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.0796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6259.96533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.07666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5083.8185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1807.77197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.891015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1248.33857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.0537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1769.9333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1095.3181640625,
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
          "id": "27ca3a014d7f5c8fb087faca52fd823a31a8788f",
          "message": "Bump docker/build-push-action from 6 to 7 (#1783)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<ul>\n<li>Node 24 as default runtime (requires <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Actions\nRunner v2.327.1</a> or later) by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1470\">docker/build-push-action#1470</a></li>\n<li>Remove deprecated <code>DOCKER_BUILD_NO_SUMMARY</code> and\n<code>DOCKER_BUILD_EXPORT_RETENTION_DAYS</code> envs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1473\">docker/build-push-action#1473</a></li>\n<li>Remove legacy export-build tool support for build summary by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1474\">docker/build-push-action#1474</a></li>\n<li>Switch to ESM and update config/test wiring by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1466\">docker/build-push-action#1466</a></li>\n<li>Bump <code>@​actions/core</code> from 1.11.1 to 3.0.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1454\">docker/build-push-action#1454</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.62.1 to 0.79.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1453\">docker/build-push-action#1453</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1472\">docker/build-push-action#1472</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1479\">docker/build-push-action#1479</a></li>\n<li>Bump minimatch from 3.1.2 to 3.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1463\">docker/build-push-action#1463</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0\">https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0</a></p>\n<h2>v6.19.2</h2>\n<ul>\n<li>Preserve port in <code>GIT_AUTH_TOKEN</code> host by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1458\">docker/build-push-action#1458</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2\">https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2</a></p>\n<h2>v6.19.1</h2>\n<ul>\n<li>Derive <code>GIT_AUTH_TOKEN</code> host from GitHub server URL by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1456\">docker/build-push-action#1456</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1\">https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1</a></p>\n<h2>v6.19.0</h2>\n<ul>\n<li>Scope default git auth token to <code>github.com</code> by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1451\">docker/build-push-action#1451</a></li>\n<li>Bump brace-expansion from 1.1.11 to 1.1.12 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1396\">docker/build-push-action#1396</a></li>\n<li>Bump form-data from 2.5.1 to 2.5.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1391\">docker/build-push-action#1391</a></li>\n<li>Bump js-yaml from 3.14.1 to 3.14.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1429\">docker/build-push-action#1429</a></li>\n<li>Bump lodash from 4.17.21 to 4.17.23 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1446\">docker/build-push-action#1446</a></li>\n<li>Bump tmp from 0.2.3 to 0.2.4 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1398\">docker/build-push-action#1398</a></li>\n<li>Bump undici from 5.28.4 to 5.29.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1397\">docker/build-push-action#1397</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0\">https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0</a></p>\n<h2>v6.18.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.61.0 to 0.62.1 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1381\">docker/build-push-action#1381</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\n<a\nhref=\"https://docs.docker.com/build/ci/github-actions/build-summary/\">Build\nsummary</a> is now supported with <a\nhref=\"https://docs.docker.com/build-cloud/\">Docker Build Cloud</a>.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0\">https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0</a></p>\n<h2>v6.17.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.59.0 to 0.61.0 by\n<a href=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1364\">docker/build-push-action#1364</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\nBuild record is now exported using the <a\nhref=\"https://docs.docker.com/reference/cli/docker/buildx/history/export/\"><code>buildx\nhistory export</code></a> command instead of the legacy export-build\ntool.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0\">https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0</a></p>\n<h2>v6.16.0</h2>\n<ul>\n<li>Handle no default attestations env var by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1343\">docker/build-push-action#1343</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/d08e5c354a6adb9ed34480a06d141179aa583294\"><code>d08e5c3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1479\">#1479</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cbd2dff9a0f0ef650dcce9c635bb2f877ab37be5\"><code>cbd2dff</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/f76f51f12900bb84aa9d1a498f35870ef1f76675\"><code>f76f51f</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.78.0 to\n0.79.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7d03e66b5f24d6b390ab64b132795fd3ef4152c8\"><code>7d03e66</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1473\">#1473</a>\nfrom crazy-max/rm-deprecated-envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/98f853d923dd281a3bcbbb98a0712a91aa913322\"><code>98f853d</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cadccf6e8c7385c86d9cb0800cf07672645cc238\"><code>cadccf6</code></a>\nremove deprecated envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03fe8775e325e34fffbda44c73316f8287aea372\"><code>03fe877</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1478\">#1478</a>\nfrom docker/dependabot/github_actions/docker/setup-b...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/827e36650e1fa7386d09422b5ba3c068fdbe0a1d\"><code>827e366</code></a>\nchore(deps): Bump docker/setup-buildx-action from 3 to 4</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/e25db879d025485a4eebd64fea9bb88a43632da6\"><code>e25db87</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1474\">#1474</a>\nfrom crazy-max/rm-export-build-tool</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/1ac2573b5c8b4e4621d5453ab2a99e83725242bd\"><code>1ac2573</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1470\">#1470</a>\nfrom crazy-max/node24</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-09T09:33:27Z",
          "tree_id": "c9ba3743efd90d6b4ae95a2dad003035dfe5d3ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27ca3a014d7f5c8fb087faca52fd823a31a8788f"
        },
        "date": 1773057093345,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5029.551171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4637.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5877.85009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.39775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.2048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.56357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.94609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.34638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6381.6560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.08232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5171.18876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1836.49208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.30703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1404.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.88349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1427.88056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.82822265625,
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
          "id": "90bb0b4d4f890bc0a77898f6d7cdbb20895a9650",
          "message": "Fix default data cache limit validation during eviction (#1779)\n\nFixes `is_limit_exceeded()` function used by the data cache when in\ndefault mode (which should keep 5% of space in the cache file system).\nBefore the fix, it was incorrectly considering space reserved by the\nfile system as available space leading to 100% space usage. Now,\nreserved space is considered and the 5% available space is respected. A\nregression test was also added.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-09T16:47:27Z",
          "tree_id": "20f6ef4d0237f2a088335d68be2c71196eaf7748",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bb0b4d4f890bc0a77898f6d7cdbb20895a9650"
        },
        "date": 1773083221941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4978.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4515.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5775.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.83076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.7041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.30771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.996484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6057.19609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.7083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5122.2365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 230.394921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1634.198828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.23779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1458.8775390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1303.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.95888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1878.2974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1095.47255859375,
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
          "id": "855fa94bd3b40780018368a90b16ef837eb7e2f4",
          "message": "Fix read issue on concurrent open after truncate (#1781)\n\nFix race condition when 2 concurrent open requests occur after a\ntruncate and resulting in errors on read.\n\nThe issue is caused by a concurrent operation which ignores that the\ninode is still completing an upload and tries to refresh its state by\nperforming a remote lookup to the bucket. By the time the remote lookup\ncompletes, its result may be stale but still be used to overwrite the\nresult of the upload. This fix adds a check for a pending upload instead\nof only relying on the `write_status` field.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog entries for a patch release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T17:42:42Z",
          "tree_id": "beb72a04226e62ebc716133f9c9b272a97fa25ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/855fa94bd3b40780018368a90b16ef837eb7e2f4"
        },
        "date": 1773086568105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4487.45634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5847.190234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.6580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.41630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.05205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.43046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.84580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.04150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6322.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.44208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4913.03818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1863.14970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.8015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.30166015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.82724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1890.3376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 962.8759765625,
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
          "id": "4270f8c47fa0717a9dcc87828eca01d12fc42d7a",
          "message": "Update changelogs for v1.22.1 release (#1784)\n\nUpdate changelogs for v1.22.1 release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T18:29:42Z",
          "tree_id": "c65d8b678eb9cb90ff43817065ad504b9b8cd445",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4270f8c47fa0717a9dcc87828eca01d12fc42d7a"
        },
        "date": 1773089352472,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4942.84384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4537.91328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5836.19765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.717578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.7525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.78330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.68466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6218.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4995.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1848.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.8046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.26103515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1200.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.96025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.99658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.91025390625,
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
          "id": "0e042567569dedfe47397ee0dc023917771faefb",
          "message": "Update CRT submodules to latest releases (#1778)\n\nUpdate the CRT submodules to the latest releases.\n\nUpdated libraries:\n- aws-c-auth: v0.9.5 -> v0.10.0\n- Pick up: support imds endpoint override\n([#286](https://github.com/awslabs/aws-c-auth/pull/286))\n- aws-c-http: v0.10.9 -> v0.10.11\n- aws-c-io: v0.26.0 -> v0.26.1\n- aws-checksums: v0.2.8 -> v0.2.10\n- aws-lc: v1.66.2 -> v1.69.0\n- s2n-tls: v1.6.4 -> v1.7.0\n\n\n<details> <summary>Full CRT changelog:</summary>\n\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth a4409b95..5aefd277:\n  > support imds endpoint override (#286)\n  > Prioritizing profile credentials over credential_process when both are present (#288)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http acf31399..0d8e1a93:\n  > Fail http proxy configuration when using SecItem (#551)\n  > [fix] h2 stream manager initial settings not passed correctly & Log the headers (#544)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io d5ad01ce..bfb0819d:\n  > Add PQ-opt-out pref to supported s2n cases (#786)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 270b15ac..1d5f2f1f:\n  > Add flag to disable unknown pragmas on ARM (#111)\n  > Add XXHash algos (#110)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 728811ee..37d86461:\n  > Return correct error value when parsing PKCS7 authenticated attributes fails (#3061)\n  > Use CRYPTO_memcmp instead of OPENSSL_memcmp for tag verification (#3060)\n  > Ensure all signer certificate chains are verified (#3059)\n  > Prepare v1.69.0 (#3049)\n  > Simplify `d2i_PKCS7` by removing redundant BER-to-DER conversion (#3037)\n  > Key state consistency in PQDSA_KEY setter functions (#3040)\n  > Fix error return values for no-op UI_xxx stub functions (#3025)\n  > Update ACVP documentation (#2960)\n  > Retain flag after custom critical extensions check (#3030)\n  > Fix PKCS7 verify content memleak (#3036)\n  > Fix error reporting and document EC explicit params single-cert behavior (#3044)\n  > Various PKCS7 fixups (#3035)\n  > Fix link in README.md (#2945)\n  > Fix FIPS delocator handling of floating-point immediates on aarch64 (#3029)\n  > Prepare v1.68.0 (#3022)\n  > Refactor PQDSA_KEY set_raw functions to use goto-err cleanup (#2993)\n  > Generate Rust Bindings (#2999)\n  > Support WASM/Emscripten (#2959)\n  > Update Ubuntu 24:04 image compiler verification (#3017)\n  > Fix CI: mariadb (#3015)\n  > Miscellaneous CI improvements (#2978)\n  > Fix argument order in `hmac_copy` (#3014)\n  > Fix OPENSSL_memchr per C23 (#3008)\n  > Fix Windows CI: use `cd /d` in run_windows_tests.bat to handle cross-drive paths (#3012)\n  > Fix CI: gcc-4.8 (#3011)\n  > Reject XOF digests in DH_compute_key_hashed\n  > reject zero-sized digests in HKDF EVP_PKEY\n  > evp: disable EVP_PKEY_derive for KEM method\n  > pkcs8: cap ciphertext length before allocating in pkcs8_pbe_decrypt\n  > 1-byte OOB read in EVP_PKEY_asn1_find_str length calculation\n  > evp: fix DSA keygen error-path UAF/double-free\n  > Correct CCM nids in object definition (#2991)\n  > Ensure public key is set before verifying through ML-DSA verify (#2990)\n  > Remove redundant CPython 3.9 integration test (#2996)\n  > Ensure no overflow in signed output length in do_buf (#2988)\n  > Ensure index argument is not negative in ASN1_BIT_STRING_set_bit (#2987)\n  > Add PyOpenSSL integration test (#2992)\n  > Free potential memory before assigning new pointer (#2989)\n  > Support GCC 4.8 for aarch64 (#2964)\n  > Bump bytes from 1.7.1 to 1.11.1 in /tests/ci/lambda (#2983)\n  > Address some CMake findings (#2979)\n  > Update Wycheproof ECDSA test vectors and fix workflow typo (#2972)\n  > Disable SLP vectorizer for FIPS shared library builds on GCC 14+ (#2977)\n  > Nmap build needs liblinear (#2985)\n  > Add method to get type of ML-DSA instance configured under EVP PKEY (#2980)\n  > Fix aws-lc-rs CI job (#2966)\n  > Simplify FIPS conditional in top-level build script (#2976)\n  > Integrate Wycheproof ML-DSA test vectors (#2973)\n  > Bump mysql cluster version (#2967)\n  > Shorten Windows Build Directory Path (#2974)\n  > Add missing env vars to check-vectors workflow step (#2962)\n  > Fix checkout logic for android-omnibus (#2970)\n  > Ensure pkcs7 checks ASN1_TYPE->type (#2968)\n  > Migrate Android Testing to GitHub Actions (#2969)\n  > Adds a new randomness generation API (#2963)\n  > Model Device Farm CI Resources in CDK (#2965)\n  > Remove FIPS counter framework and other tidying up (#2947)\n  > Fix image-build-windows workflow to only push on workflow_call and workflow_dispatch (#2961)\n  > Move md4 out of FIPS module (#2956)\n  > Initial Framework for Using Doxygen to Document Public Header Files (#2908)\n  > openssl-ca command implementation for self-sign certificates (#2937)\n  > Remove AVX conditional from cmake script (#2958)\n  > Enable Hybrid PQ KeyShares by default (#2531)\n  > Add weekly automated check for outdated third-party test vectors (#2933)\n  > Bump urllib3 from 2.6.0 to 2.6.3 in /tests/ci (#2932)\n  > Prepare v1.67.0 (#2952)\n  > Bump FreeBSD testing to v14.2 and v15.0 (#2955)\n  > Fix CMake CI jobs (#2953)\n  > Update patch for nmap. (#2954)\n  > Cleanup pass on Go code in repository (#2951)\n  > Avoid cross-compilation build failure (#2944)\n  > Integrate Wycheproof ML-KEM test vectors (#2891)\n  > Use existing session context if new is actually NULL (#2946)\n  > Import mldsa-native (#2902)\n  > Windows 7 support (#2940)\n  > Remove Kyber completely (#2941)\n  > Use already defined macro for no inline (#2942)\n  > AES-GCM: Add function pointer trampolines to avoid delocator issue (#2919)\n  > Add support for Big Endian in ACVP tool (#2938)\n  > Service Indicator: Add error call trampoline to avoid delocator issue (#2920)\n  > Fix failing Windows Docker image build (#2931)\n  > Rename volatile state/memory to unique state/memory (#2935)\n  > increase timeout for SDE tests (#2936)\n  > Migrate Wycheproof test vectors for ECDSA, RSA PKCS#1, and some more (#2887)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 3276a087..f5e5e830:\n  > chore: rust binding release v0.3.34 (#5707)\n  > chore: add static lists of supported TLS parameters (#5698)\n  > feat(bindings): expose disable_x509_intent_verification API (#5703)\n  > test (integration): add renegotiate rust test (#5689)\n  > test(integration): add rust test for session resumption (#5683)\n  > chore: move s2n-tls-bench to Codebuild (#5693)\n  > chore: update s2n-tls-hyper crates version to 0.1.0 (#5702)\n  > Mark Kyber as unsupported on all LibCrypto variants (#5701)\n  > chore: bump standard MSRV to 1.83 (#5700)\n  > chore: bump to nixpkgs 2025.05 (#5489)\n  > build(deps): update reqwest requirement from 0.12.7 to 0.13.1 in /tests/pcap in the all-cargo-updates group across 1 directory (#5690)\n  > (chore): Rust bindings bump 0.3.33 (#5694)\n```\n\n\n</details>\n\nConfirmed the crate size is under the 10MiB limit (8.3MiB compressed)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-10T10:36:51Z",
          "tree_id": "8aa074215eb0f1357c6bdf9c18daed19542706ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e042567569dedfe47397ee0dc023917771faefb"
        },
        "date": 1773147342817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5069.53642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4549.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5841.36494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.90302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.144921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6280.5916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.7376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5160.49765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1945.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1549.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.1232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1734.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1063.00869140625,
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
          "id": "d2c41aba090af32c8d867b0fe4a67ae82169763a",
          "message": "Fix build failure on macOS (#1785)\n\nFix a platform-specific type casting error surfaced on macOS.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-11T10:40:37Z",
          "tree_id": "813a7ad399f17fbc0a4ee3deee0ce08c0ccfcb0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2c41aba090af32c8d867b0fe4a67ae82169763a"
        },
        "date": 1773233972172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5063.2671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4574.125390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5888.478222656249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.4361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.26318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.65,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.076953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.18603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6456.13408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.3958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5267.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 228.9703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1746.41376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.3318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1510.64306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1224.80654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.07490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.47998046875,
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
          "id": "43618edd0ccfb65c7264eeeca35cab59e4741cbf",
          "message": "CI: Run Clippy on macOS (#1786)\n\nAdd clippy to the macOS workflow. It will help detect issues like #1785\nearly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-12T12:24:24Z",
          "tree_id": "293d67e3c74b0b61d7e55481a4d31228a782d02c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43618edd0ccfb65c7264eeeca35cab59e4741cbf"
        },
        "date": 1773326605609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.98916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4524.348437500001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5848.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.803125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.16533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.94931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6365.44677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.14365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5045.67099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1865.640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.46513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1440.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1212.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.61240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1876.2923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1037.5291015625,
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
          "id": "0a205061c3231ef239d67c6836d1cb94aaaeabb0",
          "message": "Add developer container to support running integration tests, etc. on macOS (#1780)\n\nOn macOS, it is not considered reliable to run the integration tests for\nFUSE. This PR introduces a container for performing development-related\ntasks, but in particular running integration tests.\n\nThis allows developers using a macOS system to run FUSE tests using a\nreal Linux kernel (when using something like Docker Desktop, Colima,\nFinch, etc..).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, developer change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-13T10:23:17Z",
          "tree_id": "97f08ec0d1b4b9c529653eba5a90b5db47d8f6d1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a205061c3231ef239d67c6836d1cb94aaaeabb0"
        },
        "date": 1773405732007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5018.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4540.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5856.45537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.86005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.93603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.1099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.09326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.96611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6315.245703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.946875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5155.58662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1934.74912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.4400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1546.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.90087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.66845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1747.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.36650390625,
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
          "id": "7c41baaa3ca29d9f0215573fb3bb9e6303150e9d",
          "message": "Update dev container to support local cache tests depending on loopback fs (#1788)\n\nBefore this change, running integration tests in the container would\nfail as it would not be able to run sudo, create the ext4 filesystem\netc. introduced by #1779.\n\nThis change updates the container to be able to invoke sudo, and adds\nmissing dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dev container change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T14:37:38Z",
          "tree_id": "807ed655a8ee90ed37491395f499f4f382f17ab6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c41baaa3ca29d9f0215573fb3bb9e6303150e9d"
        },
        "date": 1773766774446,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4846.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4539.79521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5859.12490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.71826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6371.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5080.527734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 213.6892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1542.628515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.92666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1388.07841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1179.9466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.83701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1953.472265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1054.59716796875,
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
          "id": "57116c95347e5ff868fd45853f33c26e9dad12ee",
          "message": "Update local cache loop device fs tests with better error handling (#1789)\n\nBefore this change, it was difficult to identify what was going wrong\nwith a test that involved creating a new ext4 filesystem using a loop\ndevice. It might fail simply with \"file not found\" when `sudo` was not\ninstalled.\n\nThis change updates the test to use anyhow in order to capture\nadditional context about what went wrong. The use of anyhow is limited\nto the tests and not the source code.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T15:10:16Z",
          "tree_id": "63e9ff6474a19b6807e1285a90c24f50cc03c892",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57116c95347e5ff868fd45853f33c26e9dad12ee"
        },
        "date": 1773769098548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4991.61875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4456.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5815.075878906249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.44990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.84697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.7697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.85048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.7634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6164.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.6013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5089.45517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 224.49736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1944.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.46337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.95107421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1228.20458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1805.26982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1075.56748046875,
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
          "id": "1be83cb7c78a297819cffe35d7782e84e4d3ad19",
          "message": "Bump slackapi/slack-github-action from 2.1.1 to 3.0.1 (#1791)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.1 to 3.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.1</h2>\n<h2>What's Changed</h2>\n<p>Alongside the breaking changes of <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.0\"><code>@v3.0.0</code></a>\nand a <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/\">new\ntechnique</a> to run Slack CLI commands, we tried the wrong name to\npublish to the GitHub Marketplace 🐙 This action is now noted as <a\nhref=\"https://github.com/marketplace/actions/the-slack-github-action\"><strong>The\nSlack GitHub Action</strong></a> in listings 🎶 ✨</p>\n<h3>:art: Maintenance</h3>\n<ul>\n<li>chore: use a unique title for marketplace in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/576\">slackapi/slack-github-action#576</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>chore(release): tag version 3.0.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/577\">slackapi/slack-github-action#577</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1\">https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1</a></p>\n<h2>Slack GitHub Action v3.0.0</h2>\n<blockquote>\n<p>The <code>@v3.0.0</code> release had a hiccup on publish and we\nrecommend using <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.1\"><strong><code>@​v3.0.1</code></strong></a>\nor a more recent version when updating! Oops!</p>\n</blockquote>\n<p>🎽 <strong>Running Slack CLI commands and the active Node runtime,\nboth included in this release</strong> 👟 ✨</p>\n<h3>⚠️ Breaking change: Node.js 24 the runtime</h3>\n<p>This major version updates the GitHub Actions required runtime to <a\nhref=\"https://nodejs.org/en/about/previous-releases\"><strong>Node.js\n24</strong>.</a> Most <a\nhref=\"https://github.com/actions/runner-images?tab=readme-ov-file#software-and-image-support\">GitHub-hosted\nrunners</a> already include this, but self-hosted runners may need to be\nupdated ahead of <a\nhref=\"https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/\">planned\ndeprecations of Node 20 on GitHub Actions runners</a>.</p>\n<h3>📺 Enhancement: Run Slack CLI commands</h3>\n<p>This release introduces a new technique for running <a\nhref=\"https://docs.slack.dev/tools/slack-cli\">Slack CLI</a> commands\ndirectly in GitHub Actions workflows. Use this to install the latest\nversion (or a specific one) of the CLI and execute commands like\n<code>deploy</code> for merges to main, <code>manifest validate</code>\nwith tests, and other <a\nhref=\"https://docs.slack.dev/tools/slack-cli/reference/commands/slack\">commands</a>.</p>\n<p>Gather a token using the following CLI command to store with repo\nsecrets, then get started with an example below:</p>\n<pre><code>$ slack auth token\n</code></pre>\n<h3>🧪 Validate an app manifest on pull requests</h3>\n<p>Check that your app manifest is valid before merging changes:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest</a></p>\n<pre lang=\"yaml\"><code>- name: Validate the manifest\n  uses: slackapi/slack-github-action/cli@v3.0.0\n  with:\ncommand: &quot;manifest validate --app ${{ vars.SLACK_APP_ID }}&quot;\n    token: ${{ secrets.SLACK_SERVICE_TOKEN }}\n</code></pre>\n<h3>🚀 Deploy your app on push to main</h3>\n<p>Automate deployments whenever changes land on your main branch:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/af78098f536edbc4de71162a307590698245be95\"><code>af78098</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/add1a00063f351e4c0e55c3703da81637f03a8be\"><code>add1a00</code></a>\nchore(release): tag version 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/577\">#577</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/2bc9e7a4cd10f4d06ef49b8fa8a11efdc7fb891b\"><code>2bc9e7a</code></a>\nchore: use a unique title for marketplace (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/576\">#576</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5d43dad17bba7ebd47486137b9ab6936fd6bbf4\"><code>c5d43da</code></a>\nchore(release): tag version 3.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/575\">#575</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/963b9796dcc3184602a0aefe2f052d034027bfaf\"><code>963b979</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.14.1 to 7.15.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/574\">#574</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/90b7328a4cea35bd9dc6fc64d7f70e772d6d5876\"><code>90b7328</code></a>\nbuild(deps): bump <code>@​slack/logger</code> from 4.0.0 to 4.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/573\">#573</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e45cb891a61f925570820f137980df2028625fec\"><code>e45cb89</code></a>\nfeat: support slack cli commands with composite action inputs (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/560\">#560</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0aed2c2a70fe17c67bfd489b5dc3d9b410f69f79\"><code>0aed2c2</code></a>\nbuild(deps): bump https-proxy-agent from 7.0.6 to 8.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/572\">#572</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/4795f96c2818074349810cac0abc3bf5437bdc2c\"><code>4795f96</code></a>\nbuild(deps-dev): bump sinon from 21.0.1 to 21.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/571\">#571</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/bd9e2ce619554772120b8cfcbbc7fe4bd2d42a2f\"><code>bd9e2ce</code></a>\nbuild(deps): bump actions/setup-node from 6.2.0 to 6.3.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/569\">#569</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.1...v3.0.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.1&new-version=3.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-17T16:05:49Z",
          "tree_id": "c9ed45fb7b9e1caaa063e173f7c310ae62c7d5a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1be83cb7c78a297819cffe35d7782e84e4d3ad19"
        },
        "date": 1773773933355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4974.7810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4451.429296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5824.283984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.88955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.07763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.910546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.83330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6305.24716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.35537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5159.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 217.64501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1685.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.28955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1391.3041015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1154.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.40712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1586.1556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1120.6279296875,
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
          "id": "e7eaeb6717b9ca938c8d8fa14006bcd32c765da6",
          "message": "Update changelogs for v1.22.2 release (#1794)\n\nUpdate changelogs for v1.22.2 release.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-03-20T15:11:04Z",
          "tree_id": "d3517aaf8f5617f8a9ace3424b0acd952f5962f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7eaeb6717b9ca938c8d8fa14006bcd32c765da6"
        },
        "date": 1774027912397,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4847.21591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4275.6623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5584.133007812499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.13701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.3669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.14775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.867578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.74931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.040625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5286.712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.6482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4679.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 214.16298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1681.9734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1308.28671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1235.499609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1742.50625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.41982421875,
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
          "id": "55d81b6a748372c4e9e4164dfbf80bf02168c257",
          "message": "Update usages of GPG public keys with new rotated key (#1795)\n\nWe have a new GPG public key because the old one will expire soon. In\nthis PR we:\n- Update the usages of the public keys in the documentation with the new\none.\n- Simplify the `docker/Dockerfile` by installing `mount-s3` from AL2023\npackage repository\n\nTesting:\n```\n$ docker build -t mountpoint-s3 docker/\n[+] Building 16.9s (7/7) FINISHED                                                                                                                                                                                                                                              docker:default\n => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                     0.0s\n => => transferring dockerfile: 334B                                                                                                                                                                                                                                                     0.0s\n => [internal] load metadata for public.ecr.aws/amazonlinux/amazonlinux:2023                                                                                                                                                                                                             1.2s\n => [internal] load .dockerignore                                                                                                                                                                                                                                                        0.0s\n => => transferring context: 2B                                                                                                                                                                                                                                                          0.0s\n => CACHED [1/3] FROM public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                0.0s\n => => resolve public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                       0.0s\n => [2/3] RUN dnf upgrade -y &&     dnf install -y mount-s3 &&     dnf clean all                                                                                                                                                                                                        14.9s\n => [3/3] RUN echo \"user_allow_other\" >> /etc/fuse.conf                                                                                                                                                                                                                                  0.6s\n => exporting to image                                                                                                                                                                                                                                                                   0.1s \n => => exporting layers                                                                                                                                                                                                                                                                  0.1s \n => => writing image sha256:3ba80d05a326e4049cfeefb1d09697d977eaebfdcfcce565308e5de293a5f143                                                                                                                                                                                             0.0s \n => => naming to docker.io/library/mountpoint-s3                                                                                                                                                                                                                                         0.0s \n\n$ docker run --rm mountpoint-s3 --version\nmount-s3 1.22.0+1.amzn2023\n```\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nYes (in the release commit) and no.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-20T16:22:45Z",
          "tree_id": "aa7c2c082e5e2d9d5d865e1e51099f70768a366b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55d81b6a748372c4e9e4164dfbf80bf02168c257"
        },
        "date": 1774032168477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4969.2115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4310.25556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5709.3822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.87470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.7859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.05625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.46591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.5455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.987890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.965234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6207.584375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5086.14345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 221.93330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1511.505078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1300.02412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1119.24755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1815.55595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1051.44541015625,
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
          "id": "813d41a1826d02288912ff7f72f118bedc2dcc64",
          "message": "Update Cargo dependencies (#1797)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-23T11:14:08Z",
          "tree_id": "eeeaf89f1bdf841214f4b0bb48bb4d216727f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813d41a1826d02288912ff7f72f118bedc2dcc64"
        },
        "date": 1774272841660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4993.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4454.97822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5869.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.26220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.55361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.242578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.49765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6273.10478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5167.645703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 227.03505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1752.471484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.06162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1525.10166015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1307.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1543.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.3904296875,
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
          "id": "6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2",
          "message": "Add dev-container environment variable propagation allowlist (#1792)\n\nTo debug an issue, I wanted to use a different logging level in tests.\nThis change adds an allowlist of environment variables to automatically\npass into the dev-container.\n\n### Does this change impact existing behavior?\n\nNo, dev-container change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-23T16:06:04Z",
          "tree_id": "d4a007c7e3899b2a7805e2c8c3578748da154b2e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2"
        },
        "date": 1774290536980,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4910.25107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4338.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5691.2248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.11484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.63828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.968359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.6818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.7755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5835.569921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.9751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4852.8455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 215.96923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1594.38642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.1986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1200.44951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1211.37744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.69375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1506.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.4814453125,
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
          "id": "fd1c93202af0b75eaff505ffeeb08cc283048b4f",
          "message": "Add client error for S3 Express session creation failure (#1793)\n\nThis change introduces a proper S3 client error for when the CRT fails\nto create an S3 Express session, such as when having no authorization to\ndo so.\n\nInstead of a CRT error code, the customer will now see a clear message\n\"Failed to create S3 Express session, see CRT debug logs\".\n\nThis change also updates many tests that were previously testing S3\ngeneral purpose buckets to correctly test S3 Express / directory\nbuckets.\n\n### Does this change impact existing behavior?\n\nYes, it improves S3 Express session creation failure error messages. It\nincludes a call to action to direct the customer to check CRT debug logs\nto help them resolve the issue.\n\nIn the client, it introduces a new error variant.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nGiven the new error variant, the S3 client is a unstable minor version\nbump. (Effectively major.)\n\nFor all other crates and MP itself, a patch version bump has been\napplied, alongside changelog entries. The change is fairly minimal.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T11:22:07Z",
          "tree_id": "88c5ee68d8cdf7f802dbdc0228a84d9dc0e624af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd1c93202af0b75eaff505ffeeb08cc283048b4f"
        },
        "date": 1774618875646,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5023.56025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4550.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5763.600488281249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.65869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.90048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.45908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.78017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.60341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6334.1560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.85703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5096.54150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.5798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1843.6177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.073046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1427.9900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1273.0685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.18369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1524.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1099.6091796875,
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
          "id": "57cd918400cb3448f523c801fe11dc9675c93fdb",
          "message": "Update Mountpoint crates to track dependencies between each other via workspace manifest, update dependencies (#1799)\n\nThis is a simple change to where the dependencies between Mountpoint\ncrates resides. Instead of this being scattered and duplicated across\nthe crate manifests, each manifest instead declares a dependency where\nthe specifics of the dependency are defined on the workspace. In the\nworkspace, we define the version, path, and features.\n\nThe motivation is to reduce the burden when making changes to the\nversion numbers of our crates.\n\nThis change also updates some dependencies via `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just Cargo manifest updates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T13:03:13Z",
          "tree_id": "931b3c3fd031de31ad6a6c791c9d4699872a0870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57cd918400cb3448f523c801fe11dc9675c93fdb"
        },
        "date": 1774624996758,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4902.59716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4303.0240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5651.043554687501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.31396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.3142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.0609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.5287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.11064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.70029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6145.0208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.39794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4978.04814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 228.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1724.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.33642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1518.32548828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1212.07099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.31845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1537.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1116.05380859375,
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
          "id": "90bc1bfe91575198b5e3b413bb6b89b5dca2af6c",
          "message": "Remove last usages of forbidden CI bucket (#1802)\n\nThis change removes the last of the 'forbidden bucket' test\ndependencies. The tests were previously dependent on a bucket with a\npolicy banning almost all S3 operations. Instead, we now use session\npolicies to restrict access on a per-test basis.\n\n### Does this change impact existing behavior?\n\nTest change only. Removes the need to supply a forbidden bucket for\ntests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-04-08T13:57:32Z",
          "tree_id": "a3b2608bb8cf0baac3ae6f159a3c5c361c66eb79",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bc1bfe91575198b5e3b413bb6b89b5dca2af6c"
        },
        "date": 1775665082670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4768.07080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4349.140429687501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5639.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.00068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.00185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.67275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.59208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5788.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.0294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5004.848828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 224.402734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1467.01337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.81259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1337.3240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.90478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.13408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1534.2783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1027.08955078125,
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
          "id": "3a5e2d4981df3e21765c730618fa1eafa09dd14e",
          "message": "Bump rand from 0.10.0 to 0.10.1 (#1805)\n\nBumps [rand](https://github.com/rust-random/rand) from 0.10.0 to 0.10.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-random/rand/blob/master/CHANGELOG.md\">rand's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.10.1] — 2026-02-11</h2>\n<p>This release includes a fix for a soundness bug; see <a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>.</p>\n<h3>Changes</h3>\n<ul>\n<li>Document panic behavior of <code>make_rng</code> and add\n<code>#[track_caller]</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li>Deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1761\">rust-random/rand#1761</a>\n<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1763\">rust-random/rand#1763</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/27ff4cb7ced3122a1f677fc248c1a07e59ddc8cd\"><code>27ff4cb</code></a>\nPrepare v0.10.1: deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/98d06386dc4e1d1c89a91f4e483d571921c29ecf\"><code>98d0638</code></a>\nmake_rng: document panic and add #[track_caller] (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/54e5eaaa7ac11af3aa60b5ccc486182189e6f9ef\"><code>54e5eaa</code></a>\nFix doc error (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1758\">#1758</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/1ce4c080186730595a8d464591d17aac22a42252\"><code>1ce4c08</code></a>\nBump itoa from 1.0.17 to 1.0.18 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1756\">#1756</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/ccb734b9c22891a19f11be125c2f09a43809b08e\"><code>ccb734b</code></a>\ndocs: fix typo in doc comment (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1754\">#1754</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/357eb7de9c9c80184449e8b515c821e48cf4df74\"><code>357eb7d</code></a>\nBump libc from 0.2.182 to 0.2.183 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1753\">#1753</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/5e77fe5d61b886988cae67b6d8fb09e405845c63\"><code>5e77fe5</code></a>\nFix trait references in documentation (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1752\">#1752</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/da891850ab2b38f4322ec140ae29d305dfb162c3\"><code>da89185</code></a>\nBump the all-deps group with 3 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1751\">#1751</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/50516ff45c3675d9c2d247e70bc8db691ed8366d\"><code>50516ff</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1749\">#1749</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/fd71de97fdc7050b9a2d8384f5f8afce7d991ca3\"><code>fd71de9</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1747\">#1747</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-random/rand/compare/0.10.0...0.10.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=rand&package-manager=cargo&previous-version=0.10.0&new-version=0.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-14T15:45:15Z",
          "tree_id": "2ce5a955925bab2ea8a698d714fa151014d315b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a5e2d4981df3e21765c730618fa1eafa09dd14e"
        },
        "date": 1776191068686,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4871.47001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4421.34267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5695.20634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.37578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.43623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.32626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5909.428125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.8927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4932.20224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 226.32939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1588.27900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.7859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1321.42724609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1258.254296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.42666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1779.77978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1058.2384765625,
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
          "id": "4625a683175a83619d8e9967f85e025ded4711bc",
          "message": "Update Cargo dependencies (#1811)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased `mount-s3` patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-17T23:17:48Z",
          "tree_id": "dac787a5797eac8f4a50e7da0cd2db79a1e0f501",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4625a683175a83619d8e9967f85e025ded4711bc"
        },
        "date": 1776476415739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4926.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4422.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5725.31494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.87412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.629296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 8.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.7609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5829.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.68701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4781.99345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 222.6904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1839.8259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.16787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1231.1021484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1079.40634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.15595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1829.02900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.2142578125,
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
          "id": "49dd2df24d8c6adacd34e30df5b63026750578be",
          "message": "Bump pygments from 2.19.2 to 2.20.0 in /benchmark (#1803)\n\nBumps [pygments](https://github.com/pygments/pygments) from 2.19.2 to\n2.20.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/releases\">pygments's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.20.0</h2>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/blob/master/CHANGES\">pygments's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Version 2.20.0</h2>\n<p>(released March 29th, 2026)</p>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/708197d82827ba2d5ca78bcbb653c7102ce86dcd\"><code>708197d</code></a>\nFix underline length.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d4538ae8621d766ecc91ff59caf76ab75983abc\"><code>1d4538a</code></a>\nPrepare 2.20 release.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/2ceaee4e634eebae2d10a47fd05406871f6bac8f\"><code>2ceaee4</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/e3a3c54b58c7f80bc4db887e471d4f91c77844ed\"><code>e3a3c54</code></a>\nFix Haskell lexer: handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/d7c3453e342dac319f58e4091f4ef183cc49d802\"><code>d7c3453</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3071\">#3071</a>\nfrom pygments/harden-html-formatter</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/0f97e7c37d44abfa4ddfddf44a3290fdad586034\"><code>0f97e7c</code></a>\nHarden the HTML formatter against CSS.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/9f981b2ba42b88ca5bdcebf12cd01efd7cd80aec\"><code>9f981b2</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d889151024e9a53f3702a60558b29b070306e9e\"><code>1d88915</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/c3d93adb9827fc054c3c12b47bde31c781a36a93\"><code>c3d93ad</code></a>\nFix ASN.1 lexer: recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/4f06bcf8a5ba3f2b5bda24a26ccf041a1a65d91e\"><code>4f06bcf</code></a>\nfix bad behaving backtracking regex in CommonLispLexer</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pygments/pygments/compare/2.19.2...2.20.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pygments&package-manager=uv&previous-version=2.19.2&new-version=2.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-17T23:18:51Z",
          "tree_id": "fd96b6795171141aa6958932ddb0d93050463a22",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49dd2df24d8c6adacd34e30df5b63026750578be"
        },
        "date": 1776477575360,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4958.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4510.5853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.53466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.491015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.60927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.66357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.44541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.68525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.2583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6201.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.65048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5036.69296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 219.87333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1617.25869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.85234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1331.34423828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.59208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1684.4197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.643359375,
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
          "id": "b05b605e488ec6b65330d2ffc4c1d652c6790e8c",
          "message": "Bump pytest from 8.4.1 to 9.0.3 in /benchmark (#1807)\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 8.4.1 to\n9.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pytest-dev/pytest/releases\">pytest's\nreleases</a>.</em></p>\n<blockquote>\n<h2>9.0.3</h2>\n<h1>pytest 9.0.3 (2026-04-07)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12444\">#12444</a>:\nFixed <code>pytest.approx</code> which now correctly takes into account\n<code>~collections.abc.Mapping</code> keys order to compare them.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13634\">#13634</a>:\nBlocking a <code>conftest.py</code> file using the <code>-p no:</code>\noption is now explicitly disallowed.</p>\n<p>Previously this resulted in an internal assertion failure during\nplugin loading.</p>\n<p>Pytest now raises a clear <code>UsageError</code> explaining that\nconftest files are not plugins and cannot be disabled via\n<code>-p</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13734\">#13734</a>:\nFixed crash when a test raises an exceptiongroup with\n<code>__tracebackhide__ = True</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14195\">#14195</a>:\nFixed an issue where non-string messages passed to <!-- raw HTML omitted\n-->unittest.TestCase.subTest()<!-- raw HTML omitted --> were not\nprinted.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>:\nFixed use of insecure temporary directory (CVE-2025-71176).</p>\n</li>\n</ul>\n<h2>Improved documentation</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13388\">#13388</a>:\nClarified documentation for <code>-p</code> vs\n<code>PYTEST_PLUGINS</code> plugin loading and fixed an incorrect\n<code>-p</code> example.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13731\">#13731</a>:\nClarified that capture fixtures (e.g. <code>capsys</code> and\n<code>capfd</code>) take precedence over the <code>-s</code> /\n<code>--capture=no</code> command-line options in <code>Accessing\ncaptured output from a test function\n&lt;accessing-captured-output&gt;</code>.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14088\">#14088</a>:\nClarified that the default <code>pytest_collection</code> hook sets\n<code>session.items</code> before it calls\n<code>pytest_collection_finish</code>, not after.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14255\">#14255</a>:\nTOML integer log levels must be quoted: Updating reference\ndocumentation.</li>\n</ul>\n<h2>Contributor-facing changes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12689\">#12689</a>:\nThe test reports are now published to Codecov from GitHub Actions.\nThe test statistics is visible <a\nhref=\"https://app.codecov.io/gh/pytest-dev/pytest/tests\">on the web\ninterface</a>.</p>\n<p>-- by <code>aleguy02</code></p>\n</li>\n</ul>\n<h2>9.0.2</h2>\n<h1>pytest 9.0.2 (2025-12-06)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13896\">#13896</a>:\nThe terminal progress feature added in pytest 9.0.0 has been disabled by\ndefault, except on Windows, due to compatibility issues with some\nterminal emulators.</p>\n<p>You may enable it again by passing <code>-p terminalprogress</code>.\nWe may enable it by default again once compatibility improves in the\nfuture.</p>\n<p>Additionally, when the environment variable <code>TERM</code> is\n<code>dumb</code>, the escape codes are no longer emitted, even if the\nplugin is enabled.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13904\">#13904</a>:\nFixed the TOML type of the <code>tmp_path_retention_count</code>\nsettings in the API reference from number to string.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13946\">#13946</a>:\nThe private <code>config.inicfg</code> attribute was changed in a\nbreaking manner in pytest 9.0.0.\nDue to its usage in the ecosystem, it is now restored to working order\nusing a compatibility shim.\nIt will be deprecated in pytest 9.1 and removed in pytest 10.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/a7d58d7a21b78581e636bbbdea13c66ad1657c1e\"><code>a7d58d7</code></a>\nPrepare release version 9.0.3</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/089d98199c253d8f89a040243bc4f2aa6cd5ab22\"><code>089d981</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14366\">#14366</a>\nfrom bluetech/revert-14193-backport</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/8127eaf4ab7f6b2fdd0dc1b38343ec97aeef05ac\"><code>8127eaf</code></a>\nRevert &quot;Fix: assertrepr_compare respects dict insertion order (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14050\">#14050</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14193\">#14193</a>)&quot;</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/99a7e6029e7a6e8d53e5df114b1346e035370241\"><code>99a7e60</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14363\">#14363</a>\nfrom pytest-dev/patchback/backports/9.0.x/95d8423bd...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/ddee02a578da30dd43aedc39c1c1f1aaadfcee95\"><code>ddee02a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>\nfrom bluetech/cve-2025-71176-simple</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/74eac6916fee34726cb194f16c516e96fbd29619\"><code>74eac69</code></a>\ndoc: Update training info (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14298\">#14298</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14301\">#14301</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/f92dee777cfdb77d1c43633d02766ddf1f07c869\"><code>f92dee7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14267\">#14267</a>\nfrom pytest-dev/patchback/backports/9.0.x/d6fa26c62...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/7ee58acc8777c31ac6cf388d01addf5a414a7439\"><code>7ee58ac</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12378\">#12378</a>\nfrom Pierre-Sassoulas/fix-implicit-str-concat-and-d...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/37da870d37e3a2f5177cae075c7b9ae279432bf8\"><code>37da870</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14259\">#14259</a>\nfrom mitre88/patch-4 (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14268\">#14268</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/c34bfa3b7acb65b594707c714f1d8461b0304eed\"><code>c34bfa3</code></a>\nAdd explanation for string context diffs (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14257\">#14257</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14266\">#14266</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pytest-dev/pytest/compare/8.4.1...9.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pytest&package-manager=uv&previous-version=8.4.1&new-version=9.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-18T07:23:24Z",
          "tree_id": "2f703944b7dff2ba473abc4efca2e58cec6155f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b05b605e488ec6b65330d2ffc4c1d652c6790e8c"
        },
        "date": 1776505405473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5029.004296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4544.77109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5815.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.0990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.50078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.95703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.12607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.06337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6436.28857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.037890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5103.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.1423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1918.06904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.8255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1578.74033203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1320.62841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1802.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.107421875,
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
        "date": 1776785918092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4928.40673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4327.7140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5565.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.36171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.55546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.5970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.89951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 8.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5782.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.64482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4389.87353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 232.6451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1859.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.2044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1126.7671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.8525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1673.35908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.71201171875,
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
        "date": 1776871689412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4743.4123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4121.29853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5130.89306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.1498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.16748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.5638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5950.77119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.40029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4741.98505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.368359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1837.11279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.33125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1310.09873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1335.3876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.19697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1714.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.62666015625,
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
        "date": 1776878266046,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4888.862109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4333.45390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5582.704394531251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.43359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.97041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.49052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.34013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.89375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.54248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.46943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5588.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4755.662890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 217.518359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1624.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1227.4201171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.04638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1565.4703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1119.16201171875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1776878267223,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}
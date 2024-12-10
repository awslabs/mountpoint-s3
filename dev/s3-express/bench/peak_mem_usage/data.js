window.BENCHMARK_DATA = {
  "lastUpdate": 1733858531643,
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732626854695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15581.75,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25989.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40958.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31339.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39324.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12355.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12632.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11416.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 366.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.51171875,
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
          "id": "4ec847aa49b05c04b072540a50253139e7e6dfb1",
          "message": "Upgrade cargo-deny action, remove deprecated deny configurations (#1168)\n\nThe `cargo-deny` action we depend on release v2 in August, and with it\nmade breaking changes. Dependabot was unable to merge due to these\nbreaking changes: https://github.com/awslabs/mountpoint-s3/pull/969/\n\nThis change removes the deprecated configurations. `cargo-deny` now\nmarks all of those we configured as denied rather than allowing the\nviolations to be downgraded to warnings or allowed. This impacts us only\nfor 'unmaintained' crates which is fine, if needed we can always create\nan exception entry.\n\n### Does this change impact existing behavior?\n\nThis is a CI change only. We upgrade, removing unused and deprecated\nfields. Unmaintained crates will now fail CI.\n\n### Does this change need a changelog entry?\n\nNo, there is no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T11:16:25Z",
          "tree_id": "1d1cb34260301af398846e1b8de7766a9a4eced7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ec847aa49b05c04b072540a50253139e7e6dfb1"
        },
        "date": 1732627774478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14947.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24919.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38050.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 143.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35425.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 413.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37742.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13982.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11254.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8578.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.78125,
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
          "id": "13687edd9f9ff04b11ac2cb932a0ef5d3033a57b",
          "message": "Add additional Rustdoc to incremental upload module (#1169)\n\nJust adding more Rustdoc to help give pointers and get new readers up to\nspeed.\n\n### Does this change impact existing behavior?\n\nNo, documentation / style change only.\n\n### Does this change need a changelog entry?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T14:18:55Z",
          "tree_id": "af4a94cb2c47da8c87e41f2344452205339d8080",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13687edd9f9ff04b11ac2cb932a0ef5d3033a57b"
        },
        "date": 1732638761063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15421.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25850.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36419.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38864.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39458.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12139.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14267.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9353.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 365.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.89453125,
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
          "id": "896a10bb9c6c70d6928c19d04f4bd4168b289cd8",
          "message": "Fix flaky write_with_sse_kms_key_id_ok test (#1140)\n\nFixes the flakiness of write_with_sse_kms_key_id_ok test, which was\ncaused by not properly unmounting and dropping child.\n\nThis is not a breaking change; no changelog entry required (as this just\nfixes a test).\n\n\nBefore this change, this test fails in ~10 out of 100 runs, after this\nchange it fails 0 times out of 100 runs.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-26T14:37:17Z",
          "tree_id": "0d9a1126b207277215874e303deb01a097575a2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896a10bb9c6c70d6928c19d04f4bd4168b289cd8"
        },
        "date": 1732639853537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14060.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25931.6796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42192.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 187.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35386.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40485.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10850.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11152.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12075.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 391.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.25,
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
          "id": "654d86027265fafc87c5064cfe3a521faf0f11d4",
          "message": "Fix flaky out_of_order_write test (#1170)\n\nThe `out_of_order_write` tests failed to account that in incremental\nupload mode the previously written content of a file could be already\nuploaded when a subsequent `write` fails (as expected in the test). In\nthis case, the upload would occasionally be triggered by a `flush` call\nas a consequence of the test runner process being forked.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-27T14:25:07Z",
          "tree_id": "522ada25736c28165de1b678dc8aabe80745bc1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/654d86027265fafc87c5064cfe3a521faf0f11d4"
        },
        "date": 1732725482149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13716.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26648.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40048.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36070.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41447.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12923.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12878.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9967.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.53515625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b04177565a641e7c5f6be18cbefe6fcdc583732e",
          "message": "Fix Clippy warnings on Rust 1.83 (#1175)\n\nRust 1.83 has been released with new Clippy lints, and it [broke our\nCI](https://github.com/awslabs/mountpoint-s3/actions/runs/12072806349/job/33667591504?pr=1103)\nas we use stable toolchain.\n\nThis PR fixes Clippy warnings on Rust 1.83. Most fixes are done with\n`cargo clippy --fix` and manually checked.\n\n### Does this change impact existing behavior?\n\nNone expected, it just changes the code style.\n\n### Does this change need a changelog entry?\n\nNo, as there is no behavioral change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-28T21:25:18Z",
          "tree_id": "f55ad261e9c05377bf58e76e528730db2b4866bf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04177565a641e7c5f6be18cbefe6fcdc583732e"
        },
        "date": 1732837213240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15829.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28756.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43797.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 161.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39287.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39484.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12870.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13401.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8931.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.60546875,
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
          "id": "54b57c47df1fe38296267495f3820260a6b72775",
          "message": "Merge AppendUploader into Uploader (#1172)\n\nInternal refactor to merge the `AppendUploader` for incremental uploads\ninto the existing `Uploader`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-29T15:02:02Z",
          "tree_id": "948984450c148893795a5b131a77a36e4cff8d4c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54b57c47df1fe38296267495f3820260a6b72775"
        },
        "date": 1732900608549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13461.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28132.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37152.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 162.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 206.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39810.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 414.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35215.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12460.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12828.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11222.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.765625,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733139171308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15922.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25335.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42313.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36515.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36066.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12411.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12879.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10337.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.90625,
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
          "id": "59f7ba56f45c7ff6834b79853c12c2b6fcafa216",
          "message": "Update documentation for supported bucket types (#1176)\n\nUpdate the documentation to enumerate supported bucket types.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T10:04:26Z",
          "tree_id": "344cf5fb725eedee6eeb53ccca9cc4c1dd4f7f5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59f7ba56f45c7ff6834b79853c12c2b6fcafa216"
        },
        "date": 1733141750544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14550.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25109.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37989.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 226.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38887.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37948.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12554.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12286.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10390.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.51171875,
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
          "id": "d14655adf91c734ef21f5dcdeeeed110e13de68a",
          "message": "Release v1.13.0 (#1178)\n\nBump version to 1.13.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T12:00:14Z",
          "tree_id": "cd1c649007a4f066ef26d85a0659a38f30fe85b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d14655adf91c734ef21f5dcdeeeed110e13de68a"
        },
        "date": 1733148727940,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14716.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29751.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40336.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 157.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38315.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40237.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13261.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10073.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11674.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.15625,
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
          "distinct": false,
          "id": "353a74782af91d0ee48424519d434e16bfb2bda9",
          "message": "Update hashbrown 0.15.0 to 0.15.2 (#1184)\n\nUpdate hashbrown 0.15.0 to 0.15.2 to fix\nhttps://rustsec.org/advisories/RUSTSEC-2024-0402\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:24:04Z",
          "tree_id": "89193b05da07694243d0c4aba0de26d085076c2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/353a74782af91d0ee48424519d434e16bfb2bda9"
        },
        "date": 1733333754785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15684.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24008.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41664.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36549.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36680.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13353.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14092.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11668.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.9296875,
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733335372632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15357.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26646.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43188.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 158.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 332.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43643.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38807.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 409.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13226.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12103.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9767.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.51171875,
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
          "id": "7a675cd70380f27849458663f617035784bd7fe9",
          "message": "Update get_object_attributes test to account for default checksum (#1185)\n\nThe [improved support for object integrity\nchecks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums)\nthat is being rolled out in Amazon S3 means that GetObjectAttributes\nreturns a `CRC-64NVME` object checksum even when no checksum was\nspecified when the object was uploaded.\n\nThis change removes the expectation of an empty checksum that was\ncausing a test failure in some regions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T10:54:40Z",
          "tree_id": "ca9e6a33aad4186a5bfe2dd78cc439c603c764cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7a675cd70380f27849458663f617035784bd7fe9"
        },
        "date": 1733404074437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15092.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29001.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40579.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 400.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36282.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33499.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13179.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9638.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12150.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.73828125,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733405320133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15683.30859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23173.3515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40061.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 383.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 175.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38491.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36427.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13036.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12984.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12614.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.984375,
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
          "id": "522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db",
          "message": "Optimise shared cache for single read use cases (#1163)\n\nUse an optional BytesMut to avoid copying data on the first write. \n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-06T10:43:24Z",
          "tree_id": "5d9ba45ba6cee2c55f8b4dcce95deeb0283cc7bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db"
        },
        "date": 1733489717024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13749.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27254.5703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37670.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 225.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39345.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40757.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12091.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12262.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14890.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.01171875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "936f4c31934bd87f7085e9462ad18611dd857aa6",
          "message": "Add errno to fuse_error macro (#1189)\n\nAdded errno to fuse_error macro\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-06T16:46:48Z",
          "tree_id": "f342dd3d76e806d6b44311523d611c02b17736b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/936f4c31934bd87f7085e9462ad18611dd857aa6"
        },
        "date": 1733511614811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13886.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26825.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39468.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35061.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36280.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12686.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12414.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10436.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.296875,
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
          "id": "5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a",
          "message": "Update cargo dependencies and allow-list Unicode-3.0 license (#1193)\n\nRun `cargo update`. In particular, update crate `idna` from version\n`0.5.0` to `1.0.3`, in order to address\n[RUSTSEC-2024-0421](https://rustsec.org/advisories/RUSTSEC-2024-0421).\n\nAlso add \"Unicode-3.0\" to the list of allowed licenses in deny.toml.\nRequired by the new dependency:\n```\nicu_normalizer v1.5.0\n└── idna_adapter v1.2.0\n    └── idna v1.0.3\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T10:21:41Z",
          "tree_id": "5a514b796dae0cf82b75b70d8c6f9dbf2601f511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a"
        },
        "date": 1733834305965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16168.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26662.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40387.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37336.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39837.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12634.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12885.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11338.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.57421875,
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
          "id": "688ec178f5394a174ae0460e7a521a23b4862cc5",
          "message": "Update CRT submodules to latest releases (#1195)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Support full object checksum and crc64nvme.\n([awslabs/aws-c-s3#468](https://github.com/awslabs/aws-c-s3/pull/468))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common be8ed873..fadfef49:\n  > Support relative paths when prebuilding dependencies with CMake (#1174)\n  > Switch CI to use roles (#1173)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 45894ed3..337155f6:\n  > Support full object checksum (#468)\n  > [meta request]: assign shutdown_callback inside critical region (#470)\n  > Switch CI to use roles (#463)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T14:34:31Z",
          "tree_id": "a76eb1fedb360c0d9396cc8f471c8043976b20b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/688ec178f5394a174ae0460e7a521a23b4862cc5"
        },
        "date": 1733849418769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13726.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24200.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37746.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 409.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36587.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37296.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11611.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14460.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11688.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.3046875,
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
          "id": "441a5025600604e8bcf38ef991f200436f5148ff",
          "message": "Allow partial repeat of `readdir` response (#965)\n\n## Description of change\nWhen user application gets interrupted in a `readdir` syscall the\nunderlying chain of `readdir` fuse requests gets reset to an offset\nwhich is considered stale by Mountpoint. In that case Mountpoint still\ncompletes the interrupted `readdir` request, but kernel partially\ndiscards the response. We already cache the last response, so we can use\nit to serve the request which follows the interrupt.\n\nRelevant issues: https://github.com/awslabs/mountpoint-s3/issues/955\n\n## Does this change impact existing behavior?\n\nThis is not a breaking change. Previously an error was returned, now\nit'll be handled properly.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-10T17:03:49Z",
          "tree_id": "6c94fffcbf7a1071bef1b3ce6ba35f0a5bb6a611",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/441a5025600604e8bcf38ef991f200436f5148ff"
        },
        "date": 1733858135319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15923.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27302.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36754.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 166.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 402.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39293.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40967.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12114.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13991.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11306.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.91015625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "caaa11b6543d5d5a5848834df514354c8fed8cb9",
          "message": "Add label to errno in error message for clarity (#1197)\n\nThis change improves the clarity of [fuse_error with\nerrono](https://github.com/awslabs/mountpoint-s3/pull/1189).\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2024-12-10T17:06:26Z",
          "tree_id": "81f8266c7b36539e9f9f593aaca6417786b4525d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caaa11b6543d5d5a5848834df514354c8fed8cb9"
        },
        "date": 1733858531602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14536.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25155,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34643.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 423.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40955.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36748.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11933.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11965.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10073.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.61328125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
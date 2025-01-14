window.BENCHMARK_DATA = {
  "lastUpdate": 1736882204094,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "f09ac0c765ebfce6fa71a01caf3e3534f1d71e59",
          "message": "Remove workaround for macOS builds due to pkg-config issues (#1202)\n\nIn November, macOS runners had an issue with the `pkg-config` package\nand we introduced a workaround:\nhttps://github.com/awslabs/mountpoint-s3/pull/1158/\n\nWe see now that the fix has been released and we should no longer need\nthe workaround: https://github.com/actions/runner-images/issues/10984.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T14:01:36Z",
          "tree_id": "6d86e38850362a6cc19e08263594a8736389406b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f09ac0c765ebfce6fa71a01caf3e3534f1d71e59"
        },
        "date": 1734451548398,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3320.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3310.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3390.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3306.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21484.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3264.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3248.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3429,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3429.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.84375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d5b36e8ff116a3f02be6c37c1112f7793b162430",
          "message": "Improve get_object interface for backpressure (#1200)\n\nCurrently, we support flow-control window for GetObject requests by\nallowing applications to call `GetObjectResponse::increment_read_window`\nbut it is tricky to use because we need to hold onto the stream itself\nin order to control the feedback loop while also consuming the data.\n\nThis change introduces a new trait `ClientBackpressureHandle` for\ncontrolling the read window so that the stream and the flow-control\npaths are decoupled.\n\nApplications can now call `GetObjectResponse::take_backpressure_handle`\nto get a backpressure handle from the response and use this handle to\nextend the read window.\n\n### Does this change impact existing behavior?\n\nYes, there is a breaking change for `mountpoint-s3-client`.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-12-17T14:03:09Z",
          "tree_id": "02f6ff16f04c91b79e790bfc1e5a804f3fe763aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d5b36e8ff116a3f02be6c37c1112f7793b162430"
        },
        "date": 1734452034976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3196.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 322.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3483.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3312.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3136.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20179.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3326.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3351.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3479.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10978.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.1796875,
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
          "id": "631e6e06772ebc111896d29dac751de7ff5e0d1c",
          "message": "Address shadowing divergence in reftest, update semantics doc (#1201)\n\nThis commit addresses a case where MP model and property tests diverge\n(https://github.com/awslabs/mountpoint-s3/pull/1066). The issue was\ncaused by the reference not correctly implementing the shadowing order\ndefined in\n[#4f8cf0b](https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53).\nThis commit fixes the reference model, and clarifies the semantics\narising from concurrent MPUs.\n\nThis is not a breaking change, as it only impacts the reference tests.\n\nThis does not need a Changelog entry, as the change does not impact\nMountpoint's behaviour.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-12-17T15:52:11Z",
          "tree_id": "f2cf3b21c547261f4b81944038c76716c7245d62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631e6e06772ebc111896d29dac751de7ff5e0d1c"
        },
        "date": 1734457930030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3296.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3327.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3275.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3192.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33655.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3334.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3516.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3482.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3706.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.78515625,
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
          "id": "602f371ff81ec89de5e6067fc09b7b7825d783ee",
          "message": "Add support for passing FUSE file descriptors as mount point (#1103)\n\n## Description of change\n\nfuser v0.15.0 added support for creating a `Session` from existing FUSE\nfile descriptor (via `Session::from_fd`). This PR adds this support to\nMountpoint. It allows passing FUSE file descriptor as mount point in the\nform of `/dev/fd/{fd}`.\n\nAn example usage of this feature can be seen with a helper Go script,\n[mounthelper.go](https://github.com/awslabs/mountpoint-s3/blob/86bdefa5147a7edc533a6be5d2724fec74ba91fb/examples/fuse-fd-mount-point/mounthelper.go):\n\n```bash\n$ go build mounthelper.go\n$ sudo /sbin/setcap 'cap_sys_admin=ep' ./mounthelper # `mount` syscall requires `CAP_SYS_ADMIN`, alternatively, `mounthelper` can be run as root\n$ ./mounthelper -mountpoint /tmp/mountpoint -bucket bucketname\nbucket bucketname is mounted at /dev/fd/3\n2024/11/07 17:23:42 Filesystem mounted, waiting for ctrl+c signal to terminate \n\n$ # in a different terminal session\n$ echo \"Hello at `date`\" > /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\nHello at Thu Nov  7 17:32:33 UTC 2024\n$ rm /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\ncat: /tmp/mountpoint/helloworld: No such file or directory\n```\n\nRelevant issues: This PR resurrects a previous PR to add this feature:\nhttps://github.com/awslabs/mountpoint-s3/pull/537\n\n## Does this change impact existing behavior?\n\nShouldn't affect any existing behavior as we had an “is directory?”\ncheck for passed mount points before, and it shouldn't have been\npossible to pass a file descriptor as a mount point prior to this\nchange.\n\n## Does this change need a changelog entry in any of the crates?\n\nUpdated CHANGELOG for `mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T16:56:59Z",
          "tree_id": "1a210e077e88bc40a945a0b79f33981f0461f3fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/602f371ff81ec89de5e6067fc09b7b7825d783ee"
        },
        "date": 1734462062043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3416.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3193.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3539.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33972.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3427.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3236.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3412.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3905.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 241.5,
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
          "id": "3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545",
          "message": "Wait for CreateMPU before returning from put_object (#1192)\n\n`S3CrtClient::put_object` was originally implemented so that it would\ncomplete immediately and return a `PutObjectRequest` implementation. Any\nerror from the S3 request would only be returned on calling `write` or\n`complete` on the `PutObjectRequest`. With this change, we modify\n`put_object` to await for the initial `CreateMultipartUpload` request to\ncomplete and only then either return a `PutObjectRequest` or propagate\nthe error from the request. This is analogous to what done for\n`get_object` in #1171 and addresses an issue where errors were not\npropagated correctly (#1007).\n\nAt the file handle level, however, we still want the `open` operation to\ncomplete quickly, without waiting for `CreateMultipartUpload` to\ncomplete. In order to preserve the previous behavior, `upload::atomic`\nwas adapted to spawn a concurrent task in the background when calling\n`put_object`.\n\n### Does this change impact existing behavior?\n\nYes.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`. No user-visible changes in\n`mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-18T09:46:54Z",
          "tree_id": "9de535c6c2542ad4b28ec6a8fbe5a446d1fb38a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ee6fbc6e837a9c3c434d01dd7ac2a8d4d742545"
        },
        "date": 1734522523076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3316.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3205.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3200.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3058.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28098.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3175.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3179.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3393.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10225.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 240.2109375,
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
          "id": "641f613c0339c1ba6bc9c53a55d37dc358f73b55",
          "message": "Emit shared cache durations in cache hit, miss and error conditions (#1162)\n\nAdds additional duration metrics to the shared cache for cache hits,\nmisses, and errors.\n\nExample metrics:\n```\n2024-12-06T14:11:43.012775Z  INFO mountpoint_s3::metrics: express_data_cache.block_err[reason=invalid_block_offset,type=read]: 189 (n=189)\n2024-12-06T14:11:43.012802Z  INFO mountpoint_s3::metrics: express_data_cache.block_hit: 0 (n=189)\n2024-12-06T14:11:43.012817Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=error]: n=189: min=3 p10=3 p50=4 avg=3.87 p90=5 p99=5 p99.9=6 max=6\n2024-12-06T14:11:43.012831Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=write]: 380 (n=190)\n2024-12-06T14:11:43.012844Z  INFO mountpoint_s3::metrics: express_data_cache.write_duration_us[type=ok]: n=190: min=8256 p10=8511 p50=8895 avg=8882.19 p90=9343 p99=9535 p99.9=9663 max=9663\n```\n\nAnd\n```\n2024-12-06T16:06:14.462602Z  INFO mountpoint_s3::metrics: express_data_cache.block_hit: 98 (n=100)\n2024-12-06T16:06:14.462628Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=miss]: n=2: min=21120 p10=21247 p50=21247 avg=21824.00 p90=22527 p99=22527 p99.9=22527 max=22527\n2024-12-06T16:06:14.462641Z  INFO mountpoint_s3::metrics: express_data_cache.read_duration_us[type=ok]: n=98: min=5888 p10=6015 p50=6271 avg=6378.94 p90=6559 p99=14079 p99.9=14079 max=14079\n2024-12-06T16:06:14.462652Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=read]: 196 (n=98)\n2024-12-06T16:06:14.462663Z  INFO mountpoint_s3::metrics: express_data_cache.total_bytes[type=write]: 4 (n=2)\n2024-12-06T16:06:14.462673Z  INFO mountpoint_s3::metrics: express_data_cache.write_duration_us[type=ok]: n=2: min=9408 p10=9471 p50=9471 avg=19280.00 p90=29183 p99=29183 p99.9=29183 max=29183\n\n```\n\nAdditionally refactors the cache in response to comments in\nhttps://github.com/awslabs/mountpoint-s3/pull/1146\n\n### Does this change impact existing behavior?\n\nYes, the `express_data_cache.read_duration_us` metric now has a type\nassociated with if it was a cache hit or not.\n\n### Does this change need a changelog entry?\n\nNo, changes to metrics don't need changelog entries.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-20T16:56:57Z",
          "tree_id": "8b2b056f261209a201e29e4b9582662287eb74de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/641f613c0339c1ba6bc9c53a55d37dc358f73b55"
        },
        "date": 1734721034260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3266.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3147.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3307.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3191.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28113.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3233.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3352.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3165.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10901.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.8828125,
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
          "id": "4284e644b78d9d35124feb7e3a81adbed1609c91",
          "message": "Store the name of a mounted bucket in block's metadata (#1208)\n\nThe field `x-amz-meta-source-bucket-name` of the cache block was\nintended to store the name of the mounted bucket (source bucket).\nCurrently it stores the name of the cache bucket.\n\n### Does this change impact existing behavior?\n\nYes, we update the version of the block schema. All blocks written with\nprevious versions of Mountpoint won't be accessible (attempts will be\ncache misses).\n\n### Does this change need a changelog entry?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-03T16:12:07Z",
          "tree_id": "fa59588b62b86b10009fa7c474cc3d114651d0b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4284e644b78d9d35124feb7e3a81adbed1609c91"
        },
        "date": 1735928000770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3514.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3447.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3232.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3249.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33627.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3340.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3287.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3379.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3306.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.51171875,
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
          "id": "89873a9331a0d568f8a03056cbc466d2e2ae44b3",
          "message": "Add rustdoc tests to CI (#1210)\n\nThere's a few rustdoc tests in the code base however CI did not\npreviously ensure they passed or even compiled. This change fixes broken\ndoctests and adds a new job to run these in CI.\n\nThis will allow us to write new doctests and be sure that they will be\nvalidated by CI. For example, we may wish to write doctests asserting\nsafety justifications.\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry?\n\nNo, this changes CI only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:12:33Z",
          "tree_id": "0007ac658a6679f74f3b8c75acabaa8ec2c009b6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89873a9331a0d568f8a03056cbc466d2e2ae44b3"
        },
        "date": 1736255524127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3243.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3281.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3294.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3294.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28972.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3261.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 364.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3409.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3497.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 17839.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.72265625,
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
          "id": "91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14",
          "message": "Update CRT `HeadersError` enum to include header name (#1205)\n\nWe recently saw an error in #1199 where \"Header not found\" was emitted,\nbut its really unclear what header was missing.\n\n2024-12-12T18:33:59.379478Z WARN flush{req=1609 ino=2 fh=1 pid=29257\nname=\"testfile_100M.bin\"}: mountpoint_s3::fuse: flush failed: put\nfailed: put request failed: Client error: Internal S3 client error:\nHeader not found\n\nThis change updates the `HeadersError::HeaderNotFound` enum variant to\ncontain a copy of the header name, such that error messages can emit it\nfor debugging purposes.\n\nIt may make more sense to have all the header names we use statically\ndefined somewhere, such that we could include a static reference to the\nheader and avoid allocating for an error message. However, we don't\nexpect there to be any performance regression introduced by this change.\nThis move to static values could be made later.\n\n### Does this change impact existing behavior?\n\nHeader not found and invalid header value errors will now include the\nheader name when printing the error message.\n\nThe enum variants change meaning any code using the enum may be\nimpacted.\n\n### Does this change need a changelog entry?\n\nNot for Mountpoint itself. I have added a change log entry to\n`mountpoint-s3-crt` since it is a breaking API change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T11:44:46Z",
          "tree_id": "472fef60ac68484102c83b0b18130d6e088c230c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91ac294b8cc7a20cf43c4ec3db2f5f29b6ca8f14"
        },
        "date": 1736257475247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3326.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3264.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3494.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 276.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3253.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24364.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 335.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3399.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7440.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3396.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3264.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.09375,
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
          "id": "866ee1c509ca513f0f41122a5f7153bf223ec259",
          "message": "Improve tracing and assertion messages for reftests (#1211)\n\nThis change adds some additional tracing to reftests and makes some\nadjustments to assertion messages to make it clearer why we assert what\nwe assert and would return a better message when things go wrong.\n\nThere are no significant changes, this is primarily readability and\ndebugging improvements.\n\n### Does this change impact existing behavior?\n\nNo change to behavior of Mountpoint or its libraries.\n\n### Does this change need a changelog entry?\n\nNo, no behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-07T15:41:52Z",
          "tree_id": "b2b2f32cf333ef210f081af8c13eb7b7cd121d94",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/866ee1c509ca513f0f41122a5f7153bf223ec259"
        },
        "date": 1736271709602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3365.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3271.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3342.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3349.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 229.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33232.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3444.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3335.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3281.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3473.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.70703125,
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
          "id": "33c20c8ba9a0dd3a024915583ad3fc7b15e3e524",
          "message": "Release v1.13.1 (#1215)\n\nBump version to 1.13.1.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-09T15:21:58Z",
          "tree_id": "3eae5a2340251e6db87cdba353e9d0b852c31b35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33c20c8ba9a0dd3a024915583ad3fc7b15e3e524"
        },
        "date": 1736443494248,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3171.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3301.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 251.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3401.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 246.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41952.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3381.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3164.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 239.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3311.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3349.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.203125,
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
          "id": "8e4b2cacd46e7e0bb48a5a667851f48bb7b031ee",
          "message": "Explicitly set rust version to 1.83 for release (#1217)\n\nExplicitly set rust version to 1.83 for release\n\n### Does this change impact existing behavior?\n\nTemporarily forces Rust version to 1.83 for the 1.13.1 release\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-10T09:43:19Z",
          "tree_id": "1d96b3c938bcafaf77f8c2702332b90c30ec643e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e4b2cacd46e7e0bb48a5a667851f48bb7b031ee"
        },
        "date": 1736509275660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3319.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3276.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3359.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3350.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 236.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35231.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3394.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3429.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3290.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3316.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.93359375,
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
          "id": "3da84c54af23c4adb6e1d357ab247a88192f4de7",
          "message": "Release v1.14.0 (#1218)\n\nBumped version to 1.14.0\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nUpdated\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-01-10T15:02:20Z",
          "tree_id": "ab991458a686a22bff132dabd1ddd170d30093cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3da84c54af23c4adb6e1d357ab247a88192f4de7"
        },
        "date": 1736528494047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3395.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3516.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3487.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3383.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39163.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3299.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3300.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3246.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3450.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.6015625,
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
          "id": "456c7dedee67dc50d10c9a5c4716f2fffaf1d406",
          "message": "Replace lazy_static and once_cell with std library equivalents (#1212)\n\nThe types provided by `lazy_static` and `once_cell` have now been added\nto the standard library as of Rust 1.80.0\n(https://blog.rust-lang.org/2024/07/25/Rust-1.80.0.html#lazycell-and-lazylock),\nand we no longer need to use these crates for this functionality. This\nchange removes those dependencies, and updates our code to use the new\nstandard types.\n\n### Does this change impact existing behavior?\n\nNo change in existing behavior.\n\n### Does this change need a changelog entry?\n\nNo, no behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-10T16:15:10Z",
          "tree_id": "25b4ec7855aeb5e53327b12df77235ea7f8d632d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/456c7dedee67dc50d10c9a5c4716f2fffaf1d406"
        },
        "date": 1736532944307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3334.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3382.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3310.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3462.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28481.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3337.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3441.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3275.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3318.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 217.0703125,
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
          "id": "7d6e8f9d26a451a155edcf8289f93781158fd3bb",
          "message": "Update reftest to always generate a directory at the root of the reference model (#1219)\n\nThis change impacts only Mountpoint's reference tests.\n\nThe current strategy for generating the tree allows for the root to be a\nfile, which is not possible. This leads to us adding special cases to\nthe reftest comparison logic as well as having bizarre test cases which\nare hard to understand.\n\nThis change updates the strategy by ensuring that the root is always a\ndirectory, and simplifies some of the unused proptest layers.\n\n### Does this change impact existing behavior?\n\nNo change to existing Mountpoint behavior. This changes the type of\ntrees generated by our reference tests, removing those that are not\npossible in Mountpoint.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-13T10:13:22Z",
          "tree_id": "63a375fb619d6f7b74727aad6ad70d4584e2c293",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d6e8f9d26a451a155edcf8289f93781158fd3bb"
        },
        "date": 1736770581440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3161.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3330.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3213.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3315.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33721.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3190.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3270.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3365.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14855.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.1015625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "133711035+aws-hans-pistor@users.noreply.github.com",
            "name": "aws-hans-pistor",
            "username": "aws-hans-pistor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab77aaa0b908d76f760d0ea51f6ad4f036ee069d",
          "message": "Allow clients to define custom callbacks to handle telemetry (#1080)\n\n## Description of change\nDifferent users of mountpoint will care about different metrics returned\nfor each requests, so allow them to define their own custom handlers for\nthe on_telemetry callback in addition to the default metrics that\nmountpoint emits.\n\nThis allows users to do things like: \n- emit extended request ids (\"x-amz-id-2\")\n- When some criteria is met, log out additional information\n\nRelevant issues: #1079 \n\n## Does this change impact existing behavior?\n\n\nNo there should be no breaking changes, the only visible change is that\nthere's a new field to the S3ClientConfig which defines the custom\ntelemetry handler\n\n## Does this change need a changelog entry in any of the crates?\n\nJust a note in mountpoint-s3-client letting users know this feature now\nexists\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Hans Pistor <hpistor@amazon.com>\nSigned-off-by: aws-hans-pistor <133711035+aws-hans-pistor@users.noreply.github.com>\nCo-authored-by: Volodkin Vladislav <vladvolodkin@gmail.com>",
          "timestamp": "2025-01-13T10:44:39Z",
          "tree_id": "8371c3ea91f63a67ed87f1e39e6acee811dfc836",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab77aaa0b908d76f760d0ea51f6ad4f036ee069d"
        },
        "date": 1736772424856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3334.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3013.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3141.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3361.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 228.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22013.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3317.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3308.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3381.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3209.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.2734375,
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
          "id": "5807eb108c1527ac8b11f3bc3b5ff30ef00bc0b7",
          "message": "Use ``prop_filter`` to force directory treenode (#1227)\n\nOn my machine, proptest generation has slowed down (now ~40 seconds to\nrun 30 proptests, before ~16 seconds) significantly. This change\n(hopefully) keeps the behaviour identical and restores the speed we\nroughly had before.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-01-14T12:20:54Z",
          "tree_id": "8a43e933f5957b65c5f0b3b01acf857c214af6d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5807eb108c1527ac8b11f3bc3b5ff30ef00bc0b7"
        },
        "date": 1736864508765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3407.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3263.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3210.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 274.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3273.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31724.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3250.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3391.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3302.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3339.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.61328125,
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
          "id": "c189d7d1a48c13acbb856e4b31611232106660a9",
          "message": "Create file-system-benchmarks.rs and update fs_latency_bench.sh accordingly (#1213)\n\nCreation of a benchmarking binary for recreating and measuring the\nlatencies of real-world usage patterns of Mountpoint. This version\nincludes only a small file creation benchmark which measures the\nsequence of the file system operations: lookup, open, write (of one\nbyte), and flush. The latency measurement captures the total duration\nand is averaged multiple iterations to ensure representativeness.\n\nThe benchmarking binary is used in the `fs_latency_bench.sh` script and\nthe the new results are included in the final results of the script,\nultimately being added to the [benchmarking GitHub pages\ndashboard](https://awslabs.github.io/mountpoint-s3/dev/latency_bench/).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2025-01-14T13:36:33Z",
          "tree_id": "7fc207a2608b04b9c88b0796953c93eaba7ffa50",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c189d7d1a48c13acbb856e4b31611232106660a9"
        },
        "date": 1736868937675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3486.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3313.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3215.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3290.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19260.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3420.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3440.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3283.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3268.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.53515625,
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
          "id": "89df75f3ac099568b8632d75abe263623e22d020",
          "message": "Increment version numbers for next release and update guidance (#1229)\n\nSet up new guidance for incrementing version numbers and implement it\nfor Mountpoint and the client crates.\n\nUnder the new guidance, the patch version will be incremented\nimmediately after releasing Mountpoint or publishing the crates, so that\ndevelopment on `main` continues under a new provisional version.\nWhen new features / breaking changes are introduced, the version number\nwill be contextually incremented as the changes are documented in the\nchangelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-14T15:10:01Z",
          "tree_id": "543fb3097f7732075ebbebb096ce117ada5d5055",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89df75f3ac099568b8632d75abe263623e22d020"
        },
        "date": 1736874595254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3475.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3418.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3374.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3284.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21297.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3286.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3351.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3362.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13071.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.5625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iisaev@amazon.co.uk",
            "name": "Isaev Ilya",
            "username": "IsaevIlya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd8b881cbcc24ea7132d94a3d816941d24d1611e",
          "message": "Update CRT submodules to latest releases (#1230)\n\nUpdate CRT submodules to latest releases\n\n<details>\n  <summary>Full CRT changes</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common fadfef4..7a6f5df:\n  > Fix dependency build failure on old cmake versions (#1176)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 337155f..1c80418:\n  > Improve Copy Operation by taking the Source URI (#482)\n  > Auto - Update S3 Ruleset & Partition (#483)\n  > Fix CI for GCC-13 on Ubuntu-18  (#479)\n  > [s3_client]: retry on failed TLS negotiation (#478)\n  > [s3_meta_request]: Retry on ExpiredToken (#472)\n  > Remove Extra Platform Info That Is Not Used (#475)\n  > Respect checksum header over settings from options (#474)\n  > Add full object checksum callback (#473)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ce09f79..1ae8664:\n  > Update Config File Parsing Logic to Parse Services Section (#51)\n  > Switch CI to use Roles (#49)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 5982853..697acc6:\n  > Prepare release v1.42.0 (#2094)\n  > alignas(16) unsupported w/ GCC 7.2 for ARM32 (#2086)\n  > Update ML-KEM's internal header files to use unique include guards (#2078)\n  > Provide FIPS_is_entropy_cpu_jitter() (#2088)\n  > CMake, use 'NOT WIN32' instead of 'UNIX' (#2075)\n  > Only need libunwind for testing (#2093)\n  > Add more logging for SSL_ERROR_SYSCALL errors in bssl_shim.cc (#2079)\n  > Add more test coverage for Ruby/OpenSSL gem (#2085)\n  > aws-lc-rs scripts now use nightly (#2087)\n  > ML-DSA unique names (#2072)\n  > Fix python tests for upstream PR 128036 (#2080)\n  > Remove algorithms from testmodulewrapper that are now used in the real modulewrapper (#2069)\n  > Fix tpm2-tss CI job (#2076)\n  > [EC] ec_nistp P-256 C scalar_mul_{base|public} (#2033)\n  > No PR license statement check on a merge (#2074)\n  > Migrate 1st batch of CI jobs to CodeBuild (#2067)\n  > Ensure PQDSA test suite has length checks on input signatures and public keys (#2062)\n  > Fix CI for aws-lc-rs (#2073)\n  > Upstream merge 2024 12 13 (#2060)\n  > Modified posix builds to enable dilithium by default (#2034)\n  > Extend documentation for basic BN_foo functions (#2066)\n  > Add PKCS7_print_ctx as a no-op (#2064)\n  > Update BoringSSL benchmark to use C++17 (#2063)\n  > Prune hanging instances longer than 2 hours (#2061)\n  > Add fuzz testing for PKCS7_verify (#2051)\n  > [EC] Use s2n-bignum's modular inversion for P-256/384/521 (#2057)\n  > Fuzzing PKCS7 encrypted inputs (#2027)\n  > Add integration script and CI for ruby 3.1 and 3.2 (#1563)\n  > Bring in testing changes from upstream commit 5ee4e95 (#2048)\n  > [EC] P-256/384/521 s2n-bignum scalar multiplication (#2036)\n  > Use older image with gcc-13 for alpine linux ci (#2054)\n  > Just use releasecheck with tcpdump ci (#2055)\n  > Address fips hash using adrp instead of adr to increase reach (#2053)\n  > Prepare release 1.41.1 (#2052)\n  > s2n-bignum update 2024-12-10 (#2050)\n  > Fix RSAZABI test and enable IFMA based RSA on Windows (#1869)\n  > Upstream merge 2024 12 02 (#2030)\n  > Update FIPS v3.0 draft security policy (#2047)\n  > Switch ML-DSA to use AWS-LC SHA3 (#2001)\n  > Added FIPS 204 documentation, cleanse intermediate values (#2017)\n  > Link to NIST website (#2045)\n  > Prevent accidental null dereference (#2046)\n  > Deprecate recently added PKCS7 functions (#2039)\n  > Allow build on Solaris (#2035)\n  > Use SHA256 as default digest for OCSP signing (#2038)\n  > Add blowfish names to EVP_CIPHER API (#2041)\n  > Initialize arrays as arrays (#2042)\n  > Add AWS-LC-FIPS v3.0 policy docs (#2043)\n  > Implement PKCS7_verify, update PKCS7_sign (#1993)\n  > Move PQDSA to FIPS module (#2032)\n  > Only abort when RSA PWCT fail in FIPS (#2020)\n  > Revert \"Trim some redundant Arm feature detection files\" (#1979)\n  > Fix perl handling of paths w/ spaces (#2005)\n  > Upstream merge 2024 11 18 (#2012)\n  > Fix CI issues with ML-DSA (#2031)\n  > strdup is not C99 (#2008)\n  > Add ML-DSA-44 and ML-DSA-87 to PQDSA API (#2009)\n  > Coverity fixes for P173127397 (#2014)\n  > Fix strongSwan CI (#2028)\n  > Ran minimise_corpora.sh (#2024)\n  > Expose BN_set_flags as a no-op (#2021)\n  > Fix segfault in PKCS7 test (#2025)\n  > Update aws-lc-nginx.patch for nginx v1.27.3 (#2023)\n  > Fix python 3.13 patch (#2026)\n  > Allow constructed strings in BER parsing (#2015)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 493b771..2e79e7e:\n  > refactor(bench): remove historical benchmarks (#4940)\n  > fix: pem parsing detection of last cert errors (#4908)\n  > docs: specify s2n_blob growable conditions (#4943)\n  > chore(bindings): move tokio examples to dedicated folder (#4954)\n  > chore: fix GHA for merge-queue (#4973)\n  > chore(binding): release 0.3.8 (#4969)\n  > (chore): Installs Nix in AL2023 Buildspec (#4934)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 5 updates (#4961)\n  > feat(s2n-tls-hyper): Add support for negotiating HTTP/2 (#4924)\n  > tests: allow TLS1.2 with RSA-PSS certs in integ tests (#4949)\n  > ci: update CRT test ubuntu version to ubuntu24 (#4964)\n  > feat(bindings): enable application owned certs (#4937)\n  > ci: batch dependabot updates (#4959)\n  > ci(refactor): deprecate Omnibus (#4953)\n  > build(deps): bump actions/cache from 2.1.4 to 4.1.2 in /.github/workflows (#4928)\n  > build(deps): bump peaceiris/actions-gh-pages from 3 to 4 in /.github/workflows (#4921)\n  > build(deps): bump cross-platform-actions/action from 0.23.0 to 0.26.0 in /.github/workflows (#4951)\n  > build(deps): bump github/codeql-action from 2 to 3 in /.github/workflows (#4917)\n  > ci: add change directory to third-party-src logic (#4950)\n  > feat: TLS1.2 support for RSA-PSS certificates (#4927)\n  > feat: feature probe S2N_LIBCRYPTO_SUPPORTS_ENGINE (#4878)\n  > test(bindings): run unit tests under asan (#4948)\n  > ci(refactor): remove ASAN from Omnibus and GeneralBatch (#4946)\n  > ci(refactor): remove fuzz tests from Omnibus (#4945)\n  > refactor: add a s2n_libcrypto_is_openssl() helper function (#4930)\n  > fix(s2n-tls-hyper): Add proper IPv6 address formatting (#4938)\n  > ci: add openssl-1.0.2-fips to fuzz test (#4942)\n  > ci(refactor): remove Valgrind checks from omnibus and generalBatch (#4913)\n  > fix(bindings): address clippy issues from 1.83 (#4941)\n  > test: pin tests to explicit TLS 1.2/TLS 1.3 policy (#4926)\n  > (chore): Fixes team-label github action (#4935)\n  > chore: add new team member (#4939)\n  > upgrade cmake version to 3.9 (#4933)\n  > ci: add awslc-fips and openssl-1.0.2-fips to valgrind (#4912)\n  > chore(bindings): feature gate network testsa and relax http status assertions (#4907)\n  > chore: Ocsp timeout adjustment (#4866)\n  > build(deps): bump aws-actions/configure-aws-credentials from 4.0.1 to 4.0.2 in /.github/workflows (#4892)\n  > test: expand s2n_record_read testing to both TLS1.3 and TLS1.2 (#4903)\n  > test: pin optional client auth test to a TLS 1.2 policy (#4914)\n  > feat: add alert mappings for certificate errors (#4919)\n  > doc: document generating bindings with prebuilt libs2n (#4872)\n  > ci: Move kTLS test out of GeneralBatch (#4904)\n  > build(deps): bump actions/checkout from 3 to 4 in /.github/workflows (#4888)\n  > test(s2n-tls-hyper): matching on s2n-tls error (#4906)\n  > build(deps): bump nixbuild/nix-quick-install-action from 21 to 29 in /.github/workflows (#4890)\n  > build(deps): bump JulienKode/team-labeler-action from 0.1.1 to 1.3 in /.github/workflows (#4889)\n  > tests: pin tests to a numbered TLS1.2 policy (#4905)\n  > test: remove load system certs functionality for s2n_default_tls13_config (#4897)\n  > doc: add information about s2n-tls software architecture (#4868)\n  > ci: grant dependabot status update permissions (#4898)\n  > ci: fixes for cargo audit (#4895)\n  > test(s2n-tls-hyper): Add localhost http tests (#4838)\n  > test: add rust well-known-endpoint tests (#4884)\n  > chore: bindings release 0.3.7 (#4894)\n  > chore: add a cargo audit action (#4862)\n  > ci: add open fds valgrind check (#4851)\n```\n\n</details>\n\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Ilya Isaev <iisaev@amazon.com>\nCo-authored-by: Ilya Isaev <iisaev@amazon.com>",
          "timestamp": "2025-01-14T17:18:13Z",
          "tree_id": "be69cf749288d2a48af7a7895c984db1122832be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd8b881cbcc24ea7132d94a3d816941d24d1611e"
        },
        "date": 1736882204053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3499.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3380.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3268.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3413.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16450.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3469.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3483.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3236.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3388.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.65625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
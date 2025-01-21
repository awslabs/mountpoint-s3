window.BENCHMARK_DATA = {
  "lastUpdate": 1737465395480,
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
          "id": "631e6e06772ebc111896d29dac751de7ff5e0d1c",
          "message": "Address shadowing divergence in reftest, update semantics doc (#1201)\n\nThis commit addresses a case where MP model and property tests diverge\n(https://github.com/awslabs/mountpoint-s3/pull/1066). The issue was\ncaused by the reference not correctly implementing the shadowing order\ndefined in\n[#4f8cf0b](https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53).\nThis commit fixes the reference model, and clarifies the semantics\narising from concurrent MPUs.\n\nThis is not a breaking change, as it only impacts the reference tests.\n\nThis does not need a Changelog entry, as the change does not impact\nMountpoint's behaviour.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-12-17T15:52:11Z",
          "tree_id": "f2cf3b21c547261f4b81944038c76716c7245d62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631e6e06772ebc111896d29dac751de7ff5e0d1c"
        },
        "date": 1734458746870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16580.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24069.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36280.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40759.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44750.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12380.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8696.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10618.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 417.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.49609375,
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
        "date": 1734462637560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15330.546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27097.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40705.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 210.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39727.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35388.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12327.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12084.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13720.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.17578125,
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
        "date": 1734523315792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13826.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28886.6328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39648.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36362.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40163.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12553.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9158.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12282.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.5234375,
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
        "date": 1735928910946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15165.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25383.90625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42980.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39809.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39132.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13192.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12724.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14077.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.515625,
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
        "date": 1736256350265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14806.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26164.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40259.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36556.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42987.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12394.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13902.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10527.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.40625,
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
        "date": 1736258312231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15740.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29680.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38724.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 205.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42900.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32348.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10856.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11672.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11487.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.18359375,
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
        "date": 1736272592794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12399.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25590.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39230.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39385.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36292.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14074.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12814.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12216.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.875,
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
        "date": 1736444349385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16354.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27619.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42531.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 145.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 217.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32668.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36830.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13207.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13026.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11078.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.3984375,
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
        "date": 1736510177939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14607.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22278.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37729.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 230.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37689.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37430.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12968.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11579.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13622.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.23046875,
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
        "date": 1736529401112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15357.34765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26378.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36862.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 255.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 423.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36950.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36937.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14348.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13461.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12147.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 233.1328125,
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
        "date": 1736533830048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17396.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24810.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39469.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 380.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 194.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38676.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37918.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10856.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9631.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12584.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.375,
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
        "date": 1736795812986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15200.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27370.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38045.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 152.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34007.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38609.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13751.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10267.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11917.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.28125,
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
        "date": 1736865376381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15313.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26872.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38623.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 192.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38154.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37196.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15192.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12507.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10492.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.05078125,
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
        "date": 1736869696804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13248.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26596.6875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38241.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 333.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35970.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35931.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13210.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12890.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11970.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.421875,
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
        "date": 1736875420975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15823.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25636.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36799.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 196.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39041.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38948.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14331.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11702.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11734.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.046875,
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
        "date": 1736883092868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15505.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26743.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37180.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41172.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36361.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9131.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13056.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13254.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.93359375,
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
          "id": "ace3093f899257dfd1b9c074b75883749595429c",
          "message": "Add source uri to headers for COPY request (#1228)\n\nThis changes is to address gap in supporting buckets with dots in the\nname for COPY requests.\nFirst encountered in s3-torch-connector\nhttps://github.com/awslabs/s3-connector-for-pytorch/issues/295\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Ilya Isaev <iisaev@amazon.com>\nSigned-off-by: Isaev Ilya <iisaev@amazon.co.uk>\nCo-authored-by: Ilya Isaev <iisaev@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-16T13:11:30Z",
          "tree_id": "e29fd95b60737addbbdc3eb51e8326e96c17fbfe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace3093f899257dfd1b9c074b75883749595429c"
        },
        "date": 1737041112274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16014.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26344.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39138.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 387.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 152.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35111.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33667.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14199.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13032.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12442.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.5078125,
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
          "id": "ef20898e36247aa358417da999efeb65e2fe195f",
          "message": "Customise benchmark page (#1233)\n\nCurrently the benchmark page\n[loads](https://github.com/awslabs/mountpoint-s3/blob/gh-pages/dev/bench/index.html#L107)\nthe chart.js library from CDN, this PR changes that and adds CSP to\nensure that no other resources are loaded from external locations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-17T11:22:40Z",
          "tree_id": "73f091cf39308090ed070559383a6161c84dc60a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef20898e36247aa358417da999efeb65e2fe195f"
        },
        "date": 1737121007632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12481.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26442.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38273.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40269.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37842.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12151.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11971.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9400.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.4296875,
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
          "id": "228d598ff46830e56f19be1c4d3c85069d6321b3",
          "message": "Publish client crates (#1237)\n\nUpdate changelogs for the client crates to prepare for publication. \n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-20T14:07:56Z",
          "tree_id": "3581193e2c158506008c692ca1658a1118846022",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/228d598ff46830e56f19be1c4d3c85069d6321b3"
        },
        "date": 1737390263440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17155.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23285.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34238.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 171.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33650.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37896.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12638.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10394.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13890.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 336.0078125,
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
          "id": "d199f672d84c899cf68033701469761d156196aa",
          "message": "Increment crates version numbers for next release (#1238)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-21T11:02:46Z",
          "tree_id": "2844ebefdbb9cca96321c6708e6e6066bb78132b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d199f672d84c899cf68033701469761d156196aa"
        },
        "date": 1737465395431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16261.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25971.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39634.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38422.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41136.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12980.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10493.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.30078125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}
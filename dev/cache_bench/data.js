window.BENCHMARK_DATA = {
  "lastUpdate": 1753104157393,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "240108b8ab0386a9f7c6ca2f8de2901ebadd8c00",
          "message": "Remove inodes from file handles  (#1486)\n\nThis PR removes the reference to the inodes from the file handle and\ninstead uses the inode number and full key.\n\n### Does this change impact existing behavior?\n\nNo - is just an internal reorganisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNeeds no Changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T11:06:31Z",
          "tree_id": "45ca3fcb229ab13f55fcedaef59105acffefaaf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/240108b8ab0386a9f7c6ca2f8de2901ebadd8c00"
        },
        "date": 1751029653669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1240.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1983.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.18408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1470.76396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 258.02080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 415.870703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.1900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3416.61904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.7240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1176.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1311.52158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.844921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 879.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.82919921875,
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
          "id": "dc4fc38f76a9533053fe4aa364a0fc3f08b724ba",
          "message": "Avoid copy of data returned by GetObject (#1481)\n\nReduce memory fragmentation and peak usage by avoiding copying data\nreturned by GetObject into newly allocated buffers. This change relies\non the new CRT API integrated in #1430, which allows `S3CrtClient` to\nextend the lifetime of the buffers from the CRT memory pool when they\nare returned by GetObject. Callers of the `get_object` method are now\nresponsible for dropping the returned `Bytes` instances in order for the\nbuffers to be released back to the CRT memory pool.\n\nAt the moment, the memory-limiting strategy used in the prefetcher\ncomponent in Mountpoint does not cope well with the change and may end\nup starving the CRT of available buffers. For this specific use case, we\nintroduced a temporary feature flag in the `mountpoint-s3-client` crate,\n`restore_buffer_copy` which restores the previous behavior, i.e.\nGetObject allocates and returns new buffers with a copy of the object\ncontent. As we rework this aspect of the prefetcher, we will likely\nremove the feature flag.\n\n### Does this change impact existing behavior?\n\nYes. The buffers returned by GetObject will be borrowed from the\ninternal memory pool.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Entry and new version number for the client crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T12:59:16Z",
          "tree_id": "49d96598858412ab5c0e3a038809679ae81b3eb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc4fc38f76a9533053fe4aa364a0fc3f08b724ba"
        },
        "date": 1751036551452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1230.290234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.46376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 257.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 435.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.94697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3371.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4064.3927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1448.312890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.55595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 943.51572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21376953125,
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
          "id": "01316f0631fa65afce93663f513b02e2355a9862",
          "message": "Update CHANGELOGs in preparation of `mountpoint-s3-client` release (#1489)\n\nUpdate the CHANGELOGs in order to release the client crates today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T15:17:30Z",
          "tree_id": "a2eddd8b3e259d4d50c838f03751402713a19bef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/01316f0631fa65afce93663f513b02e2355a9862"
        },
        "date": 1751044592730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.47431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1970.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 770.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.61875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 264.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 453.91533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.6876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.77353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3390.06923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3917.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1039.343359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.331640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 975.5080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.96416015625,
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
          "id": "6a4e5962d94a8b3bba33b4f5eb829073fe44adc5",
          "message": "Fix previous change disabling cache cleanup by default (#1490)\n\nOnly disable disk cache cleanup when the environment variable\n`UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP` is set. Fixes a bug in #1483\nwhich disabled cleanup by default.\n\n### Does this change impact existing behavior?\n\nYes. Reverts to previous default behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:02:45Z",
          "tree_id": "7c22d703da6ba8cc8ec7642fcb278b6869bb4216",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a4e5962d94a8b3bba33b4f5eb829073fe44adc5"
        },
        "date": 1751050983877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1926.07529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 744.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.63369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.19326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.7052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3545.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3996.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1207.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.02783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 786.47919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1024.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1076.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1173.18349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1135.399609375,
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
          "id": "7f46c5141157368cdebd787389c19fb9d2e3d23a",
          "message": "Add trace for block reads in disk data cache (#1491)\n\nAdd a trace for block reads, useful for performance and memory analysis.\n\n### Does this change impact existing behavior?\n\nAdds a new trace log on block reading.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, trace log addition only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T17:02:59Z",
          "tree_id": "551963df2c841e6761c195dc31bccf96d5f636e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f46c5141157368cdebd787389c19fb9d2e3d23a"
        },
        "date": 1751051065288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1220.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1951.7794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.53193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.0603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 425.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.96865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.51181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3356.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.1052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1162.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.99765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 914.25908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 873.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1225.34375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1105.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 984.29931640625,
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
          "id": "6df6fb183d946d2afd78d3b9ea7325964917c55d",
          "message": "Upgrade to Rust 1.88 (#1493)\n\nUpgrade to the new compiler and address new clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:07:36Z",
          "tree_id": "5a0fd226bfb5e2c3fa3e9faf5b6e153b7839886d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6df6fb183d946d2afd78d3b9ea7325964917c55d"
        },
        "date": 1751051193427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1938.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.12744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.94677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 460.18251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3501.14912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3975.42119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1189.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1372.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1307.28251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1284.52275390625,
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
          "id": "63fb942f3749964e974a54a7bf25dbb40d118a24",
          "message": "Update cargo dependencies (#1496)\n\nUpdate cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-30T10:54:48Z",
          "tree_id": "986d85e6fe9a9b12fa1c9b03069a2447ac75f52a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63fb942f3749964e974a54a7bf25dbb40d118a24"
        },
        "date": 1751288066986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1294.63125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1992.12734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.11083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 474.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.5509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.7337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3369.426953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4032.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1455.9357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1312.80791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1420.873828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1328.72412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1106.45009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.25458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1053.11162109375,
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
          "id": "73322655761f1211a4bf0b1921b91b1a395d5062",
          "message": "Remove clippy exception in logging module (#1497)\n\nMinor internal change to the `logging` module in `mountpoint-s3-crt`:\nwhen interfacing with the C functions, expose the logger implementation\nas a direct reference instead of as a reference to a `Box`. Removes an\nexception to the\n[borrowed_box](https://rust-lang.github.io/rust-clippy/master/#borrowed_box)\nclippy warning. Also adds the `unsafe` blocks and `SAFETY` comments that\nwill be required in Rust 2024.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T09:41:23Z",
          "tree_id": "5247db4671da5719496e1612ab043c8b3afde618",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73322655761f1211a4bf0b1921b91b1a395d5062"
        },
        "date": 1751370047579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1286.332421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2032.5958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.0525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.29892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.1646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 392.92958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.8533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.808984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3418.99619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4358.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1324.45361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.64619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1297.27958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.06904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1041.0298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1083.16611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 964.71357421875,
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
          "id": "05e964c915cb1254fcbcbd4f316cda41603b5954",
          "message": "Explicitly edit fstab file when running on Github runners to avoid a failure (#1482)\n\nIn the fstab CI tests, comment out a fstab entry for\n`\\dev/disk/cloud/azure_resource-part1` if we're running in Github\nActions.\n\n### Does this change impact existing behavior?\n\nFixes a failure in Github CI.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-01T13:42:48Z",
          "tree_id": "52581fc3fe4d6383ee758bb8b3f771e646bd97f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05e964c915cb1254fcbcbd4f316cda41603b5954"
        },
        "date": 1751384493288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1292.833203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2011.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 782.39384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.9125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 176.390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3623.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4185.60244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1269.1384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1284.15869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1380.92744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 774.51708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1371.45068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1031.7533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1362.032421875,
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
          "id": "120028c7af9edd00f46c665f1f6e12dbee866d48",
          "message": "Upgrade to Rust 2024 (#1498)\n\nUpgrade crates to [Rust 2024\nEdition](https://doc.rust-lang.org/edition-guide/rust-2024/index.html).\n\nChanges are for the most part:\n* formatting changes applied by `cargo fmt`,\n* adopting the new requirement of `unsafe` blocks (and `SAFETY`\ncomments) in `unsafe` functions.\n\n### Does this change impact existing behavior?\n\nNo user-visible changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased versions of library crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T16:44:32Z",
          "tree_id": "860b7a45fc0e1c3cbdac917bb60b2048bf75186b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/120028c7af9edd00f46c665f1f6e12dbee866d48"
        },
        "date": 1751395576510,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2027.1744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 777.1857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.777734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 603.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.49169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3422.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4177.30615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1424.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1220.69375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1350.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1324.32197265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1071.72412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1383.980078125,
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
          "distinct": false,
          "id": "a1972e4181f6be821bca3d4aa6ac5f601d31d2c7",
          "message": "Clarify that rename is atomic (#1499)\n\nClarified that rename in Express OneZone is atomic.\n\n### Does this change impact existing behavior?\n\nDoc update, no impact on existing behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a small doc update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-02T11:23:54Z",
          "tree_id": "4ad16ed2f8edb96c2f661e21f5ddc873f3a08e0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1972e4181f6be821bca3d4aa6ac5f601d31d2c7"
        },
        "date": 1751462557867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.4279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2026.10703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.94208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.9611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 516.09228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.5845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3358.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4078.69453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1406.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1259.6015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1423.82294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 740.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1169.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1087.7322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1174.4001953125,
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
          "distinct": false,
          "id": "814a43356ac5206a8ab179770427a3ed920ecc87",
          "message": "Simplify lookup + adjust readdir interface (#1488)\n\nThis PR introduces a more generic Lookup structure and uses it as the\nresult type of a lookup.\nAdditionally adjusts the readdir interface.\n\n### Does this change impact existing behavior?\n\nNo, does not impact existing behaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-04T16:30:27Z",
          "tree_id": "634a2a275066bc17527a49a9ffae60f340a52856",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814a43356ac5206a8ab179770427a3ed920ecc87"
        },
        "date": 1751653857381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.49921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2038.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1484.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.1453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 507.56328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.56484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3444.851953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4169.71474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1420.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1258.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 850.89208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 792.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1038.2732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1101.89853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1005.86259765625,
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
          "id": "382a369680a30073b725c206d528a8ebf834e864",
          "message": "Introduce builder pattern for mockclientconfig (#1502)\n\nUse a builder pattern for MockClientConfig.\n\n### Does this change impact existing behavior?\n\nDoes not impact existing behaviour as it only changes the way we build\nthe structure.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-07T07:56:41Z",
          "tree_id": "f8f99873c1e51ad626f9076cb3560b9086b54f2f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/382a369680a30073b725c206d528a8ebf834e864"
        },
        "date": 1751882178505,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2006.9126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.10859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 377.61533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 177.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.71044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3810.13525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4140.29140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1277.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1219.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.9298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 836.0515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1103.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 976.37177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.28662109375,
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751910245026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2047.98037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.089453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.0291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.4611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 556.51669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 214.4265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 236.04755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3423.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4184.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1245.60712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1326.79921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 810.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 847.66298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1171.74716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.18515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 979.11181640625,
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
          "id": "ceaba78a1994d767b1a6b45593a49cee7e351d5d",
          "message": "Introduce Metablock abstraction (#1500)\n\nThis PR introduces the `Metablock` abstraction that is currently only\nimplemented by the `Superblock`.\nWith this abstraction it will be easier to potentially introduce new\nimplementations of this interface for slightly modifed semantics.\n\nDoes not change existing behaviour, as it only introduces an interface.\n\nAdded Changelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-08T08:09:07Z",
          "tree_id": "70b5af778b163213c09f49738ff69b9827c72837",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ceaba78a1994d767b1a6b45593a49cee7e351d5d"
        },
        "date": 1751969191098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1277.11845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1995.96455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 850.06064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.30859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.62822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.30087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.34873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3537.19189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3991.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1301.296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 981.69345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1423.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1039.508984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1068.45302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1217.947265625,
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
          "distinct": false,
          "id": "996816631f6a2e79971653c3030cddb0352b617c",
          "message": "Remove last bucket usage (#1505)\n\nRemoves a left over usage of bucket in `Filesystem`.\n\nNo behaviour change.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-09T13:54:49Z",
          "tree_id": "6e02f8c1307a53a5c1725e339578e5753ed93669",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/996816631f6a2e79971653c3030cddb0352b617c"
        },
        "date": 1752121231288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2028.5236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 819.17919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.22275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 430.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 235.3794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3937.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4398.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1288.26845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1279.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1087.4158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 831.87431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1021.4236328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.23115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1259.760546875,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752166203638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1301.6349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2034.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 795.19013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1502.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.79755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 422.23876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 175.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.16767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3837.08330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4152.4841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1311.7697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1294.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1368.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1172.33115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1282.67265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1076.54892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.1017578125,
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
          "id": "fa6203366755e0009fe9b962cc21393999dc0b4a",
          "message": "Add an option to write benchmarks output to a file (#1510)\n\nThis change allows us to save benchmarks output to a file in json\nformat, making it easier to parse the output.\n\n### Does this change impact existing behavior?\n\nNo, prefetcher and client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, prefetcher and client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-11T12:42:54Z",
          "tree_id": "eb47df7b7b77e96306607aa391c4f2b5ef22c495",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa6203366755e0009fe9b962cc21393999dc0b4a"
        },
        "date": 1752244898528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1303.0826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2084.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.666796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.53095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.09033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 445.96376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.78603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.6837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3464.25029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3969.205859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1282.00029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1271.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1516.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 753.79599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1025.54697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1113.29921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1170.7896484375,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752493222351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.9404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2045.11708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.61474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1498.36396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.6869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.9466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.78671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.1466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3558.98271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4010.7677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.01201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1313.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1369.4197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1120.8421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1359.05673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1015.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.10498046875,
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
          "id": "c3b70d06ce7edcd06373ab47816bdb91a1eba8b1",
          "message": "Bump slackapi/slack-github-action from 2.1.0 to 2.1.1 (#1514)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.0 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack Send v2.1.1</h2>\n<h2>What's Changed</h2>\n<p>This release fixes an issue where substituted variables might've\nbroken valid JSON or YAML parsings when using the\n<code>payload-file-path</code> input option.</p>\n<h3>🐛 Bug fixes</h3>\n<ul>\n<li>fix: parse provided payloads before replacing templated variables in\n<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/449\">slackapi/slack-github-action#449</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>📚 Documentation</h3>\n<ul>\n<li>docs: fix channel mention formatting in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/447\">slackapi/slack-github-action#447</a>\n- Thanks <a\nhref=\"https://github.com/mwbrooks\"><code>@​mwbrooks</code></a>!</li>\n<li>docs: remove links to pages that are no longer referenced in\nmarkdown in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/459\">slackapi/slack-github-action#459</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>🤖 Dependencies</h3>\n<ul>\n<li>build(deps): bump undici from 5.28.5 to 5.29.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/442\">slackapi/slack-github-action#442</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump codecov/codecov-action from 5.4.2 to 5.4.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/443\">slackapi/slack-github-action#443</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.1.0 to 11.5.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/450\">slackapi/slack-github-action#450</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/451\">slackapi/slack-github-action#451</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.3 to\n22.15.29 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/452\">slackapi/slack-github-action#452</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.1 to 7.9.2\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/453\">slackapi/slack-github-action#453</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.2 to 7.9.3\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/462\">slackapi/slack-github-action#462</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump axios from 1.9.0 to 1.10.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/465\">slackapi/slack-github-action#465</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.29 to\n24.0.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/466\">slackapi/slack-github-action#466</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.5.0 to 11.7.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/468\">slackapi/slack-github-action#468</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/469\">slackapi/slack-github-action#469</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump sinon from 20.0.0 to 21.0.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/471\">slackapi/slack-github-action#471</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 24.0.3 to\n24.0.8 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/472\">slackapi/slack-github-action#472</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to\n2.0.6 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/470\">slackapi/slack-github-action#470</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n</ul>\n<h3>🧰 Maintenance</h3>\n<ul>\n<li>ci: pin action hashes and escape variables with minimum permission\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/441\">slackapi/slack-github-action#441</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: create separate release branches for tagged releases on\npublish in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/457\">slackapi/slack-github-action#457</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: clone repository &quot;docs&quot; and configuration when\nsyncing project docs in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/467\">slackapi/slack-github-action#467</a>\n- Thanks <a\nhref=\"https://github.com/lukegalbraithrussell\"><code>@​lukegalbraithrussell</code></a>!</li>\n<li>chore(release): tag version 2.1.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/474\">slackapi/slack-github-action#474</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/91efab103c0de0a537f72a35f6b8cda0ee76bf0a\"><code>91efab1</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b6f4640825302dc9b85bd5ffbe34dfc7a762e404\"><code>b6f4640</code></a>\nchore(release): tag version 2.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/474\">#474</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d3dc61e5d1355f17c060df3210cda7044341866e\"><code>d3dc61e</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to 2.0.6\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/f647c89261423b9045f1ecc4f887c2e62ff6f33d\"><code>f647c89</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.0.3 to 24.0.8\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/472\">#472</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e6fa63302e670473dcb1695b744c15895d615227\"><code>e6fa633</code></a>\nbuild(deps-dev): bump sinon from 20.0.0 to 21.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/471\">#471</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/75b7822f871b0c9c128cae6c27efc029b1f6c1de\"><code>75b7822</code></a>\nbuild(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d7b6150e2a1b713e9aaf24e1559a11dfdf0f2a2d\"><code>d7b6150</code></a>\nbuild(deps-dev): bump mocha from 11.5.0 to 11.7.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/468\">#468</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/a7f5b68f29d9c4eb439f490ee90bda80a34ed6f5\"><code>a7f5b68</code></a>\nbuild: clone repository &quot;docs&quot; and configuration when syncing\nproject docs (#...</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c69deab25713549329730019e9c20a81d09bb4cd\"><code>c69deab</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 22.15.29 to 24.0.3\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/466\">#466</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1d0943cb8c8bca873d09b7b9638f3a94f89d829a\"><code>1d0943c</code></a>\nbuild(deps): bump axios from 1.9.0 to 1.10.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/465\">#465</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.0&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-14T10:14:09Z",
          "tree_id": "13338d52a1265d5b973af2ad086b1277bcb643fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3b70d06ce7edcd06373ab47816bdb91a1eba8b1"
        },
        "date": 1752495155204,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.49853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2026.51298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 826.808203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.90556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.81025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 444.723046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.70322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 278.73818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3674.37802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4083.8875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1461.678515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1222.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 800.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 835.90751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1269.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1029.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1215.46025390625,
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
          "id": "500986305934dc89b9457a6dfad2532476332862",
          "message": "Update the aws-c-s3 submodule to the latest release (#1515)\n\nUpdate the `aws-c-s3` submodule to\n[v0.8.4](https://github.com/awslabs/aws-c-s3/releases/tag/v0.8.4),\npicking up in particular: [ Avoid releasing pending mem ticket future\nwhile holding the lock #533\n](https://github.com/awslabs/aws-c-s3/pull/533).\n\n\nChange details:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1762f839..f8ae82e3:\n  > Avoid releasing pending mem ticket future while holding the lock (#533)\n  > More request metrics (#530)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T22:17:50Z",
          "tree_id": "208673de285dd84fdc1214be27868ca27e9310f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/500986305934dc89b9457a6dfad2532476332862"
        },
        "date": 1752538522737,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1269.3873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2026.7494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 835.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.5953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.1953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.7662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.84560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.43525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3505.21171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3971.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1275.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1450.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1210.95576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 821.81298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.2501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.6712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1303.64033203125,
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
          "id": "4a7b5aeadf08ca443fb027362eb9b5051d425bbb",
          "message": "Update MP client benchmarks to benchmark multiple object downloads  (#1512)\n\nThis change adds new parameters to client benchmarks to download\nmultiple objects and to limit the duration of the test.\nThis change also extends bind parameter to take a comma separated list\nof NICs.\n\n### Does this change impact existing behavior?\n\nNo, client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:34:44Z",
          "tree_id": "7fee70a1c31e9e939412aa597706ade1a0d6dba6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a7b5aeadf08ca443fb027362eb9b5051d425bbb"
        },
        "date": 1752665659425,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1282.80908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2037.16240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 777.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.02392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.06708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.797265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 242.21572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3476.71435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3931.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1371.35751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1265.19365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1453.54638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1063.96826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.30732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1138.06337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1302.162890625,
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
          "id": "68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91",
          "message": "Refactor benchmark.py to extend to prefetcher and other benchmarks (#1507)\n\nThis change extracts fio and mountoint specific code from benchmark.py\nto specific modules to make it cleaner. It also separates the\nconfiguration into sections allowing us to have benchmark specific\nsweeper parameters.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:59:26Z",
          "tree_id": "409aff2851c4ed423fa580e15f7ea647f08445e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91"
        },
        "date": 1752667093979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.55654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2047.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.73515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.74794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.0279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 396.0396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.46298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.99921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3277.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4184.4576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1585.33935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1222.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 842.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1268.48896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 895.0171875,
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
          "id": "e104c3f563a175652d359c6e260d501f1b598339",
          "message": "Update CRT submodules to the latest releases (#1520)\n\nUpdate the CRT submodules to the latest releases, picking up in\nparticular: [Move fulfilling pending future outside the lock and ignore\nalready completed futures\n(#536)](https://github.com/awslabs/aws-c-s3/pull/536).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common aaa2f11e..2b67a658:\n  > Add API for a more compact (no dashes) UUID-to-str (#1212)\n  > Add a python script to help pick up the latest cjson and libcbor (#1211)\n  > Fix byte helpers for mingw 32 bit (#1210)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#1209)\n  > Fix signature of aws_backtrace_log (#1206)\n  > Remove clang-3 from CI (#1203)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 10961a70..bfa03928:\n  > support no_proxy excatly like CURL (#522)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#521)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io ee7925a3..12cb9f9c:\n  > stop packing future variable to avoid tsan data race warnings (#741)\n  > Support s2n security policy for TLS 1.2 and FIPS (#739)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 f8ae82e3..70aacd2d:\n  > Move fulfilling pending future outside the lock and ignore already completed futures (#536)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T07:58:37Z",
          "tree_id": "1216fd13514fc370ee60ae71b89d89644f20c951",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e104c3f563a175652d359c6e260d501f1b598339"
        },
        "date": 1752746423773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.21025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1986.02158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.2703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.16884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.87119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.68193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.75654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 232.4109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3661.9875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4216.63466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1214.1998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1221.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 868.4060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 727.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1048.44541015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1170.15810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1104.68515625,
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
          "id": "1623edb9ffa0e589e777aa69f9fba68396abfef2",
          "message": "Update client changelogs with patch release (#1522)\n\nMerge branch 'release/mountpoint-s3-client-0.17' into `main` to update\nthe CHANGELOGs of the client crates after the patch release.\n\n### Does this change impact existing behavior?\n\nNo, docs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdates the changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T18:32:41Z",
          "tree_id": "7064cda0e2e6fb2cec89f9edebeb8771f88bf8b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1623edb9ffa0e589e777aa69f9fba68396abfef2"
        },
        "date": 1752784387416,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.75244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.777734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.0005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.58310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.59033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 449.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.22958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.5724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3576.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4236.99736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1278.10732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1246.31298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1428.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1620.34033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1345.18046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 968.31953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1168.4349609375,
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
          "id": "c15079dd3cc9f81cf73de99b4e821cbd5b989a75",
          "message": "Minor fixes to client and prefetch benchmarks for consistency (#1518)\n\nThis change makes prefetch and client benchmarks consistent simplifying\nthe automation\n\n### Does this change impact existing behavior?\n\nNo, client and prefetch benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client and prefetch benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T06:51:47Z",
          "tree_id": "c7a06070cd9041ef2f5b716308821763d3f27ae1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c15079dd3cc9f81cf73de99b4e821cbd5b989a75"
        },
        "date": 1752828672207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1283.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2061.9189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1503.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 272.90595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 505.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 173.7078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3620.8392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4068.39794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1425.591015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1223.2251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 953.24208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 973.6578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1209.24599609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.292578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 949.426953125,
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
          "id": "56e653dc44168ba7be3eb475560b15b09a3a1bb1",
          "message": "Extend benchmark.py to run prefetch, crt and client benchmarks. (#1519)\n\nThis change allows us to run benchmarks at different Mountpoint layers\nwith a common input\n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T07:08:09Z",
          "tree_id": "d804a7b7046acfd2ce33f9542548f7e7080cc7f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56e653dc44168ba7be3eb475560b15b09a3a1bb1"
        },
        "date": 1752829657683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1282.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2012.38583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 850.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.83017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 384.60078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.72705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.39462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3509.34609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4117.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1226.10654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1283.75341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 877.4861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1227.601171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.90732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1183.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1157.83291015625,
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
          "id": "c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e",
          "message": "Add support for custom memory pools (#1516)\n\nIntroduces a `MemoryPool` trait in the client crate which allows users\nto provide their own memory pool implementation. This is part of the\nbroader effort to use a unified memory pool in Mountpoint (see draft PR\n#1511).\n\nThis change introduces:\n* The required code to bridge implementations of the new Rust trait to\nthe CRT pool interface.\n* A simple `MemoryPool` implementation to be used in tests.\n* The `pool_tests` feature flags to use the above pool in the client\ntests, replacing the CRT default pool.\n* A new CI workflow to run the client tests with the custom pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nEntry in the client changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T12:57:54Z",
          "tree_id": "141b6452e1be9f7e92c8829dd1e74de58c0a05a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e"
        },
        "date": 1752850672710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1273.99951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2009.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 811.56103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1449.89140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 623.7955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 234.541796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3496.9005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.31923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1368.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1269.02265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1356.57314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.0578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.27353515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1043.72177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1202.14609375,
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
          "id": "aad91bc8d91b684c100bf242adea28a6f8e96a06",
          "message": "Split up client and fs integration tests in CI (#1523)\n\nOrganize the integration test workflows in two groups:\n\n1. Client tests, for the `mountpoint-s3-client` crate (and its\ndependencies: `mountpoint-s3-crt` and `mountpoint-s3-crt-sys`)\n2. FS tests, for `mountpoint-s3-fs` and `mountpoint-s3`\n\nBoth groups define a matrix strategy across runners and S3 buckets.\nAdditionally, the first group adds a dimension for the memory pool\n(currently default and test pool), while the second runs tests with FUSE\n2 and 3.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T14:18:26Z",
          "tree_id": "cc52be98a71f4ffc7512ddef1e359de874382248",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aad91bc8d91b684c100bf242adea28a6f8e96a06"
        },
        "date": 1752858073404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1284.23603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2022.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 823.8810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1487.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.48095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 394.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.0462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3725.07958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4110.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1242.17080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1367.18701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 847.0845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1211.8166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1128.28271484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1117.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1412.54345703125,
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
          "id": "44159b564162126a3374a864010a5151f16b88ac",
          "message": "Introduce UploaderConfig (#1526)\n\nGroup configuration parameters to initialize the `Uploader` component\ninto a new struct. It will make easier to introduce new parameters in\nfuture changes.\n\n### Does this change impact existing behavior?\n\nNo. Internal change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T11:26:42Z",
          "tree_id": "746c13a5a9535ff8544322786cdc9e66e334e720",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44159b564162126a3374a864010a5151f16b88ac"
        },
        "date": 1753104156466,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.42998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2042.29814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1455.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.74541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 388.62158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.16787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 272.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3727.5685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4044.8892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1356.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1325.1158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 899.8287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.8671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1364.39482421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1114.6236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 974.46416015625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
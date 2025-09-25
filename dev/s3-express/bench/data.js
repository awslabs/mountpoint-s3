window.BENCHMARK_DATA = {
  "lastUpdate": 1758803937462,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Express One Zone)": [
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0990c625c346dce35c122bc0c1854b9a5da34373",
          "message": "Add max_memory_target configuration to Mountpoint benchmarks (#1564)\n\nAdd `max_memory_target` configuration and `mem_limiter` Cargo feature\nflag to Mountpoint benchmarks. This is to enable testing mountpoint\nusing Fio benchmarks with a maximum memory limit that the mem_limiter\ncan then react on.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarks change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-08T12:24:47Z",
          "tree_id": "5e9c976ce32257eb6e4c4daab823cea3b4357811",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0990c625c346dce35c122bc0c1854b9a5da34373"
        },
        "date": 1754664026187,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5408.39296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4774.01416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6077.874609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 117.601171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 161.578515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 111.29765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 146.88876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.1560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 37.088671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6437.44453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5369.42041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2145.33232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.9482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1658.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1431.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.8978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1672.99326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.86015625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64593798+15skumar@users.noreply.github.com",
            "name": "15skumar",
            "username": "15skumar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9235f1138490d1b05a158f217cd309678744b7f9",
          "message": "OpenTelemetry integration with metrics (#1550)\n\nThis PR adds an implementation of OpenTelemetry Exporting of metrics\nthrough the OpenTelemetry protocol (OTLP). Changes are: a new\nOtlpMetricsExporter struct which handles exporting metrics to an OTLP\nendpoint, and integration of the OTLP exporter with the existing metrics\nsystem.\n\nAll of this code is under a compile time flag, named `otlp_integration`\n\nTesting:\nI tested the implementation with a test otlp_metrics() in metrics.rs and\nran a docker container running the OpenTelemetry Collector at the\ndefault port\n\ndocker run -d --name otel-collector \\\n  -p 4318:4318 -p 4317:4317 \\\n  -v $(pwd)/collector-config.yaml:/etc/otelcol/config.yaml \\\n  otel/opentelemetry-collector-contrib:latest\n\nOnce I ran the test, I verified that the test metrics can be viewed in\nthe collector logs. (viewed using 'docker logs otel-collector'). Here is\na screenshot of an example of a test metric collected at the endpoint:\n<img width=\"391\" alt=\"Screenshot 2025-06-18 at 15 32 16\"\nsrc=\"https://github.com/user-attachments/assets/aab7e20a-0472-495b-af1d-23e966495e21\"\n/>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Shivangi Kumar <shivyk@amazon.com>\nCo-authored-by: Shivangi Kumar <shivyk@amazon.com>",
          "timestamp": "2025-08-11T16:08:44Z",
          "tree_id": "847951c7445398d2f45372b484538f2c564d6405",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9235f1138490d1b05a158f217cd309678744b7f9"
        },
        "date": 1754936638928,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5268.684765624999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4713.4888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6022.13740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 109.206640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 160.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 103.85380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 146.523046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.41142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.26123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.44482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.70205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6473.95576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5318.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.725390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.764453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1715.871875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.93173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.63994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1578.3052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.7201171875,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "3e4d3cf3a429d9bba903e9521e682147f95d6bb8",
          "message": "Bump `slab` to `0.4.11` (#1568)\n\nBumping `slab` to latest version.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-08-12T13:58:44Z",
          "tree_id": "414df62b6ca77389f85509f034810b684dba1172",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e4d3cf3a429d9bba903e9521e682147f95d6bb8"
        },
        "date": 1755015161797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5338.085644531249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4771.91494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6048.84306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 110.92060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 164.39404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 105.44423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 150.51962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.146875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.62841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 38.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6445.5962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.68154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5342.409765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2044.56591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.8802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1752.390234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1337.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.5154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1655.7123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.02265625,
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
          "id": "302224192b1c97ed68f3f0721f63c3b0753d7f13",
          "message": "Add option to get flamegraph (#1570)\n\nAdds possibility to get flamegraphs for a Mountpoint benchmark run,\nusing `cargo flamegraph`.\n\nNo breaking changes, only adds functionality.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:28:30Z",
          "tree_id": "ae229acd069eba9ca7790b9ee9aa821e3c557123",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/302224192b1c97ed68f3f0721f63c3b0753d7f13"
        },
        "date": 1755103492804,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5325.51015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4750.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6066.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.85146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 157.3708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 102.13720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 143.29111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.94326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.49765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.96767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6637.41416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.22041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5279.4044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.44384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2101.11943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.58857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1835.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.02880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.7638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2135.78125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1219.43974609375,
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
          "id": "9297fa45fc0d0509e509f84cd1766cb3664887c4",
          "message": "Small fix for stdev of singleton list (#1572)\n\nFixes a small bug where the autogrouping script to analyse benchmark\nruns in cmd may fail if a group only has 1 benchmark run, as\n´statistics.stdev´ fails when the list has less than 2 entries. In these\ncases, we will now return `N/A` as stddev.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-13T14:55:36Z",
          "tree_id": "1d7e73fb174489e9abcc9d87916d196b6f2cd1ba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9297fa45fc0d0509e509f84cd1766cb3664887c4"
        },
        "date": 1755105065186,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5291.99697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4812.64345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6004.2763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 118.53759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 162.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.48408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 148.05830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.19794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.2076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.97216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 37.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6543.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.9705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5349.011328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2067.79892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.028515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1813.78994140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1326.64609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.3900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.39521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.59345703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f88972304d227b03273118ccad077bd8abf97eec",
          "message": "Update readdir and readdirplus metrics to use histogram instead of counter (#1254)\n\nUpdate readdir and readdirplus APIs' `fuse.readdir[plus].entries` metric\nto use histogram instead of counter, as it would make more sense to\nrecord statistics on how many entries were returned in a readdir[plus]\nrequest when there was more than one in a given interval, than recording\nthe total readdir[plus] entries per interval.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1236.\n\n### Does this change impact existing behavior?\n\nYes, the `fuse.readdir[plus].entries` metric type has been changed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it is only updating a metric. Since metric names and availability\nare considered unstable, this does not need a changelog entry or version\nchange.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>",
          "timestamp": "2025-08-14T15:59:37Z",
          "tree_id": "da313bd426f5f02de72ad31d2c2d43cdcc9a6d9f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f88972304d227b03273118ccad077bd8abf97eec"
        },
        "date": 1755195130864,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5289.54931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4772.612890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6088.82509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 114.86943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 157.88232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 109.96298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 143.219921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.37373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.467578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.05986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6853.00947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.76591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5481.2330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 509.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1756.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1733.36904296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1372.37705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.0572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1949.90791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1141.6322265625,
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
          "id": "7e865bdd4f52f730e7b7419dfe15561b556d10e4",
          "message": "Enable resource monitoring for all benchmark types (#1573)\n\nAdds the possibility to run resource monitoring for all benchmark types.\nThis is achieved by introducing a `Command` abstraction that is returned\nby the benchmark. Then when the command has just started executing we\nstart the monitoring with it, unless we already have a PID to monitor\n(used for FIO). (Thanks, Q )\n\nAdditionally changes the way we run most cargo commands by seperating\nthe phase where replacing `cargo run` by instead doing `cargo build` and\ngetting the executable path -- otherwise the compilation was part of the\nflamegraph.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-14T16:11:51Z",
          "tree_id": "528d0ef32e9b4084d1def0e4a051f89e3ab8a25a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e865bdd4f52f730e7b7419dfe15561b556d10e4"
        },
        "date": 1755196003579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5294.04365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4727.54365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6037.866894531249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 116.07255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 158.72109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 109.8373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 144.288671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.95830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.908984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.71591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6656.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.20712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5334.192578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.00703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2065.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.4962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1636.12451171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1313.0306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.80576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1486.93740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.06533203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64593798+15skumar@users.noreply.github.com",
            "name": "15skumar",
            "username": "15skumar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "06121bbc9d960ce75260f28a7ab5fa64bc725f69",
          "message": "Add CLI option for publishing OTEL metrics to an endpoint  (#1552)\n\nThis PR adds a CLI argument which enables users to run Mountpoint with\nthe functionality of publishing metrics to a specified endpoint.\n\nNo impact on existing behavior. This CLI option is under a compile time\nflag.\n\nAdded functionality:\nRun Mountpoint with --otlp-endpoint http://localhost:4318 flag to enable\npublishing metrics to port 4318 (otlp port)\nOptionally you can also specify the exporting interval with the\n--otlp-export-interval flag.\n\nTo verify the implementation I ran a docker container running the\nOpenTelemetry Collector at the default port, and ran Mountpoint with the\nnew flag with endpoint specified.\nI verified that the Mountpoint metrics were visible in the collector\nlogs. Here is a screenshot of an example Mountpoint metric collected at\nthe endpoint:\n\n<img width=\"416\" height=\"217\" alt=\"Screenshot 2025-07-31 at 17 39 57\"\nsrc=\"https://github.com/user-attachments/assets/565f6ae9-84dc-49e4-a80a-6383ede913f4\"\n/>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Shivangi Kumar <shivyk@amazon.com>\nCo-authored-by: Shivangi Kumar <shivyk@amazon.com>",
          "timestamp": "2025-08-15T09:14:53Z",
          "tree_id": "534372177b6110805993a9241a8823bbf4d5c650",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06121bbc9d960ce75260f28a7ab5fa64bc725f69"
        },
        "date": 1755257349635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5308.266308593749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4748.699511718751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6037.2005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 116.183984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 159.4193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 109.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 145.147265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.887890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.167578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.11005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.81064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6647.8802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 526.3078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5371.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.374609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1890.67734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1506.28427734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1348.90205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.33798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1820.92861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.651171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4afe550f7fb6337483c8c121954c6b0453a6e0e0",
          "message": "Make benchmark log output colored. (#1577)\n\nThis makes benchmark output easier to read. Using the hydra-colorlog\npackage, which internally uses colorlog and configured Hydra log\nformatters appropriately.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-08-15T10:47:15Z",
          "tree_id": "be1924e68aa71ba52fc65d19126a7d03de8e74d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4afe550f7fb6337483c8c121954c6b0453a6e0e0"
        },
        "date": 1755262730270,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5287.077734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4717.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6126.68974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 118.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 162.7296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.41259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 148.48056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.519140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.353125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.55322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6408.10908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.45654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5358.22509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1929.47353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.29208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1562.18583984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1481.505078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.0333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2070.3958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1213.4603515625,
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
          "id": "73c9de1a2ab6e5130aac9cb6d269037601a67023",
          "message": "🧊Change colour palette for icy flamegraphs ❄️ (#1576)\n\nMakes icycle flamegraphs more icy, by changing to blue colour palette\nfrom the currently used red (aka `hot`) one.\n\nNo changelog entry needed, as only affects benchmarking visualisations.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T12:50:00Z",
          "tree_id": "59f7c4dec7bc319939ed86bd5d3f1d5981704902",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73c9de1a2ab6e5130aac9cb6d269037601a67023"
        },
        "date": 1755270145610,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5240.937109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4713.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6038.451953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 118.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 162.4517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 148.39765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.11298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.237890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.8580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6432.74326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 523.25771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5297.81875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.54833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2077.39189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.55576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1554.905078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1324.79970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.316796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1846.74638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1031.2689453125,
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
          "id": "a21e11eb58696febd23f7285d270abe8e55beddc",
          "message": "Remove left-over parameter (#1578)\n\nRemoves accidentially forgotten parameter, fixing the prefetcher and\nclient benchmarks to be executable again.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-15T15:05:07Z",
          "tree_id": "2746dba63ded33c1f080cedf5c17dd2622df39db",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a21e11eb58696febd23f7285d270abe8e55beddc"
        },
        "date": 1755278327075,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5265.100292968749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4798.29189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5972.965722656249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 117.17451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 161.7845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 111.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 147.71494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.28095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.1546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.8970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.82119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6596.57978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.90556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5327.32548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1852.0787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 129.326953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1475.56630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1389.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.64765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1999.16513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.380078125,
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
          "id": "17e7c3f1b9f04387a8338e92311abfc0b8844090",
          "message": "Remove usage of `capture_output` from crt benchmark (#1582)\n\nRemoves usage of `capture_output` from CRT benchmarks as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-17T07:09:40Z",
          "tree_id": "7bdc95541817689ecf4bd263fbf97f6a69ab06c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17e7c3f1b9f04387a8338e92311abfc0b8844090"
        },
        "date": 1755422618193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5330.699414062499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4721.71123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6031.03994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 118.265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 161.9830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.40546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 148.8986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.9400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.5685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.51826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.9396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6486.20322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.071875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5408.75478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 516.76162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2108.40263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.09140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.08486328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.38115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1413.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1022.1544921875,
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
          "id": "28760197e4ca8e4bac68e9d751442a16088121b4",
          "message": "Disable flamegraphs by default (#1583)\n\nFlamegraphs were accidentially enabled by default.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-18T08:47:40Z",
          "tree_id": "71b178cc330edfaa6c0417640f47fc59be89a15a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28760197e4ca8e4bac68e9d751442a16088121b4"
        },
        "date": 1755515011321,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5313.15791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4778.687109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6157.93232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 111.16650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 162.7560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.02578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 149.39375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.325390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.91015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.4482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6663.42216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5375.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.8353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1676.11357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.2888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1592.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1375.9044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.859765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1527.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1087.89345703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08a09335f59f0fd4700e7841e35ade3ec4a10a6d",
          "message": "Capability to set EventLoopGroup thread count as a configurable CRT client config at runtime (#1579)\n\nAdd capability to set EventLoopGroup thread count as a configurable CRT\nclient config at runtime so we can override the current default with\ndifferent values (for e.g., during performance benchmarking) by setting\nan environment variable `UNSTABLE_CRT_EVENTLOOP_THREADS`.\n\nNote that the capability does not at the moment extend to CRT benchmarks\nrun through benchmark.py, because doing that will involve further\nchanges to etend CRT code and/or CRT benchmark logic.\n\nAlso note that unstable environmental variables are for experimental use\nand may be removed or modified anytime.\n\n### Does this change impact existing behavior?\n\nNo, it only introduces an unstable environment variable based capability\nto _optionally_ configure the thread count for CRT's event loop group.\nIt also introduces a change in the MP/client/prefetcher benchmarks to\nset that value using benchmark.py. The current default behaviours for\nMountpoint and benchmarks stay the same.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo, as it's not a behavioural change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-19T09:20:01Z",
          "tree_id": "ac73cbab9578beb43cd09b0f88e74f7db6e6a48c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/08a09335f59f0fd4700e7841e35ade3ec4a10a6d"
        },
        "date": 1755603191822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5240.98486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4746.929296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6037.26923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 119.9734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 165.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 115.3751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 152.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.44443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.2375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.98427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6332.9908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 527.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5317.80068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.61669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1602.4869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1555.8611328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1502.89296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.00986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1587.7947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.84609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ae15436920de7692be4094c4f831b21d75e2271",
          "message": "Configure the MP client benchmark to use the new paged memory-pool (#1565)\n\nConfigure the MP client benchmark to use the new paged memory-pool\ninstead of the default CRT memory pool. This is to make the client\nbenchmark perform more comparably to prefetcher and other upper layers.\n\nA second commit also fixes the throughput display units and\nmax_target_throughput default value.\n\n(Addressing PR comments) Also removed the `crt_mem_limit` configuration\nfrom benchmarks since we should not be using explicit CRT memory limits\nafter moving to using the paged buffer pool, and rely on configuring\nmemory limit/pressure through the Mountpoint mem_limiter as needed.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Mansi Pandey <mansipandey97@gmail.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2025-08-19T18:16:49Z",
          "tree_id": "765835c56d05f6bb7663e0b6bf76a6e79c4d9b36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ae15436920de7692be4094c4f831b21d75e2271"
        },
        "date": 1755635416693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5258.0681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4822.314648437499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6054.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 117.4068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 161.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 147.234765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.63388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.9509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6295.683203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 521.20634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5264.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.327734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2016.96201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.40556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1624.42470703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1515.6673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.5494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1589.66748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.25595703125,
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
          "id": "c6d0d88b177e93e8a4e7c74f6e645004a7986ca5",
          "message": "Add benchmark sweeper configuration and auto-override for benchmark type (#1554)\n\n### What changed and why?\n\nFixed an issue where benchmark parameters for unselected benchmark types\nwere incorrectly included in multirun sweeps. Previously, all benchmark\nparameters were defined in the common sweeper config, causing irrelevant\nparameters to be swept even when running specific benchmark types.\n\n__Changes:__\n\n- Added auto-detection of `benchmark_type` parameter to automatically\nselect appropriate sweeper config\n- Split benchmark-specific sweep parameters into separate config files\n(`fio.yaml`, `prefetch.yaml`, `client-bp.yaml`, etc.)\n- Moved common parameters to `base.yaml` sweeper config\n- Now only relevant parameters are swept for each benchmark type\n- Added tests that can be run via `uv add pytest --dev` and `uv run\npytest tests/` to test the filtering and combination logic.\n\n__Example__: Running `benchmark_type=fio` now only sweeps FIO-specific\nparameters instead of including unrelated prefetch or\nclient-backpressure parameters.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Existing commands work as before, but now sweep\nonly relevant parameters for the specified benchmark type.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNone needed\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-08-22T09:16:24Z",
          "tree_id": "6f6636e808f39a3e925cf88ba34ce39905ecfe45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6d0d88b177e93e8a4e7c74f6e645004a7986ca5"
        },
        "date": 1755862056355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5243.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4750.267773437499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6106.47529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 115.9845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 157.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 109.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 144.63984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.78251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.57001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.70146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.56162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6636.74248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.76552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5284.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.27763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2054.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1597.893359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1335.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.56728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1633.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.09755859375,
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
          "id": "1215a6df43bc5fe95672463cb16f91b579694ab2",
          "message": "Replace httpmock with wiremock (#1589)\n\nReplaces `httpmock` dependency with `wiremock` that is more often\nupdated.\n\nOnly replaces testing library.\n\nProbably needs a Changelog entry, will add later.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T10:49:18Z",
          "tree_id": "f4f32b234c8ad7dd3ec95068be935f1557bdf367",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1215a6df43bc5fe95672463cb16f91b579694ab2"
        },
        "date": 1756472662265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5278.26552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4791.44931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6129.770117187501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 115.74990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 157.82431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 109.4029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 144.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.6859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.83876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.06796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6764.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.11513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5319.07958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 515.78310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1891.8615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1683.55009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.27255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2010.12177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1101.1228515625,
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
          "id": "028ec721e5134829d2c1c8605ef8f3236d5ddeed",
          "message": "[Benchmarks] Ensure binaries are built with necessary flags for flamegraphing (#1575)\n\nEnsures that frame pointers for C and Rust code are emitted when\nflamegraphing mountpoint.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-29T13:28:20Z",
          "tree_id": "1384d0df12a36373765319f23a69312c3bcd9dcf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/028ec721e5134829d2c1c8605ef8f3236d5ddeed"
        },
        "date": 1756482075930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5305.70458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4762.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5899.94873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 109.49560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 162.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 106.274609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 149.98583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 26.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 40.27236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.98984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.80654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6577.18828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 524.63447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5267.3931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.757421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2135.68857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.820703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1618.96025390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1290.4822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.5818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2063.29169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1174.9009765625,
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
          "id": "61f94b3f80f002b29c98c4089273d1db6eed3438",
          "message": "Bump tracing-subscriber from 0.3.19 to 0.3.20 (#1590)\n\nBumps [tracing-subscriber](https://github.com/tokio-rs/tracing) from\n0.3.19 to 0.3.20.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tracing/releases\">tracing-subscriber's\nreleases</a>.</em></p>\n<blockquote>\n<h2>tracing-subscriber 0.3.20</h2>\n<p><strong>Security Fix</strong>: ANSI Escape Sequence Injection\n(CVE-TBD)</p>\n<h2>Impact</h2>\n<p>Previous versions of tracing-subscriber were vulnerable to ANSI\nescape sequence injection attacks. Untrusted user input containing ANSI\nescape sequences could be injected into terminal output when logged,\npotentially allowing attackers to:</p>\n<ul>\n<li>Manipulate terminal title bars</li>\n<li>Clear screens or modify terminal display</li>\n<li>Potentially mislead users through terminal manipulation</li>\n</ul>\n<p>In isolation, impact is minimal, however security issues have been\nfound in terminal emulators that enabled an attacker to use ANSI escape\nsequences via logs to exploit vulnerabilities in the terminal\nemulator.</p>\n<h2>Solution</h2>\n<p>Version 0.3.20 fixes this vulnerability by escaping ANSI control\ncharacters in when writing events to destinations that may be printed to\nthe terminal.</p>\n<h2>Affected Versions</h2>\n<p>All versions of tracing-subscriber prior to 0.3.20 are affected by\nthis vulnerability.</p>\n<h2>Recommendations</h2>\n<p>Immediate Action Required: We recommend upgrading to\ntracing-subscriber 0.3.20 immediately, especially if your\napplication:</p>\n<ul>\n<li>Logs user-provided input (form data, HTTP headers, query parameters,\netc.)</li>\n<li>Runs in environments where terminal output is displayed to\nusers</li>\n</ul>\n<h2>Migration</h2>\n<p>This is a patch release with no breaking API changes. Simply update\nyour Cargo.toml:</p>\n<pre lang=\"toml\"><code>[dependencies]\ntracing-subscriber = &quot;0.3.20&quot;\n</code></pre>\n<h2>Acknowledgments</h2>\n<p>We would like to thank <a href=\"http://github.com/zefr0x\">zefr0x</a>\nwho responsibly reported the issue at\n<code>security@tokio.rs</code>.</p>\n<p>If you believe you have found a security vulnerability in any\ntokio-rs project, please email us at <code>security@tokio.rs</code>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/4c52ca5266a3920fc5dfeebda2accf15ee7fb278\"><code>4c52ca5</code></a>\nfmt: fix ANSI escape sequence injection vulnerability (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3368\">#3368</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/f71cebe41e4c12735b1d19ca804428d4ff7d905d\"><code>f71cebe</code></a>\nsubscriber: impl Clone for EnvFilter (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3360\">#3360</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/3a1f571102b38bcdca13d59f3c454989d179055d\"><code>3a1f571</code></a>\nFix CI (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3361\">#3361</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e63ef57f3d686abe3727ddd586eb9af73d6715b7\"><code>e63ef57</code></a>\nchore: prepare tracing-attributes 0.1.30 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3316\">#3316</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e59a13b1a7bcdd78b8b5a7cbcf70a0b2cdd76f0\"><code>6e59a13</code></a>\nattributes: fix tracing::instrument regression around shadowing (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3311\">#3311</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/e4df76127538aa8370d7dee32a6f84bbec6bbf10\"><code>e4df761</code></a>\ntracing: update core to 0.1.34 and attributes to 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3305\">#3305</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/643f392ebb73c4fb856f56a78c066c82582dd22c\"><code>643f392</code></a>\nchore: prepare tracing-attributes 0.1.29 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3304\">#3304</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/d08e7a6eea1833810ea527e18ea03b08cd402c9d\"><code>d08e7a6</code></a>\nchore: prepare tracing-core 0.1.34 (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3302\">#3302</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/6e70c571d319a033d5f37c885ccf99aa675a9eac\"><code>6e70c57</code></a>\ntracing-subscriber: count numbers of enters in <code>Timings</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2944\">#2944</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/c01d4fd9def2fb061669a310598095c789ca0a32\"><code>c01d4fd</code></a>\nfix docs and enable CI on <code>main</code> branch (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/3295\">#3295</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tracing/compare/tracing-subscriber-0.3.19...tracing-subscriber-0.3.20\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tracing-subscriber&package-manager=cargo&previous-version=0.3.19&new-version=0.3.20)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:05:39Z",
          "tree_id": "397b9b5bdbefbe0c2e5d65138c3244b0edf92cf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f94b3f80f002b29c98c4089273d1db6eed3438"
        },
        "date": 1756988491446,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5301.39521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4787.812695312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5969.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 115.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 158.27431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 110.33271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 145.853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.84423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.68291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.87685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6636.61962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 518.481640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5337.13447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.25556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2035.07587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1785.919140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1479.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1534.86005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1104.2302734375,
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
          "id": "10a0bf16d634087d35e077a47d77d196cc59ffb0",
          "message": "Bump actions/checkout from 4 to 5 (#1585)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to\n5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2238\">actions/checkout#2238</a></li>\n</ul>\n<h2>⚠️ Minimum Compatible Runner Version</h2>\n<p><strong>v2.327.1</strong><br />\n<a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Release\nNotes</a></p>\n<p>Make sure your runner is updated to this version or newer to use this\nrelease.</p>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5.0.0\">https://github.com/actions/checkout/compare/v4...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n<li>Prepare release v4.3.0 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2237\">actions/checkout#2237</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/motss\"><code>@​motss</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li><a href=\"https://github.com/mouismail\"><code>@​mouismail</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li><a href=\"https://github.com/benwells\"><code>@​benwells</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v4.3.0\">https://github.com/actions/checkout/compare/v4...v4.3.0</a></p>\n<h2>v4.2.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.1...v4.2.2\">https://github.com/actions/checkout/compare/v4.2.1...v4.2.2</a></p>\n<h2>v4.2.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Jcambass\"><code>@​Jcambass</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1919\">actions/checkout#1919</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.0...v4.2.1\">https://github.com/actions/checkout/compare/v4.2.0...v4.2.1</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>V5.0.0</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n</ul>\n<h2>V4.3.0</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<h2>v4.2.2</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<h2>v4.2.1</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>v4.2.0</h2>\n<ul>\n<li>Add Ref and Commit outputs by <a\nhref=\"https://github.com/lucacome\"><code>@​lucacome</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1180\">actions/checkout#1180</a></li>\n<li>Dependency updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>- <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1777\">actions/checkout#1777</a>,\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1872\">actions/checkout#1872</a></li>\n</ul>\n<h2>v4.1.7</h2>\n<ul>\n<li>Bump the minor-npm-dependencies group across 1 directory with 4\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1739\">actions/checkout#1739</a></li>\n<li>Bump actions/checkout from 3 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1697\">actions/checkout#1697</a></li>\n<li>Check out other refs/* by commit by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1774\">actions/checkout#1774</a></li>\n<li>Pin actions/checkout's own workflows to a known, good, stable\nversion. by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1776\">actions/checkout#1776</a></li>\n</ul>\n<h2>v4.1.6</h2>\n<ul>\n<li>Check platform to set archive extension appropriately by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1732\">actions/checkout#1732</a></li>\n</ul>\n<h2>v4.1.5</h2>\n<ul>\n<li>Update NPM dependencies by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1703\">actions/checkout#1703</a></li>\n<li>Bump github/codeql-action from 2 to 3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1694\">actions/checkout#1694</a></li>\n<li>Bump actions/setup-node from 1 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1696\">actions/checkout#1696</a></li>\n<li>Bump actions/upload-artifact from 2 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1695\">actions/checkout#1695</a></li>\n<li>README: Suggest <code>user.email</code> to be\n<code>41898282+github-actions[bot]@users.noreply.github.com</code> by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1707\">actions/checkout#1707</a></li>\n</ul>\n<h2>v4.1.4</h2>\n<ul>\n<li>Disable <code>extensions.worktreeConfig</code> when disabling\n<code>sparse-checkout</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1692\">actions/checkout#1692</a></li>\n<li>Add dependabot config by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1688\">actions/checkout#1688</a></li>\n<li>Bump the minor-actions-dependencies group with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1693\">actions/checkout#1693</a></li>\n<li>Bump word-wrap from 1.2.3 to 1.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1643\">actions/checkout#1643</a></li>\n</ul>\n<h2>v4.1.3</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/08c6903cd8c0fde910a37f88322edcfb5dd907a8\"><code>08c6903</code></a>\nPrepare v5.0.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2238\">#2238</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/9f265659d3bb64ab1440b03b12f4d47a24320917\"><code>9f26565</code></a>\nUpdate actions checkout to use node 24 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2226\">#2226</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-04T10:22:34Z",
          "tree_id": "21d164d6710c35f4ce4211d6cbaed1277161df03",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/10a0bf16d634087d35e077a47d77d196cc59ffb0"
        },
        "date": 1756989488452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5302.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4687.769140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6013.166601562501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 120.9759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 164.54921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 115.7400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 152.42109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.73251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.61708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.54765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 37.872265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6477.121484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 527.171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5239.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 519.88310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1985.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.70146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1484.5080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1410.309765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.106640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1950.24677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 998.57607421875,
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
          "distinct": false,
          "id": "9374ac123f8ed6811be4c9eca1ca72c7d62c3848",
          "message": "Remove locking assertion from unlink (#1596)\n\nDuring unlink we currently have an assumption related to locking and we\nassert it. However, we have seen some cases where the assumption does\nnot hold. The assumption is that, when removing the child node from the\nparent node, the VFS will hold a lock on the parent and child.\n\nThis change removes the assumption and its assertion. Instead, we\ninvalidate the cache in the case where concurrent operations within the\nsame Mountpoint process were made to to the file and its parent.\n\nFor testing, we created scenarios to trigger the existing assertions in\nthe current implementation of unlink:\n1. To trigger the `expect()` statement that follows the removal of the\n`inode`:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n- Workload: create a new file, remove it and (in a separate terminal)\nexecuted a `stat` on the file\n- The `stat` only completes after the deletion completes. The deletion\nthread panics holding a lock and poisons the other threads. Mountpoint\nunmounts.\n2. To trigger the `assert()` statement that handles `inode` number\nmismatch:\n- We added a 45s sleep statement in unlink between deletion from S3 and\nthe deletion from the `superblock`\n     - We added a 45s sleep statement in forget (`fs.rs`)\n- Workload: create a new file, remove it, created a file with the same\nname using `aws cli` and (in a separate terminal) a `stat` on the file\n- Mountpoint behaviour is the same as the first case except the message\nis from the assert.\n\nWith the changes in this PR, Mountpoint does not unmount and the `stat`\nresults are as expected (non existent in the first case and the most\nrecent file in the second case).\n\n### Does this change impact existing behavior?\n\nNo, this is a fix.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, entires were added to the `CHANGELOG.md` files and the version of\nthe `mountpoint-s3-fs` crate was bumped to `0.7.1`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-10T13:58:27Z",
          "tree_id": "7fafe0ce4428c5c53d1e0c4bac7fe4fb6b0c63ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9374ac123f8ed6811be4c9eca1ca72c7d62c3848"
        },
        "date": 1757520812707,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5278.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4769.8919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6102.772363281249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 158.0287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 101.48583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 143.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.2421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.008203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.8677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6656.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.53974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5317.140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1878.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.33486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1572.93125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.08994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.646875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2157.78076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.516796875,
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
          "id": "8862a35451dc573c7f123ceb9d53e72d57553e7d",
          "message": "Change ioctl log level from warn to debug (#1598)\n\nReduces log noise in production environments by changing ioctl function\nlogging from WARN to DEBUG level. This change improves the\nsignal-to-noise ratio in logs without affecting functionality.\n\nDoes this change impact existing behavior? \nNo functional impact - only reduces log noise by moving expected ioctl\nfailures from WARN to DEBUG level.\n\nDoes this change need a changelog entry? Does it require a version\nchange?\nAdded entry to CHANGELOG.md. No version change required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-10T16:32:07Z",
          "tree_id": "8c9045f859b1a6ea3e48303f61230942bc8cabd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8862a35451dc573c7f123ceb9d53e72d57553e7d"
        },
        "date": 1757529877458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5311.3111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4871.7125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6076.95654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 117.46552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 160.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.4529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 146.5177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.820703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.06845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.8888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6580.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.02265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5312.3767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 517.65126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1728.52685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.829296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1899.75224609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1329.255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.10888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1744.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1158.2927734375,
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
          "id": "3e65af8a82499b8ff23ebead21e3003ba770bfbf",
          "message": "Release v1.20.0 (#1604)\n\nUpdate `CHANGELOG.md` files of the `fs` and `client` crates to prepare\nfor release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-15T10:14:45Z",
          "tree_id": "b122f3dbc19ae8f068289386a2cf03f5123b833d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3e65af8a82499b8ff23ebead21e3003ba770bfbf"
        },
        "date": 1757939362567,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5264.72578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4740.56728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6126.977246093749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 114.57119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 156.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 107.915625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.47177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.327734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.94892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 25.83232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.84541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6741.73388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5450.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.9607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1752.61103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.08271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1471.90537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.71904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.46875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1961.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.6666015625,
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
          "id": "d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed",
          "message": "Benchmark sweeper fix (#1608)\n\nUpdate benchmarks to load sweeper parameters only from benchmark\nspecific configuration files\n\nUntil this change, we load configuration parameters from all benchmark\nconfiguration files\nand pick only the relevant benchmark parameters using regex matching.\nWhile this works\nfor most cases, it doesn't work for mountpoint parameters that don't\nhave benchmark-type\nsubstring and those parameters are picked up by all benchmarks. This\nchange will restrict\nsweeping through config parameters defined in the benchmark specific\nfile.\n\nThis also includes a change to replace the unused fuse threads\nconfiguration with the correct parameter that gets used in benchmarks.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, it only updates benchmarks. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T09:57:35Z",
          "tree_id": "65532a76286833542c0cc4e5e1070026199c0b49",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d7257c2dd0e1f04dff8bb55b9b01d9fc9816eeed"
        },
        "date": 1758283860267,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5295.16875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4749.86279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6080.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 118.07041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 161.26826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 112.79248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 148.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.1251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.0353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.06435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6506.8109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 525.428125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5287.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 518.082421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2135.669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.46708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1664.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1415.15166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 128.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2070.24140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.13359375,
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
          "id": "d598453968b10b55c01371f0f594d586fcd8be43",
          "message": "Remove benchmark config parser (#1609)\n\nAs we shifted to using benchmark specific sweeper files, config.yaml\nwill define the defaults for all benchmark parameters and should not\nhave any overrides. So we don't need an additional parser to ensure\nbenchmarks are defaulting to appropriate values.\n\nAfter this change, all the default values except for\nnetwork.maximum_throughput_gbps. The config parser was defaulting to 100\nbut now picks the default resolved by Mountpoint.\n\n### Does this change impact existing behavior?\n\nNo benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-19T12:13:45Z",
          "tree_id": "9bd334a5122cf64ce83e0cef3bcef8f8f2149c25",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d598453968b10b55c01371f0f594d586fcd8be43"
        },
        "date": 1758291940120,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5262.24404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4704.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6060.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.96162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 155.07255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 107.59130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 140.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.53603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.31142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6817.61748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.41279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5349.624609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.07197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1690.58662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.31904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1866.83388671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1475.93193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.15546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1689.86162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.45478515625,
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
          "id": "e6a938add8d3e752bffc1f188c533cfde7a69917",
          "message": "Bump actions/setup-python from 5 to 6 (#1594)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<h3>Breaking Changes</h3>\n<ul>\n<li>Upgrade to node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1164\">actions/setup-python#1164</a></li>\n</ul>\n<p>Make sure your runner is on version v2.327.1 or later to ensure\ncompatibility with this release. <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">See\nRelease Notes</a></p>\n<h3>Enhancements:</h3>\n<ul>\n<li>Add support for <code>pip-version</code> by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1129\">actions/setup-python#1129</a></li>\n<li>Enhance reading from .python-version by <a\nhref=\"https://github.com/krystof-k\"><code>@​krystof-k</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/787\">actions/setup-python#787</a></li>\n<li>Add version parsing from Pipfile by <a\nhref=\"https://github.com/aradkdj\"><code>@​aradkdj</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1067\">actions/setup-python#1067</a></li>\n</ul>\n<h3>Bug fixes:</h3>\n<ul>\n<li>Clarify pythonLocation behaviour for PyPy and GraalPy in environment\nvariables by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1183\">actions/setup-python#1183</a></li>\n<li>Change missing cache directory error to warning by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1182\">actions/setup-python#1182</a></li>\n<li>Add Architecture-Specific PATH Management for Python with --user\nFlag on Windows by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1122\">actions/setup-python#1122</a></li>\n<li>Include python version in PyPy python-version output by <a\nhref=\"https://github.com/cdce8p\"><code>@​cdce8p</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1110\">actions/setup-python#1110</a></li>\n<li>Update docs: clarification on pip authentication with setup-python\nby <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1156\">actions/setup-python#1156</a></li>\n</ul>\n<h3>Dependency updates:</h3>\n<ul>\n<li>Upgrade idna from 2.9 to 3.7 in /<strong>tests</strong>/data by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/843\">actions/setup-python#843</a></li>\n<li>Upgrade form-data to fix critical vulnerabilities <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/182\">#182</a>\n&amp; <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/183\">#183</a>\nby <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1163\">actions/setup-python#1163</a></li>\n<li>Upgrade setuptools to 78.1.1 to fix path traversal vulnerability in\nPackageIndex.download by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1165\">actions/setup-python#1165</a></li>\n<li>Upgrade actions/checkout from 4 to 5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1181\">actions/setup-python#1181</a></li>\n<li>Upgrade <code>@​actions/tool-cache</code> from 2.0.1 to 2.0.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1095\">actions/setup-python#1095</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/krystof-k\"><code>@​krystof-k</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/787\">actions/setup-python#787</a></li>\n<li><a href=\"https://github.com/cdce8p\"><code>@​cdce8p</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1110\">actions/setup-python#1110</a></li>\n<li><a href=\"https://github.com/aradkdj\"><code>@​aradkdj</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1067\">actions/setup-python#1067</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v6.0.0\">https://github.com/actions/setup-python/compare/v5...v6.0.0</a></p>\n<h2>v5.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Workflow updates related to Ubuntu 20.04 by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1065\">actions/setup-python#1065</a></li>\n<li>Fix for Candidate Not Iterable Error by <a\nhref=\"https://github.com/aparnajyothi-y\"><code>@​aparnajyothi-y</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1082\">actions/setup-python#1082</a></li>\n<li>Upgrade semver and <code>@​types/semver</code> by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1091\">actions/setup-python#1091</a></li>\n<li>Upgrade prettier from 2.8.8 to 3.5.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1046\">actions/setup-python#1046</a></li>\n<li>Upgrade ts-jest from 29.1.2 to 29.3.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1081\">actions/setup-python#1081</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v5.6.0\">https://github.com/actions/setup-python/compare/v5...v5.6.0</a></p>\n<h2>v5.5.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements:</h3>\n<ul>\n<li>Support free threaded Python versions like '3.13t' by <a\nhref=\"https://github.com/colesbury\"><code>@​colesbury</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/973\">actions/setup-python#973</a></li>\n<li>Enhance Workflows: Include ubuntu-arm runners, Add e2e Testing for\nfree threaded and Upgrade <code>@​action/cache</code> from 4.0.0 to\n4.0.3 by <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1056\">actions/setup-python#1056</a></li>\n<li>Add support for .tool-versions file in setup-python by <a\nhref=\"https://github.com/mahabaleshwars\"><code>@​mahabaleshwars</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1043\">actions/setup-python#1043</a></li>\n</ul>\n<h3>Bug fixes:</h3>\n<ul>\n<li>Fix architecture for pypy on Linux ARM64 by <a\nhref=\"https://github.com/mayeut\"><code>@​mayeut</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1011\">actions/setup-python#1011</a>\nThis update maps arm64 to aarch64 for Linux ARM64 PyPy\ninstallations.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/e797f83bcb11b83ae66e0230d6156d7c80228e7c\"><code>e797f83</code></a>\nUpgrade to node 24 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1164\">#1164</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3d1e2d2ca0a067f27da6fec484fce7f5256def85\"><code>3d1e2d2</code></a>\nRevert &quot;Enhance cache-dependency-path handling to support files\noutside the w...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/65b071217a8539818fdb8b54561bcbae40380a54\"><code>65b0712</code></a>\nClarify pythonLocation behavior for PyPy and GraalPy in environment\nvariables...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/5b668cf7652160527499ee14ceaff4be9306cb88\"><code>5b668cf</code></a>\nBump actions/checkout from 4 to 5 (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1181\">#1181</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/f62a0e252fe7114e86949abfa6e1e89f85bb38c2\"><code>f62a0e2</code></a>\nChange missing cache directory error to warning (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1182\">#1182</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/9322b3ca74000aeb2c01eb777b646334015ddd72\"><code>9322b3c</code></a>\nUpgrade setuptools to 78.1.1 to fix path traversal vulnerability in\nPackageIn...</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/fbeb884f69f0ac1c0257302f62aa524c2824b649\"><code>fbeb884</code></a>\nBump form-data to fix critical vulnerabilities <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/182\">#182</a>\n&amp; <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/183\">#183</a>\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1163\">#1163</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/03bb6152f4f691b9d64579a1bd791904a083c452\"><code>03bb615</code></a>\nBump idna from 2.9 to 3.7 in /<strong>tests</strong>/data (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/843\">#843</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/36da51d563b70a972897150555bb025096d65565\"><code>36da51d</code></a>\nAdd version parsing from Pipfile (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1067\">#1067</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/3c6f142cc0036d53007e92fa1e327564a4cfb7aa\"><code>3c6f142</code></a>\nupdate documentation (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1156\">#1156</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/setup-python/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/setup-python&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-23T12:37:10Z",
          "tree_id": "7a3a898a2b8ef7d9a15cf008088ab3167f21fd6d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6a938add8d3e752bffc1f188c533cfde7a69917"
        },
        "date": 1758639153372,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5340.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4862.47861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6012.248828125001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 119.27109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 163.8734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 114.03427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 150.7943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 39.55146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 37.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6511.691015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 529.21005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5306.184765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 520.94951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1793.7455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.55908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1473.04873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1305.0494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1850.43876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1084.4060546875,
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
          "id": "be4c8de456427069591f7fa48bf312063a475956",
          "message": "Bump aws-actions/configure-aws-credentials from 4 to 5 (#1595)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.1...v5.0.0\">5.0.0</a>\n(2025-09-03)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\">8c45f6b</a>)</li>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/74b3e27aa80db064b5bb8c04b22fc607e817acf7\">74b3e27</a>)</li>\n<li>support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\">c4be498</a>)</li>\n</ul>\n<h2>v4.3.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2>v4.3.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<p>NOTE: This release tag originally pointed to\n59b441846ad109fa4a1549b73ef4e149c4bfb53b, but a critical bug was\ndiscovered shortly after publishing. We updated this tag to\nd0834ad3a60a024346910e522a81b0002bd37fea to prevent anyone using the\n4.3.0 tag from encountering the bug, and we published 4.3.1 to allow\nworkflows to auto update correctly.</p>\n<h3>Features</h3>\n<ul>\n<li>dependency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 4.3.0 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3f7c2187213bafaa1ea60a850b27082cbf55dda0\">3f7c218</a>)</li>\n</ul>\n<h2>v4.2.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.0...v4.2.1\">4.2.1</a>\n(2025-05-14)</h2>\n<h3>Bug Fixes</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.1...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<h3>Features</h3>\n<ul>\n<li>depenency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 4.3.0 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3f7c2187213bafaa1ea60a850b27082cbf55dda0\">3f7c218</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.0...v4.2.1\">4.2.1</a>\n(2025-05-14)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>ensure explicit inputs take precedence over environment variables\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e56e6c4038915cd5a7238a671fe97f44c98a40b0\">e56e6c4</a>)</li>\n<li>prioritize explicit inputs over environment variables (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/df9c8fed6b364f0d1fb0e6e03a0ec26f1ea4e3fc\">df9c8fe</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.1.0...v4.2.0\">4.2.0</a>\n(2025-05-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>add Expiration field to Outputs (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a4f326760c1c1bf49ab86051c658d6501816b930\">a4f3267</a>)</li>\n<li>Document role-duration-seconds range (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5a0cf0167f837dfa7af7d951ba6a78a38dc2b79e\">5a0cf01</a>)</li>\n<li>support action inputs as environment variables (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1338\">#1338</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2c168adcae62d67531ba83842723c8f30695116a\">2c168ad</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>make sure action builds, also fix dependabot autoapprove (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c401b8a98c5067672f52e0387cdd87d54acfe1fd\">c401b8a</a>)</li>\n<li>role chaning on mulitple runs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1340\">#1340</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9e386419117a9edd458297e4f1822a5df7506a03\">9e38641</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a03048d87541d1d9fcf2ecf528a4a65ba9bd7838\"><code>a03048d</code></a>\nchore(main): release 5.0.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1451\">#1451</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/337f510212e7ae7a530e307fb43b87fa8916feb1\"><code>337f510</code></a>\nchore: Fix markdown link formatting in README.md (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1466\">#1466</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/f001d79eaa8d7e42dd7d421b18870b03c8097135\"><code>f001d79</code></a>\nchore: update README with versioning (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1465\">#1465</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cf5f2acba3ed5c403d00f6f9531a2dc3a5ef8d9a\"><code>cf5f2ac</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b394bdd9f0f03bd410ac15b3ca088d66be1fbd67\"><code>b394bdd</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1463\">#1463</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b632c0b5e467d8b4a89c389b6885a71a90ee4f62\"><code>b632c0b</code></a>\nchore(deps-dev): bump memfs from 4.38.1 to 4.38.2 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1462\">#1462</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/978e44aa3602bf5a26b98e2823c7f87ce78d4af8\"><code>978e44a</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\"><code>c4be498</code></a>\nfeat: support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c5a43c32e1873343614c533eb83ffabbe5bc53bc\"><code>c5a43c3</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\"><code>8c45f6b</code></a>\nfeat: add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-23T12:39:08Z",
          "tree_id": "7a80e80a652a9dace298ead0be70e6ac0ec50e41",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be4c8de456427069591f7fa48bf312063a475956"
        },
        "date": 1758639315187,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5438.95791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4745.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6057.889550781249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 115.4705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 158.310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 109.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 144.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 26.31875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 36.34609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6675.91669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.19990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5318.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 513.96923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1862.26162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 128.31533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1521.13134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.8091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2018.84716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.17109375,
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
          "id": "175c3bafbb8d3e927e0871d7d170d67f02b868f6",
          "message": "Option to export OTLP metrics during benchmarks (#1610)\n\nAdds a flag to export OTLP metrics during benchmarks\n\nWith the change, we can test the impact of metrics on Mountpoint\nthroughput. This change also includes some refactoring that was missed\nwhile removing benchmark config parsing logic in #1609.\n\n### Does this change impact existing behavior?\n\nNo, benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-24T14:01:48Z",
          "tree_id": "bda3f0062a32bcd8b48fae7d8a1d77fff4d324e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/175c3bafbb8d3e927e0871d7d170d67f02b868f6"
        },
        "date": 1758730656102,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5291.84619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4795.1556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6020.75634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.32939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 156.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.78134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 141.81591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.39677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.19052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6609.02197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 522.59541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5358.05771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 514.21845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1617.22138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1665.97978515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1262.48134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.48349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1996.2404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1032.30869140625,
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
          "id": "fdec4dbfe2610cd1b97428c61b88773aa86e3bf9",
          "message": "Change default logging level from WARN to INFO. (#1605)\n\nFixes #1244\n- Purpose: Improve visibility of important operational messages (mount\nsuccess, location) without requiring --debug flag\n- Users can now see essential mount information by default\n### What changed and why?\n1. Default Logging Level:\n- Changed default logging level from WARN to INFO in cli.rs\n- Added test_info_level_logging to verify the change\n- Default INFO logs now show important operational messages:\nINFO ThreadId(01) mountpoint_s3::cli: target network throughput 10 Gbps\nINFO ThreadId(01) fuser::session: Mounting /tmp/test-mount-new\nINFO ThreadId(01) mountpoint_s3::run: successfully mounted bucket \n\n2. Metrics Logging:\n- Metrics now show when either --log-metrics is set OR debug level is\nenabled\n- Explicitly turn off metrics when neither condition is met\n\n3. Log Level Optimization:\n- Changed setattr logging from INFO to DEBUG level as it's\nimplementation detail is more appropriate for debugging rather than\nregular operation\n\n### Does this change impact existing behavior?\n- All existing log levels (--debug, --no-log) continue to work as before\n- Only changes the default level to show more information\n- Setattr logging moved to DEBUG level to reduce noise\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n- Changelog entries added:\n* mountpoint-s3: Change default logging level from WARN to INFO to\nimprove visibility of important operational messages\n* mountpoint-s3-fs: Downgrade setattr logging level from INFO to DEBUG\nto reduce log noise\n- Version changes:\n  * mountpoint-s3: v1.20.0 -> v1.21.0 (for default logging level change)\n  * mountpoint-s3-fs: v0.7.1 -> v0.7.2 (for setattr logging change)\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>",
          "timestamp": "2025-09-24T14:13:18Z",
          "tree_id": "1bd8347fd588fe82d13460d23d83beb8133fb5ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdec4dbfe2610cd1b97428c61b88773aa86e3bf9"
        },
        "date": 1758731076277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5270.69736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4707.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6029.2328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 118.55478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 162.36474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 113.0287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 149.2111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 28.10927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 38.9966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 27.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 37.27333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6467.12978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 530.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5381.386328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 522.06982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2085.5642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.14033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1446.59638671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1516.62578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 127.9578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2050.28681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1188.548046875,
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
          "distinct": false,
          "id": "d02c7df053b52dc26a23534fdf8534b74e11dec9",
          "message": "Add checking step to PUBLISHING_CRATES.md (#1607)\n\nWe currently don't have a step for checking the newly published\nversions. This change adds links to `crates.io` to facilitate this.\n\n### Does this change impact existing behavior?\n\nNo, only change to documentation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only change to documentation.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-09-25T10:26:28Z",
          "tree_id": "733e8027290feb2699337893d9da209f89279e08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d02c7df053b52dc26a23534fdf8534b74e11dec9"
        },
        "date": 1758803936356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5326.124609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4796.1291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 6064.649316406249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 107.55966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 156.42275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 142.08662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 27.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 37.69697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 35.47119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6662.46513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.64375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5346.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 511.15341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2075.3736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.4142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1503.94794921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.7267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1743.52138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1027.7603515625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
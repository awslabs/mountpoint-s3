window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
        "date": 1754936783822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4902.12470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4454.52529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5895.18466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.41923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.35625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.62109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.246484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.84326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6239.7712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.187890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5091.075,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.526953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1676.2611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.45419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1407.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1438.47373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.48701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1891.41279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.379296875,
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
        "date": 1755015305334,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5011.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4403.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5578.90068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.047265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.53310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.81044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.43671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.82021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.8095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6059.0767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4939.11416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 227.569921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1779.76845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1344.4595703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.9943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.64462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1431.04375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1070.6939453125,
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
        "date": 1755103598636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4992.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4404.15634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5756.35927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.03974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.74375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.3625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.54384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.91220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.75166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6237.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.37041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5061.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1135.33154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.51474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1533.5607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1237.10498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.77568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1839.25830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.18154296875,
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
        "date": 1755105295299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5035.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4385.96728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5756.20673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.6537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.96728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.34755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.61640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5852.858203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.40087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4936.80361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1731.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1474.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1270.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.67880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1613.3302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 953.20439453125,
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
        "date": 1755195374452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4946.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4442.80244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5700.899804687499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.17607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.73359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.78994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.901171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.984765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.239453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5914.59150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5067.551171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.10234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1385.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.094921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1386.46162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1184.95048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.97900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1513.71953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.79072265625,
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
        "date": 1755196182423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4888.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4544.85205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5766.011132812499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.832421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.49423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.65068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.930859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.139453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.995703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6113.3240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.44169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5073.51591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.70537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1946.24248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.753125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.41318359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1361.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.09462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1372.58994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.0427734375,
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
        "date": 1755257560012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4950.185839843751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4499.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5827.209667968749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.57841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.5525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.34365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.42001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6316.77607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.05634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5127.11962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.18994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1661.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.98759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1744.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1379.22861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.41220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1795.9146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1086.92900390625,
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
        "date": 1755262869420,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5014.4716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4616.17060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5830.2169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.17705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.38369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.43916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.36953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.13232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.121484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6218.85322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.83046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5111.259375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 232.197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1727.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.74892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1445.4796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1275.02587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.10361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1379.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 976.4626953125,
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
        "date": 1755270295679,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4953.4513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4479.90283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5878.79609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.38359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.73330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.30068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.46396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.02763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.378515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6212.11650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5147.54140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1730.67265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.78603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1480.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.98232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.91767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1680.03330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1073.5154296875,
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
        "date": 1755278542629,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4962.2494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4508.7533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5812.9048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.20634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.2888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.60029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.70400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.83076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6153.53544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.5169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5067.77587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.12548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1692.55810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.07255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1462.59658203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.05888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.6765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1598.34951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.09970703125,
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
        "date": 1755422670927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4943.2435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4512.69970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5916.15654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.3982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.63984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.82080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.36259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.75244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.22177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.20888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6366.67705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5281.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.98134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2049.41865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.0548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.31982421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1279.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.28662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1877.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.32431640625,
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
        "date": 1755515217397,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.69892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4588.08447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5784.988574218751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.56455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.16767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.49853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.74189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6181.1353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.94951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5023.6671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.37880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1937.98349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.358984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1433.35166015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1282.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.6615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1823.00595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.66337890625,
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
        "date": 1755603299241,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4971.11181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4576.31181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5760.3609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.1279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.76162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.03544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6365.87998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5188.54873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.34189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1882.5583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1633.05927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1351.79951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.68447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1933.315234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.6591796875,
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
        "date": 1755635617603,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4955.44384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4432.058203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5712.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.996875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.73779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.92900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.948828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5954.69951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4992.01728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.35283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1506.76767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1495.8697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1404.81474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1845.39423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.4943359375,
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
        "date": 1755862193742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4964.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4624.315625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5851.35498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.30546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.58916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.97890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.97900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.32890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.99326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6261.82138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.38623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4872.178125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.96455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1690.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1624.37431640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1393.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.6791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1429.27041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1122.70517578125,
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
        "date": 1756472735927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4988.1400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4649.44599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5820.717675781249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.851171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.659375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.653125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.83134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6240.5017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.83525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5205.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.7419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1981.70439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.05751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1453.72685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1215.8,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1534.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.37431640625,
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
        "date": 1756482195911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4964.0296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4491.00576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5704.40830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.55146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.93115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.22001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6348.0294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.7130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5170.94482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1668.02392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1509.42841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1331.7830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1788.737890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 974.35712890625,
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
        "date": 1756988562015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5026.20400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4573.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5793.07900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.63798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.61865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.90712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.76123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.023046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6364.19912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.5412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5165.26904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.2955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.233203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1458.21669921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1296.98720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.19208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1764.23515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1138.12626953125,
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
        "date": 1756989570005,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4930.72587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4444.525,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5880.67734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.01630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.64970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6320.55927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.231640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5071.714453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.38291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2053.93125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1480.26162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.93427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.24501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1729.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 934.5171875,
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
        "date": 1757520851357,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4971.3171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4545.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5745.35654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.769921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.05869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.63896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.73828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.90849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.64638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.183984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6145.59873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.98544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5097.06083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.1609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1788.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.25498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1422.3244140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1451.0046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.05439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1788.0365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.78212890625,
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
        "date": 1757529928942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4947.3205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4462.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5688.199023437501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.59130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.17890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.180859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.4431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.64345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.937890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.716015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.65224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6318.80869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.68974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5198.14033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.47568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1559.77236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.26240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1483.16962890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1252.628515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.77578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1396.837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.1373046875,
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
        "date": 1757939534842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5004.116796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4559.84462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5910.4205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.85458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.83310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.27197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.77275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.94443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.63232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6259.9275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.67607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5183.21982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.66640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1955.05927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.8318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1674.1861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1318.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.2986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1878.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.81005859375,
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
        "date": 1758283967155,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5002.907910156249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4558.664453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5749.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.2048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.9916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.17314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.86796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.19306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.68017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6289.86455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.07470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5118.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.24033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1943.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.12646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1475.4509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1437.401953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1857.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1009.6494140625,
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
        "date": 1758292085016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5021.321875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4544.55556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5828.79951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.286328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.85673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.80810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.15244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6164.04697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.702734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5136.47333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.36416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1728.74013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.75869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1423.48203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.95166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.57265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1411.3212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 972.55546875,
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
        "date": 1758639216643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4953.458203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4600.54443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5872.39931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.44140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.516796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.64560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.01259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.65126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.61865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6219.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.223828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5135.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1985.83056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.8685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1254.4474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1192.6521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.11123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1835.3392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1096.7884765625,
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
        "date": 1758639487715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4901.11259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4601.01416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5894.87978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.85888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.45361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.74140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.61630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.680078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.92666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.74921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.41494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6217.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.3345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5138.32568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.6544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1862.92109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1462.67314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.3529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1876.77939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.176171875,
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
        "date": 1758730767135,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4982.3265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4507.0470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5842.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.6255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.79306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.64990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.70458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.77939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.03984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.694921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.47998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6270.7830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.67470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5133.5408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.02109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1941.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.49072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1524.76669921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1343.51015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.946484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1688.60849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1009.48232421875,
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
        "date": 1758731197427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4895.82939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4508.91318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5868.7482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.98505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.772265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6263.9576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4805.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.46376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1846.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.3966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1469.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1191.35,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1645.6537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.6724609375,
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
        "date": 1758804123465,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5033.12607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4536.07412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5797.3580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.9693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.60478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.20478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6245.27958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5159.78544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.76904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1695.984765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.1560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1629.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1435.2400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1863.606640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1121.4826171875,
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
          "id": "5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1",
          "message": "Adding Unicode 3 to Accepted Licenses (#1617)\n\n**What changed and why?**\nAdded \"Unicode-3.0\" to the licensing whitelist.\nIt is already included in the /mountpoint-s3/deny.toml\nhttps://github.com/awslabs/mountpoint-s3/blob/main/deny.toml allowlist,\nbut it wasn't added here aswell. This fixes that.\n\nThe license's absense from the attribution.toml also means the command\nto generate our third party dependancies fails.\n\n```rust\ncargo about generate --config package/attribution.toml --output-file THIRD_PARTY_LICENSES package/attribution.hbs\nerror: failed to satisfy license requirements\n   ┌─ /home/user/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-ident-1.0.18/Cargo.toml:36:36\n   │\n36 │ license = \"(MIT OR Apache-2.0) AND Unicode-3.0\"\n   │                                    -----------\n\n2025-09-25 12:20:14.780429812 +00:00:00 [ERROR] encountered 1 errors resolving licenses, unable to generate output\n\n```\nSo this fix addresses a need for us to be able to generate these\nlicenses at will, outside of the release process.\n\n### Does this change impact existing behaviour?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, very minor bug fix\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-25T15:55:59Z",
          "tree_id": "f2e242baa82d8b202b17d8006036db286f297396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1"
        },
        "date": 1758823899638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5056.20068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4480.42099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5692.31826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.709375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.276171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.67607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.55859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5984.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.06865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5143.58662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.68916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1903.11572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.65,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1374.6287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1337.46806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1445.5416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 971.15751953125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1758823900658,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}
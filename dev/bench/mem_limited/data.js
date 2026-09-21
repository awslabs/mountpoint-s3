window.BENCHMARK_DATA = {
  "lastUpdate": 1789994116337,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Standard, Memory-Limited)": [
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfa381260e524d8ab5893c74a7d24df80c44f0e1",
          "message": "fix: update instance throughput table (#1895)\n\n### What changed and why?\n\nRe-generates the stale (2025-04-17) EC2 instance throughput table which\nmaps instance types to network throughput, for auto-configuring\nMountpoint target throughput through\n[`autoconfigure::get_maximum_network_throughput`](https://github.com/awslabs/mountpoint-s3/blob/4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b/mountpoint-s3-fs/examples/mount_from_config.rs#L220).\n\nChanges:\n- Regenerated the table via `network_performance.sh`\n- For instances no longer offered: removed entries after checking no\nregions offer them, and removed dl1.24xlarge test case\n- Corrected `trn2.48xlarge` override throughput (`32000` → `3200`); also\nupdated test case for it.\n- Fixed multi-NIC overrides silently failing on bash <4.3 (e.g. `4x 100`\n→ `4100`) and added bash version guard.\n- Multi-NIC instances now emit `None` + a warning instead of a wrong\nnumber, if not in THROUGHPUT_OVERRIDE table\n\n### Does this change impact existing behavior?\n\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. (Just data refresh and script bug fixes).\n\n### Possible follow-ups\n\n- A GitHub Actions workflow to regenerate this table more often (at\nleast once a year)?\n- Use multiplication instead of override table for multi-NIC entries?\n- Query more regions than the 3 in the script?\n\n---\n\n### Additional Context / Testing\n\n#### Testing\n\nRandomly selected instance types and used aws ec2\ndescribe-isntance-types to check for accuracy, and also used\nhttps://instances.vantage.sh/ to quick check accuracy for a small number\nof instance types.\n\n#### Some instance types are no longer offered\n\n12 instances are not offered anymore - verified gone in all regions (not\njust the 3 we query): `dl1.24xlarge`, `f1.2xlarge`, `f1.4xlarge`,\n`f1.16xlarge`, `i3.metal`, `p3.2xlarge`, `p3.8xlarge`, `p3.16xlarge`,\n`u-9tb1.112xlarge`, `u-12tb1.112xlarge`, `u-18tb1.112xlarge`,\n`u-24tb1.112xlarge`.\n\n<details>\n<summary>Verify all instances gone in all regions (click to\nexpand)</summary>\n\n```bash\nfor r in $(aws ec2 describe-regions --region us-east-1 --query \"Regions[].RegionName\" --output text); do\n  aws ec2 describe-instance-type-offerings --region \"$r\" \\\n    --filters \"Name=instance-type,Values=dl1.24xlarge,f1.2xlarge,f1.4xlarge,f1.16xlarge,i3.metal,p3.2xlarge,p3.8xlarge,p3.16xlarge,u-9tb1.112xlarge,u-12tb1.112xlarge,u-18tb1.112xlarge,u-24tb1.112xlarge\" \\\n    --query \"InstanceTypeOfferings[].[InstanceType]\" --output text | sed \"s/^/$r /\"\ndone\n# No output\n```\n</details>\n\n\n\n#### [RESOLVED] g7.8xlarge / g7.4xlarge network performance number is\nunstable\n\n> RESOLVED - they updated both g7.4xlarge and g7.8xlarge to \"Up to 100\nGigabit\" and \"100 Gigabit\" respectively, so I've updated the table\nagain. They seemed to have changed during my commits / tests.\n\n<details>\n<summary>Check those numbers are unstable (click to expand)</summary>\n\n```bash\nfor i in $(seq 1 10); do\n  aws ec2 describe-instance-types --region us-east-1 --instance-types g7.8xlarge \\\n    --query \"InstanceTypes[0].NetworkInfo.NetworkPerformance\" --output text\ndone | sort | uniq -c\n\n# output: (80 appears more usually)\n1 100 Gigabit\n9 80 Gigabit\n\nfor i in $(seq 1 10); do\n  aws ec2 describe-instance-types --region us-east-1 --instance-types g7.4xlarge \\\n    --query \"InstanceTypes[0].NetworkInfo.NetworkPerformance\" --output text\ndone | sort | uniq -c\n\n# output:\n9 60 Gigabit\n1 Up to 100 Gigabit\n```\n\n</details>\n\nAdditional ref:\n- [`ec2-instance-selector`\ncomparators.go](https://github.com/aws/amazon-ec2-instance-selector/blob/71c31e5a8949f35ea0683ca1c27db9de00ae4fc3/pkg/selector/comparators.go#L302)\nthroughput number parser\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-08-13T14:57:04Z",
          "tree_id": "dbc1c4296f21bc88fe8f6b02b51d117cf723ea90",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfa381260e524d8ab5893c74a7d24df80c44f0e1"
        },
        "date": 1786641461635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4020.9324218750003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2109.165625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1298.3981445312502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.92138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.51904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 952.67333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 909.862890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.510546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 571.99013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 534.83740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 529.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1653.07255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.13134765625,
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
          "id": "e2fd6e1d39ad74e49f0aa6b984d4786bb9560080",
          "message": "Bump h2 to 0.4.16 (#1932)\n\nBump h2 to 0.4.16 from 0.4.15 to address advisory (RUSTSEC-2026-0258)\nfrom cargo deny check.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-18T13:49:10Z",
          "tree_id": "149668986d645dec7ee80e4d8073a4badbae161b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e2fd6e1d39ad74e49f0aa6b984d4786bb9560080"
        },
        "date": 1787093827783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3937.9524414062503,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2118.38740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1270.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.21513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.6744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.99775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.10810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 962.78837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 960.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.209765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 523.07177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 553.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 482.023046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.9947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1507.07265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1091.93896484375,
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
          "id": "58f92de69d5b0ea844bde3bdc9c57ce9bc906f2c",
          "message": "Fix cgroup memory limit detection for inherited limits (#1933)\n\nmount-s3 doesn't detect `cgroup` memory limits set on parent slices. A\ncustomer has a 20GB limit on the parent, but mount-s3 doesn't see it, so\nit falls back to using the host's total RAM (200GB). It oversizes\nbuffers which hits the limit and stalls completely. We use\n`System::cgroup_limits()` which only checks `/sys/fs/cgroup` (root). In\ncgroup v2, when a parent has a memory limit, children inherit it but if\nyou only read the child's `memory.max` file, it shows \"max\" (meaning no\nlimit set at this level). The actual limit is on the parent. We need to\nwalk up the tree to find it.\n\n  Switched to `Process::cgroup_limits()`:\n  - Reads `/proc/self/cgroup` to find the process's actual cgroup\n  - Walks up ancestors checking each `memory.max`\n  - Returns the smallest limit found\n\n ### Testing\n\nAdded a CI test that creates a cgroup hierarchy with `memory.max` set on\na parent slice (1 GiB) and verifies the process detects the inherited\nlimit rather than the container's own limit (2 GiB).\nWithout fix (fails):\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32240451777/job/96029623759\n\nWith fix (passes):\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32267673710/job/96116060108\n  \n### Does this change impact existing behavior?\n\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - fixes customer issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-08-20T10:05:57Z",
          "tree_id": "6e9010f1b7b4657d8b609dda086314348cbbfb09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58f92de69d5b0ea844bde3bdc9c57ce9bc906f2c"
        },
        "date": 1787228858445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3919.4933593749997,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2127.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1253.5923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.14384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.92333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.40908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.031640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1022.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.27080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 982.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 646.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 574.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 583.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1623.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.5427734375,
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
          "id": "438bb9c0bf3eb4ce844b43807c7fd18140adbc05",
          "message": "Add `--memory-target` to manage memory usage (#1936)\n\nThis change adds `--memory-target <MiB>`, a target for Mountpoint's\ntotal memory\nusage that it manages read and write buffering to stay within. It is a\ntarget, not\na guaranteed limit. The default is 95% of available memory (the cgroup\nlimit where\none applies, otherwise total system memory), with a minimum of 512 MiB.\n- Mountpoint now caps how many files may be open for writing at once,\nsince each\nreserves a part-sized buffer; `open()` returns `ENOMEM` past the cap.\nThe cap and\n    the target are logged at startup.\n- `MemoryLimiter` is folded into `PagedPool`, so prefetch reads, disk\ncache blocks,\nand upload buffers share one budget and one priority-ordered allocation\nqueue.\n- Under memory pressure Mountpoint slows I/O: prefetch windows shrink,\nallocations\nqueue until memory is released, and speculatively prefetched data is\ndiscarded to\n    serve reads applications are waiting on.\n- New metrics for queue depth and wait time, cursor and seek window\nresets, and\nwrite handle rejections, plus panels in the sample CloudWatch dashboard.\n\nBenchmarks:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32356468315\nStress tests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32356467756\n\n#### Included changes:\n1. [Buffer Pruning: Add Per-Handle Active Read Tracking\n(#1822)](https://github.com/awslabs/mountpoint-s3/pull/1822)\n2. [Reconcile memory limiter reservations with pool allocations\n(#1816)](https://github.com/awslabs/mountpoint-s3/pull/1816)\n3. [Extract Cursor and track active reads per cursor\n(#1825)](https://github.com/awslabs/mountpoint-s3/pull/1825)\n4. [Refactor MemoryLimiter into PagedPool\n(#1826)](https://github.com/awslabs/mountpoint-s3/pull/1826)\n5. [Introduce CursorState to consolidate per-cursor memory tracking\n(#1832)](https://github.com/awslabs/mountpoint-s3/pull/1832)\n6. [Introduce a builder to create PagedPool instances\n(#1833)](https://github.com/awslabs/mountpoint-s3/pull/1833)\n7. [Add concurrent write-handle limit returning ENOMEM on open()\n(#1831)](https://github.com/awslabs/mountpoint-s3/pull/1831)\n8. [Add priority-ordered allocation queue\n(#1836)](https://github.com/awslabs/mountpoint-s3/pull/1836)\n9. [Implement cursor reset mechanism\n(#1841)](https://github.com/awslabs/mountpoint-s3/pull/1841)\n10. [Gate pool allocations through limiter\n(#1840)](https://github.com/awslabs/mountpoint-s3/pull/1840)\n11. [Gate disk cache buffer allocation through the allocation queue\n(#1843)](https://github.com/awslabs/mountpoint-s3/pull/1843)\n12. [Add basic buffer pruner\n(#1829)](https://github.com/awslabs/mountpoint-s3/pull/1829)\n13. [Gate incremental upload buffers through the allocation queue\n(#1839)](https://github.com/awslabs/mountpoint-s3/pull/1839)\n14. [Limit memory allocations instead of buffer acquisitions\n(#1844)](https://github.com/awslabs/mountpoint-s3/pull/1844)\n15. [stress: Add held_writes_vs_reads scenario\n(#1848)](https://github.com/awslabs/mountpoint-s3/pull/1848)\n16. [Gate MPU buffer allocation via get_buffer_async\n(#1846)](https://github.com/awslabs/mountpoint-s3/pull/1846)\n17. [Scale stress HDR bounds per metric unit\n(#1853)](https://github.com/awslabs/mountpoint-s3/pull/1853)\n18. [Add `pool.allocated_bytes` and improve `pool.allocated_pages`\nmetrics (#1852)](https://github.com/awslabs/mountpoint-s3/pull/1852)\n19. [Add single_reader_budget_part and many_readers_budget_part stress\ntests (#1871)](https://github.com/awslabs/mountpoint-s3/pull/1871)\n20. [Fix false-positive stress test memory invariant failures\n(#1868)](https://github.com/awslabs/mountpoint-s3/pull/1868)\n21. [Avoid full sysinfo scan when sizing stress test object budget\n(#1873)](https://github.com/awslabs/mountpoint-s3/pull/1873)\n22. [Clamp read_part_size when exceeds memory budget\n(#1869)](https://github.com/awslabs/mountpoint-s3/pull/1869)\n23. [stress: Add setup phase and held budget scenarios\n(#1874)](https://github.com/awslabs/mountpoint-s3/pull/1874)\n24. [Rename to --memory-target and remove feature gate\n(#1875)](https://github.com/awslabs/mountpoint-s3/pull/1875)\n25. [Fix stress test hanging on cleanup when workers stuck\n(#1879)](https://github.com/awslabs/mountpoint-s3/pull/1879)\n26. [Reserve buffer budget so writers don't starve reads\n(#1880)](https://github.com/awslabs/mountpoint-s3/pull/1880)\n27. [Clear active cursor's backward seek window under memory starvation\n(#1885)](https://github.com/awslabs/mountpoint-s3/pull/1885)\n28. [stress: Add direct_io and misaligned part scenarios\n(#1894)](https://github.com/awslabs/mountpoint-s3/pull/1894)\n29. [fix: Use FUSE abort to prevent stress tests from hanging\nindefinitely\n(#1887)](https://github.com/awslabs/mountpoint-s3/pull/1887)\n30. [Add incremental upload stress test\n(#1908)](https://github.com/awslabs/mountpoint-s3/pull/1908)\n31. [Copy first part to heap in `do_read` to avoid pool deadlock\n(#1904)](https://github.com/awslabs/mountpoint-s3/pull/1904)\n32. [stress: Add cache_hit_vs_miss_held_budget scenario\n(#1907)](https://github.com/awslabs/mountpoint-s3/pull/1907)\n33. [stress: Add cache_miss_held_budget_misaligned_part scenario\n(#1911)](https://github.com/awslabs/mountpoint-s3/pull/1911)\n34. [Add allocation queue depth and wait-time metrics\n(#1912)](https://github.com/awslabs/mountpoint-s3/pull/1912)\n35. [Withhold the prunable reserve from paged allocations\n(#1915)](https://github.com/awslabs/mountpoint-s3/pull/1915)\n36. [Reduce NUM_WORKERS in many_readers_budget_part stress test\n(#1918)](https://github.com/awslabs/mountpoint-s3/pull/1918)\n37. [Avoid pool-buffer aliasing deadlock and stitch multi-part reads in\none buffer (#1913)](https://github.com/awslabs/mountpoint-s3/pull/1913)\n38. [stress: Register cache block pool candidate unconditionally\n(#1920)](https://github.com/awslabs/mountpoint-s3/pull/1920)\n39. [fix(stress): Add tolerance for pool memory metrics transient\novershoot (#1893)](https://github.com/awslabs/mountpoint-s3/pull/1893)\n40. [mem: Snapshot live cursors before iterating in the pruner\n(#1922)](https://github.com/awslabs/mountpoint-s3/pull/1922)\n41. [Add Experimental metrics and rename `seek_window_clears` to\n`seek_window_resets`\n(#1924)](https://github.com/awslabs/mountpoint-s3/pull/1924)\n42. [fix(stress): show metrics and invariants before stall panic\n(#1923)](https://github.com/awslabs/mountpoint-s3/pull/1923)\n43. [Use jemalloc as the global allocator\n(#1917)](https://github.com/awslabs/mountpoint-s3/pull/1917)\n44. [Skip buffer allocation for reservations cancelled while queued\n(#1928)](https://github.com/awslabs/mountpoint-s3/pull/1928)\n45. [Promote a queued buffer request whose read turned active mid-push\n(#1930)](https://github.com/awslabs/mountpoint-s3/pull/1930)\n46. [Add memory limiter metrics to sample CloudWatch dashboard\n(#1934)](https://github.com/awslabs/mountpoint-s3/pull/1934)\n\n### Does this change impact existing behavior?\n\nYes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, both.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Kiron <kiron1@gmail.com>\nCo-authored-by: Priyankakarumuru1 <prikaru@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.co.uk>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: kiron1 <kiron1@gmail.com>",
          "timestamp": "2026-08-20T16:46:51+01:00",
          "tree_id": "0a1fc26b050c1572a4eec389b2de11ecffce9f47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/438bb9c0bf3eb4ce844b43807c7fd18140adbc05"
        },
        "date": 1787250246555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1392.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1333.67236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1223.49462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.250390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.06513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.86064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 848.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.9681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 862.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 543.312109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 472.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 483.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1258.78125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1020.458984375,
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
          "id": "b6aa90abbdad1774829455e16cc718af87d618f4",
          "message": "Drop stale prefetch cursor before creating a new one (#1937)\n\n**Problem:** When a read cannot be served by the current cursor,\n`try_read` created the replacement cursor and awaited its first read\nwhile the stale cursor was still held in `self.cursor`. The stale cursor\nkeeps its inflight GetObject, queued parts, backward seek window, and\npool reservation alive for that whole window, which is incorrect.\n\n**Solution**: Drop stale cursor first before creating new cursor and\nawaiting.\n\n### Does this change impact existing behavior?\n\nN/A - part of memory limiter feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - part of memory limiter feature\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-20T23:35:57+01:00",
          "tree_id": "da1519f04c90a9f70e94001b490a5b2571f36d48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6aa90abbdad1774829455e16cc718af87d618f4"
        },
        "date": 1787272685064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1373.1026367187499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1343.69970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1187.992578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.05029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1008.49345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 978.5130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.5876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 631.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.2943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 563.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 516.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1296.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.0017578125,
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
          "id": "58817cab2fc3020a422d8aa14049a86b296f4498",
          "message": "Document memory limiter configuration and troubleshooting (#1938)\n\nDocuments the memory limiter shipped in #1936: a new memory usage\nsection in `CONFIGURATION.md`, expanded `--memory-target` help text, two\ntroubleshooting sections, and `CHANGELOG.md` entries.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-08-22T12:14:21Z",
          "tree_id": "5ef2a8456744180117174ce74395fe1f82f66c62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58817cab2fc3020a422d8aa14049a86b296f4498"
        },
        "date": 1787409295088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1561.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1521.8106445312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1331.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.34091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.22412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.17578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.1205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1136.80029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1108.24111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.899609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 672.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 664.33232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 626.62646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.14130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1446.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.36904296875,
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
          "id": "603f237e14aebc3f207ade422ad7eadaa5724198",
          "message": "Let incremental upload drain its own pipeline before queueing for memory (#1942)\n\n**Problem:** 2GB queue buffer for append starves readers too much as\nappend buffers are high priority in buffer allocation queue.\n\n**Solution:** Let incremental upload drain its own pipeline before\nqueuing for memory (if under memory pressure)\n\n**Verification**: Benchmark results:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32668644417\n\nThroughput Benchmark (S3 Express One Zone, Incremental Upload,\nMemory-Limited)\n\n| Benchmark suite | Current: de2395b9dec639b44f00dcbb770b41a6d5471e42 |\nPrevious: 58817cab2fc3020a422d8aa14049a86b296f4498 | Ratio |\n|-|-|-|-|\n| `sequential_read,sequential_write_four_threads` | `561.45126953125`\nMiB/s | `451.54580078124997` MiB/s | `0.80` |\n| `sequential_read_two_threads,sequential_write_two_threads` |\n`480.8755859375` MiB/s | `239.08544921875` MiB/s | `0.50` |\n| `sequential_read_four_threads,sequential_write` | `632.134375` MiB/s |\n`148.512890625` MiB/s | `0.23` |\n| `sequential_write_direct_io` | `111.26708984375` MiB/s |\n`111.18154296875` MiB/s | `1.00` |\n| `sequential_write` | `110.83740234375` MiB/s | `110.981640625` MiB/s |\n`1.00` |\n\nThroughput Benchmark - Peak Memory Usage (S3 Express One Zone,\nIncremental Upload, Memory-Limited)\n\n| Benchmark suite | Current: de2395b9dec639b44f00dcbb770b41a6d5471e42 |\nPrevious: 58817cab2fc3020a422d8aa14049a86b296f4498 | Ratio |\n|-|-|-|-|\n| `mix_1r4w` | `467.71484375` MiB | `452.03515625` MiB | `1.03` |\n| `mix_2r2w` | `446.484375` MiB | `436.89453125` MiB | `1.02` |\n| `mix_4r1w` | `444.09765625` MiB | `452.53125` MiB | `0.98` |\n| `seq_write_direct` | `406.1953125` MiB | `406.0859375` MiB | `1.00` |\n| `seq_write` | `406.1328125` MiB | `405.96484375` MiB | `1.00` |\n\n### Does this change impact existing behavior?\n\nN/A - part of memory limiter feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - part of memory limiter feature\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T10:04:49+01:00",
          "tree_id": "e61031dfead2c18752f165c65dd278c5e2f99faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/603f237e14aebc3f207ade422ad7eadaa5724198"
        },
        "date": 1787569598772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1513.5091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1477.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1287.58740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.01357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.99951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.37314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.16318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 995.55244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.9341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1032.86630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 624.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.26044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 629.961328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 565.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1362.67724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.3962890625,
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
          "id": "c247a881d80a01f204a0d85e504a3acfc1d3932c",
          "message": "Enforce `--read-only` in S3Filesystem (#1939)\n\nA read-only mount was enforced entirely by the kernel. That works when\nMountpoint performs the mount syscall, but not for a FUSE file\ndescriptor mount point, where the caller mounts and `--read-only` was\nrejected outright — discarding the only signal that could tell the file\nsystem the mount is read-only, since nothing about an fd exposes the\ncaller's `MS_RDONLY`.\n\nChanges:\n\n- Enforce read-only in the file system: `open` requesting write access,\n`setattr`, `mknod`, `mkdir`, `rmdir`, `unlink` and `rename` now fail\nwith the new `EROFS` instead of relying on the kernel to have refused\nthem. This matches what the kernel does on a read-only mount.\n- Accept `--read-only` with a FUSE file descriptor mount point\n- `MountpointConfig::create_fuse_session` validates that\n`FuseOptions::read_only` and `S3FilesystemConfig::read_only` agree\n- `cli.rs` sets `filesystem_config.read_only` from `--read-only`\n- Unrelated drive-by in a file this touches: Fix `gid` in\n`examples/mount_from_config.rs`\n\n### Does this change impact existing behavior?\n\nYes. `--read-only` with a FUSE file descriptor mount point was\npreviously rejected and now succeeds. Embedders using `MountpointConfig`\nmust set `read_only` on both `FuseOptions` and `S3FilesystemConfig`. No\nexisting mount-s3 invocation changes behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T15:43:08+01:00",
          "tree_id": "3e57e64972874316af1c1c8f7b43b0f51ecf4c6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c247a881d80a01f204a0d85e504a3acfc1d3932c"
        },
        "date": 1787589892757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1400.5255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1382.5899414062499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1257.421484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.146875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 969.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.30673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 936.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.6970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 582.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.34169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 440.957421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 452.06689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1363.88623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.29951171875,
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
          "id": "12fec077f06acf931309fdab7e7433d5fd2ae189",
          "message": "Update changelogs to prepare v1.24.0 release (#1946)\n\nUpdate changelogs for all crates to prepare the v1.24.0 release.\n\nCrate versions were already bumped in #1936\n\n### Does this change impact existing behavior?\n\nNo, documentation only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A — this is the changelog update for the release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T16:25:45+01:00",
          "tree_id": "d877c8eb6c7090b5b8a17f7914b913d85874e423",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12fec077f06acf931309fdab7e7433d5fd2ae189"
        },
        "date": 1787593174609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1414.9787109375002,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1373.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1232.2868164062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.11787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 973.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 900.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.40439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 622.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 511.03349609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 479.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.29267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1106.81025390625,
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
          "id": "cd04b1195dec5e12d1d706ed050f965dce7b3d30",
          "message": "Bump taiki-e/install-action from 2.82.8 to 2.86.2 (#1944)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.82.8 to 2.86.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.86.2</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.6.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.2.</p>\n</li>\n</ul>\n<h2>2.86.1</h2>\n<ul>\n<li>Fix an issue where <code>oxfmt</code> was　accidentally installed as\n<code>oxfmt-{target}{exe}</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1969\">#1969</a>)</li>\n</ul>\n<h2>2.86.0</h2>\n<ul>\n<li>Support <code>oxfmt</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1967\">#1967</a>,\nthanks <a\nhref=\"https://github.com/rami3l\"><code>@​rami3l</code></a>)</li>\n</ul>\n<h2>2.85.14</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.4.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.74.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.4.0.</p>\n</li>\n<li>\n<p>Update <code>mdbook-mermaid@latest</code> to 0.17.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-xwin@latest</code> to 0.23.1.</p>\n</li>\n</ul>\n<h2>2.85.13</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.3.3.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.5.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 1.113.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.4.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.0.</p>\n</li>\n</ul>\n<h2>2.85.12</h2>\n<ul>\n<li>\n<p>Update <code>zola@latest</code> to 0.23.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.256.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.2.10.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.51.0.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.4.13.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.4.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b6b84cf49ebfe0176417bdce007c624f0db37f20\"><code>b6b84cf</code></a>\nRelease 2.86.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/822eb9a731103a6afbfa603ab7ff02185a124607\"><code>822eb9a</code></a>\nUpdate <code>uv@latest</code> to 0.12.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5c017c5438cad8fb6e9855caae3622dd889862ee\"><code>5c017c5</code></a>\nUpdate prek manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f3371b0ada03f6dd26a8a4d2572a504f06b34f82\"><code>f3371b0</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/be4eb9e9090a465654bd22c6ce1fbbbc51fc9bba\"><code>be4eb9e</code></a>\nUpdate <code>mise@latest</code> to 2026.8.6</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/235fcbc6389f3fe88ef2441ea5c2b2789683ab85\"><code>235fcbc</code></a>\nUpdate <code>cargo-tarpaulin@latest</code> to 0.37.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1d8477e1cae9b584346998400732cf21d82c0a66\"><code>1d8477e</code></a>\nUpdate cargo-llvm-cov manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/288e746965032cfcc232e09af2daf5f23c14d780\"><code>288e746</code></a>\nRelease 2.86.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6012fb0aebafca00cab83d4d647a7d93eae73c49\"><code>6012fb0</code></a>\nFix oxfmt installation</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b27e114ddbae5cc01df19a22cf70a124d5177567\"><code>b27e114</code></a>\nRelease 2.86.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.82.8...v2.86.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.82.8&new-version=2.86.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:23:46Z",
          "tree_id": "7471365736d5159a22067190645ba595d87ff102",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cd04b1195dec5e12d1d706ed050f965dce7b3d30"
        },
        "date": 1787670674242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1465.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1358.3262695312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1253.4274414062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.57919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 874.74384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.74296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 903.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.83642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 558.7828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.04111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 575.9263671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 542.026953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.304296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1366.46044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.25244140625,
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
          "id": "fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.1 to 6.2.3 (#1925)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.1 to 6.2.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.2.3</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2>v6.2.2</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n<li>support custom STS endpoints (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1762\">#1762</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8d52d05d7a4521fa52b39de50cb6114b12e5c332\">8d52d05</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>skip credential check on output-env-credentials: false (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1778\">#1778</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58e7c47adf77846879008deadfeeef8a6969fe6c\">58e7c47</a>)</li>\n<li>assumeRole failing from session tag size too large (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1808\">#1808</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d6f5dc331b44474b19a52caaf85fa4d637b13c8e\">d6f5dc3</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.2...v6.1.3\">6.1.3</a>\n(2026-05-28)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>fix: allow kubelet token symlink in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1805\">#1805</a></li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.1...v6.1.2\">6.1.2</a>\n(2026-05-26)</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e6de054238d6b7531b4efff3b6587d9aade6a06c\"><code>e6de054</code></a>\nchore(main): release 6.2.3 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1878\">#1878</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/ab3b2ba025afb33b6856abfc1626992c70909302\"><code>ab3b2ba</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\"><code>fa8d6a5</code></a>\nfix: PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/42e118a65655a9bcd2929e1ab7c4588fdd3255d3\"><code>42e118a</code></a>\nchore(deps-dev): bump markdownlint-cli from 0.49.0 to 0.49.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1896\">#1896</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d86ddfcecc93d50cd1d1ca675d859403357c3d89\"><code>d86ddfc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/874aaac21e617e1544df3c6a9f043c9bc96adf70\"><code>874aaac</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1086.0 to\n3.1091.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1892\">#1892</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d4341b65accaa2ddbb952380d8ef12f95043d338\"><code>d4341b6</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fe51823c9714409fc32ade60b0bb4e79890beff1\"><code>fe51823</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1894\">#1894</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a8be382115e1ad5c77c560af842deddb56cd375c\"><code>a8be382</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.3 to 2.5.4\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1893\">#1893</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e000376c2c1f88ccef5f22a6bda02c24932d8ea5\"><code>e000376</code></a>\nchore: Update dist</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/254c19bd240aabef8777f48595e9d2d7b972184b...e6de054238d6b7531b4efff3b6587d9aade6a06c\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:34:19Z",
          "tree_id": "df8438cb52defad4e663612968622b4741bf6349",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3"
        },
        "date": 1787673541982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1439.1700195312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1383.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1266.68427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.25029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.56748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.00361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.85234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.16748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1004.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 989.11943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.64375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 500.278515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.96474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 545.3541015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 491.751171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.80830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1341.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.8017578125,
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
          "id": "57010820b1c189b6cf8253ce6ca6d4787c38239c",
          "message": "Bump EmbarkStudios/cargo-deny-action from 2.0.20 to 2.1.1 (#1943)\n\nBumps\n[EmbarkStudios/cargo-deny-action](https://github.com/embarkstudios/cargo-deny-action)\nfrom 2.0.20 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/embarkstudios/cargo-deny-action/releases\">EmbarkStudios/cargo-deny-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Release 2.1.1 - cargo-deny 0.20.2</h2>\n<h2>Fixed</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny-action/pull/116\">PR#116</a>\nfixed in issue introduced in the 2.1.0 release due the deprecation of\nthe <code>use-git-cli</code> argument. Thanks <a\nhref=\"https://github.com/Firestar99\"><code>@​Firestar99</code></a>!</li>\n</ul>\n<h2>Release 2.1.0 - cargo-deny 0.20.2</h2>\n<h3>Changed</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/881\">PR#881</a>\nrefactored the CLI, moving some duplicated options/flags into the root\nand removing several deprecated options/flags/values. See the PR for a\nfull list of changes.</li>\n</ul>\n<h3>Added</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/879\">PR#879</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/873\">#873</a>\nby adding a new <a\nhref=\"https://embarkstudios.github.io/cargo-deny/checks/bans/cfg.html#the-std-replacements-field-optional\"><code>bans.std-replacements</code></a>\nlint which checks the graph for crates.io sourced crates that have been\npartially or fully replaced in <code>std</code> and/or\n<code>core</code>.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/880\">PR#880</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/765\">#765</a>\nby respecting non-default build script paths in manifests.</li>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/881\">PR#881</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/874\">#874</a>\nby cleaning up the CLI, deduplicating some options/flags that caused bug\nin the <code>list</code> subcommand.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/3c6349835b2b7b196a839186cb8b78e02f7b5f25\"><code>3c63498</code></a>\nFix use-git-cli deprecation (<a\nhref=\"https://redirect.github.com/embarkstudios/cargo-deny-action/issues/116\">#116</a>)</li>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/6f99e342a8f0f8f8d1bdc9dc43e9a6f2dd611259\"><code>6f99e34</code></a>\nBump to 0.20.2</li>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/8b229e2cbac05ffa3e4e6646023a0b4ee717c736\"><code>8b229e2</code></a>\nDeprecate use-git-cli</li>\n<li>See full diff in <a\nhref=\"https://github.com/embarkstudios/cargo-deny-action/compare/bb137d7af7e4fb67e5f82a49c4fce4fad40782fe...3c6349835b2b7b196a839186cb8b78e02f7b5f25\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=EmbarkStudios/cargo-deny-action&package-manager=github_actions&previous-version=2.0.20&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T13:04:12Z",
          "tree_id": "65783e13d956cc838dc63f52226a5738b641e91a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57010820b1c189b6cf8253ce6ca6d4787c38239c"
        },
        "date": 1787675720902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1370.5946289062501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1352.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1236.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.90615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.52705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.98466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.33046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.11630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 910.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.97109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 936.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.93330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 588.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 542.0568359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 514.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1308.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1089.10869140625,
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
          "id": "723186c7ab6fc4769a0fe8eb2e4030763479508f",
          "message": "Bump actions/setup-python from 6.3.0 to 7.0.0 (#1902)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 6.3.0 to 7.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements</h3>\n<ul>\n<li>Migrate to ESM and upgrade dependencies by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1330\">actions/setup-python#1330</a></li>\n<li>Pin SHA commits and update docs with latest versions by <a\nhref=\"https://github.com/HarithaVattikuti\"><code>@​HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1338\">actions/setup-python#1338</a></li>\n<li>Remove the pip-install input by <a\nhref=\"https://github.com/gowridurgad\"><code>@​gowridurgad</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1336\">actions/setup-python#1336</a></li>\n</ul>\n<h3>Bug Fix</h3>\n<ul>\n<li>Fix to Classify stderr warning messages as warnings instead of\nerrors in annotations by <a\nhref=\"https://github.com/lmvysakh\"><code>@​lmvysakh</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1335\">actions/setup-python#1335</a></li>\n<li>Validate and retry manifest fetch to prevent silent failures by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1332\">actions/setup-python#1332</a></li>\n</ul>\n<h3>Dependency Upgrade</h3>\n<ul>\n<li>Bump certifi from 2020.6.20 to 2024.7.4 in\n/<strong>tests</strong>/data by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1328\">actions/setup-python#1328</a></li>\n<li>Remove EOL Python versions and Bumps numpy text fixture by <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1333\">actions/setup-python#1333</a></li>\n<li>Upgrade <code>@​actions/cache</code> to 6.2.0 by <a\nhref=\"https://github.com/philip-gai\"><code>@​philip-gai</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1337\">actions/setup-python#1337</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/lmvysakh\"><code>@​lmvysakh</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1335\">actions/setup-python#1335</a></li>\n<li><a\nhref=\"https://github.com/philip-gai\"><code>@​philip-gai</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1337\">actions/setup-python#1337</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v6...v7.0.0\">https://github.com/actions/setup-python/compare/v6...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/5fda3b95a4ea91299a34e894583c3862153e4b97\"><code>5fda3b9</code></a>\nPin SHA commits and update docs with latest versions (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1338\">#1338</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/4ab7e95f05e168b4356aebde89dd84f59c283d8e\"><code>4ab7e95</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1337\">#1337</a>\nfrom actions/philip-gai/bump-actions-cache-6-2-0</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0f3a009f475dbea83c0371cd85d099690fee8c5c\"><code>0f3a009</code></a>\nRemove the pip-install input (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1336\">#1336</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/f8cf4291c8b8e273ddd26e569454615c7315d932\"><code>f8cf429</code></a>\nMigrate to ESM and upgrade dependencies (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1330\">#1330</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/54baeea5b34417d10a7479663a23cca53ea209b5\"><code>54baeea</code></a>\nValidate and retry manifest fetch to prevent silent failures (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1332\">#1332</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/c7092773a316760f4ecfe498e4af668a4dafeac5\"><code>c709277</code></a>\nAnnotation code fix (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1335\">#1335</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/6849080452e69b330395e8a6d23cf90f56d76a1a\"><code>6849080</code></a>\nremove EOL Python versions and Bumps numpy text fixture (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1333\">#1333</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0903b469fbf4441aadfe4f4b249dc5b1fba3a73e\"><code>0903b46</code></a>\nBump certifi from 2020.6.20 to 2024.7.4 in /<strong>tests</strong>/data\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1328\">#1328</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/setup-python/compare/ece7cb06caefa5fff74198d8649806c4678c61a1...5fda3b95a4ea91299a34e894583c3862153e4b97\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T13:04:19Z",
          "tree_id": "238737c612909483c2821188619ff8c95e8dd8a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/723186c7ab6fc4769a0fe8eb2e4030763479508f"
        },
        "date": 1787680829739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1411.92802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1383.19091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1245.92470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.9400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.3328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.6734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.42802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 933.78037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.49423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 917.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 225.098828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 484.76240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 534.55830078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 451.39638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.00693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1310.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.82919921875,
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
          "id": "ffa4eeb83ded7084e861179c7b7744474e62b7a1",
          "message": "Bump hydra-core from 1.3.2 to 1.3.4 in /benchmark (#1941)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.2\nto 1.3.4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.4</h2>\n<p>Security patch release for the 1.3 line.</p>\n<ul>\n<li>Add a blocklist to <code>hydra.utils.instantiate()</code> for\nsecurity-sensitive <code>_target_</code> callables.</li>\n</ul>\n<p>Users on Hydra 1.3 should upgrade from\n<code>hydra-core&lt;=1.3.3</code> to <code>hydra-core==1.3.4</code>.</p>\n<p>Hydra 1.3.3 fixes source builds with modern setuptools by removing\nthe setup.py dependency on pkg_resources. Fixes <a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3207\">#3207</a>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.4/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.4 (2026-07-05)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Add an instantiate target blocklist for security-sensitive\ncallables. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3259\">#3259</a>)\n1.3.3 (2026-06-11)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Remove the setup.py dependency on pkg_resources for source builds.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3207\">#3207</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81070c4266f2c7e0bb614f84585b3bd0cb721ce1\"><code>81070c4</code></a>\nRelease Hydra 1.3.4</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/bc0b68c21be5d51b9b5d083dc4b1a5348914543b\"><code>bc0b68c</code></a>\nPin pytest for 1.3 test compatibility</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/461538ef1e57ddd1b4fd47545ef5bc04048fbbf2\"><code>461538e</code></a>\nupdated news fragment</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/7faad0dcedfb4c0a364aa1067c0080fd6fdf8dca\"><code>7faad0d</code></a>\nHarden instantiate target blocklist (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3261\">#3261</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d69214b2b8b5bcaef0152cdbd750fa16c42c8fae\"><code>d69214b</code></a>\nAdd 1.3 branch PyPI publish workflow</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/e67cae34625deab4e1dc268837e72b2137fe8216\"><code>e67cae3</code></a>\nPrepare Hydra 1.3.3 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/f8d6111d4c3d09cd977cc700de3301ee6aef1182\"><code>f8d6111</code></a>\nFix source builds without pkg_resources</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.2...v1.3.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.2&new-version=1.3.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T14:01:12Z",
          "tree_id": "074fa5f6dca6662387ed12ae2104d710ce64b5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffa4eeb83ded7084e861179c7b7744474e62b7a1"
        },
        "date": 1787681756047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1390.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1350.59462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1200.2086914062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.540625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.66767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.00224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.084375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 834.07724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.2140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 805.28681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.7052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 492.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 491.9935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 459.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.40615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1384.81923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1094.5509765625,
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
          "id": "17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29",
          "message": "Bump astral-sh/setup-uv from 7.6.0 to 10.0.1 (#1945)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n7.6.0 to 10.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.0.1 🌈 Tolerate transient manifest timeouts</h2>\n<h2>Changes</h2>\n<p>Thank you <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- for making\nthis action more resilient.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Tolerate transient manifest timeouts <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.4 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n</ul>\n<h2>v10.0.0 🌈 Disable automatic caching for sensitive events and new QOL\nfeatures</h2>\n<h2>Changes</h2>\n<p>Another breaking release, directly after v9.0.0 but we think the\nadded security justifies that.</p>\n<h3>Extra security by default</h3>\n<p>If you use the default <code>enable-cache: auto</code> this will now\n<strong>DISABLE THE CACHE</strong> to protect against cache poisoning\nfor the following events:</p>\n<ul>\n<li><code>pull_request_target</code></li>\n<li><code>workflow_run</code></li>\n<li><code>release</code></li>\n</ul>\n<p>You can read the full reasoning in <a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/984\">astral-sh/setup-uv#984</a></p>\n<h3><code>version: latest-known</code></h3>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv known to\nsetup-uv\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version: &quot;latest-known&quot;\n</code></pre>\n<p>This will now install the latest version with a checksum that is\nknown by this action. The <a\nhref=\"https://github.com/astral-sh/setup-uv/blob/4f6036f71cec78afb113b323f220c9185d983c12/src/download/checksum/known-checksums.ts\">known\n<code>uv</code> checksums</a> are automatically updated but will take a\nrelease of this action to take effect. You won't be always using the\nlatest &amp; greatest but you will have an extra level of security.</p>\n<h3>Read python version from <code>.tool-versions</code></h3>\n<pre lang=\"yaml\"><code>- name: Install uv based on the version defined\nin .tool-versions and also set python\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version-file: &quot;pyproject.toml&quot;\n&lt;/tr&gt;&lt;/table&gt; \n</code></pre>\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/20cfd1bf945f4377ade1205e4dbc17946fc9a30d\"><code>20cfd1b</code></a>\nchore: update known checksums for 0.12.4 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d73a0cab66a532d7afa440d9df4a67ea9fe65a30\"><code>d73a0ca</code></a>\nTolerate transient manifest timeouts (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae3b92d1bdb308a10adfe7b8f408e5cc8c30f3f6\"><code>ae3b92d</code></a>\ndocs: update version references to v10.0.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae62891fec2bb8e7d6c99fc78c9fec3a63790f8d\"><code>ae62891</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1013\">#1013</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f9cdb47d487aee2be8925d1e57290177ad9e1ac2\"><code>f9cdb47</code></a>\nReject paths in .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1007\">#1007</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4f6036f71cec78afb113b323f220c9185d983c12\"><code>4f6036f</code></a>\nRequire pull requests for Dependabot rollups (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1005\">#1005</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8d6402c9b71205b2d8d0b82de531d8fed8430182\"><code>8d6402c</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1004\">#1004</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/46f427bd47c794e99536b75ffaa9f27602425027\"><code>46f427b</code></a>\nRead Python version from .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/996\">#996</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8ed89c51143f65ea13eaba62db51dbb8ea52d0a3\"><code>8ed89c5</code></a>\nci: pin Alpine container image (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/995\">#995</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8473c7fea42cdfd540f4b01317a17ac5f54126ae\"><code>8473c7f</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/994\">#994</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/37802adc94f370d6bfd71619e3f0bf239e1f3b78...20cfd1bf945f4377ade1205e4dbc17946fc9a30d\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T16:22:42Z",
          "tree_id": "faf85be8412f8677867f6c061ae28caf9dcfc47f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29"
        },
        "date": 1787684756682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1394.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1383.290625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1203.68193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.91279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.72919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.88427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.03544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 849.784765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.19931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 895.0140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 215.1984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 448.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 528.39990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 416.93623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.401953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1348.76025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.924609375,
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
          "id": "70bd7b627969ed6decdeab91a6a445a2347d827c",
          "message": "Remove AL2 from various pieces of documentation (#1921)\n\nReplace AL2 with AL2023 in various pieces of documentation. Removing\nbecause AL2 is now end of life\n\nRemove instructions for building the packaging script without docker, as\nAL2023 already comes with a native release, and `dpkg` cannot be\ninstalled on it. Users who want to build custom releases can use docker.\n\n### Does this change impact existing behavior?\n\nOnly documentation is changed. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-08-27T19:30:58Z",
          "tree_id": "f5f5b0f74d031e233101d718d70779322e076990",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70bd7b627969ed6decdeab91a6a445a2347d827c"
        },
        "date": 1787868168509,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1457.554296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1425.45888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1262.56650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.28359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.73994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.87841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 821.9767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.8814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 917.39541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 224.3775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 484.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 527.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 458.73759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.52548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1090.04638671875,
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
          "id": "41b00f8aa4db8bed5217f1577fb78f0c96c49776",
          "message": "Replace bincode with wincode in disk data cache (#1947)\n\nReplace unmaintained bincode serialization library with wincode (a\nbincode-compatible, actively maintained library) for disk cache header\nserialization/deserialization in `mountpoint-s3-fs`. bincode has been\npermanently marked as unmaintained\n([RUSTSEC-2025-0141](https://osv.dev/vulnerability/RUSTSEC-2025-0141)).\n  \nImplementation:\n  \n- Read: Header deserialized directly from the file reader via\nReadAdapter. Data read directly into pool buffer.\n- Write: Header serialized directly to file via WriteAdapter (no\nintermediate allocation, same pattern as bincode).\n- Added `write_cache_block` and `write_file` benchmarks.\n\nBenchmark results:\n- `read_cache_block`: wincode 99.3 µs vs bincode 103.6 µs (faster ✅)\n- `write_cache_block`: wincode 4.02 ms vs bincode 4.02 ms (identical)\n  \nNo performance regression. Read path is slightly faster.\n\nNote: `mountpoint-s3-fuser `still uses bincode 1.3.1 - will be addressed\nin a follow-up. The advisory suppression can be reverted once both are\nmigrated.\n \n### Does this change impact existing behavior?\n\nNo user-facing changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-09-02T07:36:44Z",
          "tree_id": "eabef6d4d55a3c658eb09c12dba719b50cff0d4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41b00f8aa4db8bed5217f1577fb78f0c96c49776"
        },
        "date": 1788343589289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1522.058984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1485.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1279.37587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.66357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.481640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.866796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.432421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.62470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 809.3255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.615625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 877.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 222.25185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 503.562890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 554.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 473.8033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.56865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1454.227734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.4080078125,
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
          "id": "835142e70dadc1994ec77ee64ab1223cc7b8b545",
          "message": "Retroactively fix changelog for 1.23.0 (#1952)\n\nWe missed an entry in the changelog for Mountpoint 1.23.0: we should\nhave included #1762.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-02T08:47:18Z",
          "tree_id": "4773818625d9abe78d3a37475ee0a8829e2acc98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/835142e70dadc1994ec77ee64ab1223cc7b8b545"
        },
        "date": 1788347280359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1523.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1466.1654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1230.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.42294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.7513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.2681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.74248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 841.1193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 924.28115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.72451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 523.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.23427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 556.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 441.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1381.38955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1112.03583984375,
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
          "id": "32779e2790b07cdf53df6efac5169e53c64d80bf",
          "message": "Bump taiki-e/install-action from 2.86.2 to 2.87.2 (#1955)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.86.2 to 2.87.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.2</h2>\n<ul>\n<li>\n<p>Update <code>typos@latest</code> to 1.50.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.0.</p>\n</li>\n<li>\n<p>Update <code>shfmt@latest</code> to 3.14.0.</p>\n</li>\n</ul>\n<h2>2.87.1</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.7.</p>\n</li>\n<li>\n<p>Update <code>typos@latest</code> to 1.49.1.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.51.1.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.5.0.</p>\n</li>\n<li>\n<p>Update <code>d2@latest</code> to 0.8.2.</p>\n</li>\n<li>\n<p>Update <code>cargo-zigbuild@latest</code> to 0.23.3.</p>\n</li>\n<li>\n<p>Update <code>cargo-rdme@latest</code> to 2.2.2.</p>\n</li>\n<li>\n<p>Update <code>biome@latest</code> to 2.5.11.</p>\n</li>\n</ul>\n<h2>2.87.0</h2>\n<ul>\n<li>\n<p>Support <code>kache</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1980\">#1980</a>,\nthanks <a\nhref=\"https://github.com/ChrisJr404\"><code>@​ChrisJr404</code></a>)</p>\n</li>\n<li>\n<p>Update <code>vacuum@latest</code> to 0.30.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.6.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.14.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.2.</p>\n</li>\n</ul>\n<h2>2.86.8</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 48.0.1.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.258.0.</p>\n</li>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.80.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.12.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.0.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-zigbuild@latest</code> to 0.23.2.</p>\n</li>\n</ul>\n<h2>2.86.7</h2>\n<ul>\n<li>Update <code>tombi@latest</code> to 1.4.1.</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1ed6d7be6168f6c9046541087ff549b6bc581fdf\"><code>1ed6d7b</code></a>\nRelease 2.87.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/0fbfc5b541ba726278965a75a3fd222af703b279\"><code>0fbfc5b</code></a>\nUpdate <code>typos@latest</code> to 1.50.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5f68cef2c452eb3fcb5dccbbcd5f6d192a13a892\"><code>5f68cef</code></a>\nUpdate <code>tombi@latest</code> to 1.5.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/d46a5ec40dd3eef68104c5b342f24e599519675f\"><code>d46a5ec</code></a>\nUpdate <code>shfmt@latest</code> to 3.14.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/742a3317eac7bd62f91cd888b4eead5e784ba833\"><code>742a331</code></a>\nRelease 2.87.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/c5b69cd73ba573d80324cdcd0b052ca509084b22\"><code>c5b69cd</code></a>\nUpdate <code>uv@latest</code> to 0.12.7</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/85e6400c85d74d612698536feafd9e20f40aa257\"><code>85e6400</code></a>\nUpdate <code>typos@latest</code> to 1.49.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/91f3a12371baac5722df4e5c6d42937d16656ffe\"><code>91f3a12</code></a>\nUpdate tombi manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/160f8b13c099dc3c9067e0658c0da7ac925a00ff\"><code>160f8b1</code></a>\nUpdate <code>syft@latest</code> to 1.51.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/aa48d3e72e94215619c754df53a143cdaabefc8b\"><code>aa48d3e</code></a>\nUpdate shfmt manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.86.2...v2.87.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.86.2&new-version=2.87.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-07T17:50:38Z",
          "tree_id": "e4cb7d97babd524b9053de2a55a3bbb4c4c6d3ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/32779e2790b07cdf53df6efac5169e53c64d80bf"
        },
        "date": 1788813565788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1540.6778320312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1499.0501953125001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1313.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.95966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.89951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.68115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.11025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.187109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1050.04599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.92119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1008.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.94912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 667.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.31025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 596.16201171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 542.9939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.92021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1463.66748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1065.12080078125,
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
          "id": "95c11992633413a8fadbfb445eaa7c8b2507833b",
          "message": "Bump slackapi/slack-github-action from 3.0.3 to 4.0.0 (#1951)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 3.0.3 to 4.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v4.0.0</h2>\n<h3>Major Changes</h3>\n<ul>\n<li>\n<p>b1974f0: build: parse yaml with more strict multiline indentation\nrules</p>\n<p>Internal dependencies of <a\nhref=\"https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md#500---2026-06-20\"><code>js-yaml@v5</code></a>\nmake YAML parsing more strict and compliant with the YAML specification.\nIndentation is now required for values that span multiple lines against\nthe base value.</p>\n<p>See the YAML <a\nhref=\"https://yaml.org/spec/1.2.2/#63-line-prefixes\">line prefixes</a>\nspec for the expected indentation rule:</p>\n<pre lang=\"diff\"><code>  channel: &quot;C0123&quot;\n  text: &quot;first line\n<ul>\n<li>second line&quot;</li>\n</ul>\n<ul>\n<li>second line&quot;<br />\n</code></pre></li>\n</ul>\n</li>\n</ul>\n<h3>Patch Changes</h3>\n<ul>\n<li>654bb72: chore: provide global fetch proxied configurations with\nupdates to web api and webhook packages</li>\n</ul>\n<h2>Slack GitHub Action v3.0.5</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>96fddbe: fix: revert multiline yaml parsing indentation change</li>\n</ul>\n<h2>Slack GitHub Action v3.0.4</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>fa03fe4: refactor: send webhooks with the <a\nhref=\"https://docs.slack.dev/tools/node-slack-sdk/webhook\"><code>@slack/webhook</code></a>\npackage</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/blob/main/CHANGELOG.md\">slackapi/slack-github-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>slack-github-action</h1>\n<h2>4.0.0</h2>\n<h3>Major Changes</h3>\n<ul>\n<li>\n<p>b1974f0: build: parse yaml with more strict multiline indentation\nrules</p>\n<p>Internal dependencies of <a\nhref=\"https://github.com/nodeca/js-yaml/blob/master/CHANGELOG.md#500---2026-06-20\"><code>js-yaml@v5</code></a>\nmake YAML parsing more strict and compliant with the YAML specification.\nIndentation is now required for values that span multiple lines against\nthe base value.</p>\n<p>See the YAML <a\nhref=\"https://yaml.org/spec/1.2.2/#63-line-prefixes\">line prefixes</a>\nspec for the expected indentation rule:</p>\n<pre lang=\"diff\"><code>  channel: &quot;C0123&quot;\n  text: &quot;first line\n<ul>\n<li>second line&quot;</li>\n</ul>\n<ul>\n<li>second line&quot;<br />\n</code></pre></li>\n</ul>\n</li>\n</ul>\n<h3>Patch Changes</h3>\n<ul>\n<li>654bb72: chore: provide global fetch proxied configurations with\nupdates to web api and webhook packages</li>\n</ul>\n<h2>3.0.5</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>96fddbe: fix: revert multiline yaml parsing indentation change</li>\n</ul>\n<h2>3.0.4</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>fa03fe4: refactor: send webhooks with the <a\nhref=\"https://docs.slack.dev/tools/node-slack-sdk/webhook\"><code>@slack/webhook</code></a>\npackage</li>\n</ul>\n<h2>3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/dcb1066f776dd043e64d0e8ba94ca15cc7e1875d\"><code>dcb1066</code></a>\nchore: release</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/53861e0291660faf57ba686eabf046d5a47fa304\"><code>53861e0</code></a>\nchore: release (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/645\">#645</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b1974f0d29f2b6150fc5a376312d365bd75fdd9b\"><code>b1974f0</code></a>\nbuild!: parse yaml with more strict multiline indentation rules (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/640\">#640</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/947ed0677cba8e56cf374d88bfd2d8f72aa9100c\"><code>947ed06</code></a>\nbuild(deps): bump undici from 7.28.0 to 8.7.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/653\">#653</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/03922a90c917c4d3d3b1c0f35984c2ac23955560\"><code>03922a9</code></a>\nchore: track undici-types to the resolved undici version (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/652\">#652</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/31d473e1d0da2837ee5149493a62a54103e5b45a\"><code>31d473e</code></a>\nbuild(deps-dev): bump typescript from 6.0.3 to 7.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/651\">#651</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/3ca6997fb72e86b0babe7037ff2ca4a5908b6148\"><code>3ca6997</code></a>\nbuild(deps-dev): bump sinon and <code>@​types/sinon</code> (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/649\">#649</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/26a5ad3c5af9cde63a5bb0667fc9e40accce2710\"><code>26a5ad3</code></a>\nbuild(deps): bump actions/setup-node from 6.4.0 to 7.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/647\">#647</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/5092efb0558a5d075f0dd02279f332a116a461ef\"><code>5092efb</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.3 to 2.5.4\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/650\">#650</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/3548c3e9500515cd56aa64222b12088f5e6bd6fe\"><code>3548c3e</code></a>\nbuild(deps): bump slackapi/slack-github-action from 3.0.3 to 3.0.5 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/646\">#646</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/45a88b9581bfab2566dc881e2cd66d334e621e2c...dcb1066f776dd043e64d0e8ba94ca15cc7e1875d\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=3.0.3&new-version=4.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-07T17:50:59Z",
          "tree_id": "01c23251d93f97ae97148cf1c0f22b31c6006e65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/95c11992633413a8fadbfb445eaa7c8b2507833b"
        },
        "date": 1788814603200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1547.4251953125001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1501.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1307.29267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.37529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.51142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.37060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.20751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1077.32666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.288671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1048.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 625.043359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.30634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 631.74267578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 561.71416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.11083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1492.99638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.8076171875,
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
          "id": "634df5d09017293d24bd2b821aa8530ade9d14c7",
          "message": "Run cargo update (#1953)\n\nRuns `cargo update` to refresh transitive dependencies in `Cargo.lock`.\nThis clears a `cargo-deny` yanked-crate warning for `chacha20` 0.10.1\n(pulled in via `rand`) and picks up routine upstream patch releases.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-09-07T17:51:22Z",
          "tree_id": "d6a7d12f79da5ca590512783c7d456b040f58644",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/634df5d09017293d24bd2b821aa8530ade9d14c7"
        },
        "date": 1788820085165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1521.592578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1475.34833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1285.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.28603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.22451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.96875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1054.43720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.9400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1018.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.1248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 664.49814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.76943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 606.14287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 591.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.7185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1415.01767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.02666015625,
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
          "id": "5e400f788f8cbca028f3314d84ef2df2c7fcf536",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.3 to 6.2.4 (#1956)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.3 to 6.2.4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.2.4</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.3...v6.2.4\">6.2.4</a>\n(2026-08-31)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\">aa65264</a>)</li>\n<li>skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\">3852440</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n<li>support custom STS endpoints (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1762\">#1762</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8d52d05d7a4521fa52b39de50cb6114b12e5c332\">8d52d05</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>skip credential check on output-env-credentials: false (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1778\">#1778</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58e7c47adf77846879008deadfeeef8a6969fe6c\">58e7c47</a>)</li>\n<li>assumeRole failing from session tag size too large (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1808\">#1808</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d6f5dc331b44474b19a52caaf85fa4d637b13c8e\">d6f5dc3</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbe3b392738ccf3f987d68400dafcf4b0624a56c\"><code>cbe3b39</code></a>\nchore(main): release 6.2.4 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1942\">#1942</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58065db07c99675fc21675188b003b7f0b167004\"><code>58065db</code></a>\nchore(deps): bump js-yaml (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1944\">#1944</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/609df23709e359dc01a42b4c5183ba71167ac38c\"><code>609df23</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/aa6526434b08748f8776b29964e3f1f5d90e7b63\"><code>aa65264</code></a>\nfix: account-ids handling, mask proxy as secret in logs (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1943\">#1943</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7fdbbb8968c49fb55011ace47efc7b0ccfc9a28f\"><code>7fdbbb8</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/3852440c21363386b7b790605685d08a7c1a4876\"><code>3852440</code></a>\nfix: skip backoff sleep after the final retryAndBackoff attempt (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1937\">#1937</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c16f89bdf4cd065448ea7bde8b96a1dad4c77e41\"><code>c16f89b</code></a>\nmention renamed repos use the new immutable identifiers (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1941\">#1941</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9c362eeba7ac7d0419073a8b4af5a83e49e2afaf\"><code>9c362ee</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d5f8da8822f961cd3016c2cf87aad7e80b40558e\"><code>d5f8da8</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1111.0 to\n3.1116.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1935\">#1935</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2db24970cf129d7ff6fc04639072bcbe35f8c288\"><code>2db2497</code></a>\nchore: Update dist</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/e6de054238d6b7531b4efff3b6587d9aade6a06c...cbe3b392738ccf3f987d68400dafcf4b0624a56c\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=6.2.3&new-version=6.2.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-08T06:07:28Z",
          "tree_id": "9e6450cdf615ceca6502e3d8f5cc9d6da16ea04b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e400f788f8cbca028f3314d84ef2df2c7fcf536"
        },
        "date": 1788855844353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1508.41337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1454.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1281.29912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.73310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.63740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.73779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.07197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 944.836328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.88955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 894.25283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.35419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 608.51103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 507.16142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 555.29638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.8197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1419.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 904.30615234375,
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
          "id": "617a92940d74e19e3ad7a6e50cd478d233f13bf4",
          "message": "Update rustls to 0.23.45 (#1960)\n\nUpdate rustls to 0.23.45 in order to address [TLS 1.3 handshake messages\nincorrectly accepted across encryption level\nboundaries](https://github.com/rustls/rustls/security/advisories/GHSA-2mjx-qc3c-rqvc).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-15T10:35:01Z",
          "tree_id": "2c80311fb0b9cd79f373fdca51f066f5afb6f71d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/617a92940d74e19e3ad7a6e50cd478d233f13bf4"
        },
        "date": 1789476925567,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1645.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1605.9966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1343.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.277734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.72978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.90986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.42314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1058.96044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.7427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1025.62998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.0671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 556.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.0076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 602.5333984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 498.6388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.21201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1435.9333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1145.57998046875,
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
          "id": "a0a1f63f7605028b41c2fc47e581197032a890ed",
          "message": "Bump actions-rust-lang/setup-rust-toolchain from 1.17.0 to 2.0.0 (#1958)\n\nBumps\n[actions-rust-lang/setup-rust-toolchain](https://github.com/actions-rust-lang/setup-rust-toolchain)\nfrom 1.17.0 to 2.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/releases\">actions-rust-lang/setup-rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/pull/103\">actions-rust-lang/setup-rust-toolchain#103</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v1.17.0...v2.0.0\">https://github.com/actions-rust-lang/setup-rust-toolchain/compare/v1.17.0...v2.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/blob/main/CHANGELOG.md\">actions-rust-lang/setup-rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this\nfile.</p>\n<p>The format is based on <a\nhref=\"https://keepachangelog.com/en/1.0.0/\">Keep a Changelog</a>,\nand this project adheres to <a\nhref=\"https://semver.org/spec/v2.0.0.html\">Semantic Versioning</a>.</p>\n<h2>[Unreleased]</h2>\n<h2>[2.0.0] - 2026-09-07</h2>\n<ul>\n<li>\n<p>Use <code>CARGO_BUILD_WARNINGS</code> for enforcing warning free\ncompilations (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/98\">#98</a>)\nThis is a new variable supported by cargo 1.97+ <a\nhref=\"https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/#cargo-support-for-denying-warnings\">and\nsets the <code>build.warnings</code> config</a>.\nIt allows removing the <code>RUSTFLAGS=&quot;-D warnings&quot;</code>\ndefault, which will improve compatibility with\n<code>target.*.rustflags</code> and <code>.cargo/config.toml</code>\nfiles.</p>\n<p>This adds a new <code>build-warnings</code> input to configure the\nvalue for the <code>build.warnings</code> config.</p>\n</li>\n<li>\n<p>Add error matcher for Rust panics\nThis will highlight the location of the panic location during tests.</p>\n</li>\n<li>\n<p>Reuse output of <code>rustc --version --verbose</code> calls (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nby <a\nhref=\"https://github.com/ChihweiLHBird\"><code>@​ChihweiLHBird</code></a>)</p>\n</li>\n</ul>\n<h2>[1.17.0] - 2026-06-25</h2>\n<ul>\n<li>Add new parameter <code>cache-targets</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>cache-targets</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/84\">#84</a>).\nThis allows disabling caching of the workspace <code>target</code>\ndirectory, e.g. when using <code>sccache</code>, while keeping the rest\nof the cache enabled.</li>\n</ul>\n<h2>[1.16.1] - 2026-05-08</h2>\n<ul>\n<li>Renamed internally used variable to avoid clashes with globally\nexisting variables.\nThis fixes the interference of the TOOLCHAIN variable as reported in <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/91\">#91</a>.</li>\n</ul>\n<h2>[1.16.0] - 2026-04-13</h2>\n<ul>\n<li>Add new parameter <code>cache-save-if</code> that is propagated to\n<code>Swatinem/rust-cache</code> as <code>save-if</code> (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/90\">#90</a>\nby <a\nhref=\"https://github.com/ChanTsune\"><code>@​ChanTsune</code></a>)</li>\n</ul>\n<h2>[1.15.4] - 2026-03-15</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.2 to 2.9.1 (<a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/87\">#87</a>\nby <a\nhref=\"https://github.com/hyperfinitism\"><code>@​hyperfinitism</code></a>)\nThis gets rid of the warnings about Node.js 20.</li>\n</ul>\n<h2>[1.15.3] - 2026-03-01</h2>\n<ul>\n<li>Bump Swatinem/rust-cache from 2.8.1 to 2.8.2</li>\n</ul>\n<h2>[1.15.2] - 2025-10-04</h2>\n<ul>\n<li>Fix: Run the version detection steps in the selected\n<code>rust-src-dir</code> directory.\nThis should enable the version selection even without a default\ntoolchain installed.\nFixes <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/74\">#74</a>.</li>\n</ul>\n<h2>[1.15.1] - 2025-09-23</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/ecabd13d1c56bd1345c230e542e9144811ad706f\"><code>ecabd13</code></a>\nPrepare changelog for 2.0.0 release</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/dc0039119c40a73363ef8aa36cecf5b44a260d7f\"><code>dc00391</code></a>\nAdd error matcher for Rust panics</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/70de7eb7ad0b09e07bfd410f1322fa8c0cabfe80\"><code>70de7eb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/103\">#103</a>\nfrom ChihweiLHBird/reuse-rustc-verbose-output</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c420b69d2b138295fd15e0657ee6df4082082b52\"><code>c420b69</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/105\">#105</a>\nfrom actions-rust-lang/use-build-warnings</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/d94d10afcf74900a3a5d9e06ca0f742e9939fa8b\"><code>d94d10a</code></a>\nUse CARGO_BUILD_WARNINGS for enforcing warning free compilations</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/34430aa949d489e52a8298cf44d37687816a388e\"><code>34430aa</code></a>\nReuse rustc verbose output instead of invoking rustc three times.</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/0267444136ce4919088f5eae0461f736f21356de\"><code>0267444</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/102\">#102</a>\nfrom actions-rust-lang/dependabot/github_actions/Swat...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/5fa2882d530879536093c3ccff2f02f8cf17d8fb\"><code>5fa2882</code></a>\nBump Swatinem/rust-cache from 2.9.1 to 2.9.2</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/8439c15d249cd2e2a5c80ad3da200c3d8c553ae4\"><code>8439c15</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions-rust-lang/setup-rust-toolchain/issues/100\">#100</a>\nfrom actions-rust-lang/dependabot/github_actions/acti...</li>\n<li><a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/commit/c8f944a9fe45dd3927fc57284f27f46460f067ba\"><code>c8f944a</code></a>\nBump actions/checkout from 7.0.0 to 7.0.1</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions-rust-lang/setup-rust-toolchain/compare/166cdcfd11aee3cb47222f9ddb555ce30ddb9659...ecabd13d1c56bd1345c230e542e9144811ad706f\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions-rust-lang/setup-rust-toolchain&package-manager=github_actions&previous-version=1.17.0&new-version=2.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-15T12:30:01Z",
          "tree_id": "ef1d4a60d6734bf666c5aa01d893f8dd15687631",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0a1f63f7605028b41c2fc47e581197032a890ed"
        },
        "date": 1789488065942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1567.58427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1537.9310546875001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1313.839453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.25380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.913671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.90966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.337109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 910.29697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.01748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 970.65703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 222.25966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 496.97548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 525.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 458.15234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.58779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1470.53857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1079.70029296875,
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
          "id": "c53575afa57d5dd786a7c64b126097d263eded6f",
          "message": "Add override to otel-collector version (#1963)\n\nAllow to override the latest version discovery when installing the\nOpenTelemetry collector for the metrics tests in GitHub Actions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-16T12:23:24Z",
          "tree_id": "9112357a296268de5b7f91041be7f73171eff061",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c53575afa57d5dd786a7c64b126097d263eded6f"
        },
        "date": 1789569855825,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1625.681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1563.18828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1305.5904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.30087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.65419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.14697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.93388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.82099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.39658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.79462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 950.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.48740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 929.5828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 232.9876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 513.09736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.4171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 521.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 455.8943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.153515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1473.179296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 921.96435546875,
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
          "id": "d889c9beb3b98cefe0d11bc2a1c5e5f2ef724101",
          "message": "Fix warnings setting in setup-rust-toolchain (#1962)\n\nHandling of warnings has changes in setup-rust-toolchain v2.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-16T13:29:44Z",
          "tree_id": "3b34f79e4c3e587633efa21bd6401e17bf8f40c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d889c9beb3b98cefe0d11bc2a1c5e5f2ef724101"
        },
        "date": 1789574109844,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1628.76025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1558.2247070312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1318.56630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.176953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.7443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.43583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.76669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.09833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 941.89521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.1869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 935.08740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 230.23310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 521.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.18427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 524.11884765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 472.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.59609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1109.42041015625,
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
          "id": "f2ffcbde7cc5aa1ec6f5714cf326f1de2d3c8b0e",
          "message": "Upgrade Rust toolchain to 1.98 (#1961)\n\nUpgrade Rust toolchain to 1.98 and address new clippy warnings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-17T06:39:30Z",
          "tree_id": "9c7da4c527a9329c16add4edbe8cfe9a6345b39d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2ffcbde7cc5aa1ec6f5714cf326f1de2d3c8b0e"
        },
        "date": 1789635620547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1620.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1577.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1334.9447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.403515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.137109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.92216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.32783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 969.17734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.32060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1003.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 220.05546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 504.478125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 562.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 505.72578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.96787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1461.0240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.55263671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cayoub@openai.com",
            "name": "Chris Ayoub",
            "username": "cayoub-oai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd69056aed9dd6ae004e3adb98adf4ba60f5c682",
          "message": "Fix directory lookup after empty S3 list pages (#1954)\n\nS3 can return empty `ListObjectsV2` pages with a continuation token.\nDirectory lookup currently treats these as evidence that the directory\nis missing, causing false `ENOENT` errors or exposing a file that should\nbe shadowed by a directory.\n\nContinue listing while both objects and common prefixes are empty and a\ncontinuation token is present. Stop once the directory is found or the\nlisting is exhausted.\n\nAs part of testing, reproduced the failure with unpatched Mountpoint\nagainst real S3 and verified that the patched binary resolves the\ndirectory and reads a nested file matching its direct S3 download.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. Fixes incorrect lookup results after empty,\ntruncated pages. Lookups may take longer because they now follow\npagination instead of returning an incorrect result early.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Chris Ayoub <cayoub@openai.com>",
          "timestamp": "2026-09-18T12:29:56Z",
          "tree_id": "71a1e7be1fe3c4e7b472594a0a948d8b4a889a06",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd69056aed9dd6ae004e3adb98adf4ba60f5c682"
        },
        "date": 1789743185034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1581.22216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1534.7847656249999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1305.230859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.42958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.41943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.06728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 965.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.066015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 981.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 221.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 482.365625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.85888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 559.8205078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 466.69248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.2359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1512.73466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1007.78388671875,
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
          "id": "5fb7671de0ea86b0fdd4ed7343cbd4094589138c",
          "message": "Bump taiki-e/install-action from 2.87.8 to 2.87.12 (#1965)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.87.8 to 2.87.12.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.87.12</h2>\n<ul>\n<li>\n<p>Update <code>wasmtime@latest</code> to 48.0.2.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.259.0.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.13.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.165.</p>\n</li>\n<li>\n<p>Update <code>protoc-gen-connect-openapi@latest</code> to 0.27.1.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.5.</p>\n</li>\n<li>\n<p>Update <code>cargo-nextest@latest</code> to 0.9.144.</p>\n</li>\n</ul>\n<h2>2.87.11</h2>\n<ul>\n<li>\n<p>Update <code>biome@latest</code> to 2.5.13.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.12.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.4.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.19.0.</p>\n</li>\n</ul>\n<h2>2.87.10</h2>\n<ul>\n<li>\n<p>Update <code>zizmor@latest</code> to 1.30.1.</p>\n</li>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.11.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.5.4.</p>\n</li>\n<li>\n<p>Update <code>release-plz@latest</code> to 0.3.164.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.3.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 2.2.0.</p>\n</li>\n</ul>\n<h2>2.87.9</h2>\n<ul>\n<li>\n<p>Update <code>oxfmt@latest</code> to 1.82.0.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.9.2.</p>\n</li>\n<li>\n<p>Update <code>kache@latest</code> to 0.18.0.</p>\n</li>\n<li>\n<p>Update <code>d2@latest</code> to 0.9.0.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.1.</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/3f74d7c16a4242f1c95561e98edc25d36adb4375\"><code>3f74d7c</code></a>\nRelease 2.87.12</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/e7f36aa5946476a40e5a2af1a5153c247e70d548\"><code>e7f36aa</code></a>\nUpdate wasmtime manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b208ecf6341e27a32fd9a0f8e1821a008552f41c\"><code>b208ecf</code></a>\nUpdate zola manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/497268209395d5883d6a88462e1c9c6bf3fbbeff\"><code>4972682</code></a>\nUpdate <code>wasmtime@latest</code> to 48.0.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/9f978f55d62c453c7eb420ab8cc3f13ba748aa42\"><code>9f978f5</code></a>\nUpdate <code>wasm-tools@latest</code> to 1.259.0</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/01d96944a7a5eab62bfb45b5ba70d36285f8534c\"><code>01d9694</code></a>\nUpdate <code>uv@latest</code> to 0.12.13</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/7af43af4f6fc1df7d126ab45be6a2e8770112f87\"><code>7af43af</code></a>\nUpdate <code>release-plz@latest</code> to 0.3.165</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5ebe8aae964ff306a8f78d0e61277195869cc640\"><code>5ebe8aa</code></a>\nUpdate <code>protoc-gen-connect-openapi@latest</code> to 0.27.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/c054431878700879a4853ce12d3c492be3580620\"><code>c054431</code></a>\nUpdate <code>mise@latest</code> to 2026.9.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/2ad5cec3cabb51430ef1c2ac40ba63f32add42a9\"><code>2ad5cec</code></a>\nUpdate <code>cargo-nextest@latest</code> to 0.9.144</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.87.8...v2.87.12\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.87.8&new-version=2.87.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-21T09:26:50Z",
          "tree_id": "119a1d5a6b3382c6f7e2f3f0da544f224fc341fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5fb7671de0ea86b0fdd4ed7343cbd4094589138c"
        },
        "date": 1789991240548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1499.5052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1482.42900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1287.4916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.053125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.73125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.10263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.97353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 926.49169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.8080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 875.35498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.37998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 486.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.94462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 482.42138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 456.13359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1464.42001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1078.78662109375,
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
          "id": "c39da96972976ab28c9bd4eb3ae6e670ee4e6394",
          "message": "Bump astral-sh/setup-uv from 10.0.1 to 10.1.0 (#1966)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n10.0.1 to 10.1.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.1.0 🌈 New output <code>python-runtime-id</code>and respect\nNO_PROXY</h2>\n<h2>Changes</h2>\n<p>This release adds more bheind the scene security improvements and\nalso 2 small improvements.</p>\n<h3>NO_PROXY</h3>\n<p>This action now respects <code>no_proxy/NO_PROXY</code> environment\nvariables which were previously ignored.</p>\n<h3>New output <code>python-runtime-id</code></h3>\n<p>The new output <code>python-runtime-id</code> can be used to know\nwhich python version exactly was installed if you use\n<code>activate-environment</code>. See <a\nhref=\"https://redirect.github.com/pyca/cryptography/pull/15572#discussion_r3913508686\">pyca/cryptography#15572</a>\nfor details on why this can be useful.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>fix: respect no proxy directive <a\nhref=\"https://github.com/mj0nez\"><code>@​mj0nez</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1037\">#1037</a>)</li>\n<li>Use JSON + a typed wrapper instead of TS codegen <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1025\">#1025</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Expose a Python &quot;identity&quot; output <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1036\">#1036</a>)</li>\n<li>Verify downloads with astral-sh/versions checksums <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1033\">#1033</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.12 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1041\">#1041</a>)</li>\n<li>chore: update known checksums for 0.12.10/0.12.11 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1038\">#1038</a>)</li>\n<li>chore: update known checksums for 0.12.9 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1035\">#1035</a>)</li>\n<li>chore: update known checksums for 0.12.7/0.12.8 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1031\">#1031</a>)</li>\n<li>chore: update known checksums for 0.12.6 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1030\">#1030</a>)</li>\n<li>chore: update known checksums for 0.12.5 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1020\">#1020</a>)</li>\n<li>Use self-repo syntax for all in-repo actions/reusable workflows <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1024\">#1024</a>)</li>\n<li>Pin one-shot tools <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1022\">#1022</a>)</li>\n<li>ci: remove obsolete direct push attempts <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1019\">#1019</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.1 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1018\">#1018</a>)</li>\n</ul>\n<h2>⬆️ Dependency updates</h2>\n<ul>\n<li>chore(deps-dev): roll up Dependabot updates <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1043\">#1043</a>)</li>\n<li>Harden npm install defaults <a\nhref=\"https://github.com/zaniebot\"><code>@​zaniebot</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1026\">#1026</a>)</li>\n<li>Add dependency cooldowns <a\nhref=\"https://github.com/woodruffw\"><code>@​woodruffw</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1021\">#1021</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bec219d24cd3e171d82865faccec33120bb574f4\"><code>bec219d</code></a>\nchore(deps-dev): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1043\">#1043</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/b90ec40d15bfa44c33c6700196eb6efcdddb4373\"><code>b90ec40</code></a>\nfix: respect no proxy directive (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1037\">#1037</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/421feb646df5262e7dd93bc54161edfa30372417\"><code>421feb6</code></a>\nchore: update known checksums for 0.12.12 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1041\">#1041</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f634bf473ad85bf3e23a613f52c5fa9f363874fc\"><code>f634bf4</code></a>\nExpose a Python &quot;identity&quot; output (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1036\">#1036</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a6772c8f0a09dc9e3582c70a994b0c55af921803\"><code>a6772c8</code></a>\nchore: update known checksums for 0.12.10/0.12.11 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1038\">#1038</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e105c8fb1d7b13074b851babdaef4185243c6a07\"><code>e105c8f</code></a>\nchore: update known checksums for 0.12.9 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1035\">#1035</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/cd13f9217092d43a771cf9ba7b09bdd3da8d7c4d\"><code>cd13f92</code></a>\nVerify downloads with astral-sh/versions checksums (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1033\">#1033</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3aef7b92c52cec135792ea1e95f4c77683d39e61\"><code>3aef7b9</code></a>\nchore: update known checksums for 0.12.7/0.12.8 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1031\">#1031</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d08d816a1ea176d61a318eff45abd3dffef415b1\"><code>d08d816</code></a>\nchore: update known checksums for 0.12.6 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1030\">#1030</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/19b4d1e990bec64818914c40230bde93a0de300b\"><code>19b4d1e</code></a>\nHarden npm install defaults (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1026\">#1026</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/20cfd1bf945f4377ade1205e4dbc17946fc9a30d...bec219d24cd3e171d82865faccec33120bb574f4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=10.0.1&new-version=10.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-21T10:00:24Z",
          "tree_id": "6efa144aad3422cb2afdcc12d26eec9b038cf599",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c39da96972976ab28c9bd4eb3ae6e670ee4e6394"
        },
        "date": 1789994114659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1446.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1428.4640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1195.87119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.0130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.06572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.18203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.82216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.069140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 892.38701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.37744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 872.583203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 233.54228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 568.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.49697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 471.58564453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 478.5416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.38828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1410.034765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 931.30673828125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}
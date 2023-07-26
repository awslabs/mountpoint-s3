window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d09e1e6420fe752d649e93c6ee528a3f9c48e4c",
          "message": "Add detailed CRT metrics and tweak per-request logging (#390)\n\n* Add detailed CRT metrics and tweak per-request logging\r\n\r\nThis change is a few related things to make logging more useful:\r\n- Include verbose CRT request metrics at trace level. We emit what we\r\n  think is the \"interesting\" stuff at higher levels, but for detailed\r\n  investigation we might want to see the raw CRT view.\r\n- Add parameters to request spans. This ensures that we know _which_\r\n  request is going wrong when we see log messages about requests.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Make ThreadId work on macOS\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-19T10:06:17-05:00",
          "tree_id": "51fcc97646b0631752b11d87573f4403107f776c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d09e1e6420fe752d649e93c6ee528a3f9c48e4c"
        },
        "date": 1689780511401,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.93359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5852.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1534.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 906.2763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1716.61,
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
          "id": "5364fccfe87a61229386ded5f169cf6e131440ad",
          "message": "Maintain metadata checksums and verify on unlink (#388)",
          "timestamp": "2023-07-19T19:33:08-05:00",
          "tree_id": "f2e2116eaab1cc33d960d0ff52ee2a128fb56e6d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5364fccfe87a61229386ded5f169cf6e131440ad"
        },
        "date": 1689814557772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.5546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5488.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.2080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1608.337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1228.2421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "7786053d72d2fe17e8a8d626bc33604616406b5f",
          "message": "Add merge_group as workflow trigger for tests and integ tests (#392)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-19T19:36:32-05:00",
          "tree_id": "165da5841a00ecab9327d1ed62ac1f0c95bcf966",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7786053d72d2fe17e8a8d626bc33604616406b5f"
        },
        "date": 1689814736279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.5166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5996.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1518.94921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1660.2109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.87109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "ef351495f187968c1560aa04289ecff67f9ef453",
          "message": "Fix sequential write test with O_RDWR flag (#393)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-20T13:39:44Z",
          "tree_id": "63d7d31461e454c0842eb6f2da239264cdcda5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef351495f187968c1560aa04289ecff67f9ef453"
        },
        "date": 1689864581842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.48828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5732.767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.5048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1610.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 999.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "6a717f9d47f5089ac599525371b402270e47ba07",
          "message": "Add always-successful workflow for DCO on merge_group event only (#397)\n\n* Add always-successful workflow for DCO on merge_group event only\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Address PR feedback adding comment\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-20T18:53:55Z",
          "tree_id": "41a2e65f93a5473540367262ca7fcf60401fd5d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a717f9d47f5089ac599525371b402270e47ba07"
        },
        "date": 1689882178906,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5627.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.8095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.0107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1752.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1137.611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1239.78,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7bbc21a5ddb49c2384e08dc7685e51b6c38e1bac",
          "message": "Emit warning-level logs to syslog when log directory is unset (#387)\n\n* Move logging module into its own file\n\nNo code changes, just relocating the module in preparation for the next\ncommit.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Emit warning-level logs to syslog when log directory is unset\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Document a little better\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-20T19:11:16Z",
          "tree_id": "56a8333ad423022072998a743a49c99225519511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7bbc21a5ddb49c2384e08dc7685e51b6c38e1bac"
        },
        "date": 1689883076380,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.61328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5692.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1543.15625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.4560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1407.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.6875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "8efeaa86a48e5cc1060a4b09b048bfe2affa2736",
          "message": "Remove IMDS call for instance throughput when IMDS is disabled (#394)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-20T19:11:39Z",
          "tree_id": "4471f9e0af433629d399f71ffa01093aa1225ca0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8efeaa86a48e5cc1060a4b09b048bfe2affa2736"
        },
        "date": 1689883111685,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5870.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 15.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1571.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "183a20c9674a6d3bd29d8b52d675fec06658f3ee",
          "message": "Implement setattr to support changing time attributes (#391)\n\n* Implement setattr to support changing time attributes\n\nSome applications like `touch` requires the file system to support\nchanging file last access and modification times. We don't support this\noperation because the last modification time for objects can't be set\nvia S3 API. However, it's possible to allow this only for the files that\nare being written because at that time it's still a temporary stat in\nMountpoint.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix unit test\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-07-21T09:08:07Z",
          "tree_id": "cf342407259005b6637707b616589c96a495585a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/183a20c9674a6d3bd29d8b52d675fec06658f3ee"
        },
        "date": 1689933460231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.0947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5636.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1576.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1247.0517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.0068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "bb0f479c07bc5630115a4e2105b85a5ebcd88fad",
          "message": "Introduce option to allow delete (#398)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-21T11:07:28Z",
          "tree_id": "0e493c7a85839afb80dc790ec83a81b53a43cd0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bb0f479c07bc5630115a4e2105b85a5ebcd88fad"
        },
        "date": 1689940264153,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5648.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1713.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1037.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "d3a8d05fb9dc9957fa45acf96d36367984392163",
          "message": "Remove delete feature (#399)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-21T12:32:28Z",
          "tree_id": "2c00fb0956349d9812db28d2559140fcf7e50e92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a8d05fb9dc9957fa45acf96d36367984392163"
        },
        "date": 1689945467553,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.2177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5598.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1699.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1111.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dpresteg@gmail.com",
            "name": "Derek Prestegard",
            "username": "dprestegard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ed61a214fcbe59d3cf93097c4d01f19f1e6c3b96",
          "message": "Refactor Dockerfile and update README (#402)\n\nSigned-off-by: Derek Prestegard <dpresteg@gmail.com>",
          "timestamp": "2023-07-24T15:15:22Z",
          "tree_id": "53ef58e75f84dce0df03968dfe1f2514f15b0ad7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed61a214fcbe59d3cf93097c4d01f19f1e6c3b96"
        },
        "date": 1690214465947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.59375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5556.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1683.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 888.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 41.84375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "c90fe480c5562bbbeda7426f3c91c8d59861c8fc",
          "message": "Update inode status on fsync or write failure (#395)\n\n* Update inode status on fsync\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove sleep calls in tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove additional sleep calls\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-24T15:28:44Z",
          "tree_id": "211a1b6ca8bb7d523aaff0925b54db9b6031d910",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c90fe480c5562bbbeda7426f3c91c8d59861c8fc"
        },
        "date": 1690215504234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.7890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5465.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1472.591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1089.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "39ec6d61e2b1f62b9f7354781a78e4127d9fb8af",
          "message": "Invalidate inodes when the remote object changes (#401)\n\n* Invalidate inodes when the remote object changes\n\nWe currently try really hard to re-use inodes even when the remote\nobject changes. That's problematic for consistency, as the new test\nadded in this PR shows: if there's an existing open file handle to the\nold file, the page cache can conflate the old and new file contents,\nsince they share an inode.\n\nIn NFS, this is solved with \"generation numbers\" -- we'd bump the\ngeneration number every time the remote file changed, and the kernel\nknows to invalidate file handles with outdated generations. But FUSE\ndidn't correctly handle generation numbers until Linux 5.13 [[1]], which\nis too recent for us to rely on (e.g., AL2's kernel is 5.10).\n\nSo instead, let's just give up on reusing inodes, and enforce a new\ninvariant: inodes are recreated whenever the remote object changes,\nincluding either a kind change (Directory <-> File) or an ETag change.\nThis lets us detect these changes and so correctly couple each file\nhandle to its actual object version, forbidding the kernel from sharing\ncaches between file versions.\n\nThe new test also exposed a bug in the prefetcher: when a request fails,\nthe prefetcher doesn't reset all its state, and so a subsequent read\nmight be to a confused/wrong offset.\n\n[1]: https://patchwork.kernel.org/project/linux-fsdevel/patch/20210609181158.479781-1-amir73il@gmail.com/\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Move staleness check into inode\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix test that was assuming inodes don't change\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T15:56:15Z",
          "tree_id": "393a170cf15c2617f7eb3a8b7c38b3a9fbea17bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39ec6d61e2b1f62b9f7354781a78e4127d9fb8af"
        },
        "date": 1690217355789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.5625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5738.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.8046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1564.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1142.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.5048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fe81ff551ebd0031c94ca9f8761ed6e1a70c60",
          "message": "Bump some dependencies to mostly remove `atty` (#403)\n\n* Bump some dependencies to mostly remove `atty`\n\nIt's no longer in our release dependency closure, but still in the test\nclosure through two sources:\n* fuser uses clap v3 in its examples, which still depends on atty\n* fuser uses env-logger v0.9 in its examples, which still depends on\n  atty\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix list example\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-24T17:24:51Z",
          "tree_id": "3ce625cb4e3cf9507d942c71cf1d6e158613c49e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/33fe81ff551ebd0031c94ca9f8761ed6e1a70c60"
        },
        "date": 1690222107417,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.48828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.1982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.98046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5887.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1685.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1173.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "147f0b3448be5b0cbeeb081ca3ee940420a81e53",
          "message": "Adds support for storage class in client (#406)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-25T12:51:17Z",
          "tree_id": "d7bf7d38c7ef3913bc3bba6c4fc8322e14ed30c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/147f0b3448be5b0cbeeb081ca3ee940420a81e53"
        },
        "date": 1690292123530,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.1318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5914.8857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.0625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.19140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1674.7099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.3466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1087.455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
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
          "id": "c40ff340fcde9c6500d57982578bdcc4384a31f6",
          "message": "Update CRT submodules to latest releases (#407)\n\n* Update CRT\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update UPDATING_CRT.md to show diff for all CRT submodules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-25T12:53:01Z",
          "tree_id": "29af0fbd4d978fe3466394ae1a717140c62f41fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c40ff340fcde9c6500d57982578bdcc4384a31f6"
        },
        "date": 1690292166632,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.87109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5890.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1602.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 2002.72,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a",
          "message": "fs: refactor to use a structured error type (#405)\n\nToday the `fs` layer's methods all return `libc::c_int`, which means the\nconversion to errno happens here. This throws away a lot of error\ninformation, and we find ourselves adding ad-hoc calls to `error!` to\nsave context we think is important.\n\nThis change refactors `fs`'s methods to return a new structured `Error`\ntype, which still includes the errno `c_int` but also a message and an\noptional source (an `anyhow::Error`). We could almost use\n`anyhow::Error` directly except that we need the errno conversion and\nwe'd like to attach a little extra context message to the errors. We\nconstruct this wrapper with a new `err!` macro that puts the message and\nsource in the right place.\n\nThis change removes the ad-hoc `error!` logging we were using in a few\nplaces in `fs` previously. I'll follow it up with another change that\nadds a new proc macro to annotate every `fs` function to automatically\nprint its error in failure cases, which will return these log messages\nand also add all the missing ones.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T15:03:35Z",
          "tree_id": "69a1c19d604bc27496bf24071621d04f7eab91d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/173e1c5e1fb32d6ffae8cecff6eea3032a6ca42a"
        },
        "date": 1690299815278,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.2412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.84375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5555.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1799.375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.1435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1716.61,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c419a6e86d6c32b5ceaf2c700291072754b4d9fa",
          "message": "Endpoint Resolver for each request (#396)\n\n* Included endpointConfig in S3Client and updated with latest codbase\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added regex for ARN and added region retries for special requests like transfer acceleration MRAP etc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the comment for ARN supporting Regex\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the path prefix of endpoint uri\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added specific regex for ARN matching\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary error cases and added arn bucket name test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Made a few changes according to recommendation\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added tests for ARN, still need to exclude objects from it\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added all the recommendations, some tests left\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added unit tests for endpoint config\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected borrowing\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed arg group of addressing style\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved error message for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes in ChangeLog for mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected gramatical mistake in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Simplified ARN even further\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added failure test for ARN\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the changes recommended and failure test\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Remove unnecessary assert_matches dependency\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-25T19:35:05Z",
          "tree_id": "f3c2c380ea22cc7c936a723b826c0920ba056abd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c419a6e86d6c32b5ceaf2c700291072754b4d9fa"
        },
        "date": 1690316351351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5736.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1916.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 828.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1239.78,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d06c127d482212b89291ffc62a3604169c5db6",
          "message": "Fix region detection with specified region (#409)\n\n* Fix region detection with specified region\n\nWe weren't setting the region in the endpoint config if it was specified\nmanually. This passed our tests because it was defaulting to us-east-1\nand that's where our CI is. Instead, let's start with an obviously wrong\nplaceholder region and fill it in when creating the client.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix warning message\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-26T10:32:22Z",
          "tree_id": "1f8f7ef8166bb0826a3dfe764d766c116237b52b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47d06c127d482212b89291ffc62a3604169c5db6"
        },
        "date": 1690370581978,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.90234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5786.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1846.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1042.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dfc30c1d591b273274ec870af9caf8a34dd3ca0",
          "message": "Adds storage class (#400)\n\n* Adds in support to configure storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* removes default storage class\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds integration tests\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* changes as per review comments\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fix lint error\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* fmt\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* adds in tests for mock client\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* removes unused imports\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* return storage class in option\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n* throw error if obj not found\n\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Ahmar Suhail <ahmar.suhail@gmail.com>\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2023-07-26T14:22:08Z",
          "tree_id": "5820419ade3f78e5eb2a31b92c87f32bdd726f69",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7dfc30c1d591b273274ec870af9caf8a34dd3ca0"
        },
        "date": 1690384029935,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5609.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1585.3408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 935.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.25,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1690384030505,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}
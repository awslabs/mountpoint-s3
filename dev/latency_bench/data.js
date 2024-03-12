window.BENCHMARK_DATA = {
  "lastUpdate": 1710280701866,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "896c6d3c80b3c5442679f637c0fc7fac83e90e52",
          "message": "Account already downloaded data when resetting a prefetcher (#797)\n\n* Account already downloaded data when resetting a prefetcher\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor to use absolute offsets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refine naming and imports\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Use std::sync, reorder code in push\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [2]\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [3], ignore shuttle prefetch tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Be precise when checking available data\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:42:38Z",
          "tree_id": "beac76695707ccd9f719bc5c80951555f3be7622",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896c6d3c80b3c5442679f637c0fc7fac83e90e52"
        },
        "date": 1709773668565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.486,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 61.846841600000005,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.6614015,
            "unit": "milliseconds"
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
          "id": "0fbc8e9d73079fe762d60806f223d9ab0a0eaa72",
          "message": "Add fio job to benchmark read-skip-read pattern (#799)\n\n* Add fio job to benchmark read-skip-read pattern\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the benchmark\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:43:29Z",
          "tree_id": "0c5d6e9e6258e17df23168ee6be7468cd9f4cac0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbc8e9d73079fe762d60806f223d9ab0a0eaa72"
        },
        "date": 1709773723132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.444,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 59.468705,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.8616186,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "77476b751afc1cc17e79be4caea4992daaeed639",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T09:38:37Z",
          "tree_id": "5c34c94f0ae5728da675462b29266d63c77c12a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77476b751afc1cc17e79be4caea4992daaeed639"
        },
        "date": 1709805005156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.807,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.915171,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.4384517,
            "unit": "milliseconds"
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
          "id": "d61d688f93ffb3f35fa1019a0b36f6c2e8228107",
          "message": "Record seek_distance metrics whether or not the seek triggers a reset (#800)\n\nBy always recording the length of a seek attempt, we should get a better picture of the read pattern. The `out_of_order` metric can already be used to determine whether or not the seek could be performed without resetting the prefetcher.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T11:16:43Z",
          "tree_id": "ed96e6c7ad34c0ec4ac7da40278fda7b058f06f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d61d688f93ffb3f35fa1019a0b36f6c2e8228107"
        },
        "date": 1709811827570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.296,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.405321,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.0474662,
            "unit": "milliseconds"
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
          "id": "846f026e87ade3e59afbaabaa5c2adf9967aee5f",
          "message": "Add request ID to meta request failures and add tests (#790)\n\nA side effect of https://github.com/awslabs/mountpoint-s3/pull/669 was\nthat there's now no way to get request IDs for failed requests at the\ndefault logging settings, as only DEBUG-level messages include the\nrequest IDs. This change adds request IDs to the meta request failure\nmessage when available, so that these WARN-level messages still include\nrequest IDs.\n\nI also added some new infrastructure to test metrics and log messages.\nFor metrics, we build a new `metrics::Recorder` that collects all the\nmetrics and can then be searched to find them. For log messages, we\nbuild a `tracing_subscriber::Layer` that collects all tracing events\nemitted while enabled. In both cases, the new objects aren't thread\nsafe, as both `Recorder`s and `Layer`s are global state. So these tests\nneed to continue to use `rusty_fork` to split into a new process per\ntest.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T12:05:58Z",
          "tree_id": "0325df875d36498b013aeec3f2f2e81a05f60972",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/846f026e87ade3e59afbaabaa5c2adf9967aee5f"
        },
        "date": 1709814740097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.157,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.078,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.37919559999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.20120259999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "a82d1d261d9dfabb82bc150c5905ee5a406c1180",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T13:57:16Z",
          "tree_id": "7ee9966a0adc2791a7c23a096946f04b8dd1985f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a82d1d261d9dfabb82bc150c5905ee5a406c1180"
        },
        "date": 1709820558820,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.094,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.669,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 54.9322224,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.8887609,
            "unit": "milliseconds"
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
          "id": "56591e7b6dd2b49acefa9ce8df7eaacb5f3f9647",
          "message": "Release v1.5.0 (#801)\n\n* Release v1.5.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add CRT change\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T14:49:54Z",
          "tree_id": "b6750d5d5d3efa2d4f04a0ea66ab5d785cc30a75",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56591e7b6dd2b49acefa9ce8df7eaacb5f3f9647"
        },
        "date": 1709824537354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.215,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.924,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.1332263,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.4512896,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "9aecc8cda680228b149d8aba37c6ce5ddfd12a12",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T17:52:08Z",
          "tree_id": "98a46e7fa1f8d9345aecbb5a800173d55fc12440",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9aecc8cda680228b149d8aba37c6ce5ddfd12a12"
        },
        "date": 1709834628031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.321,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.27636820000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.3131893,
            "unit": "milliseconds"
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
          "id": "f5436c6ac8ae5438932b0a0fa629285780f8eddd",
          "message": "Re-enable Shuttle tests (#804)\n\nThe Shuttle issue was fixed by https://github.com/awslabs/shuttle/pull/139\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T22:18:35Z",
          "tree_id": "e4c1fe6bba7a8221b14b84ac07af56790a49335d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5436c6ac8ae5438932b0a0fa629285780f8eddd"
        },
        "date": 1709851524126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.212,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.19153990000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.198616799999996,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd42dd6f8eb33a2d6546173fd87c616f4cfe11b",
          "message": "Adding benchmarks that use caching. (#783)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T22:21:07Z",
          "tree_id": "b721d6a5afd6d6f0111c172beda953b9be70f590",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/afd42dd6f8eb33a2d6546173fd87c616f4cfe11b"
        },
        "date": 1709851645978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.679,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.27032209999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8308144,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "004d41315be731d1f9d02e4eafb5e587e53abe9f",
          "message": "Update documentation for benchmarking and make env var name consistent.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T08:20:49Z",
          "tree_id": "d58949c7e48899056f818a9f160a418064c88381",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/004d41315be731d1f9d02e4eafb5e587e53abe9f"
        },
        "date": 1709887705257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.209,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.6,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.0905883,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.868334,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "ab4e842e803359539932d003615ea34da4227f0d",
          "message": "Do not mount local storage by default and update documentation.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T12:09:06Z",
          "tree_id": "43e834235e9caa5c2bba8c7a3b0638baefc7e980",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab4e842e803359539932d003615ea34da4227f0d"
        },
        "date": 1709900400661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.854,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.1316173,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.7603882,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "471abc12a33ce76139d7f094682bd41aedc6898c",
          "message": "Benchmarks improvements (#806)\n\n* Use same fio files for caching benchmarks and remove start delay.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Switching from high-performance to nvme-high-performance runner.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Update documentation for benchmarking and make env var name consistent.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Do not mount local storage by default and update documentation.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T13:34:57Z",
          "tree_id": "43e834235e9caa5c2bba8c7a3b0638baefc7e980",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/471abc12a33ce76139d7f094682bd41aedc6898c"
        },
        "date": 1709906379942,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.096,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.218,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 57.6599459,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.9174566,
            "unit": "milliseconds"
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
          "id": "4fd8601ed5aea8d3fb2cf5a12f959b5021fb15f1",
          "message": "Publish new crate versions (#802)\n\nThis is to get the recent CRT fixes out for the PyTorch connector. I\nalso bumped the `mountpoint-s3-crt-sys` crate version to be in lockstep\nwith `mountpoint-s3-crt`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-08T14:37:37Z",
          "tree_id": "00e9a7a7e0cb0cb6312af1a3550146939dc3d46d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4fd8601ed5aea8d3fb2cf5a12f959b5021fb15f1"
        },
        "date": 1709910201816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.99,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 66.8172668,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.5548109,
            "unit": "milliseconds"
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
          "id": "74df3e2e00c4a7c567832a40287830ee81fe2d26",
          "message": "Verify SSE settings checksum before and after uploading an object (#745)\n\n* Verify SSE settings checksum before and after uploading an object\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make fmt\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix typos and documentation\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Compare strings in verify_response, other review fixes\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Use exit() instead of panic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Log CLIArgs with debug level, improve style\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-08T15:44:09Z",
          "tree_id": "dddd548f4a0bfc6475fe4f1b32cfb0fa06b7c84d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/74df3e2e00c4a7c567832a40287830ee81fe2d26"
        },
        "date": 1709914237611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.099,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.873,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 55.918250799999996,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.2337991,
            "unit": "milliseconds"
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
          "id": "81ae0da9f47b9a95644989e1977c5accaf6ebd62",
          "message": "Add new cases of expected behaviours in troubleshooting doc (#789)\n\n* Add new cases of expected behaviours in troubleshooting doc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added a few more logs and mitigations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* add recommended changes in troubleshooting doc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-03-08T18:11:57Z",
          "tree_id": "5e7c82e9c6f0bb8e06422ebc993b7b379b98b69c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81ae0da9f47b9a95644989e1977c5accaf6ebd62"
        },
        "date": 1709923085844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.056,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.88795710000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.587101700000005,
            "unit": "milliseconds"
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
          "id": "1f071e0ee6efb2d50a0ba0aef632f042c8d5e573",
          "message": "Return error from `Uploader::put` on checksum mismatch (#809)\n\n* Return error from Uploader::put on checksum mismatch\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add tests for Uploader::new with sse\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add fs-level test for sse corruption\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-12T17:09:05Z",
          "tree_id": "98541169c9816ddf4ede77b5fb869c5a79cffadc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f071e0ee6efb2d50a0ba0aef632f042c8d5e573"
        },
        "date": 1710264873369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.094,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.143,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.0238585,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.0050098,
            "unit": "milliseconds"
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
          "id": "1f071e0ee6efb2d50a0ba0aef632f042c8d5e573",
          "message": "Return error from `Uploader::put` on checksum mismatch (#809)\n\n* Return error from Uploader::put on checksum mismatch\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add tests for Uploader::new with sse\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add fs-level test for sse corruption\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-12T17:09:05Z",
          "tree_id": "98541169c9816ddf4ede77b5fb869c5a79cffadc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f071e0ee6efb2d50a0ba0aef632f042c8d5e573"
        },
        "date": 1710270457542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.104,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.198,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.305,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.4,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 103.416902,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.2031694,
            "unit": "milliseconds"
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "cfd46aa1fd79488c01e0a6d13c4187b40541da98",
          "message": "Workflow updates for AL2023\n\n1. Remove Cargo caching -- we have too many build variants in CI at this\n   point, and the cache is limited to 10GB per repo, so in practice it\n   never/rarely hits before evicting random variants.\n2. Update actions to versions that we previously deferred because they\n   required the node20 runtime, which didn't work on AL2.\n3. Fix a syntax thing in the cache build workflow.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T19:26:45Z",
          "tree_id": "865b6c69e925edb15d387a6e6f854e9a8b14d683",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfd46aa1fd79488c01e0a6d13c4187b40541da98"
        },
        "date": 1710272358576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.29,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.461,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 68.28068640000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.3383935,
            "unit": "milliseconds"
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "de1af8a7375f16002399d3b944f31837b8aea3a2",
          "message": "Workflow updates for AL2023\n\n1. Remove Cargo caching -- we have too many build variants in CI at this\n   point, and the cache is limited to 10GB per repo, so in practice it\n   never/rarely hits before evicting random variants.\n2. Update actions to versions that we previously deferred because they\n   required the node20 runtime, which didn't work on AL2.\n3. Switch how we install Rust, since actions-rs/toolchain is deprecated.\n4. Move ASan workflows to run on ARM runners, which are much faster.\n5. Fix a syntax thing in the cache build workflow.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T21:44:05Z",
          "tree_id": "96019e2500a2f27ed74325002b43e98deb40e9ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de1af8a7375f16002399d3b944f31837b8aea3a2"
        },
        "date": 1710280701331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.199,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.253,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.037,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.7673345,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.9520617,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}
window.BENCHMARK_DATA = {
  "lastUpdate": 1710295075311,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
        "date": 1709811781649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.519,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.286,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.401,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.0663981,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.279349800000002,
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
        "date": 1709814681898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.516,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.248,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.534,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.2947208,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.662889399999997,
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
        "date": 1709820478439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.514,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.278,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.984,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.808343,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.7155274,
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
        "date": 1709824472150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.517,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.243,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.952,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.1338455,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3208865,
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
        "date": 1709834552873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.523,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.289,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.538,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.0006828,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.138090899999998,
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
        "date": 1709849805970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.519,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.227,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.002,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.322874300000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3913442,
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
        "date": 1709851525812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.528,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.293,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.528,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.1306547,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.9771759,
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
        "date": 1709851645501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.529,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.285,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.667,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.7953212,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.977201,
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
        "date": 1709887722322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.538,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.281,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.989,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.5432808,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.9568933,
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
        "date": 1709906310030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.533,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.248,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.724,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.5778082,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.060989399999997,
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
        "date": 1709910105369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.529,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.27,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.002,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.6165018,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.1169339,
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
        "date": 1709914184737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.525,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.278,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.033,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.8444379,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.086142600000002,
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
        "date": 1709923016912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.532,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.287,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.369,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.2306093,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3554086,
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
        "date": 1710264867531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.505,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.234,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.853,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.575662,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.2222303,
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
        "date": 1710270489175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.502,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.232,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.184,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.788686100000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.405431399999998,
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
        "date": 1710272273220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.521,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.279,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.562,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.2104249,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.988270699999998,
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
        "date": 1710280683606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.514,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.246,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.487,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.744509899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3353006,
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
          "id": "be52b609c1a314f6cb9c1ddd99f76f61ca086594",
          "message": "Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T22:25:09Z",
          "tree_id": "a8d1a82f6598133ee1b6d721a861966c74591916",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be52b609c1a314f6cb9c1ddd99f76f61ca086594"
        },
        "date": 1710283307477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.515,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.284,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.606,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.6129115,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3682015,
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
          "id": "b74b6b4444acda566a5421cad1a8dddecb58e5f8",
          "message": "Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T22:46:21Z",
          "tree_id": "0a6deb768b46608b3d7b20792e8d880fbd07c5d4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b74b6b4444acda566a5421cad1a8dddecb58e5f8"
        },
        "date": 1710294956609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.499,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.267,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.351,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.982847399999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.3222443,
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
          "id": "5cba78ff99dd094d6158730fd048e8c3228da858",
          "message": "Small docs updates (#810)\n\nFour small changes:\n1. The notice about 1.4.0 was stale now that we've released newer\n   version(s).\n2. The build-from-source instructions were hard to copy/paste because\n   they required interactive input.\n3. The CSI driver wasn't mentioned in the docs.\n4. The AUR repo is unmaintained (not updated since last July), so we\n   shouldn't point customers to it.\n\nI also did a little bit of minor clarifying/editing.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T22:54:59Z",
          "tree_id": "2542d05585a732ecaf67dcf6afabe7260f1a640d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cba78ff99dd094d6158730fd048e8c3228da858"
        },
        "date": 1710295074798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.5,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.25,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.928,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.9804561,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.966501,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}
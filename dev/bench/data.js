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
          "id": "a36db96025c19d821c96ddb84b8f77d399f212ea",
          "message": "Update README for Amazon Linux 2023 (#212)\n\nThe only difference is that git needs to be manually installed. I also\r\nadded a missing step to source the Cargo environment variables, just in\r\ncase folks don't read the output of the Rustup installer.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-14T18:22:08+01:00",
          "tree_id": "10ae10c38224781979e35fc295ad185656306b99",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a36db96025c19d821c96ddb84b8f77d399f212ea"
        },
        "date": 1681494161426,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1045.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6396.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 188.552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2215.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.365234375,
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
          "id": "ad82a216efdc7f0ec1744b198140042b1cc3a48e",
          "message": "Make opened file visible in lookup (#210)\n\n* Make opened file visible in lookup\r\n\r\nWe have implemented this in readdir but missed it in lookup. We want\r\nthe new files to be visible there as well. There might be two options\r\nhere, 1/ We can lookup locally first and return immediately when the\r\nitem we want is an uncommitted inode and we don't have to call any S3\r\nAPIs since it should not exist in S3 yet, or 2/ we can lookup remotely\r\nfirst then fall back to local. In this commit, we go with the second\r\noption because there is a possibility that someone could make a change\r\nremotely like creating a directory marker that shadow the uncommitted\r\nfile.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-14T18:21:57+01:00",
          "tree_id": "22dad157c58667e27b7361fa659cdec7a085b706",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad82a216efdc7f0ec1744b198140042b1cc3a48e"
        },
        "date": 1681494163111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.3466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 2.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1095.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6520.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 193.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2095.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.7373046875,
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
          "id": "97ea1d14c332503448d54f8fa315ec080c2cf53b",
          "message": "Add ETag checks to S3 requests made in prefetcher (#182)\n\n* Added the Etag to the getObject Request from lookup\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added None for etag parameter in GetObject\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the struct ETag and modified according to reviews\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Addressed Clippy and shuttle tests error\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Addressed additional clippy errors\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added integration test for getObject with correct and incorrect E-Tag\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test case for the Precondition failed error in prefetcher. Modified rest according to the review.\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added default method for setting etags, implemented FromStr trait andother recommedations from review\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed unused imports\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made Precodition Failed error statement more generic\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* precondtion error message improved and removed FromStr comment\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-04-14T17:28:10Z",
          "tree_id": "ed9843bb1323bded9b4c0fe09a05e6e2b0b33554",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/97ea1d14c332503448d54f8fa315ec080c2cf53b"
        },
        "date": 1681494427666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.8671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.32421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.4296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 954.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 15.234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6422.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 169.259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.4189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1976.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 21.6572265625,
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
          "id": "d41a4d942fd9da68d5f6d669653be37b12f12749",
          "message": "Add benchmark for readdir (#213)\n\n* Add benchmark for readdir\r\n\r\nIn this commit, we add a new benchmark script for readdir operation. The\r\nbenchmark itself is pretty simple, we're just doing ls against pre-generated\r\ndirectories with different size. However, comparing the results is a bit\r\ntricky because we're now measuring latency instead of throughput which\r\nis what we do in the existing benchmark.\r\n\r\nOur current CI workflows don't support this scenario, so we have to\r\nintroduce another workflow job just for this kind of benchmark. This new\r\njob will run the latency benchmark script, compare the new result with\r\nthe previous one, and store them at dev/latency_bench path.\r\n\r\nMax number of data points for the chart is also added in this commit to\r\nkeep the chart clean.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Refactor bench script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update benchmarking doc and add some fio files\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-18T22:09:48-05:00",
          "tree_id": "a408ce70aaa726c3f9c2ab00670f6305a24aae8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d41a4d942fd9da68d5f6d669653be37b12f12749"
        },
        "date": 1681874947542,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.71484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.73828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 872.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6026.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1904.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.4736328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jb2cool@gmail.com",
            "name": "Jason Bramwell",
            "username": "jb2cool"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70b2b684e949c0966c5d2507f875279ae380a9f9",
          "message": "Adding instructions for building on Debian/Ubuntu (#215)\n\n* Adding instructions for building on Debian/Ubuntu\r\n\r\nAdded in dependencies for Debian/Ubuntu and broke RPM/Deb out into their own lines.\r\n\r\nSigned-off-by: Jason Bramwell <jb2cool@gmail.com>\r\n\r\n* Minor tweaks\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Jason Bramwell <jb2cool@gmail.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-19T03:26:46Z",
          "tree_id": "c4e5f1ee5bf2bcfb9718fdbd1118984fa74da9f4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70b2b684e949c0966c5d2507f875279ae380a9f9"
        },
        "date": 1681876039399,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.73046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1001.7197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6467.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1949.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.0458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.97265625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f3b98086ab5f6b7c7454c50cc96bddeabf9f35f",
          "message": "Add support for AWS profile and unsigned requests as command line arguments (#209)\n\n* Add supports for AWS profile and unsigned requests.\r\n\r\nSupports profile and unsigned requests with the following:\r\n\r\n* Add option --profile for a specific profile in the AWS credentials file #151\r\n* Add support for unsigned requests #181\r\n\r\nThis commit also includes changes that rust defined signing_config owns a\r\ncredentials_provider so it can live as long as signing_conig.\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\n\r\n* Add header for no-sign-request help\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Charles Zhang <zyaoshen@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-20T17:33:22Z",
          "tree_id": "5b43b74f54597b39b9e2710b9a924f110ecc0790",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f3b98086ab5f6b7c7454c50cc96bddeabf9f35f"
        },
        "date": 1682013252438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.34765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 989.908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6244.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2226.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.62890625,
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
          "id": "f57561899ef2e5fc1be30e044c873e7ddf754221",
          "message": "Add time to first byte benchmark (#217)\n\nIn this commit, we add a new type of benchmark to measure the latency\r\naspect of the read operation.\r\n\r\nWe do this by running fio workloads that send one byte read request with\r\none byte block size against existing files. The time it takes to complete\r\nthis operation will be measured and recorded as time to first byte read.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-21T12:40:09-05:00",
          "tree_id": "04bfc5e1cb9a7d1a6331b8b286d05ad61f1f7013",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f57561899ef2e5fc1be30e044c873e7ddf754221"
        },
        "date": 1682100058838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 957.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6249.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2037.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.880859375,
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
          "id": "75b3d583e63ece7fff6c4435d04a16a328effaec",
          "message": "Remove children not found on lookup and refactor update methods (#216)\n\n* Remove children not found on lookup & refactor update methods\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Fail early on UpdateStatus::Neither.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Simplify ownership in UpdateStatus\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add tracing on key not found and make control flow clearer\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-25T10:50:47-05:00",
          "tree_id": "54772f57b2cc2f98cc283312481d4bc6b57a1221",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/75b3d583e63ece7fff6c4435d04a16a328effaec"
        },
        "date": 1682439111879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 823.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6156.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1888.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.4052734375,
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
          "id": "0962c03350cc2e48a287641210d6c0ceeeffc3a2",
          "message": "Update vendored fuser to 076c9d9 (#222)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-26T11:05:57+01:00",
          "tree_id": "f8a8a7160b164bf0820cfbb374e59c1f6979212c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0962c03350cc2e48a287641210d6c0ceeeffc3a2"
        },
        "date": 1682504809092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.0595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1003.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6345.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2129.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.16796875,
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
          "id": "fdfee3da27beb1c289243865cedf3cfe796a90c4",
          "message": "Bump aws-sigv4 from 0.54.1 to 0.54.2 (#223)\n\nBumps [aws-sigv4](https://github.com/awslabs/smithy-rs) from 0.54.1 to 0.54.2.\r\n- [Release notes](https://github.com/awslabs/smithy-rs/releases)\r\n- [Changelog](https://github.com/awslabs/smithy-rs/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/awslabs/smithy-rs/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-sigv4\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-04-26T16:50:13Z",
          "tree_id": "b36fc04be3c55e4f5a31ca5fe33a8debcef91fce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fdfee3da27beb1c289243865cedf3cfe796a90c4"
        },
        "date": 1682529098874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.1220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 882.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6358.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2236.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.88671875,
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
          "id": "330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd",
          "message": "Implement mkdir (#202)\n\n* Implement mkdir to create local directories\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Acquire locks from top to bottom in finish_writing\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Use mount time for local directory stat\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add section for `mkdir` to SEMANTICS.md\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Improve comments and add check for cycles\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-26T20:07:30-05:00",
          "tree_id": "0763785cf0f51ede4b096dbc9c2c8b2a867407ee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/330c6320b73ac78e5e8d5727a2dcf21b7cf1b0cd"
        },
        "date": 1682558886178,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1047.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6529.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 150.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.21875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1854.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.0615234375,
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
          "id": "748e70878149412e29ad1f7b711f928750f8371b",
          "message": "Update CRT submodules and document the process (#224)\n\nAddress issue #219.\r\n\r\nUpdate CRT submodules to the latest tagged releases:\r\n\r\n* aws-c-auth v0.6.26\r\n* aws-c-cal v0.5.26\r\n* aws-c-common v0.8.17\r\n* aws-c-compression v0.2.16\r\n* aws-c-http v0.7.7\r\n* aws-c-io v0.13.21\r\n* aws-c-s3 v0.2.8\r\n* aws-c-sdkutils v0.1.9\r\n* aws-checksums v0.1.14\r\n* aws-lc v1.9.0\r\n* s2n-tls v1.3.42\r\n\r\nAlso add short document to describe the process.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-04-28T08:36:10Z",
          "tree_id": "be032113da4336de31b64378e620d235b0075724",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/748e70878149412e29ad1f7b711f928750f8371b"
        },
        "date": 1682672228082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 803.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6392.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 174.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2177.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.0732421875,
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
          "id": "0329646254f252c2b1da508a214df3e249c2908f",
          "message": "Add range argument to client download example (#227)\n\nThis was helpful for debugging #218 and #226.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-04-28T12:45:35-05:00",
          "tree_id": "1c6a61f6710d44fb629b432813ea8da47445530b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0329646254f252c2b1da508a214df3e249c2908f"
        },
        "date": 1682705168193,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 993.5,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6293.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2194.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.8427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.931640625,
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
          "id": "977473426b192a21890da1777f11be6e0732c036",
          "message": "Bump aws-c-s3 to v0.2.9 (#228)\n\nThis picks up the fix for #218.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-02T10:46:44-05:00",
          "tree_id": "cfaa7073603a25d40cb5010675f1dcf3d8c42bb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/977473426b192a21890da1777f11be6e0732c036"
        },
        "date": 1683043586558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 607.2958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6289.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.15625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1973.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.29296875,
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
          "id": "a9ebe6ddb31c00e0c14ab84bab6f47e64dcf5215",
          "message": "Fuse Test Etag prefetcher (#225)\n\nAdded fuse test to check prefetching behaviour with Etag\r\n\r\nSigned-off-by:sauraank <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-02T13:02:55-05:00",
          "tree_id": "d981dd917e91ec27c4d02dd7fdc85bfb96bbbb6e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a9ebe6ddb31c00e0c14ab84bab6f47e64dcf5215"
        },
        "date": 1683051862631,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.2412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 828.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5992.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.9501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1884.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.056640625,
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
          "id": "beabd7fca0371c7e90bbb0e9936a3d179a9436ec",
          "message": "Add get_object test with 1 byte range (#231)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-03T18:56:09-05:00",
          "tree_id": "6106c887258d4998468bbce15df9871f3d56367f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/beabd7fca0371c7e90bbb0e9936a3d179a9436ec"
        },
        "date": 1683159423587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.7412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.9755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 650.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6395.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2142.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.162109375,
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
          "id": "ea5ba334d3e21b9b134c1c6e79c4578f8e30dd3a",
          "message": "Handle channel closure in PartQueue (#233)\n\nImprove PartQueue to report an error (rather than blocking indeterminately) when trying to read beyond the body returned by the GetObject request. \r\n\r\nThe previous behavior, compounded with a bug in the CRT (now fixed: #228) where GetObject unexpectedly returned an empty body, manifested in #218.\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-04T11:32:30-05:00",
          "tree_id": "18a24cc9c265b9c53ba0224109dedace8ca38a15",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea5ba334d3e21b9b134c1c6e79c4578f8e30dd3a"
        },
        "date": 1683219249412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1069.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6253.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2375.794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.294921875,
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
          "id": "1130719c55c6c8a60e3268034e7d849f30c22fba",
          "message": "Basic property-based tests for writes (#229)\n\n* Basic property-based tests for writes\r\n\r\nThis is the first step in property-based testing for the write path.\r\nRight now, it tests scenarios where the entire write sequence happens at\r\nonce: mknod, open, write once, release. It generates a vector of such\r\noperations, with random paths and random file contents/sizes. After each\r\noperations, the test checks that the file system has the expected\r\ncontents.\r\n\r\nI'm stopping this PR here because it's enough to get the testing off the\r\nground, but doesn't yet cover a lot of the interesting cases we'd like to\r\ncheck. The focus here is getting the infrastructure in place to start\r\nadding more complex operations to the `Op` structure in future PRs.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Don't do manual path manipulation + other PR comments\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Fix root directory\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-04T11:36:39-05:00",
          "tree_id": "c53517eb84199e10c63c4fcc8223c4ebd614379e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1130719c55c6c8a60e3268034e7d849f30c22fba"
        },
        "date": 1683219382310,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.9189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1159.6572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6633.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2032.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.2158203125,
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
          "id": "e6b072f4bb948b58974d5d773aa5292c5f3b2546",
          "message": "Extract `fn read_dir_to_entry_names` for FUSE tests (#237)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-05T13:06:19+01:00",
          "tree_id": "88c8def3077e7228aeb52a00133993a399bbb57d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e6b072f4bb948b58974d5d773aa5292c5f3b2546"
        },
        "date": 1683289681183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.25390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.3525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1082.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6383.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 158.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.93359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2185.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.8740234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jiri@jpospisil.com",
            "name": "Jiri Pospisil",
            "username": "jiripospisil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81152c243fac653bcbf36a091e4411288c83ab7e",
          "message": "Add info about the unofficial AUR package to README (#239)\n\nSigned-off-by: Jiri Pospisil <jiri@jpospisil.com>",
          "timestamp": "2023-05-09T23:59:42Z",
          "tree_id": "2e9facd2fc6588d8edf934374e0ef392dbe2d639",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81152c243fac653bcbf36a091e4411288c83ab7e"
        },
        "date": 1683678023080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 995.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6098.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.9697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1872.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.23828125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1683678023733,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}
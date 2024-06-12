# Configuring Mountpoint for Amazon S3

In most scenarios, you can use Mountpoint by running the following command, where you should replace `DOC-EXAMPLE-BUCKET` with the name of your Amazon S3 bucket, and `/path/to/mount` with the directory you want to mount your bucket into:

    mount-s3 DOC-EXAMPLE-BUCKET /path/to/mount

We've tried hard to make this simple command adopt good defaults for most scenarios. However, some scenarios may need additional configuration. This document shows how to configure these elements of Mountpoint:
* [AWS credentials](#aws-credentials)
* [S3 bucket configuration](#s3-bucket-configuration), including mounting a bucket prefix or changing the endpoint to which Mountpoint sends S3 requests
* [File system configuration](#file-system-configuration), including making a bucket read-only or allowing file deletion
* [Caching configuration](#caching-configuration), where metadata and object data can be served from a cache
* [Logging](#logging) for troubleshooting Mountpoint

## AWS credentials

Mountpoint uses the same [credentials configuration options](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) as the AWS CLI, and will automatically discover credentials from multiple sources. If you are able to run AWS CLI commands like `aws s3 ls` against your bucket, you should generally also be able to use Mountpoint against that bucket.

> [!NOTE]
> Mountpoint does not currently support authenticating with IAM Identity Center (SSO or Legacy SSO). This issue is tracked in [#433](https://github.com/awslabs/mountpoint-s3/issues/433).

We recommend you use short-term AWS credentials whenever possible. Mountpoint supports several options for short-term AWS credentials:
* When running Mountpoint on an Amazon EC2 instance, you can [associate an IAM role with your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html) using an instance profile, and Mountpoint will automatically assume that IAM role and manage refreshing the credentials.
* When running Mountpoint in an Amazon ECS task, you can similarly [associate an IAM role with the task](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) for Mountpoint to automatically assume and manage refreshing the credentials.
* You can configure Mountpoint to [automatically assume a specific IAM role](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-role.html#cli-role-overview) using the `role_arn` field of the `~/.aws/config` file. This configuration can be useful for cross-account access, where the target IAM role is in a different AWS account. You will need to specify how to obtain credentials that have permission to assume the role with either the `source_profile` or `credential_source` fields. For example, if you want Mountpoint to assume the IAM role `arn:aws:iam::123456789012:role/marketingadminrole`, you can associate an instance profile with your EC2 instance that has permission to assume that role, and then configure a profile in your `~/.aws/config` file:
  ```
  [profile marketingadmin]
  role_arn = arn:aws:iam::123456789012:role/marketingadminrole
  credential_source = Ec2InstanceMetadata
  ```
  With this configuration, running Mountpoint with the `--profile marketingadmin` command-line argument will automatically assume the specified IAM role and manage refreshing the credentials.
* Otherwise, you can [acquire temporary AWS credentials for an IAM role](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-short-term.html) from the AWS Console or with the `aws sts assume-role` AWS CLI command, and store them in the `~/.aws/credentials` file.

If you need to use long-term AWS credentials, you can [store them in the configuration and credentials files](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) in `~/.aws`, or [specify them with environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html) (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`).

To manage multiple AWS credentials, you can use the `--profile` command-line argument or `AWS_PROFILE` environment variable to select a profile from the configuration and credentials files.

For public buckets that do not require AWS credentials, you can use the `--no-sign-request` command-line flag to disable AWS credentials.

### IAM permissions

Amazon S3 offers both resource-based access policies attached to your S3 buckets (*bucket policies*) and user policies attached to IAM users (*user policies*). You can use either or both of these access policy options to control access to your S3 objects with Mountpoint.

The IAM credentials you use with Mountpoint must have permission for the `s3:ListBucket` action for the S3 bucket you mount. To be able to read files with Mountpoint, you also need permission for the `s3:GetObject` action for the objects you read.

By default, Mountpoint allows writing new files to your S3 bucket, and does not allow deleting existing files. You can disable writing new files, or enable deleting existing files, with [file system configuration flags](#file-system-configuration). Writing files requires permission for the `s3:PutObject` and `s3:AbortMultipartUpload` actions. Deleting existing files requires permission for the `s3:DeleteObject` action.

If you only [mount a prefix of your S3 bucket](#mounting-a-bucket-prefix) rather than the entire bucket, you need these IAM permissions only for the prefix you mount. You can scope down your IAM permissions to a prefix using the `Resource` element of the policy statement for most of these permissions, but for `s3:ListBucket` you must use the `s3:prefix` condition key instead.

Here is an example least-privilege policy document to add to an IAM user or role that allows full access to your S3 bucket for Mountpoint. Replace `DOC-EXAMPLE-BUCKET` with the name of your bucket. Alternatively, you can use the [`AmazonS3FullAccess`](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-iam-awsmanpol.html) managed policy, but the managed policy grants more permissions than needed for Mountpoint.

```
{
   "Version": "2012-10-17",
   "Statement": [
        {
            "Sid": "MountpointFullBucketAccess",
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::DOC-EXAMPLE-BUCKET"
            ]
        },
        {
            "Sid": "MountpointFullObjectAccess",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:AbortMultipartUpload",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"
            ]
        }
   ]
}
```

Directory buckets, introduced with the S3 Express One Zone storage class, use a different authentication mechanism from general purpose buckets. Instead of using `s3:*` actions, you should allow the `s3express:CreateSession` action. Here is an example of least-privilege policy document.

```
{
	"Version": "2012-10-17",
	"Statement": [
        {
            "Effect": "Allow",
            "Action": "s3express:CreateSession",
            "Resource": "arn:aws:s3express:REGION:ACCOUNT-ID:bucket/DOC-EXAMPLE-BUCKET--az_id--x-s3"
        }
    ]
}
```

Mountpoint also respects access control lists (ACLs) applied to objects in your S3 bucket, but does not allow you to automatically attach ACLs to objects created with Mountpoint. A majority of modern use cases in Amazon S3 no longer require the use of ACLs. We recommend that you keep ACLs disabled for your S3 bucket, and instead use bucket policies to control access to your objects.

## S3 bucket configuration

By default, Mountpoint will automatically mount your S3 bucket given only the bucket name, and will automatically select the appropriate S3 HTTPS endpoint. However, you can override this automation if you need finer control over how Mountpoint connects to your bucket.

### Mounting a bucket prefix

You can use Mountpoint to access only a prefix of your S3 bucket rather than the entire bucket. This allows you to isolate multiple users, applications, or workloads from each other within a single bucket. Use the `--prefix` command-line argument to specify a prefix of your S3 bucket, which must end with the `/` character. With this argument, only objects in your bucket that begin with the given prefix will be visible with Mountpoint.

When constructing the directory structure for your mount, Mountpoint removes the prefix you specify with `--prefix` from object keys. For example, if your bucket has a key `2023/Files/data.json`, and you specify the `--prefix 2023/` command-line argument, the mounted directory will contain a single sub-directory `Files` with a file `data.json` inside it. If you specify the `--prefix 2023/Files/` command-line argument, the mounted directory will contain only a file `data.json` at its root.

### Region detection

Amazon S3 buckets are associated with a single AWS Region. Mountpoint attempts to automatically detect the region for your S3 bucket at startup time and directs all S3 requests to that region. However, in some scenarios like cross-region mount with a directory bucket, this region detection may fail, preventing your bucket from being mounted and displaying Access Denied or No Such Bucket errors. You can override Mountpoint's automatic bucket region detection with the `--region` command-line argument or `AWS_REGION` environment variable.

Mountpoint uses [instance metadata (IMDS)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) to help detect the region for an S3 bucket. If you want to disable IMDS, set the `AWS_EC2_METADATA_DISABLED` environment variable to `true`.

### Access points

[Amazon S3 access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html) are network endpoints attached to buckets that you can use to perform S3 object operations. Each access point has distinct permissions and network controls that S3 applies for any request that is made through that access point.

You can use an access point with Mountpoint by specifying either the [access point ARN](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html) or the [access point bucket-style alias](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-usage-examples.html) as the bucket argument to `mount-s3`. For example, if your access point has the following ARN and alias:
* ARN: `arn:aws:s3:region:account-id:accesspoint/my-access-point`
* Access point alias: `my-access-point-hrzrlukc5m36ft7okagglf3gmwluquse1b-s3alias`

then you can mount your S3 bucket to the `/path/to/mount` directory with either of the following commands:
* `mount-s3 arn:aws:s3:region:account-id:accesspoint/my-access-point /path/to/mount`
* `mount-s3 my-access-point-hrzrlukc5m36ft7okagglf3gmwluquse1b-s3alias /path/to/mount`

#### Multi-Region Access Points

[Amazon S3 Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPoints.html) provide a global endpoint that applications can use to fulfill requests to S3 buckets that are located in multiple AWS Regions. You can use a Multi-Region Access Point with Mountpoint by specifying its ARN as the bucket argument to `mount-s3`. For example, if your Multi-Region Access Point ARN is `arn:aws:s3::123456789012:accesspoint/mfzwi23gnjvgw.mrap`, then you can mount your S3 bucket to the `/path/to/mount` directory with the command `mount-s3 arn:aws:s3::123456789012:accesspoint/mfzwi23gnjvgw.mrap /path/to/mount`.

### S3 Object Lambda

> [!IMPORTANT]
> Not all Object Lambda functions will work with Mountpoint. Your Lambda function must satisfy some additional properties (listed below) for it to be usable with Mountpoint.

[Amazon S3 Object Lambda](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html) allows you to add your own code to Amazon S3 `GET`, `LIST`, and `HEAD` requests to modify and process data as it is returned to an application. S3 Object Lambda uses AWS Lambda functions to automatically process the output of standard S3 `GET`, `LIST`, or `HEAD` requests.

You can use S3 Object Lambda with Mountpoint by mounting an [Object Lambda Access Point](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html). Mounting an Object Lambda Access Point works the same way as [mounting an access point](#access-points), by specifying either the ARN or the bucket-style alias of the Object Lambda Access Point as the bucket argument to `mount-s3`. To use S3 Object Lambda with Mountpoint (or any other client), your IAM identity needs [additional permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-policies.html).

To use S3 Object Lambda with Mountpoint, your Lambda function must satisfy three additional properties that may not be required by other applications:
1. Mountpoint uses the `Range` HTTP header for all `GetObject` requests to S3. To use S3 Object Lambda with Mountpoint, your Lambda function must be configured to enable the `Range` header, and must map the provided `Range` header to the transformed object. See [Working with Range and partNumber headers](https://docs.aws.amazon.com/AmazonS3/latest/userguide/range-get-olap.html) in the Amazon S3 User Guide for more details.
2. When looking up files and directories in your S3 bucket, Mountpoint sends concurrent `HeadObject` and `ListObjectV2` requests. The `HeadObject` request is expected to fail with a 404 Not Found HTTP status code when a file does not exist. For example, if your bucket contains a key `Files/data.json` and you run a command like `ls Files` on your mount, Mountpoint sends a `HeadObject` request for the key `Files` to discover if a file exists with that name, and will receive a 404 Not Found response from S3. Your Lambda function must correctly generate a 404 Not Found response for these requests.
3. When [working with `ListObjectV2` requests](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-writing-lambda.html#olap-listobjectsv2), your Lambda function's response can either include a JSON-formatted `listBucketResult` result that S3 Object Lambda automatically converts to a valid `ListObjectsV2` XML response, or include an XML-formatted `listResultXML` result that S3 Object Lambda does not validate further. If your Lambda function's response includes `listResultXML`, it must precisely match the XML schema for `ListObjectV2` responses, or Mountpoint may fail to parse it.

### Endpoints and AWS PrivateLink

In most scenarios, Mountpoint automatically infers the appropriate Amazon S3 endpoint to send requests to based on the bucket name and region. This includes automatically using [gateway endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) you have created in your VPC to access S3 without internet access. However, you may need to provide additional command-line arguments to change the endpoint Mountpoint uses in some situations:

* To [make requests to S3 over IPv6](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ipv6-access.html), use the `--dual-stack` command-line flag.
* To use [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html) to optimize transfer speeds when accessing your S3 bucket over the internet, use the `--transfer-acceleration` command-line flag. Transfer Acceleration must be [enabled](https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration-examples.html) on your S3 bucket to use this option.
* To use interface VPC endpoints provisioned with [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html), specify the interface endpoint's DNS name with the `--endpoint-url` command-line argument. You must replace the `*` part of the DNS name displayed in the console with `bucket`. For example, if the console shows your interface endpoint's DNS name as `*.vpce-0e25b8cdd720f900e-argc85vg.s3.us-east-1.vpce.amazonaws.com`, specify the following endpoint URL argument to Mountpoint:
  ```
  --endpoint-url https://bucket.vpce-0e25b8cdd720f900e-argc85vg.s3.us-east-1.vpce.amazonaws.com
  ```
  Alternatively, if you enable [private DNS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#private-dns) for your interface endpoint, you do not need to provide the `--endpoint-url` command-line argument.

If necessary, you can use the `--endpoint-url` command-line argument to fully override Mountpoint's endpoint detection. For example, the argument `--endpoint-url https://example.com` will force Mountpoint to send S3 requests to `example.com`. You may need to also use the `--region` flag to correctly specify the region to use for signing requests. By default, Mountpoint will use [virtual-hosted-style addressing](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html) for the configured endpoint, and so will send requests to `https://docexamplebucket.example.com` if configured with `--endpoint-url https://example.com` and the bucket name `docexamplebucket`. To disable virtual-hosted-style addressing, use the `--force-path-style` command-line flag to instead send requests to `https://example.com/docexamplebucket/`.

We also support the `AWS_ENDPOINT_URL` environment variable. The endpoint determination follows this order:
- Use the CLI parameter `endpoint-url` if provided.
- Use `AWS_ENDPOINT_URL` if provided.
- Fallback to automically inferring the endpoint.

### Data encryption

Amazon S3 supports a number of [server-side encryption types](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html). Mountpoint supports reading and writing to buckets that are configured with Amazon S3 managed keys (SSE-S3), with AWS KMS keys (SSE-KMS), or with dual-layer encryption with AWS KMS keys (DSSE-KMS) as the default encryption method. It does not currently support reading objects encrypted with customer-provided keys (SSE-C).

By default, Amazon S3 encrypts all objects with Amazon S3 managed keys (SSE-S3) and you can elect to use SSE-KMS with a customer managed key to meet compliance requirements. You can specify the AWS KMS key with Mountpoint when mounting a bucket or prefix.

New objects can be uploaded using different server-side encryption (SSE) settings than the bucket's default. The CLI argument `--sse <aws:kms|aws:kms:dsse|AES256>` can be used to specify a different SSE encryption type. When either `aws:kms` or `aws:kms:dsse` is used as a type, `--sse-kms-key-id <KEY_ARN>` may be used to optionally specify a KMS key ARN. When a KMS key ID is not specified, S3 will use an [AWS managed KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt), which is created automatically. Please note that these command-line arguments only configure server-side encryption for *new* objects created with Mountpoint, all *existing* objects will remain unchanged.

> [!IMPORTANT]
> Mountpoint currently accepts only **KMS key ARN** as the value for `--sse-kms-key-id` argument. AWS KMS [defines](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) several other key identifiers, including key ID, key alias name and key alias ARN, which are not supported by Mountpoint.

Mountpoint does not support client-side encryption using the Amazon S3 Encryption Client.

### Other S3 bucket configuration

If the bucket you are mounting is a [Requester Pays bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html), you must acknowledge that you will be charged for the request and the data transferred, rather than the bucket owner. You provide this acknowledgement by using the `--requester-pays` command-line flag. If you try to mount a Requester Pays bucket without using this flag, mounting will fail with an Access Denied error.

If you want to verify that the S3 bucket you are mounting is [owned by the expected AWS account](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-owner-condition.html), use the `--expected-bucket-owner` command-line argument. For example, if you expect the bucket to be owned by the AWS account `111122223333`, specify the argument `--expected-bucket-owner 111122223333`. If the argument doesn't match the bucket owner's account ID, mounting will fail with an Access Denied error.

There are certain situations where Mountpoint receives a response from Amazon S3 indicating that a retry is necessary. For example, if an application generates high request rates (typically sustained rates of over 5,000 requests per second to a small number of objects), Mountpoint might receive HTTP 503 slowdown responses from S3. Mountpoint automatically retries these requests up to a total of 10 attempts, using jittered exponential backoff between attempts. If these attempts are exhausted, Mountpoint will return an error to your application (usually `EIO`). If you need to modify the maximum number of attempts, set the `AWS_MAX_ATTEMPTS` environment variable.

## File system configuration

Mountpoint automatically configures reasonable defaults for file system settings such as permissions and for performance. You can adjust these settings if you need finer control over how the Mountpoint file system behaves.

### File modifications and deletions

By default, Mountpoint allows creating new files but does not allow deleting or overwriting existing objects.

Writes to existing files are allowed if `--allow-overwrite` flag is set at mount time, but only when the `O_TRUNC` flag is used at open time to truncate the existing file. All writes must start from the beginning of the file and must be made sequentially.

If you want to allow file deletion, use the `--allow-delete` flag at mount time. Delete operations immediately delete the object from S3, even if the file is being read from.

If you want to forbid all mutating actions on your S3 bucket via Mountpoint, use the `--read-only` command-line flag.

For more details on the behavior of file operations with Mountpoint, see the [file operations section](https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md#file-operations) of the semantics documentation for more information.

### S3 storage classes

Amazon S3 offers a [range of storage classes](https://aws.amazon.com/s3/storage-classes/) that you can choose from based on the data access, resiliency, and cost requirements of your workloads. When creating new files with Mountpoint, you can control which storage class the corresponding objects are stored in. Mountpoint respects the default storage class from S3 unless otherwise configured, which is appropriate for a wide variety of use cases. To store new objects in a different storage class, use the `--storage-class` command-line flag. Possible values for this argument include:
* `STANDARD` for S3 Standard
* `STANDARD_IA` for S3 Standard-Infrequent Access
* `INTELLIGENT_TIERING` for [S3 Intelligent-Tiering](https://aws.amazon.com/s3/storage-classes/intelligent-tiering/), which automatically moves your data to the most cost-effective access tier when access patterns change
* `GLACIER_IR` for [S3 Glacier Instant Retrieval](https://aws.amazon.com/s3/storage-classes/glacier/instant-retrieval/)
* `GLACIER` for [S3 Glacier Flexible Retrieval](https://aws.amazon.com/s3/storage-classes/glacier/)
* `DEEP_ARCHIVE` for [S3 Glacier Deep Archive](https://aws.amazon.com/s3/storage-classes/glacier/)

> [!IMPORTANT]
> `EXPRESS_ONEZONE` is a distinct storage class for directory buckets. You can neither use other storage classes in directory buckets nor use `EXPRESS_ONEZONE` in general purpose buckets. If you want to use [S3 Express One Zone](https://aws.amazon.com/s3/storage-classes/express-one-zone/) storage class, just specify a directory bucket name when mounting.

For the full list of possible storage classes, see the [PutObject documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#AmazonS3-PutObject-request-header-StorageClass) in the Amazon S3 User Guide.

Mountpoint supports reading existing objects from your S3 bucket when they are stored in any instant-retrieval storage class. You cannot use Mountpoint to read objects stored in the S3 Glacier Flexible Retrieval or S3 Glacier Deep Archive storage classes, or the Archive Access or Deep Archive Access tiers of S3 Intelligent-Tiering, unless they've been [restored](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects.html). You can use Mountpoint to write new objects into these storage classes or S3 Intelligent-Tiering.

### File and directory permissions

Mountpoint applies default permissions that allow all files in your mounted directory to be read and written by the local user who ran the `mount-s3` command. You can override these defaults in several ways:
* To apply a different permission mode to files or directories, use the `--file-mode` and `--dir-mode` command-line arguments.
* To change the ownership (user and group) of all files and directories, use the `--uid` and `--gid` command-line arguments. These arguments take user and group identifiers rather than names. You can find your user and group identifiers with the `id` command on Linux.

By default, users other than the user who ran the `mount-s3` command cannot access your mounted directory, even if the permissions and ownership settings above would allow it. This is true even for the `root` user, and is a limitation of the FUSE system Mountpoint uses to create a file system. To allow other non-root users to access your mounted directory, use the `--allow-other` command-line flag. To allow the root user to access your mounted directory if you ran `mount-s3` as a different user, use the `--allow-root` command-line flag. To use these flags, you may need to first [configure FUSE](https://manpages.debian.org/testing/fuse/mount.fuse.8.en.html#CONFIGURATION) by adding the line `user_allow_other` to the `/etc/fuse.conf` file. Even with these flags enabled, Mountpoint still respects the permissions and ownership configured with the other flags above.

Despite these configurations, [IAM permissions](#iam-permissions) still always apply to accessing the files and directories in your S3 bucket.

### Configuring Mountpoint performance

At mount time, Mountpoint automatically selects appropriate defaults to provide high-performance access to Amazon S3. These defaults include [Amazon S3 performance best practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html) such as scaling requests across multiple S3 connections, using range `GET` requests to parallelize sequential reads, and using request timeouts and retries. Most applications should not need to adjust these defaults, but if necessary, you can change them in several ways:
* Mountpoint scales the number and rate of parallel requests to meet a targeted maximum network throughput. This maximum is shared across all file and directory accesses made by a single Mountpoint process. By default, Mountpoint sets this maximum network throughput to the [available network bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html) when running on an EC2 instance or to 10 Gbps elsewhere. To change this default, use the `--maximum-throughput-gbps` command-line argument, providing a value in gigabits-per-second (Gbps). For example, if you have multiple Mountpoint processes on the same instance, you can adjust this argument to partition the available network bandwidth between them.
* By default, Mountpoint can serve up to 16 concurrent file or directory operations, and automatically scales up to reach this limit. If your application makes more than this many concurrent reads and writes (including to the same or different files), you can improve performance by increasing this limit with the `--max-threads` command-line argument. Higher values of this flag might cause Mountpoint to use more of your instance's resources.
* When reading or writing files to S3, Mountpoint divides them into parts and uses parallel requests to improve throughput. You can change the part size Mountpoint uses for these parallel requests using the `--part-size` command-line argument, providing a maximum number of bytes per part. The default value of this argument is 8 MiB (8,306,688 bytes), which in our testing is the highest value that achieves maximum throughput. Higher values of this argument can reduce the number of billed requests Mountpoint makes, but also reduce the throughput of object reads and writes to S3.

### Maximum object size

In its default configuration, there is no maximum on the size of objects Mountpoint can read. However, Mountpoint uses [multipart upload](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html) when writing new objects, and multipart upload allows a maximum of 10,000 parts for an object. This means Mountpoint can only upload objects up to 80,000 MiB (78.1 GiB) in size. If your application tries to write objects larger than this limit, writes will fail with an out of space error.

To increase the maximum object size for writes, use the `--part-size` command-line argument to specify a maximum number of bytes per part, which defaults to 8 MiB. The maximum object size will be 10,000 multiplied by the value you provide for this argument. Even with multipart upload, S3 allows a maximum object size of 5 TiB, and so setting this argument higher than 524.3 MiB will not further increase the object size limit.

### Automatically mounting an S3 bucket at boot

Mountpoint does not currently support automatically mounting a bucket at system boot time.
A tracking issue is open for `fstab` support: [#44](https://github.com/awslabs/mountpoint-s3/issues/44).

Until this support is implemented, we recommend using a service manager like systemd to manage the mount process and mount during boot.
Below is an example of a systemd unit that launches Mountpoint at boot time.
Replace `/home/ec2-user/s3-bucket-mount` and `DOC-EXAMPLE-BUCKET` with your mount directory and S3 bucket.

```ini
[Unit]
Description=Mountpoint for Amazon S3 mount
Wants=network.target
AssertPathIsDirectory=/home/ec2-user/s3-bucket-mount

[Service]
Type=forking
User=ec2-user
Group=ec2-user
ExecStart=/usr/bin/mount-s3 DOC-EXAMPLE-BUCKET /home/ec2-user/s3-bucket-mount
ExecStop=/usr/bin/fusermount -u /home/ec2-user/s3-bucket-mount

[Install]
WantedBy=remote-fs.target
```

## Caching configuration

Mountpoint can optionally cache object metadata and content to reduce cost and improve performance for repeated reads to the same file.
Mountpoint can serve all file system requests from the cache, excluding listing of directory contents.

The main command-line flag to enable caching is `--cache <CACHE_DIR>`, which specifies the directory in which to store cached object content. Mountpoint will create a new subdirectory within the path that you specify, and will remove any existing files or directories within that subdirectory at mount time and at exit. This flag will also enable caching of metadata using a default time-to-live (TTL) of 1 minute (60 seconds), which can be configured with the `--metadata-ttl` argument.

### Metadata Cache

The command-line flag `--metadata-ttl <SECONDS|indefinite|minimal>` controls the time-to-live (TTL) for cached metadata entries. It can be set to a positive numerical value in seconds, or to one of the pre-configured values of `minimal` (default configuration when not using `--cache`) or `indefinite` (metadata entries never expire).

> [!WARNING]
> Caching of metadata entries relaxes the strong read-after-write consistency offered by Amazon S3 and Mountpoint in its default configuration.
> See the [consistency and concurrency section of the semantics documentaton](./SEMANTICS.md#consistency-and-concurrency) for more details.

When configured with metadata caching, on its own or in conjunction with `--cache`, Mountpoint will typically perform fewer requests to S3, but will not guarantee that the information it reports is up to date with the content of the bucket. You can use the `--metadata-ttl` flag to choose the appropriate trade off between consistency (`--metadata-ttl minimal`) and performance/cost optimization (`--metadata-ttl indefinite`), depending on the requirements of your workload. In scenarios where the content of the S3 bucket is modified by another client and you require Mountpoint to always return up-to-date information, setting `--metadata-ttl minimal` is most appropriate. A setting of `--metadata-ttl 300` would instead allow Mountpoint to perform fewer requests to S3 by delaying updates for up to 5 min. If your workload does not require consistency, for example because the content of the S3 bucket does not change, we recommend using `--metadata-ttl indefinite`.

### Disk Cache Size

By default, Mountpoint will limit the maximum size of the cache such that the free space on the file system does not fall below 5%, and will automatically evict the least recently used content from the cache when caching new content. You can instead manually configure the maximum size of the cache with the `--max-cache-size <MiB>` command-line argument.

> [!WARNING]
> If you enable caching, Mountpoint will persist unencrypted object content from your S3 bucket at the location provided at mount.
> In order to protect your data, we recommend you restrict access to the data cache location.

### Caching object content to local storage

We recommend using local storage, such as Amazon EC2 instance storage or an Amazon EBS volume, as the target of the Mountpoint cache.
When caching to EBS, you can use your instance's root EBS volume, or create and attach a new volume just for caching.
There are several factors that can affect the performance of EBS volumes. See the [EBS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) for more details about EBS volume types and their performance characteristics.
If you create a new EBS volume or use EC2 instance storage, you will first need to [create a file system](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/add-instance-store-volumes.html#making-instance-stores-available-on-your-instances) on that storage and mount it at a path such as `/mnt/mp-cache`.
The user running Mountpoint needs write access to the mounted file system,
and we recommend setting the permissions on the file system to not allow reads by any other users (e.g., `chmod 0700 /mnt/mp-cache`).
You can then start Mountpoint using the cache directory you mounted:

```
mount-s3 DOC-EXAMPLE-BUCKET /path/to/mount --cache /mnt/mp-cache
```

### Caching object content to memory

Rather than caching to local storage, you can configure Mountpoint to cache to instance memory by using a RAM disk.
To create a RAM disk on Linux, you can use [tmpfs](https://www.kernel.org/doc/html/latest/filesystems/tmpfs.html)
to mount a temporary file system at a path such as `/mnt/mp-cache-tmpfs`:

```
sudo mkdir /mnt/mp-cache-tmpfs
sudo mount -o uid=$(id --user),mode=700 -t tmpfs none /mnt/mp-cache-tmpfs
```

This will create a RAM disk mounted at `/mnt/mp-cache-tmpfs` with access restricted to the current user.
By default, Linux will set the size of the RAM disk to 50% of the physical memory available on the system.
The size is configurable using the `size` option.

You can then start Mountpoint using the directory where the RAM disk was mounted.

```
mount-s3 DOC-EXAMPLE-BUCKET /path/to/mount --cache /mnt/mp-cache-tmpfs
```

### Using multiple Mountpoint processes on a host

The cache directory is not reusable by other Mountpoint processes and will be cleaned at mount time and exit.
When running multiple Mountpoint processes concurrently on the same host,
you should use unique cache directories to avoid different processes interfering with the others' cache content.

## Logging

By default, Mountpoint emits high-severity log information to [syslog](https://datatracker.ietf.org/doc/html/rfc5424) if available on your system. You can change what level of information is logged, and to where it is logged. See [LOGGING.md](LOGGING.md) for more details on configuring logging.

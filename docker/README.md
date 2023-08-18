# Running Mountpoint for Amazon S3 in a Docker container

This directory contains two Dockerfiles for building container images to run Mountpoint for Amazon S3.
The primary `Dockerfile` builds an image with the latest official Mountpoint release.
The alternative `Dockerfile.source` builds an image by compiling Mountpoint from the latest source version.
We recommend using the primary Dockerfile.

## Building the image

First, download the Dockerfile if you don't have it already:

    wget https://raw.githubusercontent.com/awslabs/mountpoint-s3/main/docker/Dockerfile

Run this command to build a Docker image:

    docker build -t mountpoint-s3 .

To build Mountpoint from source, download `Dockerfile.source` instead, and pass the `-f Dockerfile.source` argument to this command.

## Running the container

Before running the container, you'll need a way to pass AWS credentials into the container.
See [AWS credentials](../doc/CONFIGURATION.md#aws-credentials) in the configuration documentation for more details.
We recommend using short-term credentials whenever possible:
* If you run your containers on an EC2 instance, you can [associate an IAM role with the instance](https://docs.aws.amazon.com/sdkref/latest/guide/access-iam-roles-for-ec2.html) and Mountpoint for Amazon S3 will automatically assume that role at startup. You may need to [increase the hop limit for IMDS requests](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-IMDS-existing-instances.html#modify-PUT-response-hop-limit) on your instance for the container to successfully acquire credentials this way.
* [Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) supports short-term credentials by [associating an IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) with your ECS task.

If you need to use long-term credentials, set the [`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html), and pass those variables to Docker with the `--env AWS_ACCESS_KEY_ID --env AWS_SECRET_ACCESS_KEY` arguments.

### Running interactively

To launch Mountpoint in an interactive container, run this command:

    docker run -ti --cap-add SYS_ADMIN --device /dev/fuse --entrypoint bash mountpoint-s3

Within the container you can run this command to mount a bucket to the `/mnt` directory,
replacing `DOC-EXAMPLE-BUCKET` with the name of your S3 bucket:

    mount-s3 DOC-EXAMPLE-BUCKET /mnt

### Running as a service

You can also run the Docker container as a service,
and access the mounted directory from your host or other Docker containers.
To do so, first create a directory `/path/to/mount` in your host filesystem,
and a subdirectory `/path/to/mount/bucket` to be the target of the mount.
Then run this command, replacing DOC-EXAMPLE-BUCKET with the name of your S3 bucket,
and `/path/to/mount` with the directory you created:

    docker run -d --cap-add SYS_ADMIN --device /dev/fuse \
        --mount type=bind,source=/path/to/mount,target=/mountpoint,bind-propagation=shared \
        mountpoint-s3 \
        DOC-EXAMPLE-BUCKET /mountpoint/bucket

Your bucket is now mounted in the `/path/to/mount/bucket` directory on the host.
By default, only the user used by the container (likely `root`) will have access to the mount.
You can make the mount accessible to other users by adding the `--allow-other` flag to end of the above command.
See [File and directory permissions](../doc/CONFIGURATION.md#file-and-directory-permissions)
in the configuration documentation for more details on managing this permissions issue.

### Docker permissions and AWS container services

Mountpoint uses the Linux FUSE subsystem to mount its file system.
Running a FUSE file system inside a Docker container
requires giving the container elevated root-level privileges to the host instance.
The commands above do this with the `--cap-add SYS_ADMIN` argument to `docker run`.

These elevated privileges aren't available in AWS-managed container environments like [AWS Fargate](https://aws.amazon.com/fargate/).
They are available in [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/),
but not enabled by default.
To enable them, add these fields to the `containerDefinitions` section of an ECS task definition:
```
"privileged": true,
"linuxParameters": {
    "devices": [
        {
            "hostPath": "/dev/fuse",
            "containerPath": "/dev/fuse"
        }
    ]
}
```
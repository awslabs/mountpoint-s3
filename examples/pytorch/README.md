# PyTorch data loading with Mountpoint

This directory shows a simple example of how to use Mountpoint for Amazon S3 as a PyTorch data loader via the torchdata library.
It trains a ResNet-50 model for a few epochs using [PyTorch Lightning](https://www.pytorchlightning.ai/index.html), with synthetic ImageNet-style training data, stored in S3 as shards in WebDataset format.
The idea is that because Mountpoint exposes your S3 bucket as a local file system, you can just use standard file-oriented loaders rather than writing S3-specific code, and get great performance.

To get started, launch an EC2 instance with a GPU (we used a [g5.2xlarge](https://aws.amazon.com/ec2/instance-types/g5/)),
choosing the [AWS Deep Learning AMI GPU PyTorch 2.0.1 (Amazon Linux 2)](https://aws.amazon.com/releasenotes/aws-deep-learning-ami-gpu-pytorch-2-0-amazon-linux-2/) as your AMI.
On the instance, you'll need to run `source activate pytorch` to enter the PyTorch environment.
Then from this directory, install the dependencies for the example code:

    python -m pip install -r requirements.txt

Now install Mountpoint if you don't already have it:

    wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.rpm
    sudo yum install ./mount-s3.rpm

To generate and upload the training shards to an S3 bucket, run:

    python resnet.py make s3://DOC-EXAMPLE-BUCKET/shard-data/ --num-images 50000

This will upload about 5GB worth of shards to your bucket.

Now to run the training loop:

    python resnet.py train s3://DOC-EXAMPLE-BUCKET/shard-data/ --source-kind mountpoint --batch-size 256 --max-epochs 3

The `--source-kind` argument controls how the data is loaded from S3:
* `mountpoint` spawns a Mountpoint instance and accesses it as a local file system with the [`FileOpener`](https://pytorch.org/data/beta/generated/torchdata.datapipes.iter.FileOpener.html#torchdata.datapipes.iter.FileOpener) datapipe from torchdata
* `s3io` uses the [`S3FileLoader`](https://pytorch.org/data/beta/generated/torchdata.datapipes.iter.S3FileLoader.html#torchdata.datapipes.iter.S3FileLoader) datapipe from torchdata (formerly the Amazon S3 plugin for PyTorch)
* `fsspec` uses the [`FSSpecFileOpener`](https://pytorch.org/data/beta/generated/torchdata.datapipes.iter.FSSpecFileOpener.html#torchdata.datapipes.iter.FSSpecFileOpener) datapipe from torchdata (which uses the fsspec and s3fs libraries)

## Results

Here are some indicative results (keep in mind this is a synthetic test).
We ran training on a g5.2xlarge EC2 instance (8 vCPUs, 1x NVIDIA A10G Tensor Core GPU) in the us-west-2 region
running AWS Deep Learning AMI GPU PyTorch 2.0.1 (Amazon Linux 2) 20230609.
The instance had PyTorch 2.0.1, PyTorch Lightning 2.0.6, NVIDIA driver 525.85.12, and CUDA 11.8.
Training ran on 50,000 images at a batch size of 256, and trained ResNet-50 in 16-bit mixed precision for 5 epochs.
We saw the following results:

| Data loader | Images/sec |
| ----------- | ---------- |
| Mountpoint  | 526.9      |
| S3 IO       | 470.1      |
| FSSpec      |  75.5      |

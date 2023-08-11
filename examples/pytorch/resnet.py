"""This is a simple example of how to use Mountpoint as a PyTorch data loader via the torchdata library.
It trains a ResNet-50 model for a few epochs using PyTorch Lightning, with synthetic ImageNet-sized
training data, stored in S3 as shards in WebDataset format.

Run it like this to upload the training shards to an S3 bucket:

    python resnet.py make s3://DOC-EXAMPLE-BUCKET/shard-data/ --num-images 10000

And then run it like this to run the training loop:

    python resnet.py train s3://DOC-EXAMPLE-BUCKET/shard-data/ --source-kind mountpoint --batch-size 256

The --source-kind argument controls how the data is loaded from S3:
* `mountpoint` spawns a Mountpoint instance and accesses it as a local file system
* `s3io` uses the S3FileLoader datapipe from torchdata (aka the PyTorch plugin for Amazon S3)
* `fsspec` uses the FSSpecFileOpener datapipe from torchdata (which uses the fsspec and s3fs libraries)
"""

import argparse
import atexit
import boto3
import lightning as L
import os
from PIL import Image
import subprocess
import tempfile
import time
import torch
import torchdata
import torchvision
from typing import *
import webdataset as wds


def make_sharded_dataset(bucket: str, prefix: str, num_images: int, max_shard_size: int):
    """Make a fake dataset in WebDataset format and upload it to S3. In reality you'd already have
    this dataset in S3, so this is just for benchmarking purposes. We choose the image sizes to be
    roughly ImageNet-esque."""

    s3 = boto3.client("s3")
    ds = torchvision.datasets.FakeData(size=num_images, image_size=(3, 224, 224), num_classes=100)

    with tempfile.TemporaryDirectory() as tempdir:
        # Put shards into local storage
        pattern = os.path.join(tempdir, "shard-%04d.tar")
        with wds.ShardWriter(pattern, maxsize=max_shard_size) as sink:
            for i, (img, cls) in enumerate(ds):
                key = f"img{i}"
                sink.write({"__key__": key, "jpg": img, "cls": cls})

        # Sync to S3 bucket
        for filename in os.listdir(tempdir):
            path = os.path.join(tempdir, filename)
            key = prefix + filename
            s3.upload_file(path, bucket, key)


def load_image(sample: Dict) -> (Image, int):
    """Load a (image, class) sample from a WebDataset record"""
    to_tensor = torchvision.transforms.ToTensor()
    return (to_tensor(Image.open(sample[".jpg"])), int(sample[".cls"].read()))


class ResNet50(L.LightningModule):
    def __init__(self, dataset: torchdata.datapipes.iter.IterDataPipe, batch_size: int, num_workers: int):
        super().__init__()

        self.model = torchvision.models.resnet50(weights=None)
        self.dataset = dataset
        self.batch_size = batch_size
        self.num_workers = num_workers

        self.loss_fn = torch.nn.CrossEntropyLoss()

    def configure_optimizers(self):
        return torch.optim.AdamW(self.parameters(), lr=1e-3)

    def train_dataloader(self) -> torch.utils.data.DataLoader:
        dataset = self.dataset.load_from_tar().webdataset().map(load_image)
        return torch.utils.data.DataLoader(
            dataset, batch_size=self.batch_size, num_workers=self.num_workers, shuffle=False
        )

    def forward(self, imgs):
        return self.model(imgs)

    def training_step(self, batch, batch_idx):
        imgs, labels = batch
        preds = self.model(imgs)
        loss = self.loss_fn(preds, labels)
        self.log("train_loss", loss)
        return loss


def make_dataset(kind: str, s3_url: str) -> torchdata.datapipes.iter.IterDataPipe:
    """Create an IterDataPipe of the chosen kind pointing at the given S3 directory"""
    if kind == "mountpoint":
        bucket, prefix = parse_s3_url(s3_url)

        # Run Mountpoint in background mode, and arrange for it to unmount when this script exits
        tempdir = tempfile.mkdtemp()
        subprocess.run(["mount-s3", bucket, tempdir], check=True)
        atexit.register(lambda: subprocess.run(["sudo", "umount", tempdir]))

        # Now we can just read our dataset as if it were a local directory
        local_path = os.path.join(tempdir, prefix)
        lister = torchdata.datapipes.iter.FileLister([local_path])
        return torchdata.datapipes.iter.FileOpener(lister, mode="rb")
    elif kind == "fsspec":
        # Load from S3 using the FSSpec/S3FS libraries
        lister = torchdata.datapipes.iter.FSSpecFileLister([s3_url])
        return torchdata.datapipes.iter.FSSpecFileOpener(lister, mode="rb")
    elif kind == "s3io":
        # Load from S3 using the S3-specific IO datapipe (requires a BUILD_S3=1 version of torchdata)
        lister = torchdata.datapipes.iter.S3FileLister([s3_url])
        return torchdata.datapipes.iter.S3FileLoader(lister)
    else:
        raise Exception(f"unknown dataset kind {kind}")


def parse_s3_url(url: str) -> (str, str):
    """Parse an s3://bucket/key/ URL into a (bucket, key) pair"""
    if not url.startswith("s3://"):
        raise Exception(f"URL must start with 's3://': {url}")
    bucket, prefix = url[len("s3://") :].split("/", maxsplit=1)
    if prefix and not prefix.endswith("/"):
        raise Exception(f"non-empty prefix must end with '/': {url}")
    if not bucket:
        raise Exception(f"invalid bucket name: {url}")
    return bucket, prefix


def run_training(
    dataset: torchdata.datapipes.iter.IterDataPipe, max_epochs: int, batch_size: int, num_workers: int, precision: str
) -> float:
    """Train a ResNet-50 model on the dataset and return the training wall-clock time"""
    L.seed_everything(21, True)

    model = ResNet50(dataset, batch_size=batch_size, num_workers=num_workers)

    trainer = L.Trainer(max_epochs=max_epochs, precision=precision)

    start = time.perf_counter()
    trainer.fit(model)
    end = time.perf_counter()

    return end - start


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    ps = p.add_subparsers(dest="command", required=True)

    p_make = ps.add_parser("make", help="create a sharded dataset and upload it to S3")
    p_make.add_argument(
        "s3url", help="S3 URL for sharded training data directory to upload to (starts with 's3://', ends with '/')"
    )
    p_make.add_argument("--num-images", type=int, default=10000, help="number of images in dataset")
    p_make.add_argument("--max-shard-size", type=int, default=100, help="max size of each shard (in MiB)")

    p_train = ps.add_parser("train", help="train resnet50 from a dataset")
    p_train.add_argument(
        "s3url", help="S3 URL for sharded training data directory (starts with 's3://', ends with '/')"
    )
    p_train.add_argument(
        "--source-kind",
        choices=["mountpoint", "fsspec", "s3io"],
        default="mountpoint",
        help="kind of torchdata source to use",
    )
    p_train.add_argument("--max-epochs", type=int, default=3, help="number of epochs to train")
    p_train.add_argument("--batch-size", type=int, default=64, help="batch size for training")
    p_train.add_argument("--num-workers", type=int, default=1, help="number of data loader worker processes")
    p_train.add_argument("--precision", default="16-mixed", help="training precision")

    args = p.parse_args()

    if args.command == "make":
        print("Making and uploading sharded dataset")
        bucket, prefix = parse_s3_url(args.s3url)
        make_sharded_dataset(bucket, prefix, args.num_images, args.max_shard_size * 1024 * 1024)
        print(f"Uploaded to {args.s3url}")
    elif args.command == "train":
        print(f"Training for {args.max_epochs} epochs from {args.source_kind}")
        dataset = make_dataset(args.source_kind, args.s3url)
        training_time = run_training(dataset, args.max_epochs, args.batch_size, args.num_workers, args.precision)
        print(f"{args.source_kind} trained in {training_time:.4f}s")

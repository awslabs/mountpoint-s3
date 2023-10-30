"""This is a simple example of how to use Mountpoint as a PyTorch data loader via the torchdata
library. By default, it trains a ResNet-18 model for a few epochs using PyTorch Lightning, with
synthetic ImageNet-sized training data, stored in S3 as shards in WebDataset format or as individual
images.

Run it like this to upload the training shards to an S3 bucket:

    python resnet.py make s3://DOC-EXAMPLE-BUCKET/shard-data/ --num-images 10000

And then run it like this to run the training loop:

    python resnet.py train s3://DOC-EXAMPLE-BUCKET/shard-data/ --source-kind mountpoint --batch-size 256

The --source-kind argument controls how the data is loaded from S3:
* `mountpoint` spawns a Mountpoint instance and accesses it as a local file system
* `s3io` uses the S3FileLoader datapipe from torchdata
* `fsspec` uses the FSSpecFileOpener datapipe from torchdata (which uses the fsspec and s3fs libraries)
* `local` uses the FileLoader datapipe from torchdata on a local directory rather than an S3 path

The --dataset-format argument controls which format of dataset to use (sharded WebDataset or
individual files).

The --model argument can be used to choose a different model from `torchvision.models` to train.
"""

import argparse
import atexit
import boto3
from concurrent.futures import ThreadPoolExecutor
import io
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


def make_sharded_dataset(bucket: str, prefix: str, args: argparse.Namespace):
    """Make a fake dataset in WebDataset format and upload it to S3. In reality you'd already have
    this dataset in S3, so this is just for benchmarking purposes. We choose the image sizes to be
    roughly ImageNet-esque."""

    max_shard_size = args.max_shard_size_mib * 1024 * 1024

    if args.region is None:
        s3 = boto3.client("s3")
    else:
        session = boto3.Session(region_name=args.region)
        s3 = session.client("s3")
    ds = torchvision.datasets.FakeData(size=args.num_images, image_size=(3, 224, 224), num_classes=100)

    with tempfile.TemporaryDirectory() as tempdir:
        # Put shards into local storage
        pattern = os.path.join(tempdir, "shard-%04d.tar")
        with wds.ShardWriter(pattern, maxsize=max_shard_size) as sink:
            for i, (img, cls) in enumerate(ds):
                key = f"img{i}"
                sink.write({"__key__": key, "jpg": img, "cls": cls})

        def upload_file(path, bucket, key):
            s3.upload_file(path, bucket, key)

        # Sync to S3 bucket
        with ThreadPoolExecutor() as executor:
            for filename in os.listdir(tempdir):
                path = os.path.join(tempdir, filename)
                key = prefix + filename
                executor.submit(upload_file, path, bucket, key)
            executor.shutdown()


def make_single_dataset(bucket: str, prefix: str, args: argparse.Namespace):
    """Make a fake dataset of individual images and upload it to S3. In reality you'd already have
    this dataset in S3, so this is just for benchmarking purposes. We choose the image sizes to be
    roughly ImageNet-esque."""

    if args.region is None:
        s3 = boto3.client("s3")
    else:
        session = boto3.Session(region_name=args.region)
        s3 = session.client("s3")
    ds = torchvision.datasets.FakeData(size=args.num_images, image_size=(3, 224, 224), num_classes=100)

    def upload_image(img_bytes, bucket, key):
        s3.upload_fileobj(img_bytes, bucket, key)

    with ThreadPoolExecutor() as executor:
        for i, (img, cls) in enumerate(ds):
            if not prefix.endswith("/"):
                prefix = prefix + "/"
            key = f"{prefix}{cls}/img{i}.jpg"
            img_bytes = io.BytesIO()
            img.save(img_bytes, format="JPEG")
            img_bytes.seek(0)
            executor.submit(upload_image, img_bytes, bucket, key)
        executor.shutdown()


def load_image(sample: Dict) -> (Image, int):
    """Load a (image, class) sample from a WebDataset record"""
    to_tensor = torchvision.transforms.ToTensor()
    return (to_tensor(Image.open(sample[".jpg"])), int(sample[".cls"].read()))


classes = {}


def extract_class(url: str, base_path: str):
    """Parse an S3 URL to extract a 0-based index for the class. This isn't a good way to do things
    (the classes will be inconsistent across processes), but it's simple enough for our tests."""
    # s3://bucket/prefix/n01440764/img.jpg
    key = url.replace(base_path, "").split("/", 1)[0]
    if key not in classes:
        classes[key] = len(classes)
    return io.BytesIO(str(classes[key]).encode("utf-8"))


class VisionModel(L.LightningModule):
    def __init__(
        self,
        dataset: torch.utils.data.Dataset,
        model_name: str,
        batch_size: int,
        num_workers: int,
        local_path: Optional[str],
    ):
        super().__init__()

        ctor = getattr(torchvision.models, model_name)
        self.model = ctor(weights=None)
        self.dataset = dataset
        self.batch_size = batch_size
        self.num_workers = num_workers
        self.local_path = local_path
        self.epoch_start_time = None
        self.epoch_images = 0

        self.loss_fn = torch.nn.CrossEntropyLoss()

    def configure_optimizers(self):
        return torch.optim.AdamW(self.parameters(), lr=1e-3)

    def train_dataloader(self) -> torch.utils.data.DataLoader:
        if self.epoch_start_time is None:
            self.epoch_start_time = time.perf_counter()
        return torch.utils.data.DataLoader(
            self.dataset, batch_size=self.batch_size, num_workers=self.num_workers, shuffle=False
        )

    def forward(self, imgs):
        return self.model(imgs)

    def training_step(self, batch, batch_idx):
        imgs, labels = batch
        self.epoch_images += len(imgs)
        preds = self.forward(imgs)
        loss = self.loss_fn(preds, labels)
        self.log("train_loss", loss)
        return loss

    def on_train_epoch_end(self):
        t = time.perf_counter() - self.epoch_start_time
        self.log("throughput", self.epoch_images / t)
        print(f"{self.epoch_images} images in {t:.2f}s = {self.epoch_images / t:.2f} images/sec")
        self.epoch_start_time = time.perf_counter()
        self.epoch_images = 0
        if self.local_path is not None:
            try:
                # Fire a stat call to a (probably non-existent) file in the Mountpoint directory so
                # we can identify the epoch boundary in log files
                os.stat(os.path.join(self.local_path, "EPOCH-SENTINEL"))
            except:
                pass


def make_mountpoint(s3_url: str, mountpoint_path: Optional[str], additional_args: Optional[str]) -> str:
    """Mount a new Mountpoint instance and return its root directory"""
    bucket, prefix = parse_s3_url(s3_url)

    # Run Mountpoint in background mode, and arrange for it to unmount when this script exits
    tempdir = tempfile.mkdtemp()
    binary = mountpoint_path or "mount-s3"
    args = additional_args.split(" ") if additional_args else []
    subprocess.run([binary, bucket, tempdir] + args, check=True)
    atexit.register(lambda: subprocess.run(["sudo", "umount", tempdir]))

    # Now we can just read our dataset as if it were a local directory
    local_path = os.path.join(tempdir, prefix)
    return local_path


def make_s3_datapipe(args: argparse.Namespace) -> (torchdata.datapipes.iter.IterDataPipe, Optional[str]):
    """Create an IterDataPipe of the chosen kind pointing at the given S3 directory. Also returns
    the local path of Mountpoint if args.source_kind == mountpoint, or None otherwise."""
    if args.source_kind == "mountpoint" or args.source_kind == "local":
        if args.source_kind == "mountpoint":
            local_path = make_mountpoint(args.s3url, args.mountpoint_path, args.mountpoint_args)
            sentinel_path = local_path
        elif args.source_kind == "local":
            local_path, sentinel_path = args.s3url, None
        lister = torchdata.datapipes.iter.FileLister([local_path], recursive=True)
        lister = lister.sharding_filter()
        return torchdata.datapipes.iter.FileOpener(lister, mode="rb"), sentinel_path
    elif args.source_kind == "fsspec":
        # Load from S3 using the FSSpec/S3FS libraries
        lister = torchdata.datapipes.iter.FSSpecFileLister([args.s3url])
        if args.dataset_format == "single":
            # fsspec lists directories rather than recursively, so need a second-level list
            lister = torchdata.datapipes.iter.FSSpecFileLister(lister)
        lister = lister.sharding_filter()
        return torchdata.datapipes.iter.FSSpecFileOpener(lister, mode="rb"), None
    elif args.source_kind == "s3io":
        # Load from S3 using the S3-specific IO datapipe (requires a BUILD_S3=1 version of torchdata)
        if args.region is None:
            raise Exception("region must be specified for s3io")
        lister = torchdata.datapipes.iter.S3FileLister([args.s3url], region=args.region)
        lister = lister.sharding_filter()
        return torchdata.datapipes.iter.S3FileLoader(lister, region=args.region), None
    else:
        raise Exception(f"unknown dataset kind {args.source_kind}")


def make_dataset(args: argparse.Namespace) -> (torch.utils.data.Dataset, Optional[str]):
    """Create a Dataset of the chosen kind and format. Also returns the local path of Mountpoint if
    args.source_kind == mountpoint, or None otherwise."""
    if args.dataset_format == "imagefolder":
        if args.source_kind == "mountpoint":
            local_path = make_mountpoint(args.s3url, args.mountpoint_path, args.mountpoint_args)
            return torchvision.datasets.ImageFolder(local_path), local_path
        elif args.source_kind == "local":
            return torchvision.datasets.ImageFolder(args.s3url), None
        else:
            raise Exception(f"imagefolder dataset only supports mountpoint and local sources")

    pipe, local_path = make_s3_datapipe(args)
    if args.dataset_format == "webdataset":
        return pipe.load_from_tar().webdataset().map(load_image), local_path
    elif args.dataset_format == "single":
        return pipe.map(lambda x: {".jpg": x[1], ".cls": extract_class(x[0], args.s3url)}).map(load_image), local_path
    else:
        raise Exception(f"unknown dataset format {args.dataset_format}")


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


def run_training(dataset: torch.utils.data.Dataset, args: argparse.Namespace, local_path: Optional[str]) -> float:
    """Train a model on the dataset and return the training wall-clock time"""
    L.seed_everything(21, True)

    model = VisionModel(
        dataset, model_name=args.model, batch_size=args.batch_size, num_workers=args.num_workers, local_path=local_path
    )

    trainer = L.Trainer(max_epochs=args.max_epochs, precision=args.precision, enable_checkpointing=False)

    start = time.perf_counter()
    trainer.fit(model)
    end = time.perf_counter()

    return end - start


if __name__ == "__main__":
    torch.set_float32_matmul_precision("medium")

    p = argparse.ArgumentParser()
    ps = p.add_subparsers(dest="command", required=True)

    p_make = ps.add_parser("make", help="create a sharded dataset and upload it to S3")
    p_make.add_argument(
        "s3url", help="S3 URL for sharded training data directory to upload to (starts with 's3://', ends with '/')"
    )
    p_make.add_argument(
        "--dataset-format", choices=["webdataset", "single"], default="webdataset", help="dataset format to save"
    )
    p_make.add_argument("--num-images", type=int, default=10000, help="number of images in dataset")
    p_make.add_argument("--max-shard-size-mib", type=int, default=100, help="max size of each shard (in MiB)")
    p_make.add_argument("--region", help="AWS region")

    p_train = ps.add_parser("train", help="train resnet50 from a dataset")
    p_train.add_argument(
        "--model", default="resnet50", help="model name to train (must be a model from `torchvision.models`)"
    )
    p_train.add_argument(
        "s3url", help="S3 URL for sharded training data directory (starts with 's3://', ends with '/')"
    )
    p_train.add_argument(
        "--source-kind",
        choices=["mountpoint", "fsspec", "s3io", "local"],
        default="mountpoint",
        help="kind of torchdata source to use",
    )
    p_train.add_argument(
        "--dataset-format",
        choices=["webdataset", "single", "imagefolder"],
        default="webdataset",
        help="format of the dataset stored in S3",
    )
    p_train.add_argument("--max-epochs", type=int, default=3, help="number of epochs to train")
    p_train.add_argument("--batch-size", type=int, default=64, help="batch size for training")
    p_train.add_argument("--num-workers", type=int, default=1, help="number of data loader worker processes")
    p_train.add_argument("--precision", default="16-mixed", help="training precision")
    p_train.add_argument("--region", help="AWS region")
    p_train.add_argument("--mountpoint-path", help="path to mountpoint binary")
    p_train.add_argument("--mountpoint-args", help="additional arguments to pass to mountpoint")

    args = p.parse_args()

    if args.command == "make":
        print("Making and uploading dataset")
        bucket, prefix = parse_s3_url(args.s3url)
        if args.dataset_format == "webdataset":
            make_sharded_dataset(bucket, prefix, args)
        elif args.dataset_format == "single":
            make_single_dataset(bucket, prefix, args)
        else:
            raise Exception(f"unknown dataset format {args.dataset_format}")
        print(f"Uploaded to {args.s3url}")
    elif args.command == "train":
        print(f"Training with arguments: {args}")
        dataset, local_path = make_dataset(args)
        training_time = run_training(dataset, args, local_path)
        print(f"{args.source_kind} trained in {training_time:.4f}s")

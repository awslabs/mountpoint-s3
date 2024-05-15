# Installing Mountpoint for Amazon S3

We recommend installing Mountpoint for Amazon S3 by [downloading and installing prebuilt packages using the command line](#download-and-install-mountpoint-for-amazon-s3-from-the-command-line),
or [using the Mountpoint for Amazon S3 CSI driver for Kubernetes](#install-in-a-kubernetes-cluster-with-the-mountpoint-for-amazon-s3-csi-driver).
Other installation options are also available.

Mountpoint for Amazon S3 is only available for Linux operating systems.

## Download and install Mountpoint for Amazon S3 from the command line

The instructions for downloading and installing Mountpoint for Amazon S3 depend on which Linux operating system you are using.

### RPM-based distributions (Amazon Linux, Fedora, CentOS, RHEL)

To download and install Mountpoint for Amazon S3 on RPM-based distributions, including Amazon Linux, follow these steps:

1. Download the Mountpoint for Amazon S3 package using the appropriate command for your architecture:
   * x86_64:
     ```
     wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.rpm
     ```
   * ARM64 (Graviton):
     ```
     wget https://s3.amazonaws.com/mountpoint-s3-release/latest/arm64/mount-s3.rpm
     ```
2. Optionally, you can verify authenticity and integrity of the downloaded file. Identify the appropriate signature link depending on your architecture:
    * x86_64 architecture: `https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.rpm.asc`
    * ARM64 (Graviton) architecture: `https://s3.amazonaws.com/mountpoint-s3-release/latest/arm64/mount-s3.rpm.asc`

   Then see [Verifying the signature of the Mountpoint for Amazon S3 package](#optional-verifying-the-signature-of-the-mountpoint-for-amazon-s3-package) below.
3. Install the package by entering the following command:
   ```
   sudo yum install ./mount-s3.rpm
   ```
4. Verify that Mountpoint for Amazon S3 is successfully installed by entering the following command:
   ```
   mount-s3 --version
   ```
   You should see output similar to the following:
   ```
   mount-s3 1.0.0
   ```

### DEB-based distributions (Debian, Ubuntu)

To download and install Mountpoint for Amazon S3 on DEB-based distributions, follow these steps:

1. Download the Mountpoint for Amazon S3 package using the appropriate command for your architecture:
   * x86_64:
     ```
     wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.deb
     ```
   * ARM64 (Graviton):
     ```
     wget https://s3.amazonaws.com/mountpoint-s3-release/latest/arm64/mount-s3.deb
     ```
2. Optionally, you can verify authenticity and integrity of the downloaded file. Identify the appropriate signature link depending on your architecture:
    * x86_64 architecture: `https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.deb.asc`
    * ARM64 (Graviton) architecture: `https://s3.amazonaws.com/mountpoint-s3-release/latest/arm64/mount-s3.deb.asc`

   Then see [Verifying the signature of the Mountpoint for Amazon S3 package](#optional-verifying-the-signature-of-the-mountpoint-for-amazon-s3-package) below.
3. Install the package by entering the following command:
   ```
   sudo apt-get install ./mount-s3.deb
   ```
4. Verify that Mountpoint for Amazon S3 is successfully installed by entering the following command:
   ```
   mount-s3 --version
   ```
   You should see output similar to the following:
   ```
   mount-s3 1.0.0
   ```

### Other Linux distributions

To download and install Mountpoint for Amazon S3 on other Linux distributions, follow these steps:

1. Install the necessary dependencies. Consult your operating system documentation to install the FUSE and libfuse (v2) packages.
2. Download the Mountpoint for Amazon S3 package using the appropriate command for your architecture:
   * x86_64:
     ```
     wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.tar.gz
     ```
   * ARM64 (Graviton):
     ```
     wget https://s3.amazonaws.com/mountpoint-s3-release/latest/arm64/mount-s3.tar.gz
     ```
3. Optionally, you can verify authenticity and integrity of the downloaded file. Identify the appropriate signature link depending on your architecture:
    * x86_64 architecture: `https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.tar.gz.asc`
    * ARM64 (Graviton) architecture: `https://s3.amazonaws.com/mountpoint-s3-release/latest/arm64/mount-s3.tar.gz.asc`

   Then see [Verifying the signature of the Mountpoint for Amazon S3 package](#optional-verifying-the-signature-of-the-mountpoint-for-amazon-s3-package) below.
4. Install the package by entering the following command:
   ```
   sudo mkdir -p /opt/aws/mountpoint-s3 && sudo tar -C /opt/aws/mountpoint-s3 -xzf ./mount-s3.tar.gz
   ```
5. Add the `mount-s3` binary to your PATH environment variable. To do so, add the following line to your `$HOME/.profile` file:
   ```
   export PATH=$PATH:/opt/aws/mountpoint-s3/bin
   ```
   After adding this line, enter the following command:
   ```
   source $HOME/.profile
   ```
6. Verify that Mountpoint for Amazon S3 is successfully installed by entering the following command:
   ```
   mount-s3 --version
   ```
   You should see output similar to the following:
   ```
   mount-s3 1.0.0
   ```

### Optional: Verifying the signature of the Mountpoint for Amazon S3 package

To verify the authenticity and integrity of a downloaded Mountpoint for Amazon S3 package, follow these steps:

1. Install GnuPG (the `gpg` command) on your host if it is not already available. GnuPG is installed by default on Amazon Linux AMIs.
2. Download the Mountpoint for Amazon S3 public key by entering the following command:
   ```
   wget https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS
   ```
3. Import the Mountpoint for Amazon S3 public key into your keyring by entering the following command:
   ```
   gpg --import KEYS
   ```
4. Verify the fingerprint of the Mountpoint for Amazon S3 public key by entering the following command:
   ```
   gpg --fingerprint mountpoint-s3@amazon.com
   ```
   Confirm that the displayed fingerprint string matches the following:
   ```
   673F E406 1506 BB46 9A0E  F857 BE39 7A52 B086 DA5A
   ```
   If the fingerprint string does not match, do not finish installing Mountpoint for Amazon S3.
5. Download the package signature file by entering the following command. For `signature-link`, use the appropriate signature link from the sections above.
   ```
   wget signature-link
   ```
6. Verify the signature of the downloaded package by entering the following command. Use the appropriate `signature-filename` from the previous step.
   ```
   gpg --verify signature-filename
   ```
   For example, on RPM-based distributions, including Amazon Linux, enter the following command.
   ```
   gpg --verify mount-s3.rpm.asc
   ```
   The output should report a `Good signature`. If the output includes the phrase `BAD signature`, re-download the Mountpoint for Amazon S3 package file and repeat these steps. If the issue persists, do not finish installing Mountpoint for Amazon S3. The output may include a warning about a trusted signature. This does not indicate a problem, only that you have not independently verified the Mountpoint for Amazon S3 public key.

## Install in a Kubernetes cluster with the Mountpoint for Amazon S3 CSI driver

To use Mountpoint for Amazon S3 with applications running in a Kubernetes cluster,
we recommend installing and using the [Mountpoint for Amazon S3 CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/s3-csi.html).
You can install the CSI driver on a self-managed Kubernetes cluster by following its [installation instructions](https://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/install.md#installation),
or if you use Amazon EKS,
it is also available as an [EKS managed add-on](https://docs.aws.amazon.com/eks/latest/userguide/s3-csi.html).

## Running Mountpoint for Amazon S3 in a Docker container

You can run Mountpoint for Amazon S3 in a Docker container using our provided Dockerfiles.
We don't recommend this option, as running a FUSE file system like Mountpoint inside a container
requires giving the container broad root-level privileges to your host system.

See [Running Mountpoint for Amazon S3 in a Docker container](../docker/README.md) for instructions on using Mountpoint with Docker.

## Installing previous Mountpoint for Amazon S3 releases

We recommend always installing the latest Mountpoint for Amazon S3 release,
but if you need to install a previous version,
you can find links to them on the [GitHub Releases](https://github.com/awslabs/mountpoint-s3/releases) page.

## Building Mountpoint for Amazon S3 from source

You can build Mountpoint for Amazon S3 from source. However, binaries built in this way are not officially supported by AWS.

1. Install the necessary dependencies.
    * For RPM-based distributions (Amazon Linux, Fedora, CentOS, RHEL), run the following command:
      ```
      sudo yum install -y fuse fuse-devel cmake3 clang git pkgconfig
      ```
    * For DEB-based distributions (Debian, Ubuntu), run the following command:
      ```
      sudo apt-get install -y fuse libfuse-dev cmake clang git pkg-config
      ```
2. Install the Rust compiler using [rustup](https://rustup.rs/):
   ```
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && source "$HOME/.cargo/env"
   ```
3. Clone the Mountpoint for Amazon S3 source code from GitHub:
   ```
   git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git
   ```
4. Build Mountpoint for Amazon S3:
   ```
   cd mountpoint-s3
   cargo +nightly build --release
   ```
5. The final binary will be at `target/release/mount-s3`. Optionally, you can install this binary by copying it to the `/usr/bin` directory:
   ```
   sudo cp target/release/mount-s3 /usr/bin/
   ```

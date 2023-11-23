# Validation of a Release Package

The scripts in this directory can be used to validate the artifacts for a released version of Mountpoint.

The `validate.py` python script validates the RPM and DEB packages and the gzip archive for the given Mountpoint release. The script runs a docker container for the specified OS, downloads the Mountpoint package, verifies its signature, and proceeds to installs it. Then, it will use the installed binary to mount the specified bucket and list its content.

To see the available options, run:

    python3 validate.py --help

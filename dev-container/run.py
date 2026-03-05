#!/usr/bin/env python3
import argparse
import os
import subprocess

CONTAINER_USER = 'dev-user'
CARGO_CACHE_VOLUME = 'mountpoint-s3-cargo-cache'
CARGO_TARGET_VOLUME = 'mountpoint-s3-target-cache'
RUSTUP_VOLUME = 'mountpoint-s3-rustup-home'


def main():
    parser = argparse.ArgumentParser(description='Run Mountpoint S3 development container')
    parser.add_argument('--image', default='mountpoint-s3-dev', help='Docker image name')
    parser.add_argument('--build', action='store_true', help='Build the image before running')
    parser.add_argument('--drop-rustup-volume', action='store_true', help='Remove the rustup Docker volume and exit')

    creds_group = parser.add_mutually_exclusive_group()
    creds_group.add_argument('--use-credentials-from-env', action='store_true', help='Pass through AWS env vars')
    creds_group.add_argument('--use-credentials-from-aws-config', action='store_true', help='Pass through AWS env vars')

    args, container_args = parser.parse_known_args()

    # Remove '--' separator if present
    if container_args and container_args[0] == '--':
        container_args = container_args[1:]

    if args.drop_rustup_volume:
        subprocess.run(['docker', 'volume', 'rm', RUSTUP_VOLUME], check=True)
        return

    if args.build:
        subprocess.run(
            ['docker', 'build', '-f', 'dev-container/Dockerfile.development', '-t', args.image, '.'], check=True
        )

    docker_args = [
        'docker',
        'run',
        '-it',
        '--rm',
        '--device=/dev/fuse',
        '--privileged',
        # f'--user={os.getuid()}:{os.getgid()}',
        f'--env-file={os.getcwd()}/.env',
        f'-v={os.getcwd()}:/workspace',
        f'-v={CARGO_CACHE_VOLUME}:/home/{CONTAINER_USER}/.cargo/registry',
        f'-v={CARGO_TARGET_VOLUME}:/workspace/target',
        f'-v={RUSTUP_VOLUME}:/home/{CONTAINER_USER}/.rustup',
    ]

    if args.use_credentials_from_env:
        for var in ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_SESSION_TOKEN', 'AWS_REGION']:
            if var in os.environ:
                docker_args.extend(['-e', var])
    elif args.use_credentials_from_aws_config:
        aws_dir = os.path.expanduser('~/.aws')
        if os.path.exists(aws_dir):
            docker_args.extend(['-v', f'{aws_dir}:/home/{CONTAINER_USER}/.aws:ro'])

    if container_args:
        docker_args.extend([args.image, '/bin/bash', '-c', ' '.join(container_args)])
    else:
        docker_args.extend([args.image, '/bin/bash'])

    subprocess.run(docker_args)


if __name__ == '__main__':
    main()

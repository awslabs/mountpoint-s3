#!/usr/bin/env python3
import argparse
import os
import subprocess
import sys

CONTAINER_USER = 'dev-user'
CARGO_CACHE_VOLUME = 'mountpoint-s3-cargo-cache'
CARGO_TARGET_VOLUME = 'mountpoint-s3-target-cache'
RUSTUP_VOLUME = 'mountpoint-s3-rustup-home'


def handle_build(args):
    subprocess.run(['docker', 'build', '-f', 'dev-container/Dockerfile.development', '-t', args.image, '.'], check=True)


def handle_run(args, container_args):
    docker_args = [
        'docker',
        'run',
        '-it',
        '--rm',
        '--device=/dev/fuse',
        '--privileged',
        f'-v={os.getcwd()}:/workspace',
        f'-v={CARGO_CACHE_VOLUME}:/home/{CONTAINER_USER}/.cargo/registry',
        f'-v={CARGO_TARGET_VOLUME}:/workspace/target',
        f'-v={RUSTUP_VOLUME}:/home/{CONTAINER_USER}/.rustup',
    ]

    dotenv_path = f"{os.getcwd()}/.env"
    if os.path.exists(dotenv_path):
        docker_args.extend(['--env-file', dotenv_path])

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


def handle_clean(args):
    result = subprocess.run(
        ['docker', 'ps', '-q', '--filter', f'ancestor={args.image}'], capture_output=True, text=True
    )
    if result.stdout.strip():
        print(f"Error: a container using image '{args.image}' is still running. Stop it before cleaning.")
        sys.exit(1)
    print("Deleting docker volumes")
    for volume in [CARGO_CACHE_VOLUME, CARGO_TARGET_VOLUME, RUSTUP_VOLUME]:
        subprocess.run(['docker', 'volume', 'rm', volume], check=False)


def main():
    parser = argparse.ArgumentParser(description='Mountpoint S3 development container tool')
    parser.add_argument('--image', default='mountpoint-s3-dev', help='Docker image name')
    subparsers = parser.add_subparsers(dest='command', required=True)

    # build
    subparsers.add_parser('build', help='Build the development container image')

    # run
    run_parser = subparsers.add_parser(
        'run',
        help='Run the development container',
        description="""
        Run the development container and start a shell inside or execute the commands directly if provided after '--'.
        For example:
        dev.py run -- cargo check
        """,
        epilog='Environment variables in a dotenv file (.env) will be passed through to the container automatically.',
    )
    creds_group = run_parser.add_mutually_exclusive_group()
    creds_group.add_argument('--use-credentials-from-env', action='store_true', help='Pass through AWS env vars')
    creds_group.add_argument('--use-credentials-from-aws-config', action='store_true', help='Mount ~/.aws as read-only')

    # clean
    subparsers.add_parser('clean', help='Remove all dev container Docker volumes')

    args, container_args = parser.parse_known_args()
    # Remove '--' separator if present
    if container_args and container_args[0] == '--':
        container_args = container_args[1:]

    if args.command == 'build':
        handle_build(args)
    elif args.command == 'run':
        handle_run(args, container_args)
    elif args.command == 'clean':
        handle_clean(args)


if __name__ == '__main__':
    main()

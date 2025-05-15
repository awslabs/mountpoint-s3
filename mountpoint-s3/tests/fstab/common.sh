function build_mountpoint() {
  build_out=$(cargo build --bin mount-s3 --release --features=fstab --message-format=json-render-diagnostics)

  PROJECT_ROOT=$(dirname "$(which "$0")")/../../..
  MOUNTPOINT_PATH=$(printf "%s" "$build_out" | jq -js '[.[] | select(.reason == "compiler-artifact") | select(.executable != null)] | last | .executable')
  echo "Mountpoint path: $MOUNTPOINT_PATH"
}

function spawn_mounts() {
  FSTAB_CONTENT=$1
  export SYSTEMD_FSTAB=$(mktemp)
  export SYSTEMD_PROC_CMDLINE=""

  OUTPUT_DIR="$PROJECT_ROOT/out"
  GENERATOR_BIN="/usr/lib/systemd/system-generators/systemd-fstab-generator"
  SYSTEMD_MOUNT_DIR=/etc/systemd/system/
  UNIT_SOURCE_DIR=$OUTPUT_DIR/normal

  echo "$FSTAB_CONTENT" > "$SYSTEMD_FSTAB"

  rm -r "$OUTPUT_DIR" || true
  mkdir -p "$OUTPUT_DIR"/{normal,early,late}

  $GENERATOR_BIN "$UNIT_SOURCE_DIR" "$OUTPUT_DIR/early" "$OUTPUT_DIR/late" || true

  sudo systemctl daemon-reload

  for unit in "$UNIT_SOURCE_DIR"/*.mount; do
    unit=$(basename $unit)
    sudo cp "$UNIT_SOURCE_DIR/$unit" "$SYSTEMD_MOUNT_DIR"
    echo -e "\nSystemd unit file $unit:"
    cat "$UNIT_SOURCE_DIR/$unit"

    # Emit logs only if Mountpoint fails to start
    trap "sudo journalctl -u \"$unit\" --since \"$(date '+%Y-%m-%d %H:%M:%S')\" | cat" ERR
    sudo systemctl start "$unit"

    echo -e "\nStatus of systemd unit $unit:"
    sudo systemctl status "$unit" | cat
    trap - ERR
  done

  trap cleanup EXIT
}

function cleanup {
  rm "$SYSTEMD_FSTAB"
  for unit in "$UNIT_SOURCE_DIR"/*.mount; do
    sudo journalctl -u "$(basename "$unit")" --since "$(date '+%Y-%m-%d %H:%M:%S')" | cat
    sudo systemctl stop "$(basename "$unit")"
    sudo rm "$unit"
  done
  sudo systemctl daemon-reload
}

#!/bin/bash

# Source directory in the main branch
SOURCE_DIR=".github/actions/static_files"
# Temporary directory to store files in after switching to gh-pages branch
TMP_DIR="/tmp/static_files"

# Check if at least one destination directory is provided as argument
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <destination_dir1> <destination_dir2> ... <destination_dirN>"
  exit 1
fi

# Function to copy files from source to destination dirs
copy_files() {
  local SOURCE_DIR=$1
  local DEST_DIR=$2
  local FILES=("${@:3}")  # Capture all remaining arguments as the list of files to copy

  echo "Copying files from $SOURCE_DIR to $DEST_DIR..."

  # Create destination directory if it doesn't exist
  mkdir -p "$DEST_DIR"

  # Iterate through each file in the list and copy it to the destination directory
  for FILE in "${FILES[@]}"; do
    # Check if the file exists in the source directory
    if [[ -f "$SOURCE_DIR/$FILE" ]]; then
      echo "Copying $FILE to $DEST_DIR"
      cp "$SOURCE_DIR/$FILE" "$DEST_DIR/"
    else
      echo "File $FILE not found in $SOURCE_DIR"
      exit 1
    fi
  done
}

# List of predefined filenames of static resources
FILES=(
  "Chart.min.css"
  "Chart.min.js"
  "index.html"
  "main.js"
  "styles.css"
)

# Copy files to the temporary directory
copy_files "$SOURCE_DIR" "$TMP_DIR" "${FILES[@]}"

# Switch to the gh-pages to provision static resources to it
git switch gh-pages

# Iterate through the destination directories and copy files from the temporary one to each of them
for DEST_DIR in "$@"; do
  copy_files "$TMP_DIR" "$DEST_DIR" "${FILES[@]}"
done

echo "Copied static files for all charts"

for DIR in "$@"; do
  if [ -d "$DIR" ]; then
    echo "Adding files from $DIR..."
    git add "$DIR"/*
  else
    echo "Warning: Directory $DIR does not exist. Skipping."
    exit 1
  fi
done

# Check if there are any files to commit
if git diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

# Commit the changes
git \
  -c user.name=github-bench-workflow \
  -c user.email=github@users.noreply.github.com \
  commit -m "Stored static files"

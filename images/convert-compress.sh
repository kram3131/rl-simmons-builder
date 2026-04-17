#!/bin/bash
# Convert HEIC → JPEG and compress all project photos for web
# Run from: /Users/markgarza/Desktop/Randy Website/images/
# Output: images/projects/[safe-folder-name]/

RAW="/Users/markgarza/Desktop/Randy Website/images/raw-downloads"
OUT="/Users/markgarza/Desktop/Randy Website/images/projects"

# Ensure output root exists
mkdir -p "$OUT"

process_folder() {
  local SAFE_NAME="$1"
  local SRC_DIR

  # Find the actual subfolder gdown created inside raw-downloads/safe-name/
  SRC_DIR=$(find "$RAW/$SAFE_NAME" -mindepth 1 -maxdepth 1 -type d | head -1)
  if [ -z "$SRC_DIR" ]; then
    # Files dumped directly (no subfolder)
    SRC_DIR="$RAW/$SAFE_NAME"
  fi

  local DEST="$OUT/$SAFE_NAME"
  mkdir -p "$DEST"

  local COUNT=0

  # Convert HEIC → JPEG
  find "$SRC_DIR" -maxdepth 2 \( -iname "*.heic" \) | while IFS= read -r f; do
    base=$(basename "$f")
    base="${base%.*}"
    OUTFILE="$DEST/${base}.jpg"
    if [ ! -f "$OUTFILE" ]; then
      sips -s format jpeg -s formatOptions 82 --resampleWidth 1800 "$f" --out "$OUTFILE" 2>/dev/null
      echo "  HEIC→JPG: $base.jpg"
    fi
  done

  # Compress existing JPEGs
  find "$SRC_DIR" -maxdepth 2 \( -iname "*.jpg" -o -iname "*.jpeg" \) | while IFS= read -r f; do
    base=$(basename "$f")
    base="${base%.*}"
    OUTFILE="$DEST/${base}.jpg"
    if [ ! -f "$OUTFILE" ]; then
      sips -s format jpeg -s formatOptions 82 --resampleWidth 1800 "$f" --out "$OUTFILE" 2>/dev/null
      echo "  JPG: $base.jpg"
    fi
  done

  # Copy WebP as-is (already web-ready)
  find "$SRC_DIR" -maxdepth 2 -iname "*.webp" | while IFS= read -r f; do
    base=$(basename "$f")
    OUTFILE="$DEST/$base"
    if [ ! -f "$OUTFILE" ]; then
      cp "$f" "$OUTFILE"
      echo "  WebP: $base"
    fi
  done

  local DONE=$(ls "$DEST" 2>/dev/null | wc -l | tr -d ' ')
  echo "DONE $SAFE_NAME: $DONE web images"
}

echo "=== Converting and compressing at $(date) ==="

FOLDERS=(
  "turtle-creek-custom"
  "investment-remodel"
  "harper-white-house"
  "harper-ranch-conversion"
  "kerrville-remodel"
  "hunt-custom"
  "signature-bath-remodel"
  "shalako-custom"
  "riverhill-remodel"
  "barn-courtyard"
  "harper-estate-remodel"
  "turtle-creek-custom-2"
  "harper-barndo"
)

for FOLDER in "${FOLDERS[@]}"; do
  echo "--- Processing: $FOLDER ---"
  process_folder "$FOLDER"
done

echo ""
echo "=== Conversion complete at $(date) ==="
TOTAL=$(find "$OUT" -type f | wc -l | tr -d ' ')
echo "Total web images: $TOTAL"
echo ""
echo "File list by project:"
for FOLDER in "${FOLDERS[@]}"; do
  CNT=$(ls "$OUT/$FOLDER" 2>/dev/null | wc -l | tr -d ' ')
  echo "  $FOLDER: $CNT images"
done

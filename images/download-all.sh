#!/bin/bash
# Download all 13 project folders from Google Drive
# Run from: /Users/markgarza/Desktop/Randy Website/images/

BASE="/Users/markgarza/Desktop/Randy Website/images/raw-downloads"
GDOWN="python3 -m gdown"

declare -A FOLDERS=(
  ["turtle-creek-custom"]="1EPSHglCTUjItaxDfMeKdP_iDuArXYMm-"
  ["investment-remodel"]="1249AjzAEhVUQJWi6rMe6EuoLY4pE_9UH"
  ["harper-white-house"]="1NLC8jRH0K6JSeAqPRu3fMcHGQWy90A_R"
  ["harper-ranch-conversion"]="1Xd41TRS_J_JYryv7yjLstWMAgKgzKq4M"
  ["kerrville-remodel"]="1TCryncB9vjOqdbIUs6WbSUSa5Ir2mgVE"
  ["hunt-custom"]="1AjSIPE6pUxyhKknXKy76RHJihikci7j9"
  ["shalako-custom"]="1seXA18o7NIMs_ibVV7UwDvOLY1zXz8a8"
  ["riverhill-remodel"]="176rLxNqPwhv32WvIeURGhggwPoHH54Dr"
  ["barn-courtyard"]="1YWqndw7GvlRlZv-mOgT2htjLRixk9CCb"
  ["harper-estate-remodel"]="1X8T1wrxq1oXQzqSqJ7fF-sfNZs_vMGcY"
  ["turtle-creek-custom-2"]="1OEDzdvqEiG4d1qy18JcfxOHrbWopKoYm"
  ["harper-barndo"]="1Wu-AcbJegArC86qwfNrr7lpeH0zqAaM6"
)

echo "=== Starting downloads at $(date) ==="

for SAFE_NAME in "${!FOLDERS[@]}"; do
  FOLDER_ID="${FOLDERS[$SAFE_NAME]}"
  DEST="$BASE/$SAFE_NAME"
  echo ""
  echo "--- Downloading: $SAFE_NAME (ID: $FOLDER_ID) ---"

  # Skip if already has files
  FILE_COUNT=$(find "$DEST" -type f 2>/dev/null | wc -l)
  if [ "$FILE_COUNT" -gt "0" ]; then
    echo "  Already has $FILE_COUNT file(s), skipping."
    continue
  fi

  cd "$DEST" && $GDOWN --folder "$FOLDER_ID" 2>&1
  echo "  Done: $(find "$DEST" -type f | wc -l) files"
done

echo ""
echo "=== All downloads complete at $(date) ==="
echo "Total files: $(find "$BASE" -type f | wc -l)"

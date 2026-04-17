#!/bin/bash
# Sort Harper Ranch Conversion photos into before/during/after by file date
# Run AFTER conversion (operates on images/projects/harper-ranch-conversion/)
#
# Date logic (from Drive file timestamps in previous session):
#   Nov 14–17 2025 → before
#   Dec 2025        → during
#   Mar–Apr 2026    → after

PROJ="/Users/markgarza/Desktop/Randy Website/images/projects/harper-ranch-conversion"

if [ ! -d "$PROJ" ]; then
  echo "ERROR: $PROJ not found. Run convert-compress.sh first."
  exit 1
fi

echo "=== Sorting Harper Ranch Conversion by date ==="
echo ""
echo "Files and their modification dates:"
echo "---"

for f in "$PROJ"/*.jpg "$PROJ"/*.webp 2>/dev/null; do
  [ -f "$f" ] || continue
  FNAME=$(basename "$f")
  # Get file modification date (year-month-day)
  FDATE=$(stat -f "%Sm" -t "%Y-%m-%d" "$f" 2>/dev/null || date -r "$f" "+%Y-%m-%d" 2>/dev/null)
  YEAR=$(echo "$FDATE" | cut -d'-' -f1)
  MONTH=$(echo "$FDATE" | cut -d'-' -f2)

  if [ "$YEAR" = "2025" ] && [ "$MONTH" -le "11" ]; then
    PHASE="before"
  elif [ "$YEAR" = "2025" ] && [ "$MONTH" = "12" ]; then
    PHASE="during"
  else
    PHASE="after"
  fi

  echo "  $PHASE  |  $FDATE  |  $FNAME"
done

echo ""
echo "=== COPY the above output and use it to fill in projects-gallery.js ==="
echo "Format for each image entry:"
echo "  { src: 'images/projects/harper-ranch-conversion/FILENAME.jpg', ratio: '4/3' }"

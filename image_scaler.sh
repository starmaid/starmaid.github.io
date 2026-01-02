#!/usr/bin/env bash

# Usage: ./scale_image.sh input.jpg output.jpg 1024
# (where 1024 is the max dimension)

input="$1"
output="$2"
max_dim="$3"

# Get image dimensions
read width height < <(ffprobe -v error -select_streams v:0 -show_entries stream=width,height \
  -of csv=p=0:s=' ' "$input")

# If both dimensions are within the limit, just copy
if [[ $width -le $max_dim && $height -le $max_dim ]]; then
  cp "$input" "$output"
else
  # Scale so the largest dimension is max_dim, preserving aspect ratio
  ffmpeg -i "$input" -vf "scale='if(gt(iw,ih),$max_dim,-2)':'if(gt(ih,iw),$max_dim,-2)'" "$output"
fi
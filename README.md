# starmaid.github.io

![](./fuck-it-post-it.svg)

[Personal Website](https://starmaid.github.io). Uses riggraz/no-style-please as the base. 

*"I don't know what programmer needs to hear this, but focus on the content of your personal website - don't obsess over coding your theme" - Unknown*

```
exiftool -gps:all= -r -overwrite_original -ext jpg -ext png -ext jpeg .

#!/bin/bash
mkdir ./scaled
for filename in ./*.jpg; do
    ffmpeg -i "$filename" -vf scale="iw/2:ih/2" "./scaled/$filename"
done
```
#!/bin/bash
# Bundle the four source files into one, so a browser can never end up
# holding a mix of old and new modules (that combination crashes the app).
cd "$(dirname "$0")"
{
  echo "/* Spot the Ball — generated bundle. Edit js/*.js, then run ./build.sh */"
  cat js/data.js js/prizes.js js/api.js js/app.js
} > js/bundle.js
echo "bundle.js: $(wc -c < js/bundle.js | tr -d ' ') bytes"

#!/bin/bash

pushd "$(dirname "$0")/interfaces"
trap popd EXIT

for x in *; do
    test -d "$x" || continue
    N="$(basename "$x")"
    mkdir -p "../dist/$N"
    cat > "../dist/$N/package.json" <<EOF
{
  "name": "@dbus-types/$N",
  "version": "0.0.3",
  "description": "$N D-BUS Definitions",
  "types": "$N.d.ts",
  "scripts": {},
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dbus-types/dbus-types.git"
  },
  "keywords": [
    "dbus",
    "$N",
    "typescript"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/dbus-types/dbus-types/issues"
  },
  "homepage": "https://github.com/dbus-types/dbus-types#readme",
  "dependencies": {
    "@dbus-types/common": "^0.0.1"
  },
  "devDependencies": {
    "@types/node": "^16"
  }
}
EOF
    echo "$N"
    ../dbus-gen $N/*.xml > "../dist/$N/$N.d.ts" || rm -rf "../dist/$N"
done


#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
APP="$ROOT/linux-operator"
V86="$APP/vendor/v86"
OUT="$APP/assets"
mkdir -p "$OUT" "$OUT/rootfs-flat"

printf '\n==> Compilation de v86 depuis le code source fourni\n'
(cd "$V86" && make build/libv86.js build/v86.wasm)
cp "$V86/build/libv86.js" "$OUT/libv86.js"
cp "$V86/build/v86.wasm" "$OUT/v86.wasm"
cp "$V86/bios/seabios.bin" "$OUT/seabios.bin"
cp "$V86/bios/vgabios.bin" "$OUT/vgabios.bin"
cp "$V86/LICENSE" "$OUT/LICENSE-v86.txt"

printf '\n==> Installation de la console web xterm (fichiers hébergés localement)\n'
npm install --no-save --prefix "$APP/build/npm" @xterm/xterm@5.5.0 @xterm/addon-fit@0.10.0
cp "$APP/build/npm/node_modules/@xterm/xterm/lib/xterm.js" "$OUT/xterm.js"
cp "$APP/build/npm/node_modules/@xterm/xterm/css/xterm.css" "$OUT/xterm.css"
cp "$APP/build/npm/node_modules/@xterm/addon-fit/lib/addon-fit.js" "$OUT/xterm-addon-fit.js"
cp "$APP/build/npm/node_modules/@xterm/xterm/LICENSE" "$OUT/LICENSE-xterm.txt"
cp "$APP/build/npm/node_modules/@xterm/addon-fit/LICENSE" "$OUT/LICENSE-xterm-fit.txt"

printf "\n==> Construction Alpine Linux 32 bits + vrai GNU Bash\n"
docker build --platform linux/386 -f "$APP/linux/Dockerfile" -t linux-operator-i386 "$APP/linux"
CONTAINER="linux-operator-export-$$"
trap 'docker rm -f "$CONTAINER" >/dev/null 2>&1 || true' EXIT
docker create --platform linux/386 --name "$CONTAINER" linux-operator-i386 >/dev/null
docker export "$CONTAINER" > "$APP/build/rootfs.tar"
docker rm "$CONTAINER" >/dev/null
trap - EXIT

printf '\n==> Création du système de fichiers 9p pour GitHub Pages\n'
rm -rf "$OUT/rootfs-flat"
mkdir -p "$OUT/rootfs-flat"
python "$V86/tools/fs2json.py" --zstd --out "$OUT/alpine-fs.json" "$APP/build/rootfs.tar"
python "$V86/tools/copy-to-sha256.py" --zstd "$APP/build/rootfs.tar" "$OUT/rootfs-flat"
python - "$OUT" <<'PY2'
import json, pathlib, sys
p=pathlib.Path(sys.argv[1]); tree=json.loads((p/'alpine-fs.json').read_text());
assert tree['fsroot'] and tree['version']==3
for file in ['v86.wasm','libv86.js','seabios.bin','vgabios.bin','xterm.js','alpine-fs.json']:
 assert (p/file).stat().st_size>0,file
print('OK:',len(list((p/'rootfs-flat').iterdir())),'blobs Linux 9p,',len(tree['fsroot']),'entrées racine')
PY2
rm -f "$APP/build/rootfs.tar"
printf '\n==> Ressources Linux Operator prêtes pour GitHub Pages\n'

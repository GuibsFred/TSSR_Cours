// Les fichiers peuvent être hébergés localement sous /linux-lab/vendor/ et /linux-lab/images/.
// Par défaut, le prototype utilise les fichiers publics du projet v86.
window.LAB_CONFIG = {
  js: 'https://copy.sh/v86/build/libv86.js',
  wasm: 'https://copy.sh/v86/build/v86.wasm',
  bios: 'https://copy.sh/v86/bios/seabios.bin',
  vgaBios: 'https://copy.sh/v86/bios/vgabios.bin',
  filesystemJson: 'https://copy.sh/v86/images/alpine-fs.json',
  filesystemBase: 'https://copy.sh/v86/images/alpine-rootfs-flat',
  memoryMB: 256
};

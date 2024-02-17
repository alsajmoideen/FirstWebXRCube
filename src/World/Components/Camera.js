import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    40
  );

  camera.position.set(0, 0, 0);

  return camera;
}

export { createCamera };

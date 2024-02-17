const setSize = (camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
};

class Resizer {
  constructor(camera, renderer) {
    setSize(camera, renderer);

    window.addEventListener("resize", () => {
      setSize(camera, renderer);
    });
  }
}

export { Resizer };

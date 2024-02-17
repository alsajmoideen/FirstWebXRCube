import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

async function createBird() {
  const loader = new GLTFLoader();

  const gltf_data = await loader.loadAsync(
    `https://threejs.org/examples/models/gltf/Parrot.glb`
  );
  const model = gltf_data.scene.children[0];
  model.position.set(0, 0, -0.5);
  model.rotation.set(0, 0.3, 0);
  model.scale.set(0.0025, 0.0025, 0.0025);

  const clip = gltf_data.animations[0];
  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  // model Loop Property
  model.tick = (delta) => {
    mixer.update(delta);
  };

  return model;
}

export { createBird };

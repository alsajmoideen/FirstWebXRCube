import { ARButton } from "three/examples/jsm/webxr/ARButton";
import { createScene } from "./System/Scene";
import { createCamera } from "./Components/Camera";
import { createRenderer } from "./System/Renderer";
import { Resizer } from "./System/Resize";
import { Loop } from "./System/Loop";

import { createCube } from "./Components/Cube";
import { createControls } from "./System/Controls";
import { HemisphereLight } from "three";
import { createBird } from "./Components/Bird";

let camera;
let renderer;
let scene;
let loop;
class World {
  constructor() {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    document.body.appendChild(renderer.domElement);
    // Add the AR button to the body of the DOM
    document.body.appendChild(ARButton.createButton(renderer));

    // const controls = createControls(camera, renderer.domElement);

    var light = new HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    loop = new Loop(camera, scene, renderer);

    // const cube = createCube();
    // loop.updatables.push(cube);
    // scene.add(cube);

    (async () => {
      const bird = await createBird();
      scene.add(bird);
      loop.updatables.push(bird);
    })();

    const resizer = new Resizer(camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };

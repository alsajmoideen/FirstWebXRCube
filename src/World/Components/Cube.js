import {
  BoxGeometry,
  Color,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

function createCube() {
  const geometry = new BoxGeometry(0.1, 0.1, 0.1);
  const material = new MeshStandardMaterial({
    color: new Color("rgb(226,35,213)"),
    transparent: 1,
    opacity: 0.8,
  });
  const cube = new Mesh(geometry, material);
  cube.position.set(0, 0, -0.5);

  const radiansPerSecond = MathUtils.degToRad(30);

  // Cube Loop Property
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };

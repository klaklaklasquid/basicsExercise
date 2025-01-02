import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector(".canvas");

//* functions
function handleRenderer() {
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

//* sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//* scene
const scene = new THREE.Scene();

//* ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

//* material
const outlineMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});

const sunMaterial = new THREE.MeshBasicMaterial({
  color: "darkorange",
});

const mercuryMaterial = new THREE.MeshStandardMaterial({
  color: "#b1adad",
});

const venusMaterial = new THREE.MeshStandardMaterial({
  color: "#e3bb76",
});

const earthMaterial = new THREE.MeshStandardMaterial({
  color: "#9fc164",
});

const marsMaterial = new THREE.MeshStandardMaterial({
  color: "#c1440e",
});

const jupiterMaterial = new THREE.MeshStandardMaterial({
  color: "#bd7657",
});

const saturnMaterial = new THREE.MeshStandardMaterial({
  color: "#c3924f",
});

const uranusMaterial = new THREE.MeshStandardMaterial({
  color: "#62aee7",
});

const neptuneMaterial = new THREE.MeshStandardMaterial({
  color: "#2b378b",
});

const glowSunMaterial = new THREE.MeshStandardMaterial({
  color: "orange",
  transparent: true,
  opacity: 0.1,
  side: THREE.BackSide,
});

//* outlines
const ringsArray = [4, 6, 8, 10, 16, 22, 26, 34]; // Define the radii for the outlines

for (let i = 0; i < ringsArray.length; i++) {
  const outline = new THREE.Mesh(
    new THREE.TorusGeometry(ringsArray[i], 0.01, 8, 100),
    outlineMaterial
  );
  outline.rotation.x = -2;
  outline.rotation.y = 2.9;
  outline.rotation.z = 3;
  outline.scale.set(1, 1.1, 1);
  scene.add(outline);
}

//* objects
//? SUN
const sun = new THREE.Mesh(new THREE.SphereGeometry(3, 128, 128), sunMaterial);
scene.add(sun);

const glowSun = new THREE.Mesh(
  new THREE.SphereGeometry(3.2, 128, 128),
  glowSunMaterial
);
scene.add(glowSun);

//? MERCURY
const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.2, 128, 128),
  mercuryMaterial
);
scene.add(mercury);

//? VENUS
const venus = new THREE.Mesh(
  new THREE.SphereGeometry(0.25, 128, 128),
  venusMaterial
);
scene.add(venus);

//? EARTH
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(0.4, 128, 128),
  earthMaterial
);
scene.add(earth);

//? MARS
const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.4, 128, 128),
  marsMaterial
);
scene.add(mars);

//? JUPITER
const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 128, 128),
  jupiterMaterial
);
scene.add(jupiter);

//? SATURN
const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(1.3, 128, 128),
  saturnMaterial
);
scene.add(saturn);

//? URANUS
const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(0.9, 128, 128),
  uranusMaterial
);
scene.add(uranus);

//? NEPTUNE
const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(0.8, 128, 128),
  neptuneMaterial
);
scene.add(neptune);

//* camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.lookAt(sun);
camera.position.x = -10;

scene.add(camera);

//* controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//* renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
handleRenderer();

//* resize
window.addEventListener("resize", () => {
  //* update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //* update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  //* update renderer
  handleRenderer();
});

//* animate
const clock = new THREE.Clock();
const tick = () => {
  //* initiate clock
  const elapsedTime = clock.getElapsedTime();

  //*animation
  glowSun.position.x = Math.sin(elapsedTime * 2) * 0.025;
  glowSun.position.y = Math.sin(elapsedTime * 2) * 0.025;
  glowSun.position.z = Math.sin(elapsedTime * 2) * 0.025;

  const mercurySpeed = 4;
  const venusSpeed = 3;
  const earthSpeed = 2;
  const marsSpeed = 1.8;
  const jupiterSpeed = 1.2;
  const saturnSpeed = 1;
  const uranusSpeed = 0.8;
  const neptuneSpeed = 0.6;

  mercury.position.x = Math.cos(elapsedTime * mercurySpeed) * 4;
  mercury.position.y = Math.sin(elapsedTime * mercurySpeed + 0.5) * 2;
  mercury.position.z = Math.sin(elapsedTime * mercurySpeed) * 4;

  venus.position.x = Math.cos(elapsedTime * venusSpeed) * 6;
  venus.position.y = Math.sin(elapsedTime * venusSpeed + 0.5) * 3;
  venus.position.z = Math.sin(elapsedTime * venusSpeed) * 6;

  earth.position.x = Math.cos(elapsedTime * earthSpeed) * 8;
  earth.position.y = Math.sin(elapsedTime * earthSpeed + 0.5) * 4;
  earth.position.z = Math.sin(elapsedTime * earthSpeed) * 8;

  mars.position.x = Math.cos(elapsedTime * marsSpeed) * 10;
  mars.position.y = Math.sin(elapsedTime * marsSpeed + 0.5) * 5;
  mars.position.z = Math.sin(elapsedTime * marsSpeed) * 10;

  jupiter.position.x = Math.cos(elapsedTime * jupiterSpeed) * 16;
  jupiter.position.y = Math.sin(elapsedTime * jupiterSpeed + 0.5) * 8;
  jupiter.position.z = Math.sin(elapsedTime * jupiterSpeed) * 16;

  saturn.position.x = Math.cos(elapsedTime * saturnSpeed) * 22;
  saturn.position.y = Math.sin(elapsedTime * saturnSpeed + 0.5) * 11;
  saturn.position.z = Math.sin(elapsedTime * saturnSpeed) * 22;

  uranus.position.x = Math.cos(elapsedTime * uranusSpeed) * 26;
  uranus.position.y = Math.sin(elapsedTime * uranusSpeed + 0.5) * 13;
  uranus.position.z = Math.sin(elapsedTime * uranusSpeed) * 26;

  neptune.position.x = Math.cos(elapsedTime * neptuneSpeed) * 34;
  neptune.position.y = Math.sin(elapsedTime * neptuneSpeed + 0.5) * 17;
  neptune.position.z = Math.sin(elapsedTime * neptuneSpeed) * 34;

  //* update controls
  controls.update();

  //* render
  renderer.render(scene, camera);

  //* call next tick
  window.requestAnimationFrame(tick);
};
tick();

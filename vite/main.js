import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

// create canvas
const canvas = document.getElementById('canvas')

// 1. Create the scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#282828')

// 2. Add camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// 3. Create and add a cube object
const geometry = new THREE.CylinderGeometry(1, 1, 0.1)
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'})
const cylinder = new THREE.Mesh(geometry, material)
cylinder.position.y = -2

const dodecahedron = new THREE.DodecahedronGeometry()
const dodecaMaterial = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'})
const element = new THREE.Mesh(dodecahedron, dodecaMaterial) 

scene.add(cylinder, element);

// 4. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1)
scene.add(light);

// 5. Setup the renderer
const renderer = new THREE.WebGLRenderer( {canvas} )
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 6. Animate the scene
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Add animations
function animate() {
  requestAnimationFrame(animate);

  element.rotation.x += 0.005;
  element.rotation.y += 0.005;
  cylinder.rotation.y += 0.005;

  controls.update();

  renderer.render(scene, camera);
}

// 8. Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
})

animate();
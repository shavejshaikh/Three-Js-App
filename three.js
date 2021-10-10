const Scene = new Three.Scene()

// Add Cube to the Scene

const geometry = new Three.BoxGeometry(3, 1, 3)
const material = new Three.MeshBasicMaterial({ color: 0xfb8e00 })
const mesh = new Three.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
Scene.add(mesh)
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sphere() {
  return (
    <mesh rotation={[0.4, 0.5, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
}

export default function Globe() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere />
      <OrbitControls autoRotate />
    </Canvas>
  );
}
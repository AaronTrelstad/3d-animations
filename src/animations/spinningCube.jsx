import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./spinningCube.css";

function Cube(props) {
  const mesh = useRef();

  useFrame ( ()=> (mesh.current.rotation.x += 0.01))  

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
      <meshStandardMaterial color={"orange"}/> 
    </mesh>
  );
}

function SpinningCube() {
    return (
        <Canvas>
          <ambientLight />
          <pointLight position={[10,10,10]} />
          <Cube />
        </Canvas>
      );
}

export default SpinningCube
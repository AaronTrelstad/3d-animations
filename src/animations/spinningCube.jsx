import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./spinningCube.css";

function Cube(props) {
  const mesh = useRef();
  
  useFrame ( ()=> (
    mesh.current.rotation.x += 0.01,
    mesh.current.rotation.y += 0.01,
    mesh.current.rotation.z += 0.02
    ))  

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
      <meshStandardMaterial color={"lightblue"}/> 
    </mesh>
  );
}

function SpinningCube() {
    return (
        <Canvas>
          <ambientLight />
          <pointLight position={[10,10,10]} />
          <Cube position={[5, 5, 10]}/>
        </Canvas>
      );
}

export default SpinningCube
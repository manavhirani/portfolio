'use client';

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import * as THREE from 'three'; // Import THREE

const ThreeJsTest = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}


const Cube = () => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default ThreeJsTest;
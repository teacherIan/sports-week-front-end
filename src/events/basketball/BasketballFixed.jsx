import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function BasketballFixed(props) {
  const { nodes, materials } = useGLTF('./BasketballFixed.glb');
  return (
    <RigidBody type="fixed" scale={20} colliders="ball">
      <mesh
        geometry={nodes.basketball.geometry}
        material={materials.Basketball}
      />
    </RigidBody>
  );
}

useGLTF.preload('./BasketballFixed.glb');

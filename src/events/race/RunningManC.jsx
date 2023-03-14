import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function RunningManC(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./PearlFinal.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.course_chapeau.play();
    // actions.actions.course_chapeau.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature_chapeau002"
          position={[0.89, 0.01, 0]}
          rotation={[0, 2, 0]}
        >
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Chapeau002"
            geometry={nodes.Chapeau002.geometry}
            material={materials['color_main.014']}
            skeleton={nodes.Chapeau002.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./PearlFinal.glb');

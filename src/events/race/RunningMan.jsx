import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function RunningMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./RubyFinal.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.course_chapeau.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature_chapeau001"
          position={[0.44, 0, 0]}
          rotation={[0, 2, 0]}
        >
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Chapeau001"
            geometry={nodes.Chapeau001.geometry}
            material={materials['color_main.014']}
            skeleton={nodes.Chapeau001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./RubyFinal.glb');

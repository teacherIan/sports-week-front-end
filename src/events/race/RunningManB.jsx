import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function RunningManB(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./AmberFinal.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions.course_chapeau.play());
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature_chapeau003"
          position={[1.34, 0.02, 0]}
          rotation={[0, 2, 0]}
        >
          <primitive object={nodes.root} />
          <skinnedMesh
            name="Chapeau003"
            geometry={nodes.Chapeau003.geometry}
            material={materials['color_main.014']}
            skeleton={nodes.Chapeau003.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./AmberFinal.glb');

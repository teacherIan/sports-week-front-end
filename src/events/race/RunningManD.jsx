// function Model(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function RunningManD(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./sapphireFinal.glb');
  const actions = useAnimations(animations, group);

  useEffect(() => {
    actions.actions.course_chapeau.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 2, 0]}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Chapeau.geometry}
          material={materials['color_main.014']}
          skeleton={nodes.Chapeau.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./sapphireFinal.glb');
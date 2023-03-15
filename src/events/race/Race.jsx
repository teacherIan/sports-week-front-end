import RunningMan from './RunningMan';
import RunningManB from './RunningManB.jsx';
import RunningManC from './RunningManC.jsx';
import RunningManD from './RunningManD.jsx';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function Race({ ruby, amber, pearl, sapphire }) {
  const [rubyPosition, setRubyPosition] = useState(-200);
  const [amberPosition, setAmberPosition] = useState(-200);
  const [pearlPosition, setPearlPosition] = useState(-200);
  const [sapphirePosition, setSapphirePosition] = useState(-200);

  useFrame(() => {
    // setRubyPosition(rubyPosition + 0.001 + ruby / 10000);
    // setAmberPosition(amberPosition + 0.001 + amber / 10000);
    // setPearlPosition(pearlPosition + 0.001 + pearl / 10000);
    // setSapphirePosition(sapphirePosition + 0.001 + sapphire / 10000);
  });
  return (
    <>
      <RunningMan position={[rubyPosition, 60, -80]} scale={50} />
      <RunningManB position={[amberPosition, 0, -80]} scale={50} />
      <RunningManC position={[pearlPosition, -60, -80]} scale={50} />
      <RunningManD position={[sapphirePosition, -120, -80]} scale={50} />
      <Text
        scale={100}
        position={[rubyPosition + 100, 60, -400]}
        color="#c11c22"
        anchorX="center"
        anchorY="middle"
      >
        RUBY
      </Text>
      <Text
        scale={25}
        position={[amberPosition + 100, 0, -80]}
        color="#e46725"
        anchorX="center"
        anchorY="middle"
      >
        AMBER
      </Text>
    </>
  );
}

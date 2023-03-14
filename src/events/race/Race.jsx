import RunningMan from './RunningMan';
import RunningManB from './RunningManB.jsx';
import RunningManC from './RunningManC.jsx';
import RunningManD from './RunningManD.jsx';
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Race({ ruby, amber, pearl, sapphire }) {
  const [rubyPosition, setRubyPosition] = useState(-350);
  const [amberPosition, setAmberPosition] = useState(-350);
  const [pearlPosition, setPearlPosition] = useState(-350);
  const [sapphirePosition, setSapphirePosition] = useState(-350);

  useFrame(() => {
    setRubyPosition(rubyPosition + 0.001 + ruby / 10000);
    setAmberPosition(amberPosition + 0.001 + amber / 10000);
    setPearlPosition(pearlPosition + 0.001 + pearl / 10000);
    setSapphirePosition(sapphirePosition + 0.001 + sapphire / 10000);
  });
  return (
    <>
      <RunningMan position={[rubyPosition, 30, -80]} scale={25} />
      <RunningManB position={[amberPosition, 0, -80]} scale={25} />
      <RunningManC position={[pearlPosition, -30, -80]} scale={25} />
      <RunningManD position={[sapphirePosition, -60, -80]} scale={25} />
    </>
  );
}

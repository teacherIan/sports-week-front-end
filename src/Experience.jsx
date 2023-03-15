import { OrbitControls, Sky, Grid } from '@react-three/drei';
import BasketballDrop from '../src/events/basketball/BasketballDrop';
import Lights from './Lights.jsx';
import Race from './events/race/Race.jsx';
import HouseUpdate from './events/houseUpdate/HouseUpdate';

export default function Experience({
  ruby,
  amber,
  pearl,
  sapphire,
  currentEvent,
}) {
  return (
    <>
      <OrbitControls makeDefault />
      <Lights />
      <Sky
        distance={100000}
        sunPosition={[0, 5000, 1000]}
        inclination={1}
        azimuth={0.25}
      />

      <Race ruby={ruby} amber={amber} pearl={pearl} sapphire={sapphire} />

      {/* <BasketballDrop /> */}
      {/* <HouseUpdate /> */}
    </>
  );
}

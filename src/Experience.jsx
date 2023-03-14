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
        distance={500}
        sunPosition={[0, 100, 2000]}
        inclination={1}
        azimuth={0.75}
      />

      {currentEvent == 1 ? (
        <Race ruby={ruby} amber={amber} pearl={pearl} sapphire={sapphire} />
      ) : null}

      <BasketballDrop />
      {/* <HouseUpdate /> */}
    </>
  );
}

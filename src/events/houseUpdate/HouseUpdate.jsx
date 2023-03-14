import { Html } from '@react-three/drei';
import style from '../../style.module.css';

import pearl from '../../../public/pearl.png';

export default function HouseUpdate() {
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={1.17}
      position={[0, 1.56, -1.4]}
      rotation-x={-0.256}
    >
      Hello
    </Html>
  );
}

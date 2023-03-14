import { CuboidCollider, Debug, RigidBody, Physics } from '@react-three/rapier';
import Basketball from './Basketball';
import BasketballFixed from './BasketballFixed';

export default function BasketballDrop() {
  return (
    <>
      <Physics>
        <Basketball />
        <BasketballFixed />
      </Physics>
    </>
  );
}

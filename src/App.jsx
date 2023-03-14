import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import Overlay from './Overlay';

import { useEffect, useState } from 'react';
import { Grid } from '@react-three/drei';

const dummyData = {
  ruby: 3000,
  amber: 500,
  pearl: 1000,
  sapphire: 2512,
};

const eventArray = [
  {
    day: 'Monday',
    event: 'Basketball',
  },
];

// const dummyEvents = {
//   Monday: 'Basketball Tournament ',
//   Tuesday: 'Race',
// };

export default function App() {
  const [currentEvent, setCurrentEvent] = useState(1);

  // useEffect(() => {
  //   console.log('Use Effect Called...');
  //   setTimeout(() => {
  //     setCurrentEvent(currentEvent + 1);
  //   }, 30000);
  // });

  const gridConfig = {
    // gridSize: [10.5, 10.5],
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: '#6f6f6f',
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: '#9d4b4b',
    fadeDistance: 1000,
    fadeStrength: 1,
    followCamera: true,
    infiniteGrid: true,
  };

  return (
    <>
      <Overlay
        ruby={dummyData.ruby}
        amber={dummyData.amber}
        pearl={dummyData.pearl}
        sapphire={dummyData.sapphire}
        currentEvent={currentEvent}
        event={eventArray[currentEvent]}
      />
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 0.1,
          far: 2000,
          position: [10, 0, 30],
        }}
        // fog={{ near: 10 }}
      >
        {/* <Grid {...gridConfig} /> */}

        <Experience
          ruby={dummyData.ruby}
          amber={dummyData.amber}
          pearl={dummyData.pearl}
          sapphire={dummyData.sapphire}
          currentEvent={currentEvent}
        ></Experience>
      </Canvas>
    </>
  );
}

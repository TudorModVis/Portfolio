'use client'

import { Canvas } from '@react-three/fiber';
import PortfolioExperience from './components/PortfolioExperience';

export default function Page () {
  return(
    <Canvas shadows camera={{
        position: [0, 0.5, 2.15],
        fov: 35
      }}>
      <PortfolioExperience />
    </Canvas>
  )
}
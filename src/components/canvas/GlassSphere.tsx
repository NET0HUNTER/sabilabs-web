'use client';

import { Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../providers/ThemeProvider';

export default function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  // Determine the core color based on the current theme
  let coreColor = '#ffffff';
  if (theme === 'gold') coreColor = '#e8d08d';
  if (theme === 'blue') coreColor = '#00b4d8';
  if (theme === 'emerald') coreColor = '#2ecc71';

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle floating rotation
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
      
      // Floating up and down on a sine wave
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <MeshTransmissionMaterial
        backside
        samples={10}
        resolution={1024}
        transmission={1}
        roughness={0.15}
        clearcoat={1}
        clearcoatRoughness={0.1}
        thickness={1.5}
        ior={1.2}
        chromaticAberration={0.8}
        anisotropicBlur={0.1}
        distortion={0.4}
        distortionScale={0.3}
        temporalDistortion={0.1}
        color={coreColor}
        emissive={coreColor}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

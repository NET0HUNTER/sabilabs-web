'use client';

import { Environment, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { brandColors, themeAccentColors } from '@/lib/brandColors';
import { useTheme } from '@/components/providers/ThemeProvider';
import GlassSphere from './GlassSphere';

export default function FooterSphere() {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-28 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-50 [mask-image:radial-gradient(circle,black_38%,transparent_73%)] sm:-right-20 lg:-right-12 lg:h-[34rem] lg:w-[34rem] lg:opacity-65"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.42} />
        <directionalLight position={[8, 8, 6]} intensity={1.7} color={brandColors.white} />
        <directionalLight position={[-7, -5, 3]} intensity={0.9} color={themeAccentColors[theme]} />
        <Suspense fallback={null}>
          <Float scale={0.78} speed={1.25} rotationIntensity={0.28} floatIntensity={0.4}>
            <GlassSphere />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

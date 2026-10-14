'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { brandColors, themeAccentColors } from '@/lib/brandColors';
import { useTheme } from '@/components/providers/ThemeProvider';
import GlassSphere from './GlassSphere';

// Dynamic import of Scene prevents SSR issues since WebGL relies on browser window
export default function Scene() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.36} />
        <directionalLight position={[10, 10, 5]} intensity={1.7} color={brandColors.white} />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.8}
          color={themeAccentColors[theme]}
        />
        
        <Suspense fallback={null}>
          <ResponsiveSphere />
          <Environment preset="city" />
        </Suspense>

        <EffectComposer>
          <Bloom 
            intensity={1}
            luminanceThreshold={0.8} 
            luminanceSmoothing={0.9} 
            mipmapBlur 
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

        {/* OrbitControls disabled for production so scroll isn't hijacked, but useful for testing */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}

function ResponsiveSphere() {
  const { size } = useThree();
  const mobile = size.width < 640;
  const tablet = size.width < 1024;
  const position: [number, number, number] = mobile
    ? [0, -1.25, -0.7]
    : tablet
      ? [0, -1.25, -0.75]
      : [0, -1.3, -0.8];
  const scale = mobile ? 0.64 : tablet ? 0.72 : 0.8;

  return (
    <Float position={position} scale={scale} speed={1.5} rotationIntensity={0.35} floatIntensity={0.55}>
      <GlassSphere />
    </Float>
  );
}

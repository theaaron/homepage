'use client';

import { EffectComposer, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export function FilmGrainEffect() {
  return (
    <EffectComposer>
      <Noise
        premultiply
        blendFunction={BlendFunction.ADD}
        opacity={0.2}
      />
    </EffectComposer>
  );
}
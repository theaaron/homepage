// custom.d.ts
import { ShaderMaterial, Mesh } from "three";
import { ReactThreeFiber } from "@react-three/fiber";

class WaveShaderMaterial extends ShaderMaterial {
  uTime: number;
  uColor: THREE.Color;
}

declare module "three" {
  interface Mesh {
    material: WaveShaderMaterial;
    uTime?: number;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: ReactThreeFiber.Object3DNode<
        WaveShaderMaterial,
        typeof WaveShaderMaterial
      >;
    }
  }
}

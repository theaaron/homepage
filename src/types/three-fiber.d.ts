import { ShaderMaterial } from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    waveShaderMaterial: Object3DNode<ShaderMaterial, typeof ShaderMaterial>
  }
}
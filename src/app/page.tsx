"use client";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Color } from "three";
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";
import { Suspense, useRef } from "react";
import { WaveShaderMaterial as ImportedWaveShaderMaterial } from "../../custom";
import { Github, Linkedin } from "lucide-react";

export default function Page() {
  return (
    <div className="relative w-screen h-screen bg-gray-900">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <directionalLight position={[0, 0, 5]} />
        <Suspense>
          <Blobby />
        </Suspense>
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Title />
        <SocialLinks />
      </div>
    </div>
  );
}

const Title: React.FC = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-white text-left p-5">Aaron Anguiano.</h1>
      <h2 className="text-5xl font-bold text-white text-center p-5"><a href="https://peruna.aaroncodes.art">Peruna</a></h2>
      <h2 className="text-5xl font-bold text-white text-center p-5"><a href="https://genuary25.aaroncodes.art">Genuary 2025</a></h2>
      <h2 className="text-5xl font-bold text-white text-center p-5"><a href="https://goatwave.aaroncodes.art">GOATWAVE</a></h2>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <a href="https://github.com/theaaron" className="text-white hover:text-gray-300 transition-colors">
        <Github size={24} />
      </a>
      <a href="https://linkedin.com/in/aaron-anguiano" className="text-white hover:text-gray-300 transition-colors">
        <Linkedin size={24} />
      </a>
    </div>
  )
}

const WaveShaderMaterial = shaderMaterial(
  { uColor: new Color(0.0, 0.0, 0.0), uTime: 0 },
  vertexShader,
  fragmentShader
);

extend({ WaveShaderMaterial });

const Blobby: React.FC = () => {
  const ref = useRef<ImportedWaveShaderMaterial>(null!);
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <>
      <mesh>
        <sphereGeometry args={[3.3, 100, 100]} />
        <waveShaderMaterial uColor={"#a992B9"} ref={ref} />
      </mesh>
    </>
  );
};

"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.001;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.0015;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 3, 5]} intensity={0.5} />
      <Sphere ref={earthRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          map={textureLoader.load("/earth_texture.jpg")}
          bumpMap={textureLoader.load("/earth_bump.jpg")}
          bumpScale={0.1}
          specularMap={textureLoader.load("/earth_specular.jpg")}
          specular={new THREE.Color("grey")}
          shininess={10}
        />
      </Sphere>
      <Sphere ref={cloudsRef} args={[1.01, 64, 64]}>
        <meshPhongMaterial
          map={textureLoader.load("/earth_clouds.png")}
          transparent={true}
          opacity={0.4}
        />
      </Sphere>
    </>
  );
}

export function Globe() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <Earth />
      </Canvas>
    </div>
  );
}

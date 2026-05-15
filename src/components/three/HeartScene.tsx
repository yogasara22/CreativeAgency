import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// Build a smooth, voluminous heart by extruding a heart-shaped 2D path.
function useHeartGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0;
    const y = 0;
    shape.moveTo(x, y);
    shape.bezierCurveTo(x, y - 0.3, x - 0.6, y - 1.4, x - 1.5, y - 1.4);
    shape.bezierCurveTo(x - 3.0, y - 1.4, x - 3.0, y + 0.6, x - 3.0, y + 0.6);
    shape.bezierCurveTo(x - 3.0, y + 1.7, x - 1.9, y + 2.7, x, y + 3.6);
    shape.bezierCurveTo(x + 1.9, y + 2.7, x + 3.0, y + 1.7, x + 3.0, y + 0.6);
    shape.bezierCurveTo(x + 3.0, y + 0.6, x + 3.0, y - 1.4, x + 1.5, y - 1.4);
    shape.bezierCurveTo(x + 0.6, y - 1.4, x, y - 0.3, x, y);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 1.1,
      bevelEnabled: true,
      bevelSegments: 16,
      bevelSize: 0.45,
      bevelThickness: 0.45,
      curveSegments: 64,
    });
    geo.center();
    geo.rotateZ(Math.PI);
    geo.computeVertexNormals();
    return geo;
  }, []);
}

function GlassHeart() {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useHeartGeometry();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * 0.35) * 0.45;
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.08;
    const beat = 1 + Math.sin(t * 1.8) * 0.025 + Math.sin(t * 3.6) * 0.012;
    ref.current.scale.setScalar(0.42 * beat);
  });

  return (
    <Float speed={1.2} floatIntensity={0.6} rotationIntensity={0.15}>
      <mesh ref={ref} geometry={geometry} castShadow>
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.6}
          thickness={0.9}
          transmission={1}
          roughness={0.08}
          chromaticAberration={0.25}
          anisotropy={0.4}
          ior={1.45}
          distortion={0.25}
          distortionScale={0.4}
          temporalDistortion={0.15}
          color={"#f4b8bd"}
          attenuationColor={"#d96a73"}
          attenuationDistance={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function InnerGlow() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const beat = 1 + Math.sin(t * 1.8) * 0.12;
    ref.current.scale.setScalar(beat);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 1.8) * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 48, 48]} />
      <meshBasicMaterial color="#ff8a95" transparent opacity={0.35} />
    </mesh>
  );
}

function Petals() {
  const items = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        pos: [
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 2.2 - 0.4,
        ] as [number, number, number],
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [
          number, number, number
        ],
        scale: 0.05 + Math.random() * 0.08,
        speed: 0.5 + Math.random() * 0.9,
        color: i % 3 === 0 ? "#fbd9d3" : i % 3 === 1 ? "#f4c2c2" : "#f6a8b0",
      })),
    []
  );
  return (
    <>
      {items.map((it, i) => (
        <Float key={i} speed={it.speed} floatIntensity={2} rotationIntensity={0.8}>
          <mesh position={it.pos} rotation={it.rot}>
            <sphereGeometry args={[it.scale, 16, 16]} />
            <meshStandardMaterial
              color={it.color}
              emissive={it.color}
              emissiveIntensity={0.25}
              roughness={0.35}
              metalness={0.05}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export function HeartScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} color="#fff5f0" />
        <pointLight position={[-4, -2, 2]} intensity={0.8} color="#f4a7ad" />
        <pointLight position={[2, -3, -2]} intensity={0.6} color="#ffd9c9" />

        <InnerGlow />
        <GlassHeart />
        <Petals />

        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.25}
          scale={6}
          blur={2.6}
          far={3}
          color="#d96a73"
        />

        <Environment preset="apartment" />
        <EffectComposer>
          <Bloom
            intensity={0.7}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

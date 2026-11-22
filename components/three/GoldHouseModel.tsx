"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GoldHouseModelProps {
  isPointerActive?: boolean;
}

export default function GoldHouseModel({ isPointerActive = true }: GoldHouseModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const lampLightRef = useRef<THREE.PointLight>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Radiant Metallic Amber Gold Material
  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#E5A842"),
        metalness: 0.9,
        roughness: 0.22,
        envMapIntensity: 1.6,
      }),
    []
  );

  // Brushed Deep Bronze Trim Material
  const bronzeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#A36E1D"),
        metalness: 0.85,
        roughness: 0.32,
      }),
    []
  );

  // Architectural Smoked Glass Material
  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#0E121A"),
        metalness: 0.15,
        roughness: 0.1,
        transmission: 0.8,
        transparent: true,
        opacity: 0.75,
      }),
    []
  );

  // Lamp Emissive Core Material
  const lampGlowMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#FFF2B8"),
      }),
    []
  );

  // Floating Radiant Amber Particles
  const particleCount = 65;
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = Math.random() * 4 - 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle baseline rotation
    groupRef.current.rotation.y += delta * 0.24;

    // Pointer tilt responsiveness
    if (isPointerActive) {
      const targetRotX = state.pointer.y * 0.25;
      const targetRotZ = -state.pointer.x * 0.2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotZ,
        0.05
      );
    }

    // Lamp breathing glow pulse
    if (lampLightRef.current) {
      lampLightRef.current.intensity = 2.8 + Math.sin(state.clock.elapsedTime * 2.5) * 0.8;
    }

    // Particle subtle drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* --- Plinth Base --- */}
      <mesh position={[0, -0.7, 0]} material={bronzeMaterial}>
        <boxGeometry args={[3.2, 0.15, 3.2]} />
      </mesh>
      <mesh position={[0, -0.6, 0]} material={goldMaterial}>
        <boxGeometry args={[3.0, 0.08, 3.0]} />
      </mesh>

      {/* --- Architectural Columns --- */}
      <mesh position={[-1.2, 0.1, -1.2]} material={goldMaterial}>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 16]} />
      </mesh>
      <mesh position={[1.2, 0.1, -1.2]} material={goldMaterial}>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 16]} />
      </mesh>
      <mesh position={[-1.2, 0.1, 1.2]} material={goldMaterial}>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 16]} />
      </mesh>
      <mesh position={[1.2, 0.1, 1.2]} material={goldMaterial}>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 16]} />
      </mesh>

      {/* --- Ground Floor Glass Pavilion --- */}
      <mesh position={[0, 0.05, 0]} material={glassMaterial}>
        <boxGeometry args={[2.3, 1.2, 2.3]} />
      </mesh>

      {/* --- Intermediate Floor Slab --- */}
      <mesh position={[0, 0.7, 0]} material={goldMaterial}>
        <boxGeometry args={[2.8, 0.12, 2.8]} />
      </mesh>

      {/* --- Upper Floor Volume --- */}
      <mesh position={[0.2, 1.25, -0.1]} material={bronzeMaterial}>
        <boxGeometry args={[1.8, 0.95, 1.8]} />
      </mesh>
      <mesh position={[-0.7, 1.15, 0.4]} material={glassMaterial}>
        <boxGeometry args={[0.9, 0.75, 1.4]} />
      </mesh>

      {/* --- Floating Roof Canopy --- */}
      <mesh position={[0.1, 1.8, 0]} material={goldMaterial}>
        <boxGeometry args={[3.1, 0.1, 2.9]} />
      </mesh>

      {/* --- Glowing Sanctuary Lamp Inside --- */}
      <group position={[0, 0.15, 0]}>
        <mesh material={goldMaterial}>
          <cylinderGeometry args={[0.15, 0.18, 0.4, 8]} />
        </mesh>
        <mesh material={lampGlowMaterial}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>
        <pointLight
          ref={lampLightRef}
          color="#FFDF85"
          intensity={3.2}
          distance={4.5}
          decay={2}
        />
      </group>

      {/* --- Wireframe Architectural Grid Base --- */}
      <gridHelper
        args={[4.5, 12, "#E5A842", "#473515"]}
        position={[0, -0.78, 0]}
      />

      {/* --- Floating Soft Particles --- */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#F7CF7E"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

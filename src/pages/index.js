import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function AmesWindow(props) {
  // This reference will give us direct access to the mesh
  const group = useRef();

  // Rotate the group every frame, this is outside of React without overhead
  useFrame(() => {
    group.current.rotation.y += 0.02;
  });

  const thickness = 0.2;
  const color = "#0070f3";

  return (
    <group ref={group} scale={0.8} {...props}>
      <mesh position={[0, 1.3, 0]} rotation-z={0.175}>
        <boxGeometry args={[6, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, -1.3, 0]} rotation-z={-0.175}>
        <boxGeometry args={[6, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-2.88, 0, 0]}>
        <boxGeometry args={[thickness, 1.7, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[2.87, 0, 0]}>
        <boxGeometry args={[thickness, 3.79, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.8, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-1.3, 0, 0]} rotation-z={(Math.PI * 1) / 2}>
        <boxGeometry args={[2.2, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.7, 0, 0]} rotation-z={(Math.PI * 1) / 2}>
        <boxGeometry args={[2.9, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

function AmesWindow2(props) {
  const group = useRef();
  const thickness = 0.2;
  const minRadius = 0.15 / Math.sqrt(2);
  const maxRadius = 0.25 / Math.sqrt(2);
  const color = "royalblue";

  // Rotate the group every frame, this is outside of React without overhead
  useFrame(() => {
    group.current.rotation.y += 0.02;
  });

  return (
    <group ref={group} scale={0.8}>
      {/* Top-border */}
      <mesh position={[0, 1.4, 0]} rotation-z={1.73}>
        <cylinderGeometry
          args={[minRadius, maxRadius, 6, 16, 1]}
        />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Top-border */}
      <mesh position={[0, -1.4, 0]} rotation-z={-1.73}>
        <cylinderGeometry
          args={[maxRadius, minRadius, 6, 16, 1]}
        />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Left-border */}
      <mesh position={[-2.88, 0, 0]}>
        <cylinderGeometry
          args={[minRadius, minRadius, 2, 16, 1]}
        />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Right-border */}
      <mesh position={[2.79, 0, 0]}>
        <cylinderGeometry
          args={[maxRadius, maxRadius, 3.8, 16, 1]}
        />
        {/* <boxGeometry args={[thickness * 1.66, 3.79, thickness * 1.66]} /> */}
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.8, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-1.3, 0, 0]} rotation-z={(Math.PI * 1) / 2}>
        <boxGeometry args={[2.2, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.7, 0, 0]} rotation-z={(Math.PI * 1) / 2}>
        <boxGeometry args={[2.9, thickness, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Ames Window @react-three/fiber</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Ames Window Illusion</h1>

          <Canvas className="canvas" orthographic>
            <ambientLight />
            <spotLight
              position={[10, 10, 10]}
              angle={(Math.PI * 1) / 2}
              penumbra={1}
            />
            <AmesWindow position={[0, 0, 0]} />

            {/* <AmesWindow2 position={[0, 0, 0]} /> */}
          </Canvas>
        </main>
      </div>
      <style jsx>{`
        main :global(.canvas) {
          min-height: 560px;
        }
      `}</style>
    </>
  );
}

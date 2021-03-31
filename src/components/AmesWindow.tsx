import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export function AmesWindow({
  withBall = false,
  withRuler = false,
  shouldRotate = false,
  ...props
}) {
  // This reference will give us direct access to the mesh
  const group = useRef();

  // Rotate the group every frame, this is outside of React without overhead
  useFrame(() => {
    if (shouldRotate && group.current) {
      // @ts-expect-error
      group.current.rotation.y += 0.02;
    }
  });

  const thickness = 0.1;
  const color = '#0070f3';

  const {
    size: { width: currentWidth },
  } = useThree();
  const MAX_SCALE_AT = 1080;
  const MIN_SCALE_AT = 320;
  const MAX_SCALE = 0.8;
  const MIN_SCALE = 0.4;
  const scaleFactor =
    (Math.min(currentWidth, MAX_SCALE_AT) - MIN_SCALE_AT) /
    (MAX_SCALE_AT - MIN_SCALE_AT);
  const scale = scaleFactor * (MAX_SCALE - MIN_SCALE) + MIN_SCALE;

  return (
    <group ref={group} scale={scale} {...props}>
      {withBall && (
        <mesh position={[-3.2, 1, 0]}>
          <sphereGeometry args={[thickness * 4, 32, 32]} />
          <meshStandardMaterial color={'deeppink'} />
        </mesh>
      )}

      {withRuler && (
        <mesh
          position={[0, 0.3, 0]}
          rotation-y={Math.PI / 2}
          rotation-z={Math.PI / 9}
        >
          <boxGeometry args={[5, thickness, thickness * 3]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
      )}
      <mesh position={[0, 1.3, 0]} rotation-z={0.175}>
        <boxGeometry args={[6, thickness * 2, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, -1.3, 0]} rotation-z={-0.175}>
        <boxGeometry args={[6, thickness * 2, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-2.88, 0, 0]}>
        <boxGeometry args={[thickness * 2, 1.7, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[2.87, 0, 0]}>
        <boxGeometry args={[thickness * 2, 3.79, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.8, thickness * 2, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[-1.3, 0, 0]} rotation-z={(Math.PI * 1) / 2}>
        <boxGeometry args={[2.2, thickness * 2, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0.7, 0, 0]} rotation-z={(Math.PI * 1) / 2}>
        <boxGeometry args={[2.9, thickness * 2, thickness * 5]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

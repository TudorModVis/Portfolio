import * as THREE from 'three'
import React, { MutableRefObject, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { gsap } from 'gsap'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    ['Küp-body']: THREE.Mesh
    ['Küp-black_plastic']: THREE.Mesh
    ['Küp-touchpad_and_power_button']: THREE.Mesh
    ['Küp-ports_metal']: THREE.Mesh
    ['Küp001-body']: THREE.Mesh
    ['Küp001-black_plastic']: THREE.Mesh
    ['Küp001-display']: THREE.Mesh
    ['Küp001-webcam_frame']: THREE.Mesh
    ['Küp001-webcam_lens']: THREE.Mesh
  }
  materials: {
    body: THREE.MeshStandardMaterial
    black_plastic: THREE.MeshStandardMaterial
    touchpad_and_power_button: THREE.MeshStandardMaterial
    ports_metal: THREE.MeshStandardMaterial
    display: THREE.MeshStandardMaterial
    webcam_frame: THREE.MeshStandardMaterial
    webcam_lens: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Laptop(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!);
  const laptop = useRef<THREE.Group>(null!);
  const screen = useRef<THREE.Group>(null!);
  const tl = gsap.timeline();
  const scroll = useScroll();

  useFrame((state) => {
    state.camera.position.lerp({x: 0, y:0, z: 1.5 - (scroll.offset * .3) }, 0.1)
    state.camera.updateProjectionMatrix();
    tl.seek(scroll.offset * tl.duration());
  });

  useLayoutEffect(() => {
    tl.from(
      screen.current!.rotation,
      {
        x: 1.745,
        duration: 3
      },
      0
    )

    tl.from(
      laptop.current!.rotation,
      {
        y: 2 * Math.PI,
        duration: 3
      },
      0
    )

    // tl.to(
    //   laptop.current!.position,
    //   {
    //     y: 2,
    //     duration: 3
    //   },
    //   0
    // )
  })

  const { nodes, materials, animations } = useGLTF('./models/altModel.glb') as GLTFResult
  return (
    <group {...props} dispose={null} scale={13} ref={laptop}>
      <group position={[0, -0.019, 0.003]} >
        <mesh geometry={nodes['Küp-body'].geometry} material={materials.body} />
        <mesh geometry={nodes['Küp-black_plastic'].geometry} material={materials.black_plastic} />
        <mesh geometry={nodes['Küp-touchpad_and_power_button'].geometry} material={materials.touchpad_and_power_button} />
        <mesh geometry={nodes['Küp-ports_metal'].geometry} material={materials.ports_metal} />
      </group>
      <group position={[0, -0.018, -0.015]} rotation={[0, 0, 0]} ref={screen}>
        <mesh geometry={nodes['Küp001-body'].geometry} material={materials.body} />
        <mesh geometry={nodes['Küp001-black_plastic'].geometry} material={materials.black_plastic} />
        <mesh geometry={nodes['Küp001-display'].geometry} material={materials.display} />
        <mesh geometry={nodes['Küp001-webcam_frame'].geometry} material={materials.webcam_frame} />
        <mesh geometry={nodes['Küp001-webcam_lens'].geometry} material={materials.webcam_lens} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/altModel.glb')

import * as THREE from 'three'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, useScroll, Text } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import {gsap} from 'gsap'

type GLTFResult = GLTF & {
  nodes: {
    bottomPorts: THREE.Mesh
    bottomPorts_1: THREE.Mesh
    bottomPorts_2: THREE.Mesh
    bottomMainBottom: THREE.Mesh
    bottomMainTop: THREE.Mesh
    bottomDetails: THREE.Mesh
    screen: THREE.Mesh
    screenConnector: THREE.Mesh
    screemEdge: THREE.Mesh
    screenBack: THREE.Mesh
    camera: THREE.Mesh
    keys: THREE.Mesh
    mugObject: THREE.Mesh
    spine_leaf_1: THREE.Mesh
    spine_leaf_2: THREE.Mesh
    spine_leaf_3: THREE.Mesh
    spine_leaf_4: THREE.Mesh
    spine_leaf_5: THREE.Mesh
    spine_leaf_6: THREE.Mesh
    spine_leaf_7: THREE.Mesh
    spine_leaf_8: THREE.Mesh
    spine_leaf_9: THREE.Mesh
    dirt: THREE.Mesh
    vase: THREE.Mesh
    cross_1: THREE.Mesh
    cross_2: THREE.Mesh
    leg_1: THREE.Mesh
    leg_2: THREE.Mesh
    leg_3: THREE.Mesh
    leg_4: THREE.Mesh
    eraser: THREE.Mesh
    metal: THREE.Mesh
    tip: THREE.Mesh
    graphite: THREE.Mesh
    body: THREE.Mesh
    base_2: THREE.Mesh
    stack_1: THREE.Mesh
    stacK_2: THREE.Mesh
    lower_arm_1: THREE.Mesh
    lower_arm_1_2: THREE.Mesh
    center_hinge: THREE.Mesh
    head_attachment: THREE.Mesh
    top_bolt: THREE.Mesh
    shade: THREE.Mesh
    lightbulb: THREE.Mesh
    bulb: THREE.Mesh
    setting: THREE.Mesh
    base: THREE.Mesh
    filament: THREE.Mesh
    upper_arm_1: THREE.Mesh
    upper_arm_1_2: THREE.Mesh
    center_bolt: THREE.Mesh
    Plane: THREE.Mesh
  }
  materials: {
    blackTexture: THREE.MeshStandardMaterial
    whiteTexture: THREE.MeshStandardMaterial
    screenTexture: THREE.MeshStandardMaterial
    greyTexture: THREE.MeshStandardMaterial
    mugTexture: THREE.MeshStandardMaterial
    ['plant&dirt&vaseTexture']: THREE.MeshStandardMaterial
    woodenStandTexture: THREE.MeshStandardMaterial
    pencilTexture: THREE.MeshStandardMaterial
    lampLowerTexture: THREE.MeshStandardMaterial
    lampUpperTexture: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/MainScene.glb') as GLTFResult
  const light = useRef<THREE.DirectionalLight>(null);

  const laptop = useRef<THREE.Group>(null!);
  const screen = useRef<THREE.Group>(null!);
  const plant = useRef<THREE.Group>(null!);
  const mug = useRef<THREE.Group>(null!);
  const lamp = useRef<THREE.Group>(null!);
  const pen = useRef<THREE.Group>(null!);
  
  const tl = gsap.timeline();
  const scroll = useScroll();
  let mouseX = 0;
  let mouseY = 0;

  useFrame((state) => {
    console.log(scroll.offset * tl.duration());
    tl.seek(scroll.offset * tl.duration());
    state.camera.position.lerp({x: 0 + (-mouseX / 1500), y: 0.5 + ((mouseY / 1500)), z: 2.15}, 0.1)
    state.camera.updateProjectionMatrix();
  });

  useLayoutEffect(() => {
    //Laptop

    tl.from(
      screen.current!.rotation,
      {
        x: -Math.PI,
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

    tl.from(
      laptop.current!.position,
      {
        x: -0.08,
        y: 0.03,
        duration: 3
      },
      0
    )

    //Plant

    tl.from(
      plant.current!.position,
      {
        x: 0,
        y:0,
        duration: 3
      },
      0
    )

    tl.from(
      plant.current!.rotation,
      {
        x: 0,
        z:0,
        duration: 3
      },
      0
    )

    // Mug

    tl.from(
      mug.current!.position,
      {
        x: -0.896,
        y: 0,
        z:.196,
        duration: 3
      },
      0
    )

    tl.from(
      mug.current!.rotation,
      {
        x: 0,
        duration: 3
      },
      0
    )

    // Lamp

    tl.from(
      lamp.current!.position,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 3
      },
      0
    )

    tl.from(
      lamp.current!.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 3
      },
      0
    )

    // Pen

    tl.from(
      pen.current!.position,
      {
        x: 0.636,
        y: 0.032,
        z: 0.366,
        duration: 3
      },
      0
    )

    tl.from(
      pen.current!.rotation,
      {
        x: Math.PI / 2,
        y: 0,
        z: -2.025,
        duration: 3
      },
      0
    )

    
  }, [])

  useLayoutEffect(() => {
    light.current!.shadow.mapSize.width = 256 * 5
    light.current!.shadow.mapSize.height = 256 * 5
    light.current!.shadow.camera.near = 0.5
    light.current!.shadow.camera.far = 25
    light.current!.shadow.camera.left = -15
    light.current!.shadow.camera.right = 15
    light.current!.shadow.camera.top = 15
    light.current!.shadow.camera.bottom = -15
    light.current!.shadow.radius = 1
    light.current!.shadow.blurSamples = 25

    const bumpTexture = new THREE.TextureLoader().load('./maps/bump-map.jpg')
    materials.mugTexture.bumpMap = bumpTexture
    materials.mugTexture.bumpScale = 5
    materials['plant&dirt&vaseTexture'].bumpMap = bumpTexture
    materials['plant&dirt&vaseTexture'].bumpScale = 5
    materials.woodenStandTexture.bumpMap = bumpTexture
    materials.woodenStandTexture.bumpScale = 5
    materials.pencilTexture.bumpMap = bumpTexture
    materials.pencilTexture.bumpScale = 5
    materials.lampLowerTexture.bumpMap = bumpTexture
    materials.lampLowerTexture.bumpScale = 5
    materials.lampUpperTexture.bumpMap = bumpTexture
    materials.lampUpperTexture.bumpScale = 5
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    });
  })

  return (
    <>
      <Text color="#f1f1f1" anchorX="left" anchorY="middle" position={[-1.52, .82, -1]} font="./fonts/JetBrainsMono-Bold.ttf" fontSize={window.innerWidth / 5400}>HI, I AM</Text>
      <Text color="#f1f1f1" anchorX="left" anchorY="middle" position={[.32, .82, -1]} font="./fonts/JetBrainsMono-Medium.ttf" fontSize={window.innerWidth / 25900} maxWidth={window.innerWidth / 1150}>A creative developer with comprehended knowledge in front-end & back-end aka full-stack developer.</Text>
      <Text color="#f1f1f1" anchorX="left" anchorY="middle" position={[-1.52, .44, -1]} font="./fonts/JetBrainsMono-Bold.ttf" fontSize={window.innerWidth / 5400}>CEBOTARENCO TUDOR</Text>
      <group {...props} dispose={null}>
        <group position={[-0.08, 0.22, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={100} ref={laptop}>
          <group position={[-0.002, 0, -0.001]} rotation={[Math.PI, 0, Math.PI]} scale={0.247}>
            <mesh geometry={nodes.bottomMainBottom.geometry} material={materials.whiteTexture} castShadow/>
            <mesh geometry={nodes.bottomMainTop.geometry} material={materials.whiteTexture} castShadow/>
            <mesh geometry={nodes.bottomDetails.geometry} material={materials.whiteTexture} castShadow/>
            <mesh geometry={nodes.bottomPorts.geometry} material={materials.blackTexture} castShadow/>
            <mesh geometry={nodes.bottomPorts_1.geometry} material={materials.blackTexture} castShadow/>
            <mesh geometry={nodes.bottomPorts_2.geometry} material={materials.blackTexture} castShadow/>
          </group>
          <group position={[-0.002, -0.00015, 0.002]} rotation={[-1.396, 0, Math.PI]} scale={0.247} ref={screen}>
            <mesh geometry={nodes.screen.geometry} material={materials.screenTexture} castShadow/>
            <mesh geometry={nodes.screenConnector.geometry} material={materials.whiteTexture} castShadow/>
            <mesh geometry={nodes.screemEdge.geometry} material={materials.blackTexture} castShadow/>
            <mesh geometry={nodes.screenBack.geometry} material={materials.whiteTexture} castShadow/>
            <mesh geometry={nodes.camera.geometry} material={materials.blackTexture} castShadow/>
          </group>
          <mesh geometry={nodes.keys.geometry} material={materials.greyTexture} position={[0.001, 0, 0]} rotation={[0, 0, Math.PI]} scale={0.247} castShadow/>
        </group>
        <group position={[-0.95, 0.12, 0.25]} rotation={[0.35, 0, 0]} ref={mug}>
          <mesh geometry={nodes.mugObject.geometry} material={materials.mugTexture} position={[0.048, 0, -0.038]} rotation={[Math.PI, -Math.PI / 4, Math.PI]} castShadow/>
        </group>
        <group ref={plant} position={[0.18, 0.25, 0]} rotation={[-0.15, 0, -0.15]}>
          <group position={[0.877, 0, -0.068]} rotation={[0, -1.571, 0]}>
            <group position={[0, 0.271, 0]}>
              <mesh geometry={nodes.spine_leaf_1.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.003, 0, 0.003]} rotation={[0, 1.571, 0]} castShadow/>
              <mesh geometry={nodes.spine_leaf_2.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0, -0.029]} rotation={[Math.PI, 0, Math.PI]} castShadow/>
              <mesh geometry={nodes.spine_leaf_3.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.025, 0, 0.014]} rotation={[0, Math.PI / 3, 0]} castShadow/>
              <mesh geometry={nodes.spine_leaf_4.geometry} material={materials['plant&dirt&vaseTexture']} position={[-0.025, 0, 0.014]} rotation={[0, -Math.PI / 3, 0]} castShadow/>
              <mesh geometry={nodes.spine_leaf_5.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0, -0.06]} rotation={[Math.PI, 0, Math.PI]} castShadow/>
              <mesh geometry={nodes.spine_leaf_6.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.057, 0, -0.019]} rotation={[Math.PI, 1.257, -Math.PI]} castShadow/>
              <mesh geometry={nodes.spine_leaf_7.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.035, 0, 0.048]} rotation={[0, Math.PI / 5, 0]} castShadow/>
              <mesh geometry={nodes.spine_leaf_8.geometry} material={materials['plant&dirt&vaseTexture']} position={[-0.036, 0, 0.048]} rotation={[0, -Math.PI / 5, 0]} castShadow/>
              <mesh geometry={nodes.spine_leaf_9.geometry} material={materials['plant&dirt&vaseTexture']} position={[-0.057, 0, -0.019]} rotation={[Math.PI, -1.257, Math.PI]} castShadow/>
            </group>
            <mesh geometry={nodes.dirt.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0.221, 0]} castShadow receiveShadow/>
            <mesh geometry={nodes.vase.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0.221, 0]} castShadow receiveShadow/>
          </group>
          <group position={[0.877, 0.082, -0.068]} rotation={[0, -1.571, 0]}>
            <mesh geometry={nodes.cross_1.geometry} material={materials.woodenStandTexture} position={[0, 0.013, 0]} castShadow receiveShadow/>
            <mesh geometry={nodes.cross_2.geometry} material={materials.woodenStandTexture} position={[0, 0.013, 0]} castShadow receiveShadow/>
            <mesh geometry={nodes.leg_1.geometry} material={materials.woodenStandTexture} position={[-0.161, -0.006, 0]} castShadow receiveShadow/>
            <mesh geometry={nodes.leg_2.geometry} material={materials.woodenStandTexture} position={[0, -0.006, 0.161]} castShadow receiveShadow/>
            <mesh geometry={nodes.leg_3.geometry} material={materials.woodenStandTexture} position={[0, -0.006, -0.161]} castShadow receiveShadow/>
            <mesh geometry={nodes.leg_4.geometry} material={materials.woodenStandTexture} position={[0.161, -0.006, 0]} castShadow receiveShadow/>
          </group>
        </group>

        <group position={[0.7, 0.132, 0.5]} rotation={[Math.PI / 4, 0, -2.025]} ref={pen}>
          <mesh geometry={nodes.eraser.geometry} material={materials.pencilTexture} position={[0, 0.109, 0]} rotation={[0, 1.571, 0]} castShadow/>
          <mesh geometry={nodes.metal.geometry} material={materials.pencilTexture} position={[0, 0.079, 0]} rotation={[0, 1.571, 0]} castShadow/>
          <mesh geometry={nodes.tip.geometry} material={materials.pencilTexture} position={[0, -0.085, 0]} rotation={[0, 1.571, 0]} castShadow>
            <mesh geometry={nodes.graphite.geometry} material={materials.pencilTexture} position={[0, -0.024, 0]} castShadow/>
          </mesh>
          <mesh geometry={nodes.body.geometry} material={materials.pencilTexture} position={[0, 0.002, 0]} rotation={[0, 1.571, 0]} castShadow/>
        </group>

        <group position={[-.2, .25, -.1]} rotation={[-0.2, 0, -0.1]} ref={lamp}>
          <group position={[-0.964, 0, -0.429]} rotation={[0, 1.309, 0]}>
            <mesh geometry={nodes.base_2.geometry} material={materials.lampLowerTexture} position={[0, 0.031, 0]} castShadow>
              <mesh geometry={nodes.stack_1.geometry} material={materials.lampLowerTexture} position={[0, 0.038, 0]} castShadow/>
              <mesh geometry={nodes.stacK_2.geometry} material={materials.lampLowerTexture} position={[-0.001, 0.075, 0]} castShadow/>
            </mesh>
            <mesh geometry={nodes.lower_arm_1.geometry} material={materials.lampLowerTexture} position={[0, 0.293, -0.073]} castShadow/>
            <mesh geometry={nodes.lower_arm_1_2.geometry} material={materials.lampLowerTexture} position={[0, 0.272, -0.101]} castShadow/>
          </group>
          <group position={[0.061, 0, -0.414]} rotation={[-Math.PI, 0.436, -Math.PI]} >
            <mesh geometry={nodes.center_hinge.geometry} material={materials.lampUpperTexture} position={[1.134, 0.49, -0.455]} rotation={[-1.214, -1.103, -1.176]} >
              <mesh geometry={nodes.head_attachment.geometry} material={materials.lampUpperTexture} position={[0, 0.178, 0.421]} rotation={[0.213, -0.003, 0]} >
                <mesh geometry={nodes.top_bolt.geometry} material={materials.lampUpperTexture} castShadow/>
                <mesh geometry={nodes.shade.geometry} material={materials.lampUpperTexture} position={[0, 0.015, 0.259]}/>
                <mesh geometry={nodes.lightbulb.geometry} material={materials.lampUpperTexture} position={[0, 0, 0.159]}>
                  <mesh geometry={nodes.bulb.geometry} material={materials.lampUpperTexture} position={[0, 0, 0.105]}/>
                  <mesh geometry={nodes.setting.geometry} material={materials.lampUpperTexture} position={[0, 0, 0.03]}/>
                  <mesh geometry={nodes.base.geometry} material={materials.lampUpperTexture} position={[0, 0, 0.003]}/>
                  <mesh geometry={nodes.filament.geometry} material={materials.lampUpperTexture} position={[0.001, 0, 0.069]}/>
                </mesh>
              </mesh>
              <mesh geometry={nodes.upper_arm_1.geometry} material={materials.lampUpperTexture} position={[0, 0.109, 0.214]} castShadow/>
              <mesh geometry={nodes.upper_arm_1_2.geometry} material={materials.lampUpperTexture} position={[0, 0.079, 0.231]} castShadow/>
              <mesh geometry={nodes.center_bolt.geometry} material={materials.lampUpperTexture} castShadow/>
            </mesh>
          </group>
        </group>
       
        <mesh geometry={nodes.Plane.geometry} material={new THREE.ShadowMaterial({color: 0x656565})} receiveShadow position={[0, 0, 0]}/>
        {/* <directionalLight intensity={1} castShadow position={[-1.5, 3, 1.5]} /> */}
        {/* <directionalLight intensity={3} castShadow position={[.5, 3, 1.5]} ref={light}/> */}
        <directionalLight intensity={5} castShadow position={[0, 3, 0]} ref={light}/>
        <directionalLight intensity={2} position={[-2, 0, 1.5]}/>

      </group>
    </>
  )
}

useGLTF.preload('./models/MainScene.glb')

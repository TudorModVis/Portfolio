import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

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
    cameraOuterLayer: THREE.Mesh
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
    ['lightgreyTexture.1']: THREE.MeshStandardMaterial
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
  const { nodes, materials } = useGLTF('/HeroScene.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.05, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={100}>
        <group position={[0, 0, -0.001]} rotation={[Math.PI, 0, Math.PI]} scale={0.247}>
          <group position={[0.005, 0, 0]}>
            <mesh geometry={nodes.bottomPorts.geometry} material={materials.blackTexture} />
            <mesh geometry={nodes.bottomPorts_1.geometry} material={materials.blackTexture} />
            <mesh geometry={nodes.bottomPorts_2.geometry} material={materials.blackTexture} />
          </group>
          <mesh geometry={nodes.bottomMainBottom.geometry} material={materials.whiteTexture} position={[0.005, 0, 0]} />
          <mesh geometry={nodes.bottomMainTop.geometry} material={materials.whiteTexture} position={[0.005, 0, 0]} />
          <mesh geometry={nodes.bottomDetails.geometry} material={materials['lightgreyTexture.1']} position={[0.005, 0, 0]} />
        </group>
        <group position={[0, 0, 0.002]} rotation={[-1.396, 0, Math.PI]} scale={0.247}>
          <mesh geometry={nodes.screen.geometry} material={materials.screenTexture} position={[0.005, 0, 0]} />
          <mesh geometry={nodes.screenConnector.geometry} material={materials.whiteTexture} position={[0.005, 0, 0]} />
          <mesh geometry={nodes.screemEdge.geometry} material={materials.blackTexture} position={[0.005, 0, 0]} />
          <mesh geometry={nodes.screenBack.geometry} material={materials.whiteTexture} position={[0.005, 0, 0]} />
          <mesh geometry={nodes.cameraOuterLayer.geometry} material={materials['lightgreyTexture.1']} position={[0, 0.001, 0.024]} />
          <mesh geometry={nodes.camera.geometry} material={materials.blackTexture} position={[0.005, 0, 0]} />
        </group>
        <mesh geometry={nodes.keys.geometry} material={materials.greyTexture} position={[0.002, 0, 0]} rotation={[0, 0, Math.PI]} scale={0.247} />
      </group>
      <group position={[-0.896, 0, 0.196]}>
        <group position={[0.896, 0, -0.196]}>
          <mesh geometry={nodes.mugObject.geometry} material={materials.mugTexture} position={[-0.848, 0, 0.158]} rotation={[Math.PI, -Math.PI / 4, Math.PI]} />
        </group>
      </group>
      <group position={[0.877, 0, -0.068]} rotation={[0, -1.571, 0]}>
        <group position={[0, 0.271, 0]}>
          <mesh geometry={nodes.spine_leaf_1.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.003, 0, 0.003]} rotation={[0, 1.571, 0]} />
          <mesh geometry={nodes.spine_leaf_2.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0, -0.029]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.spine_leaf_3.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.025, 0, 0.014]} rotation={[0, Math.PI / 3, 0]} />
          <mesh geometry={nodes.spine_leaf_4.geometry} material={materials['plant&dirt&vaseTexture']} position={[-0.025, 0, 0.014]} rotation={[0, -Math.PI / 3, 0]} />
          <mesh geometry={nodes.spine_leaf_5.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0, -0.06]} rotation={[Math.PI, 0, Math.PI]} />
          <mesh geometry={nodes.spine_leaf_6.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.057, 0, -0.019]} rotation={[Math.PI, 1.257, -Math.PI]} />
          <mesh geometry={nodes.spine_leaf_7.geometry} material={materials['plant&dirt&vaseTexture']} position={[0.035, 0, 0.048]} rotation={[0, Math.PI / 5, 0]} />
          <mesh geometry={nodes.spine_leaf_8.geometry} material={materials['plant&dirt&vaseTexture']} position={[-0.036, 0, 0.048]} rotation={[0, -Math.PI / 5, 0]} />
          <mesh geometry={nodes.spine_leaf_9.geometry} material={materials['plant&dirt&vaseTexture']} position={[-0.057, 0, -0.019]} rotation={[Math.PI, -1.257, Math.PI]} />
        </group>
        <mesh geometry={nodes.dirt.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0.221, 0]} />
        <mesh geometry={nodes.vase.geometry} material={materials['plant&dirt&vaseTexture']} position={[0, 0.221, 0]} />
      </group>
      <group position={[0.877, 0.082, -0.068]} rotation={[0, -1.571, 0]}>
        <mesh geometry={nodes.cross_1.geometry} material={materials.woodenStandTexture} position={[0, 0.013, 0]} />
        <mesh geometry={nodes.cross_2.geometry} material={materials.woodenStandTexture} position={[0, 0.013, 0]} />
        <mesh geometry={nodes.leg_1.geometry} material={materials.woodenStandTexture} position={[-0.161, -0.006, 0]} />
        <mesh geometry={nodes.leg_2.geometry} material={materials.woodenStandTexture} position={[0, -0.006, 0.161]} />
        <mesh geometry={nodes.leg_3.geometry} material={materials.woodenStandTexture} position={[0, -0.006, -0.161]} />
        <mesh geometry={nodes.leg_4.geometry} material={materials.woodenStandTexture} position={[0.161, -0.006, 0]} />
      </group>
      <group position={[0.636, 0.032, 0.366]} rotation={[Math.PI / 2, 0, -2.025]}>
        <mesh geometry={nodes.eraser.geometry} material={materials.pencilTexture} position={[0, 0.109, 0]} rotation={[0, 1.571, 0]} />
        <mesh geometry={nodes.metal.geometry} material={materials.pencilTexture} position={[0, 0.079, 0]} rotation={[0, 1.571, 0]} />
        <mesh geometry={nodes.tip.geometry} material={materials.pencilTexture} position={[0, -0.085, 0]} rotation={[0, 1.571, 0]}>
          <mesh geometry={nodes.graphite.geometry} material={materials.pencilTexture} position={[0, -0.024, 0]} />
        </mesh>
        <mesh geometry={nodes.body.geometry} material={materials.pencilTexture} position={[0, 0.002, 0]} rotation={[0, 1.571, 0]} />
      </group>
      <group position={[-0.964, 0, -0.429]} rotation={[0, 1.309, 0]}>
        <mesh geometry={nodes.base_2.geometry} material={materials.lampLowerTexture} position={[0, 0.031, 0]}>
          <mesh geometry={nodes.stack_1.geometry} material={materials.lampLowerTexture} position={[0, 0.038, 0]} />
          <mesh geometry={nodes.stacK_2.geometry} material={materials.lampLowerTexture} position={[-0.001, 0.075, 0]} />
        </mesh>
        <mesh geometry={nodes.lower_arm_1.geometry} material={materials.lampLowerTexture} position={[0, 0.293, -0.073]} />
        <mesh geometry={nodes.lower_arm_1_2.geometry} material={materials.lampLowerTexture} position={[0, 0.272, -0.101]} />
      </group>
      <group position={[0.061, 0, -0.414]} rotation={[-Math.PI, 0.436, -Math.PI]}>
        <mesh geometry={nodes.center_hinge.geometry} material={materials.lampUpperTexture} position={[1.134, 0.49, -0.455]} rotation={[-1.214, -1.103, -1.176]}>
          <mesh geometry={nodes.head_attachment.geometry} material={materials.lampUpperTexture} position={[0, 0.178, 0.421]} rotation={[0.213, -0.003, 0]}>
            <mesh geometry={nodes.top_bolt.geometry} material={materials.lampUpperTexture} />
            <mesh geometry={nodes.shade.geometry} material={materials.lampUpperTexture} position={[0, 0.015, 0.259]} />
            <mesh geometry={nodes.lightbulb.geometry} material={materials.lampUpperTexture} position={[0, 0, 0.159]}>
              <mesh geometry={nodes.bulb.geometry} material={materials.lampUpperTexture} position={[0, 0, 0.105]} />
              <mesh geometry={nodes.base.geometry} material={materials['lightgreyTexture.1']} position={[0, 0, 0.003]} />
              <mesh geometry={nodes.filament.geometry} material={materials.lampUpperTexture} position={[0.001, 0, 0.069]} />
            </mesh>
          </mesh>
          <mesh geometry={nodes.upper_arm_1.geometry} material={materials.lampUpperTexture} position={[0, 0.109, 0.214]} />
          <mesh geometry={nodes.upper_arm_1_2.geometry} material={materials.lampUpperTexture} position={[0, 0.079, 0.231]} />
          <mesh geometry={nodes.center_bolt.geometry} material={materials.lampUpperTexture} />
        </mesh>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
    </group>
  )
}

useGLTF.preload('/HeroScene.glb')

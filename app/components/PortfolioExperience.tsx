import { OrbitControls, ScrollControls } from "@react-three/drei";
import Laptop from "./Laptop";
import { AxesHelper, DirectionalLight, PerspectiveCamera } from "three";
import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Content from "./Content";
import MainScene from "./MainScene";

export default function TvExperience () {
    useFrame((state) => {
        state.camera.lookAt(0, .5, 0);
        state.camera.updateProjectionMatrix();
    });

    return(
        <>
            <hemisphereLight />
            {/* <OrbitControls enableZoom={false}/> */}
            <ScrollControls damping={0.25}>
                {/* <Content /> */}
                <MainScene />
            </ScrollControls>
        </>
    )
}
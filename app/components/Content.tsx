import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function Content () {
    const scroll = useScroll();
    const [scale, setScale] = useState(1);

    useFrame(() => {
        // setScale(1 - scroll.offset * 1);
    })

    return(
        <Scroll html>
            <div className="w-screen">
                <div className="h-screen flex justify-center pt-[24.4vh]">
                    <div className="w-[72vw]">
                        <div className="flex items-center gap-[5.5%]">
                            <h1 className="text-[6vw] w-[55%] font-bold">HI, I AM A</h1>
                            <p className="text-[1.25vw] flex-1">A creative developer with comprehended knowledge in front-end & back-end aka full-stack developer.</p>
                        </div>
                        <h1 className="text-[6vw] font-bold">CEBOTARENCO TUDOR</h1>
                    </div>
                </div>
            </div>
        </Scroll>
    )
}
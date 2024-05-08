import { useEffect, useRef, useState } from "react";
import {gsap} from 'gsap';

export default function Content () {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menu = useRef<HTMLDivElement>(null);
    const menuAnim = useRef<GSAPTween>();

    useEffect(() => {
        menuAnim.current = gsap.to(menu.current!.querySelectorAll('div'), {
            opacity: 1,
            y: 0,
            duration: .3,
            paused: true,
            stagger: .1,
            onStart: () => {
                menu.current!.style.display = 'block';
            },
            onReverseComplete: () => {
                menu.current!.style.display = 'none';
            }
        })
    }, []);

    const toggleMenu = () => {
        if (isMenuOpen) {
            menuAnim.current!.reverse()
         } else {
            menuAnim.current!.play();
         }
        setMenuOpen(!isMenuOpen);
    }

    return(
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-semi-black bg-opacity-25 transition duration-300 pointer-events-none" style={{opacity: isMenuOpen ? "100" : "0"}}></div>
            <div className="fixed top-0 pt-10 left-1/2 -translate-x-1/2">
                <nav className="flex justify-center gap-4">
                    <button className="rounded-3xl text-blue py-3 px-6 bg-white leading-none">TUDORACHE</button>
                    <button className="rounded-3xl text-blue size-12 bg-white flex justify-center items-center gap-1" onClick={toggleMenu}>
                        <div className="rounded-full bg-blue min-h-[4px] min-w-[5px] w-[0.375rem] aspect-square"></div>
                        <div className="rounded-full bg-blue min-h-[4px] min-w-[5px] w-[0.375rem] aspect-square"></div>
                        <div className="rounded-full bg-blue min-h-[4px] min-w-[5px] w-[0.375rem] aspect-square"></div>
                    </button>
                    <button className="rounded-3xl text-blue py-3 px-6 bg-white leading-none">SAY HELLO</button>
                </nav>
                <div className="w-fit mx-auto hidden" ref={menu}>
                    <div className="mt-4 rounded-3xl py-10 px-24 bg-white text-blue text-center opacity-0 translate-y-8">
                        <a href="" className="text-8xl block mb-4 italic font-bold w-fit mx-auto">HOME</a>
                        <a href="" className="text-8xl block mb-4 hover:italic hover:font-bold w-fit mx-auto">WORK</a>
                        <a href="" className="text-8xl block mb-4 hover:italic hover:font-bold w-fit mx-auto">ABOUT</a>
                        <a href="" className="text-8xl block hover:italic hover:font-bold w-fit mx-auto">CONTACT</a>
                    </div>
                    <div className="mt-4 rounded-3xl py-8 bg-white text-blue flex gap-4 justify-center w-full opacity-0 translate-y-8">
                        <a href="">MAIL</a>
                        <a href="">LINKEDIN</a>
                        <a href="">GITHUB</a>
                        <a href="">INSTAGRAM</a>
                    </div>
                </div>
            </div>
        </>
        
    )
}
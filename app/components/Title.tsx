'use client'

import { useEffect, useRef, useState } from "react";
import {gsap} from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

interface TitleProps {
    title: string,
    className: string
}

export default function Title ({title, className}: TitleProps) {
    gsap.registerPlugin(TextPlugin);
    const titleRef = useRef<HTMLDivElement>(null);
    const anim = useRef<GSAPTween>();

    useEffect(() => {
        anim.current = gsap.to(titleRef.current,
        {
            keyframes: [
                {text: "####"},
                // {text: randomString(title.length)},
                // {text: randomString(title.length)},
                // {text: randomString(title.length)},
                {text: title}
            ],
            duration: .5,
            paused: true
        })
    }, [])

    return (
        <>
            <div className={className} ref={titleRef} onMouseEnter={() => {anim.current!.play(); console.log('enter')}} onMouseLeave={() => {anim.current!.reverse()}}>{title}</div>
        </>
    )
}

function randomString (length: number) {
    let result = '';
    const characters = '!@#$%^&*~';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
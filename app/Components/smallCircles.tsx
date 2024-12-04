"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SmallCircleProps {
  className: string;
}

gsap.registerPlugin(useGSAP);

const SmallCircle = ({ className }: SmallCircleProps) => {
  const el = useRef(null);
  const position = useRef({ x: 0, y: 0 });

  const createCirclePosition = () => {
    position.current.x = (Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random() * document.body.clientWidth);
    position.current.y = (Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random() * document.body.clientHeight);
  };

  useGSAP(() => {
    if (document) {
      createCirclePosition();
      gsap.to(el.current, {
        transform: `translate(${position.current.x}px, ${position.current.y}px)`,
        onRepeat: createCirclePosition,
        duration: Math.floor(Math.random() * 30 + 40),
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <span
      ref={el}
      className={`${className} bg-sky-500 rounded-full absolute`}></span>
  );
};

export default SmallCircle;

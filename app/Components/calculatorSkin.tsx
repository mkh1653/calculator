"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Panel from "./panel";

interface CalculatorSkinInterface {
  children?:
    | JSX.Element[]
    | JSX.Element
    | React.ReactElement[]
    | React.ReactElement
    | string;
  divide: boolean;
  width: string;
  height: string;
  left: string;
  top: string;
}

const createRandomTransform = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const CalculatorSkin = ({
  children,
  divide,
  width,
  height,
  left,
  top,
}: CalculatorSkinInterface) => {
  const el = useRef(null);

  useGSAP(() => {
    const value = createRandomTransform();
    if (!divide) {
      var tl = gsap.timeline({
        repeat: -1,
        repeatDelay: Math.floor(Math.random() * 20 + 1),
        yoyo: true,
      });
      tl.to(el.current, {
        perspective: 800,
        rotateY: Math.floor(Math.random() * 360),
        rotateX: Math.floor(Math.random() * 360),
        duration: 9,
      });
      tl.to(el.current, { transform: `translateZ(${value}rem)`, duration: 4 });
    }
  });

  return (
    <div
      ref={el}
      className={`${width} ${height} ${top} ${left} backdrop-blur-lg bg-gray-400/20 absolute rounded-lg shadow-2xl`}>
      {divide && (
        <div className='flex flex-col h-full divide-y-2 px-4'>
          <Panel />
        </div>
      )}
      <div className='h-full w-full flex justify-center items-center text-gray-100 text-xl'>
        {children}
      </div>
    </div>
  );
};

export default CalculatorSkin;

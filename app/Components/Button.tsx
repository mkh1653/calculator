"use client";
import React from "react";

interface ButtonInterface {
  children?:
    | JSX.Element[]
    | React.ReactElement[]
    | JSX.Element
    | React.ReactElement
    | string;
  onclick: () => void;
}

const Button = ({ children, onclick }: ButtonInterface) => {
  return (
    <button
      className='bg-slate-200 border-none outline-none text-cyan-500 rounded w-full h-10'
      onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;

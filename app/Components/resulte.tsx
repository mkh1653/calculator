"use client";
import React, { useEffect, useRef } from "react";

interface ResulteProps {
  value: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Resulte = ({ value, onchange }: ResulteProps) => {
  const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    myInput?.current?.focus();
  }, [value]);

  return (
    <div className='py-3 h-full'>
      <input
        className='bg-transparent border-none outline-none w-full h-full text-gray-800 text-lg'
        ref={myInput}
        type='text'
        value={value}
        onChange={(e) => onchange(e)}
      />
    </div>
  );
};

export default Resulte;

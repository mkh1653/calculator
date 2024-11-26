import React from "react";
import Panel from "./panel";

interface CalculatorSkinInterface {
  children?: JSX.Element[];
}

const CalculatorSkin = ({ children }: CalculatorSkinInterface) => {
  
  return (
    <div className='backdrop-blur-lg bg-gray-200/60 w-96 h-[30rem] absolute left-[60%] top-[6rem] rounded-lg shadow-2xl'>
      <div className='flex flex-col h-full divide-y-2 px-4'>
        <Panel />
      </div>
      {children}
    </div>
  );
};

export default CalculatorSkin;

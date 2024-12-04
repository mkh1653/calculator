import React from "react";
import SmallCircle from "./Components/smallCircles";
import BigCircle from "./Components/bigCircle";
import CalculatorSkin from "./Components/calculatorSkin";

const Home = () => {
  return (
    <div>
      <div id='svg-filter' className='w-screen h-screen'>
        <SmallCircle className='right-48 bottom-14 w-6 h-6' />
        <SmallCircle className='left-16 top-0 w-5 h-5' />
        <SmallCircle className='right-3 top-30 w-7 h-7' />
        <SmallCircle className='right-1/2 top-1/2 w-5 h-5' />
        <BigCircle className='left-[5%] top-[28rem] w-[22rem] h-[22rem]' />
        <BigCircle className='left-[60%] top-[4rem] w-[35rem] h-[35rem]' />
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'></feGaussianBlur>
            <feColorMatrix
              in='blur'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              mode='matrix'
              result='goo'></feColorMatrix>
            <feBlend in='SourceGraphic' in2='goo'></feBlend>
          </filter>
        </defs>
      </svg>
      <CalculatorSkin
        divide
        width='w-96'
        height='h-[30rem]'
        left='left-[55%]'
        top='top-[6rem]'
      />
      
      <CalculatorSkin
        divide={false}
        width='w-8'
        height='h-8'
        left='left-1/3'
        top='top-20'>
          3
      </CalculatorSkin>

      <CalculatorSkin
        divide={false}
        width='w-8'
        height='h-8'
        left='left-96'
        top='top-1/2'>
          7
      </CalculatorSkin>

      <CalculatorSkin
        divide={false}
        width='w-8'
        height='h-8'
        left='right-80'
        top='bottom-4'>
          6
      </CalculatorSkin>
      <CalculatorSkin
        divide={false}
        width='w-8'
        height='h-8'
        left='left-24'
        top='bottom-20'>
          8
      </CalculatorSkin>
    </div>
  );
};

export default Home;

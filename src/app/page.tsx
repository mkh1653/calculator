import React from "react";
import SmallCircle from "@/app/Components/smallCircles";
import BigCircle from "@/app/Components/bigCircle";
import CalculatorSkin from "@/app/Components/calculatorSkin";


const Home = () => {
  return (
    <div>
      <SmallCircle />
      <BigCircle />
      <CalculatorSkin></CalculatorSkin>
    </div>
  );
};

export default Home;

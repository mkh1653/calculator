import React from "react";

interface BigCircleProps {
  className: string;
}

const BigCircle = ({ className }: BigCircleProps) => {
  return (
    <div className={`${className} bg-sky-500 rounded-full absolute`}></div>
  );
};

export default BigCircle;

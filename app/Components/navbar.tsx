"use client";
import React, { useState } from "react";
import gsap from "gsap";

function Nav() {
  const [historyBar, setHistoryBar] = useState<boolean>(false);
  const historyToggle = () => {
    setHistoryBar((prevVal) => !prevVal);

    if (historyBar) {
      gsap.to("#history", {
        x: "-100%",
        duration: 2,
        ease: "expo.inOut"
      });
    } else {
      gsap.to("#history", {
        x: "0%",
        duration: 2,
        ease: "expo.inOut"
      });
    }
  };

  return (
    <nav className='flex justify-end px-4 pt-4'>
      <button
        type='button'
        className='px-6 py-3 bg-sky-500/40 text-white rounded-md z-10 backdrop-blur-lg'
        onClick={historyToggle}>
        <span>History</span>
      </button>
    </nav>
  );
}

export default Nav;

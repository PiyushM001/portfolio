"use client";
import React from "react";

import FluidAnimation from "./components/react-fluid-animation";
const defaultConfig1 = {
  textureDownsample: 1,
  densityDissipation: 0.97,
  velocityDissipation: 0.70,
  pressureDissipation: 0,
  pressureIterations: 0,
  curl: 20,
  splatRadius: 0.010,
};


const FAnimation = () => {
  return (
    <div className="w-full h-[100vh]  z-[44] ">

      <FluidAnimation config={defaultConfig1} />


    </div>
  );
};

export default FAnimation;
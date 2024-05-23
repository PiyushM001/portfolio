"use client";
import React from "react";

import FluidAnimation from "./components/react-fluid-animation";
const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.5,
  velocityDissipation: 0.94,
  pressureDissipation: 0.58,
  pressureIterations: 28,
  curl: 30,
  splatRadius: 0.015,
};

const FAnimation = () => {
  return (
    <div className="w-full h-[100vh]  absolute  z-[100000]  bg-[red] ">
      <FluidAnimation config={defaultConfig} />
    
    </div>
  );
};

export default FAnimation;
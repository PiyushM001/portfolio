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
const defaultConfig2 = {
  textureDownsample: 1,
  densityDissipation: 0.92,
  velocityDissipation: 0.70,
  pressureDissipation: 0,
  pressureIterations: 0,
  curl: 20,
  splatRadius: 0.005,
};


const FAnimation = () => {
  return (<>
    <div className="w-[100vw] h-[100svh] max-[600px]:hidden z-[40]  ">

      <FluidAnimation config={defaultConfig1} />
      </div>
      <div className="w-[100vw] h-[100svh] min-[600px]:hidden  z-[40]  ">

<FluidAnimation config={defaultConfig2} />
</div>
</>
   
  );
};

export default FAnimation;
"use client"
import Cards from '@/components/cards'


import React from 'react'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Coverpage2 from '@/components/coverpage2'
import Timeline from '@/components/timeline/timeline'
import Timeline2 from '@/components/timeline2/timeline2'
import FAnimation from '@/components/fluidAnimation';
import Ms from '@/components/movingstrip/ms';
import Cssimg from '@/components/cssimage/cssimg';
import Textanimation from '@/components/textanimation/textanimation';
import ScrollComponent from '@/components/textreveal/textreveal';
import Noise from '@/components/noise/noise';
import Bigcomp from '@/components/bigcomp/bigcomp';

export default function page() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div className='comp111'>
      {/* <Cursor/> */}
      
      <FAnimation/>

      {/* <Header/> */}
      <Coverpage2/>
      
      <Ms/>
      <ScrollComponent/>
     
      <Cards/>
   
      <Timeline/>
{/* <Timeline2/> */}
<div className='w-full h-[100svh] '>
  <FAnimation/><FAnimation/><FAnimation/><div className='max-[600px]:hidden'><FAnimation/></div>
  <div className='w-full h-[100svh] mt-[-400svh] bgicompcls '><Bigcomp/></div>
</div>

<div className='absolute top-8 left-8 max-[600px]:left-2 max-[600px]:top-3 '><Textanimation/></div>


<button className=' from-[#2abcf5] max-[600px]:right-2 max-[600px]:w-[7rem] max-[600px]:top-4 to-[#d909f9] bg-gradient-to-r  w-[10rem] p-1  rounded-[20px] font-league font-bold text-[1.5rem]  z-[10000000000000] fixed top-8 right-8'>Resume</button>
{/* <img className='absolute min-[600px]:hidden top-0 opacity-30 pointer-events-none w-[100%] z-[100]' src="/images/space.png"></img> */}
<img className='absolute min-[600px]:hidden top-[0] opacity-30 pointer-events-none w-[100%] h-[100svh] z-[100]' src="/images/space.png"></img>

    </div>
  )
}

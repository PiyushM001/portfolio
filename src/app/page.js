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
      duration: 400, // values from 0 to 3000, with step 50ms
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
      <Cards/>
      <Timeline/>
<Timeline2/>
<img className='absolute top-0 opacity-30 pointer-events-none w-[100%] z-[100]' src="/images/space.png"></img>
<img className='absolute min-[600px]:hidden top-[235vh] opacity-30 pointer-events-none w-[100%] z-[100]' src="/images/space.png"></img>
<img className='absolute min-[600px]:hidden top-[335vh] opacity-30 pointer-events-none w-[100%] z-[100]' src="/images/space.png"></img>

    </div>
  )
}

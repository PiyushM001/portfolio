import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './textreveal.css';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = () => {
  useEffect(() => {
    if (!CSS.supports('animation-timeline: scroll()') && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const scrub = 0.5;
      const trigger = 'main';

      gsap.set('p > span', {
        '--progress': 0,
        backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
      });
      
      gsap.to('p > span', {
        '--progress': 1,
        scrollTrigger: {
          trigger,
          scrub,
          start: 'top top',
          end: 'top top-=75%',
        },
      });

      gsap.to('p > span', {
        color: 'white',
        scrollTrigger: {
          trigger,
          scrub,
          start: 'top top-=75%',
          end: 'bottom bottom',
        },
      });
    }
  }, []);

  return (
    <div className='w-[100vw]'>
      <div className='w-[100vw] mainreveal'>
        <div className='w-[100vw] sectionreveal'>
          <p className='w-[70vw] max-[600px]:w-[100vw] '>
            <span className='max-[600px]:text-[2.5rem] max-[600px]:font-bold max-[600px]:w-[90vw] ' contentEditable="true">Crafting Elegant User Experiences with Modern Web Technologies and Creativity</span>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ScrollComponent;

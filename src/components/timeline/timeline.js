import React from 'react'
import './timeline.css'
import '../coverpage.css'

import Fire from '../fire'
import FAnimation from '../fluidAnimation'
export default function Timeline() {
  return (
    <>
  
      <div className='container  relative'>< FAnimation/>
      <div class=" flex-col min-[600px]:flex  absolute top-[5rem] max-[600px]:top-[-2rem]  max-[600px]:top:[1rem] pointer-events-none z-[1000000] w-full ">

      <div className='min-[600px]:hidden ml-[-2rem]'>
    <Fire/>
</div>
<div className='text-[4vw] max-[600px]:text-[10vw] min-[600px]:hidden   font-mochiy-pop  text-[#6fff00] max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center  max-[600px]:h-[6rem] '>My <span className='text-[#cbcbcb] m-2'>Education</span> </div>



<div class="rightbox">
  <div class="rb-container">
    <ul class="rb">
      <li class="rb-item" ng-repeat="itembx" data-aos="fade-up">
        <div class="timestamp">
           Class X
        </div>
        <div class="item-title">Apex International School</div>
        <div class="item-title">2019</div>
        <div class=" text-[#4ed7b3]">Completed with 95.67%</div>


      </li>
      <li class="rb-item" ng-repeat="itembx"  data-aos="fade-up">
        <div class="timestamp">
        Class XII
        </div>
        <div class="item-title">Apex International School</div>
        <div class="item-title">2021</div>
        <div class=" text-[#4ed7b3]">Completed with 99.40%</div>

      </li>

      <li class="rb-item" ng-repeat="itembx"  data-aos="fade-up">
        <div class="text-[#f9ed48] font-mochiy-pop w-[100%]">
          Indian Institute of Technology, Roorkee
        </div>
        <div class="item-title">B-Tech</div>
        <div class=" text-[#4ed7b3]">2022-2026</div>


      </li>

    </ul>

  </div>
  <div className='text-[4vw] max-[600px]:text-[10vw] max-[600px]:hidden   h-[10rem] font-mochiy-pop  text-[#6fff00]  max-[600px]:justify-center max-[600px]:items-center ml-[-5rem]'>My <span className='text-[#cbcbcb] m-2'>Education</span> </div>

</div>

</div>
</div>
  














    {/* <div className='min-[600px]:hidden'>
     
      <div class="container flex-col min-[600px]:flex  compstar">



<div className='min-[600px]:hidden ml-[-2rem]'>
    <Fire/>
</div>


<div className='text-[4vw] max-[600px]:text-[10vw] min-[600px]:hidden   h-[10rem] font-mochiy-pop  text-[#6fff00] max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center '>My <span className='text-[#cbcbcb] m-2'>Education</span> </div>



<div class="rightbox">
  <div class="rb-container">
    <ul class="rb">
      <li class="rb-item" ng-repeat="itembx" data-aos="fade-up">
        <div class="timestamp">
          10th Class
        </div>
        <div class="item-title">Chris Serrano posted a photo on your wall.</div>

      </li>
      <li class="rb-item" ng-repeat="itembx"  data-aos="fade-up">
        <div class="timestamp">
          12th Class
        </div>
        <div class="item-title">Mia Redwood commented on your last post.</div>

      </li>

      <li class="rb-item" ng-repeat="itembx"  data-aos="fade-up">
        <div class="timestamp w-[100%]">
          IIT Roorkee
        </div>
        <div class="item-title">Lucas McAlister just send you a message.</div>

      </li>

    </ul>

  </div>
  <div className='text-[4vw] max-[600px]:text-[10vw] max-[600px]:hidden   h-[10rem] font-mochiy-pop  text-[#6fff00]  max-[600px]:justify-center max-[600px]:items-center ml-[-5rem]'>My <span className='text-[#cbcbcb] m-2'>Education</span> </div>

</div>

</div>

    </div> */}



    </>
  )
}

import React from 'react'
import './timeline.css'
import '../coverpage.css'

import Fire from '../fire'
export default function Timeline() {
  return (
    <div>
      <div class="container flex-col min-[600px]:flex  compstar">


{/* <div class="leftbox bg-[#3aff4400]">
  <nav className='text-[2rem] font-mochiy-pop text-center text-[#83fc42]'>
    <a>E</a>
    <a >D</a> <a >U</a> <a >C</a> <a >A</a> <a >T</a> <a >I</a> <a >o</a> <a >N</a>
  </nav>
</div> */}
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

    </div>
  )
}

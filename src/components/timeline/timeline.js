import React from 'react'
import './timeline.css'
import '../coverpage.css'

import Fire from '../fire'
import FAnimation from '../fluidAnimation'
import Slicedtext from '../slicedtext/slicedtext'
import Ms2 from '../movingstrip/ms2'
export default function Timeline() {
  return (
    <>
  
      <div className='container  relative flex justify-center'>  <div className=' max-[600px]:hidden '>  <FAnimation/></div>
      <div className='w-[100%] h-[100svh] bg-[#000000] min-[600px]:hidden '></div>
      <div class=" flex-col min-[600px]:flex  absolute z-[1000000000000000000] top-[0rem] max-[600px]:top-[-2rem] min-[600px]:compstar  max-[600px]:h-[150vh]  pointer-events-none w-full ">

      {/* <div className='min-[600px]:hidden ml-[-2rem]'>
    <Fire/>
</div> */}
<div data-aos="fade-up" >
<Slicedtext text="EDUCATION"/></div>





<div class="rightbox w-[80%] max-[600px]:w-[100%] ml-[10%] max-[600px]:ml-[0px]  flex flex-col  ">

<div className='flex justify-evenly max-[600px]:flex-col w-[100%] max-[600px]:items-center  mt-[5rem] max-[600px]:mt-[2rem] '>


  <div data-aos="flip-down" class=" glass  flex flex-col justify-center max-[600px]:p-4 max-[600px]:justify-start w-[25vw] max-[600px]:w-[80vw]">


      <div class="rb-item max-[600px]:ml-[2rem] ml-[5rem] mb-10" ng-repeat="itembx" data-aos="fade-up">
        <div class="timestamp w-[20vw] max-[600px]:w-[30vw] text-[3rem] max-[600px]:text-[2rem] font-public font-extrabold text-[#ffffff] ">
           Class X
        </div>
        <div class=" text-[#a3a3a3] ">Apex International School , 2019</div>
        <div class=" text-[#b6b6b6]">Completed with 95.67%</div>
     </div>


      <div className='flex max-[600px]:ml-[2rem] ml-[5rem] justify-center flex-col' ng-repeat="itembx"  >
        <div class="timestamp text-[#f1f1f1] 'flex justify-center  max-[600px]:w-[35vw] text-[3rem] max-[600px]:text-[2rem] font-public font-extrabold  ">
        Class XII
        </div>
        <div class=" text-[#9e9e9e]">Apex International School , 2021</div>
        <div class=" text-[#a6a6a6] 'flex justify-center">Completed with 99.40%</div>

      </div>
  

  </div>

  <div data-aos="fade-up" className='max-[600px]:bg-[#0000008f] flex flex-col w-[50vw] max-[600px]:w-[100%] h-[25rem] max-[600px]:h-[22rem] max-[600px]:mt-[3rem] items-end max-[600px]:items-center  mr-[8rem] max-[600px]:mr-[0]'>
  <div className=' noise text-[4rem] font-extrabold max-[600px]:text-[3rem]'>IIT ROORKEE </div>
  <h  className="text-[#616161] text-[1.08rem] font-public font-extrabold  max-[600px]:text-[0.8rem] max-[600px]:w-[71%]">INDIAN INSTITUTE OF TECHNOLOGY, ROORKEE </h>

 <h  className="text-[#616161] text-[1.08rem] font-public font-extrabold">B-Tech , 2022-2026</h>
 <Ms2/>
  </div>


</div>




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
        <div class="item-title font-league ">Chris Serrano posted a photo on your wall.</div>

      </li>
      <li class="rb-item" ng-repeat="itembx"  data-aos="fade-up">
        <div class="timestamp">
          12th Class
        </div>
        <div class="item-title font-league ">Mia Redwood commented on your last post.</div>

      </li>

      <li class="rb-item" ng-repeat="itembx"  data-aos="fade-up">
        <div class="timestamp w-[100%]">
          IIT Roorkee
        </div>
        <div class="item-title font-league ">Lucas McAlister just send you a message.</div>

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

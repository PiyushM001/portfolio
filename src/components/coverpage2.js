import React from 'react'
import Textanimation from './textanimation/textanimation'
export default function Coverpage2() {
  return (
    <>
    <div className=' max-[600px]:hidden w-[40vw] left-[30vw] w-[20rem] flex flex-col justify-center text-[#ffffff]  items-center font-mochiy-pop absolute z-[100] top-[30vh] max-[600px]:text-[2rem] max-[600px]:left-[12%] max-[600px]:top-[30vh] pointer-events-none '>
          <div className='text-[1.5vw] flex items-center justify-center max-[600px]:text-[6vw] text-[#515151]'>Hello, This is</div>  
      <div className='flex items-center text-[5vw] justify-center max-[600px]:text-[8vw]'>Piyush Mehta</div>
   <Textanimation/>
<div className='text-[1vw] font-tea text-center text-[#7bfff6] w-full  max-[600px]:w-[100%]'> Exploring the intersection of technology and creativity is what fuels my drive. Currently pursuing my B.Tech at IIT Roorkee, I'm on a mission to bring innovative ideas to life.</div>
    </div>



    
    <div className='min-[600px]:hidden      w-[100%] flex flex-col justify-center text-[#ffffff]  items-center font-mochiy-pop absolute z-[100] top-[30vh] max-[600px]:text-[2rem] pointer-events-none '>
          <div className='text-[1.5vw] flex items-center justify-center max-[600px]:text-[6vw] text-[#515151]'>Hello, This is</div>  
      <div className='flex items-center text-[2.5rem] justify-center '>Piyush Mehta</div>
   <Textanimation/>
<div className='text-[15px] px-8 font-tea text-center text-[#7bfff6] w-[20vw]  max-[600px]:w-[100%]'>Exploring the intersection of technology and creativity is what fuels my drive. Currently pursuing my B.Tech at IIT Roorkee, I'm on a mission to bring innovative ideas to life</div>
    </div>
    </>
  )
}

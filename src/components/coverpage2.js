import React from 'react'
import Textanimation from './textanimation/textanimation'
import Cssimg from './cssimage/cssimg'
import Slicedtext from './slicedtext/slicedtext'
export default function Coverpage2() {
  return (
    <>
    <div className=' max-[600px]:hidden w-[100vw] left-[0vw] h-[80svh] flex flex-col justify-center text-[#ffffff]  items-center  absolute z-[1000] top-[0]   pointer-events-none '>
          <div className='text-[3rem]  font-extrabold flex items-center justify-center max-[600px]:text-[6vw] text-[#515151] font-league'>Hello, This is</div>  
      <div className='flex items-center text-[7vw] justify-center max-[600px]:text-[8vw] font-public font-bold  '><Slicedtext text="PIYUSH MEHTA" /></div>
      <div className='w-full flex-col justify-evenly '>

   
<div className='text-[2vw]   text-center text-[#7a7a7a]   max-[600px]:w-[100%] font-public font-bold'> Exploring the intersection of technology and creativity </div>
</div>
    </div>



    

    <div className=' min-[600px]:hidden w-[100vw] left-[0vw] h-[80svh] flex flex-col justify-center items-center text-[#ffffff]  items-center  absolute z-[1000] top-[0]   pointer-events-none '>
          <div className='text-[3rem]   font-extrabold flex items-center justify-center max-[600px]:text-[6vw] text-[#515151] font-league'>Hello, This is</div>  
      <div className='flex items-center  justify-center  text-[5vw] text-[red] ml-[25vw] font-public font-bold  '><Slicedtext text="PIYUSH MEHTA" /></div>
      <div className='w-full flex-col justify-evenly  flex items-center'>

   
<div className='text-[5vw] w-[80%]  text-center text-[#7a7a7a]  font-public font-bold'> Exploring the intersection of technology and creativity </div>
</div>
    </div>


    {/* <div></div>
    <div className='min-[600px]:hidden bg-[red]  h-[80svh]    w-[100%] flex flex-col justify-center text-[#ffffff]  items-center font-public absolute z-[100] top-[5vh] max-[600px]:text-[2rem] pointer-events-none '>
          <div className='text-[1.5vw] flex items-center justify-center max-[600px]:text-[6vw] text-[#999999] font-bold'>Hello, This is</div>  
      <div className='flex items-center text-[3rem] justify-center font-bold '>PIYUSH MEHTA</div>
   
<div className='text-[20px] px-8 font-tea text-center text-[#7e7e7e] w-[20vw] font-semibold  max-[600px]:w-[100%]'>Exploring the intersection of technology and creativity is what fuels my drive. Currently pursuing my B.Tech at IIT Roorkee</div>
    </div> */}
    </>
  )
}

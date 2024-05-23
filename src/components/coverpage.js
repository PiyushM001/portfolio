import React from 'react'
import './coverpage.css'
import Textanimation from './textanimation/textanimation'
export default function Coverpage() {
  return (
    <>
    <div className=" z-[0] pt-[10vh] w-[100%] comp1 relative h-[100vh] bg-[#ff000000] text-[#ffffff] text-[5vw] font-mochiy-pop flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:h-[100vh] ">

      <div className='w-[60%] max-[600px]:w-[100%] flex items-center justify-center  max-[600px]:h-[100vh]'>  



      <div className='w-[70%]  max-[600px]:w-[90%] '>
      <div className='text-[3vw] flex items-center justify-center max-[600px]:text-[8vw] text-[#515151]'>Hello, This is</div>  
      <div className='flex items-center justify-center max-[600px]:text-[10vw]'>Piyush Mehta</div>
      {/* <div className='text-[#ffe53b] flex items-center justify-center text-[2vw] max-[600px]:text-[5vw]'>Full Stack Web Developer</div> */}
<Textanimation/>
      <div className='text-[1vw] text-[#555555] flex items-center justify-center max-[600px]:text-[3vw]'>sible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.</div>

      </div> 

     
</div>


      <div className='w-[30%] max-[600px]:w-[60%]  flex items-end  max-[600px]:hidden'>      <img  className='h-[28rem]' src='./images/profileg.jpg'  alt='Profile Background'></img></div>

      
    </div></>
  )
}

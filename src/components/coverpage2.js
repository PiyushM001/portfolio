import React from 'react'
import Textanimation from './textanimation/textanimation'

export default function Coverpage2() {
  return (
    <div className='text-[5rem] left-[35%] top-[17rem] flex flex-col justify-center text-[#ffffff]  items-center font-mochiy-pop absolute z-[100] top-[100px]'>
          <div className='text-[3vw] text-[1.5rem] flex items-center justify-center max-[600px]:text-[8vw] text-[#515151]'>Hello, This is</div>  
      <div className='flex items-center text-[2.5rem] justify-center max-[600px]:text-[10vw]'>Piyush Mehta</div>
   <Textanimation/>

    </div>
  )
}

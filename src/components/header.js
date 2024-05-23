import React from 'react'

export default function Header() {
  return (
    <div className='w-[100%] flex justify-end items-center h-[5rem] max-[600px]:hidden '>
      <div className='w-[50%] flex justify-evenly'>
        <div className='text-[#dcdcdc] text-[1vw]'>About</div>
        <div className='text-[#dcdcdc] text-[1vw]'>skills</div>
        <div className='text-[#dcdcdc] text-[1vw]'>Contact</div>
        <div className='text-[#dcdcdc] text-[1vw]'>cards</div>

      </div>
    </div>
  )
}

import React from 'react'
import Bigcomp from './bigcomp/bigcomp'
import FAnimation from './fluidAnimation'

export default function Bigcomp2() {
  return (
    <div className='w-full h-[750vh] bg-[#00000000] bg-repeat pointer-events-none '>
        <FAnimation/>
      <Bigcomp/>
    </div>
  )
}

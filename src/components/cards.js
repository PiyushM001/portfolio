"use client"
import React from 'react'
import FAnimation from './fluidAnimation'
// import './coverpage.css'
import './noise/noise.css'
export default function Cards() {
   
  return (
    <>
   <div className='max-[600px]:hidden relative'><FAnimation/>








  
     <div className='max-[600px]:hidden w-[80vw] max-[600px]:w-[90%]  max-[600px]:flex-col absolute z-[1000] top-[5rem] left-[10%] pointer-events-none '>
<div data-aos="fade-up"  className='noise text-[8vw] max-[600px]:text-[10vw]   h-[10rem] font-public flex font-extrabold text-[#cbcbcb] max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center mb-[6rem] '>What i Do ? <span className=' m-2 '></span> </div>

<div className='flex w-[100%]  justify-between max-[600px]:flex-col max-[600px]:items-center '> 





<div  data-aos="fade-right" className='h-[40vh] w-[26vw] max-[600px]:w-[90vw] rounded-[1vw] bg-[#1212126e] card2  flex items-end max-[600px]:m-2  ' >
    <div className='h-[8rem] flex items-center flex-col '>
        <div className='text-[#f1f1ee]  text-[1.5rem] font-league font-bold flex justify-center m-2'>Back end web development</div>
        <div className='text-[#636363] flex justify-center w-[80%]'>Node.js , Express.js , MongoDb , WebSockets ,Cloudinary ,Catching</div>
    </div>
</div>


<div data-aos="fade-up"  className='h-[40vh] w-[26vw] max-[600px]:w-[90vw] rounded-[1vw] bg-[#1212126e]  card1  flex items-end max-[600px]:m-2' >
    <div className='h-[8rem] flex items-center flex-col '>
        <div className='text-[#fafafa] text-[1.5rem] font-league font-bold flex justify-center m-2'>Front end web development</div>
        <div className='text-[#636363] flex justify-center w-[80%]'>React.js , Next.js , JavaScript , Tailwind CSS ,HTML , CSS , API Intigration</div>
    </div>
</div>



<div data-aos="fade-left"  className='h-[40vh] w-[26vw] max-[600px]:w-[90vw] rounded-[1vw] bg-[#1212126e]  card3  flex items-end max-[600px]:m-2   ' >
    <div className='h-[8rem] flex items-center flex-col '>
        <div className='text-[#fffffe] text-[1.5rem] font-league font-bold flex justify-center m-2'>Others</div>
        <div className='text-[#636363] flex justify-center w-[80%]'>C++ , Phython , Solidity , Block-chain development ,Git and Github </div>
    </div>
</div>



</div>
</div>

  

    </div> 








    <div className='min-[600px]:hidden h-[100vh] w-full  flex  items-center justify-center max-[600px]:flex-col max-[600px]:h-[140vh] z-[1000] '>
     <div className='w-[70%] max-[600px]:w-[90%] max-[600px]:flex max-[600px]:flex-col mt-[-10rem]  '>
     <div data-aos="fade-up"  className='noise  max-[600px]:text-[15vw]   h-[4rem] font-public flex font-extrabold text-[#cbcbcb] max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center  '>What i Do ? <span className=' m-2 '></span> </div>

<div className='flex w-[100%]  justify-between max-[600px]:flex-col max-[600px]:items-center '> 





<div  data-aos="fade-up" className='h-[36vh] w-[88vw]  rounded-[3vw] bg-[#28282862] border-[2px] border-[#242424] card2  flex items-end m-2 max-[600px]:mt-[5rem]  ' >
    <div className='h-[8rem] flex items-center flex-col '>
        <div className='text-[#acacac] font-league font-bold text-[1.5rem] flex justify-center m-2'>Back end web development</div>
        <div className='text-[#636363] flex justify-center w-[80%]'>Node.js , Express.js , MongoDb , WebSockets ,Cloudinary ,Catching</div>
    </div>
</div>


<div data-aos="fade-up"  className='h-[36vh]  w-[88vw]  rounded-[3vw] bg-[#28282862] border-[2px] border-[#242424]  card1  flex items-end m-2 ' >
    <div className='h-[8rem] flex items-center flex-col '>
        <div className='text-[#acacac] font-league font-bold text-[1.5rem] flex justify-center m-2'>Front end web development</div>
        <div className='text-[#636363] flex justify-center w-[80%]'>React.js , Next.js , JavaScript , Tailwind CSS ,HTML , CSS , API Intigration</div>
    </div>
</div>



<div data-aos="fade-up"  className='h-[36vh] w-[88vw]  rounded-[3vw] bg-[#28282862] border-[2px] border-[#242424] card3  flex items-end m-2  ' >
    <div className='h-[8rem] flex items-center flex-col '>
        <div className='text-[#acacac] font-league font-bold text-[1.5rem] flex justify-center m-2'>Others</div>
        <div className='text-[#636363] flex justify-center w-[80%]'>C++ , Phython , Solidity , Block-chain development ,Git and Github  </div>
    </div>
</div>



</div>
</div>

    </div></>
  )
}

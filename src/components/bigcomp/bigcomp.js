import React from 'react'
import './bigcomp.css'
import 'normalize.css';
import Timeline2 from '../timeline2/timeline2';
import Slicedtext from '../slicedtext/slicedtext';
export default function Bigcomp() {
  return (
    <div className='body3'>
      
     
   
      <section>
        {/* <h1>Sticky Bento.</h1>
        <div class="bleed-canvas">
          <img class="chopsticks" src="./images/card22bg.png" alt="" />
          <img class="bento"  src="./images/card22bg.png" alt="" />
          <img class="veribear" src="https://assets.codepen.io/605876/Veribear.svg" alt="" />
        </div> */}
      </section>

      <section >
    
      </section>
      <section className='w-[60vw] h-fit ml-[20vw] pointer-events-none  max-[600px]:mt-[10rem] ' >
        <h2 className='flex text-[#ffffff] justify-center  '><Slicedtext text="SKILLS"/></h2>
      </section>
      <section className='w-[60vw] relative z-[2] max-[600px]:w-[90vw]  ml-[20vw] pt-[4rem] pointer-events-none'>
        
<div className='w-[50%] timeline flex justify-center h-[60vh] text-[#d5d5d5] ml-[30vw] max-[600px]:ml-1  mt-[40vh] '><Timeline2/></div>

        <div class="sticky max-[600px]:hidden ">
          <img src="./images/laptop.png" alt="" />
        </div>
        <div class="box box--two">
          <div class="box__content">
            <p>
            
             
            </p>
          </div>
        </div>
      </section>





      <section>
        <div class="bento--mini twitterbg w-[27vw] max-[600px]:w-[34vw] max-[600px]:ml-[10vw] max-[600px]:mt-[8rem]  ml-[20vw]">
          <div>
            <svg
              class="bird"
              role="img"
              viewBox="-10 -5 60 60"
              xmlns="http://www.w3.org/2000/svg" 
            >
              <title>Twitter</title>
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </div>
          <div>
            <a href="https://www.instagram.com/piyushmehta2625/">
            <p className=' max-[600px]:text-[red] '>Instagram</p>
            </a>
          </div>
        </div>

        <div class="bento--mini twitterbg  w-[27vw] max-[600px]:mt-[8rem]  max-[600px]:w-[34vw] ml-[1vw]">
          <div>
            <svg
              class="bird"
              role="img"
              viewBox="-10 -5 60 60"
              xmlns="http://www.w3.org/2000/svg" 
            >
              <title>Twitter</title>
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/piyush-mehta-399b14277/">
             <p className=' max-[600px]:text-[red] '> Connect On Linkedin</p>
            </a>
          </div>
        </div>

      </section>






      <section className='pointer-events-none'>
        <div class="section__content w-[50vw] ml-[-30vw] ">
          <h2 className='text-[#959595] font-tea'>Designed and Developed by Piyush Mehta</h2>
          <svg
            aria-hidden="true"
            class="ml-6 w-1/4"
            stroke="var(--text-1)"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 271 209"
          >
            <title>Piyush</title>
            <path
              d="M144.745 123.82c1.907-1.258-3.266-2.199-4.184-2.418-4.076-.973-15.825-2.609-16.141 4.319-.725 15.907 36.347 5.736 16.072-3.986M102.952 112.797c-5.6848 0-6.2149 7.73-.728 7.12 6.139-.682 3.185-9.905-1.861-6.877M170.025 108.347c-1.398-2.796-7.244 2.284-4.531 6.23 2.713 3.946 8.442-.486 6.149-4.612-.608-1.094-3.096-2.133-4.288-1.537M117.998 100.704c0-9.5524-14.086-13.3378-21.4395-11.3323-11.7769 3.2119-15.927 9.6813-15.927 21.1333M187.183 101.246C182.107 82.5407 155.739 77.9455 151.5 99"
              stroke-width="5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M40.3725 26.8984C58.6558 41.1564 141.659 43.1867 128.248 5.48254c-.337-.94488-1.163-3.24224-2.31-3.47304-1.224-.24653-4.009 4.38498-4.311 4.81425C100.965 36.1863 95.2641 73.5992 74.5923 102.644c-10.8878 15.298-59.8032 43.034-69.03244 10.837C-17.5939 32.705 78.7483 76.0672 105.741 67.4678c14.016-4.4657 19.556-16.7853 27.09-28.3056 2.387-3.6496 4.797-14.5469 7.212-10.9155 4.728 7.1114-20.401 41.6294-24.484 50.2225-4.6 9.679 13.669-31.7231 21.237-24.1359 9.433 9.4564-8.56 28.4026 16.571 7.3471 4.267-3.5745 13.215-15.2775 7.666-14.8349-7.056.563-19.468 20.1743-9.348 23.1872 9.846 2.9308 24.354-31.3131 22.327-21.2426-1.003 4.9789-5.669 18.5794 1.966 20.1168 10.559 2.1259 15.596-33.041 21.559-24.071C240.356 109.24 81.7126 283.324 50.2184 167.261 25.2159 75.1229 240.563 89.2082 268.88 137.08"
              stroke-width="5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </section>
   

    </div>
  )
}

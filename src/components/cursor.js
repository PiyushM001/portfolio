"use client";
import React ,{useEffect,useRef,useState} from 'react'
import './cursor.css'
export default function Cursor() {
    // const cursorRef = useRef(null);
    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //       const { clientX, clientY } = event;
    //       const cursor = cursorRef.current;
    //       cursor.style.left = `${clientX}px`;
    //       cursor.style.top = `${clientY}px`;
    //     };
    
    //     document.addEventListener('mousemove', handleMouseMove);
    const [circles, setCircles] = useState([]);

    useEffect(() => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const newCircle = {
          id: circles.length,
          x: clientX,
          y: clientY,
        };
      
        setCircles((prevCircles) => [...prevCircles, newCircle]);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
    <>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="animated-cursor"
          style={{ left: `${circle.x}px`, top: `${circle.y}px` }}
        ></div>
      ))}
    </>
  )
}




// components/Cursor.js
// import { useEffect, useState } from 'react';
// import styles from './Cursor.module.css';

// const Cursor = () => {
//   const [circles, setCircles] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       const newCircle = {
//         id: circles.length,
//         x: clientX,
//         y: clientY,
//       };
//       setCircles((prevCircles) => [...prevCircles, newCircle]);
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [circles]);

//   return (
//     <>
//       <div className={styles.animatedCursor}></div>
//       {circles.map((circle) => (
//         <div
//           key={circle.id}
//           className={styles.circle}
//           style={{ left: `${circle.x}px`, top: `${circle.y}px` }}
//         ></div>
//       ))}
//     </>
//   );
// };

// export default Cursor;

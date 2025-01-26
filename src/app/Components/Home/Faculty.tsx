"use client";
import React from "react";
import { motion } from 'framer-motion'

type Direction = "left" | "right" | "up" | "down" | "none";
type TransitionType = "tween" | "spring" | "keyframes"; // Modify based on your needs

interface FadeInProps {
  direction: Direction;
  type: TransitionType;
  delay: number;
  duration: number;
}

export const fadeIn = ({ direction, type, delay = 0, duration = 1 }: FadeInProps) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};



export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <motion.div>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>Group Director</h1>
      <div className=" flex justify-center items-center">
      <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746" alt="Principal" width="600px" className='rounded'/>

      </div>

        <h3 className='sm:text-[18px] text-[14px] text-white tracking-wider font-bold text-center'> Group <span className='text-[#915eff]' >Director</span></h3>
        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>Dr.P.Santosh Kumar Patra</h2>
        <p className= "sm:text-[18px] text-[14px] text-white tracking-wider ">Dr.P.Santosh Kumar Patra , Principal of St.Martin &apos; s Engineering College is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence,Software Engineering , Data mining and warehousing & Wireless Networks.</p>
        <br />
        <br />
        <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>Faculty Advisor</h1>

        <div className=" flex justify-center items-center">
      <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/sss_z642MOd4G.jpg?updatedAt=1647509408608" alt="Principal" width="600px" className='rounded'/>

      </div>
              <h3 className='sm:text-[18px] text-[14px] text-white tracking-wider font-bold text-center'>Faculty <span className='text-[#915eff]' >Advisor</span></h3>
        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>E. Soumya</h2>
        <p className= "sm:text-[18px] text-[14px] text-white tracking-wider">E. Soumya , Faculty Advisor of TAM is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence,Software Engineering , Data mining and warehousing & Wireless Networks.</p>
        
      </motion.div>
      
    </div>
  );
}

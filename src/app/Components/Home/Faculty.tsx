"use client";
import React from "react";
import { motion } from 'framer-motion'

import Image from "next/image";
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


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <motion.div>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-yellow-50 to-yellow-400 bg-opacity-50 font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>Group Director</h1>
      <div className=" flex justify-center items-center">
      <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746" alt="Principal" width="600px" className='rounded'/>

      </div>

        <h3 className='sm:text-[18px] text-[14px] text-white tracking-wider font-bold text-center'> Board Of <span className='text-[#915eff]' >Director</span></h3>
        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'>Dr.P.Santosh Kumar Patra</h2>
        <p className= "sm:text-[18px] text-[14px] text-white tracking-wider ">Dr.P.Santosh Kumar Patra , Principal of St.Martin's Engineering College is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence,Software Engineering , Data mining and warehousing & Wireless Networks.</p>
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

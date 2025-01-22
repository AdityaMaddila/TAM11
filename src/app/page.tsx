'use client';
import Navbar from "@/app/Components/Navbar";
import Main from "@/app/Components/Home/Main";
import Overview from "@/app/Components/Home/Overview";
import Cards from "@/app/Components/Home/Cards";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import FAQ from "@/app/Components/Home/FAQ";
import {motion} from "framer-motion"
import { TracingBeam } from "./Components/ui/tracing-beam";
export default function Home() {
  return (
    
      <div style={{ fontFamily: 'Nasalization, sans-serif' }}>
        <Navbar />      
          {/* <Main /> */}
          {/* <TracingBeam className="px-6"> */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em]"
        />
          <Overview/>
          <Cards/>
          <Faculty />
          <FAQ />
          
        {/* </TracingBeam> */}
        
      </div>
    
  );
}

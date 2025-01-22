'use client';
import Navbar from "@/app/Components/Navbar";
import Main from "@/app/Components/Home/Main";
import Overview from "@/app/Components/Home/Overview";
import Cards from "@/app/Components/Home/Cards";
import Faculty from "@/app/Components/Home/Faculty"
import Footer from "@/app/Components/Home/Footer";
import Reviews from "@/app/Components/Home/Reviews";
import {motion} from "framer-motion"

export default function Home() {
  return (
    
      <div style={{ fontFamily: 'Nasalization, sans-serif' }}>
        <Navbar />      
          {/* <Main /> */}
          {/* <TracingBeam className="px-6"> */}
        
          <Overview/>
          <Cards/>
          <Faculty />
          <Reviews />
          {/* <FAQ /> */}
          <Footer />
          
        {/* </TracingBeam> */}
        
      </div>
    
  );
}

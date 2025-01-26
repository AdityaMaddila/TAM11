import React from "react";
import Contact from "@/app/Components/ContactUs/Contact";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import { Spotlight } from "../Components/ui/Spotlight";

export default function EventTimelinePage() {
  return (
    <div className="bg-black">
      <Navbar />
      
      <Spotlight />
      
        
          
          <Contact />
        
      
      <Footer />
      
    </div>
  );
}
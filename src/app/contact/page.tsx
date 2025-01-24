import React from "react";
import Contact from "@/app/Components/ContactUs/Contact";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import { Spotlight } from "../Components/ui/Spotlight";
import { BackgroundBeamsWithCollision } from "../Components/ui/background-beams-with-collision";

export default function EventTimelinePage() {
  return (
    <div className="bg-black">
      <Navbar />
      <Spotlight />
      <BackgroundBeamsWithCollision>
      <Contact />
      </BackgroundBeamsWithCollision>
      <Footer />
      
    </div>
  );
}
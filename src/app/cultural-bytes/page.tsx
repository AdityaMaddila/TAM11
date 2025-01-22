import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import CulturalBytes from "../Components/Events/CulturalBytes";


export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <CulturalBytes />
      <Footer />
    </div>
  );
}

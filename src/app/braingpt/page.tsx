import React from "react";
import BrainGpt from "@/app/Components/Events/BrainGpt";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <BrainGpt />
      <Footer />
    </div>
  );
}

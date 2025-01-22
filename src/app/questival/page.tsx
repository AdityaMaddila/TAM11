import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import Questival from "../Components/Events/Questival";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <Questival/>
      <Footer />
    </div>
  );
}

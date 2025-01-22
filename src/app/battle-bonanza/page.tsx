import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import BattleBonanza from "../Components/Events/BattleBonanza";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <BattleBonanza />
      <Footer />
    </div>
  );
}

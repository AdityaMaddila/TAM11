import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import WisdomWar from "../Components/Events/WisdomWar";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <WisdomWar/>
      <Footer />
    </div>
  );
}

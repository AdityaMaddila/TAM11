import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import ContentCrafters from "../Components/Events/ContentCrafters";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <ContentCrafters/>
      <Footer />
    </div>
  );
}

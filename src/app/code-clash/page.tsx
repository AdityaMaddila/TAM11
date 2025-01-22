import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";
import CodeClash from "../Components/Events/CodeClash";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar hideRegisterButton={true}/>
      <CodeClash/>
      <Footer />
    </div>
  );
}

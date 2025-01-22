import React from "react";
import Gallery from "@/app/Components/EventGallery/Gallery";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}
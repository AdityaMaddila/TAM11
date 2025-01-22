import React from "react";
import EventTimeline from "@/app/Components/Events/EventTimeline";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Home/Footer";

export default function EventTimelinePage() {
  return (
    <div>
      <Navbar />
      <EventTimeline />
      <Footer />
    </div>
  );
}

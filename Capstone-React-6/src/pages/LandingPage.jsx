// src/pages/LandingPage.js
import React from "react";
import Hero from "../sections/Hero";
import OurServices from "../sections/OurServices";
import ContactUs from "../sections/ContactUs";
import Testimoni from "../sections/Testimoni";
import WhyChooseUs from "../sections/WhyChooseUs";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <Testimoni />
      <ContactUs />
    </div>
  );
}

export default LandingPage;

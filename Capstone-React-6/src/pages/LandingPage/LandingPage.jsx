// src/pages/LandingPage.js
import React from "react";
import Hero from "../../sections/Hero";
import OurServices from "../../sections/OurServices";
// import ContactUs from "../../sections/ContactUs";
import Testimoni from "../../sections/Testimoni";
import WhyChooseUs from "../../sections/WhyChooseUs";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <Testimoni />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;

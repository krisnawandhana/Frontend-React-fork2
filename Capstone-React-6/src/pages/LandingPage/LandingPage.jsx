// src/pages/LandingPage.js
import React, { useState } from "react";
import Hero from "../../sections/Hero";
import OurServices from "../../sections/OurServices";
import Testimoni from "../../sections/Testimoni";
import WhyChooseUs from "../../sections/WhyChooseUs";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-white">
      <Navbar activeSection={activeSection} handleSetActive={handleSetActive} />
      <section id="home" className="bg-[#F2F9FF]">
        <Hero />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="about" className="bg-[#F2F9FF]">
        <WhyChooseUs />
      </section>
      <section id="community">
        <Testimoni />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;

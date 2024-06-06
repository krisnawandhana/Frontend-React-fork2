// src/pages/LandingPage.js
import React from "react";
import Hero from "../../sections/Hero";
import OurServices from "../../sections/OurServices";
import Testimoni from "../../sections/Testimoni";
import WhyChooseUs from "../../sections/WhyChooseUs";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="about">
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

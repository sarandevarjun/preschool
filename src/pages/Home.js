import React from "react";
import AboutContent from "../components/AboutContent";
import CallToAction from "../components/CallToAction";
import Classes from "../components/Classes";
import Team from "../components/Team";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Appointment from "../components/Appointment";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <>
      <Hero />
      <Facilities />
      <AboutContent />
      <CallToAction />
      <Classes />
      <Appointment />
      <Team />
      <Testimonial />
    </>
  );
};

export default Home;

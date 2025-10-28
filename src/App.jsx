import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import { FirstLook } from "./Components/landing/FirstLook";
// import OurGallery from "./Components/OurGallery";
import DemoGallery from "./Components/DemoGallery";
import ContactUsSection from "./Components/ContactUsSection";
import Footer from "./Components/Footer";
import React from "react";
import AboutUs from "./Components/AboutUs";
import ExperienceSection from "./Components/ExperienceSection";
import ExpertiseSection from "./Components/ExpertiseSection";
import ProjectsSection from "./Components/ProjectsSection";
import TrustedBy from "./Components/TrustedBy";
import TestimonialSection from "./Components/TestimonialSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden bg-[#f4f3ef]">
        <Navbar />
        <FirstLook />
        <div id="about" className="my-20">
          <div className="text-center ">
            <h3 className="text-center text-5xl  mb-3 ">About Us</h3>
            <p className="text-gray-600 mb-12 text-lg">
              Your Trusted Partner in Construction
            </p>
          </div>
          <div>
            <AboutUs />
          </div>
        </div>
        {/* Experience Section */}
        <div className="bg-[#f8f9fb] my-20">
          <ExperienceSection />
        </div>
        {/* ................. */}
        {/* Expertise Section */}
        <div>
          <ExpertiseSection />
        </div>
        {/* .................. */}
        <div>
          <section className="py-20 bg-[#f8f9fb]">
            <ProjectsSection />
          </section>
          <div className="bg-[#c44536] py-10">
            <TrustedBy />
          </div>
          <div>
            <TestimonialSection />
          </div>
        </div>
        {/* Gallery Section */}
        <section className="w-full bg-[#f8f9fb]  py-16 flex flex-col items-center">
          <h2 className="text-4xl font-semibold mb-3">Our Gallery</h2>
          <p className="text-gray-600 mb-12 text-lg">Work Speaks For Itself</p>
          <div style={{ width: "100vw", height: "100vh" }}>
            {/* <OurGallery /> */}
            <DemoGallery grayscale={0} />
          </div>
        </section>
        {/* Contact Us Section */}
        <ContactUsSection />
        {/* Footer Section */}
        <Footer />
      </div>{" "}
    </>
  );
}

export default App;

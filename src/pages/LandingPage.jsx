// src/pages/LandingPage.jsx
import React from "react";
import LandingNavbar from "../components/layout/LandingNavbar/Navbar";
import Footer from "../Components/layout/Footer";
import FirstLook from "../features/landing/hero/FirstLook";
import TextType from "../features/landing/hero/TextType";
import AboutUs from "../features/landing/about/AboutUs";
import ExperienceSection from "../features/landing/about/ExperienceSection";
import ExpertiseSection from "../features/landing/about/ExpertiseSection";
import TrustedBy from "../features/landing/about/TrustedBy";
import ProjectsSection from "../features/landing/projects/ProjectsSection";
import DemoGallery from "../features/landing/projects/DemoGallery";
import OurGallery from "../features/landing/projects/OurGallery";
import TestimonialSection from "../features/landing/testimonials/TestimonialSection";
import ContactUsSection from "../features/landing/contact/ContactUsSection";

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-[#f4f3ef]">
      <LandingNavbar />
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
    </div>
  );
}

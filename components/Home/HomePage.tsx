"use client";
import { useEffect } from "react";
import AboutSection from "../AboutSection/AboutSection";
import BlogSection from "../BlogSection/BlogSection";
import ContactSection from "../ContactSection/ContactSection";
import HeroSection from "../HeroSection/HeroSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
function HomePage() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

  return (
    <div className=" overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <SkillsSection />
      <ReviewsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;

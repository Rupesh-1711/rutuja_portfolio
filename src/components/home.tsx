import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ContentSections from "./ContentSections";

const Home = () => {
  // Function to handle smooth scrolling
  React.useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);
  return (
    <div className="bg-rovex-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ContentSections />
    </div>
  );
};

export default Home;

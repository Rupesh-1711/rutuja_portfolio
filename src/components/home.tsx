import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ContentSections from "./ContentSections";

const Home = () => {
  return (
    <div className="bg-rovex-black min-h-screen">
      <Navbar />
      <HeroSection />
      <ContentSections />
    </div>
  );
};

export default Home;

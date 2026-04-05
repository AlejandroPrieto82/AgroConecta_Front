import React from "react";
import HeroSection from "../../components/HomePage/HeroSection/HeroSection";
import CifrasSection from "../../components/HomePage/CifrasSection/CifrasSection";
import RazonesSection from "../../components/HomePage/RazonesSection/RazonesSection";
import ACSection from "../../components/HomePage/ACSection/ACSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CifrasSection />
      <RazonesSection />
      <ACSection />
    </main>
  );
};

export default HomePage;
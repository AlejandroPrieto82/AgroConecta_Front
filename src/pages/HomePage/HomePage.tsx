import React from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import CifrasSection from "./sections/CifrasSection/CifrasSection";
import RazonesSection from "./sections/RazonesSection/RazonesSection";
import ACSection from "./sections/ACSection/ACSection";

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
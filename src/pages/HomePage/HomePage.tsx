import React from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import CifrasSection from "./sections/CifrasSection/CifrasSection";
import RazonesSection from "./sections/RazonesSection/RazonesSection";
import ACSection from "./sections/ACSection/ACSection";
import CTASection from "./sections/CTASection/CTASection";

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CifrasSection />
      <RazonesSection />
      <ACSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
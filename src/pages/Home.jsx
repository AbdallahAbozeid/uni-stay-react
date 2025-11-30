import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedProperties from "../components/FeaturedProperties";
import BrowseCategories from "../components/BrowseCategories";
import HowItWorks from "../components/HowItWorks";
export default function Home() {
  useEffect(() => {
    //handles /#howitworks scrolling
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the leading '#' from the hash (e.g., becomes "how-it-works")
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Wait briefly in case of slight rendering delays
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };
    handleHashScroll();
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <BrowseCategories />
      <HowItWorks />
    </>
  );
}

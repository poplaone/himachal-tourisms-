
import { useEffect } from "react";
import BackgroundSlider from "../components/BackgroundSlider";
import HeroSection from "../components/HeroSection";
import ExperiencesSection from "../components/ExperiencesSection";
import DiscoverSection from "../components/DiscoverSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LeadFormSection from "../components/LeadFormSection";
import Footer from "../components/Footer";

const backgroundImages = [
  "https://images.pexels.com/photos/10968181/pexels-photo-10968181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13580424/pexels-photo-13580424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13580426/pexels-photo-13580426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Index = () => {
  // Page load animations
  useEffect(() => {
    // Fade in the body content
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in";
    
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
    
    return () => {
      document.body.style.opacity = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <BackgroundSlider images={backgroundImages} />
      
      <main className="relative">
        <HeroSection />
        <ExperiencesSection />
        <DiscoverSection />
        <TestimonialsSection />
        <LeadFormSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

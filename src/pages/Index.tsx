
import { useEffect } from "react";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ExperiencesSection from "../components/ExperiencesSection";
import DiscoverSection from "../components/DiscoverSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LeadFormSection from "../components/LeadFormSection";
import Footer from "../components/Footer";

const backgroundImages = [
  "https://images.unsplash.com/photo-1544815558-9f4329134004?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
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
      <Header />
      
      <main className="relative pt-16">
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

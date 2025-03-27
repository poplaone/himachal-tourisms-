
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ExperiencesSection from "../components/ExperiencesSection";
import DiscoverSection from "../components/DiscoverSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LeadFormSection from "../components/LeadFormSection";
import Footer from "../components/Footer";

// Add high-resolution images and prioritize loading
const backgroundImages = [
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop", // Deer in Himachal forest
  "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2070&auto=format&fit=crop", // Himachal mountains
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop", // River between mountains
];

// Preload the background images
const preloadImages = () => {
  backgroundImages.forEach(src => {
    const img = new Image();
    img.src = src;
    img.fetchPriority = "high";
  });
};

const Index = () => {
  useEffect(() => {
    // Start preloading images immediately
    preloadImages();
    
    // Make content visible immediately
    document.body.style.opacity = "1";
    
    return () => {
      document.body.style.opacity = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Himachal Tourism - Experience the Beauty of Devbhoomi</title>
        <meta name="description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages. From snow-capped mountains to ancient temples, explore the land of gods with professional guides and comfortable accommodations." />
        
        {/* Add preload link tags for critical resources with high priority */}
        {backgroundImages.map((img, index) => (
          <link key={index} rel="preload" href={img} as="image" fetchPriority="high" />
        ))}
      </Helmet>
      
      <BackgroundSlider images={backgroundImages} />
      <Header isHomePage={true} />
      
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

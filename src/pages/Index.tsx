
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ExperiencesSection from "../components/ExperiencesSection";
import DiscoverSection from "../components/DiscoverSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LeadFormSection from "../components/LeadFormSection";
import Footer from "../components/Footer";

// Add low-resolution placeholder versions for initial quick load
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
  });
};

const Index = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Start preloading images immediately
    preloadImages();
    
    // Fade in the body content more rapidly
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease-in";
    
    // Set a shorter timeout for initial visibility
    setTimeout(() => {
      document.body.style.opacity = "1";
      setPageLoaded(true);
    }, 50);
    
    return () => {
      document.body.style.opacity = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Himachal Tourism - Experience the Beauty of Devbhoomi</title>
        <meta name="description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages. From snow-capped mountains to ancient temples, explore the land of gods with professional guides and comfortable accommodations." />
        <meta name="keywords" content="Himachal tourism, Himachal tour packages, Manali tours, Shimla tours, Spiti Valley, Himachal adventure, mountain tours, Himachal Pradesh vacation" />
        <meta property="og:title" content="Himachal Tourism - Experience the Beauty of Devbhoomi" />
        <meta property="og:description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://himachaltourism.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1532452413971-c56d62db18ce?q=80&w=2070&auto=format&fit=crop" />
        
        {/* Add preload link tags for critical resources */}
        <link rel="preload" href={backgroundImages[0]} as="image" />
      </Helmet>
      
      <BackgroundSlider images={backgroundImages} />
      <Header isHomePage={true} />
      
      <main className={`relative pt-16 ${pageLoaded ? 'animate-fade-in' : ''}`}>
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


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

const backgroundImages = [
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop", // Deer in Himachal forest
  "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2070&auto=format&fit=crop", // Himachal mountains
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop", // River between mountains
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
      <Helmet>
        <title>Himachal Tourism - Experience the Beauty of Devbhoomi</title>
        <meta name="description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages. From snow-capped mountains to ancient temples, explore the land of gods with professional guides and comfortable accommodations." />
        <meta name="keywords" content="Himachal tourism, Himachal tour packages, Manali tours, Shimla tours, Spiti Valley, Himachal adventure, mountain tours, Himachal Pradesh vacation" />
        <meta property="og:title" content="Himachal Tourism - Experience the Beauty of Devbhoomi" />
        <meta property="og:description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://himachaltourism.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1532452413971-c56d62db18ce?q=80&w=2070&auto=format&fit=crop" />
      </Helmet>
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

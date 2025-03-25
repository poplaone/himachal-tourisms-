
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Himachal Tourism - Experience the Beauty of Devbhoomi</title>
        <meta name="description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages. From snow-capped mountains to ancient temples, explore the land of gods with professional guides and comfortable accommodations." />
        <meta name="keywords" content="Himachal tourism, Himachal tour packages, Manali tours, Shimla tours, Spiti Valley, Himachal adventure, mountain tours, Himachal Pradesh vacation" />
        <meta property="og:title" content="Himachal Tourism - Experience the Beauty of Devbhoomi" />
        <meta property="og:description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://himachaltourism.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1532452413971-c56d62db18ce?q=80&w=2070&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Himachal Tourism - Experience the Beauty of Devbhoomi" />
        <meta name="twitter:description" content="Discover the majestic beauty of Himachal Pradesh with our carefully curated tour packages." />
        <link rel="canonical" href="https://himachaltourism.com" />
      </Helmet>
      <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="relative z-10 text-center p-4 sm:p-6 w-full max-w-3xl mx-auto"
          style={{ opacity: 0, animation: 'fade-in 0.8s forwards ease-out' }}
        >
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 md:p-8 shadow-lg border border-white/20">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 tracking-tight"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              Discover Himachal's Magic
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the breathtaking beauty of Devbhoomi Himachal Pradesh, where every mountain tells a story and every valley holds a secret.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Link
                to="/explore"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-base"
                style={{ 
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                }}
              >
                Explore Packages
              </Link>
              
              <button
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-full border border-white/30 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
                onClick={scrollToForm}
                style={{ 
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                }}
              >
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 z-10 animate-bounce"
          style={{ animation: 'fade-in 1s forwards ease-out 1s, bounce 2s infinite' }}
        >
          <ChevronDown className="text-white opacity-70 w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

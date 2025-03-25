
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface Destination {
  id: string;
  title: string;
  description: string;
}

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("explore");
  
  const destinations: Destination[] = [
    {
      id: "explore",
      title: "Explore",
      description: "Embark on an extraordinary adventure in the heart of Himachal Pradesh.",
    },
    {
      id: "discover",
      title: "Discover",
      description: "Uncover ancient monasteries and breathtaking landscapes across Himachal.",
    },
    {
      id: "experience",
      title: "Experience",
      description: "Immerse yourself in the unique culture and traditions of Himachali life.",
    },
  ];

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div 
        className="relative z-10 text-center p-6 w-full max-w-3xl mx-auto"
        style={{ opacity: 0, animation: 'fade-in 0.8s forwards ease-out' }}
      >
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="flex justify-center mb-6 space-x-2">
            {destinations.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn px-4 py-2 rounded-full ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                    : "bg-white/20 hover:bg-white/30"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="header-content min-h-[160px] mb-8">
            {destinations.map((tab) => (
              <div
                key={tab.id}
                className={`header-tab-content ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ 
                  transform: activeTab === tab.id ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease'
                }}
              >
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                >
                  {activeTab === "explore" ? "Explore Himachal" : activeTab === "discover" ? "Discover Himachal" : "Experience Himachal"}
                </h1>
                <p className="text-xl md:text-2xl opacity-90">{tab.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/explore"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              style={{ 
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
              }}
            >
              Explore Packages
            </Link>
            
            <button
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full border border-white/30 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
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
  );
};

export default HeroSection;

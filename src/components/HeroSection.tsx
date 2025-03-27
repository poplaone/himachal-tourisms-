
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div 
        className="relative z-10 text-center p-4 sm:p-6 w-full max-w-3xl mx-auto md:mt-0 mt-[-180px]"
      >
        <div className="backdrop-blur-xl bg-white/15 rounded-2xl p-6 md:p-8 shadow-lg border border-white/20">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 md:mb-4 tracking-tight"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            Discover Himachal's Magic
          </h1>
          <p className="text-base md:text-xl opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Experience the breathtaking beauty of Devbhoomi Himachal Pradesh, where every mountain tells a story and every valley holds a secret.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              to="/explore"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm"
              style={{ 
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
              }}
            >
              Explore Packages
            </Link>
            
            <button
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full border border-white/30 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm"
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
      
      <div className="absolute bottom-10 z-10 animate-bounce">
        <ChevronDown className="text-white opacity-70 w-8 h-8" />
      </div>
    </div>
  );
};

export default HeroSection;

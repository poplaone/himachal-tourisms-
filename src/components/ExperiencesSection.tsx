
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import TourPackageCard from "./tours/TourPackageCard";
import { tourPackages } from "./tours/tourPackagesData";

const ExperiencesSection = () => {
  // Show only first 3 packages on the homepage
  const featuredPackages = tourPackages.slice(0, 3);

  // Function to scroll to top when clicking "View All Packages"
  const handleViewAllClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-16 text-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Himachal Tour Packages
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the beauty of Himachal Pradesh with our handcrafted tour packages designed to give you the perfect experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, index) => (
            <TourPackageCard
              key={pkg.id || index}
              id={pkg.id || `pkg-${index}`}
              title={pkg.title}
              duration={pkg.duration}
              batchPrice={pkg.batchPrice}
              batchShare={pkg.batchShare}
              batchPrice2={pkg.batchPrice2}
              batchShare2={pkg.batchShare2}
              privateTourPrices={pkg.privateTourPrices}
              privateTourLabel={pkg.privateTourLabel}
              batchLabel={pkg.batchLabel}
              inclusions={pkg.inclusions}
              exclusions={pkg.exclusions}
              image={pkg.image}
              delay={0.3 + index * 0.1}
              hasFlights={pkg.hasFlights}
              type={pkg.type}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/explore" 
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 border border-green-700/20"
            onClick={handleViewAllClick}
          >
            View All Packages <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;


import * as React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import TourPackageCard from "./tours/TourPackageCard";
import { tourPackages } from "./tours/tourPackagesData";

const ExperiencesSection = () => {
  return (
    <section className="py-16 md:py-24 text-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Spiti Valley Tour Packages
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg, index) => (
            <TourPackageCard
              key={index}
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
              delay={pkg.delay}
              hasFlights={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

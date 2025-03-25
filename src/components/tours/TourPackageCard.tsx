
import React from "react";
import { Plane, Hotel, Map, UtensilsCrossed, Car, Calendar, ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PackageFeatureIcon from "./PackageFeatureIcon";
import PriceTable from "./PriceTable";
import InclusionExclusionList from "./InclusionExclusionList";
import { TourPackageProps } from "./types";

const TourPackageCard = ({
  id,
  title,
  duration,
  batchPrice,
  batchShare,
  batchPrice2,
  batchShare2,
  privateTourPrices,
  privateTourLabel = "For Private Tour",
  batchLabel = "Fix Departure Batches",
  inclusions,
  exclusions,
  image,
  delay,
  hasFlights = false
}: TourPackageProps) => {
  const [nightsCount, daysCount] = duration.split(/Nights|Days/).filter(Boolean).map(s => s.trim());
  
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-lg overflow-hidden shadow-lg h-full" 
      style={{
        opacity: 0,
        animation: `fade-in 0.7s forwards ease-out ${delay}s`
      }}
    >
      <div className="h-48 overflow-hidden bg-gray-800/40 relative">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-0 w-full px-3">
          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex items-center mb-3 bg-white/5 px-2 py-1 rounded-md">
          <Calendar className="w-4 h-4 mr-2 text-amber-300" />
          <span className="text-sm text-white">Duration: <span className="text-amber-300 font-bold">{nightsCount}</span> Nights <span className="text-amber-300 font-bold">{daysCount}</span> Days</span>
        </div>
        
        {/* Features Icons */}
        <div className="grid grid-cols-5 gap-1 py-3 px-0 border-y border-white/10">
          <PackageFeatureIcon icon={Plane} title="Flight" active={hasFlights} />
          <PackageFeatureIcon icon={Hotel} title="Hotels" active={true} />
          <PackageFeatureIcon icon={Map} title="Sightseeing" active={true} />
          <PackageFeatureIcon icon={UtensilsCrossed} title="Meals" active={true} />
          <PackageFeatureIcon icon={Car} title="Transfers" active={true} />
        </div>
        
        {/* Batch Pricing */}
        {batchPrice && (
          <div className="mt-3">
            <h4 className="text-center bg-white/20 backdrop-blur-sm text-white text-sm font-semibold py-1">{batchLabel}</h4>
            <div className="grid grid-cols-2 gap-0">
              <div className="text-center py-2 px-1 border-r border-white/10">
                <div className="text-lg font-bold text-amber-300">{batchPrice}</div>
                {batchShare && <div className="text-xs text-gray-300">{batchShare}</div>}
              </div>
              {batchPrice2 ? (
                <div className="text-center py-2 px-1">
                  <div className="text-lg font-bold text-amber-300">{batchPrice2}</div>
                  {batchShare2 && <div className="text-xs text-gray-300">{batchShare2}</div>}
                </div>
              ) : (
                <div className="text-center py-2 px-1">
                  <div className="text-lg font-bold text-gray-400">-</div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Private Tour Pricing */}
        {privateTourPrices && (
          <PriceTable title={privateTourLabel} privateTourPrices={privateTourPrices} />
        )}
        
        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-2 gap-0 border border-white/10 mt-3">
          <InclusionExclusionList items={inclusions} type="inclusion" />
          <InclusionExclusionList items={exclusions} type="exclusion" />
        </div>
      </div>
      
      <div className="mt-auto p-3 pt-0 grid grid-cols-2 gap-2">
        <Link to={`/package/${id}`} className="flex items-center justify-center bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-2 rounded transition-all duration-300">
          <Info className="mr-1 w-4 h-4" /> Details
        </Link>
        <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded transition-all duration-300" variant="default">
          Enquiry <ArrowRight className="ml-1 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TourPackageCard;

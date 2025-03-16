
import * as React from "react";
import { Plane, Hotel, Map, UtensilsCrossed, Car, Calendar, Check, X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface TourPackageProps {
  title: string;
  duration: string;
  batchPrice?: string | null;
  batchShare?: string;
  batchPrice2?: string | null;
  batchShare2?: string;
  privateTourPrices?: {
    twoPersons: string;
    threePersons: string;
    fourPersons: string;
    fivePersons: string;
    tenPersons: string;
  } | null;
  inclusions: string[];
  exclusions: string[];
  image?: string;
  privateTourLabel?: string;
  batchLabel?: string;
  delay: number;
  hasFlights?: boolean;
}

const PackageFeatureIcon = ({
  icon: Icon,
  title,
  active = true
}: {
  icon: React.ElementType;
  title: string;
  active?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`p-2 rounded-full ${active ? 'bg-white/10' : 'bg-gray-500/20'} mb-1`}>
        <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-gray-400'}`} />
      </div>
      <span className={`text-xs font-medium ${active ? 'text-white' : 'text-gray-400'}`}>{title}</span>
    </div>
  );
};

const PriceTable = ({
  title,
  privateTourPrices
}: {
  title: string;
  privateTourPrices: TourPackageProps['privateTourPrices'];
}) => {
  if (!privateTourPrices) return null;
  
  const isOnDemand = privateTourPrices.twoPersons === "On Demand Only";
  
  return (
    <div className="mt-3 mb-5">
      <h4 className="text-center bg-white/20 text-white text-sm font-semibold py-1 mb-0 backdrop-blur-sm">{title}</h4>
      {isOnDemand ? (
        <div className="bg-black/20 text-center py-2 text-white">
          On Demand Only
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-5 gap-0 text-center bg-black/30">
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">02 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">03 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">04 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">05 Pax</div>
            <div className="bg-white/10 text-[10px] md:text-xs py-1 text-white font-medium">10/10+ Pax</div>
            
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.twoPersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.threePersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.fourPersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200 border-r border-white/10">{privateTourPrices.fivePersons}</div>
            <div className="text-[10px] md:text-xs py-1 font-medium text-amber-200">{privateTourPrices.tenPersons}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const InclusionExclusionList = ({
  items,
  type
}: {
  items: string[];
  type: "inclusion" | "exclusion";
}) => {
  return (
    <div className={`${type === "inclusion" ? "border-r border-white/10" : ""}`}>
      <h4 className={`text-sm font-bold text-white text-center py-1 ${type === "inclusion" ? "bg-emerald-500/60" : "bg-rose-500/60"} backdrop-blur-sm`}>
        {type === "inclusion" ? "Inclusion" : "Exclusion"}
      </h4>
      <ul className="space-y-1 p-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-[11px] md:text-xs">
            {type === "inclusion" ? 
              <Check className="w-3 h-3 mr-1 text-emerald-400 mt-0.5 flex-shrink-0" /> : 
              <X className="w-3 h-3 mr-1 text-rose-400 mt-0.5 flex-shrink-0" />
            }
            <span className="text-gray-200">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TourPackageCard = ({
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
      
      <div className="mt-auto p-3 pt-0">
        <Button className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold py-3 px-4 rounded transition-all duration-300" variant="default">
          Send Enquiry <ArrowRight className="ml-1 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

const ExperiencesSection = () => {
  const tourPackages = [
    // 1. Unexplored Spiti Valley (Whole Circuit)
    {
      title: "Unexplored Spiti Valley (Whole Circuit)",
      duration: "7 Nights 8 Days",
      batchPrice: "20,900/-",
      batchShare: "(Double Sharing)",
      batchPrice2: "18,900/-",
      batchShare2: "(Triple Sharing)",
      privateTourPrices: {
        twoPersons: "29,500/-\npp",
        threePersons: "22,900/-\npp",
        fourPersons: "21,500/-\npp",
        fivePersons: "20,999/-\npp",
        tenPersons: "20,900/-\npp"
      },
      inclusions: ["Pick/Drop Chandigarh", "Ertiga/ Innova Cab", "07 nights Stay", "07 Dinners+ 7 Breakfasts", "All Sightseeing by Cab", "Attached Washrooms"],
      exclusions: ["Flights/Trains", "Lunch", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1535440216424-0e57d61c1d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.1
    },
    // 2. Royal Spiti Valley
    {
      title: "Royal Spiti Valley (Whole Circuit)",
      duration: "8 Nights 9 Days",
      batchPrice: "On Demand",
      batchPrice2: "On Demand",
      privateTourPrices: {
        twoPersons: "47,700/-\npp",
        threePersons: "35,900/-\npp",
        fourPersons: "33,900/-\npp",
        fivePersons: "29,900/-\npp",
        tenPersons: "30,600/-\npp"
      },
      inclusions: ["Pick/Drop Chandigarh", "Innova Crysta", "08 Nights Luxury Stays", "08 Dinners+ 8 Breakfasts", "All Sightseeing by Cab", "Attached Washrooms"],
      exclusions: ["Flights/Trains", "Lunch", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1623207292868-3a9ce80c3647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.2
    },
    // 3. Spiti Valley By Your Own Car
    {
      title: "Spiti Valley By Your Own Car",
      duration: "9 Nights 10 Days",
      batchPrice: "15,000/-",
      batchShare: "(Double Sharing)",
      batchPrice2: "14,000/-",
      batchShare2: "(Triple Sharing)",
      batchLabel: "Private Tours By Own Cab",
      privateTourLabel: "Big Groups / Convoys",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only"
      },
      inclusions: ["9 nights Stays", "Attatched Washrooms", "09 Dinners+ 9 Breakfasts", "All Sightseeing Assistance"],
      exclusions: ["Flights/Trains", "Lunch", "Cab and Fuel", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1626342194149-749e97267173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.3
    },
    // 4. Winter White Spiti
    {
      title: "Winter White Spiti",
      duration: "6 Nights 7 Days",
      batchPrice: "17,900/-",
      batchShare: "Per Pax",
      privateTourPrices: {
        twoPersons: "34,200/-\npp",
        threePersons: "26,300/-\npp",
        fourPersons: "22,300/-\npp",
        fivePersons: "19,800/-\npp",
        tenPersons: "17,900/-\npp"
      },
      inclusions: ["Pick/Drop Shimla", "Tempo/Innova (with chains)", "06 Nights Stays", "06 Dinners+ 6 Breakfasts", "All Sightseeing by Cab", "oxygen Cylinder", "Tour Manager"],
      exclusions: ["Flights/Trains", "Adventure Activities", "Attatched Washrooms", "Running Water", "Room Heater", "Lunch", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.4
    },
    // 5. Snow Leopard Expedition
    {
      title: "Snow Leopard Expedition (Winter Special)",
      duration: "9 Nights 10 Days",
      batchPrice: "42,500/-",
      batchShare: "Per Pax",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only"
      },
      inclusions: ["Pick/Drop Shimla", "Tempo Traveller", "4*4 At Kaza and Local", "Team Leader", "Local Guide For Spotting", "oxygen Cylinder", "09 Nights Stays", "09 Dinners+ 9 Breakfasts", "All Sightseeing by Cab", "4 Lunches"],
      exclusions: ["Flights/Trains", "Adventure Activities", "Porters To carry", "Equipments", "Cost Due To Medical Emergency", "Lunch", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1618428304997-f89fd1ebcf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      delay: 0.5
    },
    // 6. Lahul Spiti Bike Tour
    {
      title: "Lahul Spiti Bike Tour (Whole Circuit)",
      duration: "7 Nights 8 Days",
      batchPrice: "32,900/-",
      batchShare: "(Solo Rider)",
      batchPrice2: "26,300/-",
      batchShare2: "(Rider +Pillion)",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only"
      },
      inclusions: ["Pick/Drop Chandigarh", "Bikes With Helmet", "Backup Cab", "Mechanic", "07 Nights Stays", "07 Dinners+ 7 Breakfasts", "All Sightseeing by Cab", "Attached Washrooms", "Room On Double Sharing", "Team Caption", "oxygen Cylinder", "Walkie Talkies"],
      exclusions: ["Fuel", "Spare Parts If Used", "Flights/Trains", "Lunch", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1676634792510-7a376cb6e9a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.6
    },
    // 7. Women Only Spiti Trip
    {
      title: "Women Only Spiti Trip (Whole Circuit)",
      duration: "7 Nights 8 Days",
      batchPrice: "20,900/-",
      batchShare: "(Double Sharing)",
      batchPrice2: "18,900/-",
      batchShare2: "(Triple Sharing)",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only"
      },
      inclusions: ["Pick/Drop Chandigarh", "Tempo Traveller", "Team Leader", "oxygen Cylinder", "07 Nights Stays", "07 Dinners+ 7 Breakfasts", "All Sightseeing by Cab", "Attached Washrooms"],
      exclusions: ["Flights/Trains", "Lunch", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.7
    },
    // 8. Buddhist and Tribal Circuit
    {
      title: "Buddhist and Tribal Circuit (Whole Circuit)",
      duration: "9 Nights 10 Days",
      batchPrice: "25,900/-",
      batchShare: "(Double Sharing)",
      batchPrice2: "23,900/-",
      batchShare2: "(Triple Sharing)",
      privateTourPrices: {
        twoPersons: "37,500/-\npp",
        threePersons: "28,900/-\npp",
        fourPersons: "26,900/-\npp",
        fivePersons: "23,350/-\npp",
        tenPersons: "25,900/-\npp"
      },
      inclusions: ["Pick/Drop Chandigarh", "Erctica/Innova", "09 Nights Stays", "09 Dinners+ 9 Breakfasts", "All Sightseeing by Cab", "Attached Washrooms"],
      exclusions: ["Flights/Trains", "Lunch", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1527905635728-fb6a0301853f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      delay: 0.8
    },
    // 9. Unexplored Spiti (6 Nights)
    {
      title: "Unexplored Spiti (Whole Circuit)",
      duration: "6 Nights 7 Days",
      batchPrice: "18,900/-",
      batchShare: "(Double Sharing)",
      batchPrice2: "16,900/-",
      batchShare2: "(Triple Sharing)",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only"
      },
      inclusions: ["Pick/Drop Chandigarh", "Tempo Traveller", "Team Leader", "oxygen Cylinder", "06 Nights Stays", "06 Dinners+ 6 Breakfasts", "All Sightseeing by Cab", "Attached Washrooms"],
      exclusions: ["Flights/Trains", "Lunch", "Adventure Activities", "Tips", "GST"],
      image: "https://images.unsplash.com/photo-1511410048498-5e79f395342e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      delay: 0.9
    },
  ];
  
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

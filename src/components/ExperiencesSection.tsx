
import * as React from "react";
import { 
  Plane, 
  Hotel, 
  Map, 
  UtensilsCrossed, 
  Car, 
  Calendar, 
  Check, 
  X, 
  ArrowRight 
} from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface TourPackageProps {
  title: string;
  duration: string;
  batchPrice?: string;
  batchShare?: string;
  privateTourPrices: {
    twoPersons: string;
    threePersons: string;
    fourPersons: string;
    fivePersons: string;
    tenPersons: string;
  };
  inclusions: string[];
  exclusions: string[];
  image?: string;
  customPricing?: {
    title: string;
    price: string;
    sharing?: string;
    title2?: string;
    price2?: string;
    sharing2?: string;
  };
  delay: number;
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
      <div className={`p-2 rounded-full ${active ? 'bg-purple-500/20' : 'bg-gray-500/20'} mb-1`}>
        <Icon className={`w-5 h-5 ${active ? 'text-purple-400' : 'text-gray-400'}`} />
      </div>
      <span className="text-xs font-medium text-gray-300">{title}</span>
    </div>
  );
};

const PriceTable = ({ 
  title, 
  privateTourPrices 
}: { 
  title: string; 
  privateTourPrices: TourPackageProps['privateTourPrices'] 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mt-3 mb-5">
      <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
      <div className="grid grid-cols-5 gap-1 text-center bg-black/20 rounded-lg overflow-hidden">
        <div className="bg-purple-900/40 text-[10px] md:text-xs py-1">02 Pax</div>
        <div className="bg-purple-900/40 text-[10px] md:text-xs py-1">03 Pax</div>
        <div className="bg-purple-900/40 text-[10px] md:text-xs py-1">04 Pax</div>
        <div className="bg-purple-900/40 text-[10px] md:text-xs py-1">05 Pax</div>
        <div className="bg-purple-900/40 text-[10px] md:text-xs py-1">10+ Pax</div>
        
        <div className="text-[10px] md:text-xs py-1 font-medium text-yellow-300">{privateTourPrices.twoPersons}</div>
        <div className="text-[10px] md:text-xs py-1 font-medium text-yellow-300">{privateTourPrices.threePersons}</div>
        <div className="text-[10px] md:text-xs py-1 font-medium text-yellow-300">{privateTourPrices.fourPersons}</div>
        <div className="text-[10px] md:text-xs py-1 font-medium text-yellow-300">{privateTourPrices.fivePersons}</div>
        <div className="text-[10px] md:text-xs py-1 font-medium text-yellow-300">{privateTourPrices.tenPersons}</div>
      </div>
    </div>
  );
};

const InclusionExclusionList = ({ 
  items, 
  type 
}: { 
  items: string[]; 
  type: "inclusion" | "exclusion" 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-3">
      <h4 className="text-sm font-semibold text-white mb-1">
        {type === "inclusion" ? "Inclusion" : "Exclusion"}
      </h4>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-[11px] md:text-xs">
            {type === "inclusion" ? (
              <Check className="w-3 h-3 mr-1 text-green-400 mt-0.5 flex-shrink-0" />
            ) : (
              <X className="w-3 h-3 mr-1 text-red-400 mt-0.5 flex-shrink-0" />
            )}
            <span className="text-gray-300">{item}</span>
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
  privateTourPrices,
  inclusions,
  exclusions,
  image,
  customPricing,
  delay,
}: TourPackageProps) => {
  return (
    <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/50 border-gray-700/30 backdrop-blur-sm overflow-hidden h-full text-white"
      style={{ 
        opacity: 0, 
        animation: `fade-in 0.7s forwards ease-out ${delay}s`,
      }}
    >
      <div className="h-48 overflow-hidden bg-gray-800/40">
        {/* Image placeholder - will be added later */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-indigo-900/20">
          <span className="text-sm text-gray-400">Image Coming Soon</span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg md:text-xl text-white">{title}</CardTitle>
        <CardDescription className="flex items-center text-gray-300">
          <Calendar className="w-4 h-4 mr-1 text-purple-400" />
          <span>{duration}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 pt-0">
        {/* Features Icons */}
        <div className="grid grid-cols-5 gap-1 py-3 px-0 border-y border-white/10">
          <PackageFeatureIcon icon={Plane} title="Flight" active={false} />
          <PackageFeatureIcon icon={Hotel} title="Hotels" active={true} />
          <PackageFeatureIcon icon={Map} title="Sightseeing" active={true} />
          <PackageFeatureIcon icon={UtensilsCrossed} title="Meals" active={true} />
          <PackageFeatureIcon icon={Car} title="Transfers" active={true} />
        </div>
        
        {/* Pricing */}
        {batchPrice && (
          <div className="flex flex-col items-center text-center bg-purple-900/20 rounded-lg p-2 mb-3">
            <h3 className="text-sm font-semibold mb-1">Fix Departure Batches</h3>
            <span className="text-xl font-bold text-yellow-300">{batchPrice}</span>
            {batchShare && <span className="text-xs text-gray-300">{batchShare}</span>}
          </div>
        )}
        
        {customPricing && (
          <div className="flex justify-between gap-2 mb-3">
            <div className="flex-1 bg-purple-900/20 p-2 rounded-lg text-center">
              <h4 className="text-sm font-semibold">{customPricing.title}</h4>
              <div className="text-lg font-bold text-yellow-300">{customPricing.price}</div>
              {customPricing.sharing && (
                <div className="text-xs text-gray-300">{customPricing.sharing}</div>
              )}
            </div>
            
            {customPricing.title2 && (
              <div className="flex-1 bg-purple-900/20 p-2 rounded-lg text-center">
                <h4 className="text-sm font-semibold">{customPricing.title2}</h4>
                <div className="text-lg font-bold text-yellow-300">{customPricing.price2}</div>
                {customPricing.sharing2 && (
                  <div className="text-xs text-gray-300">{customPricing.sharing2}</div>
                )}
              </div>
            )}
          </div>
        )}
        
        {/* Private Tour Pricing */}
        {privateTourPrices && privateTourPrices.twoPersons !== "On Demand Only" && (
          <PriceTable title="For Private Tour" privateTourPrices={privateTourPrices} />
        )}
        
        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <InclusionExclusionList items={inclusions} type="inclusion" />
          </div>
          <div className="col-span-1">
            <InclusionExclusionList items={exclusions} type="exclusion" />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="default" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          Book Now <ArrowRight className="ml-1 w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ExperiencesSection = () => {
  const tourPackages = [
    {
      title: "Unexplored Spiti Valley",
      duration: "7 Nights 8 Days",
      batchPrice: "20,900/-",
      batchShare: "(Double Sharing)",
      privateTourPrices: {
        twoPersons: "29,500/-\npp",
        threePersons: "22,900/-\npp",
        fourPersons: "21,500/-\npp",
        fivePersons: "20,999/-\npp",
        tenPersons: "20,900/-\npp",
      },
      inclusions: [
        "Pick/Drop Chandigarh",
        "Ertiga/ Innova Cab",
        "07 nights Stay",
        "07 Dinners+ 7 Breakfasts",
        "All Sightseeing by Cab",
        "Attached Washrooms",
      ],
      exclusions: [
        "Flights/Trains",
        "Lunch",
        "Adventure Activities",
        "Tips",
        "GST",
      ],
      customPricing: {
        title: "Double Sharing",
        price: "20,900/-",
        title2: "Triple Sharing",
        price2: "18,900/-",
      },
      delay: 0.1,
    },
    {
      title: "Royal Spiti Valley",
      duration: "8 Nights 9 Days",
      batchPrice: "On Demand",
      privateTourPrices: {
        twoPersons: "47,700/-\npp",
        threePersons: "35,900/-\npp",
        fourPersons: "33,900/-\npp",
        fivePersons: "29,900/-\npp",
        tenPersons: "30,600/-\npp",
      },
      inclusions: [
        "Pick/Drop Chandigarh",
        "Innova Crysta",
        "08 Nights Luxury Stays",
        "08 Dinners+ 8 Breakfasts",
        "All Sightseeing by Cab",
        "Attached Washrooms",
      ],
      exclusions: [
        "Flights/Trains",
        "Lunch",
        "Adventure Activities",
        "Tips",
        "GST",
      ],
      delay: 0.2,
    },
    {
      title: "Spiti Valley By Your Own Car",
      duration: "9 Nights 10 Days",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only",
      },
      inclusions: [
        "9 nights Stays",
        "Attatched Washrooms",
        "09 Dinners+ 9 Breakfasts",
        "All Sightseeing Assistance",
      ],
      exclusions: [
        "Flights/Trains",
        "Lunch",
        "Cab and Fuel",
        "Adventure Activities",
        "Tips",
        "GST",
      ],
      customPricing: {
        title: "Double Sharing",
        price: "15,000/-",
        title2: "Triple Sharing",
        price2: "14,000/-",
      },
      delay: 0.3,
    },
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
        tenPersons: "17,900/-\npp",
      },
      inclusions: [
        "Pick/Drop Shimla",
        "Tempo/Innova (with chains)",
        "06 Nights Stays",
        "06 Dinners+ 6 Breakfasts",
        "All Sightseeing by Cab",
        "oxygen Cylinder",
        "Tour Manager",
      ],
      exclusions: [
        "Flights/Trains",
        "Adventure Activities",
        "Attatched Washrooms",
        "Running Water",
        "Room Heater",
        "Lunch",
        "Tips",
        "GST",
      ],
      delay: 0.4,
    },
    {
      title: "Snow Leopard Expedition",
      duration: "9 Nights 10 Days",
      batchPrice: "42,500/-",
      batchShare: "Per Pax",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only",
      },
      inclusions: [
        "Pick/Drop Shimla",
        "Tempo Traveller",
        "4*4 At Kaza and Local",
        "Team Leader",
        "Local Guide For Spotting",
        "oxygen Cylinder",
        "09 Nights Stays",
        "09 Dinners+ 9 Breakfasts",
        "All Sightseeing by Cab",
        "4 Lunches",
      ],
      exclusions: [
        "Flights/Trains",
        "Adventure Activities",
        "Porters To carry",
        "Equipments",
        "Cost Due To Medical Emergency",
        "Lunch",
        "Tips",
        "GST",
      ],
      delay: 0.5,
    },
    {
      title: "Lahul Spiti Bike Tour",
      duration: "7 Nights 8 Days",
      privateTourPrices: {
        twoPersons: "On Demand Only",
        threePersons: "On Demand Only",
        fourPersons: "On Demand Only",
        fivePersons: "On Demand Only",
        tenPersons: "On Demand Only",
      },
      inclusions: [
        "Pick/Drop Chandigarh",
        "Bikes With Helmet",
        "Backup Cab",
        "Mechanic",
        "07 Nights Stays",
        "07 Dinners+ 7 Breakfasts",
        "All Sightseeing by Cab",
        "Attached Washrooms",
        "Room On Double Sharing",
        "Team Caption",
        "oxygen Cylinder",
        "Walkie Talkies",
      ],
      exclusions: [
        "Fuel",
        "Spare Parts If Used",
        "Flights/Trains",
        "Lunch",
        "Adventure Activities",
        "Tips",
        "GST",
      ],
      customPricing: {
        title: "Solo Rider",
        price: "32,900/-",
        title2: "Rider + Pillion",
        price2: "26,300/-",
      },
      delay: 0.6,
    },
  ];

  return (
    <section className="py-16 md:py-24 text-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10">
          <div className="text-center mb-12" style={{ opacity: 0, animation: 'fade-in 0.6s forwards ease-out' }}>
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mb-4">
              TOUR PACKAGES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
              Explore Spiti Valley Tours
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <TourPackageCard
                key={index}
                title={pkg.title}
                duration={pkg.duration}
                batchPrice={pkg.batchPrice}
                batchShare={pkg.batchShare}
                privateTourPrices={pkg.privateTourPrices}
                inclusions={pkg.inclusions}
                exclusions={pkg.exclusions}
                customPricing={pkg.customPricing}
                delay={pkg.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

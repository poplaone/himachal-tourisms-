
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Check, 
  X, 
  ChevronRight, 
  ArrowLeft,
  Plane,
  Hotel,
  UtensilsCrossed,
  Car,
  Map
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { tourPackages } from "../components/tours/tourPackagesData";
import { TourPackageProps } from "../components/tours/types";
import PackageFeatureIcon from "../components/tours/PackageFeatureIcon";
import { Button } from "@/components/ui/button";

const PackageDetail = () => {
  const { id } = useParams();
  const [tourPackage, setTourPackage] = useState<TourPackageProps | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading the package data
    setLoading(true);
    const foundPackage = tourPackages.find(pkg => pkg.id === id);
    
    if (foundPackage) {
      setTourPackage(foundPackage);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!tourPackage) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="container mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
          <p className="mb-8">The tour package you're looking for doesn't exist or has been removed.</p>
          <Link to="/explore" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
            Back to Packages
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const [nightsCount, daysCount] = tourPackage.duration.split(/Nights|Days/).filter(Boolean).map(s => s.trim());

  // Dummy itinerary if not provided
  const itinerary = tourPackage.itinerary || [
    { day: "Day 1", title: "Arrival", description: "Arrive at the destination and check-in to your hotel. Rest and acclimatize. Welcome dinner in the evening." },
    { day: "Day 2", title: "Local Sightseeing", description: "After breakfast, explore the local attractions. Visit popular spots and enjoy local cuisine for lunch. Evening at leisure." },
    { day: "Day 3", title: "Adventure Day", description: "Full day of adventure activities. Trek to nearby viewpoints and experience the local culture. Bonfire and dinner in the evening." },
    { day: "Day 4", title: "Village Experience", description: "Visit nearby villages and interact with locals. Learn about their traditions and lifestyle. Enjoy authentic local food." },
    { day: "Day 5", title: "Departure", description: "After breakfast, check-out from the hotel. Transfer to the airport/railway station for your onward journey." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tourPackage.image || 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop'})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-8">
          <Link to="/explore" className="inline-flex items-center text-amber-300 hover:text-amber-400 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Packages
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{tourPackage.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-amber-300" />
              <span>{tourPackage.duration}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-amber-300" />
              <span>Best Time: April-June, Sept-Oct</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-amber-300" />
              <span>Himachal Pradesh</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-amber-300" />
              <span>Min 2 People</span>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-amber-300">Tour Overview</h2>
              <p className="text-gray-300 mb-6">
                {tourPackage.description || 
                `Experience the magic of ${tourPackage.title} with our perfectly crafted itinerary. 
                This ${tourPackage.duration} package takes you through the most scenic landscapes, 
                cultural hotspots, and adventurous trails of Himachal Pradesh. Whether you're a nature lover, 
                adventure enthusiast, or a cultural explorer, this tour has something special for everyone.`}
              </p>
              
              <div className="grid grid-cols-5 gap-4 py-4 border-t border-b border-white/10">
                <PackageFeatureIcon icon={Plane} title="Flight" active={tourPackage.hasFlights} />
                <PackageFeatureIcon icon={Hotel} title="Hotels" active={true} />
                <PackageFeatureIcon icon={Map} title="Sightseeing" active={true} />
                <PackageFeatureIcon icon={UtensilsCrossed} title="Meals" active={true} />
                <PackageFeatureIcon icon={Car} title="Transfers" active={true} />
              </div>
            </div>
            
            {/* Itinerary */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-amber-300">Tour Itinerary</h2>
              
              <div className="space-y-6">
                {itinerary.map((day, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-amber-500 last:border-l-0">
                    <div className="absolute top-0 left-0 w-4 h-4 -translate-x-[9px] rounded-full bg-amber-500"></div>
                    <h3 className="font-bold text-xl text-white mb-1">{day.day}: {day.title}</h3>
                    <p className="text-gray-300">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                  <Check className="w-5 h-5 mr-2" /> Inclusions
                </h2>
                <ul className="space-y-2">
                  {tourPackage.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-red-400 flex items-center">
                  <X className="w-5 h-5 mr-2" /> Exclusions
                </h2>
                <ul className="space-y-2">
                  {tourPackage.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-4 text-center">Tour Price</h2>
              
              {/* Fixed Departure Price */}
              {tourPackage.batchPrice && (
                <div className="mb-6">
                  <h3 className="bg-amber-500/20 text-center py-2 text-amber-300 font-semibold rounded-t-lg">
                    {tourPackage.batchLabel || "Fixed Departure Batches"}
                  </h3>
                  <div className="grid grid-cols-2 border-x border-b border-white/10 rounded-b-lg overflow-hidden">
                    <div className="text-center p-3 border-r border-white/10 bg-white/5">
                      <div className="text-xl font-bold text-amber-300">{tourPackage.batchPrice}</div>
                      <div className="text-xs text-gray-400">{tourPackage.batchShare}</div>
                    </div>
                    <div className="text-center p-3 bg-white/5">
                      <div className="text-xl font-bold text-amber-300">{tourPackage.batchPrice2 || "-"}</div>
                      <div className="text-xs text-gray-400">{tourPackage.batchShare2 || ""}</div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Private Tour Price */}
              {tourPackage.privateTourPrices && (
                <div className="mb-6">
                  <h3 className="bg-purple-500/20 text-center py-2 text-purple-300 font-semibold rounded-t-lg">
                    {tourPackage.privateTourLabel || "For Private Tour"}
                  </h3>
                  <div className="divide-y divide-white/10 border-x border-b border-white/10 rounded-b-lg overflow-hidden">
                    <div className="grid grid-cols-2 p-2 bg-white/5">
                      <div className="text-gray-300">2 Persons</div>
                      <div className="text-right font-semibold text-purple-300">{tourPackage.privateTourPrices.twoPersons}</div>
                    </div>
                    <div className="grid grid-cols-2 p-2 bg-white/5">
                      <div className="text-gray-300">3 Persons</div>
                      <div className="text-right font-semibold text-purple-300">{tourPackage.privateTourPrices.threePersons}</div>
                    </div>
                    <div className="grid grid-cols-2 p-2 bg-white/5">
                      <div className="text-gray-300">4 Persons</div>
                      <div className="text-right font-semibold text-purple-300">{tourPackage.privateTourPrices.fourPersons}</div>
                    </div>
                    <div className="grid grid-cols-2 p-2 bg-white/5">
                      <div className="text-gray-300">5 Persons</div>
                      <div className="text-right font-semibold text-purple-300">{tourPackage.privateTourPrices.fivePersons}</div>
                    </div>
                    <div className="grid grid-cols-2 p-2 bg-white/5">
                      <div className="text-gray-300">10 Persons</div>
                      <div className="text-right font-semibold text-purple-300">{tourPackage.privateTourPrices.tenPersons}</div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 font-bold text-white py-3">
                  Send Enquiry
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 font-semibold text-white py-3">
                  Download Itinerary
                </Button>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-400">
                Not what you're looking for?<br/>
                <Link to="/explore" className="text-amber-300 hover:text-amber-400 transition-colors">
                  View All Packages <ChevronRight className="inline-block w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;

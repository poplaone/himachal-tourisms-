import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundSlider from "../components/BackgroundSlider";
import TourPackageCard from "../components/tours/TourPackageCard";
import { tourPackages } from "../components/tours/tourPackagesData";
const backgroundImages = ["https://images.unsplash.com/photo-1544815558-9f4329134004?q=80&w=2071&auto=format&fit=crop", "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?q=80&w=2070&auto=format&fit=crop", "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop"];
const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState<'fixed' | 'custom'>('fixed');
  const [filteredPackages, setFilteredPackages] = useState(tourPackages);
  useEffect(() => {
    // Filter packages based on the active tab
    if (activeTab === 'fixed') {
      setFilteredPackages(tourPackages.filter(pkg => pkg.type !== 'custom'));
    } else {
      setFilteredPackages(tourPackages.filter(pkg => pkg.type === 'custom'));
    }
  }, [activeTab]);
  return <div className="min-h-screen font-sans overflow-x-hidden">
      <BackgroundSlider images={backgroundImages} />
      <Header />
      
      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          

          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-xl bg-white/10 rounded-full p-1 shadow-lg border border-white/20 inline-flex">
              <button onClick={() => setActiveTab('fixed')} className={`px-6 py-3 rounded-full text-white font-medium transition-all ${activeTab === 'fixed' ? 'bg-gradient-to-r from-amber-500 to-amber-600 shadow-md' : 'hover:bg-white/10'}`}>
                Fixed Departure
              </button>
              <button onClick={() => setActiveTab('custom')} className={`px-6 py-3 rounded-full text-white font-medium transition-all ${activeTab === 'custom' ? 'bg-gradient-to-r from-amber-500 to-amber-600 shadow-md' : 'hover:bg-white/10'}`}>
                Customized Tours
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => <TourPackageCard key={pkg.id || index} id={pkg.id || `pkg-${index}`} title={pkg.title} duration={pkg.duration} batchPrice={pkg.batchPrice} batchShare={pkg.batchShare} batchPrice2={pkg.batchPrice2} batchShare2={pkg.batchShare2} privateTourPrices={pkg.privateTourPrices} privateTourLabel={pkg.privateTourLabel} batchLabel={pkg.batchLabel} inclusions={pkg.inclusions} exclusions={pkg.exclusions} image={pkg.image} delay={0.2 + index * 0.1} hasFlights={pkg.hasFlights} type={pkg.type} />)}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default ExplorePage;
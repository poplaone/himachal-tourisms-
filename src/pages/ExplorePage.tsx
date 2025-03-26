
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundSlider from "../components/BackgroundSlider";
import TourPackageCard from "../components/tours/TourPackageCard";
import { tourPackages } from "../components/tours/tourPackagesData";

const backgroundImages = [
  "https://images.unsplash.com/photo-1532452413971-c56d62db18ce?q=80&w=2070&auto=format&fit=crop", // Himachal mountains with snow
  "https://images.unsplash.com/photo-1618767451283-c22a4aff9921?q=80&w=2070&auto=format&fit=crop", // Temple in mountains
  "https://images.unsplash.com/photo-1559592892-b447693e4c1e?q=80&w=2070&auto=format&fit=crop", // Valley in Himachal
];

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
    
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Explore Tour Packages - Himachal Tourism</title>
        <meta name="description" content="Browse our handpicked selection of Himachal tour packages - from fixed group departures to fully customized private tours. Find the perfect Himachal adventure for any budget and preference." />
        <meta name="keywords" content="Himachal tour packages, Manali tours, Shimla packages, Spiti Valley treks, custom Himachal tours, fixed departure tours" />
        <meta property="og:title" content="Explore Tour Packages - Himachal Tourism" />
        <meta property="og:description" content="Browse our handpicked selection of Himachal tour packages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://himachaltourism.com/explore" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1532452413971-c56d62db18ce?q=80&w=2070&auto=format&fit=crop" />
      </Helmet>
      <BackgroundSlider images={backgroundImages} />
      <Header />
      
      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 mb-8"
            style={{ opacity: 0, animation: 'fade-in 0.8s forwards ease-out' }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Himachal Tours
            </h1>
            <p className="text-white/80 max-w-3xl">
              Choose from our carefully curated selection of tours designed to showcase the best of Himachal Pradesh. Whether you prefer fixed departure group tours or customized private experiences, we have the perfect option for you.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-xl bg-white/10 rounded-full p-1 shadow-lg border border-white/20 inline-flex">
              <button
                onClick={() => setActiveTab('fixed')}
                className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                  activeTab === 'fixed' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-md' 
                    : 'hover:bg-white/10'
                }`}
              >
                Fixed Departure
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`px-6 py-3 rounded-full text-white font-medium transition-all ${
                  activeTab === 'custom' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-md' 
                    : 'hover:bg-white/10'
                }`}
              >
                Customized Tours
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
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
                delay={0.2 + index * 0.1}
                hasFlights={pkg.hasFlights}
                type={pkg.type}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExplorePage;

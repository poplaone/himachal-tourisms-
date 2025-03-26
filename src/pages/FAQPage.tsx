import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const backgroundImages = [
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop"
];

const faqs = [
  {
    question: "What is the best time to visit Himachal Pradesh?",
    answer: "The best time to visit Himachal Pradesh depends on what you want to experience. For pleasant weather and outdoor activities, May to June and September to October are ideal. For snow experiences, visit between December and February. The monsoon season (July-August) brings lush greenery but also the risk of landslides in some areas."
  },
  {
    question: "Do I need a permit to visit certain areas in Himachal?",
    answer: "Yes, some areas in Himachal Pradesh, particularly those close to international borders like Spiti Valley and Kinnaur, require an Inner Line Permit (ILP) for foreign nationals. Indian tourists don't need permits for most areas, but specific locations might have restrictions. We help arrange all necessary permits for our tour packages."
  },
  {
    question: "What should I pack for a trip to Himachal?",
    answer: "For summer visits (May-June), pack light woolens, comfortable walking shoes, sunscreen, sunglasses, and a hat. For winter (December-February), bring heavy woolens, thermal wear, snow boots, gloves, and sun protection. Year-round essentials include personal medications, a first-aid kit, and a good quality camera to capture the stunning landscapes."
  },
  {
    question: "How difficult are the treks in Himachal Pradesh?",
    answer: "Himachal offers treks of varying difficulty levels. For beginners, there are easy treks like Triund, Prashar Lake, and Bijli Mahadev. Intermediate trekkers can try Hampta Pass, Beas Kund, or Chandrakhani Pass. Advanced treks include Pin Parvati Pass and Bara Bhangal. We classify our trek packages clearly by difficulty level and provide trained guides for all experiences."
  },
  {
    question: "Is it safe to travel to remote areas like Spiti Valley?",
    answer: "Yes, remote areas like Spiti Valley are generally safe for tourists. However, these regions have challenging terrain, extreme weather conditions, and limited medical facilities. We recommend traveling with experienced guides, informing someone about your itinerary, and carrying essential medicines. Our tour packages include safety measures and trained personnel familiar with these regions."
  },
  {
    question: "What type of accommodation is available in Himachal?",
    answer: "Himachal Pradesh offers a wide range of accommodation options. In major tourist destinations like Shimla, Manali, and Dharamshala, you'll find luxury hotels, resorts, and boutique properties. In remote areas, expect guesthouses, homestays, and basic hotels. For an authentic experience, we recommend homestays in villages where you can experience local culture and cuisine firsthand."
  },
  {
    question: "Can I customize your tour packages?",
    answer: "Absolutely! While we offer carefully designed tour packages, we understand that every traveler has unique preferences. Our team is happy to customize any package according to your interests, time constraints, and budget. Just let us know your requirements, and we'll create a personalized itinerary that perfectly suits your needs."
  },
  {
    question: "How is the internet connectivity in Himachal?",
    answer: "Internet connectivity varies across Himachal Pradesh. Major towns and tourist destinations have reliable 4G coverage from most service providers. However, in remote areas like upper Spiti, Kinnaur, and high-altitude trekking routes, connectivity can be limited or non-existent. We recommend downloading offline maps, essential information, and entertainment before traveling to remote locations."
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in";
    
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
    
    return () => {
      document.body.style.opacity = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>FAQ | Himachal Tourism</title>
        <meta name="description" content="Find answers to frequently asked questions about traveling in Himachal Pradesh. Learn about the best time to visit, permits, accommodation, and more." />
        <meta property="og:title" content="FAQ | Himachal Tourism" />
        <meta property="og:description" content="Find answers to frequently asked questions about traveling in Himachal Pradesh." />
      </Helmet>
      <BackgroundSlider images={backgroundImages} />
      <Header />
      
      <main className="relative pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div 
            className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10 text-white mb-12"
            style={{ opacity: 0, animation: 'fade-in 0.8s forwards ease-out' }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
              Frequently Asked Questions
            </h1>
            
            <p className="text-lg opacity-90 mb-10 max-w-3xl">
              Find answers to common questions about traveling in Himachal Pradesh. If you don't see your question here, feel free to <Link to="/contact" className="text-amber-300 hover:text-amber-400 transition-colors">contact us</Link>.
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-md bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-semibold pr-8">{faq.question}</h3>
                    {activeIndex === index ? (
                      <ChevronUp className="flex-shrink-0 w-5 h-5 text-purple-400" />
                    ) : (
                      <ChevronDown className="flex-shrink-0 w-5 h-5 text-purple-400" />
                    )}
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="opacity-80">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                We're here to help! If you couldn't find answers to your questions, please don't hesitate to reach out to our team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface CustomLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link = ({ to, className, children }: CustomLinkProps) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <RouterLink to={to} className={className} onClick={handleLinkClick}>
      {children}
    </RouterLink>
  );
};

export default FAQPage;

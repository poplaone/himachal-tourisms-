
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const backgroundImages = [
  "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486911278254-a7a0rizfuzqar5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
];

const AboutPage = () => {
  // Scroll to top on page load
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
        <title>About Us | Himachal Tourism</title>
        <meta name="description" content="Learn about our passion for showcasing the beauty of Himachal Pradesh. Discover our story, mission, and the team behind Himachal Tourism." />
        <meta property="og:title" content="About Us | Himachal Tourism" />
        <meta property="og:description" content="Learn about our passion for showcasing the beauty of Himachal Pradesh." />
      </Helmet>
      <BackgroundSlider images={backgroundImages} />
      <Header />
      
      <main className="relative pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10 text-white mb-12"
              style={{ opacity: 0, animation: 'fade-in 0.8s forwards ease-out' }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
                About Himachal Tourism
              </h1>
              
              <p className="text-lg opacity-90 mb-8">
                Founded in 2010, Himachal Tourism has been dedicated to showcasing the pristine beauty of the Himachals to travelers from around the world. Our mission is to provide authentic, meaningful travel experiences that connect visitors with the incredible landscapes, rich culture, and warm people of this magnificent region.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Our Story
              </h2>
              
              <p className="text-lg opacity-90 mb-6">
                Our journey began when a group of passionate local guides and travel enthusiasts came together with a shared vision: to show the world the hidden treasures of Himachal Pradesh beyond the typical tourist spots. After years of exploring remote valleys, ancient villages, and untouched wilderness, we established Himachal Tourism to share our discoveries and love for the region.
              </p>
              
              <p className="text-lg opacity-90 mb-8">
                Today, we're proud to be one of the leading tour operators in Himachal, known for our expertly crafted itineraries, sustainable tourism practices, and commitment to supporting local communities.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Our Team
              </h2>
              
              <p className="text-lg opacity-90 mb-6">
                Our team consists of experienced local guides, travel specialists, and hospitality experts who all share a deep connection with Himachal Pradesh. Every member brings unique insights and personal stories that enrich our tours and ensure authentic experiences for our guests.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Our Commitment
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Sustainable Tourism</h3>
                  <p className="opacity-90">We are committed to preserving the natural beauty and cultural heritage of Himachal. We follow eco-friendly practices, minimize waste, and contribute to conservation efforts throughout the region.</p>
                </div>
                
                <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Local Communities</h3>
                  <p className="opacity-90">We believe in giving back to the communities that make Himachal so special. We employ local guides, patronize locally-owned businesses, and contribute to community development projects.</p>
                </div>
              </div>
              
              <p className="text-lg opacity-90">
                Whether you're seeking adventure, tranquility, spiritual renewal, or cultural immersion, we invite you to explore Himachal Pradesh with us and create memories that will last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

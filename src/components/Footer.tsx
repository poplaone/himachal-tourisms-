
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 backdrop-blur-xl bg-black/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Spiti Voyager</h3>
            <p className="text-gray-400">Crafting unforgettable journeys in the land of lamas and breathtaking landscapes.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#lead-form" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Plan Your Trip
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-5 mb-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-gray-400 space-y-3">
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="mr-3" size={16} /> info@spitivoyager.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="mr-3" size={16} /> +91 123 456 7890
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-3" size={16} /> Spiti Valley, Himachal Pradesh, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Spiti Voyager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

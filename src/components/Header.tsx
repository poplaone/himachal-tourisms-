
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingLogo, setShowFloatingLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For header background
      setIsScrolled(window.scrollY > 10);
      
      // For floating logo
      if (window.innerWidth < 768) { // Only on mobile
        setShowFloatingLogo(window.scrollY > window.innerHeight * 0.2);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating logo for mobile that appears only before scrolling down */}
      {!isScrolled && !showFloatingLogo && window.innerWidth < 768 && (
        <div 
          className="fixed top-[30vh] left-1/2 transform -translate-x-1/2 z-40 text-4xl font-bold text-white text-center"
          style={{
            opacity: 0,
            animation: 'fade-in 1s forwards ease-out',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}
        >
          Himachal<br/>Tourism
        </div>
      )}

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-black/70 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight">
              Himachal Tourism
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-white">
              <Link to="/" className="hover:text-green-300 transition-colors">
                Home
              </Link>
              <Link to="/explore" className="hover:text-green-300 transition-colors">
                Explore
              </Link>
              <Link to="/about" className="hover:text-green-300 transition-colors">
                About
              </Link>
              <Link to="/blog" className="hover:text-green-300 transition-colors">
                Blog
              </Link>
              <div className="relative group">
                <button className="flex items-center hover:text-green-300 transition-colors">
                  Destinations <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-black/80 backdrop-blur-lg rounded-md shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/packages/spiti" className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md">
                    Spiti Valley
                  </Link>
                  <Link to="/packages/manali" className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md">
                    Manali
                  </Link>
                  <Link to="/packages/shimla" className="block px-4 py-2 text-sm hover:bg-white/10 rounded-md">
                    Shimla
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="hover:text-green-300 transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="hover:text-green-300 transition-colors">
                FAQ
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4 text-white bg-black/70 backdrop-blur-lg mt-2 p-4 rounded-md">
              <Link to="/" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/explore" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Explore
              </Link>
              <Link to="/about" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/blog" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <span>Destinations</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/packages/spiti" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Spiti Valley
                  </Link>
                  <Link to="/packages/manali" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Manali
                  </Link>
                  <Link to="/packages/shimla" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    Shimla
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/faq" className="block py-2 hover:text-green-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

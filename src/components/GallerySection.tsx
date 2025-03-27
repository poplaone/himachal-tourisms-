
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=75&w=800&auto=format&fit=crop",
    alt: "Valley waterfall in Himachal",
    caption: "Majestic waterfalls hidden in Himachal valleys"
  },
  {
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=75&w=800&auto=format&fit=crop",
    alt: "Sunlight through forest in Himachal",
    caption: "Magical sunlight filtering through ancient Deodar forests"
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=75&w=800&auto=format&fit=crop",
    alt: "River between mountains in Himachal",
    caption: "Crystal clear rivers winding through majestic mountains"
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=75&w=800&auto=format&fit=crop",
    alt: "Deer in Himachal forest",
    caption: "Wildlife encounters in the pristine forests of Himachal"
  },
  {
    src: "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=75&w=800&auto=format&fit=crop",
    alt: "Snow-capped mountains in Himachal",
    caption: "Snow-capped peaks reaching for the sky"
  }
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Preload images
    galleryImages.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = image.src;
    });
  }, []);
  
  const scrollToNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(prev => prev + 1);
      scrollAreaRef.current?.scrollTo({
        top: (currentIndex + 1) * 400,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      scrollAreaRef.current?.scrollTo({
        top: (currentIndex - 1) * 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #D3E4FD, #F1F1F1)' }}>
      {/* Snowflakes animation */}
      <div className="snowflakes" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="snowflake">❅</div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div key={i + 10} className="snowflake">❆</div>
        ))}
      </div>
      
      {/* Background mountain silhouette */}
      <div 
        className="absolute inset-0 opacity-20 bg-no-repeat bg-bottom bg-cover z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1506604900144-7360175909e2?q=75&w=1280&auto=format&fit=crop')",
          filter: "grayscale(0.5) brightness(1.2)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Himachal Through Our Lens
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Scroll through our gallery to experience the breathtaking beauty of Himachal Pradesh
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Scroll controls */}
          <div className="absolute left-1/2 -top-12 -translate-x-1/2 flex flex-col items-center z-10">
            <button 
              onClick={scrollToPrev} 
              disabled={currentIndex === 0}
              className="p-2 bg-white/60 rounded-full mb-2 hover:bg-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll up"
            >
              <ChevronUp className="h-5 w-5 text-gray-800" />
            </button>
            <span className="text-sm font-medium text-gray-800">
              Swipe vertically
            </span>
          </div>
          
          {/* Vertical gallery */}
          <div className="h-[400px] rounded-lg overflow-hidden neo-blur shadow-xl bg-white/30 backdrop-blur-md">
            <ScrollArea 
              className="h-full" 
              ref={scrollAreaRef}
              onScroll={(e) => {
                const scrollPos = e.currentTarget.scrollTop;
                const newIndex = Math.round(scrollPos / 400);
                if (newIndex !== currentIndex && newIndex >= 0 && newIndex < galleryImages.length) {
                  setCurrentIndex(newIndex);
                }
              }}
            >
              <div className="flex flex-col space-y-2">
                {galleryImages.map((image, idx) => (
                  <div key={idx} className="relative h-[398px] snap-start">
                    <div 
                      className={`absolute inset-0 transition-opacity duration-500 ${imagesLoaded[idx] ? 'opacity-0' : 'opacity-100'}`}
                      style={{ 
                        background: 'linear-gradient(135deg, #D3E4FD 0%, #33C3F0 100%)'
                      }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <div className="animate-pulse text-white text-lg">Loading spectacular view...</div>
                      </div>
                    </div>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imagesLoaded[idx] ? 'opacity-100' : 'opacity-0'}`}
                      loading={idx <= 1 ? "eager" : "lazy"}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-sm">
                      <p className="text-white font-medium text-lg">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Bottom scroll control */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 flex flex-col items-center z-10">
            <button 
              onClick={scrollToNext} 
              disabled={currentIndex === galleryImages.length - 1}
              className="p-2 bg-white/60 rounded-full mt-2 hover:bg-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-5 w-5 text-gray-800" />
            </button>
            <span className="text-sm font-medium text-gray-800">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .snowflake {
          color: #fff;
          font-size: 1em;
          font-family: Arial, sans-serif;
          text-shadow: 0 0 5px #000;
          position: absolute;
          top: -10%;
          animation: fall linear forwards;
        }
        
        @keyframes fall {
          to {
            transform: translateY(105vh);
          }
        }
        
        .snowflake:nth-child(1) {
          left: 10%;
          animation-duration: 15s;
          animation-delay: 1s;
        }
        
        .snowflake:nth-child(2) {
          left: 20%;
          animation-duration: 12s;
          animation-delay: 2s;
        }
        
        .snowflake:nth-child(3) {
          left: 30%;
          animation-duration: 14s;
          animation-delay: 3s;
        }
        
        .snowflake:nth-child(4) {
          left: 40%;
          animation-duration: 16s;
          animation-delay: 0s;
        }
        
        .snowflake:nth-child(5) {
          left: 50%;
          animation-duration: 13s;
          animation-delay: 2s;
        }
        
        .snowflake:nth-child(6) {
          left: 60%;
          animation-duration: 15s;
          animation-delay: 1s;
        }
        
        .snowflake:nth-child(7) {
          left: 70%;
          animation-duration: 17s;
          animation-delay: 0s;
        }
        
        .snowflake:nth-child(8) {
          left: 80%;
          animation-duration: 14s;
          animation-delay: 3s;
        }
        
        .snowflake:nth-child(9) {
          left: 90%;
          animation-duration: 12s;
          animation-delay: 2s;
        }
        
        .snowflake:nth-child(10) {
          left: 95%;
          animation-duration: 16s;
          animation-delay: 1s;
        }
        
        .snowflake:nth-child(11) {
          left: 15%;
          animation-duration: 13s;
          animation-delay: 3s;
        }
        
        .snowflake:nth-child(12) {
          left: 25%;
          animation-duration: 15s;
          animation-delay: 0s;
        }
        
        .snowflake:nth-child(13) {
          left: 35%;
          animation-duration: 17s;
          animation-delay: 2s;
        }
        
        .snowflake:nth-child(14) {
          left: 45%;
          animation-duration: 14s;
          animation-delay: 1s;
        }
        
        .snowflake:nth-child(15) {
          left: 55%;
          animation-duration: 13s;
          animation-delay: 3s;
        }
        
        .snowflake:nth-child(16) {
          left: 65%;
          animation-duration: 16s;
          animation-delay: 0s;
        }
        
        .snowflake:nth-child(17) {
          left: 75%;
          animation-duration: 15s;
          animation-delay: 2s;
        }
        
        .snowflake:nth-child(18) {
          left: 85%;
          animation-duration: 14s;
          animation-delay: 1s;
        }
        
        .snowflake:nth-child(19) {
          left: 5%;
          animation-duration: 16s;
          animation-delay: 3s;
        }
        
        .snowflake:nth-child(20) {
          left: 55%;
          animation-duration: 13s;
          animation-delay: 0s;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;

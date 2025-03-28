
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import Snowflakes from "./effects/Snowflakes";

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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(galleryImages.length).fill(false));
  
  // Handle image load state
  const handleImageLoaded = (index: number) => {
    const newLoadedImages = [...loadedImages];
    newLoadedImages[index] = true;
    setLoadedImages(newLoadedImages);
  };
  
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

  // Navigate with keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        scrollToPrev();
      } else if (e.key === 'ArrowDown') {
        scrollToNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-blue-200 relative overflow-hidden">
      {/* Mountain silhouette background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path fill="#4B5563" fillOpacity="0.5" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,213.3C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <path fill="#374151" fillOpacity="0.7" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Add the Snowflakes component */}
      <Snowflakes zIndex={0} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
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
              className="p-2 bg-white/50 rounded-full mb-2 hover:bg-white/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll up"
            >
              <ChevronUp className="h-5 w-5 text-gray-700" />
            </button>
            <span className="text-sm font-medium text-gray-700 bg-white/50 px-2 py-1 rounded-full">
              Swipe vertically
            </span>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-2 z-10">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollAreaRef.current?.scrollTo({
                    top: idx * 400,
                    behavior: 'smooth'
                  });
                }}
                className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
                  idx === currentIndex 
                    ? 'border-blue-500 scale-110' 
                    : 'border-white/50 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${galleryImages[idx].src})` }} />
              </button>
            ))}
          </div>
          
          {/* Vertical gallery */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
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
                    {!loadedImages[idx] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                        <Skeleton className="w-full h-full" />
                      </div>
                    )}
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className={`w-full h-full object-cover object-center transition-opacity duration-500 ${loadedImages[idx] ? 'opacity-100' : 'opacity-0'}`}
                      loading={idx <= 1 ? "eager" : "lazy"}
                      onLoad={() => handleImageLoaded(idx)}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-sm">
                      <p className="text-white font-medium text-lg">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Progress indicator */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-1">
            {galleryImages.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-blue-500 w-3 h-3' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Bottom scroll control */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 flex flex-col items-center z-10">
            <button 
              onClick={scrollToNext} 
              disabled={currentIndex === galleryImages.length - 1}
              className="p-2 bg-white/50 rounded-full mt-2 hover:bg-white/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-5 w-5 text-gray-700" />
            </button>
            <span className="text-sm font-medium text-gray-700 bg-white/50 px-2 py-1 rounded-full">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

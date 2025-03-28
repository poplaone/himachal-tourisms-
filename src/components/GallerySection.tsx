
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState } from "react";
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
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
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
    <section className="py-16 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Himachal Through Our Lens
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Scroll through our gallery to experience the breathtaking beauty of Himachal Pradesh
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Scroll controls */}
          <div className="absolute left-1/2 -top-12 -translate-x-1/2 flex flex-col items-center z-10">
            <button 
              onClick={scrollToPrev} 
              disabled={currentIndex === 0}
              className="p-2 bg-white/20 rounded-full mb-2 hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll up"
            >
              <ChevronUp className="h-5 w-5 text-white" />
            </button>
            <span className="text-sm font-medium text-white/80">
              Swipe vertically
            </span>
          </div>
          
          {/* Vertical gallery */}
          <div className="h-[400px] rounded-lg overflow-hidden neo-blur">
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
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
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
              className="p-2 bg-white/20 rounded-full mt-2 hover:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-5 w-5 text-white" />
            </button>
            <span className="text-sm font-medium text-white/80">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      </div>
      
      {/* Moved the snowfall animation to regular style tag without jsx prop */}
      <style>
        {`
          @keyframes snowfall {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
            }
          }
          
          .snowflake {
            position: fixed;
            top: -10px;
            color: white;
            opacity: 0.7;
            font-size: 20px;
            user-select: none;
            animation-name: snowfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            z-index: 1;
          }
        `}
      </style>
    </section>
  );
};

export default GallerySection;

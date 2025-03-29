
import { useState, useEffect } from "react";
import Snowflakes from "./effects/Snowflakes";
import { galleryImages } from "../data/galleryImages";
import GalleryControls from "./gallery/GalleryControls";
import GalleryProgressIndicator from "./gallery/GalleryProgressIndicator";
import ThumbnailNavigation from "./gallery/ThumbnailNavigation";
import GalleryView from "./gallery/GalleryView";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    }
  };
  
  const scrollToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleGalleryScroll = (scrollPosition: number) => {
    const newIndex = Math.round(scrollPosition / 400);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < galleryImages.length) {
      setCurrentIndex(newIndex);
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
          {/* Top scroll control */}
          <GalleryControls 
            currentIndex={currentIndex}
            totalImages={galleryImages.length}
            onPrevClick={scrollToPrev}
            onNextClick={scrollToNext}
            isTopControl={true}
          />
          
          {/* Thumbnail navigation */}
          <ThumbnailNavigation 
            currentIndex={currentIndex} 
            onThumbnailClick={handleThumbnailClick} 
          />
          
          {/* Main gallery view */}
          <GalleryView 
            currentIndex={currentIndex}
            loadedImages={loadedImages}
            onImageLoad={handleImageLoaded}
            onScroll={handleGalleryScroll}
          />
          
          {/* Progress indicator */}
          <GalleryProgressIndicator 
            currentIndex={currentIndex}
            totalImages={galleryImages.length}
          />
          
          {/* Bottom scroll control */}
          <GalleryControls 
            currentIndex={currentIndex}
            totalImages={galleryImages.length}
            onPrevClick={scrollToPrev}
            onNextClick={scrollToNext}
            isTopControl={false}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

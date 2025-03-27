
import { useState, useEffect } from "react";

interface BackgroundSliderProps {
  images: string[];
  interval?: number;
}

const BackgroundSlider = ({ images, interval = 6000 }: BackgroundSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    let loadedCount = 0;
    const totalImages = images.length;
    
    // Preload all images before showing them
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Fallback background with a beautiful gradient inspired by Himachal mountains */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: imagesLoaded ? 0 : 1,
          background: "linear-gradient(to bottom, #2c3e50, #4ca1af)",
          transition: "opacity 1s ease-in-out"
        }}
      />
      
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: imagesLoaded && current === index ? 1 : 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50"></div>
    </div>
  );
};

export default BackgroundSlider;


import { useState, useEffect } from "react";

interface BackgroundSliderProps {
  images: string[];
  interval?: number;
}

const BackgroundSlider = ({ images, interval = 6000 }: BackgroundSliderProps) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    // Preload all images for smoother transitions
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = "high";
    });
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: current === index ? 1 : 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/45"></div>
    </div>
  );
};

export default BackgroundSlider;

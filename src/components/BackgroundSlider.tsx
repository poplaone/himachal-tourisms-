
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
    
    // Track loaded images
    let loadedCount = 0;
    const imageObjects = images.map(src => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
      return img;
    });
    
    // Start slider only after first image is loaded
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => {
      clearInterval(timer);
      imageObjects.forEach(img => {
        img.onload = null;
      });
    };
  }, [images, interval]);

  return (
    <div className="fixed inset-0 -z-10 bg-gray-800">
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

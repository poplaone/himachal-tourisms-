
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryImageProps {
  src: string;
  alt: string;
  caption: string;
  index: number;
  onImageLoad: (index: number) => void;
  isLoaded: boolean;
}

const GalleryImage = ({ src, alt, caption, index, onImageLoad, isLoaded }: GalleryImageProps) => {
  return (
    <div className="relative h-[398px] snap-start">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover object-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={index <= 1 ? "eager" : "lazy"}
        onLoad={() => onImageLoad(index)}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-sm">
        <p className="text-white font-medium text-lg">{caption}</p>
      </div>
    </div>
  );
};

export default GalleryImage;

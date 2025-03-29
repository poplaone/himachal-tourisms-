
import { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import GalleryImage from "./GalleryImage";
import { galleryImages } from "../../data/galleryImages";

interface GalleryViewProps {
  currentIndex: number;
  loadedImages: boolean[];
  onImageLoad: (index: number) => void;
  onScroll: (scrollPosition: number) => void;
}

const GalleryView = ({ 
  currentIndex, 
  loadedImages, 
  onImageLoad, 
  onScroll 
}: GalleryViewProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
      <ScrollArea 
        className="h-full" 
        ref={scrollAreaRef}
        onScroll={(e) => {
          const scrollPos = e.currentTarget.scrollTop;
          onScroll(scrollPos);
        }}
      >
        <div className="flex flex-col space-y-2">
          {galleryImages.map((image, idx) => (
            <GalleryImage
              key={idx}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              index={idx}
              onImageLoad={onImageLoad}
              isLoaded={loadedImages[idx]}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default GalleryView;

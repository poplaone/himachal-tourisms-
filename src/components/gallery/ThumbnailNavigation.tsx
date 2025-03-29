
import { galleryImages } from "../../data/galleryImages";

interface ThumbnailNavigationProps {
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
}

const ThumbnailNavigation = ({ currentIndex, onThumbnailClick }: ThumbnailNavigationProps) => {
  return (
    <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col space-y-2 z-10">
      {galleryImages.map((image, idx) => (
        <button
          key={idx}
          onClick={() => onThumbnailClick(idx)}
          className={`w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
            idx === currentIndex 
              ? 'border-blue-500 scale-110' 
              : 'border-white/50 opacity-70 hover:opacity-100'
          }`}
          aria-label={`View image ${idx + 1}`}
        >
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${image.src})` }} 
          />
        </button>
      ))}
    </div>
  );
};

export default ThumbnailNavigation;

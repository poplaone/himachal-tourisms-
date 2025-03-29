
import { ChevronDown, ChevronUp } from "lucide-react";

interface GalleryControlsProps {
  currentIndex: number;
  totalImages: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  isTopControl?: boolean;
}

const GalleryControls = ({ 
  currentIndex, 
  totalImages, 
  onPrevClick, 
  onNextClick, 
  isTopControl = true 
}: GalleryControlsProps) => {
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10 ${
      isTopControl ? '-top-12' : '-bottom-12'
    }`}>
      {isTopControl ? (
        <>
          <button 
            onClick={onPrevClick} 
            disabled={currentIndex === 0}
            className="p-2 bg-white/50 rounded-full mb-2 hover:bg-white/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll up"
          >
            <ChevronUp className="h-5 w-5 text-gray-700" />
          </button>
          <span className="text-sm font-medium text-gray-700 bg-white/50 px-2 py-1 rounded-full">
            Swipe vertically
          </span>
        </>
      ) : (
        <>
          <button 
            onClick={onNextClick} 
            disabled={currentIndex === totalImages - 1}
            className="p-2 bg-white/50 rounded-full mt-2 hover:bg-white/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-5 w-5 text-gray-700" />
          </button>
          <span className="text-sm font-medium text-gray-700 bg-white/50 px-2 py-1 rounded-full">
            {currentIndex + 1} / {totalImages}
          </span>
        </>
      )}
    </div>
  );
};

export default GalleryControls;

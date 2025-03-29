
interface GalleryProgressIndicatorProps {
  currentIndex: number;
  totalImages: number;
}

const GalleryProgressIndicator = ({ currentIndex, totalImages }: GalleryProgressIndicatorProps) => {
  return (
    <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-1">
      {Array.from({ length: totalImages }).map((_, idx) => (
        <div 
          key={idx}
          className={`h-2 w-2 rounded-full transition-all ${
            idx === currentIndex ? 'bg-blue-500 w-3 h-3' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export default GalleryProgressIndicator;

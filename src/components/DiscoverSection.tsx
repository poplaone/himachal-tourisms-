
import { useRef, useEffect } from "react";

const DiscoverSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('opacity-100');
          sectionRef.current?.classList.remove('opacity-0', 'translate-y-10');
          
          if (imageContainerRef.current) {
            imageContainerRef.current.classList.add('opacity-100', 'scale-100');
            imageContainerRef.current.classList.remove('opacity-0', 'scale-95');
          }
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-10 md:py-16 text-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-purple-600/70 rounded-full mb-4">
                ABOUT SPITI
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Discover the Soul of Spiti
              </h2>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                Nestled high in the Indian Himalayas, Spiti Valley, often referred to as "Little Tibet," is a cold
                desert mountain valley where time seems to stand still. It's a realm of ancient monasteries, prayer flags fluttering in the wind, and
                stark, stunning landscapes.
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Experience the tranquility, the unique culture, and the breathtaking vistas that make Spiti a
                destination unlike any other.
              </p>
            </div>
            
            <div 
              ref={imageContainerRef}
              className="md:w-1/2 relative h-64 md:h-80 opacity-0 scale-95 transition-all duration-1000 delay-300 ease-out"
            >
              <div className="absolute top-0 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/60 to-indigo-600/60 rounded-full filter blur-xl animate-blob"></div>
              <div className="absolute bottom-0 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/60 to-yellow-500/60 rounded-full filter blur-xl animate-blob animation-delay-2000"></div>
              
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-lg overflow-hidden shadow-2xl border-2 border-white/20 rotate-[-5deg]">
                <img
                  src="https://images.unsplash.com/photo-1589915738204-4def89559a14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Spiti Landscape"
                  className="w-full h-full object-cover transition-transform duration-5000"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 w-40 h-40 rounded-lg overflow-hidden shadow-2xl border-2 border-white/20 rotate-[8deg]">
                <img
                  src="https://images.unsplash.com/photo-1617309830406-2a38e02bf785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Spiti Monastery"
                  className="w-full h-full object-cover transition-transform duration-5000"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

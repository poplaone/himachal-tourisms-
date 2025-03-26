
import { useState, useEffect } from "react";

const testimonials = [
  { 
    id: 1, 
    name: "Alex Richardson", 
    text: "An unforgettable journey through the majestic Spiti Valley. The guides were knowledgeable and the itinerary was perfectly balanced. Highly recommended!" 
  },
  { 
    id: 2, 
    name: "Sarah Miller", 
    text: "The landscapes were surreal, and the experience was truly transformative. I never thought I would connect so deeply with a place and its people." 
  },
  {
    id: 3,
    name: "John Doe",
    text: "Excellent service and well-organized trip. The attention to detail and personalized experiences made this journey special. Will definitely travel with them again.",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    
    setIsAnimating(true);
    setCurrentTestimonial(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        changeTestimonial(nextIndex);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentTestimonial, isAnimating]);

  return (
    <section className="py-10 md:py-16 text-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10">
          <div 
            className="text-center mb-12"
            style={{ opacity: 0, animation: 'fade-in 0.6s forwards ease-out' }}
          >
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
              Voices from the Valley
            </h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto h-48 md:h-40 flex items-center justify-center overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute w-full px-4 text-center transition-all duration-500 ease-in-out"
                style={{
                  opacity: currentTestimonial === index ? 1 : 0,
                  transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                  pointerEvents: currentTestimonial === index ? 'auto' : 'none',
                }}
              >
                <p className="text-lg md:text-xl italic mb-4 opacity-90">"{testimonial.text}"</p>
                <p className="font-semibold text-purple-400">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => changeTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-purple-500 scale-125" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

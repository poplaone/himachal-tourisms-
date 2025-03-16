
interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const ExperienceCard = ({ title, description, image, delay }: ExperienceCardProps) => {
  return (
    <div
      className="experience-card bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white/10 h-full flex flex-col"
      style={{ 
        opacity: 0, 
        animation: `fade-in 0.7s forwards ease-out ${delay}s`,
      }}
    >
      <div className="h-48 bg-gray-800/50 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Monastery Trails",
      description: "Explore ancient Buddhist monasteries perched on cliff edges with stunning panoramic views of the valley.",
      image: "https://images.unsplash.com/photo-1516342243505-ac630ada4426?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "High-Altitude Trekking",
      description: "Challenge yourself with breathtaking treks through pristine landscapes and crystal-clear mountain lakes.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Cultural Immersion",
      description: "Experience the unique Spitian way of life by staying with local families and participating in traditional activities.",
      image: "https://images.unsplash.com/photo-1518560463068-6fe10f63a876?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Stargazing Nights",
      description: "Witness the clear, starlit skies of Spiti, far from urban light pollution, perfect for astrophotography.",
      image: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <section className="py-16 md:py-24 text-gray-200">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10">
          <div className="text-center mb-12" style={{ opacity: 0, animation: 'fade-in 0.6s forwards ease-out' }}>
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mb-4">
              EXPERIENCES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
              Curated Spiti Experiences
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                title={exp.title}
                description={exp.description}
                image={exp.image}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;

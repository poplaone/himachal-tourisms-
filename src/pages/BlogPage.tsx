
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const backgroundImages = [
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070&auto=format&fit=crop",
];

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Spiti Valley You Must Visit",
    excerpt: "Beyond the popular spots, Spiti Valley holds many secrets waiting to be discovered. Here are our top 10 hidden gems that most travelers miss...",
    date: "June 15, 2023",
    author: "Rahul Sharma",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"
  },
  {
    id: 2,
    title: "A Cultural Guide to Manali: Traditions and Festivals",
    excerpt: "Discover the rich cultural tapestry of Manali through its traditional practices, seasonal celebrations, and vibrant festivals...",
    date: "May 28, 2023",
    author: "Priya Patel",
    image: "https://images.unsplash.com/photo-1596106515698-aff8ca5cb2ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: 3,
    title: "Best Time to Visit Shimla: A Seasonal Guide",
    excerpt: "Planning a trip to Shimla? Each season offers a unique experience. Here's our comprehensive guide to help you choose the perfect time for your visit...",
    date: "April 10, 2023",
    author: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1618582744375-e3a75a486a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
  },
  {
    id: 4,
    title: "Trekking in Himachal: Preparation Guide for Beginners",
    excerpt: "New to trekking? Himachal Pradesh offers trails for all levels. Here's everything beginners need to know before embarking on their first Himalayan adventure...",
    date: "March 22, 2023",
    author: "Ananya Gupta",
    image: "https://images.unsplash.com/photo-1487433883733-1108d666a3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80"
  }
];

const BlogPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in";
    
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
    
    return () => {
      document.body.style.opacity = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Blog | Himachal Tourism</title>
        <meta name="description" content="Explore our travel blog for insider tips, guides, and stories about Himachal Pradesh. Discover the beauty, culture, and adventures waiting in the Land of Gods." />
        <meta property="og:title" content="Blog | Himachal Tourism" />
        <meta property="og:description" content="Explore our travel blog for insider tips, guides, and stories about Himachal Pradesh." />
      </Helmet>
      <BackgroundSlider images={backgroundImages} />
      <Header />
      
      <main className="relative pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <div 
            className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10 text-white mb-12"
            style={{ opacity: 0, animation: 'fade-in 0.8s forwards ease-out' }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">
              Travel Blog
            </h1>
            
            <p className="text-lg opacity-90 mb-8 max-w-3xl">
              Discover the magic of Himachal Pradesh through our stories, travel guides, and insider tips. From hidden trails to local cuisines, our blog brings the essence of the Himalayas to you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id}
                  className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3 text-sm opacity-80">
                      <span>{post.date}</span>
                      <span>By {post.author}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 hover:text-amber-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="opacity-80 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-amber-300 hover:text-amber-400 transition-colors">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;

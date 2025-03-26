
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BackgroundSlider from "../components/BackgroundSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const backgroundImages = [
  "https://images.unsplash.com/photo-1506604900144-7360175909e2?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset the form after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

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
        <title>Contact Us | Himachal Tourism</title>
        <meta name="description" content="Get in touch with our team to plan your perfect Himachal Pradesh adventure. We're here to answer your questions and help you create unforgettable travel experiences." />
        <meta property="og:title" content="Contact Us | Himachal Tourism" />
        <meta property="og:description" content="Get in touch with our team to plan your perfect Himachal Pradesh adventure." />
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
              Contact Us
            </h1>
            
            <p className="text-lg opacity-90 mb-10 max-w-3xl">
              Have questions about our tours? Want to customize your itinerary? Our team is here to help. Reach out to us and start planning your Himachal adventure today.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                    <MapPin className="h-6 w-6 text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                    <p className="opacity-80">
                      123 Mountain View Road<br />
                      Shimla, Himachal Pradesh<br />
                      India - 171001
                    </p>
                  </div>
                  
                  <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                    <Phone className="h-6 w-6 text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="opacity-80">
                      +91 (987) 654-3210<br />
                      +91 (123) 456-7890
                    </p>
                  </div>
                  
                  <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                    <Mail className="h-6 w-6 text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="opacity-80">
                      info@himachaltourism.com<br />
                      bookings@himachaltourism.com
                    </p>
                  </div>
                  
                  <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                    <Clock className="h-6 w-6 text-purple-400 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                    <p className="opacity-80">
                      Monday - Saturday<br />
                      9:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>
                
                <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-purple-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="text-white hover:text-purple-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="text-white hover:text-purple-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="text-white hover:text-purple-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-xl bg-black/30 rounded-xl p-6 md:p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8 px-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Thank You!</h3>
                    <p className="text-gray-300">We've received your message and will be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="Tour Inquiry">Tour Inquiry</option>
                        <option value="Custom Package">Custom Package</option>
                        <option value="Booking Question">Booking Question</option>
                        <option value="General Question">General Question</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

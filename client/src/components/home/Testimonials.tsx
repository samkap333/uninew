import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Testimonial = {
  name: string;
  origin: string;
  university: string;
  image: string;
  rating: number;
  testimonial: string;
  program?: string;
  year?: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      origin: "USA",
      university: "Delhi University",
      program: "International Relations",
      year: "2022",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300",
      rating: 5,
      testimonial: "Studying in India has been the most enriching experience of my life. The academic environment is challenging and the cultural exposure is incredible. I made lifelong friends and grew both personally and professionally. UNIportal India made the entire process seamless."
    },
    {
      name: "David Chen",
      origin: "Canada",
      university: "IIT Bombay",
      program: "Computer Science",
      year: "2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300",
      rating: 4.5,
      testimonial: "The engineering program at IIT Bombay exceeded my expectations. The professors are world-class, and the research opportunities are abundant. The UNIportal team made the transition seamless from application to arrival. I'm already recommending this to all my friends back home."
    },
    {
      name: "Elena Petrova",
      origin: "Russia",
      university: "Manipal Academy",
      program: "Medicine",
      year: "2021",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300",
      rating: 5,
      testimonial: "The medical program at Manipal is cutting-edge. Beyond academics, I've fallen in love with Indian culture, food, and traditions. The visa support from UNIportal India was incredibly helpful and stress-free. I couldn't have navigated the complex application process without their guidance."
    },
    {
      name: "Mohammed Al-Farsi",
      origin: "UAE",
      university: "BITS Pilani",
      program: "Business Analytics",
      year: "2022",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300",
      rating: 5,
      testimonial: "From the application process to settling into campus life, UNIportal made everything smooth. The cultural immersion programs they organized helped me adapt quickly. The academic standards at BITS Pilani are rigorous but thoroughly rewarding, preparing me for a global career."
    },
    {
      name: "Mei Lin",
      origin: "Singapore",
      university: "NID Ahmedabad",
      program: "Design",
      year: "2023",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300",
      rating: 4.5,
      testimonial: "Studying design in India exposed me to incredible artistic traditions that have deeply influenced my work. The campus environment at NID is vibrant and inspirational. UNIportal's team understood exactly what I was looking for and matched me with the perfect program."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Update the isMobile state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxIndex = isMobile ? testimonials.length - 1 : Math.max(0, testimonials.length - 3);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else if (i === fullStars && hasHalfStar) {
            return (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else {
            return (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          }
        })}
      </div>
    );
  };

  const slidePercentage = isMobile ? 100 : 33.333;
  const translateValue = -currentIndex * slidePercentage;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
            Student <span className="text-primary">Success</span> Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from international students about their transformative experiences studying in India through UNIportal
          </p>
        </motion.div>
        
        {/* Featured Testimonial */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-primary mb-6">
                  <Quote className="h-12 w-12 -scale-x-100" />
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[activeTestimonial].testimonial}"
                </p>
                <div className="mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary" 
                      width="64" 
                      height="64" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-primary font-medium">
                      {testimonials[activeTestimonial].program}, {testimonials[activeTestimonial].year}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].origin} • {testimonials[activeTestimonial].university}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose UNIportal India?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Personalized guidance throughout your academic journey</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>98% visa approval rate for our applicants</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Partnerships with 75+ top Indian universities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Comprehensive cultural integration programs</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="bg-white text-primary hover:bg-white/90 font-bold">
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial Gallery */}
        <h3 className="text-2xl font-bold mb-8 text-center">More Student Stories</h3>
        
        <div className="relative testimonial-container">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform"
              style={{ transform: `translateX(${translateValue}%)` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className={`min-w-full md:min-w-[33.333%] px-4`}
                  style={{ opacity: isMobile ? (index === currentIndex ? 1 : 0) : 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className={`bg-white p-6 rounded-xl shadow-lg h-full border-2 transition-all cursor-pointer ${activeTestimonial === index ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                    onClick={() => handleTestimonialClick(index)}
                  >
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover" 
                        width="64" 
                        height="64" 
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-primary">{testimonial.program}</p>
                        <p className="text-gray-600">{testimonial.origin}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 line-clamp-3">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 -left-4 transform -translate-y-1/2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg md:block hidden ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'}`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg md:block hidden ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary'}`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-8 flex justify-center space-x-3">
          {[...Array(isMobile ? testimonials.length : maxIndex + 1)].map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-primary/50'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
            View All Student Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

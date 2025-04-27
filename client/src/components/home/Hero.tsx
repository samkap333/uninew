import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle, GraduationCap, Globe, BookOpen, Clock } from "lucide-react";
import { useState } from "react";
import ApplicationDialog from "@/components/application/ApplicationDialog";

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const stats = [
    { icon: <GraduationCap className="w-6 h-6 text-primary" />, value: "75+", label: "Top Universities" },
    { icon: <Globe className="w-6 h-6 text-primary" />, value: "50+", label: "Countries Served" },
    { icon: <BookOpen className="w-6 h-6 text-primary" />, value: "250+", label: "Programs" },
    { icon: <Clock className="w-6 h-6 text-primary" />, value: "98%", label: "Visa Success" }
  ];

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-28 pb-12 md:pb-20 bg-gradient-to-b from-accent/30 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            variants={itemAnimation}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              UNIportal India - Your Gateway to Success
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight mb-6">
              Study in <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">India</span><br />
              <span className="text-3xl md:text-4xl">Transform Your Future</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              Join thousands of international students expanding their horizons in India's top universities. Experience world-class education with immersive cultural experiences guided by UNIportal experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <ApplicationDialog>
                <Button size="lg" className="bg-primary hover:bg-secondary text-white font-bold shadow-lg px-8 py-6 text-lg">
                  Apply Now
                </Button>
              </ApplicationDialog>
              <button 
                onClick={() => setShowVideoModal(true)} 
                className="flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors"
              >
                <PlayCircle className="h-10 w-10" />
                <span>Watch Video</span>
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow-lg">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-2">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            variants={itemAnimation}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl relative group">
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1588420343618-6141b3784bce?auto=format&fit=crop&w=800" 
                alt="Students at an Indian university campus" 
                className="w-full h-auto rounded-xl"
                width="800"
                height="500"
              />
              
              {/* Play Button Overlay for Video */}
              <div 
                className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-xl"
                onClick={() => setShowVideoModal(true)}
              >
                <PlayCircle className="h-20 w-20 text-white" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="text-primary font-bold flex items-center space-x-2">
                <span className="bg-primary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span>Admissions Open 2025</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100" alt="Student 1" className="w-10 h-10 rounded-full border-2 border-white" width="40" height="40" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100" alt="Student 2" className="w-10 h-10 rounded-full border-2 border-white" width="40" height="40" />
                  <img src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?auto=format&fit=crop&w=100" alt="Student 3" className="w-10 h-10 rounded-full border-2 border-white" width="40" height="40" />
                </div>
                <div>
                  <p className="font-medium">Join 10,000+ students</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Trusted By Universities */}
        <motion.div 
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-center text-gray-500 mb-6">TRUSTED BY TOP UNIVERSITIES ACROSS INDIA</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Bombay_logo.svg/150px-IIT_Bombay_logo.svg.png" alt="IIT Bombay" className="h-12 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/University_of_Delhi.svg/150px-University_of_Delhi.svg.png" alt="Delhi University" className="h-16 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Manipal_Academy_of_Higher_Education_logo.svg/150px-Manipal_Academy_of_Higher_Education_logo.svg.png" alt="Manipal Academy" className="h-14 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Birla_Institute_of_Technology_%26_Science_Logo.svg/150px-Birla_Institute_of_Technology_%26_Science_Logo.svg.png" alt="BITS Pilani" className="h-12 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Indian_Institute_of_Management_Ahmedabad_logo.png/150px-Indian_Institute_of_Management_Ahmedabad_logo.png" alt="IIM Ahmedabad" className="h-14 grayscale hover:grayscale-0 transition-all" />
          </div>
        </motion.div>
      </div>
      
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl mx-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-1"
              onClick={() => setShowVideoModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/LXb3EKWsInQ" 
                title="Study in India" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

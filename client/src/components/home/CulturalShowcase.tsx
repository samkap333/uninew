import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Castle, 
  Landmark, 
  Music, 
  Utensils, 
  Lightbulb, 
  GraduationCap 
} from "lucide-react";

const CulturalShowcase = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Cultural highlights
  const culturalAspects = [
    {
      title: "Rich Heritage",
      description: "5000+ years of civilization with diverse architectural marvels, from ancient temples to modern wonders.",
      icon: <Castle className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cultural Festivals",
      description: "Experience colorful celebrations like Diwali, Holi, and regional festivals throughout the year.",
      icon: <Landmark className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Music & Dance",
      description: "Traditional and contemporary art forms with classical dance styles and musical traditions.",
      icon: <Music className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Culinary Delights",
      description: "Diverse regional cuisines with aromatic spices, flavors, and cooking techniques.",
      icon: <Utensils className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Innovation Hub",
      description: "Emerging technology center with growing startups and research opportunities.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Educational Excellence",
      description: "World-class institutions with ancient knowledge systems and modern research facilities.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-primary to-secondary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5 -z-10"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1 mb-4 inline-block bg-primary/10 text-primary rounded-full text-sm font-bold">
            EXPERIENCE INDIA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block">
            Immerse in India's Rich Cultural Heritage
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Study in a country that blends ancient traditions with modern innovation, offering a unique cultural experience alongside world-class education
          </p>
        </motion.div>
        
        {/* Main Feature - Large Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Main image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1592285896110-8d88b39b4511?auto=format&fit=crop&w=800&q=80" 
                alt="Taj Mahal at sunrise" 
                className="w-full h-auto object-cover rounded-xl hover-scale"
              />
            </div>
            
            {/* Floating accent image */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-lg overflow-hidden shadow-xl border-4 border-white hidden md:block hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1551447456-b9ef333d8f95?auto=format&fit=crop&w=200&q=80" 
                alt="Holi festival celebrations" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating accent image */}
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white hidden md:block hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1582560474992-385ebb9b0081?auto=format&fit=crop&w=200&q=80" 
                alt="Traditional Indian dance" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold font-poppins mb-6 text-gray-800">
              A Journey Beyond <span className="text-primary">Education</span>
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Studying in India offers more than academic excellence—it's an immersive cultural journey. From ancient architectural marvels to vibrant festivals, diverse cuisines to rich artistic traditions, India provides a living classroom that enhances your educational experience.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              International students gain a unique perspective by participating in cultural celebrations, exploring diverse regions, and building global networks while receiving a world-class education at a fraction of the cost of other study destinations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-1">29</div>
                <div className="text-gray-700">UNESCO World Heritage Sites</div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-xl">
                <div className="text-4xl font-bold text-secondary mb-1">22</div>
                <div className="text-gray-700">Official Languages</div>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-4 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-1">9</div>
                <div className="text-gray-700">Major Classical Dances</div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/5 p-4 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                  36
                </div>
                <div className="text-gray-700">Cuisines Across States</div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-6 px-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              Explore Cultural Programs
            </Button>
          </motion.div>
        </div>
        
        {/* Cultural Aspects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {culturalAspects.map((aspect, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover-lift"
              variants={itemVariants}
            >
              <div className={`bg-gradient-to-r ${aspect.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 text-white`}>
                {aspect.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{aspect.title}</h3>
              <p className="text-gray-600">{aspect.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Large Cultural Gallery */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Visual Journey Through <span className="text-primary">India</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1598322972133-a8eebdaaa2ee?auto=format&fit=crop&w=600&q=80" 
                  alt="Traditional Indian wedding" 
                  className="w-full h-auto hover-scale"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1598220754530-456963f596fc?auto=format&fit=crop&w=600&q=80" 
                  alt="Indian classical dance performance" 
                  className="w-full h-auto hover-scale"
                />
              </div>
            </div>
            
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1590332345549-ea8f93b336ed?auto=format&fit=crop&w=600&q=80" 
                  alt="Modern university campus in India" 
                  className="w-full h-auto hover-scale"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1580400472132-343b4dfbe816?auto=format&fit=crop&w=600&q=80" 
                  alt="Indian temple architecture" 
                  className="w-full h-auto hover-scale"
                />
              </div>
            </div>
            
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1516641051054-9df6a1aad654?auto=format&fit=crop&w=600&q=80" 
                  alt="Indian street food" 
                  className="w-full h-auto hover-scale"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1566552881560-02559a8a13c5?auto=format&fit=crop&w=600&q=80" 
                  alt="Modern student life in India" 
                  className="w-full h-auto hover-scale"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalShowcase;
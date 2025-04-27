import { Check, Music, Users, Utensils, Globe, Camera, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const StudentLife = () => {
  const activities = [
    {
      title: "Cultural Festivals",
      icon: <Music className="h-8 w-8 text-primary" />,
      description: "Participate in vibrant celebrations like Holi, Diwali, and campus cultural fests with music, dance, and art.",
      image: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Student Clubs",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "Join diverse clubs from robotics and debate to music and sports, developing skills while making friends.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Culinary Exploration",
      icon: <Utensils className="h-8 w-8 text-primary" />,
      description: "Experience India's rich culinary diversity, from street food adventures to traditional regional cuisines.",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&h=400",
    },
    {
      title: "Travel Experiences",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Explore India's breathtaking landscapes from the Himalayas to beautiful beaches on student trips and excursions.",
      image: "https://images.unsplash.com/photo-1506461883276-594a9d6add46?auto=format&fit=crop&w=600&h=400",
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&h=400",
      alt: "Students performing traditional dance",
      caption: "Annual Cultural Festival"
    },
    {
      src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&h=400",
      alt: "Students playing sports",
      caption: "Sports Tournament"
    },
    {
      src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&h=400",
      alt: "Students studying together",
      caption: "Collaborative Learning"
    },
    {
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&h=400",
      alt: "Campus festival with decorations",
      caption: "Diwali Celebrations"
    },
    {
      src: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?auto=format&fit=crop&w=600&h=400",
      alt: "Students in a technology lab",
      caption: "Innovation Hub"
    },
    {
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&h=400",
      alt: "International student group",
      caption: "Global Connections"
    }
  ];

  const highlights = [
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Capture Memories",
      description: "Create unforgettable moments and build a lifelong connection with India's culture and people."
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
      title: "Build Networks",
      description: "Develop a global professional network with students from over 85 countries studying in India."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Discover Yourself",
      description: "Grow personally and discover new strengths through immersion in a diverse cultural environment."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="student-life" className="py-16 md:py-24 bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
            Vibrant <span className="text-primary">Student Life</span> in India
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience a colorful blend of cultures, traditions, and activities that make studying in India truly transformative
          </p>
        </motion.div>
        
        {/* Student Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                  width="600" 
                  height="400"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {activity.icon}
                  <h3 className="text-xl font-bold ml-3">{activity.title}</h3>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Gallery with Hover Effects */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center">Life Beyond the Classroom</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div 
                key={index} 
                className="gallery-image overflow-hidden rounded-xl shadow-lg relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-72 object-cover transition-transform group-hover:scale-110 duration-500" 
                  width="600" 
                  height="400" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                  <h4 className="text-white font-medium">{image.caption}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Highlights Section */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-primary hover:bg-secondary text-white font-bold">
              View Student Stories
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;

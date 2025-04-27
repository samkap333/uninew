import { motion } from "framer-motion";
import { GraduationCap, Microscope, Palette, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";



const TopCourses = () => {
  const courses = [
    {
      title: "Engineering",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      description: "Cutting-edge programs in Computer Science, Electronics, Civil, and Mechanical Engineering at India's prestigious IITs and NITs.",
      image: "https://images.unsplash.com/photo-1581092160607-57d96cd197cc?auto=format&fit=crop&w=600&h=400",
      popular: ["Computer Science", "Electronics", "Mechanical"]
    },
    {
      title: "Medical Sciences",
      icon: <Microscope className="h-10 w-10 text-primary" />,
      description: "Globally recognized medical education with state-of-the-art facilities and comprehensive clinical exposure at top medical institutions.",
      image: "https://images.unsplash.com/photo-1631815588090-d1bcbe9adb38?auto=format&fit=crop&w=600&h=400",
      popular: ["MBBS", "Dentistry", "Pharmacy"]
    },
    {
      title: "Arts & Humanities",
      icon: <Palette className="h-10 w-10 text-primary" />,
      description: "Rich courses in Literature, Philosophy, History, and more, with a unique blend of traditional Indian knowledge and modern perspectives.",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&h=400",
      popular: ["Literature", "Psychology", "International Relations"]
    },
    {
      title: "Media & Communication",
      icon: <Camera className="h-10 w-10 text-primary" />,
      description: "Dynamic programs in Journalism, Film Studies, Digital Media, and Mass Communication in one of the world's largest media markets.",
      image: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?auto=format&fit=crop&w=600&h=400",
      popular: ["Journalism", "Digital Media", "Film Production"]
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Top Courses in India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of internationally recognized programs across various disciplines
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={`${course.title} Programs`} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
                  width="600" 
                  height="400"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white py-1 px-3 rounded-full text-sm font-medium">
                  Popular Choice
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  {course.icon}
                  <h3 className="text-xl font-bold ml-3">{course.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mb-4">
                  <p className="font-medium mb-2">Popular Programs:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.popular.map((program, idx) => (
                      <span key={idx} className="bg-accent/30 text-primary px-3 py-1 rounded-full text-sm">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button className="bg-primary hover:bg-secondary text-white font-bold">
            View All Programs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCourses;
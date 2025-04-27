import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

type University = {
  name: string;
  description: string;
  badge: string;
  image: string;
};

const Universities = () => {
  const universities: University[] = [
    {
      name: "Delhi University",
      description: "A leading comprehensive institution with prestigious programs in arts, commerce, and sciences.",
      badge: "Top Ranked",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600"
    },
    {
      name: "IIT Bombay",
      description: "One of India's premier engineering institutions with cutting-edge research facilities.",
      badge: "Engineering Focus",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600"
    },
    {
      name: "Manipal Academy",
      description: "Renowned for medical sciences and engineering with state-of-the-art infrastructure.",
      badge: "Medical Excellence",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="universities" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Top Universities in India</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover India's premier educational institutions offering world-class programs across various disciplines
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {universities.map((university, index) => (
            <motion.div 
              key={index}
              className="university-card bg-white rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <img 
                src={university.image} 
                alt={`${university.name} Campus`} 
                className="w-full h-48 object-cover" 
                width="600" 
                height="400"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-4">{university.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-accent/30 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {university.badge}
                  </span>
                  <Link href="/universities">
                    <a className="text-primary font-medium hover:underline">Learn more →</a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/universities">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold">
              View All Universities
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Universities;

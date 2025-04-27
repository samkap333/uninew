import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const ourValues = [
    {
      title: "Student-First Approach",
      description: "We prioritize the unique needs and aspirations of each student, providing personalized guidance throughout their journey."
    },
    {
      title: "Excellence & Quality",
      description: "We partner with only the most reputable Indian universities that meet our strict standards for academic excellence."
    },
    {
      title: "Transparency",
      description: "We maintain clear communication and provide honest guidance about admission chances, costs, and opportunities."
    },
    {
      title: "Cultural Integration",
      description: "We help students not just with academics but with understanding and embracing Indian culture for a holistic experience."
    }
  ];

  const ourTeam = [
    {
      name: "Dr. Rajiv Sharma",
      role: "Founder & Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400",
      bio: "With over 20 years in international education, Dr. Sharma founded UNIportal India with a vision to make Indian education accessible globally."
    },
    {
      name: "Priya Patel",
      role: "Head of Admissions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400",
      bio: "Priya brings 12 years of experience in university admissions and has helped over 5,000 students secure placements in top Indian institutions."
    },
    {
      name: "Michael Chen",
      role: "International Relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
      bio: "As a former international student himself, Michael understands the challenges faced by students and helps bridge cultural gaps."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">About UNIportal India</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A leading educational consultancy dedicated to supporting international students in pursuing higher education at top universities across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-poppins mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                UNIportal India was founded in 2010 with a mission to bridge the gap between international students and India's world-class educational institutions. What began as a small advisory service has grown into a comprehensive consultancy that has helped thousands of students from over 50 countries realize their academic dreams in India.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Dr. Rajiv Sharma, recognized the untapped potential of Indian universities on the global stage and created UNIportal to showcase these opportunities to international students.
              </p>
              <p className="text-gray-600">
                Today, we pride ourselves on offering end-to-end services, from admission guidance and documentation to visa support, making the entire process smooth, transparent, and stress-free for every student.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" 
                alt="UNIportal team meeting" 
                className="rounded-xl shadow-xl"
                width="800"
                height="600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes UNIportal India stand out from other educational consultancies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to guiding your educational journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourTeam.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                  width="400" 
                  height="300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold mb-2">12+</h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p>Students Placed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Countries Served</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p>Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
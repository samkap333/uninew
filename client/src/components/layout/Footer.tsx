import { Link } from "wouter";
import { GraduationCap } from "lucide-react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Universities", href: "/#universities" },
    { name: "Student Life", href: "/#student-life" },
    { name: "Top Courses", href: "/#courses" },
    { name: "Application Process", href: "/#process" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Apply Now", href: "/#apply" },
  ];

  const programs = [
    { name: "Engineering", href: "#" },
    { name: "Medicine", href: "#" },
    { name: "Business", href: "#" },
    { name: "Arts & Humanities", href: "#" },
    { name: "Sciences", href: "#" },
    { name: "All Programs", href: "#" },
  ];

  const contactInfo = [
    { 
      icon: <Mail className="text-primary mr-2" size={16} />, 
      text: "admissions@studyindia.com" 
    },
    { 
      icon: <Phone className="text-primary mr-2" size={16} />, 
      text: "+91 123 456 7890" 
    },
    { 
      icon: <MapPin className="text-primary mr-2" size={16} />, 
      text: "International Student Center\nNew Delhi, India 110001" 
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">StudyIndia</h3>
            <p className="text-gray-400 mb-4">
              Your gateway to world-class education and cultural experiences in India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-white hover:text-primary transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href} 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="text-gray-400 whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} StudyIndia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

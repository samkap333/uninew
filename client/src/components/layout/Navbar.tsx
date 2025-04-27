import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/", exact: true },
    { name: "About", href: "/about", exact: true },
    { name: "Universities", href: "/universities", exact: true },
    { name: "Student Life", href: "/student-life", exact: true },
    { name: "Top Courses", href: "/top-courses", exact: true },
    { name: "Application", href: "/#process", exact: false },
    { name: "Testimonials", href: "/#testimonials", exact: false },
    { name: "Contact", href: "/#contact", exact: false }
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold font-poppins text-primary flex items-center">
                <GraduationCap className="mr-2" />
                Uniportal India
              </a>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.exact ? (
                <Link 
                  key={link.name}
                  href={link.href}
                >
                  <a className={`font-medium hover:text-primary transition-colors ${location === link.href ? 'text-primary' : ''}`}>
                    {link.name}
                  </a>
                </Link>
              ) : (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          
          <div className="hidden md:block">
            <a href="/#apply">
              <Button className="bg-primary hover:bg-secondary text-white font-medium">
                Apply Now
              </Button>
            </a>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.exact ? (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <a className={`font-medium hover:text-primary transition-colors py-2 border-b border-gray-100 ${location === link.href ? 'text-primary' : ''}`}>
                    {link.name}
                  </a>
                </Link>
              ) : (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="font-medium hover:text-primary transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a 
              href="/#apply"
              className="bg-primary hover:bg-secondary text-white font-medium px-6 py-2 rounded-md transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import { 
  Music, 
  Utensils, 
  Users, 
  BookOpen, 
  Landmark, 
  MapPin, 
  Calendar, 
  GraduationCap,
  Building,
  Image,
  Palmtree,
  Dumbbell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// Image gallery for different categories
const galleries = {
  campus: [
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1562774053-81f9c9bc0b4d?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80",
  ],
  cultural: [
    "https://images.unsplash.com/photo-1547366868-f5d6fab0440f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1594750852563-5ed8d0b44e3b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1624454002302-71ff9bfa5067?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1610020645258-6b4d9ae877c4?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1624810311503-4f8bb10cbe97?auto=format&fit=crop&w=1000&q=80",
  ],
  sports: [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1599474401061-961918d86baa?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=80",
  ],
  accommodation: [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1576502200916-3808e07386a5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1523368749929-6b8e38c66ce4?auto=format&fit=crop&w=1000&q=80",
  ],
  travel: [
    "https://images.unsplash.com/photo-1506461883276-594a9480ecb5?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1524492727074-f77e1f5eb7c0?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1576487236230-eaa4afe68618?auto=format&fit=crop&w=1000&q=80",
  ]
};

// Cultural events and festivals commonly celebrated on campus
const culturalEvents = [
  {
    name: "Diwali Celebration",
    description: "Festival of lights celebrated with colorful rangoli, diyas, fireworks, and cultural performances",
    month: "October-November",
    image: "https://images.unsplash.com/photo-1513086670993-297187d3a7e8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Holi Festival",
    description: "Vibrant festival of colors where students celebrate by applying colors and enjoying music and dance",
    month: "March",
    image: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Annual Cultural Fest",
    description: "University-wide cultural festival featuring music concerts, dance competitions, and theatrical performances",
    month: "February-March",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Classical Dance Night",
    description: "Showcasing traditional Indian dance forms like Bharatanatyam, Kathak, Odissi, and Kuchipudi",
    month: "December",
    image: "https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Music Festival",
    description: "Celebration of classical and contemporary Indian music with performances by students and professional artists",
    month: "January",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=800&q=80"
  }
];

// Sports and activities available on campus
const sportsActivities = [
  {
    name: "Cricket",
    category: "Team Sport",
    description: "The most popular sport in India, with inter-university tournaments and campus leagues",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Badminton",
    category: "Racquet Sport",
    description: "Indoor courts available for recreational play and competitive tournaments",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Yoga",
    category: "Wellness",
    description: "Regular yoga sessions focusing on physical and mental wellbeing",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Football",
    category: "Team Sport",
    description: "Growing in popularity with university teams competing in regional tournaments",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Basketball",
    category: "Team Sport",
    description: "Indoor and outdoor courts available for recreational and competitive play",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chess",
    category: "Indoor Game",
    description: "Strong chess culture with regular tournaments and clubs",
    image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80"
  }
];

// Campus housing options
const housingOptions = [
  {
    name: "On-Campus Hostels",
    description: "University-managed accommodations with single, double, or triple occupancy rooms",
    features: ["Wi-Fi", "Dining Hall", "Laundry", "Study Rooms", "24/7 Security"],
    costRange: "$800-$1,500 per semester",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "International Student Housing",
    description: "Specialized accommodation for international students with additional support services",
    features: ["En-suite Bathrooms", "Meal Plans", "International Student Support", "Cultural Activities"],
    costRange: "$1,200-$2,000 per semester",
    image: "https://images.unsplash.com/photo-1576502200916-3808e07386a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Private Apartments",
    description: "Off-campus housing options in nearby areas with easy commute to university",
    features: ["Kitchen", "Living Room", "Privacy", "Independent Living"],
    costRange: "$200-$500 per month",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Paying Guest Accommodations",
    description: "Stay with local families with home-cooked meals and cultural immersion",
    features: ["Home-cooked Meals", "Family Environment", "Cultural Experience", "Lower Cost"],
    costRange: "$150-$300 per month",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80"
  }
];

// Tourism and travel opportunities
const travelDestinations = [
  {
    name: "Taj Mahal, Agra",
    description: "One of the seven wonders of the world and India's most iconic monument",
    distanceFromDelhi: "230 km",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Goa Beaches",
    description: "Beautiful coastal state with stunning beaches, water sports, and vibrant nightlife",
    distanceFromMumbai: "590 km",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Jaipur, Rajasthan",
    description: "The 'Pink City' known for its stunning palaces, forts, and rich cultural heritage",
    distanceFromDelhi: "280 km",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Darjeeling",
    description: "Hill station famous for tea plantations, stunning Himalayan views, and the toy train",
    distanceFromKolkata: "600 km",
    category: "Mountain",
    image: "https://images.unsplash.com/photo-1544634073-e4bb44bd9ea8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Varanasi",
    description: "One of the world's oldest continuously inhabited cities, spiritual capital of India",
    distanceFromDelhi: "800 km",
    category: "Spiritual",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Kerala Backwaters",
    description: "Serene network of canals, lakes, and lagoons perfect for houseboat cruises",
    distanceFromBangalore: "550 km",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
  }
];

const StudentLife = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80" 
            alt="Students on campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/80"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Decorative shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary rounded-full animate-pulse opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6">
              LIFE BEYOND ACADEMICS
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 drop-shadow-md">
              Experience Vibrant <span className="text-white font-extrabold relative">
                Student Life
                <span className="absolute bottom-2 left-0 w-full h-2 bg-accent/50 -z-10 rounded-full"></span>
              </span> in India
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Immerse yourself in a culturally rich environment with diverse experiences, events, and activities that make studying in India truly unforgettable
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transform transition-all font-medium shadow-lg" size="lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Explore Universities
              </Button>
              <Button className="bg-transparent hover:bg-white/30 text-white border-2 border-white font-medium hover:scale-105 transform transition-all backdrop-blur-sm" size="lg">
                <Image className="mr-2 h-5 w-5" />
                View Gallery
              </Button>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white border border-white/20 hover:bg-white/20 transition-all hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-1">150+</h3>
                <p className="text-sm opacity-90">Cultural Events</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white border border-white/20 hover:bg-white/20 transition-all hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold mb-1">50+</h3>
                <p className="text-sm opacity-90">Sports Activities</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white border border-white/20 hover:bg-white/20 transition-all hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-1">100+</h3>
                <p className="text-sm opacity-90">Student Clubs</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white border border-white/20 hover:bg-white/20 transition-all hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold mb-1">30+</h3>
                <p className="text-sm opacity-90">Festivals</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white z-10" style={{ borderTopLeftRadius: '50% 100%', borderTopRightRadius: '50% 100%' }}></div>
      </section>
      
      {/* Main Content with Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
              EXPLORE STUDENT LIFE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block mb-4">
              Discover What Makes Student Life in India Special
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From vibrant campus activities to cultural immersion, sports, accommodations, and travel opportunities, 
              explore all aspects of being an international student in India
            </p>
          </motion.div>
          
          <Tabs defaultValue="campus" className="w-full">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 mb-12 p-1.5 bg-gray-100/70 rounded-xl gap-2">
              <TabsTrigger 
                value="campus" 
                className="flex items-center gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium"
              >
                <Building className="h-4 w-4" />
                <span className="hidden md:inline">Campus Life</span>
                <span className="md:hidden">Campus</span>
              </TabsTrigger>
              <TabsTrigger 
                value="cultural" 
                className="flex items-center gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium"
              >
                <Music className="h-4 w-4" />
                <span className="hidden md:inline">Cultural Events</span>
                <span className="md:hidden">Cultural</span>
              </TabsTrigger>
              <TabsTrigger 
                value="sports" 
                className="flex items-center gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium"
              >
                <Dumbbell className="h-4 w-4" />
                <span className="hidden md:inline">Sports & Activities</span>
                <span className="md:hidden">Sports</span>
              </TabsTrigger>
              <TabsTrigger 
                value="accommodation" 
                className="flex items-center gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium"
              >
                <Landmark className="h-4 w-4" />
                <span className="hidden md:inline">Accommodation</span>
                <span className="md:hidden">Housing</span>
              </TabsTrigger>
              <TabsTrigger 
                value="travel" 
                className="flex items-center gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium"
              >
                <Palmtree className="h-4 w-4" />
                <span className="hidden md:inline">Travel & Tourism</span>
                <span className="md:hidden">Travel</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Campus Life Tab */}
            <TabsContent value="campus" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold font-poppins mb-4">Life on Indian Campuses</h2>
                    <p className="text-gray-600 mb-6">
                      Indian university campuses are vibrant hubs of activity, offering a unique blend of academic rigor and cultural experiences. From state-of-the-art facilities to serene study spots, campuses provide an environment where students can thrive both intellectually and personally.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Most universities feature modern libraries, research centers, cafeterias, recreational areas, and green spaces. The campus atmosphere encourages interaction between domestic and international students, creating a truly global learning environment.
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Academic Resources</h3>
                          <p className="text-gray-600">State-of-the-art libraries, labs, and research facilities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Student Organizations</h3>
                          <p className="text-gray-600">Diverse clubs and societies for various interests</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Utensils className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Dining Options</h3>
                          <p className="text-gray-600">Cafeterias serving local and international cuisine</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Carousel className="w-full max-w-md mx-auto">
                      <CarouselContent>
                        {galleries.campus.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <div className="overflow-hidden rounded-xl">
                                <img 
                                  src={image} 
                                  alt={`Campus life image ${index+1}`} 
                                  className="w-full aspect-[4/3] object-cover hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">A Day in the Life of an International Student</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3">Morning</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">7:00 AM</span>
                          <span>Wake up and get ready for the day</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">8:00 AM</span>
                          <span>Breakfast at the hostel dining hall</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">9:00 AM</span>
                          <span>First lecture of the day</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">11:00 AM</span>
                          <span>Library study session or practical lab</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3">Afternoon</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">1:00 PM</span>
                          <span>Lunch with friends at campus cafeteria</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">2:00 PM</span>
                          <span>Afternoon lectures or tutorials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">4:00 PM</span>
                          <span>Study group with classmates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">5:00 PM</span>
                          <span>Sports or club activities</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3">Evening</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">7:00 PM</span>
                          <span>Dinner at hostel or with friends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">8:00 PM</span>
                          <span>Study time or cultural activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">10:00 PM</span>
                          <span>Video call with family back home</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary font-bold">11:00 PM</span>
                          <span>Prepare for the next day and sleep</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            {/* Cultural Events Tab */}
            <TabsContent value="cultural" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-poppins mb-4">Cultural Celebrations & Events</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Immerse yourself in India's rich cultural tapestry through vibrant campus celebrations, festivals, and performances that bring together traditional and contemporary artistic expressions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {culturalEvents.map((event, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-xl">{event.name}</h3>
                          <Badge variant="outline" className="bg-primary/5 text-primary">
                            {event.month}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                        <Button variant="link" className="text-primary p-0">
                          Learn more
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent/5 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Cultural Immersion Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Music className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Performing Arts</h4>
                      <p className="text-gray-600">
                        Join clubs for classical and folk dance, music, or theater to learn traditional Indian art forms
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Cultural Exchange</h4>
                      <p className="text-gray-600">
                        Participate in programs where international students share their cultures with Indian peers
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">Festival Celebrations</h4>
                      <p className="text-gray-600">
                        Experience major Indian festivals celebrated on campus with traditional customs and activities
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            {/* Sports & Activities Tab */}
            <TabsContent value="sports" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-poppins mb-4">Sports & Recreational Activities</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Stay active and engaged through a variety of sports and recreational activities that promote physical wellbeing, teamwork, and a balanced student life.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {sportsActivities.map((activity, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-xl">{activity.name}</h3>
                          <Badge variant="outline" className="bg-secondary/5 text-secondary">
                            {activity.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600">
                          {activity.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">Sports Facilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Dumbbell className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">Modern Gymnasiums</h4>
                          <p className="text-gray-600">Fully equipped fitness centers with weights, cardio equipment, and sometimes swimming pools</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">Sports Fields</h4>
                          <p className="text-gray-600">Cricket grounds, football fields, and multipurpose courts</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Building className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">Indoor Courts</h4>
                          <p className="text-gray-600">For badminton, table tennis, basketball, and volleyball</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">Annual Sports Events</h4>
                          <p className="text-gray-600">Inter-university tournaments and sports festivals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Carousel className="w-full max-w-5xl">
                    <CarouselContent>
                      {galleries.sports.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <div className="overflow-hidden rounded-xl aspect-video">
                              <img 
                                src={image} 
                                alt={`Sports activity image ${index+1}`} 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </motion.div>
            </TabsContent>
            
            {/* Accommodation Tab */}
            <TabsContent value="accommodation" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-poppins mb-4">Student Accommodation Options</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Find comfortable and affordable housing options that suit your needs, whether on-campus or in the surrounding communities.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {housingOptions.map((option, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="md:flex h-full">
                        <div className="md:w-2/5">
                          <img 
                            src={option.image} 
                            alt={option.name}
                            className="h-48 md:h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-3/5">
                          <h3 className="font-bold text-xl mb-2">{option.name}</h3>
                          <p className="text-gray-600 mb-4">
                            {option.description}
                          </p>
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Features:</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {option.features.map((feature, i) => (
                                <Badge key={i} variant="secondary" className="font-normal text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Cost Range:</span>
                            <span className="text-primary font-semibold">{option.costRange}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Accommodation Tips for International Students</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Before Arrival</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Apply for university housing early (at least 3-6 months in advance)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Research off-campus options if on-campus housing is unavailable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Arrange temporary accommodation for your first few days</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-primary">During Your Stay</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Respect hostel or apartment rules and regulations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Participate in hostel events to meet other students</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Report maintenance issues promptly to housing staff</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Safety Considerations</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Always verify accommodation providers before making payments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Choose accommodations in safe neighborhoods with good transport links</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>Save emergency contact numbers of housing staff and security</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            
            {/* Travel & Tourism Tab */}
            <TabsContent value="travel" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-poppins mb-4">Explore India During Your Studies</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Take advantage of your time in India to discover breathtaking destinations, rich cultural heritage, and diverse landscapes across the country.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {travelDestinations.map((destination, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={destination.image} 
                          alt={destination.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-xl">{destination.name}</h3>
                          <Badge variant="outline" className="bg-accent/10 text-accent">
                            {destination.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {destination.description}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>
                            {Object.keys(destination).find(key => key.startsWith('distanceFrom')) 
                              ? `${Object.entries(destination).find(([key]) => key.startsWith('distanceFrom'))?.[1]} from ${Object.entries(destination).find(([key]) => key.startsWith('distanceFrom'))?.[0].replace('distanceFrom', '')}`
                              : null}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-center">Travel Tips for International Students</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary mt-1 flex-shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Plan Around Academic Breaks</h4>
                        <p className="text-gray-600">Utilize semester breaks, holidays, and long weekends for travel without affecting your studies.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary mt-1 flex-shrink-0">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Group Travel</h4>
                        <p className="text-gray-600">Join student travel groups or university-organized trips for safer and more affordable experiences.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary mt-1 flex-shrink-0">
                        <Building className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Student Discounts</h4>
                        <p className="text-gray-600">Use your student ID for discounts on transportation, accommodations, and attraction entries.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full text-primary mt-1 flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Regional Exploration</h4>
                        <p className="text-gray-600">Start by exploring destinations near your university before venturing to farther locations.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Carousel className="w-full max-w-5xl">
                    <CarouselContent>
                      {galleries.travel.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <div className="overflow-hidden rounded-xl aspect-video">
                              <img 
                                src={image} 
                                alt={`Travel destination image ${index+1}`} 
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Student Life in India?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of international students who are creating unforgettable memories while receiving a world-class education in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
              Apply Now
            </Button>
            <Button className="bg-transparent hover:bg-white/20 border border-white" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
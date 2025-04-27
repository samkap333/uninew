import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, GraduationCap, Award, Star, Filter, Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

// Define University type
interface University {
  id: number;
  name: string;
  shortName: string;
  logo: string;
  location: string;
  state: string;
  type: "Public" | "Private" | "Deemed";
  established: number;
  ranking: number;
  accreditation: string;
  scholarships: boolean;
  internationalStudents: number;
  description: string;
  featuredCourses: string[];
  tuitionRange: string;
  website: string;
  facilities: string[];
}

const Universities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [scholarshipFilter, setScholarshipFilter] = useState(false);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  // Constants for location and type filters
  const locations = ["All", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Punjab", "Uttar Pradesh", "West Bengal", "Telangana", "Gujarat"];
  const types = ["All", "Public", "Private", "Deemed"];

  // Sample university data
  const universities: University[] = [
    {
      id: 1,
      name: "Indian Institute of Technology Delhi",
      shortName: "IIT Delhi",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/150px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
      location: "New Delhi",
      state: "Delhi",
      type: "Public",
      established: 1961,
      ranking: 1,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 500,
      description: "IIT Delhi is one of the premier engineering and research institutions in India, known for its cutting-edge research and exceptional faculty.",
      featuredCourses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Biotechnology"],
      tuitionRange: "$4,000 - $6,000 per year",
      website: "https://www.iitd.ac.in/",
      facilities: ["Advanced Research Labs", "Sports Complex", "International Hostel", "Central Library"]
    },
    {
      id: 2,
      name: "Indian Institute of Science",
      shortName: "IISc Bangalore",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Indian_Institute_of_Science_2019_logo.svg/150px-Indian_Institute_of_Science_2019_logo.svg.png",
      location: "Bangalore",
      state: "Karnataka",
      type: "Public",
      established: 1909,
      ranking: 2,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 450,
      description: "IISc is India's premier research institution focusing on scientific and technological research, with strong programs in engineering and sciences.",
      featuredCourses: ["Engineering Sciences", "Physics", "Computer Science", "Aerospace Engineering"],
      tuitionRange: "$3,500 - $5,500 per year",
      website: "https://www.iisc.ac.in/",
      facilities: ["Research Centers", "State-of-the-art Labs", "International Housing", "Supercomputing Facility"]
    },
    {
      id: 3,
      name: "University of Delhi",
      shortName: "DU",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/University_of_Delhi.svg/150px-University_of_Delhi.svg.png",
      location: "New Delhi",
      state: "Delhi",
      type: "Public",
      established: 1922,
      ranking: 3,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 700,
      description: "Delhi University is a premier university known for its diverse range of undergraduate and postgraduate programs in arts, commerce, and sciences.",
      featuredCourses: ["Economics", "English Literature", "Commerce", "Political Science"],
      tuitionRange: "$1,000 - $3,000 per year",
      website: "http://www.du.ac.in/",
      facilities: ["Libraries", "Sports Facilities", "International Student House", "Research Centers"]
    },
    {
      id: 4,
      name: "Jawaharlal Nehru University",
      shortName: "JNU",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Jawaharlal_Nehru_University_logo.svg/150px-Jawaharlal_Nehru_University_logo.svg.png",
      location: "New Delhi",
      state: "Delhi",
      type: "Public",
      established: 1969,
      ranking: 4,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 650,
      description: "JNU is renowned for its excellent programs in social sciences, international relations, and language studies with a diverse student community.",
      featuredCourses: ["International Relations", "Social Sciences", "Language Studies", "Environmental Sciences"],
      tuitionRange: "$800 - $2,500 per year",
      website: "https://www.jnu.ac.in/",
      facilities: ["Cultural Centers", "International Student Association", "Libraries", "Sports Complex"]
    },
    {
      id: 5,
      name: "Lovely Professional University",
      shortName: "LPU",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Lovely_Professional_University_logo.png/150px-Lovely_Professional_University_logo.png",
      location: "Phagwara",
      state: "Punjab",
      type: "Private",
      established: 2005,
      ranking: 5,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 3000,
      description: "LPU is one of India's largest private universities with a diverse range of programs and a strong focus on international student services.",
      featuredCourses: ["Engineering", "Business Management", "Hotel Management", "Pharmacy"],
      tuitionRange: "$3,000 - $6,000 per year",
      website: "https://www.lpu.in/",
      facilities: ["International Student Lounge", "Smart Classrooms", "Sports Complex", "On-campus Residences"]
    },
    {
      id: 6,
      name: "Manipal Academy of Higher Education",
      shortName: "MAHE",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Manipal_Academy_of_Higher_Education_logo.svg/150px-Manipal_Academy_of_Higher_Education_logo.svg.png",
      location: "Manipal",
      state: "Karnataka",
      type: "Deemed",
      established: 1953,
      ranking: 6,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 2500,
      description: "MAHE is a leading deemed university known for its medical, engineering, and management programs with a strong international presence.",
      featuredCourses: ["Medicine", "Engineering", "Management", "Communication"],
      tuitionRange: "$7,000 - $15,000 per year",
      website: "https://manipal.edu/",
      facilities: ["Advanced Hospitals", "Innovation Center", "International Center", "Sports Facilities"]
    },
    {
      id: 7,
      name: "BITS Pilani",
      shortName: "BITS",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Birla_Institute_of_Technology_%26_Science_Logo.svg/150px-Birla_Institute_of_Technology_%26_Science_Logo.svg.png",
      location: "Pilani",
      state: "Rajasthan",
      type: "Private",
      established: 1964,
      ranking: 7,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 300,
      description: "BITS Pilani is a premier engineering institute known for its rigorous curriculum and strong industry connections.",
      featuredCourses: ["Computer Science", "Mechanical Engineering", "Electronics", "Chemical Engineering"],
      tuitionRange: "$6,000 - $8,000 per year",
      website: "https://www.bits-pilani.ac.in/",
      facilities: ["Innovation Labs", "Incubation Center", "Sports Facilities", "Modern Hostels"]
    },
    {
      id: 8,
      name: "Amity University",
      shortName: "Amity",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Amity_University_logo.png/150px-Amity_University_logo.png",
      location: "Noida",
      state: "Uttar Pradesh",
      type: "Private",
      established: 2003,
      ranking: 8,
      accreditation: "NAAC A+",
      scholarships: true,
      internationalStudents: 1500,
      description: "Amity is one of the largest private university groups with a strong focus on global education and industry-relevant programs.",
      featuredCourses: ["Business Administration", "Engineering", "Biotechnology", "Fashion Design"],
      tuitionRange: "$4,000 - $8,000 per year",
      website: "https://www.amity.edu/",
      facilities: ["International Student Center", "Incubation Center", "Sports Academy", "Research Labs"]
    },
    {
      id: 9,
      name: "Vellore Institute of Technology",
      shortName: "VIT",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/150px-Vellore_Institute_of_Technology_seal_2017.svg.png",
      location: "Vellore",
      state: "Tamil Nadu",
      type: "Private",
      established: 1984,
      ranking: 9,
      accreditation: "NAAC A++",
      scholarships: true,
      internationalStudents: 2000,
      description: "VIT is known for its engineering and technology programs with a diverse international student community from over 60 countries.",
      featuredCourses: ["Computer Science", "Electronics Engineering", "Biotechnology", "Business Administration"],
      tuitionRange: "$4,500 - $7,000 per year",
      website: "https://vit.ac.in/",
      facilities: ["Technology Tower", "Central Library", "Indoor Stadium", "International Hostels"]
    },
    {
      id: 10,
      name: "Chandigarh University",
      shortName: "CU",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Chandigarh_University_Seal.svg/150px-Chandigarh_University_Seal.svg.png",
      location: "Mohali",
      state: "Punjab",
      type: "Private",
      established: 2012,
      ranking: 10,
      accreditation: "NAAC A+",
      scholarships: true,
      internationalStudents: 1800,
      description: "Chandigarh University offers modern education with strong industry connections and has students from over 50 countries.",
      featuredCourses: ["Engineering", "Business Studies", "Hospitality", "Applied Sciences"],
      tuitionRange: "$3,500 - $6,000 per year",
      website: "https://www.cuchd.in/",
      facilities: ["International Student Center", "Research Centers", "Sports Complex", "Modern Hostels"]
    },
    // Add more universities to reach 50 total
    // For brevity, I'm showing the first 10 here
  ];

  // Add more universities
  for (let i = 11; i <= 50; i++) {
    const states = ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Telangana", "West Bengal", "Uttar Pradesh", "Rajasthan", "Punjab", "Madhya Pradesh"];
    const types: ["Public", "Private", "Deemed"] = ["Public", "Private", "Deemed"];
    const courses = ["Engineering", "Medicine", "Business", "Arts", "Sciences", "Law", "Architecture", "Pharmacy", "Agriculture", "Design"];
    
    universities.push({
      id: i,
      name: `University ${i}`,
      shortName: `Uni${i}`,
      logo: "https://via.placeholder.com/150",
      location: `City ${i}`,
      state: states[i % 10],
      type: types[i % 3],
      established: 1900 + i,
      ranking: i,
      accreditation: i <= 20 ? "NAAC A++" : i <= 35 ? "NAAC A+" : "NAAC A",
      scholarships: i % 3 === 0,
      internationalStudents: 100 + (i * 20),
      description: `This is a leading ${types[i % 3].toLowerCase()} university in ${states[i % 10]} with excellent academic programs.`,
      featuredCourses: [courses[i % 10], courses[(i+1) % 10], courses[(i+2) % 10]],
      tuitionRange: `$${2000 + (i * 100)} - $${4000 + (i * 100)} per year`,
      website: `https://university${i}.edu`,
      facilities: ["Modern Classrooms", "Library", "Sports Facilities", "Student Housing"]
    });
  }

  // List of scholarship universities
  const scholarshipUniversities = universities.filter(uni => uni.scholarships && uni.ranking <= 15);

  // Effect to filter universities based on search and filters
  useEffect(() => {
    let filtered = [...universities];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(query) || 
        uni.location.toLowerCase().includes(query) ||
        uni.state.toLowerCase().includes(query)
      );
    }
    
    // Filter by location
    if (locationFilter && locationFilter !== "All") {
      filtered = filtered.filter(uni => uni.state === locationFilter);
    }
    
    // Filter by type
    if (typeFilter && typeFilter !== "All") {
      filtered = filtered.filter(uni => uni.type === typeFilter);
    }
    
    // Filter by scholarship
    if (scholarshipFilter) {
      filtered = filtered.filter(uni => uni.scholarships);
    }
    
    // Filter by tab
    if (activeTab === "top10") {
      filtered = filtered.filter(uni => uni.ranking <= 10);
    } else if (activeTab === "scholarship") {
      filtered = filtered.filter(uni => uni.scholarships);
    }
    
    setFilteredUniversities(filtered);
  }, [searchQuery, locationFilter, typeFilter, scholarshipFilter, activeTab, universities]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative overflow-hidden pt-24 pb-16">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 -z-10"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="px-4 py-1 mb-4 inline-block bg-primary/10 text-primary rounded-full text-sm font-bold">
              Find Your Perfect Match
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Discover Universities in India
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Explore top-ranked universities across India, offering world-class education and vibrant campus experiences
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 mb-8 border border-primary/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow group">
                <Search className="absolute left-3 top-3 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                <Input 
                  type="text" 
                  placeholder="Search by university name or location..." 
                  className="pl-10 py-6 text-base border-2 focus:border-primary/50 transition-all rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                onClick={() => {
                  // Scroll to results section
                  document.getElementById('results')?.scrollIntoView({behavior: 'smooth'});
                }}
              >
                Search Universities
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white cursor-pointer transition-colors">Delhi</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white cursor-pointer transition-colors">Mumbai</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white cursor-pointer transition-colors">Bangalore</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white cursor-pointer transition-colors">Engineering</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary hover:text-white cursor-pointer transition-colors">Medical</Badge>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12" id="results">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div 
            className="md:w-1/4 h-fit"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-primary/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-accent/10 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-2 text-white shadow-md">
                    <Filter size={18} />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Filters</h3>
                </div>
                
                {/* Location Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2 text-gray-700">
                    <div className="bg-primary/10 rounded-full p-1">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    Location
                  </label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="border-2 focus:border-primary/50 transition-all rounded-lg">
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2 flex items-center gap-2 text-gray-700">
                    <div className="bg-secondary/10 rounded-full p-1">
                      <Building size={16} className="text-secondary" />
                    </div>
                    University Type
                  </label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="border-2 focus:border-secondary/50 transition-all rounded-lg">
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Scholarship Filter */}
                <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        className="peer sr-only" 
                        checked={scholarshipFilter}
                        onChange={(e) => setScholarshipFilter(e.target.checked)}
                      />
                      <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-secondary" />
                    </div>
                    <span className="text-sm font-medium flex items-center gap-2">
                      <span className="bg-accent/10 rounded-full p-1">
                        <Award size={16} className="text-accent" />
                      </span>
                      Scholarship Available
                    </span>
                  </label>
                </div>
                
                {/* Reset Filters */}
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-semibold rounded-lg py-5"
                  onClick={() => {
                    setSearchQuery("");
                    setLocationFilter("");
                    setTypeFilter("");
                    setScholarshipFilter(false);
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-5 rounded-xl mt-6 shadow-lg">
              <h3 className="font-bold mb-2">Quick Stats</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Universities:</span>
                  <span className="font-bold">50+</span>
                </li>
                <li className="flex justify-between">
                  <span>International Students:</span>
                  <span className="font-bold">30,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>Programs:</span>
                  <span className="font-bold">1,200+</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            {/* University Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-primary/10 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/10 rounded-full"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                  Discover Your University
                </h2>
                
                <Tabs defaultValue="all" className="mb-4" onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-4 p-1 bg-gray-100/70 rounded-lg">
                    <TabsTrigger value="all" className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium">
                      All Universities
                    </TabsTrigger>
                    <TabsTrigger value="top10" className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium">
                      Top 10
                    </TabsTrigger>
                    <TabsTrigger value="scholarship" className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium">
                      Scholarships
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-white p-1.5 rounded-lg shadow-sm mr-3">
                        <GraduationCap className="text-primary h-5 w-5" />
                      </div>
                      <p className="text-gray-700">
                        <span className="font-bold text-primary">{filteredUniversities.length}</span> universities found
                      </p>
                    </div>
                    <Select defaultValue="ranking">
                      <SelectTrigger className="w-full md:w-[180px] border-2 focus:border-primary/50 transition-all rounded-lg">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ranking">Sort by Ranking</SelectItem>
                        <SelectItem value="name">Sort by Name</SelectItem>
                        <SelectItem value="location">Sort by Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-xl mb-6">
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <span>Did you know?</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {activeTab === "top10" 
                        ? "India's top universities have produced leaders in global tech companies like Google, Microsoft, and Adobe."
                        : activeTab === "scholarship" 
                        ? "Many Indian universities offer merit-based scholarships covering up to 100% of tuition fees for international students."
                        : "Indian universities offer over 1,000 different degree programs across all fields of study."}
                    </p>
                  </div>
                  
                  <TabsContent value="all" className="m-0">
                    <UniversityList universities={filteredUniversities} />
                  </TabsContent>
                  
                  <TabsContent value="top10" className="m-0">
                    <UniversityList universities={filteredUniversities} />
                  </TabsContent>
                  
                  <TabsContent value="scholarship" className="m-0">
                    <UniversityList universities={filteredUniversities} />
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component to display universities
const UniversityList = ({ universities }: { universities: University[] }) => {
  if (universities.length === 0) {
    return (
      <div className="text-center py-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
        <div className="bg-white w-24 h-24 mx-auto rounded-full shadow-md flex items-center justify-center mb-6">
          <GraduationCap size={40} className="text-primary/70" />
        </div>
        <h3 className="text-2xl font-bold text-gray-700 mb-3">No Universities Found</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          We couldn't find any universities matching your current filters. Try adjusting your search criteria.
        </p>
        <div className="bg-primary/5 inline-block px-6 py-3 rounded-lg">
          <p className="text-primary text-sm font-medium">Suggestions:</p>
          <ul className="text-gray-600 text-sm mt-2 text-left list-disc list-inside">
            <li>Try a different location filter</li>
            <li>Reset scholarship filter</li>
            <li>Use a more general search term</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {universities.map((university) => (
        <UniversityCard key={university.id} university={university} />
      ))}
    </div>
  );
};

// University card component
const UniversityCard = ({ university }: { university: University }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all border-t-4 border-primary rounded-xl">
        <CardHeader className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Logo Section */}
            <div className="md:w-1/4 p-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 border-r border-b md:border-b-0 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/10 rounded-full"></div>
              
              <img 
                src={university.logo} 
                alt={`${university.name} logo`} 
                className="max-h-24 object-contain relative z-10 hover-scale" 
              />
            </div>
            
            {/* Info Section */}
            <div className="md:w-3/4 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <div>
                  <CardTitle className="text-xl mb-1 text-gray-800">
                    {university.name}
                    {university.ranking <= 5 && (
                      <span className="ml-2 inline-flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-gray-600">{university.location}, {university.state}</span>
                  </CardDescription>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Badge variant="outline" className="mr-2 bg-primary/10 text-primary border-primary/20 font-semibold">
                    Rank #{university.ranking}
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary/90 border-secondary/20">
                    {university.type}
                  </Badge>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{university.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {university.featuredCourses.slice(0, 4).map((course, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gradient-to-r from-secondary/80 to-accent/80 text-white hover:from-secondary hover:to-accent transition-all cursor-pointer font-normal text-xs shadow-sm"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-4 pb-2 bg-gradient-to-r from-gray-50 to-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-2 hover:bg-white/80 rounded-lg transition-colors">
              <p className="text-primary mb-1 font-medium">Established</p>
              <p className="font-semibold text-gray-800">{university.established}</p>
            </div>
            <div className="p-2 hover:bg-white/80 rounded-lg transition-colors">
              <p className="text-primary mb-1 font-medium">Accreditation</p>
              <p className="font-semibold text-gray-800">{university.accreditation}</p>
            </div>
            <div className="p-2 hover:bg-white/80 rounded-lg transition-colors">
              <p className="text-primary mb-1 font-medium">Int'l Students</p>
              <p className="font-semibold text-gray-800">{university.internationalStudents.toLocaleString()}+</p>
            </div>
            <div className="p-2 hover:bg-white/80 rounded-lg transition-colors">
              <p className="text-primary mb-1 font-medium">Tuition Range</p>
              <p className="font-semibold text-gray-800">{university.tuitionRange}</p>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="details" className="border-primary/10">
              <AccordionTrigger className="text-sm font-medium text-primary hover:text-secondary transition-colors">
                View Additional Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-4 px-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <h4 className="font-semibold mb-3 text-primary">Campus Facilities</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {university.facilities.map((facility, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="font-normal bg-white hover:bg-primary/5 transition-colors"
                        >
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <h4 className="font-semibold mb-2 text-primary">Scholarships</h4>
                    <div className={`p-3 rounded-lg ${university.scholarships ? 'bg-green-50 text-green-800' : 'bg-amber-50 text-amber-800'}`}>
                      {university.scholarships 
                        ? "International student scholarships available based on merit and need."
                        : "Limited scholarship options for international students."}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className={`p-1.5 rounded-full mr-2 
                        ${university.ranking <= 10 ? 'bg-yellow-100' : 
                          university.ranking <= 30 ? 'bg-blue-100' : 
                          'bg-gray-100'}`}
                      >
                        <Star className={`h-4 w-4 
                          ${university.ranking <= 10 ? 'fill-yellow-400 text-yellow-400' : 
                            university.ranking <= 30 ? 'fill-blue-400 text-blue-400' : 
                            'fill-gray-400 text-gray-400'}`} 
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {university.ranking <= 10 ? "Top Tier University" : 
                         university.ranking <= 30 ? "Highly Rated University" : 
                         "Quality Institution"}
                      </span>
                    </div>
                    <a 
                      href={university.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-medium text-sm flex items-center"
                    >
                      Official Website
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-4 pb-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            Compare
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all" size="sm">
            Explore Programs
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Universities;
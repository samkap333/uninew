import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Medal, Clock, Zap, ArrowRight,Code, Rocket, Stethoscope, Briefcase, Lightbulb, Scale, PenTool, CircleDollarSign, Building2, Leaf, BookOpenCheck, Users, PieChart, Search, MapPin,   } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CourseSearch } from "@/components/courses/CourseSearch";
import { CourseCard } from "@/components/courses/CourseCard";
import { detailedCourses, courseCategories, CourseOption } from "@/lib/courseData";
import { openApplicationDialog } from "@/lib/utils";

const TopCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  // Define course categories
  const categories = [
    "All",
    "Engineering",
    "Medical",
    "Management",
    "Arts & Humanities",
    "Science",
    "Law"
  ];

  // Define course list
  const courses: Course[] = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      category: "Engineering",
      icon: <Code />,
      description: "Study the theoretical foundations of information and computation, along with practical techniques for the implementation and application of these foundations. Core subjects include data structures, algorithms, programming languages, computer architecture, and software engineering.",
      duration: "4 Years (Bachelor's)",
      averageFees: "$4,000 - $8,000 per year",
      topUniversities: [
        "Indian Institute of Technology (IIT) Delhi",
        "IIT Bombay",
        "IIT Madras",
        "BITS Pilani",
        "VIT Vellore"
      ],
      careerProspects: [
        "Software Developer",
        "Data Scientist",
        "Machine Learning Engineer",
        "Systems Architect",
        "IT Consultant"
      ],
      eligibility: "Strong background in Mathematics and Physics, competitive entrance examination scores",
      skills: ["Programming", "Problem Solving", "Analytical Thinking", "Data Structures", "Algorithms"],
      featured: true
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      category: "Engineering",
      icon: <Rocket />,
      description: "Mechanical engineering involves the design, production, and operation of machinery. It is one of the oldest and broadest engineering disciplines, applying the principles of physics and materials science for analysis, design, manufacturing, and maintenance of mechanical systems.",
      duration: "4 Years (Bachelor's)",
      averageFees: "$3,500 - $7,000 per year",
      topUniversities: [
        "IIT Madras",
        "IIT Delhi",
        "IIT Kanpur",
        "BITS Pilani",
        "NIT Trichy"
      ],
      careerProspects: [
        "Mechanical Engineer",
        "Design Engineer",
        "Production Manager",
        "Automotive Engineer",
        "Energy Consultant"
      ],
      eligibility: "Strong background in Mathematics and Physics, competitive entrance examination scores",
      skills: ["CAD/CAM", "Thermodynamics", "Manufacturing Processes", "Material Science", "Machine Design"],
      featured: true
    },
    {
      id: 3,
      name: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
      category: "Medical",
      icon: <Stethoscope />,
      description: "MBBS is an undergraduate medical degree program that prepares students to become physicians. The curriculum includes pre-clinical studies in anatomy, physiology, biochemistry, followed by clinical training in medicine, surgery, pediatrics, and other specialties.",
      duration: "5.5 Years (including 1 year internship)",
      averageFees: "$5,000 - $15,000 per year",
      topUniversities: [
        "All India Institute of Medical Sciences (AIIMS)",
        "Christian Medical College, Vellore",
        "Armed Forces Medical College",
        "Maulana Azad Medical College",
        "Grant Medical College"
      ],
      careerProspects: [
        "General Physician",
        "Surgeon",
        "Specialist Doctor",
        "Medical Researcher",
        "Healthcare Administrator"
      ],
      eligibility: "Strong background in Biology, Chemistry, and Physics, highly competitive entrance examination scores",
      skills: ["Medical Knowledge", "Clinical Skills", "Communication", "Empathy", "Critical Thinking"],
      featured: true
    },
    {
      id: 4,
      name: "MBA (Master of Business Administration)",
      category: "Management",
      icon: <Briefcase />,
      description: "MBA programs provide students with a broad understanding of business operations and prepare them for managerial roles. The curriculum includes marketing, finance, human resources, operations, strategic management, and leadership training.",
      duration: "2 Years (Full-time)",
      averageFees: "$5,000 - $12,000 per year",
      topUniversities: [
        "Indian Institute of Management (IIM) Ahmedabad",
        "IIM Bangalore",
        "IIM Calcutta",
        "XLRI Jamshedpur",
        "ISB Hyderabad"
      ],
      careerProspects: [
        "Business Manager",
        "Marketing Executive",
        "Finance Manager",
        "Consultant",
        "Entrepreneur"
      ],
      eligibility: "Bachelor's degree in any discipline, competitive entrance examination scores (CAT/GMAT), work experience preferred",
      skills: ["Leadership", "Strategic Thinking", "Financial Analysis", "Marketing", "Communication"],
      featured: true
    },
    {
      id: 5,
      name: "Bachelor of Arts in English Literature",
      category: "Arts & Humanities",
      icon: <BookOpen />,
      description: "This program explores various forms of English literature including poetry, drama, fiction, and non-fiction across different historical periods and cultural contexts. Students develop critical thinking, writing, and analytical skills through the study of literary texts.",
      duration: "3 Years",
      averageFees: "$1,500 - $4,000 per year",
      topUniversities: [
        "Delhi University",
        "Jadavpur University",
        "Jawaharlal Nehru University",
        "Christ University",
        "St. Stephen's College"
      ],
      careerProspects: [
        "Content Writer",
        "Editor",
        "Teacher/Professor",
        "Journalist",
        "Public Relations Specialist"
      ],
      eligibility: "High school completion with good grades in English and Humanities subjects",
      skills: ["Critical Analysis", "Communication", "Writing", "Research", "Creative Thinking"],
      featured: false
    },
    {
      id: 6,
      name: "Bachelor of Science in Physics",
      category: "Science",
      icon: <Lightbulb />,
      description: "This program covers the fundamental principles of physics, including mechanics, electromagnetism, thermodynamics, quantum mechanics, and relativity. Students develop strong problem-solving and analytical skills along with experimental techniques.",
      duration: "3 Years",
      averageFees: "$2,000 - $5,000 per year",
      topUniversities: [
        "Indian Institute of Science",
        "St. Stephen's College",
        "Chennai Mathematical Institute",
        "IISER Pune",
        "Jadavpur University"
      ],
      careerProspects: [
        "Research Scientist",
        "Data Analyst",
        "Lab Technician",
        "Lecturer/Professor",
        "Technical Consultant"
      ],
      eligibility: "Strong background in Physics and Mathematics at high school level",
      skills: ["Mathematical Modeling", "Problem Solving", "Experimental Techniques", "Data Analysis", "Critical Thinking"],
      featured: false
    },
    {
      id: 7,
      name: "Bachelor of Laws (LLB)",
      category: "Law",
      icon: <Scale />,
      description: "LLB programs provide comprehensive legal education covering constitutional law, contract law, criminal law, civil law, corporate law, and more. Students develop legal reasoning, research, and advocacy skills to prepare for careers in the legal profession.",
      duration: "3 Years (after bachelor's) or 5 Years (integrated)",
      averageFees: "$2,500 - $6,000 per year",
      topUniversities: [
        "National Law School of India University",
        "NALSAR University of Law",
        "West Bengal National University of Juridical Sciences",
        "Gujarat National Law University",
        "Symbiosis Law School"
      ],
      careerProspects: [
        "Lawyer/Advocate",
        "Legal Advisor",
        "Judge",
        "Corporate Counsel",
        "Legal Analyst"
      ],
      eligibility: "Bachelor's degree in any discipline or 10+2 for integrated programs, competitive entrance examination",
      skills: ["Legal Research", "Analytical Reasoning", "Persuasive Communication", "Critical Thinking", "Attention to Detail"],
      featured: false
    },
    {
      id: 8,
      name: "Bachelor of Design (Fashion Design)",
      category: "Arts & Humanities",
      icon: <PenTool />,
      description: "This program focuses on fashion design concepts, textile science, pattern making, garment construction, fashion illustration, and the business of fashion. Students develop creativity and technical skills to design apparel and accessories.",
      duration: "4 Years",
      averageFees: "$3,000 - $7,000 per year",
      topUniversities: [
        "National Institute of Fashion Technology",
        "Pearl Academy",
        "Symbiosis Institute of Design",
        "National Institute of Design",
        "FIDM Mumbai"
      ],
      careerProspects: [
        "Fashion Designer",
        "Costume Designer",
        "Fashion Merchandiser",
        "Stylist",
        "Textile Designer"
      ],
      eligibility: "Artistic aptitude, portfolio of creative work, entrance examination",
      skills: ["Creativity", "Technical Drawing", "Pattern Making", "Textile Knowledge", "Design Software"],
      featured: true
    },
    {
      id: 9,
      name: "B.Tech in Electronics and Communication",
      category: "Engineering",
      icon: <Code />,
      description: "This program covers principles of electronics, communication systems, signal processing, microprocessors, and digital systems. Students gain theoretical knowledge and practical skills for designing and developing electronic systems and communication networks.",
      duration: "4 Years",
      averageFees: "$3,500 - $7,000 per year",
      topUniversities: [
        "IIT Delhi",
        "IIT Bombay",
        "BITS Pilani",
        "NIT Surathkal",
        "VIT Vellore"
      ],
      careerProspects: [
        "Electronics Engineer",
        "Telecommunication Engineer",
        "IoT Developer",
        "Signal Processing Engineer",
        "VLSI Designer"
      ],
      eligibility: "Strong background in Physics, Mathematics, competitive entrance examination scores",
      skills: ["Circuit Design", "Signal Processing", "Communication Theory", "Embedded Systems", "Programming"],
      featured: false
    },
    {
      id: 10,
      name: "Bachelor of Commerce (B.Com)",
      category: "Management",
      icon: <CircleDollarSign />,
      description: "B.Com programs provide a strong foundation in business, accounting, finance, taxation, economics, and commercial law. Students develop analytical and problem-solving skills for careers in finance, accounting, and business management.",
      duration: "3 Years",
      averageFees: "$1,500 - $4,000 per year",
      topUniversities: [
        "St. Xavier's College",
        "Shri Ram College of Commerce",
        "Loyola College",
        "Christ University",
        "Narsee Monjee College"
      ],
      careerProspects: [
        "Accountant",
        "Financial Analyst",
        "Tax Consultant",
        "Banking Professional",
        "Business Analyst"
      ],
      eligibility: "High school completion with good grades in commerce/mathematics",
      skills: ["Financial Accounting", "Business Communication", "Analytical Thinking", "Taxation Knowledge", "Economic Analysis"],
      featured: false
    },
    {
      id: 11,
      name: "Bachelor of Science in Nursing",
      category: "Medical",
      icon: <Stethoscope />,
      description: "B.Sc Nursing programs prepare students for professional nursing practice. The curriculum includes anatomy, physiology, nursing techniques, community health, maternal and child health, medical-surgical nursing, and psychiatric nursing.",
      duration: "4 Years",
      averageFees: "$2,000 - $5,000 per year",
      topUniversities: [
        "All India Institute of Medical Sciences",
        "Christian Medical College, Vellore",
        "Manipal College of Nursing",
        "St. John's College of Nursing",
        "College of Nursing, PGIMER"
      ],
      careerProspects: [
        "Registered Nurse",
        "Nurse Educator",
        "Community Health Nurse",
        "Nurse Manager",
        "Healthcare Consultant"
      ],
      eligibility: "High school completion with science subjects (Biology, Chemistry, Physics)",
      skills: ["Clinical Skills", "Patient Care", "Communication", "Critical Thinking", "Empathy"],
      featured: false
    },
    {
      id: 12,
      name: "Bachelor of Architecture (B.Arch)",
      category: "Engineering",
      icon: <Building2 />,
      description: "B.Arch programs focus on architectural design, building construction, history of architecture, structural engineering, and urban planning. Students develop design thinking, technical drawing skills, and knowledge of building materials and methods.",
      duration: "5 Years",
      averageFees: "$3,000 - $7,000 per year",
      topUniversities: [
        "School of Planning and Architecture, Delhi",
        "IIT Kharagpur",
        "CEPT University",
        "Sir J.J. College of Architecture",
        "National Institute of Technology, Calicut"
      ],
      careerProspects: [
        "Architect",
        "Urban Designer",
        "Interior Designer",
        "Construction Manager",
        "Landscape Architect"
      ],
      eligibility: "Artistic aptitude, strong background in mathematics and physics, competitive entrance examination",
      skills: ["Design Thinking", "Drafting", "3D Modeling", "Spatial Awareness", "Technical Drawing"],
      featured: true
    },
    {
      id: 13,
      name: "Bachelor of Science in Agriculture",
      category: "Science",
      icon: <Leaf />,
      description: "B.Sc Agriculture programs cover crop production, soil science, agricultural economics, animal husbandry, horticulture, and agricultural engineering. Students gain knowledge and skills for sustainable farming practices and agricultural development.",
      duration: "4 Years",
      averageFees: "$2,000 - $5,000 per year",
      topUniversities: [
        "Punjab Agricultural University",
        "Indian Agricultural Research Institute",
        "Tamil Nadu Agricultural University",
        "G.B. Pant University of Agriculture and Technology",
        "Chaudhary Charan Singh Haryana Agricultural University"
      ],
      careerProspects: [
        "Agricultural Scientist",
        "Farm Manager",
        "Agricultural Extension Officer",
        "Agribusiness Manager",
        "Rural Development Officer"
      ],
      eligibility: "High school completion with science subjects (Biology preferred)",
      skills: ["Crop Management", "Soil Analysis", "Farm Planning", "Agricultural Technology", "Environmental Awareness"],
      featured: false
    },
    {
      id: 14,
      name: "Bachelor of Science in Biotechnology",
      category: "Science",
      icon: <BookOpenCheck />,
      description: "B.Sc Biotechnology programs integrate biology, chemistry, genetics, microbiology, and engineering principles to develop biological products and processes. Students learn laboratory techniques, genetic engineering, and industrial biotechnology applications.",
      duration: "3 Years",
      averageFees: "$2,500 - $6,000 per year",
      topUniversities: [
        "Indian Institute of Technology Guwahati",
        "Manipal Institute of Technology",
        "VIT Vellore",
        "Amity University",
        "SRM University"
      ],
      careerProspects: [
        "Biotechnologist",
        "Research Scientist",
        "Lab Technician",
        "Quality Control Analyst",
        "Bioinformatics Specialist"
      ],
      eligibility: "High school completion with biology, chemistry, and physics/mathematics",
      skills: ["Laboratory Techniques", "Molecular Biology", "Analytical Thinking", "Research Methods", "Bioinformatics"],
      featured: false
    },
    {
      id: 15,
      name: "Bachelor of Social Work (BSW)",
      category: "Arts & Humanities",
      icon: <Users />,
      description: "BSW programs prepare students for professional social work practice. The curriculum includes social welfare policies, human behavior, community organization, social research methods, and field practicums in various social service settings.",
      duration: "3 Years",
      averageFees: "$1,500 - $4,000 per year",
      topUniversities: [
        "Tata Institute of Social Sciences",
        "Delhi School of Social Work",
        "Nirmala Niketan College of Social Work",
        "Christ University",
        "Loyola College"
      ],
      careerProspects: [
        "Social Worker",
        "Community Development Officer",
        "Counselor",
        "Program Coordinator",
        "Welfare Officer"
      ],
      eligibility: "High school completion with good academic record",
      skills: ["Empathy", "Communication", "Problem Solving", "Cultural Sensitivity", "Advocacy"],
      featured: false
    },
    {
      id: 16,
      name: "BBA (Bachelor of Business Administration)",
      category: "Management",
      icon: <PieChart />,
      description: "BBA programs provide a foundation in business administration covering management principles, marketing, finance, human resources, and organizational behavior. Students develop business acumen and managerial skills for entry-level positions or further studies.",
      duration: "3 Years",
      averageFees: "$2,000 - $5,000 per year",
      topUniversities: [
        "Christ University",
        "Symbiosis Center for Management Studies",
        "NMIMS Mumbai",
        "Amity University",
        "St. Xavier's College"
      ],
      careerProspects: [
        "Management Trainee",
        "Sales Executive",
        "Business Analyst",
        "Marketing Coordinator",
        "HR Assistant"
      ],
      eligibility: "High school completion with good academic record",
      skills: ["Business Communication", "Analytical Thinking", "Team Management", "Marketing", "Financial Analysis"],
      featured: true
    }
  ];

  // Handler for search filtering
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    let filtered = [...courses];

    // Filter by search query
    if (query) {
      const search = query.toLowerCase();
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(search) ||
        course.category.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search)
      );
    }

    // Filter by tab category
    if (activeTab !== "all") {
      filtered = filtered.filter(course => course.category === activeTab);
    }

    setFilteredCourses(filtered);
  };

  // Handler for tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);

    let filtered = [...courses];

    // Filter by search query
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(search) ||
        course.category.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search)
      );
    }

    // Filter by tab category
    if (value !== "all") {
      filtered = filtered.filter(course => course.category === value);
    }

    setFilteredCourses(filtered);
  };

  // Initialize filtered courses on first render
  useState(() => {
    setFilteredCourses(courses);
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary pt-28 pb-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              Explore Top <span className="text-accent">Courses</span> in India
            </h1>
            <p className="text-lg opacity-90 mb-10">
              Discover the most sought-after academic programs offered by Indian universities that can launch your career and transform your future
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search courses by name or keywords..."
                className="pl-10 py-6 text-base bg-white/90 text-gray-800 border-0 shadow-lg"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Course Categories Tabs */}
          <Tabs defaultValue="all" onValueChange={handleTabChange} className="mb-10">
            <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category === "All" ? "all" : category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                {filteredCourses.length} courses found
              </p>
              <div className="flex items-center text-gray-600 text-sm">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                <span>Showing {activeTab === "all" ? "all courses" : `${activeTab} courses`}</span>
              </div>
            </div>

            {/* Featured Courses (only show on All tab) */}
            {activeTab === "all" && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses
                    .filter(course => course.featured)
                    .map(course => (
                      <motion.div
                        key={course.id}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden border-t-4 border-primary">
                          <CardHeader className="pb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl mb-1">{course.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Badge variant="outline" className="font-normal mr-2">
                                    {course.category}
                                  </Badge>
                                  <span className="flex items-center text-xs text-gray-500">
                                    <Clock className="mr-1 h-3 w-3" />
                                    {course.duration}
                                  </span>
                                </CardDescription>
                              </div>
                              <div className="bg-primary/10 p-2 rounded-full text-primary">
                                {course.icon}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-4">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {course.description}
                            </p>
                            <div className="flex flex-col gap-3">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-xs text-gray-500 mb-1">Top University</p>
                                  <p className="text-sm font-medium">{course.topUniversities[0]}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <CircleDollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-xs text-gray-500 mb-1">Average Fees</p>
                                  <p className="text-sm font-medium">{course.averageFees}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">View Details</Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </div>
            )}

            {/* All Courses */}
            <TabsContent value="all" className="mt-0">
              <CourseList courses={filteredCourses} />
            </TabsContent>

            {/* Specific Category Tabs */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <CourseList courses={filteredCourses} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Study in India?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              India offers a unique blend of quality education, diverse course options, and cultural experiences at affordable costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Education</h3>
              <p className="text-gray-600">
                Indian universities are globally recognized for their rigorous academic standards and cutting-edge research facilities, providing world-class education.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CircleDollarSign className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Costs</h3>
              <p className="text-gray-600">
                Compared to Western countries, studying in India offers significantly lower tuition fees and living expenses without compromising on quality.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Experience</h3>
              <p className="text-gray-600">
                Experience India's rich cultural heritage, diverse traditions, and vibrant campus life that enhances your educational journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What are the admission requirements for international students?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Admission requirements vary by university and program, but generally include academic transcripts, standardized test scores (like SAT, GRE, GMAT as applicable), English proficiency tests (IELTS/TOEFL), letters of recommendation, and a statement of purpose. Some programs may require additional entrance examinations or portfolio submissions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Are scholarships available for international students?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Yes, many Indian universities offer scholarships for international students based on academic merit, financial need, or country-specific programs. Additionally, the Indian government offers scholarships like the Indian Council for Cultural Relations (ICCR) Scholarships. We recommend researching university-specific scholarships and government programs that match your profile.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What is the academic calendar in Indian universities?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Most Indian universities follow a two-semester system, with the academic year typically starting in July/August and ending in April/May. Some universities have adopted a trimester or quarter system. Each semester is usually 16-18 weeks long, including examination periods. There are breaks for major festivals and a summer break between academic years.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  How do I apply for a student visa for India?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    To apply for an Indian student visa, you need an admission offer from a recognized Indian institution, valid passport, completed visa application form, proof of financial resources, passport-sized photographs, and health insurance. Apply at the Indian embassy or consulate in your home country. The visa process typically takes 2-4 weeks, so apply well in advance of your program start date.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Are degrees from Indian universities recognized internationally?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">
                    Yes, degrees from accredited Indian universities are recognized worldwide. Many Indian institutions have partnerships with international universities and follow globally accepted academic standards. Top Indian universities like IITs, IIMs, and central universities have strong international reputations. However, we recommend checking with relevant authorities in your home country about specific degree recognition policies.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Academic Journey in India?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get personalized guidance on course selection, university applications, and admission requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
              Apply Now
            </Button>
            <Button className="bg-transparent hover:bg-white/20 border border-white" size="lg">
              Contact an Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Course List Component
const CourseList = ({ courses }: { courses: Course[] }) => {
  if (courses.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-xl">
        <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-bold text-gray-600 mb-2">No courses found</h3>
        <p className="text-gray-500">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

// Course Card Component
const CourseCardComponent = ({ course }: { course: Course }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-shadow overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription className="flex items-center mt-1">
                <Badge variant="outline" className="font-normal mr-2">
                  {course.category}
                </Badge>
                <span className="flex items-center text-xs text-gray-500">
                  <Clock className="mr-1 h-3 w-3" />
                  {course.duration}
                </span>
              </CardDescription>
            </div>
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              {course.icon}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm mb-6 line-clamp-2">
            {course.description}
          </p>

          <Accordion type="single" collapsible>
            <AccordionItem value="details" className="border-none">
              <AccordionTrigger className="py-2 hover:no-underline text-sm font-medium text-primary">
                View Course Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Top Universities</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {course.topUniversities.slice(0, 3).map((uni, index) => (
                        <li key={index}>{uni}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Career Prospects</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.careerProspects.slice(0, 4).map((career, index) => (
                        <Badge key={index} variant="secondary" className="font-normal text-xs">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="font-normal text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Eligibility</h4>
                    <p className="text-sm text-gray-600">{course.eligibility}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-start gap-2">
            <CircleDollarSign className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <p className="text-xs text-gray-500">Average Fees</p>
              <p className="text-sm font-medium">{course.averageFees}</p>
            </div>
          </div>
          <Button size="sm">Learn More</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TopCourses;
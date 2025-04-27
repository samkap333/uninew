import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Award, BookOpen, ArrowRight, Users, Building } from 'lucide-react';
import { DetailedCourse } from '@/lib/courseData';
import { openApplicationDialog } from '@/lib/utils';

interface CourseCardProps {
  course: DetailedCourse;
  className?: string;
}

export function CourseCard({ course, className = '' }: CourseCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleApplyClick = () => {
    openApplicationDialog();
  };
  
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        {/* Card header with gradient background */}
        <div className={`bg-gradient-to-r from-primary to-secondary p-6 text-white relative overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          {/* Decorative circle elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
          
          {/* Icon and featured badge */}
          <div className="flex justify-between items-start">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <course.icon className="h-8 w-8" />
            </div>
            
            {course.featured && (
              <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-bold mt-4">{course.name}</h3>
          <p className="text-white/80 mt-2 text-sm">{course.description}</p>
        </div>
        
        {/* Card content */}
        <div className="p-6">
          {/* Key information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-medium">{course.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Fees</p>
                <p className="font-medium">{course.averageFees}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Scholarship</p>
                <p className="font-medium">{course.scholarshipFees}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-xs text-gray-500">Category</p>
                <p className="font-medium capitalize">{course.category}</p>
              </div>
            </div>
          </div>
          
          {/* Expandable details */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showDetails ? 'auto' : 0, 
              opacity: showDetails ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t">
              {/* Top universities */}
              <div className="mb-4">
                <h4 className="text-sm font-bold flex items-center mb-2">
                  <Building className="h-4 w-4 mr-1 text-primary" />
                  Top Universities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.topUniversities.map((university, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5">
                      {university}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Career prospects */}
              <div className="mb-4">
                <h4 className="text-sm font-bold flex items-center mb-2">
                  <Users className="h-4 w-4 mr-1 text-primary" />
                  Career Prospects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.careerProspects.map((career, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Skills to acquire */}
              <div className="mb-4">
                <h4 className="text-sm font-bold mb-2">Key Skills You'll Acquire</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-secondary/5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Eligibility */}
              <div>
                <h4 className="text-sm font-bold mb-1">Eligibility</h4>
                <p className="text-sm text-gray-600">{course.eligibility}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Action buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleApplyClick}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={toggleDetails}
              className="flex-1"
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

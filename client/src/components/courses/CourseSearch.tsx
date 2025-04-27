import { useState, useEffect, useRef } from 'react';
import { Search, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { courseOptions, courseCategories, CourseOption } from '@/lib/courseData';
import { openApplicationDialog } from '@/lib/utils';

interface CourseSearchProps {
  onSelectCourse?: (course: CourseOption) => void;
  className?: string;
  placeholder?: string;
  showCategories?: boolean;
}

export function CourseSearch({ 
  onSelectCourse, 
  className = '', 
  placeholder = 'Search for courses...', 
  showCategories = true 
}: CourseSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<CourseOption[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Filter results when search term or category changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const filteredResults = courseOptions.filter(course => {
      // Filter by category if not 'all'
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false;
      }

      // Search in course name and category (case insensitive)
      const term = searchTerm.toLowerCase();
      
      // Exact match
      if (course.label.toLowerCase().includes(term)) {
        return true;
      }
      
      // Check for spelling mistakes by comparing individual words
      const searchWords = term.split(' ');
      const courseWords = course.label.toLowerCase().split(' ');
      
      // Consider a course if any search word is similar to any course word
      return searchWords.some(searchWord => 
        courseWords.some(courseWord => {
          // Simple fuzzy match - if the course word contains most of the search word
          if (searchWord.length > 2 && courseWord.includes(searchWord.substring(0, searchWord.length - 1))) {
            return true;
          }
          // Check for abbreviations (e.g., "cse" should match "Computer Science & Engineering")
          if (searchWord.length <= 5 && searchWord.length >= 2) {
            const abbreviation = courseWords
              .filter(w => w.length > 2) // Only consider meaningful words
              .map(w => w[0]).join('').toLowerCase(); // Get first letter of each word
            
            return abbreviation.includes(searchWord);
          }
          return false;
        })
      );
    });

    setResults(filteredResults.slice(0, 8)); // Limit to 8 results
  }, [searchTerm, selectedCategory]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current && 
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCourse = (course: CourseOption) => {
    if (onSelectCourse) {
      onSelectCourse(course);
    }
    setSearchTerm(course.label);
    setIsFocused(false);
  };

  const handleClear = () => {
    setSearchTerm('');
    setResults([]);
    inputRef.current?.focus();
  };

  const handleApplyClick = () => {
    openApplicationDialog();
  };

  return (
    <div className={`relative ${className}`}>
      {/* Categories filter */}
      {showCategories && (
        <div className="mb-4 flex flex-wrap gap-2">
          {courseCategories.map((category) => (
            <Badge 
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/90 transition-colors"
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Badge>
          ))}
        </div>
      )}

      {/* Search input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search className="h-5 w-5" />
        </div>
        
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="pl-10 pr-10 py-6 text-base rounded-lg border-gray-300 focus:ring-primary focus:border-primary transition-all"
          autoComplete="off"
        />
        
        {searchTerm && (
          <button 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={handleClear}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search results dropdown */}
      <AnimatePresence>
        {isFocused && results.length > 0 && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
              {results.map((course, index) => (
                <div
                  key={course.value}
                  className="p-3 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3"
                  onClick={() => handleSelectCourse(course)}
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{course.label}</div>
                    <div className="text-sm text-gray-500 flex flex-wrap gap-3 mt-1">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.fees}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-3 border-t border-gray-200 text-center">
              <Button 
                onClick={handleApplyClick}
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Apply for Course
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
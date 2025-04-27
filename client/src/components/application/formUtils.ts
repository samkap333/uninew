import { z } from "zod";

// List of courses
export const courseOptions = [
  { value: "computer_science", label: "Computer Science & Engineering" },
  { value: "mechanical", label: "Mechanical Engineering" },
  { value: "electrical", label: "Electrical Engineering" },
  { value: "civil", label: "Civil Engineering" },
  { value: "mbbs", label: "MBBS (Medicine)" },
  { value: "bds", label: "BDS (Dental Science)" },
  { value: "pharmacy", label: "Pharmacy" },
  { value: "nursing", label: "Nursing" },
  { value: "bba", label: "Business Administration" },
  { value: "mba", label: "Master of Business Administration" },
  { value: "arts", label: "Arts & Humanities" },
  { value: "journalism", label: "Journalism & Mass Communication" },
  { value: "law", label: "Law" },
  { value: "design", label: "Design" },
  { value: "other", label: "Other (Please specify)" },
];

// List of Punjab private colleges
export const collegeOptions = [
  { value: "lpu", label: "Lovely Professional University" },
  { value: "chitkara", label: "Chitkara University" },
  { value: "chandigarh_university", label: "Chandigarh University" },
  { value: "dav", label: "DAV University" },
  { value: "guru_nanak_dev", label: "Guru Nanak Dev University" },
  { value: "punjabi_university", label: "Punjabi University" },
  { value: "gna", label: "GNA University" },
  { value: "ct_university", label: "CT University" },
  { value: "rayat_bahra", label: "Rayat Bahra University" },
  { value: "adesh", label: "Adesh University" },
  { value: "other", label: "Other (Please specify)" },
];

// List of countries with ISO codes for phone
export const countryOptions = [
  { value: "US", label: "United States", code: "+1" },
  { value: "GB", label: "United Kingdom", code: "+44" },
  { value: "CA", label: "Canada", code: "+1" },
  { value: "AU", label: "Australia", code: "+61" },
  { value: "NG", label: "Nigeria", code: "+234" },
  { value: "GH", label: "Ghana", code: "+233" },
  { value: "KE", label: "Kenya", code: "+254" },
  { value: "ZA", label: "South Africa", code: "+27" },
  { value: "SG", label: "Singapore", code: "+65" },
  { value: "MY", label: "Malaysia", code: "+60" },
  { value: "IN", label: "India", code: "+91" },
  { value: "CN", label: "China", code: "+86" },
  { value: "JP", label: "Japan", code: "+81" },
  { value: "KR", label: "South Korea", code: "+82" },
  { value: "PK", label: "Pakistan", code: "+92" },
  { value: "AE", label: "United Arab Emirates", code: "+971" },
  { value: "SA", label: "Saudi Arabia", code: "+966" },
  { value: "OM", label: "Oman", code: "+968" },
  { value: "QA", label: "Qatar", code: "+974" },
  { value: "KW", label: "Kuwait", code: "+965" },
  { value: "BH", label: "Bahrain", code: "+973" },
  { value: "NP", label: "Nepal", code: "+977" },
  { value: "BD", label: "Bangladesh", code: "+880" },
  { value: "LK", label: "Sri Lanka", code: "+94" },
  { value: "MM", label: "Myanmar", code: "+95" },
  { value: "RU", label: "Russia", code: "+7" },
  { value: "UA", label: "Ukraine", code: "+380" },
  { value: "TR", label: "Turkey", code: "+90" },
  { value: "EG", label: "Egypt", code: "+20" },
  { value: "ZW", label: "Zimbabwe", code: "+263" },
  { value: "TZ", label: "Tanzania", code: "+255" },
  { value: "UG", label: "Uganda", code: "+256" },
  { value: "RW", label: "Rwanda", code: "+250" },
];

// Student Application Schema
export const studentFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  phoneNumber: z.string().min(5, { message: "Phone number is required" }),
  course: z.string().min(1, { message: "Course is required" }),
  otherCourse: z.string().optional(),
  college: z.string().min(1, { message: "College is required" }),
  otherCollege: z.string().optional(),
  passportNumber: z.string().min(5, { message: "Passport number is required" }),
  documents: z.array(z.any()).optional(),
});

export type StudentFormValues = z.infer<typeof studentFormSchema>;

// Agent Application Schema
export const agentFormSchema = z.object({
  agentName: z.string().min(2, { message: "Agent name is required" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  countryCode: z.string().min(1, { message: "Country code is required" }),
  phoneNumber: z.string().min(5, { message: "Phone number is required" }),
  passportNumber: z.string().min(5, { message: "Passport number is required" }),
});

export type AgentFormValues = z.infer<typeof agentFormSchema>;
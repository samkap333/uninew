import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  agentFormSchema,
  AgentFormValues,
  countryOptions
} from "@/components/application/formUtils";

const AgentApplication = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const form = useForm<AgentFormValues>({
    resolver: zodResolver(agentFormSchema),
    defaultValues: {
      agentName: "",
      companyName: "",
      country: "",
      countryCode: "",
      phoneNumber: "",
      passportNumber: "",
    },
  });

  // Update country code when country changes
  useEffect(() => {
    if (selectedCountry) {
      const country = countryOptions.find(c => c.value === selectedCountry);
      if (country) {
        form.setValue("countryCode", country.code);
      }
    }
  }, [selectedCountry, form]);

  // Custom submission handler
  const onSubmit = async (data: AgentFormValues) => {
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form Data:", data);
      
      setSubmitting(false);
      setSubmitSuccess(true);
      
      toast({
        title: "Application Submitted",
        description: "Your agent application has been successfully submitted. We'll contact you soon.",
      });
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Agent Application Submitted Successfully</h1>
          <p className="text-gray-600 mb-8">
            Thank you for submitting your application to partner with UNIportal India. Our team will review your application and contact you within 2-3 business days.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="font-bold mb-2">Next Steps</h2>
            <ol className="text-left text-gray-600 space-y-2 list-decimal list-inside">
              <li>Check your email for a confirmation of your application</li>
              <li>Prepare for a possible call from our partnership team</li>
              <li>Our team will discuss partnership opportunities and commission structures</li>
            </ol>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <motion.div 
        className="bg-white rounded-xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-6">
          <Link href="/">
            <a className="inline-flex items-center text-gray-600 hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Agent/Consultant Application</h1>
        <p className="text-gray-600 mb-8">
          Please fill out the form below to apply as an educational agent or consultant. All fields marked with * are required.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Agent Name */}
              <FormField
                control={form.control}
                name="agentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Company Name */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company/Agency Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your company or agency name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country *</FormLabel>
                  <Select 
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedCountry(value);
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countryOptions.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Phone Number with Country Code */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="md:col-span-1">
                    <FormLabel>Country Code *</FormLabel>
                    <Select 
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={!selectedCountry}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={selectedCountry ? form.getValues("countryCode") : "Select country first"} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countryOptions.map((country) => (
                          <SelectItem key={country.value} value={country.code}>
                            {country.label} ({country.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your phone number" 
                        {...field} 
                        type="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Passport Number */}
            <FormField
              control={form.control}
              name="passportNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passport Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your passport number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-6 border-t">
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-primary hover:bg-secondary" 
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default AgentApplication;
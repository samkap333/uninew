import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Please select your country" }),
  program: z.string().min(1, { message: "Please select a program" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      program: "",
      message: "",
    },
  });

  const contactInfo = [
    { 
      icon: <Mail className="text-primary text-xl" />, 
      title: "Email Us",
      content: "admissions@studyindia.com" 
    },
    { 
      icon: <Phone className="text-primary text-xl" />, 
      title: "Call Us",
      content: "+91 123 456 7890" 
    },
    { 
      icon: <MapPin className="text-primary text-xl" />, 
      title: "Visit Us",
      content: "International Student Center\nNew Delhi, India 110001" 
    }
  ];

  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
    { value: "other", label: "Other" }
  ];

  const programs = [
    { value: "engineering", label: "Engineering" },
    { value: "medicine", label: "Medicine" },
    { value: "business", label: "Business" },
    { value: "arts", label: "Arts & Humanities" },
    { value: "science", label: "Sciences" },
    { value: "other", label: "Other" }
  ];

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "We'll contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <section id="apply" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Begin Your Journey to India</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form to get personalized guidance on admission to Indian universities. Our counselors will contact you within 24 hours.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field} 
                          className="px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email address" 
                          type="email" 
                          {...field} 
                          className="px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your phone number" 
                          type="tel" 
                          {...field} 
                          className="px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700 font-medium">Country of Residence</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map((country) => (
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
                
                <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700 font-medium">Program of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program.value} value={program.value}>
                              {program.label}
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
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-700 font-medium">Your Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any specific questions or requirements?" 
                          {...field} 
                          className="px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

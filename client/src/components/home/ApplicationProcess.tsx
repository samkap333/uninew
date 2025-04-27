import { FileText, CalendarCheck, PlaneTakeoff, ClipboardCheck, SendToBack, CheckSquare, Award, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ApplicationDialog from "@/components/application/ApplicationDialog";

const ApplicationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Apply Online",
      description: "Complete our simple online application form with your academic details and preferences",
      icon: <ClipboardCheck className="h-8 w-8 text-white" />,
      color: "from-primary to-primary/80"
    },
    {
      number: 2,
      title: "Document Submission",
      description: "Upload your academic credentials and supporting documents through our secure portal",
      icon: <SendToBack className="h-8 w-8 text-white" />,
      color: "from-primary/90 to-primary/70"
    },
    {
      number: 3,
      title: "University Placement",
      description: "Within days, receive admission offers from universities that perfectly match your profile",
      icon: <CheckSquare className="h-8 w-8 text-white" />,
      color: "from-primary/80 to-primary/60"
    },
    {
      number: 4,
      title: "Visa Assistance",
      description: "Our experts guide you through the visa process with a 98% success rate",
      icon: <PlaneTakeoff className="h-8 w-8 text-white" />,
      color: "from-primary/70 to-primary/50"
    }
  ];

  const timeline = [
    {
      day: "Day 1",
      title: "Application Submission",
      description: "Complete your online application with UNIportal India"
    },
    {
      day: "Day 2-3",
      title: "Application Review",
      description: "Our team reviews your profile and identifies matching universities"
    },
    {
      day: "Day 4-7",
      title: "University Applications",
      description: "We submit your applications to selected universities"
    },
    {
      day: "Day 10-14",
      title: "Admission Letters",
      description: "Receive conditional or unconditional admission offers"
    },
    {
      day: "Day 15-30",
      title: "Visa Processing",
      description: "Complete visa application with our expert guidance"
    }
  ];

  const visaSupport = [
    {
      icon: <FileText className="text-primary h-12 w-12" />,
      title: "Document Preparation",
      description: "Our experts help you prepare and organize all required visa documents with attention to detail that maximizes approval chances.",
      feature: "100% Accuracy"
    },
    {
      icon: <CalendarCheck className="text-primary h-12 w-12" />,
      title: "Interview Coaching",
      description: "Personalized coaching for visa interviews with comprehensive mock sessions conducted by former visa officers.",
      feature: "Expert Guidance"
    },
    {
      icon: <PlaneTakeoff className="text-primary h-12 w-12" />,
      title: "Pre-Departure Support",
      description: "Complete preparation for your journey to India including accommodation arrangements and airport pickup services.",
      feature: "End-to-End Care"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
            Effortless <span className="text-primary">Application</span> Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our streamlined application process ensures you receive your admission letter within days, not months
          </p>
        </motion.div>
        
        {/* Application Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step relative"
              variants={item}
            >
              <div className={`text-center p-6 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg h-full`}>
                <div className="absolute -top-4 -right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <div className="mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-primary/30 z-10"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Timeline */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold font-poppins mb-10 text-center">Your Journey Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start gap-4 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary z-10 shadow-md"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:px-12">
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-md"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {item.day}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-10">
            <div className="flex items-center justify-center gap-4">
              <Clock3 className="text-primary h-6 w-6" />
              <p className="text-gray-700 font-medium">Average processing time: <span className="font-bold">2-4 weeks</span></p>
            </div>
          </div>
        </motion.div>
        
        {/* Visa Support Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-accent/10 p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="mb-10 text-center">
            <div className="inline-block bg-primary text-white p-3 rounded-full mb-6">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-3">Comprehensive Visa Support</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated visa team ensures a smooth visa application process with a 98% success rate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaSupport.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 bg-primary/10 text-primary px-3 py-1 rounded-bl-lg text-xs font-bold">
                  {item.feature}
                </div>
                <div className="text-primary mb-6 mt-2">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <ApplicationDialog>
              <Button className="bg-primary hover:bg-secondary text-white font-bold px-8 py-6 text-lg">
                Start Your Application
              </Button>
            </ApplicationDialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationProcess;

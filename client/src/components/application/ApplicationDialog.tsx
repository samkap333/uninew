import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { GraduationCap, UserCheck, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ApplicationDialogProps {
  children: React.ReactNode;
}

const ApplicationDialog = ({ children }: ApplicationDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild id="application-dialog-trigger">
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none rounded-xl shadow-xl">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/90 to-accent/90"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Decorative circle elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 border-4 border-white/10 rounded-full"></div>
          
          <DialogHeader className="pt-8 px-6 relative z-10">
            <DialogTitle className="text-2xl text-white text-center font-bold">
              Choose Your Application Path
            </DialogTitle>
            <DialogDescription className="text-white/80 text-center px-8">
              Select the appropriate option below to start your journey with us
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-6 relative z-10">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center text-center text-white hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/apply/student";
                }}
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Student Application</h3>
                <p className="text-sm text-white/80 mb-3">
                  Apply as an individual student seeking admission to universities in India
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 mt-auto w-full">
                  Apply as Student
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center text-center text-white hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/apply/agent";
                }}
              >
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Agent Application</h3>
                <p className="text-sm text-white/80 mb-3">
                  Apply as an education consultant or agent representing multiple students
                </p>
                <Button className="bg-white text-primary hover:bg-white/90 mt-auto w-full">
                  Apply as Agent
                </Button>
              </motion.div>
            </div>
            
            <div className="flex justify-center">
              <Link href="/universities" className="text-white/80 hover:text-white text-sm flex items-center transition-colors">
                <ExternalLink className="h-4 w-4 mr-1" />
                Browse universities before applying
              </Link>
            </div>
          </div>
          
          <div className="bg-white py-4 px-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Need help with your application?
            </p>
            <Button variant="outline" className="text-primary" onClick={() => setOpen(false)}>
              Contact Us
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;
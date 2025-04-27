import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import StudentApplication from "@/pages/apply/StudentApplication";
import AgentApplication from "@/pages/apply/AgentApplication";
import Universities from "@/pages/Universities";
import StudentLife from "@/pages/StudentLife";
import TopCourses from "@/pages/TopCourses";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ApplicationDialog from "@/components/application/ApplicationDialog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/apply/student" component={StudentApplication}/>
      <Route path="/apply/agent" component={AgentApplication}/>
      <Route path="/universities" component={Universities}/>
      <Route path="/student-life" component={StudentLife}/>
      <Route path="/top-courses" component={TopCourses}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          
          {/* Hidden application dialog that can be triggered from anywhere */}
          <div className="hidden">
            <ApplicationDialog>
              <button id="application-dialog-trigger">Apply</button>
            </ApplicationDialog>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

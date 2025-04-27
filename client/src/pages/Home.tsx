import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Universities from "@/components/home/Universities";
import StudentLife from "@/components/home/StudentLife";
import TopCourses from "@/components/home/TopCourses";
import ApplicationProcess from "@/components/home/ApplicationProcess";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";
import CulturalShowcase from "@/components/home/CulturalShowcase";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Universities />
      <CulturalShowcase />
      <StudentLife />
      <TopCourses />
      <ApplicationProcess />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;

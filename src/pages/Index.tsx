
import { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Create refs for each section
  const sections = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initialize intersection observer for animations on scroll
    const observerOptions = {
      rootMargin: "-100px 0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-section");
        }
      });
    }, observerOptions);

    // Observe all section containers
    sections.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // Add scroll behavior to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    return () => {
      sections.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Function to add sections to refs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div 
        ref={addToRefs} 
        id="home"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <HeroSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="about"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <AboutSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="skills"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <SkillsSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="experience"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <ExperienceSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="education"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <EducationSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="projects"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <ProjectsSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="blog"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <BlogsSection />
      </div>
      
      <div 
        ref={addToRefs} 
        id="contact"
        className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
      >
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

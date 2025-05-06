
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl space-y-6">
          <p className="text-primary font-medium animate-fade-in">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="block">John Doe</span>
            <span className="block mt-2">Software Engineer</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Specialized in mobile application development with a passion for creating 
            beautiful, functional, and user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90"
              asChild
            >
              <a href="#contact">Get in touch</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects">See my work</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <ArrowDown size={32} />
        </a>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl"></div>
    </section>
  );
};

export default HeroSection;

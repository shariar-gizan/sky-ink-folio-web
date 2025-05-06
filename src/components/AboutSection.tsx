
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 animate-fade-in">
            <div className="relative mb-6">
              <Avatar className="w-48 h-48 border-4 border-primary/20">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300" 
                  alt="Profile" 
                />
                <AvatarFallback className="text-4xl bg-primary/10">
                  <UserRound size={48} />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                8+
                <span className="text-xs ml-1">YRS</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-4">John Doe</h3>
            <p className="text-muted-foreground">Mobile Engineer</p>
          </div>
          
          <div className="lg:col-span-2 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed">
              I'm a passionate Software Engineer specializing in mobile application development 
              with over 8 years of experience building innovative, scalable, and user-friendly 
              mobile applications for iOS and Android platforms.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines technical excellence with a deep understanding of user experience. 
              I believe that the best applications are not just functional but also intuitive and 
              delightful to use. I take pride in writing clean, maintainable code and implementing 
              architecture that scales.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

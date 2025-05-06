
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Award, Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Profile Card */}
          <Card className="p-6 border border-primary/20 bg-background/80 backdrop-blur-sm transform transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 animate-fade-in">
            <div className="flex flex-col items-center lg:items-center mb-8 lg:mb-0">
              <div className="relative mb-8">
                <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-lg">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300" 
                    alt="Profile" 
                  />
                  <AvatarFallback className="text-4xl bg-primary/10">
                    <UserRound size={48} />
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 hover:scale-110">
                  8+
                  <span className="text-xs ml-1">YRS</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-2">John Doe</h3>
              <p className="text-muted-foreground">Mobile Engineer</p>
              
              <div className="flex gap-4 mt-6">
                <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                  <Award className="text-primary mb-1" size={20} />
                  <span className="text-sm font-medium">10+ Awards</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                  <Briefcase className="text-primary mb-1" size={20} />
                  <span className="text-sm font-medium">45+ Projects</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg">
                  <GraduationCap className="text-primary mb-1" size={20} />
                  <span className="text-sm font-medium">MSc Degree</span>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-6" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 border border-primary/20 bg-background/80 backdrop-blur-sm h-full transform transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 animate-fade-in">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Software Engineer specializing in mobile application development 
                  with over 8 years of experience building innovative, scalable, and user-friendly 
                  mobile applications for iOS and Android platforms.
                </p>
                
                <div className="w-full h-0.5 bg-primary/20 rounded-full"></div>
                
                <p className="text-lg leading-relaxed">
                  My approach combines technical excellence with a deep understanding of user experience. 
                  I believe that the best applications are not just functional but also intuitive and 
                  delightful to use. I take pride in writing clean, maintainable code and implementing 
                  architecture that scales.
                </p>
                
                <div className="w-full h-0.5 bg-primary/20 rounded-full"></div>
                
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing my knowledge through technical writing and mentoring.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  {["React Native", "Swift", "Kotlin", "TypeScript", "Firebase"].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transform transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

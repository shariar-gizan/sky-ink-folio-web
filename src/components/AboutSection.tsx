
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { UserRound, Briefcase, BookOpen } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "React Native", "Swift", "Kotlin", "JavaScript", "TypeScript", 
    "Firebase", "GraphQL", "REST APIs", "CI/CD", "UI/UX Design",
    "Git", "Agile Methodologies", "App Store Optimization",
    "Performance Optimization", "React", "Flutter"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
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
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <UserRound size={24} />
                  <h3 className="font-bold text-xl">Skills</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-secondary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

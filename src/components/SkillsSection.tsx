
import { useState } from "react";
import { Check, Code, Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("working");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  // Skill categories
  const workingSkillsCategories = [
    {
      name: "Mobile Development",
      skills: ["React Native", "Swift", "Kotlin", "Flutter", "SwiftUI"]
    },
    {
      name: "Frontend Technologies",
      skills: ["JavaScript", "TypeScript", "CSS", "HTML5", "React"]
    },
    {
      name: "Backend & APIs",
      skills: ["GraphQL", "REST APIs", "Node.js", "Firebase", "AWS Amplify"]
    },
    {
      name: "Tools & Workflows",
      skills: ["Git", "CI/CD", "Agile", "Testing", "Performance Optimization"]
    }
  ];

  const exploredSkillsCategories = [
    {
      name: "Emerging Technologies",
      skills: ["Augmented Reality", "Machine Learning", "Blockchain", "IoT", "WebAssembly"]
    },
    {
      name: "Design & UX",
      skills: ["UI/UX Design", "Figma", "Prototyping", "User Testing", "Accessibility"]
    },
    {
      name: "Alternative Platforms",
      skills: ["Progressive Web Apps", "Cross-platform Tools", "Desktop Apps", "Web3", "Voice Interfaces"]
    },
    {
      name: "Backend Exploration",
      skills: ["Serverless", "Docker", "Kubernetes", "Go", "Rust"]
    }
  ];

  const toggleCategory = (name: string) => {
    if (expandedCategory === name) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(name);
    }
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Skills" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 mt-12">
          <Button
            variant={activeTab === "working" ? "default" : "outline"}
            className={cn(
              "transition-all duration-300 flex items-center gap-2",
              activeTab === "working" && "animate-scale-in"
            )}
            onClick={() => setActiveTab("working")}
          >
            <Code size={16} />
            Skills I'm Working With
          </Button>
          
          <Button
            variant={activeTab === "explored" ? "default" : "outline"}
            className={cn(
              "transition-all duration-300 flex items-center gap-2",
              activeTab === "explored" && "animate-scale-in"
            )}
            onClick={() => setActiveTab("explored")}
          >
            <Star size={16} />
            Skills I've Explored
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {(activeTab === "working" ? workingSkillsCategories : exploredSkillsCategories).map((category, index) => (
            <Card 
              key={category.name}
              className="border border-primary/20 bg-secondary/30 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="p-4 flex justify-between items-center cursor-pointer bg-secondary/50 hover:bg-secondary/70 transition-all duration-300"
                onClick={() => toggleCategory(category.name)}
              >
                <h3 className="font-medium text-lg">{category.name}</h3>
                <ChevronDown 
                  size={20} 
                  className={cn(
                    "text-primary transition-transform duration-300",
                    expandedCategory === category.name && "transform rotate-180"
                  )}
                />
              </div>
              
              <CardContent className={cn(
                "grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-500 overflow-hidden",
                expandedCategory === category.name ? "max-h-96 p-6" : "max-h-0 p-0"
              )}>
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-background/80 p-3 rounded-lg border border-border flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5"
                  >
                    {activeTab === "working" ? (
                      <Check size={16} className="text-primary flex-shrink-0" />
                    ) : (
                      <Star size={16} className="text-primary flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

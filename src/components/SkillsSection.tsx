
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Code, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("working");
  
  const workingSkills = [
    "React Native", "Swift", "Kotlin", "JavaScript", "TypeScript", 
    "Firebase", "GraphQL", "REST APIs", "CI/CD", "UI/UX Design"
  ];

  const exploredSkills = [
    "Flutter", "SwiftUI", "Jetpack Compose", "React", "Node.js",
    "AWS Amplify", "TensorFlow Lite", "AR Kit", "Blockchain", "Unity"
  ];

  return (
    <section id="skills" className="section-padding">
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
        
        <Card className="border border-border bg-secondary/30 animate-fade-in">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {(activeTab === "working" ? workingSkills : exploredSkills).map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-background p-4 rounded-lg border border-border flex items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:border-primary"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {activeTab === "working" ? (
                    <Check size={16} className="text-primary flex-shrink-0" />
                  ) : (
                    <Star size={16} className="text-primary flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium truncate">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;

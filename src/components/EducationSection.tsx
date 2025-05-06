
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      duration: "2014 - 2016",
      description: "Specialized in Mobile Computing and Software Engineering with a focus on mobile application development paradigms and advanced algorithms."
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      duration: "2010 - 2014",
      description: "Graduated with honors. Focused on programming fundamentals, data structures, and software development methodologies."
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Mobile Developer - Specialty",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      id: 2,
      name: "Google Certified Mobile Web Specialist",
      issuer: "Google",
      year: "2021"
    },
    {
      id: 3,
      name: "iOS App Development with Swift",
      issuer: "Apple Developer Academy",
      year: "2019"
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education & Certifications" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <BookOpen className="text-primary" size={24} />
              Academic Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-xl mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4">{edu.duration}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary" 
                width="24" 
                height="24"
              >
                <path d="M17 3H7a2 2 0 0 0-2 2v14"></path>
                <path d="M12 17V7"></path>
                <path d="M17 17a5 5 0 0 0-5-5 5 5 0 0 0-5 5"></path>
                <path d="M12 7a2 2 0 0 0 2-2"></path>
                <path d="M10 5a2 2 0 0 1 2 2"></path>
              </svg>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.id} className="overflow-hidden">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                    <div className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                      {cert.year}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

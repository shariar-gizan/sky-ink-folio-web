
import { Fragment } from "react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Mobile Engineer",
      company: "TechInnovate Solutions",
      duration: "Jan 2021 - Present",
      description: [
        "Led the development of flagship mobile applications for iOS and Android using React Native.",
        "Implemented CI/CD pipelines reducing deployment time by 60%.",
        "Mentored junior engineers and conducted code reviews to maintain code quality.",
        "Collaborated with design and product teams to deliver features that increased user engagement by 40%."
      ],
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Jest"]
    },
    {
      id: 2,
      role: "Mobile Developer",
      company: "AppWorks Inc",
      duration: "Mar 2018 - Dec 2020",
      description: [
        "Developed and maintained 5+ mobile applications for various clients.",
        "Optimized app performance, reducing load time by 35%.",
        "Integrated payment gateways and third-party services.",
        "Participated in all stages of the app development lifecycle."
      ],
      technologies: ["Swift", "Kotlin", "RESTful APIs", "SQLite", "Firebase"]
    },
    {
      id: 3,
      role: "Junior App Developer",
      company: "Digital Crafters",
      duration: "Jun 2016 - Feb 2018",
      description: [
        "Assisted in developing mobile applications for small to medium businesses.",
        "Implemented UI/UX designs into functional app screens.",
        "Fixed bugs and improved application performance.",
        "Collaborated with senior developers to learn best practices."
      ],
      technologies: ["JavaScript", "React Native", "Java", "Objective-C", "Git"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading title="Work Experience" />
        
        <div className="mt-12 space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={cn(
                "relative grid md:grid-cols-2 gap-8 animate-fade-in",
                index % 2 === 0 ? "md:text-right" : ""
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
              
              {/* Content positioning based on index */}
              {index % 2 === 0 ? (
                <>
                  <div className={cn("md:pr-12 col-span-1", index % 2 === 0 ? "md:col-start-1" : "md:col-start-2")}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4 md:justify-end">
                          <h3 className="font-bold text-xl">{exp.role}</h3>
                          <Briefcase className="text-primary" size={20} />
                        </div>
                        
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.duration}</p>
                        
                        <ul className="space-y-2 list-disc list-inside md:list-outside text-gray-600 dark:text-gray-300">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:col-start-2 md:pl-12 hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="md:col-start-1 md:pr-12 hidden md:block"></div>
                  <div className="md:col-start-2 md:pl-12">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Briefcase className="text-primary" size={20} />
                          <h3 className="font-bold text-xl">{exp.role}</h3>
                        </div>
                        
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.duration}</p>
                        
                        <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

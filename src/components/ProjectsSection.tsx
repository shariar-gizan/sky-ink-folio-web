
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, Link, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "HealthTrackr",
      description: "A comprehensive health and fitness tracking mobile app with customizable workout plans, nutrition tracking, and social features.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Redux", "mobile"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 2,
      title: "TravelBuddy",
      description: "An all-in-one travel companion app that helps users plan trips, discover local attractions, and share experiences.",
      image: "/placeholder.svg",
      tags: ["Swift", "CoreData", "MapKit", "mobile"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 3,
      title: "E-Commerce Mobile App",
      description: "A feature-rich e-commerce mobile application with product recommendations, secure payment integration, and order tracking.",
      image: "/placeholder.svg",
      tags: ["Kotlin", "Android", "GraphQL", "mobile"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 4,
      title: "DevPortfolio",
      description: "A responsive developer portfolio template built with React and Tailwind CSS (like this one!)",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind", "web"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 5,
      title: "Task Management API",
      description: "RESTful API for task management applications with authentication, task CRUD operations, and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["Node.js", "Express", "MongoDB", "backend"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      id: 6,
      title: "ChatConnect",
      description: "Real-time messaging app with end-to-end encryption, multimedia sharing, and group chat functionality.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "mobile"],
      liveLink: "#",
      repoLink: "#"
    }
  ];
  
  const filters = [
    { value: "all", label: "All" },
    { value: "mobile", label: "Mobile" },
    { value: "web", label: "Web" },
    { value: "backend", label: "Backend" }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading title="Featured Projects" />
        
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={cn(
                "rounded-full",
                activeFilter === filter.value ? "bg-primary" : "border-primary text-primary hover:bg-primary/10"
              )}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <Folder className="text-primary" size={20} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.filter(tag => tag !== "mobile" && tag !== "web" && tag !== "backend").map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Link size={16} />
                    Demo
                  </a>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80" 
                  asChild
                >
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

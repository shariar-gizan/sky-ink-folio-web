
import SectionHeading from "./SectionHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Building Cross-platform Mobile Apps with React Native",
      excerpt: "Explore the benefits and challenges of using React Native for cross-platform mobile app development and learn best practices.",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "Mobile Development",
      link: "#"
    },
    {
      id: 2,
      title: "Optimizing Mobile App Performance: Tips and Tricks",
      excerpt: "Learn how to identify performance bottlenecks in your mobile apps and implement solutions for a smoother user experience.",
      date: "March 22, 2023",
      readTime: "12 min read",
      category: "Performance",
      link: "#"
    },
    {
      id: 3,
      title: "The Future of Mobile App Development: Trends to Watch",
      excerpt: "Discover emerging technologies and methodologies that are shaping the future of mobile application development.",
      date: "January 10, 2023",
      readTime: "10 min read",
      category: "Industry Trends",
      link: "#"
    },
    {
      id: 4,
      title: "Implementing Secure Authentication in Mobile Apps",
      excerpt: "A comprehensive guide to implementing secure user authentication in your mobile applications using modern best practices.",
      date: "November 5, 2022",
      readTime: "15 min read",
      category: "Security",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Latest Articles" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {blogs.map((blog, index) => (
            <Card 
              key={blog.id}
              className="overflow-hidden hover:border-primary transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <span>{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3">{blog.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <BookOpen size={16} />
                  <span>{blog.readTime}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={blog.link}>Read Article</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <a href="#">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

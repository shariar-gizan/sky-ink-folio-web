
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl md:text-2xl">
          <span className="text-primary">DEV</span>FOLIO
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col justify-center items-center md:hidden transition-opacity duration-300 z-50",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 items-center">
            {navItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={cn(
                  "text-xl font-medium hover:text-primary transition-colors duration-300",
                  isOpen && "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

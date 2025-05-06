
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-card text-card-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-xl">
              <span className="text-primary">DEV</span>FOLIO
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <p className="text-sm text-muted-foreground">
                Designed & Built with ❤️
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

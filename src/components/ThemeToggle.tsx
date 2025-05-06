
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update the HTML class when dark mode changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save the preference to local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Initialize the theme based on user preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Sun size={18} className={cn("text-foreground", isDarkMode && "hidden")} />
      <Moon size={18} className={cn("text-foreground", !isDarkMode && "hidden")} />
      <Switch 
        checked={isDarkMode}
        onCheckedChange={setIsDarkMode}
        aria-label="Toggle dark mode"
      />
    </div>
  );
};

export default ThemeToggle;

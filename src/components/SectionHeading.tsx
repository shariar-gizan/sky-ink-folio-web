
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading = ({ title, className }: SectionHeadingProps) => {
  return (
    <h2 className={cn("heading animate-fade-in", className)}>
      {title}
    </h2>
  );
};

export default SectionHeading;

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  index: number;
}

const ProjectCard = ({ title, description, url, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block"
    >
      <div className="glass-card p-8 hover-lift h-full">
        {/* Card number */}
        <span className="absolute top-6 right-6 text-6xl font-heading font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
          0{index + 1}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          <p className="text-muted-foreground mb-6">
            {description}
          </p>

          {/* Hover line */}
          <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;